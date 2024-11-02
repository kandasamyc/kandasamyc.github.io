import{a5 as I,a6 as Y,a7 as E,_ as T,a8 as j,L as C,a9 as V,y as D,aa as N,x as P,ab as $,ac as Q,ad as S,Q as y,A as H,B as z,v,ae as F,af as G,ag as J,ah as K,ai as U,aj as X,w as Z,m as x,p as rr,q as R,i as er,c as ar,n as m,b as tr,a3 as nr,g as sr,H as ir}from"./runtime.DU9zOc3O.js";import{b as ur}from"./disclose-version.B9ICnFsn.js";const q=new Set,A=new Set;function or(r,e,n,t){function s(a){if(t.capture||g.call(e,a),!a.cancelBubble){var o=V,l=D;E(null),T(null);try{return n.call(this,a)}finally{E(o),T(l)}}}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?Y(()=>{e.addEventListener(r,s,t)}):e.addEventListener(r,s,t),s}function hr(r,e,n,t,s){var a={capture:t,passive:s},o=or(r,e,n,a);(e===document.body||e===window||e===document)&&I(()=>{e.removeEventListener(r,o,a)})}function vr(r){for(var e=0;e<r.length;e++)q.add(r[e]);for(var n of A)n(r)}function g(r){var k;var e=this,n=e.ownerDocument,t=r.type,s=((k=r.composedPath)==null?void 0:k.call(r))||[],a=s[0]||r.target,o=0,l=r.__root;if(l){var d=s.indexOf(l);if(d!==-1&&(e===document||e===window)){r.__root=e;return}var _=s.indexOf(e);if(_===-1)return;d<=_&&(o=d)}if(a=s[o]||r.target,a!==e){j(r,"currentTarget",{configurable:!0,get(){return a||n}});var L=V,f=D;E(null),T(null);try{for(var i,u=[];a!==null;){var c=a.assignedSlot||a.parentNode||a.host||null;try{var b=a["__"+t];if(b!==void 0&&!a.disabled)if(C(b)){var[M,...W]=b;M.apply(a,[r,...W])}else b.call(a,r)}catch(p){i?u.push(p):i=p}if(r.cancelBubble||c===e||c===null)break;a=c}if(i){for(let p of u)queueMicrotask(()=>{throw p});throw i}}finally{r.__root=e,delete r.currentTarget,E(L),T(f)}}}const fr=["touchstart","touchmove"];function cr(r){return fr.includes(r)}function gr(r,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=n,r.nodeValue=n==null?"":n+"")}function lr(r,e){return B(r,e)}function pr(r,e){N(),e.intro=e.intro??!1;const n=e.target,t=R,s=v;try{for(var a=P(n);a&&(a.nodeType!==8||a.data!==$);)a=Q(a);if(!a)throw S;y(!0),H(a),z();const o=B(r,{...e,anchor:a});if(v===null||v.nodeType!==8||v.data!==F)throw G(),S;return y(!1),o}catch(o){if(o===S)return e.recover===!1&&J(),N(),K(n),y(!1),lr(r,e);throw o}finally{y(t),H(s)}}const h=new Map;function B(r,{target:e,anchor:n,props:t={},events:s,context:a,intro:o=!0}){N();var l=new Set,d=f=>{for(var i=0;i<f.length;i++){var u=f[i];if(!l.has(u)){l.add(u);var c=cr(u);e.addEventListener(u,g,{passive:c});var b=h.get(u);b===void 0?(document.addEventListener(u,g,{passive:c}),h.set(u,1)):h.set(u,b+1)}}};d(U(q)),A.add(d);var _=void 0,L=X(()=>{var f=n??e.appendChild(Z());return x(()=>{if(a){rr({});var i=ar;i.c=a}s&&(t.$$events=s),R&&ur(f,null),_=r(f,t)||{},R&&(D.nodes_end=v),a&&er()}),()=>{var c;for(var i of l){e.removeEventListener(i,g);var u=h.get(i);--u===0?(document.removeEventListener(i,g),h.delete(i)):h.set(i,u)}A.delete(d),O.delete(_),f!==n&&((c=f.parentNode)==null||c.removeChild(f))}});return O.set(_,L),_}let O=new WeakMap;function yr(r){const e=O.get(r);e&&e()}function dr(r,e,n){if(r==null)return e(void 0),m;const t=tr(()=>r.subscribe(e,n));return t.unsubscribe?()=>t.unsubscribe():t}let w=!1;function wr(r,e,n){const t=n[e]??(n[e]={store:null,source:nr(void 0),unsubscribe:m});if(t.store!==r)if(t.unsubscribe(),t.store=r??null,r==null)t.source.v=void 0,t.unsubscribe=m;else{var s=!0;t.unsubscribe=dr(r,a=>{s?t.source.v=a:ir(t.source,a)}),s=!1}return sr(t.source)}function Er(){const r={};return I(()=>{for(var e in r)r[e].unsubscribe()}),r}function Tr(r){var e=w;try{return w=!1,[r(),w]}finally{w=e}}export{gr as a,wr as b,Tr as c,vr as d,hr as e,pr as h,lr as m,Er as s,yr as u};
