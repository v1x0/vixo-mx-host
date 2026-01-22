import { a as h, b as E, d as R } from "@nf-internal/chunk-4CLCTAJ7";
import { DOCUMENT as jn, Location as Qt } from "@angular/common";
import * as y from "@angular/core";
import { \u0275isPromise as kn, computed as $n, \u0275RuntimeError as A, InjectionToken as J, EventEmitter as He, input as zn, inject as g, ViewContainerRef as Fn, ChangeDetectorRef as qn, reflectComponentType as Bn, runInInjectionContext as P, \u0275isInjectable as Hn, \u0275isNgModule as _s, isStandalone as Ls, createEnvironmentInjector as Vn, Compiler as Gn, NgModuleFactory as Wn, afterNextRender as Qn, signal as mr, EnvironmentInjector as Kt, DestroyRef as Kn, untracked as Te, \u0275Console as Yn, \u0275PendingTasksInternal as Zn, \u0275INTERNAL_APPLICATION_ERROR_HANDLER as Jn, \u0275formatRuntimeError as Xn } from "@angular/core";
import { isObservable as Ar, from as K, of as v, BehaviorSubject as x, combineLatest as Tr, EmptyError as ei, Observable as ti, concat as ri, defer as Yt, pipe as ni, EMPTY as L, throwError as ii, Subject as Dt, Subscription as oi } from "rxjs";
import { first as le, map as T, switchMap as G, take as De, startWith as si, filter as Oe, takeUntil as Ot, mergeMap as se, concatMap as Mr, tap as W, takeLast as Nr, catchError as Dr, finalize as ai } from "rxjs/operators";
import * as Or from "@angular/platform-browser";
var p = "primary", je = Symbol("RouteTitle"), Ut = class {
    params;
    constructor(n) { this.params = n || {}; }
    has(n) { return Object.prototype.hasOwnProperty.call(this.params, n); }
    get(n) { if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e[0] : e;
    } return null; }
    getAll(n) { if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e : [e];
    } return []; }
    get keys() { return Object.keys(this.params); }
};
function ae(t) { return new Ut(t); }
function At(t, n, e) { for (let r = 0; r < t.length; r++) {
    let i = t[r], o = n[r];
    if (i[0] === ":")
        e[i.substring(1)] = o;
    else if (i !== o.path)
        return !1;
} return !0; }
function Ur(t, n, e) { let r = e.path.split("/"), i = r.indexOf("**"); if (i === -1) {
    if (r.length > t.length || e.pathMatch === "full" && (n.hasChildren() || r.length < t.length))
        return null;
    let c = {}, u = t.slice(0, r.length);
    return At(r, u, c) ? { consumed: u, posParams: c } : null;
} if (i !== r.lastIndexOf("**"))
    return null; let o = r.slice(0, i), s = r.slice(i + 1); if (o.length + s.length > t.length || e.pathMatch === "full" && n.hasChildren() && e.path !== "**")
    return null; let a = {}; return !At(o, t.slice(0, o.length), a) || !At(s, t.slice(t.length - s.length), a) ? null : { consumed: t, posParams: a }; }
function Ye(t) { return new Promise((n, e) => { t.pipe(le()).subscribe({ next: r => n(r), error: r => e(r) }); }); }
function ci(t, n) { if (t.length !== n.length)
    return !1; for (let e = 0; e < t.length; ++e)
    if (!$(t[e], n[e]))
        return !1; return !0; }
function $(t, n) { let e = t ? Pt(t) : void 0, r = n ? Pt(n) : void 0; if (!e || !r || e.length != r.length)
    return !1; let i; for (let o = 0; o < e.length; o++)
    if (i = e[o], !Pr(t[i], n[i]))
        return !1; return !0; }
function Pt(t) { return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)]; }
function Pr(t, n) { if (Array.isArray(t) && Array.isArray(n)) {
    if (t.length !== n.length)
        return !1;
    let e = [...t].sort(), r = [...n].sort();
    return e.every((i, o) => r[o] === i);
}
else
    return t === n; }
function ui(t) { return t.length > 0 ? t[t.length - 1] : null; }
function he(t) { return Ar(t) ? t : kn(t) ? K(Promise.resolve(t)) : v(t); }
function _r(t) { return Ar(t) ? Ye(t) : Promise.resolve(t); }
var li = { exact: xr, subset: jr }, Lr = { exact: hi, subset: di, ignored: () => !0 };
function Zt(t, n, e) { let r = t instanceof O ? t : n.parseUrl(t); return $n(() => _t(n.lastSuccessfulNavigation()?.finalUrl ?? new O, r, e)); }
function _t(t, n, e) { return li[e.paths](t.root, n.root, e.matrixParams) && Lr[e.queryParams](t.queryParams, n.queryParams) && !(e.fragment === "exact" && t.fragment !== n.fragment); }
function hi(t, n) { return $(t, n); }
function xr(t, n, e) { if (!ie(t.segments, n.segments) || !We(t.segments, n.segments, e) || t.numberOfChildren !== n.numberOfChildren)
    return !1; for (let r in n.children)
    if (!t.children[r] || !xr(t.children[r], n.children[r], e))
        return !1; return !0; }
