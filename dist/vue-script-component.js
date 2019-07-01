!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e){},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){
/**
 * @file postscribe
 * @description Asynchronously write javascript, even with document.write.
 * @version v2.0.8
 * @see {@link https://krux.github.io/postscribe}
 * @license MIT
 * @author Derek Brans
 * @copyright 2016 Krux Digital, Inc
 */
!function(e,n){t.exports=n()}(0,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=t,n.c=e,n.p="",n(0)}([function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{default:t}}(n(1));t.exports=r.default},function(t,e,n){"use strict";e.__esModule=!0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default=p;var o=function(t){return t&&t.__esModule?t:{default:t}}(n(2)),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(4));function a(){}var u={afterAsync:a,afterDequeue:a,afterStreamStart:a,afterWrite:a,autoFix:!0,beforeEnqueue:a,beforeWriteToken:function(t){return t},beforeWrite:function(t){return t},done:a,error:function(t){throw new Error(t.msg)},releaseAsync:!1},s=0,c=[],f=null;function l(){var t=c.shift();if(t){var e=i.last(t);e.afterDequeue(),t.stream=function(t,e,n){(f=new o.default(t,n)).id=s++,f.name=n.name||f.id,p.streams[f.name]=f;var i=t.ownerDocument,u={close:i.close,open:i.open,write:i.write,writeln:i.writeln};function c(t){t=n.beforeWrite(t),f.write(t),n.afterWrite(t)}r(i,{close:a,open:a,write:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return c(e.join(""))},writeln:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return c(e.join("")+"\n")}});var h=f.win.onerror||a;return f.win.onerror=function(t,e,r){n.error({msg:t+" - "+e+": "+r}),h.apply(f.win,[t,e,r])},f.write(e,function(){r(i,u),f.win.onerror=h,n.done(),f=null,l()}),f}.apply(void 0,t),e.afterStreamStart()}}function p(t,e,n){if(i.isFunction(n))n={done:n};else if("clear"===n)return c=[],f=null,void(s=0);n=i.defaults(n,u);var r=[t=/^#/.test(t)?window.document.getElementById(t.substr(1)):t.jquery?t[0]:t,e,n];return t.postscribe={cancel:function(){r.stream?r.stream.abort():r[1]=a}},n.beforeEnqueue(r),c.push(r),f||l(),t.postscribe}r(p,{streams:{},queue:c,WriteStream:o.default})},function(t,e,n){"use strict";e.__esModule=!0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(t){return t&&t.__esModule?t:{default:t}}(n(3)),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(4));var a="data-ps-";function u(t,e){var n=a+e,r=t.getAttribute(n);return i.existy(r)?String(r):r}function s(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=a+e;i.existy(n)&&""!==n?t.setAttribute(r,n):t.removeAttribute(r)}var c=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.root=e,this.options=n,this.doc=e.ownerDocument,this.win=this.doc.defaultView||this.doc.parentWindow,this.parser=new o.default("",{autoFix:n.autoFix}),this.actuals=[e],this.proxyHistory="",this.proxyRoot=this.doc.createElement(e.nodeName),this.scriptStack=[],this.writeQueue=[],s(this.proxyRoot,"proxyof",0)}return t.prototype.write=function(){var t;for((t=this.writeQueue).push.apply(t,arguments);!this.deferredRemote&&this.writeQueue.length;){var e=this.writeQueue.shift();i.isFunction(e)?this._callFunction(e):this._writeImpl(e)}},t.prototype._callFunction=function(t){var e={type:"function",value:t.name||t.toString()};this._onScriptStart(e),t.call(this.win,this.doc),this._onScriptDone(e)},t.prototype._writeImpl=function(t){this.parser.append(t);for(var e=void 0,n=void 0,r=void 0,o=[];(e=this.parser.readToken())&&!(n=i.isScript(e))&&!(r=i.isStyle(e));)(e=this.options.beforeWriteToken(e))&&o.push(e);o.length>0&&this._writeStaticTokens(o),n&&this._handleScriptToken(e),r&&this._handleStyleToken(e)},t.prototype._writeStaticTokens=function(t){var e=this._buildChunk(t);return e.actual?(e.html=this.proxyHistory+e.actual,this.proxyHistory+=e.proxy,this.proxyRoot.innerHTML=e.html,this._walkChunk(),e):null},t.prototype._buildChunk=function(t){for(var e=this.actuals.length,n=[],r=[],o=[],i=t.length,u=0;u<i;u++){var s=t[u],c=s.toString();if(n.push(c),s.attrs){if(!/^noscript$/i.test(s.tagName)){var f=e++;r.push(c.replace(/(\/?>)/," "+a+"id="+f+" $1")),"ps-script"!==s.attrs.id&&"ps-style"!==s.attrs.id&&o.push("atomicTag"===s.type?"":"<"+s.tagName+" "+a+"proxyof="+f+(s.unary?" />":">"))}}else r.push(c),o.push("endTag"===s.type?c:"")}return{tokens:t,raw:n.join(""),actual:r.join(""),proxy:o.join("")}},t.prototype._walkChunk=function(){for(var t=void 0,e=[this.proxyRoot];i.existy(t=e.shift());){var n=1===t.nodeType;if(!(n&&u(t,"proxyof"))){n&&(this.actuals[u(t,"id")]=t,s(t,"id"));var r=t.parentNode&&u(t.parentNode,"proxyof");r&&this.actuals[r].appendChild(t)}e.unshift.apply(e,i.toArray(t.childNodes))}},t.prototype._handleScriptToken=function(t){var e=this,n=this.parser.clear();n&&this.writeQueue.unshift(n),t.src=t.attrs.src||t.attrs.SRC,(t=this.options.beforeWriteToken(t))&&(t.src&&this.scriptStack.length?this.deferredRemote=t:this._onScriptStart(t),this._writeScriptToken(t,function(){e._onScriptDone(t)}))},t.prototype._handleStyleToken=function(t){var e=this.parser.clear();e&&this.writeQueue.unshift(e),t.type=t.attrs.type||t.attrs.TYPE||"text/css",(t=this.options.beforeWriteToken(t))&&this._writeStyleToken(t),e&&this.write()},t.prototype._writeStyleToken=function(t){var e=this._buildStyle(t);this._insertCursor(e,"ps-style"),t.content&&(e.styleSheet&&!e.sheet?e.styleSheet.cssText=t.content:e.appendChild(this.doc.createTextNode(t.content)))},t.prototype._buildStyle=function(t){var e=this.doc.createElement(t.tagName);return e.setAttribute("type",t.type),i.eachKey(t.attrs,function(t,n){e.setAttribute(t,n)}),e},t.prototype._insertCursor=function(t,e){this._writeImpl('<span id="'+e+'"/>');var n=this.doc.getElementById(e);n&&n.parentNode.replaceChild(t,n)},t.prototype._onScriptStart=function(t){t.outerWrites=this.writeQueue,this.writeQueue=[],this.scriptStack.unshift(t)},t.prototype._onScriptDone=function(t){t===this.scriptStack[0]?(this.scriptStack.shift(),this.write.apply(this,t.outerWrites),!this.scriptStack.length&&this.deferredRemote&&(this._onScriptStart(this.deferredRemote),this.deferredRemote=null)):this.options.error({msg:"Bad script nesting or script finished twice"})},t.prototype._writeScriptToken=function(t,e){var n=this._buildScript(t),r=this._shouldRelease(n),o=this.options.afterAsync;t.src&&(n.src=t.src,this._scriptLoadHandler(n,r?o:function(){e(),o()}));try{this._insertCursor(n,"ps-script"),n.src&&!r||e()}catch(t){this.options.error(t),e()}},t.prototype._buildScript=function(t){var e=this.doc.createElement(t.tagName);return i.eachKey(t.attrs,function(t,n){e.setAttribute(t,n)}),t.content&&(e.text=t.content),e},t.prototype._scriptLoadHandler=function(t,e){function n(){t=t.onload=t.onreadystatechange=t.onerror=null}var o=this.options.error;function i(){n(),null!=e&&e(),e=null}function a(t){n(),o(t),null!=e&&e(),e=null}function u(t,e){var n=t["on"+e];null!=n&&(t["_on"+e]=n)}u(t,"load"),u(t,"error"),r(t,{onload:function(){if(t._onload)try{t._onload.apply(this,Array.prototype.slice.call(arguments,0))}catch(e){a({msg:"onload handler failed "+e+" @ "+t.src})}i()},onerror:function(){if(t._onerror)try{t._onerror.apply(this,Array.prototype.slice.call(arguments,0))}catch(e){return void a({msg:"onerror handler failed "+e+" @ "+t.src})}a({msg:"remote script failed "+t.src})},onreadystatechange:function(){/^(loaded|complete)$/.test(t.readyState)&&i()}})},t.prototype._shouldRelease=function(t){return!/^script$/i.test(t.nodeName)||!!(this.options.releaseAsync&&t.src&&t.hasAttribute("async"))},t}();e.default=c},function(t,e,n){
/**
       * @file prescribe
       * @description Tiny, forgiving HTML parser
       * @version vundefined
       * @see {@link https://github.com/krux/prescribe/}
       * @license MIT
       * @author Derek Brans
       * @copyright 2016 Krux Digital, Inc
       */
!function(e,n){t.exports=n()}(0,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=t,n.c=e,n.p="",n(0)}([function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{default:t}}(n(1));t.exports=r.default},function(t,e,n){"use strict";e.__esModule=!0;var r=u(n(2)),o=u(n(3)),i=function(t){return t&&t.__esModule?t:{default:t}}(n(6)),a=n(5);function u(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}var s={comment:/^<!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},c=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.stream=n;var a=!1,u={};for(var s in r)r.hasOwnProperty(s)&&(o.autoFix&&(u[s+"Fix"]=!0),a=a||u[s+"Fix"]);a?(this._readToken=(0,i.default)(this,u,function(){return e._readTokenImpl()}),this._peekToken=(0,i.default)(this,u,function(){return e._peekTokenImpl()})):(this._readToken=this._readTokenImpl,this._peekToken=this._peekTokenImpl)}return t.prototype.append=function(t){this.stream+=t},t.prototype.prepend=function(t){this.stream=t+this.stream},t.prototype._readTokenImpl=function(){var t=this._peekTokenImpl();if(t)return this.stream=this.stream.slice(t.length),t},t.prototype._peekTokenImpl=function(){for(var t in s)if(s.hasOwnProperty(t)&&s[t].test(this.stream)){var e=o[t](this.stream);if(e)return"startTag"===e.type&&/script|style/i.test(e.tagName)?null:(e.text=this.stream.substr(0,e.length),e)}},t.prototype.peekToken=function(){return this._peekToken()},t.prototype.readToken=function(){return this._readToken()},t.prototype.readTokens=function(t){for(var e=void 0;e=this.readToken();)if(t[e.type]&&!1===t[e.type](e))return},t.prototype.clear=function(){var t=this.stream;return this.stream="",t},t.prototype.rest=function(){return this.stream},t}();for(var f in e.default=c,c.tokenToString=function(t){return t.toString()},c.escapeAttributes=function(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=(0,a.escapeQuotes)(t[n],null));return e},c.supports=r,r)r.hasOwnProperty(f)&&(c.browserHasFlaw=c.browserHasFlaw||!r[f]&&f)},function(t,e){"use strict";e.__esModule=!0;var n=!1,r=!1,o=window.document.createElement("div");try{var i="<P><I></P></I>";o.innerHTML=i,e.tagSoup=n=o.innerHTML!==i}catch(t){e.tagSoup=n=!1}try{o.innerHTML="<P><i><P></P></i></P>",e.selfClose=r=2===o.childNodes.length}catch(t){e.selfClose=r=!1}o=null,e.tagSoup=n,e.selfClose=r},function(t,e,n){"use strict";e.__esModule=!0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.comment=function(t){var e=t.indexOf("--\x3e");if(e>=0)return new o.CommentToken(t.substr(4,e-1),e+3)},e.chars=function(t){var e=t.indexOf("<");return new o.CharsToken(e>=0?e:t.length)},e.startTag=a,e.atomicTag=function(t){var e=a(t);if(e){var n=t.slice(e.length);if(n.match(new RegExp("</\\s*"+e.tagName+"\\s*>","i"))){var r=n.match(new RegExp("([\\s\\S]*?)</\\s*"+e.tagName+"\\s*>","i"));if(r)return new o.AtomicTagToken(e.tagName,r[0].length+e.length,e.attrs,e.booleanAttrs,r[1])}}},e.endTag=function(t){var e=t.match(i.endTag);if(e)return new o.EndTagToken(e[1],e[0].length)};var o=n(4),i={startTag:/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,endTag:/^<\/([\-A-Za-z0-9_]+)[^>]*>/,attr:/(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,fillAttr:/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i};function a(t){if(-1!==t.indexOf(">")){var e=t.match(i.startTag);if(e){var n=function(){var t={},n={},r=e[2];return e[2].replace(i.attr,function(e,o){arguments[2]||arguments[3]||arguments[4]||arguments[5]?arguments[5]?(t[arguments[5]]="",n[arguments[5]]=!0):t[o]=arguments[2]||arguments[3]||arguments[4]||i.fillAttr.test(o)&&o||"":t[o]="",r=r.replace(e,"")}),{v:new o.StartTagToken(e[1],e[0].length,t,n,!!e[3],r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))}}();if("object"===(void 0===n?"undefined":r(n)))return n.v}}}},function(t,e,n){"use strict";e.__esModule=!0,e.EndTagToken=e.AtomicTagToken=e.StartTagToken=e.TagToken=e.CharsToken=e.CommentToken=e.Token=void 0;var r=n(5);function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.Token=function t(e,n){o(this,t),this.type=e,this.length=n,this.text=""},e.CommentToken=function(){function t(e,n){o(this,t),this.type="comment",this.length=n||(e?e.length:0),this.text="",this.content=e}return t.prototype.toString=function(){return"\x3c!--"+this.content},t}(),e.CharsToken=function(){function t(e){o(this,t),this.type="chars",this.length=e,this.text=""}return t.prototype.toString=function(){return this.text},t}();var i=e.TagToken=function(){function t(e,n,r,i,a){o(this,t),this.type=e,this.length=r,this.text="",this.tagName=n,this.attrs=i,this.booleanAttrs=a,this.unary=!1,this.html5Unary=!1}return t.formatTag=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n="<"+t.tagName;for(var o in t.attrs)if(t.attrs.hasOwnProperty(o)){n+=" "+o;var i=t.attrs[o];void 0!==t.booleanAttrs&&void 0!==t.booleanAttrs[o]||(n+='="'+(0,r.escapeQuotes)(i)+'"')}return t.rest&&(n+=" "+t.rest),t.unary&&!t.html5Unary?n+="/>":n+=">",void 0!==e&&null!==e&&(n+=e+"</"+t.tagName+">"),n},t}();e.StartTagToken=function(){function t(e,n,r,i,a,u){o(this,t),this.type="startTag",this.length=n,this.text="",this.tagName=e,this.attrs=r,this.booleanAttrs=i,this.html5Unary=!1,this.unary=a,this.rest=u}return t.prototype.toString=function(){return i.formatTag(this)},t}(),e.AtomicTagToken=function(){function t(e,n,r,i,a){o(this,t),this.type="atomicTag",this.length=n,this.text="",this.tagName=e,this.attrs=r,this.booleanAttrs=i,this.unary=!1,this.html5Unary=!1,this.content=a}return t.prototype.toString=function(){return i.formatTag(this,this.content)},t}(),e.EndTagToken=function(){function t(e,n){o(this,t),this.type="endTag",this.length=n,this.text="",this.tagName=e}return t.prototype.toString=function(){return"</"+this.tagName+">"},t}()},function(t,e){"use strict";e.__esModule=!0,e.escapeQuotes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t?t.replace(/([^"]*)"/g,function(t,e){return/\\/.test(e)?e+'"':e+'\\"'}):e}},function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e,n){var a=function(){var t=[];return t.last=function(){return this[this.length-1]},t.lastTagNameEq=function(t){var e=this.last();return e&&e.tagName&&e.tagName.toUpperCase()===t.toUpperCase()},t.containsTagName=function(t){for(var e,n=0;e=this[n];n++)if(e.tagName===t)return!0;return!1},t}(),u={startTag:function(n){var o=n.tagName;"TR"===o.toUpperCase()&&a.lastTagNameEq("TABLE")?(t.prepend("<TBODY>"),s()):e.selfCloseFix&&r.test(o)&&a.containsTagName(o)?a.lastTagNameEq(o)?i(t,a):(t.prepend("</"+n.tagName+">"),s()):n.unary||a.push(n)},endTag:function(r){var o=a.last();o?e.tagSoupFix&&!a.lastTagNameEq(r.tagName)?i(t,a):a.pop():e.tagSoupFix&&(n(),s())}};function s(){var e=function(t,e){var n=t.stream,r=o(e());return t.stream=n,r}(t,n);e&&u[e.type]&&u[e.type](e)}return function(){return s(),o(n())}};var n=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;function o(t){return t&&"startTag"===t.type&&(t.unary=n.test(t.tagName)||t.unary,t.html5Unary=!/\/>$/.test(t.text)),t}function i(t,e){var n=e.pop();t.prepend("</"+n.tagName+">")}}])})},function(t,e){"use strict";e.__esModule=!0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function r(t){return void 0!==t&&null!==t}function o(t,e,n){var r=void 0,o=t&&t.length||0;for(r=0;r<o;r++)e.call(n,t[r],r)}function i(t,e,n){for(var r in t)t.hasOwnProperty(r)&&e.call(n,r,t[r])}function a(t,e){return!(!t||"startTag"!==t.type&&"atomicTag"!==t.type||!("tagName"in t))&&!!~t.tagName.toLowerCase().indexOf(e)}e.existy=r,e.isFunction=function(t){return"function"==typeof t},e.each=o,e.eachKey=i,e.defaults=function(t,e){return t=t||{},i(e,function(e,n){r(t[e])||(t[e]=n)}),t},e.toArray=function(t){try{return Array.prototype.slice.call(t)}catch(r){var e=function(){var e=[];return o(t,function(t){e.push(t)}),{v:e}}();if("object"===(void 0===e?"undefined":n(e)))return e.v}},e.last=function(t){return t[t.length-1]},e.isTag=a,e.isScript=function(t){return a(t,"script")},e.isStyle=function(t){return a(t,"style")}}])})},function(t,e,n){"use strict";var r=n(4);t.exports=function(t){r.notEqual(typeof document,"undefined","document-ready only runs in the browser");var e=document.readyState;if("complete"===e||"interactive"===e)return setTimeout(t,0);document.addEventListener("DOMContentLoaded",function(){t()})}},function(t,e,n){"use strict";(function(e){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function r(t,e){if(t===e)return 0;for(var n=t.length,r=e.length,o=0,i=Math.min(n,r);o<i;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0}function o(t){return e.Buffer&&"function"==typeof e.Buffer.isBuffer?e.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}var i=n(5),a=Object.prototype.hasOwnProperty,u=Array.prototype.slice,s="foo"===function(){}.name;function c(t){return Object.prototype.toString.call(t)}function f(t){return!o(t)&&("function"==typeof e.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}var l=t.exports=m,p=/\s*function\s+([^\(\s]*)\s*/;function h(t){if(i.isFunction(t)){if(s)return t.name;var e=t.toString().match(p);return e&&e[1]}}function d(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function y(t){if(s||!i.isFunction(t))return i.inspect(t);var e=h(t);return"[Function"+(e?": "+e:"")+"]"}function g(t,e,n,r,o){throw new l.AssertionError({message:n,actual:t,expected:e,operator:r,stackStartFunction:o})}function m(t,e){t||g(t,!0,e,"==",l.ok)}function v(t,e,n,a){if(t===e)return!0;if(o(t)&&o(e))return 0===r(t,e);if(i.isDate(t)&&i.isDate(e))return t.getTime()===e.getTime();if(i.isRegExp(t)&&i.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"==typeof t||null!==e&&"object"==typeof e){if(f(t)&&f(e)&&c(t)===c(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===r(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(o(t)!==o(e))return!1;var s=(a=a||{actual:[],expected:[]}).actual.indexOf(t);return-1!==s&&s===a.expected.indexOf(e)||(a.actual.push(t),a.expected.push(e),function(t,e,n,r){if(null===t||void 0===t||null===e||void 0===e)return!1;if(i.isPrimitive(t)||i.isPrimitive(e))return t===e;if(n&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var o=T(t),a=T(e);if(o&&!a||!o&&a)return!1;if(o)return t=u.call(t),e=u.call(e),v(t,e,n);var s,c,f=S(t),l=S(e);if(f.length!==l.length)return!1;for(f.sort(),l.sort(),c=f.length-1;c>=0;c--)if(f[c]!==l[c])return!1;for(c=f.length-1;c>=0;c--)if(s=f[c],!v(t[s],e[s],n,r))return!1;return!0}(t,e,n,a))}return n?t===e:t==e}function T(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function b(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(t){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function w(t,e,n,r){var o;if("function"!=typeof e)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),o=function(t){var e;try{t()}catch(t){e=t}return e}(e),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),t&&!o&&g(o,n,"Missing expected exception"+r);var a="string"==typeof r,u=!t&&i.isError(o),s=!t&&o&&!n;if((u&&a&&b(o,n)||s)&&g(o,n,"Got unwanted exception"+r),t&&o&&n&&!b(o,n)||!t&&o)throw o}l.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=function(t){return d(y(t.actual),128)+" "+t.operator+" "+d(y(t.expected),128)}(this),this.generatedMessage=!0);var e=t.stackStartFunction||g;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var n=new Error;if(n.stack){var r=n.stack,o=h(e),i=r.indexOf("\n"+o);if(i>=0){var a=r.indexOf("\n",i+1);r=r.substring(a+1)}this.stack=r}}},i.inherits(l.AssertionError,Error),l.fail=g,l.ok=m,l.equal=function(t,e,n){t!=e&&g(t,e,n,"==",l.equal)},l.notEqual=function(t,e,n){t==e&&g(t,e,n,"!=",l.notEqual)},l.deepEqual=function(t,e,n){v(t,e,!1)||g(t,e,n,"deepEqual",l.deepEqual)},l.deepStrictEqual=function(t,e,n){v(t,e,!0)||g(t,e,n,"deepStrictEqual",l.deepStrictEqual)},l.notDeepEqual=function(t,e,n){v(t,e,!1)&&g(t,e,n,"notDeepEqual",l.notDeepEqual)},l.notDeepStrictEqual=function t(e,n,r){v(e,n,!0)&&g(e,n,r,"notDeepStrictEqual",t)},l.strictEqual=function(t,e,n){t!==e&&g(t,e,n,"===",l.strictEqual)},l.notStrictEqual=function(t,e,n){t===e&&g(t,e,n,"!==",l.notStrictEqual)},l.throws=function(t,e,n){w(!0,t,e,n)},l.doesNotThrow=function(t,e,n){w(!1,t,e,n)},l.ifError=function(t){if(t)throw t};var S=Object.keys||function(t){var e=[];for(var n in t)a.call(t,n)&&e.push(n);return e}}).call(this,n(1))},function(t,e,n){(function(t,r){var o=/%[sdj%]/g;e.format=function(t){if(!m(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(u(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,a=String(t).replace(o,function(t){if("%%"===t)return"%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return t}}),s=r[n];n<i;s=r[++n])y(s)||!b(s)?a+=" "+s:a+=" "+u(s);return a},e.deprecate=function(n,o){if(v(t.process))return function(){return e.deprecate(n,o).apply(this,arguments)};if(!0===r.noDeprecation)return n;var i=!1;return function(){if(!i){if(r.throwDeprecation)throw new Error(o);r.traceDeprecation?console.trace(o):console.error(o),i=!0}return n.apply(this,arguments)}};var i,a={};function u(t,n){var r={seen:[],stylize:c};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),d(n)?r.showHidden=n:n&&e._extend(r,n),v(r.showHidden)&&(r.showHidden=!1),v(r.depth)&&(r.depth=2),v(r.colors)&&(r.colors=!1),v(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=s),f(r,t,r.depth)}function s(t,e){var n=u.styles[e];return n?"["+u.colors[n][0]+"m"+t+"["+u.colors[n][1]+"m":t}function c(t,e){return t}function f(t,n,r){if(t.customInspect&&n&&_(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return m(o)||(o=f(t,o,r)),o}var i=function(t,e){if(v(e))return t.stylize("undefined","undefined");if(m(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(g(e))return t.stylize(""+e,"number");if(d(e))return t.stylize(""+e,"boolean");if(y(e))return t.stylize("null","null")}(t,n);if(i)return i;var a=Object.keys(n),u=function(t){var e={};return t.forEach(function(t,n){e[t]=!0}),e}(a);if(t.showHidden&&(a=Object.getOwnPropertyNames(n)),S(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return l(n);if(0===a.length){if(_(n)){var s=n.name?": "+n.name:"";return t.stylize("[Function"+s+"]","special")}if(T(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(w(n))return t.stylize(Date.prototype.toString.call(n),"date");if(S(n))return l(n)}var c,b="",x=!1,E=["{","}"];(h(n)&&(x=!0,E=["[","]"]),_(n))&&(b=" [Function"+(n.name?": "+n.name:"")+"]");return T(n)&&(b=" "+RegExp.prototype.toString.call(n)),w(n)&&(b=" "+Date.prototype.toUTCString.call(n)),S(n)&&(b=" "+l(n)),0!==a.length||x&&0!=n.length?r<0?T(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),c=x?function(t,e,n,r,o){for(var i=[],a=0,u=e.length;a<u;++a)O(e,String(a))?i.push(p(t,e,n,r,String(a),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(p(t,e,n,r,o,!0))}),i}(t,n,r,u,a):a.map(function(e){return p(t,n,r,u,e,x)}),t.seen.pop(),function(t,e,n){if(t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(c,b,E)):E[0]+b+E[1]}function l(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,r,o,i){var a,u,s;if((s=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?u=s.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):s.set&&(u=t.stylize("[Setter]","special")),O(r,o)||(a="["+o+"]"),u||(t.seen.indexOf(s.value)<0?(u=y(n)?f(t,s.value,null):f(t,s.value,n-1)).indexOf("\n")>-1&&(u=i?u.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+u.split("\n").map(function(t){return"   "+t}).join("\n")):u=t.stylize("[Circular]","special")),v(a)){if(i&&o.match(/^\d+$/))return u;(a=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+u}function h(t){return Array.isArray(t)}function d(t){return"boolean"==typeof t}function y(t){return null===t}function g(t){return"number"==typeof t}function m(t){return"string"==typeof t}function v(t){return void 0===t}function T(t){return b(t)&&"[object RegExp]"===x(t)}function b(t){return"object"==typeof t&&null!==t}function w(t){return b(t)&&"[object Date]"===x(t)}function S(t){return b(t)&&("[object Error]"===x(t)||t instanceof Error)}function _(t){return"function"==typeof t}function x(t){return Object.prototype.toString.call(t)}function E(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(v(i)&&(i=r.env.NODE_DEBUG||""),t=t.toUpperCase(),!a[t])if(new RegExp("\\b"+t+"\\b","i").test(i)){var n=r.pid;a[t]=function(){var r=e.format.apply(e,arguments);console.error("%s %d: %s",t,n,r)}}else a[t]=function(){};return a[t]},e.inspect=u,u.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},u.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=h,e.isBoolean=d,e.isNull=y,e.isNullOrUndefined=function(t){return null==t},e.isNumber=g,e.isString=m,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=v,e.isRegExp=T,e.isObject=b,e.isDate=w,e.isError=S,e.isFunction=_,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(7);var k=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function O(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",function(){var t=new Date,e=[E(t.getHours()),E(t.getMinutes()),E(t.getSeconds())].join(":");return[t.getDate(),k[t.getMonth()],e].join(" ")}(),e.format.apply(e,arguments))},e.inherits=n(8),e._extend=function(t,e){if(!e||!b(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t}}).call(this,n(1),n(6))},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var s,c=[],f=!1,l=-1;function p(){f&&s&&(f=!1,s.length?c=s.concat(c):l=-1,c.length&&h())}function h(){if(!f){var t=u(p);f=!0;for(var e=c.length;e;){for(s=c,c=[];++l<e;)s&&s[l].run();l=-1,e=c.length}s=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new d(t,e)),1!==c.length||f||u(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){"use strict";var r=n(0);n.n(r).a},function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),i=n(3),a={name:"VueScriptComponent",data:function(){var t=Math.random().toString(36).substring(7);return{compId:window.performance.now()+"-"+t}},props:{script:{type:String,default:null}},mounted:function(){var t=this;i(function(){new Promise(function(e,n){o()("#"+t.compId,""+t.script,{done:function(t){e(t)}}),e()}).then(function(t){})})}};n(9);var u=function(t,e,n,r,o,i,a,u){var s,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=s):o&&(s=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(c.functional){c._injectStyles=s;var f=c.render;c.render=function(t,e){return s.call(e),f(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,s):[s]}return{exports:t,options:c}}(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.compId}})},[],!1,null,"3e2fc601",null);u.options.__file="VueScriptComponent.vue";var s=u.exports;e.default=s}]);