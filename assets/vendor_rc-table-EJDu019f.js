import{c as Wt,d as un,u as re}from"./vendor_@rc-component-5SWAiUR9.js";import{r as n}from"./vendor_react-xEkgX5Pu.js";import"./vendor_react-is-q81m-9gd.js";import{c as D,d as He,b as O,e as h,g as Q,h as Se,f as fe}from"./vendor_@babel-_vabsixR.js";import{c as Y}from"./vendor_classnames-Mr7DzpVI.js";import{B as qn,A as Jn,e as Qn,p as Ge,o as zn,t as At,c as Xt,N as Ue,T as $n,O as Wn,v as Dt,k as An,J as Vt,I as Xn}from"./vendor_rc-util-xXFr7v_y.js";import{R as dn}from"./vendor_rc-resize-observer-RLdQvm7y.js";import{L as jt}from"./vendor_rc-virtual-list-u-S2WCC5.js";var Re={},qe="rc-table-internal-hook",fn=Wt(),Zn=fn.makeImmutable,_e=fn.responseImmutable,Ut=fn.useImmutableMark,oe=un();function Yt(e,r){var a=n.useRef(0);a.current+=1;var t=n.useRef(e),o=[];Object.keys(e||{}).map(function(c){var s;(e==null?void 0:e[c])!==((s=t.current)===null||s===void 0?void 0:s[c])&&o.push(c)}),t.current=e;var l=n.useRef([]);return o.length&&(l.current=o),n.useDebugValue(a.current),n.useDebugValue(l.current.join(", ")),r&&console.log("".concat(r,":"),a.current,l.current),a.current}var Gt=n.memo(function(){var e=Yt();return n.createElement("h1",null,"Render Times: ",e)});Gt.displayName="RenderBlock";var et=n.createContext({renderWithProps:!1}),qt="RC_TABLE_KEY";function Jt(e){return e==null?[]:Array.isArray(e)?e:[e]}function Je(e){var r=[],a={};return e.forEach(function(t){for(var o=t||{},l=o.key,c=o.dataIndex,s=l||Jt(c).join("-")||qt;a[s];)s="".concat(s,"_next");a[s]=!0,r.push(s)}),r}function cn(e){return e!=null}function Qt(e){return e&&He(e)==="object"&&!Array.isArray(e)&&!n.isValidElement(e)}function Zt(e,r,a,t,o,l){var c=n.useContext(et),s=Ut(),i=qn(function(){if(cn(t))return[t];var u=r==null||r===""?[]:Array.isArray(r)?r:[r],v=Qn(e,u),d=v,f=void 0;if(o){var m=o(v,e,a);Qt(m)?(d=m.children,f=m.props,c.renderWithProps=!0):d=m}return[d,f]},[s,e,t,r,o,a],function(u,v){if(l){var d=D(u,2),f=d[1],m=D(v,2),x=m[1];return l(x,f)}return c.renderWithProps?!0:!Jn(u,v,!0)});return i}function er(e,r,a,t){var o=e+r-1;return e<=t&&o>=a}function nr(e,r){return re(oe,function(a){var t=er(e,r||1,a.hoverStartRow,a.hoverEndRow);return[t,a.onHover]})}var tr=function(r){var a=r.ellipsis,t=r.rowType,o=r.children,l,c=a===!0?{showTitle:!0}:a;return c&&(c.showTitle||t==="header")&&(typeof o=="string"||typeof o=="number"?l=o.toString():n.isValidElement(o)&&typeof o.props.children=="string"&&(l=o.props.children)),l};function rr(e){var r,a,t,o,l,c,s,i,u=e.component,v=e.children,d=e.ellipsis,f=e.scope,m=e.prefixCls,x=e.className,w=e.align,C=e.record,b=e.render,R=e.dataIndex,k=e.renderIndex,I=e.shouldCellUpdate,E=e.index,T=e.rowType,B=e.colSpan,z=e.rowSpan,H=e.fixLeft,$=e.fixRight,g=e.firstFixLeft,y=e.lastFixLeft,p=e.firstFixRight,S=e.lastFixRight,K=e.appendNode,L=e.additionalProps,N=L===void 0?{}:L,_=e.isSticky,A="".concat(m,"-cell"),G=re(oe,["supportSticky","allColumnsFixedLeft"]),X=G.supportSticky,ve=G.allColumnsFixedLeft,Ce=Zt(C,R,k,v,b,I),se=D(Ce,2),Z=se[0],P=se[1],ae={},me=typeof H=="number"&&X,V=typeof $=="number"&&X;me&&(ae.position="sticky",ae.left=H),V&&(ae.position="sticky",ae.right=$);var j=(r=(a=(t=P==null?void 0:P.colSpan)!==null&&t!==void 0?t:N.colSpan)!==null&&a!==void 0?a:B)!==null&&r!==void 0?r:1,U=(o=(l=(c=P==null?void 0:P.rowSpan)!==null&&c!==void 0?c:N.rowSpan)!==null&&l!==void 0?l:z)!==null&&o!==void 0?o:1,pe=nr(E,U),Ne=D(pe,2),Pe=Ne[0],xe=Ne[1],be=Ge(function(ke){var ne;C&&xe(E,E+U-1),N==null||(ne=N.onMouseEnter)===null||ne===void 0||ne.call(N,ke)}),Ke=Ge(function(ke){var ne;C&&xe(-1,-1),N==null||(ne=N.onMouseLeave)===null||ne===void 0||ne.call(N,ke)});if(j===0||U===0)return null;var ye=(s=N.title)!==null&&s!==void 0?s:tr({rowType:T,ellipsis:d,children:Z}),ue=Y(A,x,(i={},O(i,"".concat(A,"-fix-left"),me&&X),O(i,"".concat(A,"-fix-left-first"),g&&X),O(i,"".concat(A,"-fix-left-last"),y&&X),O(i,"".concat(A,"-fix-left-all"),y&&ve&&X),O(i,"".concat(A,"-fix-right"),V&&X),O(i,"".concat(A,"-fix-right-first"),p&&X),O(i,"".concat(A,"-fix-right-last"),S&&X),O(i,"".concat(A,"-ellipsis"),d),O(i,"".concat(A,"-with-append"),K),O(i,"".concat(A,"-fix-sticky"),(me||V)&&_&&X),O(i,"".concat(A,"-row-hover"),!P&&Pe),i),N.className,P==null?void 0:P.className),W={};w&&(W.textAlign=w);var Fe=h(h(h(h({},ae),N.style),W),P==null?void 0:P.style),ee=Z;return He(ee)==="object"&&!Array.isArray(ee)&&!n.isValidElement(ee)&&(ee=null),d&&(y||p)&&(ee=n.createElement("span",{className:"".concat(A,"-content")},ee)),n.createElement(u,Q({},P,N,{className:ue,style:Fe,title:ye,scope:f,onMouseEnter:be,onMouseLeave:Ke,colSpan:j!==1?j:null,rowSpan:U!==1?U:null}),K,ee)}const Ee=n.memo(rr);function vn(e,r,a,t,o,l){var c=a[e]||{},s=a[r]||{},i,u;c.fixed==="left"?i=t.left[o==="rtl"?r:e]:s.fixed==="right"&&(u=t.right[o==="rtl"?e:r]);var v=!1,d=!1,f=!1,m=!1,x=a[r+1],w=a[e-1],C=!(l!=null&&l.children);if(o==="rtl"){if(i!==void 0){var b=w&&w.fixed==="left";m=!b&&C}else if(u!==void 0){var R=x&&x.fixed==="right";f=!R&&C}}else if(i!==void 0){var k=x&&x.fixed==="left";v=!k&&C}else if(u!==void 0){var I=w&&w.fixed==="right";d=!I&&C}return{fixLeft:i,fixRight:u,lastFixLeft:v,firstFixRight:d,lastFixRight:f,firstFixLeft:m,isSticky:t.isSticky}}var nt=n.createContext({});function ar(e){var r=e.className,a=e.index,t=e.children,o=e.colSpan,l=o===void 0?1:o,c=e.rowSpan,s=e.align,i=re(oe,["prefixCls","direction"]),u=i.prefixCls,v=i.direction,d=n.useContext(nt),f=d.scrollColumnIndex,m=d.stickyOffsets,x=d.flattenColumns,w=d.columns,C=a+l-1,b=C+1===f?l+1:l,R=vn(a,a+b-1,x,m,v,w==null?void 0:w[a]);return n.createElement(Ee,Q({className:r,index:a,component:"td",prefixCls:u,record:null,dataIndex:null,align:s,colSpan:b,rowSpan:c,render:function(){return t}},R))}var or=["children"];function lr(e){var r=e.children,a=Se(e,or);return n.createElement("tr",a,r)}function Qe(e){var r=e.children;return r}Qe.Row=lr;Qe.Cell=ar;function ir(e){var r=e.children,a=e.stickyOffsets,t=e.flattenColumns,o=e.columns,l=re(oe,"prefixCls"),c=t.length-1,s=t[c],i=n.useMemo(function(){return{stickyOffsets:a,flattenColumns:t,scrollColumnIndex:s!=null&&s.scrollbar?c:null,columns:o}},[s,t,c,a,o]);return n.createElement(nt.Provider,{value:i},n.createElement("tfoot",{className:"".concat(l,"-summary")},r))}const Ye=_e(ir);var cr=Qe;function sr(e){return null}function ur(e){return null}function tt(e,r,a,t,o,l,c){e.push({record:r,indent:a,index:c});var s=l(r),i=o==null?void 0:o.has(s);if(r&&Array.isArray(r[t])&&i)for(var u=0;u<r[t].length;u+=1)tt(e,r[t][u],a+1,t,o,l,u)}function rt(e,r,a,t){var o=n.useMemo(function(){if(a!=null&&a.size){for(var l=[],c=0;c<(e==null?void 0:e.length);c+=1){var s=e[c];tt(l,s,0,r,a,t,c)}return l}return e==null?void 0:e.map(function(i,u){return{record:i,indent:0,index:u}})},[e,r,a,t]);return o}function at(e,r,a,t){var o=re(oe,["prefixCls","fixedInfoList","flattenColumns","expandableType","expandRowByClick","onTriggerExpand","rowClassName","expandedRowClassName","indentSize","expandIcon","expandedRowRender","expandIconColumnIndex","expandedKeys","childrenColumnName","rowExpandable","onRow"]),l=o.flattenColumns,c=o.expandableType,s=o.expandedKeys,i=o.childrenColumnName,u=o.onTriggerExpand,v=o.rowExpandable,d=o.onRow,f=o.expandRowByClick,m=o.rowClassName,x=c==="nest",w=c==="row"&&(!v||v(e)),C=w||x,b=s&&s.has(r),R=i&&e&&e[i],k=Ge(u),I=d==null?void 0:d(e,a),E=I==null?void 0:I.onClick,T=function($){f&&C&&u(e,$);for(var g=arguments.length,y=new Array(g>1?g-1:0),p=1;p<g;p++)y[p-1]=arguments[p];E==null||E.apply(void 0,[$].concat(y))},B;typeof m=="string"?B=m:typeof m=="function"&&(B=m(e,a,t));var z=Je(l);return h(h({},o),{},{columnsKey:z,nestExpandable:x,expanded:b,hasNestChildren:R,record:e,onTriggerExpand:k,rowSupportExpand:w,expandable:C,rowProps:h(h({},I),{},{className:Y(B,I==null?void 0:I.className),onClick:T})})}function ot(e){var r=e.prefixCls,a=e.children,t=e.component,o=e.cellComponent,l=e.className,c=e.expanded,s=e.colSpan,i=e.isEmpty,u=re(oe,["scrollbarSize","fixHeader","fixColumn","componentWidth","horizonScroll"]),v=u.scrollbarSize,d=u.fixHeader,f=u.fixColumn,m=u.componentWidth,x=u.horizonScroll,w=a;return(i?x&&m:f)&&(w=n.createElement("div",{style:{width:m-(d?v:0),position:"sticky",left:0,overflow:"hidden"},className:"".concat(r,"-expanded-row-fixed")},w)),n.createElement(t,{className:l,style:{display:c?null:"none"}},n.createElement(Ee,{component:o,prefixCls:r,colSpan:s},w))}function lt(e,r,a,t,o){var l=e.record,c=e.prefixCls,s=e.columnsKey,i=e.fixedInfoList,u=e.expandIconColumnIndex,v=e.nestExpandable,d=e.indentSize,f=e.expandIcon,m=e.expanded,x=e.hasNestChildren,w=e.onTriggerExpand,C=s[a],b=i[a],R;a===(u||0)&&v&&(R=n.createElement(n.Fragment,null,n.createElement("span",{style:{paddingLeft:"".concat(d*t,"px")},className:"".concat(c,"-row-indent indent-level-").concat(t)}),f({prefixCls:c,expanded:m,expandable:x,record:l,onExpand:w})));var k;return r.onCell&&(k=r.onCell(l,o)),{key:C,fixedInfo:b,appendCellNode:R,additionalCellProps:k||{}}}function it(e){var r=e.className,a=e.style,t=e.record,o=e.index,l=e.renderIndex,c=e.rowKey,s=e.indent,i=s===void 0?0:s,u=e.rowComponent,v=e.cellComponent,d=e.scopeCellComponent,f=at(t,c,o,i),m=f.prefixCls,x=f.flattenColumns,w=f.expandedRowClassName,C=f.expandedRowRender,b=f.rowProps,R=f.expanded,k=f.rowSupportExpand,I=n.useRef(!1);I.current||(I.current=R);var E=n.createElement(u,Q({},b,{"data-row-key":c,className:Y(r,"".concat(m,"-row"),"".concat(m,"-row-level-").concat(i),b==null?void 0:b.className),style:h(h({},a),b==null?void 0:b.style)}),x.map(function(H,$){var g=H.render,y=H.dataIndex,p=H.className,S=lt(f,H,$,i,o),K=S.key,L=S.fixedInfo,N=S.appendCellNode,_=S.additionalCellProps;return n.createElement(Ee,Q({className:p,ellipsis:H.ellipsis,align:H.align,scope:H.rowScope,component:H.rowScope?d:v,prefixCls:m,key:K,record:t,index:o,renderIndex:l,dataIndex:y,render:g,shouldCellUpdate:H.shouldCellUpdate},L,{appendNode:N,additionalProps:_}))})),T;if(k&&(I.current||R)){var B=C(t,o,i+1,R),z=w&&w(t,o,i);T=n.createElement(ot,{expanded:R,className:Y("".concat(m,"-expanded-row"),"".concat(m,"-expanded-row-level-").concat(i+1),z),prefixCls:m,component:u,cellComponent:v,colSpan:x.length,isEmpty:!1},B)}return n.createElement(n.Fragment,null,E,T)}it.displayName="BodyRow";const dr=_e(it);function fr(e){var r=e.columnKey,a=e.onColumnResize,t=n.useRef();return n.useEffect(function(){t.current&&a(r,t.current.offsetWidth)},[]),n.createElement(dn,{data:r},n.createElement("td",{ref:t,style:{padding:0,border:0,height:0}},n.createElement("div",{style:{height:0,overflow:"hidden"}}," ")))}function vr(e){var r=e.prefixCls,a=e.columnsKey,t=e.onColumnResize;return n.createElement("tr",{"aria-hidden":"true",className:"".concat(r,"-measure-row"),style:{height:0,fontSize:0}},n.createElement(dn.Collection,{onBatchResize:function(l){l.forEach(function(c){var s=c.data,i=c.size;t(s,i.offsetWidth)})}},a.map(function(o){return n.createElement(fr,{key:o,columnKey:o,onColumnResize:t})})))}function ct(e){var r=e.data,a=e.measureColumnWidth,t=re(oe,["prefixCls","getComponent","onColumnResize","flattenColumns","getRowKey","expandedKeys","childrenColumnName","emptyNode"]),o=t.prefixCls,l=t.getComponent,c=t.onColumnResize,s=t.flattenColumns,i=t.getRowKey,u=t.expandedKeys,v=t.childrenColumnName,d=t.emptyNode,f=rt(r,v,u,i),m=n.useRef({renderWithProps:!1}),x=l(["body","wrapper"],"tbody"),w=l(["body","row"],"tr"),C=l(["body","cell"],"td"),b=l(["body","cell"],"th"),R;r.length?R=f.map(function(I,E){var T=I.record,B=I.indent,z=I.index,H=i(T,E);return n.createElement(dr,{key:H,rowKey:H,record:T,index:E,renderIndex:z,rowComponent:w,cellComponent:C,scopeCellComponent:b,getRowKey:i,indent:B})}):R=n.createElement(ot,{expanded:!0,className:"".concat(o,"-placeholder"),prefixCls:o,component:w,cellComponent:C,colSpan:s.length,isEmpty:!0},d);var k=Je(s);return n.createElement(et.Provider,{value:m.current},n.createElement(x,{className:"".concat(o,"-tbody")},a&&n.createElement(vr,{prefixCls:o,columnsKey:k,onColumnResize:c}),R))}ct.displayName="Body";const mr=_e(ct);var pr=["expandable"],st="RC_TABLE_INTERNAL_COL_DEFINE";function xr(e){var r=e.expandable,a=Se(e,pr),t;return"expandable"in e?t=h(h({},a),r):t=a,t.showExpandColumn===!1&&(t.expandIconColumnIndex=-1),t}var Cr=["columnType"];function ut(e){for(var r=e.colWidths,a=e.columns,t=e.columCount,o=[],l=t||a.length,c=!1,s=l-1;s>=0;s-=1){var i=r[s],u=a&&a[s],v=u&&u[st];if(i||v||c){var d=v||{};d.columnType;var f=Se(d,Cr);o.unshift(n.createElement("col",Q({key:s,style:{width:i}},f))),c=!0}}return n.createElement("colgroup",null,o)}var yr=["className","noData","columns","flattenColumns","colWidths","columCount","stickyOffsets","direction","fixHeader","stickyTopOffset","stickyBottomOffset","stickyClassName","onScroll","maxContentScroll","children"];function hr(e,r){return n.useMemo(function(){for(var a=[],t=0;t<r;t+=1){var o=e[t];if(o!==void 0)a[t]=o;else return null}return a},[e.join("_"),r])}var dt=n.forwardRef(function(e,r){var a=e.className,t=e.noData,o=e.columns,l=e.flattenColumns,c=e.colWidths,s=e.columCount,i=e.stickyOffsets,u=e.direction,v=e.fixHeader,d=e.stickyTopOffset,f=e.stickyBottomOffset,m=e.stickyClassName,x=e.onScroll,w=e.maxContentScroll,C=e.children,b=Se(e,yr),R=re(oe,["prefixCls","scrollbarSize","isSticky"]),k=R.prefixCls,I=R.scrollbarSize,E=R.isSticky,T=E&&!v?0:I,B=n.useRef(null),z=n.useCallback(function(L){zn(r,L),zn(B,L)},[]);n.useEffect(function(){var L;function N(_){var A=_,G=A.currentTarget,X=A.deltaX;X&&(x({currentTarget:G,scrollLeft:G.scrollLeft+X}),_.preventDefault())}return(L=B.current)===null||L===void 0||L.addEventListener("wheel",N),function(){var _;(_=B.current)===null||_===void 0||_.removeEventListener("wheel",N)}},[]);var H=n.useMemo(function(){return l.every(function(L){return L.width})},[l]),$=l[l.length-1],g={fixed:$?$.fixed:null,scrollbar:!0,onHeaderCell:function(){return{className:"".concat(k,"-cell-scrollbar")}}},y=n.useMemo(function(){return T?[].concat(fe(o),[g]):o},[T,o]),p=n.useMemo(function(){return T?[].concat(fe(l),[g]):l},[T,l]),S=n.useMemo(function(){var L=i.right,N=i.left;return h(h({},i),{},{left:u==="rtl"?[].concat(fe(N.map(function(_){return _+T})),[0]):N,right:u==="rtl"?L:[].concat(fe(L.map(function(_){return _+T})),[0]),isSticky:E})},[T,i,E]),K=hr(c,s);return n.createElement("div",{style:h({overflow:"hidden"},E?{top:d,bottom:f}:{}),ref:z,className:Y(a,O({},m,!!m))},n.createElement("table",{style:{tableLayout:"fixed",visibility:t||K?null:"hidden"}},(!t||!w||H)&&n.createElement(ut,{colWidths:K?[].concat(fe(K),[T]):[],columCount:s+1,columns:p}),C(h(h({},b),{},{stickyOffsets:S,columns:y,flattenColumns:p}))))});dt.displayName="FixedHolder";const Dn=n.memo(dt);function ft(e){var r=e.cells,a=e.stickyOffsets,t=e.flattenColumns,o=e.rowComponent,l=e.cellComponent,c=e.tdCellComponent,s=e.onHeaderRow,i=e.index,u=re(oe,["prefixCls","direction"]),v=u.prefixCls,d=u.direction,f;s&&(f=s(r.map(function(x){return x.column}),i));var m=Je(r.map(function(x){return x.column}));return n.createElement(o,f,r.map(function(x,w){var C=x.column,b=vn(x.colStart,x.colEnd,t,a,d,C),R;return C&&C.onHeaderCell&&(R=x.column.onHeaderCell(C)),n.createElement(Ee,Q({},x,{scope:C.title?x.colSpan>1?"colgroup":"col":null,ellipsis:C.ellipsis,align:C.align,component:C.title?l:c,prefixCls:v,key:m[w]},b,{additionalProps:R,rowType:"header"}))}))}ft.displayName="HeaderRow";function gr(e){var r=[];function a(c,s){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;r[i]=r[i]||[];var u=s,v=c.filter(Boolean).map(function(d){var f={key:d.key,className:d.className||"",children:d.title,column:d,colStart:u},m=1,x=d.children;return x&&x.length>0&&(m=a(x,u,i+1).reduce(function(w,C){return w+C},0),f.hasSubColumns=!0),"colSpan"in d&&(m=d.colSpan),"rowSpan"in d&&(f.rowSpan=d.rowSpan),f.colSpan=m,f.colEnd=f.colStart+m-1,r[i].push(f),u+=m,m});return v}a(e,0);for(var t=r.length,o=function(s){r[s].forEach(function(i){!("rowSpan"in i)&&!i.hasSubColumns&&(i.rowSpan=t-s)})},l=0;l<t;l+=1)o(l);return r}function wr(e){var r=e.stickyOffsets,a=e.columns,t=e.flattenColumns,o=e.onHeaderRow,l=re(oe,["prefixCls","getComponent"]),c=l.prefixCls,s=l.getComponent,i=n.useMemo(function(){return gr(a)},[a]),u=s(["header","wrapper"],"thead"),v=s(["header","row"],"tr"),d=s(["header","cell"],"th"),f=s(["header","cell"],"td");return n.createElement(u,{className:"".concat(c,"-thead")},i.map(function(m,x){var w=n.createElement(ft,{key:x,flattenColumns:t,cells:m,stickyOffsets:r,rowComponent:v,cellComponent:d,tdCellComponent:f,onHeaderRow:o,index:x});return w}))}const Vn=_e(wr);function jn(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return typeof r=="number"?r:r.endsWith("%")?e*parseFloat(r)/100:null}function Rr(e,r,a){return n.useMemo(function(){if(r&&r>0){var t=0,o=0;e.forEach(function(f){var m=jn(r,f.width);m?t+=m:o+=1});var l=Math.max(r,a),c=Math.max(l-t,o),s=o,i=c/o,u=0,v=e.map(function(f){var m=h({},f),x=jn(r,m.width);if(x)m.width=x;else{var w=Math.floor(i);m.width=s===1?c:w,c-=w,s-=1}return u+=m.width,m});if(u<l){var d=l/u;c=l,v.forEach(function(f,m){var x=Math.floor(f.width*d);f.width=m===v.length-1?c:x,c-=x})}return[v,Math.max(u,l)]}return[e,r]},[e,r,a])}var Sr=["children"],Er=["fixed"];function vt(e){return At(e).filter(function(r){return n.isValidElement(r)}).map(function(r){var a=r.key,t=r.props,o=t.children,l=Se(t,Sr),c=h({key:a},l);return o&&(c.children=vt(o)),c})}function sn(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key";return e.filter(function(a){return a&&He(a)==="object"}).reduce(function(a,t,o){var l=t.fixed,c=l===!0?"left":l,s="".concat(r,"-").concat(o),i=t.children;return i&&i.length>0?[].concat(fe(a),fe(sn(i,s).map(function(u){return h({fixed:c},u)}))):[].concat(fe(a),[h(h({key:s},t),{},{fixed:c})])},[])}function Nr(e){return e.map(function(r){var a=r.fixed,t=Se(r,Er),o=a;return a==="left"?o="right":a==="right"&&(o="left"),h({fixed:o},t)})}function br(e,r){var a=e.prefixCls,t=e.columns,o=e.children,l=e.expandable,c=e.expandedKeys,s=e.columnTitle,i=e.getRowKey,u=e.onTriggerExpand,v=e.expandIcon,d=e.rowExpandable,f=e.expandIconColumnIndex,m=e.direction,x=e.expandRowByClick,w=e.columnWidth,C=e.fixed,b=e.scrollWidth,R=e.clientWidth,k=n.useMemo(function(){return t||vt(o)},[t,o]),I=n.useMemo(function(){if(l){var g,y=k.slice();if(!y.includes(Re)){var p=f||0;p>=0&&y.splice(p,0,Re)}var S=y.indexOf(Re);y=y.filter(function(_,A){return _!==Re||A===S});var K=k[S],L;(C==="left"||C)&&!f?L="left":(C==="right"||C)&&f===k.length?L="right":L=K?K.fixed:null;var N=(g={},O(g,st,{className:"".concat(a,"-expand-icon-col"),columnType:"EXPAND_COLUMN"}),O(g,"title",s),O(g,"fixed",L),O(g,"className","".concat(a,"-row-expand-icon-cell")),O(g,"width",w),O(g,"render",function(A,G,X){var ve=i(G,X),Ce=c.has(ve),se=d?d(G):!0,Z=v({prefixCls:a,expanded:Ce,expandable:se,record:G,onExpand:u});return x?n.createElement("span",{onClick:function(ae){return ae.stopPropagation()}},Z):Z}),g);return y.map(function(_){return _===Re?N:_})}return k.filter(function(_){return _!==Re})},[l,k,i,c,v,m]),E=n.useMemo(function(){var g=I;return r&&(g=r(g)),g.length||(g=[{render:function(){return null}}]),g},[r,I,m]),T=n.useMemo(function(){return m==="rtl"?Nr(sn(E)):sn(E)},[E,m,b]),B=Rr(T,b,R),z=D(B,2),H=z[0],$=z[1];return[E,H,$]}function kr(e){var r,a=e.prefixCls,t=e.record,o=e.onExpand,l=e.expanded,c=e.expandable,s="".concat(a,"-row-expand-icon");if(!c)return n.createElement("span",{className:Y(s,"".concat(a,"-row-spaced"))});var i=function(v){o(t,v),v.stopPropagation()};return n.createElement("span",{className:Y(s,(r={},O(r,"".concat(a,"-row-expanded"),l),O(r,"".concat(a,"-row-collapsed"),!l),r)),onClick:i})}function Tr(e,r,a){var t=[];function o(l){(l||[]).forEach(function(c,s){t.push(r(c,s)),o(c[a])})}return o(e),t}function Ir(e,r,a){var t=xr(e),o=t.expandIcon,l=t.expandedRowKeys,c=t.defaultExpandedRowKeys,s=t.defaultExpandAllRows,i=t.expandedRowRender,u=t.onExpand,v=t.onExpandedRowsChange,d=t.childrenColumnName,f=o||kr,m=d||"children",x=n.useMemo(function(){return i?"row":e.expandable&&e.internalHooks===qe&&e.expandable.__PARENT_RENDER_ICON__||r.some(function(E){return E&&He(E)==="object"&&E[m]})?"nest":!1},[!!i,r]),w=n.useState(function(){return c||(s?Tr(r,a,m):[])}),C=D(w,2),b=C[0],R=C[1],k=n.useMemo(function(){return new Set(l||b||[])},[l,b]),I=n.useCallback(function(E){var T=a(E,r.indexOf(E)),B,z=k.has(T);z?(k.delete(T),B=fe(k)):B=[].concat(fe(k),[T]),R(B),u&&u(!z,E),v&&v(B)},[a,k,r,u,v]);return[t,x,k,f,m,I]}function Lr(e,r,a,t){var o=e.map(function(l,c){return vn(c,c,e,r,a,t==null?void 0:t[c])});return qn(function(){return o},[o],function(l,c){return!Jn(l,c)})}function mt(e){var r=n.useRef(e),a=n.useState({}),t=D(a,2),o=t[1],l=n.useRef(null),c=n.useRef([]);function s(i){c.current.push(i);var u=Promise.resolve();l.current=u,u.then(function(){if(l.current===u){var v=c.current,d=r.current;c.current=[],v.forEach(function(f){r.current=f(r.current)}),l.current=null,d!==r.current&&o({})}})}return n.useEffect(function(){return function(){l.current=null}},[]),[r.current,s]}function Hr(e){var r=n.useRef(e||null),a=n.useRef();function t(){window.clearTimeout(a.current)}function o(c){r.current=c,t(),a.current=window.setTimeout(function(){r.current=null,a.current=void 0},100)}function l(){return r.current}return n.useEffect(function(){return t},[]),[o,l]}function _r(){var e=n.useState(-1),r=D(e,2),a=r[0],t=r[1],o=n.useState(-1),l=D(o,2),c=l[0],s=l[1],i=n.useCallback(function(u,v){t(u),s(v)},[]);return[a,c,i]}var Un=Xt()?window:null;function Mr(e,r){var a=He(e)==="object"?e:{},t=a.offsetHeader,o=t===void 0?0:t,l=a.offsetSummary,c=l===void 0?0:l,s=a.offsetScroll,i=s===void 0?0:s,u=a.getContainer,v=u===void 0?function(){return Un}:u,d=v()||Un;return n.useMemo(function(){var f=!!e;return{isSticky:f,stickyClassName:f?"".concat(r,"-sticky-holder"):"",offsetHeader:o,offsetSummary:c,offsetScroll:i,container:d}},[i,o,c,r,d])}function Pr(e,r,a){var t=n.useMemo(function(){for(var o=[],l=[],c=0,s=0,i=0;i<r;i+=1)if(a==="rtl"){l[i]=s,s+=e[i]||0;var u=r-i-1;o[u]=c,c+=e[u]||0}else{o[i]=c,c+=e[i]||0;var v=r-i-1;l[v]=s,s+=e[v]||0}return{left:o,right:l}},[e,r,a]);return t}function Yn(e){var r=e.className,a=e.children;return n.createElement("div",{className:r},a)}var Kr=function(r,a){var t,o,l=r.scrollBodyRef,c=r.onScroll,s=r.offsetScroll,i=r.container,u=re(oe,"prefixCls"),v=((t=l.current)===null||t===void 0?void 0:t.scrollWidth)||0,d=((o=l.current)===null||o===void 0?void 0:o.clientWidth)||0,f=v&&d*(d/v),m=n.useRef(),x=mt({scrollLeft:0,isHiddenScrollBar:!1}),w=D(x,2),C=w[0],b=w[1],R=n.useRef({delta:0,x:0}),k=n.useState(!1),I=D(k,2),E=I[0],T=I[1],B=function(){T(!1)},z=function(p){p.persist(),R.current.delta=p.pageX-C.scrollLeft,R.current.x=0,T(!0),p.preventDefault()},H=function(p){var S,K=p||((S=window)===null||S===void 0?void 0:S.event),L=K.buttons;if(!E||L===0){E&&T(!1);return}var N=R.current.x+p.pageX-R.current.x-R.current.delta;N<=0&&(N=0),N+f>=d&&(N=d-f),c({scrollLeft:N/d*(v+2)}),R.current.x=p.pageX},$=function(){if(l.current){var p=Wn(l.current).top,S=p+l.current.offsetHeight,K=i===window?document.documentElement.scrollTop+window.innerHeight:Wn(i).top+i.clientHeight;S-$n()<=K||p>=K-s?b(function(L){return h(h({},L),{},{isHiddenScrollBar:!0})}):b(function(L){return h(h({},L),{},{isHiddenScrollBar:!1})})}},g=function(p){b(function(S){return h(h({},S),{},{scrollLeft:p/v*d||0})})};return n.useImperativeHandle(a,function(){return{setScrollLeft:g}}),n.useEffect(function(){var y=Ue(document.body,"mouseup",B,!1),p=Ue(document.body,"mousemove",H,!1);return $(),function(){y.remove(),p.remove()}},[f,E]),n.useEffect(function(){var y=Ue(i,"scroll",$,!1),p=Ue(window,"resize",$,!1);return function(){y.remove(),p.remove()}},[i]),n.useEffect(function(){C.isHiddenScrollBar||b(function(y){var p=l.current;return p?h(h({},y),{},{scrollLeft:p.scrollLeft/p.scrollWidth*p.clientWidth}):y})},[C.isHiddenScrollBar]),v<=d||!f||C.isHiddenScrollBar?null:n.createElement("div",{style:{height:$n(),width:d,bottom:s},className:"".concat(u,"-sticky-scroll")},n.createElement("div",{onMouseDown:z,ref:m,className:Y("".concat(u,"-sticky-scroll-bar"),O({},"".concat(u,"-sticky-scroll-bar-active"),E)),style:{width:"".concat(f,"px"),transform:"translate3d(".concat(C.scrollLeft,"px, 0, 0)")}}))};const Fr=n.forwardRef(Kr);var pt="rc-table",Or=[],Br={};function zr(){return"No Data"}function $r(e,r){var a,t=h({rowKey:"key",prefixCls:pt,emptyText:zr},e),o=t.prefixCls,l=t.className,c=t.rowClassName,s=t.style,i=t.data,u=t.rowKey,v=t.scroll,d=t.tableLayout,f=t.direction,m=t.title,x=t.footer,w=t.summary,C=t.caption,b=t.id,R=t.showHeader,k=t.components,I=t.emptyText,E=t.onRow,T=t.onHeaderRow,B=t.internalHooks,z=t.transformColumns,H=t.internalRefs,$=t.tailor,g=t.getContainerWidth,y=t.sticky,p=i||Or,S=!!p.length,K=B===qe,L=n.useCallback(function(M,F){return Qn(k,M)||F},[k]),N=n.useMemo(function(){return typeof u=="function"?u:function(M){var F=M&&M[u];return F}},[u]),_=L(["body"]),A=_r(),G=D(A,3),X=G[0],ve=G[1],Ce=G[2],se=Ir(t,p,N),Z=D(se,6),P=Z[0],ae=Z[1],me=Z[2],V=Z[3],j=Z[4],U=Z[5],pe=v==null?void 0:v.x,Ne=n.useState(0),Pe=D(Ne,2),xe=Pe[0],be=Pe[1],Ke=br(h(h(h({},t),P),{},{expandable:!!P.expandedRowRender,columnTitle:P.columnTitle,expandedKeys:me,getRowKey:N,onTriggerExpand:U,expandIcon:V,expandIconColumnIndex:P.expandIconColumnIndex,direction:f,scrollWidth:K&&$&&typeof pe=="number"?pe:null,clientWidth:xe}),K?z:null),ye=D(Ke,3),ue=ye[0],W=ye[1],Fe=ye[2],ee=Fe??pe,ke=n.useMemo(function(){return{columns:ue,flattenColumns:W}},[ue,W]),ne=n.useRef(),Ze=n.useRef(),q=n.useRef(),mn=n.useRef();n.useImperativeHandle(r,function(){return{nativeElement:ne.current,scrollTo:function(F){var te;if(q.current instanceof HTMLElement){var J=F.index,ce=F.top,Le=F.key;if(ce){var ge;(ge=q.current)===null||ge===void 0||ge.scrollTo({top:ce})}else{var we,ze=Le??N(p[J]);(we=q.current.querySelector('[data-row-key="'.concat(ze,'"]')))===null||we===void 0||we.scrollIntoView()}}else(te=q.current)!==null&&te!==void 0&&te.scrollTo&&q.current.scrollTo(F)}}});var pn=n.useRef(),yt=n.useState(!1),xn=D(yt,2),ht=xn[0],$e=xn[1],gt=n.useState(!1),Cn=D(gt,2),wt=Cn[0],We=Cn[1],Rt=mt(new Map),yn=D(Rt,2),St=yn[0],Et=yn[1],Nt=Je(W),hn=Nt.map(function(M){return St.get(M)}),gn=n.useMemo(function(){return hn},[hn.join("_")]),Ae=Pr(gn,W.length,f),le=v&&cn(v.y),de=v&&cn(ee)||!!P.fixed,Oe=de&&W.some(function(M){var F=M.fixed;return F}),wn=n.useRef(),Te=Mr(y,o),he=Te.isSticky,bt=Te.offsetHeader,kt=Te.offsetSummary,Tt=Te.offsetScroll,It=Te.stickyClassName,Lt=Te.container,ie=n.useMemo(function(){return w==null?void 0:w(p)},[w,p]),Be=(le||he)&&n.isValidElement(ie)&&ie.type===Qe&&ie.props.fixed,en,Xe,nn;le&&(Xe={overflowY:"scroll",maxHeight:v.y}),de&&(en={overflowX:"auto"},le||(Xe={overflowY:"hidden"}),nn={width:ee===!0?"auto":ee,minWidth:"100%"});var Rn=n.useCallback(function(M,F){Dt(ne.current)&&Et(function(te){if(te.get(M)!==F){var J=new Map(te);return J.set(M,F),J}return te})},[]),Ht=Hr(null),Sn=D(Ht,2),_t=Sn[0],En=Sn[1];function De(M,F){F&&(typeof F=="function"?F(M):F.scrollLeft!==M&&(F.scrollLeft=M,F.scrollLeft!==M&&setTimeout(function(){F.scrollLeft=M},0)))}var Ie=Ge(function(M){var F=M.currentTarget,te=M.scrollLeft,J=f==="rtl",ce=typeof te=="number"?te:F.scrollLeft,Le=F||Br;if(!En()||En()===Le){var ge;_t(Le),De(ce,Ze.current),De(ce,q.current),De(ce,pn.current),De(ce,(ge=wn.current)===null||ge===void 0?void 0:ge.setScrollLeft)}var we=F||Ze.current;if(we){var ze=we.scrollWidth,ln=we.clientWidth;if(ze===ln){$e(!1),We(!1);return}J?($e(-ce<ze-ln),We(-ce>0)):($e(ce>0),We(ce<ze-ln))}}),Nn=function(){de&&q.current?Ie({currentTarget:q.current}):($e(!1),We(!1))},Mt=function(F){var te=F.width,J=ne.current?ne.current.offsetWidth:te;K&&g&&ne.current&&(J=g(ne.current,J)||J),J!==xe&&(Nn(),be(J))},bn=n.useRef(!1);n.useEffect(function(){bn.current&&Nn()},[de,i,ue.length]),n.useEffect(function(){bn.current=!0},[]);var Pt=n.useState(0),kn=D(Pt,2),Ve=kn[0],Tn=kn[1],Kt=n.useState(!0),In=D(Kt,2),Ln=In[0],Ft=In[1];n.useEffect(function(){(!$||!K)&&(q.current instanceof Element?Tn(An(q.current).width):Tn(An(mn.current).width)),Ft(Vt("position","sticky"))},[]),n.useEffect(function(){K&&H&&(H.body.current=q.current)});var Ot=n.useCallback(function(M){return n.createElement(n.Fragment,null,n.createElement(Vn,M),Be==="top"&&n.createElement(Ye,M,ie))},[Be,ie]),Bt=n.useCallback(function(M){return n.createElement(Ye,M,ie)},[ie]),Hn=L(["table"],"table"),je=n.useMemo(function(){return d||(Oe?ee==="max-content"?"auto":"fixed":le||he||W.some(function(M){var F=M.ellipsis;return F})?"fixed":"auto")},[le,Oe,W,d,he]),tn,rn={colWidths:gn,columCount:W.length,stickyOffsets:Ae,onHeaderRow:T,fixHeader:le,scroll:v},_n=n.useMemo(function(){return S?null:typeof I=="function"?I():I},[S,I]),Mn=n.createElement(mr,{data:p,measureColumnWidth:le||de||he}),Pn=n.createElement(ut,{colWidths:W.map(function(M){var F=M.width;return F}),columns:W}),Kn=C!=null?n.createElement("caption",{className:"".concat(o,"-caption")},C):void 0,zt=Xn(t,{data:!0}),Fn=Xn(t,{aria:!0});if(le||he){var an;typeof _=="function"?(an=_(p,{scrollbarSize:Ve,ref:q,onScroll:Ie}),rn.colWidths=W.map(function(M,F){var te=M.width,J=F===W.length-1?te-Ve:te;return typeof J=="number"&&!Number.isNaN(J)?J:0})):an=n.createElement("div",{style:h(h({},en),Xe),onScroll:Ie,ref:q,className:Y("".concat(o,"-body"))},n.createElement(Hn,Q({style:h(h({},nn),{},{tableLayout:je})},Fn),Kn,Pn,Mn,!Be&&ie&&n.createElement(Ye,{stickyOffsets:Ae,flattenColumns:W,columns:ue},ie)));var On=h(h(h({noData:!p.length,maxContentScroll:de&&ee==="max-content"},rn),ke),{},{direction:f,stickyClassName:It,onScroll:Ie});tn=n.createElement(n.Fragment,null,R!==!1&&n.createElement(Dn,Q({},On,{stickyTopOffset:bt,className:"".concat(o,"-header"),ref:Ze}),Ot),an,Be&&Be!=="top"&&n.createElement(Dn,Q({},On,{stickyBottomOffset:kt,className:"".concat(o,"-summary"),ref:pn}),Bt),he&&q.current&&q.current instanceof Element&&n.createElement(Fr,{ref:wn,offsetScroll:Tt,scrollBodyRef:q,onScroll:Ie,container:Lt}))}else tn=n.createElement("div",{style:h(h({},en),Xe),className:Y("".concat(o,"-content")),onScroll:Ie,ref:q},n.createElement(Hn,Q({style:h(h({},nn),{},{tableLayout:je})},Fn),Kn,Pn,R!==!1&&n.createElement(Vn,Q({},rn,ke)),Mn,ie&&n.createElement(Ye,{stickyOffsets:Ae,flattenColumns:W,columns:ue},ie)));var on=n.createElement("div",Q({className:Y(o,l,(a={},O(a,"".concat(o,"-rtl"),f==="rtl"),O(a,"".concat(o,"-ping-left"),ht),O(a,"".concat(o,"-ping-right"),wt),O(a,"".concat(o,"-layout-fixed"),d==="fixed"),O(a,"".concat(o,"-fixed-header"),le),O(a,"".concat(o,"-fixed-column"),Oe),O(a,"".concat(o,"-scroll-horizontal"),de),O(a,"".concat(o,"-has-fix-left"),W[0]&&W[0].fixed),O(a,"".concat(o,"-has-fix-right"),W[W.length-1]&&W[W.length-1].fixed==="right"),a)),style:s,id:b,ref:ne},zt),m&&n.createElement(Yn,{className:"".concat(o,"-title")},m(p)),n.createElement("div",{ref:mn,className:"".concat(o,"-container")},tn),x&&n.createElement(Yn,{className:"".concat(o,"-footer")},x(p)));de&&(on=n.createElement(dn,{onResize:Mt},on));var Bn=Lr(W,Ae,f,ue),$t=n.useMemo(function(){return{scrollX:ee,prefixCls:o,getComponent:L,scrollbarSize:Ve,direction:f,fixedInfoList:Bn,isSticky:he,supportSticky:Ln,componentWidth:xe,fixHeader:le,fixColumn:Oe,horizonScroll:de,tableLayout:je,rowClassName:c,expandedRowClassName:P.expandedRowClassName,expandIcon:V,expandableType:ae,expandRowByClick:P.expandRowByClick,expandedRowRender:P.expandedRowRender,onTriggerExpand:U,expandIconColumnIndex:P.expandIconColumnIndex,indentSize:P.indentSize,allColumnsFixedLeft:W.every(function(M){return M.fixed==="left"}),emptyNode:_n,columns:ue,flattenColumns:W,onColumnResize:Rn,hoverStartRow:X,hoverEndRow:ve,onHover:Ce,rowExpandable:P.rowExpandable,onRow:E,getRowKey:N,expandedKeys:me,childrenColumnName:j}},[ee,o,L,Ve,f,Bn,he,Ln,xe,le,Oe,de,je,c,P.expandedRowClassName,V,ae,P.expandRowByClick,P.expandedRowRender,U,P.expandIconColumnIndex,P.indentSize,_n,ue,W,Rn,X,ve,Ce,P.rowExpandable,E,N,me,j]);return n.createElement(oe.Provider,{value:$t},on)}var Wr=n.forwardRef($r);function Ar(e){return Zn(Wr,e)}var Me=Ar();Me.EXPAND_COLUMN=Re;Me.INTERNAL_HOOKS=qe;Me.Column=sr;Me.ColumnGroup=ur;Me.Summary=cr;var xt=un(null),Ct=un(null);function Xr(e,r,a){var t=r||1;return a[e+t]-(a[e]||0)}function Dr(e){var r=e.rowInfo,a=e.column,t=e.colIndex,o=e.indent,l=e.index,c=e.renderIndex,s=e.record,i=e.style,u=e.className,v=e.inverse,d=e.getHeight,f=a.render,m=a.dataIndex,x=a.className,w=a.width,C=re(Ct,["columnsOffset"]),b=C.columnsOffset,R=lt(r,a,t,o,l),k=R.key,I=R.fixedInfo,E=R.appendCellNode,T=R.additionalCellProps,B=T.style,z=T.colSpan,H=z===void 0?1:z,$=T.rowSpan,g=$===void 0?1:$,y=t-1,p=Xr(y,H,b),S=H>1?w-p:0,K=h(h(h({},B),i),{},{flex:"0 0 ".concat(p,"px"),width:"".concat(p,"px"),marginRight:S,pointerEvents:"auto"}),L=n.useMemo(function(){return v?g<=1:H===0||g===0||g>1},[g,H,v]);L?K.visibility="hidden":v&&(K.height=d==null?void 0:d(g));var N=L?function(){return null}:f,_={};return(g===0||H===0)&&(_.rowSpan=1,_.colSpan=1),n.createElement(Ee,Q({className:Y(x,u),ellipsis:a.ellipsis,align:a.align,scope:a.rowScope,component:"div",prefixCls:r.prefixCls,key:k,record:s,index:l,renderIndex:c,dataIndex:m,render:N,shouldCellUpdate:a.shouldCellUpdate},I,{appendNode:E,additionalProps:h(h({},T),{},{style:K},_)}))}var Vr=["data","index","className","rowKey","style","extra","getHeight"],jr=n.forwardRef(function(e,r){var a=e.data,t=e.index,o=e.className,l=e.rowKey,c=e.style,s=e.extra,i=e.getHeight,u=Se(e,Vr),v=a.record,d=a.indent,f=a.index,m=re(oe,["prefixCls","flattenColumns","fixColumn","componentWidth","scrollX"]),x=m.scrollX,w=m.flattenColumns,C=m.prefixCls,b=m.fixColumn,R=m.componentWidth,k=at(v,l,t,d),I=k.rowSupportExpand,E=k.expanded,T=k.rowProps,B=k.expandedRowRender,z=k.expandedRowClassName,H;if(I&&E){var $=B(v,t,d+1,E),g=z==null?void 0:z(v,t,d),y={};b&&(y={style:O({},"--virtual-width","".concat(R,"px"))});var p="".concat(C,"-expanded-row-cell");H=n.createElement("div",{className:Y("".concat(C,"-expanded-row"),"".concat(C,"-expanded-row-level-").concat(d+1),g)},n.createElement(Ee,{component:"div",prefixCls:C,className:Y(p,O({},"".concat(p,"-fixed"),b)),additionalProps:y},$))}var S=h(h({},c),{},{width:x});s&&(S.position="absolute",S.pointerEvents="none");var K=n.createElement("div",Q({},T,u,{ref:I?null:r,className:Y(o,"".concat(C,"-row"),T==null?void 0:T.className,O({},"".concat(C,"-row-extra"),s)),style:h(h({},S),T==null?void 0:T.style)}),w.map(function(L,N){return n.createElement(Dr,{key:N,rowInfo:k,column:L,colIndex:N,indent:d,index:t,renderIndex:f,record:v,inverse:s,getHeight:i})}));return I?n.createElement("div",{ref:r},K,H):K}),Gn=_e(jr),Ur=n.forwardRef(function(e,r){var a=e.data,t=e.onScroll,o=re(oe,["flattenColumns","onColumnResize","getRowKey","prefixCls","expandedKeys","childrenColumnName","emptyNode","scrollX"]),l=o.flattenColumns,c=o.onColumnResize,s=o.getRowKey,i=o.expandedKeys,u=o.prefixCls,v=o.childrenColumnName,d=o.emptyNode,f=o.scrollX,m=re(xt),x=m.sticky,w=m.scrollY,C=m.listItemHeight,b=n.useRef(),R=rt(a,v,i,s),k=n.useMemo(function(){var g=0;return l.map(function(y){var p=y.width,S=y.key;return g+=p,[S,p,g]})},[l]),I=n.useMemo(function(){return k.map(function(g){return g[2]})},[k]);n.useEffect(function(){k.forEach(function(g){var y=D(g,2),p=y[0],S=y[1];c(p,S)})},[k]),n.useImperativeHandle(r,function(){var g={scrollTo:function(p){var S;(S=b.current)===null||S===void 0||S.scrollTo(p)}};return Object.defineProperty(g,"scrollLeft",{get:function(){var p;return((p=b.current)===null||p===void 0?void 0:p.getScrollInfo().x)||0},set:function(p){var S;(S=b.current)===null||S===void 0||S.scrollTo({left:p})}}),g});var E=function(y,p){var S,K=(S=R[p])===null||S===void 0?void 0:S.record,L=y.onCell;if(L){var N,_=L(K,p);return(N=_==null?void 0:_.rowSpan)!==null&&N!==void 0?N:1}return 1},T=function(y){var p=y.start,S=y.end,K=y.getSize,L=y.offsetY;if(S<0)return null;for(var N=l.filter(function(V){return E(V,p)===0}),_=p,A=function(j){if(N=N.filter(function(U){return E(U,j)===0}),!N.length)return _=j,1},G=p;G>=0&&!A(G);G-=1);for(var X=l.filter(function(V){return E(V,S)!==1}),ve=S,Ce=function(j){if(X=X.filter(function(U){return E(U,j)!==1}),!X.length)return ve=Math.max(j-1,S),1},se=S;se<R.length&&!Ce(se);se+=1);for(var Z=[],P=function(j){var U=R[j];if(!U)return 1;l.some(function(pe){return E(pe,j)>1})&&Z.push(j)},ae=_;ae<=ve;ae+=1)P(ae);var me=Z.map(function(V){var j=R[V],U=s(j.record,V),pe=function(xe){var be=V+xe-1,Ke=s(R[be].record,be),ye=K(U,Ke);return ye.bottom-ye.top},Ne=K(U);return n.createElement(Gn,{key:V,data:j,rowKey:U,index:V,style:{top:-L+Ne.top},extra:!0,getHeight:pe})});return me},B=n.useMemo(function(){return{columnsOffset:I}},[I]),z="".concat(u,"-tbody"),H;if(R.length){var $={};x&&($.position="sticky",$.bottom=0,He(x)==="object"&&x.offsetScroll&&($.bottom=x.offsetScroll)),H=n.createElement(jt,{fullHeight:!1,ref:b,styles:{horizontalScrollBar:$},className:Y(z,"".concat(z,"-virtual")),height:w,itemHeight:C||24,data:R,itemKey:function(y){return s(y.record)},scrollWidth:f,onVirtualScroll:function(y){var p=y.x;t({scrollLeft:p})},extraRender:T},function(g,y,p){var S=s(g.record,y);return n.createElement(Gn,Q({data:g,rowKey:S,index:y},p))})}else H=n.createElement("div",{className:Y("".concat(u,"-placeholder"))},n.createElement(Ee,{component:"div",prefixCls:u},d));return n.createElement(Ct.Provider,{value:B},H)}),Yr=_e(Ur),Gr=function(r,a){var t=a.ref,o=a.onScroll;return n.createElement(Yr,{ref:t,data:r,onScroll:o})};function qr(e,r){var a=e.columns,t=e.scroll,o=e.sticky,l=e.prefixCls,c=l===void 0?pt:l,s=e.className,i=e.listItemHeight,u=e.components,v=t||{},d=v.x,f=v.y;typeof d!="number"&&(d=1),typeof f!="number"&&(f=500);var m=n.useMemo(function(){return{sticky:o,scrollY:f,listItemHeight:i}},[o,f,i]);return n.createElement(xt.Provider,{value:m},n.createElement(Me,Q({},e,{className:Y(s,"".concat(c,"-virtual")),scroll:h(h({},t),{},{x:d}),components:h(h({},u),{},{body:Gr}),columns:a,internalHooks:qe,tailor:!0,ref:r})))}var Jr=n.forwardRef(qr);function Qr(e){return Zn(Jr,e)}Qr();export{Re as E,cr as F,st as I,Qr as a,qe as b,vt as c,Ar as g};