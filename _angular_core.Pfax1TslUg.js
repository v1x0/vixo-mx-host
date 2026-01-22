import { a as Rc, b as tt, f as Oc } from "@nf-internal/chunk-SLWIJEXV";
import { B as bc, E as Ac, F as ih, G as sh, H as ah, I as kc, J as ch, K as lh, L as MM, a as ae, b as O, c as Mi, f as Sc, g as Ni, n as Wo, p as wi, r as _i, s as Lt, w as Si, x as oh, y as rh } from "@nf-internal/chunk-DBZSGTSI";
import { a as Q, b as _e, d as Ge } from "@nf-internal/chunk-4CLCTAJ7";
import { BehaviorSubject as NM, Observable as wM, Subject as _M, Subscription as SM } from "rxjs";
import { setActiveConsumer as Pn } from "@angular/core/primitives/signals";
import { isNotFound as bM } from "@angular/core/primitives/di";
var Ai = class {
    full;
    major;
    minor;
    patch;
    constructor(t) { this.full = t; let n = t.split("."); this.major = n[0], this.minor = n[1], this.patch = n.slice(2).join("."); }
}, AM = new Ai("21.1.0");
var Pi = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss", C = class extends Error {
    code;
    constructor(t, n) { super(Xo(t, n)), this.code = t; }
};
function RM(e) { return `NG0${Math.abs(e)}`; }
function Xo(e, t) { return `${RM(e)}${t ? ": " + t : ""}`; }
var be = globalThis;
function S(e) { for (let t in e)
    if (e[t] === S)
        return t; throw Error(""); }
function gh(e, t) { for (let n in t)
    t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]); }
function ht(e) {
    if (typeof e == "string")
        return e;
    if (Array.isArray(e))
        return `[${e.map(ht).join(", ")}]`;
    if (e == null)
        return "" + e;
    let t = e.overriddenName || e.name;
    if (t)
        return `${t}`;
    let n = e.toString();
    if (n == null)
        return "" + n;
    let o = n.indexOf(`
`);
    return o >= 0 ? n.slice(0, o) : n;
}
function Li(e, t) { return e ? t ? `${e} ${t}` : e : t || ""; }
function OM(e, t = 100) { if (!e || t < 1 || e.length <= t)
    return e; if (t == 1)
    return e.substring(0, 1) + "..."; let n = Math.round(t / 2); return e.substring(0, n) + "..." + e.substring(e.length - n); }
var kM = S({ __forward_ref__: S });
function er(e) { return e.__forward_ref__ = er, e.toString = function () { return ht(this()); }, e; }
function P(e) { return tr(e) ? e() : e; }
function tr(e) { return typeof e == "function" && e.hasOwnProperty(kM) && e.__forward_ref__ === er; }
function mh(e, t, n) { e != t && zc(n, e, t, "=="); }
function zc(e, t, n, o) { throw new Error(`ASSERTION ERROR: ${e}` + (o == null ? "" : ` [Expected=> ${n} ${o} ${t} <=Actual]`)); }
function B(e) { return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 }; }
function nr(e) { return { providers: e.providers || [], imports: e.imports || [] }; }
function or(e) { return PM(e, Fn); }
function xM(e) { return or(e) !== null; }
function PM(e, t) { return e.hasOwnProperty(t) && e[t] || null; }
function LM(e) { let t = e?.[Fn] ?? null; return t || null; }
function Pc(e) { return e && e.hasOwnProperty(Qo) ? e[Qo] : null; }
var Fn = S({ \u0275prov: S }), Qo = S({ \u0275inj: S }), M = class {
    _desc;
    ngMetadataName = "InjectionToken";
    \u0275prov;
    constructor(t, n) { this._desc = t, this.\u0275prov = void 0, typeof n == "number" ? this.__NG_ELEMENT_ID__ = n : n !== void 0 && (this.\u0275prov = B({ token: this, providedIn: n.providedIn || "root", factory: n.factory })); }
    get multi() { return this; }
    toString() { return `InjectionToken ${this._desc}`; }
}, uh;
function FM(e) { zc("setInjectorProfilerContext should never be called in production mode"); let t = uh; return uh = e, t; }
function Qc(e) { return e && !!e.\u0275providers; }
var on = S({ \u0275cmp: S }), rr = S({ \u0275dir: S }), ir = S({ \u0275pipe: S }), Fi = S({ \u0275mod: S }), nt = S({ \u0275fac: S }), rn = S({ __NG_ELEMENT_ID__: S }), dh = S({ __NG_ENV_ID__: S });
function sn(e) { return Vi(e, "@NgModule"), e[Fi] || null; }
function ji(e) { let t = sn(e); if (!t)
    throw new C(915, !1); return t; }
function W(e) { return Vi(e, "@Component"), e[on] || null; }
function Ae(e) { return Vi(e, "@Directive"), e[rr] || null; }
function ze(e) { return Vi(e, "@Pipe"), e[ir] || null; }
function Vi(e, t) { if (e == null)
    throw new C(-919, !1); }
function sr(e) { let t = W(e) || Ae(e) || ze(e); return t !== null && t.standalone; }
function R(e) { return typeof e == "string" ? e : e == null ? "" : String(e); }
function Re(e) { return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : R(e); }
var yh = S({ ngErrorCode: S }), jM = S({ ngErrorMessage: S }), VM = S({ ngTokenPath: S });
function Zc(e, t) { return vh("", -200, t); }
function Hi(e, t) { throw new C(-201, !1); }
function vh(e, t, n) { let o = new C(t, e); return o[yh] = t, o[jM] = e, n && (o[VM] = n), o; }
function HM(e) { return e[yh]; }
var Lc;
function Eh() { return Lc; }
function Ie(e) { let t = Lc; return Lc = e, t; }
function Yc(e, t, n) { let o = or(e); if (o && o.providedIn == "root")
    return o.value === void 0 ? o.value = o.factory() : o.value; if (n & 8)
    return null; if (t !== void 0)
    return t; Hi(e, ""); }
var BM = {}, Xt = BM, Fc = "__NG_DI_FLAG__", jc = class {
    injector;
    constructor(t) { this.injector = t; }
    retrieve(t, n) { let o = en(n) || 0; try {
        return this.injector.get(t, o & 8 ? null : Xt, o);
    }
    catch (r) {
        if (Oc(r))
            return r;
        throw r;
    } }
};
function UM(e, t = 0) { let n = Rc(); if (n === void 0)
    throw new C(-203, !1); if (n === null)
    return Yc(e, void 0, t); {
    let o = $M(t), r = n.retrieve(e, o);
    if (Oc(r)) {
        if (o.optional)
            return null;
        throw r;
    }
    return r;
} }
function he(e, t = 0) { return (Eh() || UM)(P(e), t); }
function Bi(e) { throw new C(202, !1); }
function E(e, t) { return he(e, en(t)); }
function en(e) { return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4); }
function $M(e) { return { optional: !!(e & 8), host: !!(e & 1), self: !!(e & 2), skipSelf: !!(e & 4) }; }
function Vc(e) { let t = []; for (let n = 0; n < e.length; n++) {
    let o = P(e[n]);
    if (Array.isArray(o)) {
        if (o.length === 0)
            throw new C(900, !1);
        let r, i = 0;
        for (let s = 0; s < o.length; s++) {
            let a = o[s], c = qM(a);
            typeof c == "number" ? c === -1 ? r = a.token : i |= c : r = a;
        }
        t.push(he(r, i));
    }
    else
        t.push(he(o));
} return t; }
function jn(e, t) { return e[Fc] = t, e.prototype[Fc] = t, e; }
function qM(e) { return e[Fc]; }
function Ft(e, t) { let n = e.hasOwnProperty(nt); return n ? e[nt] : null; }
function Ih(e, t, n) { if (e.length !== t.length)
    return !1; for (let o = 0; o < e.length; o++) {
    let r = e[o], i = t[o];
    if (n && (r = n(r), i = n(i)), i !== r)
        return !1;
} return !0; }
function Qe(e) { return e.flat(Number.POSITIVE_INFINITY); }
function Ui(e, t) { e.forEach(n => Array.isArray(n) ? Ui(n, t) : t(n)); }
function Kc(e, t, n) { t >= e.length ? e.push(n) : e.splice(t, 0, n); }
function ar(e, t) { return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]; }
function cr(e, t) { let n = []; for (let o = 0; o < e; o++)
    n.push(t); return n; }
function Jc(e, t, n) { let o = e.length - n; for (; t < o;)
    e[t] = e[t + n], t++; for (; n--;)
    e.pop(); }
function Xc(e, t, n, o) { let r = e.length; if (r == t)
    e.push(n, o);
else if (r === 1)
    e.push(o, e[0]), e[0] = n;
else {
    for (r--, e.push(e[r - 1], e[r]); r > t;) {
        let i = r - 2;
        e[r] = e[i], r--;
    }
    e[t] = n, e[t + 1] = o;
} }
function lr(e, t, n) { let o = Vn(e, t); return o >= 0 ? e[o | 1] = n : (o = ~o, Xc(e, o, t, n)), o; }
function $i(e, t) { let n = Vn(e, t); if (n >= 0)
    return e[n | 1]; }
function Vn(e, t) { return GM(e, t, 1); }
function GM(e, t, n) { let o = 0, r = e.length >> n; for (; r !== o;) {
    let i = o + (r - o >> 1), s = e[i << n];
    if (t === s)
        return i << n;
    s > t ? r = i : o = i + 1;
} return ~(r << n); }
var Pe = {}, j = [], Le = new M(""), el = new M("", -1), tl = new M(""), Zo = class {
    get(t, n = Xt) { if (n === Xt) {
        let r = vh("", -201);
        throw r.name = "\u0275NotFound", r;
    } return n; }
};
function Ze(e) { return { \u0275providers: e }; }
function Dh(e) { return Ze([{ provide: Le, multi: !0, useValue: e }]); }
function Ch(...e) { return { \u0275providers: qi(!0, e), \u0275fromNgModule: !0 }; }
function qi(e, ...t) { let n = [], o = new Set, r, i = s => { n.push(s); }; return Ui(t, s => { let a = s; Ri(a, i, [], o) && (r ||= [], r.push(a)); }), r !== void 0 && Th(r, i), n; }
function Th(e, t) { for (let n = 0; n < e.length; n++) {
    let { ngModule: o, providers: r } = e[n];
    nl(r, i => { t(i, o); });
} }
function Ri(e, t, n, o) { if (e = P(e), !e)
    return !1; let r = null, i = Pc(e), s = !i && W(e); if (!i && !s) {
    let c = e.ngModule;
    if (i = Pc(c), i)
        r = c;
    else
        return !1;
}
else {
    if (s && !s.standalone)
        return !1;
    r = e;
} let a = o.has(r); if (s) {
    if (a)
        return !1;
    if (o.add(r), s.dependencies) {
        let c = typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
        for (let l of c)
            Ri(l, t, n, o);
    }
}
else if (i) {
    if (i.imports != null && !a) {
        o.add(r);
        let l;
        try {
            Ui(i.imports, u => { Ri(u, t, n, o) && (l ||= [], l.push(u)); });
        }
        finally { }
        l !== void 0 && Th(l, t);
    }
    if (!a) {
        let l = Ft(r) || (() => new r);
        t({ provide: r, useFactory: l, deps: j }, r), t({ provide: tl, useValue: r, multi: !0 }, r), t({ provide: Le, useValue: () => he(r), multi: !0 }, r);
    }
    let c = i.providers;
    if (c != null && !a) {
        let l = e;
        nl(c, u => { t(u, l); });
    }
}
else
    return !1; return r !== e && e.providers !== void 0; }
function nl(e, t) { for (let n of e)
    Qc(n) && (n = n.\u0275providers), Array.isArray(n) ? nl(n, t) : t(n); }
var WM = S({ provide: String, useValue: S });
function Mh(e) { return e !== null && typeof e == "object" && WM in e; }
function zM(e) { return !!(e && e.useExisting); }
function QM(e) { return !!(e && e.useFactory); }
function tn(e) { return typeof e == "function"; }
function Nh(e) { return !!e.useClass; }
var ol = new M(""), bi = {}, fh = {}, xc;
function Hn() { return xc === void 0 && (xc = new Zo), xc; }
var Se = class {
}, nn = class extends Se {
    parent;
    source;
    scopes;
    records = new Map;
    _ngOnDestroyHooks = new Set;
    _onDestroyHooks = [];
    get destroyed() { return this._destroyed; }
    _destroyed = !1;
    injectorDefTypes;
    constructor(t, n, o, r) { super(), this.parent = n, this.source = o, this.scopes = r, Bc(t, s => this.processProvider(s)), this.records.set(el, Ln(void 0, this)), r.has("environment") && this.records.set(Se, Ln(void 0, this)); let i = this.records.get(ol); i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(tl, j, { self: !0 })); }
    retrieve(t, n) { let o = en(n) || 0; try {
        return this.get(t, Xt, o);
    }
    catch (r) {
        if (bM(r))
            return r;
        throw r;
    } }
    destroy() { zo(this), this._destroyed = !0; let t = Pn(null); try {
        for (let o of this._ngOnDestroyHooks)
            o.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let o of n)
            o();
    }
    finally {
        this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), Pn(t);
    } }
    onDestroy(t) { return zo(this), this._onDestroyHooks.push(t), () => this.removeOnDestroy(t); }
    runInContext(t) { zo(this); let n = tt(this), o = Ie(void 0), r; try {
        return t();
    }
    finally {
        tt(n), Ie(o);
    } }
    get(t, n = Xt, o) { if (zo(this), t.hasOwnProperty(dh))
        return t[dh](this); let r = en(o), i, s = tt(this), a = Ie(void 0); try {
        if (!(r & 4)) {
            let l = this.records.get(t);
            if (l === void 0) {
                let u = XM(t) && or(t);
                u && this.injectableDefInScope(u) ? l = Ln(Hc(t), bi) : l = null, this.records.set(t, l);
            }
            if (l != null)
                return this.hydrate(t, l, r);
        }
        let c = r & 2 ? Hn() : this.parent;
        return n = r & 8 && n === Xt ? null : n, c.get(t, n);
    }
    catch (c) {
        let l = HM(c);
        throw l === -200 || l === -201 ? new C(l, null) : c;
    }
    finally {
        Ie(a), tt(s);
    } }
    resolveInjectorInitializers() { let t = Pn(null), n = tt(this), o = Ie(void 0), r; try {
        let i = this.get(Le, j, { self: !0 });
        for (let s of i)
            s();
    }
    finally {
        tt(n), Ie(o), Pn(t);
    } }
    toString() { let t = [], n = this.records; for (let o of n.keys())
        t.push(ht(o)); return `R3Injector[${t.join(", ")}]`; }
    processProvider(t) { t = P(t); let n = tn(t) ? t : P(t && t.provide), o = YM(t); if (!tn(t) && t.multi === !0) {
        let r = this.records.get(n);
        r || (r = Ln(void 0, bi, !0), r.factory = () => Vc(r.multi), this.records.set(n, r)), n = t, r.multi.push(t);
    } this.records.set(n, o); }
    hydrate(t, n, o) { let r = Pn(null); try {
        if (n.value === fh)
            throw Zc(ht(t));
        return n.value === bi && (n.value = fh, n.value = n.factory(void 0, o)), typeof n.value == "object" && n.value && JM(n.value) && this._ngOnDestroyHooks.add(n.value), n.value;
    }
    finally {
        Pn(r);
    } }
    injectableDefInScope(t) { if (!t.providedIn)
        return !1; let n = P(t.providedIn); return typeof n == "string" ? n === "any" || this.scopes.has(n) : this.injectorDefTypes.has(n); }
    removeOnDestroy(t) { let n = this._onDestroyHooks.indexOf(t); n !== -1 && this._onDestroyHooks.splice(n, 1); }
};
function Hc(e) { let t = or(e), n = t !== null ? t.factory : Ft(e); if (n !== null)
    return n; if (e instanceof M)
    throw new C(204, !1); if (e instanceof Function)
    return ZM(e); throw new C(204, !1); }
function ZM(e) { if (e.length > 0)
    throw new C(204, !1); let n = LM(e); return n !== null ? () => n.factory(e) : () => new e; }
function YM(e) { if (Mh(e))
    return Ln(void 0, e.useValue); {
    let t = rl(e);
    return Ln(t, bi);
} }
function rl(e, t, n) { let o; if (tn(e)) {
    let r = P(e);
    return Ft(r) || Hc(r);
}
else if (Mh(e))
    o = () => P(e.useValue);
else if (QM(e))
    o = () => e.useFactory(...Vc(e.deps || []));
else if (zM(e))
    o = (r, i) => he(P(e.useExisting), i !== void 0 && i & 8 ? 8 : void 0);
else {
    let r = P(e && (e.useClass || e.provide));
    if (KM(e))
        o = () => new r(...Vc(e.deps));
    else
        return Ft(r) || Hc(r);
} return o; }
function zo(e) { if (e.destroyed)
    throw new C(205, !1); }
function Ln(e, t, n = !1) { return { factory: e, value: t, multi: n ? [] : void 0 }; }
function KM(e) { return !!e.deps; }
function JM(e) { return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"; }
function XM(e) { return typeof e == "function" || typeof e == "object" && e.ngMetadataName === "InjectionToken"; }
function Bc(e, t) { for (let n of e)
    Array.isArray(n) ? Bc(n, t) : n && Qc(n) ? Bc(n.\u0275providers, t) : t(n); }
function Gi(e, t) { let n; e instanceof nn ? (zo(e), n = e) : n = new jc(e); let o, r = tt(n), i = Ie(void 0); try {
    return t();
}
finally {
    tt(r), Ie(i);
} }
function Wi() { return Eh() !== void 0 || Rc() != null; }
function eN(e) { if (!Wi())
    throw new C(-203, !1); }
var $ = 0, y = 1, w = 2, Z = 3, ge = 4, le = 5, ue = 6, Vt = 7, U = 8, L = 9, Ye = 10, T = 11, Ht = 12, ur = 13, an = 14, te = 15, yt = 16, cn = 17, ot = 18, Fe = 19, il = 20, pt = 21, zi = 22, jt = 23, Oe = 24, ln = 25, vt = 26, I = 27, sl = 1, ke = 6, Ke = 7, dr = 8, un = 9, G = 10;
function ne(e) { return Array.isArray(e) && typeof e[sl] == "object"; }
function J(e) { return Array.isArray(e) && e[sl] === !0; }
function al(e) { return (e.flags & 4) !== 0; }
function De(e) { return e.componentOffset > -1; }
function Bn(e) { return (e.flags & 1) === 1; }
function je(e) { return !!e.template; }
function rt(e) { return (e[w] & 512) !== 0; }
function cl(e) { return (e.type & 16) === 16; }
function wh(e) { return (e[w] & 32) === 32; }
function it(e) { return (e[w] & 256) === 256; }
var ll = "svg", ul = "math";
function F(e) { for (; Array.isArray(e);)
    e = e[$]; return e; }
function fr(e) { for (; Array.isArray(e);) {
    if (typeof e[sl] == "object")
        return e;
    e = e[$];
} return null; }
function dn(e, t) { return F(t[e]); }
function K(e, t) { return F(t[e.index]); }
function _h(e, t) { let n = e === null ? -1 : e.index; return n !== -1 ? F(t[n]) : null; }
function Et(e, t) { return e.data[t]; }
function Bt(e, t) { return e[t]; }
function pr(e, t, n, o) { n >= e.data.length && (e.data[n] = null, e.blueprint[n] = null), t[n] = o; }
function ye(e, t) { let n = t[e]; return ne(n) ? n : n[$]; }
function Sh(e) { return (e[w] & 4) === 4; }
function Qi(e) { return (e[w] & 128) === 128; }
function bh(e) { return J(e[Z]); }
function me(e, t) { return t == null ? null : e[t]; }
function dl(e) { e[cn] = 0; }
function Zi(e) { e[w] & 1024 || (e[w] |= 1024, Qi(e) && fn(e)); }
function fl(e, t) { for (; e > 0;)
    t = t[an], e--; return t; }
function Un(e) { return !!(e[w] & 9216 || e[Oe]?.dirty); }
function Yi(e) { e[Ye].changeDetectionScheduler?.notify(8), e[w] & 64 && (e[w] |= 1024), Un(e) && fn(e); }
function fn(e) { e[Ye].changeDetectionScheduler?.notify(0); let t = gt(e); for (; t !== null && !(t[w] & 8192 || (t[w] |= 8192, !Qi(t)));)
    t = gt(t); }
function hr(e, t) { if (it(e))
    throw new C(911, !1); e[pt] === null && (e[pt] = []), e[pt].push(t); }
function Ki(e, t) { if (e[pt] === null)
    return; let n = e[pt].indexOf(t); n !== -1 && e[pt].splice(n, 1); }
function gt(e) { let t = e[Z]; return J(t) ? t[Z] : t; }
function pl(e) { return e[Vt] ??= []; }
function hl(e) { return e.cleanup ??= []; }
function gl(e, t, n, o) { let r = pl(t); r.push(n), e.firstCreatePass && hl(e).push(o, r.length - 1); }
var A = { lFrame: Fh(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var Uc = !1;
function Ah() { return A.lFrame.elementDepthCount; }
function Rh() { A.lFrame.elementDepthCount++; }
function ml() { A.lFrame.elementDepthCount--; }
function Ji() { return A.bindingsEnabled; }
function gr() { return A.skipHydrationRootTNode !== null; }
function yl(e) { return A.skipHydrationRootTNode === e; }
function vl() { A.bindingsEnabled = !0; }
function Oh(e) { A.skipHydrationRootTNode = e; }
function El() { A.bindingsEnabled = !1; }
function Il() { A.skipHydrationRootTNode = null; }
function g() { return A.lFrame.lView; }
function b() { return A.lFrame.tView; }
function Dl(e) { return A.lFrame.contextLView = e, e[U]; }
function Cl(e) { return A.lFrame.contextLView = null, e; }
function _() { let e = Tl(); for (; e !== null && e.type === 64;)
    e = e.parent; return e; }
function Tl() { return A.lFrame.currentTNode; }
function $n() { let e = A.lFrame, t = e.currentTNode; return e.isParent ? t : t.parent; }
function st(e, t) { let n = A.lFrame; n.currentTNode = e, n.isParent = t; }
function Ml() { return A.lFrame.isParent; }
function Nl() { A.lFrame.isParent = !1; }
function wl() { return A.lFrame.contextLView; }
function _l() { return Uc; }
function Yo(e) { let t = Uc; return Uc = e, t; }
function ve() { let e = A.lFrame, t = e.bindingRootIndex; return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t; }
function Je() { return A.lFrame.bindingIndex; }
function Sl(e) { return A.lFrame.bindingIndex = e; }
function de() { return A.lFrame.bindingIndex++; }
function at(e) { let t = A.lFrame, n = t.bindingIndex; return t.bindingIndex = t.bindingIndex + e, n; }
function kh() { return A.lFrame.inI18n; }
function bl(e) { A.lFrame.inI18n = e; }
function xh(e, t) { let n = A.lFrame; n.bindingIndex = n.bindingRootIndex = e, Xi(t); }
function Ph() { return A.lFrame.currentDirectiveIndex; }
function Xi(e) { A.lFrame.currentDirectiveIndex = e; }
function es(e) { let t = A.lFrame.currentDirectiveIndex; return t === -1 ? null : e[t]; }
function ts() { return A.lFrame.currentQueryIndex; }
function mr(e) { A.lFrame.currentQueryIndex = e; }
function tN(e) { let t = e[y]; return t.type === 2 ? t.declTNode : t.type === 1 ? e[le] : null; }
function Al(e, t, n) { if (n & 4) {
    let r = t, i = e;
    for (; r = r.parent, r === null && !(n & 1);)
        if (r = tN(i), r === null || (i = i[an], r.type & 10))
            break;
    if (r === null)
        return !1;
    t = r, e = i;
} let o = A.lFrame = Lh(); return o.currentTNode = t, o.lView = e, !0; }
function ns(e) { let t = Lh(), n = e[y]; A.lFrame = t, t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex, t.inI18n = !1; }
function Lh() { let e = A.lFrame, t = e === null ? null : e.child; return t === null ? Fh(e) : t; }
function Fh(e) { let t = { currentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: -1, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: e, child: null, inI18n: !1 }; return e !== null && (e.child = t), t; }
function jh() { let e = A.lFrame; return A.lFrame = e.parent, e.currentTNode = null, e.lView = null, e; }
var Rl = jh;
function os() { let e = jh(); e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0; }
function Vh(e) { return (A.lFrame.contextLView = fl(e, A.lFrame.contextLView))[U]; }
function fe() { return A.lFrame.selectedIndex; }
function Ut(e) { A.lFrame.selectedIndex = e; }
function Ce() { let e = A.lFrame; return Et(e.tView, e.selectedIndex); }
function Ol() { A.lFrame.currentNamespace = ll; }
function kl() { A.lFrame.currentNamespace = ul; }
function xl() { nN(); }
function nN() { A.lFrame.currentNamespace = null; }
function Pl() { return A.lFrame.currentNamespace; }
var Hh = !0;
function yr() { return Hh; }
function Xe(e) { Hh = e; }
function $c(e, t = null, n = null, o) { let r = Ll(e, t, n, o); return r.resolveInjectorInitializers(), r; }
function Ll(e, t = null, n = null, o, r = new Set) { let i = [n || j, Ch(e)]; return o = o || (typeof e == "object" ? void 0 : ht(e)), new nn(i, t || Hn(), o || null, r); }
var ce = class e {
    static THROW_IF_NOT_FOUND = Xt;
    static NULL = new Zo;
    static create(t, n) { if (Array.isArray(t))
        return $c({ name: "" }, n, t, ""); {
        let o = t.name ?? "";
        return $c({ name: o }, t.parent, t.providers, o);
    } }
    static \u0275prov = B({ token: e, providedIn: "any", factory: () => he(el) });
    static __NG_ELEMENT_ID__ = -1;
}, $t = new M(""), Ve = (() => { class e {
    static __NG_ELEMENT_ID__ = oN;
    static __NG_ENV_ID__ = n => n;
} return e; })(), Oi = class extends Ve {
    _lView;
    constructor(t) { super(), this._lView = t; }
    get destroyed() { return it(this._lView); }
    onDestroy(t) { let n = this._lView; return hr(n, t), () => Ki(n, t); }
};
function oN() { return new Oi(g()); }
var Fl = !1, jl = new M(""), It = (() => { class e {
    taskId = 0;
    pendingTasks = new Set;
    destroyed = !1;
    pendingTask = new NM(!1);
    debugTaskTracker = E(jl, { optional: !0 });
    get hasPendingTasks() { return this.destroyed ? !1 : this.pendingTask.value; }
    get hasPendingTasksObservable() { return this.destroyed ? new wM(n => { n.next(!1), n.complete(); }) : this.pendingTask; }
    add() { !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0); let n = this.taskId++; return this.pendingTasks.add(n), this.debugTaskTracker?.add(n), n; }
    has(n) { return this.pendingTasks.has(n); }
    remove(n) { this.pendingTasks.delete(n), this.debugTaskTracker?.remove(n), this.pendingTasks.size === 0 && this.hasPendingTasks && this.pendingTask.next(!1); }
    ngOnDestroy() { this.pendingTasks.clear(), this.hasPendingTasks && this.pendingTask.next(!1), this.destroyed = !0, this.pendingTask.unsubscribe(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), qc = class extends _M {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t = !1) { super(), this.__isAsync = t, Wi() && (this.destroyRef = E(Ve, { optional: !0 }) ?? void 0, this.pendingTasks = E(It, { optional: !0 }) ?? void 0); }
    emit(t) { let n = O(null); try {
        super.next(t);
    }
    finally {
        O(n);
    } }
    subscribe(t, n, o) { let r = t, i = n || (() => null), s = o; if (t && typeof t == "object") {
        let c = t;
        r = c.next?.bind(c), i = c.error?.bind(c), s = c.complete?.bind(c);
    } this.__isAsync && (i = this.wrapInTimeout(i), r && (r = this.wrapInTimeout(r)), s && (s = this.wrapInTimeout(s))); let a = super.subscribe({ next: r, error: i, complete: s }); return t instanceof SM && t.add(a), a; }
    wrapInTimeout(t) { return n => { let o = this.pendingTasks?.add(); setTimeout(() => { try {
        t(n);
    }
    finally {
        o !== void 0 && this.pendingTasks?.remove(o);
    } }); }; }
}, ft = qc;
function ki(...e) { }
function Vl(e) { let t, n; function o() { e = ki; try {
    n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n), t !== void 0 && clearTimeout(t);
}
catch { } } return t = setTimeout(() => { e(), o(); }), typeof requestAnimationFrame == "function" && (n = requestAnimationFrame(() => { e(), o(); })), () => o(); }
function Bh(e) { return queueMicrotask(() => e()), () => { e = ki; }; }
var Hl = "isAngularZone", Ko = Hl + "_ID", rN = 0, q = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new ft(!1);
    onMicrotaskEmpty = new ft(!1);
    onStable = new ft(!1);
    onError = new ft(!1);
    constructor(t) { let { enableLongStackTrace: n = !1, shouldCoalesceEventChangeDetection: o = !1, shouldCoalesceRunChangeDetection: r = !1, scheduleInRootZone: i = Fl } = t; if (typeof Zone > "u")
        throw new C(908, !1); Zone.assertZonePatched(); let s = this; s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !r && o, s.shouldCoalesceRunChangeDetection = r, s.callbackScheduled = !1, s.scheduleInRootZone = i, aN(s); }
    static isInAngularZone() { return typeof Zone < "u" && Zone.current.get(Hl) === !0; }
    static assertInAngularZone() { if (!e.isInAngularZone())
        throw new C(909, !1); }
    static assertNotInAngularZone() { if (e.isInAngularZone())
        throw new C(909, !1); }
    run(t, n, o) { return this._inner.run(t, n, o); }
    runTask(t, n, o, r) { let i = this._inner, s = i.scheduleEventTask("NgZoneEvent: " + r, t, iN, ki, ki); try {
        return i.runTask(s, n, o);
    }
    finally {
        i.cancelTask(s);
    } }
    runGuarded(t, n, o) { return this._inner.runGuarded(t, n, o); }
    runOutsideAngular(t) { return this._outer.run(t); }
}, iN = {};
function Bl(e) { if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
        e._nesting++, e.onMicrotaskEmpty.emit(null);
    }
    finally {
        if (e._nesting--, !e.hasPendingMicrotasks)
            try {
                e.runOutsideAngular(() => e.onStable.emit(null));
            }
            finally {
                e.isStable = !0;
            }
    } }
function sN(e) { if (e.isCheckStableRunning || e.callbackScheduled)
    return; e.callbackScheduled = !0; function t() { Vl(() => { e.callbackScheduled = !1, Gc(e), e.isCheckStableRunning = !0, Bl(e), e.isCheckStableRunning = !1; }); } e.scheduleInRootZone ? Zone.root.run(() => { t(); }) : e._outer.run(() => { t(); }), Gc(e); }
function aN(e) { let t = () => { sN(e); }, n = rN++; e._inner = e._inner.fork({ name: "angular", properties: { [Hl]: !0, [Ko]: n, [Ko + n]: !0 }, onInvokeTask: (o, r, i, s, a, c) => { if (cN(c))
        return o.invokeTask(i, s, a, c); try {
        return ph(e), o.invokeTask(i, s, a, c);
    }
    finally {
        (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(), hh(e);
    } }, onInvoke: (o, r, i, s, a, c, l) => { try {
        return ph(e), o.invoke(i, s, a, c, l);
    }
    finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !lN(c) && t(), hh(e);
    } }, onHasTask: (o, r, i, s) => { o.hasTask(i, s), r === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, Gc(e), Bl(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask)); }, onHandleError: (o, r, i, s) => (o.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1) }); }
function Gc(e) { e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1; }
function ph(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)); }
function hh(e) { e._nesting--, Bl(e); }
var Jo = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new ft;
    onMicrotaskEmpty = new ft;
    onStable = new ft;
    onError = new ft;
    run(t, n, o) { return t.apply(n, o); }
    runGuarded(t, n, o) { return t.apply(n, o); }
    runOutsideAngular(t) { return t(); }
    runTask(t, n, o, r) { return t.apply(n, o); }
};
function cN(e) { return Uh(e, "__ignore_ng_zone__"); }
function lN(e) { return Uh(e, "__scheduler_tick__"); }
function Uh(e, t) { return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0; }
var mt = class {
    _console = console;
    handleError(t) { this._console.error("ERROR", t); }
}, Dt = new M("", { factory: () => { let e = E(q), t = E(Se), n; return o => { e.runOutsideAngular(() => { t.destroyed && !n ? setTimeout(() => { throw o; }) : (n ??= t.get(mt), n.handleError(o)); }); }; } }), Ul = { provide: Le, useValue: () => { let e = E(mt, { optional: !0 }); }, multi: !0 }, uN = new M("", { factory: () => { if (typeof ngServerMode < "u" && ngServerMode)
        return; let e = E($t).defaultView; if (!e)
        return; let t = E(Dt), n = i => { t(i.reason), i.preventDefault(); }, o = i => { i.error ? t(i.error) : t(new Error(i.message, { cause: i })), i.preventDefault(); }, r = () => { e.addEventListener("unhandledrejection", n), e.addEventListener("error", o); }; typeof Zone < "u" ? Zone.root.run(r) : r(), E(Ve).onDestroy(() => { e.removeEventListener("error", o), e.removeEventListener("unhandledrejection", n); }); } });
function dN() { return Ze([Dh(() => void E(uN))]); }
function fN(e) { return null; }
function qt(e, t) { let [n, o, r] = rh(e, t?.equal), i = n, s = i[ae]; return i.set = o, i.update = r, i.asReadonly = qn.bind(i), i; }
function qn() { let e = this[ae]; if (e.readonlyFn === void 0) {
    let t = () => this();
    t[ae] = e, e.readonlyFn = t;
} return e.readonlyFn; }
function pN(e, t) { if (Mi() !== null)
    throw new C(-602, !1); }
var Gn = (() => { class e {
    view;
    node;
    constructor(n, o) { this.view = n, this.node = o; }
    static __NG_ELEMENT_ID__ = hN;
} return e; })();
function hN() { return new Gn(g(), _()); }
var We = class {
}, Wn = new M("", { factory: () => !0 }), gN = new M("", { factory: () => !1 }), rs = new M(""), vr = (() => { class e {
    internalPendingTasks = E(It);
    scheduler = E(We);
    errorHandler = E(Dt);
    add() { let n = this.internalPendingTasks.add(); return () => { this.internalPendingTasks.has(n) && (this.scheduler.notify(11), this.internalPendingTasks.remove(n)); }; }
    run(n) { let o = this.add(); n().catch(this.errorHandler).finally(o); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), is = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new Wc });
} return e; })(), Wc = class {
    dirtyEffectCount = 0;
    queues = new Map;
    add(t) { this.enqueue(t), this.schedule(t); }
    schedule(t) { t.dirty && this.dirtyEffectCount++; }
    remove(t) { let n = t.zone, o = this.queues.get(n); o.has(t) && (o.delete(t), t.dirty && this.dirtyEffectCount--); }
    enqueue(t) { let n = t.zone; this.queues.has(n) || this.queues.set(n, new Set); let o = this.queues.get(n); o.has(t) || o.add(t); }
    flush() { for (; this.dirtyEffectCount > 0;) {
        let t = !1;
        for (let [n, o] of this.queues)
            n === null ? t ||= this.flushQueue(o) : t ||= n.run(() => this.flushQueue(o));
        t || (this.dirtyEffectCount = 0);
    } }
    flushQueue(t) { let n = !1; for (let o of t)
        o.dirty && (this.dirtyEffectCount--, n = !0, o.run()); return n; }
}, xi = class {
    [ae];
    constructor(t) { this[ae] = t; }
    destroy() { this[ae].destroy(); }
};
function $l(e, t) { let n = t?.injector ?? E(ce), o = t?.manualCleanup !== !0 ? n.get(Ve) : null, r, i = n.get(Gn, null, { optional: !0 }), s = n.get(We); return i !== null ? (r = vN(i.view, s, e), o instanceof Oi && o._lView === i.view && (o = null)) : r = EN(e, n.get(is), s), r.injector = n, o !== null && (r.onDestroyFns = [o.onDestroy(() => r.destroy())]), new xi(r); }
var $h = _e(Q({}, sh), { cleanupFns: void 0, zone: null, onDestroyFns: null, run() { let e = Yo(!1); try {
        ah(this);
    }
    finally {
        Yo(e);
    } }, cleanup() { if (!this.cleanupFns?.length)
        return; let e = O(null); try {
        for (; this.cleanupFns.length;)
            this.cleanupFns.pop()();
    }
    finally {
        this.cleanupFns = [], O(e);
    } } }), mN = _e(Q({}, $h), { consumerMarkedDirty() { this.scheduler.schedule(this), this.notifier.notify(12); }, destroy() { if (Lt(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.scheduler.remove(this); } }), yN = _e(Q({}, $h), { consumerMarkedDirty() { this.view[w] |= 8192, fn(this.view), this.notifier.notify(13); }, destroy() { if (Lt(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.view[jt]?.delete(this); } });
function vN(e, t, n) { let o = Object.create(yN); return o.view = e, o.zone = typeof Zone < "u" ? Zone.current : null, o.notifier = t, o.fn = qh(o, n), e[jt] ??= new Set, e[jt].add(o), o.consumerMarkedDirty(o), o; }
function EN(e, t, n) { let o = Object.create(mN); return o.fn = qh(o, e), o.scheduler = t, o.notifier = n, o.zone = typeof Zone < "u" ? Zone.current : null, o.scheduler.add(o), o.notifier.notify(12), o; }
function qh(e, t) { return () => { t(n => (e.cleanupFns ??= []).push(n)); }; }
function Te(e) { return ih(e); }
import { Subject as cm, Subscription as IN } from "rxjs";
import { setActiveConsumer as Zn } from "@angular/core/primitives/signals";
import { map as DN } from "rxjs/operators";
var zn = { JSACTION: "jsaction" };
function lt(e) { return { toString: e }.toString(); }
var Yn = "__annotations__", Kn = "__parameters__", Jn = "__prop__metadata__";
function Zr(e, t, n, o, r) { return lt(() => { let i = fd(t); function s(...a) { if (this instanceof s)
    return i.call(this, ...a), this; let c = new s(...a); return function (u) { return r && r(u, ...a), (u.hasOwnProperty(Yn) ? u[Yn] : Object.defineProperty(u, Yn, { value: [] })[Yn]).push(c), u; }; } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s; }); }
function fd(e) { return function (...n) { if (e) {
    let o = e(...n);
    for (let r in o)
        this[r] = o[r];
} }; }
function Mo(e, t, n) { return lt(() => { let o = fd(t); function r(...i) { if (this instanceof r)
    return o.apply(this, i), this; let s = new r(...i); return a.annotation = s, a; function a(c, l, u) { let d = c.hasOwnProperty(Kn) ? c[Kn] : Object.defineProperty(c, Kn, { value: [] })[Kn]; for (; d.length <= u;)
    d.push(null); return (d[u] = d[u] || []).push(s), c; } } return r.prototype.ngMetadataName = e, r.annotationCls = r, r; }); }
function St(e, t, n, o) { return lt(() => { let r = fd(t); function i(...s) { if (this instanceof i)
    return r.apply(this, s), this; let a = new i(...s); function c(l, u) { if (l === void 0)
    throw new Error("Standard Angular field decorators are not supported in JIT mode."); let d = l.constructor, f = d.hasOwnProperty(Jn) ? d[Jn] : Object.defineProperty(d, Jn, { value: {} })[Jn]; f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a); } return c; } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i; }); }
var lm = jn(Mo("Inject", e => ({ token: e })), -1), um = jn(Mo("Optional"), 8), dm = jn(Mo("Self"), 2), fm = jn(Mo("SkipSelf"), 4), pm = jn(Mo("Host"), 1);
function ie(e) { let t = be.ng; if (t && t.\u0275compilerFacade)
    return t.\u0275compilerFacade; throw new Error("JIT compiler unavailable"); }
var Gh = { \u0275\u0275defineInjectable: B, \u0275\u0275defineInjector: nr, \u0275\u0275inject: he, \u0275\u0275invalidFactoryDep: Bi, resolveForwardRef: P }, hm = Function;
function Dr(e) { return typeof e == "function"; }
var CN = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, TN = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, MN = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, NN = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function wN(e) { return CN.test(e) || NN.test(e) || TN.test(e) && !MN.test(e); }
var _s = class {
    _reflect;
    constructor(t) { this._reflect = t || be.Reflect; }
    factory(t) { return (...n) => new t(...n); }
    _zipTypesAndAnnotations(t, n) { let o; typeof t > "u" ? o = cr(n.length) : o = cr(t.length); for (let r = 0; r < o.length; r++)
        typeof t > "u" ? o[r] = [] : t[r] && t[r] != Object ? o[r] = [t[r]] : o[r] = [], n && n[r] != null && (o[r] = o[r].concat(n[r])); return o; }
    _ownParameters(t, n) { let o = t.toString(); if (wN(o))
        return null; if (t.parameters && t.parameters !== n.parameters)
        return t.parameters; let r = t.ctorParameters; if (r && r !== n.ctorParameters) {
        let a = typeof r == "function" ? r() : r, c = a.map(u => u && u.type), l = a.map(u => u && ql(u.decorators));
        return this._zipTypesAndAnnotations(c, l);
    } let i = t.hasOwnProperty(Kn) && t[Kn], s = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t); return s || i ? this._zipTypesAndAnnotations(s, i) : cr(t.length); }
    parameters(t) { if (!Dr(t))
        return []; let n = ss(t), o = this._ownParameters(t, n); return !o && n !== Object && (o = this.parameters(n)), o || []; }
    _ownAnnotations(t, n) { if (t.annotations && t.annotations !== n.annotations) {
        let o = t.annotations;
        return typeof o == "function" && o.annotations && (o = o.annotations), o;
    } return t.decorators && t.decorators !== n.decorators ? ql(t.decorators) : t.hasOwnProperty(Yn) ? t[Yn] : null; }
    annotations(t) { if (!Dr(t))
        return []; let n = ss(t), o = this._ownAnnotations(t, n) || []; return (n !== Object ? this.annotations(n) : []).concat(o); }
    _ownPropMetadata(t, n) { if (t.propMetadata && t.propMetadata !== n.propMetadata) {
        let o = t.propMetadata;
        return typeof o == "function" && o.propMetadata && (o = o.propMetadata), o;
    } if (t.propDecorators && t.propDecorators !== n.propDecorators) {
        let o = t.propDecorators, r = {};
        return Object.keys(o).forEach(i => { r[i] = ql(o[i]); }), r;
    } return t.hasOwnProperty(Jn) ? t[Jn] : null; }
    propMetadata(t) { if (!Dr(t))
        return {}; let n = ss(t), o = {}; if (n !== Object) {
        let i = this.propMetadata(n);
        Object.keys(i).forEach(s => { o[s] = i[s]; });
    } let r = this._ownPropMetadata(t, n); return r && Object.keys(r).forEach(i => { let s = []; o.hasOwnProperty(i) && s.push(...o[i]), s.push(...r[i]), o[i] = s; }), o; }
    ownPropMetadata(t) { return Dr(t) ? this._ownPropMetadata(t, ss(t)) || {} : {}; }
    hasLifecycleHook(t, n) { return t instanceof hm && n in t.prototype; }
};
function ql(e) { return e ? e.map(t => { let o = t.type.annotationCls, r = t.args ? t.args : []; return new o(...r); }) : []; }
function ss(e) { let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null; return (t ? t.constructor : null) || Object; }
function gm(e, t, n, o) { t !== null ? t.applyValueToInputSignal(t, o) : e[n] = o; }
var Ss = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, o) { this.previousValue = t, this.currentValue = n, this.firstChange = o; }
    isFirstChange() { return this.firstChange; }
}, mm = (() => { let e = () => ym; return e.ngInherit = !0, e; })();
function ym(e) { return e.type.prototype.ngOnChanges && (e.setInput = SN), _N; }
function _N() { let e = Em(this), t = e?.current; if (t) {
    let n = e.previous;
    if (n === Pe)
        e.previous = t;
    else
        for (let o in t)
            n[o] = t[o];
    e.current = null, this.ngOnChanges(t);
} }
function SN(e, t, n, o, r) { let i = this.declaredInputs[o], s = Em(e) || bN(e, { previous: Pe, current: null }), a = s.current || (s.current = {}), c = s.previous, l = c[i]; a[i] = new Ss(l && l.currentValue, n, c === Pe), gm(e, t, r, n); }
var vm = "__ngSimpleChanges__";
function Em(e) { return e[vm] || null; }
function bN(e, t) { return e[vm] = t; }
var Wh = [];
var V = function (e, t = null, n) { for (let o = 0; o < Wh.length; o++) {
    let r = Wh[o];
    r(e, t, n);
} }, k = (function (e) { return e[e.TemplateCreateStart = 0] = "TemplateCreateStart", e[e.TemplateCreateEnd = 1] = "TemplateCreateEnd", e[e.TemplateUpdateStart = 2] = "TemplateUpdateStart", e[e.TemplateUpdateEnd = 3] = "TemplateUpdateEnd", e[e.LifecycleHookStart = 4] = "LifecycleHookStart", e[e.LifecycleHookEnd = 5] = "LifecycleHookEnd", e[e.OutputStart = 6] = "OutputStart", e[e.OutputEnd = 7] = "OutputEnd", e[e.BootstrapApplicationStart = 8] = "BootstrapApplicationStart", e[e.BootstrapApplicationEnd = 9] = "BootstrapApplicationEnd", e[e.BootstrapComponentStart = 10] = "BootstrapComponentStart", e[e.BootstrapComponentEnd = 11] = "BootstrapComponentEnd", e[e.ChangeDetectionStart = 12] = "ChangeDetectionStart", e[e.ChangeDetectionEnd = 13] = "ChangeDetectionEnd", e[e.ChangeDetectionSyncStart = 14] = "ChangeDetectionSyncStart", e[e.ChangeDetectionSyncEnd = 15] = "ChangeDetectionSyncEnd", e[e.AfterRenderHooksStart = 16] = "AfterRenderHooksStart", e[e.AfterRenderHooksEnd = 17] = "AfterRenderHooksEnd", e[e.ComponentStart = 18] = "ComponentStart", e[e.ComponentEnd = 19] = "ComponentEnd", e[e.DeferBlockStateStart = 20] = "DeferBlockStateStart", e[e.DeferBlockStateEnd = 21] = "DeferBlockStateEnd", e[e.DynamicComponentStart = 22] = "DynamicComponentStart", e[e.DynamicComponentEnd = 23] = "DynamicComponentEnd", e[e.HostBindingsUpdateStart = 24] = "HostBindingsUpdateStart", e[e.HostBindingsUpdateEnd = 25] = "HostBindingsUpdateEnd", e; })(k || {});
function AN(e, t, n) { let { ngOnChanges: o, ngOnInit: r, ngDoCheck: i } = t.type.prototype; if (o) {
    let s = ym(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
} r && (n.preOrderHooks ??= []).push(0 - e, r), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i)); }
function Im(e, t) { for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
    let i = e.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: l, ngOnDestroy: u } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), l && ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)), u != null && (e.destroyHooks ??= []).push(n, u);
} }
function ys(e, t, n) { Dm(e, t, 3, n); }
function vs(e, t, n, o) { (e[w] & 3) === n && Dm(e, t, n, o); }
function Gl(e, t) { let n = e[w]; (n & 3) === t && (n &= 16383, n += 1, e[w] = n); }
function Dm(e, t, n, o) { let r = o !== void 0 ? e[cn] & 65535 : 0, i = o ?? -1, s = t.length - 1, a = 0; for (let c = r; c < s; c++)
    if (typeof t[c + 1] == "number") {
        if (a = t[c], o != null && a >= o)
            break;
    }
    else
        t[c] < 0 && (e[cn] += 65536), (a < i || i == -1) && (RN(e, n, t, c), e[cn] = (e[cn] & 4294901760) + c + 2), c++; }
function zh(e, t) { V(k.LifecycleHookStart, e, t); let n = O(null); try {
    t.call(e);
}
finally {
    O(n), V(k.LifecycleHookEnd, e, t);
} }
function RN(e, t, n, o) { let r = n[o] < 0, i = n[o + 1], s = r ? -n[o] : n[o], a = e[s]; r ? e[w] >> 14 < e[cn] >> 16 && (e[w] & 3) === t && (e[w] += 16384, zh(a, i)) : zh(a, i); }
var no = -1, vn = class {
    factory;
    name;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, o, r) { this.factory = t, this.name = r, this.canSeeViewProviders = n, this.injectImpl = o; }
};
function oa(e) { return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex)); }
function Cm(e) { return !!(e.type & 128); }
function ON(e) { return (e.flags & 8) !== 0; }
function kN(e) { return (e.flags & 16) !== 0; }
function xN(e, t, n) { let o = 0; for (; o < n.length;) {
    let r = n[o];
    if (typeof r == "number") {
        if (r !== 0)
            break;
        o++;
        let i = n[o++], s = n[o++], a = n[o++];
        e.setAttribute(t, s, a, i);
    }
    else {
        let i = r, s = n[++o];
        PN(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), o++;
    }
} return o; }
function pd(e) { return e === 3 || e === 4 || e === 6; }
function PN(e) { return e.charCodeAt(0) === 64; }
function uo(e, t) { if (!(t === null || t.length === 0))
    if (e === null || e.length === 0)
        e = t.slice();
    else {
        let n = -1;
        for (let o = 0; o < t.length; o++) {
            let r = t[o];
            typeof r == "number" ? n = r : n === 0 || (n === -1 || n === 2 ? Qh(e, n, r, null, t[++o]) : Qh(e, n, r, null, null));
        }
    } return e; }
function Qh(e, t, n, o, r) { let i = 0, s = e.length; if (t === -1)
    s = -1;
else
    for (; i < e.length;) {
        let a = e[i++];
        if (typeof a == "number") {
            if (a === t) {
                s = -1;
                break;
            }
            else if (a > t) {
                s = i - 1;
                break;
            }
        }
    } for (; i < e.length;) {
    let a = e[i];
    if (typeof a == "number")
        break;
    if (a === n) {
        r !== null && (e[i + 1] = r);
        return;
    }
    i++, r !== null && i++;
} s !== -1 && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), r !== null && e.splice(i++, 0, r); }
function Tm(e) { return e !== no; }
function bs(e) { return e & 32767; }
function LN(e) { return e >> 16; }
function As(e, t) { let n = LN(e), o = t; for (; n > 0;)
    o = o[an], n--; return o; }
var hu = !0;
function Rs(e) { let t = hu; return hu = e, t; }
var FN = 256, Mm = FN - 1, Nm = 5, jN = 0, ct = {};
function VN(e, t, n) { let o; typeof n == "string" ? o = n.charCodeAt(0) || 0 : n.hasOwnProperty(rn) && (o = n[rn]), o == null && (o = n[rn] = jN++); let r = o & Mm, i = 1 << r; t.data[e + (r >> Nm)] |= i; }
function Os(e, t) { let n = wm(e, t); if (n !== -1)
    return n; let o = t[y]; o.firstCreatePass && (e.injectorIndex = t.length, Wl(o.data, e), Wl(t, null), Wl(o.blueprint, null)); let r = hd(e, t), i = e.injectorIndex; if (Tm(r)) {
    let s = bs(r), a = As(r, t), c = a[y].data;
    for (let l = 0; l < 8; l++)
        t[i + l] = a[s + l] | c[s + l];
} return t[i + 8] = r, i; }
function Wl(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); }
function wm(e, t) { return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex; }
function hd(e, t) { if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex; let n = 0, o = null, r = t; for (; r !== null;) {
    if (o = Om(r), o === null)
        return no;
    if (n++, r = r[an], o.injectorIndex !== -1)
        return o.injectorIndex | n << 16;
} return no; }
function gu(e, t, n) { VN(e, t, n); }
function HN(e, t) { if (t === "class")
    return e.classes; if (t === "style")
    return e.styles; let n = e.attrs; if (n) {
    let o = n.length, r = 0;
    for (; r < o;) {
        let i = n[r];
        if (pd(i))
            break;
        if (i === 0)
            r = r + 2;
        else if (typeof i == "number")
            for (r++; r < o && typeof n[r] == "string";)
                r++;
        else {
            if (i === t)
                return n[r + 1];
            r = r + 2;
        }
    }
} return null; }
function _m(e, t, n) { if (n & 8 || e !== void 0)
    return e; Hi(t, "NodeInjector"); }
function Sm(e, t, n, o) { if (n & 8 && o === void 0 && (o = null), (n & 3) === 0) {
    let r = e[L], i = Ie(void 0);
    try {
        return r ? r.get(t, o, n & 8) : Yc(t, o, n & 8);
    }
    finally {
        Ie(i);
    }
} return _m(o, t, n); }
function bm(e, t, n, o = 0, r) { if (e !== null) {
    if (t[w] & 2048 && !(o & 2)) {
        let s = qN(e, t, n, o, ct);
        if (s !== ct)
            return s;
    }
    let i = Am(e, t, n, o, ct);
    if (i !== ct)
        return i;
} return Sm(t, n, o, r); }
function Am(e, t, n, o, r) { let i = UN(n); if (typeof i == "function") {
    if (!Al(t, e, o))
        return o & 1 ? _m(r, n, o) : Sm(t, n, o, r);
    try {
        let s;
        if (s = i(o), s == null && !(o & 8))
            Hi(n);
        else
            return s;
    }
    finally {
        Rl();
    }
}
else if (typeof i == "number") {
    let s = null, a = wm(e, t), c = no, l = o & 1 ? t[te][le] : null;
    for ((a === -1 || o & 4) && (c = a === -1 ? hd(e, t) : t[a + 8], c === no || !Yh(o, !1) ? a = -1 : (s = t[y], a = bs(c), t = As(c, t))); a !== -1;) {
        let u = t[y];
        if (Zh(i, a, u.data)) {
            let d = BN(a, t, n, s, o, l);
            if (d !== ct)
                return d;
        }
        c = t[a + 8], c !== no && Yh(o, t[y].data[a + 8] === l) && Zh(i, a, t) ? (s = u, a = bs(c), t = As(c, t)) : a = -1;
    }
} return r; }
function BN(e, t, n, o, r, i) { let s = t[y], a = s.data[e + 8], c = o == null ? De(a) && hu : o != s && (a.type & 3) !== 0, l = r & 1 && i === a, u = Es(a, s, n, c, l); return u !== null ? xr(t, s, u, a, r) : ct; }
function Es(e, t, n, o, r) { let i = e.providerIndexes, s = t.data, a = i & 1048575, c = e.directiveStart, l = e.directiveEnd, u = i >> 20, d = o ? a : a + u, f = r ? a + u : l; for (let p = d; p < f; p++) {
    let h = s[p];
    if (p < c && n === h || p >= c && h.type === n)
        return p;
} if (r) {
    let p = s[c];
    if (p && je(p) && p.type === n)
        return c;
} return null; }
function xr(e, t, n, o, r) { let i = e[n], s = t.data; if (i instanceof vn) {
    let a = i;
    if (a.resolving) {
        let p = Re(s[n]);
        throw Zc(p);
    }
    let c = Rs(a.canSeeViewProviders);
    a.resolving = !0;
    let l = s[n].type || s[n], u, d = a.injectImpl ? Ie(a.injectImpl) : null, f = Al(e, o, 0);
    try {
        i = e[n] = a.factory(void 0, r, s, e, o), t.firstCreatePass && n >= o.directiveStart && AN(n, s[n], t);
    }
    finally {
        d !== null && Ie(d), Rs(c), a.resolving = !1, Rl();
    }
} return i; }
function UN(e) { if (typeof e == "string")
    return e.charCodeAt(0) || 0; let t = e.hasOwnProperty(rn) ? e[rn] : void 0; return typeof t == "number" ? t >= 0 ? t & Mm : $N : t; }
function Zh(e, t, n) { let o = 1 << e; return !!(n[t + (e >> Nm)] & o); }
function Yh(e, t) { return !(e & 2) && !(e & 1 && t); }
var zt = class {
    _tNode;
    _lView;
    constructor(t, n) { this._tNode = t, this._lView = n; }
    get(t, n, o) { return bm(this._tNode, this._lView, t, en(o), n); }
};
function $N() { return new zt(_(), g()); }
function Rm(e) { return lt(() => { let t = e.prototype.constructor, n = t[nt] || mu(t), o = Object.prototype, r = Object.getPrototypeOf(e.prototype).constructor; for (; r && r !== o;) {
    let i = r[nt] || mu(r);
    if (i && i !== n)
        return i;
    r = Object.getPrototypeOf(r);
} return i => new i; }); }
function mu(e) { return tr(e) ? () => { let t = mu(P(e)); return t && t(); } : Ft(e); }
function qN(e, t, n, o, r) { let i = e, s = t; for (; i !== null && s !== null && s[w] & 2048 && !rt(s);) {
    let a = Am(i, s, n, o | 2, ct);
    if (a !== ct)
        return a;
    let c = i.parent;
    if (!c) {
        let l = s[il];
        if (l) {
            let u = l.get(n, ct, o);
            if (u !== ct)
                return u;
        }
        c = Om(s), s = s[an];
    }
    i = c;
} return r; }
function Om(e) { let t = e[y], n = t.type; return n === 2 ? t.declTNode : n === 1 ? e[le] : null; }
function ra(e) { return HN(_(), e); }
var km = Mo("Attribute", e => ({ attributeName: e, __NG_ELEMENT_ID__: () => ra(e) })), Kh = null;
function gd() { return Kh = Kh || new _s; }
function ia(e) { return xm(gd().parameters(e)); }
function xm(e) { return e.map(t => GN(t)); }
function GN(e) { let t = { token: null, attribute: null, host: !1, optional: !1, self: !1, skipSelf: !1 }; if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
        let o = e[n];
        if (o === void 0)
            continue;
        let r = Object.getPrototypeOf(o);
        if (o instanceof um || r.ngMetadataName === "Optional")
            t.optional = !0;
        else if (o instanceof fm || r.ngMetadataName === "SkipSelf")
            t.skipSelf = !0;
        else if (o instanceof dm || r.ngMetadataName === "Self")
            t.self = !0;
        else if (o instanceof pm || r.ngMetadataName === "Host")
            t.host = !0;
        else if (o instanceof lm)
            t.token = o.token;
        else if (o instanceof km) {
            if (o.attributeName === void 0)
                throw new C(204, !1);
            t.attribute = o.attributeName;
        }
        else
            t.token = o;
    }
else
    e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e; return t; }
function WN(e, t) { let n = null, o = null; e.hasOwnProperty(Fn) || Object.defineProperty(e, Fn, { get: () => (n === null && (n = ie({ usage: 0, kind: "injectable", type: e }).compileInjectable(Gh, `ng:///${e.name}/\u0275prov.js`, YN(e, t))), n) }), e.hasOwnProperty(nt) || Object.defineProperty(e, nt, { get: () => { if (o === null) {
        let r = ie({ usage: 0, kind: "injectable", type: e });
        o = r.compileFactory(Gh, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, typeArgumentCount: 0, deps: ia(e), target: r.FactoryTarget.Injectable });
    } return o; }, configurable: !0 }); }
var zN = S({ provide: String, useValue: S });
function Jh(e) { return e.useClass !== void 0; }
function QN(e) { return zN in e; }
function Xh(e) { return e.useFactory !== void 0; }
function ZN(e) { return e.useExisting !== void 0; }
function YN(e, t) { let n = t || { providedIn: null }, o = { name: e.name, type: e, typeArgumentCount: 0, providedIn: n.providedIn }; return (Jh(n) || Xh(n)) && n.deps !== void 0 && (o.deps = xm(n.deps)), Jh(n) ? o.useClass = n.useClass : QN(n) ? o.useValue = n.useValue : Xh(n) ? o.useFactory = n.useFactory : ZN(n) && (o.useExisting = n.useExisting), o; }
var KN = Zr("Injectable", void 0, void 0, void 0, (e, t) => WN(e, t));
function JN() { return No(_(), g()); }
function No(e, t) { return new Yr(K(e, t)); }
var Yr = (() => { class e {
    nativeElement;
    constructor(n) { this.nativeElement = n; }
    static __NG_ELEMENT_ID__ = JN;
} return e; })();
function Pm(e) { return e instanceof Yr ? e.nativeElement : e; }
function XN() { return this._results[Symbol.iterator](); }
var ks = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() { return this._changes ??= new cm; }
    constructor(t = !1) { this._emitDistinctChangesOnly = t; }
    get(t) { return this._results[t]; }
    map(t) { return this._results.map(t); }
    filter(t) { return this._results.filter(t); }
    find(t) { return this._results.find(t); }
    reduce(t, n) { return this._results.reduce(t, n); }
    forEach(t) { this._results.forEach(t); }
    some(t) { return this._results.some(t); }
    toArray() { return this._results.slice(); }
    toString() { return this._results.toString(); }
    reset(t, n) { this.dirty = !1; let o = Qe(t); (this._changesDetected = !Ih(this._results, o, n)) && (this._results = o, this.length = o.length, this.last = o[this.length - 1], this.first = o[0]); }
    notifyOnChanges() { this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this); }
    onDirty(t) { this._onDirty = t; }
    setDirty() { this.dirty = !0, this._onDirty?.(); }
    destroy() { this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe()); }
    [Symbol.iterator] = XN;
}, wo = "ngSkipHydration", ew = "ngskiphydration";
function md(e) { let t = e.mergedAttrs; if (t === null)
    return !1; for (let n = 0; n < t.length; n += 2) {
    let o = t[n];
    if (typeof o == "number")
        return !1;
    if (typeof o == "string" && o.toLowerCase() === ew)
        return !0;
} return !1; }
function Lm(e) { return e.hasAttribute(wo); }
function Pr(e) { return (e.flags & 128) === 128; }
function _o(e) { if (Pr(e))
    return !0; let t = e.parent; for (; t;) {
    if (Pr(e) || md(t))
        return !0;
    t = t.parent;
} return !1; }
function Fm(e) { return Pr(e) || md(e) || _o(e); }
var sa = (function (e) { return e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default", e; })(sa || {}), aa = new Map, tw = 0;
function nw() { return tw++; }
function ow(e) { aa.set(e[Fe], e); }
function jm(e) { return aa.get(e) || null; }
function yu(e) { aa.delete(e[Fe]); }
function rw() { return aa; }
var xs = class {
    lViewId;
    nodeIndex;
    native;
    component;
    directives;
    localRefs;
    get lView() { return jm(this.lViewId); }
    constructor(t, n, o) { this.lViewId = t, this.nodeIndex = n, this.native = o; }
};
function we(e) { let t = Is(e); if (t) {
    if (ne(t)) {
        let n = t, o, r, i;
        if (Hm(e)) {
            if (o = aw(n, e), o == -1)
                throw new Error("The provided component was not found in the application");
            r = e;
        }
        else if (iw(e)) {
            if (o = cw(n, e), o == -1)
                throw new Error("The provided directive was not found in the application");
            i = Bm(o, n);
        }
        else if (o = tg(n, e), o == -1)
            return null;
        let s = F(n[o]), a = Is(s), c = a && !Array.isArray(a) ? a : eg(n, o, s);
        if (r && c.component === void 0 && (c.component = r, He(c.component, c)), i && c.directives === void 0) {
            c.directives = i;
            for (let l = 0; l < i.length; l++)
                He(i[l], c);
        }
        He(c.native, c), t = c;
    }
}
else {
    let n = e, o = n;
    for (; o = o.parentNode;) {
        let r = Is(o);
        if (r) {
            let i = Array.isArray(r) ? r : r.lView;
            if (!i)
                return null;
            let s = tg(i, n);
            if (s >= 0) {
                let a = F(i[s]), c = eg(i, s, a);
                He(a, c), t = c;
                break;
            }
        }
    }
} return t || null; }
function eg(e, t, n) { return new xs(e[Fe], t, n); }
var vu = "__ngContext__";
function He(e, t) { ne(t) ? (e[vu] = t[Fe], ow(t)) : e[vu] = t; }
function Is(e) { let t = e[vu]; return typeof t == "number" ? jm(t) : t || null; }
function Vm(e) { let t = Is(e); return t ? ne(t) ? t : t.lView : null; }
function Hm(e) { return e && e.constructor && e.constructor.\u0275cmp; }
function iw(e) { return e && e.constructor && e.constructor.\u0275dir; }
function tg(e, t) { let n = e[y]; for (let o = I; o < n.bindingStartIndex; o++)
    if (F(e[o]) === t)
        return o; return -1; }
function sw(e) { if (e.child)
    return e.child; if (e.next)
    return e.next; for (; e.parent && !e.parent.next;)
    e = e.parent; return e.parent && e.parent.next; }
function aw(e, t) { let n = e[y].components; if (n)
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        if (ye(r, e)[U] === t)
            return r;
    }
else if (ye(I, e)[U] === t)
    return I; return -1; }
function cw(e, t) { let n = e[y].firstChild; for (; n;) {
    let o = n.directiveStart, r = n.directiveEnd;
    for (let i = o; i < r; i++)
        if (e[i] === t)
            return n.index;
    n = sw(n);
} return -1; }
function Bm(e, t) { let n = t[y].data[e]; if (n.directiveStart === 0)
    return j; let o = []; for (let r = n.directiveStart; r < n.directiveEnd; r++) {
    let i = t[r];
    Hm(i) || o.push(i);
} return o; }
function lw(e, t) { let n = t[y].data[e]; return De(n) ? t[n.directiveStart + n.componentOffset] : null; }
function uw(e, t) { let n = e[y].data[t]; if (n && n.localNames) {
    let o = {}, r = n.index + 1;
    for (let i = 0; i < n.localNames.length; i += 2)
        o[n.localNames[i]] = e[r], r++;
    return o;
} return null; }
function Um(e) { return qm(e[Ht]); }
function $m(e) { return qm(e[ge]); }
function qm(e) { for (; e !== null && !J(e);)
    e = e[ge]; return e; }
function ng(e) { let t = we(e); if (t === null)
    return null; if (t.component === void 0) {
    let n = t.lView;
    if (n === null)
        return null;
    t.component = lw(t.nodeIndex, n);
} return t.component; }
function dw(e) { Dw(e); let t = we(e), n = t ? t.lView : null; return n === null ? null : n[U]; }
function fw(e) { let t = we(e), n = t ? t.lView : null; if (n === null)
    return null; let o; for (; n[y].type === 2 && (o = gt(n));)
    n = o; return rt(n) ? null : n[U]; }
function pw(e) { let t = we(e), n = t ? t.lView : null; if (n === null)
    return ce.NULL; let o = n[y].data[t.nodeIndex]; return new zt(o, n); }
function hw(e) { let t = we(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[y], r = o.data[t.nodeIndex], i = [], s = r.providerIndexes & 1048575, a = r.directiveEnd; for (let c = s; c < a; c++) {
    let l = o.data[c];
    Iw(l) && (l = l.type), i.push(l);
} return i; }
function gw(e) { if (e instanceof Text)
    return []; let t = we(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[y], r = t.nodeIndex; return o?.data[r] ? (t.directives === void 0 && (t.directives = Bm(r, n)), t.directives === null ? [] : [...t.directives]) : []; }
var Gm = (function (e) { return e[e.Default = 0] = "Default", e[e.OnPush = 1] = "OnPush", e; })(Gm || {}), Wm = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 1] = "None", e; })(Wm || {});
function mw(e) { let t = we(e); if (t === null)
    return {}; if (t.localRefs === void 0) {
    let n = t.lView;
    if (n === null)
        return {};
    t.localRefs = uw(n, t.nodeIndex);
} return t.localRefs || {}; }
function yw(e) { return we(e).native; }
function vw(e) { let t = we(e), n = t === null ? null : t.lView; if (n === null)
    return []; let o = n[y], r = n[Vt], i = o.cleanup, s = []; if (i && r)
    for (let a = 0; a < i.length;) {
        let c = i[a++], l = i[a++];
        if (typeof c == "string") {
            let u = c, d = F(n[l]), f = r[i[a++]], p = i[a++], h = typeof p == "boolean" || p >= 0 ? "dom" : "output", m = typeof p == "boolean" ? p : !1;
            e == d && s.push({ element: e, name: u, callback: f, useCapture: m, type: h });
        }
    } return s.sort(Ew), s; }
function Ew(e, t) { return e.name == t.name ? 0 : e.name < t.name ? -1 : 1; }
function Iw(e) { return e.type !== void 0 && e.declaredInputs !== void 0 && e.resolveHostDirectives !== void 0; }
function Dw(e) { if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element"); }
var Eu;
function Cw(e) { Eu = e; }
function ca() { if (Eu !== void 0)
    return Eu; if (typeof document < "u")
    return document; throw new C(210, !1); }
var bt = new M("", { factory: () => Tw }), Tw = "ng";
var yd = new M(""), Mw = new M("", { providedIn: "platform", factory: () => "unknown" }), Nw = new M(""), ww = new M("", { factory: () => E($t).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), zm = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, _w = new M("", { factory: () => zm });
function Sw(e) { return e; }
var So = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => { let n = new e; return (typeof ngServerMode > "u" || !ngServerMode) && (n.store = Qm(E($t), E(bt))), n; } });
    store = {};
    onSerializeCallbacks = {};
    get(n, o) { return this.store[n] !== void 0 ? this.store[n] : o; }
    set(n, o) { this.store[n] = o; }
    remove(n) { delete this.store[n]; }
    hasKey(n) { return this.store.hasOwnProperty(n); }
    get isEmpty() { return Object.keys(this.store).length === 0; }
    onSerialize(n, o) { this.onSerializeCallbacks[n] = o; }
    toJson() { for (let n in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(n))
            try {
                this.store[n] = this.onSerializeCallbacks[n]();
            }
            catch (o) {
                console.warn("Exception in onSerialize callback: ", o);
            } return JSON.stringify(this.store).replace(/</g, "\\u003C"); }
} return e; })();
function Qm(e, t) { let n = e.getElementById(t + "-state"); if (n?.textContent)
    try {
        return JSON.parse(n.textContent);
    }
    catch (o) {
        console.warn("Exception while restoring TransferState for app " + t, o);
    } return {}; }
var vd = "h", Ed = "b", Zm = "f", Ym = "n", Kr = "e", la = "t", bo = "c", Jr = "x", wt = "r", ua = "i", Xr = "n", Ao = "d", da = "l", fa = "di", ei = "s", Id = "p", ti = "t", bn = new M(""), Km = !1, Dd = new M("", { factory: () => Km }), Cd = new M(""), pa = new M(""), Td = !1, Jm = new M("", { factory: () => [] }), Md = new M(""), ni = new M("", { factory: () => new Map }), bw = new M(""), Ps = { passive: !0, capture: !0 }, zl = new WeakMap, Ql = new WeakMap, Wt = new WeakMap, Ls = ["click", "keydown"], Fs = ["mouseenter", "mouseover", "focusin"], as = new Map, Lr = class {
    callbacks = new Set;
    listener = () => { for (let t of this.callbacks)
        t(); };
};
function Xm(e, t) { let n = Ql.get(e); if (!n) {
    n = new Lr, Ql.set(e, n);
    for (let o of Ls)
        e.addEventListener(o, n.listener, Ps);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    Ql.delete(e);
    for (let i of Ls)
        e.removeEventListener(i, r, Ps);
} }; }
function ey(e, t) { let n = zl.get(e); if (!n) {
    n = new Lr, zl.set(e, n);
    for (let o of Fs)
        e.addEventListener(o, n.listener, Ps);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    for (let i of Fs)
        e.removeEventListener(i, r, Ps);
    zl.delete(e);
} }; }
function Aw(e) { let t = ty(e); return new IntersectionObserver(n => { for (let o of n)
    o.isIntersecting && Wt.has(o.target) && Wt.get(o.target)?.get(t)?.listener(); }, e); }
function Rw(e, t, n, o) { let r = ty(o), i = Wt.get(e)?.get(r); as.has(r) || as.set(r, { observer: n(o), count: 0 }); let s = as.get(r); if (!i) {
    i = new Lr, s.observer.observe(e);
    let a = Wt.get(e);
    a ? a.set(r, i) : (a = new Map, Wt.set(e, a)), a.set(r, i), s.count++;
} return i.callbacks.add(t), () => { if (Wt.get(e)?.has(r)) {
    if (i.callbacks.delete(t), i.callbacks.size === 0) {
        s.observer.unobserve(e), s.count--;
        let a = Wt.get(e);
        a && (a.delete(r), a.size === 0 && Wt.delete(e));
    }
    s.count === 0 && (s.observer.disconnect(), as.delete(r));
} }; }
function ty(e) {
    return e ? `${e.rootMargin}/${typeof e.threshold == "number" ? e.threshold : e.threshold?.join(`
`)}` : "";
}
var Ro = "ngb";
function Nd(e, t, n = null) { if (t.length === 0 || e.nodeType !== Node.ELEMENT_NODE)
    return; let o = e.getAttribute(zn.JSACTION), r = t.reduce((s, a) => (o?.indexOf(a) ?? -1) === -1 ? s + a + ":;" : s, ""); e.setAttribute(zn.JSACTION, `${o ?? ""}${r}`); let i = n ?? ""; i !== "" && r.length > 0 && e.setAttribute(Ro, i); }
var ny = (e, t, n) => { let o = e, r = o.__jsaction_fns ?? new Map, i = r.get(t) ?? []; i.push(n), r.set(t, i), o.__jsaction_fns = r; }, wd = (e, t) => { let n = e, o = n.getAttribute(Ro) ?? "", r = t.get(o) ?? new Set; r.has(n) || r.add(n), t.set(o, r); };
function Ow(e, t) { if (e.length > 0) {
    let n = [];
    for (let r of e)
        t.has(r) && (n = [...n, ...t.get(r)]);
    new Set(n).forEach(_d);
} }
var _d = e => { e.removeAttribute(zn.JSACTION), e.removeAttribute(Ro), e.__jsaction_fns = void 0; }, Sd = new M("", { factory: () => ({}) });
function bd(e, t) { let n = t?.__jsaction_fns?.get(e.type); if (!(!n || !t?.isConnected))
    for (let o of n)
        o(e); }
var Iu = new Map;
function oy(e, t) { return Iu.set(e, t), () => Iu.delete(e); }
var og = !1, ry = (e, t, n, o) => { };
function kw(e, t, n, o) { ry(e, t, n, o); }
function iy() { og || (ry = (e, t, n, o) => { let r = e[L].get(bt); Iu.get(r)?.(t, n, o); }, og = !0); }
var At = new M(""), sy = (() => { class e {
    registry = new Map;
    cleanupFns = new Map;
    jsActionMap = E(ni);
    contract = E(Sd);
    add(n, o) { if (this.registry.set(n, o), this.awaitingCallbacks.has(n)) {
        let r = this.awaitingCallbacks.get(n);
        for (let i of r)
            i();
    } }
    get(n) { return this.registry.get(n) ?? null; }
    has(n) { return this.registry.has(n); }
    cleanup(n) { Ow(n, this.jsActionMap); for (let o of n)
        this.registry.delete(o), this.jsActionMap.delete(o), this.invokeTriggerCleanupFns(o), this.hydrating.delete(o), this.awaitingCallbacks.delete(o); this.size === 0 && this.contract.instance?.cleanUp(); }
    get size() { return this.registry.size; }
    addCleanupFn(n, o) { let r = []; this.cleanupFns.has(n) && (r = this.cleanupFns.get(n)), r.push(o), this.cleanupFns.set(n, r); }
    invokeTriggerCleanupFns(n) { let o = this.cleanupFns.get(n) ?? []; for (let r of o)
        r(); this.cleanupFns.delete(n); }
    hydrating = new Map;
    awaitingCallbacks = new Map;
    awaitParentBlock(n, o) { let r = this.awaitingCallbacks.get(n) ?? []; r.push(o), this.awaitingCallbacks.set(n, r); }
    static \u0275prov = B({ token: e, providedIn: null, factory: () => new e });
} return e; })();
function Oo(e) { return (e.flags & 32) === 32; }
var ay = "__nghData__", ha = ay, cy = "__nghDeferData__", ga = cy;
function xw(e) { return e === ay || e === cy; }
var oo = "ngh", ly = "nghm", uy = () => null;
function Pw(e, t, n = !1) { let o = e.getAttribute(oo); if (o == null)
    return null; let [r, i] = o.split("|"); if (o = n ? i : r, !o)
    return null; let s = i ? `|${i}` : "", a = n ? r : s, c = {}; if (o !== "") {
    let u = t.get(So, null, { optional: !0 });
    u !== null && (c = u.get(ha, [])[Number(o)]);
} let l = { data: c, firstChild: e.firstChild ?? null }; return n && (l.firstChild = e, ma(l, 0, e.nextSibling)), a ? e.setAttribute(oo, a) : e.removeAttribute(oo), l; }
function dy() { uy = Pw; }
function fy(e, t, n = !1) { return uy(e, t, n); }
function Ad(e) { let t = e._lView; return t[y].type === 2 ? null : (rt(t) && (t = t[I]), t); }
function Lw(e) { return e.textContent?.replace(/\s/gm, ""); }
function Fw(e) { let t = ca(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, { acceptNode(i) { let s = Lw(i); return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } }), o, r = []; for (; o = n.nextNode();)
    r.push(o); for (let i of r)
    i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove(); }
var py = (function (e) { return e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched", e; })(py || {}), jw = "__ngDebugHydrationInfo__";
function Vw(e) { return e[jw] ?? null; }
function ma(e, t, n) { e.segmentHeads ??= {}, e.segmentHeads[t] = n; }
function Du(e, t) { return e.segmentHeads?.[t] ?? null; }
function oi(e) { return e.get(Md, !1, { optional: !0 }); }
var Hw = !1;
function Bw() { Hw = !1; }
function hy(e, t) { let n = e.data, o = n[Kr]?.[t] ?? null; return o === null && n[bo]?.[t] && (o = Rd(e, t)), o; }
function Uw(e, t) { return e.data[Kr]?.[t] !== void 0; }
function gy(e, t) { return e.data[bo]?.[t] ?? null; }
function Rd(e, t) { let n = gy(e, t) ?? [], o = 0; for (let r of n)
    o += r[wt] * (r[Jr] ?? 1); return o; }
function my(e) { if (typeof e.disconnectedNodes > "u") {
    let t = e.data[Ao];
    e.disconnectedNodes = t ? new Set(t) : null;
} return e.disconnectedNodes; }
function ya(e, t) { if (typeof e.disconnectedNodes > "u") {
    let n = e.data[Ao];
    e.disconnectedNodes = n ? new Set(n) : null;
} return !!my(e)?.has(t); }
function va(e, t) { let n = e[ue]; return n !== null && !gr() && !Oo(t) && !ya(n, t.index - I); }
function Od(e, t) { let n = t, o = e.corruptedTextNodes; n.textContent === "" ? o.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && o.set(n, "ngtns"); }
function yy(e) { let t = []; return e !== null && (e.has(4) && t.push(...Fs), e.has(3) && t.push(...Ls)), t; }
function $w(e, t) { let n = t.get(At), r = t.get(So).get(ga, {}), i = !1, s = e, a = null, c = []; for (; !i && s;) {
    i = n.has(s);
    let l = n.hydrating.get(s);
    if (a === null && l != null) {
        a = l.promise;
        break;
    }
    c.unshift(s), s = r[s][Id];
} return { parentBlockPromise: a, hydrationQueue: c }; }
function qw(e) { let t = e.body.querySelectorAll("[jsaction]"), n = new Set, o = [Fs.join(":;"), Ls.join(":;")].join("|"); for (let r of t) {
    let i = r.getAttribute("jsaction"), s = r.getAttribute("ngb");
    i?.match(o) && s !== null && n.add(r);
} return n; }
function vy(e, t) { let n = qw(e), o = t.get(ni); for (let r of n)
    wd(r, o); }
var Ey = () => ({});
function Gw(e) { let t = e.get(So, null, { optional: !0 }); return t !== null ? t.get(ga, {}) : {}; }
function Iy() { Ey = Gw; }
function Ww(e) { return Ey(e); }
function zw(e) { return typeof e == "object" && e.trigger === 5; }
function Qw(e) { return e[ti]?.find(n => zw(n))?.delay ?? null; }
function Zw(e) { let t = e[ti]; if (t)
    for (let n of t) {
        if (n === 2)
            return !0;
        if (typeof n == "object" && n.trigger === 2)
            return n.intersectionObserverOptions || !0;
    } return null; }
function rg(e, t) { return e[ti]?.includes(t) ?? !1; }
function Yw(e) { return { data: e, hydrate: { idle: rg(e, 0), immediate: rg(e, 1), timer: Qw(e), viewport: Zw(e) } }; }
function Dy(e) { let t = Ww(e), n = new Map; for (let o in t)
    n.set(o, Yw(t[o])); return n; }
function Zl(e) { return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === ly; }
function ig(e) { for (; e && e.nodeType === Node.TEXT_NODE;)
    e = e.previousSibling; return e; }
function Cy(e) { for (let o of e.body.childNodes)
    if (Zl(o))
        return; let t = ig(e.body.previousSibling); if (Zl(t))
    return; let n = ig(e.head.lastChild); if (!Zl(n))
    throw new C(-507, !1); }
function Ty(e, t) { let n = e.contentQueries; if (n !== null) {
    let o = O(null);
    try {
        for (let r = 0; r < n.length; r += 2) {
            let i = n[r], s = n[r + 1];
            if (s !== -1) {
                let a = e.data[s];
                mr(i), a.contentQueries(2, t[s], s);
            }
        }
    }
    finally {
        O(o);
    }
} }
function Cu(e, t, n) { mr(0); let o = O(null); try {
    t(e, n);
}
finally {
    O(o);
} }
function kd(e, t, n) { if (al(t)) {
    let o = O(null);
    try {
        let r = t.directiveStart, i = t.directiveEnd;
        for (let s = r; s < i; s++) {
            let a = e.data[s];
            if (a.contentQueries) {
                let c = n[s];
                a.contentQueries(1, c, s);
            }
        }
    }
    finally {
        O(o);
    }
} }
var Be = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e[e.ExperimentalIsolatedShadowDom = 4] = "ExperimentalIsolatedShadowDom", e; })(Be || {}), Kw = { name: "custom-elements" }, Jw = { name: "no-errors-schema" }, My = !1;
function Xw(e) { My = e; }
function e_() { return My; }
var Ny = !1;
function t_(e) { Ny = e; }
function n_() { return Ny; }
var cs;
function wy() { if (cs === void 0 && (cs = null, be.trustedTypes))
    try {
        cs = be.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return cs; }
function ko(e) { return wy()?.createHTML(e) || e; }
function o_(e) { return wy()?.createScriptURL(e) || e; }
var ls;
function xd() { if (ls === void 0 && (ls = null, be.trustedTypes))
    try {
        ls = be.trustedTypes.createPolicy("angular#unsafe-bypass", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return ls; }
function sg(e) { return xd()?.createHTML(e) || e; }
function ag(e) { return xd()?.createScript(e) || e; }
function cg(e) { return xd()?.createScriptURL(e) || e; }
var _t = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
    toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Pi})`; }
}, Tu = class extends _t {
    getTypeName() { return "HTML"; }
}, Mu = class extends _t {
    getTypeName() { return "Style"; }
}, Nu = class extends _t {
    getTypeName() { return "Script"; }
}, wu = class extends _t {
    getTypeName() { return "URL"; }
}, _u = class extends _t {
    getTypeName() { return "ResourceURL"; }
};
function Rt(e) { return e instanceof _t ? e.changingThisBreaksApplicationSecurity : e; }
function xo(e, t) { let n = _y(e); if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
        return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Pi})`);
} return n === t; }
function _y(e) { return e instanceof _t && e.getTypeName() || null; }
function r_(e) { return new Tu(e); }
function i_(e) { return new Mu(e); }
function s_(e) { return new Nu(e); }
function a_(e) { return new wu(e); }
function c_(e) { return new _u(e); }
function Sy(e) { let t = new bu(e); return l_() ? new Su(t) : t; }
var Su = class {
    inertDocumentHelper;
    constructor(t) { this.inertDocumentHelper = t; }
    getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
        let n = new window.DOMParser().parseFromString(ko(t), "text/html").body;
        return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n);
    }
    catch {
        return null;
    } }
}, bu = class {
    defaultDoc;
    inertDocument;
    constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); }
    getInertBodyElement(t) { let n = this.inertDocument.createElement("template"); return n.innerHTML = ko(t), n; }
};
function l_() { try {
    return !!new window.DOMParser().parseFromString(ko(""), "text/html");
}
catch {
    return !1;
} }
var u_ = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function Ea(e) { return e = String(e), e.match(u_) ? e : "unsafe:" + e; }
function Ot(e) { let t = {}; for (let n of e.split(","))
    t[n] = !0; return t; }
function ri(...e) { let t = {}; for (let n of e)
    for (let o in n)
        n.hasOwnProperty(o) && (t[o] = !0); return t; }
var by = Ot("area,br,col,hr,img,wbr"), Ay = Ot("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), Ry = Ot("rp,rt"), d_ = ri(Ry, Ay), f_ = ri(Ay, Ot("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), p_ = ri(Ry, Ot("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Au = ri(by, f_, p_, d_), Pd = Ot("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), h_ = Ot("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), g_ = Ot("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), Oy = ri(Pd, h_, g_), m_ = Ot("script,style,template"), Ru = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) { let n = t.firstChild, o = !0, r = []; for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? o = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, o && n.firstChild) {
            r.push(n), n = E_(n);
            continue;
        }
        for (; n;) {
            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
            let i = v_(n);
            if (i) {
                n = i;
                break;
            }
            n = r.pop();
        }
    } return this.buf.join(""); }
    startElement(t) { let n = lg(t).toLowerCase(); if (!Au.hasOwnProperty(n))
        return this.sanitizedSomething = !0, !m_.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); let o = t.attributes; for (let r = 0; r < o.length; r++) {
        let i = o.item(r), s = i.name, a = s.toLowerCase();
        if (!Oy.hasOwnProperty(a)) {
            this.sanitizedSomething = !0;
            continue;
        }
        let c = i.value;
        Pd[a] && (c = Ea(c)), this.buf.push(" ", s, '="', ug(c), '"');
    } return this.buf.push(">"), !0; }
    endElement(t) { let n = lg(t).toLowerCase(); Au.hasOwnProperty(n) && !by.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">")); }
    chars(t) { this.buf.push(ug(t)); }
};
function y_(e, t) { return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY; }
function v_(e) { let t = e.nextSibling; if (t && e !== t.previousSibling)
    throw ky(t); return t; }
function E_(e) { let t = e.firstChild; if (t && y_(e, t))
    throw ky(t); return t; }
function lg(e) { let t = e.nodeName; return typeof t == "string" ? t : "FORM"; }
function ky(e) { return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`); }
var I_ = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, D_ = /([^\#-~ |!])/g;
function ug(e) { return e.replace(/&/g, "&amp;").replace(I_, function (t) { let n = t.charCodeAt(0), o = t.charCodeAt(1); return "&#" + ((n - 55296) * 1024 + (o - 56320) + 65536) + ";"; }).replace(D_, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
var us;
function xy(e, t) { let n = null; try {
    us = us || Sy(e);
    let o = t ? String(t) : "";
    n = us.getInertBodyElement(o);
    let r = 5, i = o;
    do {
        if (r === 0)
            throw new Error("Failed to sanitize html because the input is unstable");
        r--, o = i, i = n.innerHTML, n = us.getInertBodyElement(o);
    } while (o !== i);
    let a = new Ru().sanitizeChildren(Ou(n) || n);
    return ko(a);
}
finally {
    if (n) {
        let o = Ou(n) || n;
        for (; o.firstChild;)
            o.firstChild.remove();
    }
} }
function Ou(e) { return "content" in e && C_(e) ? e.content : null; }
function C_(e) { return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"; }
var T_ = /^>|^->|<!--|-->|--!>|<!-$/g, M_ = /(<|>)/g, N_ = "\u200B$1\u200B";
function w_(e) { return e.replace(T_, t => t.replace(M_, N_)); }
function Ld(e, t) { return e.createText(t); }
function Py(e, t, n) { e.setValue(t, n); }
function Fd(e, t) { return e.createComment(w_(t)); }
function Ia(e, t, n) { return e.createElement(t, n); }
function En(e, t, n, o, r) { e.insertBefore(t, n, o, r); }
function Ly(e, t, n) { e.appendChild(t, n); }
function dg(e, t, n, o, r) { o !== null ? En(e, t, n, o, r) : Ly(e, t, n); }
function ii(e, t, n, o) { e.removeChild(null, t, n, o); }
function Fy(e) { e.textContent = ""; }
function __(e, t, n) { e.setAttribute(t, "style", n); }
function S_(e, t, n) { n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n); }
function jy(e, t, n) { let { mergedAttrs: o, classes: r, styles: i } = n; o !== null && xN(e, t, o), r !== null && S_(e, t, r), i !== null && __(e, t, i); }
function b_(e) { let t = g(); e.src = "", e.srcdoc = ko(""), ii(t[T], e); }
var An = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e; })(An || {});
function Vy(e) { let t = si(); return t ? sg(t.sanitize(An.HTML, e) || "") : xo(e, "HTML") ? sg(Rt(e)) : xy(ca(), R(e)); }
function Hy(e) { let t = si(); return t ? t.sanitize(An.STYLE, e) || "" : xo(e, "Style") ? Rt(e) : R(e); }
function jd(e) { let t = si(); return t ? t.sanitize(An.URL, e) || "" : xo(e, "URL") ? Rt(e) : Ea(R(e)); }
function Vd(e) { let t = si(); if (t)
    return cg(t.sanitize(An.RESOURCE_URL, e) || ""); if (xo(e, "ResourceURL"))
    return cg(Rt(e)); throw new C(904, !1); }
function By(e) { let t = si(); if (t)
    return ag(t.sanitize(An.SCRIPT, e) || ""); if (xo(e, "Script"))
    return ag(Rt(e)); throw new C(905, !1); }
function Uy(e) { return ko(e[0]); }
function $y(e) { return o_(e[0]); }
var A_ = new Set(["embed", "frame", "iframe", "media", "script"]), R_ = new Set(["base", "link", "script"]);
function O_(e, t) { return t === "src" && A_.has(e) || t === "href" && R_.has(e) || t === "xlink:href" && e === "script" ? Vd : jd; }
function qy(e, t, n) { return O_(t, n)(e); }
function si() { let e = g(); return e && e[Ye].sanitizer; }
var ds = new Set(["attributename"]), k_ = { iframe: new Set(["sandbox", "allow", "allowfullscreen", "referrerpolicy", "csp", "fetchpriority"]), animate: ds, set: ds, animatemotion: ds, animatetransform: ds };
function Gy(e, t, n) { let o = t.toLowerCase(), r = n.toLowerCase(); if (!k_[o]?.has(r))
    return e; let i = Ce(); if (i.type !== 2)
    return e; let s = g(); if (o === "iframe") {
    let c = K(i, s);
    b_(c);
} let a = !1; throw new C(-910, a); }
function x_() { return Ze([]); }
function Wy(e) { return e.ownerDocument.defaultView; }
function zy(e) { return e.ownerDocument; }
function Hd(e) { return e.ownerDocument.body; }
var P_ = "\uFFFD";
function Xn(e) { return e instanceof Function ? e() : e; }
function L_(e, t, n) { let o = e.length; for (;;) {
    let r = e.indexOf(t, n);
    if (r === -1)
        return r;
    if (r === 0 || e.charCodeAt(r - 1) <= 32) {
        let i = t.length;
        if (r + i === o || e.charCodeAt(r + i) <= 32)
            return r;
    }
    n = r + 1;
} }
var Qy = "ng-template";
function F_(e, t, n, o) { let r = 0; if (o) {
    for (; r < t.length && typeof t[r] == "string"; r += 2)
        if (t[r] === "class" && L_(t[r + 1].toLowerCase(), n, 0) !== -1)
            return !0;
}
else if (Bd(e))
    return !1; if (r = t.indexOf(1, r), r > -1) {
    let i;
    for (; ++r < t.length && typeof (i = t[r]) == "string";)
        if (i.toLowerCase() === n)
            return !0;
} return !1; }
function Bd(e) { return e.type === 4 && e.value !== Qy; }
function j_(e, t, n) { let o = e.type === 4 && !n ? Qy : e.value; return t === o; }
function V_(e, t, n) { let o = 4, r = e.attrs, i = r !== null ? U_(r) : 0, s = !1; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
        if (!s && !et(o) && !et(c))
            return !1;
        if (s && et(c))
            continue;
        s = !1, o = c | o & 1;
        continue;
    }
    if (!s)
        if (o & 4) {
            if (o = 2 | o & 1, c !== "" && !j_(e, c, n) || c === "" && t.length === 1) {
                if (et(o))
                    return !1;
                s = !0;
            }
        }
        else if (o & 8) {
            if (r === null || !F_(e, r, c, n)) {
                if (et(o))
                    return !1;
                s = !0;
            }
        }
        else {
            let l = t[++a], u = H_(c, r, Bd(e), n);
            if (u === -1) {
                if (et(o))
                    return !1;
                s = !0;
                continue;
            }
            if (l !== "") {
                let d;
                if (u > i ? d = "" : d = r[u + 1].toLowerCase(), o & 2 && l !== d) {
                    if (et(o))
                        return !1;
                    s = !0;
                }
            }
        }
} return et(o) || s; }
function et(e) { return (e & 1) === 0; }
function H_(e, t, n, o) { if (t === null)
    return -1; let r = 0; if (o || !n) {
    let i = !1;
    for (; r < t.length;) {
        let s = t[r];
        if (s === e)
            return r;
        if (s === 3 || s === 6)
            i = !0;
        else if (s === 1 || s === 2) {
            let a = t[++r];
            for (; typeof a == "string";)
                a = t[++r];
            continue;
        }
        else {
            if (s === 4)
                break;
            if (s === 0) {
                r += 4;
                continue;
            }
        }
        r += i ? 1 : 2;
    }
    return -1;
}
else
    return $_(t, e); }
function Zy(e, t, n = !1) { for (let o = 0; o < t.length; o++)
    if (V_(e, t[o], n))
        return !0; return !1; }
function B_(e) { let t = e.attrs; if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0)
        return t[n + 1];
} return null; }
function U_(e) { for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (pd(n))
        return t;
} return e.length; }
function $_(e, t) { let n = e.indexOf(4); if (n > -1)
    for (n++; n < e.length;) {
        let o = e[n];
        if (typeof o == "number")
            return -1;
        if (o === t)
            return n;
        n++;
    } return -1; }
function q_(e, t) { e: for (let n = 0; n < t.length; n++) {
    let o = t[n];
    if (e.length === o.length) {
        for (let r = 0; r < e.length; r++)
            if (e[r] !== o[r])
                continue e;
        return !0;
    }
} return !1; }
function fg(e, t) { return e ? ":not(" + t.trim() + ")" : t; }
function G_(e) { let t = e[0], n = 1, o = 2, r = "", i = !1; for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string")
        if (o & 2) {
            let a = e[++n];
            r += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
        }
        else
            o & 8 ? r += "." + s : o & 4 && (r += " " + s);
    else
        r !== "" && !et(s) && (t += fg(i, r), r = ""), o = s, i = i || !et(o);
    n++;
} return r !== "" && (t += fg(i, r)), t; }
function W_(e) { return e.map(G_).join(","); }
function z_(e) { let t = [], n = [], o = 1, r = 2; for (; o < e.length;) {
    let i = e[o];
    if (typeof i == "string")
        r === 2 ? i !== "" && t.push(i, e[++o]) : r === 8 && n.push(i);
    else {
        if (!et(r))
            break;
        r = i;
    }
    o++;
} return n.length && t.push(1, ...n), t; }
var H = {};
function Ud(e, t, n, o, r, i, s, a, c, l, u) { let d = I + o, f = d + r, p = Q_(d, f), h = typeof l == "function" ? l() : l; return p[y] = { type: e, blueprint: p, template: n, queries: null, viewQuery: a, declTNode: t, data: p.slice().fill(null, d), bindingStartIndex: d, expandoStartIndex: f, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: typeof i == "function" ? i() : i, pipeRegistry: typeof s == "function" ? s() : s, firstChild: null, schemas: c, consts: h, incompleteFirstPass: !1, ssrId: u }; }
function Q_(e, t) { let n = []; for (let o = 0; o < t; o++)
    n.push(o < e ? null : H); return n; }
function Yy(e) { let t = e.tView; return t === null || t.incompleteFirstPass ? e.tView = Ud(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t; }
function Da(e, t, n, o, r, i, s, a, c, l, u) { let d = t.blueprint.slice(); return d[$] = r, d[w] = o | 4 | 128 | 8 | 64 | 1024, (l !== null || e && e[w] & 2048) && (d[w] |= 2048), dl(d), d[Z] = d[an] = e, d[U] = n, d[Ye] = s || e && e[Ye], d[T] = a || e && e[T], d[L] = c || e && e[L] || null, d[le] = i, d[Fe] = nw(), d[ue] = u, d[il] = l, d[te] = t.type == 2 ? e[te] : d, d; }
function Z_(e, t, n) { let o = K(t, e), r = Yy(n), i = e[Ye].rendererFactory, s = qd(e, Da(e, r, null, $d(n), o, t, null, i.createRenderer(o, n), null, null, null)); return e[t.index] = s; }
function $d(e) { let t = 16; return e.signals ? t = 4096 : e.onPush && (t = 64), t; }
function ai(e, t, n, o) { if (n === 0)
    return -1; let r = t.length; for (let i = 0; i < n; i++)
    t.push(o), e.blueprint.push(o), e.data.push(null); return r; }
function qd(e, t) { return e[Ht] ? e[ur][ge] = t : e[Ht] = t, e[ur] = t, t; }
function Ky(e = 1) { Jy(b(), g(), fe() + e, !1); }
function Jy(e, t, n, o) { if (!o)
    if ((t[w] & 3) === 3) {
        let i = e.preOrderCheckHooks;
        i !== null && ys(t, i, n);
    }
    else {
        let i = e.preOrderHooks;
        i !== null && vs(t, i, 0, n);
    } Ut(n); }
var Ca = (function (e) { return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e; })(Ca || {});
function In(e, t, n, o) { let r = O(null); try {
    let [i, s, a] = e.inputs[n], c = null;
    (s & Ca.SignalBased) !== 0 && (c = t[i][ae]), c !== null && c.transformFn !== void 0 ? o = c.transformFn(o) : a !== null && (o = a.call(t, o)), e.setInput !== null ? e.setInput(t, c, o, n, i) : gm(t, c, i, o);
}
finally {
    O(r);
} }
var js = (function (e) { return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e; })(js || {}), ku;
function Gd(e, t) { return ku(e, t); }
function Y_(e) { ku === void 0 && (ku = e()); }
function Vs(e) { if (!e)
    return 0; let t = e.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3; return parseFloat(e) * t; }
function ro(e, t) { return e.getPropertyValue(t).split(",").map(o => o.trim()); }
function K_(e) { let t = ro(e, "transition-property"), n = ro(e, "transition-duration"), o = ro(e, "transition-delay"), r = { propertyName: "", duration: 0, animationName: void 0 }; for (let i = 0; i < t.length; i++) {
    let s = Vs(o[i]) + Vs(n[i]);
    s > r.duration && (r.propertyName = t[i], r.duration = s);
} return r; }
function J_(e) { let t = ro(e, "animation-name"), n = ro(e, "animation-delay"), o = ro(e, "animation-duration"), r = { animationName: "", propertyName: void 0, duration: 0 }; for (let i = 0; i < t.length; i++) {
    let s = Vs(n[i]) + Vs(o[i]);
    s > r.duration && (r.animationName = t[i], r.duration = s);
} return r; }
function Xy(e, t) { return e !== void 0 && e.duration > t.duration; }
function ev(e) { return (e.animationName != null || e.propertyName != null) && e.duration > 0; }
function X_(e, t) { let n = getComputedStyle(e), o = J_(n), r = K_(n), i = o.duration > r.duration ? o : r; Xy(t.get(e), i) || ev(i) && t.set(e, i); }
function tv(e, t, n) { if (!n)
    return; let o = e.getAnimations(); return o.length === 0 ? X_(e, t) : eS(e, t, o); }
function eS(e, t, n) { let o = { animationName: void 0, propertyName: void 0, duration: 0 }; for (let r of n) {
    let i = r.effect?.getTiming(), s = typeof i?.duration == "number" ? i.duration : 0, a = (i?.delay ?? 0) + s, c, l;
    r.animationName ? l = r.animationName : c = r.transitionProperty, a >= o.duration && (o = { animationName: l, propertyName: c, duration: a });
} Xy(t.get(e), o) || ev(o) && t.set(e, o); }
var Dn = new Set, Ta = (function (e) { return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e; })(Ta || {}), Po = new M(""), pg = new Set;
function X(e) { pg.has(e) || (pg.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } })); }
var Ma = (() => { class e {
    impl = null;
    execute() { this.impl?.execute(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Wd = [0, 1, 2, 3], zd = (() => { class e {
    ngZone = E(q);
    scheduler = E(We);
    errorHandler = E(mt, { optional: !0 });
    sequences = new Set;
    deferredRegistrations = new Set;
    executing = !1;
    constructor() { E(Po, { optional: !0 }); }
    execute() { let n = this.sequences.size > 0; n && V(k.AfterRenderHooksStart), this.executing = !0; for (let o of Wd)
        for (let r of this.sequences)
            if (!(r.erroredOrDestroyed || !r.hooks[o]))
                try {
                    r.pipelinedValue = this.ngZone.runOutsideAngular(() => this.maybeTrace(() => { let i = r.hooks[o]; return i(r.pipelinedValue); }, r.snapshot));
                }
                catch (i) {
                    r.erroredOrDestroyed = !0, this.errorHandler?.handleError(i);
                } this.executing = !1; for (let o of this.sequences)
        o.afterRun(), o.once && (this.sequences.delete(o), o.destroy()); for (let o of this.deferredRegistrations)
        this.sequences.add(o); this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear(), n && V(k.AfterRenderHooksEnd); }
    register(n) { let { view: o } = n; o !== void 0 ? ((o[ln] ??= []).push(n), fn(o), o[w] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n); }
    addSequence(n) { this.sequences.add(n), this.scheduler.notify(7); }
    unregister(n) { this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n)); }
    maybeTrace(n, o) { return o ? o.run(Ta.AFTER_NEXT_RENDER, n) : n(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Fr = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, o, r, i, s = null) { this.impl = t, this.hooks = n, this.view = o, this.once = r, this.snapshot = s, this.unregisterOnDestroy = i?.onDestroy(() => this.destroy()); }
    afterRun() { this.erroredOrDestroyed = !1, this.pipelinedValue = void 0, this.snapshot?.dispose(), this.snapshot = null; }
    destroy() { this.impl.unregister(this), this.unregisterOnDestroy?.(); let t = this.view?.[ln]; t && (this.view[ln] = t.filter(n => n !== this)); }
};
function nv(e, t) { let n = t?.injector ?? E(ce); return typeof ngServerMode < "u" && ngServerMode ? Na : (X("NgAfterRender"), ov(e, n, t, !1)); }
function Qd(e, t) { let n = t?.injector ?? E(ce); return typeof ngServerMode < "u" && ngServerMode ? Na : (X("NgAfterNextRender"), ov(e, n, t, !0)); }
function tS(e) { return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]; }
function ov(e, t, n, o) { let r = t.get(Ma); r.impl ??= t.get(zd); let i = t.get(Po, null, { optional: !0 }), s = n?.manualCleanup !== !0 ? t.get(Ve) : null, a = t.get(Gn, null, { optional: !0 }), c = new Fr(r.impl, tS(e), a?.view, o, s, i?.snapshot(null)); return r.impl.register(c), c; }
var Na = { destroy() { } }, wa = new M("", { factory: () => ({ queue: new Set, isScheduled: !1, scheduler: null, injector: E(Se) }) });
function rv(e, t, n) { let o = e.get(wa); if (Array.isArray(t))
    for (let r of t)
        o.queue.add(r), n?.detachedLeaveAnimationFns?.push(r);
else
    o.queue.add(t), n?.detachedLeaveAnimationFns?.push(t); o.scheduler && o.scheduler(e); }
function nS(e, t) { let n = e.get(wa); if (t.detachedLeaveAnimationFns) {
    for (let o of t.detachedLeaveAnimationFns)
        n.queue.delete(o);
    t.detachedLeaveAnimationFns = void 0;
} }
function oS(e) { let t = e.get(wa); t.isScheduled || (Qd(() => { t.isScheduled = !1; for (let n of t.queue)
    n(); t.queue.clear(); }, { injector: t.injector }), t.isScheduled = !0); }
function _a(e) { let t = e.get(wa); t.scheduler = oS, t.scheduler(e); }
function Zd(e, t) { for (let [n, o] of t)
    rv(e, o.animateFns); }
function hg(e, t, n, o) { let r = e?.[vt]?.enter; t !== null && r && r.has(n.index) && Zd(o, r); }
function eo(e, t, n, o, r, i, s, a) { if (r != null) {
    let c, l = !1;
    J(r) ? c = r : ne(r) && (l = !0, r = r[$]);
    let u = F(r);
    e === 0 && o !== null ? (hg(a, o, i, n), s == null ? Ly(t, o, u) : En(t, o, u, s || null, !0)) : e === 1 && o !== null ? (hg(a, o, i, n), En(t, o, u, s || null, !0)) : e === 2 ? gg(a, i, n, d => { ii(t, u, l, d); }) : e === 3 && gg(a, i, n, () => { t.destroyNode(u); }), c != null && uS(t, e, n, c, i, o, s);
} }
function iv(e, t) { sv(e, t), t[$] = null, t[le] = null; }
function rS(e, t, n, o, r, i) { o[$] = r, o[le] = t, Sa(e, o, n, 1, r, i); }
function sv(e, t) { t[Ye].changeDetectionScheduler?.notify(9), Sa(e, t, t[T], 2, null, null); }
function iS(e) { let t = e[Ht]; if (!t)
    return Yl(e[y], e); for (; t;) {
    let n = null;
    if (ne(t))
        n = t[Ht];
    else {
        let o = t[G];
        o && (n = o);
    }
    if (!n) {
        for (; t && !t[ge] && t !== e;)
            ne(t) && Yl(t[y], t), t = t[Z];
        t === null && (t = e), ne(t) && Yl(t[y], t), n = t && t[ge];
    }
    t = n;
} }
function Yd(e, t) { let n = e[un], o = n.indexOf(t); n.splice(o, 1); }
function ci(e, t) { if (it(t))
    return; let n = t[T]; n.destroyNode && Sa(e, t, n, 3, null, null), iS(t); }
function Yl(e, t) { if (it(t))
    return; let n = O(null); try {
    t[w] &= -129, t[w] |= 256, t[Oe] && Lt(t[Oe]), cS(e, t), aS(e, t), t[y].type === 1 && t[T].destroy();
    let o = t[yt];
    if (o !== null && J(t[Z])) {
        o !== t[Z] && Yd(o, t);
        let r = t[ot];
        r !== null && r.detachView(e);
    }
    yu(t);
}
finally {
    O(n);
} }
function gg(e, t, n, o) { let r = e?.[vt]; if (r == null || r.leave == null || !r.leave.has(t.index))
    return o(!1); e && Dn.add(e[Fe]), rv(n, () => { if (r.leave && r.leave.has(t.index)) {
    let s = r.leave.get(t.index), a = [];
    if (s) {
        for (let c = 0; c < s.animateFns.length; c++) {
            let l = s.animateFns[c], { promise: u } = l();
            a.push(u);
        }
        r.detachedLeaveAnimationFns = void 0;
    }
    r.running = Promise.allSettled(a), sS(e, o);
}
else
    e && Dn.delete(e[Fe]), o(!1); }, r); }
function sS(e, t) { let n = e[vt]?.running; if (n) {
    n.then(() => { e[vt].running = void 0, Dn.delete(e[Fe]), t(!0); });
    return;
} t(!1); }
function aS(e, t) { let n = e.cleanup, o = t[Vt]; if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
        if (typeof n[s] == "string") {
            let a = n[s + 3];
            a >= 0 ? o[a]() : o[-a].unsubscribe(), s += 2;
        }
        else {
            let a = o[n[s + 1]];
            n[s].call(a);
        } o !== null && (t[Vt] = null); let r = t[pt]; if (r !== null) {
    t[pt] = null;
    for (let s = 0; s < r.length; s++) {
        let a = r[s];
        a();
    }
} let i = t[jt]; if (i !== null) {
    t[jt] = null;
    for (let s of i)
        s.destroy();
} }
function cS(e, t) { let n; if (e != null && (n = e.destroyHooks) != null)
    for (let o = 0; o < n.length; o += 2) {
        let r = t[n[o]];
        if (!(r instanceof vn)) {
            let i = n[o + 1];
            if (Array.isArray(i))
                for (let s = 0; s < i.length; s += 2) {
                    let a = r[i[s]], c = i[s + 1];
                    V(k.LifecycleHookStart, a, c);
                    try {
                        c.call(a);
                    }
                    finally {
                        V(k.LifecycleHookEnd, a, c);
                    }
                }
            else {
                V(k.LifecycleHookStart, r, i);
                try {
                    i.call(r);
                }
                finally {
                    V(k.LifecycleHookEnd, r, i);
                }
            }
        }
    } }
function Kd(e, t, n) { return av(e, t.parent, n); }
function av(e, t, n) { let o = t; for (; o !== null && o.type & 168;)
    t = o, o = t.parent; if (o === null)
    return n[$]; if (De(o)) {
    let { encapsulation: r } = e.data[o.directiveStart + o.componentOffset];
    if (r === Be.None || r === Be.Emulated)
        return null;
} return K(o, n); }
function cv(e, t, n) { return uv(e, t, n); }
function lv(e, t, n) { return e.type & 40 ? K(e, n) : null; }
var uv = lv, xu;
function dv(e, t) { uv = e, xu = t; }
function Jd(e, t, n, o) { let r = Kd(e, o, t), i = t[T], s = o.parent || t[le], a = cv(s, o, t); if (r != null)
    if (Array.isArray(n))
        for (let c = 0; c < n.length; c++)
            dg(i, r, n[c], a, !1);
    else
        dg(i, r, n, a, !1); xu !== void 0 && xu(i, o, t, n, r); }
function mn(e, t) { if (t !== null) {
    let n = t.type;
    if (n & 3)
        return K(t, e);
    if (n & 4)
        return Hs(-1, e[t.index]);
    if (n & 8) {
        let o = t.child;
        if (o !== null)
            return mn(e, o);
        {
            let r = e[t.index];
            return J(r) ? Hs(-1, r) : F(r);
        }
    }
    else {
        if (n & 128)
            return mn(e, t.next);
        if (n & 32)
            return Gd(t, e)() || F(e[t.index]);
        {
            let o = fv(e, t);
            if (o !== null) {
                if (Array.isArray(o))
                    return o[0];
                let r = gt(e[te]);
                return mn(r, o);
            }
            else
                return mn(e, t.next);
        }
    }
} return null; }
function fv(e, t) { if (t !== null) {
    let o = e[te][le], r = t.projection;
    return o.projection[r];
} return null; }
function Hs(e, t) { let n = G + e + 1; if (n < t.length) {
    let o = t[n], r = o[y].firstChild;
    if (r !== null)
        return mn(o, r);
} return t[Ke]; }
function Xd(e, t, n, o, r, i, s) { for (; n != null;) {
    let a = o[L];
    if (n.type === 128) {
        n = n.next;
        continue;
    }
    let c = o[n.index], l = n.type;
    if (s && t === 0 && (c && He(F(c), o), n.flags |= 2), !Oo(n))
        if (l & 8)
            Xd(e, t, n.child, o, r, i, !1), eo(t, e, a, r, c, n, i, o);
        else if (l & 32) {
            let u = Gd(n, o), d;
            for (; d = u();)
                eo(t, e, a, r, d, n, i, o);
            eo(t, e, a, r, c, n, i, o);
        }
        else
            l & 16 ? pv(e, t, o, n, r, i) : eo(t, e, a, r, c, n, i, o);
    n = s ? n.projectionNext : n.next;
} }
function Sa(e, t, n, o, r, i) { Xd(n, o, e.firstChild, t, r, i, !1); }
function lS(e, t, n) { let o = t[T], r = Kd(e, n, t), i = n.parent || t[le], s = cv(i, n, t); pv(o, 0, t, n, r, s); }
function pv(e, t, n, o, r, i) { let s = n[te], c = s[le].projection[o.projection]; if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
        let u = c[l];
        eo(t, e, n[L], r, u, o, i, n);
    }
else {
    let l = c, u = s[Z];
    Pr(o) && (l.flags |= 128), Xd(e, t, l, u, r, i, !0);
} }
function uS(e, t, n, o, r, i, s) { let a = o[Ke], c = F(o); a !== c && eo(t, e, n, i, a, r, s); for (let l = G; l < o.length; l++) {
    let u = o[l];
    Sa(u[y], u, e, t, i, a);
} }
function dS(e, t, n, o, r) { if (t)
    r ? e.addClass(n, o) : e.removeClass(n, o);
else {
    let i = o.indexOf("-") === -1 ? void 0 : js.DashCase;
    r == null ? e.removeStyle(n, o, i) : (typeof r == "string" && r.endsWith("!important") && (r = r.slice(0, -10), i |= js.Important), e.setStyle(n, o, r, i));
} }
function hv(e, t, n, o, r) { let i = fe(), s = o & 2; try {
    Ut(-1), s && t.length > I && Jy(e, t, I, !1);
    let a = s ? k.TemplateUpdateStart : k.TemplateCreateStart;
    V(a, r, n), n(o, r);
}
finally {
    Ut(i);
    let a = s ? k.TemplateUpdateEnd : k.TemplateCreateEnd;
    V(a, r, n);
} }
function ba(e, t, n) { mS(e, t, n), (n.flags & 64) === 64 && yS(e, t, n); }
function Lo(e, t, n = K) { let o = t.localNames; if (o !== null) {
    let r = t.index + 1;
    for (let i = 0; i < o.length; i += 2) {
        let s = o[i + 1], a = s === -1 ? n(t, e) : e[s];
        e[r++] = a;
    }
} }
function fS(e, t, n, o) { let i = o.get(Dd, Km) || n === Be.ShadowDom || n === Be.ExperimentalIsolatedShadowDom, s = e.selectRootElement(t, i); return pS(s), s; }
function pS(e) { gv(e); }
var gv = () => null;
function hS(e) { Lm(e) ? Fy(e) : Fw(e); }
function mv() { gv = hS; }
function gS(e) { return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e; }
function Aa(e, t, n, o, r, i) { let s = t[y]; if (xa(e, s, t, n, o)) {
    De(e) && yv(t, e.index);
    return;
} e.type & 3 && (n = gS(n)), ef(e, t, n, o, r, i); }
function ef(e, t, n, o, r, i) { if (e.type & 3) {
    let s = K(e, t);
    o = i != null ? i(o, e.value || "", n) : o, r.setProperty(s, n, o);
}
else
    e.type & 12; }
function yv(e, t) { let n = ye(t, e); n[w] & 16 || (n[w] |= 64); }
function mS(e, t, n) { let o = n.directiveStart, r = n.directiveEnd; De(n) && Z_(t, n, e.data[o + n.componentOffset]), e.firstCreatePass || Os(n, t); let i = n.initialInputs; for (let s = o; s < r; s++) {
    let a = e.data[s], c = xr(t, e, s, n);
    if (He(c, t), i !== null && IS(t, s - o, c, a, n, i), je(a)) {
        let l = ye(n.index, t);
        l[U] = xr(t, e, s, n);
    }
} }
function yS(e, t, n) { let o = n.directiveStart, r = n.directiveEnd, i = n.index, s = Ph(); try {
    Ut(i);
    for (let a = o; a < r; a++) {
        let c = e.data[a], l = t[a];
        Xi(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && vS(c, l);
    }
}
finally {
    Ut(-1), Xi(s);
} }
function vS(e, t) { e.hostBindings !== null && e.hostBindings(1, t); }
function tf(e, t) { let n = e.directiveRegistry, o = null; if (n)
    for (let r = 0; r < n.length; r++) {
        let i = n[r];
        Zy(t, i.selectors, !1) && (o ??= [], je(i) ? o.unshift(i) : o.push(i));
    } return o; }
function ES(e, t, n, o, r, i) { let s = K(e, t); Ra(t[T], s, i, e.value, n, o, r); }
function Ra(e, t, n, o, r, i, s) { if (i == null)
    e.removeAttribute(t, r, n);
else {
    let a = s == null ? R(i) : s(i, o || "", r);
    e.setAttribute(t, r, a, n);
} }
function IS(e, t, n, o, r, i) { let s = i[t]; if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
        let c = s[a], l = s[a + 1];
        In(o, n, c, l);
    } }
function Oa(e, t, n, o, r) { let i = I + n, s = t[y], a = r(s, t, e, o, n); t[i] = a, st(e, !0); let c = e.type === 2; return c ? (jy(t[T], a, e), (Ah() === 0 || Bn(e)) && He(a, t), Rh()) : He(a, t), yr() && (!c || !Oo(e)) && Jd(s, t, a, e), e; }
function ka(e) { let t = e; return Ml() ? Nl() : (t = t.parent, st(t, !1)), t; }
function vv(e, t, n) { return (e === null || je(e)) && (n = fr(n[t.index])), n[T]; }
function nf(e, t) { let n = e[L]; if (!n)
    return; let o; try {
    o = n.get(Dt, null);
}
catch {
    o = null;
} o?.(t); }
function xa(e, t, n, o, r) { let i = e.inputs?.[o], s = e.hostDirectiveInputs?.[o], a = !1; if (s)
    for (let c = 0; c < s.length; c += 2) {
        let l = s[c], u = s[c + 1], d = t.data[l];
        In(d, n[l], u, r), a = !0;
    } if (i)
    for (let c of i) {
        let l = n[c], u = t.data[c];
        In(u, l, o, r), a = !0;
    } return a; }
function DS(e, t, n, o, r, i) { let s = null, a = null, c = null, l = !1, u = e.directiveToIndex.get(o.type); if (typeof u == "number" ? s = u : [s, a, c] = u, a !== null && c !== null && e.hostDirectiveInputs?.hasOwnProperty(r)) {
    let d = e.hostDirectiveInputs[r];
    for (let f = 0; f < d.length; f += 2) {
        let p = d[f];
        if (p >= a && p <= c) {
            let h = t.data[p], m = d[f + 1];
            In(h, n[p], m, i), l = !0;
        }
        else if (p > c)
            break;
    }
} return s !== null && o.inputs.hasOwnProperty(r) && (In(o, n[s], r, i), l = !0), l; }
function CS(e, t) { let n = ye(t, e), o = n[y]; TS(o, n); let r = n[$]; r !== null && n[ue] === null && (n[ue] = fy(r, n[L])), V(k.ComponentStart); try {
    Pa(o, n, n[U]);
}
finally {
    V(k.ComponentEnd, n[U]);
} }
function TS(e, t) { for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]); }
function Pa(e, t, n) { ns(t); try {
    let o = e.viewQuery;
    o !== null && Cu(1, o, n);
    let r = e.template;
    r !== null && hv(e, t, r, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[ot]?.finishViewCreation(e), e.staticContentQueries && Ty(e, t), e.staticViewQueries && Cu(2, e.viewQuery, n);
    let i = e.components;
    i !== null && MS(t, i);
}
catch (o) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), o;
}
finally {
    t[w] &= -5, os();
} }
function MS(e, t) { for (let n = 0; n < t.length; n++)
    CS(e, t[n]); }
function Fo(e, t, n, o) { let r = O(null); try {
    let i = t.tView, a = e[w] & 4096 ? 4096 : 16, c = Da(e, i, n, a, null, t, null, null, o?.injector ?? null, o?.embeddedViewInjector ?? null, o?.dehydratedView ?? null), l = e[t.index];
    c[yt] = l;
    let u = e[ot];
    return u !== null && (c[ot] = u.createEmbeddedView(i)), Pa(i, c, n), c;
}
finally {
    O(r);
} }
function Cn(e, t) { return !t || t.firstChild === null || Pr(e); }
function fo(e, t, n, o, r = !1) { for (; n !== null;) {
    if (n.type === 128) {
        n = r ? n.projectionNext : n.next;
        continue;
    }
    let i = t[n.index];
    i !== null && o.push(F(i)), J(i) && La(i, o);
    let s = n.type;
    if (s & 8)
        fo(e, t, n.child, o);
    else if (s & 32) {
        let a = Gd(n, t), c;
        for (; c = a();)
            o.push(c);
    }
    else if (s & 16) {
        let a = fv(t, n);
        if (Array.isArray(a))
            o.push(...a);
        else {
            let c = gt(t[te]);
            fo(c[y], c, a, o, !0);
        }
    }
    n = r ? n.projectionNext : n.next;
} return o; }
function La(e, t) { for (let n = G; n < e.length; n++) {
    let o = e[n], r = o[y].firstChild;
    r !== null && fo(o[y], o, r, t);
} e[Ke] !== e[$] && t.push(e[Ke]); }
function Ev(e) { if (e[ln] !== null) {
    for (let t of e[ln])
        t.impl.addSequence(t);
    e[ln].length = 0;
} }
var Iv = [];
function NS(e) { return e[Oe] ?? wS(e); }
function wS(e) { let t = Iv.pop() ?? Object.create(SS); return t.lView = e, t; }
function _S(e) { e.lView[Oe] !== e && (e.lView = null, Iv.push(e)); }
var SS = _e(Q({}, Sc), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { fn(e.lView); }, consumerOnSignalRead() { this.lView[Oe] = this; } });
function bS(e) { let t = e[Oe] ?? Object.create(AS); return t.lView = e, t; }
var AS = _e(Q({}, Sc), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { let t = gt(e.lView); for (; t && !Dv(t[y]);)
        t = gt(t); t && Zi(t); }, consumerOnSignalRead() { this.lView[Oe] = this; } });
function Dv(e) { return e.type !== 2; }
function Cv(e) { if (e[jt] === null)
    return; let t = !0; for (; t;) {
    let n = !1;
    for (let o of e[jt])
        o.dirty && (n = !0, o.zone === null || Zone.current === o.zone ? o.run() : o.zone.run(() => o.run()));
    t = n && !!(e[w] & 8192);
} }
var RS = 100;
function Tv(e, t = 0) { let o = e[Ye].rendererFactory, r = !1; r || o.begin?.(); try {
    OS(e, t);
}
finally {
    r || o.end?.();
} }
function OS(e, t) { let n = _l(); try {
    Yo(!0), Pu(e, t);
    let o = 0;
    for (; Un(e);) {
        if (o === RS)
            throw new C(103, !1);
        o++, Pu(e, 1);
    }
}
finally {
    Yo(n);
} }
function Mv(e, t, n, o) { if (it(t))
    return; let r = t[w], i = !1, s = !1; ns(t); let a = !0, c = null, l = null; i || (Dv(e) ? (l = NS(t), c = Wo(l)) : Mi() === null ? (a = !1, l = bS(t), c = Wo(l)) : t[Oe] && (Lt(t[Oe]), t[Oe] = null)); try {
    dl(t), Sl(e.bindingStartIndex), n !== null && hv(e, t, n, 2, o);
    let u = (r & 3) === 3;
    if (!i)
        if (u) {
            let p = e.preOrderCheckHooks;
            p !== null && ys(t, p, null);
        }
        else {
            let p = e.preOrderHooks;
            p !== null && vs(t, p, 0, null), Gl(t, 0);
        }
    if (s || kS(t), Cv(t), Nv(t, 0), e.contentQueries !== null && Ty(e, t), !i)
        if (u) {
            let p = e.contentCheckHooks;
            p !== null && ys(t, p);
        }
        else {
            let p = e.contentHooks;
            p !== null && vs(t, p, 1), Gl(t, 1);
        }
    PS(e, t);
    let d = e.components;
    d !== null && _v(t, d, 0);
    let f = e.viewQuery;
    if (f !== null && Cu(2, f, o), !i)
        if (u) {
            let p = e.viewCheckHooks;
            p !== null && ys(t, p);
        }
        else {
            let p = e.viewHooks;
            p !== null && vs(t, p, 2), Gl(t, 2);
        }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[zi]) {
        for (let p of t[zi])
            p();
        t[zi] = null;
    }
    i || (Ev(t), t[w] &= -73);
}
catch (u) {
    throw i || fn(t), u;
}
finally {
    l !== null && (wi(l, c), a && _S(l)), os();
} }
function Nv(e, t) { for (let n = Um(e); n !== null; n = $m(n))
    for (let o = G; o < n.length; o++) {
        let r = n[o];
        wv(r, t);
    } }
function kS(e) { for (let t = Um(e); t !== null; t = $m(t)) {
    if (!(t[w] & 2))
        continue;
    let n = t[un];
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        Zi(r);
    }
} }
function xS(e, t, n) { V(k.ComponentStart); let o = ye(t, e); try {
    wv(o, n);
}
finally {
    V(k.ComponentEnd, o[U]);
} }
function wv(e, t) { Qi(e) && Pu(e, t); }
function Pu(e, t) { let o = e[y], r = e[w], i = e[Oe], s = !!(t === 0 && r & 16); if (s ||= !!(r & 64 && t === 0), s ||= !!(r & 1024), s ||= !!(i?.dirty && _i(i)), s ||= !1, i && (i.dirty = !1), e[w] &= -9217, s)
    Mv(o, e, o.template, e[U]);
else if (r & 8192) {
    let a = O(null);
    try {
        Cv(e), Nv(e, 1);
        let c = o.components;
        c !== null && _v(e, c, 1), Ev(e);
    }
    finally {
        O(a);
    }
} }
function _v(e, t, n) { for (let o = 0; o < t.length; o++)
    xS(e, t[o], n); }
function PS(e, t) { let n = e.hostBindingOpCodes; if (n !== null)
    try {
        for (let o = 0; o < n.length; o++) {
            let r = n[o];
            if (r < 0)
                Ut(~r);
            else {
                let i = r, s = n[++o], a = n[++o];
                xh(s, i);
                let c = t[i];
                V(k.HostBindingsUpdateStart, c);
                try {
                    a(2, c);
                }
                finally {
                    V(k.HostBindingsUpdateEnd, c);
                }
            }
        }
    }
    finally {
        Ut(-1);
    } }
function li(e, t) { let n = _l() ? 64 : 1088; for (e[Ye].changeDetectionScheduler?.notify(t); e;) {
    e[w] |= n;
    let o = gt(e);
    if (rt(e) && !o)
        return e;
    e = o;
} return null; }
function Sv(e, t, n, o) { return [e, !0, 0, t, null, o, null, n, null, null]; }
function bv(e, t) { let n = G + t; if (n < e.length)
    return e[n]; }
function jo(e, t, n, o = !0) { let r = t[y]; if (LS(r, t, e, n), o) {
    let s = Hs(n, e), a = t[T], c = a.parentNode(e[Ke]);
    c !== null && rS(r, e[le], a, t, c, s);
} let i = t[ue]; i !== null && i.firstChild !== null && (i.firstChild = null); }
function of(e, t) { let n = jr(e, t); return n !== void 0 && ci(n[y], n), n; }
function jr(e, t) { if (e.length <= G)
    return; let n = G + t, o = e[n]; if (o) {
    let r = o[yt];
    r !== null && r !== e && Yd(r, o), t > 0 && (e[n - 1][ge] = o[ge]);
    let i = ar(e, G + t);
    iv(o[y], o);
    let s = i[ot];
    s !== null && s.detachView(i[y]), o[Z] = null, o[ge] = null, o[w] &= -129;
} return o; }
function LS(e, t, n, o) { let r = G + o, i = n.length; o > 0 && (n[r - 1][ge] = t), o < i - G ? (t[ge] = n[r], Kc(n, G + o, t)) : (n.push(t), t[ge] = null), t[Z] = n; let s = t[yt]; s !== null && n !== s && Av(s, t); let a = t[ot]; a !== null && a.insertView(e), Yi(t), t[w] |= 128; }
function Av(e, t) { let n = e[un], o = t[Z]; if (ne(o))
    e[w] |= 2;
else {
    let r = o[Z][te];
    t[te] !== r && (e[w] |= 2);
} n === null ? e[un] = [t] : n.push(t); }
var Qt = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() { let t = this._lView, n = t[y]; return fo(n, t, n.firstChild, []); }
    constructor(t, n) { this._lView = t, this._cdRefInjectingView = n; }
    get context() { return this._lView[U]; }
    set context(t) { this._lView[U] = t; }
    get destroyed() { return it(this._lView); }
    destroy() { if (this._appRef)
        this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
        let t = this._lView[Z];
        if (J(t)) {
            let n = t[dr], o = n ? n.indexOf(this) : -1;
            o > -1 && (jr(t, o), ar(n, o));
        }
        this._attachedToViewContainer = !1;
    } ci(this._lView[y], this._lView); }
    onDestroy(t) { hr(this._lView, t); }
    markForCheck() { li(this._cdRefInjectingView || this._lView, 4); }
    detach() { this._lView[w] &= -129; }
    reattach() { Yi(this._lView), this._lView[w] |= 128; }
    detectChanges() { this._lView[w] |= 1024, Tv(this._lView); }
    checkNoChanges() { }
    attachToViewContainerRef() { if (this._appRef)
        throw new C(902, !1); this._attachedToViewContainer = !0; }
    detachFromAppRef() { this._appRef = null; let t = rt(this._lView), n = this._lView[yt]; n !== null && !t && Yd(n, this._lView), sv(this._lView[y], this._lView); }
    attachToAppRef(t) { if (this._attachedToViewContainer)
        throw new C(902, !1); this._appRef = t; let n = rt(this._lView), o = this._lView[yt]; o !== null && !n && Av(o, this._lView), Yi(this._lView); }
};
function FS(e) { return Un(e._lView) || !!(e._lView[w] & 64); }
function jS(e) { Zi(e._lView); }
var Vr = (() => { class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = VS;
    constructor(n, o, r) { this._declarationLView = n, this._declarationTContainer = o, this.elementRef = r; }
    get ssrId() { return this._declarationTContainer.tView?.ssrId || null; }
    createEmbeddedView(n, o) { return this.createEmbeddedViewImpl(n, o); }
    createEmbeddedViewImpl(n, o, r) { let i = Fo(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: o, dehydratedView: r }); return new Qt(i); }
} return e; })();
function VS() { return Fa(_(), g()); }
function Fa(e, t) { return e.type & 4 ? new Vr(t, e, No(e, t)) : null; }
var Lu = "<-- AT THIS LOCATION";
function HS(e) { switch (e) {
    case 4: return "view container";
    case 2: return "element";
    case 8: return "ng-container";
    case 32: return "icu";
    case 64: return "i18n";
    case 16: return "projection";
    case 1: return "text";
    case 128: return "@let";
    default: return "<unknown>";
} }
function BS(e, t) {
    let n = `During serialization, Angular was unable to find an element in the DOM:

`, o = `${GS(e, t, !1)}

`, r = zS();
    throw new C(-502, n + o + r);
}
function Rv(e) {
    let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${WS(e)}

`, o = t + n + QS();
    return new C(-503, o);
}
function US(e) { let t = []; if (e.attrs)
    for (let n = 0; n < e.attrs.length;) {
        let o = e.attrs[n++];
        if (typeof o == "number")
            break;
        let r = e.attrs[n++];
        t.push(`${o}="${Bs(r)}"`);
    } return t.join(" "); }
var $S = new Set(["ngh", "ng-version", "ng-server-context"]);
function qS(e) { let t = []; for (let n = 0; n < e.attributes.length; n++) {
    let o = e.attributes[n];
    $S.has(o.name) || t.push(`${o.name}="${Bs(o.value)}"`);
} return t.join(" "); }
function Kl(e, t = "\u2026") { switch (e.type) {
    case 1: return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
        let o = US(e), r = e.value.toLowerCase();
        return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case 8: return "<!-- ng-container -->";
    case 4: return "<!-- container -->";
    default: return `#node(${HS(e.type)})`;
} }
function Ds(e, t = "\u2026") { let n = e; switch (n.nodeType) {
    case Node.ELEMENT_NODE:
        let o = n.tagName.toLowerCase(), r = qS(n);
        return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case Node.TEXT_NODE:
        let i = n.textContent ? Bs(n.textContent) : "";
        return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE: return `<!-- ${Bs(n.textContent ?? "")} -->`;
    default: return `#node(${n.nodeType})`;
} }
function GS(e, t, n) {
    let r = "";
    t.prev ? (r += `  \u2026
`, r += "  " + Kl(t.prev) + `
`) : t.type && t.type & 12 && (r += `  \u2026
`), n ? (r += "  " + Kl(t) + `
`, r += `  <!-- container -->  ${Lu}
`) : r += "  " + Kl(t) + `  ${Lu}
`, r += `  \u2026
`;
    let i = t.type ? Kd(e[y], t, e) : null;
    return i && (r = Ds(i, `
` + r)), r;
}
function WS(e) {
    let n = "", o = e;
    return o.previousSibling && (n += `  \u2026
`, n += "  " + Ds(o.previousSibling) + `
`), n += "  " + Ds(o) + `  ${Lu}
`, e.nextSibling && (n += `  \u2026
`), e.parentNode && (n = Ds(o.parentNode, `
` + n)), n;
}
function zS(e) {
    return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function QS() {
    return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function ZS(e) { return e.replace(/\s+/gm, ""); }
function Bs(e, t = 50) { return e ? (e = ZS(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : ""; }
function Ov(e, t, n) { let o = t.insertBeforeIndex, r = Array.isArray(o) ? o[0] : o; return r === null ? lv(e, t, n) : F(n[r]); }
function kv(e, t, n, o, r) { let i = t.insertBeforeIndex; if (Array.isArray(i)) {
    let s = o, a = null;
    if (t.type & 3 || (a = s, s = r), s !== null && t.componentOffset === -1)
        for (let c = 1; c < i.length; c++) {
            let l = n[i[c]];
            En(e, s, l, a, !1);
        }
} }
function Rn(e, t, n, o, r) { let i = e.data[t]; if (i === null)
    i = rf(e, t, n, o, r), kh() && (i.flags |= 32);
else if (i.type & 64) {
    i.type = n, i.value = o, i.attrs = r;
    let s = $n();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
} return st(i, !0), i; }
function rf(e, t, n, o, r) { let i = Tl(), s = Ml(), a = s ? i : i && i.parent, c = e.data[t] = KS(e, a, n, t, o, r); return YS(e, c, i, s), c; }
function YS(e, t, n, o) { e.firstChild === null && (e.firstChild = t), n !== null && (o ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n)); }
function KS(e, t, n, o, r, i) { let s = t ? t.injectorIndex : -1, a = 0; return gr() && (a |= 128), { type: n, index: o, insertBeforeIndex: null, injectorIndex: s, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, componentOffset: -1, fieldIndex: -1, customControlIndex: -1, propertyBindings: null, flags: a, providerIndexes: 0, value: r, attrs: i, mergedAttrs: null, localNames: null, initialInputs: null, inputs: null, hostDirectiveInputs: null, outputs: null, hostDirectiveOutputs: null, directiveToIndex: null, tView: null, next: null, prev: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }
function xv(e, t) { if (e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
        let o = e[n];
        Pv(o) || JS(o, t) && XS(o) === null && eb(o, t.index);
    } }
function Pv(e) { return !(e.type & 64); }
function JS(e, t) { return Pv(t) || e.index > t.index; }
function XS(e) { let t = e.insertBeforeIndex; return Array.isArray(t) ? t[0] : t; }
function eb(e, t) { let n = e.insertBeforeIndex; Array.isArray(n) ? n[0] = t : (dv(Ov, kv), e.insertBeforeIndex = t); }
function Tr(e, t) { let n = e.data[t]; return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value; }
function tb(e, t, n) { let o = e.data[t]; o === null ? e.data[t] = n : o.value = n; }
function nb(e, t) { let n = e.insertBeforeIndex; n === null ? (dv(Ov, kv), n = e.insertBeforeIndex = [null, t]) : (mh(Array.isArray(n), !0, "Expecting array here"), n.push(t)); }
function ob(e, t, n) { let o = rf(e, n, 64, null, null); return xv(t, o), o; }
function ja(e, t) { let n = t[e.currentCaseLViewIndex]; return n === null ? n : n < 0 ? ~n : n; }
function rb(e) { return e >>> 17; }
function ib(e) { return (e & 131070) >>> 1; }
function sb(e, t, n) { return e | t << 17 | n << 1; }
function Lv(e) { return e === -1; }
function sf(e, t, n) { e.index = 0; let o = ja(t, n); o !== null ? e.removes = t.remove[o] : e.removes = j; }
function Us(e) { if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0)
        return e.lView[t];
    {
        e.stack.push(e.index, e.removes);
        let n = ~t, o = e.lView[y].data[n];
        return sf(e, o, e.lView), Us(e);
    }
}
else
    return e.stack.length === 0 ? (e.lView = void 0, null) : (e.removes = e.stack.pop(), e.index = e.stack.pop(), Us(e)); }
function ab() { let e = { stack: [], index: -1 }; function t(n, o) { for (e.lView = o; e.stack.length;)
    e.stack.pop(); return sf(e, n.value, o), Us.bind(null, e); } return t; }
function cb(e, t) { let n = { stack: [], index: -1, lView: t }; return sf(n, e, t), Us.bind(null, n); }
var lb = new RegExp(`^(\\d+)*(${Ed}|${vd})*(.*)`);
function ub(e, t) { let n = [e]; for (let o of t) {
    let r = n.length - 1;
    if (r > 0 && n[r - 1] === o) {
        let i = n[r] || 1;
        n[r] = i + 1;
    }
    else
        n.push(o, "");
} return n.join(""); }
function db(e) { let t = e.match(lb), [n, o, r, i] = t, s = o ? parseInt(o, 10) : r, a = []; for (let [c, l, u] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(u, 10) || 1;
    a.push(l, d);
} return [s, ...a]; }
function fb(e) { return !e.prev && e.parent?.type === 8; }
function Jl(e) { return e.index - I; }
function Vo(e, t) { return !(e.type & 144) && !!t[e.index] && Fv(F(t[e.index])); }
function Fv(e) { return !!e && !e.isConnected; }
function jv(e, t) { let n = e.i18nNodes; if (n)
    return n.get(t); }
function pb(e, t, n) { let r = e.data[Xr]?.[n]; return r ? Vv(r, t) : null; }
function ui(e, t, n, o) { let r = Jl(o), i = jv(e, r); if (i === void 0) {
    let s = e.data[Xr];
    if (s?.[r])
        i = Vv(s[r], n);
    else if (t.firstChild === o)
        i = e.firstChild;
    else {
        let a = o.prev === null, c = o.prev ?? o.parent;
        if (fb(o)) {
            let l = Jl(o.parent);
            i = Du(e, l);
        }
        else {
            let l = K(c, n);
            if (a)
                i = l.firstChild;
            else {
                let u = Jl(c), d = Du(e, u);
                if (c.type === 2 && d) {
                    let p = Rd(e, u) + 1;
                    i = Va(p, d);
                }
                else
                    i = l.nextSibling;
            }
        }
    }
} return i; }
function Va(e, t) { let n = t; for (let o = 0; o < e; o++)
    n = n.nextSibling; return n; }
function hb(e, t) { let n = e; for (let o = 0; o < t.length; o += 2) {
    let r = t[o], i = t[o + 1];
    for (let s = 0; s < i; s++)
        switch (r) {
            case Zm:
                n = n.firstChild;
                break;
            case Ym:
                n = n.nextSibling;
                break;
        }
} return n; }
function Vv(e, t) { let [n, ...o] = db(e), r; if (n === vd)
    r = t[te][$];
else if (n === Ed)
    r = Hd(t[te][$]);
else {
    let i = Number(n);
    r = F(t[i + I]);
} return hb(r, o); }
function Fu(e, t) { if (e === t)
    return []; if (e.parentElement == null || t.parentElement == null)
    return null; if (e.parentElement === t.parentElement)
    return gb(e, t); {
    let n = t.parentElement, o = Fu(e, n), r = Fu(n.firstChild, t);
    return !o || !r ? null : [...o, Zm, ...r];
} }
function gb(e, t) { let n = [], o = null; for (o = e; o != null && o !== t; o = o.nextSibling)
    n.push(Ym); return o == null ? null : n; }
function mg(e, t, n) { let o = Fu(e, t); return o === null ? null : ub(n, o); }
function Hv(e, t, n) { let o = e.parent, r, i, s; for (; o !== null && (Vo(o, t) || n?.has(o.index));)
    o = o.parent; o === null || !(o.type & 3) ? (r = s = vd, i = t[te][$]) : (r = o.index, i = F(t[r]), s = R(r - I)); let a = F(t[e.index]); if (e.type & 44) {
    let l = mn(t, e);
    l && (a = l);
} let c = mg(i, a, s); if (c === null && i !== a) {
    let l = i.ownerDocument.body;
    if (c = mg(l, a, Ed), c === null)
        throw BS(t, e);
} return c; }
function Bv(e, t) { let n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, { acceptNode: mb }), o, r = new Map; for (; o = n.nextNode();) {
    let i = "ngh=", s = o?.textContent, a = s?.indexOf(i) ?? -1;
    if (a > -1) {
        let c = s.substring(a + i.length).trim();
        r.set(c, o);
    }
} return r; }
function mb(e) { return e.textContent?.trimStart().startsWith("ngh=") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
var Uv = !1, $v = () => { };
function af(e) { Uv = e; }
function Ha() { return Uv; }
function yb(e, t, n, o) { $v(e, t, n, o); }
function qv() { $v = Cb; }
function Gv(e) { return e = e ?? E(ce), e.get(Cd, !1); }
function Wv(e, t) { let n = t.i18nChildren.get(e); return n === void 0 && (n = vb(e), t.i18nChildren.set(e, n)), n; }
function vb(e) { let t = new Set; function n(o) { switch (t.add(o.index), o.kind) {
    case 1:
    case 2: {
        for (let r of o.children)
            n(r);
        break;
    }
    case 3: {
        for (let r of o.cases)
            for (let i of r)
                n(i);
        break;
    }
} } for (let o = I; o < e.bindingStartIndex; o++) {
    let r = e.data[o];
    if (!(!r || !r.ast))
        for (let i of r.ast)
            n(i);
} return t.size === 0 ? null : t; }
function zv(e, t, n) { if (!n.isI18nHydrationEnabled)
    return null; let o = e[y], r = o.data[t]; if (!r || !r.ast)
    return null; let i = o.data[r.parentTNodeIndex]; if (i && Fm(i))
    return null; let s = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set }; return ju(e, s, n, r.ast), s.caseQueue.length === 0 && s.disconnectedNodes.size === 0 && s.disjointNodes.size === 0 ? null : s; }
function ju(e, t, n, o) { let r = null; for (let i of o) {
    let s = Ib(e, t, n, i);
    s && (Eb(r, s) && t.disjointNodes.add(i.index - I), r = s);
} return r; }
function Eb(e, t) { return e && e.nextSibling !== t; }
function Ib(e, t, n, o) { let r = F(e[o.index]); if (!r || Fv(r))
    return t.disconnectedNodes.add(o.index - I), null; let i = r; switch (o.kind) {
    case 0: {
        Od(n, i);
        break;
    }
    case 1:
    case 2: {
        ju(e, t, n, o.children);
        break;
    }
    case 3: {
        let s = e[o.currentCaseLViewIndex];
        if (s != null) {
            let a = s < 0 ? ~s : s;
            t.caseQueue.push(a), ju(e, t, n, o.cases[a]);
        }
        break;
    }
} return Db(e, o); }
function Db(e, t) { let o = e[y].data[t.index]; return oa(o) ? mn(e, o) : t.kind === 3 ? cb(o, e)() ?? F(e[t.index]) : F(e[t.index]) ?? null; }
function pn(e, t) { e.currentNode = t; }
function Er(e, t, n) { let o = n.index - I, { disconnectedNodes: r } = e, i = t.currentNode; return t.isConnected ? (e.i18nNodes.set(o, i), r.delete(o)) : r.add(o), i; }
function Xl(e, t) { let n = e.currentNode; for (let o = 0; o < t && n; o++)
    n = n?.nextSibling ?? null; return n; }
function eu(e, t) { return { currentNode: t, isConnected: e.isConnected }; }
function Cb(e, t, n, o) { let r = e[ue]; if (!r || !Ha() || n && (Fm(n) || ya(r, n.index - I)))
    return; let i = e[y], s = i.data[t]; function a() { if (Lv(o)) {
    let p = ui(r, i, e, n);
    return n.type & 8 ? p : p.firstChild;
} return r?.firstChild; } let c = a(), l = my(r) ?? new Set, u = r.i18nNodes ??= new Map, d = r.data[da]?.[t - I] ?? [], f = r.dehydratedIcuData ??= new Map; Qn({ hydrationInfo: r, lView: e, i18nNodes: u, disconnectedNodes: l, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, s.ast), r.disconnectedNodes = l.size === 0 ? null : l; }
function Qn(e, t, n) { if (Array.isArray(n)) {
    let o = t;
    for (let r of n) {
        let i = pb(e.hydrationInfo, e.lView, r.index - I);
        i && (o = eu(t, i)), Qn(e, o, r);
    }
}
else {
    if (e.disconnectedNodes.has(n.index - I))
        return;
    switch (n.kind) {
        case 0: {
            let o = Er(e, t, n);
            pn(t, o?.nextSibling ?? null);
            break;
        }
        case 1: {
            Qn(e, eu(t, t.currentNode?.firstChild ?? null), n.children);
            let o = Er(e, t, n);
            pn(t, o?.nextSibling ?? null);
            break;
        }
        case 2: {
            let o = n.index - I, { hydrationInfo: r } = e, i = hy(r, o);
            switch (n.type) {
                case 0: {
                    let s = Er(e, t, n);
                    if (Uw(r, o)) {
                        Qn(e, t, n.children);
                        let a = Xl(t, 1);
                        pn(t, a);
                    }
                    else if (Qn(e, eu(t, t.currentNode?.firstChild ?? null), n.children), pn(t, s?.nextSibling ?? null), i !== null) {
                        let a = Xl(t, i + 1);
                        pn(t, a);
                    }
                    break;
                }
                case 1: {
                    Er(e, t, n);
                    let s = Xl(t, i + 1);
                    pn(t, s);
                    break;
                }
            }
            break;
        }
        case 3: {
            let o = t.isConnected ? e.caseQueue.shift() : null, r = { currentNode: null, isConnected: !1 };
            for (let s = 0; s < n.cases.length; s++)
                Qn(e, s === o ? t : r, n.cases[s]);
            o !== null && e.dehydratedIcuData.set(n.index, { case: o, node: n });
            let i = Er(e, t, n);
            pn(t, i?.nextSibling ?? null);
            break;
        }
    }
} }
var Qv = () => { };
function Tb(e, t, n) { Qv(e, t, n); }
function Zv() { Qv = Mb; }
function Mb(e, t, n) { let o = e[ue]?.dehydratedIcuData; o && o.get(t)?.case === n && o.delete(t); }
function Nb(e) { let t = e[ue]; if (t) {
    let { i18nNodes: n, dehydratedIcuData: o } = t;
    if (n && o) {
        let r = e[T];
        for (let i of o.values())
            wb(r, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
} }
function wb(e, t, n) { for (let o of n.node.cases[n.case]) {
    let r = t.get(o.index - I);
    r && ii(e, r, !1);
} }
function Ba(e) { let t = e[ke] ?? [], o = e[Z][T], r = []; for (let i of t)
    i.data[fa] !== void 0 ? r.push(i) : Yv(i, o); e[ke] = r; }
function _b(e) { let { lContainer: t } = e, n = t[ke]; if (n === null)
    return; let r = t[Z][T]; for (let i of n)
    Yv(i, r); }
function Yv(e, t) { let n = 0, o = e.firstChild; if (o) {
    let r = e.data[wt];
    for (; n < r;) {
        let i = o.nextSibling;
        ii(t, o, !1), o = i, n++;
    }
} }
function Ua(e) { Ba(e); let t = e[$]; ne(t) && $s(t); for (let n = G; n < e.length; n++)
    $s(e[n]); }
function $s(e) { Nb(e); let t = e[y]; for (let n = I; n < t.bindingStartIndex; n++)
    if (J(e[n])) {
        let o = e[n];
        Ua(o);
    }
    else
        ne(e[n]) && $s(e[n]); }
function cf(e) { let t = e._views; for (let n of t) {
    let o = Ad(n);
    o !== null && o[$] !== null && (ne(o) ? $s(o) : Ua(o));
} }
function Sb(e, t, n, o) { e !== null && (n.cleanup(t), Ua(e.lContainer), cf(o)); }
function bb(e, t) { let n = []; for (let o of t)
    for (let r = 0; r < (o[Jr] ?? 1); r++) {
        let i = { data: o, firstChild: null };
        o[wt] > 0 && (i.firstChild = e, e = Va(o[wt], e)), n.push(i);
    } return [e, n]; }
var Kv = () => null, Jv = () => null;
function Xv() { Kv = Ab, Jv = Rb; }
function Ab(e, t) { return tE(e, t) ? e[ke].shift() : (Ba(e), null); }
function Hr(e, t) { return Kv(e, t); }
function Rb(e, t, n) { if (t.tView.ssrId === null)
    return null; let o = Hr(e, t.tView.ssrId); return n[y].firstUpdatePass && o === null && Ob(n, t), o; }
function eE(e, t, n) { return Jv(e, t, n); }
function Ob(e, t) { let n = t; for (; n;) {
    if (yg(e, n))
        return;
    if ((n.flags & 256) === 256)
        break;
    n = n.prev;
} for (n = t.next; n && (n.flags & 512) === 512;) {
    if (yg(e, n))
        return;
    n = n.next;
} }
function tE(e, t) { let n = e[ke]; return !t || n === null || n.length === 0 ? !1 : n[0].data[ua] === t; }
function yg(e, t) { let n = t.tView?.ssrId; if (n == null)
    return !1; let o = e[t.index]; return J(o) && tE(o, n) ? (Ba(o), !0) : !1; }
var nE = class {
}, $a = class {
}, Vu = class {
    resolveComponentFactory(t) { throw new C(917, !1); }
}, di = class {
    static NULL = new Vu;
}, Br = class {
}, kb = (() => { class e {
    destroyNode = null;
    static __NG_ELEMENT_ID__ = () => xb();
} return e; })();
function xb() { let e = g(), t = _(), n = ye(t.index, e); return (ne(n) ? n : e)[T]; }
var oE = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => null });
} return e; })();
function lf(e) { return e.ngModule !== void 0; }
function hn(e) { return !!sn(e); }
function fs(e) { return !!ze(e); }
function vg(e) { return !!Ae(e); }
function Mr(e) { return !!W(e); }
function Pb(e) { return W(e) ? "component" : Ae(e) ? "directive" : ze(e) ? "pipe" : "type"; }
function Lb(e, t) { if (tr(e) && (e = P(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${Re(t)}", to return a standalone entity or NgModule but got "${Re(e) || e}".`); if (sn(e) == null) {
    let n = W(e) || Ae(e) || ze(e);
    if (n != null) {
        if (!n.standalone) {
            let o = Pb(e);
            throw new Error(`The "${Re(e)}" ${o}, imported from "${Re(t)}", is not standalone. Does the ${o} have the standalone: false flag?`);
        }
    }
    else
        throw lf(e) ? new Error(`A module with providers was imported from "${Re(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${Re(e)}" type, imported from "${Re(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
} }
var Hu = class {
    ownerNgModule = new Map;
    ngModulesWithSomeUnresolvedDecls = new Set;
    ngModulesScopeCache = new Map;
    standaloneComponentsScopeCache = new Map;
    resolveNgModulesDecls() { if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
        for (let t of this.ngModulesWithSomeUnresolvedDecls) {
            let n = sn(t);
            if (n?.declarations)
                for (let o of Xn(n.declarations))
                    Mr(o) && this.ownerNgModule.set(o, t);
        }
        this.ngModulesWithSomeUnresolvedDecls.clear();
    } }
    getComponentDependencies(t, n) { this.resolveNgModulesDecls(); let o = W(t); if (o === null)
        throw new Error(`Attempting to get component dependencies for a type that is not a component: ${t}`); if (o.standalone) {
        let r = this.getStandaloneComponentScope(t, n);
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes, ...r.compilation.ngModules] };
    }
    else {
        if (!this.ownerNgModule.has(t))
            return { dependencies: [] };
        let r = this.getNgModuleScope(this.ownerNgModule.get(t));
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes] };
    } }
    registerNgModule(t, n) { if (!hn(t))
        throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`); this.ngModulesWithSomeUnresolvedDecls.add(t); }
    clearScopeCacheFor(t) { this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t); }
    getNgModuleScope(t) { if (this.ngModulesScopeCache.has(t))
        return this.ngModulesScopeCache.get(t); let n = this.computeNgModuleScope(t); return this.ngModulesScopeCache.set(t, n), n; }
    computeNgModuleScope(t) { let n = ji(t), o = { exported: { directives: new Set, pipes: new Set }, compilation: { directives: new Set, pipes: new Set } }; for (let r of Xn(n.imports))
        if (hn(r)) {
            let i = this.getNgModuleScope(r);
            Gt(i.exported.directives, o.compilation.directives), Gt(i.exported.pipes, o.compilation.pipes);
        }
        else if (sr(r))
            if (vg(r) || Mr(r))
                o.compilation.directives.add(r);
            else if (fs(r))
                o.compilation.pipes.add(r);
            else
                throw new C(980, "The standalone imported type is neither a component nor a directive nor a pipe");
        else {
            o.compilation.isPoisoned = !0;
            break;
        } if (!o.compilation.isPoisoned)
        for (let r of Xn(n.declarations)) {
            if (hn(r) || sr(r)) {
                o.compilation.isPoisoned = !0;
                break;
            }
            fs(r) ? o.compilation.pipes.add(r) : o.compilation.directives.add(r);
        } for (let r of Xn(n.exports))
        if (hn(r)) {
            let i = this.getNgModuleScope(r);
            Gt(i.exported.directives, o.exported.directives), Gt(i.exported.pipes, o.exported.pipes), Gt(i.exported.directives, o.compilation.directives), Gt(i.exported.pipes, o.compilation.pipes);
        }
        else
            fs(r) ? o.exported.pipes.add(r) : o.exported.directives.add(r); return o; }
    getStandaloneComponentScope(t, n) { if (this.standaloneComponentsScopeCache.has(t))
        return this.standaloneComponentsScopeCache.get(t); let o = this.computeStandaloneComponentScope(t, n); return this.standaloneComponentsScopeCache.set(t, o), o; }
    computeStandaloneComponentScope(t, n) { let o = { compilation: { directives: new Set([t]), pipes: new Set, ngModules: new Set } }; for (let r of Qe(n ?? [])) {
        let i = P(r);
        try {
            Lb(i, t);
        }
        catch {
            return o.compilation.isPoisoned = !0, o;
        }
        if (hn(i)) {
            o.compilation.ngModules.add(i);
            let s = this.getNgModuleScope(i);
            if (s.exported.isPoisoned)
                return o.compilation.isPoisoned = !0, o;
            Gt(s.exported.directives, o.compilation.directives), Gt(s.exported.pipes, o.compilation.pipes);
        }
        else if (fs(i))
            o.compilation.pipes.add(i);
        else if (vg(i) || Mr(i))
            o.compilation.directives.add(i);
        else
            return o.compilation.isPoisoned = !0, o;
    } return o; }
    isOrphanComponent(t) { let n = W(t); return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t)); }
};
function Gt(e, t) { for (let n of e)
    t.add(n); }
var po = new Hu, Cs = {}, io = class {
    injector;
    parentInjector;
    constructor(t, n) { this.injector = t, this.parentInjector = n; }
    get(t, n, o) { let r = this.injector.get(t, Cs, o); return r !== Cs || n === Cs ? r : this.parentInjector.get(t, n, o); }
};
function qs(e, t, n) { let o = n ? e.styles : null, r = n ? e.classes : null, i = 0; if (t !== null)
    for (let s = 0; s < t.length; s++) {
        let a = t[s];
        if (typeof a == "number")
            i = a;
        else if (i == 1)
            r = Li(r, a);
        else if (i == 2) {
            let c = a, l = t[++s];
            o = Li(o, c + ": " + l + ";");
        }
    } n ? e.styles = o : e.stylesWithoutHost = o, n ? e.classes = r : e.classesWithoutHost = r; }
function Ho(e, t = 0) { let n = g(); if (n === null)
    return he(e, t); let o = _(); return bm(o, n, P(e), t); }
function rE() { let e = "invalid"; throw new Error(e); }
function iE(e, t, n, o, r) { let i = o === null ? null : { "": -1 }, s = r(e, n); if (s !== null) {
    let a = s, c = null, l = null;
    for (let u of s)
        if (u.resolveHostDirectives !== null) {
            [a, c, l] = u.resolveHostDirectives(s);
            break;
        }
    Vb(e, t, n, a, i, c, l);
} i !== null && o !== null && Fb(n, o, i); }
function Fb(e, t, n) { let o = e.localNames = []; for (let r = 0; r < t.length; r += 2) {
    let i = n[t[r + 1]];
    if (i == null)
        throw new C(-301, !1);
    o.push(t[r], i);
} }
function jb(e, t, n) { t.componentOffset = n, (e.components ??= []).push(t.index); }
function Vb(e, t, n, o, r, i, s) { let a = o.length, c = null; for (let f = 0; f < a; f++) {
    let p = o[f];
    c === null && je(p) && (c = p, jb(e, n, f)), gu(Os(n, t), e, p.type);
} Gb(n, e.data.length, a), c?.viewProvidersResolver && c.viewProvidersResolver(c); for (let f = 0; f < a; f++) {
    let p = o[f];
    p.providersResolver && p.providersResolver(p);
} let l = !1, u = !1, d = ai(e, t, a, null); a > 0 && (n.directiveToIndex = new Map); for (let f = 0; f < a; f++) {
    let p = o[f];
    if (n.mergedAttrs = uo(n.mergedAttrs, p.hostAttrs), Bb(e, n, t, d, p), qb(d, p, r), s !== null && s.has(p)) {
        let [m, v] = s.get(p);
        n.directiveToIndex.set(p.type, [d, m + n.directiveStart, v + n.directiveStart]);
    }
    else
        (i === null || !i.has(p)) && n.directiveToIndex.set(p.type, d);
    p.contentQueries !== null && (n.flags |= 4), (p.hostBindings !== null || p.hostAttrs !== null || p.hostVars !== 0) && (n.flags |= 64);
    let h = p.type.prototype;
    !l && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), l = !0), !u && (h.ngOnChanges || h.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), d++;
} Hb(e, n, i); }
function Hb(e, t, n) { for (let o = t.directiveStart; o < t.directiveEnd; o++) {
    let r = e.data[o];
    if (n === null || !n.has(r))
        Eg(0, t, r, o), Eg(1, t, r, o), Dg(t, o, !1);
    else {
        let i = n.get(r);
        Ig(0, t, i, o), Ig(1, t, i, o), Dg(t, o, !0);
    }
} }
function Eg(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s;
        e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(o), sE(t, i);
    } }
function Ig(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s = r[i], a;
        e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(o, i), sE(t, s);
    } }
function sE(e, t) { t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16); }
function Dg(e, t, n) { let { attrs: o, inputs: r, hostDirectiveInputs: i } = e; if (o === null || !n && r === null || n && i === null || Bd(e)) {
    e.initialInputs ??= [], e.initialInputs.push(null);
    return;
} let s = null, a = 0; for (; a < o.length;) {
    let c = o[a];
    if (c === 0) {
        a += 4;
        continue;
    }
    else if (c === 5) {
        a += 2;
        continue;
    }
    else if (typeof c == "number")
        break;
    if (!n && r.hasOwnProperty(c)) {
        let l = r[c];
        for (let u of l)
            if (u === t) {
                s ??= [], s.push(c, o[a + 1]);
                break;
            }
    }
    else if (n && i.hasOwnProperty(c)) {
        let l = i[c];
        for (let u = 0; u < l.length; u += 2)
            if (l[u] === t) {
                s ??= [], s.push(l[u + 1], o[a + 1]);
                break;
            }
    }
    a += 2;
} e.initialInputs ??= [], e.initialInputs.push(s); }
function Bb(e, t, n, o, r) { e.data[o] = r; let i = r.factory || (r.factory = Ft(r.type, !0)), s = new vn(i, je(r), Ho, null); e.blueprint[o] = s, n[o] = s, Ub(e, t, o, ai(e, n, r.hostVars, H), r); }
function Ub(e, t, n, o, r) { let i = r.hostBindings; if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    $b(s) != a && s.push(a), s.push(n, o, i);
} }
function $b(e) { let t = e.length; for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0)
        return n;
} return 0; }
function qb(e, t, n) { if (n) {
    if (t.exportAs)
        for (let o = 0; o < t.exportAs.length; o++)
            n[t.exportAs[o]] = e;
    je(t) && (n[""] = e);
} }
function Gb(e, t, n) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t; }
function uf(e, t, n, o, r, i, s, a) { let c = t[y], l = c.consts, u = me(l, s), d = Rn(c, e, n, o, u); return i && iE(c, t, d, me(l, a), r), d.mergedAttrs = uo(d.mergedAttrs, d.attrs), d.attrs !== null && qs(d, d.attrs, !1), d.mergedAttrs !== null && qs(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d; }
function df(e, t) { Im(e, t), al(t) && e.queries.elementEnd(t); }
function aE(e, t, n, o, r, i) { let s = t.consts, a = me(s, r), c = Rn(t, e, n, o, a); if (c.mergedAttrs = uo(c.mergedAttrs, c.attrs), i != null) {
    let l = me(s, i);
    c.localNames = [];
    for (let u = 0; u < l.length; u += 2)
        c.localNames.push(l[u], -1);
} return c.attrs !== null && qs(c, c.attrs, !1), c.mergedAttrs !== null && qs(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c; }
function Ur(e) { return qa(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1; }
function Wb(e, t, n) { let o = e[Symbol.iterator](), r = t[Symbol.iterator](); for (;;) {
    let i = o.next(), s = r.next();
    if (i.done && s.done)
        return !0;
    if (i.done || s.done || !n(i.value, s.value))
        return !1;
} }
function cE(e, t) { if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
        t(e[n]);
else {
    let n = e[Symbol.iterator](), o;
    for (; !(o = n.next()).done;)
        t(o.value);
} }
function qa(e) { return e !== null && (typeof e == "function" || typeof e == "object"); }
function lE(e, t) { let n = Ur(e), o = Ur(t); return n && o ? Wb(e, t, lE) : !n && (e && (typeof e == "object" || typeof e == "function")) && !o && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t); }
function ut(e, t, n) { return e[t] = n; }
function fi(e, t) { return e[t]; }
function z(e, t, n) { if (n === H)
    return !1; let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function Tn(e, t, n, o) { let r = z(e, t, n); return z(e, t + 1, o) || r; }
function Ga(e, t, n, o, r) { let i = Tn(e, t, n, o); return z(e, t + 2, r) || i; }
function Ue(e, t, n, o, r, i) { let s = Tn(e, t, n, o); return Tn(e, t + 2, r, i) || s; }
var ff = Symbol("CONTROL");
function Mt(e, t, n) { return function o(r) { let i = De(e) ? ye(e.index, t) : t; li(i, 5); let s = t[U], a = Cg(t, s, n, r), c = o.__ngNextListenerFn__; for (; c;)
    a = Cg(t, s, c, r) && a, c = c.__ngNextListenerFn__; return a; }; }
function Cg(e, t, n, o) { let r = Zn(null); try {
    return V(k.OutputStart, t, n), n(o) !== !1;
}
catch (i) {
    return nf(e, i), !1;
}
finally {
    V(k.OutputEnd, t, n), Zn(r);
} }
function Gs(e, t, n, o, r, i, s, a) { let c = Bn(e), l = !1, u = null; if (!o && c && (u = Qb(t, n, i, e.index)), u !== null) {
    let d = u.__ngLastListenerFn__ || u;
    d.__ngNextListenerFn__ = s, u.__ngLastListenerFn__ = s, l = !0;
}
else {
    let d = K(e, n), f = o ? o(d) : d;
    kw(n, f, i, a);
    let p = r.listen(f, i, a);
    if (!zb(i)) {
        let h = o ? m => o(F(m[e.index])) : e.index;
        uE(h, t, n, i, a, p, !1);
    }
} return l; }
function zb(e) { return e.startsWith("animation") || e.startsWith("transition"); }
function Qb(e, t, n, o) { let r = e.cleanup; if (r != null)
    for (let i = 0; i < r.length - 1; i += 2) {
        let s = r[i];
        if (s === n && r[i + 1] === o) {
            let a = t[Vt], c = r[i + 2];
            return a && a.length > c ? a[c] : null;
        }
        typeof s == "string" && (i += 2);
    } return null; }
function uE(e, t, n, o, r, i, s) { let a = t.firstCreatePass ? hl(t) : null, c = pl(n), l = c.length; c.push(r, i), a && a.push(o, e, l, (l + 1) * (s ? -1 : 1)); }
function Zb(e, t, n, o, r) { let i = Mt(e, t, n), s = Yb(e, t, o, r, i); }
function Yb(e, t, n, o, r) { let i = null, s = null, a = null, c = !1, l = e.directiveToIndex.get(n.type); if (typeof l == "number" ? i = l : [i, s, a] = l, s !== null && a !== null && e.hostDirectiveOutputs?.hasOwnProperty(o)) {
    let u = e.hostDirectiveOutputs[o];
    for (let d = 0; d < u.length; d += 2) {
        let f = u[d];
        if (f >= s && f <= a)
            c = !0, ho(e, t, f, u[d + 1], o, r);
        else if (f > a)
            break;
    }
} return n.outputs.hasOwnProperty(o) && (c = !0, ho(e, t, i, o, o, r)), c; }
function ho(e, t, n, o, r, i) { let s = t[n], a = t[y], l = a.data[n].outputs[o], d = s[l].subscribe(i); uE(e.index, a, t, r, i, d, !0); }
var Nt = Symbol("BINDING"), Kb = { kind: "input", requiredVars: 1 }, Jb = { kind: "field", requiredVars: 2 }, Xb = { kind: "output", requiredVars: 0 };
function Tg(e, t, n) { let o = g(), r = de(); if (z(o, r, n)) {
    let i = o[y], s = Ce(), a = ye(s.index, o);
    li(a, 1);
    let c = i.directiveRegistry[e], l = DS(s, i, o, c, t, n);
} }
function Mg(e, t) { return g()[t.directiveStart + e.targetIdx][ff]; }
function dE(e, t) { if (e === "formField") {
    let o = { [Nt]: Jb, create: () => { Mg(o, _())?.create(); }, update: () => { Tg(o.targetIdx, e, t()), Mg(o, Ce())?.update(); } };
    return o;
} let n = { [Nt]: Kb, update: () => Tg(n.targetIdx, e, t()) }; return n; }
function fE(e, t) { let n = { [Nt]: Xb, create: () => { let o = g(), r = _(), s = o[y].directiveRegistry[n.targetIdx]; Zb(r, o, t, s, e); } }; return n; }
function eA(e, t) { let n = dE(e, t), o = fE(e + "Change", i => t.set(i)); return { [Nt]: { kind: "twoWay", requiredVars: n[Nt].requiredVars + o[Nt].requiredVars }, set targetIdx(i) { n.targetIdx = i, o.targetIdx = i; }, create: o.create, update: n.update }; }
var Ws = class extends di {
    ngModule;
    constructor(t) { super(), this.ngModule = t; }
    resolveComponentFactory(t) { let n = W(t); return new Zt(n, this.ngModule); }
};
function tA(e) { return Object.keys(e).map(t => { let [n, o, r] = e[t], i = { propName: n, templateName: t, isSignal: (o & Ca.SignalBased) !== 0 }; return r && (i.transform = r), i; }); }
function nA(e) { return Object.keys(e).map(t => ({ propName: e[t], templateName: t })); }
function oA(e, t, n) { let o = t instanceof Se ? t : t?.injector; return o && e.getStandaloneInjector !== null && (o = e.getStandaloneInjector(o) || o), o ? new io(n, o) : n; }
function rA(e) { let t = e.get(Br, null); if (t === null)
    throw new C(407, !1); let n = e.get(oE, null), o = e.get(We, null); return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: o, ngReflect: !1 }; }
function iA(e, t) { let n = pE(e); return Ia(t, n, n === "svg" ? ll : n === "math" ? ul : null); }
function pE(e) { return (e.selectors[0][0] || "div").toLowerCase(); }
var Zt = class extends $a {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() { return this.cachedInputs ??= tA(this.componentDef.inputs), this.cachedInputs; }
    get outputs() { return this.cachedOutputs ??= nA(this.componentDef.outputs), this.cachedOutputs; }
    constructor(t, n) { super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = W_(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n; }
    create(t, n, o, r, i, s) { V(k.DynamicComponentStart); let a = O(null); try {
        let c = this.componentDef, l = sA(o, c, s, i), u = oA(c, r || this.ngModule, t), d = rA(u), f = d.rendererFactory.createRenderer(null, c), p = o ? fS(f, o, c.encapsulation, u) : iA(c, f), h = s?.some(Ng) || i?.some(D => typeof D != "function" && D.bindings.some(Ng)), m = Da(null, l, null, 512 | $d(c), null, null, d, f, u, null, fy(p, u, !0));
        m[I] = p, ns(m);
        let v = null;
        try {
            let D = uf(I, m, 2, "#host", () => l.directiveRegistry, !0, 0);
            jy(f, p, D), He(p, m), ba(l, m, D), kd(l, D, m), df(l, D), n !== void 0 && cA(D, this.ngContentSelectors, n), v = ye(D.index, m), m[U] = v[U], Pa(l, m, null);
        }
        catch (D) {
            throw v !== null && yu(v), yu(m), D;
        }
        finally {
            V(k.DynamicComponentEnd), os();
        }
        return new zs(this.componentType, m, !!h);
    }
    finally {
        O(a);
    } }
};
function sA(e, t, n, o) { let r = e ? ["ng-version", "21.1.0"] : z_(t.selectors[0]), i = null, s = null, a = 0; if (n)
    for (let u of n)
        a += u[Nt].requiredVars, u.create && (u.targetIdx = 0, (i ??= []).push(u)), u.update && (u.targetIdx = 0, (s ??= []).push(u)); if (o)
    for (let u = 0; u < o.length; u++) {
        let d = o[u];
        if (typeof d != "function")
            for (let f of d.bindings) {
                a += f[Nt].requiredVars;
                let p = u + 1;
                f.create && (f.targetIdx = p, (i ??= []).push(f)), f.update && (f.targetIdx = p, (s ??= []).push(f));
            }
    } let c = [t]; if (o)
    for (let u of o) {
        let d = typeof u == "function" ? u : u.type, f = Ae(d);
        c.push(f);
    } return Ud(0, null, aA(i, s), 1, a, c, null, null, null, [r], null); }
function aA(e, t) { return !e && !t ? null : n => { if (n & 1 && e)
    for (let o of e)
        o.create(); if (n & 2 && t)
    for (let o of t)
        o.update(); }; }
function Ng(e) { let t = e[Nt].kind; return t === "input" || t === "twoWay"; }
var zs = class extends nE {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, o) { super(), this._rootLView = n, this._hasInputBindings = o, this._tNode = Et(n[y], I), this.location = No(this._tNode, n), this.instance = ye(this._tNode.index, n)[U], this.hostView = this.changeDetectorRef = new Qt(n, void 0), this.componentType = t; }
    setInput(t, n) { this._hasInputBindings; let o = this._tNode; if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return; let r = this._rootLView, i = xa(o, r[y], r, t, n); this.previousInputValues.set(t, n); let s = ye(o.index, r); li(s, 1); }
    get injector() { return new zt(this._tNode, this._rootLView); }
    destroy() { this.hostView.destroy(); }
    onDestroy(t) { this.hostView.onDestroy(t); }
};
function cA(e, t, n) { let o = e.projection = []; for (let r = 0; r < t.length; r++) {
    let i = n[r];
    o.push(i != null && i.length ? Array.from(i) : null);
} }
var Wa = (() => { class e {
    static __NG_ELEMENT_ID__ = lA;
} return e; })();
function lA() { let e = _(); return gE(e, g()); }
var uA = Wa, hE = class extends uA {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, o) { super(), this._lContainer = t, this._hostTNode = n, this._hostLView = o; }
    get element() { return No(this._hostTNode, this._hostLView); }
    get injector() { return new zt(this._hostTNode, this._hostLView); }
    get parentInjector() { let t = hd(this._hostTNode, this._hostLView); if (Tm(t)) {
        let n = As(t, this._hostLView), o = bs(t), r = n[y].data[o + 8];
        return new zt(r, n);
    }
    else
        return new zt(null, this._hostLView); }
    clear() { for (; this.length > 0;)
        this.remove(this.length - 1); }
    get(t) { let n = wg(this._lContainer); return n !== null && n[t] || null; }
    get length() { return this._lContainer.length - G; }
    createEmbeddedView(t, n, o) { let r, i; typeof o == "number" ? r = o : o != null && (r = o.index, i = o.injector); let s = Hr(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s); return this.insertImpl(a, r, Cn(this._hostTNode, s)), a; }
    createComponent(t, n, o, r, i, s, a) { let c = t && !Dr(t), l; if (c)
        l = n;
    else {
        let v = n || {};
        l = v.index, o = v.injector, r = v.projectableNodes, i = v.environmentInjector || v.ngModuleRef, s = v.directives, a = v.bindings;
    } let u = c ? t : new Zt(W(t)), d = o || this.parentInjector; if (!i && u.ngModule == null) {
        let D = (c ? d : this.parentInjector).get(Se, null);
        D && (i = D);
    } let f = W(u.componentType ?? {}), p = Hr(this._lContainer, f?.id ?? null), h = p?.firstChild ?? null, m = u.create(d, r, h, i, s, a); return this.insertImpl(m.hostView, l, Cn(this._hostTNode, p)), m; }
    insert(t, n) { return this.insertImpl(t, n, !0); }
    insertImpl(t, n, o) { let r = t._lView; if (bh(r)) {
        let a = this.indexOf(t);
        if (a !== -1)
            this.detach(a);
        else {
            let c = r[Z], l = new hE(c, c[le], c[Z]);
            l.detach(l.indexOf(t));
        }
    } let i = this._adjustIndex(n), s = this._lContainer; return jo(s, r, i, o), t.attachToViewContainerRef(), Kc(tu(s), i, t), t; }
    move(t, n) { return this.insert(t, n); }
    indexOf(t) { let n = wg(this._lContainer); return n !== null ? n.indexOf(t) : -1; }
    remove(t) { let n = this._adjustIndex(t, -1), o = jr(this._lContainer, n); o && (ar(tu(this._lContainer), n), ci(o[y], o)); }
    detach(t) { let n = this._adjustIndex(t, -1), o = jr(this._lContainer, n); return o && ar(tu(this._lContainer), n) != null ? new Qt(o) : null; }
    _adjustIndex(t, n = 0) { return t ?? this.length + n; }
};
function wg(e) { return e[dr]; }
function tu(e) { return e[dr] || (e[dr] = []); }
function gE(e, t) { let n, o = t[e.index]; return J(o) ? n = o : (n = Sv(o, t, null, e), t[e.index] = n, qd(t, n)), mE(n, t, e, o), new hE(n, e, t); }
function dA(e, t) { let n = e[T], o = n.createComment(""), r = K(t, e), i = n.parentNode(r); return En(n, i, o, n.nextSibling(r), !1), o; }
var mE = vE, pf = () => !1;
function yE(e, t, n) { return pf(e, t, n); }
function vE(e, t, n, o) { if (e[Ke])
    return; let r; n.type & 8 ? r = F(o) : r = dA(t, n), e[Ke] = r; }
function fA(e, t, n) { if (e[Ke] && e[ke])
    return !0; let o = n[ue], r = t.index - I; if (!o || _o(t) || ya(o, r))
    return !1; let s = Du(o, r), a = o.data[bo]?.[r], [c, l] = bb(s, a); return e[Ke] = c, e[ke] = l, !0; }
function pA(e, t, n, o) { pf(e, n, t) || vE(e, t, n, o); }
function EE() { mE = pA, pf = fA; }
var Bu = class e {
    queryList;
    matches = null;
    constructor(t) { this.queryList = t; }
    clone() { return new e(this.queryList); }
    setDirty() { this.queryList.setDirty(); }
}, Uu = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    createEmbeddedView(t) { let n = t.queries; if (n !== null) {
        let o = t.contentQueries !== null ? t.contentQueries[0] : n.length, r = [];
        for (let i = 0; i < o; i++) {
            let s = n.getByIndex(i), a = this.queries[s.indexInDeclarationView];
            r.push(a.clone());
        }
        return new e(r);
    } return null; }
    insertView(t) { this.dirtyQueriesWithMatches(t); }
    detachView(t) { this.dirtyQueriesWithMatches(t); }
    finishViewCreation(t) { this.dirtyQueriesWithMatches(t); }
    dirtyQueriesWithMatches(t) { for (let n = 0; n < this.queries.length; n++)
        gf(t, n).matches !== null && this.queries[n].setDirty(); }
}, Qs = class {
    flags;
    read;
    predicate;
    constructor(t, n, o = null) { this.flags = n, this.read = o, typeof t == "string" ? this.predicate = vA(t) : this.predicate = t; }
}, $u = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    elementStart(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].elementStart(t, n); }
    elementEnd(t) { for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t); }
    embeddedTView(t) { let n = null; for (let o = 0; o < this.length; o++) {
        let r = n !== null ? n.length : 0, i = this.getByIndex(o).embeddedTView(t, r);
        i && (i.indexInDeclarationView = o, n !== null ? n.push(i) : n = [i]);
    } return n !== null ? new e(n) : null; }
    template(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].template(t, n); }
    getByIndex(t) { return this.queries[t]; }
    get length() { return this.queries.length; }
    track(t) { this.queries.push(t); }
}, qu = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) { this.metadata = t, this._declarationNodeIndex = n; }
    elementStart(t, n) { this.isApplyingToNode(n) && this.matchTNode(t, n); }
    elementEnd(t) { this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1); }
    template(t, n) { this.elementStart(t, n); }
    embeddedTView(t, n) { return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null; }
    isApplyingToNode(t) { if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex, o = t.parent;
        for (; o !== null && o.type & 8 && o.index !== n;)
            o = o.parent;
        return n === (o !== null ? o.index : -1);
    } return this._appliesToNextNode; }
    matchTNode(t, n) { let o = this.metadata.predicate; if (Array.isArray(o))
        for (let r = 0; r < o.length; r++) {
            let i = o[r];
            this.matchTNodeWithReadOption(t, n, hA(n, i)), this.matchTNodeWithReadOption(t, n, Es(n, t, i, !1, !1));
        }
    else
        o === Vr ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, Es(n, t, o, !1, !1)); }
    matchTNodeWithReadOption(t, n, o) { if (o !== null) {
        let r = this.metadata.read;
        if (r !== null)
            if (r === Yr || r === Wa || r === Vr && n.type & 4)
                this.addMatch(n.index, -2);
            else {
                let i = Es(n, t, r, !1, !1);
                i !== null && this.addMatch(n.index, i);
            }
        else
            this.addMatch(n.index, o);
    } }
    addMatch(t, n) { this.matches === null ? this.matches = [t, n] : this.matches.push(t, n); }
};
function hA(e, t) { let n = e.localNames; if (n !== null) {
    for (let o = 0; o < n.length; o += 2)
        if (n[o] === t)
            return n[o + 1];
} return null; }
function gA(e, t) { return e.type & 11 ? No(e, t) : e.type & 4 ? Fa(e, t) : null; }
function mA(e, t, n, o) { return n === -1 ? gA(t, e) : n === -2 ? yA(e, t, o) : xr(e, e[y], n, t); }
function yA(e, t, n) { if (n === Yr)
    return No(t, e); if (n === Vr)
    return Fa(t, e); if (n === Wa)
    return gE(t, e); }
function IE(e, t, n, o) { let r = t[ot].queries[o]; if (r.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
        let l = s[c];
        if (l < 0)
            a.push(null);
        else {
            let u = i[l];
            a.push(mA(t, u, s[c + 1], n.metadata.read));
        }
    }
    r.matches = a;
} return r.matches; }
function Gu(e, t, n, o) { let r = e.queries.getByIndex(n), i = r.matches; if (i !== null) {
    let s = IE(e, t, r, n);
    for (let a = 0; a < i.length; a += 2) {
        let c = i[a];
        if (c > 0)
            o.push(s[a / 2]);
        else {
            let l = i[a + 1], u = t[-c];
            for (let d = G; d < u.length; d++) {
                let f = u[d];
                f[yt] === f[Z] && Gu(f[y], f, l, o);
            }
            if (u[un] !== null) {
                let d = u[un];
                for (let f = 0; f < d.length; f++) {
                    let p = d[f];
                    Gu(p[y], p, l, o);
                }
            }
        }
    }
} return o; }
function hf(e, t) { return e[ot].queries[t].queryList; }
function DE(e, t, n) { let o = new ks((n & 4) === 4); return gl(e, t, o, o.destroy), (t[ot] ??= new Uu).queries.push(new Bu(o)) - 1; }
function CE(e, t, n) { let o = b(); return o.firstCreatePass && (ME(o, new Qs(e, t, n), -1), (t & 2) === 2 && (o.staticViewQueries = !0)), DE(o, g(), t); }
function TE(e, t, n, o) { let r = b(); if (r.firstCreatePass) {
    let i = _();
    ME(r, new Qs(t, n, o), i.index), EA(r, e), (n & 2) === 2 && (r.staticContentQueries = !0);
} return DE(r, g(), n); }
function vA(e) { return e.split(",").map(t => t.trim()); }
function ME(e, t, n) { e.queries === null && (e.queries = new $u), e.queries.track(new qu(t, n)); }
function EA(e, t) { let n = e.contentQueries || (e.contentQueries = []), o = n.length ? n[n.length - 1] : -1; t !== o && n.push(e.queries.length - 1, t); }
function gf(e, t) { return e.queries.getByIndex(t); }
function NE(e, t) { let n = e[y], o = gf(n, t); return o.crossesNgTemplate ? Gu(n, e, t, []) : IE(n, e, o, t); }
function mf(e, t, n) { let o, r = Si(() => { o._dirtyCounter(); let i = IA(o, e); if (t && i === void 0)
    throw new C(-951, !1); return i; }); return o = r[ae], o._dirtyCounter = qt(0), o._flatValue = void 0, r; }
function yf(e) { return mf(!0, !1, e); }
function vf(e) { return mf(!0, !0, e); }
function Ef(e) { return mf(!1, !1, e); }
function wE(e, t) { let n = e[ae]; n._lView = g(), n._queryIndex = t, n._queryList = hf(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(o => o + 1)); }
function IA(e, t) { let n = e._lView, o = e._queryIndex; if (n === void 0 || o === void 0 || n[w] & 4)
    return t ? void 0 : j; let r = hf(n, o), i = NE(n, o); return r.reset(i, Pm), t ? r.first : r._changesDetected || e._flatValue === void 0 ? e._flatValue = r.toArray() : e._flatValue; }
var Mn = new Map, $r = new Set;
function _E(e) { return Ge(this, null, function* () { let t = Mn; Mn = new Map; let n = new Map; function o(i) { let s = n.get(i); if (s)
    return s; let a = e(i).then(c => NA(i, c)); return n.set(i, a), a; } let r = Array.from(t).map(a => Ge(null, [a], function* ([i, s]) { if (s.styleUrl && s.styleUrls?.length)
    throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"); let c = []; s.templateUrl && c.push(o(s.templateUrl).then(f => { s.template = f; })); let l = typeof s.styles == "string" ? [s.styles] : s.styles ?? []; s.styles = l; let { styleUrl: u, styleUrls: d } = s; if (u && (d = [u], s.styleUrl = void 0), d?.length) {
    let f = Promise.all(d.map(p => o(p))).then(p => { l.push(...p), s.styleUrls = void 0; });
    c.push(f);
} yield Promise.all(c), $r.delete(i); })); yield Promise.all(r); }); }
function DA(e, t) { SE(t) && (Mn.set(e, t), $r.add(e)); }
function CA(e) { return $r.has(e); }
function SE(e) { return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls?.length || e.styleUrl); }
function TA() { let e = Mn; return Mn = new Map, e; }
function MA(e) { $r.clear(); for (let t of e.keys())
    $r.add(t); Mn = e; }
function bE() { return Mn.size === 0; }
function NA(e, t) { return Ge(this, null, function* () { if (typeof t == "string")
    return t; if (t.status !== void 0 && t.status !== 200)
    throw new C(918, !1); return t.text(); }); }
var Wu = new Map, AE = !0;
function wA(e, t, n) { if (t && t !== n && AE)
    throw new C(921, !1); }
function If(e, t) { let n = Wu.get(t) || null; wA(t, n, e), Wu.set(t, e); }
function Df(e) { return Wu.get(e); }
function _A(e) { AE = !e; }
var go = class {
}, RE = class {
};
function OE(e, t) { return new mo(e, t ?? null, []); }
var SA = OE, mo = class extends go {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new Ws(this);
    constructor(t, n, o, r = !0) { super(), this.ngModuleType = t, this._parent = n; let i = sn(t); this._bootstrapComponents = Xn(i.bootstrap), this._r3Injector = Ll(t, n, [{ provide: go, useValue: this }, { provide: di, useValue: this.componentFactoryResolver }, ...o], ht(t), new Set(["environment"])), r && this.resolveInjectorInitializers(); }
    resolveInjectorInitializers() { this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType); }
    get injector() { return this._r3Injector; }
    destroy() { let t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
    onDestroy(t) { this.destroyCbs.push(t); }
}, yo = class extends RE {
    moduleType;
    constructor(t) { super(), this.moduleType = t; }
    create(t) { return new mo(this.moduleType, t, []); }
};
function kE(e, t, n) { return new mo(e, t, n, !1); }
var qr = class extends go {
    injector;
    componentFactoryResolver = new Ws(this);
    instance = null;
    constructor(t) { super(); let n = new nn([...t.providers, { provide: go, useValue: this }, { provide: di, useValue: this.componentFactoryResolver }], t.parent || Hn(), t.debugName, new Set(["environment"])); this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers(); }
    destroy() { this.injector.destroy(); }
    onDestroy(t) { this.injector.onDestroy(t); }
};
function Cf(e, t, n = null) { return new qr({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector; }
var bA = (() => { class e {
    _injector;
    cachedInjectors = new Map;
    constructor(n) { this._injector = n; }
    getOrCreateStandaloneInjector(n) { if (!n.standalone)
        return null; if (!this.cachedInjectors.has(n)) {
        let o = qi(!1, n.type), r = o.length > 0 ? Cf([o], this._injector, "") : null;
        this.cachedInjectors.set(n, r);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = B({ token: e, providedIn: "environment", factory: () => new e(he(Se)) });
} return e; })();
function xE(e) { return lt(() => { let t = jE(e), n = _e(Q({}, t), { decls: e.decls, vars: e.vars, template: e.template, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, onPush: e.changeDetection === sa.OnPush, directiveDefs: null, pipeDefs: null, dependencies: t.standalone && e.dependencies || null, getStandaloneInjector: t.standalone ? r => r.get(bA).getOrCreateStandaloneInjector(n) : null, getExternalStyles: null, signals: e.signals ?? !1, data: e.data || {}, encapsulation: e.encapsulation || Be.Emulated, styles: e.styles || j, _: null, schemas: e.schemas || null, tView: null, id: "" }); t.standalone && X("NgStandalone"), VE(n); let o = e.dependencies; return n.directiveDefs = Zs(o, PE), n.pipeDefs = Zs(o, ze), n.id = kA(n), n; }); }
function PE(e) { return W(e) || Ae(e); }
function Tf(e) { return lt(() => ({ type: e.type, bootstrap: e.bootstrap || j, declarations: e.declarations || j, imports: e.imports || j, exports: e.exports || j, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null })); }
function AA(e, t) { if (e == null)
    return Pe; let n = {}; for (let o in e)
    if (e.hasOwnProperty(o)) {
        let r = e[o], i, s, a, c;
        Array.isArray(r) ? (a = r[0], i = r[1], s = r[2] ?? i, c = r[3] || null) : (i = r, s = r, a = Ca.None, c = null), n[i] = [o, a, c], t[i] = s;
    } return n; }
function RA(e) { if (e == null)
    return Pe; let t = {}; for (let n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n); return t; }
function LE(e) { return lt(() => { let t = jE(e); return VE(t), t; }); }
function FE(e) { return { type: e.type, name: e.name, factory: null, pure: e.pure !== !1, standalone: e.standalone ?? !0, onDestroy: e.type.prototype.ngOnDestroy || null }; }
function jE(e) { let t = {}; return { type: e.type, providersResolver: null, viewProvidersResolver: null, factory: null, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: t, inputConfig: e.inputs || Pe, exportAs: e.exportAs || null, standalone: e.standalone ?? !0, signals: e.signals === !0, selectors: e.selectors || j, viewQuery: e.viewQuery || null, features: e.features || null, setInput: null, resolveHostDirectives: null, hostDirectives: null, inputs: AA(e.inputs, t), outputs: RA(e.outputs), debugInfo: null }; }
function VE(e) { e.features?.forEach(t => t(e)); }
function Zs(e, t) { return e ? () => { let n = typeof e == "function" ? e() : e, o = []; for (let r of n) {
    let i = t(r);
    i !== null && o.push(i);
} return o; } : null; }
var OA = new Map;
function kA(e) { let t = 0, n = typeof e.consts == "function" ? "" : e.consts, o = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery]; for (let i of o.join("|"))
    t = Math.imul(31, t) + i.charCodeAt(0) << 0; return t += 2147483648, "c" + t; }
function HE(e) { let t = n => { let o = Array.isArray(e); n.hostDirectives === null ? (n.resolveHostDirectives = xA, n.hostDirectives = o ? e.map(zu) : [e]) : o ? n.hostDirectives.unshift(...e.map(zu)) : n.hostDirectives.unshift(e); }; return t.ngInherit = !0, t; }
function xA(e) { let t = [], n = !1, o = null, r = null; for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (s.hostDirectives !== null) {
        let a = t.length;
        o ??= new Map, r ??= new Map, BE(s, t, o), r.set(s, [a, t.length - 1]);
    }
    i === 0 && je(s) && (n = !0, t.push(s));
} for (let i = n ? 1 : 0; i < e.length; i++)
    t.push(e[i]); return [t, o, r]; }
function BE(e, t, n) { if (e.hostDirectives !== null)
    for (let o of e.hostDirectives)
        if (typeof o == "function") {
            let r = o();
            for (let i of r)
                _g(zu(i), t, n);
        }
        else
            _g(o, t, n); }
function _g(e, t, n) { let o = Ae(e.directive); PA(o.declaredInputs, e.inputs), BE(o, t, n), n.set(o, e), t.push(o); }
function zu(e) { return typeof e == "function" ? { directive: P(e), inputs: Pe, outputs: Pe } : { directive: P(e.directive), inputs: Sg(e.inputs), outputs: Sg(e.outputs) }; }
function Sg(e) { if (e === void 0 || e.length === 0)
    return Pe; let t = {}; for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1]; return t; }
function PA(e, t) { for (let n in t)
    if (t.hasOwnProperty(n)) {
        let o = t[n], r = e[n];
        e[o] = r;
    } }
function LA(e) { return Object.getPrototypeOf(e.prototype).constructor; }
function Mf(e) { let t = LA(e.type), n = !0, o = [e]; for (; t;) {
    let r;
    if (je(e))
        r = t.\u0275cmp || t.\u0275dir;
    else {
        if (t.\u0275cmp)
            throw new C(903, !1);
        r = t.\u0275dir;
    }
    if (r) {
        if (n) {
            o.push(r);
            let s = e;
            s.inputs = nu(e.inputs), s.declaredInputs = nu(e.declaredInputs), s.outputs = nu(e.outputs);
            let a = r.hostBindings;
            a && BA(e, a);
            let c = r.viewQuery, l = r.contentQueries;
            if (c && VA(e, c), l && HA(e, l), FA(e, r), gh(e.outputs, r.outputs), je(r) && r.data.animation) {
                let u = e.data;
                u.animation = (u.animation || []).concat(r.data.animation);
            }
        }
        let i = r.features;
        if (i)
            for (let s = 0; s < i.length; s++) {
                let a = i[s];
                a && a.ngInherit && a(e), a === Mf && (n = !1);
            }
    }
    t = Object.getPrototypeOf(t);
} jA(o); }
function FA(e, t) { for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
        continue;
    let o = t.inputs[n];
    o !== void 0 && (e.inputs[n] = o, e.declaredInputs[n] = t.declaredInputs[n]);
} }
function jA(e) { let t = 0, n = null; for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    r.hostVars = t += r.hostVars, r.hostAttrs = uo(r.hostAttrs, n = uo(n, r.hostAttrs));
} }
function nu(e) { return e === Pe ? {} : e === j ? [] : e; }
function VA(e, t) { let n = e.viewQuery; n ? e.viewQuery = (o, r) => { t(o, r), n(o, r); } : e.viewQuery = t; }
function HA(e, t) { let n = e.contentQueries; n ? e.contentQueries = (o, r, i) => { t(o, r, i), n(o, r, i); } : e.contentQueries = t; }
function BA(e, t) { let n = e.hostBindings; n ? e.hostBindings = (o, r) => { t(o, r), n(o, r); } : e.hostBindings = t; }
function UE(e, t, n, o, r, i, s, a) { if (n.firstCreatePass) {
    e.mergedAttrs = uo(e.mergedAttrs, e.attrs);
    let u = e.tView = Ud(2, e, r, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
    n.queries !== null && (n.queries.template(n, e), u.queries = n.queries.embeddedTView(e));
} a && (e.flags |= a), st(e, !1); let c = $E(n, t, e, o); yr() && Jd(n, t, c, e), He(c, t); let l = Sv(c, t, c, e); t[o + I] = l, qd(t, l), yE(l, e, t); }
function UA(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; return t.firstCreatePass ? (f = Rn(t, d, 4, s || null, a || null), Ji() && iE(t, e, f, me(t.consts, l), tf), Im(t, f)) : f = t.data[d], UE(f, e, t, n, o, r, i, c), Bn(f) && ba(t, e, f), l != null && Lo(e, f, u), f; }
function Nn(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; if (t.firstCreatePass) {
    if (f = Rn(t, d, 4, s || null, a || null), l != null) {
        let p = me(t.consts, l);
        f.localNames = [];
        for (let h = 0; h < p.length; h += 2)
            f.localNames.push(p[h], -1);
    }
}
else
    f = t.data[d]; return UE(f, e, t, n, o, r, i, c), l != null && Lo(e, f, u), f; }
function Nf(e, t, n, o, r, i, s, a) { let c = g(), l = b(), u = me(l.consts, i); return UA(c, l, e, t, n, o, r, u, void 0, s, a), Nf; }
function wf(e, t, n, o, r, i, s, a) { let c = g(), l = b(), u = me(l.consts, i); return Nn(c, l, e, t, n, o, r, u, void 0, s, a), wf; }
var $E = qE;
function qE(e, t, n, o) { return Xe(!0), t[T].createComment(""); }
function $A(e, t, n, o) { let r = !va(t, n); Xe(r); let i = t[ue]?.data[la]?.[o] ?? null; if (i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i), r)
    return qE(e, t); let s = t[ue], a = ui(s, e, t, n); ma(s, o, a); let c = Rd(s, o); return Va(c, a); }
function GE() { $E = $A; }
var re = (function (e) { return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e; })(re || {}), bg = 0, qA = 1, Y = (function (e) { return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e; })(Y || {}), Gr = (function (e) { return e[e.Initial = -1] = "Initial", e; })(Gr || {}), so = 0, kt = 1, Cr = 2, ps = 3, GA = 4, WA = 5, za = 6, zA = 7, ao = 8, QA = 9, _f = (function (e) { return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e; })(_f || {});
function pi(e, t, n) { let o = zE(e); t[o] === null && (t[o] = []), t[o].push(n); }
function Ts(e, t) { let n = zE(e), o = t[n]; if (o !== null) {
    for (let r of o)
        r();
    t[n] = null;
} }
function WE(e) { Ts(1, e), Ts(0, e), Ts(2, e); }
function zE(e) { let t = GA; return e === 1 ? t = WA : e === 2 && (t = QA), t; }
function hi(e) { return e + 1; }
function Me(e, t) { let n = e[y], o = hi(t.index); return e[o]; }
function ZA(e, t, n) { let o = e[y], r = hi(t); e[r] = n; }
function pe(e, t) { let n = hi(t.index); return e.data[n]; }
function YA(e, t, n) { let o = hi(t); e.data[o] = n; }
function KA(e, t, n) { let o = t[y], r = pe(o, n); switch (e) {
    case Y.Complete: return r.primaryTmplIndex;
    case Y.Loading: return r.loadingTmplIndex;
    case Y.Error: return r.errorTmplIndex;
    case Y.Placeholder: return r.placeholderTmplIndex;
    default: return null;
} }
function Qu(e, t) { return t === Y.Placeholder ? e.placeholderBlockConfig?.[bg] ?? null : t === Y.Loading ? e.loadingBlockConfig?.[bg] ?? null : null; }
function QE(e) { return e.loadingBlockConfig?.[qA] ?? null; }
function Ag(e, t) { if (!e || e.length === 0)
    return t; let n = new Set(e); for (let o of t)
    n.add(o); return e.length === n.size ? e : Array.from(n); }
function JA(e, t) { let n = t.primaryTmplIndex + I; return Et(e, n); }
function ZE(e) { return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number"; }
function YE(e, t) { let n = null, o = hi(t.index); return I < o && o < e.bindingStartIndex && (n = pe(e, t)), !!n && ZE(n); }
function Sf(e, t, n, o) { let r = n.get(q); return Rw(e, () => r.run(t), i => r.runOutsideAngular(() => Aw(i)), o); }
function XA(e, t, n) { return n == null ? e : n >= 0 ? fl(n, e) : e[t.index][G] ?? null; }
function eR(e, t) { return dn(I + t, e); }
function Bo(e, t, n, o, r, i, s, a) { let c = e[L], l = c.get(q), u; function d() { if (it(e)) {
    u.destroy();
    return;
} let f = Me(e, t), p = f[kt]; if (p !== Gr.Initial && p !== Y.Placeholder) {
    u.destroy();
    return;
} let h = XA(e, t, o); if (!h || (u.destroy(), it(h)))
    return; let m = eR(h, n), v = r(m, () => { l.run(() => { e !== h && Ki(h, v), i(); }); }, c, a); e !== h && hr(h, v), pi(s, f, v); } u = nv({ read: d }, { injector: c }); }
function Qa(e, t) { let n = t.get(oR), o = () => n.remove(e); return n.add(e), o; }
var tR = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, nR = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, oR = (() => { class e {
    executingCallbacks = !1;
    idleId = null;
    current = new Set;
    deferred = new Set;
    ngZone = E(q);
    requestIdleCallbackFn = tR().bind(globalThis);
    cancelIdleCallbackFn = nR().bind(globalThis);
    add(n) { (this.executingCallbacks ? this.deferred : this.current).add(n), this.idleId === null && this.scheduleIdleCallback(); }
    remove(n) { let { current: o, deferred: r } = this; o.delete(n), r.delete(n), o.size === 0 && r.size === 0 && this.cancelIdleCallback(); }
    scheduleIdleCallback() { let n = () => { this.cancelIdleCallback(), this.executingCallbacks = !0; for (let o of this.current)
        o(); if (this.current.clear(), this.executingCallbacks = !1, this.deferred.size > 0) {
        for (let o of this.deferred)
            this.current.add(o);
        this.deferred.clear(), this.scheduleIdleCallback();
    } }; this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n)); }
    cancelIdleCallback() { this.idleId !== null && (this.cancelIdleCallbackFn(this.idleId), this.idleId = null); }
    ngOnDestroy() { this.cancelIdleCallback(), this.current.clear(), this.deferred.clear(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function Za(e) { return (t, n) => KE(e, t, n); }
function KE(e, t, n) { let o = n.get(JE), r = n.get(q), i = () => o.remove(t); return o.add(e, t, r), i; }
var JE = (() => { class e {
    executingCallbacks = !1;
    timeoutId = null;
    invokeTimerAt = null;
    current = [];
    deferred = [];
    add(n, o, r) { let i = this.executingCallbacks ? this.deferred : this.current; this.addToQueue(i, Date.now() + n, o), this.scheduleTimer(r); }
    remove(n) { let { current: o, deferred: r } = this; this.removeFromQueue(o, n) === -1 && this.removeFromQueue(r, n), o.length === 0 && r.length === 0 && this.clearTimeout(); }
    addToQueue(n, o, r) { let i = n.length; for (let s = 0; s < n.length; s += 2)
        if (n[s] > o) {
            i = s;
            break;
        } Xc(n, i, o, r); }
    removeFromQueue(n, o) { let r = -1; for (let i = 0; i < n.length; i += 2)
        if (n[i + 1] === o) {
            r = i;
            break;
        } return r > -1 && Jc(n, r, 2), r; }
    scheduleTimer(n) { let o = () => { this.clearTimeout(), this.executingCallbacks = !0; let i = [...this.current], s = Date.now(); for (let c = 0; c < i.length; c += 2) {
        let l = i[c], u = i[c + 1];
        if (l <= s)
            u();
        else
            break;
    } let a = -1; for (let c = 0; c < this.current.length && this.current[c] <= s; c += 2)
        a = c + 1; if (a >= 0 && Jc(this.current, 0, a + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
        for (let c = 0; c < this.deferred.length; c += 2) {
            let l = this.deferred[c], u = this.deferred[c + 1];
            this.addToQueue(this.current, l, u);
        }
        this.deferred.length = 0;
    } this.scheduleTimer(n); }; if (this.current.length > 0) {
        let i = Date.now(), s = this.current[0];
        if (this.timeoutId === null || this.invokeTimerAt && this.invokeTimerAt - s > 16) {
            this.clearTimeout();
            let a = Math.max(s - i, 16);
            this.invokeTimerAt = s, this.timeoutId = n.runOutsideAngular(() => setTimeout(() => n.run(o), a));
        }
    } }
    clearTimeout() { this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null); }
    ngOnDestroy() { this.clearTimeout(), this.current.length = 0, this.deferred.length = 0; }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), rR = (() => { class e {
    cachedInjectors = new Map;
    getOrCreateInjector(n, o, r, i) { if (!this.cachedInjectors.has(n)) {
        let s = r.length > 0 ? Cf(r, o, i) : null;
        this.cachedInjectors.set(n, s);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = B({ token: e, providedIn: "environment", factory: () => new e });
} return e; })(), iR = new M("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), XE = new M("");
function ou(e, t, n) { return e.get(rR).getOrCreateInjector(t, e, n, ""); }
function sR(e, t, n) { if (e instanceof io) {
    let r = e.injector, i = e.parentInjector, s = ou(i, t, n);
    return new io(r, s);
} let o = e.get(Se); if (o !== e) {
    let r = ou(o, t, n);
    return new io(e, r);
} return ou(e, t, n); }
function Tt(e, t, n, o = !1) { let r = n[Z], i = r[y]; if (it(r))
    return; let s = Me(r, t), a = s[kt], c = s[zA]; if (!(c !== null && e < c) && Og(a, e) && Og(s[so] ?? -1, e)) {
    let l = pe(i, t), d = !o && (typeof ngServerMode > "u" || !ngServerMode) && (QE(l) !== null || Qu(l, Y.Loading) !== null || Qu(l, Y.Placeholder)) ? Zu : eI;
    try {
        d(e, s, n, t, r);
    }
    catch (f) {
        nf(r, f);
    }
} }
function aR(e, t) { let n = e[ke]?.findIndex(r => r.data[ei] === t[kt]) ?? -1; return { dehydratedView: n > -1 ? e[ke][n] : null, dehydratedViewIx: n }; }
function eI(e, t, n, o, r) { V(k.DeferBlockStateStart); let i = KA(e, r, o); if (i !== null) {
    t[kt] = e;
    let s = r[y], a = i + I, c = Et(s, a), l = 0;
    of(n, l);
    let u;
    if (e === Y.Complete) {
        let h = pe(s, o), m = h.providers;
        m && m.length > 0 && (u = sR(r[L], h, m));
    }
    let { dehydratedView: d, dehydratedViewIx: f } = aR(n, t), p = Fo(r, c, null, { injector: u, dehydratedView: d });
    if (jo(n, p, l, Cn(c, d)), li(p, 2), f > -1 && n[ke]?.splice(f, 1), (e === Y.Complete || e === Y.Error) && Array.isArray(t[ao])) {
        for (let h of t[ao])
            h();
        t[ao] = null;
    }
} V(k.DeferBlockStateEnd); }
function cR(e, t, n, o, r) { let i = Date.now(), s = r[y], a = pe(s, o); if (t[Cr] === null || t[Cr] <= i) {
    t[Cr] = null;
    let c = QE(a), l = t[ps] !== null;
    if (e === Y.Loading && c !== null && !l) {
        t[so] = e;
        let u = Rg(c, t, o, n, r);
        t[ps] = u;
    }
    else {
        e > Y.Loading && l && (t[ps](), t[ps] = null, t[so] = null), eI(e, t, n, o, r);
        let u = Qu(a, e);
        u !== null && (t[Cr] = i + u, Rg(u, t, o, n, r));
    }
}
else
    t[so] = e; }
function Rg(e, t, n, o, r) { return KE(e, () => { let s = t[so]; t[Cr] = null, t[so] = null, s !== null && Tt(s, n, o); }, r[L]); }
function Og(e, t) { return e < t; }
function Uo(e, t) { let n = e[t.index]; Tt(Y.Placeholder, t, n); }
function kg(e, t, n) { e.loadingPromise.then(() => { e.loadingState === re.COMPLETE ? Tt(Y.Complete, t, n) : e.loadingState === re.FAILED && Tt(Y.Error, t, n); }); }
var Zu = null;
function tI(e, t, n, o) { let r = e.consts; n != null && (t.placeholderBlockConfig = me(r, n)), o != null && (t.loadingBlockConfig = me(r, o)), Zu === null && (Zu = cR); }
var Ms = "__ngAsyncComponentMetadataFn__";
function lR(e) { return e[Ms] ?? null; }
function nI(e, t, n) { let o = e; return o[Ms] = () => Promise.all(t()).then(r => (n(...r), o[Ms] = null, r)), o[Ms]; }
function bf(e, t, n, o) { return lt(() => { let r = e; t !== null && (r.hasOwnProperty("decorators") && r.decorators !== void 0 ? r.decorators.push(...t) : r.decorators = t), n !== null && (r.ctorParameters = n), o !== null && (r.hasOwnProperty("propDecorators") && r.propDecorators !== void 0 ? r.propDecorators = Q(Q({}, r.propDecorators), o) : r.propDecorators = o); }); }
var uR = (() => { class e {
    log(n) { console.log(n); }
    warn(n) { console.warn(n); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function oI(e) { return typeof e == "function" && e[ae] !== void 0; }
function Af(e) { return oI(e) && typeof e.set == "function"; }
function Ns(e, t) { let n = e[y]; for (let o = I; o < n.bindingStartIndex; o++)
    if (J(e[o])) {
        let r = e[o];
        if (!(o === n.bindingStartIndex - 1)) {
            let s = n.data[o], a = pe(n, s);
            if (ZE(a)) {
                t.push({ lContainer: r, lView: e, tNode: s, tDetails: a });
                continue;
            }
        }
        ne(r[$]) && Ns(r[$], t);
        for (let s = G; s < r.length; s++)
            Ns(r[s], t);
    }
    else
        ne(e[o]) && Ns(e[o], t); }
function dR() { return X("Chrome DevTools profiling"), () => { }; }
function fR(e) { let t = e.get($t), n = e.get(bt), o = Qm(t, n), r = {}; for (let [i, s] of Object.entries(o))
    xw(i) || (r[i] = s); return r; }
var xg = "ng";
function pR(e, t) { hR(e, t); }
function hR(e, t) { if (typeof COMPILED > "u" || !COMPILED) {
    let n = be;
    n[xg] ??= {}, n[xg][e] = t;
} }
var rI = new M(""), iI = new M(""), gR = (() => { class e {
    _ngZone;
    registry;
    _isZoneStable = !0;
    _callbacks = [];
    _taskTrackingZone = null;
    _destroyRef;
    constructor(n, o, r) { this._ngZone = n, this.registry = o, Wi() && (this._destroyRef = E(Ve, { optional: !0 }) ?? void 0), Rf || (aI(r), r.addToWindow(o)), this._watchAngularEvents(), n.run(() => { this._taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
    _watchAngularEvents() { let n = this._ngZone.onUnstable.subscribe({ next: () => { this._isZoneStable = !1; } }), o = this._ngZone.runOutsideAngular(() => this._ngZone.onStable.subscribe({ next: () => { q.assertNotInAngularZone(), queueMicrotask(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } })); this._destroyRef?.onDestroy(() => { n.unsubscribe(), o.unsubscribe(); }); }
    isStable() { return this._isZoneStable && !this._ngZone.hasPendingMacrotasks; }
    _runCallbacksIfReady() { if (this.isStable())
        queueMicrotask(() => { for (; this._callbacks.length !== 0;) {
            let n = this._callbacks.pop();
            clearTimeout(n.timeoutId), n.doneCb();
        } });
    else {
        let n = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(o => o.updateCb && o.updateCb(n) ? (clearTimeout(o.timeoutId), !1) : !0);
    } }
    getPendingTasks() { return this._taskTrackingZone ? this._taskTrackingZone.macroTasks.map(n => ({ source: n.source, creationLocation: n.creationLocation, data: n.data })) : []; }
    addCallback(n, o, r) { let i = -1; o && o > 0 && (i = setTimeout(() => { this._callbacks = this._callbacks.filter(s => s.timeoutId !== i), n(); }, o)), this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: r }); }
    whenStable(n, o, r) { if (r && !this._taskTrackingZone)
        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'); this.addCallback(n, o, r), this._runCallbacksIfReady(); }
    registerApplication(n) { this.registry.registerApplication(n, this); }
    unregisterApplication(n) { this.registry.unregisterApplication(n); }
    findProviders(n, o, r) { return []; }
    static \u0275fac = function (o) { return new (o || e)(he(q), he(sI), he(iI)); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac });
} return e; })(), sI = (() => { class e {
    _applications = new Map;
    registerApplication(n, o) { this._applications.set(n, o); }
    unregisterApplication(n) { this._applications.delete(n); }
    unregisterAllApplications() { this._applications.clear(); }
    getTestability(n) { return this._applications.get(n) || null; }
    getAllTestabilities() { return Array.from(this._applications.values()); }
    getAllRootElements() { return Array.from(this._applications.keys()); }
    findTestabilityInTree(n, o = !0) { return Rf?.findTestabilityInTree(this, n, o) ?? null; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function aI(e) { Rf = e; }
var Rf;
function Of(e) { return !!e && typeof e.then == "function"; }
function cI(e) { return !!e && typeof e.subscribe == "function"; }
var kf = new M("");
function lI(e) { return Ze([{ provide: kf, multi: !0, useValue: e }]); }
var xf = (() => { class e {
    resolve;
    reject;
    initialized = !1;
    done = !1;
    donePromise = new Promise((n, o) => { this.resolve = n, this.reject = o; });
    appInits = E(kf, { optional: !0 }) ?? [];
    injector = E(ce);
    constructor() { }
    runInitializers() { if (this.initialized)
        return; let n = []; for (let r of this.appInits) {
        let i = Gi(this.injector, r);
        if (Of(i))
            n.push(i);
        else if (cI(i)) {
            let s = new Promise((a, c) => { i.subscribe({ complete: a, error: c }); });
            n.push(s);
        }
    } let o = () => { this.done = !0, this.resolve(); }; Promise.all(n).then(() => { o(); }).catch(r => { this.reject(r); }), n.length === 0 && o(), this.initialized = !0; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), gi = new M("");
function Pf() { oh(() => { let e = ""; throw new C(600, e); }); }
function uI(e) { return e.isBoundToModule; }
var mR = 10;
function Lf(e, t) { return Array.isArray(t) ? t.reduce(Lf, e) : Q(Q({}, e), t); }
var $e = (() => { class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = E(Dt);
    afterRenderManager = E(Ma);
    zonelessEnabled = E(Wn);
    rootEffectScheduler = E(is);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set;
    autoDetectTestViews = new Set;
    includeAllTestViews = !1;
    afterTick = new cm;
    get allViews() { return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]; }
    get destroyed() { return this._destroyed; }
    componentTypes = [];
    components = [];
    internalPendingTask = E(It);
    get isStable() { return this.internalPendingTask.hasPendingTasksObservable.pipe(DN(n => !n)); }
    constructor() { E(Po, { optional: !0 }); }
    whenStable() { let n; return new Promise(o => { n = this.isStable.subscribe({ next: r => { r && o(); } }); }).finally(() => { n.unsubscribe(); }); }
    _injector = E(Se);
    _rendererFactory = null;
    get injector() { return this._injector; }
    bootstrap(n, o) { return this.bootstrapImpl(n, o); }
    bootstrapImpl(n, o, r = ce.NULL) { return this._injector.get(q).run(() => { V(k.BootstrapComponentStart); let s = n instanceof $a; if (!this._injector.get(xf).done) {
        let h = "";
        throw new C(405, h);
    } let c; s ? c = n : c = this._injector.get(di).resolveComponentFactory(n), this.componentTypes.push(c.componentType); let l = uI(c) ? void 0 : this._injector.get(go), u = o || c.selector, d = c.create(r, [], u, l), f = d.location.nativeElement, p = d.injector.get(rI, null); return p?.registerApplication(f), d.onDestroy(() => { this.detachView(d.hostView), Nr(this.components, d), p?.unregisterApplication(f); }), this._loadComponent(d), V(k.BootstrapComponentEnd, d), d; }); }
    tick() { this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick(); }
    _tick() { V(k.ChangeDetectionStart), this.tracingSnapshot !== null ? this.tracingSnapshot.run(Ta.CHANGE_DETECTION, this.tickImpl) : this.tickImpl(); }
    tickImpl = () => { if (this._runningTick)
        throw V(k.ChangeDetectionEnd), new C(101, !1); let n = O(null); try {
        this._runningTick = !0, this.synchronize();
    }
    finally {
        this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, O(n), this.afterTick.next(), V(k.ChangeDetectionEnd);
    } };
    synchronize() { this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(Br, null, { optional: !0 })); let n = 0; for (; this.dirtyFlags !== 0 && n++ < mR;) {
        V(k.ChangeDetectionSyncStart);
        try {
            this.synchronizeOnce();
        }
        finally {
            V(k.ChangeDetectionSyncEnd);
        }
    } }
    synchronizeOnce() { this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()); let n = !1; if (this.dirtyFlags & 7) {
        let o = !!(this.dirtyFlags & 1);
        this.dirtyFlags &= -8, this.dirtyFlags |= 8;
        for (let { _lView: r } of this.allViews) {
            if (!o && !Un(r))
                continue;
            let i = o && !this.zonelessEnabled ? 0 : 1;
            Tv(r, i), n = !0;
        }
        if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23)
            return;
    } n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews(); }
    syncDirtyFlagsWithViews() { if (this.allViews.some(({ _lView: n }) => Un(n))) {
        this.dirtyFlags |= 2;
        return;
    }
    else
        this.dirtyFlags &= -8; }
    attachView(n) { let o = n; this._views.push(o), o.attachToAppRef(this); }
    detachView(n) { let o = n; Nr(this._views, o), o.detachFromAppRef(); }
    _loadComponent(n) { this.attachView(n.hostView); try {
        this.tick();
    }
    catch (r) {
        this.internalErrorHandler(r);
    } this.components.push(n), this._injector.get(gi, []).forEach(r => r(n)); }
    ngOnDestroy() { if (!this._destroyed)
        try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
        }
        finally {
            this._destroyed = !0, this._views = [], this._destroyListeners = [];
        } }
    onDestroy(n) { return this._destroyListeners.push(n), () => Nr(this._destroyListeners, n); }
    destroy() { if (this._destroyed)
        throw new C(406, !1); let n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
    get viewCount() { return this._views.length; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function Nr(e, t) { let n = e.indexOf(t); n > -1 && e.splice(n, 1); }
function Ya() { let e, t; return { promise: new Promise((o, r) => { e = o, t = r; }), resolve: e, reject: t }; }
function dI(e) { let t = g(), n = _(); if (Uo(t, n), !hI(0, t))
    return; let o = t[L], r = Me(t, n), i = e(() => Ne(0, t, n), o); pi(0, r, i); }
function fI(e) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let t = g(), n = t[L], o = _(), r = t[y], i = pe(r, o); if (i.loadingState === re.NOT_STARTED) {
    let s = Me(t, o), c = e(() => mi(i, t, o), n);
    pi(1, s, c);
} }
function pI(e, t, n) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let o = t[L], r = Me(t, n), i = r[za], s = e(() => xt(o, i), o); pi(2, r, s); }
function mi(e, t, n) { Ka(e, t, n); }
function Ka(e, t, n) { let o = t[L], r = t[y]; if (e.loadingState !== re.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve(); let i = Me(t, n), s = JA(r, e); e.loadingState = re.IN_PROGRESS, Ts(1, i); let a = e.dependencyResolverFn, c = o.get(vr).add(); return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => { let u = !1, d = [], f = []; for (let p of l)
    if (p.status === "fulfilled") {
        let h = p.value, m = W(h) || Ae(h);
        if (m)
            d.push(m);
        else {
            let v = ze(h);
            v && f.push(v);
        }
    }
    else {
        u = !0;
        break;
    } if (u) {
    if (e.loadingState = re.FAILED, e.errorTmplIndex === null) {
        let h = new C(-750, !1);
        nf(t, h);
    }
}
else {
    e.loadingState = re.COMPLETE;
    let p = s.tView;
    if (d.length > 0) {
        p.directiveRegistry = Ag(p.directiveRegistry, d);
        let h = d.map(v => v.type), m = qi(!1, ...h);
        e.providers = m;
    }
    f.length > 0 && (p.pipeRegistry = Ag(p.pipeRegistry, f));
} }), e.loadingPromise.finally(() => { e.loadingPromise = null, c(); })) : (e.loadingPromise = Promise.resolve().then(() => { e.loadingPromise = null, e.loadingState = re.COMPLETE, c(); }), e.loadingPromise); }
function hI(e, t) { return !(e === 0 && typeof ngServerMode < "u" && ngServerMode || t[L].get(XE, null, { optional: !0 })?.behavior === _f.Manual); }
function Ne(e, t, n) { let o = t[y], r = t[n.index]; if (!hI(e, t))
    return; let i = Me(t, n), s = pe(o, n); switch (WE(i), s.loadingState) {
    case re.NOT_STARTED:
        Tt(Y.Loading, n, r), Ka(s, t, n), s.loadingState === re.IN_PROGRESS && kg(s, n, r);
        break;
    case re.IN_PROGRESS:
        Tt(Y.Loading, n, r), kg(s, n, r);
        break;
    case re.COMPLETE:
        Tt(Y.Complete, n, r);
        break;
    case re.FAILED:
        Tt(Y.Error, n, r);
        break;
    default:
} }
function xt(e, t, n) { return Ge(this, null, function* () { let o = e.get(At); if (o.hydrating.has(t))
    return; let { parentBlockPromise: i, hydrationQueue: s } = $w(t, e); if (s.length === 0)
    return; i !== null && s.shift(), ER(o, s), i !== null && (yield i); let a = s[0]; o.has(a) ? yield Pg(e, s, n) : o.awaitParentBlock(a, () => Ge(null, null, function* () { return yield Pg(e, s, n); })); }); }
function Pg(e, t, n) { return Ge(this, null, function* () { let o = e.get(At), r = o.hydrating, i = e.get(It), s = i.add(); for (let c = 0; c < t.length; c++) {
    let l = t[c], u = o.get(l);
    if (u != null) {
        if (yield DR(u), yield IR(e), yR(u)) {
            _b(u), Lg(t.slice(c), o);
            break;
        }
        r.get(l).resolve();
    }
    else {
        vR(c, t, o), Lg(t.slice(c), o);
        break;
    }
} let a = t[t.length - 1]; yield r.get(a)?.promise, i.remove(s), n && n(t), Sb(o.get(a), t, o, e.get($e)); }); }
function yR(e) { return Me(e.lView, e.tNode)[kt] === Y.Error; }
function vR(e, t, n) { let o = e - 1, r = o > -1 ? n.get(t[o]) : null; r && Ua(r.lContainer); }
function Lg(e, t) { let n = t.hydrating; for (let o in e)
    n.get(o)?.reject(); t.cleanup(e); }
function ER(e, t) { for (let n of t)
    e.hydrating.set(n, Ya()); }
function IR(e) { return new Promise(t => Qd(t, { injector: e })); }
function DR(e) { return Ge(this, null, function* () { let { tNode: t, lView: n } = e, o = Me(n, t); return new Promise(r => { CR(o, r), Ne(2, n, t); }); }); }
function CR(e, t) { Array.isArray(e[ao]) || (e[ao] = []), e[ao].push(t); }
function ee(e, t, n) { return e === 0 ? Fg(t, n) : e === 2 ? !Fg(t, n) : !(typeof ngServerMode < "u" && ngServerMode); }
function TR(e) { return e != null && (e & 1) === 1; }
function Fg(e, t) { let n = e[L], o = pe(e[y], t), r = oi(n), i = TR(o.flags); if (typeof ngServerMode < "u" && ngServerMode)
    return !r || !i; let a = Me(e, t)[za] !== null; return !(i && a && r); }
function Yt(e, t) { let n = pe(e, t); return n.hydrateTriggers ??= new Map; }
function gI(e, t, n) { let o = [], r = [], i = [], s = []; for (let [a, c] of t) {
    let l = n.get(a);
    if (l !== void 0) {
        let u = c.data[wt], d = l;
        for (let f = 0; f < u; f++) {
            if (d = d.previousSibling, d.nodeType !== Node.ELEMENT_NODE)
                continue;
            let p = { el: d, blockName: a };
            c.hydrate.idle && o.push(p), c.hydrate.immediate && s.push(p), c.hydrate.timer !== null && (p.delay = c.hydrate.timer, r.push(p)), c.hydrate.viewport && (typeof c.hydrate.viewport != "boolean" && (p.intersectionObserverOptions = c.hydrate.viewport), i.push(p));
        }
    }
} MR(e, o), _R(e, s), NR(e, i), wR(e, r); }
function MR(e, t) { for (let n of t) {
    let o = e.get(At), i = Qa(() => xt(e, n.blockName), e);
    o.addCleanupFn(n.blockName, i);
} }
function NR(e, t) { if (t.length > 0) {
    let n = e.get(At);
    for (let o of t) {
        let r = Sf(o.el, () => xt(e, o.blockName), e, o.intersectionObserverOptions);
        n.addCleanupFn(o.blockName, r);
    }
} }
function wR(e, t) { for (let n of t) {
    let o = e.get(At), r = () => xt(e, n.blockName), s = Za(n.delay)(r, e);
    o.addCleanupFn(n.blockName, s);
} }
function _R(e, t) { for (let n of t)
    xt(e, n.blockName); }
function mI(e, t, n, o, r, i, s, a, c, l) { let u = g(), d = b(), f = e + I, p = Nn(u, d, e, null, 0, 0), h = u[L], m = oi(h); if (d.firstCreatePass) {
    X("NgDefer");
    let dt = { primaryTmplIndex: t, loadingTmplIndex: o ?? null, placeholderTmplIndex: r ?? null, errorTmplIndex: i ?? null, placeholderBlockConfig: null, loadingBlockConfig: null, dependencyResolverFn: n ?? null, loadingState: re.NOT_STARTED, loadingPromise: null, providers: null, hydrateTriggers: null, debug: null, flags: l ?? 0 };
    c?.(d, dt, a, s), YA(d, f, dt);
} let v = u[f]; yE(v, p, u); let D = null, x = null; if (v[ke]?.length > 0) {
    let dt = v[ke][0].data;
    x = dt[fa] ?? null, D = dt[ei];
} let oe = [null, Gr.Initial, null, null, null, null, x, D, null, null]; ZA(u, f, oe); let qe = null; x !== null && m && (qe = h.get(At), qe.add(x, { lView: u, tNode: p, lContainer: v })); let xe = () => { WE(oe), x !== null && qe?.cleanup([x]); }; pi(0, oe, () => Ki(u, xe)), hr(u, xe); }
function yI(e) { let t = g(), n = Ce(); if (!ee(0, t, n))
    return; let o = de(); if (z(t, o, e)) {
    let r = O(null);
    try {
        let i = !!e, a = Me(t, n)[kt];
        i === !1 && a === Gr.Initial ? Uo(t, n) : i === !0 && (a === Gr.Initial || a === Y.Placeholder) && Ne(0, t, n);
    }
    finally {
        O(r);
    }
} }
function vI(e) { let t = g(), n = Ce(); if (!ee(1, t, n))
    return; let o = de(); if (z(t, o, e)) {
    let r = O(null);
    try {
        let i = !!e, s = t[y], a = pe(s, n);
        i === !0 && a.loadingState === re.NOT_STARTED && mi(a, t, n);
    }
    finally {
        O(r);
    }
} }
function EI(e) { let t = g(), n = Ce(); if (!ee(2, t, n))
    return; let o = de(), r = b(); if (Yt(r, n).set(6, null), z(t, o, e))
    if (typeof ngServerMode < "u" && ngServerMode)
        Ne(2, t, n);
    else {
        let s = t[L], a = O(null);
        try {
            if (!!e === !0) {
                let u = Me(t, n)[za];
                xt(s, u);
            }
        }
        finally {
            O(a);
        }
    } }
function II() { let e = g(), t = _(); if (!ee(2, e, t))
    return; Yt(b(), t).set(7, null), typeof ngServerMode < "u" && ngServerMode && Ne(2, e, t); }
function DI() { let e = g(), t = _(); ee(0, e, t) && dI(Qa); }
function CI() { let e = g(), t = _(); ee(1, e, t) && fI(Qa); }
function TI() { let e = g(), t = _(); if (!ee(2, e, t))
    return; Yt(b(), t).set(0, null), typeof ngServerMode < "u" && ngServerMode ? Ne(2, e, t) : pI(Qa, e, t); }
function MI() { let e = g(), t = _(); if (!ee(0, e, t))
    return; pe(e[y], t).loadingTmplIndex === null && Uo(e, t), Ne(0, e, t); }
function NI() { let e = g(), t = _(); if (!ee(1, e, t))
    return; let n = e[y], o = pe(n, t); o.loadingState === re.NOT_STARTED && Ka(o, e, t); }
function wI() { let e = g(), t = _(); if (!ee(2, e, t))
    return; if (Yt(b(), t).set(1, null), typeof ngServerMode < "u" && ngServerMode)
    Ne(2, e, t);
else {
    let o = e[L], i = Me(e, t)[za];
    xt(o, i);
} }
function _I(e) { let t = g(), n = _(); ee(0, t, n) && dI(Za(e)); }
function SI(e) { let t = g(), n = _(); ee(1, t, n) && fI(Za(e)); }
function bI(e) { let t = g(), n = _(); if (!ee(2, t, n))
    return; Yt(b(), n).set(5, { type: 5, delay: e }), typeof ngServerMode < "u" && ngServerMode ? Ne(2, t, n) : pI(Za(e), t, n); }
function AI(e, t) { let n = g(), o = _(); ee(0, n, o) && (Uo(n, o), typeof ngServerMode < "u" && ngServerMode || Bo(n, o, e, t, ey, () => Ne(0, n, o), 0)); }
function RI(e, t) { let n = g(), o = _(); if (!ee(1, n, o))
    return; let r = n[y], i = pe(r, o); i.loadingState === re.NOT_STARTED && Bo(n, o, e, t, ey, () => mi(i, n, o), 1); }
function OI() { let e = g(), t = _(); if (!ee(2, e, t))
    return; Yt(b(), t).set(4, null), typeof ngServerMode < "u" && ngServerMode && Ne(2, e, t); }
function kI(e, t) { let n = g(), o = _(); ee(0, n, o) && (Uo(n, o), typeof ngServerMode < "u" && ngServerMode || Bo(n, o, e, t, Xm, () => Ne(0, n, o), 0)); }
function xI(e, t) { let n = g(), o = _(); if (!ee(1, n, o))
    return; let r = n[y], i = pe(r, o); i.loadingState === re.NOT_STARTED && Bo(n, o, e, t, Xm, () => mi(i, n, o), 1); }
function PI() { let e = g(), t = _(); if (!ee(2, e, t))
    return; Yt(b(), t).set(3, null), typeof ngServerMode < "u" && ngServerMode && Ne(2, e, t); }
function LI(e, t, n) { let o = g(), r = _(); ee(0, o, r) && (Uo(o, r), typeof ngServerMode < "u" && ngServerMode || Bo(o, r, e, t, Sf, () => Ne(0, o, r), 0, n)); }
function FI(e, t, n) { let o = g(), r = _(); if (!ee(1, o, r))
    return; let i = o[y], s = pe(i, r); s.loadingState === re.NOT_STARTED && Bo(o, r, e, t, Sf, () => mi(s, o, r), 1, n); }
function jI(e) { let t = g(), n = _(); if (!ee(2, t, n))
    return; Yt(b(), n).set(2, e ? { type: 2, intersectionObserverOptions: e } : null), typeof ngServerMode < "u" && ngServerMode && Ne(2, t, n); }
function Ff(e, t) { let n = g(), o = de(); if (z(n, o, t)) {
    let r = b(), i = Ce();
    if (xa(i, r, n, e, t))
        De(i) && yv(n, i.index);
    else {
        let a = K(i, n);
        Ra(n[T], a, null, i.value, e, t, null);
    }
} return Ff; }
function jf(e, t, n, o) { let r = g(), i = de(); if (z(r, i, t)) {
    let s = b(), a = Ce();
    ES(a, r, e, t, n, o);
} return jf; }
var VI = new M("", { factory: () => !1 }), HI = new M("", { factory: () => SR }), SR = 4e3, bR = !1, On = (typeof ngServerMode > "u" || !ngServerMode) && typeof document < "u" && typeof document?.documentElement?.getAnimations == "function";
function Ja(e) { return e[L].get(VI, bR); }
function AR(e, t, n) { let o = vo.get(e); if (o) {
    for (let r of t)
        o.classList.push(r);
    for (let r of n)
        o.cleanupFns.push(r);
}
else
    vo.set(e, { classList: t, cleanupFns: n }); }
function Vf(e) { let t = vo.get(e); if (t) {
    for (let n of t.cleanupFns)
        n();
    vo.delete(e);
} yn.delete(e); }
var RR = () => { }, vo = new WeakMap, yn = new WeakMap, co = new WeakMap;
function Yu(e, t) { let n = co.get(e); if (n && n.length > 0) {
    let o = n.findIndex(r => r === t);
    o > -1 && n.splice(o, 1);
} n?.length === 0 && co.delete(e); }
function Xa(e, t) { let n = co.get(e)?.shift(), o = t[yt]; if (o) {
    let i = Hs(e.index, o)?.previousSibling;
    n && i && n === i && n.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } }));
} }
function BI(e, t) { co.has(e) ? co.get(e)?.push(t) : co.set(e, [t]); }
function Ys(e) { let t = e[vt] ??= {}; return t.enter ??= new Map; }
function wn(e) { let t = e[vt] ??= {}; return t.leave ??= new Map; }
function UI(e) { let t = typeof e == "function" ? e() : e, n = Array.isArray(t) ? t : null; return typeof t == "string" && (n = t.trim().split(/\s+/).filter(o => o)), n; }
function OR(e, t) { if (!On)
    return; let n = vo.get(e); if (n && n.classList.length > 0 && kR(e, n.classList))
    for (let o of n.classList)
        t.removeClass(e, o); Vf(e); }
function kR(e, t) { for (let n of t)
    if (e.classList.contains(n))
        return !0; return !1; }
function $I(e, t) { let n = yn.get(t); return n === void 0 ? !0 : t === e.target && (n.animationName !== void 0 && e.animationName === n.animationName || n.propertyName !== void 0 && e.propertyName === n.propertyName); }
function ec(e, t, n) { let o = e.get(t.index) ?? { animateFns: [] }; o.animateFns.push(n), e.set(t.index, o); }
function Ku(e, t) { if (e)
    for (let n of e)
        n(); for (let n of t)
    n(); }
function Ju(e, t) { let n = wn(e).get(t.index); n && (n.resolvers = void 0); }
function hs(e, t, n, o, r) { Yu(t, n), Ku(o, r), Ju(e, t); }
function wr(e) { if (X("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !On)
    return wr; let t = g(); if (Ja(t))
    return wr; let n = _(); return Xa(n, t), ec(Ys(t), n, () => xR(t, n, e)), _a(t[L]), Zd(t[L], Ys(t)), wr; }
function xR(e, t, n) { let o = K(t, e), r = e[T], i = e[L].get(q), s = UI(n), a = [], c = u => { if (u.target !== o)
    return; let d = u instanceof AnimationEvent ? "animationend" : "transitionend"; i.runOutsideAngular(() => { r.listen(o, d, l); }); }, l = u => { u.target === o && PR(u, o, r); }; if (s && s.length > 0) {
    i.runOutsideAngular(() => { a.push(r.listen(o, "animationstart", c)), a.push(r.listen(o, "transitionstart", c)); }), AR(o, s, a);
    for (let u of s)
        r.addClass(o, u);
    i.runOutsideAngular(() => { requestAnimationFrame(() => { if (tv(o, yn, On), !yn.has(o)) {
        for (let u of s)
            r.removeClass(o, u);
        Vf(o);
    } }); });
} }
function PR(e, t, n) { let o = vo.get(t); if (!(e.target !== t || !o) && $I(e, t)) {
    e.stopImmediatePropagation();
    for (let r of o.classList)
        n.removeClass(t, r);
    Vf(t);
} }
function _r(e) { if (X("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !On)
    return _r; let t = g(); if (Ja(t))
    return _r; let n = _(); return Xa(n, t), ec(Ys(t), n, () => LR(t, n, e)), _a(t[L]), Zd(t[L], Ys(t)), _r; }
function LR(e, t, n) { let o = K(t, e); n.call(e[U], { target: o, animationComplete: RR }); }
function Sr(e) { if (X("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !On)
    return Sr; let t = g(); if (Ja(t))
    return Sr; let o = _(); return Xa(o, t), ec(wn(t), o, () => FR(t, o, e)), _a(t[L]), Sr; }
function FR(e, t, n) { let { promise: o, resolve: r } = Ya(), i = K(t, e), s = e[T], a = e[L].get(q); Dn.add(e[Fe]), (wn(e).get(t.index).resolvers ??= []).push(r); let c = UI(n); return c && c.length > 0 ? jR(i, t, e, c, s, a) : r(), { promise: o, resolve: r }; }
function jR(e, t, n, o, r, i) { OR(e, r); let s = [], a = wn(n).get(t.index)?.resolvers, c = l => { if (l.target === e && (l instanceof CustomEvent || $I(l, e))) {
    if (l.stopImmediatePropagation(), yn.delete(e), Yu(t, e), Array.isArray(t.projection))
        for (let u of o)
            r.removeClass(e, u);
    Ku(a, s), Ju(n, t);
} }; i.runOutsideAngular(() => { s.push(r.listen(e, "animationend", c)), s.push(r.listen(e, "transitionend", c)); }), BI(t, e); for (let l of o)
    r.addClass(e, l); i.runOutsideAngular(() => { requestAnimationFrame(() => { tv(e, yn, On), yn.has(e) || (Yu(t, e), Ku(a, s), Ju(n, t)); }); }); }
function Ks(e) { if (X("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !On)
    return Ks; let t = g(), n = _(); return Xa(n, t), Dn.add(t[Fe]), ec(wn(t), n, () => VR(t, n, e)), _a(t[L]), Ks; }
function VR(e, t, n) { let { promise: o, resolve: r } = Ya(), i = K(t, e), s = [], a = e[T], c = Ja(e), l = e[L].get(q), u = e[L].get(HI); (wn(e).get(t.index).resolvers ??= []).push(r); let d = wn(e).get(t.index)?.resolvers; if (c)
    hs(e, t, i, d, s);
else {
    let f = setTimeout(() => hs(e, t, i, d, s), u), p = { target: i, animationComplete: () => { hs(e, t, i, d, s), clearTimeout(f); } };
    BI(t, i), l.runOutsideAngular(() => { s.push(a.listen(i, "animationend", () => { hs(e, t, i, d, s), clearTimeout(f); }, { once: !0 })); }), n.call(e[U], p);
} return { promise: o, resolve: r }; }
function qI() { return g()[te][U]; }
function GI() { let e = g(), t = b(), n = _(); t.firstCreatePass && BR(t, n, e); let o = QI(n, e); o && (X("NgSignalForms"), n.flags & 1024 ? Vg(e, n, o, "value") : n.flags & 2048 ? Vg(e, n, o, "checked") : n.flags & 4096 ? WR(o) : n.flags & 8192 && QR(e, n, o), o.\u0275register()); }
function WI(e, t, n) { let o = g(), r = Ce(), i = de(); if (z(o, i, e)) {
    let s = b();
    Aa(r, o, t, e, o[T], n);
} zI(o, r); }
function HR() { let e = g(), t = Ce(); zI(e, t); }
function zI(e, t) { let n = QI(t, e); n && (KR(e, t, n), t.flags & 1024 ? Hg(t, e, n, "value") : t.flags & 2048 ? Hg(t, e, n, "checked") : t.flags & 4096 ? JR(t, e, n) : XR(t, e, n)), de(); }
function BR(e, t, n) { let o = t.inputs?.formField; if (!o || De(t) && o.includes(t.directiveStart + t.componentOffset))
    return; let r = o.find(s => ff in n[s]); if (r === void 0)
    return; t.fieldIndex = r; let i = UR(t, n) || $R(e, t); if (!(qR(t) || i))
    throw new C(318, !1); }
function UR(e, t) { return t[e.fieldIndex].\u0275interopControl ? (e.flags |= 4096, !0) : !1; }
function $R(e, t) { for (let n = t.directiveStart; n < t.directiveEnd; n++) {
    let o = e.data[n];
    if (jg(o, "value"))
        return t.flags |= 1024, t.customControlIndex = n, !0;
    if (jg(o, "checked"))
        return t.flags |= 2048, t.customControlIndex = n, !0;
} return !1; }
function qR(e) { return zR(e) ? (e.flags |= 8192, eO(e) && (e.flags |= 16384), tO(e) && (e.flags |= 32768), !0) : !1; }
function QI(e, t) { let n = e.fieldIndex; return n === -1 ? null : t[n]; }
function jg(e, t) { return GR(e, t) && ZI(e, t + "Change"); }
function GR(e, t) { return t in e.inputs; }
function ZI(e, t) { return t in e.outputs; }
function Vg(e, t, n, o) { let r = b(), i = t.customControlIndex, s = o + "Change"; ho(t, e, i, s, s, Mt(t, e, u => n.state().setControlValue(u))); let a = r.data[i], c = "touchedChange"; ZI(a, c) && ho(t, e, i, c, c, Mt(t, e, () => n.state().markAsTouched())); let l = e[i]; n.focus = () => l.focus ? l.focus() : n.element.focus(); }
function WR(e) { let t = e.\u0275interopControl; t.registerOnChange(n => e.state().setControlValue(n)), t.registerOnTouched(() => e.state().markAsTouched()), e.focus = () => e.element.focus(); }
function zR(e) { if (e.type !== 2)
    return !1; let t = e.value; return t === "input" || t === "textarea" || t === "select"; }
function QR(e, t, n) { let o = b(), r = e[T], i = K(t, e), s = () => { let c = n.state(); c.setControlValue(nO(i, c.value)); }; Gs(t, o, e, void 0, r, "input", s, Mt(t, e, s)); let a = () => { n.state().markAsTouched(); }; if (Gs(t, o, e, void 0, r, "blur", a, Mt(t, e, a)), t.type === 2 && t.value === "select" && typeof MutationObserver == "function") {
    let c = ZR(i, n);
    gl(o, e, c, c.disconnect);
} n.focus = () => i.focus(); }
function ZR(e, t) { let n = new MutationObserver(o => { o.some(r => YR(r)) && (e.value = t.state().value()); }); return n.observe(e, { attributes: !0, attributeFilter: ["value"], characterData: !0, childList: !0, subtree: !0 }), n; }
function YR(e) { if (e.type === "childList" || e.type === "characterData") {
    if (e.target instanceof Comment)
        return !1;
    for (let t of e.addedNodes)
        if (!(t instanceof Comment))
            return !0;
    for (let t of e.removedNodes)
        if (!(t instanceof Comment))
            return !0;
    return !1;
} return e.type === "attributes" && e.target instanceof HTMLOptionElement; }
function KR(e, t, n) { if (n.classes) {
    let o = nc(e);
    o.classes ??= {}, n.state();
    let r = e[T], i = K(t, e);
    for (let [s, a] of n.classes) {
        let c = a();
        dO(o.classes, s, c) && (c ? r.addClass(i, s) : r.removeClass(i, s));
    }
} }
function Hg(e, t, n, o) { let r = b(), i = e.customControlIndex, s = t[i], a = r.data[i], c = n.state(), l = nc(t), u = c.controlValue(); Eo(l, Uf, u) && In(a, s, o, u); let d = (e.flags & 8192) !== 0, f = d ? K(e, t) : null, p = t[T]; for (let h of $f) {
    let m = c[h]?.();
    if (Eo(l, h, m)) {
        let v = tc[h];
        Hf(e, t, v, m), d && !(v in a.inputs) && Bf(e, p, f, h, m, v);
    }
} }
function JR(e, t, n) { let o = n.\u0275interopControl, r = nc(t), i = n.state(), s = (e.flags & 8192) !== 0, a = s ? K(e, t) : null, c = t[T], l = i.value(); Eo(r, Uf, l) && Te(() => o.writeValue(l)); for (let u of $f) {
    let d = i[u]?.();
    if (Eo(r, u, d)) {
        let f = tc[u], p = Hf(e, t, f, d);
        u === KI ? o.setDisabledState && Te(() => o.setDisabledState(d)) : s && !p && Bf(e, c, a, u, d, f);
    }
} }
function XR(e, t, n) { let o = K(e, t), r = t[T], i = n.state(), s = nc(t), a = i.controlValue(); Eo(s, Uf, a) && oO(o, a); for (let c of $f) {
    let l = i[c]?.();
    if (Eo(s, c, l)) {
        let u = tc[c];
        Bf(e, r, o, c, l, u), Hf(e, t, u, l);
    }
} }
function Hf(e, t, n, o) { let r = e.inputs?.[n]; if (r) {
    let i = b();
    for (let s of r) {
        let a = i.data[s], c = t[s];
        In(a, c, n, o);
    }
    return !0;
} return !1; }
function Bf(e, t, n, o, r, i) { switch (o) {
    case cO:
        t.setAttribute(n, i, r);
        break;
    case KI:
    case lO:
    case uO:
        fO(t, n, i, r);
        break;
    case rO:
    case sO:
        e.flags & 16384 && Ug(t, n, i, r);
        break;
    case iO:
    case aO:
        e.flags & 32768 && Ug(t, n, i, r);
        break;
} }
function YI(e) { return e === null || e instanceof Date; }
function eO(e) { if (!e.attrs || e.value !== "input")
    return !1; for (let t = 0; t < e.attrs.length; t += 2) {
    let n = e.attrs[t];
    if (pd(n))
        break;
    if (n === "type") {
        let o = e.attrs[t + 1];
        return o === "date" || o === "datetime-local" || o === "month" || o === "number" || o === "range" || o === "time" || o === "week";
    }
} return !1; }
function tO(e) { return e.value !== "select"; }
function nO(e, t) { switch (e.type) {
    case "checkbox": return e.checked;
    case "number":
    case "range":
    case "datetime-local":
        if (typeof t() == "number")
            return e.valueAsNumber;
        break;
    case "date":
    case "month":
    case "time":
    case "week":
        let n = t();
        if (YI(n))
            return e.valueAsDate;
        if (typeof n == "number")
            return e.valueAsNumber;
        break;
} return e.value; }
function oO(e, t) { switch (e.type) {
    case "checkbox":
        e.checked = t;
        return;
    case "radio":
        e.checked = t === e.value;
        return;
    case "number":
    case "range":
    case "datetime-local":
        if (typeof t == "number") {
            Bg(e, t);
            return;
        }
        break;
    case "date":
    case "month":
    case "time":
    case "week": if (YI(t)) {
        e.valueAsDate = t;
        return;
    }
    else if (typeof t == "number") {
        Bg(e, t);
        return;
    }
} e.value = t; }
function Bg(e, t) { isNaN(t) ? e.value = "" : e.valueAsNumber = t; }
var KI = S({ disabled: S }), rO = S({ max: S }), iO = S({ maxLength: S }), sO = S({ min: S }), aO = S({ minLength: S }), cO = S({ name: S }), lO = S({ readonly: S }), uO = S({ required: S }), Uf = S({ controlValue: S }), tc = { disabled: "disabled", disabledReasons: "disabledReasons", dirty: "dirty", errors: "errors", hidden: "hidden", invalid: "invalid", max: "max", maxLength: "maxLength", min: "min", minLength: "minLength", name: "name", pattern: "pattern", pending: "pending", readonly: "readonly", required: "required", touched: "touched" }, $f = Object.keys(tc);
function nc(e) { let t = Je(), n = e[t]; return n === H && (n = e[t] = {}), n; }
function Eo(e, t, n) { let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function dO(e, t, n) { let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function fO(e, t, n, o) { o ? e.setAttribute(t, n, "") : e.removeAttribute(t, n); }
function Ug(e, t, n, o) { o !== void 0 ? e.setAttribute(t, n, o.toString()) : e.removeAttribute(t, n); }
var Xu = class {
    destroy(t) { }
    updateValue(t, n) { }
    swap(t, n) { let o = Math.min(t, n), r = Math.max(t, n), i = this.detach(r); if (r - o > 1) {
        let s = this.detach(o);
        this.attach(o, i), this.attach(r, s);
    }
    else
        this.attach(o, i); }
    move(t, n) { this.attach(n, this.detach(t)); }
};
function ru(e, t, n, o, r) { return e === n && Object.is(t, o) ? 1 : Object.is(r(e, t), r(n, o)) ? -1 : 0; }
function pO(e, t, n, o) { let r, i, s = 0, a = e.length - 1, c = void 0; if (Array.isArray(t)) {
    Zn(o);
    let l = t.length - 1;
    for (Zn(null); s <= a && s <= l;) {
        let u = e.at(s), d = t[s], f = ru(s, u, s, d, n);
        if (f !== 0) {
            f < 0 && e.updateValue(s, d), s++;
            continue;
        }
        let p = e.at(a), h = t[l], m = ru(a, p, l, h, n);
        if (m !== 0) {
            m < 0 && e.updateValue(a, h), a--, l--;
            continue;
        }
        let v = n(s, u), D = n(a, p), x = n(s, d);
        if (Object.is(x, D)) {
            let oe = n(l, h);
            Object.is(oe, v) ? (e.swap(s, a), e.updateValue(a, h), l--, a--) : e.move(a, s), e.updateValue(s, d), s++;
            continue;
        }
        if (r ??= new Js, i ??= qg(e, s, a, n), ed(e, r, s, x))
            e.updateValue(s, d), s++, a++;
        else if (i.has(x))
            r.set(v, e.detach(s)), a--;
        else {
            let oe = e.create(s, t[s]);
            e.attach(s, oe), s++, a++;
        }
    }
    for (; s <= l;)
        $g(e, r, n, s, t[s]), s++;
}
else if (t != null) {
    Zn(o);
    let l = t[Symbol.iterator]();
    Zn(null);
    let u = l.next();
    for (; !u.done && s <= a;) {
        let d = e.at(s), f = u.value, p = ru(s, d, s, f, n);
        if (p !== 0)
            p < 0 && e.updateValue(s, f), s++, u = l.next();
        else {
            r ??= new Js, i ??= qg(e, s, a, n);
            let h = n(s, f);
            if (ed(e, r, s, h))
                e.updateValue(s, f), s++, a++, u = l.next();
            else if (!i.has(h))
                e.attach(s, e.create(s, f)), s++, a++, u = l.next();
            else {
                let m = n(s, d);
                r.set(m, e.detach(s)), a--;
            }
        }
    }
    for (; !u.done;)
        $g(e, r, n, e.length, u.value), u = l.next();
} for (; s <= a;)
    e.destroy(e.detach(a--)); r?.forEach(l => { e.destroy(l); }); }
function ed(e, t, n, o) { return t !== void 0 && t.has(o) ? (e.attach(n, t.get(o)), t.delete(o), !0) : !1; }
function $g(e, t, n, o, r) { if (ed(e, t, o, n(o, r)))
    e.updateValue(o, r);
else {
    let i = e.create(o, r);
    e.attach(o, i);
} }
function qg(e, t, n, o) { let r = new Set; for (let i = t; i <= n; i++)
    r.add(o(i, e.at(i))); return r; }
var Js = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) { return this.kvMap.has(t); }
    delete(t) { if (!this.has(t))
        return !1; let n = this.kvMap.get(t); return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0; }
    get(t) { return this.kvMap.get(t); }
    set(t, n) { if (this.kvMap.has(t)) {
        let o = this.kvMap.get(t);
        this._vMap === void 0 && (this._vMap = new Map);
        let r = this._vMap;
        for (; r.has(o);)
            o = r.get(o);
        r.set(o, n);
    }
    else
        this.kvMap.set(t, n); }
    forEach(t) { for (let [n, o] of this.kvMap)
        if (t(o, n), this._vMap !== void 0) {
            let r = this._vMap;
            for (; r.has(o);)
                o = r.get(o), t(o, n);
        } }
};
function JI(e, t, n, o, r, i, s, a) { X("NgControlFlow"); let c = g(), l = b(), u = me(l.consts, i); return Nn(c, l, e, t, n, o, r, u, 256, s, a), oc; }
function oc(e, t, n, o, r, i, s, a) { X("NgControlFlow"); let c = g(), l = b(), u = me(l.consts, i); return Nn(c, l, e, t, n, o, r, u, 512, s, a), oc; }
function XI(e, t) { X("NgControlFlow"); let n = g(), o = de(), r = n[o] !== H ? n[o] : -1, i = r !== -1 ? Xs(n, I + r) : void 0, s = 0; if (z(n, o, e)) {
    let a = O(null);
    try {
        if (i !== void 0 && of(i, s), e !== -1) {
            let c = I + e, l = Xs(n, c), u = rd(n[y], c), d = eE(l, u, n), f = Fo(n, u, t, { dehydratedView: d });
            jo(l, f, s, Cn(u, d));
        }
    }
    finally {
        O(a);
    }
}
else if (i !== void 0) {
    let a = bv(i, s);
    a !== void 0 && (a[U] = t);
} }
var td = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, o) { this.lContainer = t, this.$implicit = n, this.$index = o; }
    get $count() { return this.lContainer.length - G; }
};
function eD(e) { return e; }
function tD(e, t) { return t; }
var nd = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, o) { this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = o; }
};
function nD(e, t, n, o, r, i, s, a, c, l, u, d, f) { X("NgControlFlow"); let p = g(), h = b(), m = c !== void 0, v = g(), D = a ? s.bind(v[te][U]) : s, x = new nd(m, D); v[I + e] = x, Nn(p, h, e + 1, t, n, o, r, me(h.consts, i), 256), m && Nn(p, h, e + 2, c, l, u, d, me(h.consts, f), 512); }
var od = class extends Xu {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, o) { super(), this.lContainer = t, this.hostLView = n, this.templateTNode = o; }
    get length() { return this.lContainer.length - G; }
    at(t) { return this.getLView(t)[U].$implicit; }
    attach(t, n) { let o = n[ue]; this.needsIndexUpdate ||= t !== this.length, jo(this.lContainer, n, t, Cn(this.templateTNode, o)), hO(this.lContainer, t); }
    detach(t) { return this.needsIndexUpdate ||= t !== this.length - 1, gO(this.lContainer, t), mO(this.lContainer, t); }
    create(t, n) { let o = Hr(this.lContainer, this.templateTNode.tView.ssrId); return Fo(this.hostLView, this.templateTNode, new td(this.lContainer, n, t), { dehydratedView: o }); }
    destroy(t) { ci(t[y], t); }
    updateValue(t, n) { this.getLView(t)[U].$implicit = n; }
    reset() { this.needsIndexUpdate = !1; }
    updateIndexes() { if (this.needsIndexUpdate)
        for (let t = 0; t < this.length; t++)
            this.getLView(t)[U].$index = t; }
    getLView(t) { return yO(this.lContainer, t); }
};
function oD(e) { let t = O(null), n = fe(); try {
    let o = g(), r = o[y], i = o[n], s = n + 1, a = Xs(o, s);
    if (i.liveCollection === void 0) {
        let l = rd(r, s);
        i.liveCollection = new od(a, o, l);
    }
    else
        i.liveCollection.reset();
    let c = i.liveCollection;
    if (pO(c, e, i.trackByFn, t), c.updateIndexes(), i.hasEmptyBlock) {
        let l = de(), u = c.length === 0;
        if (z(o, l, u)) {
            let d = n + 2, f = Xs(o, d);
            if (u) {
                let p = rd(r, d), h = eE(f, p, o), m = Fo(o, p, void 0, { dehydratedView: h });
                jo(f, m, 0, Cn(p, h));
            }
            else
                r.firstUpdatePass && Ba(f), of(f, 0);
        }
    }
}
finally {
    O(t);
} }
function Xs(e, t) { return e[t]; }
function hO(e, t) { if (e.length <= G)
    return; let n = G + t, o = e[n], r = o ? o[vt] : void 0; if (o && r && r.detachedLeaveAnimationFns && r.detachedLeaveAnimationFns.length > 0) {
    let i = o[L];
    nS(i, r), Dn.delete(o[Fe]), r.detachedLeaveAnimationFns = void 0;
} }
function gO(e, t) { if (e.length <= G)
    return; let n = G + t, o = e[n], r = o ? o[vt] : void 0; r && r.leave && r.leave.size > 0 && (r.detachedLeaveAnimationFns = []); }
function mO(e, t) { return jr(e, t); }
function yO(e, t) { return bv(e, t); }
function rd(e, t) { return Et(e, t); }
function qf(e, t, n) { let o = g(), r = de(); if (z(o, r, t)) {
    let i = b(), s = Ce();
    Aa(s, o, e, t, o[T], n);
} return qf; }
function id(e, t, n, o, r) { xa(t, e, n, r ? "class" : "style", o); }
function rc(e, t, n, o) { let r = g(), i = r[y], s = e + I, a = i.firstCreatePass ? uf(s, r, 2, t, tf, Ji(), n, o) : i.data[s]; if (Oa(a, r, e, t, zf), Bn(a)) {
    let c = r[y];
    ba(c, r, a), kd(c, a, r);
} return o != null && Lo(r, a), rc; }
function ic() { let e = b(), t = _(), n = ka(t); return e.firstCreatePass && df(e, n), yl(n) && Il(), ml(), n.classesWithoutHost != null && ON(n) && id(e, n, g(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && kN(n) && id(e, n, g(), n.stylesWithoutHost, !1), ic; }
function Gf(e, t, n, o) { return rc(e, t, n, o), ic(), Gf; }
function sc(e, t, n, o) { let r = g(), i = r[y], s = e + I, a = i.firstCreatePass ? aE(s, i, 2, t, n, o) : i.data[s]; return Oa(a, r, e, t, zf), o != null && Lo(r, a), sc; }
function ac() { let e = _(), t = ka(e); return yl(t) && Il(), ml(), ac; }
function Wf(e, t, n, o) { return sc(e, t, n, o), ac(), Wf; }
var zf = (e, t, n, o, r) => (Xe(!0), Ia(t[T], o, Pl()));
function vO(e, t, n, o, r) { let i = !va(t, n); if (Xe(i), i)
    return Ia(t[T], o, Pl()); let s = t[ue], a = ui(s, e, t, n); return gy(s, r) && ma(s, r, a.nextSibling), s && (md(n) || Lm(a)) && De(n) && (Oh(n), Fy(a)), a; }
function rD() { zf = vO; }
function cc(e, t, n) { let o = g(), r = o[y], i = e + I, s = r.firstCreatePass ? uf(i, o, 8, "ng-container", tf, Ji(), t, n) : r.data[i]; if (Oa(s, o, e, "ng-container", Kf), Bn(s)) {
    let a = o[y];
    ba(a, o, s), kd(a, s, o);
} return n != null && Lo(o, s), cc; }
function yi() { let e = b(), t = _(), n = ka(t); return e.firstCreatePass && df(e, n), yi; }
function Qf(e, t, n) { return cc(e, t, n), yi(), Qf; }
function lc(e, t, n) { let o = g(), r = o[y], i = e + I, s = r.firstCreatePass ? aE(i, r, 8, "ng-container", t, n) : r.data[i]; return Oa(s, o, e, "ng-container", Kf), n != null && Lo(o, s), lc; }
function Zf() { let e = _(), t = ka(e); return yi; }
function Yf(e, t, n) { return lc(e, t, n), Zf(), Yf; }
var Kf = (e, t, n, o, r) => (Xe(!0), Fd(t[T], ""));
function EO(e, t, n, o, r) { let i, s = !va(t, n); if (Xe(s), s)
    return Fd(t[T], ""); let a = t[ue], c = ui(a, e, t, n), l = hy(a, r); return ma(a, r, c), i = Va(l, c), i; }
function iD() { Kf = EO; }
function sD() { return g(); }
function Jf(e, t, n) { let o = g(), r = de(); if (z(o, r, t)) {
    let i = b(), s = Ce();
    ef(s, o, e, t, o[T], n);
} return Jf; }
function Xf(e, t, n) { let o = g(), r = de(); if (z(o, r, t)) {
    let i = b(), s = Ce(), a = es(i.data), c = vv(a, s, o);
    ef(s, o, e, t, c, n);
} return Xf; }
var Ir = void 0;
function IO(e) { let t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length; return t === 1 && n === 0 ? 1 : 5; }
var DO = ["en", [["a", "p"], ["AM", "PM"]], [["AM", "PM"]], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], Ir, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], Ir, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm\u202Fa", "h:mm:ss\u202Fa", "h:mm:ss\u202Fa z", "h:mm:ss\u202Fa zzzz"], ["{1}, {0}", Ir, Ir, Ir], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", IO], lo = {};
function CO(e, t, n) { typeof t != "string" && (n = t, t = e[Io.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), lo[t] = e, n && (lo[t][Io.ExtraData] = n); }
function ep(e) { let t = NO(e), n = Gg(t); if (n)
    return n; let o = t.split("-")[0]; if (n = Gg(o), n)
    return n; if (o === "en")
    return DO; throw new C(701, !1); }
function TO(e) { return ep(e)[Io.CurrencyCode] || null; }
function aD(e) { return ep(e)[Io.PluralCase]; }
function Gg(e) { return e in lo || (lo[e] = be.ng && be.ng.common && be.ng.common.locales && be.ng.common.locales[e]), lo[e]; }
function MO() { lo = {}; }
var Io = (function (e) { return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e; })(Io || {});
function NO(e) { return e.toLowerCase().replace(/_/g, "-"); }
var wO = ["zero", "one", "two", "few", "many"];
function _O(e, t) { let n = aD(t)(parseInt(e, 10)), o = wO[n]; return o !== void 0 ? o : "other"; }
var vi = "en-US", SO = "USD", cD = { marker: "element" }, lD = { marker: "ICU" }, Ct = (function (e) { return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e; })(Ct || {}), uD = vi;
function dD(e) { typeof e == "string" && (uD = e.toLowerCase().replace(/_/g, "-")); }
function bO() { return uD; }
var Wr = 0, br = 0;
function AO(e) { e && (Wr = Wr | 1 << Math.min(br, 31)), br++; }
function RO(e, t, n) { if (br > 0) {
    let o = e.data[n], r = Array.isArray(o) ? o : o.update, i = Je() - br - 1;
    gD(e, t, r, i, Wr);
} Wr = 0, br = 0; }
function fD(e, t, n) { let o = e[T]; switch (n) {
    case Node.COMMENT_NODE: return Fd(o, t);
    case Node.TEXT_NODE: return Ld(o, t);
    case Node.ELEMENT_NODE: return Ia(o, t, null);
} }
var Ar = (e, t, n, o) => (Xe(!0), fD(e, n, o));
function OO(e, t, n, o) { let r = e[ue], i = t - I, s = !Ha() || !r || gr() || ya(r, i); return Xe(s), s ? fD(e, n, o) : jv(r, i); }
function pD() { Ar = OO; }
function kO(e, t, n, o) { let r = e[T]; for (let i = 0; i < t.length; i++) {
    let s = t[i++], a = t[i], c = (s & Ct.COMMENT) === Ct.COMMENT, l = (s & Ct.APPEND_EAGERLY) === Ct.APPEND_EAGERLY, u = s >>> Ct.SHIFT, d = e[u], f = !1;
    d === null && (d = e[u] = Ar(e, u, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = yr()), l && n !== null && f && En(r, n, d, o, !1);
} }
function hD(e, t, n, o) { let r = n[T], i = null, s; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "string") {
        let l = t[++a];
        n[l] === null && (n[l] = Ar(n, l, c, Node.TEXT_NODE));
    }
    else if (typeof c == "number")
        switch (c & 1) {
            case 0:
                let l = rb(c);
                i === null && (i = l, s = r.parentNode(o));
                let u, d;
                if (l === i ? (u = o, d = s) : (u = null, d = F(n[l])), d !== null) {
                    let m = ib(c), v = n[m];
                    En(r, d, v, u, !1);
                    let D = Tr(e, m);
                    if (D !== null && typeof D == "object") {
                        let x = ja(D, n);
                        x !== null && hD(e, D.create[x], n, n[D.anchorIdx]);
                    }
                }
                break;
            case 1:
                let f = c >>> 1, p = t[++a], h = t[++a];
                Ra(r, dn(f, n), null, null, p, h, null);
                break;
            default:
        }
    else
        switch (c) {
            case lD:
                let l = t[++a], u = t[++a];
                if (n[u] === null) {
                    let p = n[u] = Ar(n, u, l, Node.COMMENT_NODE);
                    He(p, n);
                }
                break;
            case cD:
                let d = t[++a], f = t[++a];
                if (n[f] === null) {
                    let p = n[f] = Ar(n, f, d, Node.ELEMENT_NODE);
                    He(p, n);
                }
                break;
            default:
        }
} }
function gD(e, t, n, o, r) { for (let i = 0; i < n.length; i++) {
    let s = n[i], a = n[++i];
    if (s & r) {
        let c = "";
        for (let l = i + 1; l <= i + a; l++) {
            let u = n[l];
            if (typeof u == "string")
                c += u;
            else if (typeof u == "number")
                if (u < 0)
                    c += R(t[o - u]);
                else {
                    let d = u >>> 2;
                    switch (u & 3) {
                        case 1:
                            let f = n[++l], p = n[++l], h = e.data[d];
                            typeof h == "string" ? Ra(t[T], t[d], null, h, f, c, p) : Aa(h, t, f, c, t[T], p);
                            break;
                        case 0:
                            let m = t[d];
                            m !== null && Py(t[T], m, c);
                            break;
                        case 2:
                            xO(e, Tr(e, d), t, c);
                            break;
                        case 3:
                            Wg(e, Tr(e, d), o, t);
                            break;
                    }
                }
        }
    }
    else {
        let c = n[i + 1];
        if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2, u = Tr(e, l);
            t[u.currentCaseLViewIndex] < 0 && Wg(e, u, o, t);
        }
    }
    i += a;
} }
function Wg(e, t, n, o) { let r = o[t.currentCaseLViewIndex]; if (r !== null) {
    let i = Wr;
    r < 0 && (r = o[t.currentCaseLViewIndex] = ~r, i = -1), gD(e, o, t.update[r], n, i);
} }
function xO(e, t, n, o) { let r = PO(t, o); if (ja(t, n) !== r && (mD(e, t, n), n[t.currentCaseLViewIndex] = r === null ? null : ~r, r !== null)) {
    let s = n[t.anchorIdx];
    s && hD(e, t.create[r], n, s), Tb(n, t.anchorIdx, r);
} }
function mD(e, t, n) { let o = ja(t, n); if (o !== null) {
    let r = t.remove[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i];
        if (s > 0) {
            let a = dn(s, n);
            a !== null && ii(n[T], a);
        }
        else
            mD(e, Tr(e, ~s), n);
    }
} }
function PO(e, t) { let n = e.cases.indexOf(t); if (n === -1)
    switch (e.type) {
        case 1: {
            let o = _O(t, bO());
            n = e.cases.indexOf(o), n === -1 && o !== "other" && (n = e.cases.indexOf("other"));
            break;
        }
        case 0: {
            n = e.cases.indexOf("other");
            break;
        }
    } return n === -1 ? null : n; }
var ea = /�(\d+):?\d*�/gi, LO = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, FO = /�(\d+)�/, yD = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, Rr = "\uFFFD", jO = /�\/?\*(\d+:\d+)�/gi, VO = /�(\/?[#*]\d+):?\d*�/gi, HO = /\uE500/g;
function BO(e) { return e.replace(HO, " "); }
function UO(e, t, n, o, r, i) { let s = $n(), a = [], c = [], l = [[]], u = [[]]; r = WO(r, i); let d = BO(r).split(VO); for (let f = 0; f < d.length; f++) {
    let p = d[f];
    if ((f & 1) === 0) {
        let h = sd(p);
        for (let m = 0; m < h.length; m++) {
            let v = h[m];
            if ((m & 1) === 0) {
                let D = v;
                D !== "" && $O(u[0], e, s, l[0], a, c, n, D);
            }
            else {
                let D = v;
                if (typeof D != "object")
                    throw new Error(`Unable to parse ICU expression in "${r}" message.`);
                let oe = vD(e, s, l[0], n, a, "", !0).index;
                ID(u[0], e, n, c, t, D, oe);
            }
        }
    }
    else {
        let h = p.charCodeAt(0) === 47, m = p.charCodeAt(h ? 1 : 0), v = I + Number.parseInt(p.substring(h ? 2 : 1));
        if (h)
            l.shift(), u.shift(), st($n(), !1);
        else {
            let D = ob(e, l[0], v);
            l.unshift([]), st(D, !0);
            let x = { kind: 2, index: v, children: [], type: m === 35 ? 0 : 1 };
            u[0].push(x), u.unshift(x.children);
        }
    }
} e.data[o] = { create: a, update: c, ast: u[0], parentTNodeIndex: t }; }
function vD(e, t, n, o, r, i, s) { let a = ai(e, o, 1, null), c = a << Ct.SHIFT, l = $n(); t === l && (l = null), l === null && (c |= Ct.APPEND_EAGERLY), s && (c |= Ct.COMMENT, Y_(ab)), r.push(c, i === null ? "" : i); let u = rf(e, a, s ? 32 : 1, i === null ? "" : i, null); xv(n, u); let d = u.index; return st(u, !1), l !== null && t !== l && nb(l, d), u; }
function $O(e, t, n, o, r, i, s, a) { let c = a.match(ea), u = vD(t, n, o, s, r, c ? null : a, !1).index; c && Or(i, a, u, null, 0, null), e.push({ kind: 0, index: u }); }
function qO(e, t, n) { let r = _().index, i = []; if (e.firstCreatePass && e.data[t] === null) {
    for (let s = 0; s < n.length; s += 2) {
        let a = n[s], c = n[s + 1];
        if (c !== "") {
            if (LO.test(c))
                throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
            Or(i, c, r, a, GO(i), null);
        }
    }
    e.data[t] = i;
} }
function Or(e, t, n, o, r, i) { let s = e.length, a = s + 1; e.push(null, null); let c = s + 2, l = t.split(ea), u = 0; for (let d = 0; d < l.length; d++) {
    let f = l[d];
    if (d & 1) {
        let p = r + parseInt(f, 10);
        e.push(-1 - p), u = u | ED(p);
    }
    else
        f !== "" && e.push(f);
} return e.push(n << 2 | (o ? 1 : 0)), o && e.push(o, i), e[s] = u, e[a] = e.length - c, u; }
function GO(e) { let t = 0; for (let n = 0; n < e.length; n++) {
    let o = e[n];
    typeof o == "number" && o < 0 && t++;
} return t; }
function ED(e) { return 1 << Math.min(e, 31); }
function zg(e) { let t, n = "", o = 0, r = !1, i; for (; (t = jO.exec(e)) !== null;)
    r ? t[0] === `${Rr}/*${i}${Rr}` && (o = t.index, r = !1) : (n += e.substring(o, t.index + t[0].length), i = t[1], r = !0); return n += e.slice(o), n; }
function WO(e, t) { if (Lv(t))
    return zg(e); {
    let n = e.indexOf(`:${t}${Rr}`) + 2 + t.toString().length, o = e.search(new RegExp(`${Rr}\\/\\*\\d+:${t}${Rr}`));
    return zg(e.substring(n, o));
} }
function ID(e, t, n, o, r, i, s) { let a = 0, c = { type: i.type, currentCaseLViewIndex: ai(t, n, 1, null), anchorIdx: s, cases: [], create: [], remove: [], update: [] }; YO(o, i, s), tb(t, s, c); let l = i.values, u = []; for (let d = 0; d < l.length; d++) {
    let f = l[d], p = [];
    for (let m = 0; m < f.length; m++) {
        let v = f[m];
        if (typeof v != "string") {
            let D = p.push(v) - 1;
            f[m] = `<!--\uFFFD${D}\uFFFD-->`;
        }
    }
    let h = [];
    u.push(h), a = QO(h, t, c, n, o, r, i.cases[d], f.join(""), p) | a;
} a && KO(o, a, s), e.push({ kind: 3, index: s, cases: u, currentCaseLViewIndex: c.currentCaseLViewIndex }); }
function zO(e) { let t = [], n = [], o = 1, r = 0; e = e.replace(yD, function (s, a, c) { return c === "select" ? o = 0 : o = 1, r = parseInt(a.slice(1), 10), ""; }); let i = sd(e); for (let s = 0; s < i.length;) {
    let a = i[s++].trim();
    o === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    let c = sd(i[s++]);
    t.length > n.length && n.push(c);
} return { type: o, mainBinding: r, cases: t, values: n }; }
function sd(e) { if (!e)
    return []; let t = 0, n = [], o = [], r = /[{}]/g; r.lastIndex = 0; let i; for (; i = r.exec(e);) {
    let a = i.index;
    if (i[0] == "}") {
        if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            yD.test(c) ? o.push(zO(c)) : o.push(c), t = a + 1;
        }
    }
    else {
        if (n.length == 0) {
            let c = e.substring(t, a);
            o.push(c), t = a + 1;
        }
        n.push("{");
    }
} let s = e.substring(t); return o.push(s), o; }
function QO(e, t, n, o, r, i, s, a, c) { let l = [], u = [], d = []; n.cases.push(s), n.create.push(l), n.remove.push(u), n.update.push(d); let p = Sy(ca()).getInertBodyElement(a), h = Ou(p) || p; return h ? DD(e, t, n, o, r, l, u, d, h, i, c, 0) : 0; }
function DD(e, t, n, o, r, i, s, a, c, l, u, d) { let f = 0, p = c.firstChild; for (; p;) {
    let h = ai(t, o, 1, null);
    switch (p.nodeType) {
        case Node.ELEMENT_NODE:
            let m = p, v = m.tagName.toLowerCase();
            if (Au.hasOwnProperty(v)) {
                iu(i, cD, v, l, h), t.data[h] = v;
                let qe = m.attributes;
                for (let dt = 0; dt < qe.length; dt++) {
                    let Jt = qe.item(dt), nh = Jt.name.toLowerCase();
                    !!Jt.value.match(ea) ? Oy.hasOwnProperty(nh) && (Pd[nh] ? Or(a, Jt.value, h, Jt.name, 0, Ea) : Or(a, Jt.value, h, Jt.name, 0, null)) : JO(i, h, Jt);
                }
                let xe = { kind: 1, index: h, children: [] };
                e.push(xe), f = DD(xe.children, t, n, o, r, i, s, a, p, h, u, d + 1) | f, Qg(s, h, d);
            }
            break;
        case Node.TEXT_NODE:
            let D = p.textContent || "", x = D.match(ea);
            iu(i, null, x ? "" : D, l, h), Qg(s, h, d), x && (f = Or(a, D, h, null, 0, null) | f), e.push({ kind: 0, index: h });
            break;
        case Node.COMMENT_NODE:
            let oe = FO.exec(p.textContent || "");
            if (oe) {
                let qe = parseInt(oe[1], 10), xe = u[qe];
                iu(i, lD, "", l, h), ID(e, t, o, r, l, xe, h), ZO(s, h, d);
            }
            break;
    }
    p = p.nextSibling;
} return f; }
function Qg(e, t, n) { n === 0 && e.push(t); }
function ZO(e, t, n) { n === 0 && (e.push(~t), e.push(t)); }
function YO(e, t, n) { e.push(ED(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2); }
function KO(e, t, n) { e.push(t, 1, n << 2 | 3); }
function iu(e, t, n, o, r) { t !== null && e.push(t), e.push(n, r, sb(0, o, r)); }
function JO(e, t, n) { e.push(t << 1 | 1, n.name, n.value); }
var Zg = 0, XO = /\[(�.+?�?)\]/, ek = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, tk = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, nk = /{([A-Z0-9_]+)}/g, ok = /�I18N_EXP_(ICU(_\d+)?)�/g, rk = /\/\*/, ik = /\d+\:(\d+)/;
function sk(e, t = {}) { let n = e; if (XO.test(e)) {
    let o = {}, r = [Zg];
    n = n.replace(ek, (i, s, a) => { let c = s || a, l = o[c] || []; if (l.length || (c.split("|").forEach(m => { let v = m.match(ik), D = v ? parseInt(v[1], 10) : Zg, x = rk.test(m); l.push([D, x, m]); }), o[c] = l), !l.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`); let u = r[r.length - 1], d = 0; for (let m = 0; m < l.length; m++)
        if (l[m][0] === u) {
            d = m;
            break;
        } let [f, p, h] = l[d]; return p ? r.pop() : u !== f && r.push(f), l.splice(d, 1), h; });
} return Object.keys(t).length && (n = n.replace(tk, (o, r, i, s, a, c) => t.hasOwnProperty(i) ? `${r}${t[i]}${c}` : o), n = n.replace(nk, (o, r) => t.hasOwnProperty(r) ? t[r] : o), n = n.replace(ok, (o, r) => { if (t.hasOwnProperty(r)) {
    let i = t[r];
    if (!i.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${o} with key: ${r}`);
    return i.shift();
} return o; })), n; }
function tp(e, t, n = -1) { let o = b(), r = g(), i = I + e, s = me(o.consts, t), a = $n(); if (o.firstCreatePass && UO(o, a === null ? 0 : a.index, r, i, s, n), o.type === 2) {
    let f = r[te];
    f[w] |= 32;
}
else
    r[w] |= 32; let c = o.data[i], l = a === r[le] ? null : a, u = av(o, l, r), d = a && a.type & 8 ? r[a.index] : null; yb(r, i, a, n), kO(r, c.create, u, d), bl(!0); }
function np() { bl(!1); }
function CD(e, t, n) { tp(e, t, n), np(); }
function TD(e, t) { let n = b(), o = me(n.consts, t); qO(n, e + I, o); }
function op(e) { let t = g(); return AO(z(t, de(), e)), op; }
function MD(e) { RO(b(), g(), e + I); }
function ND(e, t = {}) { return sk(e, t); }
function rp(e, t, n) { let o = g(), r = b(), i = _(); return ap(r, o, o[T], i, e, t, n), rp; }
function ip(e, t) { let n = _(), o = g(), r = b(), i = es(r.data), s = vv(i, n, o); return ap(r, o, s, n, e, t), ip; }
function sp(e, t, n) { let o = g(), r = b(), i = _(); return (i.type & 3 || n) && Gs(i, r, o, n, o[T], e, t, Mt(i, o, t)), sp; }
function ap(e, t, n, o, r, i, s) { let a = !0, c = null; if ((o.type & 3 || s) && (c ??= Mt(o, t, i), Gs(o, e, t, s, n, r, i, c) && (a = !1)), a) {
    let l = o.outputs?.[r], u = o.hostDirectiveOutputs?.[r];
    if (u && u.length)
        for (let d = 0; d < u.length; d += 2) {
            let f = u[d], p = u[d + 1];
            c ??= Mt(o, t, i), ho(o, t, f, p, r, c);
        }
    if (l && l.length)
        for (let d of l)
            c ??= Mt(o, t, i), ho(o, t, d, r, r, c);
} }
function wD(e = 1) { return Vh(e); }
function ak(e, t) { let n = null, o = B_(e); for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (i === "*") {
        n = r;
        continue;
    }
    if (o === null ? Zy(e, i, !0) : q_(o, i))
        return r;
} return n; }
function _D(e) { let t = g()[te][le]; if (!t.projection) {
    let n = e ? e.length : 1, o = t.projection = cr(n, null), r = o.slice(), i = t.child;
    for (; i !== null;) {
        if (i.type !== 128) {
            let s = e ? ak(i, e) : 0;
            s !== null && (r[s] ? r[s].projectionNext = i : o[s] = i, r[s] = i);
        }
        i = i.next;
    }
} }
function SD(e, t = 0, n, o, r, i) { let s = g(), a = b(), c = o ? e + 1 : null; c !== null && Nn(s, a, c, o, r, i, null, n); let l = Rn(a, I + e, 16, null, n || null); l.projection === null && (l.projection = t), Nl(); let d = !s[ue] || gr(); s[te][le].projection[l.projection] === null && c !== null ? ck(s, a, c) : d && !Oo(l) && lS(a, s, l); }
function ck(e, t, n) { let o = I + n, r = t.data[o], i = e[o], s = Hr(i, r.tView.ssrId), a = Fo(e, r, void 0, { dehydratedView: s }); jo(i, a, 0, Cn(r, s)); }
function cp(e, t, n, o) { return TE(e, t, n, o), cp; }
function lp(e, t, n) { return CE(e, t, n), lp; }
function bD(e) { let t = g(), n = b(), o = ts(); mr(o + 1); let r = gf(n, o); if (e.dirty && Sh(t) === ((r.metadata.flags & 2) === 2)) {
    if (r.matches === null)
        e.reset([]);
    else {
        let i = NE(t, o);
        e.reset(i, Pm), e.notifyOnChanges();
    }
    return !0;
} return !1; }
function AD() { return hf(g(), ts()); }
function up(e, t, n, o, r) { return wE(t, TE(e, n, o, r)), up; }
function dp(e, t, n, o) { return wE(e, CE(t, n, o)), dp; }
function RD(e = 1) { mr(ts() + e); }
function OD(e) { let t = wl(); return Bt(t, I + e); }
function gs(e, t) { return e << 17 | t << 2; }
function _n(e) { return e >> 17 & 32767; }
function lk(e) { return (e & 2) == 2; }
function uk(e, t) { return e & 131071 | t << 17; }
function ad(e) { return e | 2; }
function Do(e) { return (e & 131068) >> 2; }
function su(e, t) { return e & -131069 | t << 2; }
function dk(e) { return (e & 1) === 1; }
function cd(e) { return e | 1; }
function fk(e, t, n, o, r, i) { let s = i ? t.classBindings : t.styleBindings, a = _n(s), c = Do(s); e[o] = n; let l = !1, u; if (Array.isArray(n)) {
    let d = n;
    u = d[1], (u === null || Vn(d, u) > 0) && (l = !0);
}
else
    u = n; if (r)
    if (c !== 0) {
        let f = _n(e[a + 1]);
        e[o + 1] = gs(f, a), f !== 0 && (e[f + 1] = su(e[f + 1], o)), e[a + 1] = uk(e[a + 1], o);
    }
    else
        e[o + 1] = gs(a, 0), a !== 0 && (e[a + 1] = su(e[a + 1], o)), a = o;
else
    e[o + 1] = gs(c, 0), a === 0 ? a = o : e[c + 1] = su(e[c + 1], o), c = o; l && (e[o + 1] = ad(e[o + 1])), Yg(e, u, o, !0), Yg(e, u, o, !1), pk(t, u, e, o, i), s = gs(a, c), i ? t.classBindings = s : t.styleBindings = s; }
function pk(e, t, n, o, r) { let i = r ? e.residualClasses : e.residualStyles; i != null && typeof t == "string" && Vn(i, t) >= 0 && (n[o + 1] = cd(n[o + 1])); }
function Yg(e, t, n, o) { let r = e[n + 1], i = t === null, s = o ? _n(r) : Do(r), a = !1; for (; s !== 0 && (a === !1 || i);) {
    let c = e[s], l = e[s + 1];
    hk(c, t) && (a = !0, e[s + 1] = o ? cd(l) : ad(l)), s = o ? _n(l) : Do(l);
} a && (e[n + 1] = o ? ad(r) : cd(r)); }
function hk(e, t) { return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? Vn(e, t) >= 0 : !1; }
var se = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function kD(e) { return e.substring(se.key, se.keyEnd); }
function gk(e) { return e.substring(se.value, se.valueEnd); }
function mk(e) { return LD(e), xD(e, Co(e, 0, se.textEnd)); }
function xD(e, t) { let n = se.textEnd; return n === t ? -1 : (t = se.keyEnd = vk(e, se.key = t, n), Co(e, t, n)); }
function yk(e) { return LD(e), PD(e, Co(e, 0, se.textEnd)); }
function PD(e, t) { let n = se.textEnd, o = se.key = Co(e, t, n); return n === o ? -1 : (o = se.keyEnd = Ek(e, o, n), o = Kg(e, o, n, 58), o = se.value = Co(e, o, n), o = se.valueEnd = Ik(e, o, n), Kg(e, o, n, 59)); }
function LD(e) { se.key = 0, se.keyEnd = 0, se.value = 0, se.valueEnd = 0, se.textEnd = e.length; }
function Co(e, t, n) { for (; t < n && e.charCodeAt(t) <= 32;)
    t++; return t; }
function vk(e, t, n) { for (; t < n && e.charCodeAt(t) > 32;)
    t++; return t; }
function Ek(e, t, n) { let o; for (; t < n && ((o = e.charCodeAt(t)) === 45 || o === 95 || (o & -33) >= 65 && (o & -33) <= 90 || o >= 48 && o <= 57);)
    t++; return t; }
function Kg(e, t, n, o) { return t = Co(e, t, n), t < n && t++, t; }
function Ik(e, t, n) { let o = -1, r = -1, i = -1, s = t, a = s; for (; s < n;) {
    let c = e.charCodeAt(s++);
    if (c === 59)
        return a;
    c === 34 || c === 39 ? a = s = Jg(e, c, s, n) : t === s - 4 && i === 85 && r === 82 && o === 76 && c === 40 ? a = s = Jg(e, 41, s, n) : c > 32 && (a = s), i = r, r = o, o = c & -33;
} return a; }
function Jg(e, t, n, o) { let r = -1, i = n; for (; i < o;) {
    let s = e.charCodeAt(i++);
    if (s == t && r !== 92)
        return i;
    s == 92 && r === 92 ? r = 0 : r = s;
} throw new Error; }
function fp(e, t, n) { return VD(e, t, n, !1), fp; }
function pp(e, t) { return VD(e, t, null, !0), pp; }
function FD(e) { HD($D, Dk, e, !1); }
function Dk(e, t) { for (let n = yk(t); n >= 0; n = PD(t, n))
    $D(e, kD(t), gk(t)); }
function jD(e) { HD(Sk, Ck, e, !0); }
function Ck(e, t) { for (let n = mk(t); n >= 0; n = xD(t, n))
    lr(e, kD(t), !0); }
function VD(e, t, n, o) { let r = g(), i = b(), s = at(2); if (i.firstUpdatePass && UD(i, e, s, o), t !== H && z(r, s, t)) {
    let a = i.data[fe()];
    qD(i, a, r, r[T], e, r[s + 1] = Ak(t, n), o, s);
} }
function HD(e, t, n, o) { let r = b(), i = at(2); r.firstUpdatePass && UD(r, null, i, o); let s = g(); if (n !== H && z(s, i, n)) {
    let a = r.data[fe()];
    if (GD(a, o) && !BD(r, i)) {
        let c = o ? a.classesWithoutHost : a.stylesWithoutHost;
        c !== null && (n = Li(c, n || "")), id(r, a, s, n, o);
    }
    else
        bk(r, a, s, s[T], s[i + 1], s[i + 1] = _k(e, t, n), o, i);
} }
function BD(e, t) { return t >= e.expandoStartIndex; }
function UD(e, t, n, o) { let r = e.data; if (r[n + 1] === null) {
    let i = r[fe()], s = BD(e, n);
    GD(i, o) && t === null && !s && (t = !1), t = Tk(r, i, t, o), fk(r, i, t, n, s, o);
} }
function Tk(e, t, n, o) { let r = es(e), i = o ? t.residualClasses : t.residualStyles; if (r === null)
    (o ? t.classBindings : t.styleBindings) === 0 && (n = au(null, e, t, n, o), n = zr(n, t.attrs, o), i = null);
else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== r)
        if (n = au(r, e, t, n, o), i === null) {
            let c = Mk(e, t, o);
            c !== void 0 && Array.isArray(c) && (c = au(null, e, t, c[1], o), c = zr(c, t.attrs, o), Nk(e, t, o, c));
        }
        else
            i = wk(e, t, o);
} return i !== void 0 && (o ? t.residualClasses = i : t.residualStyles = i), n; }
function Mk(e, t, n) { let o = n ? t.classBindings : t.styleBindings; if (Do(o) !== 0)
    return e[_n(o)]; }
function Nk(e, t, n, o) { let r = n ? t.classBindings : t.styleBindings; e[_n(r)] = o; }
function wk(e, t, n) { let o, r = t.directiveEnd; for (let i = 1 + t.directiveStylingLast; i < r; i++) {
    let s = e[i].hostAttrs;
    o = zr(o, s, n);
} return zr(o, t.attrs, n); }
function au(e, t, n, o, r) { let i = null, s = n.directiveEnd, a = n.directiveStylingLast; for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], o = zr(o, i.hostAttrs, r), i !== e);)
    a++; return e !== null && (n.directiveStylingLast = a), o; }
function zr(e, t, n) { let o = n ? 1 : 2, r = -1; if (t !== null)
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        typeof s == "number" ? r = s : r === o && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), lr(e, s, n ? !0 : t[++i]));
    } return e === void 0 ? null : e; }
function _k(e, t, n) { if (n == null || n === "")
    return j; let o = [], r = Rt(n); if (Array.isArray(r))
    for (let i = 0; i < r.length; i++)
        e(o, r[i], !0);
else if (typeof r == "object")
    for (let i in r)
        r.hasOwnProperty(i) && e(o, i, r[i]);
else
    typeof r == "string" && t(o, r); return o; }
function $D(e, t, n) { lr(e, t, Rt(n)); }
function Sk(e, t, n) { let o = String(t); o !== "" && !o.includes(" ") && lr(e, o, n); }
function bk(e, t, n, o, r, i, s, a) { r === H && (r = j); let c = 0, l = 0, u = 0 < r.length ? r[0] : null, d = 0 < i.length ? i[0] : null; for (; u !== null || d !== null;) {
    let f = c < r.length ? r[c + 1] : void 0, p = l < i.length ? i[l + 1] : void 0, h = null, m;
    u === d ? (c += 2, l += 2, f !== p && (h = d, m = p)) : d === null || u !== null && u < d ? (c += 2, h = u) : (l += 2, h = d, m = p), h !== null && qD(e, t, n, o, h, m, s, a), u = c < r.length ? r[c] : null, d = l < i.length ? i[l] : null;
} }
function qD(e, t, n, o, r, i, s, a) { if (!(t.type & 3))
    return; let c = e.data, l = c[a + 1], u = dk(l) ? Xg(c, t, n, r, Do(l), s) : void 0; if (!ta(u)) {
    ta(i) || lk(l) && (i = Xg(c, null, n, r, a, s));
    let d = dn(fe(), n);
    dS(o, s, d, r, i);
} }
function Xg(e, t, n, o, r, i) { let s = t === null, a; for (; r > 0;) {
    let c = e[r], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, f = n[r + 1];
    f === H && (f = d ? j : void 0);
    let p = d ? $i(f, o) : u === o ? f : void 0;
    if (l && !ta(p) && (p = $i(c, o)), ta(p) && (a = p, s))
        return a;
    let h = e[r + 1];
    r = s ? _n(h) : Do(h);
} if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = $i(c, o));
} return a; }
function ta(e) { return e !== void 0; }
function Ak(e, t) { return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = ht(Rt(e)))), e; }
function GD(e, t) { return (e.flags & (t ? 8 : 16)) !== 0; }
function WD(e, t = "") { let n = g(), o = b(), r = e + I, i = o.firstCreatePass ? Rn(o, r, 1, t, null) : o.data[r], s = zD(o, n, i, t, e); n[r] = s, yr() && Jd(o, n, s, i), st(i, !1); }
var zD = (e, t, n, o, r) => (Xe(!0), Ld(t[T], o));
function Rk(e, t, n, o, r) { let i = !va(t, n); if (Xe(i), i)
    return Ld(t[T], o); let s = t[ue]; return ui(s, e, t, n); }
function QD() { zD = Rk; }
function ZD(e, t) { let n = !1, o = Je(); for (let i = 1; i < t.length; i += 2)
    n = z(e, o++, t[i]) || n; if (Sl(o), !n)
    return H; let r = t[0]; for (let i = 1; i < t.length; i += 2)
    r += R(t[i]) + (i + 1 !== t.length ? t[i + 1] : ""); return r; }
function YD(e, t, n, o = "") { return z(e, de(), n) ? t + R(n) + o : H; }
function KD(e, t, n, o, r, i = "") { let s = Je(), a = Tn(e, s, n, r); return at(2), a ? t + R(n) + o + R(r) + i : H; }
function JD(e, t, n, o, r, i, s, a = "") { let c = Je(), l = Ga(e, c, n, r, s); return at(3), l ? t + R(n) + o + R(r) + i + R(s) + a : H; }
function XD(e, t, n, o, r, i, s, a, c, l = "") { let u = Je(), d = Ue(e, u, n, r, s, c); return at(4), d ? t + R(n) + o + R(r) + i + R(s) + a + R(c) + l : H; }
function eC(e, t, n, o, r, i, s, a, c, l, u, d = "") { let f = Je(), p = Ue(e, f, n, r, s, c); return p = z(e, f + 4, u) || p, at(5), p ? t + R(n) + o + R(r) + i + R(s) + a + R(c) + l + R(u) + d : H; }
function tC(e, t, n, o, r, i, s, a, c, l, u, d, f, p = "") { let h = Je(), m = Ue(e, h, n, r, s, c); return m = Tn(e, h + 4, u, f) || m, at(6), m ? t + R(n) + o + R(r) + i + R(s) + a + R(c) + l + R(u) + d + R(f) + p : H; }
function nC(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m = "") { let v = Je(), D = Ue(e, v, n, r, s, c); return D = Ga(e, v + 4, u, f, h) || D, at(7), D ? t + R(n) + o + R(r) + i + R(s) + a + R(c) + l + R(u) + d + R(f) + p + R(h) + m : H; }
function oC(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v, D = "") { let x = Je(), oe = Ue(e, x, n, r, s, c); return oe = Ue(e, x + 4, u, f, h, v) || oe, at(8), oe ? t + R(n) + o + R(r) + i + R(s) + a + R(c) + l + R(u) + d + R(f) + p + R(h) + m + R(v) + D : H; }
function hp(e) { return uc("", e), hp; }
function uc(e, t, n) { let o = g(), r = YD(o, e, t, n); return r !== H && Pt(o, fe(), r), uc; }
function gp(e, t, n, o, r) { let i = g(), s = KD(i, e, t, n, o, r); return s !== H && Pt(i, fe(), s), gp; }
function mp(e, t, n, o, r, i, s) { let a = g(), c = JD(a, e, t, n, o, r, i, s); return c !== H && Pt(a, fe(), c), mp; }
function yp(e, t, n, o, r, i, s, a, c) { let l = g(), u = XD(l, e, t, n, o, r, i, s, a, c); return u !== H && Pt(l, fe(), u), yp; }
function vp(e, t, n, o, r, i, s, a, c, l, u) { let d = g(), f = eC(d, e, t, n, o, r, i, s, a, c, l, u); return f !== H && Pt(d, fe(), f), vp; }
function Ep(e, t, n, o, r, i, s, a, c, l, u, d, f) { let p = g(), h = tC(p, e, t, n, o, r, i, s, a, c, l, u, d, f); return h !== H && Pt(p, fe(), h), Ep; }
function Ip(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h) { let m = g(), v = nC(m, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); return v !== H && Pt(m, fe(), v), Ip; }
function Dp(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v) { let D = g(), x = oC(D, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v); return x !== H && Pt(D, fe(), x), Dp; }
function Cp(e) { let t = g(), n = ZD(t, e); return n !== H && Pt(t, fe(), n), Cp; }
function Pt(e, t, n) { let o = dn(t, e); Py(e[T], o, n); }
function Tp(e, t, n) { Af(t) && (t = t()); let o = g(), r = de(); if (z(o, r, t)) {
    let i = b(), s = Ce();
    Aa(s, o, e, t, o[T], n);
} return Tp; }
function rC(e, t) { let n = Af(e); return n && e.set(t), n; }
function Mp(e, t) { let n = g(), o = b(), r = _(); return ap(o, n, n[T], r, e, t), Mp; }
var iC = {};
function Np(e) { X("NgLet"); let t = b(), n = g(), o = e + I, r = Rn(t, o, 128, null, null); return st(r, !1), pr(t, n, o, iC), Np; }
function sC(e) { let t = b(), n = g(), o = fe(); return pr(t, n, o, e), e; }
function aC(e) { let t = wl(), n = Bt(t, I + e); if (n === iC)
    throw new C(314, !1); return n; }
function cC(e, t) { let n = b(), o = g(), r = o[T], i = "data-ng-source-location"; for (let [s, a, c, l] of t) {
    let u = Et(n, s + I), d = dn(s + I, o);
    if (!d.hasAttribute(i)) {
        let f = `${e}@o:${a},l:${c},c:${l}`;
        r.setAttribute(d, i, f);
    }
} }
function lC(e) { return z(g(), de(), e) ? R(e) : H; }
function uC(e, t, n = "") { return YD(g(), e, t, n); }
function dC(e, t, n, o, r = "") { return KD(g(), e, t, n, o, r); }
function fC(e, t, n, o, r, i, s = "") { return JD(g(), e, t, n, o, r, i, s); }
function pC(e, t, n, o, r, i, s, a, c = "") { return XD(g(), e, t, n, o, r, i, s, a, c); }
function hC(e, t, n, o, r, i, s, a, c, l, u = "") { return eC(g(), e, t, n, o, r, i, s, a, c, l, u); }
function gC(e, t, n, o, r, i, s, a, c, l, u, d, f = "") { return tC(g(), e, t, n, o, r, i, s, a, c, l, u, d, f); }
function mC(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h = "") { return nC(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); }
function yC(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v = "") { return oC(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v); }
function vC(e) { return ZD(g(), e); }
function em(e, t, n) { let o = b(); o.firstCreatePass && EC(t, o.data, o.blueprint, je(e), n); }
function EC(e, t, n, o, r) { if (e = P(e), Array.isArray(e))
    for (let i = 0; i < e.length; i++)
        EC(e[i], t, n, o, r);
else {
    let i = b(), s = g(), a = _(), c = tn(e) ? e : P(e.provide), l = rl(e), u = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (tn(e) || !e.multi) {
        let p = new vn(l, r, Ho, null), h = lu(c, t, r ? u : u + f, d);
        h === -1 ? (gu(Os(a, s), i, c), cu(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[h] = p, s[h] = p);
    }
    else {
        let p = lu(c, t, u + f, d), h = lu(c, t, u, u + f), m = p >= 0 && n[p], v = h >= 0 && n[h];
        if (r && !v || !r && !m) {
            gu(Os(a, s), i, c);
            let D = xk(r ? kk : Ok, n.length, r, o, l, e);
            !r && v && (n[h].providerFactory = D), cu(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(D), s.push(D);
        }
        else {
            let D = IC(n[r ? h : p], l, !r && o);
            cu(i, e, p > -1 ? p : h, D);
        }
        !r && o && v && n[h].componentProviders++;
    }
} }
function cu(e, t, n, o) { let r = tn(t), i = Nh(t); if (r || i) {
    let c = (i ? P(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
        let l = e.destroyHooks || (e.destroyHooks = []);
        if (!r && t.multi) {
            let u = l.indexOf(n);
            u === -1 ? l.push(n, [o, c]) : l[u + 1].push(o, c);
        }
        else
            l.push(n, c);
    }
} }
function IC(e, t, n) { return n && e.componentProviders++, e.multi.push(t) - 1; }
function lu(e, t, n, o) { for (let r = n; r < o; r++)
    if (t[r] === e)
        return r; return -1; }
function Ok(e, t, n, o, r) { return ld(this.multi, []); }
function kk(e, t, n, o, r) { let i = this.multi, s; if (this.providerFactory) {
    let a = this.providerFactory.componentProviders, c = xr(o, o[y], this.providerFactory.index, r);
    s = c.slice(0, a), ld(i, s);
    for (let l = a; l < c.length; l++)
        s.push(c[l]);
}
else
    s = [], ld(i, s); return s; }
function ld(e, t) { for (let n = 0; n < e.length; n++) {
    let o = e[n];
    t.push(o());
} return t; }
function xk(e, t, n, o, r, i) { let s = new vn(e, n, Ho, null); return s.multi = [], s.index = t, s.componentProviders = 0, IC(s, r, o && !n), s; }
function DC(e, t) { return n => { n.providersResolver = (o, r) => em(o, r ? r(e) : e, !1), t && (n.viewProvidersResolver = (o, r) => em(o, r ? r(t) : t, !0)); }; }
function CC(e) { return t => { e.length < 1 || (t.getExternalStyles = n => e.map(r => r + "?ngcomp" + (n ? "=" + encodeURIComponent(n) : "") + "&e=" + t.encapsulation)); }; }
function TC(e, t, n) { let o = e.\u0275cmp; o.directiveDefs = Zs(t, PE), o.pipeDefs = Zs(n, ze); }
function MC(e, t) { return lt(() => { let n = ji(e); n.declarations = ms(t.declarations || j), n.imports = ms(t.imports || j), n.exports = ms(t.exports || j), t.bootstrap && (n.bootstrap = ms(t.bootstrap)), po.registerNgModule(e, t); }); }
function ms(e) { if (typeof e == "function")
    return e; let t = Qe(e); return t.some(tr) ? () => t.map(P).map(tm) : t.map(tm); }
function tm(e) { return lf(e) ? e.ngModule : e; }
function NC(e, t) { let n = ve() + e, o = g(); return o[n] === H ? ut(o, n, t()) : fi(o, n); }
function wC(e, t, n) { return PC(g(), ve(), e, t, n); }
function _C(e, t, n, o) { return LC(g(), ve(), e, t, n, o); }
function SC(e, t, n, o, r) { return FC(g(), ve(), e, t, n, o, r); }
function bC(e, t, n, o, r, i, s) { return jC(g(), ve(), e, t, n, o, r, i); }
function AC(e, t, n, o, r, i, s) { let a = ve() + e, c = g(), l = Ue(c, a, n, o, r, i); return z(c, a + 4, s) || l ? ut(c, a + 5, t(n, o, r, i, s)) : fi(c, a + 5); }
function RC(e, t, n, o, r, i, s, a) { let c = ve() + e, l = g(), u = Ue(l, c, n, o, r, i); return Tn(l, c + 4, s, a) || u ? ut(l, c + 6, t(n, o, r, i, s, a)) : fi(l, c + 6); }
function OC(e, t, n, o, r, i, s, a, c) { let l = ve() + e, u = g(), d = Ue(u, l, n, o, r, i); return Ga(u, l + 4, s, a, c) || d ? ut(u, l + 7, t(n, o, r, i, s, a, c)) : fi(u, l + 7); }
function kC(e, t, n, o, r, i, s, a, c, l) { let u = ve() + e, d = g(), f = Ue(d, u, n, o, r, i); return Ue(d, u + 4, s, a, c, l) || f ? ut(d, u + 8, t(n, o, r, i, s, a, c, l)) : fi(d, u + 8); }
function xC(e, t, n) { return VC(g(), ve(), e, t, n); }
function Ei(e, t) { let n = e[t]; return n === H ? void 0 : n; }
function PC(e, t, n, o, r, i) { let s = t + n; return z(e, s, r) ? ut(e, s + 1, i ? o.call(i, r) : o(r)) : Ei(e, s + 1); }
function LC(e, t, n, o, r, i, s) { let a = t + n; return Tn(e, a, r, i) ? ut(e, a + 2, s ? o.call(s, r, i) : o(r, i)) : Ei(e, a + 2); }
function FC(e, t, n, o, r, i, s, a) { let c = t + n; return Ga(e, c, r, i, s) ? ut(e, c + 3, a ? o.call(a, r, i, s) : o(r, i, s)) : Ei(e, c + 3); }
function jC(e, t, n, o, r, i, s, a, c) { let l = t + n; return Ue(e, l, r, i, s, a) ? ut(e, l + 4, c ? o.call(c, r, i, s, a) : o(r, i, s, a)) : Ei(e, l + 4); }
function VC(e, t, n, o, r, i) { let s = t + n, a = !1; for (let c = 0; c < r.length; c++)
    z(e, s++, r[c]) && (a = !0); return a ? ut(e, s, o.apply(i, r)) : Ei(e, s); }
function HC(e, t) { let n = b(), o, r = e + I; n.firstCreatePass ? (o = Pk(t, n.pipeRegistry), n.data[r] = o, o.onDestroy && (n.destroyHooks ??= []).push(r, o.onDestroy)) : o = n.data[r]; let i = o.factory || (o.factory = Ft(o.type, !0)), s, a = Ie(Ho); try {
    let c = Rs(!1), l = i();
    return Rs(c), pr(n, g(), r, l), l;
}
finally {
    Ie(a);
} }
function Pk(e, t) { if (t)
    for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (e === o.name)
            return o;
    } }
function BC(e, t, n) { let o = e + I, r = g(), i = Bt(r, o); return Ii(r, o) ? PC(r, ve(), t, i.transform, n, i) : i.transform(n); }
function UC(e, t, n, o) { let r = e + I, i = g(), s = Bt(i, r); return Ii(i, r) ? LC(i, ve(), t, s.transform, n, o, s) : s.transform(n, o); }
function $C(e, t, n, o, r) { let i = e + I, s = g(), a = Bt(s, i); return Ii(s, i) ? FC(s, ve(), t, a.transform, n, o, r, a) : a.transform(n, o, r); }
function qC(e, t, n, o, r, i) { let s = e + I, a = g(), c = Bt(a, s); return Ii(a, s) ? jC(a, ve(), t, c.transform, n, o, r, i, c) : c.transform(n, o, r, i); }
function GC(e, t, n) { let o = e + I, r = g(), i = Bt(r, o); return Ii(r, o) ? VC(r, ve(), t, i.transform, n, i) : i.transform.apply(i, n); }
function Ii(e, t) { return e[y].data[t].pure; }
function WC(e, t) { return Fa(e, t); }
function zC(e, t) { return () => { try {
    return po.getComponentDependencies(e, t).dependencies;
}
catch (n) {
    throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
} }; }
function QC(e, t) { let n = W(e); n !== null && (n.debugInfo = t); }
function ZC(e, t, n) { let o = `./@ng/component?c=${e}&t=${encodeURIComponent(t)}`; return new URL(o, n).href; }
function YC(e, t, n, o, r = null, i = null) { let s = W(e); t.apply(null, [e, n, ...o]); let { newDef: a, oldDef: c } = Lk(s, W(e)); if (e[on] = a, c.tView) {
    let l = rw().values();
    for (let u of l)
        rt(u) && u[Z] === null && ws(r, i, a, c, u);
} }
function Lk(e, t) { let n = Q({}, e); return { newDef: Object.assign(e, t, { directiveDefs: n.directiveDefs, pipeDefs: n.pipeDefs, setInput: n.setInput, type: n.type }), oldDef: n }; }
function ws(e, t, n, o, r) { let i = r[y]; if (i === o.tView) {
    jk(e, t, n, o, r);
    return;
} for (let s = I; s < i.bindingStartIndex; s++) {
    let a = r[s];
    if (J(a)) {
        ne(a[$]) && ws(e, t, n, o, a[$]);
        for (let c = G; c < a.length; c++)
            ws(e, t, n, o, a[c]);
    }
    else
        ne(a) && ws(e, t, n, o, a);
} }
function Fk(e, t) { e.componentReplaced?.(t.id); }
function jk(e, t, n, o, r) { let i = r[U], s = r[$], a = r[Z], c = r[le], l = r[L].get(q, null), u = () => { if (o.encapsulation === Be.ShadowDom || o.encapsulation === Be.ExperimentalIsolatedShadowDom) {
    let h = s.cloneNode(!1);
    s.replaceWith(h), s = h;
} let d = Yy(n), f = Da(a, d, i, $d(n), s, c, null, null, null, null, null); Vk(a, r, f, c.index), ci(r[y], r); let p = r[Ye].rendererFactory; Fk(p, o), f[T] = p.createRenderer(s, n), iv(r[y], r), Hk(c), Pa(d, f, i), Mv(d, f, d.template, i); }; l === null ? nm(e, t, u) : l.run(() => nm(e, t, u)); }
function nm(e, t, n) {
    try {
        n();
    }
    catch (o) {
        let r = o;
        if (t !== null && r.message) {
            let i = r.message + (r.stack ? `
` + r.stack : "");
            e?.hot?.send?.("angular:invalidate", { id: t, message: i, error: !0 });
        }
        throw o;
    }
}
function Vk(e, t, n, o) { for (let r = I; r < e[y].bindingStartIndex; r++) {
    let i = e[r];
    if ((ne(i) || J(i)) && i[ge] === t) {
        i[ge] = n;
        break;
    }
} e[Ht] === t && (e[Ht] = n), e[ur] === t && (e[ur] = n), n[ge] = t[ge], t[ge] = null, e[o] = n; }
function Hk(e) { if (e.projection !== null) {
    for (let t of e.projection)
        oa(t) && (t.projectionNext = null, t.flags &= -3);
    e.projection = null;
} }
var Ee = { \u0275\u0275animateEnter: wr, \u0275\u0275animateEnterListener: _r, \u0275\u0275animateLeave: Sr, \u0275\u0275animateLeaveListener: Ks, \u0275\u0275attribute: jf, \u0275\u0275defineComponent: xE, \u0275\u0275defineDirective: LE, \u0275\u0275defineInjectable: B, \u0275\u0275defineInjector: nr, \u0275\u0275defineNgModule: Tf, \u0275\u0275definePipe: FE, \u0275\u0275directiveInject: Ho, \u0275\u0275getInheritedFactory: Rm, \u0275\u0275inject: he, \u0275\u0275injectAttribute: ra, \u0275\u0275invalidFactory: rE, \u0275\u0275invalidFactoryDep: Bi, \u0275\u0275templateRefExtractor: WC, \u0275\u0275resetView: Cl, \u0275\u0275HostDirectivesFeature: HE, \u0275\u0275NgOnChangesFeature: mm, \u0275\u0275ProvidersFeature: DC, \u0275\u0275InheritDefinitionFeature: Mf, \u0275\u0275ExternalStylesFeature: CC, \u0275\u0275nextContext: wD, \u0275\u0275namespaceHTML: xl, \u0275\u0275namespaceMathML: kl, \u0275\u0275namespaceSVG: Ol, \u0275\u0275enableBindings: vl, \u0275\u0275disableBindings: El, \u0275\u0275elementStart: rc, \u0275\u0275elementEnd: ic, \u0275\u0275element: Gf, \u0275\u0275elementContainerStart: cc, \u0275\u0275elementContainerEnd: yi, \u0275\u0275domElement: Wf, \u0275\u0275domElementStart: sc, \u0275\u0275domElementEnd: ac, \u0275\u0275domElementContainer: Yf, \u0275\u0275domElementContainerStart: lc, \u0275\u0275domElementContainerEnd: Zf, \u0275\u0275domTemplate: wf, \u0275\u0275domListener: sp, \u0275\u0275elementContainer: Qf, \u0275\u0275pureFunction0: NC, \u0275\u0275pureFunction1: wC, \u0275\u0275pureFunction2: _C, \u0275\u0275pureFunction3: SC, \u0275\u0275pureFunction4: bC, \u0275\u0275pureFunction5: AC, \u0275\u0275pureFunction6: RC, \u0275\u0275pureFunction7: OC, \u0275\u0275pureFunction8: kC, \u0275\u0275pureFunctionV: xC, \u0275\u0275getCurrentView: sD, \u0275\u0275restoreView: Dl, \u0275\u0275listener: rp, \u0275\u0275projection: SD, \u0275\u0275syntheticHostProperty: Xf, \u0275\u0275syntheticHostListener: ip, \u0275\u0275pipeBind1: BC, \u0275\u0275pipeBind2: UC, \u0275\u0275pipeBind3: $C, \u0275\u0275pipeBind4: qC, \u0275\u0275pipeBindV: GC, \u0275\u0275projectionDef: _D, \u0275\u0275domProperty: Jf, \u0275\u0275ariaProperty: Ff, \u0275\u0275property: qf, \u0275\u0275control: WI, \u0275\u0275controlCreate: GI, \u0275\u0275pipe: HC, \u0275\u0275queryRefresh: bD, \u0275\u0275queryAdvance: RD, \u0275\u0275viewQuery: lp, \u0275\u0275viewQuerySignal: dp, \u0275\u0275loadQuery: AD, \u0275\u0275contentQuery: cp, \u0275\u0275contentQuerySignal: up, \u0275\u0275reference: OD, \u0275\u0275classMap: jD, \u0275\u0275styleMap: FD, \u0275\u0275styleProp: fp, \u0275\u0275classProp: pp, \u0275\u0275advance: Ky, \u0275\u0275template: Nf, \u0275\u0275conditional: XI, \u0275\u0275conditionalCreate: JI, \u0275\u0275conditionalBranchCreate: oc, \u0275\u0275defer: mI, \u0275\u0275deferWhen: yI, \u0275\u0275deferOnIdle: DI, \u0275\u0275deferOnImmediate: MI, \u0275\u0275deferOnTimer: _I, \u0275\u0275deferOnHover: AI, \u0275\u0275deferOnInteraction: kI, \u0275\u0275deferOnViewport: LI, \u0275\u0275deferPrefetchWhen: vI, \u0275\u0275deferPrefetchOnIdle: CI, \u0275\u0275deferPrefetchOnImmediate: NI, \u0275\u0275deferPrefetchOnTimer: SI, \u0275\u0275deferPrefetchOnHover: RI, \u0275\u0275deferPrefetchOnInteraction: xI, \u0275\u0275deferPrefetchOnViewport: FI, \u0275\u0275deferHydrateWhen: EI, \u0275\u0275deferHydrateNever: II, \u0275\u0275deferHydrateOnIdle: TI, \u0275\u0275deferHydrateOnImmediate: wI, \u0275\u0275deferHydrateOnTimer: bI, \u0275\u0275deferHydrateOnHover: OI, \u0275\u0275deferHydrateOnInteraction: PI, \u0275\u0275deferHydrateOnViewport: jI, \u0275\u0275deferEnableTimerScheduling: tI, \u0275\u0275repeater: oD, \u0275\u0275repeaterCreate: nD, \u0275\u0275repeaterTrackByIndex: eD, \u0275\u0275repeaterTrackByIdentity: tD, \u0275\u0275componentInstance: qI, \u0275\u0275text: WD, \u0275\u0275textInterpolate: hp, \u0275\u0275textInterpolate1: uc, \u0275\u0275textInterpolate2: gp, \u0275\u0275textInterpolate3: mp, \u0275\u0275textInterpolate4: yp, \u0275\u0275textInterpolate5: vp, \u0275\u0275textInterpolate6: Ep, \u0275\u0275textInterpolate7: Ip, \u0275\u0275textInterpolate8: Dp, \u0275\u0275textInterpolateV: Cp, \u0275\u0275i18n: CD, \u0275\u0275i18nAttributes: TD, \u0275\u0275i18nExp: op, \u0275\u0275i18nStart: tp, \u0275\u0275i18nEnd: np, \u0275\u0275i18nApply: MD, \u0275\u0275i18nPostprocess: ND, \u0275\u0275resolveWindow: Wy, \u0275\u0275resolveDocument: zy, \u0275\u0275resolveBody: Hd, \u0275\u0275setComponentScope: TC, \u0275\u0275setNgModuleScope: MC, \u0275\u0275registerNgModuleType: If, \u0275\u0275getComponentDepsFactory: zC, \u0275setClassDebugInfo: QC, \u0275\u0275declareLet: Np, \u0275\u0275storeLet: sC, \u0275\u0275readContextLet: aC, \u0275\u0275attachSourceLocations: cC, \u0275\u0275interpolate: lC, \u0275\u0275interpolate1: uC, \u0275\u0275interpolate2: dC, \u0275\u0275interpolate3: fC, \u0275\u0275interpolate4: pC, \u0275\u0275interpolate5: hC, \u0275\u0275interpolate6: gC, \u0275\u0275interpolate7: mC, \u0275\u0275interpolate8: yC, \u0275\u0275interpolateV: vC, \u0275\u0275sanitizeHtml: Vy, \u0275\u0275sanitizeStyle: Hy, \u0275\u0275sanitizeResourceUrl: Vd, \u0275\u0275sanitizeScript: By, \u0275\u0275validateAttribute: Gy, \u0275\u0275sanitizeUrl: jd, \u0275\u0275sanitizeUrlOrResourceUrl: qy, \u0275\u0275trustConstantHtml: Uy, \u0275\u0275trustConstantResourceUrl: $y, forwardRef: er, resolveForwardRef: P, \u0275\u0275twoWayProperty: Tp, \u0275\u0275twoWayBindingSet: rC, \u0275\u0275twoWayListener: Mp, \u0275\u0275replaceMetadata: YC, \u0275\u0275getReplaceMetadataURL: ZC }, to = null;
function KC(e) { to !== null && (e.defaultEncapsulation !== to.defaultEncapsulation || e.preserveWhitespaces !== to.preserveWhitespaces) || (to = e); }
function Bk() { return to; }
function Uk() { to = null; }
var kr = [];
function $k(e, t) { kr.push({ moduleType: e, ngModule: t }); }
var uu = !1;
function JC() { if (!uu) {
    uu = !0;
    try {
        for (let e = kr.length - 1; e >= 0; e--) {
            let { moduleType: t, ngModule: n } = kr[e];
            n.declarations && n.declarations.every(XC) && (kr.splice(e, 1), Qk(t, n));
        }
    }
    finally {
        uu = !1;
    }
} }
function XC(e) { return Array.isArray(e) ? e.every(XC) : !!P(e); }
function eT(e, t = {}) { tT(e, t), t.id !== void 0 && If(e, t.id), $k(e, t); }
function tT(e, t, n = !1) { let o = Qe(t.declarations || j), r = null; Object.defineProperty(e, Fi, { configurable: !0, get: () => (r === null && (r = ie({ usage: 0, kind: "NgModule", type: e }).compileNgModule(Ee, `ng:///${e.name}/\u0275mod.js`, { type: e, bootstrap: Qe(t.bootstrap || j).map(P), declarations: o.map(P), imports: Qe(t.imports || j).map(P).map(om), exports: Qe(t.exports || j).map(P).map(om), schemas: t.schemas ? Qe(t.schemas) : null, id: t.id || null }), r.schemas || (r.schemas = [])), r) }); let i = null; Object.defineProperty(e, nt, { get: () => { if (i === null) {
        let a = ie({ usage: 0, kind: "NgModule", type: e });
        i = a.compileFactory(Ee, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, deps: ia(e), target: a.FactoryTarget.NgModule, typeArgumentCount: 0 });
    } return i; }, configurable: !1 }); let s = null; Object.defineProperty(e, Qo, { get: () => { if (s === null) {
        let a = { name: e.name, type: e, providers: t.providers || j, imports: [(t.imports || j).map(P), (t.exports || j).map(P)] };
        s = ie({ usage: 0, kind: "NgModule", type: e }).compileInjector(Ee, `ng:///${e.name}/\u0275inj.js`, a);
    } return s; }, configurable: !1 }); }
function qk(e, t) { let n = `Unexpected "${Re(e)}" found in the "declarations" array of the`, o = `"${Re(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`; return `${n} ${t}, ${o}`; }
var Gk = new WeakMap, Wk = new WeakMap;
function zk() { Gk = new WeakMap, Wk = new WeakMap, kr.length = 0, OA.clear(); }
function Qk(e, t) { let n = Qe(t.declarations || j), o = _p(e); n.forEach(r => { if (r = P(r), r.hasOwnProperty(on)) {
    let s = W(r);
    wp(s, o);
}
else
    !r.hasOwnProperty(rr) && !r.hasOwnProperty(ir) && (r.ngSelectorScope = e); }); }
function wp(e, t) { e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(on) ? W(n) : Ae(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => ze(n)), e.schemas = t.schemas, e.tView = null; }
function _p(e) { if (hn(e)) {
    let t = po.getNgModuleScope(e), n = ji(e);
    return Q({ schemas: n.schemas || null }, t);
}
else if (sr(e)) {
    if ((W(e) || Ae(e)) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set([e]), pipes: new Set } };
    if (ze(e) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set, pipes: new Set([e]) } };
} throw new Error(`${e.name} does not have a module def (\u0275mod property)`); }
function om(e) { return lf(e) ? e.ngModule : e; }
var du = 0;
function nT(e, t) {
    let n = null;
    DA(e, t), rT(e, t), Object.defineProperty(e, on, { get: () => {
            if (n === null) {
                let o = ie({ usage: 0, kind: "component", type: e });
                if (SE(t)) {
                    let u = [`Component '${e.name}' is not resolved:`];
                    throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
                }
                let r = Bk(), i = t.preserveWhitespaces;
                i === void 0 && (r !== null && r.preserveWhitespaces !== void 0 ? i = r.preserveWhitespaces : i = !1);
                let s = t.encapsulation;
                s === void 0 && (r !== null && r.defaultEncapsulation !== void 0 ? s = r.defaultEncapsulation : s = Be.Emulated);
                let a = t.templateUrl || `ng:///${e.name}/template.html`, c = iT(e, t), l = _e(Q({}, c), { typeSourceSpan: o.createParseSourceSpan("Component", e.name, a), template: t.template || "", preserveWhitespaces: i, styles: typeof t.styles == "string" ? [t.styles] : t.styles || j, animations: t.animations, declarations: [], changeDetection: t.changeDetection, encapsulation: s, viewProviders: t.viewProviders || null, hasDirectiveDependencies: !c.isStandalone || t.imports != null && t.imports.length > 0 });
                du++;
                try {
                    if (l.usesInheritance && sT(e), n = o.compileComponent(Ee, a, l), l.isStandalone) {
                        let u = Qe(t.imports || j), { directiveDefs: d, pipeDefs: f } = Zk(e, u);
                        n.directiveDefs = d, n.pipeDefs = f, n.dependencies = () => u.map(P);
                    }
                }
                finally {
                    du--;
                }
                if (du === 0 && JC(), Yk(e)) {
                    let u = _p(e.ngSelectorScope);
                    wp(n, u);
                }
                if (t.schemas)
                    if (l.isStandalone)
                        n.schemas = t.schemas;
                    else
                        throw new Error(`The 'schemas' was specified for the ${Re(e)} but is only valid on a component that is standalone.`);
                else
                    l.isStandalone && (n.schemas = []);
            }
            return n;
        }, set: o => { n = o; }, configurable: !1 });
}
function Zk(e, t) { return { directiveDefs: () => Mr(e) ? [...po.getStandaloneComponentScope(e, t).compilation.directives].map(i => W(i) || Ae(i)).filter(i => i !== null) : [], pipeDefs: () => Mr(e) ? [...po.getStandaloneComponentScope(e, t).compilation.pipes].map(i => ze(i)).filter(i => i !== null) : [] }; }
function Yk(e) { return e.ngSelectorScope !== void 0; }
function Sp(e, t) { let n = null; rT(e, t || {}), Object.defineProperty(e, rr, { get: () => { if (n === null) {
        let o = oT(e, t || {});
        n = ie({ usage: 0, kind: "directive", type: e }).compileDirective(Ee, o.sourceMapUrl, o.metadata);
    } return n; }, configurable: !1 }); }
function oT(e, t) { let n = e && e.name, o = `ng:///${n}/\u0275dir.js`, r = ie({ usage: 0, kind: "directive", type: e }), i = iT(e, t); return i.typeSourceSpan = r.createParseSourceSpan("Directive", n, o), i.usesInheritance && sT(e), { metadata: i, sourceMapUrl: o }; }
function rT(e, t) { let n = null; Object.defineProperty(e, nt, { get: () => { if (n === null) {
        let o = oT(e, t), r = ie({ usage: 0, kind: "directive", type: e });
        n = r.compileFactory(Ee, `ng:///${e.name}/\u0275fac.js`, { name: o.metadata.name, type: o.metadata.type, typeArgumentCount: 0, deps: ia(e), target: r.FactoryTarget.Directive });
    } return n; }, configurable: !1 }); }
function Kk(e) { return Object.getPrototypeOf(e.prototype) === Object.prototype; }
function iT(e, t) { let n = gd(), o = n.ownPropMetadata(e); return { name: e.name, type: e, selector: t.selector !== void 0 ? t.selector : null, host: t.host || Pe, propMetadata: o, inputs: t.inputs || j, outputs: t.outputs || j, queries: rm(e, o, aT), lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") }, typeSourceSpan: null, usesInheritance: !Kk(e), exportAs: ex(t.exportAs), providers: t.providers || null, viewQueries: rm(e, o, cT), isStandalone: t.standalone === void 0 ? !0 : !!t.standalone, isSignal: !!t.signals, hostDirectives: t.hostDirectives?.map(r => typeof r == "function" ? { directive: r } : r) || null }; }
function sT(e) { let t = Object.prototype, n = Object.getPrototypeOf(e.prototype).constructor; for (; n && n !== t;)
    !Ae(n) && !W(n) && nx(n) && Sp(n, null), n = Object.getPrototypeOf(n); }
function Jk(e) { return typeof e == "string" ? uT(e) : P(e); }
function Xk(e, t) { return { propertyName: e, predicate: Jk(t.selector), descendants: t.descendants, first: t.first, read: t.read ? t.read : null, static: !!t.static, emitDistinctChangesOnly: !!t.emitDistinctChangesOnly, isSignal: !!t.isSignal }; }
function rm(e, t, n) { let o = []; for (let r in t)
    if (t.hasOwnProperty(r)) {
        let i = t[r];
        i.forEach(s => { if (n(s)) {
            if (!s.selector)
                throw new Error(`Can't construct a query for the property "${r}" of "${Re(e)}" since the query selector wasn't defined.`);
            if (i.some(lT))
                throw new Error("Cannot combine @Input decorators with query decorators");
            o.push(Xk(r, s));
        } });
    } return o; }
function ex(e) { return e === void 0 ? null : uT(e); }
function aT(e) { let t = e.ngMetadataName; return t === "ContentChild" || t === "ContentChildren"; }
function cT(e) { let t = e.ngMetadataName; return t === "ViewChild" || t === "ViewChildren"; }
function lT(e) { return e.ngMetadataName === "Input"; }
function uT(e) { return e.split(",").map(t => t.trim()); }
var tx = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
function nx(e) { let t = gd(); if (tx.some(o => t.hasLifecycleHook(e, o)))
    return !0; let n = t.propMetadata(e); for (let o in n) {
    let r = n[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i], a = s.ngMetadataName;
        if (lT(s) || aT(s) || cT(s) || a === "Output" || a === "HostBinding" || a === "HostListener")
            return !0;
    }
} return !1; }
function dT(e, t) { let n = null, o = null; Object.defineProperty(e, nt, { get: () => { if (o === null) {
        let r = im(e, t), i = ie({ usage: 0, kind: "pipe", type: r.type });
        o = i.compileFactory(Ee, `ng:///${r.name}/\u0275fac.js`, { name: r.name, type: r.type, typeArgumentCount: 0, deps: ia(e), target: i.FactoryTarget.Pipe });
    } return o; }, configurable: !1 }), Object.defineProperty(e, ir, { get: () => { if (n === null) {
        let r = im(e, t);
        n = ie({ usage: 0, kind: "pipe", type: r.type }).compilePipe(Ee, `ng:///${r.name}/\u0275pipe.js`, r);
    } return n; }, configurable: !1 }); }
function im(e, t) { return { type: e, name: e.name, pipeName: t.name, pure: t.pure !== void 0 ? t.pure : !0, isStandalone: t.standalone === void 0 ? !0 : !!t.standalone }; }
var fT = Zr("Directive", (e = {}) => e, void 0, void 0, (e, t) => Sp(e, t)), ox = Zr("Component", (e = {}) => Q({ changeDetection: sa.Default }, e), fT, void 0, (e, t) => nT(e, t)), rx = Zr("Pipe", e => Q({ pure: !0 }, e), void 0, void 0, (e, t) => dT(e, t)), ix = St("Input", e => e ? typeof e == "string" ? { alias: e } : e : {}), sx = St("Output", e => ({ alias: e })), ax = St("HostBinding", e => ({ hostPropertyName: e })), cx = St("HostListener", (e, t) => ({ eventName: e, args: t })), lx = Zr("NgModule", e => e, void 0, void 0, (e, t) => eT(e, t)), na = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) { this.ngModuleFactory = t, this.componentFactories = n; }
}, ux = (() => { class e {
    compileModuleSync(n) { return new yo(n); }
    compileModuleAsync(n) { return Promise.resolve(this.compileModuleSync(n)); }
    compileModuleAndAllComponentsSync(n) { let o = this.compileModuleSync(n), r = sn(n), i = Xn(r.declarations).reduce((s, a) => { let c = W(a); return c && s.push(new Zt(c)), s; }, []); return new na(o, i); }
    compileModuleAndAllComponentsAsync(n) { return Promise.resolve(this.compileModuleAndAllComponentsSync(n)); }
    clearCache() { }
    clearCacheFor(n) { }
    getModuleId(n) { }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), pT = new M(""), ud = class {
};
var hT = (() => { class e {
    applicationErrorHandler = E(Dt);
    appRef = E($e);
    taskService = E(It);
    ngZone = E(q);
    zonelessEnabled = E(Wn);
    tracing = E(Po, { optional: !0 });
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new IN;
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(Ko) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (E(rs, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() { this.subscriptions.add(this.appRef.afterTick.subscribe(() => { let n = this.taskService.add(); if (!this.runningTick && (this.cleanup(), !this.zonelessEnabled || this.appRef.includeAllTestViews)) {
        this.taskService.remove(n);
        return;
    } this.switchToMicrotaskScheduler(), this.taskService.remove(n); })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => { this.runningTick || this.cleanup(); })); }
    switchToMicrotaskScheduler() { this.ngZone.runOutsideAngular(() => { let n = this.taskService.add(); this.useMicrotaskScheduler = !0, queueMicrotask(() => { this.useMicrotaskScheduler = !1, this.taskService.remove(n); }); }); }
    notify(n) { if (!this.zonelessEnabled && n === 5)
        return; switch (n) {
        case 0: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
            this.appRef.dirtyFlags |= 4;
            break;
        }
        case 6: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 12: {
            this.appRef.dirtyFlags |= 16;
            break;
        }
        case 13: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 11: break;
        case 9:
        case 8:
        case 7:
        case 10:
        default: this.appRef.dirtyFlags |= 8;
    } if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null, !this.shouldScheduleTick())
        return; let o = this.useMicrotaskScheduler ? Bh : Vl; this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => o(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => o(() => this.tick())); }
    shouldScheduleTick() { return !(this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(Ko + this.angularZoneId)); }
    tick() { if (this.runningTick || this.appRef.destroyed)
        return; if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
    } !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1); let n = this.taskService.add(); try {
        this.ngZone.run(() => { this.runningTick = !0, this.appRef._tick(); }, void 0, this.schedulerTickApplyArgs);
    }
    catch (o) {
        this.applicationErrorHandler(o);
    }
    finally {
        this.taskService.remove(n), this.cleanup();
    } }
    ngOnDestroy() { this.subscriptions.unsubscribe(), this.cleanup(); }
    cleanup() { if (this.runningTick = !1, this.cancelScheduledCallback?.(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
        let n = this.pendingRenderTaskId;
        this.pendingRenderTaskId = null, this.taskService.remove(n);
    } }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function dx() { return X("NgZoneless"), Ze([...dc(), []]); }
function dc() { return [{ provide: We, useExisting: hT }, { provide: q, useClass: Jo }, { provide: Wn, useValue: !0 }]; }
function fx() { return typeof $localize < "u" && $localize.locale || vi; }
var bp = new M("", { factory: () => E(bp, { optional: !0, skipSelf: !0 }) || fx() }), px = new M("", { factory: () => SO }), hx = new M(""), gx = new M(""), gT = (function (e) { return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e; })(gT || {}), dd = class {
    name;
    callback;
    constructor(t, n) { this.name = t, this.callback = n; }
};
function mx(e) { return e.map(t => t.nativeElement); }
var Qr = class {
    nativeNode;
    constructor(t) { this.nativeNode = t; }
    get parent() { let t = this.nativeNode.parentNode; return t ? new Sn(t) : null; }
    get injector() { return pw(this.nativeNode); }
    get componentInstance() { let t = this.nativeNode; return t && (ng(t) || fw(t)); }
    get context() { return ng(this.nativeNode) || dw(this.nativeNode); }
    get listeners() { return vw(this.nativeNode).filter(t => t.type === "dom"); }
    get references() { return mw(this.nativeNode); }
    get providerTokens() { return hw(this.nativeNode); }
}, Sn = class extends Qr {
    constructor(t) { super(t); }
    get nativeElement() { return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null; }
    get name() { let t = we(this.nativeNode), n = t ? t.lView : null; return n !== null ? n[y].data[t.nodeIndex].value : this.nativeNode.nodeName; }
    get properties() { let t = we(this.nativeNode), n = t ? t.lView : null; if (n === null)
        return {}; let o = n[y].data, r = o[t.nodeIndex], i = {}; return yx(this.nativeElement, i), Ex(i, r, n, o), i; }
    get attributes() { let t = {}, n = this.nativeElement; if (!n)
        return t; let o = we(n), r = o ? o.lView : null; if (r === null)
        return {}; let i = r[y].data[o.nodeIndex].attrs, s = []; if (i) {
        let a = 0;
        for (; a < i.length;) {
            let c = i[a];
            if (typeof c != "string")
                break;
            let l = i[a + 1];
            t[c] = l, s.push(c.toLowerCase()), a += 2;
        }
    } for (let a of n.attributes)
        s.includes(a.name) || (t[a.name] = a.value); return t; }
    get styles() { return this.nativeElement?.style ?? {}; }
    get classes() { let t = {}, o = this.nativeElement.className; return (typeof o != "string" ? o.baseVal.split(" ") : o.split(" ")).forEach(i => t[i] = !0), t; }
    get childNodes() { let t = this.nativeNode.childNodes, n = []; for (let o = 0; o < t.length; o++) {
        let r = t[o];
        n.push(To(r));
    } return n; }
    get children() { let t = this.nativeElement; if (!t)
        return []; let n = t.children, o = []; for (let r = 0; r < n.length; r++) {
        let i = n[r];
        o.push(To(i));
    } return o; }
    query(t) { return this.queryAll(t)[0] || null; }
    queryAll(t) { let n = []; return sm(this, t, n, !0), n; }
    queryAllNodes(t) { let n = []; return sm(this, t, n, !1), n; }
    triggerEventHandler(t, n) { let o = this.nativeNode, r = []; this.listeners.forEach(i => { if (i.name === t) {
        let s = i.callback;
        s.call(o, n), r.push(s);
    } }), typeof o.eventListeners == "function" && o.eventListeners(t).forEach(i => { if (i.toString().indexOf("__ngUnwrap__") !== -1) {
        let s = i("__ngUnwrap__");
        return r.indexOf(s) === -1 && s.call(o, n);
    } }); }
};
function yx(e, t) { if (e) {
    let n = Object.getPrototypeOf(e), o = Node.prototype;
    for (; n !== null && n !== o;) {
        let r = Object.getOwnPropertyDescriptors(n);
        for (let i in r)
            if (!i.startsWith("__") && !i.startsWith("on")) {
                let s = e[i];
                vx(s) && (t[i] = s);
            }
        n = Object.getPrototypeOf(n);
    }
} }
function vx(e) { return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null; }
function sm(e, t, n, o) { let r = we(e.nativeNode), i = r ? r.lView : null; if (i !== null) {
    let s = i[y].data[r.nodeIndex];
    gn(s, i, t, n, o, e.nativeNode);
}
else
    Ap(e.nativeNode, t, n, o); }
function gn(e, t, n, o, r, i) { let s = _h(e, t); if (e.type & 11) {
    if (fu(s, n, o, r, i), De(e)) {
        let c = ye(e.index, t);
        c && c[y].firstChild && gn(c[y].firstChild, c, n, o, r, i);
    }
    else
        e.child && gn(e.child, t, n, o, r, i), s && Ap(s, n, o, r);
    let a = t[e.index];
    J(a) && am(a, n, o, r, i);
}
else if (e.type & 4) {
    let a = t[e.index];
    fu(a[Ke], n, o, r, i), am(a, n, o, r, i);
}
else if (e.type & 16) {
    let a = t[te], l = a[le].projection[e.projection];
    if (Array.isArray(l))
        for (let u of l)
            fu(u, n, o, r, i);
    else if (l) {
        let u = a[Z], d = u[y].data[l.index];
        gn(d, u, n, o, r, i);
    }
}
else
    e.child && gn(e.child, t, n, o, r, i); if (i !== s) {
    let a = e.flags & 2 ? e.projectionNext : e.next;
    a && gn(a, t, n, o, r, i);
} }
function am(e, t, n, o, r) { for (let i = G; i < e.length; i++) {
    let s = e[i], a = s[y].firstChild;
    a && gn(a, s, t, n, o, r);
} }
function fu(e, t, n, o, r) { if (r !== e) {
    let i = To(e);
    if (!i)
        return;
    (o && i instanceof Sn && t(i) && n.indexOf(i) === -1 || !o && t(i) && n.indexOf(i) === -1) && n.push(i);
} }
function Ap(e, t, n, o) { let r = e.childNodes, i = r.length; for (let s = 0; s < i; s++) {
    let a = r[s], c = To(a);
    c && ((o && c instanceof Sn && t(c) && n.indexOf(c) === -1 || !o && t(c) && n.indexOf(c) === -1) && n.push(c), Ap(a, t, n, o));
} }
function Ex(e, t, n, o) { let r = t.propertyBindings; if (r !== null)
    for (let i = 0; i < r.length; i++) {
        let s = r[i], c = o[s].split(P_), l = c[0];
        if (c.length > 1) {
            let u = c[1];
            for (let d = 1; d < c.length - 1; d++)
                u += R(n[s + d - 1]) + c[d + 1];
            e[l] = u;
        }
        else
            e[l] = n[s];
    } }
var pu = "__ng_debug__";
function To(e) { return e instanceof Node ? (e.hasOwnProperty(pu) || (e[pu] = e.nodeType == Node.ELEMENT_NODE ? new Sn(e) : new Qr(e)), e[pu]) : null; }
var Di = class {
    destroyed = !1;
    listeners = null;
    errorHandler = E(mt, { optional: !0 });
    destroyRef = E(Ve);
    constructor() { this.destroyRef.onDestroy(() => { this.destroyed = !0, this.listeners = null; }); }
    subscribe(t) { if (this.destroyed)
        throw new C(953, !1); return (this.listeners ??= []).push(t), { unsubscribe: () => { let n = this.listeners?.indexOf(t); n !== void 0 && n !== -1 && this.listeners?.splice(n, 1); } }; }
    emit(t) { if (this.destroyed) {
        console.warn(Xo(953, !1));
        return;
    } if (this.listeners === null)
        return; let n = O(null); try {
        for (let o of this.listeners)
            try {
                o(t);
            }
            catch (r) {
                this.errorHandler?.handleError(r);
            }
    }
    finally {
        O(n);
    } }
};
function Ix(e) { return e.destroyRef; }
function kn(e, t) { return Si(e, t?.equal); }
var Dx = e => e;
function Rp(e, t) { if (typeof e == "function") {
    let n = kc(e, Dx, t?.equal);
    return mT(n, t?.debugName);
}
else {
    let n = kc(e.source, e.computation, e.equal);
    return mT(n, e.debugName);
} }
function mT(e, t) { let n = e[ae], o = e; return o.set = r => ch(n, r), o.update = r => lh(n, r), o.asReadonly = qn.bind(e), o; }
function Cx(e) { let t = e.request, n = e.params ?? t ?? (() => null); return new fc(n, Mx(e), e.defaultValue, e.equal ? Tx(e.equal) : void 0, e.debugName, e.injector ?? E(ce)); }
var Op = class {
    value;
    isLoading;
    constructor(t, n) { this.value = t, this.value.set = this.set.bind(this), this.value.update = this.update.bind(this), this.value.asReadonly = qn, this.isLoading = kn(() => this.status() === "loading" || this.status() === "reloading", void 0); }
    isError = kn(() => this.status() === "error");
    update(t) { this.set(t(Te(this.value))); }
    isValueDefined = kn(() => this.isError() ? !1 : this.value() !== void 0);
    hasValue() { return this.isValueDefined(); }
    asReadonly() { return this; }
}, fc = class extends Op {
    loaderFn;
    equal;
    debugName;
    pendingTasks;
    state;
    extRequest;
    effectRef;
    pendingController;
    resolvePendingTask = void 0;
    destroyed = !1;
    unregisterOnDestroy;
    status;
    error;
    constructor(t, n, o, r, i, s) { super(kn(() => { let a = this.state().stream?.(); if (!a || this.state().status === "loading" && this.error())
        return o; if (!kp(a))
        throw new xp(this.error()); return a.value; }, { equal: r }), i), this.loaderFn = n, this.equal = r, this.debugName = i, this.extRequest = Rp({ source: t, computation: a => ({ request: a, reload: 0 }) }), this.state = Rp({ source: this.extRequest, computation: (a, c) => { let l = a.request === void 0 ? "idle" : "loading"; return c ? { extRequest: a, status: l, previousStatus: yT(c.value), stream: c.value.extRequest.request === a.request ? c.value.stream : void 0 } : { extRequest: a, status: l, previousStatus: "idle", stream: void 0 }; } }), this.effectRef = $l(this.loadEffect.bind(this), { injector: s, manualCleanup: !0 }), this.pendingTasks = s.get(vr), this.unregisterOnDestroy = s.get(Ve).onDestroy(() => this.destroy()), this.status = kn(() => yT(this.state()), void 0), this.error = kn(() => { let a = this.state().stream?.(); return a && !kp(a) ? a.error : void 0; }, void 0); }
    set(t) { if (this.destroyed)
        return; let n = Te(this.error), o = Te(this.state); if (!n) {
        let r = Te(this.value);
        if (o.status === "local" && (this.equal ? this.equal(r, t) : r === t))
            return;
    } this.state.set({ extRequest: o.extRequest, status: "local", previousStatus: "local", stream: qt({ value: t }, void 0) }), this.abortInProgressLoad(); }
    reload() { let { status: t } = Te(this.state); return t === "idle" || t === "loading" ? !1 : (this.extRequest.update(({ request: n, reload: o }) => ({ request: n, reload: o + 1 })), !0); }
    destroy() { this.destroyed = !0, this.unregisterOnDestroy(), this.effectRef.destroy(), this.abortInProgressLoad(), this.state.set({ extRequest: { request: void 0, reload: 0 }, status: "idle", previousStatus: "idle", stream: void 0 }); }
    loadEffect() { return Ge(this, null, function* () { let t = this.extRequest(), { status: n, previousStatus: o } = Te(this.state); if (t.request === void 0)
        return; if (n !== "loading")
        return; this.abortInProgressLoad(); let r = this.resolvePendingTask = this.pendingTasks.add(), { signal: i } = this.pendingController = new AbortController; try {
        let s = yield Te(() => this.loaderFn({ params: t.request, request: t.request, abortSignal: i, previous: { status: o } }));
        if (i.aborted || Te(this.extRequest) !== t)
            return;
        this.state.set({ extRequest: t, status: "resolved", previousStatus: "resolved", stream: s });
    }
    catch (s) {
        if (i.aborted || Te(this.extRequest) !== t)
            return;
        this.state.set({ extRequest: t, status: "resolved", previousStatus: "error", stream: qt({ error: Lp(s) }, void 0) });
    }
    finally {
        r?.(), r = void 0;
    } }); }
    abortInProgressLoad() { Te(() => this.pendingController?.abort()), this.pendingController = void 0, this.resolvePendingTask?.(), this.resolvePendingTask = void 0; }
};
function Tx(e) { return (t, n) => t === void 0 || n === void 0 ? t === n : e(t, n); }
function Mx(e) { return Nx(e) ? e.stream : t => Ge(null, null, function* () { try {
    return qt({ value: yield e.loader(t) }, void 0);
}
catch (n) {
    return qt({ error: Lp(n) }, void 0);
} }); }
function Nx(e) { return !!e.stream; }
function yT(e) { switch (e.status) {
    case "loading": return e.extRequest.reload === 0 ? "loading" : "reloading";
    case "resolved": return kp(e.stream()) ? "resolved" : "error";
    default: return e.status;
} }
function kp(e) { return e.error === void 0; }
function Lp(e) { return wx(e) ? e : new Pp(e); }
function wx(e) { return e instanceof Error || typeof e == "object" && typeof e.name == "string" && typeof e.message == "string"; }
var xp = class extends Error {
    constructor(t) { super(t.message, { cause: t }); }
}, Pp = class extends Error {
    constructor(t) { super(String(t), { cause: t }); }
};
import { Subscription as aP } from "rxjs";
var Bp = { JSACTION: "__jsaction", OWNER: "__owner" }, DT = {};
function _x(e) { return e[Bp.JSACTION]; }
function vT(e, t) { e[Bp.JSACTION] = t; }
function Sx(e) { return DT[e]; }
function bx(e, t) { DT[e] = t; }
var N = { AUXCLICK: "auxclick", CHANGE: "change", CLICK: "click", CLICKMOD: "clickmod", CLICKONLY: "clickonly", DBLCLICK: "dblclick", FOCUS: "focus", FOCUSIN: "focusin", BLUR: "blur", FOCUSOUT: "focusout", SUBMIT: "submit", KEYDOWN: "keydown", KEYPRESS: "keypress", KEYUP: "keyup", MOUSEUP: "mouseup", MOUSEDOWN: "mousedown", MOUSEOVER: "mouseover", MOUSEOUT: "mouseout", MOUSEENTER: "mouseenter", MOUSELEAVE: "mouseleave", MOUSEMOVE: "mousemove", POINTERUP: "pointerup", POINTERDOWN: "pointerdown", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", POINTERMOVE: "pointermove", POINTERCANCEL: "pointercancel", GOTPOINTERCAPTURE: "gotpointercapture", LOSTPOINTERCAPTURE: "lostpointercapture", ERROR: "error", LOAD: "load", UNLOAD: "unload", TOUCHSTART: "touchstart", TOUCHEND: "touchend", TOUCHMOVE: "touchmove", INPUT: "input", SCROLL: "scroll", TOGGLE: "toggle", CUSTOM: "_custom" }, Ax = [N.MOUSEENTER, N.MOUSELEAVE, "pointerenter", "pointerleave"], Rx = [N.CLICK, N.DBLCLICK, N.FOCUSIN, N.FOCUSOUT, N.KEYDOWN, N.KEYUP, N.KEYPRESS, N.MOUSEOVER, N.MOUSEOUT, N.SUBMIT, N.TOUCHSTART, N.TOUCHEND, N.TOUCHMOVE, "touchcancel", "auxclick", "change", "compositionstart", "compositionupdate", "compositionend", "beforeinput", "input", "select", "copy", "cut", "paste", "mousedown", "mouseup", "wheel", "contextmenu", "dragover", "dragenter", "dragleave", "drop", "dragstart", "dragend", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "ended", "loadedmetadata", "pagehide", "pageshow", "visibilitychange", "beforematch"], CT = [N.FOCUS, N.BLUR, N.ERROR, N.LOAD, N.TOGGLE], vc = e => CT.indexOf(e) >= 0, Ox = Rx.concat(CT), TT = e => Ox.indexOf(e) >= 0;
function kx(e) { return e === N.MOUSEENTER ? N.MOUSEOVER : e === N.MOUSELEAVE ? N.MOUSEOUT : e === N.POINTERENTER ? N.POINTEROVER : e === N.POINTERLEAVE ? N.POINTEROUT : e; }
function xx(e, t, n, o) { let r = !1; vc(t) && (r = !0); let i = typeof o == "boolean" ? { capture: r, passive: o } : r; return e.addEventListener(t, n, i), { eventType: t, handler: n, capture: r, passive: o }; }
function Px(e, t) { if (e.removeEventListener) {
    let n = typeof t.passive == "boolean" ? { capture: t.capture } : t.capture;
    e.removeEventListener(t.eventType, t.handler, n);
}
else
    e.detachEvent && e.detachEvent(`on${t.eventType}`, t.handler); }
function Lx(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1; }
var ET = typeof navigator < "u" && /Macintosh/.test(navigator.userAgent);
function Fx(e) { return e.which === 2 || e.which == null && e.button === 4; }
function jx(e) { return ET && e.metaKey || !ET && e.ctrlKey || Fx(e) || e.shiftKey; }
function Vx(e, t, n) { let o = e.relatedTarget; return (e.type === N.MOUSEOVER && t === N.MOUSEENTER || e.type === N.MOUSEOUT && t === N.MOUSELEAVE || e.type === N.POINTEROVER && t === N.POINTERENTER || e.type === N.POINTEROUT && t === N.POINTERLEAVE) && (!o || o !== n && !n.contains(o)); }
function Hx(e, t) { let n = {}; for (let o in e) {
    if (o === "srcElement" || o === "target")
        continue;
    let r = o, i = e[r];
    typeof i != "function" && (n[r] = i);
} return e.type === N.MOUSEOVER ? n.type = N.MOUSEENTER : e.type === N.MOUSEOUT ? n.type = N.MOUSELEAVE : e.type === N.POINTEROVER ? n.type = N.POINTERENTER : n.type = N.POINTERLEAVE, n.target = n.srcElement = t, n.bubbles = !1, n._originalEvent = e, n; }
var Bx = typeof navigator < "u" && /iPhone|iPad|iPod/.test(navigator.userAgent), mc = class {
    element;
    handlerInfos = [];
    constructor(t) { this.element = t; }
    addEventListener(t, n, o) { Bx && (this.element.style.cursor = "pointer"), this.handlerInfos.push(xx(this.element, t, n(this.element), o)); }
    cleanUp() { for (let t = 0; t < this.handlerInfos.length; t++)
        Px(this.element, this.handlerInfos[t]); this.handlerInfos = []; }
}, Ux = { NAMESPACE_ACTION_SEPARATOR: ".", EVENT_ACTION_SEPARATOR: ":" };
function Kt(e) { return e.eventType; }
function Up(e, t) { e.eventType = t; }
function hc(e) { return e.event; }
function MT(e, t) { e.event = t; }
function NT(e) { return e.targetElement; }
function wT(e, t) { e.targetElement = t; }
function _T(e) { return e.eic; }
function $x(e, t) { e.eic = t; }
function qx(e) { return e.timeStamp; }
function Gx(e, t) { e.timeStamp = t; }
function gc(e) { return e.eia; }
function ST(e, t, n) { e.eia = [t, n]; }
function Fp(e) { e.eia = void 0; }
function pc(e) { return e[1]; }
function Wx(e) { return e.eirp; }
function bT(e, t) { e.eirp = t; }
function AT(e) { return e.eir; }
function RT(e, t) { e.eir = t; }
function OT(e) { return { eventType: e.eventType, event: e.event, targetElement: e.targetElement, eic: e.eic, eia: e.eia, timeStamp: e.timeStamp, eirp: e.eirp, eiack: e.eiack, eir: e.eir }; }
function zx(e, t, n, o, r, i, s, a) { return { eventType: e, event: t, targetElement: n, eic: o, timeStamp: r, eia: i, eirp: s, eiack: a }; }
var jp = class e {
    eventInfo;
    constructor(t) { this.eventInfo = t; }
    getEventType() { return Kt(this.eventInfo); }
    setEventType(t) { Up(this.eventInfo, t); }
    getEvent() { return hc(this.eventInfo); }
    setEvent(t) { MT(this.eventInfo, t); }
    getTargetElement() { return NT(this.eventInfo); }
    setTargetElement(t) { wT(this.eventInfo, t); }
    getContainer() { return _T(this.eventInfo); }
    setContainer(t) { $x(this.eventInfo, t); }
    getTimestamp() { return qx(this.eventInfo); }
    setTimestamp(t) { Gx(this.eventInfo, t); }
    getAction() { let t = gc(this.eventInfo); if (t)
        return { name: t[0], element: t[1] }; }
    setAction(t) { if (!t) {
        Fp(this.eventInfo);
        return;
    } ST(this.eventInfo, t.name, t.element); }
    getIsReplay() { return Wx(this.eventInfo); }
    setIsReplay(t) { bT(this.eventInfo, t); }
    getResolved() { return AT(this.eventInfo); }
    setResolved(t) { RT(this.eventInfo, t); }
    clone() { return new e(OT(this.eventInfo)); }
}, Qx = {}, Zx = /\s*;\s*/, Yx = N.CLICK, Vp = class {
    a11yClickSupport = !1;
    clickModSupport = !0;
    syntheticMouseEventSupport;
    updateEventInfoForA11yClick = void 0;
    preventDefaultForA11yClick = void 0;
    populateClickOnlyAction = void 0;
    constructor({ syntheticMouseEventSupport: t = !1, clickModSupport: n = !0 } = {}) { this.syntheticMouseEventSupport = t, this.clickModSupport = n; }
    resolveEventType(t) { this.clickModSupport && Kt(t) === N.CLICK && jx(hc(t)) ? Up(t, N.CLICKMOD) : this.a11yClickSupport && this.updateEventInfoForA11yClick(t); }
    resolveAction(t) { AT(t) || (this.populateAction(t, NT(t)), RT(t, !0)); }
    resolveParentAction(t) { let n = gc(t), o = n && pc(n); Fp(t); let r = o && this.getParentNode(o); r && this.populateAction(t, r); }
    populateAction(t, n) { let o = n; for (; o && o !== _T(t) && (o.nodeType === Node.ELEMENT_NODE && this.populateActionOnElement(o, t), !gc(t));)
        o = this.getParentNode(o); let r = gc(t); if (r && (this.a11yClickSupport && this.preventDefaultForA11yClick(t), this.syntheticMouseEventSupport && (Kt(t) === N.MOUSEENTER || Kt(t) === N.MOUSELEAVE || Kt(t) === N.POINTERENTER || Kt(t) === N.POINTERLEAVE)))
        if (Vx(hc(t), Kt(t), pc(r))) {
            let i = Hx(hc(t), pc(r));
            MT(t, i), wT(t, pc(r));
        }
        else
            Fp(t); }
    getParentNode(t) { let n = t[Bp.OWNER]; if (n)
        return n; let o = t.parentNode; return o?.nodeName === "#document-fragment" ? o?.host ?? null : o; }
    populateActionOnElement(t, n) { let o = this.parseActions(t), r = o[Kt(n)]; r !== void 0 && ST(n, r, t), this.a11yClickSupport && this.populateClickOnlyAction(t, n, o); }
    parseActions(t) { let n = _x(t); if (!n) {
        let o = t.getAttribute(zn.JSACTION);
        if (!o)
            n = Qx, vT(t, n);
        else {
            if (n = Sx(o), !n) {
                n = {};
                let r = o.split(Zx);
                for (let i = 0; i < r.length; i++) {
                    let s = r[i];
                    if (!s)
                        continue;
                    let a = s.indexOf(Ux.EVENT_ACTION_SEPARATOR), c = a !== -1, l = c ? s.substr(0, a).trim() : Yx, u = c ? s.substr(a + 1).trim() : s;
                    n[l] = u;
                }
                bx(o, n);
            }
            vT(t, n);
        }
    } return n; }
    addA11yClickSupport(t, n, o) { this.a11yClickSupport = !0, this.updateEventInfoForA11yClick = t, this.preventDefaultForA11yClick = n, this.populateClickOnlyAction = o; }
}, kT = (function (e) { return e[e.I_AM_THE_JSACTION_FRAMEWORK = 0] = "I_AM_THE_JSACTION_FRAMEWORK", e; })(kT || {}), Hp = class {
    dispatchDelegate;
    actionResolver;
    eventReplayer;
    eventReplayScheduled = !1;
    replayEventInfoWrappers = [];
    constructor(t, { actionResolver: n, eventReplayer: o } = {}) { this.dispatchDelegate = t, this.actionResolver = n, this.eventReplayer = o; }
    dispatch(t) { let n = new jp(t); this.actionResolver?.resolveEventType(t), this.actionResolver?.resolveAction(t); let o = n.getAction(); if (o && Kx(o.element, n) && Lx(n.getEvent()), this.eventReplayer && n.getIsReplay()) {
        this.scheduleEventInfoWrapperReplay(n);
        return;
    } this.dispatchDelegate(n); }
    scheduleEventInfoWrapperReplay(t) { this.replayEventInfoWrappers.push(t), !this.eventReplayScheduled && (this.eventReplayScheduled = !0, Promise.resolve().then(() => { this.eventReplayScheduled = !1, this.eventReplayer(this.replayEventInfoWrappers); })); }
};
function Kx(e, t) { return e.tagName === "A" && (t.getEventType() === N.CLICK || t.getEventType() === N.CLICKMOD); }
var xT = Symbol.for("propagationStopped"), $p = { REPLAY: 101 };
var Jx = "`preventDefault` called during event replay.";
var Xx = "`composedPath` called during event replay.", yc = class {
    dispatchDelegate;
    clickModSupport;
    actionResolver;
    dispatcher;
    constructor(t, n = !0) { this.dispatchDelegate = t, this.clickModSupport = n, this.actionResolver = new Vp({ clickModSupport: n }), this.dispatcher = new Hp(o => { this.dispatchToDelegate(o); }, { actionResolver: this.actionResolver }); }
    dispatch(t) { this.dispatcher.dispatch(t); }
    dispatchToDelegate(t) { for (t.getIsReplay() && nP(t), eP(t); t.getAction();) {
        if (oP(t), vc(t.getEventType()) && t.getAction().element !== t.getTargetElement() || (this.dispatchDelegate(t.getEvent(), t.getAction().name), tP(t)))
            return;
        this.actionResolver.resolveParentAction(t.eventInfo);
    } }
};
function eP(e) { let t = e.getEvent(), n = e.getEvent().stopPropagation.bind(t), o = () => { t[xT] = !0, n(); }; xn(t, "stopPropagation", o), xn(t, "stopImmediatePropagation", o); }
function tP(e) { return !!e.getEvent()[xT]; }
function nP(e) { let t = e.getEvent(), n = e.getTargetElement(), o = t.preventDefault.bind(t); xn(t, "target", n), xn(t, "eventPhase", $p.REPLAY), xn(t, "preventDefault", () => { throw o(), new Error(Jx + ""); }), xn(t, "composedPath", () => { throw new Error(Xx + ""); }); }
function oP(e) { let t = e.getEvent(), n = e.getAction()?.element; n && xn(t, "currentTarget", n, { configurable: !0 }); }
function xn(e, t, n, { configurable: o = !1 } = {}) { Object.defineProperty(e, t, { value: n, configurable: o }); }
function PT(e, t) { e.ecrd(n => { t.dispatch(n); }, kT.I_AM_THE_JSACTION_FRAMEWORK); }
function rP(e) { return e?.q ?? []; }
function iP(e) { e && (IT(e.c, e.et, e.h), IT(e.c, e.etc, e.h, !0)); }
function IT(e, t, n, o) { for (let r = 0; r < t.length; r++)
    e.removeEventListener(t[r], n, o); }
var sP = !1, LT = (() => { class e {
    static MOUSE_SPECIAL_SUPPORT = sP;
    containerManager;
    eventHandlers = {};
    browserEventTypeToExtraEventTypes = {};
    dispatcher = null;
    queuedEventInfos = [];
    constructor(n) { this.containerManager = n; }
    handleEvent(n, o, r) { let i = zx(n, o, o.target, r, Date.now()); this.handleEventInfo(i); }
    handleEventInfo(n) { if (!this.dispatcher) {
        bT(n, !0), this.queuedEventInfos?.push(n);
        return;
    } this.dispatcher(n); }
    addEvent(n, o, r) { if (n in this.eventHandlers || !this.containerManager || !e.MOUSE_SPECIAL_SUPPORT && Ax.indexOf(n) >= 0)
        return; let i = (a, c, l) => { this.handleEvent(a, c, l); }; this.eventHandlers[n] = i; let s = kx(o || n); if (s !== n) {
        let a = this.browserEventTypeToExtraEventTypes[s] || [];
        a.push(n), this.browserEventTypeToExtraEventTypes[s] = a;
    } this.containerManager.addEventListener(s, a => c => { i(n, c, a); }, r); }
    replayEarlyEvents(n = window._ejsa) { n && (this.replayEarlyEventInfos(n.q), iP(n), delete window._ejsa); }
    replayEarlyEventInfos(n) { for (let o = 0; o < n.length; o++) {
        let r = n[o], i = this.getEventTypesForBrowserEventType(r.eventType);
        for (let s = 0; s < i.length; s++) {
            let a = OT(r);
            Up(a, i[s]), this.handleEventInfo(a);
        }
    } }
    getEventTypesForBrowserEventType(n) { let o = []; return this.eventHandlers[n] && o.push(n), this.browserEventTypeToExtraEventTypes[n] && o.push(...this.browserEventTypeToExtraEventTypes[n]), o; }
    handler(n) { return this.eventHandlers[n]; }
    cleanUp() { this.containerManager?.cleanUp(), this.containerManager = null, this.eventHandlers = {}, this.browserEventTypeToExtraEventTypes = {}, this.dispatcher = null, this.queuedEventInfos = []; }
    registerDispatcher(n, o) { this.ecrd(n, o); }
    ecrd(n, o) { if (this.dispatcher = n, this.queuedEventInfos?.length) {
        for (let r = 0; r < this.queuedEventInfos.length; r++)
            this.handleEventInfo(this.queuedEventInfos[r]);
        this.queuedEventInfos = null;
    } }
} return e; })();
function FT(e, t = window) { return rP(t._ejsas?.[e]); }
function qp(e, t = window) { t._ejsas && (t._ejsas[e] = void 0); }
import "@angular/core/primitives/signals";
import "@angular/core/primitives/di";
import "rxjs/operators";
typeof globalThis.ngServerMode > "u" && (globalThis.ngServerMode = typeof window > "u");
var Nc = Symbol("InputSignalNode#UNSET"), rM = _e(Q({}, Ac), { transformFn: void 0, applyValueToInputSignal(e, t) { bc(e, t); } }), e1 = Symbol();
function iM(e, t) { let n = Object.create(rM); n.value = e, n.transformFn = t?.transform; function o() { if (Ni(n), n.value === Nc) {
    let r = null;
    throw new C(-950, r);
} return n.value; } return o[ae] = n, o; }
var $o = (function (e) { return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e; })($o || {});
var cP = (function (e) { return e.Angular = "angular", e.ACX = "acx", e.Wiz = "wiz", e; })(cP || {}), jT = class {
    attributeName;
    constructor(t) { this.attributeName = t; }
    __NG_ELEMENT_ID__ = () => ra(this.attributeName);
    toString() { return `HostAttributeToken ${this.attributeName}`; }
}, t1 = (() => { let e = new M(""); return e.__NG_ELEMENT_ID__ = t => { let n = _(); if (n === null)
    throw new C(204, !1); if (n.type & 2)
    return n.value; if (t & 8)
    return null; throw new C(204, !1); }, e; })();
function n1(e) { return new Di; }
function VT(e, t) { return iM(e, t); }
function lP(e) { return iM(Nc, e); }
var o1 = (VT.required = lP, VT);
function HT(e, t) { return yf(t); }
function uP(e, t) { return vf(t); }
var r1 = (HT.required = uP, HT);
function i1(e, t) { return Ef(t); }
function BT(e, t) { return yf(t); }
function dP(e, t) { return vf(t); }
var s1 = (BT.required = dP, BT);
function a1(e, t) { return Ef(t); }
function sM(e, t) { let n = Object.create(rM), o = new Di; n.value = e; function r() { return Ni(n), UT(n.value), n.value; } return r[ae] = n, r.asReadonly = qn.bind(r), r.set = i => { n.equal(n.value, i) || (bc(n, i), o.emit(i)); }, r.update = i => { UT(n.value), r.set(i(n.value)); }, r.subscribe = o.subscribe.bind(o), r.destroyRef = o.destroyRef, r; }
function UT(e) { if (e === Nc)
    throw new C(952, !1); }
function $T(e, t) { return sM(e, t); }
function fP(e) { return sM(Nc, e); }
var c1 = ($T.required = fP, $T), aM = !0, Go = class {
}, l1 = St("ContentChildren", (e, t = {}) => Q({ selector: e, first: !1, isViewQuery: !1, descendants: !1, emitDistinctChangesOnly: aM }, t), Go), u1 = St("ContentChild", (e, t = {}) => Q({ selector: e, first: !0, isViewQuery: !1, descendants: !0 }, t), Go), d1 = St("ViewChildren", (e, t = {}) => Q({ selector: e, first: !1, isViewQuery: !0, descendants: !0, emitDistinctChangesOnly: aM }, t), Go), f1 = St("ViewChild", (e, t) => Q({ selector: e, first: !0, isViewQuery: !0, descendants: !0 }, t), Go);
function pP(e, t, n) { let o = new yo(n); return Promise.resolve(o); }
function qT(e) { for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
        return e[t]; }
var hP = (() => { class e {
    zone = E(q);
    changeDetectionScheduler = E(We);
    applicationRef = E($e);
    applicationErrorHandler = E(Dt);
    _onMicrotaskEmptySubscription;
    initialize() { this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({ next: () => { this.changeDetectionScheduler.runningTick || this.zone.run(() => { try {
            this.applicationRef.dirtyFlags |= 1, this.applicationRef._tick();
        }
        catch (n) {
            this.applicationErrorHandler(n);
        } }); } })); }
    ngOnDestroy() { this._onMicrotaskEmptySubscription?.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), gP = new M("", { factory: () => !1 });
function mP({ ngZoneFactory: e, scheduleInRootZone: t }) { return e ??= () => new q(_e(Q({}, cM()), { scheduleInRootZone: t })), [{ provide: Wn, useValue: !1 }, { provide: q, useFactory: e }, { provide: Le, multi: !0, useFactory: () => { let n = E(hP, { optional: !0 }); return () => n.initialize(); } }, { provide: Le, multi: !0, useFactory: () => { let n = E(yP); return () => { n.initialize(); }; } }, { provide: rs, useValue: t ?? Fl }]; }
function p1(e) { let t = e?.scheduleInRootZone, n = mP({ ngZoneFactory: () => { let o = cM(e); return o.scheduleInRootZone = t, o.shouldCoalesceEventChangeDetection && X("NgZone_CoalesceEvent"), new q(o); }, scheduleInRootZone: t }); return Ze([{ provide: gP, useValue: !0 }, n]); }
function cM(e) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1, shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1 }; }
var yP = (() => { class e {
    subscription = new aP;
    initialized = !1;
    zone = E(q);
    pendingTasks = E(It);
    initialize() { if (this.initialized)
        return; this.initialized = !0; let n = null; !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => { this.subscription.add(this.zone.onStable.subscribe(() => { q.assertNotInAngularZone(), queueMicrotask(() => { n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null); }); })); }), this.subscription.add(this.zone.onUnstable.subscribe(() => { q.assertInAngularZone(), n ??= this.pendingTasks.add(); })); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var Ic = new M(""), vP = new M("");
function Ci(e) { return !e.moduleRef; }
function lM(e) { let t = Ci(e) ? e.r3Injector : e.moduleRef.injector, n = t.get(q); return n.run(() => { Ci(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers(); let o = t.get(Dt), r; if (n.runOutsideAngular(() => { r = n.onError.subscribe({ next: o }); }), Ci(e)) {
    let i = () => t.destroy(), s = e.platformInjector.get(Ic);
    s.add(i), t.onDestroy(() => { r.unsubscribe(), s.delete(i); });
}
else {
    let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(Ic);
    s.add(i), e.moduleRef.onDestroy(() => { Nr(e.allPlatformModules, e.moduleRef), r.unsubscribe(), s.delete(i); });
} return IP(o, n, () => { let i = t.get(It), s = i.add(), a = t.get(xf); return a.runInitializers(), a.donePromise.then(() => { let c = t.get(bp, vi); if (dD(c || vi), !t.get(vP, !0))
    return Ci(e) ? t.get($e) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef); if (Ci(e)) {
    let u = t.get($e);
    return e.rootComponent !== void 0 && u.bootstrap(e.rootComponent), u;
}
else
    return uM?.(e.moduleRef, e.allPlatformModules), e.moduleRef; }).finally(() => void i.remove(s)); }); }); }
var uM;
function GT() { uM = EP; }
function EP(e, t) { let n = e.injector.get($e); if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach(o => n.bootstrap(o));
else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
else
    throw new C(-403, !1); t.push(e); }
function IP(e, t, n) { try {
    let o = n();
    return Of(o) ? o.catch(r => { throw t.runOutsideAngular(() => e(r)), r; }) : o;
}
catch (o) {
    throw t.runOutsideAngular(() => e(o)), o;
} }
var dM = (() => { class e {
    _injector;
    _modules = [];
    _destroyListeners = [];
    _destroyed = !1;
    constructor(n) { this._injector = n; }
    bootstrapModuleFactory(n, o) { let r = [dc(), ...o?.applicationProviders ?? [], Ul], i = kE(n.moduleType, this.injector, r); return GT(), lM({ moduleRef: i, allPlatformModules: this._modules, platformInjector: this.injector }); }
    bootstrapModule(n, o = []) { let r = Lf({}, o); return GT(), pP(this.injector, r, n).then(i => this.bootstrapModuleFactory(i, r)); }
    onDestroy(n) { this._destroyListeners.push(n); }
    get injector() { return this._injector; }
    destroy() { if (this._destroyed)
        throw new C(404, !1); this._modules.slice().forEach(o => o.destroy()), this._destroyListeners.forEach(o => o()); let n = this._injector.get(Ic, null); n && (n.forEach(o => o()), n.clear()), this._destroyed = !0; }
    get destroyed() { return this._destroyed; }
    static \u0275fac = function (o) { return new (o || e)(he(ce)); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), qo = null;
function DP(e) { if (wc())
    throw new C(400, !1); Pf(), qo = typeof ngServerMode > "u" || !ngServerMode ? e : null; let t = e.get(dM); return pM(e), t; }
function CP(e, t, n = []) { let o = `Platform: ${t}`, r = new M(o); return (i = []) => { let s = wc(); if (!s) {
    let a = [...n, ...i, { provide: r, useValue: !0 }];
    s = e?.(a) ?? DP(fM(a, o));
} return typeof ngServerMode < "u" && ngServerMode ? s : TP(r); }; }
function fM(e = [], t) { return ce.create({ name: t, providers: [{ provide: ol, useValue: "platform" }, { provide: Ic, useValue: new Set([() => qo = null]) }, ...e] }); }
function TP(e) { let t = wc(); if (!t)
    throw new C(-401, !1); return t; }
function wc() { return typeof ngServerMode < "u" && ngServerMode ? null : qo?.get(dM) ?? null; }
function h1() { wc()?.destroy(); }
function MP(e = []) { if (qo)
    return qo; let t = fM(e); return (typeof ngServerMode > "u" || !ngServerMode) && (qo = t), Pf(), pM(t), t; }
function g1(e) { return { provide: yd, useValue: e, multi: !0 }; }
function pM(e) { let t = e.get(yd, null); Gi(e, () => { t?.forEach(n => n()); }); }
function m1(e) { return Ze([]); }
function y1() { return !1; }
function v1() { }
var Ec = new WeakSet, WT = "";
function zT(e) { return e.get(pa, Td); }
function NP() { let e = [{ provide: pa, useFactory: () => { let t = !0; if (typeof ngServerMode > "u" || !ngServerMode) {
            let n = E(bt);
            t = !!window._ejsas?.[n];
        } return t && X("NgEventReplay"), t; } }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: Le, useValue: () => { let t = E($e), { injector: n } = t; if (!Ec.has(t)) {
        let o = E(ni);
        if (zT(n)) {
            iy();
            let r = n.get(bt), i = oy(r, (s, a, c) => { s.nodeType === Node.ELEMENT_NODE && (ny(s, a, c), wd(s, o)); });
            t.onDestroy(i);
        }
    } }, multi: !0 }, { provide: gi, useFactory: () => { let t = E($e), { injector: n } = t; return () => { if (!zT(n) || Ec.has(t))
        return; Ec.add(t); let o = n.get(bt); t.onDestroy(() => { Ec.delete(t), typeof ngServerMode < "u" && !ngServerMode && qp(o); }), t.whenStable().then(() => { if (t.destroyed)
        return; let r = n.get(Sd); wP(r, n); let i = n.get(ni); i.get(WT)?.forEach(_d), i.delete(WT); let s = r.instance; oi(n) ? t.onDestroy(() => s.cleanUp()) : s.cleanUp(); }); }; }, multi: !0 }), e; }
var wP = (e, t) => { let n = t.get(bt), o = window._ejsas[n], r = e.instance = new LT(new mc(o.c)); for (let a of o.et)
    r.addEvent(a); for (let a of o.etc)
    r.addEvent(a); let i = FT(n); r.replayEarlyEventInfos(i), qp(n); let s = new yc(a => { SP(t, a, a.currentTarget); }); PT(r, s); };
function _P(e, t, n) { let o = new Map, r = t[Vt], i = e.cleanup; if (!i || !r)
    return o; for (let s = 0; s < i.length;) {
    let a = i[s++], c = i[s++];
    if (typeof a != "string")
        continue;
    let l = a;
    if (!TT(l))
        continue;
    vc(l) ? n.capture.add(l) : n.regular.add(l);
    let u = F(t[c]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (o.has(u) ? o.get(u).push(l) : o.set(u, [l]));
} return o; }
function SP(e, t, n) { let o = (n && n.getAttribute(Ro)) ?? ""; /d\d+/.test(o) ? bP(o, e, t, n) : t.eventPhase === $p.REPLAY && bd(t, n); }
function bP(e, t, n, o) { let r = t.get(Jm); r.push({ event: n, currentTarget: o }), xt(t, e, AP(r)); }
function AP(e) { return t => { let n = new Set(t), o = []; for (let { event: r, currentTarget: i } of e) {
    let s = i.getAttribute(Ro);
    n.has(s) ? bd(r, i) : o.push({ event: r, currentTarget: i });
} e.length = 0, e.push(...o); }; }
var QT = !1, ZT = !1, YT = !1, RP = 1e4;
function OP() { QT || (QT = !0, dy(), rD(), QD(), iD(), GE(), EE(), Xv(), mv()); }
function kP() { ZT || (ZT = !0, pD(), qv(), Zv()); }
function xP() { YT || (YT = !0, Iy()); }
function PP(e) { return e.whenStable(); }
var E1 = "ngcm";
function I1() { let e = [{ provide: bn, useFactory: () => { let t = !0; return (typeof ngServerMode > "u" || !ngServerMode) && (t = !!E(So, { optional: !0 })?.get(ha, null)), t && X("NgHydration"), t; } }, { provide: Le, useValue: () => { if (af(!1), typeof ngServerMode < "u" && ngServerMode)
            return; let t = E($t); E(bn) && (Cy(t), OP()); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: Dd, useFactory: () => E(bn) }, { provide: gi, useFactory: () => { if (E(bn)) {
        let t = E($e);
        return () => { PP(t).then(() => { t.destroyed || cf(t); }); };
    } return () => { }; }, multi: !0 }), Ze(e); }
function D1() { return [{ provide: Cd, useFactory: () => E(bn) }, { provide: Le, useValue: () => { E(bn) && (kP(), af(!0), X("NgI18nHydration")); }, multi: !0 }]; }
function C1() { let e = [NP(), { provide: Md, useValue: !0 }, { provide: At, useClass: sy }, { provide: Le, useValue: () => { xP(), X("NgIncrementalHydration"); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: gi, useFactory: () => { let t = E(ce), n = E($t); return () => { let o = Dy(t), r = Bv(n, n.body); gI(t, o, r), vy(n, t); }; }, multi: !0 }), e; }
var KT = RP - 1e3, zp = class {
    openTasks = new Map;
    add(t) { this.openTasks.set(t, new Error("Task stack tracking error")); }
    remove(t) { this.openTasks.delete(t); }
};
function T1() { let e = new zp, { openTasks: t } = e; return Ze([{ provide: jl, useValue: e }, lI(() => { console.warn("Stability debugging utility was provided in production mode. This will cause debug code to be included in production bundles. If this is intentional because you are debugging stability issues in a production environment, you can ignore this warning."); let n = E(q), o = E($e), r = null; typeof Zone < "u" && n.run(() => { r = Zone.current.get("TaskTrackingZone"); }), n.runOutsideAngular(() => { let i = setTimeout(() => { if (console.debug(`---- Application did not stabilize within ${KT / 1e3} seconds ----`), typeof Zone < "u" && !r && console.info('Zone.js is present but no TaskTrackingZone found. To enable better debugging of tasks in the Angular Zone, import "zone.js/plugins/task-tracking" in your application.'), r?.macroTasks?.length) {
        console.group("Macrotasks keeping Angular Zone unstable:");
        for (let s of r?.macroTasks ?? [])
            console.debug(s.creationLocation.stack);
        console.groupEnd();
    } console.group("PendingTasks keeping application unstable:"); for (let s of t.values())
        console.debug(s.stack); console.groupEnd(); }, KT); o.whenStable().then(() => { clearTimeout(i); }); }); })]); }
function M1(e) { let t = Df(e); if (!t)
    throw hM(e); return new yo(t); }
function N1(e) { let t = Df(e); if (!t)
    throw hM(e); return t; }
function hM(e) { return new C(920, !1); }
var LP = (() => { class e {
    static __NG_ELEMENT_ID__ = FP;
} return e; })();
function FP(e) { return jP(_(), g(), (e & 16) === 16); }
function jP(e, t, n) { if (De(e) && !n) {
    let o = ye(e.index, t);
    return new Qt(o, o);
}
else if (e.type & 175) {
    let o = t[te];
    return new Qt(o, t);
} return null; }
var Qp = class extends LP {
}, JT = class extends Qp {
}, Dc = class {
    constructor() { }
    supports(t) { return Ur(t); }
    create(t) { return new Zp(t); }
}, VP = (e, t) => t, Zp = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) { this._trackByFn = t || VP; }
    forEachItem(t) { let n; for (n = this._itHead; n !== null; n = n._next)
        t(n); }
    forEachOperation(t) { let n = this._itHead, o = this._removalsHead, r = 0, i = null; for (; n || o;) {
        let s = !o || n && n.currentIndex < XT(o, r, i) ? n : o, a = XT(s, r, i), c = s.currentIndex;
        if (s === o)
            r--, o = o._nextRemoved;
        else if (n = n._next, s.previousIndex == null)
            r++;
        else {
            i || (i = []);
            let l = a - r, u = c - r;
            if (l != u) {
                for (let f = 0; f < l; f++) {
                    let p = f < i.length ? i[f] : i[f] = 0, h = p + f;
                    u <= h && h < l && (i[f] = p + 1);
                }
                let d = s.previousIndex;
                i[d] = u - l;
            }
        }
        a !== c && t(s, a, c);
    } }
    forEachPreviousItem(t) { let n; for (n = this._previousItHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachMovedItem(t) { let n; for (n = this._movesHead; n !== null; n = n._nextMoved)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    forEachIdentityChange(t) { let n; for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n); }
    diff(t) { if (t == null && (t = []), !Ur(t))
        throw new C(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._itHead, o = !1, r, i, s; if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
            i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), o = !0) : (o && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    }
    else
        r = 0, cE(t, a => { s = this._trackByFn(r, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, r), o = !0) : (o && (n = this._verifyReinsertion(n, a, s, r)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, r++; }), this.length = r; return this._truncate(n), this.collection = t, this.isDirty; }
    get isDirty() { return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null; }
    _reset() { if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
            t.previousIndex = t.currentIndex;
        for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved)
            t.previousIndex = t.currentIndex;
        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
    } }
    _mismatch(t, n, o, r) { let i; return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, r)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(o, r), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, r)) : t = this._addAfter(new Yp(n, o), i, r)), t; }
    _verifyReinsertion(t, n, o, r) { let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null); return i !== null ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t; }
    _truncate(t) { for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
    } this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null); }
    _reinsertAfter(t, n, o) { this._unlinkedRecords !== null && this._unlinkedRecords.remove(t); let r = t._prevRemoved, i = t._nextRemoved; return r === null ? this._removalsHead = i : r._nextRemoved = i, i === null ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _moveAfter(t, n, o) { return this._unlink(t), this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _addAfter(t, n, o) { return this._insertAfter(t, n, o), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }
    _insertAfter(t, n, o) { let r = n === null ? this._itHead : n._next; return t._next = r, t._prev = n, r === null ? this._itTail = t : r._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new Cc), this._linkedRecords.put(t), t.currentIndex = o, t; }
    _remove(t) { return this._addToRemovals(this._unlink(t)); }
    _unlink(t) { this._linkedRecords !== null && this._linkedRecords.remove(t); let n = t._prev, o = t._next; return n === null ? this._itHead = o : n._next = o, o === null ? this._itTail = n : o._prev = n, t; }
    _addToMoves(t, n) { return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t; }
    _addToRemovals(t) { return this._unlinkedRecords === null && (this._unlinkedRecords = new Cc), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
    _addIdentityChange(t, n) { return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }
}, Yp = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) { this.item = t, this.trackById = n; }
}, Kp = class {
    _head = null;
    _tail = null;
    add(t) { this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
    get(t, n) { let o; for (o = this._head; o !== null; o = o._nextDup)
        if ((n === null || n <= o.currentIndex) && Object.is(o.trackById, t))
            return o; return null; }
    remove(t) { let n = t._prevDup, o = t._nextDup; return n === null ? this._head = o : n._nextDup = o, o === null ? this._tail = n : o._prevDup = n, this._head === null; }
}, Cc = class {
    map = new Map;
    put(t) { let n = t.trackById, o = this.map.get(n); o || (o = new Kp, this.map.set(n, o)), o.add(t); }
    get(t, n) { let o = t, r = this.map.get(o); return r ? r.get(t, n) : null; }
    remove(t) { let n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t; }
    get isEmpty() { return this.map.size === 0; }
    clear() { this.map.clear(); }
};
function XT(e, t, n) { let o = e.previousIndex; if (o === null)
    return o; let r = 0; return n && o < n.length && (r = n[o]), o + t + r; }
var Tc = class {
    constructor() { }
    supports(t) { return t instanceof Map || qa(t); }
    create() { return new Jp; }
}, Jp = class {
    _records = new Map;
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    _removalsTail = null;
    get isDirty() { return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null; }
    forEachItem(t) { let n; for (n = this._mapHead; n !== null; n = n._next)
        t(n); }
    forEachPreviousItem(t) { let n; for (n = this._previousMapHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachChangedItem(t) { let n; for (n = this._changesHead; n !== null; n = n._nextChanged)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    diff(t) { if (!t)
        t = new Map;
    else if (!(t instanceof Map || qa(t)))
        throw new C(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._mapHead; if (this._appendAfter = null, this._forEach(t, (o, r) => { if (n && n.key === r)
        this._maybeAddToChanges(n, o), this._appendAfter = n, n = n._next;
    else {
        let i = this._getOrCreateRecordForKey(r, o);
        n = this._insertBeforeOrAppend(n, i);
    } }), n) {
        n._prev && (n._prev._next = null), this._removalsHead = n;
        for (let o = n; o !== null; o = o._nextRemoved)
            o === this._mapHead && (this._mapHead = null), this._records.delete(o.key), o._nextRemoved = o._next, o.previousValue = o.currentValue, o.currentValue = null, o._prev = null, o._next = null;
    } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }
    _insertBeforeOrAppend(t, n) { if (t) {
        let o = t._prev;
        return n._next = t, n._prev = o, t._prev = n, o && (o._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t;
    } return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null; }
    _getOrCreateRecordForKey(t, n) { if (this._records.has(t)) {
        let r = this._records.get(t);
        this._maybeAddToChanges(r, n);
        let i = r._prev, s = r._next;
        return i && (i._next = s), s && (s._prev = i), r._next = null, r._prev = null, r;
    } let o = new Xp(t); return this._records.set(t, o), o.currentValue = n, this._addToAdditions(o), o; }
    _reset() { if (this.isDirty) {
        let t;
        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
            t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
            t.previousValue = t.currentValue;
        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
    } }
    _maybeAddToChanges(t, n) { Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t)); }
    _addToAdditions(t) { this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t); }
    _addToChanges(t) { this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t); }
    _forEach(t, n) { t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(o => n(t[o], o)); }
}, Xp = class {
    key;
    previousValue = null;
    currentValue = null;
    _nextPrevious = null;
    _next = null;
    _prev = null;
    _nextAdded = null;
    _nextRemoved = null;
    _nextChanged = null;
    constructor(t) { this.key = t; }
};
function eM() { return new gM([new Dc]); }
var gM = (() => { class e {
    factories;
    static \u0275prov = B({ token: e, providedIn: "root", factory: eM });
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o != null) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = E(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || eM()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o != null)
        return o; throw new C(901, !1); }
} return e; })();
function tM() { return new mM([new Tc]); }
var mM = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: tM });
    factories;
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = E(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || tM()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o)
        return o; throw new C(901, !1); }
} return e; })(), HP = [new Tc], BP = [new Dc], w1 = new gM(BP), _1 = new mM(HP), S1 = CP(null, "core", []), b1 = (() => { class e {
    constructor(n) { }
    static \u0275fac = function (o) { return new (o || e)(he($e)); };
    static \u0275mod = Tf({ type: e });
    static \u0275inj = nr({});
} return e; })();
function A1(e) { let { rootComponent: t, appProviders: n, platformProviders: o, platformRef: r } = e; if (V(k.BootstrapApplicationStart), typeof ngServerMode < "u" && ngServerMode && !r)
    throw new C(-401, !1); try {
    let i = r?.injector ?? MP(o), s = [dc(), Ul, ...n || []], a = new qr({ providers: s, parent: i, debugName: "", runEnvironmentInitializers: !1 });
    return lM({ r3Injector: a.injector, platformInjector: i, rootComponent: t });
}
catch (i) {
    return Promise.reject(i);
}
finally {
    V(k.BootstrapApplicationEnd);
} }
var eh = class {
    views = [];
    indexByContent = new Map;
    add(t) { let n = JSON.stringify(t); if (!this.indexByContent.has(n)) {
        let o = this.views.length;
        return this.views.push(t), this.indexByContent.set(n, o), o;
    } return this.indexByContent.get(n); }
    getAll() { return this.views; }
}, UP = 0;
function yM(e) { return e.ssrId || (e.ssrId = `t${UP++}`), e.ssrId; }
function vM(e, t, n) { let o = []; return fo(e, t, n, o), o.length; }
function $P(e) { let t = []; return La(e, t), t.length; }
function EM(e, t) { let n = e[$]; return n && !n.hasAttribute(wo) ? Mc(n, e, null, t) : null; }
function IM(e, t) { let n = fr(e[$]), o = EM(n, t); if (o === null)
    return; let r = F(n[$]), i = e[Z], s = Mc(r, i, null, t), a = n[T], c = `${o}|${s}`; a.setAttribute(r, oo, c); }
function R1(e, t) { let n = e.injector, o = Gv(n), r = oi(n), i = new eh, s = new Map, a = e._views, c = n.get(pa, Td), l = { regular: new Set, capture: new Set }, u = new Map, d = e.injector.get(bt); for (let h of a) {
    let m = Ad(h);
    if (m !== null) {
        let v = { serializedViewCollection: i, corruptedTextNodes: s, isI18nHydrationEnabled: o, isIncrementalHydrationEnabled: r, i18nChildren: new Map, eventTypesToReplay: l, shouldReplayEvents: c, appId: d, deferBlocks: u };
        J(m) ? IM(m, v) : EM(m, v), QP(s, t);
    }
} let f = i.getAll(), p = n.get(So); if (p.set(ha, f), u.size > 0) {
    let h = {};
    for (let [m, v] of u.entries())
        h[m] = v;
    p.set(ga, h);
} return l; }
function qP(e, t, n, o, r) { let i = [], s = ""; for (let a = G; a < e.length; a++) {
    let c = e[a], l, u, d;
    if (rt(c) && (c = c[I], J(c))) {
        u = $P(c) + 1, IM(c, r);
        let p = fr(c[$]);
        d = { [ua]: p[y].ssrId, [wt]: u };
    }
    if (!d) {
        let p = c[y];
        p.type === 1 ? (l = p.ssrId, u = 1) : (l = yM(p), u = vM(p, c, p.firstChild)), d = { [ua]: l, [wt]: u };
        let h = !1;
        if (YE(n[y], t)) {
            let m = Me(n, t), v = pe(n[y], t);
            if (r.isIncrementalHydrationEnabled && v.hydrateTriggers !== null) {
                let D = `d${r.deferBlocks.size}`;
                v.hydrateTriggers.has(7) && (h = !0);
                let x = [];
                La(e, x);
                let oe = { [wt]: x.length, [ei]: m[kt] }, qe = GP(v.hydrateTriggers);
                qe.length > 0 && (oe[ti] = qe), o !== null && (oe[Id] = o), r.deferBlocks.set(D, oe);
                let xe = F(e);
                xe !== void 0 ? xe.nodeType === Node.COMMENT_NODE && nM(xe, D) : nM(xe, D), h || YP(v, x, D, r), o = D, d[fa] = D;
            }
            d[ei] = m[kt];
        }
        h || Object.assign(d, DM(e[a], o, r));
    }
    let f = JSON.stringify(d);
    if (i.length > 0 && f === s) {
        let p = i[i.length - 1];
        p[Jr] ??= 1, p[Jr]++;
    }
    else
        s = f, i.push(d);
} return i; }
function GP(e) { let t = new Set([0, 1, 2, 5]), n = []; for (let [o, r] of e)
    t.has(o) && (r === null ? n.push(o) : r.type === 5 ? n.push({ trigger: o, delay: r.delay }) : n.push({ trigger: o, intersectionObserverOptions: r.intersectionObserverOptions })); return n; }
function Ti(e, t, n, o) { let r = t.index - I; e[Xr] ??= {}, e[Xr][r] ??= Hv(t, n, o); }
function Gp(e, t) { let n = typeof t == "number" ? t : t.index - I; e[Ao] ??= [], e[Ao].includes(n) || e[Ao].push(n); }
function DM(e, t = null, n) { let o = {}, r = e[y], i = Wv(r, n), s = n.shouldReplayEvents ? _P(r, e, n.eventTypesToReplay) : null; for (let a = I; a < r.bindingStartIndex; a++) {
    let c = r.data[a], l = a - I, u = zv(e, a, n);
    if (u) {
        o[da] ??= {}, o[da][l] = u.caseQueue;
        for (let d of u.disconnectedNodes)
            Gp(o, d);
        for (let d of u.disjointNodes) {
            let f = r.data[d + I];
            Ti(o, f, e, i);
        }
        continue;
    }
    if (oa(c) && !Oo(c)) {
        if (J(e[a]) && c.tView && (o[la] ??= {}, o[la][l] = yM(c.tView)), Vo(c, e) && ZP(c)) {
            Gp(o, c);
            continue;
        }
        if (Array.isArray(c.projection)) {
            for (let d of c.projection)
                if (d)
                    if (!Array.isArray(d))
                        !cl(d) && !_o(d) && (Vo(d, e) ? Gp(o, d) : Ti(o, d, e, i));
                    else
                        throw Rv(F(e[a]));
        }
        if (WP(o, c, e, i), J(e[a])) {
            let d = e[a][$];
            if (Array.isArray(d)) {
                let f = F(d);
                f.hasAttribute(wo) || Mc(f, d, t, n);
            }
            o[bo] ??= {}, o[bo][l] = qP(e[a], c, e, t, n);
        }
        else if (Array.isArray(e[a]) && !Cm(c)) {
            let d = F(e[a][$]);
            d.hasAttribute(wo) || Mc(d, e[a], t, n);
        }
        else if (c.type & 8)
            o[Kr] ??= {}, o[Kr][l] = vM(r, e, c.child);
        else if (c.type & 144) {
            let d = c.next;
            for (; d !== null && d.type & 144;)
                d = d.next;
            d && !_o(d) && Ti(o, d, e, i);
        }
        else if (c.type & 1) {
            let d = F(e[a]);
            Od(n, d);
        }
        if (s && c.type & 2) {
            let d = F(e[a]);
            s.has(d) && Nd(d, s.get(d), t);
        }
    }
} return o; }
function WP(e, t, n, o) { cl(t) || (t.projectionNext && t.projectionNext !== t.next && !_o(t.projectionNext) && Ti(e, t.projectionNext, n, o), t.prev === null && t.parent !== null && Vo(t.parent, n) && !Vo(t, n) && Ti(e, t, n, o)); }
function zP(e) { let t = e[U]; if (!t?.constructor)
    return !1; let n = W(t.constructor); return n?.encapsulation === Be.ShadowDom || n?.encapsulation === Be.ExperimentalIsolatedShadowDom; }
function Mc(e, t, n, o) { let r = t[T]; if (wh(t) && !Ha() || zP(t))
    return r.setAttribute(e, wo, ""), null; {
    let i = DM(t, n, o), s = o.serializedViewCollection.add(i);
    return r.setAttribute(e, oo, s.toString()), s;
} }
function nM(e, t) { e.textContent = `ngh=${t}`; }
function QP(e, t) { for (let [n, o] of e)
    n.after(t.createComment(o)); }
function ZP(e) { let t = e; for (; t != null;) {
    if (De(t))
        return !0;
    t = t.parent;
} return !1; }
function YP(e, t, n, o) { let r = yy(e.hydrateTriggers); for (let i of r)
    o.eventTypesToReplay.regular.add(i); if (r.length > 0) {
    let i = t.filter(s => s.nodeType === Node.ELEMENT_NODE);
    for (let s of i)
        Nd(s, r, n);
} }
function O1(e) { return typeof e == "boolean" ? e : e != null && e !== "false"; }
function k1(e, t = NaN) { return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t; }
var KP = "\u{1F170}\uFE0F", _c = !1;
function x1(e) { if (!_c)
    return; let { startLabel: t } = CM(e); performance.mark(t); }
function P1(e) { if (!_c)
    return; let { startLabel: t, labelName: n, endLabel: o } = CM(e); performance.mark(o), performance.measure(n, t, o), performance.clearMarks(t), performance.clearMarks(o); }
function CM(e) { let t = `${KP}:${e}`; return { labelName: t, startLabel: `start:${t}`, endLabel: `end:${t}` }; }
var oM = !1;
function L1() { if (!oM && (typeof performance > "u" || !performance.mark || !performance.measure)) {
    oM = !0, console.warn("Performance API is not supported on this platform");
    return;
} _c = !0; }
function F1() { _c = !1; }
function j1(e) { let t = e; for (; t;) {
    let n = Vm(t);
    if (n !== null)
        for (let o = I; o < n.length; o++) {
            let r = n[o];
            if (!ne(r) && !J(r) || r[$] !== t)
                continue;
            let i = n[y], s = Et(i, o);
            if (De(s)) {
                let a = i.data[s.directiveStart + s.componentOffset], c = a.debugInfo?.className || a.type.name;
                if (c)
                    return c;
                break;
            }
        }
    t = t.parentNode;
} return null; }
function V1(e) { }
function H1(e) { return ie({ usage: 1, kind: "directive", type: e.type }).compileDirectiveDeclaration(Ee, `ng:///${e.type.name}/\u0275fac.js`, e); }
function B1(e) { bf(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null); }
function U1(e) { nI(e.type, e.resolveDeferredDeps, (...t) => { let n = e.resolveMetadata(...t); bf(e.type, n.decorators, n.ctorParameters, n.propDecorators); }); }
function $1(e) { return ie({ usage: 1, kind: "component", type: e.type }).compileComponentDeclaration(Ee, `ng:///${e.type.name}/\u0275cmp.js`, e); }
function q1(e) { return ie({ usage: 1, kind: JP(e.target), type: e.type }).compileFactoryDeclaration(Ee, `ng:///${e.type.name}/\u0275fac.js`, e); }
function JP(e) { switch (e) {
    case $o.Directive: return "directive";
    case $o.Component: return "component";
    case $o.Injectable: return "injectable";
    case $o.Pipe: return "pipe";
    case $o.NgModule: return "NgModule";
} }
function G1(e) { return ie({ usage: 1, kind: "injectable", type: e.type }).compileInjectableDeclaration(Ee, `ng:///${e.type.name}/\u0275prov.js`, e); }
function W1(e) { return ie({ usage: 1, kind: "NgModule", type: e.type }).compileInjectorDeclaration(Ee, `ng:///${e.type.name}/\u0275inj.js`, e); }
function z1(e) { return ie({ usage: 1, kind: "NgModule", type: e.type }).compileNgModuleDeclaration(Ee, `ng:///${e.type.name}/\u0275mod.js`, e); }
function Q1(e) { return ie({ usage: 1, kind: "pipe", type: e.type }).compilePipeDeclaration(Ee, `ng:///${e.type.name}/\u0275pipe.js`, e); }
var Wp = Symbol("NOT_SET"), TM = new Set, XP = _e(Q({}, Ac), { kind: "afterRenderEffectPhase", consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, value: Wp, cleanup: null, consumerMarkedDirty() { if (this.sequence.impl.executing) {
        if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
            return;
        this.sequence.erroredOrDestroyed = !0;
    } this.sequence.scheduler.notify(7); }, phaseFn(e) { if (this.sequence.lastPhase = this.phase, !this.dirty)
        return this.signal; if (this.dirty = !1, this.value !== Wp && !_i(this))
        return this.signal; try {
        for (let r of this.cleanup ?? TM)
            r();
    }
    finally {
        this.cleanup?.clear();
    } let t = []; e !== void 0 && t.push(e), t.push(this.registerCleanupFn); let n = Wo(this), o; try {
        o = this.userFn.apply(null, t);
    }
    finally {
        wi(this, n);
    } return (this.value === Wp || !this.equal(this.value, o)) && (this.value = o, this.version++), this.signal; } }), th = class extends Fr {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    onDestroyFns = null;
    constructor(t, n, o, r, i, s = null) { super(t, [void 0, void 0, void 0, void 0], o, !1, i.get(Ve), s), this.scheduler = r; for (let a of Wd) {
        let c = n[a];
        if (c === void 0)
            continue;
        let l = Object.create(XP);
        l.sequence = this, l.phase = a, l.userFn = c, l.dirty = !0, l.signal = () => (Ni(l), l.value), l.signal[ae] = l, l.registerCleanupFn = u => (l.cleanup ??= new Set).add(u), this.nodes[a] = l, this.hooks[a] = u => l.phaseFn(u);
    } }
    afterRun() { super.afterRun(), this.lastPhase = null; }
    destroy() { if (this.onDestroyFns !== null)
        for (let t of this.onDestroyFns)
            t(); super.destroy(); for (let t of this.nodes)
        if (t)
            try {
                for (let n of t.cleanup ?? TM)
                    n();
            }
            finally {
                Lt(t);
            } }
};
function Z1(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return Na; let n = t?.injector ?? E(ce), o = n.get(We), r = n.get(Ma), i = n.get(Po, null, { optional: !0 }); r.impl ??= n.get(zd); let s = e; typeof s == "function" && (s = { mixedReadWrite: e }); let a = n.get(Gn, null, { optional: !0 }), c = new th(r.impl, [s.earlyRead, s.write, s.mixedReadWrite, s.read], a?.view, o, n, i?.snapshot(null)); return r.impl.register(c), c; }
function Y1(e, t) { let n = W(e), o = t.elementInjector || Hn(); return new Zt(n).create(o, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings); }
function K1(e) { let t = W(e); if (!t)
    return null; let n = new Zt(t); return { get selector() { return n.selector; }, get type() { return n.componentType; }, get inputs() { return n.inputs; }, get outputs() { return n.outputs; }, get ngContentSelectors() { return n.ngContentSelectors; }, get isStandalone() { return t.standalone; }, get isSignal() { return t.signals; } }; }
function J1(...e) { return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] }); }
var X1 = new M("", { providedIn: "platform", factory: () => null }), e0 = new M("", { providedIn: "platform", factory: () => null }), t0 = new M("", { providedIn: "platform", factory: () => null });
export { Nw as ANIMATION_MODULE_TYPE, gi as APP_BOOTSTRAP_LISTENER, bt as APP_ID, kf as APP_INITIALIZER, xf as ApplicationInitStatus, b1 as ApplicationModule, $e as ApplicationRef, km as Attribute, pT as COMPILER_OPTIONS, ww as CSP_NONCE, Kw as CUSTOM_ELEMENTS_SCHEMA, sa as ChangeDetectionStrategy, LP as ChangeDetectorRef, ux as Compiler, ud as CompilerFactory, ox as Component, $a as ComponentFactory, di as ComponentFactoryResolver, nE as ComponentRef, u1 as ContentChild, l1 as ContentChildren, px as DEFAULT_CURRENCY_CODE, $t as DOCUMENT, Sn as DebugElement, dd as DebugEventListener, Qr as DebugNode, Zp as DefaultIterableDiffer, Ve as DestroyRef, fT as Directive, Le as ENVIRONMENT_INITIALIZER, Yr as ElementRef, JT as EmbeddedViewRef, Se as EnvironmentInjector, mt as ErrorHandler, ft as EventEmitter, t1 as HOST_TAG_NAME, pm as Host, jT as HostAttributeToken, ax as HostBinding, cx as HostListener, el as INJECTOR, lm as Inject, KN as Injectable, M as InjectionToken, ce as Injector, ix as Input, gM as IterableDiffers, mM as KeyValueDiffers, bp as LOCALE_ID, HI as MAX_ANIMATION_TIMEOUT, gT as MissingTranslationStrategy, na as ModuleWithComponentFactories, Jw as NO_ERRORS_SCHEMA, lx as NgModule, RE as NgModuleFactory, go as NgModuleRef, q as NgZone, um as Optional, sx as Output, Di as OutputEmitterRef, Mw as PLATFORM_ID, yd as PLATFORM_INITIALIZER, vr as PendingTasks, rx as Pipe, dM as PlatformRef, Go as Query, ks as QueryList, X1 as REQUEST, t0 as REQUEST_CONTEXT, e0 as RESPONSE_INIT, kb as Renderer2, Br as RendererFactory2, js as RendererStyleFlags2, oE as Sanitizer, An as SecurityContext, dm as Self, Ss as SimpleChange, fm as SkipSelf, hx as TRANSLATIONS, gx as TRANSLATIONS_FORMAT, Vr as TemplateRef, gR as Testability, sI as TestabilityRegistry, So as TransferState, hm as Type, AM as VERSION, Ai as Version, f1 as ViewChild, d1 as ViewChildren, Wa as ViewContainerRef, Be as ViewEncapsulation, Qp as ViewRef, nv as afterEveryRender, Qd as afterNextRender, Z1 as afterRenderEffect, mx as asNativeElements, eN as assertInInjectionContext, pN as assertNotInReactiveContext, TP as assertPlatform, O1 as booleanAttribute, kn as computed, s1 as contentChild, a1 as contentChildren, Y1 as createComponent, Cf as createEnvironmentInjector, OE as createNgModule, SA as createNgModuleRef, DP as createPlatform, CP as createPlatformFactory, h1 as destroyPlatform, $l as effect, v1 as enableProdMode, dR as enableProfiling, er as forwardRef, To as getDebugNode, M1 as getModuleFactory, N1 as getNgModuleById, wc as getPlatform, Ch as importProvidersFrom, E as inject, o1 as input, dE as inputBinding, y1 as isDevMode, oI as isSignal, sr as isStandalone, Af as isWritableSignal, Rp as linkedSignal, Ze as makeEnvironmentProviders, Sw as makeStateKey, J1 as mergeApplicationConfig, c1 as model, k1 as numberAttribute, n1 as output, fE as outputBinding, S1 as platformCore, lI as provideAppInitializer, dN as provideBrowserGlobalErrorListeners, m1 as provideCheckNoChangesConfig, Dh as provideEnvironmentInitializer, x_ as provideNgReflectAttributes, g1 as providePlatformInitializer, T1 as provideStabilityDebugging, p1 as provideZoneChangeDetection, dx as provideZonelessChangeDetection, K1 as reflectComponentType, P as resolveForwardRef, Cx as resource, Gi as runInInjectionContext, aI as setTestabilityGetter, qt as signal, eA as twoWayBinding, Te as untracked, r1 as viewChild, i1 as viewChildren, VI as \u0275ANIMATIONS_DISABLED, Gm as \u0275AcxChangeDetectionStrategy, Wm as \u0275AcxViewEncapsulation, Ma as \u0275AfterRenderManager, E1 as \u0275CLIENT_RENDER_MODE_FLAG, G as \u0275CONTAINER_HEADER_OFFSET, ff as \u0275CONTROL, We as \u0275ChangeDetectionScheduler, $a as \u0275ComponentFactory, uR as \u0275Console, vi as \u0275DEFAULT_LOCALE_ID, XE as \u0275DEFER_BLOCK_CONFIG, iR as \u0275DEFER_BLOCK_DEPENDENCY_INTERCEPTOR, At as \u0275DEHYDRATED_BLOCK_REGISTRY, _f as \u0275DeferBlockBehavior, Y as \u0275DeferBlockState, vP as \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP, Jm as \u0275EVENT_REPLAY_QUEUE, is as \u0275EffectScheduler, cP as \u0275Framework, py as \u0275HydrationStatus, _w as \u0275IMAGE_CONFIG, zm as \u0275IMAGE_CONFIG_DEFAULTS, ol as \u0275INJECTOR_SCOPE, e1 as \u0275INPUT_SIGNAL_BRAND_WRITE_TYPE, Dt as \u0275INTERNAL_APPLICATION_ERROR_HANDLER, bw as \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, bn as \u0275IS_HYDRATION_DOM_REUSE_ENABLED, Md as \u0275IS_INCREMENTAL_HYDRATION_ENABLED, ni as \u0275JSACTION_BLOCK_ELEMENT_MAP, Sd as \u0275JSACTION_EVENT_CONTRACT, xs as \u0275LContext, Io as \u0275LocaleDataIndex, on as \u0275NG_COMP_DEF, rr as \u0275NG_DIR_DEF, rn as \u0275NG_ELEMENT_ID, Qo as \u0275NG_INJ_DEF, Fi as \u0275NG_MOD_DEF, ir as \u0275NG_PIPE_DEF, Fn as \u0275NG_PROV_DEF, Cs as \u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, H as \u0275NO_CHANGE, yo as \u0275NgModuleFactory, Jo as \u0275NoopNgZone, KP as \u0275PERFORMANCE_MARK_PREFIX, gP as \u0275PROVIDED_NG_ZONE, gN as \u0275PROVIDED_ZONELESS, It as \u0275PendingTasksInternal, k as \u0275ProfilerEvent, nn as \u0275R3Injector, _s as \u0275ReflectionCapabilities, Zt as \u0275Render3ComponentFactory, zs as \u0275Render3ComponentRef, mo as \u0275Render3NgModuleRef, fc as \u0275ResourceImpl, C as \u0275RuntimeError, ae as \u0275SIGNAL, ly as \u0275SSR_CONTENT_INTEGRITY_MARKER, rI as \u0275TESTABILITY, iI as \u0275TESTABILITY_GETTER, JE as \u0275TimerScheduler, Ta as \u0275TracingAction, Po as \u0275TracingService, Qt as \u0275ViewRef, Pi as \u0275XSS_SECURITY_URL, Wn as \u0275ZONELESS_ENABLED, xy as \u0275_sanitizeHtml, Ea as \u0275_sanitizeUrl, Dn as \u0275allLeavingAnimations, xo as \u0275allowSanitizationBypassAndThrow, R1 as \u0275annotateForHydration, V1 as \u0275assertType, r_ as \u0275bypassSanitizationTrustHtml, c_ as \u0275bypassSanitizationTrustResourceUrl, s_ as \u0275bypassSanitizationTrustScript, i_ as \u0275bypassSanitizationTrustStyle, a_ as \u0275bypassSanitizationTrustUrl, TA as \u0275clearResolutionOfComponentResourcesQueue, nT as \u0275compileComponent, Sp as \u0275compileDirective, eT as \u0275compileNgModule, tT as \u0275compileNgModuleDefs, pP as \u0275compileNgModuleFactory, dT as \u0275compilePipe, HR as \u0275controlUpdate, en as \u0275convertToBitFlags, $c as \u0275createInjector, MP as \u0275createOrReusePlatformInjector, w1 as \u0275defaultIterableDiffers, _1 as \u0275defaultKeyValueDiffers, po as \u0275depsTracker, lE as \u0275devModeEqual, F1 as \u0275disableProfiling, L1 as \u0275enableProfiling, Lp as \u0275encapsulateResourceError, ep as \u0275findLocaleData, JC as \u0275flushModuleScopingQueueAsMuchAsPossible, Xo as \u0275formatRuntimeError, qk as \u0275generateStandaloneInDeclarationsError, lR as \u0275getAsyncClassMetadataFn, j1 as \u0275getClosestComponentName, W as \u0275getComponentDef, To as \u0275getDebugNode, Ns as \u0275getDeferBlocks, gw as \u0275getDirectives, ca as \u0275getDocument, yw as \u0275getHostElement, or as \u0275getInjectableDef, we as \u0275getLContext, TO as \u0275getLocaleCurrencyCode, aD as \u0275getLocalePluralCase, Ix as \u0275getOutputDestroyRef, _y as \u0275getSanitizationBypassType, fR as \u0275getTransferState, e_ as \u0275getUnknownElementStrictMode, n_ as \u0275getUnknownPropertyStrictMode, be as \u0275global, pE as \u0275inferTagNameFromDefinition, FP as \u0275injectChangeDetectorRef, A1 as \u0275internalCreateApplication, mP as \u0275internalProvideZoneChangeDetection, uI as \u0275isBoundToModule, CA as \u0275isComponentDefPendingResolution, Qc as \u0275isEnvironmentProviders, xM as \u0275isInjectable, hn as \u0275isNgModule, Of as \u0275isPromise, cI as \u0275isSubscribable, FS as \u0275isViewDirty, jS as \u0275markForRefresh, lt as \u0275noSideEffects, wp as \u0275patchComponentDefWithScope, X as \u0275performanceMarkFeature, Ya as \u0275promiseWithResolvers, dc as \u0275provideZonelessChangeDetectionInternal, pR as \u0275publishExternalGlobalUtil, Vw as \u0275readHydrationInfo, CO as \u0275registerLocaleData, Tt as \u0275renderDeferBlockState, zk as \u0275resetCompiledComponents, Bw as \u0275resetIncrementalHydrationEnabledWarnedForTests, Uk as \u0275resetJitOptions, _E as \u0275resolveComponentResources, MA as \u0275restoreComponentResolutionQueue, _A as \u0275setAllowDuplicateNgModuleIdsForTest, MM as \u0275setAlternateWeakRefImpl, QC as \u0275setClassDebugInfo, bf as \u0275setClassMetadata, nI as \u0275setClassMetadataAsync, tt as \u0275setCurrentInjector, Cw as \u0275setDocument, FM as \u0275setInjectorProfilerContext, dD as \u0275setLocaleId, Xw as \u0275setUnknownElementStrictMode, t_ as \u0275setUnknownPropertyStrictMode, x1 as \u0275startMeasuring, P1 as \u0275stopMeasuring, pr as \u0275store, ht as \u0275stringify, _p as \u0275transitiveScopesFor, Ka as \u0275triggerResourceLoading, OM as \u0275truncateMiddle, MO as \u0275unregisterLocaleData, Rt as \u0275unwrapSafeValue, fN as \u0275unwrapWritableSignal, I1 as \u0275withDomHydration, NP as \u0275withEventReplay, D1 as \u0275withI18nSupport, C1 as \u0275withIncrementalHydration, CC as \u0275\u0275ExternalStylesFeature, $o as \u0275\u0275FactoryTarget, HE as \u0275\u0275HostDirectivesFeature, Mf as \u0275\u0275InheritDefinitionFeature, mm as \u0275\u0275NgOnChangesFeature, DC as \u0275\u0275ProvidersFeature, Ky as \u0275\u0275advance, wr as \u0275\u0275animateEnter, _r as \u0275\u0275animateEnterListener, Sr as \u0275\u0275animateLeave, Ks as \u0275\u0275animateLeaveListener, Ff as \u0275\u0275ariaProperty, cC as \u0275\u0275attachSourceLocations, jf as \u0275\u0275attribute, jD as \u0275\u0275classMap, pp as \u0275\u0275classProp, qI as \u0275\u0275componentInstance, XI as \u0275\u0275conditional, oc as \u0275\u0275conditionalBranchCreate, JI as \u0275\u0275conditionalCreate, cp as \u0275\u0275contentQuery, up as \u0275\u0275contentQuerySignal, WI as \u0275\u0275control, GI as \u0275\u0275controlCreate, Np as \u0275\u0275declareLet, mI as \u0275\u0275defer, tI as \u0275\u0275deferEnableTimerScheduling, II as \u0275\u0275deferHydrateNever, OI as \u0275\u0275deferHydrateOnHover, TI as \u0275\u0275deferHydrateOnIdle, wI as \u0275\u0275deferHydrateOnImmediate, PI as \u0275\u0275deferHydrateOnInteraction, bI as \u0275\u0275deferHydrateOnTimer, jI as \u0275\u0275deferHydrateOnViewport, EI as \u0275\u0275deferHydrateWhen, AI as \u0275\u0275deferOnHover, DI as \u0275\u0275deferOnIdle, MI as \u0275\u0275deferOnImmediate, kI as \u0275\u0275deferOnInteraction, _I as \u0275\u0275deferOnTimer, LI as \u0275\u0275deferOnViewport, RI as \u0275\u0275deferPrefetchOnHover, CI as \u0275\u0275deferPrefetchOnIdle, NI as \u0275\u0275deferPrefetchOnImmediate, xI as \u0275\u0275deferPrefetchOnInteraction, SI as \u0275\u0275deferPrefetchOnTimer, FI as \u0275\u0275deferPrefetchOnViewport, vI as \u0275\u0275deferPrefetchWhen, yI as \u0275\u0275deferWhen, xE as \u0275\u0275defineComponent, LE as \u0275\u0275defineDirective, B as \u0275\u0275defineInjectable, nr as \u0275\u0275defineInjector, Tf as \u0275\u0275defineNgModule, FE as \u0275\u0275definePipe, Ho as \u0275\u0275directiveInject, El as \u0275\u0275disableBindings, Wf as \u0275\u0275domElement, Yf as \u0275\u0275domElementContainer, Zf as \u0275\u0275domElementContainerEnd, lc as \u0275\u0275domElementContainerStart, ac as \u0275\u0275domElementEnd, sc as \u0275\u0275domElementStart, sp as \u0275\u0275domListener, Jf as \u0275\u0275domProperty, wf as \u0275\u0275domTemplate, Gf as \u0275\u0275element, Qf as \u0275\u0275elementContainer, yi as \u0275\u0275elementContainerEnd, cc as \u0275\u0275elementContainerStart, ic as \u0275\u0275elementEnd, rc as \u0275\u0275elementStart, vl as \u0275\u0275enableBindings, zC as \u0275\u0275getComponentDepsFactory, sD as \u0275\u0275getCurrentView, Rm as \u0275\u0275getInheritedFactory, ZC as \u0275\u0275getReplaceMetadataURL, CD as \u0275\u0275i18n, MD as \u0275\u0275i18nApply, TD as \u0275\u0275i18nAttributes, np as \u0275\u0275i18nEnd, op as \u0275\u0275i18nExp, ND as \u0275\u0275i18nPostprocess, tp as \u0275\u0275i18nStart, he as \u0275\u0275inject, ra as \u0275\u0275injectAttribute, lC as \u0275\u0275interpolate, uC as \u0275\u0275interpolate1, dC as \u0275\u0275interpolate2, fC as \u0275\u0275interpolate3, pC as \u0275\u0275interpolate4, hC as \u0275\u0275interpolate5, gC as \u0275\u0275interpolate6, mC as \u0275\u0275interpolate7, yC as \u0275\u0275interpolate8, vC as \u0275\u0275interpolateV, rE as \u0275\u0275invalidFactory, Bi as \u0275\u0275invalidFactoryDep, rp as \u0275\u0275listener, AD as \u0275\u0275loadQuery, xl as \u0275\u0275namespaceHTML, kl as \u0275\u0275namespaceMathML, Ol as \u0275\u0275namespaceSVG, wD as \u0275\u0275nextContext, B1 as \u0275\u0275ngDeclareClassMetadata, U1 as \u0275\u0275ngDeclareClassMetadataAsync, $1 as \u0275\u0275ngDeclareComponent, H1 as \u0275\u0275ngDeclareDirective, q1 as \u0275\u0275ngDeclareFactory, G1 as \u0275\u0275ngDeclareInjectable, W1 as \u0275\u0275ngDeclareInjector, z1 as \u0275\u0275ngDeclareNgModule, Q1 as \u0275\u0275ngDeclarePipe, HC as \u0275\u0275pipe, BC as \u0275\u0275pipeBind1, UC as \u0275\u0275pipeBind2, $C as \u0275\u0275pipeBind3, qC as \u0275\u0275pipeBind4, GC as \u0275\u0275pipeBindV, SD as \u0275\u0275projection, _D as \u0275\u0275projectionDef, qf as \u0275\u0275property, NC as \u0275\u0275pureFunction0, wC as \u0275\u0275pureFunction1, _C as \u0275\u0275pureFunction2, SC as \u0275\u0275pureFunction3, bC as \u0275\u0275pureFunction4, AC as \u0275\u0275pureFunction5, RC as \u0275\u0275pureFunction6, OC as \u0275\u0275pureFunction7, kC as \u0275\u0275pureFunction8, xC as \u0275\u0275pureFunctionV, RD as \u0275\u0275queryAdvance, bD as \u0275\u0275queryRefresh, aC as \u0275\u0275readContextLet, OD as \u0275\u0275reference, If as \u0275\u0275registerNgModuleType, oD as \u0275\u0275repeater, nD as \u0275\u0275repeaterCreate, tD as \u0275\u0275repeaterTrackByIdentity, eD as \u0275\u0275repeaterTrackByIndex, YC as \u0275\u0275replaceMetadata, Cl as \u0275\u0275resetView, Hd as \u0275\u0275resolveBody, zy as \u0275\u0275resolveDocument, Wy as \u0275\u0275resolveWindow, Dl as \u0275\u0275restoreView, Vy as \u0275\u0275sanitizeHtml, Vd as \u0275\u0275sanitizeResourceUrl, By as \u0275\u0275sanitizeScript, Hy as \u0275\u0275sanitizeStyle, jd as \u0275\u0275sanitizeUrl, qy as \u0275\u0275sanitizeUrlOrResourceUrl, TC as \u0275\u0275setComponentScope, MC as \u0275\u0275setNgModuleScope, sC as \u0275\u0275storeLet, FD as \u0275\u0275styleMap, fp as \u0275\u0275styleProp, ip as \u0275\u0275syntheticHostListener, Xf as \u0275\u0275syntheticHostProperty, Nf as \u0275\u0275template, WC as \u0275\u0275templateRefExtractor, WD as \u0275\u0275text, hp as \u0275\u0275textInterpolate, uc as \u0275\u0275textInterpolate1, gp as \u0275\u0275textInterpolate2, mp as \u0275\u0275textInterpolate3, yp as \u0275\u0275textInterpolate4, vp as \u0275\u0275textInterpolate5, Ep as \u0275\u0275textInterpolate6, Ip as \u0275\u0275textInterpolate7, Dp as \u0275\u0275textInterpolate8, Cp as \u0275\u0275textInterpolateV, Uy as \u0275\u0275trustConstantHtml, $y as \u0275\u0275trustConstantResourceUrl, rC as \u0275\u0275twoWayBindingSet, Mp as \u0275\u0275twoWayListener, Tp as \u0275\u0275twoWayProperty, Gy as \u0275\u0275validateAttribute, lp as \u0275\u0275viewQuery, dp as \u0275\u0275viewQuerySignal };
/*! Bundled license information:

@angular/core/fesm2022/_untracked-chunk.mjs:
@angular/core/fesm2022/_attribute-chunk.mjs:
@angular/core/fesm2022/_debug_node-chunk.mjs:
@angular/core/fesm2022/_resource-chunk.mjs:
@angular/core/fesm2022/primitives-event-dispatch.mjs:
@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v21.1.0
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
