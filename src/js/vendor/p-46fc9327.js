let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),r=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),i=(e,t,n)=>{n&&n.map((([n,l,s])=>{const c=u(e,n),r=a(t,s),i=f(n);o.ael(c,l,r,i),(t.o=t.o||[]).push((()=>o.rel(c,l,r,i)))}))},a=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(e){J(e)}},u=(e,t)=>8&t?l:e,f=e=>0!=(2&e),$=new WeakMap,d=e=>"sc-"+e.$,y={},h=e=>"object"==(e=typeof e)||"function"===e,m=(e,t,...n)=>{let l=null,s=!1,o=!1,c=[];const r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!h(l))&&(l+=""),s&&o?c[c.length-1].h+=l:c.push(s?p(null,l):l),o=s)};if(r(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const i=p(e,null);return i.m=t,c.length>0&&(i.p=c),i},p=(e,t)=>({t:0,g:e,h:t,j:null,p:null,m:null}),b={},w=(e,t,n,s,c,r)=>{if(n!==s){let i=I(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,l=j(n),o=j(s);t.remove(...l.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!l.includes(e))))}else if(i||"o"!==t[0]||"n"!==t[1]){const l=h(s);if((i||l&&null!==s)&&!c)try{if(e.tagName.includes("-"))e[t]=s;else{let l=null==s?"":s;"list"===t?i=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(e){}null==s||!1===s?!1===s&&""!==e.getAttribute(t)||e.removeAttribute(t):(!i||4&r||c)&&!l&&e.setAttribute(t,s=!0===s?"":s)}else t="-"===t[2]?t.slice(3):I(l,a)?a.slice(2):a[2]+t.slice(3),n&&o.rel(e,t,n,!1),s&&o.ael(e,t,s,!1)}},g=/\s/,j=e=>e?e.split(g):[],v=(e,t,n,l)=>{const s=11===t.j.nodeType&&t.j.host?t.j.host:t.j,o=e&&e.m||y,c=t.m||y;for(l in o)l in c||w(s,l,o[l],void 0,n,t.t);for(l in c)w(s,l,o[l],c[l],n,t.t)},S=(t,n,l)=>{let o,c,r=n.p[l],i=0;if(null!==r.h)o=r.j=s.createTextNode(r.h);else if(o=r.j=s.createElement(r.g),v(null,r,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),r.p)for(i=0;i<r.p.length;++i)c=S(t,r,i),c&&o.appendChild(c);return o},M=(e,n,l,s,o,c)=>{let r,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=c;++o)s[o]&&(r=S(null,l,o),r&&(s[o].j=r,i.insertBefore(r,n)))},k=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.j.remove()},O=(e,t)=>e.g===t.g,C=(e,t)=>{const n=t.j=e.j,l=e.p,s=t.p,o=t.h;null===o?(v(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,c=0,r=t.length-1,i=t[0],a=t[r],u=l.length-1,f=l[0],$=l[u];for(;o<=r&&c<=u;)null==i?i=t[++o]:null==a?a=t[--r]:null==f?f=l[++c]:null==$?$=l[--u]:O(i,f)?(C(i,f),i=t[++o],f=l[++c]):O(a,$)?(C(a,$),a=t[--r],$=l[--u]):O(i,$)?(C(i,$),e.insertBefore(i.j,a.j.nextSibling),i=t[++o],$=l[--u]):O(a,f)?(C(a,f),e.insertBefore(a.j,i.j),a=t[--r],f=l[++c]):(s=S(t&&t[c],n,c),f=l[++c],s&&i.j.parentNode.insertBefore(s,i.j));o>r?M(e,null==l[u+1]?null:l[u+1].j,n,l,c,u):c>u&&k(t,o,r)})(n,l,t,s):null!==s?(null!==e.h&&(n.textContent=""),M(n,null,t,s,0,s.length-1)):null!==l&&k(l,0,l.length-1)):e.h!==o&&(n.data=o)},P=e=>B(e).v,x=(e,t,n)=>{const l=P(e);return{emit:e=>E(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},E=(e,t,n)=>{const l=o.ce(t,n);return e.dispatchEvent(l),l},L=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.S=t)))},T=(e,t)=>{if(e.t|=16,!(4&e.t))return L(e,e.M),se((()=>W(e,t)));e.t|=512},W=(e,t)=>{const n=e.i;let l;return t&&(e.t|=256,e.u&&(e.u.map((([e,t])=>F(n,e,t))),e.u=null),l=F(n,"componentWillLoad")),H(l,(()=>A(e,n,t)))},A=async(n,l,o)=>{const c=n.v,r=c["s-rc"];o&&(e=>{const t=e.k,n=e.v,l=t.t,o=((e,t)=>{let n=d(t),l=X.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=$.get(e=e.head||e);o||$.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(n);((n,l)=>{const s=n.v,o=n.O||p(null,null),c=(e=>e&&e.g===b)(l)?l:m(null,null,l);t=s.tagName,c.g=null,c.t|=4,n.O=c,c.j=o.j=s.shadowRoot||s,e=s["s-sc"],C(o,c)})(n,R(n,l)),r&&(r.map((e=>e())),c["s-rc"]=void 0);{const e=c["s-p"],t=()=>U(n);0===e.length?t():(Promise.all(e).then(t),n.t|=4,e.length=0)}},R=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(t){J(t,e.v)}return t},U=e=>{const t=e.v,n=e.M;64&e.t||(e.t|=64,N(t),e.C(t),n||q()),e.S&&(e.S(),e.S=void 0),512&e.t&&le((()=>T(e,!1))),e.t&=-517},q=()=>{N(s.documentElement),le((()=>E(l,"appload",{detail:{namespace:"versions"}})))},F=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){J(e)}},H=(e,t)=>e&&e.then?e.then(t):t(),N=e=>e.classList.add("hydrated"),V=(e,t,n)=>{if(t.P){const l=Object.entries(t.P),s=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>B(this).L.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=B(e),o=s.L.get(t),c=s.t,r=s.i;n=((e,t)=>null==e||h(e)?e:1&t?e+"":e)(n,l.P[t][0]),8&c&&void 0!==o||n===o||(s.L.set(t,n),r&&2==(18&c)&&T(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){o.jmp((()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},_=(e,t={})=>{const n=[],c=t.exclude||[],a=l.customElements,u=s.head,f=u.querySelector("meta[charset]"),$=s.createElement("style"),y=[];let h,m=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>e[1].map((t=>{const l={t:t[0],$:t[1],P:t[2],T:t[3]};l.P=t[2],l.T=t[3];const s=l.$,u=class extends HTMLElement{constructor(e){super(e),G(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){h&&(clearTimeout(h),h=null),m?y.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=B(e),n=t.k,l=()=>{};if(1&t.t)i(e,t,n.T);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){L(t,t.M=n);break}}n.P&&Object.entries(n.P).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=Q(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(V(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){J(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=d(n);if(!X.has(t)){const l=()=>{};((e,t,n)=>{let l=X.get(e);r&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,X.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.M,c=()=>T(t,!0);o&&o["s-rc"]?o["s-rc"].push(c):c()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>(()=>{if(0==(1&o.t)){const e=B(this);e.o&&(e.o.map((e=>e())),e.o=void 0)}})()))}componentOnReady(){return B(this).W}};l.A=e[0],c.includes(s)||a.get(s)||(n.push(s),a.define(s,V(u,l,1)))})))),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),u.insertBefore($,f?f.nextSibling:u.firstChild),m=!1,y.length?y.map((e=>e.connectedCallback())):o.jmp((()=>h=setTimeout(q,30)))},z=new WeakMap,B=e=>z.get(e),D=(e,t)=>z.set(t.i=e,t),G=(e,t)=>{const n={t:0,v:e,k:t,L:new Map};return n.W=new Promise((e=>n.C=e)),e["s-p"]=[],e["s-rc"]=[],i(e,n,t.T),z.set(e,n)},I=(e,t)=>t in e,J=(e,t)=>(0,console.error)(e,t),K=new Map,Q=e=>{const t=e.$.replace(/-/g,"_"),n=e.A,l=K.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(K.set(n,e),e[t])),J)},X=new Map,Y=[],Z=[],ee=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?le(ne):o.raf(ne))},te=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){J(e)}e.length=0},ne=()=>{te(Y),te(Z),(n=Y.length>0)&&o.raf(ne)},le=e=>c().then(e),se=ee(Z,!0);export{_ as b,x as c,P as g,m as h,c as p,D as r}