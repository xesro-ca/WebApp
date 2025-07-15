import{a as ie,b as G,c as ae,d as se,e as le,f as ue,g as O,h as ce,i as de,j as me,k as U,l as k,n as Y,o as fe,p as N,q as K,r as he,s as Q,t as pe,u as ye,v as Re,w as ge,y as we,z as M}from"/build/_shared/chunk-QB6WTHRP.js";import{d as T,e as D}from"/build/_shared/chunk-3EGTKHIP.js";var C=T(D());M();function y(){return y=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},y.apply(this,arguments)}var s=T(D());M();var p=T(D());M();var H=class extends p.default.Component{constructor(r){super(r),this.state={error:r.error||null,location:r.location}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location?{error:r.error||null,location:r.location}:{error:r.error||t.error,location:t.location}}render(){return this.state.error?p.default.createElement(this.props.component,{error:this.state.error}):this.props.children}};function L({error:e}){return p.default.useEffect(()=>{console.error(e)},[e]),p.default.createElement("html",{lang:"en"},p.default.createElement("head",null,p.default.createElement("meta",{charSet:"utf-8"}),p.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"}),p.default.createElement("title",null,"Application Error!")),p.default.createElement("body",null,p.default.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},p.default.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.stack?p.default.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},e.stack):null),p.default.createElement("script",{dangerouslySetInnerHTML:{__html:`
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
              );
            `}})))}function Ee(){let e=N();if(O(e))return p.default.createElement(Se,{caught:e});if(e instanceof Error)return p.default.createElement(L,{error:e});{let r=e==null?"Unknown Error":typeof e=="object"&&"toString"in e?e.toString():JSON.stringify(e);return p.default.createElement(L,{error:new Error(r)})}}var xe=p.default.createContext(void 0);function et(){return(0,p.useContext)(xe)}function ve({catch:e,component:r,children:t}){return e?p.default.createElement(xe.Provider,{value:e},p.default.createElement(r,null)):p.default.createElement(p.default.Fragment,null,t)}function _e(){let e=et();return p.default.createElement(Se,{caught:e})}function Se({caught:e}){return p.default.createElement("html",{lang:"en"},p.default.createElement("head",null,p.default.createElement("meta",{charSet:"utf-8"}),p.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"}),p.default.createElement("title",null,"Unhandled Thrown Response!")),p.default.createElement("body",null,p.default.createElement("h1",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},e.status," ",e.statusText),p.default.createElement("script",{dangerouslySetInnerHTML:{__html:`
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws 404s (and other responses). Check out https://remix.run/guides/not-found for more information."
              );
            `}})))}function w(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}M();async function j(e,r){if(e.id in r)return r[e.id];try{let t=await import(e.module);return r[e.id]=t,t}catch{return window.location.reload(),new Promise(()=>{})}}function be(e,r,t){let n=e.map(a=>{var i;let l=r[a.route.id];return((i=l.links)===null||i===void 0?void 0:i.call(l))||[]}).flat(1),o=nt(e,t);return ot(n,o)}async function Ce(e){if(!e.links)return;let r=e.links();if(!r)return;let t=[];for(let o of r)!B(o)&&o.rel==="stylesheet"&&t.push({...o,rel:"preload",as:"style"});let n=t.filter(o=>!o.media||window.matchMedia(o.media).matches);await Promise.all(n.map(tt))}async function tt(e){return new Promise(r=>{let t=document.createElement("link");Object.assign(t,e);function n(){document.head.contains(t)&&document.head.removeChild(t)}t.onload=()=>{n(),r()},t.onerror=()=>{n(),r()},document.head.appendChild(t)})}function B(e){return e!=null&&typeof e.page=="string"}function rt(e){return e==null?!1:e.href==null?e.rel==="preload"&&(typeof e.imageSrcSet=="string"||typeof e.imagesrcset=="string")&&(typeof e.imageSizes=="string"||typeof e.imagesizes=="string"):typeof e.rel=="string"&&typeof e.href=="string"}async function ke(e,r,t){return(await Promise.all(e.map(async o=>{let a=await j(r.routes[o.route.id],t);return a.links?a.links():[]}))).flat(1).filter(rt).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="preload"?{...o,rel:"prefetch"}:{...o,rel:"prefetch",as:"style"})}function Z(e,r,t,n,o,a){let i=Te(e),l=(m,d)=>t[d]?m.route.id!==t[d].route.id:!0,c=(m,d)=>{var f;return t[d].pathname!==m.pathname||((f=t[d].route.path)===null||f===void 0?void 0:f.endsWith("*"))&&t[d].params["*"]!==m.params["*"]};return a==="data"&&o.search!==i.search?r.filter((m,d)=>{if(!n.routes[m.route.id].hasLoader)return!1;if(l(m,d)||c(m,d))return!0;if(m.route.shouldRevalidate){var R;let h=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((R=t[0])===null||R===void 0?void 0:R.params)||{},nextUrl:new URL(e,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):r.filter((m,d)=>{let f=n.routes[m.route.id];return(a==="assets"||f.hasLoader)&&(l(m,d)||c(m,d))})}function Me(e,r,t){let n=Te(e);return q(r.filter(o=>t.routes[o.route.id].hasLoader).map(o=>{let{pathname:a,search:i}=n,l=new URLSearchParams(i);return l.set("_data",o.route.id),`${a}?${l}`}))}function Le(e,r){return q(e.map(t=>{let n=r.routes[t.route.id],o=[n.module];return n.imports&&(o=o.concat(n.imports)),o}).flat(1))}function nt(e,r){return q(e.map(t=>{let n=r.routes[t.route.id],o=[n.module];return n.imports&&(o=o.concat(n.imports)),o}).flat(1))}function q(e){return[...new Set(e)]}function ot(e,r){let t=new Set,n=new Set(r);return e.reduce((o,a)=>{if(!B(a)&&a.as==="script"&&a.href&&n.has(a.href))return o;let l=JSON.stringify(a);return t.has(l)||(t.add(l),o.push(a)),o},[])}function Te(e){let r=ie(e);return r.search===void 0&&(r.search=""),r}var it={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},at=/[&><\u2028\u2029]/g;function A(e){return e.replace(at,r=>it[r])}function ee(e){return{__html:e}}function Oe(){let e=s.useContext(de);return w(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function F(){let e=s.useContext(me);return w(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var P=s.createContext(void 0);P.displayName="Remix";function E(){let e=s.useContext(P);return w(e,"You must render this element inside a <Remix> element"),e}function Ne({id:e}){let{routeModules:r,future:t}=E();w(r,`Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`);let{default:n,ErrorBoundary:o,CatchBoundary:a}=r[e];return!n&&(o||!t.v2_errorBoundary&&a)&&(n=Q),w(n,`Route "${e}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`),s.createElement(n,null)}function Ae({id:e}){let{future:r,routeModules:t}=E();w(t,`Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`);let n=N(),{CatchBoundary:o,ErrorBoundary:a}=t[e];if(r.v2_errorBoundary){if(e==="root"&&(a||(a=Ee)),a)return s.createElement(a,null);throw n}if(e==="root"&&(o||(o=_e),a||(a=L)),O(n)){let i=n;if(i!=null&&i.error&&i.status!==404&&a)return s.createElement(a,{error:i.error});if(o)return s.createElement(ve,{catch:n,component:o})}if(n instanceof Error&&a)return s.createElement(a,{error:n});throw n}function $e(e,r){let[t,n]=s.useState(!1),[o,a]=s.useState(!1),{onFocus:i,onBlur:l,onMouseEnter:c,onMouseLeave:u,onTouchStart:m}=r,d=s.useRef(null);s.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let h=_=>{_.forEach(X=>{a(X.isIntersecting)})},g=new IntersectionObserver(h,{threshold:.5});return d.current&&g.observe(d.current),()=>{g.disconnect()}}},[e]);let f=()=>{e==="intent"&&n(!0)},R=()=>{e==="intent"&&(n(!1),a(!1))};return s.useEffect(()=>{if(t){let h=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(h)}}},[t]),[o,d,{onFocus:$(i,f),onBlur:$(l,R),onMouseEnter:$(c,f),onMouseLeave:$(u,R),onTouchStart:$(m,f)}]}var Fe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pe=s.forwardRef(({to:e,prefetch:r="none",...t},n)=>{let o=typeof e=="string"&&Fe.test(e),a=U(e),[i,l,c]=$e(r,t);return s.createElement(s.Fragment,null,s.createElement(ge,y({},t,c,{ref:je(n,l),to:e})),i&&!o?s.createElement(I,{page:a}):null)});Pe.displayName="NavLink";var Ue=s.forwardRef(({to:e,prefetch:r="none",...t},n)=>{let o=typeof e=="string"&&Fe.test(e),a=U(e),[i,l,c]=$e(r,t);return s.createElement(s.Fragment,null,s.createElement(Re,y({},t,c,{ref:je(n,l),to:e})),i&&!o?s.createElement(I,{page:a}):null)});Ue.displayName="Link";function $(e,r){return t=>{e&&e(t),t.defaultPrevented||r(t)}}var st="\u26A0\uFE0F REMIX FUTURE CHANGE: The behavior of links `imagesizes` and `imagesrcset` will be changing in v2. Only the React camel case versions will be valid. Please change to `imageSizes` and `imageSrcSet`. For instructions on making this change see https://remix.run/docs/en/v1.15.0/pages/v2#links-imagesizes-and-imagesrcset";function lt(){let{manifest:e,routeModules:r}=E(),{errors:t,matches:n}=F(),o=t?n.slice(0,n.findIndex(i=>t[i.route.id])+1):n,a=s.useMemo(()=>be(o,r,e),[o,r,e]);return s.useEffect(()=>{a.some(i=>"imagesizes"in i||"imagesrcset"in i)&&void 0},[a]),s.createElement(s.Fragment,null,a.map(i=>{if(B(i))return s.createElement(I,y({key:i.page},i));let l=null;return"useId"in s?(i.imagesrcset&&(i.imageSrcSet=l=i.imagesrcset,delete i.imagesrcset),i.imagesizes&&(i.imageSizes=i.imagesizes,delete i.imagesizes)):(i.imageSrcSet&&(i.imagesrcset=l=i.imageSrcSet,delete i.imageSrcSet),i.imageSizes&&(i.imagesizes=i.imageSizes,delete i.imageSizes)),s.createElement("link",y({key:i.rel+(i.href||"")+(l||"")},i))}))}function I({page:e,...r}){let{router:t}=Oe(),n=s.useMemo(()=>G(t.routes,e),[t.routes,e]);return n?s.createElement(ct,y({page:e,matches:n},r)):(console.warn(`Tried to prefetch ${e} but no routes matched.`),null)}function ut(e){let{manifest:r,routeModules:t}=E(),[n,o]=s.useState([]);return s.useEffect(()=>{let a=!1;return ke(e,r,t).then(i=>{a||o(i)}),()=>{a=!0}},[e,r,t]),n}function ct({page:e,matches:r,...t}){let n=k(),{manifest:o}=E(),{matches:a}=F(),i=s.useMemo(()=>Z(e,r,a,o,n,"data"),[e,r,a,o,n]),l=s.useMemo(()=>Z(e,r,a,o,n,"assets"),[e,r,a,o,n]),c=s.useMemo(()=>Me(e,i,o),[i,e,o]),u=s.useMemo(()=>Le(l,o),[l,o]),m=ut(l);return s.createElement(s.Fragment,null,c.map(d=>s.createElement("link",y({key:d,rel:"prefetch",as:"fetch",href:d},t))),u.map(d=>s.createElement("link",y({key:d,rel:"modulepreload",href:d},t))),m.map(d=>s.createElement("link",y({key:d.href},d))))}function dt(){let{routeModules:e}=E(),{errors:r,matches:t,loaderData:n}=F(),o=k(),a=r?t.slice(0,t.findIndex(c=>r[c.route.id])+1):t,i={},l={};for(let c of a){let u=c.route.id,m=n[u],d=c.params,f=e[u];if(f.meta){let R=typeof f.meta=="function"?f.meta({data:m,parentsData:l,params:d,location:o}):f.meta;if(R&&Array.isArray(R))throw new Error("The route at "+c.route.path+" returns an array. This is only supported with the `v2_meta` future flag in the Remix config. Either set the flag to `true` or update the route's meta function to return an object.\n\nTo reference the v1 meta function API, see https://remix.run/route/meta");Object.assign(i,R)}l[u]=m}return s.createElement(s.Fragment,null,Object.entries(i).map(([c,u])=>{if(!u)return null;if(["charset","charSet"].includes(c))return s.createElement("meta",{key:"charSet",charSet:u});if(c==="title")return s.createElement("title",{key:"title"},String(u));let m=/^(og|music|video|article|book|profile|fb):.+$/.test(c);return[u].flat().map(d=>m?s.createElement("meta",{property:c,content:d,key:c+d}):typeof d=="string"?s.createElement("meta",{name:c,content:d,key:c+d}):s.createElement("meta",y({key:c+JSON.stringify(d)},d)))}))}function mt(){let{routeModules:e}=E(),{errors:r,matches:t,loaderData:n}=F(),o=k(),a=r?t.slice(0,t.findIndex(u=>r[u.route.id])+1):t,i=[],l=null,c=[];for(let u=0;u<a.length;u++){let m=a[u],d=m.route.id,f=n[d],R=m.params,h=e[d],g=[],_={id:d,data:f,meta:[],params:m.params,pathname:m.pathname,handle:m.route.handle,get route(){return console.warn("The meta function in "+m.route.path+" accesses the `route` property on `matches`. This is deprecated and will be removed in Remix version 2. See"),m.route}};if(c[u]=_,h!=null&&h.meta?g=typeof h.meta=="function"?h.meta({data:f,params:R,location:o,matches:c}):Array.isArray(h.meta)?[...h.meta]:h.meta:l&&(g=[...l]),g=g||[],!Array.isArray(g))throw new Error("The `v2_meta` API is enabled in the Remix config, but the route at "+m.route.path+` returns an invalid value. In v2, all route meta functions must return an array of meta objects.

To reference the v1 meta function API, see https://remix.run/route/meta`);_.meta=g,c[u]=_,i=[...g],l=i}return s.createElement(s.Fragment,null,i.flat().map(u=>{if(!u)return null;if("tagName"in u){let m=u.tagName;return delete u.tagName,ft(m)?s.createElement(m,y({key:JSON.stringify(u)},u)):(console.warn(`A meta object uses an invalid tagName: ${m}. Expected either 'link' or 'meta'`),null)}if("title"in u)return s.createElement("title",{key:"title"},String(u.title));if("charset"in u&&(u.charSet??(u.charSet=u.charset),delete u.charset),"charSet"in u&&u.charSet!=null)return typeof u.charSet=="string"?s.createElement("meta",{key:"charSet",charSet:u.charSet}):null;if("script:ld+json"in u){let m=null;try{m=JSON.stringify(u["script:ld+json"])}catch{}return m!=null&&s.createElement("script",{key:"script:ld+json",type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(u["script:ld+json"])}})}return s.createElement("meta",y({key:JSON.stringify(u)},u))}))}function ft(e){return typeof e=="string"&&/^(meta|link)$/.test(e)}function ht(){let{future:e}=E();return e!=null&&e.v2_meta?s.createElement(mt,null):s.createElement(dt,null)}function He(e){return s.createElement(pe,e)}var te=!1;function pt(e){let{manifest:r,serverHandoffString:t,abortDelay:n}=E(),{router:o,static:a,staticContext:i}=Oe(),{matches:l}=F(),c=Y();s.useEffect(()=>{te=!0},[]);let u=[],m=s.useMemo(()=>{var h;let g=i?`window.__remixContext = ${t};`:" ",_=i?.activeDeferreds;g+=_?["__remixContext.p = function(v,e,p,x) {","  if (typeof e !== 'undefined') {",`    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,"    p=Promise.reject(x);","  } else {","    p=Promise.resolve(v);","  }","  return p;","};","__remixContext.n = function(i,k) {","  __remixContext.t = __remixContext.t || {};","  __remixContext.t[i] = __remixContext.t[i] || {};","  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});",typeof n=="number"?`setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${n});`:"","  return p;","};","__remixContext.r = function(i,k,v,e,p,x) {","  p = __remixContext.t[i][k];","  if (typeof e !== 'undefined') {",`    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,"    p.e(x);","  } else {","    p.r(v);","  }","};"].join(`
`)+Object.entries(_).map(([S,b])=>{let Qe=new Set(b.pendingKeys),Ze=b.deferredKeys.map(x=>{if(Qe.has(x))return u.push(s.createElement(De,{key:`${S} | ${x}`,deferredData:b,routeId:S,dataKey:x,scriptProps:e})),`${JSON.stringify(x)}:__remixContext.n(${JSON.stringify(S)}, ${JSON.stringify(x)})`;{let V=b.data[x];if(typeof V._error<"u"){let qe={message:"Unexpected Server Error",stack:void 0};return`${JSON.stringify(x)}:__remixContext.p(!1, ${A(JSON.stringify(qe))})`}else{if(typeof V._data>"u")throw new Error(`The deferred data for ${x} was not resolved, did you forget to return data from a deferred promise?`);return`${JSON.stringify(x)}:__remixContext.p(${A(JSON.stringify(V._data))})`}}}).join(`,
`);return`Object.assign(__remixContext.state.loaderData[${JSON.stringify(S)}], {${Ze}});`}).join(`
`)+(u.length>0?`__remixContext.a=${u.length};`:""):"";let X=a?`${(h=r.hmr)!==null&&h!==void 0&&h.runtime?`import ${JSON.stringify(r.hmr.runtime)};`:""}import ${JSON.stringify(r.url)};
${l.map((S,b)=>`import * as route${b} from ${JSON.stringify(r.routes[S.route.id].module)};`).join(`
`)}
window.__remixRouteModules = {${l.map((S,b)=>`${JSON.stringify(S.route.id)}:route${b}`).join(",")}};

import(${JSON.stringify(r.entry.module)});`:" ";return s.createElement(s.Fragment,null,s.createElement("script",y({},e,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:ee(g),type:void 0})),s.createElement("script",y({},e,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:ee(X),type:"module",async:!0})))},[]);if(!a&&typeof __remixContext=="object"&&__remixContext.a)for(let h=0;h<__remixContext.a;h++)u.push(s.createElement(De,{key:h,scriptProps:e}));let d=s.useMemo(()=>{if(c.location){let h=G(o.routes,c.location);return w(h,`No routes match path "${c.location.pathname}"`),h}return[]},[c.location,o.routes]),f=l.concat(d).map(h=>{let g=r.routes[h.route.id];return(g.imports||[]).concat([g.module])}).flat(1),R=te?[]:r.entry.imports.concat(f);return te?null:s.createElement(s.Fragment,null,s.createElement("link",{rel:"modulepreload",href:r.entry.module,crossOrigin:e.crossOrigin}),Rt(R).map(h=>s.createElement("link",{key:h,rel:"modulepreload",href:h,crossOrigin:e.crossOrigin})),m,u)}function De({dataKey:e,deferredData:r,routeId:t,scriptProps:n}){return typeof document>"u"&&r&&e&&t&&w(r.pendingKeys.includes(e),`Deferred data for route ${t} with key ${e} was not pending but tried to render a script for it.`),s.createElement(s.Suspense,{fallback:typeof document>"u"&&r&&e&&t?null:s.createElement("script",y({},n,{async:!0,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:" "}}))},typeof document>"u"&&r&&e&&t?s.createElement(He,{resolve:r.data[e],errorElement:s.createElement(yt,{dataKey:e,routeId:t,scriptProps:n}),children:o=>s.createElement("script",y({},n,{async:!0,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`__remixContext.r(${JSON.stringify(t)}, ${JSON.stringify(e)}, ${A(JSON.stringify(o))});`}}))}):s.createElement("script",y({},n,{async:!0,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:" "}})))}function yt({dataKey:e,routeId:r,scriptProps:t}){let n=K(),o={message:"Unexpected Server Error",stack:void 0};return s.createElement("script",y({},t,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`__remixContext.r(${JSON.stringify(r)}, ${JSON.stringify(e)}, !1, ${A(JSON.stringify(o))});`}}))}function Rt(e){return[...new Set(e)]}function re(){let{routeModules:e}=E(),r=fe();return s.useMemo(()=>r.map(t=>({id:t.id,pathname:t.pathname,params:t.params,data:t.data,handle:e[t.id].handle})),[r,e])}var gt=()=>null;function je(...e){return r=>{e.forEach(t=>{typeof t=="function"?t(r):t!=null&&(t.current=r)})}}ce();function Be(e){if(!e)return null;let r=Object.entries(e),t={};for(let[n,o]of r)if(o&&o.__type==="RouteErrorResponse")t[n]=new ue(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){let a=new Error(o.message);a.stack=o.stack,t[n]=a}else t[n]=o;return t}var oe=T(D());M();ce();function Je(e){return e.headers.get("X-Remix-Catch")!=null}function wt(e){return e.headers.get("X-Remix-Error")!=null}function ze(e){return e.headers.get("X-Remix-Redirect")!=null}function We(e){var r;return!!((r=e.headers.get("Content-Type"))!==null&&r!==void 0&&r.match(/text\/remix-deferred/))}async function ne(e,r,t=0){let n=new URL(e.url);n.searchParams.set("_data",r);let o={signal:e.signal};if(e.method!=="GET"){o.method=e.method;let l=e.headers.get("Content-Type");l&&/\bapplication\/json\b/.test(l)?(o.headers={"Content-Type":l},o.body=JSON.stringify(await e.json())):l&&/\btext\/plain\b/.test(l)?(o.headers={"Content-Type":l},o.body=await e.text()):l&&/\bapplication\/x-www-form-urlencoded\b/.test(l)?o.body=new URLSearchParams(await e.text()):o.body=await e.formData()}t>0&&await new Promise(l=>setTimeout(l,5**t*10));let a=window.__remixRevalidation,i=await fetch(n.href,o).catch(l=>{if(typeof a=="number"&&a===window.__remixRevalidation&&l?.name==="TypeError"&&t<3)return ne(e,r,t+1);throw l});if(wt(i)){let l=await i.json(),c=new Error(l.message);return c.stack=l.stack,c}return i}var Et="__deferred_promise:";async function Xe(e){if(!e)throw new Error("parseDeferredReadableStream requires stream argument");let r,t={};try{let n=xt(e),a=(await n.next()).value;if(!a)throw new Error("no critical data");let i=JSON.parse(a);if(typeof i=="object"&&i!==null)for(let[l,c]of Object.entries(i))typeof c!="string"||!c.startsWith(Et)||(r=r||{},r[l]=new Promise((u,m)=>{t[l]={resolve:d=>{u(d),delete t[l]},reject:d=>{m(d),delete t[l]}}}));return(async()=>{try{for await(let l of n){let[c,...u]=l.split(":"),m=u.join(":"),d=JSON.parse(m);if(c==="data")for(let[f,R]of Object.entries(d))t[f]&&t[f].resolve(R);else if(c==="error")for(let[f,R]of Object.entries(d)){let h=new Error(R.message);h.stack=R.stack,t[f]&&t[f].reject(h)}}for(let[l,c]of Object.entries(t))c.reject(new ae(`Deferred ${l} will never be resolved`))}catch(l){for(let c of Object.values(t))c.reject(l)}})(),new se({...i,...r})}catch(n){for(let o of Object.values(t))o.reject(n);throw n}}async function*xt(e){let r=e.getReader(),t=[],n=[],o=!1,a=new TextEncoder,i=new TextDecoder,l=async()=>{if(n.length>0)return n.shift();for(;!o&&n.length===0;){let u=await r.read();if(u.done){o=!0;break}t.push(u.value);try{let d=i.decode(Ie(...t)).split(`

`);if(d.length>=2&&(n.push(...d.slice(0,-1)),t=[a.encode(d.slice(-1).join(`

`))]),n.length>0)break}catch{continue}}return n.length>0||t.length>0&&(n=i.decode(Ie(...t)).split(`

`).filter(m=>m),t=[]),n.shift()},c=await l();for(;c;)yield c,c=await l()}function Ie(...e){let r=new Uint8Array(e.reduce((n,o)=>n+o.length,0)),t=0;for(let n of e)r.set(n,t),t+=n.length;return r}function Ge(e){let r={};return Object.values(e).forEach(t=>{let n=t.parentId||"";r[n]||(r[n]=[]),r[n].push(t)}),r}function Ye(e,r,t,n){return J(r,t,n,"",Ge(r),e)}function J(e,r,t,n="",o=Ge(e),a){return(o[n]||[]).map(i=>{let l=t.v2_errorBoundary===!0?i.id==="root"||i.hasErrorBoundary:i.id==="root"||i.hasCatchBoundary||i.hasErrorBoundary,c={caseSensitive:i.caseSensitive,element:oe.createElement(Ne,{id:i.id}),errorElement:l?oe.createElement(Ae,{id:i.id}):void 0,id:i.id,index:i.index,path:i.path,handle:void 0,loader:Ve(i,r,!1),action:Ve(i,r,!0),shouldRevalidate:vt(i,r,a)},u=J(e,r,t,i.id,o,a);return u.length>0&&(c.children=u),c})}function vt(e,r,t){let n=!1;return function(o){let a=r[e.id];return w(a,`Expected route module to be loaded for ${e.id}`),t!==void 0&&!n?(n=!0,t.has(e.id)):a.shouldRevalidate?a.shouldRevalidate(o):o.defaultShouldRevalidate}}async function _t(e,r){let t=await j(e,r);return await Ce(t),t}function Ve(e,r,t){return async({request:n})=>{let o=_t(e,r);try{if(t&&!e.hasAction){let i=`Route "${e.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`;throw console.error(i),new Error(i)}else if(!t&&!e.hasLoader)return null;let a=await ne(n,e.id);if(a instanceof Error)throw a;if(ze(a))throw St(a);if(Je(a))throw a;return We(a)&&a.body?await Xe(a.body):a}finally{await o}}}function St(e){let r=parseInt(e.headers.get("X-Remix-Status"),10)||302,t=e.headers.get("X-Remix-Redirect"),n={},o=e.headers.get("X-Remix-Revalidate");return o&&(n["X-Remix-Revalidate"]=o),le(t,{status:r,headers:n})}var v,z;import.meta&&import.meta.hot&&import.meta.hot.accept("remix:manifest",async({assetsManifest:e,needsRevalidation:r})=>{let t=[...new Set(v.state.matches.map(l=>l.route.id).concat(Object.keys(window.__remixRouteModules)))];z&&z.abort(),z=new AbortController;let n=z.signal,o=Object.assign({},window.__remixRouteModules,Object.fromEntries((await Promise.all(t.map(async l=>{var c,u,m,d;if(!e.routes[l])return null;let f=await import(e.routes[l].module+`?t=${(c=e.hmr)===null||c===void 0?void 0:c.timestamp}`);return[l,{...f,default:f.default?((u=window.__remixRouteModules[l])===null||u===void 0?void 0:u.default)??f.default:f.default,CatchBoundary:f.CatchBoundary?((m=window.__remixRouteModules[l])===null||m===void 0?void 0:m.CatchBoundary)??f.CatchBoundary:f.CatchBoundary,ErrorBoundary:f.ErrorBoundary?((d=window.__remixRouteModules[l])===null||d===void 0?void 0:d.ErrorBoundary)??f.ErrorBoundary:f.ErrorBoundary}]}))).filter(Boolean)));Object.assign(window.__remixRouteModules,o);let a=Ye(r,e.routes,window.__remixRouteModules,window.__remixContext.future);v._internalSetRoutes(a);let i=v.subscribe(l=>{if(l.revalidation==="idle"){if(i(),n.aborted)return;setTimeout(()=>{Object.assign(window.__remixManifest,e),window.$RefreshRuntime$.performReactRefresh()},1)}});window.__remixRevalidation=(window.__remixRevalidation||0)+1,v.revalidate()});function bt(e){if(!v){let n=J(window.__remixManifest.routes,window.__remixRouteModules,window.__remixContext.future),o=window.__remixContext.state;o&&o.errors&&(o={...o,errors:Be(o.errors)}),v=ye(n,{hydrationData:o,future:{v7_normalizeFormMethod:window.__remixContext.future.v2_normalizeFormMethod}});let a=window.__remixContext.url,i=window.location.pathname;if(a!==i){let l=`Initial URL (${a}) does not match URL at time of hydration (${i}), reloading page...`;console.error(l),window.location.reload()}}let[r,t]=C.useState(v.state.location);return C.useLayoutEffect(()=>v.subscribe(n=>{n.location!==r&&t(n.location)}),[r]),C.createElement(P.Provider,{value:{manifest:window.__remixManifest,routeModules:window.__remixRouteModules,future:window.__remixContext.future}},C.createElement(H,{location:r,component:L},C.createElement(he,{router:v,fallbackElement:null,future:{v7_startTransition:!0}})))}M();var W=T(D());M();var Ke="positions";function Ct({getKey:e,...r}){let t=k(),n=re();we({getKey:e,storageKey:Ke});let o=W.useMemo(()=>{if(!e)return null;let i=e(t,n);return i!==t.key?i:null},[]),a=((i,l)=>{if(!window.history.state||!window.history.state.key){let c=Math.random().toString(32).slice(2);window.history.replaceState({key:c},"")}try{let u=JSON.parse(sessionStorage.getItem(i)||"{}")[l||window.history.state.key];typeof u=="number"&&window.scrollTo(0,u)}catch(c){console.error(c),sessionStorage.removeItem(i)}}).toString();return W.createElement("script",y({},r,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${a})(${JSON.stringify(Ke)}, ${JSON.stringify(o)})`}}))}export{Pe as a,Ue as b,lt as c,ht as d,pt as e,gt as f,bt as g,Ct as h};
/*! Bundled license information:

@remix-run/react/dist/esm/_virtual/_rollupPluginBabelHelpers.js:
  (**
   * @remix-run/react v1.18.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/errorBoundaries.js:
  (**
   * @remix-run/react v1.18.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/invariant.js:
  (**
   * @remix-run/react v1.18.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/routeModules.js:
  (**
   * @remix-run/react v1.18.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/links.js:
  (**
   * @remix-run/react v1.18.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/markup.js:
  (**
   * @remix-run/react v1.18.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/components.js:
  (**
   * @remix-run/react v1.18.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/errors.js:
  (**
   * @remix-run/react v1.18.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/data.js:
  (**
   * @remix-run/react v1.18.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/routes.js:
  (**
   * @remix-run/react v1.18.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/browser.js:
  (**
   * @remix-run/react v1.18.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/scroll-restoration.js:
  (**
   * @remix-run/react v1.18.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/index.js:
  (**
   * @remix-run/react v1.18.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
