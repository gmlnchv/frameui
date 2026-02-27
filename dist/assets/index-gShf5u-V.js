(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,j=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),q=new WeakMap;let rt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(j&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&q.set(e,t))}return t}toString(){return this.cssText}};const ct=r=>new rt(typeof r=="string"?r:r+"",void 0,W),dt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new rt(e,r,W)},pt=(r,t)=>{if(j)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=M.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},G=j?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ct(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ut,defineProperty:ft,getOwnPropertyDescriptor:gt,getOwnPropertyNames:mt,getOwnPropertySymbols:bt,getPrototypeOf:vt}=Object,m=globalThis,F=m.trustedTypes,$t=F?F.emptyScript:"",L=m.reactiveElementPolyfillSupport,E=(r,t)=>r,B={toAttribute(r,t){switch(t){case Boolean:r=r?$t:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ot=(r,t)=>!ut(r,t),K={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:ot};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);let _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=K){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&ft(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=gt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){const l=s==null?void 0:s.call(this);o==null||o.call(this,n),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??K}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=vt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const e=this.properties,i=[...mt(e),...bt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(G(s))}else t!==void 0&&e.push(G(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var o;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:B).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o,n;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const l=i.getPropertyOptions(s),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:B;this._$Em=s;const c=a.fromAttribute(e,l.type);this[s]=c??((n=this._$Ej)==null?void 0:n.get(s))??c,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){var n;if(t!==void 0){const l=this.constructor;if(s===!1&&(o=this[t]),i??(i=l.getPropertyOptions(t)),!((i.hasChanged??ot)(o,e)||i.useDefault&&i.reflect&&o===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(l._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s){const{wrapped:l}=n,a=this[o];l!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,n,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[E("elementProperties")]=new Map,_[E("finalized")]=new Map,L==null||L({ReactiveElement:_}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=globalThis,Z=r=>r,z=S.trustedTypes,J=z?z.createPolicy("lit-html",{createHTML:r=>r}):void 0,nt="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,at="?"+g,yt=`<${at}>`,y=document,k=()=>y.createComment(""),P=r=>r===null||typeof r!="object"&&typeof r!="function",V=Array.isArray,_t=r=>V(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",R=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,Q=/>/g,b=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),X=/'/g,tt=/"/g,lt=/^(?:script|style|textarea|title)$/i,At=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),wt=At(1),A=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),et=new WeakMap,v=y.createTreeWalker(y,129);function ht(r,t){if(!V(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return J!==void 0?J.createHTML(t):t}const xt=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",n=x;for(let l=0;l<e;l++){const a=r[l];let c,p,h=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===x?p[1]==="!--"?n=Y:p[1]!==void 0?n=Q:p[2]!==void 0?(lt.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=b):p[3]!==void 0&&(n=b):n===b?p[0]===">"?(n=s??x,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?b:p[3]==='"'?tt:X):n===tt||n===X?n=b:n===Y||n===Q?n=x:(n=b,s=void 0);const f=n===b&&r[l+1].startsWith("/>")?" ":"";o+=n===x?a+yt:h>=0?(i.push(c),a.slice(0,h)+nt+a.slice(h)+g+f):a+g+(h===-2?l:f)}return[ht(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class O{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[c,p]=xt(t,e);if(this.el=O.createElement(c,i),v.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=v.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(nt)){const u=p[n++],f=s.getAttribute(h).split(g),U=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:U[2],strings:f,ctor:U[1]==="."?St:U[1]==="?"?Ct:U[1]==="@"?kt:H}),s.removeAttribute(h)}else h.startsWith(g)&&(a.push({type:6,index:o}),s.removeAttribute(h));if(lt.test(s.tagName)){const h=s.textContent.split(g),u=h.length-1;if(u>0){s.textContent=z?z.emptyScript:"";for(let f=0;f<u;f++)s.append(h[f],k()),v.nextNode(),a.push({type:2,index:++o});s.append(h[u],k())}}}else if(s.nodeType===8)if(s.data===at)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(g,h+1))!==-1;)a.push({type:7,index:o}),h+=g.length-1}o++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function w(r,t,e=r,i){var n,l;if(t===A)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const o=P(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=w(r,s._$AS(r,t.values),s,i)),t}class Et{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??y).importNode(e,!0);v.currentNode=s;let o=v.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new T(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Pt(o,this,t)),this._$AV.push(c),a=i[++l]}n!==(a==null?void 0:a.index)&&(o=v.nextNode(),n++)}return v.currentNode=y,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class T{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),P(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):_t(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=O.createElement(ht(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new Et(s,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=et.get(t.strings);return e===void 0&&et.set(t.strings,e=new O(t)),e}k(t){V(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new T(this.O(k()),this.O(k()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t!==this._$AB;){const s=Z(t).nextSibling;Z(t).remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=w(this,t,e,0),n=!P(t)||t!==this._$AH&&t!==A,n&&(this._$AH=t);else{const l=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=w(this,l[i+a],e,a),c===A&&(c=this._$AH[a]),n||(n=!P(c)||c!==this._$AH[a]),c===d?t=d:t!==d&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class St extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Ct extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class kt extends H{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??d)===A)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Pt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const I=S.litHtmlPolyfillSupport;I==null||I(O,T),(S.litHtmlVersions??(S.litHtmlVersions=[])).push("3.3.2");const Ot=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new T(t.insertBefore(k(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=globalThis;class C extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return A}}var it;C._$litElement$=!0,C.finalized=!0,(it=$.litElementHydrateSupport)==null||it.call($,{LitElement:C});const D=$.litElementPolyfillSupport;D==null||D({LitElement:C});($.litElementVersions??($.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var Ut=Object.getOwnPropertyDescriptor,Mt=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ut(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(s)||s);return s};let N=class extends C{constructor(){super(),this.frameColor="#222",this.frameWidth="30px",this.matColor="#ffffff",this.matSize="standard",this.material="satin",this.glass=!1}updated(r){if(r.has("frameColor")&&this.style.setProperty("--frame-color",this.frameColor),r.has("frameWidth")&&this.style.setProperty("--frame-width",this.frameWidth),r.has("matColor")&&this.style.setProperty("--mat-color",this.matColor),r.has("matSize")){const t={none:"0px",small:"28px",standard:"56px",large:"112px",xlarge:"168px"};this.style.setProperty("--mat-width",t[this.matSize]||"56px")}}render(){return wt`
      <div class="frame-container">
        <!-- Physical Planks (Frame Assembly) -->
        <div class="plank plank-top"></div>
        <div class="plank plank-right"></div>
        <div class="plank plank-bottom"></div>
        <div class="plank plank-left"></div>

        <!-- The Internal Component Stack -->
        <div class="mat-container">
          <!-- 1. Artwork (Recessed at the bottom) -->
          <div class="artwork-area content-area">
            <slot></slot>
          </div>

          <!-- 2. Mat Overlay (The Cardboard Board) -->
          <div class="mat-overlay"></div>

          <!-- 3. Bevel System (The white core sitting ON the hole edge) -->
          <div class="mat-bevel-system">
            <div class="bevel-panel bevel-top"></div>
            <div class="bevel-panel bevel-right"></div>
            <div class="bevel-panel bevel-bottom"></div>
            <div class="bevel-panel bevel-left"></div>
          </div>

          <!-- 4. Glass Cover (Top-most interior layer) -->
          <div class="glass"></div>
        </div>
      </div>
    `}};N.styles=dt`
    :host {
      display: inline-block;
      line-height: 0;
      --frame-color: #222;
      --frame-width: 30px;
      --mat-color: #ffffff;
      --mat-width: 56px;
      --glare-opacity: 0.15;
      --light-angle: 135deg;
      --mat-core: #ffffff;
      --join-gap: rgba(0, 0, 0, 0.4);
    }

    .frame-container {
      position: relative;
      display: inline-block;
      box-shadow:
        0 60px 120px -20px rgba(0, 0, 0, 0.6),
        0 30px 60px -30px rgba(0, 0, 0, 0.4);
      background: #000;
    }

    /* Planks structure for mitred corners */
    .plank {
      position: absolute;
      background-color: var(--frame-color);
      overflow: hidden;
      z-index: 2;
      box-sizing: border-box;
      /* The physical "seam" at the join */
      outline: 0.5px solid var(--join-gap);
    }

    /* Grain and Texture Layer */
    .plank::before {
      content: "";
      position: absolute;
      inset: -50%;
      pointer-events: none;
      z-index: 1;
    }

    /* Lighting and Sheen Layer */
    .plank::after {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 3;
    }

    .plank-top {
      top: 0;
      left: 0;
      right: 0;
      height: var(--frame-width);
      clip-path: polygon(
        0 0,
        100% 0,
        calc(100% - var(--frame-width)) 100%,
        var(--frame-width) 100%
      );
      background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.12) 0%,
        transparent 15%,
        rgba(0, 0, 0, 0.15) 100%
      );
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.15),
        inset 0 -1.5px 1.5px rgba(0, 0, 0, 0.4);
    }

    .plank-bottom {
      bottom: 0;
      left: 0;
      right: 0;
      height: var(--frame-width);
      clip-path: polygon(
        var(--frame-width) 0,
        calc(100% - var(--frame-width)) 0,
        100% 100%,
        0 100%
      );
      background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.2) 0%,
        transparent 20%,
        rgba(255, 255, 255, 0.08) 100%
      );
      box-shadow:
        inset 0 -1px 0 rgba(0, 0, 0, 0.4),
        inset 0 1.5px 1.5px rgba(255, 255, 255, 0.05);
    }

    .plank-left {
      top: 0;
      left: 0;
      bottom: 0;
      width: var(--frame-width);
      clip-path: polygon(
        0 0,
        100% var(--frame-width),
        100% calc(100% - var(--frame-width)),
        0 100%
      );
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.12) 0%,
        transparent 15%,
        rgba(0, 0, 0, 0.15) 100%
      );
      box-shadow:
        inset 1px 0 0 rgba(255, 255, 255, 0.15),
        inset -1.5px 0 1.5px rgba(0, 0, 0, 0.4);
    }

    .plank-right {
      top: 0;
      right: 0;
      bottom: 0;
      width: var(--frame-width);
      clip-path: polygon(
        0 var(--frame-width),
        100% 0,
        100% 100%,
        0 calc(100% - var(--frame-width))
      );
      background-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.2) 0%,
        transparent 20%,
        rgba(255, 255, 255, 0.08) 100%
      );
      box-shadow:
        inset -1px 0 0 rgba(0, 0, 0, 0.4),
        inset 1.5px 0 1.5px rgba(255, 255, 255, 0.05);
    }

    /* --- SATIN (BLACK) --- */
    :host([material="satin"]) .plank,
    .plank {
      background-color: #121212;
    }
    .plank::before {
      background: radial-gradient(
        circle at 1px 1px,
        rgba(255, 255, 255, 0.05) 1px,
        transparent 1px
      );
      background-size: 5px 5px;
      opacity: 0.3;
    }
    .plank::after {
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.08) 0%,
        transparent 50%,
        rgba(0, 0, 0, 0.1) 100%
      );
    }

    /* --- MUSEUM MATTING --- */
    .mat-container {
      position: relative;
      margin: var(--frame-width);
      padding: var(--mat-width);
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #0c0c0c; /* Backing board visible at edges */
      line-height: 0;
      isolation: isolate;
    }

    /* The Mat Overlay (Cardboard with cutout) */
    .mat-overlay {
      position: absolute;
      inset: 0;
      z-index: 10;
      pointer-events: none;
      background-color: var(--mat-color);
      background-image:
        url("https://www.transparenttextures.com/patterns/white-paper.png"),
        radial-gradient(
          circle at 35% 35%,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0.4) 100%
        );

      /* The donut hole clip-path (Outer CW, Inner CCW for hole transparency) */
      clip-path: polygon(
        /* Outer bounds (Clockwise) */ 0% 0%,
        100% 0%,
        100% 100%,
        0% 100%,
        0% 0%,
        /* Inner hole (Counter-Clockwise) */ var(--mat-width) var(--mat-width),
        var(--mat-width) calc(100% - var(--mat-width)),
        calc(100% - var(--mat-width)) calc(100% - var(--mat-width)),
        calc(100% - var(--mat-width)) var(--mat-width),
        var(--mat-width) var(--mat-width)
      );
    }

    /* HEAVY Physical depth: Light and Shadow cast from Frame onto Mat surface */
    .mat-overlay::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 11; /* Ensure shadow is on top of the mat background */
      pointer-events: none;
      /* Physically accurate deep inner shadows (Top and Right) */
      box-shadow:
        inset -20px 20px 20px rgba(0, 0, 0, 0.15),
        /* The deep Top/Right shadow well */ inset -6px 6px 14px
          rgba(0, 0, 0, 0.5),
        /* Sharp core occlusion edge */ inset 8px -8px 20px
          rgba(255, 255, 255, 0.6); /* Bounce light on bottom/left */
    }

    .mat-bevel-system {
      position: absolute;
      inset: var(--mat-width);
      pointer-events: none;
      z-index: 15;
      /* Depth of the cut (1.5mm board thickness) */
      --bevel-depth: 4px;
      /* Removed detached drop-shadow to fix floating look */
    }

    .bevel-panel {
      position: absolute;
      background-color: var(--mat-core);
      box-sizing: border-box;
      /* The razor-sharp edge where the mat board surface meets the core */
      border: 0.2px solid rgba(0, 0, 0, 0.05);
    }

    .bevel-top {
      top: 0;
      left: 0;
      right: 0;
      height: var(--bevel-depth);
      clip-path: polygon(
        0 0,
        100% 0,
        calc(100% - var(--bevel-depth)) 100%,
        var(--bevel-depth) 100%
      );
      background: linear-gradient(to bottom, #f2f2f2, #d5d5d5);
    }

    .bevel-bottom {
      bottom: 0;
      left: 0;
      right: 0;
      height: var(--bevel-depth);
      clip-path: polygon(
        var(--bevel-depth) 0,
        calc(100% - var(--bevel-depth)) 0,
        100% 100%,
        0% 100%
      );
      background: linear-gradient(to top, #ffffff, #f0f0f0);
    }

    .bevel-left {
      top: 0;
      left: 0;
      bottom: 0;
      width: var(--bevel-depth);
      clip-path: polygon(
        0 0,
        100% var(--bevel-depth),
        100% calc(100% - var(--bevel-depth)),
        0% 100%
      );
      background: linear-gradient(to right, #e8e8e8, #cccccc);
    }

    .bevel-right {
      top: 0;
      right: 0;
      bottom: 0;
      width: var(--bevel-depth);
      clip-path: polygon(
        0 var(--bevel-depth),
        100% 0,
        100% 100%,
        0 calc(100% - var(--bevel-depth))
      );
      background: linear-gradient(to left, #ffffff, #fcfcfc);
    }

    /* Artwork Layer Well */
    .content-area {
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      background-color: #f5f5f5;
      width: 100%;
      height: 100%;
      /* Corrected the depth shadow logic: Art is BEHIND the hole */
      box-shadow:
        inset -6px 6px 12px rgba(0, 0, 0, 0.22),
        /* Deep shadow on Top/Right wall of the well */ inset 1px -1px 3px
          rgba(255, 255, 255, 0.9);
    }

    /* Glass Glazing */
    .glass {
      position: absolute;
      inset: 0;
      z-index: 60;
      pointer-events: none;
      display: none;
      background:
        linear-gradient(
          135deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0) 45%,
          rgba(255, 255, 255, var(--glare-opacity)) 49.5%,
          rgba(255, 255, 255, var(--glare-opacity)) 50.5%,
          rgba(255, 255, 255, 0) 55%
        ),
        radial-gradient(
          circle at 10% 10%,
          rgba(255, 255, 255, 0.12) 0%,
          transparent 45%
        );
      mix-blend-mode: screen;
    }

    :host([glass]) .glass {
      display: block;
    }

    /* Mat-less mode */
    :host([mat-size="none"]) .mat-overlay,
    :host([mat-size="none"]) .mat-bevel-system {
      display: none;
    }
    :host([mat-size="none"]) .mat-container {
      padding: 0;
    }

    ::slotted(*) {
      display: block;
      max-width: 100%;
      height: auto;
      filter: contrast(1.02) saturate(1.02) brightness(0.96);
      transform: scale(1.001);
    }
  `;N.properties={frameColor:{type:String},frameWidth:{type:String},matColor:{type:String},matSize:{type:String,attribute:"mat-size"},material:{type:String,reflect:!0},glass:{type:Boolean,reflect:!0}};N=Mt([Tt("frame-ui")],N);function st(){const r=document.getElementById("hero-frame"),t=document.querySelectorAll("[data-mat-size]"),e=document.getElementById("glass-toggle"),i=document.getElementById("glass-knob");r&&(t.forEach(s=>{const o=s;o.onclick=()=>{const n=o.getAttribute("data-mat-size");n&&(r.setAttribute("mat-size",n),t.forEach(l=>{const a=l;a.classList.remove("bg-white","text-black"),a.classList.add("bg-neutral-900","text-neutral-400")}),o.classList.add("bg-white","text-black"),o.classList.remove("bg-neutral-900","text-neutral-400"))}}),e&&i&&(e.onclick=()=>{r.hasAttribute("glass")?(r.removeAttribute("glass"),e.classList.replace("bg-white","bg-neutral-800"),i.classList.replace("translate-x-7","translate-x-1")):(r.setAttribute("glass",""),e.classList.replace("bg-neutral-800","bg-white"),i.classList.replace("translate-x-1","translate-x-7"))}))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",st):st();
