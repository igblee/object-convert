!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.objectConvert=t():e.objectConvert=t()}(window,(function(){return function(e){var t={};function u(n){if(t[n])return t[n].exports;var f=t[n]={i:n,l:!1,exports:{}};return e[n].call(f.exports,f,f.exports,u),f.l=!0,f.exports}return u.m=e,u.c=t,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var f in e)u.d(n,f,function(t){return e[t]}.bind(null,f));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/dist/",u(u.s=3)}([function(e,t,u){(function(t){var u=1/0,n="[object Symbol]",f=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",c="[\\ud800-\\udfff]",i="["+o+"]",l="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",a="\\d+",d="[\\u2700-\\u27bf]",x="[a-z\\xdf-\\xf6\\xf8-\\xff]",s="[^\\ud800-\\udfff"+o+a+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",b="\\ud83c[\\udffb-\\udfff]",p="[^\\ud800-\\udfff]",j="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",g="[A-Z\\xc0-\\xd6\\xd8-\\xde]",y="(?:"+x+"|"+s+")",O="(?:"+g+"|"+s+")",h="(?:"+l+"|"+b+")"+"?",E="[\\ufe0e\\ufe0f]?"+h+("(?:\\u200d(?:"+[p,j,v].join("|")+")[\\ufe0e\\ufe0f]?"+h+")*"),A="(?:"+[d,j,v].join("|")+")"+E,m="(?:"+[p+l+"?",l,j,v,c].join("|")+")",S=RegExp("['’]","g"),L=RegExp(l,"g"),U=RegExp(b+"(?="+b+")|"+m+E,"g"),z=RegExp([g+"?"+x+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[i,g,"$"].join("|")+")",O+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[i,g+y,"$"].join("|")+")",g+"?"+y+"+(?:['’](?:d|ll|m|re|s|t|ve))?",g+"+(?:['’](?:D|LL|M|RE|S|T|VE))?",a,A].join("|"),"g"),I=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),Z=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,C="object"==typeof t&&t&&t.Object===Object&&t,R="object"==typeof self&&self&&self.Object===Object&&self,w=C||R||Function("return this")();var T,D=(T={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==T?void 0:T[e]});function N(e){return I.test(e)}function P(e){return N(e)?function(e){return e.match(U)||[]}(e):function(e){return e.split("")}(e)}var G=Object.prototype.toString,M=w.Symbol,_=M?M.prototype:void 0,Y=_?_.toString:void 0;function k(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&G.call(e)==n}(e))return Y?Y.call(e):"";var t=e+"";return"0"==t&&1/e==-u?"-0":t}function H(e,t,u){var n=e.length;return u=void 0===u?n:u,!t&&u>=n?e:function(e,t,u){var n=-1,f=e.length;t<0&&(t=-t>f?0:f+t),(u=u>f?f:u)<0&&(u+=f),f=t>u?0:u-t>>>0,t>>>=0;for(var r=Array(f);++n<f;)r[n]=e[n+t];return r}(e,t,u)}function J(e){return null==e?"":k(e)}var V,$=(V=function(e,t,u){return t=t.toLowerCase(),e+(u?K(J(t).toLowerCase()):t)},function(e){return function(e,t,u,n){var f=-1,r=e?e.length:0;for(n&&r&&(u=e[++f]);++f<r;)u=t(u,e[f],f,e);return u}(function(e,t,u){return e=J(e),void 0===(t=u?void 0:t)?function(e){return Z.test(e)}(e)?function(e){return e.match(z)||[]}(e):function(e){return e.match(f)||[]}(e):e.match(t)||[]}(function(e){return(e=J(e))&&e.replace(r,D).replace(L,"")}(e).replace(S,"")),V,"")});var F,K=(F="toUpperCase",function(e){var t=N(e=J(e))?P(e):void 0,u=t?t[0]:e.charAt(0),n=t?H(t,1).join(""):e.slice(1);return u[F]()+n});e.exports=$}).call(this,u(2))},function(e,t,u){(function(t){var u=1/0,n="[object Symbol]",f=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",c="["+o+"]",i="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",l="\\d+",a="[\\u2700-\\u27bf]",d="[a-z\\xdf-\\xf6\\xf8-\\xff]",x="[^\\ud800-\\udfff"+o+l+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",p="[A-Z\\xc0-\\xd6\\xd8-\\xde]",j="(?:"+d+"|"+x+")",v="(?:"+p+"|"+x+")",g="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",y="[\\ufe0e\\ufe0f]?"+g+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",s,b].join("|")+")[\\ufe0e\\ufe0f]?"+g+")*"),O="(?:"+[a,s,b].join("|")+")"+y,h=RegExp("['’]","g"),E=RegExp(i,"g"),A=RegExp([p+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[c,p,"$"].join("|")+")",v+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[c,p+j,"$"].join("|")+")",p+"?"+j+"+(?:['’](?:d|ll|m|re|s|t|ve))?",p+"+(?:['’](?:D|LL|M|RE|S|T|VE))?",l,O].join("|"),"g"),m=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,S="object"==typeof t&&t&&t.Object===Object&&t,L="object"==typeof self&&self&&self.Object===Object&&self,U=S||L||Function("return this")();var z,I=(z={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==z?void 0:z[e]});var Z=Object.prototype.toString,C=U.Symbol,R=C?C.prototype:void 0,w=R?R.toString:void 0;function T(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&Z.call(e)==n}(e))return w?w.call(e):"";var t=e+"";return"0"==t&&1/e==-u?"-0":t}function D(e){return null==e?"":T(e)}var N,P=(N=function(e,t,u){return e+(u?"_":"")+t.toLowerCase()},function(e){return function(e,t,u,n){var f=-1,r=e?e.length:0;for(n&&r&&(u=e[++f]);++f<r;)u=t(u,e[f],f,e);return u}(function(e,t,u){return e=D(e),void 0===(t=u?void 0:t)?function(e){return m.test(e)}(e)?function(e){return e.match(A)||[]}(e):function(e){return e.match(f)||[]}(e):e.match(t)||[]}(function(e){return(e=D(e))&&e.replace(r,I).replace(E,"")}(e).replace(h,"")),N,"")});e.exports=P}).call(this,u(2))},function(e,t){var u;u=function(){return this}();try{u=u||new Function("return this")()}catch(e){"object"==typeof window&&(u=window)}e.exports=u},function(e,t,u){"use strict";u.r(t);var n=u(0),f=u.n(n),r=u(1),o=u.n(r);function c(e){return Object.prototype.toString.call(e)}function i(e,t=null,u=0){if("[object Object]"!==c(e))return e;let n=!1;t&&t.length&&(n=!0);let r={};for(let[o,l]of Object.entries(e))if(n)if("[object Object]"!==c(l)){let e=!1;if(t.forEach(t=>{t.hasOwnProperty("level")?u===t.level&&o===t.source&&(r[t.target]=l,e=!0):o===t.source&&(r[t.target]=l,e=!0)}),!e){const e=f()(o);r[e]=l}}else{let e=!1;if(t.forEach(n=>{n.hasOwnProperty("level")?u===n.level&&o===n.source&&(r[n.target]=i(l,t,u+1),e=!0):o===n.source&&(r[n.target]=i(l,t,u+1),e=!0)}),!e){const e=f()(o);r[e]=i(l,t,u+1)}}else if("[object Object]"!==c(l)){const e=f()(o);r[e]=l}else{const e=f()(o);r[e]=i(l,t,u+1)}return r}function l(e,t=null,u=0){if("[object Object]"!==c(e))return e;let n=!1;t&&t.length&&(n=!0);let f={};for(let[r,i]of Object.entries(e))if(n)if("[object Object]"!==c(i)){let e=!1;if(t.forEach(t=>{t.hasOwnProperty("level")?u===t.level&&r===t.source&&(f[t.target]=i,e=!0):r===t.source&&(f[t.target]=i,e=!0)}),!e){const e=o()(r);f[e]=i}}else{let e=!1;if(t.forEach(n=>{n.hasOwnProperty("level")?u===n.level&&r===n.source&&(f[n.target]=l(i,t,u+1),e=!0):r===n.source&&(f[n.target]=l(i,t,u+1),e=!0)}),!e){const e=o()(r);f[e]=l(i,t,u+1)}}else if("[object Object]"!==c(i)){const e=o()(r);f[e]=i}else{const e=o()(r);f[e]=l(i,t,u+1)}return f}u.d(t,"s2cConvert",(function(){return i})),u.d(t,"c2sConvert",(function(){return l}))}])}));
//# sourceMappingURL=main.js.map