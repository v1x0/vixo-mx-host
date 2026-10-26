import { loadMfeRegistry } from './index';

const VALID = {
  remoteName: 'customers-mfe',
  exposedModule: './Routes',
  path: 'customers',
  title: 'Clientes',
  icon: 'groups',
  roles: ['Administrator'],
};

const respond = (body: unknown, ok = true) =>
  vi.fn().mockResolvedValue({ ok, status: ok ? 200 : 500, json: () => Promise.resolve(body) }) as unknown as typeof fetch;

describe('loadMfeRegistry', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  it('should return the valid entries', async () => {
    expect(await loadMfeRegistry('mfe.registry.json', respond([VALID]))).toEqual([VALID]);
  });

  it('should drop malformed entries and unknown roles', async () => {
    const entries = await loadMfeRegistry(
      'x',
      respond([VALID, { path: 'roto' }, { ...VALID, path: 'otro', roles: ['SuperUser'] }]),
    );

    expect(entries.map((entry) => entry.path)).toEqual(['customers']);
  });

  it('should return an empty registry when the request fails', async () => {
    expect(await loadMfeRegistry('x', respond(null, false))).toEqual([]);
    expect(await loadMfeRegistry('x', vi.fn().mockRejectedValue(new Error('offline')))).toEqual([]);
  });
});

describe('loadMfeRegistry paths', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  it('should drop entries that collide with shell routes or with another entry', async () => {
    const entries = await loadMfeRegistry(
      'x',
      respond([VALID, { ...VALID, title: 'Duplicado' }, { ...VALID, path: 'auth' }, { ...VALID, path: 'a/b' }]),
    );

    expect(entries).toEqual([VALID]);
  });
});
