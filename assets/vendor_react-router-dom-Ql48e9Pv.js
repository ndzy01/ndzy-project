import{r as c,R as k}from"./vendor_react-xEkgX5Pu.js";import"./vendor_react-dom-L98pROJC.js";import{R as O,N as _,u as x,a as F,b as P,c as B}from"./vendor_react-router-nWmcyvaX.js";import{c as j,s as K,b as g}from"./vendor_@remix-run-x3ZxUAMN.js";/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function w(){return w=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},w.apply(this,arguments)}function N(e,n){if(e==null)return{};var i={},t=Object.keys(e),s,a;for(a=0;a<t.length;a++)s=t[a],!(n.indexOf(s)>=0)&&(i[s]=e[s]);return i}function I(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function A(e,n){return e.button===0&&(!n||n==="_self")&&!I(e)}const W=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],z="startTransition",y=k[z];function Q(e){let{basename:n,children:i,future:t,window:s}=e,a=c.useRef();a.current==null&&(a.current=j({window:s,v5Compat:!0}));let o=a.current,[u,l]=c.useState({action:o.action,location:o.location}),{v7_startTransition:r}=t||{},f=c.useCallback(d=>{r&&y?y(()=>l(d)):l(d)},[l,r]);return c.useLayoutEffect(()=>o.listen(f),[o,f]),c.createElement(O,{basename:n,children:i,location:u.location,navigationType:u.action,navigator:o,future:t})}const V=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",G=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Y=c.forwardRef(function(n,i){let{onClick:t,relative:s,reloadDocument:a,replace:o,state:u,target:l,to:r,preventScrollReset:f,unstable_viewTransition:d}=n,m=N(n,W),{basename:U}=c.useContext(_),v,b=!1;if(typeof r=="string"&&G.test(r)&&(v=r,V))try{let p=new URL(window.location.href),h=r.startsWith("//")?new URL(p.protocol+r):new URL(r),R=K(h.pathname,U);h.origin===p.origin&&R!=null?r=R+h.search+h.hash:b=!0}catch{}let L=x(r,{relative:s}),C=M(r,{replace:o,state:u,target:l,preventScrollReset:f,relative:s,unstable_viewTransition:d});function E(p){t&&t(p),p.defaultPrevented||C(p)}return c.createElement("a",w({},m,{href:v||L,onClick:b||a?t:E,ref:i,target:l}))});var S;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(S||(S={}));var T;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(T||(T={}));function M(e,n){let{target:i,replace:t,state:s,preventScrollReset:a,relative:o,unstable_viewTransition:u}=n===void 0?{}:n,l=F(),r=P(),f=B(e,{relative:o});return c.useCallback(d=>{if(A(d,i)){d.preventDefault();let m=t!==void 0?t:g(r)===g(f);l(e,{replace:m,state:s,preventScrollReset:a,relative:o,unstable_viewTransition:u})}},[r,l,f,t,s,i,e,a,o,u])}export{Q as B,Y as L};