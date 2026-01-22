import { d as Re, g as Pe, h as Me } from "@nf-internal/chunk-S56HBTK5";
import { a as J, c as be, d as re } from "@nf-internal/chunk-4CLCTAJ7";
import * as d from "@angular/core";
import { \u0275RuntimeError as D, InjectionToken as k, inject as T, NgZone as dr, DestroyRef as lr, \u0275formatRuntimeError as dt, \u0275TracingService as ur, runInInjectionContext as ae, PendingTasks as xe, DOCUMENT as Fe, EnvironmentInjector as hr, makeEnvironmentProviders as fr } from "@angular/core";
import { switchMap as pr, finalize as je, concatMap as yr, filter as mr, map as V } from "rxjs/operators";
import { Observable as ce, from as gr, of as Le } from "rxjs";
var b = class e {
    headers;
    normalizedNames = new Map;
    lazyInit;
    lazyUpdate = null;
    constructor(t) {
        t ? typeof t == "string" ? this.lazyInit = () => {
            this.headers = new Map, t.split(`
`).forEach(r => { let n = r.indexOf(":"); if (n > 0) {
                let o = r.slice(0, n), s = r.slice(n + 1).trim();
                this.addHeaderEntry(o, s);
            } });
        } : typeof Headers < "u" && t instanceof Headers ? (this.headers = new Map, t.forEach((r, n) => { this.addHeaderEntry(n, r); })) : this.lazyInit = () => { this.headers = new Map, Object.entries(t).forEach(([r, n]) => { this.setHeaderEntries(r, n); }); } : this.headers = new Map;
    }
    has(t) { return this.init(), this.headers.has(t.toLowerCase()); }
    get(t) { this.init(); let r = this.headers.get(t.toLowerCase()); return r && r.length > 0 ? r[0] : null; }
    keys() { return this.init(), Array.from(this.normalizedNames.values()); }
    getAll(t) { return this.init(), this.headers.get(t.toLowerCase()) || null; }
    append(t, r) { return this.clone({ name: t, value: r, op: "a" }); }
    set(t, r) { return this.clone({ name: t, value: r, op: "s" }); }
    delete(t, r) { return this.clone({ name: t, value: r, op: "d" }); }
    maybeSetNormalizedName(t, r) { this.normalizedNames.has(r) || this.normalizedNames.set(r, t); }
    init() { this.lazyInit && (this.lazyInit instanceof e ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(t => this.applyUpdate(t)), this.lazyUpdate = null)); }
    copyFrom(t) { t.init(), Array.from(t.headers.keys()).forEach(r => { this.headers.set(r, t.headers.get(r)), this.normalizedNames.set(r, t.normalizedNames.get(r)); }); }
    clone(t) { let r = new e; return r.lazyInit = this.lazyInit && this.lazyInit instanceof e ? this.lazyInit : this, r.lazyUpdate = (this.lazyUpdate || []).concat([t]), r; }
    applyUpdate(t) { let r = t.name.toLowerCase(); switch (t.op) {
        case "a":
        case "s":
            let n = t.value;
            if (typeof n == "string" && (n = [n]), n.length === 0)
                return;
            this.maybeSetNormalizedName(t.name, r);
            let o = (t.op === "a" ? this.headers.get(r) : void 0) || [];
            o.push(...n), this.headers.set(r, o);
            break;
        case "d":
            let s = t.value;
            if (!s)
                this.headers.delete(r), this.normalizedNames.delete(r);
            else {
                let i = this.headers.get(r);
                if (!i)
                    return;
                i = i.filter(c => s.indexOf(c) === -1), i.length === 0 ? (this.headers.delete(r), this.normalizedNames.delete(r)) : this.headers.set(r, i);
            }
            break;
    } }
    addHeaderEntry(t, r) { let n = t.toLowerCase(); this.maybeSetNormalizedName(t, n), this.headers.has(n) ? this.headers.get(n).push(r) : this.headers.set(n, [r]); }
    setHeaderEntries(t, r) { let n = (Array.isArray(r) ? r : [r]).map(s => s.toString()), o = t.toLowerCase(); this.headers.set(o, n), this.maybeSetNormalizedName(t, o); }
    forEach(t) { this.init(), Array.from(this.normalizedNames.keys()).forEach(r => t(this.normalizedNames.get(r), this.headers.get(r))); }
};
var ne = class {
    defaultValue;
    constructor(t) { this.defaultValue = t; }
}, W = class {
    map = new Map;
    set(t, r) { return this.map.set(t, r), this; }
    get(t) { return this.map.has(t) || this.map.set(t, t.defaultValue()), this.map.get(t); }
    delete(t) { return this.map.delete(t), this; }
    has(t) { return this.map.has(t); }
    keys() { return this.map.keys(); }
}, K = class {
    encodeKey(t) { return Ne(t); }
    encodeValue(t) { return Ne(t); }
    decodeKey(t) { return decodeURIComponent(t); }
    decodeValue(t) { return decodeURIComponent(t); }
};
function Tr(e, t) { let r = new Map; return e.length > 0 && e.replace(/^\?/, "").split("&").forEach(o => { let s = o.indexOf("="), [i, c] = s == -1 ? [t.decodeKey(o), ""] : [t.decodeKey(o.slice(0, s)), t.decodeValue(o.slice(s + 1))], a = r.get(i) || []; a.push(c), r.set(i, a); }), r; }
var vr = /%(\d[a-f0-9])/gi, wr = { 40: "@", "3A": ":", 24: "$", "2C": ",", "3B": ";", "3D": "=", "3F": "?", "2F": "/" };
function Ne(e) { return encodeURIComponent(e).replace(vr, (t, r) => wr[r] ?? t); }
function $(e) { return `${e}`; }
var M = class e {
    map;
    encoder;
    updates = null;
    cloneFrom = null;
    constructor(t = {}) { if (this.encoder = t.encoder || new K, t.fromString) {
        if (t.fromObject)
            throw new D(2805, !1);
        this.map = Tr(t.fromString, this.encoder);
    }
    else
        t.fromObject ? (this.map = new Map, Object.keys(t.fromObject).forEach(r => { let n = t.fromObject[r], o = Array.isArray(n) ? n.map($) : [$(n)]; this.map.set(r, o); })) : this.map = null; }
    has(t) { return this.init(), this.map.has(t); }
    get(t) { this.init(); let r = this.map.get(t); return r ? r[0] : null; }
    getAll(t) { return this.init(), this.map.get(t) || null; }
    keys() { return this.init(), Array.from(this.map.keys()); }
    append(t, r) { return this.clone({ param: t, value: r, op: "a" }); }
    appendAll(t) { let r = []; return Object.keys(t).forEach(n => { let o = t[n]; Array.isArray(o) ? o.forEach(s => { r.push({ param: n, value: s, op: "a" }); }) : r.push({ param: n, value: o, op: "a" }); }), this.clone(r); }
    set(t, r) { return this.clone({ param: t, value: r, op: "s" }); }
    delete(t, r) { return this.clone({ param: t, value: r, op: "d" }); }
    toString() { return this.init(), this.keys().map(t => { let r = this.encoder.encodeKey(t); return this.map.get(t).map(n => r + "=" + this.encoder.encodeValue(n)).join("&"); }).filter(t => t !== "").join("&"); }
    clone(t) { let r = new e({ encoder: this.encoder }); return r.cloneFrom = this.cloneFrom || this, r.updates = (this.updates || []).concat(t), r; }
    init() { this.map === null && (this.map = new Map), this.cloneFrom !== null && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(t => this.map.set(t, this.cloneFrom.map.get(t))), this.updates.forEach(t => { switch (t.op) {
        case "a":
        case "s":
            let r = (t.op === "a" ? this.map.get(t.param) : void 0) || [];
            r.push($(t.value)), this.map.set(t.param, r);
            break;
        case "d": if (t.value !== void 0) {
            let n = this.map.get(t.param) || [], o = n.indexOf($(t.value));
            o !== -1 && n.splice(o, 1), n.length > 0 ? this.map.set(t.param, n) : this.map.delete(t.param);
        }
        else {
            this.map.delete(t.param);
            break;
        }
    } }), this.cloneFrom = this.updates = null); }
};
function Er(e) { switch (e) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP": return !1;
    default: return !0;
} }
function Oe(e) { return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer; }
function De(e) { return typeof Blob < "u" && e instanceof Blob; }
function Ie(e) { return typeof FormData < "u" && e instanceof FormData; }
function br(e) { return typeof URLSearchParams < "u" && e instanceof URLSearchParams; }
var B = "Content-Type", Y = "Accept", Ce = "text/plain", Ue = "application/json", Be = `${Ue}, ${Ce}, */*`, F = class e {
    url;
    body = null;
    headers;
    context;
    reportProgress = !1;
    withCredentials = !1;
    credentials;
    keepalive = !1;
    cache;
    priority;
    mode;
    redirect;
    referrer;
    integrity;
    referrerPolicy;
    responseType = "json";
    method;
    params;
    urlWithParams;
    transferCache;
    timeout;
    constructor(t, r, n, o) { this.url = r, this.method = t.toUpperCase(); let s; if (Er(this.method) || o ? (this.body = n !== void 0 ? n : null, s = o) : s = n, s) {
        if (this.reportProgress = !!s.reportProgress, this.withCredentials = !!s.withCredentials, this.keepalive = !!s.keepalive, s.responseType && (this.responseType = s.responseType), s.headers && (this.headers = s.headers), s.context && (this.context = s.context), s.params && (this.params = s.params), s.priority && (this.priority = s.priority), s.cache && (this.cache = s.cache), s.credentials && (this.credentials = s.credentials), typeof s.timeout == "number") {
            if (s.timeout < 1 || !Number.isInteger(s.timeout))
                throw new D(2822, "");
            this.timeout = s.timeout;
        }
        s.mode && (this.mode = s.mode), s.redirect && (this.redirect = s.redirect), s.integrity && (this.integrity = s.integrity), s.referrer && (this.referrer = s.referrer), s.referrerPolicy && (this.referrerPolicy = s.referrerPolicy), this.transferCache = s.transferCache;
    } if (this.headers ??= new b, this.context ??= new W, !this.params)
        this.params = new M, this.urlWithParams = r;
    else {
        let i = this.params.toString();
        if (i.length === 0)
            this.urlWithParams = r;
        else {
            let c = r.indexOf("?"), a = c === -1 ? "?" : c < r.length - 1 ? "&" : "";
            this.urlWithParams = r + a + i;
        }
    } }
    serializeBody() { return this.body === null ? null : typeof this.body == "string" || Oe(this.body) || De(this.body) || Ie(this.body) || br(this.body) ? this.body : this.body instanceof M ? this.body.toString() : typeof this.body == "object" || typeof this.body == "boolean" || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString(); }
    detectContentTypeHeader() { return this.body === null || Ie(this.body) ? null : De(this.body) ? this.body.type || null : Oe(this.body) ? null : typeof this.body == "string" ? Ce : this.body instanceof M ? "application/x-www-form-urlencoded;charset=UTF-8" : typeof this.body == "object" || typeof this.body == "number" || typeof this.body == "boolean" ? Ue : null; }
    clone(t = {}) { let r = t.method || this.method, n = t.url || this.url, o = t.responseType || this.responseType, s = t.keepalive ?? this.keepalive, i = t.priority || this.priority, c = t.cache || this.cache, a = t.mode || this.mode, p = t.redirect || this.redirect, y = t.credentials || this.credentials, g = t.referrer || this.referrer, v = t.integrity || this.integrity, R = t.referrerPolicy || this.referrerPolicy, m = t.transferCache ?? this.transferCache, l = t.timeout ?? this.timeout, u = t.body !== void 0 ? t.body : this.body, h = t.withCredentials ?? this.withCredentials, w = t.reportProgress ?? this.reportProgress, N = t.headers || this.headers, f = t.params || this.params, O = t.context ?? this.context; return t.setHeaders !== void 0 && (N = Object.keys(t.setHeaders).reduce((x, I) => x.set(I, t.setHeaders[I]), N)), t.setParams && (f = Object.keys(t.setParams).reduce((x, I) => x.set(I, t.setParams[I]), f)), new e(r, n, u, { params: f, headers: N, context: O, reportProgress: w, responseType: o, withCredentials: h, transferCache: m, keepalive: s, cache: c, priority: i, timeout: l, mode: a, redirect: p, credentials: y, referrer: g, integrity: v, referrerPolicy: R }); }
}, P = (function (e) { return e[e.Sent = 0] = "Sent", e[e.UploadProgress = 1] = "UploadProgress", e[e.ResponseHeader = 2] = "ResponseHeader", e[e.DownloadProgress = 3] = "DownloadProgress", e[e.Response = 4] = "Response", e[e.User = 5] = "User", e; })(P || {}), L = class {
    headers;
    status;
    statusText;
    url;
    ok;
    type;
    redirected;
    responseType;
    constructor(t, r = 200, n = "OK") { this.headers = t.headers || new b, this.status = t.status !== void 0 ? t.status : r, this.statusText = t.statusText || n, this.url = t.url || null, this.redirected = t.redirected, this.responseType = t.responseType, this.ok = this.status >= 200 && this.status < 300; }
}, S = class e extends L {
    constructor(t = {}) { super(t); }
    type = P.ResponseHeader;
    clone(t = {}) { return new e({ headers: t.headers || this.headers, status: t.status !== void 0 ? t.status : this.status, statusText: t.statusText || this.statusText, url: t.url || this.url || void 0 }); }
}, A = class e extends L {
    body;
    constructor(t = {}) { super(t), this.body = t.body !== void 0 ? t.body : null; }
    type = P.Response;
    clone(t = {}) { return new e({ body: t.body !== void 0 ? t.body : this.body, headers: t.headers || this.headers, status: t.status !== void 0 ? t.status : this.status, statusText: t.statusText || this.statusText, url: t.url || this.url || void 0, redirected: t.redirected ?? this.redirected, responseType: t.responseType ?? this.responseType }); }
}, E = class extends L {
    name = "HttpErrorResponse";
    message;
    error;
    ok = !1;
    constructor(t) { super(t, 0, "Unknown Error"), this.status >= 200 && this.status < 300 ? this.message = `Http failure during parsing for ${t.url || "(unknown url)"}` : this.message = `Http failure response for ${t.url || "(unknown url)"}: ${t.status} ${t.statusText}`, this.error = t.error || null; }
}, de = 200, Rr = 204, Se = (function (e) { return e[e.Continue = 100] = "Continue", e[e.SwitchingProtocols = 101] = "SwitchingProtocols", e[e.Processing = 102] = "Processing", e[e.EarlyHints = 103] = "EarlyHints", e[e.Ok = 200] = "Ok", e[e.Created = 201] = "Created", e[e.Accepted = 202] = "Accepted", e[e.NonAuthoritativeInformation = 203] = "NonAuthoritativeInformation", e[e.NoContent = 204] = "NoContent", e[e.ResetContent = 205] = "ResetContent", e[e.PartialContent = 206] = "PartialContent", e[e.MultiStatus = 207] = "MultiStatus", e[e.AlreadyReported = 208] = "AlreadyReported", e[e.ImUsed = 226] = "ImUsed", e[e.MultipleChoices = 300] = "MultipleChoices", e[e.MovedPermanently = 301] = "MovedPermanently", e[e.Found = 302] = "Found", e[e.SeeOther = 303] = "SeeOther", e[e.NotModified = 304] = "NotModified", e[e.UseProxy = 305] = "UseProxy", e[e.Unused = 306] = "Unused", e[e.TemporaryRedirect = 307] = "TemporaryRedirect", e[e.PermanentRedirect = 308] = "PermanentRedirect", e[e.BadRequest = 400] = "BadRequest", e[e.Unauthorized = 401] = "Unauthorized", e[e.PaymentRequired = 402] = "PaymentRequired", e[e.Forbidden = 403] = "Forbidden", e[e.NotFound = 404] = "NotFound", e[e.MethodNotAllowed = 405] = "MethodNotAllowed", e[e.NotAcceptable = 406] = "NotAcceptable", e[e.ProxyAuthenticationRequired = 407] = "ProxyAuthenticationRequired", e[e.RequestTimeout = 408] = "RequestTimeout", e[e.Conflict = 409] = "Conflict", e[e.Gone = 410] = "Gone", e[e.LengthRequired = 411] = "LengthRequired", e[e.PreconditionFailed = 412] = "PreconditionFailed", e[e.PayloadTooLarge = 413] = "PayloadTooLarge", e[e.UriTooLong = 414] = "UriTooLong", e[e.UnsupportedMediaType = 415] = "UnsupportedMediaType", e[e.RangeNotSatisfiable = 416] = "RangeNotSatisfiable", e[e.ExpectationFailed = 417] = "ExpectationFailed", e[e.ImATeapot = 418] = "ImATeapot", e[e.MisdirectedRequest = 421] = "MisdirectedRequest", e[e.UnprocessableEntity = 422] = "UnprocessableEntity", e[e.Locked = 423] = "Locked", e[e.FailedDependency = 424] = "FailedDependency", e[e.TooEarly = 425] = "TooEarly", e[e.UpgradeRequired = 426] = "UpgradeRequired", e[e.PreconditionRequired = 428] = "PreconditionRequired", e[e.TooManyRequests = 429] = "TooManyRequests", e[e.RequestHeaderFieldsTooLarge = 431] = "RequestHeaderFieldsTooLarge", e[e.UnavailableForLegalReasons = 451] = "UnavailableForLegalReasons", e[e.InternalServerError = 500] = "InternalServerError", e[e.NotImplemented = 501] = "NotImplemented", e[e.BadGateway = 502] = "BadGateway", e[e.ServiceUnavailable = 503] = "ServiceUnavailable", e[e.GatewayTimeout = 504] = "GatewayTimeout", e[e.HttpVersionNotSupported = 505] = "HttpVersionNotSupported", e[e.VariantAlsoNegotiates = 506] = "VariantAlsoNegotiates", e[e.InsufficientStorage = 507] = "InsufficientStorage", e[e.LoopDetected = 508] = "LoopDetected", e[e.NotExtended = 510] = "NotExtended", e[e.NetworkAuthenticationRequired = 511] = "NetworkAuthenticationRequired", e; })(Se || {}), Pr = /^\)\]\}',?\n/, ze = new k(""), G = (() => { class e {
    fetchImpl = T(oe, { optional: !0 })?.fetch ?? ((...r) => globalThis.fetch(...r));
    ngZone = T(dr);
    destroyRef = T(lr);
    handle(r) { return new ce(n => { let o = new AbortController; this.doRequest(r, o.signal, n).then(se, i => n.error(new E({ error: i }))); let s; return r.timeout && (s = this.ngZone.runOutsideAngular(() => setTimeout(() => { o.signal.aborted || o.abort(new DOMException("signal timed out", "TimeoutError")); }, r.timeout))), () => { s !== void 0 && clearTimeout(s), o.abort(); }; }); }
    doRequest(r, n, o) { return re(this, null, function* () { let s = this.createRequestInit(r), i; try {
        let l = this.ngZone.runOutsideAngular(() => this.fetchImpl(r.urlWithParams, J({ signal: n }, s)));
        Mr(l), o.next({ type: P.Sent }), i = yield l;
    }
    catch (l) {
        o.error(new E({ error: l, status: l.status ?? 0, statusText: l.statusText, url: r.urlWithParams, headers: l.headers }));
        return;
    } let c = new b(i.headers), a = i.statusText, p = i.url || r.urlWithParams, y = i.status, g = null; if (r.reportProgress && o.next(new S({ headers: c, status: y, statusText: a, url: p })), i.body) {
        let l = i.headers.get("content-length"), u = [], h = i.body.getReader(), w = 0, N, f, O = typeof Zone < "u" && Zone.current, x = !1;
        if (yield this.ngZone.runOutsideAngular(() => re(this, null, function* () { for (;;) {
            if (this.destroyRef.destroyed) {
                yield h.cancel(), x = !0;
                break;
            }
            let { done: U, value: ee } = yield h.read();
            if (U)
                break;
            if (u.push(ee), w += ee.length, r.reportProgress) {
                f = r.responseType === "text" ? (f ?? "") + (N ??= new TextDecoder).decode(ee, { stream: !0 }) : void 0;
                let Ee = () => o.next({ type: P.DownloadProgress, total: l ? +l : void 0, loaded: w, partialText: f });
                O ? O.run(Ee) : Ee();
            }
        } })), x) {
            o.complete();
            return;
        }
        let I = this.concatChunks(u, w);
        try {
            let U = i.headers.get(B) ?? "";
            g = this.parseBody(r, I, U, y);
        }
        catch (U) {
            o.error(new E({ error: U, headers: new b(i.headers), status: i.status, statusText: i.statusText, url: i.url || r.urlWithParams }));
            return;
        }
    } y === 0 && (y = g ? de : 0); let v = y >= 200 && y < 300, R = i.redirected, m = i.type; v ? (o.next(new A({ body: g, headers: c, status: y, statusText: a, url: p, redirected: R, responseType: m })), o.complete()) : o.error(new E({ error: g, headers: c, status: y, statusText: a, url: p, redirected: R, responseType: m })); }); }
    parseBody(r, n, o, s) { switch (r.responseType) {
        case "json":
            let i = new TextDecoder().decode(n).replace(Pr, "");
            if (i === "")
                return null;
            try {
                return JSON.parse(i);
            }
            catch (c) {
                if (s < 200 || s >= 300)
                    return i;
                throw c;
            }
        case "text": return new TextDecoder().decode(n);
        case "blob": return new Blob([n], { type: o });
        case "arraybuffer": return n.buffer;
    } }
    createRequestInit(r) { let n = {}, o; if (o = r.credentials, r.withCredentials && (o = "include"), r.headers.forEach((s, i) => n[s] = i.join(",")), r.headers.has(Y) || (n[Y] = Be), !r.headers.has(B)) {
        let s = r.detectContentTypeHeader();
        s !== null && (n[B] = s);
    } return { body: r.serializeBody(), method: r.method, headers: n, credentials: o, keepalive: r.keepalive, cache: r.cache, priority: r.priority, mode: r.mode, redirect: r.redirect, referrer: r.referrer, integrity: r.integrity, referrerPolicy: r.referrerPolicy }; }
    concatChunks(r, n) { let o = new Uint8Array(n), s = 0; for (let i of r)
        o.set(i, s), s += i.length; return o; }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), oe = class {
};
function se() { }
function Mr(e) { e.then(se, se); }
var Nr = /^\)\]\}',?\n/;
var le = (() => { class e {
    xhrFactory;
    tracingService = T(ur, { optional: !0 });
    constructor(r) { this.xhrFactory = r; }
    maybePropagateTrace(r) { return this.tracingService?.propagate ? this.tracingService.propagate(r) : r; }
    handle(r) { if (r.method === "JSONP")
        throw new D(-2800, !1); let n = this.xhrFactory; return (typeof ngServerMode < "u" && ngServerMode && n.\u0275loadImpl ? gr(n.\u0275loadImpl()) : Le(null)).pipe(pr(() => new ce(s => { let i = n.build(); if (i.open(r.method, r.urlWithParams), r.withCredentials && (i.withCredentials = !0), r.headers.forEach((u, h) => i.setRequestHeader(u, h.join(","))), r.headers.has(Y) || i.setRequestHeader(Y, Be), !r.headers.has(B)) {
        let u = r.detectContentTypeHeader();
        u !== null && i.setRequestHeader(B, u);
    } if (r.timeout && (i.timeout = r.timeout), r.responseType) {
        let u = r.responseType.toLowerCase();
        i.responseType = u !== "json" ? u : "text";
    } let c = r.serializeBody(), a = null, p = () => { if (a !== null)
        return a; let u = i.statusText || "OK", h = new b(i.getAllResponseHeaders()), w = i.responseURL || r.url; return a = new S({ headers: h, status: i.status, statusText: u, url: w }), a; }, y = this.maybePropagateTrace(() => { let { headers: u, status: h, statusText: w, url: N } = p(), f = null; h !== Rr && (f = typeof i.response > "u" ? i.responseText : i.response), h === 0 && (h = f ? de : 0); let O = h >= 200 && h < 300; if (r.responseType === "json" && typeof f == "string") {
        let x = f;
        f = f.replace(Nr, "");
        try {
            f = f !== "" ? JSON.parse(f) : null;
        }
        catch (I) {
            f = x, O && (O = !1, f = { error: I, text: f });
        }
    } O ? (s.next(new A({ body: f, headers: u, status: h, statusText: w, url: N || void 0 })), s.complete()) : s.error(new E({ error: f, headers: u, status: h, statusText: w, url: N || void 0 })); }), g = this.maybePropagateTrace(u => { let { url: h } = p(), w = new E({ error: u, status: i.status || 0, statusText: i.statusText || "Unknown Error", url: h || void 0 }); s.error(w); }), v = g; r.timeout && (v = this.maybePropagateTrace(u => { let { url: h } = p(), w = new E({ error: new DOMException("Request timed out", "TimeoutError"), status: i.status || 0, statusText: i.statusText || "Request timeout", url: h || void 0 }); s.error(w); })); let R = !1, m = this.maybePropagateTrace(u => { R || (s.next(p()), R = !0); let h = { type: P.DownloadProgress, loaded: u.loaded }; u.lengthComputable && (h.total = u.total), r.responseType === "text" && i.responseText && (h.partialText = i.responseText), s.next(h); }), l = this.maybePropagateTrace(u => { let h = { type: P.UploadProgress, loaded: u.loaded }; u.lengthComputable && (h.total = u.total), s.next(h); }); return i.addEventListener("load", y), i.addEventListener("error", g), i.addEventListener("timeout", v), i.addEventListener("abort", g), r.reportProgress && (i.addEventListener("progress", m), c !== null && i.upload && i.upload.addEventListener("progress", l)), i.send(c), s.next({ type: P.Sent }), () => { i.removeEventListener("error", g), i.removeEventListener("abort", g), i.removeEventListener("load", y), i.removeEventListener("timeout", v), r.reportProgress && (i.removeEventListener("progress", m), c !== null && i.upload && i.upload.removeEventListener("progress", l)), i.readyState !== i.DONE && i.abort(); }; }))); }
    static \u0275fac = function (n) { return new (n || e)(d.\u0275\u0275inject(Me)); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function Xe(e, t) { return t(e); }
function Or(e, t) { return (r, n) => t.intercept(r, { handle: o => e(o, n) }); }
function Dr(e, t, r) { return (n, o) => ae(r, () => t(n, s => e(s, o))); }
var ue = new k(""), z = new k("", { factory: () => [] }), he = new k(""), fe = new k("", { factory: () => !0 });
function Ir() { let e = null; return (t, r) => { e === null && (e = (T(ue, { optional: !0 }) ?? []).reduceRight(Or, Xe)); let n = T(xe); if (T(fe)) {
    let s = n.add();
    return e(t, r).pipe(je(s));
}
else
    return e(t, r); }; }
var X = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: e, factory: function (n) { let o = null; return n ? o = new (n || e) : o = d.\u0275\u0275inject(le), o; }, providedIn: "root" });
} return e; })();
var Z = (() => { class e {
    backend;
    injector;
    chain = null;
    pendingTasks = T(xe);
    contributeToStability = T(fe);
    constructor(r, n) { this.backend = r, this.injector = n; }
    handle(r) { if (this.chain === null) {
        let n = Array.from(new Set([...this.injector.get(z), ...this.injector.get(he, [])]));
        this.chain = n.reduceRight((o, s) => Dr(o, s, this.injector), Xe);
    } if (this.contributeToStability) {
        let n = this.pendingTasks.add();
        return this.chain(r, o => this.backend.handle(o)).pipe(je(n));
    }
    else
        return this.chain(r, n => this.backend.handle(n)); }
    static \u0275fac = function (n) { return new (n || e)(d.\u0275\u0275inject(X), d.\u0275\u0275inject(d.EnvironmentInjector)); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), q = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: e, factory: function (n) { let o = null; return n ? o = new (n || e) : o = d.\u0275\u0275inject(Z), o; }, providedIn: "root" });
} return e; })();
function te(e, t) { return { body: t, headers: e.headers, context: e.context, observe: e.observe, params: e.params, reportProgress: e.reportProgress, responseType: e.responseType, withCredentials: e.withCredentials, credentials: e.credentials, transferCache: e.transferCache, timeout: e.timeout, keepalive: e.keepalive, priority: e.priority, cache: e.cache, mode: e.mode, redirect: e.redirect, integrity: e.integrity, referrer: e.referrer, referrerPolicy: e.referrerPolicy }; }
var pe = (() => { class e {
    handler;
    constructor(r) { this.handler = r; }
    request(r, n, o = {}) { let s; if (r instanceof F)
        s = r;
    else {
        let a;
        o.headers instanceof b ? a = o.headers : a = new b(o.headers);
        let p;
        o.params && (o.params instanceof M ? p = o.params : p = new M({ fromObject: o.params })), s = new F(r, n, o.body !== void 0 ? o.body : null, { headers: a, context: o.context, params: p, reportProgress: o.reportProgress, responseType: o.responseType || "json", withCredentials: o.withCredentials, transferCache: o.transferCache, keepalive: o.keepalive, priority: o.priority, cache: o.cache, mode: o.mode, redirect: o.redirect, credentials: o.credentials, referrer: o.referrer, referrerPolicy: o.referrerPolicy, integrity: o.integrity, timeout: o.timeout });
    } let i = Le(s).pipe(yr(a => this.handler.handle(a))); if (r instanceof F || o.observe === "events")
        return i; let c = i.pipe(mr(a => a instanceof A)); switch (o.observe || "body") {
        case "body": switch (s.responseType) {
            case "arraybuffer": return c.pipe(V(a => { if (a.body !== null && !(a.body instanceof ArrayBuffer))
                throw new D(2806, !1); return a.body; }));
            case "blob": return c.pipe(V(a => { if (a.body !== null && !(a.body instanceof Blob))
                throw new D(2807, !1); return a.body; }));
            case "text": return c.pipe(V(a => { if (a.body !== null && typeof a.body != "string")
                throw new D(2808, !1); return a.body; }));
            case "json":
            default: return c.pipe(V(a => a.body));
        }
        case "response": return c;
        default: throw new D(2809, !1);
    } }
    delete(r, n = {}) { return this.request("DELETE", r, n); }
    get(r, n = {}) { return this.request("GET", r, n); }
    head(r, n = {}) { return this.request("HEAD", r, n); }
    jsonp(r, n) { return this.request("JSONP", r, { params: new M().append(n, "JSONP_CALLBACK"), observe: "body", responseType: "json" }); }
    options(r, n = {}) { return this.request("OPTIONS", r, n); }
    patch(r, n, o = {}) { return this.request("PATCH", r, te(o, n)); }
    post(r, n, o = {}) { return this.request("POST", r, te(o, n)); }
    put(r, n, o = {}) { return this.request("PUT", r, te(o, n)); }
    static \u0275fac = function (n) { return new (n || e)(d.\u0275\u0275inject(q)); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), Ar = 0, Ae, kr = "JSONP injected script did not invoke callback.";
var Q = class {
};
function _r() { return typeof window == "object" ? window : {}; }
var ye = (() => { class e {
    callbackMap;
    document;
    resolvedPromise = Promise.resolve();
    constructor(r, n) { this.callbackMap = r, this.document = n; }
    nextCallback() { return `ng_jsonp_callback_${Ar++}`; }
    handle(r) { if (r.method !== "JSONP")
        throw new D(2810, !1); if (r.responseType !== "json")
        throw new D(2811, !1); if (r.headers.keys().length > 0)
        throw new D(2812, !1); return new ce(n => { let o = this.nextCallback(), s = r.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${o}$1`), i = this.document.createElement("script"); i.src = s; let c = null, a = !1; this.callbackMap[o] = v => { delete this.callbackMap[o], c = v, a = !0; }; let p = () => { i.removeEventListener("load", y), i.removeEventListener("error", g), i.remove(), delete this.callbackMap[o]; }, y = () => { this.resolvedPromise.then(() => { if (p(), !a) {
        n.error(new E({ url: s, status: 0, statusText: "JSONP Error", error: new Error(kr) }));
        return;
    } n.next(new A({ body: c, status: de, statusText: "OK", url: s })), n.complete(); }); }, g = v => { p(), n.error(new E({ error: v, status: 0, statusText: "JSONP Error", url: s })); }; return i.addEventListener("load", y), i.addEventListener("error", g), this.document.body.appendChild(i), n.next({ type: P.Sent }), () => { a || this.removeListeners(i), p(); }; }); }
    removeListeners(r) { Ae ??= this.document.implementation.createHTMLDocument(), Ae.adoptNode(r); }
    static \u0275fac = function (n) { return new (n || e)(d.\u0275\u0275inject(Q), d.\u0275\u0275inject(Fe)); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })();
function Je(e, t) { return e.method === "JSONP" ? T(ye).handle(e) : t(e); }
var xr = (() => { class e {
    injector;
    constructor(r) { this.injector = r; }
    intercept(r, n) { return ae(this.injector, () => Je(r, o => n.handle(o))); }
    static \u0275fac = function (n) { return new (n || e)(d.\u0275\u0275inject(d.EnvironmentInjector)); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), me = new k("", { factory: () => !0 }), Ve = "XSRF-TOKEN", $e = new k("", { factory: () => Ve }), Ge = "X-XSRF-TOKEN", We = new k("", { factory: () => Ge }), Ke = (() => { class e {
    cookieName = T($e);
    doc = T(Fe);
    lastCookieString = "";
    lastToken = null;
    parseCount = 0;
    getToken() { if (typeof ngServerMode < "u" && ngServerMode)
        return null; let r = this.doc.cookie || ""; return r !== this.lastCookieString && (this.parseCount++, this.lastToken = Pe(r, this.cookieName), this.lastCookieString = r), this.lastToken; }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), ge = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: e, factory: function (n) { let o = null; return n ? o = new (n || e) : o = d.\u0275\u0275inject(Ke), o; }, providedIn: "root" });
} return e; })();
function Ye(e, t) { if (!T(me) || e.method === "GET" || e.method === "HEAD")
    return t(e); try {
    let o = T(Re).href, { origin: s } = new URL(o), { origin: i } = new URL(e.url, s);
    if (s !== i)
        return t(e);
}
catch {
    return t(e);
} let r = T(ge).getToken(), n = T(We); return r != null && !e.headers.has(n) && (e = e.clone({ headers: e.headers.set(n, r) })), t(e); }
var ke = (() => { class e {
    injector = T(hr);
    intercept(r, n) { return ae(this.injector, () => Ye(r, o => n.handle(o))); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), _ = (function (e) { return e[e.Interceptors = 0] = "Interceptors", e[e.LegacyInterceptors = 1] = "LegacyInterceptors", e[e.CustomXsrfConfiguration = 2] = "CustomXsrfConfiguration", e[e.NoXsrfProtection = 3] = "NoXsrfProtection", e[e.JsonpSupport = 4] = "JsonpSupport", e[e.RequestsMadeViaParent = 5] = "RequestsMadeViaParent", e[e.Fetch = 6] = "Fetch", e; })(_ || {});
function j(e, t) { return { \u0275kind: e, \u0275providers: t }; }
function Ze(...e) { let t = [pe, Z, { provide: q, useExisting: Z }, { provide: X, useFactory: () => T(ze, { optional: !0 }) ?? T(le) }, { provide: z, useValue: Ye, multi: !0 }]; for (let r of e)
    t.push(...r.\u0275providers); return fr(t); }
function Fr(e) { return j(_.Interceptors, e.map(t => ({ provide: z, useValue: t, multi: !0 }))); }
var _e = new k("");
function Qe() { return j(_.LegacyInterceptors, [{ provide: _e, useFactory: Ir }, { provide: z, useExisting: _e, multi: !0 }]); }
function ie({ cookieName: e, headerName: t }) { let r = []; return e !== void 0 && r.push({ provide: $e, useValue: e }), t !== void 0 && r.push({ provide: We, useValue: t }), j(_.CustomXsrfConfiguration, r); }
function qe() { return j(_.NoXsrfProtection, [{ provide: me, useValue: !1 }]); }
function He() { return j(_.JsonpSupport, [ye, { provide: Q, useFactory: _r }, { provide: z, useValue: Je, multi: !0 }]); }
function jr() { return j(_.RequestsMadeViaParent, [{ provide: X, useFactory: () => T(q, { skipSelf: !0, optional: !0 }) }]); }
function Lr() { return j(_.Fetch, [G, { provide: ze, useExisting: G }, { provide: X, useExisting: G }]); }
var Cr = (() => { class e {
    static disable() { return { ngModule: e, providers: [qe().\u0275providers] }; }
    static withOptions(r = {}) { return { ngModule: e, providers: ie(r).\u0275providers }; }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = d.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = d.\u0275\u0275defineInjector({ providers: [ke, { provide: ue, useExisting: ke, multi: !0 }, { provide: ge, useClass: Ke }, ie({ cookieName: Ve, headerName: Ge }).\u0275providers, { provide: me, useValue: !0 }] });
} return e; })(), Ur = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = d.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = d.\u0275\u0275defineInjector({ providers: [Ze(Qe())] });
} return e; })(), Br = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = d.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = d.\u0275\u0275defineInjector({ providers: [He().\u0275providers] });
} return e; })();
import { inject as C, Injector as Sr, \u0275ResourceImpl as zr, linkedSignal as Te, computed as Xr, signal as Jr, \u0275encapsulateResourceError as Vr, \u0275RuntimeError as ar, InjectionToken as cr, \u0275performanceMarkFeature as $r, APP_BOOTSTRAP_LISTENER as Gr, ApplicationRef as Wr, TransferState as Kr, makeStateKey as Yr, \u0275truncateMiddle as bt, \u0275formatRuntimeError as Rt } from "@angular/core";
import { of as Zr } from "rxjs";
import { tap as Qr } from "rxjs/operators";
var Nt = (() => { let e = H("json"); return e.arrayBuffer = H("arraybuffer"), e.blob = H("blob"), e.text = H("text"), e; })();
function H(e) { return function (r, n) { let o = n?.injector ?? C(Sr); return new ve(o, () => qr(r, e), n?.defaultValue, n?.debugName, n?.parse, n?.equal); }; }
function qr(e, t) { let r = typeof e == "function" ? e() : e; if (r === void 0)
    return; typeof r == "string" && (r = { url: r }); let n = r.headers instanceof b ? r.headers : new b(r.headers), o = r.params instanceof M ? r.params : new M({ fromObject: r.params }); return new F(r.method ?? "GET", r.url, r.body ?? null, { headers: n, params: o, reportProgress: r.reportProgress, withCredentials: r.withCredentials, keepalive: r.keepalive, cache: r.cache, priority: r.priority, mode: r.mode, redirect: r.redirect, responseType: t, context: r.context, transferCache: r.transferCache, credentials: r.credentials, referrer: r.referrer, referrerPolicy: r.referrerPolicy, integrity: r.integrity, timeout: r.timeout }); }
var ve = class extends zr {
    client;
    _headers = Te({ source: this.extRequest, computation: () => { } });
    _progress = Te({ source: this.extRequest, computation: () => { } });
    _statusCode = Te({ source: this.extRequest, computation: () => { } });
    headers = Xr(() => this.status() === "resolved" || this.status() === "error" ? this._headers() : void 0);
    progress = this._progress.asReadonly();
    statusCode = this._statusCode.asReadonly();
    constructor(t, r, n, o, s, i) { super(r, ({ params: c, abortSignal: a }) => { let p, y = () => p.unsubscribe(); a.addEventListener("abort", y); let g = Jr({ value: void 0 }), v, R = new Promise(l => v = l), m = l => { g.set(l), v?.(g), v = void 0; }; return p = this.client.request(c).subscribe({ next: l => { switch (l.type) {
            case P.Response:
                this._headers.set(l.headers), this._statusCode.set(l.status);
                try {
                    m({ value: s ? s(l.body) : l.body });
                }
                catch (u) {
                    m({ error: Vr(u) });
                }
                break;
            case P.DownloadProgress:
                this._progress.set(l);
                break;
        } }, error: l => { l instanceof E && (this._headers.set(l.headers), this._statusCode.set(l.status)), m({ error: l }), a.removeEventListener("abort", y); }, complete: () => { v && m({ error: new ar(991, !1) }), a.removeEventListener("abort", y); } }), R; }, n, i, o, t), this.client = t.get(pe); }
    set(t) { super.set(t), this._headers.set(void 0), this._progress.set(void 0), this._statusCode.set(void 0); }
}, Hr = new cr(""), er = "b", rr = "h", tr = "s", nr = "st", or = "u", sr = "rt", we = new cr(""), et = ["GET", "HEAD"];
function rt(e, t) { let R = C(we), { isCacheActive: r } = R, n = be(R, ["isCacheActive"]), { transferCache: o, method: s } = e; if (!r || o === !1 || s === "POST" && !n.includePostRequests && !o || s !== "POST" && !et.includes(s) || !n.includeRequestsWithAuthHeaders && tt(e) || n.filter?.(e) === !1)
    return t(e); let i = C(Kr), c = C(Hr, { optional: !0 }); if (typeof ngServerMode < "u" && !ngServerMode && c)
    throw new ar(2803, !1); let a = typeof ngServerMode < "u" && ngServerMode && c ? it(e.url, c) : e.url, p = ot(e, a), y = i.get(p, null), g = n.includeHeaders; if (typeof o == "object" && o.includeHeaders && (g = o.includeHeaders), y) {
    let { [er]: m, [sr]: l, [rr]: u, [tr]: h, [nr]: w, [or]: N } = y, f = m;
    switch (l) {
        case "arraybuffer":
            f = new TextEncoder().encode(m).buffer;
            break;
        case "blob":
            f = new Blob([m]);
            break;
    }
    let O = new b(u);
    return Zr(new A({ body: f, headers: O, status: h, statusText: w, url: N }));
} let v = t(e); return typeof ngServerMode < "u" && ngServerMode ? v.pipe(Qr(m => { m instanceof A && i.set(p, { [er]: m.body, [rr]: nt(m.headers, g), [tr]: m.status, [nr]: m.statusText, [or]: a, [sr]: e.responseType }); })) : v; }
function tt(e) { return e.headers.has("authorization") || e.headers.has("proxy-authorization"); }
function nt(e, t) { if (!t)
    return {}; let r = {}; for (let n of t) {
    let o = e.getAll(n);
    o !== null && (r[n] = o);
} return r; }
function ir(e) { return [...e.keys()].sort().map(t => `${t}=${e.getAll(t)}`).join("&"); }
function ot(e, t) { let { params: r, method: n, responseType: o } = e, s = ir(r), i = e.serializeBody(); i instanceof URLSearchParams ? i = ir(i) : typeof i != "string" && (i = ""); let c = [n, o, t, i, s].join("|"), a = st(c); return Yr(a); }
function st(e) { let t = 0; for (let r of e)
    t = Math.imul(31, t) + r.charCodeAt(0) << 0; return t += 2147483648, t.toString(); }
function Ot(e) { return [{ provide: we, useFactory: () => ($r("NgHttpTransferCache"), J({ isCacheActive: !0 }, e)) }, { provide: he, useValue: rt, multi: !0 }, { provide: Gr, multi: !0, useFactory: () => { let t = C(Wr), r = C(we); return () => { t.whenStable().then(() => { r.isCacheActive = !1; }); }; } }]; }
function it(e, t) { let r = new URL(e, "resolve://").origin, n = t[r]; return n ? e.replace(r, n) : e; }
export { G as FetchBackend, ue as HTTP_INTERCEPTORS, Hr as HTTP_TRANSFER_CACHE_ORIGIN_MAP, X as HttpBackend, pe as HttpClient, Br as HttpClientJsonpModule, Ur as HttpClientModule, Cr as HttpClientXsrfModule, W as HttpContext, ne as HttpContextToken, E as HttpErrorResponse, P as HttpEventType, _ as HttpFeatureKind, q as HttpHandler, S as HttpHeaderResponse, b as HttpHeaders, M as HttpParams, F as HttpRequest, A as HttpResponse, L as HttpResponseBase, Se as HttpStatusCode, K as HttpUrlEncodingCodec, le as HttpXhrBackend, ge as HttpXsrfTokenExtractor, ye as JsonpClientBackend, xr as JsonpInterceptor, Nt as httpResource, Ze as provideHttpClient, Lr as withFetch, Fr as withInterceptors, Qe as withInterceptorsFromDi, He as withJsonpSupport, qe as withNoXsrfProtection, jr as withRequestsMadeViaParent, ie as withXsrfConfiguration, he as \u0275HTTP_ROOT_INTERCEPTOR_FNS, Z as \u0275HttpInterceptingHandler, fe as \u0275REQUESTS_CONTRIBUTE_TO_STABILITY, Ot as \u0275withHttpTransferCache };
/*! Bundled license information:

@angular/common/fesm2022/_module-chunk.mjs:
@angular/common/fesm2022/http.mjs:
  (**
   * @license Angular v21.1.0
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
