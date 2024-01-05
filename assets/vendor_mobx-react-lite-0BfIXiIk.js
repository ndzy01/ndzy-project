import{r as m}from"./vendor_react-dom-L98pROJC.js";import{r as u,a as p}from"./vendor_react-xEkgX5Pu.js";import{s as w}from"./vendor_use-sync-external-store-MHW6hckK.js";import{m as g,c as h,g as R,R as S}from"./vendor_mobx-R_5jxYWS.js";if(!u.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!g)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");function T(e){e()}function E(e){e||(e=T),h({reactionScheduler:e})}function O(e){return R(e)}var P=1e4,j=1e4,x=function(){function e(t){var r=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(i){i===void 0&&(i=P),clearTimeout(r.sweepTimeout),r.sweepTimeout=void 0;var n=Date.now();r.registrations.forEach(function(a,o){n-a.registeredAt>=i&&(r.finalize(a.value),r.registrations.delete(o))}),r.registrations.size>0&&r.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){r.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(t,r,i){this.registrations.set(i,{value:r,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(t){this.registrations.delete(t)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.sweepTimeout===void 0&&(this.sweepTimeout=setTimeout(this.sweep,j))}}),e}(),z=typeof FinalizationRegistry<"u"?FinalizationRegistry:x,c=new z(function(e){var t;(t=e.reaction)===null||t===void 0||t.dispose(),e.reaction=null}),F=function(){};function v(e){e.reaction=new S("observer".concat(e.name),function(){var t;e.stateVersion=Symbol(),(t=e.onStoreChange)===null||t===void 0||t.call(e)})}function $(e,t){t===void 0&&(t="observed");var r=p.useRef(null);if(!r.current){var i={reaction:null,onStoreChange:null,stateVersion:Symbol(),name:t,subscribe:function(l){return c.unregister(i),i.onStoreChange=l,i.reaction||(v(i),i.stateVersion=Symbol()),function(){var f;i.onStoreChange=null,(f=i.reaction)===null||f===void 0||f.dispose(),i.reaction=null}},getSnapshot:function(){return i.stateVersion}};r.current=i}var n=r.current;n.reaction||(v(n),c.register(r,n,n)),p.useDebugValue(n.reaction,O),w.useSyncExternalStore(n.subscribe,n.getSnapshot,F);var a,o;if(n.reaction.track(function(){try{a=e()}catch(l){o=l}}),o)throw o;return a}var d=typeof Symbol=="function"&&Symbol.for,b=d?Symbol.for("react.forward_ref"):typeof u.forwardRef=="function"&&u.forwardRef(function(e){return null}).$$typeof,y=d?Symbol.for("react.memo"):typeof u.memo=="function"&&u.memo(function(e){return null}).$$typeof;function k(e,t){var r;if(y&&e.$$typeof===y)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");var i=(r=t==null?void 0:t.forwardRef)!==null&&r!==void 0?r:!1,n=e,a=e.displayName||e.name;if(b&&e.$$typeof===b&&(i=!0,n=e.render,typeof n!="function"))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var o=function(l,f){return $(function(){return n(l,f)},a)};return o.displayName=e.displayName,Object.defineProperty(o,"name",{value:e.name,writable:!0,configurable:!0}),e.contextTypes&&(o.contextTypes=e.contextTypes),i&&(o=u.forwardRef(o)),o=u.memo(o),I(e,o),o}var D={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};function I(e,t){Object.keys(e).forEach(function(r){D[r]||Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}var s;E(m.unstable_batchedUpdates);s=c.finalizeAllImmediately;export{k as o};
