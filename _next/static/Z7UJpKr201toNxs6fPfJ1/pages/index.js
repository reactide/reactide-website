(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3niX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=u.cssRules();return u.flush(),e},t.default=void 0;var i,r=n("q1tI");function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=new(((i=n("SevZ"))&&i.__esModule?i:{default:i}).default),d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=a(this,c(t).call(this,e))).prevProps={},n}var n,i,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,r.Component),n=t,o=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],n=e[1];return u.computeId(t,n)}).join(" ")}}],(i=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){u.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&u.remove(this.prevProps),u.add(this.props),this.prevProps=this.props),null}}])&&s(n.prototype,i),o&&s(n,o),t}();t.default=d},"7pkv":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADnklEQVRIiY2WT2hdRRjFf+fyCCGGRwgiVUqQWqU8nUuXVdwUaSOliMQSbRCKitIKJQr+QdoYYiwGS4tFu7HYhWgtqBRUAlIEF6IguPBOqG0oXQStUEp9hBJCCO+4uPOel5DEfDDMzGXmfH/PN1esITFGgC229wCDkh4C+oFlYB64DHwPTAOzIYRVcbQG8GZgDNhXAW0Ci+lYt+26pK6k7BtgHLi2UlG2itIngF+Al9L+A2Cn7QDcl8aDknYCU8AC8Gy6M5IMXN2DGONB4FRS/BEwGUK4tarv/92pA2/afk1SljyfanuiSlj2Al+nMBwGPgshtNYDrygBGALOAHXguXS/E6J7gNO2swT+KVCPMQ7HGDf/D/gm2yPAj7ZfBJZtnwC2Vj04bfvlFJbRPM9bMcYnbV8AliSN2/65UklN24Wk7baPAb2SXgDOAhO235Z0HthfizEOAMOSmsBEJSyZJIAu4JikFlBrWy5pOc3tb1kIgaIojgPPA3tsNzJgN3AncC6EcLPi/Ryw1L5cBU9SW/HtMkCe57clnQXqkvZmtgdtt1I4qrLDds02GxnA9kqJfmt7yfauTFJD0ryk2UriasBbkjJJbGQAo5QVhO1rkpqSGhnQZ3uBkqmkAw9QVtaGxfYWyg4AJbsXgXrNdid5McYeoLO33baus67OQHWdAVmMMUuYLdvUJM0DA8Cw7cWUnLrtBUk9KxWtnCvr28B+2/8kA/slzdeAGWAbUJM0nUKVSboDOLoSbB05DryT5zkxxkeBHtu/ZsDF5F4IIdwKIbRCCMu2J4GplJ9OSKpzWi8AJ22/W+mku5LBF5WI9lty634gB3YA76d8NICnKVv3torFs8B54EvgUpugMcZe4A/Kino4CyHMpYN9tseBn4C7gQlKds7Y/oIVRLPdDZwKIcy0wYuiAHidspqmgUvtZvee7TngIDBi+wjwDPB3URR/Sfrd9tZqiIAB26NVpZKGgDds3wDGQggdq64DhyRdAD5MoXnM9m5JvcBhSZuAbuAcsC/1pkcq7B0CztiuSXoVuEpKLiEE8jyfpmzVXZI+SdZ9FUI4aftP24eSIRO2r9o+APQAfcAk8DlliY9R9jU6CtoSQvgYeAq4LukV4EpRFCeAu4B524upZFtAZrsBXLF9lJK9B6i8ZrD+o38EGAb6E9GaQC9wIymEMvFN4DvWePTXZFCMEdv3Snrc9qCkRgLOgJu2L0n6wfa0pDV/W/4FYRDmfCzZA6cAAAAASUVORK5CYII="},"8oxB":function(e,t){var n,i,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{i="function"===typeof clearTimeout?clearTimeout:s}catch(e){i=s}}();var c,l=[],u=!1,d=-1;function p(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&f())}function f(){if(!u){var e=a(p);u=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||u||a(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},JDVA:function(e,t){e.exports="/reactide-website/_next/static/images/reactide-demo-32c9f4881515a626f5e94de24a1b2e1f.png"},MX0m:function(e,t,n){e.exports=n("3niX")},RNiq:function(e,t,n){"use strict";n.r(t);var i=n("MX0m"),r=n.n(i),o=n("q1tI"),s=n.n(o),a=n("r1cB"),c=n.n(a),l=n("fwji"),u=n.n(l);function d(){return s.a.createElement("div",{className:"banner"},s.a.createElement("img",{src:u.a,className:"logo"}),s.a.createElement("img",{src:c.a,className:"textLogo"}),s.a.createElement("h1",null,"The first dedicated IDE for React web application development"))}n("XK+7");var p=n("JDVA"),f=n.n(p),m=(n("sZar"),n("aBkk")),h=n.n(m),b=n("frJ1"),g=n.n(b);function y(){return s.a.createElement("div",{className:"demo"},s.a.createElement("section",{id:"first"},s.a.createElement("article",null,s.a.createElement("h2",null,"An extensible developer environment in one click"),s.a.createElement("p",null,"Reactide runs an integrated Node server and custom browser simulator eliminating the need to configure any servers, build-tools, and even offers hot module reloading right out of the box.")),s.a.createElement("img",{src:f.a,className:"demoGif"})),s.a.createElement("section",{id:"second"},s.a.createElement("img",{src:h.a,className:"demoGif",id:"demoGif2"}),s.a.createElement("article",null,s.a.createElement("h2",null,"Streamlined configurations"),s.a.createElement("p",null,"To get started, just input your .js and .html entry points inside Reactide's universal configuration. Once those entry points are changed, go ahead and run:",s.a.createElement("div",{id:"codeStyler"},s.a.createElement("pre",null,s.a.createElement("code",null,"npm run reactide-server")))))),s.a.createElement("section",{id:"third"},s.a.createElement("article",null,s.a.createElement("h2",null,"Components visualization"),s.a.createElement("p",null,"Navigate through a live-representation of your app\u2019s architecture.")),s.a.createElement("img",{src:g.a,className:"demoGif",id:"thirdGif"})))}var x=n("izYH"),w=n.n(x),v=n("rnmp"),k=n.n(v),_=n("p1gQ"),S=n.n(_);function A(){return s.a.createElement("div",{className:"dlContainer"},s.a.createElement("h3",null,"Download"),s.a.createElement("div",{className:"download"},s.a.createElement("section",{className:"mac"},s.a.createElement("a",{href:"https://github.com/reactide/reactide/releases/download/v3.0-alpha/Reactide-3.0.0.dmg"},s.a.createElement("img",{src:w.a,className:"dlLogo"}),s.a.createElement("p",{className:"dlp"},"macOS 10.10+"))),s.a.createElement("section",{className:"windows"},s.a.createElement("a",{href:"https://github.com/reactide/reactide"},s.a.createElement("img",{src:k.a,className:"dlLogo"}),s.a.createElement("p",{className:"dlp"},"Windows 7, 8, 10"))),s.a.createElement("section",{className:"linux"},s.a.createElement("a",{href:"https://github.com/reactide/reactide"},s.a.createElement("img",{src:S.a,className:"dlLogo"}),s.a.createElement("p",{className:"dlp"},"Debian, Ubuntu")))))}var E=n("7pkv"),C=n.n(E);function j(){return s.a.createElement("div",{className:"footer"},s.a.createElement("h5",null,"\xa9Copyright. All rights reserved."),s.a.createElement("a",{href:"https://github.com/reactide/reactide"},s.a.createElement("img",{src:C.a})),s.a.createElement("br",null),s.a.createElement("a",{class:"github-button",href:"https://github.com/reactide/reactide","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star ntkme/github-buttons on GitHub"},"Star"))}var R=function(e){return s.a.createElement("div",{className:"app"},s.a.createElement(d,null),s.a.createElement(y,null),s.a.createElement(A,null),s.a.createElement(j,null),e.children)},B=n("m/Pd"),F=n.n(B);function O(){return s.a.createElement("body",null,s.a.createElement(F.a,null,s.a.createElement("script",{async:!0,defer:!0,src:"https://buttons.github.io/buttons.js"})),s.a.createElement(R,{className:"layout"},s.a.createElement(r.a,{id:"3179683366"},["body{overflow-x:hidden;margin:auto;}","@media screen and (max-width:768px){.logo{height:30% !important;width:30% !important;margin-bottom:2em;}.textLogo{height:75% !important;width:75% !important;}.banner{padding:0 10px;}h1{font-size:4vw !important;}section{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#second{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.demoGif{min-width:90vw;}.dlContainer{margin-top:-3em;margin-bottom:-3em;}.download{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.dlLogo{height:65px;}.dlp{font-size:12px;}article{width:90vw;margin-bottom:1em;}}","body{background-color:#1c1f2c;font-family:helvetica;}",".layout{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}","p{font-size:16px;color:white;line-height:1.5;}","h1,h2,h3{color:white;line-height:1.5;}","h1{font-size:2vw;font-weight:lighter;text-shadow:0 15px 15px black;margin-top:100px;}","h2{font-size:20px;text-shadow:5px 10px 15px black;}",".banner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:100px;padding-top:70px;margin-top:35px;}",".logo{height:15%;width:15%;margin-bottom:2em;}",".textLogo{height:40%;width:40%;}",".demo{background-color:#272b3d;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:100vw;padding:10px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:-15px;margin-right:-15px;text-align:center;}","article{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-right:4em;margin-left:4em;margin-top:-10px;}","code{font-family:Courier,'New Courier',monospace;font-size:12px;}","#codeStyler{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:20px;}","pre{background-color:black;border-radius:3px;width:200px;padding:0px 5px 5px;}","code{color:limegreen;}",".demoGif{width:50%;height:50%;box-shadow:0 14px 25px 15px #1c1f2c;border-radius:5px;}","#demoGif2{box-shadow:0 14px 25px 15px #13141c;}","#first,#second,#third{padding:80px 25px 80px !important;}","#first,#third{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px 25px;}","#third{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:10px;}","#second{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#1c1f2c;}",".dlContainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;padding:80px;}","h3{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}",".download{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;width:500px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:25px 25px 0px 25px;text-align:center;}",".mac{padding:1em;}",".windows{padding:1em;}",".linux{padding:1em;}",".dlLogo{max-height:100px;max-width:100px;}","h3{text-shadow:5px 10px 15px black;}",".footer{text-align:center;margin-bottom:25px;margin-top:-25px;}","h5{color:gray;opacity:0.5;}"])))}n.d(t,"default",function(){return O})},SevZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("9kyW")),r=o(n("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,i=void 0===n?null:n,o=t.optimizeForSpeed,s=void 0!==o&&o,a=t.isBrowser,c=void 0===a||a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=i||new r.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),i&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,n,o;return t=e,(n=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),i=n.styleId,r=n.rules;if(i in this._instancesCounts)this._instancesCounts[i]+=1;else{var o=r.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[i]=o,this._instancesCounts[i]=1}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(n in this._instancesCounts,"styleId: `".concat(n,"` not found")),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var i=this._fromServer&&this._fromServer[n];i?(i.parentNode.removeChild(i),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-".concat(t);var r=String(n),o=t+r;return e[o]||(e[o]="jsx-".concat((0,i.default)("".concat(t,"-").concat(r)))),e[o]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,i){this._isBrowser||(i=i.replace(/\/style/gi,"\\/style"));var r=n+i;return t[r]||(t[r]=i.replace(e,n)),t[r]}}},{key:"getIdAndRules",value:function(e){var t=this,n=e.children,i=e.dynamic,r=e.id;if(i){var o=this.computeId(r,i);return{styleId:o,rules:Array.isArray(n)?n.map(function(e){return t.computeSelector(o,e)}):[this.computeSelector(o,n)]}}return{styleId:this.computeId(r),rules:Array.isArray(n)?n:[n]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&s(t.prototype,n),o&&s(t,o),e}();t.default=a},"XK+7":function(e,t){e.exports="/reactide-website/_next/static/images/reactide-screenshot2-b3aeb19a1f6854f465422e4ba9b00a92.png"},aBkk:function(e,t){e.exports="/reactide-website/_next/static/images/reactide-demo3-c3524e1475606b45f45808ba38b7f92c.png"},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e.env&&!0,r=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,o=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,c=void 0===a?i:a,l=t.isBrowser,u=void 0===l||l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(r(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#".concat(o,"-deleted-rule____{}"),s("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,o,a;return t=e,(o=[{key:"setOptimizeForSpeed",value:function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(s(r(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return i||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){i||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];s(r,"old rule at index `".concat(e,"` not found")),r.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&s(r(t),"makeStyleTag acceps only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-".concat(e),""),t&&i.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(i,n):o.appendChild(i),i}},{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,o),a&&n(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=o}).call(this,n("8oxB"))},frJ1:function(e,t){e.exports="/reactide-website/_next/static/images/reactide-demo4-45c2ba5c2610716aabe069068d5f3916.png"},fwji:function(e,t){e.exports="/reactide-website/_next/static/images/reactide-logo-3cd2d05a646cac0abb4cebcc11569e7c.png"},izYH:function(e,t){e.exports="/reactide-website/_next/static/images/apple-logo-2c4dc89fde0502eea4f80714ae3bccaa.png"},p1gQ:function(e,t){e.exports="/reactide-website/_next/static/images/linux-logo-3f5e60cb8624bce0019c735ef39739f1.png"},r1cB:function(e,t){e.exports="/reactide-website/_next/static/images/reactide-text-logo-319e4938b765cd0a779dade2fa82468f.png"},rnmp:function(e,t){e.exports="/reactide-website/_next/static/images/windows-logo-c4f14b925342a74ba1aac53bdaea2a09.png"},sZar:function(e,t){e.exports="/reactide-website/_next/static/images/reactide-demo2-513ad5975e741644a43ecd77ed076449.png"},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0]]]);