!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([,,,,,,,,function(e,t,n){"use strict";n(9),n(10),n(11)},function(e,t,n){"use strict";var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t,n){var i=[],r={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){i.push({name:e,fn:t,options:n})},addAsyncTest:function(e){i.push({name:null,fn:e})}},a=function(){};a.prototype=r,a=new a;var o=[];var c=t.documentElement,l="svg"===c.nodeName.toLowerCase();a.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,t,n,r,c,l,u,f;for(var d in i)if(i.hasOwnProperty(d)){if(e=[],(t=i[d]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(u=t.fn,f="function",r=(void 0===u?"undefined":s(u))===f?t.fn():t.fn,c=0;c<e.length;c++)1===(l=e[c].split(".")).length?a[l[0]]=r:(!a[l[0]]||a[l[0]]instanceof Boolean||(a[l[0]]=new Boolean(a[l[0]])),a[l[0]][l[1]]=r),o.push((r?"":"no-")+l.join("-"))}}(),function(e){var t=c.className,n=a._config.classPrefix||"";if(l&&(t=t.baseVal),a._config.enableJSClass){var s=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(s,"$1"+n+"js$2")}a._config.enableClasses&&(t+=" "+n+e.join(" "+n),l?c.className.baseVal=t:c.className=t)}(o),delete r.addTest,delete r.addAsyncTest;for(var u=0;u<a._q.length;u++)a._q[u]();e.Modernizr=a}(window,document)},function(e,t){var n,s;n=window,s=function(e,t){"use strict";if(!t.getElementsByClassName)return;var n,s,i=t.documentElement,r=e.Date,a=e.HTMLPictureElement,o="addEventListener",c="getAttribute",l=e[o],u=e.setTimeout,f=e.requestAnimationFrame||u,d=e.requestIdleCallback,p=/^picture$/i,m=["load","error","lazyincluded","_lazyloaded"],h={},g=Array.prototype.forEach,A=function(e,t){return h[t]||(h[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),h[t].test(e[c]("class")||"")&&h[t]},v=function(e,t){A(e,t)||e.setAttribute("class",(e[c]("class")||"").trim()+" "+t)},y=function(e,t){var n;(n=A(e,t))&&e.setAttribute("class",(e[c]("class")||"").replace(n," "))},z=function(e,t,n){var s=n?o:"removeEventListener";n&&z(e,t),m.forEach(function(n){e[s](n,t)})},w=function(e,s,i,r,a){var o=t.createEvent("CustomEvent");return i||(i={}),i.instance=n,o.initCustomEvent(s,!r,!a,i),e.dispatchEvent(o),o},b=function(t,n){var i;!a&&(i=e.picturefill||s.pf)?i({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},C=function(e,t){return(getComputedStyle(e,null)||{})[t]},E=function(e,t,n){for(n=n||e.offsetWidth;n<s.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},S=(L=[],P=[],_=L,B=function(){var e=_;for(_=L.length?P:L,M=!0,R=!1;e.length;)e.shift()();M=!1},N=function(e,n){M&&!n?e.apply(this,arguments):(_.push(e),R||(R=!0,(t.hidden?u:f)(B)))},N._lsFlush=B,N),x=function(e,t){return t?function(){S(e)}:function(){var t=this,n=arguments;S(function(){e.apply(t,n)})}},T=function(e){var t,n,s=function(){t=null,e()},i=function(){var e=r.now()-n;e<99?u(i,99-e):(d||s)(s)};return function(){n=r.now(),t||(t=u(i,99))}};var M,R,L,P,_,B,N;!function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};for(t in s=e.lazySizesConfig||e.lazysizesConfig||{},n)t in s||(s[t]=n[t]);e.lazySizesConfig=s,u(function(){s.init&&D()})}();var W=(ce=/^img$/i,le=/^iframe$/i,ue="onscroll"in e&&!/glebot/.test(navigator.userAgent),fe=0,de=0,pe=-1,me=function(e){de--,e&&e.target&&z(e.target,me),(!e||de<0||!e.target)&&(de=0)},he=function(e,n){var s,r=e,a="hidden"==C(t.body,"visibility")||"hidden"!=C(e,"visibility");for(J-=n,Y+=n,K-=n,X+=n;a&&(r=r.offsetParent)&&r!=t.body&&r!=i;)(a=(C(r,"opacity")||1)>0)&&"visible"!=C(r,"overflow")&&(s=r.getBoundingClientRect(),a=X>s.left&&K<s.right&&Y>s.top-1&&J<s.bottom+1);return a},ge=function(){var e,r,a,o,l,u,f,d,p,m=n.elements;if((Q=s.loadMode)&&de<8&&(e=m.length)){r=0,pe++,null==ee&&("expand"in s||(s.expand=i.clientHeight>500&&i.clientWidth>500?500:370),Z=s.expand,ee=Z*s.expFactor),fe<ee&&de<1&&pe>2&&Q>2&&!t.hidden?(fe=ee,pe=0):fe=Q>1&&pe>1&&de<6?Z:0;for(;r<e;r++)if(m[r]&&!m[r]._lazyRace)if(ue)if((d=m[r][c]("data-expand"))&&(u=1*d)||(u=fe),p!==u&&(G=innerWidth+u*te,V=innerHeight+u,f=-1*u,p=u),a=m[r].getBoundingClientRect(),(Y=a.bottom)>=f&&(J=a.top)<=V&&(X=a.right)>=f*te&&(K=a.left)<=G&&(Y||X||K||J)&&(s.loadHidden||"hidden"!=C(m[r],"visibility"))&&(H&&de<3&&!d&&(Q<3||pe<4)||he(m[r],u))){if(Ce(m[r]),l=!0,de>9)break}else!l&&H&&!o&&de<4&&pe<4&&Q>2&&(U[0]||s.preloadAfterLoad)&&(U[0]||!d&&(Y||X||K||J||"auto"!=m[r][c](s.sizesAttr)))&&(o=U[0]||m[r]);else Ce(m[r]);o&&!l&&Ce(o)}},ne=ge,ie=0,re=s.ricTimeout,ae=function(){se=!1,ie=r.now(),ne()},oe=d&&s.ricTimeout?function(){d(ae,{timeout:re}),re!==s.ricTimeout&&(re=s.ricTimeout)}:x(function(){u(ae)},!0),Ae=function(e){var t;(e=!0===e)&&(re=33),se||(se=!0,(t=125-(r.now()-ie))<0&&(t=0),e||t<9&&d?oe():u(oe,t))},ve=function(e){v(e.target,s.loadedClass),y(e.target,s.loadingClass),z(e.target,ze),w(e.target,"lazyloaded")},ye=x(ve),ze=function(e){ye({target:e.target})},we=function(e){var t,n=e[c](s.srcsetAttr);(t=s.customMedia[e[c]("data-media")||e[c]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},be=x(function(e,t,n,i,r){var a,o,l,f,d,m;(d=w(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?v(e,s.autosizesClass):e.setAttribute("sizes",i)),o=e[c](s.srcsetAttr),a=e[c](s.srcAttr),r&&(l=e.parentNode,f=l&&p.test(l.nodeName||"")),m=t.firesLoad||"src"in e&&(o||a||f),d={target:e},m&&(z(e,me,!0),clearTimeout(j),j=u(me,2500),v(e,s.loadingClass),z(e,ze,!0)),f&&g.call(l.getElementsByTagName("source"),we),o?e.setAttribute("srcset",o):a&&!f&&(le.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,a):e.src=a),r&&(o||f)&&b(e,{src:a})),e._lazyRace&&delete e._lazyRace,y(e,s.lazyClass),S(function(){(!m||e.complete&&e.naturalWidth>1)&&(m?me(d):de--,ve(d))},!0)}),Ce=function(e){var t,n=ce.test(e.nodeName),i=n&&(e[c](s.sizesAttr)||e[c]("sizes")),r="auto"==i;(!r&&H||!n||!e[c]("src")&&!e.srcset||e.complete||A(e,s.errorClass)||!A(e,s.lazyClass))&&(t=w(e,"lazyunveilread").detail,r&&$.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,de++,be(e,t,r,i,n))},Ee=function(){if(!H)if(r.now()-q<999)u(Ee,999);else{var e=T(function(){s.loadMode=3,Ae()});H=!0,s.loadMode=3,Ae(),l("scroll",function(){3==s.loadMode&&(s.loadMode=2),e()},!0)}},{_:function(){q=r.now(),n.elements=t.getElementsByClassName(s.lazyClass),U=t.getElementsByClassName(s.lazyClass+" "+s.preloadClass),te=s.hFac,l("scroll",Ae,!0),l("resize",Ae,!0),e.MutationObserver?new MutationObserver(Ae).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i[o]("DOMNodeInserted",Ae,!0),i[o]("DOMAttrModified",Ae,!0),setInterval(Ae,999)),l("hashchange",Ae,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t[o](e,Ae,!0)}),/d$|^c/.test(t.readyState)?Ee():(l("load",Ee),t[o]("DOMContentLoaded",Ae),u(Ee,2e4)),n.elements.length?(ge(),S._lsFlush()):Ae()},checkElems:Ae,unveil:Ce}),$=(I=x(function(e,t,n,s){var i,r,a;if(e._lazysizesWidth=s,s+="px",e.setAttribute("sizes",s),p.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),r=0,a=i.length;r<a;r++)i[r].setAttribute("sizes",s);n.detail.dataAttr||b(e,n.detail)}),F=function(e,t,n){var s,i=e.parentNode;i&&(n=E(e,i,n),(s=w(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=s.detail.width)&&n!==e._lazysizesWidth&&I(e,i,s,n))},O=T(function(){var e,t=k.length;if(t)for(e=0;e<t;e++)F(k[e])}),{_:function(){k=t.getElementsByClassName(s.autosizesClass),l("resize",O)},checkElems:O,updateElem:F}),D=function(){D.i||(D.i=!0,$._(),W._())};var k,I,F,O;var U,H,j,Q,q,G,V,J,K,X,Y,Z,ee,te,ne,se,ie,re,ae,oe,ce,le,ue,fe,de,pe,me,he,ge,Ae,ve,ye,ze,we,be,Ce,Ee;return n={cfg:s,autoSizer:$,loader:W,init:D,uP:b,aC:v,rC:y,hC:A,fire:w,gW:E,rAF:S}}(n,n.document),n.lazySizes=s,"object"==typeof e&&e.exports&&(e.exports=s)},function(e,t,n){var s,i,r,a,o,c,l,u,f,d;i=window,d=navigator.userAgent,i.HTMLPictureElement&&/ecko/.test(d)&&d.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(a=document.createElement("source"),o=function(e){var t,n,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=a.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout(function(){s.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},c=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)o(t[e])},l=function(){clearTimeout(r),r=setTimeout(c,99)},u=i.matchMedia&&matchMedia("(orientation: landscape)"),f=function(){l(),u&&u.addListener&&u.addListener(l)},a.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?f():document.addEventListener("DOMContentLoaded",f),l)),function(i,r,a){"use strict";var o,c,l;r.createElement("picture");var u={},f=!1,d=function(){},p=r.createElement("img"),m=p.getAttribute,h=p.setAttribute,g=p.removeAttribute,A=r.documentElement,v={},y={algorithm:""},z="data-pfsrc",w=z+"set",b=navigator.userAgent,C=/rident/.test(b)||/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1>35,E="currentSrc",S=/\s+\+?\d+(e\d+)?w/,x=/(\([^)]+\))?\s*(.+)/,T=i.picturefillCFG,M="font-size:100%!important;",R=!0,L={},P={},_=i.devicePixelRatio,B={px:1,in:96},N=r.createElement("a"),W=!1,$=/^[ \t\n\r\u000c]+/,D=/^[, \t\n\r\u000c]+/,k=/^[^ \t\n\r\u000c]+/,I=/[,]+$/,F=/^\d+$/,O=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,U=function(e,t,n,s){e.addEventListener?e.addEventListener(t,n,s||!1):e.attachEvent&&e.attachEvent("on"+t,n)},H=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}};function j(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var Q,q,G,V,J,K,X,Y,Z,ee,te,ne,se,ie,re,ae,oe,ce,le,ue=(Q=/^([\d\.]+)(em|vw|px)$/,q=H(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var n;if(!(e in L))if(L[e]=!1,t&&(n=e.match(Q)))L[e]=n[1]*B[n[2]];else try{L[e]=new Function("e",q(e))(B)}catch(e){}return L[e]}),fe=function(e,t){return e.w?(e.cWidth=u.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},de=function(e){if(f){var t,n,s,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),s=(t=i.elements||u.qsa(i.context||r,i.reevaluate||i.reselect?u.sel:u.selShort)).length){for(u.setupRun(i),W=!0,n=0;n<s;n++)u.fillImg(t[n],i);u.teardownRun(i)}}};function pe(e,t){return e.res-t.res}function me(e,t){var n,s,i;if(e&&t)for(i=u.parseSet(t),e=u.makeUrl(e),n=0;n<i.length;n++)if(e===u.makeUrl(i[n].url)){s=i[n];break}return s}i.console&&console.warn,E in p||(E="src"),v["image/jpeg"]=!0,v["image/gif"]=!0,v["image/png"]=!0,v["image/svg+xml"]=r.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),u.ns=("pf"+(new Date).getTime()).substr(0,9),u.supSrcset="srcset"in p,u.supSizes="sizes"in p,u.supPicture=!!i.HTMLPictureElement,u.supSrcset&&u.supPicture&&!u.supSizes&&(G=r.createElement("img"),p.srcset="data:,a",G.src="data:,a",u.supSrcset=p.complete===G.complete,u.supPicture=u.supSrcset&&u.supPicture),u.supSrcset&&!u.supSizes?(V="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",J=r.createElement("img"),K=function(){2===J.width&&(u.supSizes=!0),c=u.supSrcset&&!u.supSizes,f=!0,setTimeout(de)},J.onload=K,J.onerror=K,J.setAttribute("sizes","9px"),J.srcset=V+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",J.src=V):f=!0,u.selShort="picture>img,img[srcset]",u.sel=u.selShort,u.cfg=y,u.DPR=_||1,u.u=B,u.types=v,u.setSize=d,u.makeUrl=H(function(e){return N.href=e,N.href}),u.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},u.matchesMedia=function(){return i.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?u.matchesMedia=function(e){return!e||matchMedia(e).matches}:u.matchesMedia=u.mMQ,u.matchesMedia.apply(this,arguments)},u.mMQ=function(e){return!e||ue(e)},u.calcLength=function(e){var t=ue(e,!0)||!1;return t<0&&(t=!1),t},u.supportsType=function(e){return!e||v[e]},u.parseSize=H(function(e){var t=(e||"").match(x);return{media:t&&t[1],length:t&&t[2]}}),u.parseSet=function(e){return e.cands||(e.cands=function(e,t){function n(t){var n,s=t.exec(e.substring(l));if(s)return n=s[0],l+=n.length,n}var s,i,r,a,o,c=e.length,l=0,u=[];function f(){var e,n,r,a,o,c,l,f,d,p=!1,m={};for(a=0;a<i.length;a++)c=(o=i[a])[o.length-1],l=o.substring(0,o.length-1),f=parseInt(l,10),d=parseFloat(l),F.test(l)&&"w"===c?((e||n)&&(p=!0),0===f?p=!0:e=f):O.test(l)&&"x"===c?((e||n||r)&&(p=!0),d<0?p=!0:n=d):F.test(l)&&"h"===c?((r||n)&&(p=!0),0===f?p=!0:r=f):p=!0;p||(m.url=s,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,u.push(m))}function d(){for(n($),r="",a="in descriptor";;){if(o=e.charAt(l),"in descriptor"===a)if(j(o))r&&(i.push(r),r="",a="after descriptor");else{if(","===o)return l+=1,r&&i.push(r),void f();if("("===o)r+=o,a="in parens";else{if(""===o)return r&&i.push(r),void f();r+=o}}else if("in parens"===a)if(")"===o)r+=o,a="in descriptor";else{if(""===o)return i.push(r),void f();r+=o}else if("after descriptor"===a)if(j(o));else{if(""===o)return void f();a="in descriptor",l-=1}l+=1}}for(;;){if(n(D),l>=c)return u;s=n(k),i=[],","===s.slice(-1)?(s=s.replace(I,""),f()):d()}}(e.srcset,e)),e.cands},u.getEmValue=function(){var e;if(!o&&(e=r.body)){var t=r.createElement("div"),n=A.style.cssText,s=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",A.style.cssText=M,e.style.cssText=M,e.appendChild(t),o=t.offsetWidth,e.removeChild(t),o=parseFloat(o,10),A.style.cssText=n,e.style.cssText=s}return o||16},u.calcListLength=function(e){if(!(e in P)||y.uT){var t=u.calcLength(function(e){var t,n,s,i,r,a,o,c=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(s=(n=function(e){var t,n="",s=[],i=[],r=0,a=0,o=!1;function c(){n&&(s.push(n),n="")}function l(){s[0]&&(i.push(s),s=[])}for(;;){if(""===(t=e.charAt(a)))return c(),l(),i;if(o){if("*"===t&&"/"===e[a+1]){o=!1,a+=2,c();continue}a+=1}else{if(j(t)){if(e.charAt(a-1)&&j(e.charAt(a-1))||!n){a+=1;continue}if(0===r){c(),a+=1;continue}t=" "}else if("("===t)r+=1;else if(")"===t)r-=1;else{if(","===t){c(),l(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){o=!0,a+=2;continue}}n+=t,a+=1}}}(e)).length,t=0;t<s;t++)if(r=(i=n[t])[i.length-1],o=r,c.test(o)&&parseFloat(o)>=0||l.test(o)||"0"===o||"-0"===o||"+0"===o){if(a=r,i.pop(),0===i.length)return a;if(i=i.join(" "),u.matchesMedia(i))return a}return"100vw"}(e));P[e]=t||B.width}return P[e]},u.setRes=function(e){var t;if(e)for(var n=0,s=(t=u.parseSet(e)).length;n<s;n++)fe(t[n],e.sizes);return t},u.setRes.res=fe,u.applySetCandidate=function(e,t){if(e.length){var n,s,i,r,a,o,c,l,f,d,p,m,h,g,A,v,z,w,b,S,x=t[u.ns],T=u.DPR;if(o=x.curSrc||t[E],(c=x.curCan||(d=t,p=o,!(m=e[0].set)&&p&&(m=(m=d[u.ns].sets)&&m[m.length-1]),(h=me(p,m))&&(p=u.makeUrl(p),d[u.ns].curSrc=p,d[u.ns].curCan=h,h.res||fe(h,h.set.sizes)),h))&&c.set===e[0].set&&((f=C&&!t.complete&&c.res-.1>T)||(c.cached=!0,c.res>=T&&(a=c))),!a)for(e.sort(pe),a=e[(r=e.length)-1],s=0;s<r;s++)if((n=e[s]).res>=T){a=e[i=s-1]&&(f||o!==u.makeUrl(n.url))&&(g=e[i].res,A=n.res,v=T,z=e[i].cached,w=void 0,b=void 0,S=void 0,"saveData"===y.algorithm?g>2.7?S=v+1:(b=(A-v)*(w=Math.pow(g-.6,1.5)),z&&(b+=.1*w),S=g+b):S=v>1?Math.sqrt(g*A):g,S>v)?e[i]:n;break}a&&(l=u.makeUrl(a.url),x.curSrc=l,x.curCan=a,l!==o&&u.setSrc(t,a),u.setSize(t))}},u.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},u.getSet=function(e){var t,n,s,i=!1,r=e[u.ns].sets;for(t=0;t<r.length&&!i;t++)if((n=r[t]).srcset&&u.matchesMedia(n.media)&&(s=u.supportsType(n.type))){"pending"===s&&(n=s),i=n;break}return i},u.parseSets=function(e,t,n){var s,i,r,o,l=t&&"PICTURE"===t.nodeName.toUpperCase(),f=e[u.ns];(f.src===a||n.src)&&(f.src=m.call(e,"src"),f.src?h.call(e,z,f.src):g.call(e,z)),(f.srcset===a||n.srcset||!u.supSrcset||e.srcset)&&(s=m.call(e,"srcset"),f.srcset=s,o=!0),f.sets=[],l&&(f.pic=!0,function(e,t){var n,s,i,r,a=e.getElementsByTagName("source");for(n=0,s=a.length;n<s;n++)(i=a[n])[u.ns]=!0,(r=i.getAttribute("srcset"))&&t.push({srcset:r,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}(t,f.sets)),f.srcset?(i={srcset:f.srcset,sizes:m.call(e,"sizes")},f.sets.push(i),(r=(c||f.src)&&S.test(f.srcset||""))||!f.src||me(f.src,i)||i.has1x||(i.srcset+=", "+f.src,i.cands.push({url:f.src,d:1,set:i}))):f.src&&f.sets.push({srcset:f.src,sizes:null}),f.curCan=null,f.curSrc=a,f.supported=!(l||i&&!u.supSrcset||r&&!u.supSizes),o&&u.supSrcset&&!f.supported&&(s?(h.call(e,w,s),e.srcset=""):g.call(e,w)),f.supported&&!f.srcset&&(!f.src&&e.src||e.src!==u.makeUrl(f.src))&&(null===f.src?e.removeAttribute("src"):e.src=f.src),f.parsed=!0},u.fillImg=function(e,t){var n,s,i,r,a,o=t.reselect||t.reevaluate;(e[u.ns]||(e[u.ns]={}),n=e[u.ns],o||n.evaled!==l)&&(n.parsed&&!t.reevaluate||u.parseSets(e,e.parentNode,t),n.supported?n.evaled=l:(s=e,r=u.getSet(s),a=!1,"pending"!==r&&(a=l,r&&(i=u.setRes(r),u.applySetCandidate(i,s))),s[u.ns].evaled=a))},u.setupRun=function(){W&&!R&&_===i.devicePixelRatio||(R=!1,_=i.devicePixelRatio,L={},P={},u.DPR=_||1,B.width=Math.max(i.innerWidth||0,A.clientWidth),B.height=Math.max(i.innerHeight||0,A.clientHeight),B.vw=B.width/100,B.vh=B.height/100,l=[B.height,B.width,_].join("-"),B.em=u.getEmValue(),B.rem=B.em)},u.supPicture?(de=d,u.fillImg=d):(se=i.attachEvent?/d$|^c/:/d$|^c|^i/,ie=function(){var e=r.readyState||"";re=setTimeout(ie,"loading"===e?200:999),r.body&&(u.fillImgs(),(X=X||se.test(e))&&clearTimeout(re))},re=setTimeout(ie,r.body?9:99),ae=A.clientHeight,U(i,"resize",(Y=function(){R=Math.max(i.innerWidth||0,A.clientWidth)!==B.width||A.clientHeight!==ae,ae=A.clientHeight,R&&u.fillImgs()},Z=99,ne=function(){var e=new Date-te;e<Z?ee=setTimeout(ne,Z-e):(ee=null,Y())},function(){te=new Date,ee||(ee=setTimeout(ne,Z))})),U(r,"readystatechange",ie)),u.picturefill=de,u.fillImgs=de,u.teardownRun=d,de._=u,i.picturefillCFG={pf:u,push:function(e){var t=e.shift();"function"==typeof u[t]?u[t].apply(u,e):(y[t]=e[0],W&&u.fillImgs({reselect:!0}))}};for(;T&&T.length;)i.picturefillCFG.push(T.shift());i.picturefill=de,"object"==typeof e&&"object"==typeof e.exports?e.exports=de:(s=function(){return de}.call(t,n,t,e))===a||(e.exports=s),u.supPicture||(v["image/webp"]=(oe="image/webp",ce="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(le=new i.Image).onerror=function(){v[oe]=!1,de()},le.onload=function(){v[oe]=1===le.width,de()},le.src=ce,"pending"))}(window,document)}]);