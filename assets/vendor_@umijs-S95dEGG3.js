import{r as j}from"./vendor_react-xEkgX5Pu.js";var C=function(){return C=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},C.apply(this,arguments)};function se(e){var r,t=(typeof window<"u"?window:{}).URL,n=new t((r=window==null?void 0:window.location)===null||r===void 0?void 0:r.href);return Object.keys(e).forEach(function(a){var u=e[a];u!=null?Array.isArray(u)?(n.searchParams.delete(a),u.forEach(function(i){n.searchParams.append(a,i)})):u instanceof Date?Number.isNaN(u.getTime())||n.searchParams.set(a,u.toISOString()):typeof u=="object"?n.searchParams.set(a,JSON.stringify(u)):n.searchParams.set(a,u):n.searchParams.delete(a)}),n}function dr(e,r){var t;e===void 0&&(e={}),r===void 0&&(r={disabled:!1});var n=j.useState(),a=n[1],u=typeof window<"u"&&((t=window==null?void 0:window.location)===null||t===void 0?void 0:t.search),i=j.useMemo(function(){return r.disabled?{}:new URLSearchParams(u||{})},[r.disabled,u]),f=j.useMemo(function(){if(r.disabled)return{};if(typeof window>"u"||!window.URL)return{};var c=[];i.forEach(function(d,p){c.push({key:p,value:d})}),c=c.reduce(function(d,p){return(d[p.key]=d[p.key]||[]).push(p),d},{}),c=Object.keys(c).map(function(d){var p=c[d];return p.length===1?[d,p[0].value]:[d,p.map(function(h){var m=h.value;return m})]});var l=C({},e);return c.forEach(function(d){var p=d[0],h=d[1];l[p]=pe(p,h,{},e)}),l},[r.disabled,e,i]);function o(c){if(!(typeof window>"u"||!window.URL)){var l=se(c);window.location.search!==l.search&&window.history.replaceState({},"",l.toString()),i.toString()!==l.searchParams.toString()&&a({})}}j.useEffect(function(){r.disabled||typeof window>"u"||!window.URL||o(C(C({},e),f))},[r.disabled,f]);var s=function(c){o(c)};return j.useEffect(function(){if(r.disabled)return function(){};if(typeof window>"u"||!window.URL)return function(){};var c=function(){a({})};return window.addEventListener("popstate",c),function(){window.removeEventListener("popstate",c)}},[r.disabled]),[f,s]}var ve={true:!0,false:!1};function pe(e,r,t,n){if(!t)return r;var a=t[e],u=r===void 0?n[e]:r;return a===Number?Number(u):a===Boolean||r==="true"||r==="false"?ve[u]:Array.isArray(a)?a.find(function(i){return i==u})||n[e]:u}var O={};function W(e){"@babel/helpers - typeof";return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},W(e)}Object.defineProperty(O,"__esModule",{value:!0});var I=O.pathToRegexp=O.tokensToRegexp=O.regexpToFunction=O.match=O.tokensToFunction=O.compile=O.parse=void 0;function he(e){for(var r=[],t=0;t<e.length;){var n=e[t];if(n==="*"||n==="+"||n==="?"){r.push({type:"MODIFIER",index:t,value:e[t++]});continue}if(n==="\\"){r.push({type:"ESCAPED_CHAR",index:t++,value:e[t++]});continue}if(n==="{"){r.push({type:"OPEN",index:t,value:e[t++]});continue}if(n==="}"){r.push({type:"CLOSE",index:t,value:e[t++]});continue}if(n===":"){for(var a="",u=t+1;u<e.length;){var i=e.charCodeAt(u);if(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||i===95){a+=e[u++];continue}break}if(!a)throw new TypeError("Missing parameter name at "+t);r.push({type:"NAME",index:t,value:a}),t=u;continue}if(n==="("){var f=1,o="",u=t+1;if(e[u]==="?")throw new TypeError('Pattern cannot start with "?" at '+u);for(;u<e.length;){if(e[u]==="\\"){o+=e[u++]+e[u++];continue}if(e[u]===")"){if(f--,f===0){u++;break}}else if(e[u]==="("&&(f++,e[u+1]!=="?"))throw new TypeError("Capturing groups are not allowed at "+u);o+=e[u++]}if(f)throw new TypeError("Unbalanced pattern at "+t);if(!o)throw new TypeError("Missing pattern at "+t);r.push({type:"PATTERN",index:t,value:o}),t=u;continue}r.push({type:"CHAR",index:t,value:e[t++]})}return r.push({type:"END",index:t,value:""}),r}function G(e,r){r===void 0&&(r={});for(var t=he(e),n=r.prefixes,a=n===void 0?"./":n,u="[^"+T(r.delimiter||"/#?")+"]+?",i=[],f=0,o=0,s="",c=function(A){if(o<t.length&&t[o].type===A)return t[o++].value},l=function(A){var N=c(A);if(N!==void 0)return N;var k=t[o],le=k.type,de=k.index;throw new TypeError("Unexpected "+le+" at "+de+", expected "+A)},d=function(){for(var A="",N;N=c("CHAR")||c("ESCAPED_CHAR");)A+=N;return A};o<t.length;){var p=c("CHAR"),h=c("NAME"),m=c("PATTERN");if(h||m){var v=p||"";a.indexOf(v)===-1&&(s+=v,v=""),s&&(i.push(s),s=""),i.push({name:h||f++,prefix:v,suffix:"",pattern:m||u,modifier:c("MODIFIER")||""});continue}var x=p||c("ESCAPED_CHAR");if(x){s+=x;continue}s&&(i.push(s),s="");var w=c("OPEN");if(w){var v=d(),M=c("NAME")||"",S=c("PATTERN")||"",H=d();l("CLOSE"),i.push({name:M||(S?f++:""),pattern:M&&!S?u:S,prefix:v,suffix:H,modifier:c("MODIFIER")||""});continue}l("END")}return i}O.parse=G;function ye(e,r){return ue(G(e,r),r)}O.compile=ye;function ue(e,r){r===void 0&&(r={});var t=q(r),n=r.encode,a=n===void 0?function(o){return o}:n,u=r.validate,i=u===void 0?!0:u,f=e.map(function(o){if(W(o)==="object")return new RegExp("^(?:"+o.pattern+")$",t)});return function(o){for(var s="",c=0;c<e.length;c++){var l=e[c];if(typeof l=="string"){s+=l;continue}var d=o?o[l.name]:void 0,p=l.modifier==="?"||l.modifier==="*",h=l.modifier==="*"||l.modifier==="+";if(Array.isArray(d)){if(!h)throw new TypeError('Expected "'+l.name+'" to not repeat, but got an array');if(d.length===0){if(p)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var m=0;m<d.length;m++){var v=a(d[m],l);if(i&&!f[c].test(v))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but got "'+v+'"');s+=l.prefix+v+l.suffix}continue}if(typeof d=="string"||typeof d=="number"){var v=a(String(d),l);if(i&&!f[c].test(v))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but got "'+v+'"');s+=l.prefix+v+l.suffix;continue}if(!p){var x=h?"an array":"a string";throw new TypeError('Expected "'+l.name+'" to be '+x)}}return s}}O.tokensToFunction=ue;function me(e,r){var t=[],n=z(e,t,r);return ie(n,t,r)}O.match=me;function ie(e,r,t){t===void 0&&(t={});var n=t.decode,a=n===void 0?function(u){return u}:n;return function(u){var i=e.exec(u);if(!i)return!1;for(var f=i[0],o=i.index,s=Object.create(null),c=function(p){if(i[p]===void 0)return"continue";var h=r[p-1];h.modifier==="*"||h.modifier==="+"?s[h.name]=i[p].split(h.prefix+h.suffix).map(function(m){return a(m,h)}):s[h.name]=a(i[p],h)},l=1;l<i.length;l++)c(l);return{path:f,index:o,params:s}}}O.regexpToFunction=ie;function T(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function q(e){return e&&e.sensitive?"":"i"}function be(e,r){if(!r)return e;var t=e.source.match(/\((?!\?)/g);if(t)for(var n=0;n<t.length;n++)r.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}function ge(e,r,t){var n=e.map(function(a){return z(a,r,t).source});return new RegExp("(?:"+n.join("|")+")",q(t))}function xe(e,r,t){return fe(G(e,t),r,t)}function fe(e,r,t){t===void 0&&(t={});for(var n=t.strict,a=n===void 0?!1:n,u=t.start,i=u===void 0?!0:u,f=t.end,o=f===void 0?!0:f,s=t.encode,c=s===void 0?function(U){return U}:s,l="["+T(t.endsWith||"")+"]|$",d="["+T(t.delimiter||"/#?")+"]",p=i?"^":"",h=0,m=e;h<m.length;h++){var v=m[h];if(typeof v=="string")p+=T(c(v));else{var x=T(c(v.prefix)),w=T(c(v.suffix));if(v.pattern)if(r&&r.push(v),x||w)if(v.modifier==="+"||v.modifier==="*"){var M=v.modifier==="*"?"?":"";p+="(?:"+x+"((?:"+v.pattern+")(?:"+w+x+"(?:"+v.pattern+"))*)"+w+")"+M}else p+="(?:"+x+"("+v.pattern+")"+w+")"+v.modifier;else p+="("+v.pattern+")"+v.modifier;else p+="(?:"+x+w+")"+v.modifier}}if(o)a||(p+=d+"?"),p+=t.endsWith?"(?="+l+")":"$";else{var S=e[e.length-1],H=typeof S=="string"?d.indexOf(S[S.length-1])>-1:S===void 0;a||(p+="(?:"+d+"(?="+l+"))?"),H||(p+="(?="+d+"|"+l+")")}return new RegExp(p,q(t))}O.tokensToRegexp=fe;function z(e,r,t){return e instanceof RegExp?be(e,r):Array.isArray(e)?ge(e,r,t):xe(e,r,t)}I=O.pathToRegexp=z;function E(e,r){return r>>>e|r<<32-e}function we(e,r,t){return e&r^~e&t}function _e(e,r,t){return e&r^e&t^r&t}function Oe(e){return E(2,e)^E(13,e)^E(22,e)}function Pe(e){return E(6,e)^E(11,e)^E(25,e)}function Ee(e){return E(7,e)^E(18,e)^e>>>3}function Se(e){return E(17,e)^E(19,e)^e>>>10}function Ae(e,r){return e[r&15]+=Se(e[r+14&15])+e[r+9&15]+Ee(e[r+1&15])}var Re=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],y,_,b,Me="0123456789abcdef";function ee(e,r){var t=(e&65535)+(r&65535),n=(e>>16)+(r>>16)+(t>>16);return n<<16|t&65535}function Te(){y=new Array(8),_=new Array(2),b=new Array(64),_[0]=_[1]=0,y[0]=1779033703,y[1]=3144134277,y[2]=1013904242,y[3]=2773480762,y[4]=1359893119,y[5]=2600822924,y[6]=528734635,y[7]=1541459225}function B(){var e,r,t,n,a,u,i,f,o,s,c=new Array(16);e=y[0],r=y[1],t=y[2],n=y[3],a=y[4],u=y[5],i=y[6],f=y[7];for(var l=0;l<16;l++)c[l]=b[(l<<2)+3]|b[(l<<2)+2]<<8|b[(l<<2)+1]<<16|b[l<<2]<<24;for(var d=0;d<64;d++)o=f+Pe(a)+we(a,u,i)+Re[d],d<16?o+=c[d]:o+=Ae(c,d),s=Oe(e)+_e(e,r,t),f=i,i=u,u=a,a=ee(n,o),n=t,t=r,r=e,e=ee(o,s);y[0]+=e,y[1]+=r,y[2]+=t,y[3]+=n,y[4]+=a,y[5]+=u,y[6]+=i,y[7]+=f}function Ne(e,r){var t,n,a=0;n=_[0]>>3&63;var u=r&63;for((_[0]+=r<<3)<r<<3&&_[1]++,_[1]+=r>>29,t=0;t+63<r;t+=64){for(var i=n;i<64;i++)b[i]=e.charCodeAt(a++);B(),n=0}for(var f=0;f<u;f++)b[f]=e.charCodeAt(a++)}function je(){var e=_[0]>>3&63;if(b[e++]=128,e<=56)for(var r=e;r<56;r++)b[r]=0;else{for(var t=e;t<64;t++)b[t]=0;B();for(var n=0;n<56;n++)b[n]=0}b[56]=_[1]>>>24&255,b[57]=_[1]>>>16&255,b[58]=_[1]>>>8&255,b[59]=_[1]&255,b[60]=_[0]>>>24&255,b[61]=_[0]>>>16&255,b[62]=_[0]>>>8&255,b[63]=_[0]&255,B()}function De(){for(var e=new String,r=0;r<8;r++)for(var t=28;t>=0;t-=4)e+=Me.charAt(y[r]>>>t&15);return e}function Ce(e){return Te(),Ne(e,e.length),je(),De()}function V(e){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},V(e)}var Ie=["pro_layout_parentKeys","children","icon","flatMenu","indexRoute","routes"];function Fe(e,r){return Ue(e)||Le(e,r)||X(e,r)||$e()}function $e(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Le(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],a=!0,u=!1,i,f;try{for(t=t.call(e);!(a=(i=t.next()).done)&&(n.push(i.value),!(r&&n.length===r));a=!0);}catch(o){u=!0,f=o}finally{try{!a&&t.return!=null&&t.return()}finally{if(u)throw f}}return n}}function Ue(e){if(Array.isArray(e))return e}function Ke(e,r){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=X(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(s){throw s},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u=!0,i=!1,f;return{s:function(){t=t.call(e)},n:function(){var s=t.next();return u=s.done,s},e:function(s){i=!0,f=s},f:function(){try{!u&&t.return!=null&&t.return()}finally{if(i)throw f}}}}function He(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function re(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function We(e,r,t){return r&&re(e.prototype,r),t&&re(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Be(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&F(e,r)}function Ve(e){var r=oe();return function(){var n=$(e),a;if(r){var u=$(this).constructor;a=Reflect.construct(n,arguments,u)}else a=n.apply(this,arguments);return Je(this,a)}}function Je(e,r){if(r&&(V(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Qe(e)}function Qe(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e){var r=typeof Map=="function"?new Map:void 0;return J=function(n){if(n===null||!Ge(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof r<"u"){if(r.has(n))return r.get(n);r.set(n,a)}function a(){return K(n,arguments,$(this).constructor)}return a.prototype=Object.create(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),F(a,n)},J(e)}function K(e,r,t){return oe()?K=Reflect.construct.bind():K=function(a,u,i){var f=[null];f.push.apply(f,u);var o=Function.bind.apply(a,f),s=new o;return i&&F(s,i.prototype),s},K.apply(null,arguments)}function oe(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ge(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function F(e,r){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},F(e,r)}function $(e){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},$(e)}function te(e){return Xe(e)||ze(e)||X(e)||qe()}function qe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(e,r){if(e){if(typeof e=="string")return Q(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Q(e,r)}}function ze(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Xe(e){if(Array.isArray(e))return Q(e)}function Q(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Ye(e,r){if(e==null)return{};var t=Ze(e,r),n,a;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)n=u[a],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function Ze(e,r){if(e==null)return{};var t={},n=Object.keys(e),a,u;for(u=0;u<n.length;u++)a=n[u],!(r.indexOf(a)>=0)&&(t[a]=e[a]);return t}function ne(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?ne(Object(t),!0).forEach(function(n){ke(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ne(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function ke(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var P="routes";function L(e){return e.split("?")[0].split("#")[0]}var Y=function(r){if(!r.startsWith("http"))return!1;try{var t=new URL(r);return!!t}catch{return!1}},er=function(r){var t=r.path;if(!t||t==="/")try{return"/".concat(Ce(JSON.stringify(r)))}catch{}return t&&L(t)},rr=function(r,t){var n=r.name,a=r.locale;return"locale"in r&&a===!1||!n?!1:r.locale||"".concat(t,".").concat(n)},ce=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"/";return r.endsWith("/*")?r.replace("/*","/"):(r||t).startsWith("/")||Y(r)?r:"/".concat(t,"/").concat(r).replace(/\/\//g,"/").replace(/\/\//g,"/")},tr=function(r,t){var n=r.menu,a=n===void 0?{}:n,u=r.indexRoute,i=r.path,f=i===void 0?"":i,o=r.children||[],s=a.name,c=s===void 0?r.name:s,l=a.icon,d=l===void 0?r.icon:l,p=a.hideChildren,h=p===void 0?r.hideChildren:p,m=a.flatMenu,v=m===void 0?r.flatMenu:m,x=u&&Object.keys(u).join(",")!=="redirect"?[g({path:f,menu:a},u)].concat(o||[]):o,w=g({},r);if(c&&(w.name=c),d&&(w.icon=d),x&&x.length){if(h)return delete w.children,w;var M=Z(g(g({},t),{},{data:x}),r);if(v)return M;delete w[P]}return w},R=function(r){return Array.isArray(r)&&r.length>0};function Z(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{path:"/"},t=e.data,n=e.formatMessage,a=e.parentName,u=e.locale;return!t||!Array.isArray(t)?[]:t.filter(function(i){return i?R(i.children)||i.path||i.originPath||i.layout?!0:(i.redirect||i.unaccessible,!1):!1}).filter(function(i){var f,o;return!(i==null||(f=i.menu)===null||f===void 0)&&f.name||i!=null&&i.flatMenu||!(i==null||(o=i.menu)===null||o===void 0)&&o.flatMenu?!0:i.menu!==!1}).map(function(i){var f=g(g({},i),{},{path:i.path||i.originPath});return!f.children&&f[P]&&(f.children=f[P],delete f[P]),f.unaccessible&&delete f.name,f.path==="*"&&(f.path="."),f.path==="/*"&&(f.path="."),!f.path&&f.originPath&&(f.path=f.originPath),f}).map(function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{path:"/"},f=i.children||i[P]||[],o=ce(i.path,r?r.path:"/"),s=i.name,c=rr(i,a||"menu"),l=c!==!1&&u!==!1&&n&&c?n({id:c,defaultMessage:s}):s,d=r.pro_layout_parentKeys,p=d===void 0?[]:d;r.children,r.icon,r.flatMenu,r.indexRoute,r.routes;var h=Ye(r,Ie),m=new Set([].concat(te(p),te(i.parentKeys||[])));r.key&&m.add(r.key);var v=g(g(g({},h),{},{menu:void 0},i),{},{path:o,locale:c,key:i.key||er(g(g({},i),{},{path:o})),pro_layout_parentKeys:Array.from(m).filter(function(w){return w&&w!=="/"})});if(l?v.name=l:delete v.name,v.menu===void 0&&delete v.menu,R(f)){var x=Z(g(g({},e),{},{data:f,parentName:c||""}),v);R(x)&&(v.children=x)}return tr(v,e)}).flat(1)}var nr=function e(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return r.filter(function(t){return t&&(t.name||R(t.children))&&!t.hideInMenu&&!t.redirect}).map(function(t){var n=g({},t),a=n.children||t[P]||[];if(delete n[P],R(a)&&!n.hideChildrenInMenu&&a.some(function(i){return i&&!!i.name})){var u=e(a);if(u.length)return g(g({},n),{},{children:u})}return g({},t)}).filter(function(t){return t})},ar=function(e){Be(t,e);var r=Ve(t);function t(){return He(this,t),r.apply(this,arguments)}return We(t,[{key:"get",value:function(a){var u;try{var i=Ke(this.entries()),f;try{for(i.s();!(f=i.n()).done;){var o=Fe(f.value,2),s=o[0],c=o[1],l=L(s);if(!Y(s)&&I(l,[]).test(a)){u=c;break}}}catch(d){i.e(d)}finally{i.f()}}catch{u=void 0}return u}}]),t}(J(Map)),ur=function(r){var t=new ar,n=function a(u,i){u.forEach(function(f){var o=f.children||f[P]||[];R(o)&&a(o,f);var s=ce(f.path,i?i.path:"/");t.set(L(s),f)})};return n(r),t},ir=function e(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return r.map(function(t){var n=t.children||t[P];if(R(n)){var a=e(n);if(a.length)return g({},t)}var u=g({},t);return delete u[P],delete u.children,u}).filter(function(t){return t})},sr=function(r,t,n,a){var u=Z({data:r,formatMessage:n,locale:t}),i=a?ir(u):nr(u),f=ur(u);return{breadcrumb:f,menuData:i}};function ae(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function D(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?ae(Object(t),!0).forEach(function(n){fr(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ae(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function fr(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var or=function e(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t={};return r.forEach(function(n){var a=D({},n);if(!(!a||!a.key)){!a.children&&a[P]&&(a.children=a[P],delete a[P]);var u=a.children||[];t[L(a.path||a.key||"/")]=D({},a),t[a.key||a.path||"/"]=D({},a),u&&(t=D(D({},t),e(u)))}}),t},cr=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return r.filter(function(a){if(a==="/"&&t==="/")return!0;if(a!=="/"&&a!=="/*"&&a&&!Y(a)){var u=L(a);try{if(n&&I("".concat(u)).test(t)||I("".concat(u),[]).test(t)||I("".concat(u,"/(.*)")).test(t))return!0}catch{}}return!1}).sort(function(a,u){return a===t?10:u===t?-10:a.substr(1).split("/").length-u.substr(1).split("/").length})},vr=function(r,t,n,a){var u=or(t),i=Object.keys(u),f=cr(i,r||"/",a);return!f||f.length<1?[]:(n||(f=[f[f.length-1]]),f.map(function(o){var s=u[o]||{pro_layout_parentKeys:"",key:""},c=new Map,l=(s.pro_layout_parentKeys||[]).map(function(d){return c.has(d)?null:(c.set(d,!0),u[d])}).filter(function(d){return d});return s.key&&l.push(s),l}).flat(1))};export{vr as g,sr as t,dr as u};
