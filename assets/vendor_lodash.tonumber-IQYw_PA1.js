import{a as e}from"./vendor_@ant-design-B5ndG5Ih.js";var n=NaN,s="[object Symbol]",f=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,p=/^0o[0-7]+$/i,y=parseInt,m=Object.prototype,j=m.toString;function i(t){var r=typeof t;return!!t&&(r=="object"||r=="function")}function a(t){return!!t&&typeof t=="object"}function g(t){return typeof t=="symbol"||a(t)&&j.call(t)==s}function O(t){if(typeof t=="number")return t;if(g(t))return n;if(i(t)){var r=typeof t.valueOf=="function"?t.valueOf():t;t=i(r)?r+"":r}if(typeof t!="string")return t===0?t:+t;t=t.replace(f,"");var o=b.test(t);return o||p.test(t)?y(t.slice(2),o?2:8):c.test(t)?n:+t}var I=O;const x=e(I);export{x as t};
