!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.rtwCore=t():e.rtwCore=t()}(window,function(){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(1);t.externals=r.default;var n=o(2);t.sum=n.sum,function(e){for(var o in e)t.hasOwnProperty(o)||(t[o]=e[o])}(o(3)),t.library="rtwCore"},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={"@wx/rtw-core":"rtwCore",antd:"antd",react:{commonjs:"react",commonjs2:"react",amd:"react",root:"React"},"react-dom":{commonjs:"react-dom",commonjs2:"react-dom",amd:"react-dom",root:"ReactDOM"},"styled-components":{commonjs:"styled-components",commonjs2:"styled-components"}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sum=function(e,t){return e+t}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.logError=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];console.log.apply(console,e)}}])});