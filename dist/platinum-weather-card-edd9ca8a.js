import"lit-html/is-server.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};function e(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}var i=function(){return i=Object.assign||function(t){for(var e,i=1,s=arguments.length;i<s;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};function s(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}function o(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],s=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&s>=t.length&&(t=void 0),{value:t&&t[s++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),a=new Map;class c{constructor(t,e){if(this._$cssResult$=!0,e!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=a.get(this.cssText);return n&&void 0===t&&(a.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const l=t=>new c("string"==typeof t?t:t+"",r),h=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new c(i,r)},d=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return l(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var _;const u=window.trustedTypes,f=u?u.emptyScript:"",v=window.reactiveElementPolyfillSupport,g={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:p};class y extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{n?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=m){var s,o;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const r=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:g.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Ei=null}}_$AK(t,e){var i,s,o;const n=this.constructor,r=n._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=n.getPropertyOptions(r),a=t.converter,c=null!==(o=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==o?o:g.fromAttribute;this._$Ei=r,this[r]=c(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==v||v({ReactiveElement:y}),(null!==(_=globalThis.reactiveElementVersions)&&void 0!==_?_:globalThis.reactiveElementVersions=[]).push("1.2.1");const w=globalThis.trustedTypes,x=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,S="?"+$,E=`<${S}>`,N=document,O=(t="")=>N.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,F=Array.isArray,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,M=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,L=/'/g,D=/"/g,P=/^(?:script|style|textarea)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),U=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),W=new WeakMap,H=N.createTreeWalker(N,129,null,!1),V=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=T;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(r.lastIndex=h,c=r.exec(i),null!==c);)h=r.lastIndex,r===T?"!--"===c[1]?r=k:void 0!==c[1]?r=M:void 0!==c[2]?(P.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=C):void 0!==c[3]&&(r=C):r===C?">"===c[0]?(r=null!=o?o:T,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?C:'"'===c[3]?D:L):r===D||r===L?r=C:r===k||r===M?r=T:(r=C,o=void 0);const d=r===C&&t[e+1].startsWith("/>")?" ":"";n+=r===T?i+E:l>=0?(s.push(a),i.slice(0,l)+"$lit$"+i.slice(l)+$+d):i+$+(-2===l?(s.push(void 0),e):d)}const a=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==x?x.createHTML(a):a,s]};class I{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[c,l]=V(t,e);if(this.el=I.createElement(c,i),H.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=H.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=l[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?Y:"@"===e[1]?J:G})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(P.test(s.tagName)){const t=s.textContent.split($),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),H.nextNode(),a.push({type:2,index:++o});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===S)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf($,t+1));)a.push({type:7,index:o}),t+=$.length-1}o++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function j(t,e,i=t,s){var o,n,r,a;if(e===U)return e;let c=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const l=A(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(n=null==c?void 0:c._$AO)||void 0===n||n.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[s]=c:i._$Cu=c),void 0!==c&&(e=j(t,c._$AS(t,e.values),c,s)),e}class B{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:N).importNode(i,!0);H.currentNode=o;let n=H.nextNode(),r=0,a=0,c=s[0];for(;void 0!==c;){if(r===c.index){let e;2===c.type?e=new q(n,n.nextSibling,this,t):1===c.type?e=new c.ctor(n,c.name,c.strings,this,t):6===c.type&&(e=new X(n,this,t)),this.v.push(e),c=s[++a]}r!==(null==c?void 0:c.index)&&(n=H.nextNode(),r++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,s){var o;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),A(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==U&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return F(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==z&&A(this._$AH)?this._$AA.nextSibling.data=t:this.S(N.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=I.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new B(o,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new I(t)),e}A(t){F(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new q(this.M(O()),this.M(O()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,i,s,o){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=j(this,t,e,0),n=!A(t)||t!==this._$AH&&t!==U,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=j(this,s[i+r],e,r),a===U&&(a=this._$AH[r]),n||(n=!A(a)||a!==this._$AH[r]),a===z?t=z:t!==z&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.k(t)}k(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends G{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===z?void 0:t}}const Z=w?w.emptyScript:"";class Y extends G{constructor(){super(...arguments),this.type=4}k(t){t&&t!==z?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class J extends G{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=j(this,t,e,0))&&void 0!==i?i:z)===U)return;const s=this._$AH,o=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==z&&(s===z||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const Q=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var tt,et;null==Q||Q(I,q),(null!==(b=globalThis.litHtmlVersions)&&void 0!==b?b:globalThis.litHtmlVersions=[]).push("2.1.2");class it extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new q(e.insertBefore(O(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return U}}it.finalized=!0,it._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:it});const st=globalThis.litElementPolyfillSupport;null==st||st({LitElement:it}),(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,nt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function rt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):nt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function at(t){return rt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=({finisher:t,descriptor:e})=>(i,s)=>{var o;if(void 0===s){const s=null!==(o=i.originalKey)&&void 0!==o?o:i.key,n=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(n.finisher=function(e){t(e,s)}),n}{const o=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(o,s)}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var lt;const ht=null!=(null===(lt=window.HTMLSlotElement)||void 0===lt?void 0:lt.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function dt(t){const{slot:e,selector:i}=null!=t?t:{};return ct({descriptor:s=>({get(){var s;const o="slot"+(e?`[name=${e}]`:":not([name])"),n=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(o),r=null!=n?ht(n,t):[];return i?r.filter((t=>t.matches(i))):r},enumerable:!0,configurable:!0})})}var _t,ut;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(_t||(_t={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(ut||(ut={}));var ft=["closed","locked","off"],vt=function(t,e,i,s){s=s||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return o.detail=i,t.dispatchEvent(o),o},gt=function(t){vt(window,"haptic",t)},pt=function(t,e,i,s){if(s||(s={action:"more-info"}),!s.confirmation||s.confirmation.exemptions&&s.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(gt("warning"),confirm(s.confirmation.text||"Are you sure you want to "+s.action+"?")))switch(s.action){case"more-info":(i.entity||i.camera_image)&&vt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":s.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),vt(window,"location-changed",{replace:i})}(0,s.navigation_path);break;case"url":s.url_path&&window.open(s.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var s,o=function(t){return t.substr(0,t.indexOf("."))}(e),n="group"===o?"homeassistant":o;switch(o){case"lock":s=i?"unlock":"lock";break;case"cover":s=i?"open_cover":"close_cover";break;default:s=i?"turn_on":"turn_off"}t.callService(n,s,{entity_id:e})})(t,e,ft.includes(t.states[e].state))}(e,i.entity),gt("success"));break;case"call-service":if(!s.service)return void gt("failure");var o=s.service.split(".",2);e.callService(o[0],o[1],s.service_data,s.target),gt("success");break;case"fire-dom-event":vt(t,"ll-custom",s)}};function mt(t){return void 0!==t&&"none"!==t.action}var yt=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var i=-1;return t.some((function(t,s){return t[0]===e&&(i=s,!0)})),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var i=t(this.__entries__,e),s=this.__entries__[i];return s&&s[1]},e.prototype.set=function(e,i){var s=t(this.__entries__,e);~s?this.__entries__[s][1]=i:this.__entries__.push([e,i])},e.prototype.delete=function(e){var i=this.__entries__,s=t(i,e);~s&&i.splice(s,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var i=0,s=this.__entries__;i<s.length;i++){var o=s[i];t.call(e,o[1],o[0])}},e}()}(),bt="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,wt="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),xt="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(wt):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var $t=["top","right","bottom","left","width","height","size","weight"],St="undefined"!=typeof MutationObserver,Et=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var i=!1,s=!1,o=0;function n(){i&&(i=!1,t()),s&&a()}function r(){xt(n)}function a(){var t=Date.now();if(i){if(t-o<2)return;s=!0}else i=!0,s=!1,setTimeout(r,e);o=t}return a}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){bt&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),St?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){bt&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,i=void 0===e?"":e;$t.some((function(t){return!!~i.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),Nt=function(t,e){for(var i=0,s=Object.keys(e);i<s.length;i++){var o=s[i];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},Ot=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||wt},At=Lt(0,0,0,0);function Ft(t){return parseFloat(t)||0}function Tt(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return e.reduce((function(e,i){return e+Ft(t["border-"+i+"-width"])}),0)}function kt(t){var e=t.clientWidth,i=t.clientHeight;if(!e&&!i)return At;var s=Ot(t).getComputedStyle(t),o=function(t){for(var e={},i=0,s=["top","right","bottom","left"];i<s.length;i++){var o=s[i],n=t["padding-"+o];e[o]=Ft(n)}return e}(s),n=o.left+o.right,r=o.top+o.bottom,a=Ft(s.width),c=Ft(s.height);if("border-box"===s.boxSizing&&(Math.round(a+n)!==e&&(a-=Tt(s,"left","right")+n),Math.round(c+r)!==i&&(c-=Tt(s,"top","bottom")+r)),!function(t){return t===Ot(t).document.documentElement}(t)){var l=Math.round(a+n)-e,h=Math.round(c+r)-i;1!==Math.abs(l)&&(a-=l),1!==Math.abs(h)&&(c-=h)}return Lt(o.left,o.top,a,c)}var Mt="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof Ot(t).SVGGraphicsElement}:function(t){return t instanceof Ot(t).SVGElement&&"function"==typeof t.getBBox};function Ct(t){return bt?Mt(t)?function(t){var e=t.getBBox();return Lt(0,0,e.width,e.height)}(t):kt(t):At}function Lt(t,e,i,s){return{x:t,y:e,width:i,height:s}}var Dt=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Lt(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=Ct(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),Pt=function(t,e){var i=function(t){var e=t.x,i=t.y,s=t.width,o=t.height,n="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,r=Object.create(n.prototype);return Nt(r,{x:e,y:i,width:s,height:o,top:i,right:e+s,bottom:o+i,left:e}),r}(e);Nt(this,{target:t,contentRect:i})},Rt=function(){function t(t,e,i){if(this.activeObservations_=[],this.observations_=new yt,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=i}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Ot(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new Dt(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Ot(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new Pt(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),Ut="undefined"!=typeof WeakMap?new WeakMap:new yt,zt=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=Et.getInstance(),s=new Rt(e,i,this);Ut.set(this,s)};["observe","unobserve","disconnect"].forEach((function(t){zt.prototype[t]=function(){var e;return(e=Ut.get(this))[t].apply(e,arguments)}}));var Wt=void 0!==wt.ResizeObserver?wt.ResizeObserver:zt;const Ht=t=>null!=t?t:z,Vt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},It=t=>(...e)=>({_$litDirective$:t,values:e});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class jt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const Bt="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class qt extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Bt?"100px":"50px",height:Bt?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}));const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime)},s=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?vt(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,vt(t,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,vt(t,"action",{action:"double_tap"})):vt(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",s),t.addEventListener("touchcancel",s),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",s),t.addEventListener("keyup",(t=>{13===t.keyCode&&s(t)}))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-weather",qt);const Gt=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-weather"))return t.querySelector("action-handler-weather");const e=document.createElement("action-handler-weather");return t.appendChild(e),e})();i&&i.bind(t,e)},Kt=It(class extends jt{update(t,[e]){return Gt(t.element,e),U}render(t){}});console.info("%c  PLATINUM-WEATHER-CARD-TL  \n%c  Version 1.2.0          ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"platinum-weather-card",name:"Platinum Weather Card",description:"An fully customisable weather card with a GUI configuration"});let Zt=class extends it{constructor(){super(...arguments),this._cardWidth=492,this._error=[]}static get properties(){return{_config:{},_forecastEvent:{},hass:{}}}static async getConfigElement(){return await import("./editor-b43c8c1f.js"),document.createElement("platinum-weather-card-editor")}static getStubConfig(){return{}}getCardSize(){const t=16+this._getCardSizeOverviewSection()+this._getCardSizeExtendedSection()+this._getCardSizeSlotsSection()+this._getCardSizeDailyForecastSection();return Math.ceil(t/50)}setConfig(t){if(!t)throw new Error("Invalid configuration");t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this._config=Object.assign({name:"Weather"},t)}_needForecastSubscription(){return this._config&&this._config.weather_entity&&this._config.forecast_type&&this._config.forecast_type,this._config&&this._config.weather_entity&&this._config.forecast_type&&"legacy"!==this._config.forecast_type}_unsubscribeForecastEvents(){this._subscribed&&(this._subscribed.then((t=>t())),this._subscribed=void 0)}async _subscribeForecastEvents(){var t,e,i,s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */(this._unsubscribeForecastEvents(),this.isConnected&&this.hass&&this._config&&this._needForecastSubscription())&&(this._subscribed=(t=this.hass,e=this._config.weather_entity,i=this._config.forecast_type,s=t=>{this._forecastEvent=t},t.connection.subscribeMessage(s,{type:"weather/subscribe_forecast",forecast_type:i,entity_id:e})))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this._config&&this.hass&&this._subscribeForecastEvents()}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribeForecastEvents()}shouldUpdate(t){if(!this._config)return!1;if(t.has("_config")||t.has("_forecastEvent"))return!0;if(t.has("hass"))return!0;const e=t.get("hass")||void 0;if(!e||e.themes!==this.hass.themes||e.locale!==this.hass.locale)return!0;if(!1===Object.keys(this._config).every((t=>null===t.match(/^entity_/)||e.states[this._config[t]]===this.hass.states[this._config[t]])))return!0;if(this._config.show_section_daily_forecast){const t=this._config.daily_forecast_days||5;for(const s of["entity_forecast_icon_1","entity_summary_1","entity_forecast_min_1","entity_forecast_max_1","entity_pop_1","entity_pos_1"])if(void 0!==this._config[s]&&null===this._config[s].match("^weather.")){const o=this._config[s].match(/(\d+)(?!.*\d)/g);if(o)for(var i=1;i<t;i++){const t=this._config[s].replace(/(\d+)(?!.*\d)/g,Number(o)+i);if(e.states[t]!==this.hass.states[t])return!0}}}return t.has("config")}updated(t){this.hass&&this._config&&(!t.has("_config")&&this._subscribed||this._subscribeForecastEvents())}firstUpdated(){this._resize(),this._attachObserver()}_attachObserver(){var t;this._resizeObserver||(this._resizeObserver=new Wt(function(t,e,i){var s;return void 0===i&&(i=!1),function(){var o=[].slice.call(arguments),n=this,r=function(){s=null,i||t.apply(n,o)},a=i&&!s;clearTimeout(s),s=setTimeout(r,e),a&&t.apply(n,o)}}((()=>this._resize()),250,!1)));(null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card"))&&this._resizeObserver.observe(this)}_resize(){var t;if(!this.isConnected)return;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");e&&(this._cardWidth=e.getBoundingClientRect().width)}_checkForErrors(){this._error=[],Object.keys(this._config).forEach((t=>{null!==t.match(/^entity_/)&&void 0===this.hass.states[this._config[t]]&&this._error.push(`'${t}=${this._config[t]}' not found`)}));for(const t of["entity_forecast_icon_1","entity_summary_1","entity_forecast_min_1","entity_forecast_max_1","entity_pop_1","entity_pos_1","entity_extended_1","entity_pop","entity_forecast_min","entity_forecast_max"])if(void 0!==this._config[t])if(this._config[t].match("^weather.")){if(void 0===this.hass.states[this._config.weather_entity]){this._error.push("'weather_entity needs to be defined (not found).");break}if(this._config[t]!==this._config.weather_entity){this._error.push(`'${t} needs to be the same as weather_entity.`);break}const e=this.forecast1;if(void 0!==e){const i=new Date;switch(i.setDate(i.getDate()+1),t){case"entity_forecast_icon_1":void 0===this._getForecastPropFromWeather(e,i,"condition")&&this._error.push(`'${t} attribute forecast[1].condition not found`);break;case"entity_forecast_min_1":void 0===this._getForecastPropFromWeather(e,i,"templow")&&this._error.push(`'${t} attribute forecast[1].templow not found`);break;case"entity_forecast_max_1":void 0===this._getForecastPropFromWeather(e,i,"temperature")&&this._error.push(`'${t} attribute forecast[1].temperature not found`);break;case"entity_pop_1":void 0===this._getForecastPropFromWeather(e,i,"precipitation_probability")&&this._error.push(`'${t} attribute forecast[1].precipitation_probability not found`);break;case"entity_pos_1":void 0===this._getForecastPropFromWeather(e,i,"precipitation")&&this._error.push(`'${t} attribute forecast[1].precipitation not found`)}}}else{const e=this._config[t].match(/(\d+)(?!.*\d)/g);if(e){const i=this._config[t].replace(/(\d+)(?!.*\d)/g,Number(e)+1);void 0===this.hass.states[i]&&this._error.push(`'${t}'+'1'=${i}' not found`)}else this._error.push(`'${t}=${this._config[t]}' value needs to have a number`)}return void 0!==this._config.weather_entity&&(void 0!==this._config.forecast_type?"daily"!==this._config.forecast_type&&this._error.push("'forecast_type can only be set to daily"):this._error.push("'forecast_type needs to be configured.")),0!==this._error.length}_renderUpdateTime(){if(this._config.entity_update_time&&this.hass.states[this._config.entity_update_time]&&void 0!==this.hass.states[this._config.entity_update_time].state)if(!0===this._config.update_time_use_attr){if(void 0!==this._config.update_time_name_attr){const t=this._config.update_time_name_attr.toLowerCase().split(".").reduce(((t,e)=>void 0!==t?t[e]:void 0),this.hass.states[this._config.entity_update_time].attributes);if(void 0!==t){const e=new Date(`${t}`);switch(this.timeFormat){case"12hour":return R`${e.toLocaleString(this.locale||navigator.language,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(" ","")+", "+e.toLocaleDateString(this.locale,{weekday:"short",day:"numeric",month:"short",year:"numeric"}).replace(",","")}`;case"24hour":return R`${e.toLocaleString(this.locale||navigator.language,{hour:"2-digit",minute:"2-digit",hour12:!1})+", "+e.toLocaleDateString(this.locale,{weekday:"short",day:"numeric",month:"short",year:"numeric"}).replace(",","")}`;case"system":return R`${e.toLocaleTimeString(navigator.language,{timeStyle:"short"}).replace(" ","")+", "+e.toLocaleDateString(navigator.language).replace(",","")}`}}}}else{const t=new Date(this.hass.states[this._config.entity_update_time].state);switch(this.timeFormat){case"12hour":return R`${t.toLocaleString(this.locale||navigator.language,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(" ","")+", "+t.toLocaleDateString(this.locale,{weekday:"short",day:"numeric",month:"short",year:"numeric"}).replace(",","")}`;case"24hour":return R`${t.toLocaleString(this.locale||navigator.language,{hour:"2-digit",minute:"2-digit",hour12:!1})+", "+t.toLocaleDateString(this.locale,{weekday:"short",day:"numeric",month:"short",year:"numeric"}).replace(",","")}`;case"system":return R`${t.toLocaleTimeString(navigator.language,{timeStyle:"short"}).replace(" ","")+", "+t.toLocaleDateString(navigator.language).replace(",","")}`}}return R`---`}_renderCompleteOverviewSection(){var t,e;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_overview))return R``;const i=this._weatherIcon(this.forecastIcon),s=new URL((this._config.option_static_icons?"s-":"a-")+i+".svg",import.meta.url),o="unknown"!==i?"":`Unknown condition\n${this.forecastIcon}`,n="unknown"!==i?R``:R`<div class="unknown-forecast">${this.forecastIcon}</div>`,r=R`<div class="big-icon"><img src="${s.href}" width="100%" height="100%" title="${o}"></div>`,a=R`
      <div class="current-temp">
        <div class="temp" id="current-temp-text">${this.currentTemperature}</div>
        <div class="unit-temp-big">${this.getUOM("temperature")}</div>
      </div>
    `,c=this.currentApparentTemperature,l=""!=c?R`
      <div class="apparent-temp">
        <div class="apparent">${this.localeTextFeelsLike}&nbsp;${c}</div>
        <div class="unit-temp-small"> ${this.getUOM("temperature")}</div>
      </div>
    `:R``,h=!0===this._config.option_show_overview_separator?R`<hr class=line>`:"",d=this._config.entity_summary&&this.hass.states[this._config.entity_summary]?null!==(e=R`<div class="forecast-text">${this.hassExtended.formatEntityState(this.hass.states[this._config.entity_summary])}</div>`)&&void 0!==e?e:R`<div class="forecast-text">---</div>`:R``;return R`
      <div class="overview-section section">
        ${this._config.text_card_title?R`<div class="card-header">${this._config.text_card_title}</div>`:R``}
        ${this._config.text_card_title_2?R`<div class="card-header">${this._config.text_card_title_2}</div>`:R``}
        ${this._config.entity_update_time?R`<div class="updated">${this._config.text_update_time_prefix?this._config.text_update_time_prefix+" ":""}${this._renderUpdateTime()}</div>`:R``}
        <div class="overview-top">
          <div class="top-left">${r}${n}</div>
          <div class="currentTemps">${a}${l}</div>
        </div>
        ${d}
        ${h}
      </div>
    `}_renderObservationsOverviewSection(){var t;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_overview))return R``;const e=this._cardWidth>=344?" stacked":"",i=R`
      <div class="current-temp">
        <div class="temp" id="current-temp-text">${this.currentTemperature}</div>
        <div class="unit-temp-big">${this.getUOM("temperature")}</div>
      </div>
    `,s=this.currentApparentTemperature,o=""!=s?R`
      <div class="apparent-temp">
        <div class="apparent">${this.localeTextFeelsLike}&nbsp;${s}</div>
        <div class="unit-temp-small"> ${this.getUOM("temperature")}</div>
      </div>
    `:R``,n=!0===this._config.option_show_overview_separator?R`<hr class=line>`:"";return R`
      <div class="overview-section section${e}">
        ${this._config.text_card_title?R`<div class="card-header">${this._config.text_card_title}</div>`:R``}
        ${this._config.text_card_title_2?R`<div class="card-header">${this._config.text_card_title_2}</div>`:R``}
        ${this._config.entity_update_time?R`<div class="updated">${this._config.text_update_time_prefix?this._config.text_update_time_prefix+" ":""}${this._renderUpdateTime()}</div>`:R``}
      </div>
      <div class="overview-section section">
        <div class="overview-top">
          <div class="top-left-obs"></div>
          <div class="currentTemps">${i}${o}</div>
        </div>
        ${n}
      </div>
    `}_renderTitleOnlyOverviewSection(){var t;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_overview))return R``;const e=!0===this._config.option_show_overview_separator?R`<hr class=line>`:"";return R`
      <div class="overview-section section">
        ${this._config.text_card_title?R`<div class="card-header">${this._config.text_card_title}</div>`:R``}
        ${this._config.text_card_title_2?R`<div class="card-header">${this._config.text_card_title_2}</div>`:R``}
        ${this._config.entity_update_time?R`<div class="updated">${this._config.text_update_time_prefix?this._config.text_update_time_prefix+" ":""}${this._renderUpdateTime()}</div>`:R``}
        ${e}
      </div>
    `}_renderForecastOverviewSection(){var t,e;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_overview))return R``;const i=this._weatherIcon(this.forecastIcon),s=new URL((this._config.option_static_icons?"s-":"a-")+i+".svg",import.meta.url),o="unknown"!==i?"":`Unknown condition\n${this.forecastIcon}`,n="unknown"!==i?R``:R`<div class="unknown-forecast">${this.forecastIcon}</div>`,r=R`<div class="big-icon"><img src="${s.href}" width="100%" height="100%" title="${o}"></div>`,a=!0===this._config.option_show_overview_separator?R`<hr class=line>`:"",c=this._config.entity_summary&&this.hass.states[this._config.entity_summary]?null!==(e=R`<div class="forecast-text-right">${this.hassExtended.formatEntityState(this.hass.states[this._config.entity_summary])}</div>`)&&void 0!==e?e:R`<div class="forecast-text-right">---</div>`:R``;return R`
      <div class="overview-section section">
        ${this._config.text_card_title?R`<div class="card-header">${this._config.text_card_title}</div>`:R``}
        ${this._config.text_card_title_2?R`<div class="card-header">${this._config.text_card_title_2}</div>`:R``}
        ${this._config.entity_update_time?R`<div class="updated">${this._config.text_update_time_prefix?this._config.text_update_time_prefix+" ":""}${this._renderUpdateTime()}</div>`:R``}
        <div class="overview-top">
          <div class="top-left">${r}${n}</div>
          ${c}
        </div>
        ${a}
      </div>
    `}_getCardSizeOverviewSection(){var t=0;if(!1!==this._config.show_section_overview){if("observations"===this._config.overview_layout)return 76;t=16,t+=void 0!==this._config.text_card_title?20:0,t+=void 0!==this._config.text_card_title_2?20:0,t+=void 0!==this._config.entity_update_time?20:0,"title only"!==this._config.overview_layout&&(t+="forecast"!==this._config.overview_layout&&void 0!==this._config.entity_summary?145:120)}return t}_renderOverviewSection(){var t;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_overview))return R``;switch(this._config.overview_layout||"complete"){case"observations":return this._renderObservationsOverviewSection();case"forecast":return this._renderForecastOverviewSection();case"title only":return this._renderTitleOnlyOverviewSection();default:return this._renderCompleteOverviewSection()}}_getCardSizeExtendedSection(){var t=0;return!1!==this._config.show_section_extended&&(t+=16,t+=this._config.entity_extended?40:0,t+=void 0!==this._config.entity_todays_uv_forecast||void 0!==this._config.entity_todays_fire_danger?20:0),t}_renderExtendedSection(){var t,e;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_extended)||void 0===this._config.entity_extended&&void 0===this._config.entity_todays_uv_forecast&&void 0===this._config.entity_todays_fire_danger)return R``;const i=this._config.entity_extended||"";var s=[];if(void 0!==this.hass.states[i])if(null===(e=this._config.entity_extended)||void 0===e?void 0:e.match("^weather.")){const t=this.forecast1;var o;if(void 0!==t)o=void 0,!0===this._config.extended_use_attr?void 0!==this._config.extended_name_attr&&(o=t[0][this._config.extended_name_attr]):o="extended_use_attr: - must be set to true when entity_extended is set to a weather entity",void 0!==o&&s.push(R`${o}`)}else if(!0===this._config.extended_use_attr){if(void 0!==this._config.extended_name_attr){const t=this._config.extended_name_attr.toLowerCase().split(".").reduce(((t,e)=>void 0!==t?t[e]:void 0),this.hass.states[i].attributes);void 0!==t&&s.push(R`${t}`)}}else void 0!==this.hass.states[i]&&s.push(R`${this.hass.states[i].state}`);return s.push(R`${this._config.entity_todays_uv_forecast&&this.hass.states[this._config.entity_todays_uv_forecast]&&"unknown"!==this.hass.states[this._config.entity_todays_uv_forecast].state?" "+this.hass.states[this._config.entity_todays_uv_forecast].state:""}`),s.push(R`${this._config.entity_todays_fire_danger&&this.hass.states[this._config.entity_todays_fire_danger]&&"unknown"!==this.hass.states[this._config.entity_todays_fire_danger].state?" "+this.hass.states[this._config.entity_todays_fire_danger].state:""}`),R`
      <div class="extended-section section">
        <div class="f-extended">
          ${s}
        </div>
      </div>
    `}_getCardSizeSlotsSection(){var t=0;if(!1!==this._config.show_section_slots){var e=("remove"!==this._config.slot_l1?1:0)+("remove"!==this._config.slot_l2?1:0)+("remove"!==this._config.slot_l3?1:0)+("remove"!==this._config.slot_l4?1:0)+("remove"!==this._config.slot_l5?1:0)+(void 0!==this._config.slot_l6&&"remove"!==this._config.slot_l6?1:0)+(void 0!==this._config.slot_l7&&"remove"!==this._config.slot_l7?1:0)+(void 0!==this._config.slot_l8&&"remove"!==this._config.slot_l8?1:0),i=("remove"!==this._config.slot_r1?1:0)+("remove"!==this._config.slot_r2?1:0)+("remove"!==this._config.slot_r3?1:0)+("remove"!==this._config.slot_r4?1:0)+("remove"!==this._config.slot_r5?1:0)+(void 0!==this._config.slot_r6&&"remove"!==this._config.slot_r6?1:0)+(void 0!==this._config.slot_r7&&"remove"!==this._config.slot_r7?1:0)+(void 0!==this._config.slot_r8&&"remove"!==this._config.slot_r8?1:0);t+=16+24*Math.max(e,i)}return t}_renderSlotsSection(){var t;if(!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_slots))return R``;var e=!0===this._config.use_old_column_format?R`
      <div>
        <ul class="variations-ugly">
          <li>
            <ul class="slot-list">${this.slotL1}${this.slotL2}${this.slotL3}${this.slotL4}${this.slotL5}${this.slotL6}${this.slotL7}${this.slotL8}</ul>
          </li>
          <li>
            <ul class="slot-list">${this.slotR1}${this.slotR2}${this.slotR3}${this.slotR4}${this.slotR5}${this.slotR6}${this.slotR7}${this.slotR8}</ul>
          </li>
        </ul>
      </div>
    `:R`
      <div>
        <ul class="variations">
          <li class="slot-list-item-1">
            <ul class="slot-list">
              ${this.slotL1}${this.slotL2}${this.slotL3}${this.slotL4}${this.slotL5}${this.slotL6}${this.slotL7}${this.slotL8}
            </ul>
          </li>
          <li>
            <ul class="slot-list">
              ${this.slotR1}${this.slotR2}${this.slotR3}${this.slotR4}${this.slotR5}${this.slotR6}${this.slotR7}${this.slotR8}
            </ul>
          </li>
        </ul>
      </div>
    `;return R`
      <div class="slot-section section">${e}</div>
    `}_renderHorizontalDailyForecastSection(){var t,e,i,s,o,n,r;const a=[],c=this._config.daily_forecast_days||5;for(var l=0;l<c;l++){const S=new Date;var h,d,_;if(S.setDate(S.getDate()+l+1),null===(t=this._config.entity_forecast_icon_1)||void 0===t?void 0:t.match("^weather.")){const t=this._config.entity_forecast_icon_1;var u;if(void 0!==this.forecast1&&(u=this._getForecastPropFromWeather(this.forecast1,S,"condition")),void 0===u)break;const e=new URL(((this._config.option_static_icons?"s-":"a-")+(t&&u?this._weatherIcon(u):"unknown")+".svg").replace("-night","-day"),import.meta.url);h=R`<li class="f-slot-horiz-icon"><i class="icon" style="background: none, url(${e.href}) no-repeat; background-size: contain;"></i></li>`}else{var f=!!this._config.entity_forecast_icon_1&&this._config.entity_forecast_icon_1.match(/(\d+)(?!.*\d)/g);const t=this._config.entity_forecast_icon_1?this._config.entity_forecast_icon_1.replace(/(\d+)(?!.*\d)/g,String(Number(f)+l)):void 0;if(void 0===t||void 0===this.hass.states[t])break;const e=new URL(((this._config.option_static_icons?"s-":"a-")+(t&&this.hass.states[t]?this._weatherIcon(this.hass.states[t].state):"unknown")+".svg").replace("-night","-day"),import.meta.url);h=R`<i class="icon" style="background: none, url(${e.href}) no-repeat; background-size: contain;"></i>`}(null===(e=this._config.entity_forecast_max_1)||void 0===e?void 0:e.match("^weather."))?void 0!==this.forecast1&&(d=this._getForecastPropFromWeather(this.forecast1,S,"temperature")):d=(f=!!this._config.entity_forecast_max_1&&this._config.entity_forecast_max_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_forecast_max_1?this.hass.states[this._config.entity_forecast_max_1.replace(/(\d+)(?!.*\d)/g,String(Number(f)+l))].state:void 0,(null===(i=this._config.entity_forecast_min_1)||void 0===i?void 0:i.match("^weather."))?void 0!==this.forecast1&&(_=this._getForecastPropFromWeather(this.forecast1,S,"templow")):_=(f=!!this._config.entity_forecast_min_1&&this._config.entity_forecast_min_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_forecast_min_1?this.hass.states[this._config.entity_forecast_min_1.replace(/(\d+)(?!.*\d)/g,String(Number(f)+l))].state:void 0;const E=R`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`,N=!0===this._config.old_daily_format?R`
          <li class="f-slot-horiz-text">
            <span>
              <div class="slot-text highTemp">${d?Math.round(Number(d)):"---"}</div>
              ${E}
            </span>
          </li>
          <li class="f-slot-horiz-text">
            <span>
              <div class="slot-text lowTemp">${_?Math.round(Number(_)):"---"}</div>
              ${E}
            </span>
          </li>`:"highlow"===this._config.tempformat?R`
            <li class="f-slot-horiz-text">
              <span>
                <div class="slot-text highTemp">${d?Math.round(Number(d)):"---"}</div>
                <div class="slot-text slash">/</div>
                <div class="slot-text lowTemp">${_?Math.round(Number(_)):"---"}</div>
                ${E}
              </span>
            </li>`:R`
            <li class="f-slot-horiz-text">
              <span>
                <div class="slot-text lowTemp">${_?Math.round(Number(_)):"---"}</div>
                <div class="slot-text slash">/</div>
                <div class="slot-text highTemp">${d?Math.round(Number(d)):"---"}</div>
                ${E}
              </span>
            </li>
          `;var v,g,p,m;if(null===(s=this._config.entity_pop_1)||void 0===s?void 0:s.match("^weather.")){const t=this._config.entity_pop_1;var y;void 0!==this.forecast1&&(y=this._getForecastPropFromWeather(this.forecast1,S,"precipitation_probability")),v=t?R`<li class="f-slot-horiz-text"><span><div class="slot-text pop">${this.hass.states[t]&&void 0!==y?Math.round(Number(y)):"---"}</div><div class="unit">%</div></span></li>`:R``}else{const t=(f=!!this._config.entity_pop_1&&this._config.entity_pop_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_pop_1?this._config.entity_pop_1.replace(/(\d+)(?!.*\d)/g,String(Number(f)+l)):void 0;v=f?R`<li class="f-slot-horiz-text"><span><div class="slot-text pop">${t&&this.hass.states[t]?Math.round(Number(this.hass.states[t].state)):"---"}</div><div class="unit">%</div></span></li>`:R``}if(null===(o=this._config.entity_pos_1)||void 0===o?void 0:o.match("^weather.")){const t=this._config.entity_pos_1;var b;void 0!==this.forecast1&&(b=this._getForecastPropFromWeather(this.forecast1,S,"precipitation")),g=t?R`<li class="f-slot-horiz-text"><span><div class="pos">${this.hass.states[t]&&void 0!==b?b:"---"}</div><div class="unit">${this.getUOM("precipitation")}</div></span></li>`:R``}else{const t=(f=!!this._config.entity_pos_1&&this._config.entity_pos_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_pos_1?this._config.entity_pos_1.replace(/(\d+)(?!.*\d)/g,String(Number(f)+l)):void 0;g=f?R`<li class="f-slot-horiz-text"><span><div class="pos">${t&&this.hass.states[t]?this.hass.states[t].state:"---"}</div><div class="unit">${this.getUOM("precipitation")}</div></span></li>`:R``}const O=this._getSunHoursForForecast(S,l);if(p=this._config.entity_sun_hours_1?R`<li class="f-slot-horiz-text"><span><div class="slot-text sun-hours">${void 0!==O?O:"---"}</div><div class="unit">h</div></span></li>`:R``,null===(n=this._config.entity_summary_1)||void 0===n?void 0:n.match("^weather.")){const t=this._config.entity_summary_1;var w;void 0!==this.forecast1&&(w=null!==(r=this._getForecastPropFromWeather(this.forecast1,S,"detailed_description"))&&void 0!==r?r:this._getForecastPropFromWeather(this.forecast1,S,"condition")),m=R`<div class="fcasttooltipblock" id="fcast-summary-${l}" style="width:${100*c}%;left:-${100*l}%;"><div class="fcasttooltiptext">${this.hass.states[t]&&void 0!==w?(x=this.hass.localize,$=w,x(`component.weather.state._.${$}`)||$):"---"}</div>
            <span style="content:'';position:absolute;top:100%;left:${100/c/2+l*(100/c)}%;margin-left:-7.5px;border-width:7.5px;border-style:solid;border-color:#FFA100 transparent transparent transparent;"></span>
          </div>`}else{const t=(f=!!this._config.entity_summary_1&&this._config.entity_summary_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_summary_1?this._config.entity_summary_1.replace(/(\d+)(?!.*\d)/g,String(Number(f)+l)):void 0;m=R`<div class="fcasttooltipblock" id="fcast-summary-${l}" style="width:${100*c}%;left:-${100*l}%;"><div class="fcasttooltiptext">${this._config.option_tooltips&&t?this.hass.states[t]?this.hass.states[t].state:"---":""}</div>
            <span style="content:'';position:absolute;top:100%;left:${100/c/2+l*(100/c)}%;margin-left:-7.5px;border-width:7.5px;border-style:solid;border-color:#FFA100 transparent transparent transparent;"></span>
          </div>`}a.push(R`
        <div class="day-horiz fcasttooltip">
          <ul class="f-slot-horiz">
            <li class="f-slot-horiz-text"><span class="dayname">${S?S.toLocaleDateString(this.locale,{weekday:"short"}):"---"}</span></li>
            ${h}
            ${N}
            ${v}
            ${g}
            ${p}
          </ul>
          ${m}
        </div>
      `)}var x,$;return R`
      <div class="daily-forecast-horiz-section section">
        ${a}
      </div>
    `}_renderVerticalDailyForecastSection(){var t,e,i,s,o,n,r;const a=[],c=this._config.daily_forecast_days||5;for(var l=0;l<c;l++){const c=new Date;var h,d,_,u,f,v,g;if(c.setDate(c.getDate()+l+1),null===(t=this._config.entity_forecast_icon_1)||void 0===t?void 0:t.match("^weather.")){const t=this._config.entity_forecast_icon_1;if(void 0!==this.forecast1&&(g=this._getForecastPropFromWeather(this.forecast1,c,"condition")),void 0===g)break;const e=new URL(((this._config.option_static_icons?"s-":"a-")+(t&&g?this._weatherIcon(g):"unknown")+".svg").replace("-night","-day"),import.meta.url);h=R`<i class="icon" style="background: none, url(${e.href}) no-repeat; background-size: contain;"></i><br>`}else{var p=!!this._config.entity_forecast_icon_1&&this._config.entity_forecast_icon_1.match(/(\d+)(?!.*\d)/g);const t=p&&this._config.entity_forecast_icon_1?this._config.entity_forecast_icon_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l)):void 0;if(!t||void 0===this.hass.states[t]||"unknown"===this.hass.states[t].state)break;const e=new URL(((this._config.option_static_icons?"s-":"a-")+(void 0!==this.hass.states[t]?this._weatherIcon(this.hass.states[t].state):"unknown")+".svg").replace("-night","-day"),import.meta.url);h=R`<i class="icon" style="background: none, url(${e.href}) no-repeat; background-size: contain;"></i><br>`}if(null===(e=this._config.entity_summary_1)||void 0===e?void 0:e.match("^weather.")){void 0!==this.forecast1&&(g=this._getForecastPropFromWeather(this.forecast1,c,"condition"));var m=(p=!0)?R`
          <div class="f-summary-vert">${this.hass.states[this._config.entity_summary_1]?this.hassExtended.formatEntityState(this.hass.states[this._config.entity_summary_1],g):"---"}</div>`:""}else{const t=(p=!!this._config.entity_summary_1&&this._config.entity_summary_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_summary_1?this._config.entity_summary_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l)):void 0;m=p?R`
          <div class="f-summary-vert">${t&&this.hass.states[t]?this.hass.states[t].state:"---"}</div>`:""}(null===(i=this._config.entity_forecast_max_1)||void 0===i?void 0:i.match("^weather."))?void 0!==this.forecast1&&(d=this._getForecastPropFromWeather(this.forecast1,c,"temperature")):d=(p=!!this._config.entity_forecast_max_1&&this._config.entity_forecast_max_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_forecast_max_1?this.hass.states[this._config.entity_forecast_max_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l))].state:void 0,(null===(s=this._config.entity_forecast_min_1)||void 0===s?void 0:s.match("^weather."))?void 0!==this.forecast1&&(_=this._getForecastPropFromWeather(this.forecast1,c,"templow")):_=(p=!!this._config.entity_forecast_min_1&&this._config.entity_forecast_min_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_forecast_min_1?this.hass.states[this._config.entity_forecast_min_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l))].state:void 0;const E=R`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`,N=_?R`
        <div class="f-slot-vert">
          <div class="temp-label">Min: </div>
          <div class="low-temp">${Math.round(Number(_))}</div>${E}
        </div>`:R`---`,O=d?R`
        <div class="f-slot-vert">
          <div class="temp-label">Max: </div>
          <div class="high-temp">${Math.round(Number(d))}</div>${E}
        </div>`:R`---`;if(null===(o=this._config.entity_pop_1)||void 0===o?void 0:o.match("^weather.")){const t=this._config.entity_pop_1;var y;void 0!==this.forecast1&&(y=this._getForecastPropFromWeather(this.forecast1,c,"precipitation_probability")),u=t?R`<div class="f-slot-vert"><div class="f-label">Chance of rain </div>
        <div class="pop">${this.hass.states[t]&&void 0!==y?Math.round(Number(y)):"---"}</div><div class="unit">%</div></div>`:R``}else{const t=(p=!!this._config.entity_pop_1&&this._config.entity_pop_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_pop_1?this._config.entity_pop_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l)):void 0;u=p?R`
          <div class="f-slot-vert"><div class="f-label">Chance of rain </div>
          <div class="pop">${t&&this.hass.states[t]?Math.round(Number(this.hass.states[t].state)):"---"}</div><div class="unit">%</div></div>`:R``}if(null===(n=this._config.entity_pos_1)||void 0===n?void 0:n.match("^weather.")){const t=this._config.entity_pos_1;var b;void 0!==this.forecast1&&(b=this._getForecastPropFromWeather(this.forecast1,c,"precipitation")),f=t?R`<div class="f-slot-vert"><div class="f-label">Possible rain </div>
        <div class="pos">${this.hass.states[t]&&void 0!==b?b:"---"}</div><div class="unit">${this.getUOM("precipitation")}</div></div>`:R``}else{const t=(p=!!this._config.entity_pos_1&&this._config.entity_pos_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_pos_1?this._config.entity_pos_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l)):void 0;f=p?R`
          <div class="f-slot-vert"><div class="f-label">Possible rain </div>
          <div class="pos">${t&&this.hass.states[t]?this.hass.states[t].state:"---"}</div>
          <div class="unit">${this.getUOM("precipitation")}</div></div>`:R``}const A=this._getSunHoursForForecast(c,l);v=this._config.entity_sun_hours_1?R`
          <div class="f-slot-vert"><div class="f-label">Sunshine </div>
          <div class="sun-hours">${void 0!==A?A:"---"}</div>
          <div class="unit">h</div></div>`:R``;var w,x=R``;if(null===(r=this._config.entity_extended_1)||void 0===r?void 0:r.match("^weather.")){if(void 0!==this.forecast1)w=void 0,!0===this._config.daily_extended_use_attr?void 0!==this._config.daily_extended_name_attr&&(w=this._getForecastPropFromWeather(this.forecast1,c,this._config.daily_extended_name_attr)):w="daily_extended_use_attr: - must be set to true when entity_extended_1 is set to a weather entity",void 0!==w&&(x=w?R`<div class="f-extended">${w}</div>`:R``)}else if(p=!!(this._config.entity_extended_1&&l<(0!==this._config.daily_extended_forecast_days?this._config.daily_extended_forecast_days||7:0))&&this._config.entity_extended_1.match(/(\d+)(?!.*\d)/g),l<(this._config.daily_extended_forecast_days?this._config.daily_extended_forecast_days:7))if(!0===this._config.daily_extended_use_attr){const t=(p=!!this._config.entity_extended_1&&this._config.entity_extended_1.match(/(\d+)(?!.*\d)/g))&&this._config.entity_extended_1?this._config.entity_extended_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l)):this._config.entity_extended_1;if(t&&void 0!==this.hass.states[t]){const e=null==(p=!!(this._config.daily_extended_name_attr&&l<(0!==this._config.daily_extended_forecast_days?this._config.daily_extended_forecast_days||7:0))&&this._config.daily_extended_name_attr.match(/(\d+)(?!.*\d)/g))&&t&&this._config.daily_extended_name_attr?this.hass.states[t].attributes[this._config.daily_extended_name_attr]:p&&this._config.daily_extended_name_attr&&t?this._config.daily_extended_name_attr.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l)).toLowerCase().split(".").reduce(((t,e)=>void 0!==t?t[e]:void 0),this.hass.states[t].attributes):void 0;x=e?R`<div class="f-extended">${e}</div>`:R``}}else{const t=p&&this._config.entity_extended_1?this._config.entity_extended_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l)):void 0;x=p?R`<div class="f-extended">${t&&this.hass.states[t]?this.hass.states[t].state:"---"}</div>`:R``}p=!!this._config.entity_fire_danger_1&&this._config.entity_fire_danger_1.match(/(\d+)(?!.*\d)/g);var $=R``;const F=p&&this._config.entity_fire_danger_1?this._config.entity_fire_danger_1.replace(/(\d+)(?!.*\d)/g,String(Number(p)+l)):void 0;if(p&&F){var S=!1!==this._config.option_daily_color_fire_danger&&this.hass.states[F].attributes.color_fill?`background-color:${this.hass.states[F].attributes.color_fill}; color:${this.hass.states[F].attributes.color_text};`:"";!1===this._config.option_daily_color_fire_danger?$=p&&"unknown"!==this.hass.states[F].state?R`
          <div class="f-firedanger-vert">${F&&this.hass.states[F]?this.hass.states[F].state:"---"}</div>`:R``:(""===S&&(S="font-weight:300;"),$=p&&"unknown"!==this.hass.states[F].state?R`
          <div class="f-firedanger-vert">
            <p class="fire-danger-text-color" style="${S}">${F&&this.hass.states[F]?this.hass.states[F].state.toUpperCase():"---"}</p>
          </div>`:R``)}a.push(R`
        <div class="day-vert fcasttooltip">
          <div class="day-vert-top">
            <div class="dayname-vert">${c?c.toLocaleDateString(this.locale,{weekday:"short"}):"---"}</div>
            ${m}
          </div>
          <div>
            ${$}
          </div>
          <div class="day-vert-middle">
            <div class="day-vert-dayicon">
              ${h}
            </div>
            <div class="day-vert-temps">
              ${N}
              ${O}
            </div>
            <div class="day-vert-rain">
              ${u}
              ${f}
              ${v}
            </div>
          </div>
          <div class="day-vert-bottom">
            ${x}
          </div>
        </div>
      `)}return R`
      <div class="daily-forecast-vert-section section">
        ${a}
      </div>
    `}_getForecastPropFromWeather(t,e,i){const s=e.toDateString(),o=t.filter((t=>new Date(t.datetime).toDateString()===s));if(1===o.length)return void 0!==o[0][i]?String(o[0][i]):void 0;if(2===o.length){const t=o.find((t=>!0===t.daytime)),e=o.find((t=>!1===t.daytime));return"templow"===i?void 0!==e.temperature?String(e.temperature):void 0:void 0!==t[i]?String(t[i]):void 0}}_getSunHoursForForecast(t,e){var i,s,o;const n=this._config.entity_sun_hours_1;if(n){var r;if(n.match("^weather.")){if(void 0!==this.forecast1){const e=null!==(o=null!==(s=null!==(i=this._getForecastPropFromWeather(this.forecast1,t,"sunshine"))&&void 0!==i?i:this._getForecastPropFromWeather(this.forecast1,t,"sun_hours"))&&void 0!==s?s:this._getForecastPropFromWeather(this.forecast1,t,"sunshine_duration"))&&void 0!==o?o:this._getForecastPropFromWeather(this.forecast1,t,"sun_duration");r=void 0!==e?Number(e):void 0}}else{const i=this.hass.states[n];if(i&&Array.isArray(i.attributes.data))r=this._getSunHoursFromHourlyData(i.attributes.data,t);else{const t=n.match(/(\d+)(?!.*\d)/g),i=t?n.replace(/(\d+)(?!.*\d)/g,String(Number(t)+e)):void 0,s=i?this.hass.states[i]:void 0;s&&"unknown"!==s.state&&"unavailable"!==s.state&&(r=Number(s.state))}}if(void 0!==r&&!isNaN(r))return Math.round(10*r)/10}}_getSunHoursFromHourlyData(t,e){const i=e.toDateString(),s=t.filter((t=>t&&void 0!==t.datetime&&new Date(t.datetime).toDateString()===i));if(0===s.length)return;const o=s.reduce(((t,e)=>t+(Number(e.value)||0)),0);return o/3600}_getCardSizeDailyForecastSection(){var t=0;return!1!==this._config.show_section_daily_forecast&&("vertical"!==this._config.daily_forecast_layout?t+=146:(t+=18+87*(this._config.daily_forecast_days||5),0!==this._config.daily_extended_forecast_days&&(t+=48*Math.min(this._config.daily_forecast_days||5,this._config.daily_extended_forecast_days||7)))),t}_renderDailyForecastSection(){var t;return!1===(null===(t=this._config)||void 0===t?void 0:t.show_section_daily_forecast)?R``:"vertical"!==this._config.daily_forecast_layout?this._renderHorizontalDailyForecastSection():this._renderVerticalDailyForecastSection()}render(){var t,e;const i=[];this.hassExtended=this.hass;const s=((t,e)=>{var i,s;if(void 0===e){if(void 0!==(null==t?void 0:t.type)&&(null==t?void 0:t.forecast)&&(null===(i=null==t?void 0:t.forecast)||void 0===i?void 0:i.length)>2)return{forecast:t.forecast,type:null==t?void 0:t.type};e="daily"}if(e===(null==t?void 0:t.type)&&(null==t?void 0:t.forecast)&&(null===(s=null==t?void 0:t.forecast)||void 0===s?void 0:s.length)>2)return{forecast:t.forecast,type:e}})(this._forecastEvent,null===(t=this._config)||void 0===t?void 0:t.forecast_type);this.forecast1=this._config.weather_entity&&(null===(e=null==s?void 0:s.forecast)||void 0===e?void 0:e.length)?s.forecast.slice(0,this._config.daily_forecast_days?this._config.daily_forecast_days:5):void 0,this._checkForErrors()&&i.push(this._showConfigWarning(this._error));const o=[];return void 0!==this._config.section_order&&this._config.section_order.forEach((t=>{switch(t){case"overview":o.push(this._renderOverviewSection());break;case"extended":o.push(this._renderExtendedSection());break;case"slots":o.push(this._renderSlotsSection());break;case"daily_forecast":o.push(this._renderDailyForecastSection())}})),i.push(R`
      <style>
        ${this.styles}
      </style>
      <ha-card class="card"
        @action=${this._handleAction}
        .actionHandler=${Kt({hasHold:mt(this._config.hold_action),hasDoubleClick:mt(this._config.double_tap_action)})}
        tabindex=${Ht(mt(this._config.tap_action)?"0":void 0)}
        ><div class="content">
          ${o}
        </div>
      </ha-card>
    `),R`${i}`}_handleAction(t){this.hass&&this._config&&t.detail.action&&function(t,e,i,s){var o;"double_tap"===s&&i.double_tap_action?o=i.double_tap_action:"hold"===s&&i.hold_action?o=i.hold_action:"tap"===s&&i.tap_action&&(o=i.tap_action),pt(t,e,i,o)}(this,this.hass,this._config,t.detail.action)}get slotL1(){return this.slotValue("l1",this._config.slot_l1)}get slotL2(){return this.slotValue("l2",this._config.slot_l2)}get slotL3(){return this.slotValue("l3",this._config.slot_l3)}get slotL4(){return this.slotValue("l4",this._config.slot_l4)}get slotL5(){return this.slotValue("l5",this._config.slot_l5)}get slotL6(){return this.slotValue("l6",this._config.slot_l6)}get slotL7(){return this.slotValue("l7",this._config.slot_l7)}get slotL8(){return this.slotValue("l8",this._config.slot_l8)}get slotR1(){return this.slotValue("r1",this._config.slot_r1)}get slotR2(){return this.slotValue("r2",this._config.slot_r2)}get slotR3(){return this.slotValue("r3",this._config.slot_r3)}get slotR4(){return this.slotValue("r4",this._config.slot_r4)}get slotR5(){return this.slotValue("r5",this._config.slot_r5)}get slotR6(){return this.slotValue("r6",this._config.slot_r6)}get slotR7(){return this.slotValue("r7",this._config.slot_r7)}get slotR8(){return this.slotValue("r8",this._config.slot_r8)}slotValue(t,e){switch(e){case"pop":return this.slotPop;case"popforecast":return this.slotPopForecast;case"possible_today":return this.slotPos;case"possible_tomorrow":return this.slotPossibleTomorrow;case"rainfall":return this.slotRainfall;case"humidity":return this.slotHumidity;case"pressure":return this.slotPressure;case"observed_max":return this.slotObservedMax;case"observed_min":return this.slotObservedMin;case"forecast_max":return this.slotForecastMax;case"forecast_min":return this.slotForecastMin;case"temp_next":return this.slotTempNext;case"temp_following":return this.slotTempFollowing;case"temp_maximums":return this.slotTempMaximums;case"temp_minimums":return this.slotTempMinimums;case"uv_summary":return this.slotUvSummary;case"fire_danger":return this.slotFireDanger;case"wind":return this.slotWind;case"wind_kt":return this.slotWindKt;case"visibility":return this.slotVisibility;case"sun_next":return this.slotSunNext;case"sun_following":return this.slotSunFollowing;case"custom1":return this.slotCustom1;case"custom2":return this.slotCustom2;case"custom3":return this.slotCustom3;case"custom4":return this.slotCustom4;case"empty":return this.slotEmpty;case"remove":return this.slotRemove}switch(t){case"l1":return this.slotForecastMax;case"l2":return this.slotForecastMin;case"l3":return this.slotWind;case"l4":return this.slotPressure;case"l5":return this.slotSunNext;case"l6":case"l7":case"l8":case"r6":case"r7":case"r8":return this.slotRemove;case"r1":return this.slotPopForecast;case"r2":return this.slotHumidity;case"r3":return this.slotUvSummary;case"r4":return this.slotFireDanger;case"r5":return this.slotSunFollowing}return this.slotEmpty}get slotEmpty(){return R`<li>&nbsp;</li>`}get slotRemove(){return R``}get slotPopForecast(){const t=void 0!==this.forecast1?this.forecast1[0].precipitation_probability:void 0,e=this._config.entity_pop&&void 0!==this.hass.states[this._config.entity_pop]?null===this._config.entity_pop.match("^weather.")?Math.round(Number(this.hass.states[this._config.entity_pop].state)):void 0!==t?Math.round(Number(t)):"---":"---",i="---"!==e?R`<div class="slot-text unit">%</div>`:R``,s=void 0!==this.forecast1?this.forecast1[0].precipitation:void 0,o=this._config.entity_pos&&void 0!==this.hass.states[this._config.entity_pos]?null===this._config.entity_pos.match("^weather.")?this.hass.states[this._config.entity_pos].state:void 0!==s?s:"---":"---",n="---"!==o?R`<div class="slot-text unit">${this.getUOM("precipitation")}</div>`:R``;return R`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-rainy"></ha-icon>
          </div>
          <div class="slot-text pop-text">${e}</div>${i}<div class="slot-text">&nbsp;</div>
          <div class="slot-text pop-text-today">${o}</div>${n}
        </div>
      </li>
    `}get slotPop(){const t=void 0!==this.forecast1?this.forecast1[0].precipitation_probability:void 0,e=this._config.entity_pop&&void 0!==this.hass.states[this._config.entity_pop]?null===this._config.entity_pop.match("^weather.")?Math.round(Number(this.hass.states[this._config.entity_pop].state)):void 0!==t?Math.round(Number(t)):"---":"---",i="---"!==e?R`<div class="slot-text unit">%</div>`:R``;return R`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-rainy"></ha-icon>
          </div>
          <div class="slot-text pop-text">${e}</div>${i}<div class="slot-text"></div>
        </div>
      </li>
    `}get slotPos(){const t=void 0!==this.forecast1?this.forecast1[0].precipitation:void 0,e=this._config.entity_pos&&void 0!==this.hass.states[this._config.entity_pos]?null===this._config.entity_pos.match("^weather.")?this.hass.states[this._config.entity_pos].state:void 0!==t?t:"---":"---",i="---"!==e?R`<div class="slot-text unit">${this.getUOM("precipitation")}</div>`:R``;return R`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-rainy"></ha-icon>
          </div>${this.localeTextPosToday}&nbsp;<div class="slot-text possible_today-text">${e}</div>${i}
        </div>
      </li>
    `}get slotPossibleTomorrow(){const t=void 0!==this.forecast1?this.forecast1[1].precipitation:void 0,e=this._config.entity_possible_tomorrow&&void 0!==this.hass.states[this._config.entity_possible_tomorrow]?null===this._config.entity_possible_tomorrow.match("^weather.")?this.hass.states[this._config.entity_possible_tomorrow].state:void 0!==t?t:"---":"---",i="---"!==e?R`<div class="slot-text unit">${this.getUOM("precipitation")}</div>`:R``;return R`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-rainy"></ha-icon>
          </div>${this.localeTextPosTomorrow}&nbsp;<div class="slot-text possible_tomorrow-text">${e}</div>${i}
        </div>
      </li>
    `}get slotRainfall(){const t=this.currentRainfall,e="---"!==t?R`<div class="slot-text unit"></span>${this.getUOM("precipitation")}</div>`:R``;return R`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-rainy"></ha-icon>
          </div>
          <div class="slot-text rainfall-text">${t}</div>${e}
        </div>
      </li>
    `}get slotHumidity(){const t=this.currentHumidity,e="---"!==t?R`<div class="slot-text unit">%</div>`:R``;return R`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:water-percent"></ha-icon>
          </div>
          <div class="slot-text humidity-text">${t}</div>${e}
        </div>
      </li>`}get slotPressure(){const t="---"!==this.currentPressure?R`<div class="slot-text unit">${this._config.pressure_units?this._config.pressure_units:this.getUOM("air_pressure")}</div>`:R``;return R`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:gauge"></ha-icon>
          </div>
          <div class="slot-text pressure-text">${this.currentPressure}</div>${t}
        </div>
      </li>
    `}get slotObservedMax(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_observed_max&&void 0!==this.hass.states[this._config.entity_observed_max]?Number(this.hass.states[this._config.entity_observed_max].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",i="---"!==e?R`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:R``;return R`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-high"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextObservedMax}&nbsp;</div>
          <div class="slot-text observed-max-text">${e}</div>${i}
        </div>
      </li>
    `}get slotObservedMin(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_observed_min&&void 0!==this.hass.states[this._config.entity_observed_min]?Number(this.hass.states[this._config.entity_observed_min].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",i="---"!==e?R`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:R``;return R`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-low"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextObservedMin}&nbsp;</div>
          <div class="slot-text observed-min-text">${e}</div>${i}
        </div>
      </li>
    `}get slotForecastMax(){const t=void 0!==this.forecast1?this.forecast1[0].temperature:void 0,e=!0===this._config.option_today_temperature_decimals?1:0,i=this._config.entity_forecast_max&&void 0!==this.hass.states[this._config.entity_forecast_max]?null===this._config.entity_forecast_max.match("^weather.")?Number(this.hass.states[this._config.entity_forecast_max].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):void 0!==t?Number(t).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):"---":"---",s="---"!==i?R`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:R``;return R`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-high"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextForecastMax}&nbsp;</div>
          <div class="slot-text forecast-max-text">${i}</div>${s}
        </div>
      </li>
    `}get slotForecastMin(){const t=void 0!==this.forecast1?this.forecast1[0].templow:void 0,e=!0===this._config.option_today_temperature_decimals?1:0,i=this._config.entity_forecast_min&&void 0!==this.hass.states[this._config.entity_forecast_min]?null===this._config.entity_forecast_min.match("^weather.")?Number(this.hass.states[this._config.entity_forecast_min].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):void 0!==t?Number(t).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):"---":"---",s="---"!==i?R`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:R``;return R`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-low"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextForecastMin}&nbsp;</div>
          <div class="slot-text forecast-min-text">${i}</div>${s}
        </div>
      </li>
    `}get slotTempNext(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_temp_next_label&&void 0!==this.hass.states[this._config.entity_temp_next_label]?this.hass.states[this._config.entity_temp_next_label].state.toLowerCase().includes("min")||this.hass.states[this._config.entity_temp_next_label].state.toLowerCase().includes("low")?"mdi:thermometer-low":"mdi:thermometer-high":"mdi:help-box",i=this._config.entity_temp_next&&void 0!==this.hass.states[this._config.entity_temp_next]?Number(this.hass.states[this._config.entity_temp_next].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",s=this._config.entity_temp_next_label&&void 0!==this.hass.states[this._config.entity_temp_next_label]?this.hass.states[this._config.entity_temp_next_label].state:"",o="---"!==i?R`<div class="slot-text unit-temp-small">${this.getUOM("temperature")}</div>`:R``;return R`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="${e}"></ha-icon>
          </div>
          <div class="slot-text temp-next-text">${s} ${i}</div>
          ${o}
        </div>
      </li>
    `}get slotTempFollowing(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_temp_following_label&&void 0!==this.hass.states[this._config.entity_temp_following_label]?this.hass.states[this._config.entity_temp_following_label].state.toLowerCase().includes("min")||this.hass.states[this._config.entity_temp_following_label].state.toLowerCase().includes("low")?"mdi:thermometer-low":"mdi:thermometer-high":"mdi:help-box",i=this._config.entity_temp_following&&void 0!==this.hass.states[this._config.entity_temp_following]?Number(this.hass.states[this._config.entity_temp_following].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",s=this._config.entity_temp_following_label&&void 0!==this.hass.states[this._config.entity_temp_following_label]?this.hass.states[this._config.entity_temp_following_label].state:"",o="---"!==i?R`<div class="slot-text unit-temp-small">${this.getUOM("temperature")}</div>`:R``;return R`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="${e}"></ha-icon>
          </div>
          <div class="slot-text temp-following-text">${s} ${i}</div>
          ${o}
        </div>
      </li>
    `}get slotTempMaximums(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_observed_max&&void 0!==this.hass.states[this._config.entity_observed_max]?Number(this.hass.states[this._config.entity_observed_max].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",i=this._config.entity_forecast_max&&void 0!==this.hass.states[this._config.entity_forecast_max]?Number(this.hass.states[this._config.entity_forecast_max].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",s="---"!==e?R`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:R``;return R`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-high"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextObsMax}&nbsp;</div>
          <div class="slot-text observed-max-text">${e}</div>${s}
          <div class="slot-text">&nbsp;(${this.localeTextFore}&nbsp;</div>
          <div class="slot-text forecast-max-text">${i}</div>${s}
          <div class="slot-text">)</div>
        </div>
      </li>
    `}get slotTempMinimums(){const t=!0===this._config.option_today_temperature_decimals?1:0,e=this._config.entity_observed_min&&void 0!==this.hass.states[this._config.entity_observed_min]?Number(this.hass.states[this._config.entity_observed_min].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",i=this._config.entity_forecast_min&&void 0!==this.hass.states[this._config.entity_forecast_min]?Number(this.hass.states[this._config.entity_forecast_min].state).toLocaleString(this.locale,{minimumFractionDigits:t,maximumFractionDigits:t}):"---",s="---"!==e?R`<div class="unit-temp-small">${this.getUOM("temperature")}</div>`:R``;return R`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:thermometer-low"></ha-icon>
          </div>
          <div class="slot-text">${this.localeTextObsMin}&nbsp;</div>
          <div class="slot-text observed-min-text">${e}</div>${s}
          <div class="slot-text">&nbsp;(${this.localeTextFore}&nbsp;</div>
          <div class="slot-text forecast-min-text">${i}</div>${s}
          <div class="slot-text">)</div>
        </div>
      </li>
    `}get slotUvSummary(){const t=this._config.entity_uv_alert_summary&&void 0!==this.hass.states[this._config.entity_uv_alert_summary]?"unknown"!==this.hass.states[this._config.entity_uv_alert_summary].state?this.hass.states[this._config.entity_uv_alert_summary].state:"Not Applicable":"---";return R`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-sunny"></ha-icon>
          </div>
          <div class="slot-text daytime-uv-text">${this.localeTextUVRating} ${t}</div>
        </div>
      </li>
    `}get slotFireDanger(){const t=this._config.entity_fire_danger,e=t&&void 0!==this.hass.states[t]?"unknown"!==this.hass.states[t].state?!1===this._config.option_color_fire_danger?this.hass.states[t].state:this.hass.states[t].state.toLocaleUpperCase():"Not Applicable":"---";var i=t&&!1!==this._config.option_color_fire_danger&&this.hass.states[t].attributes.color_fill?`background-color:${this.hass.states[t].attributes.color_fill}; color:${this.hass.states[t].attributes.color_text};`:"";return!1===this._config.option_color_fire_danger?R`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:fire"></ha-icon>
          </div>
          <div class="slot-text fire-danger-text" style="${i}">${e} </div>
        </div>
      </li>`:(""===i&&(i="font-weight:300; padding-left:0px;"),R`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:fire"></ha-icon>
          </div>
          <div class="slot-text fire-danger-text">
            <p class="fire-danger-text-color" style="${i}">${e}</p>
          </div>
        </div>
      </li>`)}get slotWind(){const t=this._config.entity_wind_speed&&this._config.option_show_beaufort?R`<div class="slot-text"></div>BFT: ${this.currentBeaufort} -&nbsp;</div>`:"",e=this._config.entity_wind_bearing?R`<div class="slot-text">${this.currentWindBearing}&nbsp;</div>`:"",i=R`<div class="slot-text unit">${this.getUOM("length")}/h</div>`,s=this._config.entity_wind_speed?R`<div class="slot-text">${this.currentWindSpeed}</div>${i}&nbsp;`:"",o=this._config.entity_wind_gust?R`<div class="slot-text">(Gust ${this.currentWindGust}</div>${i})`:"";return R`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-windy"></ha-icon>
          </div>
          ${t}${e}${s}${o}
        </div>
      </li>
    `}get slotWindKt(){const t=this._config.entity_wind_speed_kt&&this._config.option_show_beaufort?R`<div class="slot-text"></div>BFT: ${this.currentBeaufortKt} -&nbsp;</div>`:"",e=this._config.entity_wind_bearing?R`<div class="slot-text">${this.currentWindBearing}&nbsp;</div>`:"",i=R`<div class="slot-text unit">Kt</div>`,s=this._config.entity_wind_speed_kt?R`<div class="slot-text">${this.currentWindSpeedKt}</div>${i}&nbsp;`:"",o=this._config.entity_wind_gust_kt?R`<div class="slot-text">(Gust ${this.currentWindGustKt}</div>${i})`:"";return R`
      <li>
        <div class="slot">
          <div class="slot-icon">
            <ha-icon icon="mdi:weather-windy"></ha-icon>
          </div>
          ${t}${e}${s}${o}
        </div>
      </li>
    `}get slotVisibility(){const t=this.currentVisibility,e="---"!==t?this.getUOM("length"):"";return R`
      <li>
        <div class="slot-icon">
          <ha-icon icon="mdi:weather-fog"></ha-icon>
        </div>
        <div class="slot-text visibility-text">${t}</div>
        <div class="slot-text unit"> ${e}
        </div>
      </li>
    `}get slotSunNext(){return this._config.entity_sun?this.sunSet.next:R``}get slotSunFollowing(){return this._config.entity_sun?this.sunSet.following:R``}get slotCustom1(){var t=this._config.custom1_icon?this._config.custom1_icon:"mdi:help-box",e=this._config.custom1_value&&void 0!==this.hass.states[this._config.custom1_value]?this.hass.states[this._config.custom1_value].state:"unknown",i=this._config.custom1_units?this._config.custom1_units:"";return R`
      <li>
        <div class="slot-icon">
          <ha-icon icon=${t}></ha-icon>
        </div>
        <div class="slot-text custom-1-text">${e}</div><div class="slot-text unit">${i}</div>
      </li>
    `}get slotCustom2(){var t=this._config.custom2_icon?this._config.custom2_icon:"mdi:help-box",e=this._config.custom2_value&&void 0!==this.hass.states[this._config.custom2_value]?this.hass.states[this._config.custom2_value].state:"unknown",i=this._config.custom2_units?this._config.custom2_units:"";return R`
      <li>
        <div class="slot-icon">
          <ha-icon icon=${t}></ha-icon>
        </div>
        <div class="slot-text custom-2-text">${e}</div><div class="slot-text unit">${i}</div>
      </li>
    `}get slotCustom3(){var t=this._config.custom3_icon?this._config.custom3_icon:"mdi:help-box",e=this._config.custom3_value&&void 0!==this.hass.states[this._config.custom3_value]?this.hass.states[this._config.custom3_value].state:"unknown",i=this._config.custom3_units?this._config.custom3_units:"";return R`
      <li>
        <div class="slot-icon">
          <ha-icon icon=${t}></ha-icon>
        </div>
        <div class="slot-text custom-3-text">${e}</div><div class="slot-text unit">${i}</div>
      </li>
    `}get slotCustom4(){var t=this._config.custom4_icon?this._config.custom4_icon:"mdi:help-box",e=this._config.custom4_value&&void 0!==this.hass.states[this._config.custom4_value]?this.hass.states[this._config.custom4_value].state:"unknown",i=this._config.custom4_units?this._config.custom4_units:"";return R`
      <li>
        <div class="slot-icon">
          <ha-icon icon=${t}></ha-icon>
        </div>
        <div class="slot-text custom-4-text">${e}</div><div class="slot-text unit">${i}</div>
      </li>
    `}get forecastIcon(){const t=this._config.entity_forecast_icon;return t&&this.hass.states[t]?this.hass.states[t].state:"---"}get currentTemperature(){const t=this._config.entity_temperature,e=!0===this._config.option_show_overview_decimals?1:0;return t&&this.hass.states[t]?null===t.match("^weather.")?Number(this.hass.states[t].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):void 0!==this.hass.states[t].attributes.temperature?Number(this.hass.states[t].attributes.temperature).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):"---":"---"}get currentApparentTemperature(){const t=this._config.entity_apparent_temp,e=!0===this._config.option_show_overview_decimals?1:0;return t&&this.hass.states[t]?t&&this.hass.states[t]?null===t.match("^weather.")?Number(this.hass.states[t].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):void 0!==this.hass.states[t].attributes.apparent_temperature?Number(this.hass.states[t].attributes.apparent_temperature).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):"---":"---":""}get currentHumidity(){const t=this._config.entity_humidity;return t&&this.hass.states[t]?null===t.match("^weather.")?Number(this.hass.states[t].state).toLocaleString(this.locale):void 0!==this.hass.states[t].attributes.humidity?Number(this.hass.states[t].attributes.humidity).toLocaleString(this.locale):"---":"---"}get currentRainfall(){const t=this._config.entity_rainfall,e=!0===this._config.option_today_rainfall_decimals?1:0;return t&&this.hass.states[t]?Number(this.hass.states[t].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):"---"}get currentPressure(){const t=this._config.entity_pressure;var e=this._config.option_pressure_decimals?Math.max(Math.min(this._config.option_pressure_decimals,3),0):0;return t&&this.hass.states[t]?null===t.match("^weather.")?Number(this.hass.states[t].state).toLocaleString(this.locale,{minimumFractionDigits:e,maximumFractionDigits:e}):void 0!==this.hass.states[t].attributes.pressure?Number(this.hass.states[t].attributes.pressure).toLocaleString(this.locale):"---":"---"}get currentVisibility(){const t=this._config.entity_visibility;return t&&this.hass.states[t]?null===t.match("^weather.")?Number(this.hass.states[t].state).toLocaleString(this.locale):void 0!==this.hass.states[t].attributes.visibility?Number(this.hass.states[t].attributes.visibility).toLocaleString(this.locale):"---":"---"}get currentWindBearing(){const t=this._config.entity_wind_bearing;return t&&this.hass.states[t]?null===t.match("^weather.")?isNaN(Number(this.hass.states[t].state))?this.hass.states[t].state:this.windDirections[Math.round(Number(this.hass.states[t].state)/360*16)]:void 0!==this.hass.states[t].attributes.wind_bearing?isNaN(Number(this.hass.states[t].attributes.wind_bearing))?this.hass.states[t].attributes.wind_bearing:this.windDirections[Math.round(Number(this.hass.states[t].attributes.wind_bearing)/360*16)]:"---":"---"}get currentWindSpeed(){const t=this._config.entity_wind_speed;return t&&this.hass.states[t]?null===t.match("^weather.")?Math.round(Number(this.hass.states[t].state)).toLocaleString(this.locale):void 0!==this.hass.states[t].attributes.wind_speed?Math.round(Number(this.hass.states[t].attributes.wind_speed)).toLocaleString(this.locale):"---":"---"}get currentWindGust(){const t=this._config.entity_wind_gust;return t&&this.hass.states[t]?null===t.match("^weather.")?Math.round(Number(this.hass.states[t].state)).toLocaleString(this.locale):void 0!==this.hass.states[t].attributes.wind_gust_speed?Math.round(Number(this.hass.states[t].attributes.wind_gust_speed)).toLocaleString(this.locale):"---":"---"}get currentWindSpeedKt(){const t=this._config.entity_wind_speed_kt;return t&&this.hass.states[t]?null===t.match("^weather.")?Math.round(Number(this.hass.states[t].state)).toLocaleString(this.locale):void 0!==this.hass.states[t].attributes.wind_speed?Math.round(Number(this.hass.states[t].attributes.wind_speed)).toLocaleString(this.locale):"---":"---"}get currentWindGustKt(){const t=this._config.entity_wind_gust_kt;return t&&this.hass.states[t]?Math.round(Number(this.hass.states[t].state)).toLocaleString(this.locale):"---"}get windDirections(){const t=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"],e=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSO","SO","OSO","O","ONO","NO","NNO","N"],i=["N","NNO","NO","ONO","O","OSO","SO","SSO","S","SSW","SW","WSW","W","WNW","NW","NNW","N"],s=["N","NNO","NO","ONO","O","OZO","ZO","ZZO","Z","ZZW","ZW","WZW","W","WNW","NW","NNW","N"],o=["צפון","צ-צ-מז","צפון מזרח","מז-צ-מז","מזרח","מז-ד-מז","דרום מזרח","ד-ד-מז","דרום","ד-ד-מע","דרום מערב","מע-ד-מע","מערב","מע-צ-מע","צפון מערב","צ-צ-מע","צפון"],n=["N","NNØ","NØ","ØNØ","Ø","ØSØ","SØ","SSØ","S","SSV","SV","VSV","V","VNV","NV","NNV","N"],r=["С","ССВ","СВ","ВСВ","В","ВЮВ","ЮВ","ЮЮВ","Ю","ЮЮЗ","ЮЗ","ЗЮЗ","З","ЗСЗ","СЗ","ССЗ","С"],a=["С","ССИ","СИ","ИСИ","И","ИЮИ","ЮИ","ЮЮИ","Ю","ЮЮЗ","ЮЗ","ЗЮЗ","З","ЗСЗ","СЗ","ССЗ","С"];switch(this.locale){case"it":case"fr":return e;case"de":return i;case"nl":return s;case"he":return o;case"ru":return r;case"da":return n;case"bg":return a;default:return t}}get currentBeaufort(){const t=this._config.entity_wind_speed;if(t&&this.hass.states[t]&&!isNaN(Number(this.hass.states[t].state))){const e=Number(this.hass.states[t].state);switch(this.hass.states[t].attributes.unit_of_measurement){case"mph":return e>=73?"12":e>=64?"11":e>=55?"10":e>=47?"9":e>=39?"8":e>=32?"7":e>=25?"6":e>=19?"5":e>=13?"4":e>=8?"3":e>=4?"2":e>=1?"1":"0";case"m/s":return e>=32.7?"12":e>=28.5?"11":e>=24.5?"10":e>=20.8?"9":e>=17.2?"8":e>=13.9?"7":e>=10.8?"6":e>=8?"5":e>=5.5?"4":e>=3.4?"3":e>=1.6?"2":e>=.5?"1":"0";default:return e>=118?"12":e>=103?"11":e>=89?"10":e>=75?"9":e>=62?"8":e>=50?"7":e>=39?"6":e>=29?"5":e>=20?"4":e>=12?"3":e>=6?"2":e>=2?"1":"0"}}return"---"}get currentBeaufortKt(){const t=this._config.entity_wind_speed_kt;if(t&&this.hass.states[t]&&!isNaN(Number(this.hass.states[t].state))){const e=Number(this.hass.states[t].state);return e>=64?"12":e>=56?"11":e>=48?"10":e>=41?"9":e>=34?"8":e>=28?"7":e>=22?"6":e>=17?"5":e>=11?"4":e>=7?"3":e>=4?"2":e>=1?"1":"0"}return"---"}get sunSet(){var t,e;switch(this.timeFormat){case"12hour":t=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_setting).toLocaleTimeString(this.locale,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(" am","am").replace(" pm","pm"):"",e=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_rising).toLocaleTimeString(this.locale,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(" am","am").replace(" pm","pm"):"";break;case"24hour":t=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_setting).toLocaleTimeString(this.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}):"",e=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_rising).toLocaleTimeString(this.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}):"";break;case"system":t=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_setting).toLocaleTimeString(navigator.language,{timeStyle:"short"}).replace(" am","am").replace(" pm","pm"):"",e=this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?new Date(this.hass.states[this._config.entity_sun].attributes.next_rising).toLocaleTimeString(navigator.language,{timeStyle:"short"}).replace(" am","am").replace(" pm","pm"):""}var i=new Date;return i.setDate(i.getDate()+1),this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?"above_horizon"===this.hass.states[this._config.entity_sun].state?(e=i.toLocaleDateString(this.locale,{weekday:"short"})+" "+e,{next:R`
            <li>
              <div class="slot-icon">
                <ha-icon id="sun-next-icon" icon="mdi:weather-sunset-down"></ha-icon>
              </div>
              <div class="slot-text sun-next-text">${t}</div>
            </li>`,following:R`
            <li>
              <div class="slot-icon">
                <ha-icon id="sun-following-icon" icon="mdi:weather-sunset-up"></ha-icon>
              </div>
              <div class="slot-text sun-following-text">${e}</div>
            </li>`,nextText:t,followingText:e,nextIcon:"mdi:weather-sunset-down",followingIcon:"mdi:weather-sunset-up"}):((new Date).getDate()!=new Date(this.hass.states[this._config.entity_sun].attributes.next_rising).getDate()&&(e=i.toLocaleDateString(this.locale,{weekday:"short"})+" "+e,t=i.toLocaleDateString(this.locale,{weekday:"short"})+" "+t),{next:R`
            <li>
              <div class="slot-icon">
                <ha-icon id="sun-next-icon" icon="mdi:weather-sunset-up"></ha-icon>
              </div>
              <div class="slot-text sun-next-text">${e}</div>
            </li>`,following:R`
            <li>
              <div class="slot-icon">
                <ha-icon id="sun-following-icon" icon="mdi:weather-sunset-down"></ha-icon>
              </div>
              <div class="slot-text sun-following-text">${t}</div>
            </li>`,nextText:e,followingText:t,nextIcon:"mdi:weather-sunset-up",followingIcon:"mdi:weather-sunset-down"}):{next:R``,following:R``,nextText:"",followingText:"",nextIcon:"",followingIcon:""}}get timeFormat(){return this._config.option_time_format?this._config.option_time_format:"system"}_weatherIcon(t){switch(t){case"sunny":case"clear":return this.iconClear;case"mostly-sunny":case"mostly_sunny":return this.iconMostlySunny;case"partly-cloudy":case"partly_cloudy":case"partlycloudy":return this.iconPartlyCloudy;case"cloudy":return this.iconCloudy;case"hazy":case"hazey":case"haze":return this.iconHazy;case"frost":return this.iconFrost;case"light-rain":case"light_rain":return this.iconLightRain;case"wind":case"windy":return this.iconWindy;case"fog":case"foggy":return this.iconFog;case"showers":case"shower":return this.iconShowers;case"rain":case"rainy":return this.iconRain;case"dust":case"dusty":return this.iconDust;case"snow":case"snowy":return this.iconSnow;case"snowy-rainy":case"snowy_rainy":case"snowyrainy":return this.iconSnowRain;case"storm":case"stormy":return this.iconStorm;case"light-showers":case"light-shower":case"light_showers":case"light_shower":return this.iconLightShowers;case"heavy-showers":case"heavy-shower":case"heavy_showers":case"heavy_shower":case"pouring":return this.iconHeavyShowers;case"tropical-cyclone":case"tropical_cyclone":case"tropicalcyclone":return this.iconCyclone;case"clear-day":case"clear_day":return this.iconClearDay;case"clear-night":case"clear_night":return this.iconClearNight;case"sleet":return this.iconSleet;case"partly-cloudy-day":case"partly_cloudy_day":return this.iconPartlyCloudyDay;case"partly-cloudy-night":case"partly_cloudy_night":return this.iconPartlyCloudyNight;case"hail":return this.iconHail;case"lightning":case"lightning-rainy":case"lightning_rainy":case"thunderstorm":return this.iconLightning;case"windy-variant":case"windy_variant":return this.iconWindyVariant}return"unknown"}get dayOrNight(){return this._config.entity_sun&&void 0!==this.hass.states[this._config.entity_sun]?{below_horizon:"night",above_horizon:"day"}[this.hass.states[this._config.entity_sun].state]:"day"}get iconClear(){return`clear-${this.dayOrNight}`}get iconMostlySunny(){return`cloudy-1-${this.dayOrNight}`}get iconPartlyCloudy(){return`cloudy-2-${this.dayOrNight}`}get iconCloudy(){return"cloudy"}get iconHazy(){return`haze-${this.dayOrNight}`}get iconFrost(){return`frost-${this.dayOrNight}`}get iconLightRain(){return"rainy-2"}get iconWindy(){return"wind"}get iconFog(){return`fog-${this.dayOrNight}`}get iconShowers(){return`rainy-1-${this.dayOrNight}`}get iconRain(){return"rainy-3"}get iconDust(){return"dust"}get iconSnow(){return"snowy-3"}get iconSnowRain(){return"snow-and-sleet-mix"}get iconStorm(){return`scattered-thunderstorms-${this.dayOrNight}`}get iconLightShowers(){return`rainy-1-${this.dayOrNight}`}get iconHeavyShowers(){return`rainy-2-${this.dayOrNight}`}get iconCyclone(){return"tropical-storm"}get iconClearDay(){return"clear-day"}get iconClearNight(){return"clear-night"}get iconSleet(){return"rain-and-sleet-mix"}get iconPartlyCloudyDay(){return"cloudy-1-day"}get iconPartlyCloudyNight(){return"cloudy-1-night"}get iconHail(){return"hail"}get iconLightning(){return`isolated-thunderstorms-${this.dayOrNight}`}get iconWindyVariant(){return"wind"}get locale(){try{return Intl.NumberFormat(this._config.option_locale),this._config.option_locale}catch(t){return}}get localeTextFeelsLike(){switch(this.locale){case"it":return"Percepito";case"fr":return"Ressenti";case"de":return"Gefühlt";case"nl":return"Voelt als";case"pl":return"Odczuwalne";case"he":return"מרגיש כמו";case"da":return"Føles som";case"ru":return"Ощущается как";case"ua":return"Відчувається як";case"bg":return"Усеща се като";default:return"Feels like"}}get localeTextObservedMax(){return this.locale,"Observed Max"}get localeTextObservedMin(){return this.locale,"Observed Min"}get localeTextObsMax(){return this.locale,"Obs Max"}get localeTextObsMin(){return this.locale,"Obs Min"}get localeTextForecastMax(){switch(this.locale){case"it":return"Max oggi";case"fr":return"Max aujourd'hui";case"de":return"Max heute";case"nl":return"Max vandaag";case"pl":return"Maks Temperatura";case"he":return"מקסימלי היום";case"da":return"Højeste i dag";case"ru":return"Макс сегодня";case"ua":return"Макс сьогодні";case"bg":return"Макс днес";default:return"Forecast Max"}}get localeTextForecastMin(){switch(this.locale){case"it":return"Min oggi";case"fr":return"Min aujourd'hui";case"de":return"Min heute";case"nl":return"Min vandaag";case"pl":return"Min Temperatura";case"he":return"דקות היום";case"da":return"Laveste i dag";case"ru":return"Мин сегодня";case"ua":return"Мін сьогодні";case"bg":return"Мин днес";default:return"Forecast Min"}}get localeTextPosToday(){switch(this.locale){case"it":return"Previsione";case"fr":return"Prévoir";case"de":return"Vorhersage";case"nl":return"Prognose";case"pl":return"Prognoza";case"he":return"תַחֲזִית";case"da":return"Vejrudsigt";case"ru":case"ua":return"Прогноз";case"bg":return"Прогноза";default:return"Forecast"}}get localeTextPosTomorrow(){switch(this.locale){case"it":return"Prev per domani";case"fr":return"Prév demain";case"de":case"nl":return"Prog morgen";case"pl":return"Prog jutro";case"he":return"תחזית מחר";case"da":return"Prog i morgen";case"ru":case"ua":return"Прогноз на завтра";case"bg":return"Прогноза за утре";default:return"Fore Tom"}}get localeTextFore(){switch(this.locale){case"it":return"Prev";case"fr":return"Prév";case"de":case"nl":case"pl":case"da":return"Prog";case"he":return"תַחֲזִית";case"ru":case"ua":return"Прогноз";case"bg":return"Прогноза";default:return"Fore"}}get localeTextUVRating(){switch(this.locale){default:return"UV";case"ru":case"ua":return"УФ"}}get localeTextFireDanger(){switch(this.locale){case"it":return"Fuoco";case"fr":return"Feu";case"de":return"Feuer";case"nl":case"da":return"Brand";case"pl":return"Ogień";case"he":return"אֵשׁ";case"ru":return"Огонь";case"ua":return"Вогонь";case"bg":return"Пожар";default:return"Fire"}}getUOM(t){const e=this.hass.config.unit_system.length;switch(t){case"air_pressure":const i=this._config.entity_pressure;return i&&this.hass.states[i]?null===i.match("^weather.")?void 0!==this.hass.states[i].attributes.unit_of_measurement?this.hass.states[i].attributes.unit_of_measurement:"km"===e?"hPa":"mbar":void 0!==this.hass.states[i].attributes.pressure_unit?this.hass.states[i].attributes.pressure_unit:"--":"--";case"length":return e;case"precipitation":return"km"===e?"mm":"in";case"intensity":return"km"===e?"mm/h":"in/h";default:return this.hass.config.unit_system[t]||""}}_showConfigWarning(t){return R`
      <hui-warning>
        <div>Weather Card</div>
        ${t.map((t=>R`<div>${t}</div>`))}
      </hui-warning>
    `}_showWarning(t){return R`<hui-warning>${t}</hui-warning>`}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this._config}),R`${e}`}get styles(){const t=this._config.option_tooltips?"visible":"hidden",e=this._config.temp_font_weight||"300",i=this._config.temp_font_size||"4em",s=this._config.forecast_text_font_size||"21px",o=this._config.forecast_text_alignment||"center";return h`
      ha-card {
        cursor: pointer;
      }

      .card {
        padding: 8px 16px 8px 16px;
      }
      .content {
        align-items: center;
      }
      .card-header {
        font-size: 1.5em;
        color: var(--primary-text-color);
      }
      .section {
        margin: -1px;
        border: 1px solid transparent;
        padding-top: 8px;
        padding-bottom: 8px;
      }
      .updated {
        font-size: 0.9em;
        font-weight: 300;
        color: var(--primary-text-color);
      }
      .overview-top {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
      }
      .stacked {
        position: absolute;
      }
      .top-left {
        display: flex;
        flex-direction: column;
        height: 120px;
      }
      .top-left-obs {
        display: flex;
        flex-direction: column;
      }
      .big-icon {
        height: 120px;
        width: 140px;
        position: relative;
      }
      .unknown-forecast {
        position: relative;
        top: -30px;
        text-align: center;
      }
      .currentTemps {
        display: flex;
        align-self: flex-start;
        flex-direction: column;
        height: 60px;
      }
      .current-temp {
        display: table-row;
        margin-left: auto;
        padding: 2px 0px;
      }
      .temp {
        display:table-cell;
        font-weight: ${l(e)};
        font-size: ${l(i)};
        color: var(--primary-text-color);
        position: relative;
        line-height: 74%;
      }
      .unit-temp-big {
        display: table-cell;
        vertical-align: top;
        font-weight: ${l(e)};
        font-size: 1.5em;
        color: var(--primary-text-color);
        position: relative;
        line-height: 74%;
      }
      .apparent-temp {
        display: table-row;
        margin-left: auto;
        height: 24px;
      }
      .apparent {
        display: table-cell;
        color: var(--primary-text-color);
        font-weight: 300;
        position: relative;
        line-height: 24px;
      }
      .unit-temp-small {
        display: table-cell;
        vertical-align: top;
        font-size: 10.5px;
        color: var(--primary-text-color);
        position: relative;
        line-height: 14px;
        padding-top: 3.6px;
        padding-left: 1px;
      }
      .line {
        margin-top : 7px;
        margin-bottom: -9px;
        color: var(--primary-text-color);
      }
      .forecast-text {
        font-size: ${l(s)};
        text-align: ${l(o)};
        line-height: 25px;
      }
      .forecast-text-right {
        font-size: ${l(s)};
        text-align: ${l(o)};
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
        line-height: 25px;
        margin-left: -40px;
      }
      .variations {
        display: flex;
        flex-flow: row wrap;
        font-weight: 300;
        color: var(--primary-text-color);
        list-style: none;
        margin-block-start: 0px;
        margin-block-end: 0px;
        padding-inline-start: 8px;
      }
      .slot-list-item-1 {
        min-width:50%;
        padding-right: 8px;
      }
      .slot-list {
        list-style: none;
        padding: 0;
      }
      .slot-list li {
        height:24px;
      }
      .variations-ugly {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        font-weight: 300;
        color: var(--primary-text-color);
        list-style: none;
        margin-block-start: 0px;
        margin-block-end: 0px;
        padding-inline-start: 8px;
      }
      .ha-icon {
        height: 24px;
        margin-right: 5px;
        color: var(--paper-item-icon-color);
      }
      .unit {
        font-size: 0.8em;
        display: table-cell;
        padding-left: 1px;
      }
      .slot {
        display: table-row;
      }
      .slot-icon {
        display: table-cell;
        position: relative;
        height: 18px;
        padding-right: 5px;
        color: var(--paper-item-icon-color);
      }
      .slot-text {
        display: table-cell;
        position: relative;
      }
      .fire-danger-text-color {
        display: inline-block;
        height: 18px;
        line-height: 20px;
        text-align: left;
        vertical-align: middle;
        margin: 0;
        padding-left: 4px;
        font-weight: 600;
        width: 108px;
      }
      .daily-forecast-horiz-section {
        display: flex;
        flex-flow: row wrap;
        width: 100%;
        margin: 0;
        clear: both;
      }
      .daily-forecast-horiz-section .day-horiz:nth-last-child(1) {
        border-right: transparent;
      }
      .day-horiz {
        flex: 1;
        float: left;
        text-align: center;
        color: var(--primary-text-color);
        border-right: 1px solid #d9d9d9;
        margin-right: -1px;
        box-sizing: border-box;
      }
      .daily-forecast-vert-section {
        display: flex;
        flex-flow: column nowrap;
        margin: 0 auto;
        clear: both;
      }
      .day-vert {
        flex: 1;
        color: var(--primary-text-color);
        border-top: 1px solid #d9d9d9;
        line-height: 24px;
        box-sizing: border-box;
        padding-bottom: 8px;
      }
      .day-vert-top {
        display: flex;
        width: 100%;
      }
      .day-vert-middle {
        display: flex;
        float: left;
        width: 100%;
      }
      .day-vert-bottom {
        text-align: left;
        float: left;
      }
      .day-vert-dayicon {
        width: 40px;
        text-align: left;
        float: left;
        margin-bottom: -8px;
      }
      .day-vert-temps {
        flex: 1;
        text-align: left;
        float: left;
        padding-left: 1em;
        padding-top: 0.5em;
      }
      .day-vert-rain {
        flex: 2;
        text-align: left;
        float: left;
        padding-left: 1em;
        padding-top: 0.5em;
      }
      .dayname {
        text-transform: uppercase;
      }
      .dayname-vert {
        min-width: 40px;
        max-width: 40px;
        text-transform: uppercase;
      }
      .icon {
        width: 49px;
        height: 42px;
        margin: auto;
        display: inline-block;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        text-indent: -9999px;
      }
      .f-slot-horiz {
        display: inline-block;
        text-align: center;
        list-style: none;
        overflow: hidden;
        font-weight: 300;
        padding: 0;
        margin-block-start: 0;
        margin-block-end: -12px;
      }
      .f-slot-horiz-text {
        height:20px;
      }
      .f-slot-horiz-icon {
        height:50px;
      }
      .f-summary-vert {
        padding-left: 1em;
        font-weight: 400;
      }
      .f-firedanger-vert {
        text-align: right;
        font-weight: 300;
        margin-top: -24px;
      }
      .f-slot-vert {
        display: table;
        overflow: hidden;
        height: 24px;
        font-weight: 300;
      }
      .f-slot-minmax {
        width: 100%;
      }
      .f-extended {
        display: inline-table;
        font-size: 13px;
        font-weight: 300;
        padding-top: 8px;
        line-height:20px;
      }
      .extended-section .f-extended {
        padding-top: 0;
      }
      .highTemp {
        display: table-cell;
        font-weight: bold;
      }
      .lowTemp {
        display: table-cell;
        font-weight: 300;
      }
      .slash {
        padding-left: 2px;
        padding-right: 2px;
      }
      .high-temp {
        display: table-cell;
        font-weight: bold;
        width: 21px;
        text-align: right;
      }
      .low-temp {
        display: table-cell;
        font-weight: 300;
        width: 21px;
        text-align: right;
      }
      .temp-label {
        display: table-cell;
        width: 32px;
        font-weight: 300;
      }
      .f-label {
        display: table-cell;
        white-space: nowrap;
        padding-right: 0.2em;
      }
      .pop {
        display: table-cell;
        font-weight: 300;
        color: var(--primary-text-color);
      }
      .pos {
        display: table-cell;
        font-weight: 300;
        color: var(--primary-text-color);
        white-space: nowrap;
      }
      .sun-hours {
        display: table-cell;
        font-weight: 300;
        color: var(--primary-text-color);
        white-space: nowrap;
      }
      .fcasttooltip {
        position: relative;
        display: inline-block;
      }
      .fcasttooltip .fcasttooltipblock {
        visibility: hidden;
        background-color: #4B9BEF;
        color: #FFFFFF;
        text-align: center;
        border-radius: 6px;
        border-style: solid;
        border-color: #FFA100;
        border-width: 1px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: 107%;
        margin-left: -2px;
      }
      .fcasttooltip:hover .fcasttooltipblock {
        visibility: ${l(t)};
      }
      .fcasttooltiptext {
        padding-left: 8px;
        padding-right: 8px;
      }
    `}};s([at()],Zt.prototype,"_subscribed",void 0),s([at()],Zt.prototype,"_forecastEvent",void 0),s([rt({attribute:!1})],Zt.prototype,"hass",void 0),s([at()],Zt.prototype,"_config",void 0),s([at()],Zt.prototype,"_cardWidth",void 0),Zt=s([ot("platinum-weather-card")],Zt);export{R as $,Zt as P,e as _,i as a,s as b,It as c,U as d,rt as e,at as f,Ht as g,o as h,jt as i,ot as j,dt as l,vt as n,ct as o,h as r,it as s,Vt as t,z as w};
