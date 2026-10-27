// Development-only mock of the BFF authentication contract (shell/06-authentication).
// Never deployed: the shell reaches it through proxy.conf.json. Test users are valid only here.
import { createServer } from 'node:http';
import { randomUUID } from 'node:crypto';

const PORT = Number(process.env.MOCK_BFF_PORT ?? 4300);
const COOKIE = 'mock_bff_session';

/** username → roles. Password for every test user: "test". */
const USERS = {
  admin: ['Administrator'],
  manager: ['Manager'],
  editor: ['Editor'],
  viewer: ['Viewer'],
};

/** sessionId → { username, roles, csrfToken } */
const sessions = new Map();

const send = (res, status, body, headers = {}) => {
  res.writeHead(status, { 'Content-Type': 'application/json', ...headers });
  res.end(body === undefined ? undefined : JSON.stringify(body));
};

const readBody = (req) =>
  new Promise((resolve) => {
    let data = '';
    req.on('data', (chunk) => (data += chunk));
    req.on('end', () => {
      try {
        resolve(JSON.parse(data || '{}'));
      } catch {
        resolve({});
      }
    });
  });

const sessionOf = (req) => {
  const id = /(?:^|;\s*)mock_bff_session=([^;]+)/.exec(req.headers.cookie ?? '')?.[1];
  return id ? { id, session: sessions.get(id) } : {};
};

createServer(async (req, res) => {
  const { id, session } = sessionOf(req);
  const route = `${req.method} ${req.url?.split('?')[0]}`;

  if (req.method !== 'GET' && route !== 'POST /bff/auth/login' && route !== 'POST /bff/auth/password-reset') {
    if (!session || req.headers['x-csrf-token'] !== session.csrfToken) {
      return send(res, session ? 403 : 401, { error: 'CSRF token missing or invalid' });
    }
  }

  switch (route) {
    case 'POST /bff/auth/login': {
      const { username, password } = await readBody(req);
      const roles = USERS[username];
      if (!roles || password !== 'test') return send(res, 401, { error: 'Invalid credentials' });
      const sessionId = randomUUID();
      sessions.set(sessionId, { username, roles, csrfToken: randomUUID() });
      return send(res, 204, undefined, {
        'Set-Cookie': `${COOKIE}=${sessionId}; HttpOnly; SameSite=Strict; Path=/`,
      });
    }
    case 'GET /bff/auth/session':
      return session ? send(res, 200, session) : send(res, 401, { error: 'No session' });
    case 'POST /bff/auth/logout':
      sessions.delete(id);
      return send(res, 204, undefined, { 'Set-Cookie': `${COOKIE}=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0` });
    case 'POST /bff/auth/password-reset':
      return send(res, 202, undefined);
    default:
      return send(res, 404, { error: 'Not found' });
  }
}).listen(PORT, () => console.log(`Mock BFF on http://localhost:${PORT} (users: ${Object.keys(USERS).join(', ')})`));