function di(t, n) { return Object.keys(n).length <= Object.keys(t).length && Object.keys(n).every(e => Pr(t[e], n[e])); }
function jr(t, n, e) { return kr(t, n, n.segments, e); }
function kr(t, n, e, r) { if (t.segments.length > e.length) {
    let i = t.segments.slice(0, e.length);
    return !(!ie(i, e) || n.hasChildren() || !We(i, e, r));
}
else if (t.segments.length === e.length) {
    if (!ie(t.segments, e) || !We(t.segments, e, r))
        return !1;
    for (let i in n.children)
        if (!t.children[i] || !jr(t.children[i], n.children[i], r))
            return !1;
    return !0;
}
else {
    let i = e.slice(0, t.segments.length), o = e.slice(t.segments.length);
    return !ie(t.segments, i) || !We(t.segments, i, r) || !t.children[p] ? !1 : kr(t.children[p], n, o, r);
} }
function We(t, n, e) { return n.every((r, i) => Lr[e](t[i].parameters, r.parameters)); }
var O = class {
    root;
    queryParams;
    fragment;
    _queryParamMap;
    constructor(n = new m([], {}), e = {}, r = null) { this.root = n, this.queryParams = e, this.fragment = r; }
    get queryParamMap() { return this._queryParamMap ??= ae(this.queryParams), this._queryParamMap; }
    toString() { return gi.serialize(this); }
}, m = class {
    segments;
    children;
    parent = null;
    constructor(n, e) { this.segments = n, this.children = e, Object.values(e).forEach(r => r.parent = this); }
    hasChildren() { return this.numberOfChildren > 0; }
    get numberOfChildren() { return Object.keys(this.children).length; }
    toString() { return Qe(this); }
}, Q = class {
    path;
    parameters;
    _parameterMap;
    constructor(n, e) { this.path = n, this.parameters = e; }
    get parameterMap() { return this._parameterMap ??= ae(this.parameters), this._parameterMap; }
    toString() { return zr(this); }
};
function fi(t, n) { return ie(t, n) && t.every((e, r) => $(e.parameters, n[r].parameters)); }
function ie(t, n) { return t.length !== n.length ? !1 : t.every((e, r) => e.path === n[r].path); }
function pi(t, n) { let e = []; return Object.entries(t.children).forEach(([r, i]) => { r === p && (e = e.concat(n(i, r))); }), Object.entries(t.children).forEach(([r, i]) => { r !== p && (e = e.concat(n(i, r))); }), e; }
var de = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: () => new B, providedIn: "root" });
} return t; })(), B = class {
    parse(n) { let e = new xt(n); return new O(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment()); }
    serialize(n) { let e = `/${Ee(n.root, !0)}`, r = yi(n.queryParams), i = typeof n.fragment == "string" ? `#${vi(n.fragment)}` : ""; return `${e}${r}${i}`; }
}, gi = new B;
function Qe(t) { return t.segments.map(n => zr(n)).join("/"); }
function Ee(t, n) { if (!t.hasChildren())
    return Qe(t); if (n) {
    let e = t.children[p] ? Ee(t.children[p], !1) : "", r = [];
    return Object.entries(t.children).forEach(([i, o]) => { i !== p && r.push(`${i}:${Ee(o, !1)}`); }), r.length > 0 ? `${e}(${r.join("//")})` : e;
}
else {
    let e = pi(t, (r, i) => i === p ? [Ee(t.children[p], !1)] : [`${i}:${Ee(r, !1)}`]);
    return Object.keys(t.children).length === 1 && t.children[p] != null ? `${Qe(t)}/${e[0]}` : `${Qe(t)}/(${e.join("//")})`;
} }
function $r(t) { return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ","); }
function Ve(t) { return $r(t).replace(/%3B/gi, ";"); }
function vi(t) { return encodeURI(t); }
function Lt(t) { return $r(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&"); }
function Ke(t) { return decodeURIComponent(t); }
function yr(t) { return Ke(t.replace(/\+/g, "%20")); }
function zr(t) { return `${Lt(t.path)}${mi(t.parameters)}`; }
function mi(t) { return Object.entries(t).map(([n, e]) => `;${Lt(n)}=${Lt(e)}`).join(""); }
function yi(t) { let n = Object.entries(t).map(([e, r]) => Array.isArray(r) ? r.map(i => `${Ve(e)}=${Ve(i)}`).join("&") : `${Ve(e)}=${Ve(r)}`).filter(e => e); return n.length ? `?${n.join("&")}` : ""; }
var Ri = /^[^\/()?;#]+/;
function Tt(t) { let n = t.match(Ri); return n ? n[0] : ""; }
var Ci = /^[^\/()?;=#]+/;
function Si(t) { let n = t.match(Ci); return n ? n[0] : ""; }
var wi = /^[^=?&#]+/;
function bi(t) { let n = t.match(wi); return n ? n[0] : ""; }
var Ii = /^[^&#]+/;
function Ei(t) { let n = t.match(Ii); return n ? n[0] : ""; }
var xt = class {
    url;
    remaining;
    constructor(n) { this.url = n, this.remaining = n; }
    parseRootSegment() { return this.consumeOptional("/"), this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#") ? new m([], {}) : new m([], this.parseChildren()); }
    parseQueryParams() { let n = {}; if (this.consumeOptional("?"))
        do
            this.parseQueryParam(n);
        while (this.consumeOptional("&")); return n; }
    parseFragment() { return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null; }
    parseChildren() { if (this.remaining === "")
        return {}; this.consumeOptional("/"); let n = []; for (this.peekStartsWith("(") || n.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");)
        this.capture("/"), n.push(this.parseSegment()); let e = {}; this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0)); let r = {}; return this.peekStartsWith("(") && (r = this.parseParens(!1)), (n.length > 0 || Object.keys(e).length > 0) && (r[p] = new m(n, e)), r; }
    parseSegment() { let n = Tt(this.remaining); if (n === "" && this.peekStartsWith(";"))
        throw new A(4009, !1); return this.capture(n), new Q(Ke(n), this.parseMatrixParams()); }
    parseMatrixParams() { let n = {}; for (; this.consumeOptional(";");)
        this.parseParam(n); return n; }
    parseParam(n) { let e = Si(this.remaining); if (!e)
        return; this.capture(e); let r = ""; if (this.consumeOptional("=")) {
        let i = Tt(this.remaining);
        i && (r = i, this.capture(r));
    } n[Ke(e)] = Ke(r); }
    parseQueryParam(n) { let e = bi(this.remaining); if (!e)
        return; this.capture(e); let r = ""; if (this.consumeOptional("=")) {
        let s = Ei(this.remaining);
        s && (r = s, this.capture(r));
    } let i = yr(e), o = yr(r); if (n.hasOwnProperty(i)) {
        let s = n[i];
        Array.isArray(s) || (s = [s], n[i] = s), s.push(o);
    }
    else
        n[i] = o; }
    parseParens(n) { let e = {}; for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
        let r = Tt(this.remaining), i = this.remaining[r.length];
        if (i !== "/" && i !== ")" && i !== ";")
            throw new A(4010, !1);
        let o;
        r.indexOf(":") > -1 ? (o = r.slice(0, r.indexOf(":")), this.capture(o), this.capture(":")) : n && (o = p);
        let s = this.parseChildren();
        e[o ?? p] = Object.keys(s).length === 1 && s[p] ? s[p] : new m([], s), this.consumeOptional("//");
    } return e; }
    peekStartsWith(n) { return this.remaining.startsWith(n); }
    consumeOptional(n) { return this.peekStartsWith(n) ? (this.remaining = this.remaining.substring(n.length), !0) : !1; }
    capture(n) { if (!this.consumeOptional(n))
        throw new A(4011, !1); }
};
function Fr(t) { return t.segments.length > 0 ? new m([], { [p]: t }) : t; }
function qr(t) { let n = {}; for (let [r, i] of Object.entries(t.children)) {
    let o = qr(i);
    if (r === p && o.segments.length === 0 && o.hasChildren())
        for (let [s, a] of Object.entries(o.children))
            n[s] = a;
    else
        (o.segments.length > 0 || o.hasChildren()) && (n[r] = o);
} let e = new m(t.segments, n); return Ai(e); }
function Ai(t) { if (t.numberOfChildren === 1 && t.children[p]) {
    let n = t.children[p];
    return new m(t.segments.concat(n.segments), n.children);
} return t; }
function Y(t) { return t instanceof O; }
function Br(t, n, e = null, r = null, i = new B) { let o = Hr(t); return Vr(o, n, e, r, i); }
function Hr(t) { let n; function e(o) { let s = {}; for (let c of o.children) {
    let u = e(c);
    s[c.outlet] = u;
} let a = new m(o.url, s); return o === t && (n = a), a; } let r = e(t.root), i = Fr(r); return n ?? i; }
function Vr(t, n, e, r, i) { let o = t; for (; o.parent;)
    o = o.parent; if (n.length === 0)
    return Mt(o, o, o, e, r, i); let s = Ti(n); if (s.toRoot())
    return Mt(o, o, new m([], {}), e, r, i); let a = Mi(s, o, t), c = a.processChildren ? Me(a.segmentGroup, a.index, s.commands) : Wr(a.segmentGroup, a.index, s.commands); return Mt(o, a.segmentGroup, c, e, r, i); }
function Ze(t) { return typeof t == "object" && t != null && !t.outlets && !t.segmentPath; }
function Ue(t) { return typeof t == "object" && t != null && t.outlets; }
function Rr(t, n, e) { t ||= "\u0275"; let r = new O; return r.queryParams = { [t]: n }, e.parse(e.serialize(r)).queryParams[t]; }
function Mt(t, n, e, r, i, o) { let s = {}; for (let [u, d] of Object.entries(r ?? {}))
    s[u] = Array.isArray(d) ? d.map(f => Rr(u, f, o)) : Rr(u, d, o); let a; t === n ? a = e : a = Gr(t, n, e); let c = Fr(qr(a)); return new O(c, s, i); }
function Gr(t, n, e) { let r = {}; return Object.entries(t.children).forEach(([i, o]) => { o === n ? r[i] = e : r[i] = Gr(o, n, e); }), new m(t.segments, r); }
var Je = class {
    isAbsolute;
    numberOfDoubleDots;
    commands;
    constructor(n, e, r) { if (this.isAbsolute = n, this.numberOfDoubleDots = e, this.commands = r, n && r.length > 0 && Ze(r[0]))
        throw new A(4003, !1); let i = r.find(Ue); if (i && i !== ui(r))
        throw new A(4004, !1); }
    toRoot() { return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"; }
};
function Ti(t) { if (typeof t[0] == "string" && t.length === 1 && t[0] === "/")
    return new Je(!0, 0, t); let n = 0, e = !1, r = t.reduce((i, o, s) => { if (typeof o == "object" && o != null) {
    if (o.outlets) {
        let a = {};
        return Object.entries(o.outlets).forEach(([c, u]) => { a[c] = typeof u == "string" ? u.split("/") : u; }), [...i, { outlets: a }];
    }
    if (o.segmentPath)
        return [...i, o.segmentPath];
} return typeof o != "string" ? [...i, o] : s === 0 ? (o.split("/").forEach((a, c) => { c == 0 && a === "." || (c == 0 && a === "" ? e = !0 : a === ".." ? n++ : a != "" && i.push(a)); }), i) : [...i, o]; }, []); return new Je(e, n, r); }
var ge = class {
    segmentGroup;
    processChildren;
    index;
    constructor(n, e, r) { this.segmentGroup = n, this.processChildren = e, this.index = r; }
};
function Mi(t, n, e) { if (t.isAbsolute)
    return new ge(n, !0, 0); if (!e)
    return new ge(n, !1, NaN); if (e.parent === null)
    return new ge(e, !0, 0); let r = Ze(t.commands[0]) ? 0 : 1, i = e.segments.length - 1 + r; return Ni(e, i, t.numberOfDoubleDots); }
function Ni(t, n, e) { let r = t, i = n, o = e; for (; o > i;) {
    if (o -= i, r = r.parent, !r)
        throw new A(4005, !1);
    i = r.segments.length;
} return new ge(r, !1, i - o); }
function Di(t) { return Ue(t[0]) ? t[0].outlets : { [p]: t }; }
function Wr(t, n, e) { if (t ??= new m([], {}), t.segments.length === 0 && t.hasChildren())
    return Me(t, n, e); let r = Oi(t, n, e), i = e.slice(r.commandIndex); if (r.match && r.pathIndex < t.segments.length) {
    let o = new m(t.segments.slice(0, r.pathIndex), {});
    return o.children[p] = new m(t.segments.slice(r.pathIndex), t.children), Me(o, 0, i);
}
else
    return r.match && i.length === 0 ? new m(t.segments, {}) : r.match && !t.hasChildren() ? jt(t, n, e) : r.match ? Me(t, 0, i) : jt(t, n, e); }
function Me(t, n, e) { if (e.length === 0)
    return new m(t.segments, {}); {
    let r = Di(e), i = {};
    if (Object.keys(r).some(o => o !== p) && t.children[p] && t.numberOfChildren === 1 && t.children[p].segments.length === 0) {
        let o = Me(t.children[p], n, e);
        return new m(t.segments, o.children);
    }
    return Object.entries(r).forEach(([o, s]) => { typeof s == "string" && (s = [s]), s !== null && (i[o] = Wr(t.children[o], n, s)); }), Object.entries(t.children).forEach(([o, s]) => { r[o] === void 0 && (i[o] = s); }), new m(t.segments, i);
} }
function Oi(t, n, e) { let r = 0, i = n, o = { match: !1, pathIndex: 0, commandIndex: 0 }; for (; i < t.segments.length;) {
    if (r >= e.length)
        return o;
    let s = t.segments[i], a = e[r];
    if (Ue(a))
        break;
    let c = `${a}`, u = r < e.length - 1 ? e[r + 1] : null;
    if (i > 0 && c === void 0)
        break;
    if (c && u && typeof u == "object" && u.outlets === void 0) {
        if (!Sr(c, u, s))
            return o;
        r += 2;
    }
    else {
        if (!Sr(c, {}, s))
            return o;
        r++;
    }
    i++;
} return { match: !0, pathIndex: i, commandIndex: r }; }
function jt(t, n, e) { let r = t.segments.slice(0, n), i = 0; for (; i < e.length;) {
    let o = e[i];
    if (Ue(o)) {
        let c = Ui(o.outlets);
        return new m(r, c);
    }
    if (i === 0 && Ze(e[0])) {
        let c = t.segments[n];
        r.push(new Q(c.path, Cr(e[0]))), i++;
        continue;
    }
    let s = Ue(o) ? o.outlets[p] : `${o}`, a = i < e.length - 1 ? e[i + 1] : null;
    s && a && Ze(a) ? (r.push(new Q(s, Cr(a))), i += 2) : (r.push(new Q(s, {})), i++);
} return new m(r, {}); }
function Ui(t) { let n = {}; return Object.entries(t).forEach(([e, r]) => { typeof r == "string" && (r = [r]), r !== null && (n[e] = jt(new m([], {}), 0, r)); }), n; }
function Cr(t) { let n = {}; return Object.entries(t).forEach(([e, r]) => n[e] = `${r}`), n; }
function Sr(t, n, e) { return t == e.path && $(n, e.parameters); }
var ve = "imperative", b = (function (t) { return t[t.NavigationStart = 0] = "NavigationStart", t[t.NavigationEnd = 1] = "NavigationEnd", t[t.NavigationCancel = 2] = "NavigationCancel", t[t.NavigationError = 3] = "NavigationError", t[t.RoutesRecognized = 4] = "RoutesRecognized", t[t.ResolveStart = 5] = "ResolveStart", t[t.ResolveEnd = 6] = "ResolveEnd", t[t.GuardsCheckStart = 7] = "GuardsCheckStart", t[t.GuardsCheckEnd = 8] = "GuardsCheckEnd", t[t.RouteConfigLoadStart = 9] = "RouteConfigLoadStart", t[t.RouteConfigLoadEnd = 10] = "RouteConfigLoadEnd", t[t.ChildActivationStart = 11] = "ChildActivationStart", t[t.ChildActivationEnd = 12] = "ChildActivationEnd", t[t.ActivationStart = 13] = "ActivationStart", t[t.ActivationEnd = 14] = "ActivationEnd", t[t.Scroll = 15] = "Scroll", t[t.NavigationSkipped = 16] = "NavigationSkipped", t; })(b || {}), U = class {
    id;
    url;
    constructor(n, e) { this.id = n, this.url = e; }
}, H = class extends U {
    type = b.NavigationStart;
    navigationTrigger;
    restoredState;
    constructor(n, e, r = "imperative", i = null) { super(n, e), this.navigationTrigger = r, this.restoredState = i; }
    toString() { return `NavigationStart(id: ${this.id}, url: '${this.url}')`; }
}, N = class extends U {
    urlAfterRedirects;
    type = b.NavigationEnd;
    constructor(n, e, r) { super(n, e), this.urlAfterRedirects = r; }
    toString() { return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`; }
}, I = (function (t) { return t[t.Redirect = 0] = "Redirect", t[t.SupersededByNewNavigation = 1] = "SupersededByNewNavigation", t[t.NoDataFromResolver = 2] = "NoDataFromResolver", t[t.GuardRejected = 3] = "GuardRejected", t[t.Aborted = 4] = "Aborted", t; })(I || {}), ye = (function (t) { return t[t.IgnoredSameUrlNavigation = 0] = "IgnoredSameUrlNavigation", t[t.IgnoredByUrlHandlingStrategy = 1] = "IgnoredByUrlHandlingStrategy", t; })(ye || {}), M = class extends U {
    reason;
    code;
    type = b.NavigationCancel;
    constructor(n, e, r, i) { super(n, e), this.reason = r, this.code = i; }
    toString() { return `NavigationCancel(id: ${this.id}, url: '${this.url}')`; }
};
function Jt(t) { return t instanceof M && (t.code === I.Redirect || t.code === I.SupersededByNewNavigation); }
var k = class extends U {
    reason;
    code;
    type = b.NavigationSkipped;
    constructor(n, e, r, i) { super(n, e), this.reason = r, this.code = i; }
}, Z = class extends U {
    error;
    target;
    type = b.NavigationError;
    constructor(n, e, r, i) { super(n, e), this.error = r, this.target = i; }
    toString() { return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`; }
}, ce = class extends U {
    urlAfterRedirects;
    state;
    type = b.RoutesRecognized;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, Xe = class extends U {
    urlAfterRedirects;
    state;
    type = b.GuardsCheckStart;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, et = class extends U {
    urlAfterRedirects;
    state;
    shouldActivate;
    type = b.GuardsCheckEnd;
    constructor(n, e, r, i, o) { super(n, e), this.urlAfterRedirects = r, this.state = i, this.shouldActivate = o; }
    toString() { return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`; }
}, tt = class extends U {
    urlAfterRedirects;
    state;
    type = b.ResolveStart;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, rt = class extends U {
    urlAfterRedirects;
    state;
    type = b.ResolveEnd;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, nt = class {
    route;
    type = b.RouteConfigLoadStart;
    constructor(n) { this.route = n; }
    toString() { return `RouteConfigLoadStart(path: ${this.route.path})`; }
}, it = class {
    route;
    type = b.RouteConfigLoadEnd;
    constructor(n) { this.route = n; }
    toString() { return `RouteConfigLoadEnd(path: ${this.route.path})`; }
}, ot = class {
    snapshot;
    type = b.ChildActivationStart;
    constructor(n) { this.snapshot = n; }
    toString() { return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, st = class {
    snapshot;
    type = b.ChildActivationEnd;
    constructor(n) { this.snapshot = n; }
    toString() { return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, at = class {
    snapshot;
    type = b.ActivationStart;
    constructor(n) { this.snapshot = n; }
    toString() { return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, ct = class {
    snapshot;
    type = b.ActivationEnd;
    constructor(n) { this.snapshot = n; }
    toString() { return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, Re = class {
    routerEvent;
    position;
    anchor;
    scrollBehavior;
    type = b.Scroll;
    constructor(n, e, r, i) { this.routerEvent = n, this.position = e, this.anchor = r, this.scrollBehavior = i; }
    toString() { let n = this.position ? `${this.position[0]}, ${this.position[1]}` : null; return `Scroll(anchor: '${this.anchor}', position: '${n}')`; }
}, ue = class {
}, Ce = class {
    url;
    navigationBehaviorOptions;
    constructor(n, e) { this.url = n, this.navigationBehaviorOptions = e; }
};
function Pi(t) { return !(t instanceof ue) && !(t instanceof Ce); }
var ut = class {
    rootInjector;
    outlet = null;
    route = null;
    children;
    attachRef = null;
    get injector() { return this.route?.snapshot._environmentInjector ?? this.rootInjector; }
    constructor(n) { this.rootInjector = n, this.children = new fe(this.rootInjector); }
}, fe = (() => { class t {
    rootInjector;
    contexts = new Map;
    constructor(e) { this.rootInjector = e; }
    onChildOutletCreated(e, r) { let i = this.getOrCreateContext(e); i.outlet = r, this.contexts.set(e, i); }
    onChildOutletDestroyed(e) { let r = this.getContext(e); r && (r.outlet = null, r.attachRef = null); }
    onOutletDeactivated() { let e = this.contexts; return this.contexts = new Map, e; }
    onOutletReAttached(e) { this.contexts = e; }
    getOrCreateContext(e) { let r = this.getContext(e); return r || (r = new ut(this.rootInjector), this.contexts.set(e, r)), r; }
    getContext(e) { return this.contexts.get(e) || null; }
    static \u0275fac = function (r) { return new (r || t)(y.\u0275\u0275inject(y.EnvironmentInjector)); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), lt = class {
    _root;
    constructor(n) { this._root = n; }
    get root() { return this._root.value; }
    parent(n) { let e = this.pathFromRoot(n); return e.length > 1 ? e[e.length - 2] : null; }
    children(n) { let e = kt(n, this._root); return e ? e.children.map(r => r.value) : []; }
    firstChild(n) { let e = kt(n, this._root); return e && e.children.length > 0 ? e.children[0].value : null; }
    siblings(n) { let e = $t(n, this._root); return e.length < 2 ? [] : e[e.length - 2].children.map(i => i.value).filter(i => i !== n); }
    pathFromRoot(n) { return $t(n, this._root).map(e => e.value); }
};
function kt(t, n) { if (t === n.value)
    return n; for (let e of n.children) {
    let r = kt(t, e);
    if (r)
        return r;
} return null; }
function $t(t, n) { if (t === n.value)
    return [n]; for (let e of n.children) {
    let r = $t(t, e);
    if (r.length)
        return r.unshift(n), r;
} return []; }
var D = class {
    value;
    children;
    constructor(n, e) { this.value = n, this.children = e; }
    toString() { return `TreeNode(${this.value})`; }
};
function pe(t) { let n = {}; return t && t.children.forEach(e => n[e.value.outlet] = e), n; }
var Pe = class extends lt {
    snapshot;
    constructor(n, e) { super(n), this.snapshot = e, Xt(this, n); }
    toString() { return this.snapshot.toString(); }
};
function Qr(t, n) { let e = _i(t, n), r = new x([new Q("", {})]), i = new x({}), o = new x({}), s = new x({}), a = new x(""), c = new z(r, i, s, a, o, p, t, e.root); return c.snapshot = e.root, new Pe(new D(c, []), e); }
function _i(t, n) { let e = {}, r = {}, i = {}, s = new oe([], e, i, "", r, p, t, null, {}, n); return new _e("", new D(s, [])); }
var z = class {
    urlSubject;
    paramsSubject;
    queryParamsSubject;
    fragmentSubject;
    dataSubject;
    outlet;
    component;
    snapshot;
    _futureSnapshot;
    _routerState;
    _paramMap;
    _queryParamMap;
    title;
    url;
    params;
    queryParams;
    fragment;
    data;
    constructor(n, e, r, i, o, s, a, c) { this.urlSubject = n, this.paramsSubject = e, this.queryParamsSubject = r, this.fragmentSubject = i, this.dataSubject = o, this.outlet = s, this.component = a, this._futureSnapshot = c, this.title = this.dataSubject?.pipe(T(u => u[je])) ?? v(void 0), this.url = n, this.params = e, this.queryParams = r, this.fragment = i, this.data = o; }
    get routeConfig() { return this._futureSnapshot.routeConfig; }
    get root() { return this._routerState.root; }
    get parent() { return this._routerState.parent(this); }
    get firstChild() { return this._routerState.firstChild(this); }
    get children() { return this._routerState.children(this); }
    get pathFromRoot() { return this._routerState.pathFromRoot(this); }
    get paramMap() { return this._paramMap ??= this.params.pipe(T(n => ae(n))), this._paramMap; }
    get queryParamMap() { return this._queryParamMap ??= this.queryParams.pipe(T(n => ae(n))), this._queryParamMap; }
    toString() { return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`; }
};
function ht(t, n, e = "emptyOnly") { let r, { routeConfig: i } = t; return n !== null && (e === "always" || i?.path === "" || !n.component && !n.routeConfig?.loadComponent) ? r = { params: h(h({}, n.params), t.params), data: h(h({}, n.data), t.data), resolve: h(h(h(h({}, t.data), n.data), i?.data), t._resolvedData) } : r = { params: h({}, t.params), data: h({}, t.data), resolve: h(h({}, t.data), t._resolvedData ?? {}) }, i && Yr(i) && (r.resolve[je] = i.title), r; }
var oe = class {
    url;
    params;
    queryParams;
    fragment;
    data;
    outlet;
    component;
    routeConfig;
    _resolve;
    _resolvedData;
    _routerState;
    _paramMap;
    _queryParamMap;
    _environmentInjector;
    get title() { return this.data?.[je]; }
    constructor(n, e, r, i, o, s, a, c, u, d) { this.url = n, this.params = e, this.queryParams = r, this.fragment = i, this.data = o, this.outlet = s, this.component = a, this.routeConfig = c, this._resolve = u, this._environmentInjector = d; }
    get root() { return this._routerState.root; }
    get parent() { return this._routerState.parent(this); }
    get firstChild() { return this._routerState.firstChild(this); }
    get children() { return this._routerState.children(this); }
    get pathFromRoot() { return this._routerState.pathFromRoot(this); }
    get paramMap() { return this._paramMap ??= ae(this.params), this._paramMap; }
    get queryParamMap() { return this._queryParamMap ??= ae(this.queryParams), this._queryParamMap; }
    toString() { let n = this.url.map(r => r.toString()).join("/"), e = this.routeConfig ? this.routeConfig.path : ""; return `Route(url:'${n}', path:'${e}')`; }
}, _e = class extends lt {
    url;
    constructor(n, e) { super(e), this.url = n, Xt(this, e); }
    toString() { return Kr(this._root); }
};
function Xt(t, n) { n.value._routerState = t, n.children.forEach(e => Xt(t, e)); }
function Kr(t) { let n = t.children.length > 0 ? ` { ${t.children.map(Kr).join(", ")} } ` : ""; return `${t.value}${n}`; }
function Nt(t) { if (t.snapshot) {
    let n = t.snapshot, e = t._futureSnapshot;
    t.snapshot = e, $(n.queryParams, e.queryParams) || t.queryParamsSubject.next(e.queryParams), n.fragment !== e.fragment && t.fragmentSubject.next(e.fragment), $(n.params, e.params) || t.paramsSubject.next(e.params), ci(n.url, e.url) || t.urlSubject.next(e.url), $(n.data, e.data) || t.dataSubject.next(e.data);
}
else
    t.snapshot = t._futureSnapshot, t.dataSubject.next(t._futureSnapshot.data); }
function zt(t, n) { let e = $(t.params, n.params) && fi(t.url, n.url), r = !t.parent != !n.parent; return e && !r && (!t.parent || zt(t.parent, n.parent)); }
function Yr(t) { return typeof t.title == "string" || t.title === null; }
var Zr = new J(""), er = (() => { class t {
    activated = null;
    get activatedComponentRef() { return this.activated; }
    _activatedRoute = null;
    name = p;
    activateEvents = new He;
    deactivateEvents = new He;
    attachEvents = new He;
    detachEvents = new He;
    routerOutletData = zn();
    parentContexts = g(fe);
    location = g(Fn);
    changeDetector = g(qn);
    inputBinder = g(ke, { optional: !0 });
    supportsBindingToComponentInputs = !0;
    ngOnChanges(e) { if (e.name) {
        let { firstChange: r, previousValue: i } = e.name;
        if (r)
            return;
        this.isTrackedInParentContexts(i) && (this.deactivate(), this.parentContexts.onChildOutletDestroyed(i)), this.initializeOutletWithName();
    } }
    ngOnDestroy() { this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name), this.inputBinder?.unsubscribeFromRouteData(this); }
    isTrackedInParentContexts(e) { return this.parentContexts.getContext(e)?.outlet === this; }
    ngOnInit() { this.initializeOutletWithName(); }
    initializeOutletWithName() { if (this.parentContexts.onChildOutletCreated(this.name, this), this.activated)
        return; let e = this.parentContexts.getContext(this.name); e?.route && (e.attachRef ? this.attach(e.attachRef, e.route) : this.activateWith(e.route, e.injector)); }
    get isActivated() { return !!this.activated; }
    get component() { if (!this.activated)
        throw new A(4012, !1); return this.activated.instance; }
    get activatedRoute() { if (!this.activated)
        throw new A(4012, !1); return this._activatedRoute; }
    get activatedRouteData() { return this._activatedRoute ? this._activatedRoute.snapshot.data : {}; }
    detach() { if (!this.activated)
        throw new A(4012, !1); this.location.detach(); let e = this.activated; return this.activated = null, this._activatedRoute = null, this.detachEvents.emit(e.instance), e; }
    attach(e, r) { this.activated = e, this._activatedRoute = r, this.location.insert(e.hostView), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.attachEvents.emit(e.instance); }
    deactivate() { if (this.activated) {
        let e = this.component;
        this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(e);
    } }
    activateWith(e, r) { if (this.isActivated)
        throw new A(4013, !1); this._activatedRoute = e; let i = this.location, s = e.snapshot.component, a = this.parentContexts.getOrCreateContext(this.name).children, c = new Ft(e, a, i.injector, this.routerOutletData); this.activated = i.createComponent(s, { index: i.length, injector: c, environmentInjector: r }), this.changeDetector.markForCheck(), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.activateEvents.emit(this.activated.instance); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275dir = y.\u0275\u0275defineDirective({ type: t, selectors: [["router-outlet"]], inputs: { name: "name", routerOutletData: [1, "routerOutletData"] }, outputs: { activateEvents: "activate", deactivateEvents: "deactivate", attachEvents: "attach", detachEvents: "detach" }, exportAs: ["outlet"], features: [y.\u0275\u0275NgOnChangesFeature] });
} return t; })(), Ft = class {
    route;
    childContexts;
    parent;
    outletData;
    constructor(n, e, r, i) { this.route = n, this.childContexts = e, this.parent = r, this.outletData = i; }
    get(n, e) { return n === z ? this.route : n === fe ? this.childContexts : n === Zr ? this.outletData : this.parent.get(n, e); }
}, ke = new J(""), tr = (() => { class t {
    outletDataSubscriptions = new Map;
    bindActivatedRouteToOutletComponent(e) { this.unsubscribeFromRouteData(e), this.subscribeToRouteData(e); }
    unsubscribeFromRouteData(e) { this.outletDataSubscriptions.get(e)?.unsubscribe(), this.outletDataSubscriptions.delete(e); }
    subscribeToRouteData(e) { let { activatedRoute: r } = e, i = Tr([r.queryParams, r.params, r.data]).pipe(G(([o, s, a], c) => (a = h(h(h({}, o), s), a), c === 0 ? v(a) : Promise.resolve(a)))).subscribe(o => { if (!e.isActivated || !e.activatedComponentRef || e.activatedRoute !== r || r.component === null) {
        this.unsubscribeFromRouteData(e);
        return;
    } let s = Bn(r.component); if (!s) {
        this.unsubscribeFromRouteData(e);
        return;
    } for (let { templateName: a } of s.inputs)
        e.activatedComponentRef.setInput(a, o[a]); }); this.outletDataSubscriptions.set(e, i); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })(), rr = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275cmp = y.\u0275\u0275defineComponent({ type: t, selectors: [["ng-component"]], exportAs: ["emptyRouterOutlet"], decls: 1, vars: 0, template: function (r, i) { r & 1 && y.\u0275\u0275element(0, "router-outlet"); }, dependencies: [er], encapsulation: 2 });
} return t; })();
function nr(t) { let n = t.children && t.children.map(nr), e = n ? E(h({}, t), { children: n }) : h({}, t); return !e.component && !e.loadComponent && (n || e.loadChildren) && e.outlet && e.outlet !== p && (e.component = rr), e; }
function Li(t, n, e) { let r = Le(t, n._root, e ? e._root : void 0); return new Pe(r, n); }
function Le(t, n, e) { if (e && t.shouldReuseRoute(n.value, e.value.snapshot)) {
    let r = e.value;
    r._futureSnapshot = n.value;
    let i = xi(t, n, e);
    return new D(r, i);
}
else {
    if (t.shouldAttach(n.value)) {
        let o = t.retrieve(n.value);
        if (o !== null) {
            let s = o.route;
            return s.value._futureSnapshot = n.value, s.children = n.children.map(a => Le(t, a)), s;
        }
    }
    let r = ji(n.value), i = n.children.map(o => Le(t, o));
    return new D(r, i);
} }
function xi(t, n, e) { return n.children.map(r => { for (let i of e.children)
    if (t.shouldReuseRoute(r.value, i.value.snapshot))
        return Le(t, r, i); return Le(t, r); }); }
function ji(t) { return new z(new x(t.url), new x(t.params), new x(t.queryParams), new x(t.fragment), new x(t.data), t.outlet, t.component, t); }
var Se = class {
    redirectTo;
    navigationBehaviorOptions;
    constructor(n, e) { this.redirectTo = n, this.navigationBehaviorOptions = e; }
}, Jr = "ngNavigationCancelingError";
function dt(t, n) { let { redirectTo: e, navigationBehaviorOptions: r } = Y(n) ? { redirectTo: n, navigationBehaviorOptions: void 0 } : n, i = Xr(!1, I.Redirect); return i.url = e, i.navigationBehaviorOptions = r, i; }
function Xr(t, n) { let e = new Error(`NavigationCancelingError: ${t || ""}`); return e[Jr] = !0, e.cancellationCode = n, e; }
function ki(t) { return en(t) && Y(t.url); }
function en(t) { return !!t && t[Jr]; }
var qt = class {
    routeReuseStrategy;
    futureState;
    currState;
    forwardEvent;
    inputBindingEnabled;
    constructor(n, e, r, i, o) { this.routeReuseStrategy = n, this.futureState = e, this.currState = r, this.forwardEvent = i, this.inputBindingEnabled = o; }
    activate(n) { let e = this.futureState._root, r = this.currState ? this.currState._root : null; this.deactivateChildRoutes(e, r, n), Nt(this.futureState.root), this.activateChildRoutes(e, r, n); }
    deactivateChildRoutes(n, e, r) { let i = pe(e); n.children.forEach(o => { let s = o.value.outlet; this.deactivateRoutes(o, i[s], r), delete i[s]; }), Object.values(i).forEach(o => { this.deactivateRouteAndItsChildren(o, r); }); }
    deactivateRoutes(n, e, r) { let i = n.value, o = e ? e.value : null; if (i === o)
        if (i.component) {
            let s = r.getContext(i.outlet);
            s && this.deactivateChildRoutes(n, e, s.children);
        }
        else
            this.deactivateChildRoutes(n, e, r);
    else
        o && this.deactivateRouteAndItsChildren(e, r); }
    deactivateRouteAndItsChildren(n, e) { n.value.component && this.routeReuseStrategy.shouldDetach(n.value.snapshot) ? this.detachAndStoreRouteSubtree(n, e) : this.deactivateRouteAndOutlet(n, e); }
    detachAndStoreRouteSubtree(n, e) { let r = e.getContext(n.value.outlet), i = r && n.value.component ? r.children : e, o = pe(n); for (let s of Object.values(o))
        this.deactivateRouteAndItsChildren(s, i); if (r && r.outlet) {
        let s = r.outlet.detach(), a = r.children.onOutletDeactivated();
        this.routeReuseStrategy.store(n.value.snapshot, { componentRef: s, route: n, contexts: a });
    } }
    deactivateRouteAndOutlet(n, e) { let r = e.getContext(n.value.outlet), i = r && n.value.component ? r.children : e, o = pe(n); for (let s of Object.values(o))
        this.deactivateRouteAndItsChildren(s, i); r && (r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated()), r.attachRef = null, r.route = null); }
    activateChildRoutes(n, e, r) { let i = pe(e); n.children.forEach(o => { this.activateRoutes(o, i[o.value.outlet], r), this.forwardEvent(new ct(o.value.snapshot)); }), n.children.length && this.forwardEvent(new st(n.value.snapshot)); }
    activateRoutes(n, e, r) { let i = n.value, o = e ? e.value : null; if (Nt(i), i === o)
        if (i.component) {
            let s = r.getOrCreateContext(i.outlet);
            this.activateChildRoutes(n, e, s.children);
        }
        else
            this.activateChildRoutes(n, e, r);
    else if (i.component) {
        let s = r.getOrCreateContext(i.outlet);
        if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
            let a = this.routeReuseStrategy.retrieve(i.snapshot);
            this.routeReuseStrategy.store(i.snapshot, null), s.children.onOutletReAttached(a.contexts), s.attachRef = a.componentRef, s.route = a.route.value, s.outlet && s.outlet.attach(a.componentRef, a.route.value), Nt(a.route.value), this.activateChildRoutes(n, null, s.children);
        }
        else
            s.attachRef = null, s.route = i, s.outlet && s.outlet.activateWith(i, s.injector), this.activateChildRoutes(n, null, s.children);
    }
    else
        this.activateChildRoutes(n, null, r); }
}, ft = class {
    path;
    route;
    constructor(n) { this.path = n, this.route = this.path[this.path.length - 1]; }
}, me = class {
    component;
    route;
    constructor(n, e) { this.component = n, this.route = e; }
};
function $i(t, n, e) { let r = t._root, i = n ? n._root : null; return Ae(r, i, e, [r.value]); }
function zi(t) { let n = t.routeConfig ? t.routeConfig.canActivateChild : null; return !n || n.length === 0 ? null : { node: t, guards: n }; }
function be(t, n) { let e = Symbol(), r = n.get(t, e); return r === e ? typeof t == "function" && !Hn(t) ? t : n.get(t) : r; }
function Ae(t, n, e, r, i = { canDeactivateChecks: [], canActivateChecks: [] }) { let o = pe(n); return t.children.forEach(s => { Fi(s, o[s.value.outlet], e, r.concat([s.value]), i), delete o[s.value.outlet]; }), Object.entries(o).forEach(([s, a]) => Ne(a, e.getContext(s), i)), i; }
function Fi(t, n, e, r, i = { canDeactivateChecks: [], canActivateChecks: [] }) { let o = t.value, s = n ? n.value : null, a = e ? e.getContext(t.value.outlet) : null; if (s && o.routeConfig === s.routeConfig) {
    let c = qi(s, o, o.routeConfig.runGuardsAndResolvers);
    c ? i.canActivateChecks.push(new ft(r)) : (o.data = s.data, o._resolvedData = s._resolvedData), o.component ? Ae(t, n, a ? a.children : null, r, i) : Ae(t, n, e, r, i), c && a && a.outlet && a.outlet.isActivated && i.canDeactivateChecks.push(new me(a.outlet.component, s));
}
else
    s && Ne(n, a, i), i.canActivateChecks.push(new ft(r)), o.component ? Ae(t, null, a ? a.children : null, r, i) : Ae(t, null, e, r, i); return i; }
function qi(t, n, e) { if (typeof e == "function")
    return P(n._environmentInjector, () => e(t, n)); switch (e) {
    case "pathParamsChange": return !ie(t.url, n.url);
    case "pathParamsOrQueryParamsChange": return !ie(t.url, n.url) || !$(t.queryParams, n.queryParams);
    case "always": return !0;
    case "paramsOrQueryParamsChange": return !zt(t, n) || !$(t.queryParams, n.queryParams);
    case "paramsChange":
    default: return !zt(t, n);
} }
function Ne(t, n, e) { let r = pe(t), i = t.value; Object.entries(r).forEach(([o, s]) => { i.component ? n ? Ne(s, n.children.getContext(o), e) : Ne(s, null, e) : Ne(s, n, e); }), i.component ? n && n.outlet && n.outlet.isActivated ? e.canDeactivateChecks.push(new me(n.outlet.component, i)) : e.canDeactivateChecks.push(new me(null, i)) : e.canDeactivateChecks.push(new me(null, i)); }
function $e(t) { return typeof t == "function"; }
function Bi(t) { return typeof t == "boolean"; }
function Hi(t) { return t && $e(t.canLoad); }
function Vi(t) { return t && $e(t.canActivate); }
function Gi(t) { return t && $e(t.canActivateChild); }
function Wi(t) { return t && $e(t.canDeactivate); }
function Qi(t) { return t && $e(t.canMatch); }
function tn(t) { return t instanceof ei || t?.name === "EmptyError"; }
var Ge = Symbol("INITIAL_VALUE");
function we() { return G(t => Tr(t.map(n => n.pipe(De(1), si(Ge)))).pipe(T(n => { for (let e of n)
    if (e !== !0) {
        if (e === Ge)
            return Ge;
        if (e === !1 || Ki(e))
            return e;
    } return !0; }), Oe(n => n !== Ge), De(1))); }
function Ki(t) { return Y(t) || t instanceof Se; }
function rn(t) { return t.aborted ? v(void 0).pipe(De(1)) : new ti(n => { let e = () => { n.next(), n.complete(); }; return t.addEventListener("abort", e), () => t.removeEventListener("abort", e); }); }
function nn(t) { return Ot(rn(t)); }
function Yi(t) { return se(n => { let { targetSnapshot: e, currentSnapshot: r, guards: { canActivateChecks: i, canDeactivateChecks: o } } = n; return o.length === 0 && i.length === 0 ? v(E(h({}, n), { guardsResult: !0 })) : Zi(o, e, r).pipe(se(s => s && Bi(s) ? Ji(e, i, t) : v(s)), T(s => E(h({}, n), { guardsResult: s }))); }); }
function Zi(t, n, e) { return K(t).pipe(se(r => no(r.component, r.route, e, n)), le(r => r !== !0, !0)); }
function Ji(t, n, e) { return K(n).pipe(Mr(r => ri(eo(r.route.parent, e), Xi(r.route, e), ro(t, r.path), to(t, r.route))), le(r => r !== !0, !0)); }
function Xi(t, n) { return t !== null && n && n(new at(t)), v(!0); }
function eo(t, n) { return t !== null && n && n(new ot(t)), v(!0); }
function to(t, n) { let e = n.routeConfig ? n.routeConfig.canActivate : null; if (!e || e.length === 0)
    return v(!0); let r = e.map(i => Yt(() => { let o = n._environmentInjector, s = be(i, o), a = Vi(s) ? s.canActivate(n, t) : P(o, () => s(n, t)); return he(a).pipe(le()); })); return v(r).pipe(we()); }
function ro(t, n) { let e = n[n.length - 1], i = n.slice(0, n.length - 1).reverse().map(o => zi(o)).filter(o => o !== null).map(o => Yt(() => { let s = o.guards.map(a => { let c = o.node._environmentInjector, u = be(a, c), d = Gi(u) ? u.canActivateChild(e, t) : P(c, () => u(e, t)); return he(d).pipe(le()); }); return v(s).pipe(we()); })); return v(i).pipe(we()); }
function no(t, n, e, r) { let i = n && n.routeConfig ? n.routeConfig.canDeactivate : null; if (!i || i.length === 0)
    return v(!0); let o = i.map(s => { let a = n._environmentInjector, c = be(s, a), u = Wi(c) ? c.canDeactivate(t, n, e, r) : P(a, () => c(t, n, e, r)); return he(u).pipe(le()); }); return v(o).pipe(we()); }
function io(t, n, e, r, i) { let o = n.canLoad; if (o === void 0 || o.length === 0)
    return v(!0); let s = o.map(a => { let c = be(a, t), u = Hi(c) ? c.canLoad(n, e) : P(t, () => c(n, e)), d = he(u); return i ? d.pipe(nn(i)) : d; }); return v(s).pipe(we(), on(r)); }
function on(t) { return ni(W(n => { if (typeof n != "boolean")
    throw dt(t, n); }), T(n => n === !0)); }
function oo(t, n, e, r, i) { let o = n.canMatch; if (!o || o.length === 0)
    return v(!0); let s = o.map(a => { let c = be(a, t), u = Qi(c) ? c.canMatch(n, e) : P(t, () => c(n, e)); return he(u).pipe(nn(i)); }); return v(s).pipe(we(), on(r)); }
var q = class t extends Error {
    segmentGroup;
    constructor(n) { super(), this.segmentGroup = n || null, Object.setPrototypeOf(this, t.prototype); }
}, xe = class t extends Error {
    urlTree;
    constructor(n) { super(), this.urlTree = n, Object.setPrototypeOf(this, t.prototype); }
};
function so(t) { throw new A(4e3, !1); }
function ao(t) { throw Xr(!1, I.GuardRejected); }
var Bt = class {
    urlSerializer;
    urlTree;
    constructor(n, e) { this.urlSerializer = n, this.urlTree = e; }
    lineralizeSegments(n, e) { return R(this, null, function* () { let r = [], i = e.root; for (;;) {
        if (r = r.concat(i.segments), i.numberOfChildren === 0)
            return r;
        if (i.numberOfChildren > 1 || !i.children[p])
            throw so(`${n.redirectTo}`);
        i = i.children[p];
    } }); }
    applyRedirectCommands(n, e, r, i, o) { return R(this, null, function* () { let s = yield co(e, i, o); if (s instanceof O)
        throw new xe(s); let a = this.applyRedirectCreateUrlTree(s, this.urlSerializer.parse(s), n, r); if (s[0] === "/")
        throw new xe(a); return a; }); }
    applyRedirectCreateUrlTree(n, e, r, i) { let o = this.createSegmentGroup(n, e.root, r, i); return new O(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment); }
    createQueryParams(n, e) { let r = {}; return Object.entries(n).forEach(([i, o]) => { if (typeof o == "string" && o[0] === ":") {
        let a = o.substring(1);
        r[i] = e[a];
    }
    else
        r[i] = o; }), r; }
    createSegmentGroup(n, e, r, i) { let o = this.createSegments(n, e.segments, r, i), s = {}; return Object.entries(e.children).forEach(([a, c]) => { s[a] = this.createSegmentGroup(n, c, r, i); }), new m(o, s); }
    createSegments(n, e, r, i) { return e.map(o => o.path[0] === ":" ? this.findPosParam(n, o, i) : this.findOrReturn(o, r)); }
    findPosParam(n, e, r) { let i = r[e.path.substring(1)]; if (!i)
        throw new A(4001, !1); return i; }
    findOrReturn(n, e) { let r = 0; for (let i of e) {
        if (i.path === n.path)
            return e.splice(r), i;
        r++;
    } return n; }
};
function co(t, n, e) { if (typeof t == "string")
    return Promise.resolve(t); let r = t, { queryParams: i, fragment: o, routeConfig: s, url: a, outlet: c, params: u, data: d, title: f, paramMap: S, queryParamMap: C } = n; return Ye(he(P(e, () => r({ params: u, data: d, queryParams: i, fragment: o, routeConfig: s, url: a, outlet: c, title: f, paramMap: S, queryParamMap: C })))); }
function uo(t, n) { return t.providers && !t._injector && (t._injector = Vn(t.providers, n, `Route: ${t.path}`)), t._injector ?? n; }
function j(t) { return t.outlet || p; }
function lo(t, n) { let e = t.filter(r => j(r) === n); return e.push(...t.filter(r => j(r) !== n)), e; }
var Ht = { matched: !1, consumedSegments: [], remainingSegments: [], parameters: {}, positionalParamSegments: {} };
function ho(t, n, e, r, i, o) { let s = sn(t, n, e); return s.matched ? (r = uo(n, r), oo(r, n, e, i, o).pipe(T(a => a === !0 ? s : h({}, Ht)))) : v(s); }
function sn(t, n, e) { if (n.path === "")
    return n.pathMatch === "full" && (t.hasChildren() || e.length > 0) ? h({}, Ht) : { matched: !0, consumedSegments: [], remainingSegments: e, parameters: {}, positionalParamSegments: {} }; let i = (n.matcher || Ur)(e, t, n); if (!i)
    return h({}, Ht); let o = {}; Object.entries(i.posParams ?? {}).forEach(([a, c]) => { o[a] = c.path; }); let s = i.consumed.length > 0 ? h(h({}, o), i.consumed[i.consumed.length - 1].parameters) : o; return { matched: !0, consumedSegments: i.consumed, remainingSegments: e.slice(i.consumed.length), parameters: s, positionalParamSegments: i.posParams ?? {} }; }
function wr(t, n, e, r) { return e.length > 0 && go(t, e, r) ? { segmentGroup: new m(n, po(r, new m(e, t.children))), slicedSegments: [] } : e.length === 0 && vo(t, e, r) ? { segmentGroup: new m(t.segments, fo(t, e, r, t.children)), slicedSegments: e } : { segmentGroup: new m(t.segments, t.children), slicedSegments: e }; }
function fo(t, n, e, r) { let i = {}; for (let o of e)
    if (gt(t, n, o) && !r[j(o)]) {
        let s = new m([], {});
        i[j(o)] = s;
    } return h(h({}, r), i); }
function po(t, n) { let e = {}; e[p] = n; for (let r of t)
    if (r.path === "" && j(r) !== p) {
        let i = new m([], {});
        e[j(r)] = i;
    } return e; }
function go(t, n, e) { return e.some(r => gt(t, n, r) && j(r) !== p); }
function vo(t, n, e) { return e.some(r => gt(t, n, r)); }
function gt(t, n, e) { return (t.hasChildren() || n.length > 0) && e.pathMatch === "full" ? !1 : e.path === ""; }
function mo(t, n, e) { return n.length === 0 && !t.children[e]; }
var Vt = class {
};
function yo(t, n, e, r, i, o, s = "emptyOnly", a) { return R(this, null, function* () { return new Gt(t, n, e, r, i, s, o, a).recognize(); }); }
var Ro = 31, Gt = class {
    injector;
    configLoader;
    rootComponentType;
    config;
    urlTree;
    paramsInheritanceStrategy;
    urlSerializer;
    abortSignal;
    applyRedirects;
    absoluteRedirectCount = 0;
    allowRedirects = !0;
    constructor(n, e, r, i, o, s, a, c) { this.injector = n, this.configLoader = e, this.rootComponentType = r, this.config = i, this.urlTree = o, this.paramsInheritanceStrategy = s, this.urlSerializer = a, this.abortSignal = c, this.applyRedirects = new Bt(this.urlSerializer, this.urlTree); }
    noMatchError(n) { return new A(4002, `'${n.segmentGroup}'`); }
    recognize() { return R(this, null, function* () { let n = wr(this.urlTree.root, [], [], this.config).segmentGroup, { children: e, rootSnapshot: r } = yield this.match(n), i = new D(r, e), o = new _e("", i), s = Br(r, [], this.urlTree.queryParams, this.urlTree.fragment); return s.queryParams = this.urlTree.queryParams, o.url = this.urlSerializer.serialize(s), { state: o, tree: s }; }); }
    match(n) { return R(this, null, function* () { let e = new oe([], Object.freeze({}), Object.freeze(h({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), p, this.rootComponentType, null, {}, this.injector); try {
        return { children: yield this.processSegmentGroup(this.injector, this.config, n, p, e), rootSnapshot: e };
    }
    catch (r) {
        if (r instanceof xe)
            return this.urlTree = r.urlTree, this.match(r.urlTree.root);
        throw r instanceof q ? this.noMatchError(r) : r;
    } }); }
    processSegmentGroup(n, e, r, i, o) { return R(this, null, function* () { if (r.segments.length === 0 && r.hasChildren())
        return this.processChildren(n, e, r, o); let s = yield this.processSegment(n, e, r, r.segments, i, !0, o); return s instanceof D ? [s] : []; }); }
    processChildren(n, e, r, i) { return R(this, null, function* () { let o = []; for (let c of Object.keys(r.children))
        c === "primary" ? o.unshift(c) : o.push(c); let s = []; for (let c of o) {
        let u = r.children[c], d = lo(e, c), f = yield this.processSegmentGroup(n, d, u, c, i);
        s.push(...f);
    } let a = an(s); return Co(a), a; }); }
    processSegment(n, e, r, i, o, s, a) { return R(this, null, function* () { for (let c of e)
        try {
            return yield this.processSegmentAgainstRoute(c._injector ?? n, e, c, r, i, o, s, a);
        }
        catch (u) {
            if (u instanceof q || tn(u))
                continue;
            throw u;
        } if (mo(r, i, o))
        return new Vt; throw new q(r); }); }
    processSegmentAgainstRoute(n, e, r, i, o, s, a, c) { return R(this, null, function* () { if (j(r) !== s && (s === p || !gt(i, o, r)))
        throw new q(i); if (r.redirectTo === void 0)
        return this.matchSegmentAgainstRoute(n, i, r, o, s, c); if (this.allowRedirects && a)
        return this.expandSegmentAgainstRouteUsingRedirect(n, i, e, r, o, s, c); throw new q(i); }); }
    expandSegmentAgainstRouteUsingRedirect(n, e, r, i, o, s, a) { return R(this, null, function* () { let { matched: c, parameters: u, consumedSegments: d, positionalParamSegments: f, remainingSegments: S } = sn(e, i, o); if (!c)
        throw new q(e); typeof i.redirectTo == "string" && i.redirectTo[0] === "/" && (this.absoluteRedirectCount++, this.absoluteRedirectCount > Ro && (this.allowRedirects = !1)); let C = new oe(o, u, Object.freeze(h({}, this.urlTree.queryParams)), this.urlTree.fragment, br(i), j(i), i.component ?? i._loadedComponent ?? null, i, Ir(i), n), te = ht(C, a, this.paramsInheritanceStrategy); if (C.params = Object.freeze(te.params), C.data = Object.freeze(te.data), this.abortSignal.aborted)
        throw new Error(this.abortSignal.reason); let re = yield this.applyRedirects.applyRedirectCommands(d, i.redirectTo, f, C, n), ne = yield this.applyRedirects.lineralizeSegments(i, re); return this.processSegment(n, r, e, ne.concat(S), s, !1, a); }); }
    matchSegmentAgainstRoute(n, e, r, i, o, s) { return R(this, null, function* () { if (this.abortSignal.aborted)
        throw new Error(this.abortSignal.reason); let a = yield Ye(ho(e, r, i, n, this.urlSerializer, this.abortSignal)); if (r.path === "**" && (e.children = {}), !a?.matched)
        throw new q(e); n = r._injector ?? n; let { routes: c } = yield this.getChildConfig(n, r, i), u = r._loadedInjector ?? n, { parameters: d, consumedSegments: f, remainingSegments: S } = a, C = new oe(f, d, Object.freeze(h({}, this.urlTree.queryParams)), this.urlTree.fragment, br(r), j(r), r.component ?? r._loadedComponent ?? null, r, Ir(r), n), te = ht(C, s, this.paramsInheritanceStrategy); C.params = Object.freeze(te.params), C.data = Object.freeze(te.data); let { segmentGroup: re, slicedSegments: ne } = wr(e, f, S, c); if (ne.length === 0 && re.hasChildren()) {
        let xn = yield this.processChildren(u, c, re, C);
        return new D(C, xn);
    } if (c.length === 0 && ne.length === 0)
        return new D(C, []); let Et = j(r) === o, Ie = yield this.processSegment(u, c, re, ne, Et ? p : o, !0, C); return new D(C, Ie instanceof D ? [Ie] : []); }); }
    getChildConfig(n, e, r) { return R(this, null, function* () { if (e.children)
        return { routes: e.children, injector: n }; if (e.loadChildren) {
        if (e._loadedRoutes !== void 0) {
            let o = e._loadedNgModuleFactory;
            return o && !e._loadedInjector && (e._loadedInjector = o.create(n).injector), { routes: e._loadedRoutes, injector: e._loadedInjector };
        }
        if (this.abortSignal.aborted)
            throw new Error(this.abortSignal.reason);
        if (yield Ye(io(n, e, r, this.urlSerializer, this.abortSignal))) {
            let o = yield this.configLoader.loadChildren(n, e);
            return e._loadedRoutes = o.routes, e._loadedInjector = o.injector, e._loadedNgModuleFactory = o.factory, o;
        }
        throw ao(e);
    } return { routes: [], injector: n }; }); }
};
function Co(t) { t.sort((n, e) => n.value.outlet === p ? -1 : e.value.outlet === p ? 1 : n.value.outlet.localeCompare(e.value.outlet)); }
function So(t) { let n = t.value.routeConfig; return n && n.path === ""; }
function an(t) { let n = [], e = new Set; for (let r of t) {
    if (!So(r)) {
        n.push(r);
        continue;
    }
    let i = n.find(o => r.value.routeConfig === o.value.routeConfig);
    i !== void 0 ? (i.children.push(...r.children), e.add(i)) : n.push(r);
} for (let r of e) {
    let i = an(r.children);
    n.push(new D(r.value, i));
} return n.filter(r => !e.has(r)); }
function br(t) { return t.data || {}; }
function Ir(t) { return t.resolve || {}; }
function wo(t, n, e, r, i, o, s) { return se(a => R(null, null, function* () { let { state: c, tree: u } = yield yo(t, n, e, r, a.extractedUrl, i, o, s); return E(h({}, a), { targetSnapshot: c, urlAfterRedirects: u }); })); }
function bo(t) { return se(n => { let { targetSnapshot: e, guards: { canActivateChecks: r } } = n; if (!r.length)
    return v(n); let i = new Set(r.map(a => a.route)), o = new Set; for (let a of i)
    if (!o.has(a))
        for (let c of cn(a))
            o.add(c); let s = 0; return K(o).pipe(Mr(a => i.has(a) ? Io(a, e, t) : (a.data = ht(a, a.parent, t).resolve, v(void 0))), W(() => s++), Nr(1), se(a => s === o.size ? v(n) : L)); }); }
function cn(t) { let n = t.children.map(e => cn(e)).flat(); return [t, ...n]; }
function Io(t, n, e) { let r = t.routeConfig, i = t._resolve; return r?.title !== void 0 && !Yr(r) && (i[je] = r.title), Yt(() => (t.data = ht(t, t.parent, e).resolve, Eo(i, t, n).pipe(T(o => (t._resolvedData = o, t.data = h(h({}, t.data), o), null))))); }
function Eo(t, n, e) { let r = Pt(t); if (r.length === 0)
    return v({}); let i = {}; return K(r).pipe(se(o => Ao(t[o], n, e).pipe(le(), W(s => { if (s instanceof Se)
    throw dt(new B, s); i[o] = s; }))), Nr(1), T(() => i), Dr(o => tn(o) ? L : ii(o))); }
function Ao(t, n, e) { let r = n._environmentInjector, i = be(t, r), o = i.resolve ? i.resolve(n, e) : P(r, () => i(n, e)); return he(o); }
function Er(t) { return G(n => { let e = t(n); return e ? K(e).pipe(T(() => n)) : v(n); }); }
var ir = (() => { class t {
    buildTitle(e) { let r, i = e.root; for (; i !== void 0;)
        r = this.getResolvedTitleForRoute(i) ?? r, i = i.children.find(o => o.outlet === p); return r; }
    getResolvedTitleForRoute(e) { return e.data[je]; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: () => g(un), providedIn: "root" });
} return t; })(), un = (() => { class t extends ir {
    title;
    constructor(e) { super(), this.title = e; }
    updateTitle(e) { let r = this.buildTitle(e); r !== void 0 && this.title.setTitle(r); }
    static \u0275fac = function (r) { return new (r || t)(y.\u0275\u0275inject(Or.Title)); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), V = new J("", { factory: () => ({}) }), X = new J(""), vt = (() => { class t {
    componentLoaders = new WeakMap;
    childrenLoaders = new WeakMap;
    onLoadStartListener;
    onLoadEndListener;
    compiler = g(Gn);
    loadComponent(e, r) { return R(this, null, function* () { if (this.componentLoaders.get(r))
        return this.componentLoaders.get(r); if (r._loadedComponent)
        return Promise.resolve(r._loadedComponent); this.onLoadStartListener && this.onLoadStartListener(r); let i = R(this, null, function* () { try {
        let o = yield _r(P(e, () => r.loadComponent())), s = yield dn(hn(o));
        return this.onLoadEndListener && this.onLoadEndListener(r), r._loadedComponent = s, s;
    }
    finally {
        this.componentLoaders.delete(r);
    } }); return this.componentLoaders.set(r, i), i; }); }
    loadChildren(e, r) { if (this.childrenLoaders.get(r))
        return this.childrenLoaders.get(r); if (r._loadedRoutes)
        return Promise.resolve({ routes: r._loadedRoutes, injector: r._loadedInjector }); this.onLoadStartListener && this.onLoadStartListener(r); let i = R(this, null, function* () { try {
        let o = yield ln(r, this.compiler, e, this.onLoadEndListener);
        return r._loadedRoutes = o.routes, r._loadedInjector = o.injector, r._loadedNgModuleFactory = o.factory, o;
    }
    finally {
        this.childrenLoaders.delete(r);
    } }); return this.childrenLoaders.set(r, i), i; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function ln(t, n, e, r) { return R(this, null, function* () { let i = yield _r(P(e, () => t.loadChildren())), o = yield dn(hn(i)), s; o instanceof Wn || Array.isArray(o) ? s = o : s = yield n.compileModuleAsync(o), r && r(t); let a, c, u = !1, d; return Array.isArray(s) ? (c = s, u = !0) : (a = s.create(e).injector, d = s, c = a.get(X, [], { optional: !0, self: !0 }).flat()), { routes: c.map(nr), injector: a, factory: d }; }); }
function To(t) { return t && typeof t == "object" && "default" in t; }
function hn(t) { return To(t) ? t.default : t; }
function dn(t) { return R(this, null, function* () { return t; }); }
var mt = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: () => g(Mo), providedIn: "root" });
} return t; })(), Mo = (() => { class t {
    shouldProcessUrl(e) { return !0; }
    extract(e) { return e; }
    merge(e, r) { return e; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), or = new J(""), sr = new J("");
function fn(t, n, e) { let r = t.get(sr), i = t.get(jn); if (!i.startViewTransition || r.skipNextTransition)
    return r.skipNextTransition = !1, new Promise(u => setTimeout(u)); let o, s = new Promise(u => { o = u; }), a = i.startViewTransition(() => (o(), No(t))); a.updateCallbackDone.catch(u => { }), a.ready.catch(u => { }), a.finished.catch(u => { }); let { onViewTransitionCreated: c } = r; return c && P(t, () => c({ transition: a, from: n, to: e })), s; }
function No(t) { return new Promise(n => { Qn({ read: () => setTimeout(n) }, { injector: t }); }); }
var Do = () => { }, yt = new J(""), Rt = (() => { class t {
    currentNavigation = mr(null, { equal: () => !1 });
    currentTransition = null;
    lastSuccessfulNavigation = mr(null);
    events = new Dt;
    transitionAbortWithErrorSubject = new Dt;
    configLoader = g(vt);
    environmentInjector = g(Kt);
    destroyRef = g(Kn);
    urlSerializer = g(de);
    rootContexts = g(fe);
    location = g(Qt);
    inputBindingEnabled = g(ke, { optional: !0 }) !== null;
    titleStrategy = g(ir);
    options = g(V, { optional: !0 }) || {};
    paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
    urlHandlingStrategy = g(mt);
    createViewTransition = g(or, { optional: !0 });
    navigationErrorHandler = g(yt, { optional: !0 });
    navigationId = 0;
    get hasRequestedNavigation() { return this.navigationId !== 0; }
    transitions;
    afterPreactivation = () => v(void 0);
    rootComponentType = null;
    destroyed = !1;
    constructor() { let e = i => this.events.next(new nt(i)), r = i => this.events.next(new it(i)); this.configLoader.onLoadEndListener = r, this.configLoader.onLoadStartListener = e, this.destroyRef.onDestroy(() => { this.destroyed = !0; }); }
    complete() { this.transitions?.complete(); }
    handleNavigationRequest(e) { let r = ++this.navigationId; Te(() => { this.transitions?.next(E(h({}, e), { extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl), targetSnapshot: null, targetRouterState: null, guards: { canActivateChecks: [], canDeactivateChecks: [] }, guardsResult: null, id: r })); }); }
    setupNavigations(e) { return this.transitions = new x(null), this.transitions.pipe(Oe(r => r !== null), G(r => { let i = !1, o = new AbortController, s = () => !i && this.currentTransition?.id === r.id; return v(r).pipe(G(a => { if (this.navigationId > r.id)
        return this.cancelNavigationTransition(r, "", I.SupersededByNewNavigation), L; this.currentTransition = r; let c = this.lastSuccessfulNavigation(); this.currentNavigation.set({ id: a.id, initialUrl: a.rawUrl, extractedUrl: a.extractedUrl, targetBrowserUrl: typeof a.extras.browserUrl == "string" ? this.urlSerializer.parse(a.extras.browserUrl) : a.extras.browserUrl, trigger: a.source, extras: a.extras, previousNavigation: c ? E(h({}, c), { previousNavigation: null }) : null, abort: () => o.abort() }); let u = !e.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl(), d = a.extras.onSameUrlNavigation ?? e.onSameUrlNavigation; if (!u && d !== "reload")
        return this.events.next(new k(a.id, this.urlSerializer.serialize(a.rawUrl), "", ye.IgnoredSameUrlNavigation)), a.resolve(!1), L; if (this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))
        return v(a).pipe(G(f => (this.events.next(new H(f.id, this.urlSerializer.serialize(f.extractedUrl), f.source, f.restoredState)), f.id !== this.navigationId ? L : Promise.resolve(f))), wo(this.environmentInjector, this.configLoader, this.rootComponentType, e.config, this.urlSerializer, this.paramsInheritanceStrategy, o.signal), W(f => { r.targetSnapshot = f.targetSnapshot, r.urlAfterRedirects = f.urlAfterRedirects, this.currentNavigation.update(C => (C.finalUrl = f.urlAfterRedirects, C)); let S = new ce(f.id, this.urlSerializer.serialize(f.extractedUrl), this.urlSerializer.serialize(f.urlAfterRedirects), f.targetSnapshot); this.events.next(S); })); if (u && this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)) {
        let { id: f, extractedUrl: S, source: C, restoredState: te, extras: re } = a, ne = new H(f, this.urlSerializer.serialize(S), C, te);
        this.events.next(ne);
        let Et = Qr(this.rootComponentType, this.environmentInjector).snapshot;
        return this.currentTransition = r = E(h({}, a), { targetSnapshot: Et, urlAfterRedirects: S, extras: E(h({}, re), { skipLocationChange: !1, replaceUrl: !1 }) }), this.currentNavigation.update(Ie => (Ie.finalUrl = S, Ie)), v(r);
    }
    else
        return this.events.next(new k(a.id, this.urlSerializer.serialize(a.extractedUrl), "", ye.IgnoredByUrlHandlingStrategy)), a.resolve(!1), L; }), T(a => { let c = new Xe(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot); return this.events.next(c), this.currentTransition = r = E(h({}, a), { guards: $i(a.targetSnapshot, a.currentSnapshot, this.rootContexts) }), r; }), Yi(a => this.events.next(a)), G(a => { if (r.guardsResult = a.guardsResult, a.guardsResult && typeof a.guardsResult != "boolean")
        throw dt(this.urlSerializer, a.guardsResult); let c = new et(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot, !!a.guardsResult); if (this.events.next(c), !s())
        return L; if (!a.guardsResult)
        return this.cancelNavigationTransition(a, "", I.GuardRejected), L; if (a.guards.canActivateChecks.length === 0)
        return v(a); let u = new tt(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot); if (this.events.next(u), !s())
        return L; let d = !1; return v(a).pipe(bo(this.paramsInheritanceStrategy), W({ next: () => { d = !0; let f = new rt(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot); this.events.next(f); }, complete: () => { d || this.cancelNavigationTransition(a, "", I.NoDataFromResolver); } })); }), Er(a => { let c = d => { let f = []; if (d.routeConfig?._loadedComponent)
        d.component = d.routeConfig?._loadedComponent;
    else if (d.routeConfig?.loadComponent) {
        let S = d._environmentInjector;
        f.push(this.configLoader.loadComponent(S, d.routeConfig).then(C => { d.component = C; }));
    } for (let S of d.children)
        f.push(...c(S)); return f; }, u = c(a.targetSnapshot.root); return u.length === 0 ? v(a) : K(Promise.all(u).then(() => a)); }), Er(() => this.afterPreactivation()), G(() => { let { currentSnapshot: a, targetSnapshot: c } = r, u = this.createViewTransition?.(this.environmentInjector, a.root, c.root); return u ? K(u).pipe(T(() => r)) : v(r); }), De(1), T(a => { let c = Li(e.routeReuseStrategy, a.targetSnapshot, a.currentRouterState); this.currentTransition = r = a = E(h({}, a), { targetRouterState: c }), this.currentNavigation.update(u => (u.targetRouterState = c, u)), this.events.next(new ue), s() && (new qt(e.routeReuseStrategy, r.targetRouterState, r.currentRouterState, u => this.events.next(u), this.inputBindingEnabled).activate(this.rootContexts), s() && (i = !0, this.currentNavigation.update(u => (u.abort = Do, u)), this.lastSuccessfulNavigation.set(Te(this.currentNavigation)), this.events.next(new N(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects))), this.titleStrategy?.updateTitle(a.targetRouterState.snapshot), a.resolve(!0))); }), Ot(rn(o.signal).pipe(Oe(() => !i && !r.targetRouterState), W(() => { this.cancelNavigationTransition(r, o.signal.reason + "", I.Aborted); }))), W({ complete: () => { i = !0; } }), Ot(this.transitionAbortWithErrorSubject.pipe(W(a => { throw a; }))), ai(() => { o.abort(), i || this.cancelNavigationTransition(r, "", I.SupersededByNewNavigation), this.currentTransition?.id === r.id && (this.currentNavigation.set(null), this.currentTransition = null); }), Dr(a => { if (i = !0, this.destroyed)
        return r.resolve(!1), L; if (en(a))
        this.events.next(new M(r.id, this.urlSerializer.serialize(r.extractedUrl), a.message, a.cancellationCode)), ki(a) ? this.events.next(new Ce(a.url, a.navigationBehaviorOptions)) : r.resolve(!1);
    else {
        let c = new Z(r.id, this.urlSerializer.serialize(r.extractedUrl), a, r.targetSnapshot ?? void 0);
        try {
            let u = P(this.environmentInjector, () => this.navigationErrorHandler?.(c));
            if (u instanceof Se) {
                let { message: d, cancellationCode: f } = dt(this.urlSerializer, u);
                this.events.next(new M(r.id, this.urlSerializer.serialize(r.extractedUrl), d, f)), this.events.next(new Ce(u.redirectTo, u.navigationBehaviorOptions));
            }
            else
                throw this.events.next(c), a;
        }
        catch (u) {
            this.options.resolveNavigationPromiseOnError ? r.resolve(!1) : r.reject(u);
        }
    } return L; })); })); }
    cancelNavigationTransition(e, r, i) { let o = new M(e.id, this.urlSerializer.serialize(e.extractedUrl), r, i); this.events.next(o), e.resolve(!1); }
    isUpdatingInternalState() { return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString(); }
    isUpdatedBrowserUrl() { let e = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))), r = Te(this.currentNavigation), i = r?.targetBrowserUrl ?? r?.extractedUrl; return e.toString() !== i?.toString() && !r?.extras.skipLocationChange; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function Oo(t) { return t !== ve; }
var ar = new J("");
function pn(t, n, e) { let r = new Set; n.snapshot.root && gn(n.snapshot.root, r); let i = t.retrieveStoredRouteHandles?.() || []; for (let o of i) {
    let s = o;
    if (s?.route?.value?.snapshot)
        for (let a of s.route.value.snapshot.pathFromRoot)
            a.routeConfig && r.add(a.routeConfig);
} Wt(e, r, t, !1); }
function gn(t, n) { t.routeConfig && n.add(t.routeConfig); for (let e of t.children)
    gn(e, n); }
function Wt(t, n, e, r) { for (let i of t) {
    let o = r || !!((i._injector || i._loadedInjector) && !n.has(i) && (e.shouldDestroyInjector?.(i) ?? !1));
    i.children && Wt(i.children, n, e, o), i.loadChildren && i._loadedRoutes && Wt(i._loadedRoutes, n, e, o), o && (i._injector && (i._injector.destroy(), i._injector = void 0), i._loadedInjector && (i._loadedInjector.destroy(), i._loadedInjector = void 0));
} }
function Uo(t) { let n = t; n && n.componentRef && n.componentRef.destroy(); }
var vn = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: () => g(Po), providedIn: "root" });
} return t; })(), pt = class {
    shouldDetach(n) { return !1; }
    store(n, e) { }
    shouldAttach(n) { return !1; }
    retrieve(n) { return null; }
    shouldReuseRoute(n, e) { return n.routeConfig === e.routeConfig; }
    shouldDestroyInjector(n) { return !0; }
}, Po = (() => { class t extends pt {
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = y.\u0275\u0275getInheritedFactory(t)))(i || t); }; })();
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), ze = (() => { class t {
    urlSerializer = g(de);
    options = g(V, { optional: !0 }) || {};
    canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
    location = g(Qt);
    urlHandlingStrategy = g(mt);
    urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    currentUrlTree = new O;
    getCurrentUrlTree() { return this.currentUrlTree; }
    rawUrlTree = this.currentUrlTree;
    getRawUrlTree() { return this.rawUrlTree; }
    createBrowserPath({ finalUrl: e, initialUrl: r, targetBrowserUrl: i }) { let o = e !== void 0 ? this.urlHandlingStrategy.merge(e, r) : r, s = i ?? o; return s instanceof O ? this.urlSerializer.serialize(s) : s; }
    commitTransition({ targetRouterState: e, finalUrl: r, initialUrl: i }) { r && e ? (this.currentUrlTree = r, this.rawUrlTree = this.urlHandlingStrategy.merge(r, i), this.routerState = e) : this.rawUrlTree = i; }
    routerState = Qr(null, g(Kt));
    getRouterState() { return this.routerState; }
    _stateMemento = this.createStateMemento();
    get stateMemento() { return this._stateMemento; }
    updateStateMemento() { this._stateMemento = this.createStateMemento(); }
    createStateMemento() { return { rawUrlTree: this.rawUrlTree, currentUrlTree: this.currentUrlTree, routerState: this.routerState }; }
    restoredState() { return this.location.getState(); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: () => g(_o), providedIn: "root" });
} return t; })(), _o = (() => { class t extends ze {
    currentPageId = 0;
    lastSuccessfulId = -1;
    get browserPageId() { return this.canceledNavigationResolution !== "computed" ? this.currentPageId : this.restoredState()?.\u0275routerPageId ?? this.currentPageId; }
    registerNonRouterCurrentEntryChangeListener(e) { return this.location.subscribe(r => { r.type === "popstate" && setTimeout(() => { e(r.url, r.state, "popstate"); }); }); }
    handleRouterEvent(e, r) { e instanceof H ? this.updateStateMemento() : e instanceof k ? this.commitTransition(r) : e instanceof ce ? this.urlUpdateStrategy === "eager" && (r.extras.skipLocationChange || this.setBrowserUrl(this.createBrowserPath(r), r)) : e instanceof ue ? (this.commitTransition(r), this.urlUpdateStrategy === "deferred" && !r.extras.skipLocationChange && this.setBrowserUrl(this.createBrowserPath(r), r)) : e instanceof M && !Jt(e) ? this.restoreHistory(r) : e instanceof Z ? this.restoreHistory(r, !0) : e instanceof N && (this.lastSuccessfulId = e.id, this.currentPageId = this.browserPageId); }
    setBrowserUrl(e, { extras: r, id: i }) { let { replaceUrl: o, state: s } = r; if (this.location.isCurrentPathEqualTo(e) || o) {
        let a = this.browserPageId, c = h(h({}, s), this.generateNgRouterState(i, a));
        this.location.replaceState(e, "", c);
    }
    else {
        let a = h(h({}, s), this.generateNgRouterState(i, this.browserPageId + 1));
        this.location.go(e, "", a);
    } }
    restoreHistory(e, r = !1) { if (this.canceledNavigationResolution === "computed") {
        let i = this.browserPageId, o = this.currentPageId - i;
        o !== 0 ? this.location.historyGo(o) : this.getCurrentUrlTree() === e.finalUrl && o === 0 && (this.resetInternalState(e), this.resetUrlToCurrentUrlTree());
    }
    else
        this.canceledNavigationResolution === "replace" && (r && this.resetInternalState(e), this.resetUrlToCurrentUrlTree()); }
    resetInternalState({ finalUrl: e }) { this.routerState = this.stateMemento.routerState, this.currentUrlTree = this.stateMemento.currentUrlTree, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, e ?? this.rawUrlTree); }
    resetUrlToCurrentUrlTree() { this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)); }
    generateNgRouterState(e, r) { return this.canceledNavigationResolution === "computed" ? { navigationId: e, \u0275routerPageId: r } : { navigationId: e }; }
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = y.\u0275\u0275getInheritedFactory(t)))(i || t); }; })();
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function Ct(t, n) { t.events.pipe(Oe(e => e instanceof N || e instanceof M || e instanceof Z || e instanceof k), T(e => e instanceof N || e instanceof k ? 0 : (e instanceof M ? e.code === I.Redirect || e.code === I.SupersededByNewNavigation : !1) ? 2 : 1), Oe(e => e !== 2), De(1)).subscribe(() => { n(); }); }
var cr = { paths: "exact", fragment: "ignored", matrixParams: "ignored", queryParams: "exact" }, ur = { paths: "subset", fragment: "ignored", matrixParams: "ignored", queryParams: "subset" }, F = (() => { class t {
    get currentUrlTree() { return this.stateManager.getCurrentUrlTree(); }
    get rawUrlTree() { return this.stateManager.getRawUrlTree(); }
    disposed = !1;
    nonRouterCurrentEntryChangeSubscription;
    console = g(Yn);
    stateManager = g(ze);
    options = g(V, { optional: !0 }) || {};
    pendingTasks = g(Zn);
    urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    navigationTransitions = g(Rt);
    urlSerializer = g(de);
    location = g(Qt);
    urlHandlingStrategy = g(mt);
    injector = g(Kt);
    _events = new Dt;
    get events() { return this._events; }
    get routerState() { return this.stateManager.getRouterState(); }
    navigated = !1;
    routeReuseStrategy = g(vn);
    injectorCleanup = g(ar, { optional: !0 });
    onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
    config = g(X, { optional: !0 })?.flat() ?? [];
    componentInputBindingEnabled = !!g(ke, { optional: !0 });
    currentNavigation = this.navigationTransitions.currentNavigation.asReadonly();
    constructor() { this.resetConfig(this.config), this.navigationTransitions.setupNavigations(this).subscribe({ error: e => { } }), this.subscribeToNavigationEvents(); }
    eventsSubscription = new oi;
    subscribeToNavigationEvents() { let e = this.navigationTransitions.events.subscribe(r => { try {
        let i = this.navigationTransitions.currentTransition, o = Te(this.navigationTransitions.currentNavigation);
        if (i !== null && o !== null) {
            if (this.stateManager.handleRouterEvent(r, o), r instanceof M && r.code !== I.Redirect && r.code !== I.SupersededByNewNavigation)
                this.navigated = !0;
            else if (r instanceof N)
                this.navigated = !0, this.injectorCleanup?.(this.routeReuseStrategy, this.routerState, this.config);
            else if (r instanceof Ce) {
                let s = r.navigationBehaviorOptions, a = this.urlHandlingStrategy.merge(r.url, i.currentRawUrl), c = h({ scroll: i.extras.scroll, browserUrl: i.extras.browserUrl, info: i.extras.info, skipLocationChange: i.extras.skipLocationChange, replaceUrl: i.extras.replaceUrl || this.urlUpdateStrategy === "eager" || Oo(i.source) }, s);
                this.scheduleNavigation(a, ve, null, c, { resolve: i.resolve, reject: i.reject, promise: i.promise });
            }
        }
        Pi(r) && this._events.next(r);
    }
    catch (i) {
        this.navigationTransitions.transitionAbortWithErrorSubject.next(i);
    } }); this.eventsSubscription.add(e); }
    resetRootComponentType(e) { this.routerState.root.component = e, this.navigationTransitions.rootComponentType = e; }
    initialNavigation() { this.setUpLocationChangeListener(), this.navigationTransitions.hasRequestedNavigation || this.navigateToSyncWithBrowser(this.location.path(!0), ve, this.stateManager.restoredState()); }
    setUpLocationChangeListener() { this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((e, r, i) => { this.navigateToSyncWithBrowser(e, i, r); }); }
    navigateToSyncWithBrowser(e, r, i) { let o = { replaceUrl: !0 }, s = i?.navigationId ? i : null; if (i) {
        let c = h({}, i);
        delete c.navigationId, delete c.\u0275routerPageId, Object.keys(c).length !== 0 && (o.state = c);
    } let a = this.parseUrl(e); this.scheduleNavigation(a, r, s, o).catch(c => { this.disposed || this.injector.get(Jn)(c); }); }
    get url() { return this.serializeUrl(this.currentUrlTree); }
    getCurrentNavigation() { return Te(this.navigationTransitions.currentNavigation); }
    get lastSuccessfulNavigation() { return this.navigationTransitions.lastSuccessfulNavigation; }
    resetConfig(e) { this.config = e.map(nr), this.navigated = !1; }
    ngOnDestroy() { this.dispose(); }
    dispose() { this._events.unsubscribe(), this.navigationTransitions.complete(), this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(), this.nonRouterCurrentEntryChangeSubscription = void 0, this.disposed = !0, this.eventsSubscription.unsubscribe(); }
    createUrlTree(e, r = {}) { let { relativeTo: i, queryParams: o, fragment: s, queryParamsHandling: a, preserveFragment: c } = r, u = c ? this.currentUrlTree.fragment : s, d = null; switch (a ?? this.options.defaultQueryParamsHandling) {
        case "merge":
            d = h(h({}, this.currentUrlTree.queryParams), o);
            break;
        case "preserve":
            d = this.currentUrlTree.queryParams;
            break;
        default: d = o || null;
    } d !== null && (d = this.removeEmptyProps(d)); let f; try {
        let S = i ? i.snapshot : this.routerState.snapshot.root;
        f = Hr(S);
    }
    catch {
        (typeof e[0] != "string" || e[0][0] !== "/") && (e = []), f = this.currentUrlTree.root;
    } return Vr(f, e, d, u ?? null, this.urlSerializer); }
    navigateByUrl(e, r = { skipLocationChange: !1 }) { let i = Y(e) ? e : this.parseUrl(e), o = this.urlHandlingStrategy.merge(i, this.rawUrlTree); return this.scheduleNavigation(o, ve, null, r); }
    navigate(e, r = { skipLocationChange: !1 }) { return Lo(e), this.navigateByUrl(this.createUrlTree(e, r), r); }
    serializeUrl(e) { return this.urlSerializer.serialize(e); }
    parseUrl(e) { try {
        return this.urlSerializer.parse(e);
    }
    catch {
        return this.console.warn(Xn(4018, !1)), this.urlSerializer.parse("/");
    } }
    isActive(e, r) { let i; if (r === !0 ? i = h({}, cr) : r === !1 ? i = h({}, ur) : i = r, Y(e))
        return _t(this.currentUrlTree, e, i); let o = this.parseUrl(e); return _t(this.currentUrlTree, o, i); }
    removeEmptyProps(e) { return Object.entries(e).reduce((r, [i, o]) => (o != null && (r[i] = o), r), {}); }
    scheduleNavigation(e, r, i, o, s) { if (this.disposed)
        return Promise.resolve(!1); let a, c, u; s ? (a = s.resolve, c = s.reject, u = s.promise) : u = new Promise((f, S) => { a = f, c = S; }); let d = this.pendingTasks.add(); return Ct(this, () => { queueMicrotask(() => this.pendingTasks.remove(d)); }), this.navigationTransitions.handleNavigationRequest({ source: r, restoredState: i, currentUrlTree: this.currentUrlTree, currentRawUrl: this.currentUrlTree, rawUrl: e, extras: o, resolve: a, reject: c, promise: u, currentSnapshot: this.routerState.snapshot, currentRouterState: this.routerState }), u.catch(f => Promise.reject(f)); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function Lo(t) { for (let n = 0; n < t.length; n++)
    if (t[n] == null)
        throw new A(4008, !1); }
import * as mn from "@angular/common";
import { ViewportScroller as yn, PlatformNavigation as xo, PlatformLocation as jo, \u0275PRECOMMIT_HANDLER_SUPPORTED as ko, Location as Rn, \u0275NavigationAdapterForLocation as $o, LOCATION_INITIALIZED as zo, LocationStrategy as fr, HashLocationStrategy as Cn, PathLocationStrategy as Fo } from "@angular/common";
import * as l from "@angular/core";
import { signal as qo, untracked as pr, inject as w, \u0275INTERNAL_APPLICATION_ERROR_HANDLER as Bo, HostAttributeToken as Ho, \u0275RuntimeError as Bs, booleanAttribute as lr, EventEmitter as Vo, createEnvironmentInjector as Go, InjectionToken as qe, NgZone as Wo, EnvironmentInjector as Qo, DestroyRef as Ko, afterNextRender as Yo, \u0275promiseWithResolvers as Zo, makeEnvironmentProviders as Jo, APP_BOOTSTRAP_LISTENER as Sn, Injector as wn, ApplicationRef as Xo, \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION as es, provideAppInitializer as bn, \u0275performanceMarkFeature as ts, ENVIRONMENT_INITIALIZER as ea } from "@angular/core";
import { Subject as gr, of as ee, from as St } from "rxjs";
import { mergeAll as wt, catchError as rs, filter as ns, concatMap as is, mergeMap as os } from "rxjs/operators";
var bt = (() => { class t {
    router;
    route;
    tabIndexAttribute;
    renderer;
    el;
    locationStrategy;
    reactiveHref = qo(null);
    get href() { return pr(this.reactiveHref); }
    set href(e) { this.reactiveHref.set(e); }
    target;
    queryParams;
    fragment;
    queryParamsHandling;
    state;
    info;
    relativeTo;
    isAnchorElement;
    subscription;
    onChanges = new gr;
    applicationErrorHandler = w(Bo);
    options = w(V, { optional: !0 });
    constructor(e, r, i, o, s, a) { this.router = e, this.route = r, this.tabIndexAttribute = i, this.renderer = o, this.el = s, this.locationStrategy = a, this.reactiveHref.set(w(new Ho("href"), { optional: !0 })); let c = s.nativeElement.tagName?.toLowerCase(); this.isAnchorElement = c === "a" || c === "area" || !!(typeof customElements == "object" && customElements.get(c)?.observedAttributes?.includes?.("href")), this.isAnchorElement && (this.setTabIndexIfNotOnNativeEl("0"), this.subscribeToNavigationEventsIfNecessary()); }
    subscribeToNavigationEventsIfNecessary() { this.subscription === void 0 && (this.subscription = this.router.events.subscribe(e => { e instanceof N && this.updateHref(); })); }
    preserveFragment = !1;
    skipLocationChange = !1;
    replaceUrl = !1;
    setTabIndexIfNotOnNativeEl(e) { this.tabIndexAttribute != null || this.isAnchorElement || this.applyAttributeValue("tabindex", e); }
    ngOnChanges(e) { this.isAnchorElement && this.updateHref(), this.onChanges.next(this); }
    routerLinkInput = null;
    set routerLink(e) { e == null ? (this.routerLinkInput = null, this.setTabIndexIfNotOnNativeEl(null)) : (Y(e) ? this.routerLinkInput = e : this.routerLinkInput = Array.isArray(e) ? e : [e], this.setTabIndexIfNotOnNativeEl("0")); }
    onClick(e, r, i, o, s) { let a = this.urlTree; if (a === null || this.isAnchorElement && (e !== 0 || r || i || o || s || typeof this.target == "string" && this.target != "_self"))
        return !0; let c = { skipLocationChange: this.skipLocationChange, replaceUrl: this.replaceUrl, state: this.state, info: this.info }; return this.router.navigateByUrl(a, c)?.catch(u => { this.applicationErrorHandler(u); }), !this.isAnchorElement; }
    ngOnDestroy() { this.subscription?.unsubscribe(); }
    updateHref() { let e = this.urlTree; this.reactiveHref.set(e !== null && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e)) ?? "" : null); }
    applyAttributeValue(e, r) { let i = this.renderer, o = this.el.nativeElement; r !== null ? i.setAttribute(o, e, r) : i.removeAttribute(o, e); }
    get urlTree() { return this.routerLinkInput === null ? null : Y(this.routerLinkInput) ? this.routerLinkInput : this.router.createUrlTree(this.routerLinkInput, { relativeTo: this.relativeTo !== void 0 ? this.relativeTo : this.route, queryParams: this.queryParams, fragment: this.fragment, queryParamsHandling: this.queryParamsHandling, preserveFragment: this.preserveFragment }); }
    static \u0275fac = function (r) { return new (r || t)(l.\u0275\u0275directiveInject(F), l.\u0275\u0275directiveInject(z), l.\u0275\u0275injectAttribute("tabindex"), l.\u0275\u0275directiveInject(l.Renderer2), l.\u0275\u0275directiveInject(l.ElementRef), l.\u0275\u0275directiveInject(mn.LocationStrategy)); };
    static \u0275dir = l.\u0275\u0275defineDirective({ type: t, selectors: [["", "routerLink", ""]], hostVars: 2, hostBindings: function (r, i) { r & 1 && l.\u0275\u0275listener("click", function (s) { return i.onClick(s.button, s.ctrlKey, s.shiftKey, s.altKey, s.metaKey); }), r & 2 && l.\u0275\u0275attribute("href", i.reactiveHref(), l.\u0275\u0275sanitizeUrlOrResourceUrl)("target", i.target); }, inputs: { target: "target", queryParams: "queryParams", fragment: "fragment", queryParamsHandling: "queryParamsHandling", state: "state", info: "info", relativeTo: "relativeTo", preserveFragment: [2, "preserveFragment", "preserveFragment", lr], skipLocationChange: [2, "skipLocationChange", "skipLocationChange", lr], replaceUrl: [2, "replaceUrl", "replaceUrl", lr], routerLink: "routerLink" }, features: [l.\u0275\u0275NgOnChangesFeature] });
} return t; })(), ss = (() => { class t {
    router;
    element;
    renderer;
    cdr;
    links;
    classes = [];
    routerEventsSubscription;
    linkInputChangesSubscription;
    _isActive = !1;
    get isActive() { return this._isActive; }
    routerLinkActiveOptions = { exact: !1 };
    ariaCurrentWhenActive;
    isActiveChange = new Vo;
    link = w(bt, { optional: !0 });
    constructor(e, r, i, o) { this.router = e, this.element = r, this.renderer = i, this.cdr = o, this.routerEventsSubscription = e.events.subscribe(s => { s instanceof N && this.update(); }); }
    ngAfterContentInit() { ee(this.links.changes, ee(null)).pipe(wt()).subscribe(e => { this.update(), this.subscribeToEachLinkOnChanges(); }); }
    subscribeToEachLinkOnChanges() { this.linkInputChangesSubscription?.unsubscribe(); let e = [...this.links.toArray(), this.link].filter(r => !!r).map(r => r.onChanges); this.linkInputChangesSubscription = St(e).pipe(wt()).subscribe(r => { this._isActive !== this.isLinkActive(this.router)(r) && this.update(); }); }
    set routerLinkActive(e) { let r = Array.isArray(e) ? e : e.split(" "); this.classes = r.filter(i => !!i); }
    ngOnChanges(e) { this.update(); }
    ngOnDestroy() { this.routerEventsSubscription.unsubscribe(), this.linkInputChangesSubscription?.unsubscribe(); }
    update() { !this.links || !this.router.navigated || queueMicrotask(() => { let e = this.hasActiveLinks(); this.classes.forEach(r => { e ? this.renderer.addClass(this.element.nativeElement, r) : this.renderer.removeClass(this.element.nativeElement, r); }), e && this.ariaCurrentWhenActive !== void 0 ? this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString()) : this.renderer.removeAttribute(this.element.nativeElement, "aria-current"), this._isActive !== e && (this._isActive = e, this.cdr.markForCheck(), this.isActiveChange.emit(e)); }); }
    isLinkActive(e) { let r = as(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : this.routerLinkActiveOptions.exact ?? !1 ? h({}, cr) : h({}, ur); return i => { let o = i.urlTree; return o ? pr(Zt(o, e, r)) : !1; }; }
    hasActiveLinks() { let e = this.isLinkActive(this.router); return this.link && e(this.link) || this.links.some(e); }
    static \u0275fac = function (r) { return new (r || t)(l.\u0275\u0275directiveInject(F), l.\u0275\u0275directiveInject(l.ElementRef), l.\u0275\u0275directiveInject(l.Renderer2), l.\u0275\u0275directiveInject(l.ChangeDetectorRef)); };
    static \u0275dir = l.\u0275\u0275defineDirective({ type: t, selectors: [["", "routerLinkActive", ""]], contentQueries: function (r, i, o) { if (r & 1 && l.\u0275\u0275contentQuery(o, bt, 5), r & 2) {
            let s;
            l.\u0275\u0275queryRefresh(s = l.\u0275\u0275loadQuery()) && (i.links = s);
        } }, inputs: { routerLinkActiveOptions: "routerLinkActiveOptions", ariaCurrentWhenActive: "ariaCurrentWhenActive", routerLinkActive: "routerLinkActive" }, outputs: { isActiveChange: "isActiveChange" }, exportAs: ["routerLinkActive"], features: [l.\u0275\u0275NgOnChangesFeature] });
} return t; })();
function as(t) { return !!t.paths; }
var Fe = class {
}, cs = (() => { class t {
    preload(e, r) { return r().pipe(rs(() => ee(null))); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), us = (() => { class t {
    preload(e, r) { return ee(null); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), In = (() => { class t {
    router;
    injector;
    preloadingStrategy;
    loader;
    subscription;
    constructor(e, r, i, o) { this.router = e, this.injector = r, this.preloadingStrategy = i, this.loader = o; }
    setUpPreloading() { this.subscription = this.router.events.pipe(ns(e => e instanceof N), is(() => this.preload())).subscribe(() => { }); }
    preload() { return this.processRoutes(this.injector, this.router.config); }
    ngOnDestroy() { this.subscription?.unsubscribe(); }
    processRoutes(e, r) { let i = []; for (let o of r) {
        o.providers && !o._injector && (o._injector = Go(o.providers, e, ""));
        let s = o._injector ?? e;
        o._loadedNgModuleFactory && !o._loadedInjector && (o._loadedInjector = o._loadedNgModuleFactory.create(s).injector);
        let a = o._loadedInjector ?? s;
        (o.loadChildren && !o._loadedRoutes && o.canLoad === void 0 || o.loadComponent && !o._loadedComponent) && i.push(this.preloadConfig(s, o)), (o.children || o._loadedRoutes) && i.push(this.processRoutes(a, o.children ?? o._loadedRoutes));
    } return St(i).pipe(wt()); }
    preloadConfig(e, r) { return this.preloadingStrategy.preload(r, () => { if (e.destroyed)
        return ee(null); let i; r.loadChildren && r.canLoad === void 0 ? i = St(this.loader.loadChildren(e, r)) : i = ee(null); let o = i.pipe(os(s => s === null ? ee(void 0) : (r._loadedRoutes = s.routes, r._loadedInjector = s.injector, r._loadedNgModuleFactory = s.factory, this.processRoutes(s.injector ?? e, s.routes)))); if (r.loadComponent && !r._loadedComponent) {
        let s = this.loader.loadComponent(e, r);
        return St([o, s]).pipe(wt());
    }
    else
        return o; }); }
    static \u0275fac = function (r) { return new (r || t)(l.\u0275\u0275inject(F), l.\u0275\u0275inject(l.EnvironmentInjector), l.\u0275\u0275inject(Fe), l.\u0275\u0275inject(vt)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), It = new qe(""), En = (() => { class t {
    options;
    routerEventsSubscription;
    scrollEventsSubscription;
    lastId = 0;
    lastSource = ve;
    restoredId = 0;
    store = {};
    urlSerializer = w(de);
    zone = w(Wo);
    viewportScroller = w(yn);
    transitions = w(Rt);
    constructor(e) { this.options = e, this.options.scrollPositionRestoration ||= "disabled", this.options.anchorScrolling ||= "disabled"; }
    init() { this.options.scrollPositionRestoration !== "disabled" && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents(); }
    createScrollEvents() { return this.transitions.events.subscribe(e => { e instanceof H ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = e.navigationTrigger, this.restoredId = e.restoredState ? e.restoredState.navigationId : 0) : e instanceof N ? (this.lastId = e.id, this.scheduleScrollEvent(e, this.urlSerializer.parse(e.urlAfterRedirects).fragment)) : e instanceof k && e.code === ye.IgnoredSameUrlNavigation && (this.lastSource = void 0, this.restoredId = 0, this.scheduleScrollEvent(e, this.urlSerializer.parse(e.url).fragment)); }); }
    consumeScrollEvents() { return this.transitions.events.subscribe(e => { if (!(e instanceof Re) || e.scrollBehavior === "manual")
        return; let r = { behavior: "instant" }; e.position ? this.options.scrollPositionRestoration === "top" ? this.viewportScroller.scrollToPosition([0, 0], r) : this.options.scrollPositionRestoration === "enabled" && this.viewportScroller.scrollToPosition(e.position, r) : e.anchor && this.options.anchorScrolling === "enabled" ? this.viewportScroller.scrollToAnchor(e.anchor) : this.options.scrollPositionRestoration !== "disabled" && this.viewportScroller.scrollToPosition([0, 0]); }); }
    scheduleScrollEvent(e, r) { let i = pr(this.transitions.currentNavigation)?.extras.scroll; this.zone.runOutsideAngular(() => R(this, null, function* () { yield new Promise(o => { setTimeout(o), typeof requestAnimationFrame < "u" && requestAnimationFrame(o); }), this.zone.run(() => { this.transitions.events.next(new Re(e, this.lastSource === "popstate" ? this.store[this.restoredId] : null, r, i)); }); })); }
    ngOnDestroy() { this.routerEventsSubscription?.unsubscribe(), this.scrollEventsSubscription?.unsubscribe(); }
    static \u0275fac = function (r) { l.\u0275\u0275invalidFactory(); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })();
var ls = (() => { class t extends ze {
    injector = w(Qo);
    navigation = w(xo);
    inMemoryScrollingEnabled = w(It, { optional: !0 }) !== null;
    base = new URL(w(jo).href).origin;
    appRootURL = new URL(this.location.prepareExternalUrl?.("/") ?? "/", this.base).href;
    precommitHandlerSupported = w(ko);
    activeHistoryEntry = this.navigation.currentEntry;
    currentNavigation = {};
    nonRouterCurrentEntryChangeSubject = new gr;
    nonRouterEntryChangeListener;
    get registered() { return this.nonRouterEntryChangeListener !== void 0 && !this.nonRouterEntryChangeListener.closed; }
    constructor() { super(); let e = r => { this.handleNavigate(r); }; this.navigation.addEventListener("navigate", e), w(Ko).onDestroy(() => this.navigation.removeEventListener("navigate", e)); }
    registerNonRouterCurrentEntryChangeListener(e) { return this.activeHistoryEntry = this.navigation.currentEntry, this.nonRouterEntryChangeListener = this.nonRouterCurrentEntryChangeSubject.subscribe(({ path: r, state: i }) => { e(r, i, "popstate"); }), this.nonRouterEntryChangeListener; }
    handleRouterEvent(e, r) { return R(this, null, function* () { if (this.currentNavigation = E(h({}, this.currentNavigation), { routerTransition: r }), e instanceof H)
        this.updateStateMemento();
    else if (e instanceof k)
        this.finishNavigation(), this.commitTransition(r);
    else if (e instanceof ce)
        this.urlUpdateStrategy === "eager" && !r.extras.skipLocationChange && this.createNavigationForTransition(r);
    else if (e instanceof ue)
        this.commitTransition(r), this.urlUpdateStrategy === "deferred" && !r.extras.skipLocationChange && this.createNavigationForTransition(r);
    else if (e instanceof M || e instanceof Z)
        this.cancel(r, e);
    else if (e instanceof N) {
        let { resolveHandler: i, removeAbortListener: o } = this.currentNavigation;
        this.currentNavigation = {}, o?.(), this.activeHistoryEntry = this.navigation.currentEntry, Yo({ read: () => i?.() }, { injector: this.injector });
    } }); }
    createNavigationForTransition(e) { let { navigationEvent: r } = this.currentNavigation; if (r && (r.navigationType === "traverse" || r.navigationType === "reload") && this.eventAndRouterDestinationsMatch(r, e))
        return; this.currentNavigation.removeAbortListener?.(); let i = this.createBrowserPath(e); this.navigate(i, e); }
    navigate(e, r) { let i = r.extras.skipLocationChange ? this.navigation.currentEntry.url : this.location.prepareExternalUrl(e), o = E(h({}, r.extras.state), { navigationId: r.id }), s = { \u0275routerInfo: { intercept: !0 } }; !this.navigation.transition && this.currentNavigation.navigationEvent && (r.extras.replaceUrl = !1); let a = this.location.isCurrentPathEqualTo(i) || r.extras.replaceUrl || r.extras.skipLocationChange ? "replace" : "push"; hr(this.navigation.navigate(i, { state: o, history: a, info: s })); }
    finishNavigation() { this.currentNavigation?.resolveHandler?.(), this.currentNavigation = {}; }
    cancel(e, r) { return R(this, null, function* () { this.currentNavigation.rejectNavigateEvent?.(); let i = {}; if (this.currentNavigation = i, Jt(r))
        return; let o = this.canceledNavigationResolution === "computed" && this.navigation.currentEntry.key !== this.activeHistoryEntry.key; if (this.resetInternalState(e.finalUrl, o), this.navigation.currentEntry.id !== this.activeHistoryEntry.id && !(r instanceof M && r.code === I.Aborted && (yield Promise.resolve(), this.currentNavigation !== i)))
        if (o)
            hr(this.navigation.traverseTo(this.activeHistoryEntry.key, { info: { \u0275routerInfo: { intercept: !1 } } }));
        else {
            let s = this.urlSerializer.serialize(this.getCurrentUrlTree()), a = this.location.prepareExternalUrl(s);
            hr(this.navigation.navigate(a, { state: this.activeHistoryEntry.getState(), history: "replace", info: { \u0275routerInfo: { intercept: !1 } } }));
        } }); }
    resetInternalState(e, r) { this.routerState = this.stateMemento.routerState, this.currentUrlTree = this.stateMemento.currentUrlTree, this.rawUrlTree = r ? this.stateMemento.rawUrlTree : this.urlHandlingStrategy.merge(this.currentUrlTree, e ?? this.rawUrlTree); }
    handleNavigate(e) { if (!e.canIntercept)
        return; let r = e?.info?.\u0275routerInfo; if (r && !r.intercept)
        return; let i = !!r; if (!i && (this.currentNavigation.routerTransition?.abort(), !this.registered)) {
        this.finishNavigation();
        return;
    } this.currentNavigation = h({}, this.currentNavigation), this.currentNavigation.navigationEvent = e; let o = () => { this.currentNavigation.routerTransition?.abort(); }; e.signal.addEventListener("abort", o), this.currentNavigation.removeAbortListener = () => e.signal.removeEventListener("abort", o); let a = { scroll: this.inMemoryScrollingEnabled ? "manual" : this.currentNavigation.routerTransition?.extras.scroll ?? "after-transition" }, { promise: c, resolve: u, reject: d } = Zo(); this.currentNavigation.resolveHandler = () => { this.currentNavigation.removeAbortListener?.(), u(); }, this.currentNavigation.rejectNavigateEvent = () => { this.currentNavigation.removeAbortListener?.(), d(); }, c.catch(() => { }), a.handler = () => c, e.intercept(a), i || this.handleNavigateEventTriggeredOutsideRouterAPIs(e); }
    handleNavigateEventTriggeredOutsideRouterAPIs(e) { let r = e.destination.url.substring(this.appRootURL.length - 1), i = e.destination.getState(); this.nonRouterCurrentEntryChangeSubject.next({ path: r, state: i }); }
    eventAndRouterDestinationsMatch(e, r) { let i = this.createBrowserPath(r), o = new URL(e.destination.url), s = this.location.prepareExternalUrl(i); return new URL(s, o.origin).href === o.href; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function hr(t) { return t.finished.catch(() => { }), t.committed.catch(() => { }), t; }
function hs(t, ...n) { return Jo([{ provide: X, multi: !0, useValue: t }, [], { provide: z, useFactory: An }, { provide: Sn, multi: !0, useFactory: Tn }, n.map(e => e.\u0275providers)]); }
function An() { return w(F).routerState.root; }
function _(t, n) { return { \u0275kind: t, \u0275providers: n }; }
function ds(t) { return [{ provide: X, multi: !0, useValue: t }, []]; }
function fs(t = {}) { return _(4, [{ provide: It, useFactory: () => new En(t) }]); }
function ps() { return _(11, [{ provide: ze, useExisting: ls }, { provide: Rn, useClass: $o }, []]); }
function Tn() { let t = w(wn); return n => { let e = t.get(Xo); if (n !== e.components[0])
    return; let r = t.get(F), i = t.get(Mn); t.get(vr) === 1 && r.initialNavigation(), t.get(On, null, { optional: !0 })?.setUpPreloading(), t.get(It, null, { optional: !0 })?.init(), r.resetRootComponentType(e.componentTypes[0]), i.closed || (i.next(), i.complete(), i.unsubscribe()); }; }
var Mn = new qe("", { factory: () => new gr }), vr = new qe("", { factory: () => 1 });
function Nn() { let t = [{ provide: es, useValue: !0 }, { provide: vr, useValue: 0 }, bn(() => { let n = w(wn); return n.get(zo, Promise.resolve()).then(() => new Promise(r => { let i = n.get(F), o = n.get(Mn); Ct(i, () => { r(!0); }), n.get(Rt).afterPreactivation = () => (r(!0), o.closed ? ee(void 0) : o), i.initialNavigation(); })); })]; return _(2, t); }
function Dn() { let t = [bn(() => { w(F).setUpLocationChangeListener(); }), { provide: vr, useValue: 2 }]; return _(3, t); }
function gs() { let t = []; return t = [], _(1, t); }
var On = new qe("");
function Un(t) { return _(0, [{ provide: On, useExisting: In }, { provide: Fe, useExisting: t }]); }
function vs(t) { return _(5, [{ provide: V, useValue: t }]); }
function ms() { return _(6, [{ provide: fr, useClass: Cn }]); }
function ys(t) { return _(7, [{ provide: yt, useValue: t }]); }
function Rs() { return _(10, [{ provide: ar, useValue: pn }]); }
function Pn() { return _(8, [tr, { provide: ke, useExisting: tr }]); }
function _n(t) { ts("NgRouterViewTransitions"); let n = [{ provide: or, useValue: fn }, { provide: sr, useValue: h({ skipNextTransition: !!t?.skipInitialTransition }, t) }]; return _(9, n); }
var Ln = [Rn, { provide: de, useClass: B }, F, fe, { provide: z, useFactory: An }, vt, []], Cs = (() => { class t {
    constructor() { }
    static forRoot(e, r) { return { ngModule: t, providers: [Ln, [], { provide: X, multi: !0, useValue: e }, [], r?.errorHandler ? { provide: yt, useValue: r.errorHandler } : [], { provide: V, useValue: r || {} }, r?.useHash ? ws() : bs(), Ss(), r?.preloadingStrategy ? Un(r.preloadingStrategy).\u0275providers : [], r?.initialNavigation ? Is(r) : [], r?.bindToComponentInputs ? Pn().\u0275providers : [], r?.enableViewTransitions ? _n().\u0275providers : [], Es()] }; }
    static forChild(e) { return { ngModule: t, providers: [{ provide: X, multi: !0, useValue: e }] }; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275mod = l.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = l.\u0275\u0275defineInjector({});
} return t; })();
function Ss() { return { provide: It, useFactory: () => { let t = w(yn), n = w(V); return n.scrollOffset && t.setOffset(n.scrollOffset), new En(n); } }; }
function ws() { return { provide: fr, useClass: Cn }; }
function bs() { return { provide: fr, useClass: Fo }; }
function Is(t) { return [t.initialNavigation === "disabled" ? Dn().\u0275providers : [], t.initialNavigation === "enabledBlocking" ? Nn().\u0275providers : []]; }
var dr = new qe("");
function Es() { return [{ provide: dr, useFactory: Tn }, { provide: Sn, multi: !0, useExisting: dr }]; }
import { inject as Be, Version as As } from "@angular/core";
import "@angular/common";
import "rxjs";
import "rxjs/operators";
import "@angular/platform-browser";
function fa(t) { return t.map(n => (...e) => Be(n).canMatch(...e)); }
function pa(t) { return t.map(n => (...e) => Be(n).canActivate(...e)); }
function ga(t) { return t.map(n => (...e) => Be(n).canActivateChild(...e)); }
function va(t) { return t.map(n => (...e) => Be(n).canDeactivate(...e)); }
function ma(t) { return (...n) => Be(t).resolve(...n); }
var ya = new As("21.1.0");
export { z as ActivatedRoute, oe as ActivatedRouteSnapshot, ct as ActivationEnd, at as ActivationStart, pt as BaseRouteReuseStrategy, st as ChildActivationEnd, ot as ChildActivationStart, fe as ChildrenOutletContexts, un as DefaultTitleStrategy, B as DefaultUrlSerializer, b as EventType, et as GuardsCheckEnd, Xe as GuardsCheckStart, M as NavigationCancel, I as NavigationCancellationCode, N as NavigationEnd, Z as NavigationError, k as NavigationSkipped, ye as NavigationSkippedCode, H as NavigationStart, us as NoPreloading, ut as OutletContext, p as PRIMARY_OUTLET, cs as PreloadAllModules, Fe as PreloadingStrategy, V as ROUTER_CONFIGURATION, dr as ROUTER_INITIALIZER, Zr as ROUTER_OUTLET_DATA, X as ROUTES, Se as RedirectCommand, rt as ResolveEnd, tt as ResolveStart, it as RouteConfigLoadEnd, nt as RouteConfigLoadStart, vn as RouteReuseStrategy, F as Router, U as RouterEvent, bt as RouterLink, ss as RouterLinkActive, bt as RouterLinkWithHref, Cs as RouterModule, er as RouterOutlet, In as RouterPreloader, Pe as RouterState, _e as RouterStateSnapshot, ce as RoutesRecognized, Re as Scroll, ir as TitleStrategy, mt as UrlHandlingStrategy, Q as UrlSegment, m as UrlSegmentGroup, de as UrlSerializer, O as UrlTree, ya as VERSION, ae as convertToParamMap, Br as createUrlTreeFromSnapshot, Ur as defaultUrlMatcher, Uo as destroyDetachedRouteHandle, Zt as isActive, pa as mapToCanActivate, ga as mapToCanActivateChild, va as mapToCanDeactivate, fa as mapToCanMatch, ma as mapToResolve, hs as provideRouter, ds as provideRoutes, Pn as withComponentInputBinding, gs as withDebugTracing, Dn as withDisabledInitialNavigation, Nn as withEnabledBlockingInitialNavigation, Rs as withExperimentalAutoCleanupInjectors, ps as withExperimentalPlatformNavigation, ms as withHashLocation, fs as withInMemoryScrolling, ys as withNavigationErrorHandler, Un as withPreloading, vs as withRouterConfig, _n as withViewTransitions, rr as \u0275EmptyOutletComponent, Ln as \u0275ROUTER_PROVIDERS, Ct as \u0275afterNextNavigation, ln as \u0275loadChildren };
/*! Bundled license information:

@angular/router/fesm2022/_router-chunk.mjs:
@angular/router/fesm2022/_router_module-chunk.mjs:
@angular/router/fesm2022/router.mjs:
  (**
   * @license Angular v21.1.0
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
