(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Cg={exports:{}},Tl={},Pg={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lo=Symbol.for("react.element"),PE=Symbol.for("react.portal"),kE=Symbol.for("react.fragment"),NE=Symbol.for("react.strict_mode"),DE=Symbol.for("react.profiler"),VE=Symbol.for("react.provider"),OE=Symbol.for("react.context"),LE=Symbol.for("react.forward_ref"),xE=Symbol.for("react.suspense"),ME=Symbol.for("react.memo"),FE=Symbol.for("react.lazy"),np=Symbol.iterator;function bE(t){return t===null||typeof t!="object"?null:(t=np&&t[np]||t["@@iterator"],typeof t=="function"?t:null)}var kg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ng=Object.assign,Dg={};function xi(t,e,n){this.props=t,this.context=e,this.refs=Dg,this.updater=n||kg}xi.prototype.isReactComponent={};xi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vg(){}Vg.prototype=xi.prototype;function Ih(t,e,n){this.props=t,this.context=e,this.refs=Dg,this.updater=n||kg}var Sh=Ih.prototype=new Vg;Sh.constructor=Ih;Ng(Sh,xi.prototype);Sh.isPureReactComponent=!0;var rp=Array.isArray,Og=Object.prototype.hasOwnProperty,Ah={current:null},Lg={key:!0,ref:!0,__self:!0,__source:!0};function xg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Og.call(e,r)&&!Lg.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:lo,type:t,key:s,ref:o,props:i,_owner:Ah.current}}function UE(t,e){return{$$typeof:lo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rh(t){return typeof t=="object"&&t!==null&&t.$$typeof===lo}function zE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ip=/\/+/g;function Ru(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zE(""+t.key):e.toString(36)}function ha(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case lo:case PE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ru(o,0):r,rp(i)?(n="",t!=null&&(n=t.replace(ip,"$&/")+"/"),ha(i,e,n,"",function(h){return h})):i!=null&&(Rh(i)&&(i=UE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ip,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",rp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ru(s,l);o+=ha(s,e,n,u,i)}else if(u=bE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ru(s,l++),o+=ha(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function jo(t,e,n){if(t==null)return t;var r=[],i=0;return ha(t,r,"","",function(s){return e.call(n,s,i++)}),r}function jE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rt={current:null},da={transition:null},BE={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:da,ReactCurrentOwner:Ah};function Mg(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:jo,forEach:function(t,e,n){jo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return jo(t,function(){e++}),e},toArray:function(t){return jo(t,function(e){return e})||[]},only:function(t){if(!Rh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=xi;X.Fragment=kE;X.Profiler=DE;X.PureComponent=Ih;X.StrictMode=NE;X.Suspense=xE;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BE;X.act=Mg;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ng({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ah.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Og.call(e,u)&&!Lg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:lo,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t){return t={$$typeof:OE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:VE,_context:t},t.Consumer=t};X.createElement=xg;X.createFactory=function(t){var e=xg.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:LE,render:t}};X.isValidElement=Rh;X.lazy=function(t){return{$$typeof:FE,_payload:{_status:-1,_result:t},_init:jE}};X.memo=function(t,e){return{$$typeof:ME,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=da.transition;da.transition={};try{t()}finally{da.transition=e}};X.unstable_act=Mg;X.useCallback=function(t,e){return rt.current.useCallback(t,e)};X.useContext=function(t){return rt.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return rt.current.useDeferredValue(t)};X.useEffect=function(t,e){return rt.current.useEffect(t,e)};X.useId=function(){return rt.current.useId()};X.useImperativeHandle=function(t,e,n){return rt.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return rt.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return rt.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return rt.current.useMemo(t,e)};X.useReducer=function(t,e,n){return rt.current.useReducer(t,e,n)};X.useRef=function(t){return rt.current.useRef(t)};X.useState=function(t){return rt.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return rt.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return rt.current.useTransition()};X.version="18.3.1";Pg.exports=X;var Ot=Pg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $E=Ot,HE=Symbol.for("react.element"),WE=Symbol.for("react.fragment"),qE=Object.prototype.hasOwnProperty,KE=$E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,GE={key:!0,ref:!0,__self:!0,__source:!0};function Fg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)qE.call(e,r)&&!GE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:HE,type:t,key:s,ref:o,props:i,_owner:KE.current}}Tl.Fragment=WE;Tl.jsx=Fg;Tl.jsxs=Fg;Cg.exports=Tl;var ne=Cg.exports,bg={exports:{}},gt={},Ug={exports:{}},zg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,K){var Y=z.length;z.push(K);e:for(;0<Y;){var me=Y-1>>>1,ae=z[me];if(0<i(ae,K))z[me]=K,z[Y]=ae,Y=me;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],Y=z.pop();if(Y!==K){z[0]=Y;e:for(var me=0,ae=z.length,Te=ae>>>1;me<Te;){var Xt=2*(me+1)-1,Jt=z[Xt],Zt=Xt+1,en=z[Zt];if(0>i(Jt,Y))Zt<ae&&0>i(en,Jt)?(z[me]=en,z[Zt]=Y,me=Zt):(z[me]=Jt,z[Xt]=Y,me=Xt);else if(Zt<ae&&0>i(en,Y))z[me]=en,z[Zt]=Y,me=Zt;else break e}}return K}function i(z,K){var Y=z.sortIndex-K.sortIndex;return Y!==0?Y:z.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,y=3,R=!1,k=!1,D=!1,x=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var K=n(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=z)r(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(h)}}function V(z){if(D=!1,S(z),!k)if(n(u)!==null)k=!0,Wi(U);else{var K=n(h);K!==null&&Yt(V,K.startTime-z)}}function U(z,K){k=!1,D&&(D=!1,I(g),g=-1),R=!0;var Y=y;try{for(S(K),m=n(u);m!==null&&(!(m.expirationTime>K)||z&&!A());){var me=m.callback;if(typeof me=="function"){m.callback=null,y=m.priorityLevel;var ae=me(m.expirationTime<=K);K=t.unstable_now(),typeof ae=="function"?m.callback=ae:m===n(u)&&r(u),S(K)}else r(u);m=n(u)}if(m!==null)var Te=!0;else{var Xt=n(h);Xt!==null&&Yt(V,Xt.startTime-K),Te=!1}return Te}finally{m=null,y=Y,R=!1}}var b=!1,v=null,g=-1,_=5,w=-1;function A(){return!(t.unstable_now()-w<_)}function P(){if(v!==null){var z=t.unstable_now();w=z;var K=!0;try{K=v(!0,z)}finally{K?T():(b=!1,v=null)}}else b=!1}var T;if(typeof E=="function")T=function(){E(P)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,hr=_t.port2;_t.port1.onmessage=P,T=function(){hr.postMessage(null)}}else T=function(){x(P,0)};function Wi(z){v=z,b||(b=!0,T())}function Yt(z,K){g=x(function(){z(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){k||R||(k=!0,Wi(U))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var Y=y;y=K;try{return z()}finally{y=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=y;y=z;try{return K()}finally{y=Y}},t.unstable_scheduleCallback=function(z,K,Y){var me=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?me+Y:me):Y=me,z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=Y+ae,z={id:f++,callback:K,priorityLevel:z,startTime:Y,expirationTime:ae,sortIndex:-1},Y>me?(z.sortIndex=Y,e(h,z),n(u)===null&&z===n(h)&&(D?(I(g),g=-1):D=!0,Yt(V,Y-me))):(z.sortIndex=ae,e(u,z),k||R||(k=!0,Wi(U))),z},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(z){var K=y;return function(){var Y=y;y=K;try{return z.apply(this,arguments)}finally{y=Y}}}})(zg);Ug.exports=zg;var QE=Ug.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YE=Ot,mt=QE;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jg=new Set,Ms={};function Lr(t,e){vi(t,e),vi(t+"Capture",e)}function vi(t,e){for(Ms[t]=e,t=0;t<e.length;t++)jg.add(e[t])}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uc=Object.prototype.hasOwnProperty,XE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sp={},op={};function JE(t){return uc.call(op,t)?!0:uc.call(sp,t)?!1:XE.test(t)?op[t]=!0:(sp[t]=!0,!1)}function ZE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ew(t,e,n,r){if(e===null||typeof e>"u"||ZE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function it(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ze[t]=new it(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ze[e]=new it(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ze[t]=new it(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ze[t]=new it(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ze[t]=new it(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ze[t]=new it(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ze[t]=new it(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ze[t]=new it(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ze[t]=new it(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ch=/[\-:]([a-z])/g;function Ph(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ch,Ph);ze[e]=new it(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ch,Ph);ze[e]=new it(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ch,Ph);ze[e]=new it(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ze[t]=new it(t,1,!1,t.toLowerCase(),null,!1,!1)});ze.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ze[t]=new it(t,1,!1,t.toLowerCase(),null,!0,!0)});function kh(t,e,n,r){var i=ze.hasOwnProperty(e)?ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ew(e,n,i,r)&&(n=null),r||i===null?JE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Tn=YE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bo=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),Nh=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),Bg=Symbol.for("react.provider"),$g=Symbol.for("react.context"),Dh=Symbol.for("react.forward_ref"),hc=Symbol.for("react.suspense"),dc=Symbol.for("react.suspense_list"),Vh=Symbol.for("react.memo"),kn=Symbol.for("react.lazy"),Hg=Symbol.for("react.offscreen"),ap=Symbol.iterator;function ss(t){return t===null||typeof t!="object"?null:(t=ap&&t[ap]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Object.assign,Cu;function fs(t){if(Cu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cu=e&&e[1]||""}return`
`+Cu+t}var Pu=!1;function ku(t,e){if(!t||Pu)return"";Pu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Pu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fs(t):""}function tw(t){switch(t.tag){case 5:return fs(t.type);case 16:return fs("Lazy");case 13:return fs("Suspense");case 19:return fs("SuspenseList");case 0:case 2:case 15:return t=ku(t.type,!1),t;case 11:return t=ku(t.type.render,!1),t;case 1:return t=ku(t.type,!0),t;default:return""}}function fc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xr:return"Fragment";case Yr:return"Portal";case cc:return"Profiler";case Nh:return"StrictMode";case hc:return"Suspense";case dc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $g:return(t.displayName||"Context")+".Consumer";case Bg:return(t._context.displayName||"Context")+".Provider";case Dh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vh:return e=t.displayName||null,e!==null?e:fc(t.type)||"Memo";case kn:e=t._payload,t=t._init;try{return fc(t(e))}catch{}}return null}function nw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fc(e);case 8:return e===Nh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rw(t){var e=Wg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $o(t){t._valueTracker||(t._valueTracker=rw(t))}function qg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Wg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Oa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pc(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=er(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Kg(t,e){e=e.checked,e!=null&&kh(t,"checked",e,!1)}function mc(t,e){Kg(t,e);var n=er(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gc(t,e.type,n):e.hasOwnProperty("defaultValue")&&gc(t,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function up(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gc(t,e,n){(e!=="number"||Oa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ps=Array.isArray;function ui(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+er(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function yc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(ps(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:er(n)}}function Gg(t,e){var n=er(e.value),r=er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function hp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Qg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _c(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ho,Yg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ho=Ho||document.createElement("div"),Ho.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ho.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iw=["Webkit","ms","Moz","O"];Object.keys(Ts).forEach(function(t){iw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ts[e]=Ts[t]})});function Xg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ts.hasOwnProperty(t)&&Ts[t]?(""+e).trim():e+"px"}function Jg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var sw=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vc(t,e){if(e){if(sw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function Ec(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wc=null;function Oh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tc=null,ci=null,hi=null;function dp(t){if(t=ho(t)){if(typeof Tc!="function")throw Error(M(280));var e=t.stateNode;e&&(e=Cl(e),Tc(t.stateNode,t.type,e))}}function Zg(t){ci?hi?hi.push(t):hi=[t]:ci=t}function ey(){if(ci){var t=ci,e=hi;if(hi=ci=null,dp(t),e)for(t=0;t<e.length;t++)dp(e[t])}}function ty(t,e){return t(e)}function ny(){}var Nu=!1;function ry(t,e,n){if(Nu)return t(e,n);Nu=!0;try{return ty(t,e,n)}finally{Nu=!1,(ci!==null||hi!==null)&&(ny(),ey())}}function bs(t,e){var n=t.stateNode;if(n===null)return null;var r=Cl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var Ic=!1;if(pn)try{var os={};Object.defineProperty(os,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",os,os),window.removeEventListener("test",os,os)}catch{Ic=!1}function ow(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Is=!1,La=null,xa=!1,Sc=null,aw={onError:function(t){Is=!0,La=t}};function lw(t,e,n,r,i,s,o,l,u){Is=!1,La=null,ow.apply(aw,arguments)}function uw(t,e,n,r,i,s,o,l,u){if(lw.apply(this,arguments),Is){if(Is){var h=La;Is=!1,La=null}else throw Error(M(198));xa||(xa=!0,Sc=h)}}function xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function iy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fp(t){if(xr(t)!==t)throw Error(M(188))}function cw(t){var e=t.alternate;if(!e){if(e=xr(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fp(i),t;if(s===r)return fp(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function sy(t){return t=cw(t),t!==null?oy(t):null}function oy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=oy(t);if(e!==null)return e;t=t.sibling}return null}var ay=mt.unstable_scheduleCallback,pp=mt.unstable_cancelCallback,hw=mt.unstable_shouldYield,dw=mt.unstable_requestPaint,Se=mt.unstable_now,fw=mt.unstable_getCurrentPriorityLevel,Lh=mt.unstable_ImmediatePriority,ly=mt.unstable_UserBlockingPriority,Ma=mt.unstable_NormalPriority,pw=mt.unstable_LowPriority,uy=mt.unstable_IdlePriority,Il=null,Bt=null;function mw(t){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Il,t,void 0,(t.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:_w,gw=Math.log,yw=Math.LN2;function _w(t){return t>>>=0,t===0?32:31-(gw(t)/yw|0)|0}var Wo=64,qo=4194304;function ms(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ms(l):(s&=o,s!==0&&(r=ms(s)))}else o=n&~i,o!==0?r=ms(o):s!==0&&(r=ms(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Lt(e),i=1<<n,r|=t[n],e&=~i;return r}function vw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ew(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Lt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=vw(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Ac(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cy(){var t=Wo;return Wo<<=1,!(Wo&4194240)&&(Wo=64),t}function Du(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Lt(e),t[e]=n}function ww(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Lt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function xh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Lt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function hy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dy,Mh,fy,py,my,Rc=!1,Ko=[],zn=null,jn=null,Bn=null,Us=new Map,zs=new Map,Dn=[],Tw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mp(t,e){switch(t){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":Us.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zs.delete(e.pointerId)}}function as(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ho(e),e!==null&&Mh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Iw(t,e,n,r,i){switch(e){case"focusin":return zn=as(zn,t,e,n,r,i),!0;case"dragenter":return jn=as(jn,t,e,n,r,i),!0;case"mouseover":return Bn=as(Bn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Us.set(s,as(Us.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,zs.set(s,as(zs.get(s)||null,t,e,n,r,i)),!0}return!1}function gy(t){var e=vr(t.target);if(e!==null){var n=xr(e);if(n!==null){if(e=n.tag,e===13){if(e=iy(n),e!==null){t.blockedOn=e,my(t.priority,function(){fy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);wc=r,n.target.dispatchEvent(r),wc=null}else return e=ho(n),e!==null&&Mh(e),t.blockedOn=n,!1;e.shift()}return!0}function gp(t,e,n){fa(t)&&n.delete(e)}function Sw(){Rc=!1,zn!==null&&fa(zn)&&(zn=null),jn!==null&&fa(jn)&&(jn=null),Bn!==null&&fa(Bn)&&(Bn=null),Us.forEach(gp),zs.forEach(gp)}function ls(t,e){t.blockedOn===e&&(t.blockedOn=null,Rc||(Rc=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,Sw)))}function js(t){function e(i){return ls(i,t)}if(0<Ko.length){ls(Ko[0],t);for(var n=1;n<Ko.length;n++){var r=Ko[n];r.blockedOn===t&&(r.blockedOn=null)}}for(zn!==null&&ls(zn,t),jn!==null&&ls(jn,t),Bn!==null&&ls(Bn,t),Us.forEach(e),zs.forEach(e),n=0;n<Dn.length;n++)r=Dn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Dn.length&&(n=Dn[0],n.blockedOn===null);)gy(n),n.blockedOn===null&&Dn.shift()}var di=Tn.ReactCurrentBatchConfig,ba=!0;function Aw(t,e,n,r){var i=oe,s=di.transition;di.transition=null;try{oe=1,Fh(t,e,n,r)}finally{oe=i,di.transition=s}}function Rw(t,e,n,r){var i=oe,s=di.transition;di.transition=null;try{oe=4,Fh(t,e,n,r)}finally{oe=i,di.transition=s}}function Fh(t,e,n,r){if(ba){var i=Cc(t,e,n,r);if(i===null)ju(t,e,r,Ua,n),mp(t,r);else if(Iw(i,t,e,n,r))r.stopPropagation();else if(mp(t,r),e&4&&-1<Tw.indexOf(t)){for(;i!==null;){var s=ho(i);if(s!==null&&dy(s),s=Cc(t,e,n,r),s===null&&ju(t,e,r,Ua,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ju(t,e,r,null,n)}}var Ua=null;function Cc(t,e,n,r){if(Ua=null,t=Oh(r),t=vr(t),t!==null)if(e=xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=iy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ua=t,null}function yy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fw()){case Lh:return 1;case ly:return 4;case Ma:case pw:return 16;case uy:return 536870912;default:return 16}default:return 16}}var Fn=null,bh=null,pa=null;function _y(){if(pa)return pa;var t,e=bh,n=e.length,r,i="value"in Fn?Fn.value:Fn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return pa=i.slice(t,1<r?1-r:void 0)}function ma(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Go(){return!0}function yp(){return!1}function yt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Go:yp,this.isPropagationStopped=yp,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),e}var Mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uh=yt(Mi),co=_e({},Mi,{view:0,detail:0}),Cw=yt(co),Vu,Ou,us,Sl=_e({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==us&&(us&&t.type==="mousemove"?(Vu=t.screenX-us.screenX,Ou=t.screenY-us.screenY):Ou=Vu=0,us=t),Vu)},movementY:function(t){return"movementY"in t?t.movementY:Ou}}),_p=yt(Sl),Pw=_e({},Sl,{dataTransfer:0}),kw=yt(Pw),Nw=_e({},co,{relatedTarget:0}),Lu=yt(Nw),Dw=_e({},Mi,{animationName:0,elapsedTime:0,pseudoElement:0}),Vw=yt(Dw),Ow=_e({},Mi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lw=yt(Ow),xw=_e({},Mi,{data:0}),vp=yt(xw),Mw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bw[t])?!!e[t]:!1}function zh(){return Uw}var zw=_e({},co,{key:function(t){if(t.key){var e=Mw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ma(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zh,charCode:function(t){return t.type==="keypress"?ma(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ma(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jw=yt(zw),Bw=_e({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ep=yt(Bw),$w=_e({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zh}),Hw=yt($w),Ww=_e({},Mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),qw=yt(Ww),Kw=_e({},Sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gw=yt(Kw),Qw=[9,13,27,32],jh=pn&&"CompositionEvent"in window,Ss=null;pn&&"documentMode"in document&&(Ss=document.documentMode);var Yw=pn&&"TextEvent"in window&&!Ss,vy=pn&&(!jh||Ss&&8<Ss&&11>=Ss),wp=" ",Tp=!1;function Ey(t,e){switch(t){case"keyup":return Qw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function Xw(t,e){switch(t){case"compositionend":return wy(e);case"keypress":return e.which!==32?null:(Tp=!0,wp);case"textInput":return t=e.data,t===wp&&Tp?null:t;default:return null}}function Jw(t,e){if(Jr)return t==="compositionend"||!jh&&Ey(t,e)?(t=_y(),pa=bh=Fn=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vy&&e.locale!=="ko"?null:e.data;default:return null}}var Zw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Zw[t.type]:e==="textarea"}function Ty(t,e,n,r){Zg(r),e=za(e,"onChange"),0<e.length&&(n=new Uh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var As=null,Bs=null;function eT(t){Oy(t,0)}function Al(t){var e=ti(t);if(qg(e))return t}function tT(t,e){if(t==="change")return e}var Iy=!1;if(pn){var xu;if(pn){var Mu="oninput"in document;if(!Mu){var Sp=document.createElement("div");Sp.setAttribute("oninput","return;"),Mu=typeof Sp.oninput=="function"}xu=Mu}else xu=!1;Iy=xu&&(!document.documentMode||9<document.documentMode)}function Ap(){As&&(As.detachEvent("onpropertychange",Sy),Bs=As=null)}function Sy(t){if(t.propertyName==="value"&&Al(Bs)){var e=[];Ty(e,Bs,t,Oh(t)),ry(eT,e)}}function nT(t,e,n){t==="focusin"?(Ap(),As=e,Bs=n,As.attachEvent("onpropertychange",Sy)):t==="focusout"&&Ap()}function rT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Al(Bs)}function iT(t,e){if(t==="click")return Al(e)}function sT(t,e){if(t==="input"||t==="change")return Al(e)}function oT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ft=typeof Object.is=="function"?Object.is:oT;function $s(t,e){if(Ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!uc.call(e,i)||!Ft(t[i],e[i]))return!1}return!0}function Rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cp(t,e){var n=Rp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rp(n)}}function Ay(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ay(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ry(){for(var t=window,e=Oa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Oa(t.document)}return e}function Bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function aT(t){var e=Ry(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ay(n.ownerDocument.documentElement,n)){if(r!==null&&Bh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Cp(n,s);var o=Cp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lT=pn&&"documentMode"in document&&11>=document.documentMode,Zr=null,Pc=null,Rs=null,kc=!1;function Pp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kc||Zr==null||Zr!==Oa(r)||(r=Zr,"selectionStart"in r&&Bh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rs&&$s(Rs,r)||(Rs=r,r=za(Pc,"onSelect"),0<r.length&&(e=new Uh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zr)))}function Qo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ei={animationend:Qo("Animation","AnimationEnd"),animationiteration:Qo("Animation","AnimationIteration"),animationstart:Qo("Animation","AnimationStart"),transitionend:Qo("Transition","TransitionEnd")},Fu={},Cy={};pn&&(Cy=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function Rl(t){if(Fu[t])return Fu[t];if(!ei[t])return t;var e=ei[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cy)return Fu[t]=e[n];return t}var Py=Rl("animationend"),ky=Rl("animationiteration"),Ny=Rl("animationstart"),Dy=Rl("transitionend"),Vy=new Map,kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(t,e){Vy.set(t,e),Lr(e,[t])}for(var bu=0;bu<kp.length;bu++){var Uu=kp[bu],uT=Uu.toLowerCase(),cT=Uu[0].toUpperCase()+Uu.slice(1);ar(uT,"on"+cT)}ar(Py,"onAnimationEnd");ar(ky,"onAnimationIteration");ar(Ny,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(Dy,"onTransitionEnd");vi("onMouseEnter",["mouseout","mouseover"]);vi("onMouseLeave",["mouseout","mouseover"]);vi("onPointerEnter",["pointerout","pointerover"]);vi("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hT=new Set("cancel close invalid load scroll toggle".split(" ").concat(gs));function Np(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,uw(r,e,void 0,t),t.currentTarget=null}function Oy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Np(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Np(i,l,h),s=u}}}if(xa)throw t=Sc,xa=!1,Sc=null,t}function he(t,e){var n=e[Lc];n===void 0&&(n=e[Lc]=new Set);var r=t+"__bubble";n.has(r)||(Ly(e,t,2,!1),n.add(r))}function zu(t,e,n){var r=0;e&&(r|=4),Ly(n,t,r,e)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function Hs(t){if(!t[Yo]){t[Yo]=!0,jg.forEach(function(n){n!=="selectionchange"&&(hT.has(n)||zu(n,!1,t),zu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yo]||(e[Yo]=!0,zu("selectionchange",!1,e))}}function Ly(t,e,n,r){switch(yy(e)){case 1:var i=Aw;break;case 4:i=Rw;break;default:i=Fh}n=i.bind(null,e,n,t),i=void 0,!Ic||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ju(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=vr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}ry(function(){var h=s,f=Oh(n),m=[];e:{var y=Vy.get(t);if(y!==void 0){var R=Uh,k=t;switch(t){case"keypress":if(ma(n)===0)break e;case"keydown":case"keyup":R=jw;break;case"focusin":k="focus",R=Lu;break;case"focusout":k="blur",R=Lu;break;case"beforeblur":case"afterblur":R=Lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=_p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=kw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Hw;break;case Py:case ky:case Ny:R=Vw;break;case Dy:R=qw;break;case"scroll":R=Cw;break;case"wheel":R=Gw;break;case"copy":case"cut":case"paste":R=Lw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Ep}var D=(e&4)!==0,x=!D&&t==="scroll",I=D?y!==null?y+"Capture":null:y;D=[];for(var E=h,S;E!==null;){S=E;var V=S.stateNode;if(S.tag===5&&V!==null&&(S=V,I!==null&&(V=bs(E,I),V!=null&&D.push(Ws(E,V,S)))),x)break;E=E.return}0<D.length&&(y=new R(y,k,null,n,f),m.push({event:y,listeners:D}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",y&&n!==wc&&(k=n.relatedTarget||n.fromElement)&&(vr(k)||k[mn]))break e;if((R||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,R?(k=n.relatedTarget||n.toElement,R=h,k=k?vr(k):null,k!==null&&(x=xr(k),k!==x||k.tag!==5&&k.tag!==6)&&(k=null)):(R=null,k=h),R!==k)){if(D=_p,V="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(D=Ep,V="onPointerLeave",I="onPointerEnter",E="pointer"),x=R==null?y:ti(R),S=k==null?y:ti(k),y=new D(V,E+"leave",R,n,f),y.target=x,y.relatedTarget=S,V=null,vr(f)===h&&(D=new D(I,E+"enter",k,n,f),D.target=S,D.relatedTarget=x,V=D),x=V,R&&k)t:{for(D=R,I=k,E=0,S=D;S;S=Wr(S))E++;for(S=0,V=I;V;V=Wr(V))S++;for(;0<E-S;)D=Wr(D),E--;for(;0<S-E;)I=Wr(I),S--;for(;E--;){if(D===I||I!==null&&D===I.alternate)break t;D=Wr(D),I=Wr(I)}D=null}else D=null;R!==null&&Dp(m,y,R,D,!1),k!==null&&x!==null&&Dp(m,x,k,D,!0)}}e:{if(y=h?ti(h):window,R=y.nodeName&&y.nodeName.toLowerCase(),R==="select"||R==="input"&&y.type==="file")var U=tT;else if(Ip(y))if(Iy)U=sT;else{U=rT;var b=nT}else(R=y.nodeName)&&R.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(U=iT);if(U&&(U=U(t,h))){Ty(m,U,n,f);break e}b&&b(t,y,h),t==="focusout"&&(b=y._wrapperState)&&b.controlled&&y.type==="number"&&gc(y,"number",y.value)}switch(b=h?ti(h):window,t){case"focusin":(Ip(b)||b.contentEditable==="true")&&(Zr=b,Pc=h,Rs=null);break;case"focusout":Rs=Pc=Zr=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,Pp(m,n,f);break;case"selectionchange":if(lT)break;case"keydown":case"keyup":Pp(m,n,f)}var v;if(jh)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Jr?Ey(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(vy&&n.locale!=="ko"&&(Jr||g!=="onCompositionStart"?g==="onCompositionEnd"&&Jr&&(v=_y()):(Fn=f,bh="value"in Fn?Fn.value:Fn.textContent,Jr=!0)),b=za(h,g),0<b.length&&(g=new vp(g,t,null,n,f),m.push({event:g,listeners:b}),v?g.data=v:(v=wy(n),v!==null&&(g.data=v)))),(v=Yw?Xw(t,n):Jw(t,n))&&(h=za(h,"onBeforeInput"),0<h.length&&(f=new vp("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=v))}Oy(m,e)})}function Ws(t,e,n){return{instance:t,listener:e,currentTarget:n}}function za(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=bs(t,n),s!=null&&r.unshift(Ws(t,s,i)),s=bs(t,e),s!=null&&r.push(Ws(t,s,i))),t=t.return}return r}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=bs(n,s),u!=null&&o.unshift(Ws(n,u,l))):i||(u=bs(n,s),u!=null&&o.push(Ws(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var dT=/\r\n?/g,fT=/\u0000|\uFFFD/g;function Vp(t){return(typeof t=="string"?t:""+t).replace(dT,`
`).replace(fT,"")}function Xo(t,e,n){if(e=Vp(e),Vp(t)!==e&&n)throw Error(M(425))}function ja(){}var Nc=null,Dc=null;function Vc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Oc=typeof setTimeout=="function"?setTimeout:void 0,pT=typeof clearTimeout=="function"?clearTimeout:void 0,Op=typeof Promise=="function"?Promise:void 0,mT=typeof queueMicrotask=="function"?queueMicrotask:typeof Op<"u"?function(t){return Op.resolve(null).then(t).catch(gT)}:Oc;function gT(t){setTimeout(function(){throw t})}function Bu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),js(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);js(e)}function $n(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fi=Math.random().toString(36).slice(2),jt="__reactFiber$"+Fi,qs="__reactProps$"+Fi,mn="__reactContainer$"+Fi,Lc="__reactEvents$"+Fi,yT="__reactListeners$"+Fi,_T="__reactHandles$"+Fi;function vr(t){var e=t[jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mn]||n[jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lp(t);t!==null;){if(n=t[jt])return n;t=Lp(t)}return e}t=n,n=t.parentNode}return null}function ho(t){return t=t[jt]||t[mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ti(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function Cl(t){return t[qs]||null}var xc=[],ni=-1;function lr(t){return{current:t}}function de(t){0>ni||(t.current=xc[ni],xc[ni]=null,ni--)}function ue(t,e){ni++,xc[ni]=t.current,t.current=e}var tr={},Xe=lr(tr),lt=lr(!1),Rr=tr;function Ei(t,e){var n=t.type.contextTypes;if(!n)return tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ut(t){return t=t.childContextTypes,t!=null}function Ba(){de(lt),de(Xe)}function xp(t,e,n){if(Xe.current!==tr)throw Error(M(168));ue(Xe,e),ue(lt,n)}function xy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,nw(t)||"Unknown",i));return _e({},n,r)}function $a(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Rr=Xe.current,ue(Xe,t),ue(lt,lt.current),!0}function Mp(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=xy(t,e,Rr),r.__reactInternalMemoizedMergedChildContext=t,de(lt),de(Xe),ue(Xe,t)):de(lt),ue(lt,n)}var sn=null,Pl=!1,$u=!1;function My(t){sn===null?sn=[t]:sn.push(t)}function vT(t){Pl=!0,My(t)}function ur(){if(!$u&&sn!==null){$u=!0;var t=0,e=oe;try{var n=sn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}sn=null,Pl=!1}catch(i){throw sn!==null&&(sn=sn.slice(t+1)),ay(Lh,ur),i}finally{oe=e,$u=!1}}return null}var ri=[],ii=0,Ha=null,Wa=0,vt=[],Et=0,Cr=null,on=1,an="";function gr(t,e){ri[ii++]=Wa,ri[ii++]=Ha,Ha=t,Wa=e}function Fy(t,e,n){vt[Et++]=on,vt[Et++]=an,vt[Et++]=Cr,Cr=t;var r=on;t=an;var i=32-Lt(r)-1;r&=~(1<<i),n+=1;var s=32-Lt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,on=1<<32-Lt(e)+i|n<<i|r,an=s+t}else on=1<<s|n<<i|r,an=t}function $h(t){t.return!==null&&(gr(t,1),Fy(t,1,0))}function Hh(t){for(;t===Ha;)Ha=ri[--ii],ri[ii]=null,Wa=ri[--ii],ri[ii]=null;for(;t===Cr;)Cr=vt[--Et],vt[Et]=null,an=vt[--Et],vt[Et]=null,on=vt[--Et],vt[Et]=null}var pt=null,ft=null,fe=!1,Dt=null;function by(t,e){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Fp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pt=t,ft=$n(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pt=t,ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:on,overflow:an}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pt=t,ft=null,!0):!1;default:return!1}}function Mc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fc(t){if(fe){var e=ft;if(e){var n=e;if(!Fp(t,e)){if(Mc(t))throw Error(M(418));e=$n(n.nextSibling);var r=pt;e&&Fp(t,e)?by(r,n):(t.flags=t.flags&-4097|2,fe=!1,pt=t)}}else{if(Mc(t))throw Error(M(418));t.flags=t.flags&-4097|2,fe=!1,pt=t}}}function bp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pt=t}function Jo(t){if(t!==pt)return!1;if(!fe)return bp(t),fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vc(t.type,t.memoizedProps)),e&&(e=ft)){if(Mc(t))throw Uy(),Error(M(418));for(;e;)by(t,e),e=$n(e.nextSibling)}if(bp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ft=$n(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ft=null}}else ft=pt?$n(t.stateNode.nextSibling):null;return!0}function Uy(){for(var t=ft;t;)t=$n(t.nextSibling)}function wi(){ft=pt=null,fe=!1}function Wh(t){Dt===null?Dt=[t]:Dt.push(t)}var ET=Tn.ReactCurrentBatchConfig;function cs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function Zo(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Up(t){var e=t._init;return e(t._payload)}function zy(t){function e(I,E){if(t){var S=I.deletions;S===null?(I.deletions=[E],I.flags|=16):S.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function i(I,E){return I=Kn(I,E),I.index=0,I.sibling=null,I}function s(I,E,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<E?(I.flags|=2,E):S):(I.flags|=2,E)):(I.flags|=1048576,E)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,E,S,V){return E===null||E.tag!==6?(E=Yu(S,I.mode,V),E.return=I,E):(E=i(E,S),E.return=I,E)}function u(I,E,S,V){var U=S.type;return U===Xr?f(I,E,S.props.children,V,S.key):E!==null&&(E.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===kn&&Up(U)===E.type)?(V=i(E,S.props),V.ref=cs(I,E,S),V.return=I,V):(V=Ta(S.type,S.key,S.props,null,I.mode,V),V.ref=cs(I,E,S),V.return=I,V)}function h(I,E,S,V){return E===null||E.tag!==4||E.stateNode.containerInfo!==S.containerInfo||E.stateNode.implementation!==S.implementation?(E=Xu(S,I.mode,V),E.return=I,E):(E=i(E,S.children||[]),E.return=I,E)}function f(I,E,S,V,U){return E===null||E.tag!==7?(E=Sr(S,I.mode,V,U),E.return=I,E):(E=i(E,S),E.return=I,E)}function m(I,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Yu(""+E,I.mode,S),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Bo:return S=Ta(E.type,E.key,E.props,null,I.mode,S),S.ref=cs(I,null,E),S.return=I,S;case Yr:return E=Xu(E,I.mode,S),E.return=I,E;case kn:var V=E._init;return m(I,V(E._payload),S)}if(ps(E)||ss(E))return E=Sr(E,I.mode,S,null),E.return=I,E;Zo(I,E)}return null}function y(I,E,S,V){var U=E!==null?E.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return U!==null?null:l(I,E,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Bo:return S.key===U?u(I,E,S,V):null;case Yr:return S.key===U?h(I,E,S,V):null;case kn:return U=S._init,y(I,E,U(S._payload),V)}if(ps(S)||ss(S))return U!==null?null:f(I,E,S,V,null);Zo(I,S)}return null}function R(I,E,S,V,U){if(typeof V=="string"&&V!==""||typeof V=="number")return I=I.get(S)||null,l(E,I,""+V,U);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Bo:return I=I.get(V.key===null?S:V.key)||null,u(E,I,V,U);case Yr:return I=I.get(V.key===null?S:V.key)||null,h(E,I,V,U);case kn:var b=V._init;return R(I,E,S,b(V._payload),U)}if(ps(V)||ss(V))return I=I.get(S)||null,f(E,I,V,U,null);Zo(E,V)}return null}function k(I,E,S,V){for(var U=null,b=null,v=E,g=E=0,_=null;v!==null&&g<S.length;g++){v.index>g?(_=v,v=null):_=v.sibling;var w=y(I,v,S[g],V);if(w===null){v===null&&(v=_);break}t&&v&&w.alternate===null&&e(I,v),E=s(w,E,g),b===null?U=w:b.sibling=w,b=w,v=_}if(g===S.length)return n(I,v),fe&&gr(I,g),U;if(v===null){for(;g<S.length;g++)v=m(I,S[g],V),v!==null&&(E=s(v,E,g),b===null?U=v:b.sibling=v,b=v);return fe&&gr(I,g),U}for(v=r(I,v);g<S.length;g++)_=R(v,I,g,S[g],V),_!==null&&(t&&_.alternate!==null&&v.delete(_.key===null?g:_.key),E=s(_,E,g),b===null?U=_:b.sibling=_,b=_);return t&&v.forEach(function(A){return e(I,A)}),fe&&gr(I,g),U}function D(I,E,S,V){var U=ss(S);if(typeof U!="function")throw Error(M(150));if(S=U.call(S),S==null)throw Error(M(151));for(var b=U=null,v=E,g=E=0,_=null,w=S.next();v!==null&&!w.done;g++,w=S.next()){v.index>g?(_=v,v=null):_=v.sibling;var A=y(I,v,w.value,V);if(A===null){v===null&&(v=_);break}t&&v&&A.alternate===null&&e(I,v),E=s(A,E,g),b===null?U=A:b.sibling=A,b=A,v=_}if(w.done)return n(I,v),fe&&gr(I,g),U;if(v===null){for(;!w.done;g++,w=S.next())w=m(I,w.value,V),w!==null&&(E=s(w,E,g),b===null?U=w:b.sibling=w,b=w);return fe&&gr(I,g),U}for(v=r(I,v);!w.done;g++,w=S.next())w=R(v,I,g,w.value,V),w!==null&&(t&&w.alternate!==null&&v.delete(w.key===null?g:w.key),E=s(w,E,g),b===null?U=w:b.sibling=w,b=w);return t&&v.forEach(function(P){return e(I,P)}),fe&&gr(I,g),U}function x(I,E,S,V){if(typeof S=="object"&&S!==null&&S.type===Xr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Bo:e:{for(var U=S.key,b=E;b!==null;){if(b.key===U){if(U=S.type,U===Xr){if(b.tag===7){n(I,b.sibling),E=i(b,S.props.children),E.return=I,I=E;break e}}else if(b.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===kn&&Up(U)===b.type){n(I,b.sibling),E=i(b,S.props),E.ref=cs(I,b,S),E.return=I,I=E;break e}n(I,b);break}else e(I,b);b=b.sibling}S.type===Xr?(E=Sr(S.props.children,I.mode,V,S.key),E.return=I,I=E):(V=Ta(S.type,S.key,S.props,null,I.mode,V),V.ref=cs(I,E,S),V.return=I,I=V)}return o(I);case Yr:e:{for(b=S.key;E!==null;){if(E.key===b)if(E.tag===4&&E.stateNode.containerInfo===S.containerInfo&&E.stateNode.implementation===S.implementation){n(I,E.sibling),E=i(E,S.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=Xu(S,I.mode,V),E.return=I,I=E}return o(I);case kn:return b=S._init,x(I,E,b(S._payload),V)}if(ps(S))return k(I,E,S,V);if(ss(S))return D(I,E,S,V);Zo(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,E!==null&&E.tag===6?(n(I,E.sibling),E=i(E,S),E.return=I,I=E):(n(I,E),E=Yu(S,I.mode,V),E.return=I,I=E),o(I)):n(I,E)}return x}var Ti=zy(!0),jy=zy(!1),qa=lr(null),Ka=null,si=null,qh=null;function Kh(){qh=si=Ka=null}function Gh(t){var e=qa.current;de(qa),t._currentValue=e}function bc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function fi(t,e){Ka=t,qh=si=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(at=!0),t.firstContext=null)}function St(t){var e=t._currentValue;if(qh!==t)if(t={context:t,memoizedValue:e,next:null},si===null){if(Ka===null)throw Error(M(308));si=t,Ka.dependencies={lanes:0,firstContext:t}}else si=si.next=t;return e}var Er=null;function Qh(t){Er===null?Er=[t]:Er.push(t)}function By(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qh(e)):(n.next=i.next,i.next=n),e.interleaved=n,gn(t,r)}function gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Nn=!1;function Yh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $y(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,gn(t,n)}return i=r.interleaved,i===null?(e.next=e,Qh(r)):(e.next=i.next,i.next=e),r.interleaved=e,gn(t,n)}function ga(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xh(t,n)}}function zp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ga(t,e,n,r){var i=t.updateQueue;Nn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=h=u=null,l=s;do{var y=l.lane,R=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,D=l;switch(y=e,R=n,D.tag){case 1:if(k=D.payload,typeof k=="function"){m=k.call(R,m,y);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=D.payload,y=typeof k=="function"?k.call(R,m,y):k,y==null)break e;m=_e({},m,y);break e;case 2:Nn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else R={eventTime:R,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=R,u=m):f=f.next=R,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);kr|=o,t.lanes=o,t.memoizedState=m}}function jp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var fo={},$t=lr(fo),Ks=lr(fo),Gs=lr(fo);function wr(t){if(t===fo)throw Error(M(174));return t}function Xh(t,e){switch(ue(Gs,e),ue(Ks,t),ue($t,fo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_c(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_c(e,t)}de($t),ue($t,e)}function Ii(){de($t),de(Ks),de(Gs)}function Hy(t){wr(Gs.current);var e=wr($t.current),n=_c(e,t.type);e!==n&&(ue(Ks,t),ue($t,n))}function Jh(t){Ks.current===t&&(de($t),de(Ks))}var ge=lr(0);function Qa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hu=[];function Zh(){for(var t=0;t<Hu.length;t++)Hu[t]._workInProgressVersionPrimary=null;Hu.length=0}var ya=Tn.ReactCurrentDispatcher,Wu=Tn.ReactCurrentBatchConfig,Pr=0,ye=null,Ce=null,Oe=null,Ya=!1,Cs=!1,Qs=0,wT=0;function We(){throw Error(M(321))}function ed(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ft(t[n],e[n]))return!1;return!0}function td(t,e,n,r,i,s){if(Pr=s,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ya.current=t===null||t.memoizedState===null?AT:RT,t=n(r,i),Cs){s=0;do{if(Cs=!1,Qs=0,25<=s)throw Error(M(301));s+=1,Oe=Ce=null,e.updateQueue=null,ya.current=CT,t=n(r,i)}while(Cs)}if(ya.current=Xa,e=Ce!==null&&Ce.next!==null,Pr=0,Oe=Ce=ye=null,Ya=!1,e)throw Error(M(300));return t}function nd(){var t=Qs!==0;return Qs=0,t}function zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?ye.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function At(){if(Ce===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var e=Oe===null?ye.memoizedState:Oe.next;if(e!==null)Oe=e,Ce=t;else{if(t===null)throw Error(M(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Oe===null?ye.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function Ys(t,e){return typeof e=="function"?e(t):e}function qu(t){var e=At(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=Ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Pr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,ye.lanes|=f,kr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Ft(r,e.memoizedState)||(at=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ye.lanes|=s,kr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ku(t){var e=At(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ft(s,e.memoizedState)||(at=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Wy(){}function qy(t,e){var n=ye,r=At(),i=e(),s=!Ft(r.memoizedState,i);if(s&&(r.memoizedState=i,at=!0),r=r.queue,rd(Qy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,Xs(9,Gy.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(M(349));Pr&30||Ky(n,e,i)}return i}function Ky(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gy(t,e,n,r){e.value=n,e.getSnapshot=r,Yy(e)&&Xy(t)}function Qy(t,e,n){return n(function(){Yy(e)&&Xy(t)})}function Yy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ft(t,n)}catch{return!0}}function Xy(t){var e=gn(t,1);e!==null&&xt(e,t,1,-1)}function Bp(t){var e=zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ys,lastRenderedState:t},e.queue=t,t=t.dispatch=ST.bind(null,ye,t),[e.memoizedState,t]}function Xs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Jy(){return At().memoizedState}function _a(t,e,n,r){var i=zt();ye.flags|=t,i.memoizedState=Xs(1|e,n,void 0,r===void 0?null:r)}function kl(t,e,n,r){var i=At();r=r===void 0?null:r;var s=void 0;if(Ce!==null){var o=Ce.memoizedState;if(s=o.destroy,r!==null&&ed(r,o.deps)){i.memoizedState=Xs(e,n,s,r);return}}ye.flags|=t,i.memoizedState=Xs(1|e,n,s,r)}function $p(t,e){return _a(8390656,8,t,e)}function rd(t,e){return kl(2048,8,t,e)}function Zy(t,e){return kl(4,2,t,e)}function e_(t,e){return kl(4,4,t,e)}function t_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function n_(t,e,n){return n=n!=null?n.concat([t]):null,kl(4,4,t_.bind(null,e,t),n)}function id(){}function r_(t,e){var n=At();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ed(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function i_(t,e){var n=At();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ed(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function s_(t,e,n){return Pr&21?(Ft(n,e)||(n=cy(),ye.lanes|=n,kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,at=!0),t.memoizedState=n)}function TT(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=Wu.transition;Wu.transition={};try{t(!1),e()}finally{oe=n,Wu.transition=r}}function o_(){return At().memoizedState}function IT(t,e,n){var r=qn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},a_(t))l_(e,n);else if(n=By(t,e,n,r),n!==null){var i=nt();xt(n,t,r,i),u_(n,e,r)}}function ST(t,e,n){var r=qn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(a_(t))l_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ft(l,o)){var u=e.interleaved;u===null?(i.next=i,Qh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=By(t,e,i,r),n!==null&&(i=nt(),xt(n,t,r,i),u_(n,e,r))}}function a_(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function l_(t,e){Cs=Ya=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function u_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xh(t,n)}}var Xa={readContext:St,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},AT={readContext:St,useCallback:function(t,e){return zt().memoizedState=[t,e===void 0?null:e],t},useContext:St,useEffect:$p,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_a(4194308,4,t_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _a(4194308,4,t,e)},useInsertionEffect:function(t,e){return _a(4,2,t,e)},useMemo:function(t,e){var n=zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=IT.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=zt();return t={current:t},e.memoizedState=t},useState:Bp,useDebugValue:id,useDeferredValue:function(t){return zt().memoizedState=t},useTransition:function(){var t=Bp(!1),e=t[0];return t=TT.bind(null,t[1]),zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,i=zt();if(fe){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),Le===null)throw Error(M(349));Pr&30||Ky(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$p(Qy.bind(null,r,s,t),[t]),r.flags|=2048,Xs(9,Gy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=zt(),e=Le.identifierPrefix;if(fe){var n=an,r=on;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},RT={readContext:St,useCallback:r_,useContext:St,useEffect:rd,useImperativeHandle:n_,useInsertionEffect:Zy,useLayoutEffect:e_,useMemo:i_,useReducer:qu,useRef:Jy,useState:function(){return qu(Ys)},useDebugValue:id,useDeferredValue:function(t){var e=At();return s_(e,Ce.memoizedState,t)},useTransition:function(){var t=qu(Ys)[0],e=At().memoizedState;return[t,e]},useMutableSource:Wy,useSyncExternalStore:qy,useId:o_,unstable_isNewReconciler:!1},CT={readContext:St,useCallback:r_,useContext:St,useEffect:rd,useImperativeHandle:n_,useInsertionEffect:Zy,useLayoutEffect:e_,useMemo:i_,useReducer:Ku,useRef:Jy,useState:function(){return Ku(Ys)},useDebugValue:id,useDeferredValue:function(t){var e=At();return Ce===null?e.memoizedState=t:s_(e,Ce.memoizedState,t)},useTransition:function(){var t=Ku(Ys)[0],e=At().memoizedState;return[t,e]},useMutableSource:Wy,useSyncExternalStore:qy,useId:o_,unstable_isNewReconciler:!1};function kt(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Uc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nl={isMounted:function(t){return(t=t._reactInternals)?xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=nt(),i=qn(t),s=dn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Hn(t,s,i),e!==null&&(xt(e,t,i,r),ga(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=nt(),i=qn(t),s=dn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hn(t,s,i),e!==null&&(xt(e,t,i,r),ga(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nt(),r=qn(t),i=dn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Hn(t,i,r),e!==null&&(xt(e,t,r,n),ga(e,t,r))}};function Hp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!$s(n,r)||!$s(i,s):!0}function c_(t,e,n){var r=!1,i=tr,s=e.contextType;return typeof s=="object"&&s!==null?s=St(s):(i=ut(e)?Rr:Xe.current,r=e.contextTypes,s=(r=r!=null)?Ei(t,i):tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Nl.enqueueReplaceState(e,e.state,null)}function zc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Yh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=St(s):(s=ut(e)?Rr:Xe.current,i.context=Ei(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Uc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Nl.enqueueReplaceState(i,i.state,null),Ga(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Si(t,e){try{var n="",r=e;do n+=tw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function jc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var PT=typeof WeakMap=="function"?WeakMap:Map;function h_(t,e,n){n=dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Za||(Za=!0,Xc=r),jc(t,e)},n}function d_(t,e,n){n=dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){jc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jc(t,e),typeof r!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new PT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=BT.bind(null,t,e,n),e.then(t,t))}function Kp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=dn(-1,1),e.tag=2,Hn(n,e,1))),n.lanes|=1),t)}var kT=Tn.ReactCurrentOwner,at=!1;function tt(t,e,n,r){e.child=t===null?jy(e,null,n,r):Ti(e,t.child,n,r)}function Qp(t,e,n,r,i){n=n.render;var s=e.ref;return fi(e,i),r=td(t,e,n,r,s,i),n=nd(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yn(t,e,i)):(fe&&n&&$h(e),e.flags|=1,tt(t,e,r,i),e.child)}function Yp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!dd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,f_(t,e,s,r,i)):(t=Ta(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$s,n(o,r)&&t.ref===e.ref)return yn(t,e,i)}return e.flags|=1,t=Kn(s,r),t.ref=e.ref,t.return=e,e.child=t}function f_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if($s(s,r)&&t.ref===e.ref)if(at=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(at=!0);else return e.lanes=t.lanes,yn(t,e,i)}return Bc(t,e,n,r,i)}function p_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(ai,dt),dt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ue(ai,dt),dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ue(ai,dt),dt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ue(ai,dt),dt|=r;return tt(t,e,i,n),e.child}function m_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bc(t,e,n,r,i){var s=ut(n)?Rr:Xe.current;return s=Ei(e,s),fi(e,i),n=td(t,e,n,r,s,i),r=nd(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yn(t,e,i)):(fe&&r&&$h(e),e.flags|=1,tt(t,e,n,i),e.child)}function Xp(t,e,n,r,i){if(ut(n)){var s=!0;$a(e)}else s=!1;if(fi(e,i),e.stateNode===null)va(t,e),c_(e,n,r),zc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=St(h):(h=ut(n)?Rr:Xe.current,h=Ei(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Wp(e,o,r,h),Nn=!1;var y=e.memoizedState;o.state=y,Ga(e,r,o,i),u=e.memoizedState,l!==r||y!==u||lt.current||Nn?(typeof f=="function"&&(Uc(e,n,f,r),u=e.memoizedState),(l=Nn||Hp(e,n,l,r,y,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$y(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:kt(e.type,l),o.props=h,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=St(u):(u=ut(n)?Rr:Xe.current,u=Ei(e,u));var R=n.getDerivedStateFromProps;(f=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&Wp(e,o,r,u),Nn=!1,y=e.memoizedState,o.state=y,Ga(e,r,o,i);var k=e.memoizedState;l!==m||y!==k||lt.current||Nn?(typeof R=="function"&&(Uc(e,n,R,r),k=e.memoizedState),(h=Nn||Hp(e,n,h,r,y,k,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return $c(t,e,n,r,s,i)}function $c(t,e,n,r,i,s){m_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Mp(e,n,!1),yn(t,e,s);r=e.stateNode,kT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ti(e,t.child,null,s),e.child=Ti(e,null,l,s)):tt(t,e,l,s),e.memoizedState=r.state,i&&Mp(e,n,!0),e.child}function g_(t){var e=t.stateNode;e.pendingContext?xp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xp(t,e.context,!1),Xh(t,e.containerInfo)}function Jp(t,e,n,r,i){return wi(),Wh(i),e.flags|=256,tt(t,e,n,r),e.child}var Hc={dehydrated:null,treeContext:null,retryLane:0};function Wc(t){return{baseLanes:t,cachePool:null,transitions:null}}function y_(t,e,n){var r=e.pendingProps,i=ge.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ue(ge,i&1),t===null)return Fc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ol(o,r,0,null),t=Sr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Wc(n),e.memoizedState=Hc,t):sd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return NT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Kn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Kn(l,s):(s=Sr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Wc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Hc,r}return s=t.child,t=s.sibling,r=Kn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function sd(t,e){return e=Ol({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ea(t,e,n,r){return r!==null&&Wh(r),Ti(e,t.child,null,n),t=sd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Gu(Error(M(422))),ea(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ol({mode:"visible",children:r.children},i,0,null),s=Sr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ti(e,t.child,null,o),e.child.memoizedState=Wc(o),e.memoizedState=Hc,s);if(!(e.mode&1))return ea(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=Gu(s,r,void 0),ea(t,e,o,r)}if(l=(o&t.childLanes)!==0,at||l){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,gn(t,i),xt(r,t,i,-1))}return hd(),r=Gu(Error(M(421))),ea(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=$T.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ft=$n(i.nextSibling),pt=e,fe=!0,Dt=null,t!==null&&(vt[Et++]=on,vt[Et++]=an,vt[Et++]=Cr,on=t.id,an=t.overflow,Cr=e),e=sd(e,r.children),e.flags|=4096,e)}function Zp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),bc(t.return,e,n)}function Qu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function __(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(tt(t,e,r.children,n),r=ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zp(t,n,e);else if(t.tag===19)Zp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Qa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Qu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Qa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Qu(e,!0,n,null,s);break;case"together":Qu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function va(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=Kn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Kn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function DT(t,e,n){switch(e.tag){case 3:g_(e),wi();break;case 5:Hy(e);break;case 1:ut(e.type)&&$a(e);break;case 4:Xh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ue(qa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ue(ge,ge.current&1),e.flags|=128,null):n&e.child.childLanes?y_(t,e,n):(ue(ge,ge.current&1),t=yn(t,e,n),t!==null?t.sibling:null);ue(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return __(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(ge,ge.current),r)break;return null;case 22:case 23:return e.lanes=0,p_(t,e,n)}return yn(t,e,n)}var v_,qc,E_,w_;v_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qc=function(){};E_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,wr($t.current);var s=null;switch(n){case"input":i=pc(t,i),r=pc(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=yc(t,i),r=yc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ja)}vc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ms.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ms.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&he("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};w_=function(t,e,n,r){n!==r&&(e.flags|=4)};function hs(t,e){if(!fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function VT(t,e,n){var r=e.pendingProps;switch(Hh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(e),null;case 1:return ut(e.type)&&Ba(),qe(e),null;case 3:return r=e.stateNode,Ii(),de(lt),de(Xe),Zh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Jo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dt!==null&&(eh(Dt),Dt=null))),qc(t,e),qe(e),null;case 5:Jh(e);var i=wr(Gs.current);if(n=e.type,t!==null&&e.stateNode!=null)E_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return qe(e),null}if(t=wr($t.current),Jo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[jt]=e,r[qs]=s,t=(e.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<gs.length;i++)he(gs[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":lp(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":cp(r,s),he("invalid",r)}vc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Xo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Xo(r.textContent,l,t),i=["children",""+l]):Ms.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":$o(r),up(r,s,!0);break;case"textarea":$o(r),hp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ja)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Qg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[jt]=e,t[qs]=r,v_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ec(n,r),n){case"dialog":he("cancel",t),he("close",t),i=r;break;case"iframe":case"object":case"embed":he("load",t),i=r;break;case"video":case"audio":for(i=0;i<gs.length;i++)he(gs[i],t);i=r;break;case"source":he("error",t),i=r;break;case"img":case"image":case"link":he("error",t),he("load",t),i=r;break;case"details":he("toggle",t),i=r;break;case"input":lp(t,r),i=pc(t,r),he("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),he("invalid",t);break;case"textarea":cp(t,r),i=yc(t,r),he("invalid",t);break;default:i=r}vc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Jg(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Yg(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Fs(t,u):typeof u=="number"&&Fs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ms.hasOwnProperty(s)?u!=null&&s==="onScroll"&&he("scroll",t):u!=null&&kh(t,s,u,o))}switch(n){case"input":$o(t),up(t,r,!1);break;case"textarea":$o(t),hp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+er(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ui(t,!!r.multiple,s,!1):r.defaultValue!=null&&ui(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ja)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qe(e),null;case 6:if(t&&e.stateNode!=null)w_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=wr(Gs.current),wr($t.current),Jo(e)){if(r=e.stateNode,n=e.memoizedProps,r[jt]=e,(s=r.nodeValue!==n)&&(t=pt,t!==null))switch(t.tag){case 3:Xo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jt]=e,e.stateNode=r}return qe(e),null;case 13:if(de(ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(fe&&ft!==null&&e.mode&1&&!(e.flags&128))Uy(),wi(),e.flags|=98560,s=!1;else if(s=Jo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[jt]=e}else wi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qe(e),s=!1}else Dt!==null&&(eh(Dt),Dt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ge.current&1?ke===0&&(ke=3):hd())),e.updateQueue!==null&&(e.flags|=4),qe(e),null);case 4:return Ii(),qc(t,e),t===null&&Hs(e.stateNode.containerInfo),qe(e),null;case 10:return Gh(e.type._context),qe(e),null;case 17:return ut(e.type)&&Ba(),qe(e),null;case 19:if(de(ge),s=e.memoizedState,s===null)return qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)hs(s,!1);else{if(ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Qa(t),o!==null){for(e.flags|=128,hs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ue(ge,ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&Se()>Ai&&(e.flags|=128,r=!0,hs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Qa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),hs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!fe)return qe(e),null}else 2*Se()-s.renderingStartTime>Ai&&n!==1073741824&&(e.flags|=128,r=!0,hs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Se(),e.sibling=null,n=ge.current,ue(ge,r?n&1|2:n&1),e):(qe(e),null);case 22:case 23:return cd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?dt&1073741824&&(qe(e),e.subtreeFlags&6&&(e.flags|=8192)):qe(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function OT(t,e){switch(Hh(e),e.tag){case 1:return ut(e.type)&&Ba(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ii(),de(lt),de(Xe),Zh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jh(e),null;case 13:if(de(ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));wi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(ge),null;case 4:return Ii(),null;case 10:return Gh(e.type._context),null;case 22:case 23:return cd(),null;case 24:return null;default:return null}}var ta=!1,Qe=!1,LT=typeof WeakSet=="function"?WeakSet:Set,B=null;function oi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(t,e,r)}else n.current=null}function Kc(t,e,n){try{n()}catch(r){we(t,e,r)}}var em=!1;function xT(t,e){if(Nc=ba,t=Ry(),Bh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,y=null;t:for(;;){for(var R;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(R=m.firstChild)!==null;)y=m,m=R;for(;;){if(m===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++f===r&&(u=o),(R=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dc={focusedElem:t,selectionRange:n},ba=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var D=k.memoizedProps,x=k.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?D:kt(e.type,D),x);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(V){we(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return k=em,em=!1,k}function Ps(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kc(e,n,s)}i=i.next}while(i!==r)}}function Dl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Gc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function T_(t){var e=t.alternate;e!==null&&(t.alternate=null,T_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jt],delete e[qs],delete e[Lc],delete e[yT],delete e[_T])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function I_(t){return t.tag===5||t.tag===3||t.tag===4}function tm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ja));else if(r!==4&&(t=t.child,t!==null))for(Qc(t,e,n),t=t.sibling;t!==null;)Qc(t,e,n),t=t.sibling}function Yc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yc(t,e,n),t=t.sibling;t!==null;)Yc(t,e,n),t=t.sibling}var Me=null,Nt=!1;function Cn(t,e,n){for(n=n.child;n!==null;)S_(t,e,n),n=n.sibling}function S_(t,e,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Il,n)}catch{}switch(n.tag){case 5:Qe||oi(n,e);case 6:var r=Me,i=Nt;Me=null,Cn(t,e,n),Me=r,Nt=i,Me!==null&&(Nt?(t=Me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(Nt?(t=Me,n=n.stateNode,t.nodeType===8?Bu(t.parentNode,n):t.nodeType===1&&Bu(t,n),js(t)):Bu(Me,n.stateNode));break;case 4:r=Me,i=Nt,Me=n.stateNode.containerInfo,Nt=!0,Cn(t,e,n),Me=r,Nt=i;break;case 0:case 11:case 14:case 15:if(!Qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kc(n,e,o),i=i.next}while(i!==r)}Cn(t,e,n);break;case 1:if(!Qe&&(oi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){we(n,e,l)}Cn(t,e,n);break;case 21:Cn(t,e,n);break;case 22:n.mode&1?(Qe=(r=Qe)||n.memoizedState!==null,Cn(t,e,n),Qe=r):Cn(t,e,n);break;default:Cn(t,e,n)}}function nm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LT),e.forEach(function(r){var i=HT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Me=l.stateNode,Nt=!1;break e;case 3:Me=l.stateNode.containerInfo,Nt=!0;break e;case 4:Me=l.stateNode.containerInfo,Nt=!0;break e}l=l.return}if(Me===null)throw Error(M(160));S_(s,o,i),Me=null,Nt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){we(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)A_(e,t),e=e.sibling}function A_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pt(e,t),Ut(t),r&4){try{Ps(3,t,t.return),Dl(3,t)}catch(D){we(t,t.return,D)}try{Ps(5,t,t.return)}catch(D){we(t,t.return,D)}}break;case 1:Pt(e,t),Ut(t),r&512&&n!==null&&oi(n,n.return);break;case 5:if(Pt(e,t),Ut(t),r&512&&n!==null&&oi(n,n.return),t.flags&32){var i=t.stateNode;try{Fs(i,"")}catch(D){we(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Kg(i,s),Ec(l,o);var h=Ec(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Jg(i,m):f==="dangerouslySetInnerHTML"?Yg(i,m):f==="children"?Fs(i,m):kh(i,f,m,h)}switch(l){case"input":mc(i,s);break;case"textarea":Gg(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?ui(i,!!s.multiple,R,!1):y!==!!s.multiple&&(s.defaultValue!=null?ui(i,!!s.multiple,s.defaultValue,!0):ui(i,!!s.multiple,s.multiple?[]:"",!1))}i[qs]=s}catch(D){we(t,t.return,D)}}break;case 6:if(Pt(e,t),Ut(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){we(t,t.return,D)}}break;case 3:if(Pt(e,t),Ut(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{js(e.containerInfo)}catch(D){we(t,t.return,D)}break;case 4:Pt(e,t),Ut(t);break;case 13:Pt(e,t),Ut(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ld=Se())),r&4&&nm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Qe=(h=Qe)||f,Pt(e,t),Qe=h):Pt(e,t),Ut(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(B=t,f=t.child;f!==null;){for(m=B=f;B!==null;){switch(y=B,R=y.child,y.tag){case 0:case 11:case 14:case 15:Ps(4,y,y.return);break;case 1:oi(y,y.return);var k=y.stateNode;if(typeof k.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(D){we(r,n,D)}}break;case 5:oi(y,y.return);break;case 22:if(y.memoizedState!==null){im(m);continue}}R!==null?(R.return=y,B=R):im(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Xg("display",o))}catch(D){we(t,t.return,D)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(D){we(t,t.return,D)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Pt(e,t),Ut(t),r&4&&nm(t);break;case 21:break;default:Pt(e,t),Ut(t)}}function Ut(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(I_(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fs(i,""),r.flags&=-33);var s=tm(t);Yc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=tm(t);Qc(t,l,o);break;default:throw Error(M(161))}}catch(u){we(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function MT(t,e,n){B=t,R_(t)}function R_(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ta;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Qe;l=ta;var h=Qe;if(ta=o,(Qe=u)&&!h)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?sm(i):u!==null?(u.return=o,B=u):sm(i);for(;s!==null;)B=s,R_(s),s=s.sibling;B=i,ta=l,Qe=h}rm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):rm(t)}}function rm(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qe||Dl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jp(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&js(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Qe||e.flags&512&&Gc(e)}catch(y){we(e,e.return,y)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function im(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function sm(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dl(4,e)}catch(u){we(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){we(e,i,u)}}var s=e.return;try{Gc(e)}catch(u){we(e,s,u)}break;case 5:var o=e.return;try{Gc(e)}catch(u){we(e,o,u)}}}catch(u){we(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var FT=Math.ceil,Ja=Tn.ReactCurrentDispatcher,od=Tn.ReactCurrentOwner,It=Tn.ReactCurrentBatchConfig,re=0,Le=null,Re=null,Ue=0,dt=0,ai=lr(0),ke=0,Js=null,kr=0,Vl=0,ad=0,ks=null,ot=null,ld=0,Ai=1/0,rn=null,Za=!1,Xc=null,Wn=null,na=!1,bn=null,el=0,Ns=0,Jc=null,Ea=-1,wa=0;function nt(){return re&6?Se():Ea!==-1?Ea:Ea=Se()}function qn(t){return t.mode&1?re&2&&Ue!==0?Ue&-Ue:ET.transition!==null?(wa===0&&(wa=cy()),wa):(t=oe,t!==0||(t=window.event,t=t===void 0?16:yy(t.type)),t):1}function xt(t,e,n,r){if(50<Ns)throw Ns=0,Jc=null,Error(M(185));uo(t,n,r),(!(re&2)||t!==Le)&&(t===Le&&(!(re&2)&&(Vl|=n),ke===4&&Vn(t,Ue)),ct(t,r),n===1&&re===0&&!(e.mode&1)&&(Ai=Se()+500,Pl&&ur()))}function ct(t,e){var n=t.callbackNode;Ew(t,e);var r=Fa(t,t===Le?Ue:0);if(r===0)n!==null&&pp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pp(n),e===1)t.tag===0?vT(om.bind(null,t)):My(om.bind(null,t)),mT(function(){!(re&6)&&ur()}),n=null;else{switch(hy(r)){case 1:n=Lh;break;case 4:n=ly;break;case 16:n=Ma;break;case 536870912:n=uy;break;default:n=Ma}n=L_(n,C_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function C_(t,e){if(Ea=-1,wa=0,re&6)throw Error(M(327));var n=t.callbackNode;if(pi()&&t.callbackNode!==n)return null;var r=Fa(t,t===Le?Ue:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=tl(t,r);else{e=r;var i=re;re|=2;var s=k_();(Le!==t||Ue!==e)&&(rn=null,Ai=Se()+500,Ir(t,e));do try{zT();break}catch(l){P_(t,l)}while(!0);Kh(),Ja.current=s,re=i,Re!==null?e=0:(Le=null,Ue=0,e=ke)}if(e!==0){if(e===2&&(i=Ac(t),i!==0&&(r=i,e=Zc(t,i))),e===1)throw n=Js,Ir(t,0),Vn(t,r),ct(t,Se()),n;if(e===6)Vn(t,r);else{if(i=t.current.alternate,!(r&30)&&!bT(i)&&(e=tl(t,r),e===2&&(s=Ac(t),s!==0&&(r=s,e=Zc(t,s))),e===1))throw n=Js,Ir(t,0),Vn(t,r),ct(t,Se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:yr(t,ot,rn);break;case 3:if(Vn(t,r),(r&130023424)===r&&(e=ld+500-Se(),10<e)){if(Fa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Oc(yr.bind(null,t,ot,rn),e);break}yr(t,ot,rn);break;case 4:if(Vn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Lt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*FT(r/1960))-r,10<r){t.timeoutHandle=Oc(yr.bind(null,t,ot,rn),r);break}yr(t,ot,rn);break;case 5:yr(t,ot,rn);break;default:throw Error(M(329))}}}return ct(t,Se()),t.callbackNode===n?C_.bind(null,t):null}function Zc(t,e){var n=ks;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=tl(t,e),t!==2&&(e=ot,ot=n,e!==null&&eh(e)),t}function eh(t){ot===null?ot=t:ot.push.apply(ot,t)}function bT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ft(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vn(t,e){for(e&=~ad,e&=~Vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Lt(e),r=1<<n;t[n]=-1,e&=~r}}function om(t){if(re&6)throw Error(M(327));pi();var e=Fa(t,0);if(!(e&1))return ct(t,Se()),null;var n=tl(t,e);if(t.tag!==0&&n===2){var r=Ac(t);r!==0&&(e=r,n=Zc(t,r))}if(n===1)throw n=Js,Ir(t,0),Vn(t,e),ct(t,Se()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yr(t,ot,rn),ct(t,Se()),null}function ud(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Ai=Se()+500,Pl&&ur())}}function Nr(t){bn!==null&&bn.tag===0&&!(re&6)&&pi();var e=re;re|=1;var n=It.transition,r=oe;try{if(It.transition=null,oe=1,t)return t()}finally{oe=r,It.transition=n,re=e,!(re&6)&&ur()}}function cd(){dt=ai.current,de(ai)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,pT(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Hh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ba();break;case 3:Ii(),de(lt),de(Xe),Zh();break;case 5:Jh(r);break;case 4:Ii();break;case 13:de(ge);break;case 19:de(ge);break;case 10:Gh(r.type._context);break;case 22:case 23:cd()}n=n.return}if(Le=t,Re=t=Kn(t.current,null),Ue=dt=e,ke=0,Js=null,ad=Vl=kr=0,ot=ks=null,Er!==null){for(e=0;e<Er.length;e++)if(n=Er[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Er=null}return t}function P_(t,e){do{var n=Re;try{if(Kh(),ya.current=Xa,Ya){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ya=!1}if(Pr=0,Oe=Ce=ye=null,Cs=!1,Qs=0,od.current=null,n===null||n.return===null){ke=1,Js=e,Re=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ue,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var R=Kp(o);if(R!==null){R.flags&=-257,Gp(R,o,l,s,e),R.mode&1&&qp(s,h,e),e=R,u=h;var k=e.updateQueue;if(k===null){var D=new Set;D.add(u),e.updateQueue=D}else k.add(u);break e}else{if(!(e&1)){qp(s,h,e),hd();break e}u=Error(M(426))}}else if(fe&&l.mode&1){var x=Kp(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Gp(x,o,l,s,e),Wh(Si(u,l));break e}}s=u=Si(u,l),ke!==4&&(ke=2),ks===null?ks=[s]:ks.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=h_(s,u,e);zp(s,I);break e;case 1:l=u;var E=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Wn===null||!Wn.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=d_(s,l,e);zp(s,V);break e}}s=s.return}while(s!==null)}D_(n)}catch(U){e=U,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function k_(){var t=Ja.current;return Ja.current=Xa,t===null?Xa:t}function hd(){(ke===0||ke===3||ke===2)&&(ke=4),Le===null||!(kr&268435455)&&!(Vl&268435455)||Vn(Le,Ue)}function tl(t,e){var n=re;re|=2;var r=k_();(Le!==t||Ue!==e)&&(rn=null,Ir(t,e));do try{UT();break}catch(i){P_(t,i)}while(!0);if(Kh(),re=n,Ja.current=r,Re!==null)throw Error(M(261));return Le=null,Ue=0,ke}function UT(){for(;Re!==null;)N_(Re)}function zT(){for(;Re!==null&&!hw();)N_(Re)}function N_(t){var e=O_(t.alternate,t,dt);t.memoizedProps=t.pendingProps,e===null?D_(t):Re=e,od.current=null}function D_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=OT(n,e),n!==null){n.flags&=32767,Re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ke=6,Re=null;return}}else if(n=VT(n,e,dt),n!==null){Re=n;return}if(e=e.sibling,e!==null){Re=e;return}Re=e=t}while(e!==null);ke===0&&(ke=5)}function yr(t,e,n){var r=oe,i=It.transition;try{It.transition=null,oe=1,jT(t,e,n,r)}finally{It.transition=i,oe=r}return null}function jT(t,e,n,r){do pi();while(bn!==null);if(re&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ww(t,s),t===Le&&(Re=Le=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||na||(na=!0,L_(Ma,function(){return pi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=It.transition,It.transition=null;var o=oe;oe=1;var l=re;re|=4,od.current=null,xT(t,n),A_(n,t),aT(Dc),ba=!!Nc,Dc=Nc=null,t.current=n,MT(n),dw(),re=l,oe=o,It.transition=s}else t.current=n;if(na&&(na=!1,bn=t,el=i),s=t.pendingLanes,s===0&&(Wn=null),mw(n.stateNode),ct(t,Se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Za)throw Za=!1,t=Xc,Xc=null,t;return el&1&&t.tag!==0&&pi(),s=t.pendingLanes,s&1?t===Jc?Ns++:(Ns=0,Jc=t):Ns=0,ur(),null}function pi(){if(bn!==null){var t=hy(el),e=It.transition,n=oe;try{if(It.transition=null,oe=16>t?16:t,bn===null)var r=!1;else{if(t=bn,bn=null,el=0,re&6)throw Error(M(331));var i=re;for(re|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(B=h;B!==null;){var f=B;switch(f.tag){case 0:case 11:case 15:Ps(8,f,s)}var m=f.child;if(m!==null)m.return=f,B=m;else for(;B!==null;){f=B;var y=f.sibling,R=f.return;if(T_(f),f===h){B=null;break}if(y!==null){y.return=R,B=y;break}B=R}}}var k=s.alternate;if(k!==null){var D=k.child;if(D!==null){k.child=null;do{var x=D.sibling;D.sibling=null,D=x}while(D!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ps(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,B=I;break e}B=s.return}}var E=t.current;for(B=E;B!==null;){o=B;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,B=S;else e:for(o=E;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Dl(9,l)}}catch(U){we(l,l.return,U)}if(l===o){B=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,B=V;break e}B=l.return}}if(re=i,ur(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Il,t)}catch{}r=!0}return r}finally{oe=n,It.transition=e}}return!1}function am(t,e,n){e=Si(n,e),e=h_(t,e,1),t=Hn(t,e,1),e=nt(),t!==null&&(uo(t,1,e),ct(t,e))}function we(t,e,n){if(t.tag===3)am(t,t,n);else for(;e!==null;){if(e.tag===3){am(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wn===null||!Wn.has(r))){t=Si(n,t),t=d_(e,t,1),e=Hn(e,t,1),t=nt(),e!==null&&(uo(e,1,t),ct(e,t));break}}e=e.return}}function BT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=nt(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(Ue&n)===n&&(ke===4||ke===3&&(Ue&130023424)===Ue&&500>Se()-ld?Ir(t,0):ad|=n),ct(t,e)}function V_(t,e){e===0&&(t.mode&1?(e=qo,qo<<=1,!(qo&130023424)&&(qo=4194304)):e=1);var n=nt();t=gn(t,e),t!==null&&(uo(t,e,n),ct(t,n))}function $T(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),V_(t,n)}function HT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),V_(t,n)}var O_;O_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||lt.current)at=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return at=!1,DT(t,e,n);at=!!(t.flags&131072)}else at=!1,fe&&e.flags&1048576&&Fy(e,Wa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;va(t,e),t=e.pendingProps;var i=Ei(e,Xe.current);fi(e,n),i=td(null,e,r,t,i,n);var s=nd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ut(r)?(s=!0,$a(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yh(e),i.updater=Nl,e.stateNode=i,i._reactInternals=e,zc(e,r,t,n),e=$c(null,e,r,!0,s,n)):(e.tag=0,fe&&s&&$h(e),tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(va(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=qT(r),t=kt(r,t),i){case 0:e=Bc(null,e,r,t,n);break e;case 1:e=Xp(null,e,r,t,n);break e;case 11:e=Qp(null,e,r,t,n);break e;case 14:e=Yp(null,e,r,kt(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Bc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Xp(t,e,r,i,n);case 3:e:{if(g_(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,$y(t,e),Ga(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Si(Error(M(423)),e),e=Jp(t,e,r,n,i);break e}else if(r!==i){i=Si(Error(M(424)),e),e=Jp(t,e,r,n,i);break e}else for(ft=$n(e.stateNode.containerInfo.firstChild),pt=e,fe=!0,Dt=null,n=jy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wi(),r===i){e=yn(t,e,n);break e}tt(t,e,r,n)}e=e.child}return e;case 5:return Hy(e),t===null&&Fc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vc(r,i)?o=null:s!==null&&Vc(r,s)&&(e.flags|=32),m_(t,e),tt(t,e,o,n),e.child;case 6:return t===null&&Fc(e),null;case 13:return y_(t,e,n);case 4:return Xh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ti(e,null,r,n):tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Qp(t,e,r,i,n);case 7:return tt(t,e,e.pendingProps,n),e.child;case 8:return tt(t,e,e.pendingProps.children,n),e.child;case 12:return tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ue(qa,r._currentValue),r._currentValue=o,s!==null)if(Ft(s.value,o)){if(s.children===i.children&&!lt.current){e=yn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=dn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),bc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),bc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,fi(e,n),i=St(i),r=r(i),e.flags|=1,tt(t,e,r,n),e.child;case 14:return r=e.type,i=kt(r,e.pendingProps),i=kt(r.type,i),Yp(t,e,r,i,n);case 15:return f_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),va(t,e),e.tag=1,ut(r)?(t=!0,$a(e)):t=!1,fi(e,n),c_(e,r,i),zc(e,r,i,n),$c(null,e,r,!0,t,n);case 19:return __(t,e,n);case 22:return p_(t,e,n)}throw Error(M(156,e.tag))};function L_(t,e){return ay(t,e)}function WT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(t,e,n,r){return new WT(t,e,n,r)}function dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qT(t){if(typeof t=="function")return dd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dh)return 11;if(t===Vh)return 14}return 2}function Kn(t,e){var n=t.alternate;return n===null?(n=Tt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ta(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")dd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xr:return Sr(n.children,i,s,e);case Nh:o=8,i|=8;break;case cc:return t=Tt(12,n,e,i|2),t.elementType=cc,t.lanes=s,t;case hc:return t=Tt(13,n,e,i),t.elementType=hc,t.lanes=s,t;case dc:return t=Tt(19,n,e,i),t.elementType=dc,t.lanes=s,t;case Hg:return Ol(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Bg:o=10;break e;case $g:o=9;break e;case Dh:o=11;break e;case Vh:o=14;break e;case kn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=Tt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Sr(t,e,n,r){return t=Tt(7,t,r,e),t.lanes=n,t}function Ol(t,e,n,r){return t=Tt(22,t,r,e),t.elementType=Hg,t.lanes=n,t.stateNode={isHidden:!1},t}function Yu(t,e,n){return t=Tt(6,t,null,e),t.lanes=n,t}function Xu(t,e,n){return e=Tt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function KT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Du(0),this.expirationTimes=Du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Du(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fd(t,e,n,r,i,s,o,l,u){return t=new KT(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yh(s),t}function GT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function x_(t){if(!t)return tr;t=t._reactInternals;e:{if(xr(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(ut(n))return xy(t,n,e)}return e}function M_(t,e,n,r,i,s,o,l,u){return t=fd(n,r,!0,t,i,s,o,l,u),t.context=x_(null),n=t.current,r=nt(),i=qn(n),s=dn(r,i),s.callback=e??null,Hn(n,s,i),t.current.lanes=i,uo(t,i,r),ct(t,r),t}function Ll(t,e,n,r){var i=e.current,s=nt(),o=qn(i);return n=x_(n),e.context===null?e.context=n:e.pendingContext=n,e=dn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Hn(i,e,o),t!==null&&(xt(t,i,o,s),ga(t,i,o)),o}function nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pd(t,e){lm(t,e),(t=t.alternate)&&lm(t,e)}function QT(){return null}var F_=typeof reportError=="function"?reportError:function(t){console.error(t)};function md(t){this._internalRoot=t}xl.prototype.render=md.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));Ll(t,e,null,null)};xl.prototype.unmount=md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){Ll(null,t,null,null)}),e[mn]=null}};function xl(t){this._internalRoot=t}xl.prototype.unstable_scheduleHydration=function(t){if(t){var e=py();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dn.length&&e!==0&&e<Dn[n].priority;n++);Dn.splice(n,0,t),n===0&&gy(t)}};function gd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function um(){}function YT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=nl(o);s.call(h)}}var o=M_(e,r,t,0,null,!1,!1,"",um);return t._reactRootContainer=o,t[mn]=o.current,Hs(t.nodeType===8?t.parentNode:t),Nr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=nl(u);l.call(h)}}var u=fd(t,0,!1,null,null,!1,!1,"",um);return t._reactRootContainer=u,t[mn]=u.current,Hs(t.nodeType===8?t.parentNode:t),Nr(function(){Ll(e,u,n,r)}),u}function Fl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=nl(o);l.call(u)}}Ll(e,o,t,i)}else o=YT(n,e,t,i,r);return nl(o)}dy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ms(e.pendingLanes);n!==0&&(xh(e,n|1),ct(e,Se()),!(re&6)&&(Ai=Se()+500,ur()))}break;case 13:Nr(function(){var r=gn(t,1);if(r!==null){var i=nt();xt(r,t,1,i)}}),pd(t,1)}};Mh=function(t){if(t.tag===13){var e=gn(t,134217728);if(e!==null){var n=nt();xt(e,t,134217728,n)}pd(t,134217728)}};fy=function(t){if(t.tag===13){var e=qn(t),n=gn(t,e);if(n!==null){var r=nt();xt(n,t,e,r)}pd(t,e)}};py=function(){return oe};my=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};Tc=function(t,e,n){switch(e){case"input":if(mc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Cl(r);if(!i)throw Error(M(90));qg(r),mc(r,i)}}}break;case"textarea":Gg(t,n);break;case"select":e=n.value,e!=null&&ui(t,!!n.multiple,e,!1)}};ty=ud;ny=Nr;var XT={usingClientEntryPoint:!1,Events:[ho,ti,Cl,Zg,ey,ud]},ds={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JT={bundleType:ds.bundleType,version:ds.version,rendererPackageName:ds.rendererPackageName,rendererConfig:ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sy(t),t===null?null:t.stateNode},findFiberByHostInstance:ds.findFiberByHostInstance||QT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{Il=ra.inject(JT),Bt=ra}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XT;gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gd(e))throw Error(M(200));return GT(t,e,null,n)};gt.createRoot=function(t,e){if(!gd(t))throw Error(M(299));var n=!1,r="",i=F_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=fd(t,1,!1,null,null,n,!1,r,i),t[mn]=e.current,Hs(t.nodeType===8?t.parentNode:t),new md(e)};gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=sy(e),t=t===null?null:t.stateNode,t};gt.flushSync=function(t){return Nr(t)};gt.hydrate=function(t,e,n){if(!Ml(e))throw Error(M(200));return Fl(null,t,e,!0,n)};gt.hydrateRoot=function(t,e,n){if(!gd(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=F_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=M_(e,null,t,1,n??null,i,!1,s,o),t[mn]=e.current,Hs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new xl(e)};gt.render=function(t,e,n){if(!Ml(e))throw Error(M(200));return Fl(null,t,e,!1,n)};gt.unmountComponentAtNode=function(t){if(!Ml(t))throw Error(M(40));return t._reactRootContainer?(Nr(function(){Fl(null,null,t,!1,function(){t._reactRootContainer=null,t[mn]=null})}),!0):!1};gt.unstable_batchedUpdates=ud;gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ml(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return Fl(t,e,n,!1,r)};gt.version="18.3.1-next-f1338f8080-20240426";function b_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b_)}catch(t){console.error(t)}}b_(),bg.exports=gt;var ZT=bg.exports,U_,cm=ZT;U_=cm.createRoot,cm.hydrateRoot;var hm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},j_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,R=h&63;u||(R=64,o||(y=64)),r.push(n[f],n[m],n[y],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(z_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new tI;const y=s<<2|l>>4;if(r.push(y),h!==64){const R=l<<4&240|h>>2;if(r.push(R),m!==64){const k=h<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nI=function(t){const e=z_(t);return j_.encodeByteArray(e,!0)},rl=function(t){return nI(t).replace(/\./g,"")},B_=function(t){try{return j_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=()=>rI().__FIREBASE_DEFAULTS__,sI=()=>{if(typeof process>"u"||typeof hm>"u")return;const t=hm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&B_(t[1]);return e&&JSON.parse(e)},bl=()=>{try{return iI()||sI()||oI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$_=t=>{var e,n;return(n=(e=bl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},aI=t=>{const e=$_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},H_=()=>{var t;return(t=bl())===null||t===void 0?void 0:t.config},W_=t=>{var e;return(e=bl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[rl(JSON.stringify(n)),rl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function hI(){var t;const e=(t=bl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mI(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gI(){return!hI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yI(){try{return typeof indexedDB=="object"}catch{return!1}}function _I(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="FirebaseError";class In extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vI,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,po.prototype.create)}}class po{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?EI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new In(i,l,r)}}function EI(t,e){return t.replace(wI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wI=/\{\$([^}]+)}/g;function TI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function il(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(dm(s)&&dm(o)){if(!il(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function dm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ys(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function _s(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function II(t,e){const n=new SI(t,e);return n.subscribe.bind(n)}class SI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ju),i.error===void 0&&(i.error=Ju),i.complete===void 0&&(i.complete=Ju);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ju(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t){return t&&t._delegate?t._delegate:t}class Dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PI(e))try{this.getOrInitializeService({instanceIdentifier:_r})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=_r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_r){return this.instances.has(e)}getOptions(e=_r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_r){return this.component?this.component.multipleInstances?e:_r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CI(t){return t===_r?void 0:t}function PI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const NI={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},DI=J.INFO,VI={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},OI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=VI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yd{constructor(e){this.name=e,this._logLevel=DI,this._logHandler=OI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const LI=(t,e)=>e.some(n=>t instanceof n);let fm,pm;function xI(){return fm||(fm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MI(){return pm||(pm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const q_=new WeakMap,th=new WeakMap,K_=new WeakMap,Zu=new WeakMap,_d=new WeakMap;function FI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Gn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&q_.set(n,t)}).catch(()=>{}),_d.set(e,t),e}function bI(t){if(th.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});th.set(t,e)}let nh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return th.get(t);if(e==="objectStoreNames")return t.objectStoreNames||K_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UI(t){nh=t(nh)}function zI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ec(this),e,...n);return K_.set(r,e.sort?e.sort():[e]),Gn(r)}:MI().includes(t)?function(...e){return t.apply(ec(this),e),Gn(q_.get(this))}:function(...e){return Gn(t.apply(ec(this),e))}}function jI(t){return typeof t=="function"?zI(t):(t instanceof IDBTransaction&&bI(t),LI(t,xI())?new Proxy(t,nh):t)}function Gn(t){if(t instanceof IDBRequest)return FI(t);if(Zu.has(t))return Zu.get(t);const e=jI(t);return e!==t&&(Zu.set(t,e),_d.set(e,t)),e}const ec=t=>_d.get(t);function BI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Gn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Gn(o.result),u.oldVersion,u.newVersion,Gn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const $I=["get","getKey","getAll","getAllKeys","count"],HI=["put","add","delete","clear"],tc=new Map;function mm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tc.get(e))return tc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=HI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$I.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return tc.set(e,s),s}UI(t=>({...t,get:(e,n,r)=>mm(e,n)||t.get(e,n,r),has:(e,n)=>!!mm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rh="@firebase/app",gm="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new yd("@firebase/app"),KI="@firebase/app-compat",GI="@firebase/analytics-compat",QI="@firebase/analytics",YI="@firebase/app-check-compat",XI="@firebase/app-check",JI="@firebase/auth",ZI="@firebase/auth-compat",e1="@firebase/database",t1="@firebase/data-connect",n1="@firebase/database-compat",r1="@firebase/functions",i1="@firebase/functions-compat",s1="@firebase/installations",o1="@firebase/installations-compat",a1="@firebase/messaging",l1="@firebase/messaging-compat",u1="@firebase/performance",c1="@firebase/performance-compat",h1="@firebase/remote-config",d1="@firebase/remote-config-compat",f1="@firebase/storage",p1="@firebase/storage-compat",m1="@firebase/firestore",g1="@firebase/vertexai",y1="@firebase/firestore-compat",_1="firebase",v1="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="[DEFAULT]",E1={[rh]:"fire-core",[KI]:"fire-core-compat",[QI]:"fire-analytics",[GI]:"fire-analytics-compat",[XI]:"fire-app-check",[YI]:"fire-app-check-compat",[JI]:"fire-auth",[ZI]:"fire-auth-compat",[e1]:"fire-rtdb",[t1]:"fire-data-connect",[n1]:"fire-rtdb-compat",[r1]:"fire-fn",[i1]:"fire-fn-compat",[s1]:"fire-iid",[o1]:"fire-iid-compat",[a1]:"fire-fcm",[l1]:"fire-fcm-compat",[u1]:"fire-perf",[c1]:"fire-perf-compat",[h1]:"fire-rc",[d1]:"fire-rc-compat",[f1]:"fire-gcs",[p1]:"fire-gcs-compat",[m1]:"fire-fst",[y1]:"fire-fst-compat",[g1]:"fire-vertex","fire-js":"fire-js",[_1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=new Map,w1=new Map,sh=new Map;function ym(t,e){try{t.container.addComponent(e)}catch(n){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ri(t){const e=t.name;if(sh.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;sh.set(e,t);for(const n of sl.values())ym(n,t);for(const n of w1.values())ym(n,t);return!0}function vd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ln(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qn=new po("app","Firebase",T1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=v1;function Ed(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ih,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qn.create("bad-app-name",{appName:String(i)});if(n||(n=H_()),!n)throw Qn.create("no-options");const s=sl.get(i);if(s){if(il(n,s.options)&&il(r,s.config))return s;throw Qn.create("duplicate-app",{appName:i})}const o=new kI(i);for(const u of sh.values())o.addComponent(u);const l=new I1(n,r,o);return sl.set(i,l),l}function G_(t=ih){const e=sl.get(t);if(!e&&t===ih&&H_())return Ed();if(!e)throw Qn.create("no-app",{appName:t});return e}function Yn(t,e,n){var r;let i=(r=E1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(l.join(" "));return}Ri(new Dr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1="firebase-heartbeat-database",A1=1,Zs="firebase-heartbeat-store";let nc=null;function Q_(){return nc||(nc=BI(S1,A1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Qn.create("idb-open",{originalErrorMessage:t.message})})),nc}async function R1(t){try{const n=(await Q_()).transaction(Zs),r=await n.objectStore(Zs).get(Y_(t));return await n.done,r}catch(e){if(e instanceof In)_n.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_n.warn(n.message)}}}async function _m(t,e){try{const r=(await Q_()).transaction(Zs,"readwrite");await r.objectStore(Zs).put(e,Y_(t)),await r.done}catch(n){if(n instanceof In)_n.warn(n.message);else{const r=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(r.message)}}}function Y_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=1024,P1=30*24*60*60*1e3;class k1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new D1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=vm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=P1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){_n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vm(),{heartbeatsToSend:r,unsentEntries:i}=N1(this._heartbeatsCache.heartbeats),s=rl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return _n.warn(n),""}}}function vm(){return new Date().toISOString().substring(0,10)}function N1(t,e=C1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Em(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Em(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class D1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yI()?_I().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await R1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _m(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _m(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Em(t){return rl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(t){Ri(new Dr("platform-logger",e=>new WI(e),"PRIVATE")),Ri(new Dr("heartbeat",e=>new k1(e),"PRIVATE")),Yn(rh,gm,t),Yn(rh,gm,"esm2017"),Yn("fire-js","")}V1("");var O1="firebase",L1="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yn(O1,L1,"app");function wd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function X_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const x1=X_,J_=new po("auth","Firebase",X_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=new yd("@firebase/auth");function M1(t,...e){ol.logLevel<=J.WARN&&ol.warn(`Auth (${bi}): ${t}`,...e)}function Ia(t,...e){ol.logLevel<=J.ERROR&&ol.error(`Auth (${bi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw Td(t,...e)}function Ht(t,...e){return Td(t,...e)}function Z_(t,e,n){const r=Object.assign(Object.assign({},x1()),{[e]:n});return new po("auth","Firebase",r).create(e,{appName:t.name})}function Xn(t){return Z_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Td(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return J_.create(t,...e)}function W(t,e,...n){if(!t)throw Td(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ia(e),new Error(e)}function vn(t,e){t||un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function F1(){return wm()==="http:"||wm()==="https:"}function wm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(F1()||fI()||"connection"in navigator)?navigator.onLine:!0}function U1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=cI()||pI()}get(){return b1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=new go(3e4,6e4);function Mr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function cr(t,e,n,r,i={}){return tv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=mo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return dI()||(h.referrerPolicy="no-referrer"),ev.fetch()(nv(t,t.config.apiHost,n,l),h)})}async function tv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},z1),e);try{const i=new $1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ia(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ia(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ia(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ia(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Z_(t,f,h);bt(t,f)}}catch(i){if(i instanceof In)throw i;bt(t,"network-request-failed",{message:String(i)})}}async function Ul(t,e,n,r,i={}){const s=await cr(t,e,n,r,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function nv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Id(t.config,i):`${t.config.apiScheme}://${i}`}function B1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ht(this.auth,"network-request-failed")),j1.get())})}}function ia(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ht(t,e,r);return i.customData._tokenResponse=n,i}function Tm(t){return t!==void 0&&t.enterprise!==void 0}class H1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return B1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function W1(t,e){return cr(t,"GET","/v2/recaptchaConfig",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q1(t,e){return cr(t,"POST","/v1/accounts:delete",e)}async function rv(t,e){return cr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function K1(t,e=!1){const n=Rt(t),r=await n.getIdToken(e),i=Sd(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ds(rc(i.auth_time)),issuedAtTime:Ds(rc(i.iat)),expirationTime:Ds(rc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rc(t){return Number(t)*1e3}function Sd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ia("JWT malformed, contained fewer than 3 sections"),null;try{const i=B_(n);return i?JSON.parse(i):(Ia("Failed to decode base64 JWT payload"),null)}catch(i){return Ia("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Im(t){const e=Sd(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof In&&G1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function G1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ds(this.lastLoginAt),this.creationTime=Ds(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function al(t){var e;const n=t.auth,r=await t.getIdToken(),i=await eo(t,rv(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?iv(s.providerUserInfo):[],l=X1(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ah(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function Y1(t){const e=Rt(t);await al(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function X1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function iv(t){return t.map(e=>{var{providerId:n}=e,r=wd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J1(t,e){const n=await tv(t,{},async()=>{const r=mo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=nv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ev.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Z1(t,e){return cr(t,"POST","/v2/accounts:revokeToken",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Im(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=Im(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await J1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new mi;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mi,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=wd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ah(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await eo(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return K1(this,e)}reload(){return Y1(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await al(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ln(this.auth.app))return Promise.reject(Xn(this.auth));const e=await this.getIdToken();return await eo(this,q1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,R=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,E=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:V,isAnonymous:U,providerData:b,stsTokenManager:v}=n;W(S&&v,e,"internal-error");const g=mi.fromJSON(this.name,v);W(typeof S=="string",e,"internal-error"),Pn(m,e.name),Pn(y,e.name),W(typeof V=="boolean",e,"internal-error"),W(typeof U=="boolean",e,"internal-error"),Pn(R,e.name),Pn(k,e.name),Pn(D,e.name),Pn(x,e.name),Pn(I,e.name),Pn(E,e.name);const _=new cn({uid:S,auth:e,email:y,emailVerified:V,displayName:m,isAnonymous:U,photoURL:k,phoneNumber:R,tenantId:D,stsTokenManager:g,createdAt:I,lastLoginAt:E});return b&&Array.isArray(b)&&(_.providerData=b.map(w=>Object.assign({},w))),x&&(_._redirectEventId=x),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new mi;i.updateFromServerResponse(n);const s=new cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await al(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?iv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new mi;l.updateFromIdToken(r);const u=new cn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ah(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=new Map;function hn(t){vn(t instanceof Function,"Expected a class definition");let e=Sm.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sv.type="NONE";const Am=sv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(t,e,n){return`firebase:${t}:${e}:${n}`}class gi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Sa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Sa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gi(hn(Am),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||hn(Am);const o=Sa(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const m=cn._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new gi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new gi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ov(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hv(e))return"Blackberry";if(dv(e))return"Webos";if(av(e))return"Safari";if((e.includes("chrome/")||lv(e))&&!e.includes("edge/"))return"Chrome";if(cv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ov(t=Je()){return/firefox\//i.test(t)}function av(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lv(t=Je()){return/crios\//i.test(t)}function uv(t=Je()){return/iemobile/i.test(t)}function cv(t=Je()){return/android/i.test(t)}function hv(t=Je()){return/blackberry/i.test(t)}function dv(t=Je()){return/webos/i.test(t)}function Ad(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eS(t=Je()){var e;return Ad(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tS(){return mI()&&document.documentMode===10}function fv(t=Je()){return Ad(t)||cv(t)||dv(t)||hv(t)||/windows phone/i.test(t)||uv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t,e=[]){let n;switch(t){case"Browser":n=Rm(Je());break;case"Worker":n=`${Rm(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(t,e={}){return cr(t,"GET","/v2/passwordPolicy",Mr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=6;class sS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:iS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cm(this),this.idTokenSubscription=new Cm(this),this.beforeStateQueue=new nS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=J_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await gi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rv(this,{idToken:e}),r=await cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await al(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=U1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ln(this.app))return Promise.reject(Xn(this));const n=e?Rt(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ln(this.app)?Promise.reject(Xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ln(this.app)?Promise.reject(Xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rS(this),n=new sS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new po("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Z1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await gi.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&M1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ui(t){return Rt(t)}class Cm{constructor(e){this.auth=e,this.observer=null,this.addObserver=II(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aS(t){zl=t}function mv(t){return zl.loadJS(t)}function lS(){return zl.recaptchaEnterpriseScript}function uS(){return zl.gapiScript}function cS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class hS{constructor(){this.enterprise=new dS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class dS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const fS="recaptcha-enterprise",gv="NO_RECAPTCHA";class pS{constructor(e){this.type=fS,this.auth=Ui(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{W1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new H1(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Tm(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(gv)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new hS().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Tm(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=lS();u.length!==0&&(u+=l),mv(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Pm(t,e,n,r=!1,i=!1){const s=new pS(t);let o;if(i)o=gv;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function km(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Pm(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Pm(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(t,e){const n=vd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(il(s,e??{}))return i;bt(i,"already-initialized")}return n.initialize({options:e})}function gS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yS(t,e,n){const r=Ui(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=yv(e),{host:o,port:l}=_S(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),vS()}function yv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _S(t){const e=yv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Nm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Nm(o)}}}function Nm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}async function ES(t,e){return cr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wS(t,e){return Ul(t,"POST","/v1/accounts:signInWithPassword",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TS(t,e){return Ul(t,"POST","/v1/accounts:signInWithEmailLink",Mr(t,e))}async function IS(t,e){return Ul(t,"POST","/v1/accounts:signInWithEmailLink",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends Rd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new to(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new to(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return km(e,n,"signInWithPassword",wS);case"emailLink":return TS(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return km(e,r,"signUpPassword",ES);case"emailLink":return IS(e,{idToken:n,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(t,e){return Ul(t,"POST","/v1/accounts:signInWithIdp",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="http://localhost";class Vr extends Rd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=wd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Vr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return yi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,yi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yi(e,n)}buildRequest(){const e={requestUri:SS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RS(t){const e=ys(_s(t)).link,n=e?ys(_s(e)).deep_link_id:null,r=ys(_s(t)).deep_link_id;return(r?ys(_s(r)).link:null)||r||n||e||t}class Cd{constructor(e){var n,r,i,s,o,l;const u=ys(_s(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=AS((i=u.mode)!==null&&i!==void 0?i:null);W(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=RS(e);try{return new Cd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.providerId=zi.PROVIDER_ID}static credential(e,n){return to._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cd.parseLink(n);return W(r,"argument-error"),to._fromEmailAndCode(e,r.code,r.tenantId)}}zi.PROVIDER_ID="password";zi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends _v{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends yo{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends yo{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends yo{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await cn._fromIdTokenResponse(e,r,i),o=Dm(r);return new Ci({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Dm(r);return new Ci({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Dm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends In{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ll.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ll(e,n,r,i)}}function vv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ll._fromErrorAndOperation(t,s,e,r):s})}async function CS(t,e,n=!1){const r=await eo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ci._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(t,e,n=!1){const{auth:r}=t;if(ln(r.app))return Promise.reject(Xn(r));const i="reauthenticate";try{const s=await eo(t,vv(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=Sd(s.idToken);W(o,r,"internal-error");const{sub:l}=o;return W(t.uid===l,r,"user-mismatch"),Ci._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ev(t,e,n=!1){if(ln(t.app))return Promise.reject(Xn(t));const r="signIn",i=await vv(t,r,e),s=await Ci._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function kS(t,e){return Ev(Ui(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NS(t){const e=Ui(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function DS(t,e,n){return ln(t.app)?Promise.reject(Xn(t)):kS(Rt(t),zi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&NS(t),r})}function VS(t,e,n,r){return Rt(t).onIdTokenChanged(e,n,r)}function OS(t,e,n){return Rt(t).beforeAuthStateChanged(e,n)}const ul="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ul,"1"),this.storage.removeItem(ul),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=1e3,xS=10;class Tv extends wv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,xS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},LS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tv.type="LOCAL";const MS=Tv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv extends wv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Iv.type="SESSION";const Sv=Iv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new jl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await FS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Pd("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function US(t){Wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function zS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BS(){return Av()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="firebaseLocalStorageDb",$S=1,cl="firebaseLocalStorage",Cv="fbase_key";class _o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bl(t,e){return t.transaction([cl],e?"readwrite":"readonly").objectStore(cl)}function HS(){const t=indexedDB.deleteDatabase(Rv);return new _o(t).toPromise()}function lh(){const t=indexedDB.open(Rv,$S);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(cl,{keyPath:Cv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(cl)?e(r):(r.close(),await HS(),e(await lh()))})})}async function Vm(t,e,n){const r=Bl(t,!0).put({[Cv]:e,value:n});return new _o(r).toPromise()}async function WS(t,e){const n=Bl(t,!1).get(e),r=await new _o(n).toPromise();return r===void 0?null:r.value}function Om(t,e){const n=Bl(t,!0).delete(e);return new _o(n).toPromise()}const qS=800,KS=3;class Pv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>KS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Av()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jl._getInstance(BS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zS(),!this.activeServiceWorker)return;this.sender=new bS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lh();return await Vm(e,ul,"1"),await Om(e,ul),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>WS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Om(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Bl(i,!1).getAll();return new _o(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pv.type="LOCAL";const GS=Pv;new go(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(t,e){return e?hn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd extends Rd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YS(t){return Ev(t.auth,new kd(t),t.bypassAuthState)}function XS(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),PS(n,new kd(t),t.bypassAuthState)}async function JS(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),CS(n,new kd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YS;case"linkViaPopup":case"linkViaRedirect":return JS;case"reauthViaPopup":case"reauthViaRedirect":return XS;default:bt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=new go(2e3,1e4);class li extends kv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,li.currentPopupAction&&li.currentPopupAction.cancel(),li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Pd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,li.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZS.get())};e()}}li.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA="pendingRedirect",Aa=new Map;class tA extends kv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Aa.get(this.auth._key());if(!e){try{const r=await nA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Aa.set(this.auth._key(),e)}return this.bypassAuthState||Aa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nA(t,e){const n=sA(e),r=iA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function rA(t,e){Aa.set(t._key(),e)}function iA(t){return hn(t._redirectPersistence)}function sA(t){return Sa(eA,t.config.apiKey,t.name)}async function oA(t,e,n=!1){if(ln(t.app))return Promise.reject(Xn(t));const r=Ui(t),i=QS(r,e),o=await new tA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=10*60*1e3;class lA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Nv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lm(e))}saveEventToCache(e){this.cachedEventUids.add(Lm(e)),this.lastProcessedEventTime=Date.now()}}function Lm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Nv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cA(t,e={}){return cr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dA=/^https?/;async function fA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cA(t);for(const n of e)try{if(pA(n))return}catch{}bt(t,"unauthorized-domain")}function pA(t){const e=oh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dA.test(n))return!1;if(hA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=new go(3e4,6e4);function xm(){const t=Wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gA(t){return new Promise((e,n)=>{var r,i,s;function o(){xm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xm(),n(Ht(t,"network-request-failed"))},timeout:mA.get()})}if(!((i=(r=Wt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Wt().gapi)===null||s===void 0)&&s.load)o();else{const l=cS("iframefcb");return Wt()[l]=()=>{gapi.load?o():n(Ht(t,"network-request-failed"))},mv(`${uS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ra=null,e})}let Ra=null;function yA(t){return Ra=Ra||gA(t),Ra}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=new go(5e3,15e3),vA="__/auth/iframe",EA="emulator/auth/iframe",wA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IA(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Id(e,EA):`https://${t.config.authDomain}/${vA}`,r={apiKey:e.apiKey,appName:t.name,v:bi},i=TA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${mo(r).slice(1)}`}async function SA(t){const e=await yA(t),n=Wt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:IA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ht(t,"network-request-failed"),l=Wt().setTimeout(()=>{s(o)},_A.get());function u(){Wt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RA=500,CA=600,PA="_blank",kA="http://localhost";class Mm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NA(t,e,n,r=RA,i=CA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},AA),{width:r.toString(),height:i.toString(),top:s,left:o}),h=Je().toLowerCase();n&&(l=lv(h)?PA:n),ov(h)&&(e=e||kA,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[R,k])=>`${y}${R}=${k},`,"");if(eS(h)&&l!=="_self")return DA(e||"",l),new Mm(null);const m=window.open(e||"",l,f);W(m,t,"popup-blocked");try{m.focus()}catch{}return new Mm(m)}function DA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA="__/auth/handler",OA="emulator/auth/handler",LA=encodeURIComponent("fac");async function Fm(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bi,eventId:i};if(e instanceof _v){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",TI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof yo){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${LA}=${encodeURIComponent(u)}`:"";return`${xA(t)}?${mo(l).slice(1)}${h}`}function xA({config:t}){return t.emulator?Id(t,OA):`https://${t.authDomain}/${VA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="webStorageSupport";class MA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sv,this._completeRedirectFn=oA,this._overrideRedirectResult=rA}async _openPopup(e,n,r,i){var s;vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Fm(e,n,r,oh(),i);return NA(e,o,Pd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Fm(e,n,r,oh(),i);return US(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await SA(e),r=new lA(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ic,{type:ic},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ic];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fv()||av()||Ad()}}const FA=MA;var bm="@firebase/auth",Um="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zA(t){Ri(new Dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pv(t)},h=new oS(r,i,s,u);return gS(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ri(new Dr("auth-internal",e=>{const n=Ui(e.getProvider("auth").getImmediate());return(r=>new bA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yn(bm,Um,UA(t)),Yn(bm,Um,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=5*60,BA=W_("authIdTokenMaxAge")||jA;let zm=null;const $A=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>BA)return;const i=n==null?void 0:n.token;zm!==i&&(zm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function HA(t=G_()){const e=vd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mS(t,{popupRedirectResolver:FA,persistence:[GS,MS,Sv]}),r=W_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=$A(s.toString());OS(n,o,()=>o(n.currentUser)),VS(n,l=>o(l))}}const i=$_("auth");return i&&yS(n,`http://${i}`),n}function WA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}aS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ht("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",WA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zA("Browser");const Dv={apiKey:"AIzaSyAFZ9rYf-yQR77HQ2M7M45m25Cd9oILDPU",authDomain:"pilvi-vite.firebaseapp.com",projectId:"pilvi-vite-f4a49",storageBucket:"pilvi-vite.appspot.com",messagingSenderId:"941346472459",appId:"1:941346472459:web:55917e93f36a6c12f87d0e"};function qA(){const t=Ed(Dv),e=HA(t),[n,r]=Ot.useState(""),[i,s]=Ot.useState(""),o=async l=>{l.preventDefault();try{await DS(e,n,i).then(u=>{const h=u.user;console.log("Tämä on esimerkkiviesti "+h.email)})}catch{}};return ne.jsx("div",{children:ne.jsxs("form",{onSubmit:o,children:[ne.jsxs("div",{children:[ne.jsx("label",{htmlFor:"email",children:"Sähköposti:"}),ne.jsx("input",{type:"email",id:"email",value:n,onChange:l=>r(l.target.value),required:!0})]}),ne.jsxs("div",{children:[ne.jsx("label",{htmlFor:"password",children:"Salasana:"}),ne.jsx("input",{type:"password",id:"password",value:i,onChange:l=>s(l.target.value),required:!0})]}),ne.jsx("button",{type:"submit",children:"Kirjaudu sisään"})]})})}var jm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ar,Vv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function _(){}_.prototype=g.prototype,v.D=g.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(w,A,P){for(var T=Array(arguments.length-2),_t=2;_t<arguments.length;_t++)T[_t-2]=arguments[_t];return g.prototype[A].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,g,_){_||(_=0);var w=Array(16);if(typeof g=="string")for(var A=0;16>A;++A)w[A]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(A=0;16>A;++A)w[A]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=v.g[0],_=v.g[1],A=v.g[2];var P=v.g[3],T=g+(P^_&(A^P))+w[0]+3614090360&4294967295;g=_+(T<<7&4294967295|T>>>25),T=P+(A^g&(_^A))+w[1]+3905402710&4294967295,P=g+(T<<12&4294967295|T>>>20),T=A+(_^P&(g^_))+w[2]+606105819&4294967295,A=P+(T<<17&4294967295|T>>>15),T=_+(g^A&(P^g))+w[3]+3250441966&4294967295,_=A+(T<<22&4294967295|T>>>10),T=g+(P^_&(A^P))+w[4]+4118548399&4294967295,g=_+(T<<7&4294967295|T>>>25),T=P+(A^g&(_^A))+w[5]+1200080426&4294967295,P=g+(T<<12&4294967295|T>>>20),T=A+(_^P&(g^_))+w[6]+2821735955&4294967295,A=P+(T<<17&4294967295|T>>>15),T=_+(g^A&(P^g))+w[7]+4249261313&4294967295,_=A+(T<<22&4294967295|T>>>10),T=g+(P^_&(A^P))+w[8]+1770035416&4294967295,g=_+(T<<7&4294967295|T>>>25),T=P+(A^g&(_^A))+w[9]+2336552879&4294967295,P=g+(T<<12&4294967295|T>>>20),T=A+(_^P&(g^_))+w[10]+4294925233&4294967295,A=P+(T<<17&4294967295|T>>>15),T=_+(g^A&(P^g))+w[11]+2304563134&4294967295,_=A+(T<<22&4294967295|T>>>10),T=g+(P^_&(A^P))+w[12]+1804603682&4294967295,g=_+(T<<7&4294967295|T>>>25),T=P+(A^g&(_^A))+w[13]+4254626195&4294967295,P=g+(T<<12&4294967295|T>>>20),T=A+(_^P&(g^_))+w[14]+2792965006&4294967295,A=P+(T<<17&4294967295|T>>>15),T=_+(g^A&(P^g))+w[15]+1236535329&4294967295,_=A+(T<<22&4294967295|T>>>10),T=g+(A^P&(_^A))+w[1]+4129170786&4294967295,g=_+(T<<5&4294967295|T>>>27),T=P+(_^A&(g^_))+w[6]+3225465664&4294967295,P=g+(T<<9&4294967295|T>>>23),T=A+(g^_&(P^g))+w[11]+643717713&4294967295,A=P+(T<<14&4294967295|T>>>18),T=_+(P^g&(A^P))+w[0]+3921069994&4294967295,_=A+(T<<20&4294967295|T>>>12),T=g+(A^P&(_^A))+w[5]+3593408605&4294967295,g=_+(T<<5&4294967295|T>>>27),T=P+(_^A&(g^_))+w[10]+38016083&4294967295,P=g+(T<<9&4294967295|T>>>23),T=A+(g^_&(P^g))+w[15]+3634488961&4294967295,A=P+(T<<14&4294967295|T>>>18),T=_+(P^g&(A^P))+w[4]+3889429448&4294967295,_=A+(T<<20&4294967295|T>>>12),T=g+(A^P&(_^A))+w[9]+568446438&4294967295,g=_+(T<<5&4294967295|T>>>27),T=P+(_^A&(g^_))+w[14]+3275163606&4294967295,P=g+(T<<9&4294967295|T>>>23),T=A+(g^_&(P^g))+w[3]+4107603335&4294967295,A=P+(T<<14&4294967295|T>>>18),T=_+(P^g&(A^P))+w[8]+1163531501&4294967295,_=A+(T<<20&4294967295|T>>>12),T=g+(A^P&(_^A))+w[13]+2850285829&4294967295,g=_+(T<<5&4294967295|T>>>27),T=P+(_^A&(g^_))+w[2]+4243563512&4294967295,P=g+(T<<9&4294967295|T>>>23),T=A+(g^_&(P^g))+w[7]+1735328473&4294967295,A=P+(T<<14&4294967295|T>>>18),T=_+(P^g&(A^P))+w[12]+2368359562&4294967295,_=A+(T<<20&4294967295|T>>>12),T=g+(_^A^P)+w[5]+4294588738&4294967295,g=_+(T<<4&4294967295|T>>>28),T=P+(g^_^A)+w[8]+2272392833&4294967295,P=g+(T<<11&4294967295|T>>>21),T=A+(P^g^_)+w[11]+1839030562&4294967295,A=P+(T<<16&4294967295|T>>>16),T=_+(A^P^g)+w[14]+4259657740&4294967295,_=A+(T<<23&4294967295|T>>>9),T=g+(_^A^P)+w[1]+2763975236&4294967295,g=_+(T<<4&4294967295|T>>>28),T=P+(g^_^A)+w[4]+1272893353&4294967295,P=g+(T<<11&4294967295|T>>>21),T=A+(P^g^_)+w[7]+4139469664&4294967295,A=P+(T<<16&4294967295|T>>>16),T=_+(A^P^g)+w[10]+3200236656&4294967295,_=A+(T<<23&4294967295|T>>>9),T=g+(_^A^P)+w[13]+681279174&4294967295,g=_+(T<<4&4294967295|T>>>28),T=P+(g^_^A)+w[0]+3936430074&4294967295,P=g+(T<<11&4294967295|T>>>21),T=A+(P^g^_)+w[3]+3572445317&4294967295,A=P+(T<<16&4294967295|T>>>16),T=_+(A^P^g)+w[6]+76029189&4294967295,_=A+(T<<23&4294967295|T>>>9),T=g+(_^A^P)+w[9]+3654602809&4294967295,g=_+(T<<4&4294967295|T>>>28),T=P+(g^_^A)+w[12]+3873151461&4294967295,P=g+(T<<11&4294967295|T>>>21),T=A+(P^g^_)+w[15]+530742520&4294967295,A=P+(T<<16&4294967295|T>>>16),T=_+(A^P^g)+w[2]+3299628645&4294967295,_=A+(T<<23&4294967295|T>>>9),T=g+(A^(_|~P))+w[0]+4096336452&4294967295,g=_+(T<<6&4294967295|T>>>26),T=P+(_^(g|~A))+w[7]+1126891415&4294967295,P=g+(T<<10&4294967295|T>>>22),T=A+(g^(P|~_))+w[14]+2878612391&4294967295,A=P+(T<<15&4294967295|T>>>17),T=_+(P^(A|~g))+w[5]+4237533241&4294967295,_=A+(T<<21&4294967295|T>>>11),T=g+(A^(_|~P))+w[12]+1700485571&4294967295,g=_+(T<<6&4294967295|T>>>26),T=P+(_^(g|~A))+w[3]+2399980690&4294967295,P=g+(T<<10&4294967295|T>>>22),T=A+(g^(P|~_))+w[10]+4293915773&4294967295,A=P+(T<<15&4294967295|T>>>17),T=_+(P^(A|~g))+w[1]+2240044497&4294967295,_=A+(T<<21&4294967295|T>>>11),T=g+(A^(_|~P))+w[8]+1873313359&4294967295,g=_+(T<<6&4294967295|T>>>26),T=P+(_^(g|~A))+w[15]+4264355552&4294967295,P=g+(T<<10&4294967295|T>>>22),T=A+(g^(P|~_))+w[6]+2734768916&4294967295,A=P+(T<<15&4294967295|T>>>17),T=_+(P^(A|~g))+w[13]+1309151649&4294967295,_=A+(T<<21&4294967295|T>>>11),T=g+(A^(_|~P))+w[4]+4149444226&4294967295,g=_+(T<<6&4294967295|T>>>26),T=P+(_^(g|~A))+w[11]+3174756917&4294967295,P=g+(T<<10&4294967295|T>>>22),T=A+(g^(P|~_))+w[2]+718787259&4294967295,A=P+(T<<15&4294967295|T>>>17),T=_+(P^(A|~g))+w[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+P&4294967295}r.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var _=g-this.blockSize,w=this.B,A=this.h,P=0;P<g;){if(A==0)for(;P<=_;)i(this,v,P),P+=this.blockSize;if(typeof v=="string"){for(;P<g;)if(w[A++]=v.charCodeAt(P++),A==this.blockSize){i(this,w),A=0;break}}else for(;P<g;)if(w[A++]=v[P++],A==this.blockSize){i(this,w),A=0;break}}this.h=A,this.o+=g},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var _=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=_&255,_/=256;for(this.u(v),v=Array(16),g=_=0;4>g;++g)for(var w=0;32>w;w+=8)v[_++]=this.g[g]>>>w&255;return v};function s(v,g){var _=l;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=g(v)}function o(v,g){this.h=g;for(var _=[],w=!0,A=v.length-1;0<=A;A--){var P=v[A]|0;w&&P==g||(_[A]=P,w=!1)}this.g=_}var l={};function u(v){return-128<=v&&128>v?s(v,function(g){return new o([g|0],0>g?-1:0)}):new o([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return m;if(0>v)return x(h(-v));for(var g=[],_=1,w=0;v>=_;w++)g[w]=v/_|0,_*=4294967296;return new o(g,0)}function f(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return x(f(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(g,8)),w=m,A=0;A<v.length;A+=8){var P=Math.min(8,v.length-A),T=parseInt(v.substring(A,A+P),g);8>P?(P=h(Math.pow(g,P)),w=w.j(P).add(h(T))):(w=w.j(_),w=w.add(h(T)))}return w}var m=u(0),y=u(1),R=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-x(this).m();for(var v=0,g=1,_=0;_<this.g.length;_++){var w=this.i(_);v+=(0<=w?w:4294967296+w)*g,g*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(D(this))return"-"+x(this).toString(v);for(var g=h(Math.pow(v,6)),_=this,w="";;){var A=V(_,g).g;_=I(_,A.j(g));var P=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=A,k(_))return P+w;for(;6>P.length;)P="0"+P;w=P+w}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function D(v){return v.h==-1}t.l=function(v){return v=I(this,v),D(v)?-1:k(v)?0:1};function x(v){for(var g=v.g.length,_=[],w=0;w<g;w++)_[w]=~v.g[w];return new o(_,~v.h).add(y)}t.abs=function(){return D(this)?x(this):this},t.add=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0,A=0;A<=g;A++){var P=w+(this.i(A)&65535)+(v.i(A)&65535),T=(P>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);w=T>>>16,P&=65535,T&=65535,_[A]=T<<16|P}return new o(_,_[_.length-1]&-2147483648?-1:0)};function I(v,g){return v.add(x(g))}t.j=function(v){if(k(this)||k(v))return m;if(D(this))return D(v)?x(this).j(x(v)):x(x(this).j(v));if(D(v))return x(this.j(x(v)));if(0>this.l(R)&&0>v.l(R))return h(this.m()*v.m());for(var g=this.g.length+v.g.length,_=[],w=0;w<2*g;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var A=0;A<v.g.length;A++){var P=this.i(w)>>>16,T=this.i(w)&65535,_t=v.i(A)>>>16,hr=v.i(A)&65535;_[2*w+2*A]+=T*hr,E(_,2*w+2*A),_[2*w+2*A+1]+=P*hr,E(_,2*w+2*A+1),_[2*w+2*A+1]+=T*_t,E(_,2*w+2*A+1),_[2*w+2*A+2]+=P*_t,E(_,2*w+2*A+2)}for(w=0;w<g;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=g;w<2*g;w++)_[w]=0;return new o(_,0)};function E(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function S(v,g){this.g=v,this.h=g}function V(v,g){if(k(g))throw Error("division by zero");if(k(v))return new S(m,m);if(D(v))return g=V(x(v),g),new S(x(g.g),x(g.h));if(D(g))return g=V(v,x(g)),new S(x(g.g),g.h);if(30<v.g.length){if(D(v)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var _=y,w=g;0>=w.l(v);)_=U(_),w=U(w);var A=b(_,1),P=b(w,1);for(w=b(w,2),_=b(_,2);!k(w);){var T=P.add(w);0>=T.l(v)&&(A=A.add(_),P=T),w=b(w,1),_=b(_,1)}return g=I(v,A.j(g)),new S(A,g)}for(A=m;0<=v.l(g);){for(_=Math.max(1,Math.floor(v.m()/g.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),P=h(_),T=P.j(g);D(T)||0<T.l(v);)_-=w,P=h(_),T=P.j(g);k(P)&&(P=y),A=A.add(P),v=I(v,T)}return new S(A,v)}t.A=function(v){return V(this,v).h},t.and=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)&v.i(w);return new o(_,this.h&v.h)},t.or=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)|v.i(w);return new o(_,this.h|v.h)},t.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)^v.i(w);return new o(_,this.h^v.h)};function U(v){for(var g=v.g.length+1,_=[],w=0;w<g;w++)_[w]=v.i(w)<<1|v.i(w-1)>>>31;return new o(_,v.h)}function b(v,g){var _=g>>5;g%=32;for(var w=v.g.length-_,A=[],P=0;P<w;P++)A[P]=0<g?v.i(P+_)>>>g|v.i(P+_+1)<<32-g:v.i(P+_);return new o(A,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Vv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Ar=o}).apply(typeof jm<"u"?jm:typeof self<"u"?self:typeof window<"u"?window:{});var sa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ov,vs,Lv,Ca,uh,xv,Mv,Fv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof sa=="object"&&sa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var C=a[p];if(!(C in d))break e;d=d[C]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,C={next:function(){if(!p&&d<a.length){var N=d++;return{value:c(N,a[N]),done:!1}}return p=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,p),a.apply(c,C)}}return function(){return a.apply(c,arguments)}}function y(a,c,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,y.apply(null,arguments)}function R(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function k(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,C,N){for(var F=Array(arguments.length-2),le=2;le<arguments.length;le++)F[le-2]=arguments[le];return c.prototype[C].apply(p,F)}}function D(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function x(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const C=a.length||0,N=p.length||0;a.length=C+N;for(let F=0;F<N;F++)a[C+F]=p[F]}else a.push(p)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function E(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var U=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function b(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function v(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function g(a){const c={};for(const d in a)c[d]=a[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,c){let d,p;for(let C=1;C<arguments.length;C++){p=arguments[C];for(d in p)a[d]=p[d];for(let N=0;N<_.length;N++)d=_[N],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function A(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function T(){var a=K;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class _t{constructor(){this.h=this.g=null}add(c,d){const p=hr.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var hr=new I(()=>new Wi,a=>a.reset());class Wi{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Yt,z=!1,K=new _t,Y=()=>{const a=l.Promise.resolve(void 0);Yt=()=>{a.then(me)}};var me=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){P(d)}var c=hr;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var Xt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Jt(a,c){if(Te.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(U){e:{try{V(c.nodeName);var C=!0;break e}catch{}C=!1}C||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Zt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Jt.aa.h.call(this)}}k(Jt,Te);var Zt={2:"touch",3:"pen",4:"mouse"};Jt.prototype.h=function(){Jt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var en="closure_listenable_"+(1e6*Math.random()|0),X0=0;function J0(a,c,d,p,C){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=C,this.key=++X0,this.da=this.fa=!1}function Io(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function So(a){this.src=a,this.g={},this.h=0}So.prototype.add=function(a,c,d,p,C){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var F=iu(a,c,p,C);return-1<F?(c=a[F],d||(c.fa=!1)):(c=new J0(c,this.src,N,!!p,C),c.fa=d,a.push(c)),c};function ru(a,c){var d=c.type;if(d in a.g){var p=a.g[d],C=Array.prototype.indexOf.call(p,c,void 0),N;(N=0<=C)&&Array.prototype.splice.call(p,C,1),N&&(Io(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function iu(a,c,d,p){for(var C=0;C<a.length;++C){var N=a[C];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==p)return C}return-1}var su="closure_lm_"+(1e6*Math.random()|0),ou={};function nf(a,c,d,p,C){if(Array.isArray(c)){for(var N=0;N<c.length;N++)nf(a,c[N],d,p,C);return null}return d=of(d),a&&a[en]?a.K(c,d,h(p)?!!p.capture:!!p,C):Z0(a,c,d,!1,p,C)}function Z0(a,c,d,p,C,N){if(!c)throw Error("Invalid event type");var F=h(C)?!!C.capture:!!C,le=lu(a);if(le||(a[su]=le=new So(a)),d=le.add(c,d,p,F,N),d.proxy)return d;if(p=eE(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)Xt||(C=F),C===void 0&&(C=!1),a.addEventListener(c.toString(),p,C);else if(a.attachEvent)a.attachEvent(sf(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function eE(){function a(d){return c.call(a.src,a.listener,d)}const c=tE;return a}function rf(a,c,d,p,C){if(Array.isArray(c))for(var N=0;N<c.length;N++)rf(a,c[N],d,p,C);else p=h(p)?!!p.capture:!!p,d=of(d),a&&a[en]?(a=a.i,c=String(c).toString(),c in a.g&&(N=a.g[c],d=iu(N,d,p,C),-1<d&&(Io(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[c],a.h--)))):a&&(a=lu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=iu(c,d,p,C)),(d=-1<a?c[a]:null)&&au(d))}function au(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[en])ru(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(sf(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=lu(c))?(ru(d,a),d.h==0&&(d.src=null,c[su]=null)):Io(a)}}}function sf(a){return a in ou?ou[a]:ou[a]="on"+a}function tE(a,c){if(a.da)a=!0;else{c=new Jt(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&au(a),a=d.call(p,c)}return a}function lu(a){return a=a[su],a instanceof So?a:null}var uu="__closure_events_fn_"+(1e9*Math.random()>>>0);function of(a){return typeof a=="function"?a:(a[uu]||(a[uu]=function(c){return a.handleEvent(c)}),a[uu])}function Be(){ae.call(this),this.i=new So(this),this.M=this,this.F=null}k(Be,ae),Be.prototype[en]=!0,Be.prototype.removeEventListener=function(a,c,d,p){rf(this,a,c,d,p)};function Ze(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new Te(c,a);else if(c instanceof Te)c.target=c.target||a;else{var C=c;c=new Te(p,a),w(c,C)}if(C=!0,d)for(var N=d.length-1;0<=N;N--){var F=c.g=d[N];C=Ao(F,p,!0,c)&&C}if(F=c.g=a,C=Ao(F,p,!0,c)&&C,C=Ao(F,p,!1,c)&&C,d)for(N=0;N<d.length;N++)F=c.g=d[N],C=Ao(F,p,!1,c)&&C}Be.prototype.N=function(){if(Be.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)Io(d[p]);delete a.g[c],a.h--}}this.F=null},Be.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},Be.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function Ao(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,N=0;N<c.length;++N){var F=c[N];if(F&&!F.da&&F.capture==d){var le=F.listener,xe=F.ha||F.src;F.fa&&ru(a.i,F),C=le.call(xe,p)!==!1&&C}}return C&&!p.defaultPrevented}function af(a,c,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function lf(a){a.g=af(()=>{a.g=null,a.i&&(a.i=!1,lf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class nE extends ae{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:lf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qi(a){ae.call(this),this.h=a,this.g={}}k(qi,ae);var uf=[];function cf(a){b(a.g,function(c,d){this.g.hasOwnProperty(d)&&au(c)},a),a.g={}}qi.prototype.N=function(){qi.aa.N.call(this),cf(this)},qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cu=l.JSON.stringify,rE=l.JSON.parse,iE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function hu(){}hu.prototype.h=null;function hf(a){return a.h||(a.h=a.i())}function df(){}var Ki={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function du(){Te.call(this,"d")}k(du,Te);function fu(){Te.call(this,"c")}k(fu,Te);var dr={},ff=null;function Ro(){return ff=ff||new Be}dr.La="serverreachability";function pf(a){Te.call(this,dr.La,a)}k(pf,Te);function Gi(a){const c=Ro();Ze(c,new pf(c))}dr.STAT_EVENT="statevent";function mf(a,c){Te.call(this,dr.STAT_EVENT,a),this.stat=c}k(mf,Te);function et(a){const c=Ro();Ze(c,new mf(c,a))}dr.Ma="timingevent";function gf(a,c){Te.call(this,dr.Ma,a),this.size=c}k(gf,Te);function Qi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Yi(){this.g=!0}Yi.prototype.xa=function(){this.g=!1};function sE(a,c,d,p,C,N){a.info(function(){if(a.g)if(N)for(var F="",le=N.split("&"),xe=0;xe<le.length;xe++){var ie=le[xe].split("=");if(1<ie.length){var $e=ie[0];ie=ie[1];var He=$e.split("_");F=2<=He.length&&He[1]=="type"?F+($e+"="+ie+"&"):F+($e+"=redacted&")}}else F=null;else F=N;return"XMLHTTP REQ ("+p+") [attempt "+C+"]: "+c+`
`+d+`
`+F})}function oE(a,c,d,p,C,N,F){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+C+"]: "+c+`
`+d+`
`+N+" "+F})}function jr(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+lE(a,d)+(p?" "+p:"")})}function aE(a,c){a.info(function(){return"TIMEOUT: "+c})}Yi.prototype.info=function(){};function lE(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var C=p[1];if(Array.isArray(C)&&!(1>C.length)){var N=C[0];if(N!="noop"&&N!="stop"&&N!="close")for(var F=1;F<C.length;F++)C[F]=""}}}}return cu(d)}catch{return c}}var Co={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pu;function Po(){}k(Po,hu),Po.prototype.g=function(){return new XMLHttpRequest},Po.prototype.i=function(){return{}},pu=new Po;function Sn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new qi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _f}function _f(){this.i=null,this.g="",this.h=!1}var vf={},mu={};function gu(a,c,d){a.L=1,a.v=Vo(tn(c)),a.m=d,a.P=!0,Ef(a,null)}function Ef(a,c){a.F=Date.now(),ko(a),a.A=tn(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),Lf(d.i,"t",p),a.C=0,d=a.j.J,a.h=new _f,a.g=Jf(a.j,d?c:null,!a.m),0<a.O&&(a.M=new nE(y(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(uf[0]=C.toString()),C=uf);for(var N=0;N<C.length;N++){var F=nf(d,C[N],p||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Gi(),sE(a.i,a.u,a.A,a.l,a.R,a.m)}Sn.prototype.ca=function(a){a=a.target;const c=this.M;c&&nn(a)==3?c.j():this.Y(a)},Sn.prototype.Y=function(a){try{if(a==this.g)e:{const He=nn(this.g);var c=this.g.Ba();const Hr=this.g.Z();if(!(3>He)&&(He!=3||this.g&&(this.h.h||this.g.oa()||jf(this.g)))){this.J||He!=4||c==7||(c==8||0>=Hr?Gi(3):Gi(2)),yu(this);var d=this.g.Z();this.X=d;t:if(wf(this)){var p=jf(this.g);a="";var C=p.length,N=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fr(this),Xi(this);var F="";break t}this.h.i=new l.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(N&&c==C-1)});p.length=0,this.h.g+=a,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=d==200,oE(this.i,this.u,this.A,this.l,this.R,He,d),this.o){if(this.T&&!this.K){t:{if(this.g){var le,xe=this.g;if((le=xe.g?xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(le)){var ie=le;break t}}ie=null}if(d=ie)jr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_u(this,d);else{this.o=!1,this.s=3,et(12),fr(this),Xi(this);break e}}if(this.P){d=!0;let Ct;for(;!this.J&&this.C<F.length;)if(Ct=uE(this,F),Ct==mu){He==4&&(this.s=4,et(14),d=!1),jr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==vf){this.s=4,et(15),jr(this.i,this.l,F,"[Invalid Chunk]"),d=!1;break}else jr(this.i,this.l,Ct,null),_u(this,Ct);if(wf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),He!=4||F.length!=0||this.h.h||(this.s=1,et(16),d=!1),this.o=this.o&&d,!d)jr(this.i,this.l,F,"[Invalid Chunked Response]"),fr(this),Xi(this);else if(0<F.length&&!this.W){this.W=!0;var $e=this.j;$e.g==this&&$e.ba&&!$e.M&&($e.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Su($e),$e.M=!0,et(11))}}else jr(this.i,this.l,F,null),_u(this,F);He==4&&fr(this),this.o&&!this.J&&(He==4?Gf(this.j,this):(this.o=!1,ko(this)))}else RE(this.g),d==400&&0<F.indexOf("Unknown SID")?(this.s=3,et(12)):(this.s=0,et(13)),fr(this),Xi(this)}}}catch{}finally{}};function wf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function uE(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?mu:(d=Number(c.substring(d,p)),isNaN(d)?vf:(p+=1,p+d>c.length?mu:(c=c.slice(p,p+d),a.C=p+d,c)))}Sn.prototype.cancel=function(){this.J=!0,fr(this)};function ko(a){a.S=Date.now()+a.I,Tf(a,a.I)}function Tf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Qi(y(a.ba,a),c)}function yu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Sn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(aE(this.i,this.A),this.L!=2&&(Gi(),et(17)),fr(this),this.s=2,Xi(this)):Tf(this,this.S-a)};function Xi(a){a.j.G==0||a.J||Gf(a.j,a)}function fr(a){yu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,cf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function _u(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||vu(d.h,a))){if(!a.K&&vu(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var C=p;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)bo(d),Mo(d);else break e;Iu(d),et(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Qi(y(d.Za,d),6e3));if(1>=Af(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else mr(d,11)}else if((a.K||d.g==a)&&bo(d),!E(c))for(C=d.Da.g.parse(c),c=0;c<C.length;c++){let ie=C[c];if(d.T=ie[0],ie=ie[1],d.G==2)if(ie[0]=="c"){d.K=ie[1],d.ia=ie[2];const $e=ie[3];$e!=null&&(d.la=$e,d.j.info("VER="+d.la));const He=ie[4];He!=null&&(d.Aa=He,d.j.info("SVER="+d.Aa));const Hr=ie[5];Hr!=null&&typeof Hr=="number"&&0<Hr&&(p=1.5*Hr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Ct=a.g;if(Ct){const zo=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zo){var N=p.h;N.g||zo.indexOf("spdy")==-1&&zo.indexOf("quic")==-1&&zo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Eu(N,N.h),N.h=null))}if(p.D){const Au=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;Au&&(p.ya=Au,ce(p.I,p.D,Au))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var F=a;if(p.qa=Xf(p,p.J?p.ia:null,p.W),F.K){Rf(p.h,F);var le=F,xe=p.L;xe&&(le.I=xe),le.B&&(yu(le),ko(le)),p.g=F}else qf(p);0<d.i.length&&Fo(d)}else ie[0]!="stop"&&ie[0]!="close"||mr(d,7);else d.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?mr(d,7):Tu(d):ie[0]!="noop"&&d.l&&d.l.ta(ie),d.v=0)}}Gi(4)}catch{}}var cE=class{constructor(a,c){this.g=a,this.map=c}};function If(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Af(a){return a.h?1:a.g?a.g.size:0}function vu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Eu(a,c){a.g?a.g.add(c):a.h=c}function Rf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}If.prototype.cancel=function(){if(this.i=Cf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Cf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return D(a.i)}function hE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function dE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function Pf(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=dE(a),p=hE(a),C=p.length,N=0;N<C;N++)c.call(void 0,p[N],d&&d[N],a)}var kf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),C=null;if(0<=p){var N=a[d].substring(0,p);C=a[d].substring(p+1)}else N=a[d];c(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function pr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof pr){this.h=a.h,No(this,a.j),this.o=a.o,this.g=a.g,Do(this,a.s),this.l=a.l;var c=a.i,d=new es;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Nf(this,d),this.m=a.m}else a&&(c=String(a).match(kf))?(this.h=!1,No(this,c[1]||"",!0),this.o=Ji(c[2]||""),this.g=Ji(c[3]||"",!0),Do(this,c[4]),this.l=Ji(c[5]||"",!0),Nf(this,c[6]||"",!0),this.m=Ji(c[7]||"")):(this.h=!1,this.i=new es(null,this.h))}pr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Zi(c,Df,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Zi(c,Df,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Zi(d,d.charAt(0)=="/"?gE:mE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Zi(d,_E)),a.join("")};function tn(a){return new pr(a)}function No(a,c,d){a.j=d?Ji(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Do(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Nf(a,c,d){c instanceof es?(a.i=c,vE(a.i,a.h)):(d||(c=Zi(c,yE)),a.i=new es(c,a.h))}function ce(a,c,d){a.i.set(c,d)}function Vo(a){return ce(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ji(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Zi(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,pE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function pE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Df=/[#\/\?@]/g,mE=/[#\?:]/g,gE=/[#\?]/g,yE=/[#\?@]/g,_E=/#/g;function es(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function An(a){a.g||(a.g=new Map,a.h=0,a.i&&fE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=es.prototype,t.add=function(a,c){An(this),this.i=null,a=Br(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Vf(a,c){An(a),c=Br(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Of(a,c){return An(a),c=Br(a,c),a.g.has(c)}t.forEach=function(a,c){An(this),this.g.forEach(function(d,p){d.forEach(function(C){a.call(c,C,p,this)},this)},this)},t.na=function(){An(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const C=a[p];for(let N=0;N<C.length;N++)d.push(c[p])}return d},t.V=function(a){An(this);let c=[];if(typeof a=="string")Of(this,a)&&(c=c.concat(this.g.get(Br(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return An(this),this.i=null,a=Br(this,a),Of(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Lf(a,c,d){Vf(a,c),0<d.length&&(a.i=null,a.g.set(Br(a,c),D(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const N=encodeURIComponent(String(p)),F=this.V(p);for(p=0;p<F.length;p++){var C=N;F[p]!==""&&(C+="="+encodeURIComponent(String(F[p]))),a.push(C)}}return this.i=a.join("&")};function Br(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function vE(a,c){c&&!a.j&&(An(a),a.i=null,a.g.forEach(function(d,p){var C=p.toLowerCase();p!=C&&(Vf(this,p),Lf(this,C,d))},a)),a.j=c}function EE(a,c){const d=new Yi;if(l.Image){const p=new Image;p.onload=R(Rn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=R(Rn,d,"TestLoadImage: error",!1,c,p),p.onabort=R(Rn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=R(Rn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function wE(a,c){const d=new Yi,p=new AbortController,C=setTimeout(()=>{p.abort(),Rn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(N=>{clearTimeout(C),N.ok?Rn(d,"TestPingServer: ok",!0,c):Rn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),Rn(d,"TestPingServer: error",!1,c)})}function Rn(a,c,d,p,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),p(d)}catch{}}function TE(){this.g=new iE}function IE(a,c,d){const p=d||"";try{Pf(a,function(C,N){let F=C;h(C)&&(F=cu(C)),c.push(p+N+"="+encodeURIComponent(F))})}catch(C){throw c.push(p+"type="+encodeURIComponent("_badmap")),C}}function Oo(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Oo,hu),Oo.prototype.g=function(){return new Lo(this.l,this.j)},Oo.prototype.i=function(a){return function(){return a}}({});function Lo(a,c){Be.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Lo,Be),t=Lo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ns(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ts(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ns(this)),this.g&&(this.readyState=3,ns(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function xf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ts(this):ns(this),this.readyState==3&&xf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ts(this))},t.Qa=function(a){this.g&&(this.response=a,ts(this))},t.ga=function(){this.g&&ts(this)};function ts(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ns(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ns(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Lo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Mf(a){let c="";return b(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function wu(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Mf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ce(a,c,d))}function Ee(a){Be.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Ee,Be);var SE=/^https?$/i,AE=["POST","PUT"];t=Ee.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pu.g(),this.v=this.o?hf(this.o):hf(pu),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){Ff(this,N);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var C in p)d.set(C,p[C]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const N of p.keys())d.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(AE,c,void 0))||p||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,F]of d)this.g.setRequestHeader(N,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zf(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Ff(this,N)}};function Ff(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,bf(a),xo(a)}function bf(a){a.A||(a.A=!0,Ze(a,"complete"),Ze(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ze(this,"complete"),Ze(this,"abort"),xo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xo(this,!0)),Ee.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Uf(this):this.bb())},t.bb=function(){Uf(this)};function Uf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||nn(a)!=4||a.Z()!=2)){if(a.u&&nn(a)==4)af(a.Ea,0,a);else if(Ze(a,"readystatechange"),nn(a)==4){a.h=!1;try{const F=a.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=F===0){var C=String(a.D).match(kf)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),p=!SE.test(C?C.toLowerCase():"")}d=p}if(d)Ze(a,"complete"),Ze(a,"success");else{a.m=6;try{var N=2<nn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",bf(a)}}finally{xo(a)}}}}function xo(a,c){if(a.g){zf(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||Ze(a,"ready");try{d.onreadystatechange=p}catch{}}}function zf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function nn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),rE(c)}};function jf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function RE(a){const c={};a=(a.g&&2<=nn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(E(a[p]))continue;var d=A(a[p]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[C]||[];c[C]=N,N.push(d)}v(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Bf(a){this.Aa=0,this.i=[],this.j=new Yi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rs("baseRetryDelayMs",5e3,a),this.cb=rs("retryDelaySeedMs",1e4,a),this.Wa=rs("forwardChannelMaxRetries",2,a),this.wa=rs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new If(a&&a.concurrentRequestLimit),this.Da=new TE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Bf.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){et(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Xf(this,null,this.W),Fo(this)};function Tu(a){if($f(a),a.G==3){var c=a.U++,d=tn(a.I);if(ce(d,"SID",a.K),ce(d,"RID",c),ce(d,"TYPE","terminate"),is(a,d),c=new Sn(a,a.j,c),c.L=2,c.v=Vo(tn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Jf(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ko(c)}Yf(a)}function Mo(a){a.g&&(Su(a),a.g.cancel(),a.g=null)}function $f(a){Mo(a),a.u&&(l.clearTimeout(a.u),a.u=null),bo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Fo(a){if(!Sf(a.h)&&!a.s){a.s=!0;var c=a.Ga;Yt||Y(),z||(Yt(),z=!0),K.add(c,a),a.B=0}}function CE(a,c){return Af(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Qi(y(a.Ga,a,c),Qf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Sn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=g(N),w(N,this.S)):N=this.S),this.m!==null||this.O||(C.H=N,N=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Wf(this,C,c),d=tn(this.I),ce(d,"RID",a),ce(d,"CVER",22),this.D&&ce(d,"X-HTTP-Session-Id",this.D),is(this,d),N&&(this.O?c="headers="+encodeURIComponent(String(Mf(N)))+"&"+c:this.m&&wu(d,this.m,N)),Eu(this.h,C),this.Ua&&ce(d,"TYPE","init"),this.P?(ce(d,"$req",c),ce(d,"SID","null"),C.T=!0,gu(C,d,null)):gu(C,d,c),this.G=2}}else this.G==3&&(a?Hf(this,a):this.i.length==0||Sf(this.h)||Hf(this))};function Hf(a,c){var d;c?d=c.l:d=a.U++;const p=tn(a.I);ce(p,"SID",a.K),ce(p,"RID",d),ce(p,"AID",a.T),is(a,p),a.m&&a.o&&wu(p,a.m,a.o),d=new Sn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Wf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Eu(a.h,d),gu(d,p,c)}function is(a,c){a.H&&b(a.H,function(d,p){ce(c,p,d)}),a.l&&Pf({},function(d,p){ce(c,p,d)})}function Wf(a,c,d){d=Math.min(a.i.length,d);var p=a.l?y(a.l.Na,a.l,a):null;e:{var C=a.i;let N=-1;for(;;){const F=["count="+d];N==-1?0<d?(N=C[0].g,F.push("ofs="+N)):N=0:F.push("ofs="+N);let le=!0;for(let xe=0;xe<d;xe++){let ie=C[xe].g;const $e=C[xe].map;if(ie-=N,0>ie)N=Math.max(0,C[xe].g-100),le=!1;else try{IE($e,F,"req"+ie+"_")}catch{p&&p($e)}}if(le){p=F.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function qf(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Yt||Y(),z||(Yt(),z=!0),K.add(c,a),a.v=0}}function Iu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Qi(y(a.Fa,a),Qf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Kf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Qi(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,et(10),Mo(this),Kf(this))};function Su(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Kf(a){a.g=new Sn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=tn(a.qa);ce(c,"RID","rpc"),ce(c,"SID",a.K),ce(c,"AID",a.T),ce(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ce(c,"TO",a.ja),ce(c,"TYPE","xmlhttp"),is(a,c),a.m&&a.o&&wu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Vo(tn(c)),d.m=null,d.P=!0,Ef(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Mo(this),Iu(this),et(19))};function bo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Gf(a,c){var d=null;if(a.g==c){bo(a),Su(a),a.g=null;var p=2}else if(vu(a.h,c))d=c.D,Rf(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var C=a.B;p=Ro(),Ze(p,new gf(p,d)),Fo(a)}else qf(a);else if(C=c.s,C==3||C==0&&0<c.X||!(p==1&&CE(a,c)||p==2&&Iu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),C){case 1:mr(a,5);break;case 4:mr(a,10);break;case 3:mr(a,6);break;default:mr(a,2)}}}function Qf(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function mr(a,c){if(a.j.info("Error code "+c),c==2){var d=y(a.fb,a),p=a.Xa;const C=!p;p=new pr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||No(p,"https"),Vo(p),C?EE(p.toString(),d):wE(p.toString(),d)}else et(2);a.G=0,a.l&&a.l.sa(c),Yf(a),$f(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function Yf(a){if(a.G=0,a.ka=[],a.l){const c=Cf(a.h);(c.length!=0||a.i.length!=0)&&(x(a.ka,c),x(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function Xf(a,c,d){var p=d instanceof pr?tn(d):new pr(d);if(p.g!="")c&&(p.g=c+"."+p.g),Do(p,p.s);else{var C=l.location;p=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var N=new pr(null);p&&No(N,p),c&&(N.g=c),C&&Do(N,C),d&&(N.l=d),p=N}return d=a.D,c=a.ya,d&&c&&ce(p,d,c),ce(p,"VER",a.la),is(a,p),p}function Jf(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ee(new Oo({eb:d})):new Ee(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zf(){}t=Zf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Uo(){}Uo.prototype.g=function(a,c){return new ht(a,c)};function ht(a,c){Be.call(this),this.g=new Bf(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!E(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new $r(this)}k(ht,Be),ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ht.prototype.close=function(){Tu(this.g)},ht.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=cu(a),a=d);c.i.push(new cE(c.Ya++,a)),c.G==3&&Fo(c)},ht.prototype.N=function(){this.g.l=null,delete this.j,Tu(this.g),delete this.g,ht.aa.N.call(this)};function ep(a){du.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}k(ep,du);function tp(){fu.call(this),this.status=1}k(tp,fu);function $r(a){this.g=a}k($r,Zf),$r.prototype.ua=function(){Ze(this.g,"a")},$r.prototype.ta=function(a){Ze(this.g,new ep(a))},$r.prototype.sa=function(a){Ze(this.g,new tp)},$r.prototype.ra=function(){Ze(this.g,"b")},Uo.prototype.createWebChannel=Uo.prototype.g,ht.prototype.send=ht.prototype.o,ht.prototype.open=ht.prototype.m,ht.prototype.close=ht.prototype.close,Fv=function(){return new Uo},Mv=function(){return Ro()},xv=dr,uh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Co.NO_ERROR=0,Co.TIMEOUT=8,Co.HTTP_ERROR=6,Ca=Co,yf.COMPLETE="complete",Lv=yf,df.EventType=Ki,Ki.OPEN="a",Ki.CLOSE="b",Ki.ERROR="c",Ki.MESSAGE="d",Be.prototype.listen=Be.prototype.K,vs=df,Ee.prototype.listenOnce=Ee.prototype.L,Ee.prototype.getLastError=Ee.prototype.Ka,Ee.prototype.getLastErrorCode=Ee.prototype.Ba,Ee.prototype.getStatus=Ee.prototype.Z,Ee.prototype.getResponseJson=Ee.prototype.Oa,Ee.prototype.getResponseText=Ee.prototype.oa,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Ha,Ov=Ee}).apply(typeof sa<"u"?sa:typeof self<"u"?self:typeof window<"u"?window:{});const Bm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new yd("@firebase/firestore");function qr(){return Or.logLevel}function j(t,...e){if(Or.logLevel<=J.DEBUG){const n=e.map(Nd);Or.debug(`Firestore (${ji}): ${t}`,...n)}}function En(t,...e){if(Or.logLevel<=J.ERROR){const n=e.map(Nd);Or.error(`Firestore (${ji}): ${t}`,...n)}}function Pi(t,...e){if(Or.logLevel<=J.WARN){const n=e.map(Nd);Or.warn(`Firestore (${ji}): ${t}`,...n)}}function Nd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t="Unexpected state"){const e=`FIRESTORE (${ji}) INTERNAL ASSERTION FAILED: `+t;throw En(e),new Error(e)}function se(t,e){t||q()}function Q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends In{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class GA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QA{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){se(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Jn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string"),new bv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string"),new Ge(e)}}class YA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class XA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new YA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){se(this.o===void 0);const r=s=>{s.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(se(typeof n.token=="string"),this.R=n.token,new JA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=eR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function ki(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ne(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{static fromTimestamp(e){return new G(e)}static min(){return new G(new Ne(0,0))}static max(){return new G(new Ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n,r){n===void 0?n=0:n>e.length&&q(),r===void 0?r=e.length-n:r>e.length-n&&q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return no.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof no?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class pe extends no{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const tR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class be extends no{construct(e,n,r){return new be(e,n,r)}static isValidIdentifier(e){return tR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new be(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new $(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new be(n)}static emptyPath(){return new be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(pe.fromString(e))}static fromName(e){return new H(pe.fromString(e).popFirst(5))}static empty(){return new H(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new pe(e.slice()))}}function nR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new nr(i,H.empty(),e)}function rR(t){return new nr(t.readTime,t.key,-1)}class nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new nr(G.min(),H.empty(),-1)}static max(){return new nr(G.max(),H.empty(),-1)}}function iR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==sR)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function aR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function $i(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}$l.oe=-1;function Hl(t){return t==null}function hl(t){return t===0&&1/t==-1/0}function lR(t){return typeof t=="number"&&Number.isInteger(t)&&!hl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=$m(e)),e=cR(t.get(n),e);return $m(e)}function cR(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function $m(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oa(this.root,e,this.comparator,!1)}getReverseIterator(){return new oa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oa(this.root,e,this.comparator,!0)}}class oa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Fe.RED,this.left=i??Fe.EMPTY,this.right=s??Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Fe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Fe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wm(this.data.getIterator())}getIteratorFrom(e){return new Wm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new De(this.comparator);return n.data=e,n}}class Wm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new De(be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ki(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new jv("Invalid base64 string: "+s):s}}(e);return new je(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}je.EMPTY_BYTE_STRING=new je("");const hR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rr(t){if(se(!!t),typeof t=="string"){let e=0;const n=hR.exec(t);if(se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(t.seconds),nanos:Ie(t.nanos)}}function Ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ir(t){return typeof t=="string"?je.fromBase64String(t):je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wl(t){const e=t.mapValue.fields.__previous_value__;return Dd(e)?Wl(e):e}function ro(t){const e=rr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class io{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new io("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof io&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dd(t)?4:pR(t)?9007199254740991:fR(t)?10:11:q()}function Gt(t,e){if(t===e)return!0;const n=sr(t);if(n!==sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ro(t).isEqual(ro(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=rr(i.timestampValue),l=rr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ir(i.bytesValue).isEqual(ir(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ie(i.geoPointValue.latitude)===Ie(s.geoPointValue.latitude)&&Ie(i.geoPointValue.longitude)===Ie(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ie(i.integerValue)===Ie(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ie(i.doubleValue),l=Ie(s.doubleValue);return o===l?hl(o)===hl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ki(t.arrayValue.values||[],e.arrayValue.values||[],Gt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Hm(o)!==Hm(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Gt(o[u],l[u])))return!1;return!0}(t,e);default:return q()}}function so(t,e){return(t.values||[]).find(n=>Gt(n,e))!==void 0}function Ni(t,e){if(t===e)return 0;const n=sr(t),r=sr(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ie(s.integerValue||s.doubleValue),u=Ie(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return qm(t.timestampValue,e.timestampValue);case 4:return qm(ro(t),ro(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ir(s),u=ir(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ee(l[h],u[h]);if(f!==0)return f}return ee(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ee(Ie(s.latitude),Ie(o.latitude));return l!==0?l:ee(Ie(s.longitude),Ie(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Km(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const m=s.fields||{},y=o.fields||{},R=(l=m.value)===null||l===void 0?void 0:l.arrayValue,k=(u=y.value)===null||u===void 0?void 0:u.arrayValue,D=ee(((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Km(R,k)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===aa.mapValue&&o===aa.mapValue)return 0;if(s===aa.mapValue)return 1;if(o===aa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=ee(u[m],f[m]);if(y!==0)return y;const R=Ni(l[u[m]],h[f[m]]);if(R!==0)return R}return ee(u.length,f.length)}(t.mapValue,e.mapValue);default:throw q()}}function qm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=rr(t),r=rr(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function Km(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ni(n[i],r[i]);if(s)return s}return ee(n.length,r.length)}function Di(t){return ch(t)}function ch(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ir(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ch(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ch(n.fields[o])}`;return i+"}"}(t.mapValue):q()}function Pa(t){switch(sr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Wl(t);return e?16+Pa(e):16;case 5:return 2*t.stringValue.length;case 6:return ir(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Pa(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Fr(r.fields,(s,o)=>{i+=s.length+Pa(o)}),i}(t.mapValue);default:throw q()}}function hh(t){return!!t&&"integerValue"in t}function Vd(t){return!!t&&"arrayValue"in t}function Gm(t){return!!t&&"nullValue"in t}function Qm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ka(t){return!!t&&"mapValue"in t}function fR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Vs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Vs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Vs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function pR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ka(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vs(n)}setAll(e){let n=be.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Vs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ka(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ka(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Fr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new wt(Vs(this.value))}}function Bv(t){const e=[];return Fr(t.fields,(n,r)=>{const i=new be([n]);if(ka(r)){const s=Bv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ye(e,0,G.min(),G.min(),G.min(),wt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ye(e,1,n,G.min(),r,i,0)}static newNoDocument(e,n){return new Ye(e,2,n,G.min(),G.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new Ye(e,3,n,G.min(),G.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n){this.position=e,this.inclusive=n}}function Ym(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Ni(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n="asc"){this.field=e,this.dir=n}}function mR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{}class Pe extends $v{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new yR(e,n,r):n==="array-contains"?new ER(e,r):n==="in"?new wR(e,r):n==="not-in"?new TR(e,r):n==="array-contains-any"?new IR(e,r):new Pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new _R(e,r):new vR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ni(n,this.value)):n!==null&&sr(this.value)===sr(n)&&this.matchesComparison(Ni(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qt extends $v{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Qt(e,n)}matches(e){return Hv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Hv(t){return t.op==="and"}function Wv(t){return gR(t)&&Hv(t)}function gR(t){for(const e of t.filters)if(e instanceof Qt)return!1;return!0}function dh(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+Di(t.value);if(Wv(t))return t.filters.map(e=>dh(e)).join(",");{const e=t.filters.map(n=>dh(n)).join(",");return`${t.op}(${e})`}}function qv(t,e){return t instanceof Pe?function(r,i){return i instanceof Pe&&r.op===i.op&&r.field.isEqual(i.field)&&Gt(r.value,i.value)}(t,e):t instanceof Qt?function(r,i){return i instanceof Qt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&qv(o,i.filters[l]),!0):!1}(t,e):void q()}function Kv(t){return t instanceof Pe?function(n){return`${n.field.canonicalString()} ${n.op} ${Di(n.value)}`}(t):t instanceof Qt?function(n){return n.op.toString()+" {"+n.getFilters().map(Kv).join(" ,")+"}"}(t):"Filter"}class yR extends Pe{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class _R extends Pe{constructor(e,n){super(e,"in",n),this.keys=Gv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vR extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=Gv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Gv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class ER extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vd(n)&&so(n.arrayValue,this.value)}}class wR extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&so(this.value.arrayValue,n)}}class TR extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(so(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!so(this.value.arrayValue,n)}}class IR extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>so(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Jm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new SR(t,e,n,r,i,s,o)}function Od(t){const e=Q(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>dh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Hl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Di(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Di(r)).join(",")),e.ue=n}return e.ue}function Ld(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xm(t.startAt,e.startAt)&&Xm(t.endAt,e.endAt)}function fh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function AR(t,e,n,r,i,s,o,l){return new ql(t,e,n,r,i,s,o,l)}function Qv(t){return new ql(t)}function Zm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function RR(t){return t.collectionGroup!==null}function Os(t){const e=Q(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new De(be.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new fl(s,r))}),n.has(be.keyField().canonicalString())||e.ce.push(new fl(be.keyField(),r))}return e.ce}function qt(t){const e=Q(t);return e.le||(e.le=CR(e,Os(t))),e.le}function CR(t,e){if(t.limitType==="F")return Jm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new fl(i.field,s)});const n=t.endAt?new dl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new dl(t.startAt.position,t.startAt.inclusive):null;return Jm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ph(t,e,n){return new ql(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Kl(t,e){return Ld(qt(t),qt(e))&&t.limitType===e.limitType}function Yv(t){return`${Od(qt(t))}|lt:${t.limitType}`}function Kr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Kv(i)).join(", ")}]`),Hl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Di(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Di(i)).join(",")),`Target(${r})`}(qt(t))}; limitType=${t.limitType})`}function Gl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Os(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Ym(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Os(r),i)||r.endAt&&!function(o,l,u){const h=Ym(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Os(r),i))}(t,e)}function PR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xv(t){return(e,n)=>{let r=!1;for(const i of Os(t)){const s=kR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function kR(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Ni(u,h):q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return zv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=new ve(H.comparator);function wn(){return NR}const Jv=new ve(H.comparator);function Es(...t){let e=Jv;for(const n of t)e=e.insert(n.key,n);return e}function Zv(t){let e=Jv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Tr(){return Ls()}function e0(){return Ls()}function Ls(){return new br(t=>t.toString(),(t,e)=>t.isEqual(e))}const DR=new ve(H.comparator),VR=new De(H.comparator);function Z(...t){let e=VR;for(const n of t)e=e.add(n);return e}const OR=new De(ee);function LR(){return OR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hl(e)?"-0":e}}function t0(t){return{integerValue:""+t}}function xR(t,e){return lR(e)?t0(e):xd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(){this._=void 0}}function MR(t,e,n){return t instanceof pl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Dd(s)&&(s=Wl(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof oo?r0(t,e):t instanceof ao?i0(t,e):function(i,s){const o=n0(i,s),l=eg(o)+eg(i.Pe);return hh(o)&&hh(i.Pe)?t0(l):xd(i.serializer,l)}(t,e)}function FR(t,e,n){return t instanceof oo?r0(t,e):t instanceof ao?i0(t,e):n}function n0(t,e){return t instanceof ml?function(r){return hh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class pl extends Ql{}class oo extends Ql{constructor(e){super(),this.elements=e}}function r0(t,e){const n=s0(e);for(const r of t.elements)n.some(i=>Gt(i,r))||n.push(r);return{arrayValue:{values:n}}}class ao extends Ql{constructor(e){super(),this.elements=e}}function i0(t,e){let n=s0(e);for(const r of t.elements)n=n.filter(i=>!Gt(i,r));return{arrayValue:{values:n}}}class ml extends Ql{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function eg(t){return Ie(t.integerValue||t.doubleValue)}function s0(t){return Vd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function bR(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof oo&&i instanceof oo||r instanceof ao&&i instanceof ao?ki(r.elements,i.elements,Gt):r instanceof ml&&i instanceof ml?Gt(r.Pe,i.Pe):r instanceof pl&&i instanceof pl}(t.transform,e.transform)}class UR{constructor(e,n){this.version=e,this.transformResults=n}}class fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fn}static exists(e){return new fn(void 0,e)}static updateTime(e){return new fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Na(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yl{}function o0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new l0(t.key,fn.none()):new vo(t.key,t.data,fn.none());{const n=t.data,r=wt.empty();let i=new De(be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ur(t.key,r,new Vt(i.toArray()),fn.none())}}function zR(t,e,n){t instanceof vo?function(i,s,o){const l=i.value.clone(),u=ng(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ur?function(i,s,o){if(!Na(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=ng(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(a0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function xs(t,e,n,r){return t instanceof vo?function(s,o,l,u){if(!Na(s.precondition,o))return l;const h=s.value.clone(),f=rg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ur?function(s,o,l,u){if(!Na(s.precondition,o))return l;const h=rg(s.fieldTransforms,u,o),f=o.data;return f.setAll(a0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Na(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function jR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=n0(r.transform,i||null);s!=null&&(n===null&&(n=wt.empty()),n.set(r.field,s))}return n||null}function tg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ki(r,i,(s,o)=>bR(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class vo extends Yl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ur extends Yl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function a0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ng(t,e,n){const r=new Map;se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,FR(o,l,n[i]))}return r}function rg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,MR(s,o,e))}return r}class l0 extends Yl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class BR extends Yl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&zR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=xs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=xs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=e0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=o0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&ki(this.mutations,e.mutations,(n,r)=>tg(n,r))&&ki(this.baseMutations,e.baseMutations,(n,r)=>tg(n,r))}}class Md{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){se(e.mutations.length===r.length);let i=function(){return DR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Md(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,te;function qR(t){switch(t){default:return q();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function u0(t){if(t===void 0)return En("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ae.OK:return L.OK;case Ae.CANCELLED:return L.CANCELLED;case Ae.UNKNOWN:return L.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return L.INTERNAL;case Ae.UNAVAILABLE:return L.UNAVAILABLE;case Ae.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ae.NOT_FOUND:return L.NOT_FOUND;case Ae.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ae.ABORTED:return L.ABORTED;case Ae.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ae.DATA_LOSS:return L.DATA_LOSS;default:return q()}}(te=Ae||(Ae={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR=new Ar([4294967295,4294967295],0);function ig(t){const e=KR().encode(t),n=new Vv;return n.update(e),new Uint8Array(n.digest())}function sg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ar([n,r],0),new Ar([i,s],0)]}class Fd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ws(`Invalid padding: ${n}`);if(r<0)throw new ws(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ws(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ws(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Ar.fromNumber(this.Te)}Ee(e,n,r){let i=e.add(n.multiply(Ar.fromNumber(r)));return i.compare(GR)===1&&(i=new Ar([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=ig(e),[r,i]=sg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Fd(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=ig(e),[r,i]=sg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Eo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Xl(G.min(),i,new ve(ee),wn(),Z())}}class Eo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Eo(r,n,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class c0{constructor(e,n){this.targetId=e,this.me=n}}class h0{constructor(e,n,r=je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class og{constructor(){this.fe=0,this.ge=ag(),this.pe=je.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Z(),n=Z(),r=Z();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:q()}}),new Eo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=ag()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class QR{constructor(e){this.Le=e,this.Be=new Map,this.ke=wn(),this.qe=la(),this.Qe=la(),this.Ke=new ve(ee)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.me.count,i=this.Ye(n);if(i){const s=i.target;if(fh(s))if(r===0){const o=new H(s.path);this.We(n,o,Ye.newNoDocument(o,G.min()))}else se(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),u=l?this.et(l,e,o):1;if(u!==0){this.He(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ir(r).toUint8Array()}catch(u){if(u instanceof jv)return Pi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Fd(o,i,s)}catch(u){return Pi(u instanceof ws?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Ye(o);if(l){if(s.current&&fh(l.target)){const u=new H(l.target.path);this.st(u).has(o)||this.ot(o,u)||this.We(o,u,Ye.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=Z();this.Qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Ye(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Xl(e,n,this.Ke,this.ke,r);return this.ke=wn(),this.qe=la(),this.Qe=la(),this.Ke=new ve(ee),i}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,n)?i.Fe(n,1):i.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new og,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new De(ee),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new De(ee),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new og),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function la(){return new ve(H.comparator)}function ag(){return new ve(H.comparator)}const YR={asc:"ASCENDING",desc:"DESCENDING"},XR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},JR={and:"AND",or:"OR"};class ZR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function mh(t,e){return t.useProto3Json||Hl(e)?e:{value:e}}function gl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function d0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function eC(t,e){return gl(t,e.toTimestamp())}function Kt(t){return se(!!t),G.fromTimestamp(function(n){const r=rr(n);return new Ne(r.seconds,r.nanos)}(t))}function bd(t,e){return gh(t,e).canonicalString()}function gh(t,e){const n=function(i){return new pe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function f0(t){const e=pe.fromString(t);return se(_0(e)),e}function yh(t,e){return bd(t.databaseId,e.path)}function sc(t,e){const n=f0(e);if(n.get(1)!==t.databaseId.projectId)throw new $(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(m0(n))}function p0(t,e){return bd(t.databaseId,e)}function tC(t){const e=f0(t);return e.length===4?pe.emptyPath():m0(e)}function _h(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function m0(t){return se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function lg(t,e,n){return{name:yh(t,e),fields:n.value.mapValue.fields}}function nC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(se(f===void 0||typeof f=="string"),je.fromBase64String(f||"")):(se(f===void 0||f instanceof Buffer||f instanceof Uint8Array),je.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:u0(h.code);return new $(f,h.message||"")}(o);n=new h0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=sc(t,r.document.name),s=Kt(r.document.updateTime),o=r.document.createTime?Kt(r.document.createTime):G.min(),l=new wt({mapValue:{fields:r.document.fields}}),u=Ye.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Da(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=sc(t,r.document),s=r.readTime?Kt(r.readTime):G.min(),o=Ye.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Da([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=sc(t,r.document),s=r.removedTargetIds||[];n=new Da([],s,i,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new WR(i,s),l=r.targetId;n=new c0(l,o)}}return n}function rC(t,e){let n;if(e instanceof vo)n={update:lg(t,e.key,e.value)};else if(e instanceof l0)n={delete:yh(t,e.key)};else if(e instanceof Ur)n={update:lg(t,e.key,e.data),updateMask:dC(e.fieldMask)};else{if(!(e instanceof BR))return q();n={verify:yh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof pl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof oo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ao)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ml)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:eC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q()}(t,e.precondition)),n}function iC(t,e){return t&&t.length>0?(se(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Kt(i.updateTime):Kt(s);return o.isEqual(G.min())&&(o=Kt(s)),new UR(o,i.transformResults||[])}(n,e))):[]}function sC(t,e){return{documents:[p0(t,e.path)]}}function oC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=p0(t,i);const s=function(h){if(h.length!==0)return y0(Qt.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Gr(y.field),direction:uC(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=mh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ct:n,parent:i}}function aC(t){let e=tC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){se(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const y=g0(m);return y instanceof Qt&&Wv(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(k){return new fl(Qr(k.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,Hl(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,R=m.values||[];return new dl(R,y)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const y=!m.before,R=m.values||[];return new dl(R,y)}(n.endAt)),AR(e,i,o,s,l,"F",u,h)}function lC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function g0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qr(n.unaryFilter.field);return Pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qr(n.unaryFilter.field);return Pe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qr(n.unaryFilter.field);return Pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qr(n.unaryFilter.field);return Pe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(t):t.fieldFilter!==void 0?function(n){return Pe.create(Qr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Qt.create(n.compositeFilter.filters.map(r=>g0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q()}}(n.compositeFilter.op))}(t):q()}function uC(t){return YR[t]}function cC(t){return XR[t]}function hC(t){return JR[t]}function Gr(t){return{fieldPath:t.canonicalString()}}function Qr(t){return be.fromServerFormat(t.fieldPath)}function y0(t){return t instanceof Pe?function(n){if(n.op==="=="){if(Qm(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NAN"}};if(Gm(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Qm(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NAN"}};if(Gm(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gr(n.field),op:cC(n.op),value:n.value}}}(t):t instanceof Qt?function(n){const r=n.getFilters().map(i=>y0(i));return r.length===1?r[0]:{compositeFilter:{op:hC(n.op),filters:r}}}(t):q()}function dC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n,r,i,s=G.min(),o=G.min(),l=je.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.ht=e}}function pC(t){const e=aC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ph(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(){this.ln=new gC}addToCollectionParentIndex(e,n){return this.ln.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(nr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class gC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new De(pe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new De(pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class st{static withCacheSize(e){return new st(e,st.DEFAULT_COLLECTION_PERCENTILE,st.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */st.DEFAULT_COLLECTION_PERCENTILE=10,st.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,st.DEFAULT=new st(41943040,st.DEFAULT_COLLECTION_PERCENTILE,st.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),st.DISABLED=new st(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Vi(0)}static Qn(){return new Vi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg([t,e],[n,r]){const i=ee(t,n);return i===0?ee(e,r):i}class yC{constructor(e){this.Gn=e,this.buffer=new De(cg),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();cg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class _C{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){j("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){$i(n)?j("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Bi(n)}await this.Yn(3e5)})}}class vC{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve($l.oe);const r=new yC(n);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(ug)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ug):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),qr()<=J.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function EC(t,e){return new vC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(){this.changes=new br(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&xs(r.mutation,i,Vt.empty(),Ne.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const i=Tr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Es();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Tr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=wn();const o=Ls(),l=function(){return Ls()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Ur)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),xs(f.mutation,h,f.mutation.getFieldMask(),Ne.now())):o.set(h.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new TC(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ls();let i=new ve((o,l)=>o-l),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Vt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||Z()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=e0();f.forEach(y=>{if(!s.has(y)){const R=o0(n.get(y),r.get(y));R!==null&&m.set(y,R),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):RR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Tr());let l=-1,u=s;return o.next(h=>O.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,Z())).next(f=>({batchId:l,changes:Zv(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Es();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Es();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const h=function(m,y){return new ql(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ye.newInvalidDocument(f)))});let l=Es();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&xs(f.mutation,h,Vt.empty(),Ne.now()),Gl(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return O.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Kt(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(i){return{name:i.name,query:pC(i.bundledQuery),readTime:Kt(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(){this.overlays=new ve(H.comparator),this.Er=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Tr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Tt(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Tr(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ve((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Tr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Tr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return O.resolve(l)}Tt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new HR(n,r));let s=this.Er.get(n);s===void 0&&(s=Z(),this.Er.set(n,s)),this.Er.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.sessionToken=je.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.dr=new De(Ve.Ar),this.Rr=new De(Ve.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new Ve(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new H(new pe([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.Rr.forEachInRange([r,i],o=>{this.gr(o),s.push(o.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new H(new pe([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=Z();return this.Rr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return H.comparator(e.key,n.key)||ee(e.br,n.br)}static Vr(e,n){return ee(e.br,n.br)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new De(Ve.Ar)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $R(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.vr=this.vr.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Fr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],o=>{const l=this.Cr(o.br);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new De(ee);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,o],l=>{r=r.add(l.br)})}),O.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new H(s),0);let l=new De(ee);return this.vr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.br)),!0)},o),O.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){se(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return O.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new Ve(n,0),i=this.vr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.Nr=e,this.docs=function(){return new ve(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():Ye.newInvalidDocument(n))}getEntries(e,n){let r=wn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ye.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=wn();const o=n.path,l=new H(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||iR(rR(f),r)<=0||(i.has(f.key)||Gl(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){q()}Lr(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new kC(this)}getSize(e){return O.resolve(this.size)}}class kC extends wC{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.persistence=e,this.Br=new br(n=>Od(n),Ld),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.kr=0,this.qr=new Ud,this.targetCount=0,this.Qr=Vi.qn()}forEachTarget(e,n){return this.Br.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),O.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Vi(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Un(n),O.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,n){this.Kr={},this.overlays={},this.$r=new $l(0),this.Ur=!1,this.Ur=!0,this.Wr=new RC,this.referenceDelegate=e(this),this.Gr=new NC(this),this.indexManager=new mC,this.remoteDocumentCache=function(i){return new PC(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new fC(n),this.jr=new SC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new AC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new CC(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const i=new DC(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,n){return O.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class DC extends oR{constructor(e){super(),this.currentSequenceNumber=e}}class zd{constructor(e){this.persistence=e,this.Zr=new Ud,this.Xr=null}static ei(e){return new zd(e)}get ti(){if(this.Xr)return this.Xr;throw q()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),O.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.ti,r=>{const i=H.fromPath(r);return this.ni(e,i).next(s=>{s||n.removeEntry(i,G.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return O.or([()=>O.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class yl{constructor(e,n){this.persistence=e,this.ri=new br(r=>uR(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=EC(this,n)}static ei(e,n){return new yl(e,n)}Hr(){}Jr(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return O.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?O.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,o=>this.ir(e,o,n).next(l=>{l||(r++,s.removeEntry(o,G.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),O.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Pa(e.data.value)),n}ir(e,n,r){return O.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ri.get(n);return O.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=i}static zi(e,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new jd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return gI()?8:aR(Je())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Xi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.es(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new VC;return this.ts(e,n,o).next(l=>{if(s.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>s.result)}ns(e,n,r,i){return r.documentReadCount<this.Ji?(qr()<=J.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",Kr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),O.resolve()):(qr()<=J.DEBUG&&j("QueryEngine","Query:",Kr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(qr()<=J.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",Kr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qt(n))):O.resolve())}Xi(e,n){if(Zm(n))return O.resolve(null);let r=qt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ph(n,null,"F"),r=qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.rs(n,l);return this.ss(n,h,o,u.readTime)?this.Xi(e,ph(n,null,"F")):this.os(e,h,n,u)}))})))}es(e,n,r,i){return Zm(n)||i.isEqual(G.min())?O.resolve(null):this.Zi.getDocuments(e,r).next(s=>{const o=this.rs(n,s);return this.ss(n,o,r,i)?O.resolve(null):(qr()<=J.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Kr(n)),this.os(e,o,n,nR(i,-1)).next(l=>l))})}rs(e,n){let r=new De(Xv(e));return n.forEach((i,s)=>{Gl(e,s)&&(r=r.add(s))}),r}ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,n,r){return qr()<=J.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Kr(n)),this.Zi.getDocumentsMatchingQuery(e,n,nr.min(),r)}os(e,n,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n,r,i){this.persistence=e,this._s=n,this.serializer=i,this.us=new ve(ee),this.cs=new br(s=>Od(s),Ld),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IC(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function xC(t,e,n,r){return new LC(t,e,n,r)}async function E0(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=Z();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ts:h,removedBatchIds:o,addedBatchIds:l}))})})}function MC(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,y=m.keys();let R=O.resolve();return y.forEach(k=>{R=R.next(()=>f.getEntry(u,k)).next(D=>{const x=h.docVersions.get(k);se(x!==null),D.version.compareTo(x)<0&&(m.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Z();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function w0(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function FC(t,e){const n=Q(t),r=e.snapshotVersion;let i=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});i=n.us;const l=[];e.targetChanges.forEach((f,m)=>{const y=i.get(m);if(!y)return;l.push(n.Gr.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Gr.addMatchingKeys(s,f.addedDocuments,m)));let R=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?R=R.withResumeToken(je.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),i=i.insert(m,R),function(D,x,I){return D.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(y,R,f)&&l.push(n.Gr.updateTargetData(s,R))});let u=wn(),h=Z();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(bC(s,o,e.documentUpdates).next(f=>{u=f.Is,h=f.Es})),!r.isEqual(G.min())){const f=n.Gr.getLastRemoteSnapshotVersion(s).next(m=>n.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.us=i,s))}function bC(t,e,n){let r=Z(),i=Z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=wn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(G.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):j("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Is:o,Es:i}})}function UC(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function zC(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Gr.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Gr.allocateTargetId(r).next(o=>(i=new Un(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function vh(t,e,n){const r=Q(t),i=r.us.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$i(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function hg(t,e,n){const r=Q(t);let i=G.min(),s=Z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=Q(u),y=m.cs.get(f);return y!==void 0?O.resolve(m.us.get(y)):m.Gr.getTargetData(h,f)}(r,o,qt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?i:G.min(),n?s:Z())).next(l=>(jC(r,PR(e),l),{documents:l,ds:s})))}function jC(t,e,n){let r=t.ls.get(e)||G.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ls.set(e,r)}class dg{constructor(){this.activeTargetIds=LR()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class BC{constructor(){this._o=new dg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new dg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua=null;function oc(){return ua===null?ua=function(){return 268435456+Math.round(2147483648*Math.random())}():ua++,"0x"+ua.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="WebChannelConnection";class qC extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(n,r,i,s,o){const l=oc(),u=this.No(n,r.toUriEncodedString());j("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(h,s,o),this.Bo(n,u,h,i).then(f=>(j("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Pi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}ko(n,r,i,s,o,l){return this.Oo(n,r,i,s,o)}Lo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ji}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}No(n,r){const i=HC[n];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,i){const s=oc();return new Promise((o,l)=>{const u=new Ov;u.setWithCredentials(!0),u.listenOnce(Lv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ca.NO_ERROR:const f=u.getResponseJson();j(Ke,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Ca.TIMEOUT:j(Ke,`RPC '${e}' ${s} timed out`),l(new $(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ca.HTTP_ERROR:const m=u.getStatus();if(j(Ke,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const R=y==null?void 0:y.error;if(R&&R.status&&R.message){const k=function(x){const I=x.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(I)>=0?I:L.UNKNOWN}(R.status);l(new $(k,R.message))}else l(new $(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(L.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{j(Ke,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);j(Ke,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}qo(e,n,r){const i=oc(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Fv(),l=Mv(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Lo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");j(Ke,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let y=!1,R=!1;const k=new WC({Eo:x=>{R?j(Ke,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(y||(j(Ke,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),j(Ke,`RPC '${e}' stream ${i} sending:`,x),m.send(x))},Ao:()=>m.close()}),D=(x,I,E)=>{x.listen(I,S=>{try{E(S)}catch(V){setTimeout(()=>{throw V},0)}})};return D(m,vs.EventType.OPEN,()=>{R||(j(Ke,`RPC '${e}' stream ${i} transport opened.`),k.So())}),D(m,vs.EventType.CLOSE,()=>{R||(R=!0,j(Ke,`RPC '${e}' stream ${i} transport closed`),k.Do())}),D(m,vs.EventType.ERROR,x=>{R||(R=!0,Pi(Ke,`RPC '${e}' stream ${i} transport errored:`,x),k.Do(new $(L.UNAVAILABLE,"The operation could not be completed")))}),D(m,vs.EventType.MESSAGE,x=>{var I;if(!R){const E=x.data[0];se(!!E);const S=E,V=(S==null?void 0:S.error)||((I=S[0])===null||I===void 0?void 0:I.error);if(V){j(Ke,`RPC '${e}' stream ${i} received error:`,V);const U=V.status;let b=function(_){const w=Ae[_];if(w!==void 0)return u0(w)}(U),v=V.message;b===void 0&&(b=L.INTERNAL,v="Unknown error status: "+U+" with message "+V.message),R=!0,k.Do(new $(b,v)),m.close()}else j(Ke,`RPC '${e}' stream ${i} received:`,E),k.vo(E)}}),D(l,xv.STAT_EVENT,x=>{x.stat===uh.PROXY?j(Ke,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===uh.NOPROXY&&j(Ke,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.bo()},0),k}}function ac(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t){return new ZR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,n-r);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,n,r,i,s,o,l,u){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new T0(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(En(n.toString()),En("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===n&&this.I_(r,i)},r=>{e(()=>{const i=new $(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KC extends I0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=nC(this.serializer,e),r=function(s){if(!("targetChange"in s))return G.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?Kt(o.readTime):G.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=_h(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=fh(u)?{documents:sC(s,u)}:{query:oC(s,u).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=d0(s,o.resumeToken);const h=mh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(G.min())>0){l.readTime=gl(s,o.snapshotVersion.toTimestamp());const h=mh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=lC(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=_h(this.serializer),n.removeTarget=e,this.c_(n)}}class GC extends I0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return se(!!e.streamToken),this.lastStreamToken=e.streamToken,se(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=iC(e.writeResults,e.commitTime),r=Kt(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=_h(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>rC(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new $(L.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Oo(e,gh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(L.UNKNOWN,s.toString())})}ko(e,n,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,gh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(L.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class YC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(En(n),this.C_=!1):j("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{zr(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Q(u);h.k_.add(4),await wo(h),h.K_.set("Unknown"),h.k_.delete(4),await Zl(h)}(this))})}),this.K_=new YC(r,i)}}async function Zl(t){if(zr(t))for(const e of t.q_)await e(!0)}async function wo(t){for(const e of t.q_)await e(!1)}function S0(t,e){const n=Q(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Wd(n)?Hd(n):Hi(n).s_()&&$d(n,e))}function Bd(t,e){const n=Q(t),r=Hi(n);n.B_.delete(e),r.s_()&&A0(n,e),n.B_.size===0&&(r.s_()?r.a_():zr(n)&&n.K_.set("Unknown"))}function $d(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Hi(t).V_(e)}function A0(t,e){t.U_.xe(e),Hi(t).m_(e)}function Hd(t){t.U_=new QR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Hi(t).start(),t.K_.F_()}function Wd(t){return zr(t)&&!Hi(t).i_()&&t.B_.size>0}function zr(t){return Q(t).k_.size===0}function R0(t){t.U_=void 0}async function JC(t){t.K_.set("Online")}async function ZC(t){t.B_.forEach((e,n)=>{$d(t,e)})}async function eP(t,e){R0(t),Wd(t)?(t.K_.O_(e),Hd(t)):t.K_.set("Unknown")}async function tP(t,e,n){if(t.K_.set("Online"),e instanceof h0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.B_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.B_.delete(l),i.U_.removeTarget(l))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _l(t,r)}else if(e instanceof Da?t.U_.$e(e):e instanceof c0?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(G.min()))try{const r=await w0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.U_.it(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.B_.get(h);f&&s.B_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.B_.get(u);if(!f)return;s.B_.set(u,f.withResumeToken(je.EMPTY_BYTE_STRING,f.snapshotVersion)),A0(s,u);const m=new Un(f.target,u,h,f.sequenceNumber);$d(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await _l(t,r)}}async function _l(t,e,n){if(!$i(e))throw e;t.k_.add(1),await wo(t),t.K_.set("Offline"),n||(n=()=>w0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Zl(t)})}function C0(t,e){return e().catch(n=>_l(t,n,e))}async function eu(t){const e=Q(t),n=or(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;nP(e);)try{const i=await UC(e.localStore,r);if(i===null){e.L_.length===0&&n.a_();break}r=i.batchId,rP(e,i)}catch(i){await _l(e,i)}P0(e)&&k0(e)}function nP(t){return zr(t)&&t.L_.length<10}function rP(t,e){t.L_.push(e);const n=or(t);n.s_()&&n.f_&&n.g_(e.mutations)}function P0(t){return zr(t)&&!or(t).i_()&&t.L_.length>0}function k0(t){or(t).start()}async function iP(t){or(t).w_()}async function sP(t){const e=or(t);for(const n of t.L_)e.g_(n.mutations)}async function oP(t,e,n){const r=t.L_.shift(),i=Md.from(r,e,n);await C0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await eu(t)}async function aP(t,e){e&&or(t).f_&&await async function(r,i){if(function(o){return qR(o)&&o!==L.ABORTED}(i.code)){const s=r.L_.shift();or(r).__(),await C0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await eu(r)}}(t,e),P0(t)&&k0(t)}async function pg(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=zr(n);n.k_.add(3),await wo(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Zl(n)}async function lP(t,e){const n=Q(t);e?(n.k_.delete(2),await Zl(n)):e||(n.k_.add(2),await wo(n),n.K_.set("Unknown"))}function Hi(t){return t.W_||(t.W_=function(n,r,i){const s=Q(n);return s.b_(),new KC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:JC.bind(null,t),mo:ZC.bind(null,t),po:eP.bind(null,t),R_:tP.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Wd(t)?Hd(t):t.K_.set("Unknown")):(await t.W_.stop(),R0(t))})),t.W_}function or(t){return t.G_||(t.G_=function(n,r,i){const s=Q(n);return s.b_(),new GC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:iP.bind(null,t),po:aP.bind(null,t),p_:sP.bind(null,t),y_:oP.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await eu(t)):(await t.G_.stop(),t.L_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new qd(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kd(t,e){if(En("AsyncQueue",`${e}: ${t}`),$i(t))return new $(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{static emptySet(e){return new _i(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Es(),this.sortedSet=new ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _i)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new _i;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(){this.z_=new ve(H.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):q():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Oi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Oi(e,n,_i.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Kl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class cP{constructor(){this.queries=gg(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const i=Q(n),s=i.queries;i.queries=gg(),s.forEach((o,l)=>{for(const u of l.J_)u.onError(r)})})(this,new $(L.ABORTED,"Firestore shutting down"))}}function gg(){return new br(t=>Yv(t),Kl)}async function hP(t,e){const n=Q(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new uP,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await n.onListen(i,!0);break;case 1:s.H_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Kd(o,`Initialization of query '${Kr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.J_.push(e),e.ea(n.onlineState),s.H_&&e.ta(s.H_)&&Gd(n)}async function dP(t,e){const n=Q(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.J_.indexOf(e);o>=0&&(s.J_.splice(o,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function fP(t,e){const n=Q(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.J_)l.ta(i)&&(r=!0);o.H_=i}}r&&Gd(n)}function pP(t,e,n){const r=Q(t),i=r.queries.get(e);if(i)for(const s of i.J_)s.onError(n);r.queries.delete(e)}function Gd(t){t.X_.forEach(e=>{e.next()})}var Eh,yg;(yg=Eh||(Eh={})).na="default",yg.Cache="cache";class mP{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Oi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Oi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Eh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e){this.key=e}}class D0{constructor(e){this.key=e}}class gP{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Z(),this.mutatedKeys=Z(),this.Va=Xv(e),this.ma=new _i(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new mg,i=n?n.ma:this.ma;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const y=i.get(f),R=Gl(this.query,m)?m:null,k=!!y&&this.mutatedKeys.has(y.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let x=!1;y&&R?y.data.isEqual(R.data)?k!==D&&(r.track({type:3,doc:R}),x=!0):this.ya(y,R)||(r.track({type:2,doc:R}),x=!0,(u&&this.Va(R,u)>0||h&&this.Va(R,h)<0)&&(l=!0)):!y&&R?(r.track({type:0,doc:R}),x=!0):y&&!R&&(r.track({type:1,doc:y}),x=!0,(u||h)&&(l=!0)),x&&(R?(o=o.add(R),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{ma:o,pa:r,ss:l,mutatedKeys:s}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((f,m)=>function(R,k){const D=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return D(R)-D(k)}(f.type,m.type)||this.Va(f.doc,m.doc)),this.wa(r),i=i!=null&&i;const l=n&&!i?this.Sa():[],u=this.Ra.size===0&&this.current&&!i?1:0,h=u!==this.Aa;return this.Aa=u,o.length!==0||h?{snapshot:new Oi(this.query,e.ma,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new mg,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Z(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new D0(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new N0(r))}),n}va(e){this.da=e.ds,this.Ra=Z();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Oi.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class yP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class _P{constructor(e){this.key=e,this.Fa=!1}}class vP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new br(l=>Yv(l),Kl),this.Oa=new Map,this.Na=new Set,this.La=new ve(H.comparator),this.Ba=new Map,this.ka=new Ud,this.qa={},this.Qa=new Map,this.Ka=Vi.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function EP(t,e,n=!0){const r=F0(t);let i;const s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await V0(r,e,n,!0),i}async function wP(t,e){const n=F0(t);await V0(n,e,!0,!1)}async function V0(t,e,n,r){const i=await zC(t.localStore,qt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await TP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&S0(t.remoteStore,i),l}async function TP(t,e,n,r,i){t.Ua=(m,y,R)=>async function(D,x,I,E){let S=x.view.ga(I);S.ss&&(S=await hg(D.localStore,x.query,!1).then(({documents:v})=>x.view.ga(v,S)));const V=E&&E.targetChanges.get(x.targetId),U=E&&E.targetMismatches.get(x.targetId)!=null,b=x.view.applyChanges(S,D.isPrimaryClient,V,U);return vg(D,x.targetId,b.ba),b.snapshot}(t,m,y,R);const s=await hg(t.localStore,e,!0),o=new gP(e,s.ds),l=o.ga(s.documents),u=Eo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);vg(t,n,h.ba);const f=new yP(e,n,o);return t.xa.set(e,f),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),h.snapshot}async function IP(t,e,n){const r=Q(t),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(o=>!Kl(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await vh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Bd(r.remoteStore,i.targetId),wh(r,i.targetId)}).catch(Bi)):(wh(r,i.targetId),await vh(r.localStore,i.targetId,!0))}async function SP(t,e){const n=Q(t),r=n.xa.get(e),i=n.Oa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Bd(n.remoteStore,r.targetId))}async function AP(t,e,n){const r=VP(t);try{const i=await function(o,l){const u=Q(o),h=Ne.now(),f=l.reduce((R,k)=>R.add(k.key),Z());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let k=wn(),D=Z();return u.hs.getEntries(R,f).next(x=>{k=x,k.forEach((I,E)=>{E.isValidDocument()||(D=D.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,k)).next(x=>{m=x;const I=[];for(const E of l){const S=jR(E,m.get(E.key).overlayedDocument);S!=null&&I.push(new Ur(E.key,S,Bv(S.value.mapValue),fn.exists(!0)))}return u.mutationQueue.addMutationBatch(R,h,I,l)}).next(x=>{y=x;const I=x.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(R,x.batchId,I)})}).then(()=>({batchId:y.batchId,changes:Zv(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.qa[o.currentUser.toKey()];h||(h=new ve(ee)),h=h.insert(l,u),o.qa[o.currentUser.toKey()]=h}(r,i.batchId,n),await To(r,i.changes),await eu(r.remoteStore)}catch(i){const s=Kd(i,"Failed to persist write");n.reject(s)}}async function O0(t,e){const n=Q(t);try{const r=await FC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ba.get(s);o&&(se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Fa=!0:i.modifiedDocuments.size>0?se(o.Fa):i.removedDocuments.size>0&&(se(o.Fa),o.Fa=!1))}),await To(n,r,e)}catch(r){await Bi(r)}}function _g(t,e,n){const r=Q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xa.forEach((s,o)=>{const l=o.view.ea(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Q(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const y of m.J_)y.ea(l)&&(h=!0)}),h&&Gd(u)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function RP(t,e,n){const r=Q(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ba.get(e),s=i&&i.key;if(s){let o=new ve(H.comparator);o=o.insert(s,Ye.newNoDocument(s,G.min()));const l=Z().add(s),u=new Xl(G.min(),new Map,new ve(ee),o,l);await O0(r,u),r.La=r.La.remove(s),r.Ba.delete(e),Qd(r)}else await vh(r.localStore,e,!1).then(()=>wh(r,e,n)).catch(Bi)}async function CP(t,e){const n=Q(t),r=e.batch.batchId;try{const i=await MC(n.localStore,e);x0(n,r,null),L0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await To(n,i)}catch(i){await Bi(i)}}async function PP(t,e,n){const r=Q(t);try{const i=await function(o,l){const u=Q(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(se(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);x0(r,e,n),L0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await To(r,i)}catch(i){await Bi(i)}}function L0(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function x0(t,e,n){const r=Q(t);let i=r.qa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function wh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||M0(t,r)})}function M0(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(Bd(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Qd(t))}function vg(t,e,n){for(const r of n)r instanceof N0?(t.ka.addReference(r.key,e),kP(t,r)):r instanceof D0?(j("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||M0(t,r.key)):q()}function kP(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(j("SyncEngine","New document in limbo: "+n),t.Na.add(r),Qd(t))}function Qd(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new H(pe.fromString(e)),r=t.Ka.next();t.Ba.set(r,new _P(n)),t.La=t.La.insert(n,r),S0(t.remoteStore,new Un(qt(Qv(n.path)),r,"TargetPurposeLimboResolution",$l.oe))}}async function To(t,e,n){const r=Q(t),i=[],s=[],o=[];r.xa.isEmpty()||(r.xa.forEach((l,u)=>{o.push(r.Ua(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=jd.zi(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Ma.R_(i),await async function(u,h){const f=Q(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(h,y=>O.forEach(y.Wi,R=>f.persistence.referenceDelegate.addReference(m,y.targetId,R)).next(()=>O.forEach(y.Gi,R=>f.persistence.referenceDelegate.removeReference(m,y.targetId,R)))))}catch(m){if(!$i(m))throw m;j("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const R=f.us.get(y),k=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(k);f.us=f.us.insert(y,D)}}}(r.localStore,s))}async function NP(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await E0(n.localStore,e);n.currentUser=e,function(s,o){s.Qa.forEach(l=>{l.forEach(u=>{u.reject(new $(L.CANCELLED,o))})}),s.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await To(n,r.Ts)}}function DP(t,e){const n=Q(t),r=n.Ba.get(e);if(r&&r.Fa)return Z().add(r.key);{let i=Z();const s=n.Oa.get(e);if(!s)return i;for(const o of s){const l=n.xa.get(o);i=i.unionWith(l.view.fa)}return i}}function F0(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=O0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RP.bind(null,e),e.Ma.R_=fP.bind(null,e.eventManager),e.Ma.Wa=pP.bind(null,e.eventManager),e}function VP(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PP.bind(null,e),e}class vl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Jl(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return xC(this.persistence,new OC,e.initialUser,this.serializer)}ja(e){return new v0(zd.ei,this.serializer)}za(e){return new BC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vl.provider={build:()=>new vl};class OP extends vl{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){se(this.persistence.referenceDelegate instanceof yl);const r=this.persistence.referenceDelegate.garbageCollector;return new _C(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?st.withCacheSize(this.cacheSizeBytes):st.DEFAULT;return new v0(r=>yl.ei(r,n),this.serializer)}}class Th{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_g(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=NP.bind(null,this.syncEngine),await lP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new cP}()}createDatastore(e){const n=Jl(e.databaseInfo.databaseId),r=function(s){return new qC(s)}(e.databaseInfo);return function(s,o,l,u){return new QC(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new XC(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>_g(this.syncEngine,n,0),function(){return fg.p()?new fg:new $C}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const m=new vP(i,s,o,l,u,h);return f&&(m.$a=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Q(i);j("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await wo(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Th.provider={build:()=>new Th};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):En("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ge.UNAUTHENTICATED,this.clientId=Uv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{j("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(j("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Kd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lc(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await E0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Eg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await MP(t);j("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>pg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>pg(e.remoteStore,i)),t._onlineComponents=e}async function MP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await lc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Pi("Error using user provided cache. Falling back to memory cache: "+n),await lc(t,new vl)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await lc(t,new OP(void 0));return t._offlineComponents}async function b0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await Eg(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await Eg(t,new Th))),t._onlineComponents}function FP(t){return b0(t).then(e=>e.syncEngine)}async function bP(t){const e=await b0(t),n=e.eventManager;return n.onListen=EP.bind(null,e.syncEngine),n.onUnlisten=IP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=wP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=SP.bind(null,e.syncEngine),n}function UP(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new LP({next:y=>{f.eu(),o.enqueueAndForget(()=>dP(s,m)),y.fromCache&&u.source==="server"?h.reject(new $(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new mP(l,f,{includeMetadataChanges:!0,ua:!0});return hP(s,m)}(await bP(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(t,e,n){if(!n)throw new $(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zP(t,e,n,r){if(e===!0&&r===!0)throw new $(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tg(t){if(!H.isDocumentKey(t))throw new $(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ig(t){if(H.isDocumentKey(t))throw new $(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function El(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yd(t);throw new $(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=U0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class tu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new KA;switch(r.type){case"firstParty":return new XA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wg.get(n);r&&(j("ComponentProvider","Removing Datastore"),wg.delete(n),r.terminate())}(this),Promise.resolve()}}function jP(t,e,n,r={}){var i;const s=(t=El(t,tu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ge.MOCK_USER;else{l=uI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new $(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ge(h)}t._authCredentials=new GA(new bv(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nu(this.firestore,e,this._query)}}class Mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mt(this.firestore,e,this._key)}}class Zn extends nu{constructor(e,n,r){super(e,n,Qv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mt(this.firestore,null,new H(e))}withConverter(e){return new Zn(this.firestore,e,this._path)}}function Ag(t,e,...n){if(t=Rt(t),z0("collection","path",e),t instanceof tu){const r=pe.fromString(e,...n);return Ig(r),new Zn(t,null,r)}{if(!(t instanceof Mt||t instanceof Zn))throw new $(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Ig(r),new Zn(t.firestore,null,r)}}function BP(t,e,...n){if(t=Rt(t),arguments.length===1&&(e=Uv.newId()),z0("doc","path",e),t instanceof tu){const r=pe.fromString(e,...n);return Tg(r),new Mt(t,null,new H(r))}{if(!(t instanceof Mt||t instanceof Zn))throw new $(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Tg(r),new Mt(t.firestore,t instanceof Zn?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new T0(this,"async_queue_retry"),this.fu=()=>{const r=ac();r&&j("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=ac();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=ac();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Jn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!$i(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw En("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const i=qd.createAndSchedule(this,e,n,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&q()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class Xd extends tu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Rg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Rg(e),this._firestoreClient=void 0,await e}}}function $P(t,e){const n=typeof t=="object"?t:G_(),r=typeof t=="string"?t:"(default)",i=vd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=aI("firestore");s&&jP(i,...s)}return i}function j0(t){if(t._terminated)throw new $(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||HP(t),t._firestoreClient}function HP(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new dR(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,U0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new xP(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Li(je.fromBase64String(e))}catch(n){throw new $(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Li(je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=/^__.*__$/;class qP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new vo(e,this.data,n,this.fieldTransforms)}}function $0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class tf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new tf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return wl(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if($0(this.Mu)&&WP.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class KP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Jl(e)}$u(e,n,r,i=!1){return new tf({Mu:e,methodName:n,Ku:r,path:be.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function GP(t){const e=t._freezeSettings(),n=Jl(t._databaseId);return new KP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function QP(t,e,n,r,i,s={}){const o=t.$u(s.merge||s.mergeFields?2:0,e,n,i);K0("Data must be an object, but it was:",o,r);const l=W0(r,o);let u,h;if(s.merge)u=new Vt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const y=YP(e,m,n);if(!o.contains(y))throw new $(L.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);JP(f,y)||f.push(y)}u=new Vt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new qP(new wt(l),u,h)}function H0(t,e){if(q0(t=Rt(t)))return K0("Unsupported field value:",e,t),W0(t,e);if(t instanceof B0)return function(r,i){if(!$0(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=H0(l,i.ku(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ne.fromDate(r);return{timestampValue:gl(i.serializer,s)}}if(r instanceof Ne){const s=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gl(i.serializer,s)}}if(r instanceof Zd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Li)return{bytesValue:d0(i.serializer,r._byteString)};if(r instanceof Mt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:bd(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ef)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.qu("VectorValues must only contain numeric values.");return xd(l.serializer,u)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${Yd(r)}`)}(t,e)}function W0(t,e){const n={};return zv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fr(t,(r,i)=>{const s=H0(i,e.Ou(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function q0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof Zd||t instanceof Li||t instanceof Mt||t instanceof B0||t instanceof ef)}function K0(t,e,n){if(!q0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Yd(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function YP(t,e,n){if((e=Rt(e))instanceof Jd)return e._internalPath;if(typeof e=="string")return G0(t,e);throw wl("Field path arguments must be of type string or ",t,!1,void 0,n)}const XP=new RegExp("[~\\*/\\[\\]]");function G0(t,e,n){if(e.search(XP)>=0)throw wl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jd(...e.split("."))._internalPath}catch{throw wl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(L.INVALID_ARGUMENT,l+t+u)}function JP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ZP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Y0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ZP extends Q0{data(){return super.data()}}function Y0(t,e){return typeof e=="string"?G0(t,e):e instanceof Jd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tk{convertValue(e,n="none"){switch(sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Fr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ie(o.doubleValue));return new ef(s)}convertGeoPoint(e){return new Zd(Ie(e.latitude),Ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Wl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ro(e));default:return null}}convertTimestamp(e){const n=rr(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);se(_0(r));const i=new io(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||En(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rk extends Q0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Va(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Y0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Va extends rk{data(e={}){return super.data(e)}}class ik{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ca(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Va(this._firestore,this._userDataWriter,r.key,r,new ca(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Va(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ca(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Va(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ca(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:sk(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}class ok extends tk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Li(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mt(this.firestore,null,n)}}function ak(t){t=El(t,nu);const e=El(t.firestore,Xd),n=j0(e),r=new ok(e);return ek(t._query),UP(n,t._query).then(i=>new ik(e,r,t,i))}function lk(t,e){const n=El(t.firestore,Xd),r=BP(t),i=nk(t.converter,e);return uk(n,[QP(GP(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,fn.exists(!1))]).then(()=>r)}function uk(t,e){return function(r,i){const s=new Jn;return r.asyncQueue.enqueueAndForget(async()=>AP(await FP(r),i,s)),s.promise}(j0(t),e)}(function(e,n=!0){(function(i){ji=i})(bi),Ri(new Dr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Xd(new QA(r.getProvider("auth-internal")),new ZA(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new $(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new io(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Yn(Bm,"4.7.5",e),Yn(Bm,"4.7.5","esm2017")})();function ck(){const t=Ed(Dv),e=$P(t),[n,r]=Ot.useState([]),[i,s]=Ot.useState(""),o=async()=>{const f=[];try{const m=await fetch("https://dummyapi.online/api/products");m.status===200&&((await m.json()).forEach(R=>{f.push({name:R.name})}),r(f))}catch(m){console.error("Error fetching data:",m)}},l=async()=>{const f=await ak(Ag(e,"product")),m=[];f.forEach(y=>{const R=y.data();m.push({name:R.name})}),r(m)};Ot.useEffect(()=>{l(),o()},[]);const u=async()=>{i&&(await lk(Ag(e,"product"),{name:i}),s(""),l())},h=f=>{s(f.target.value)};return ne.jsxs("div",{children:[ne.jsx("h2",{children:"Lisää tuote"}),ne.jsx("ul",{children:n.map((f,m)=>ne.jsx("li",{children:f.name},m))}),ne.jsx("input",{type:"text",value:i,onChange:h,placeholder:"Lisää tietoa"}),ne.jsx("button",{onClick:u,children:"Lisää"})]})}const hk="./react-CHdo91hT.svg",dk="./vite.svg";function fk(){const t=(s,o,l)=>{const u=new Date(Date.now()+l*864e5).toUTCString();document.cookie=`${s}=${encodeURIComponent(o)}; expires=${u}; path=/`},e=s=>{var u;const l=`: ${document.cookie}`.split(`; ${s}=`);return l.length===2?parseInt(decodeURIComponent(((u=l.pop())==null?void 0:u.split(";").shift())||""),10):0},[n,r]=Ot.useState(e("Count")|0),i=Ot.useCallback(()=>{r(s=>s+1),t("Count",""+n,1)},[t]);return Ot.useEffect(()=>{var s=window._mtm=window._mtm||[];s.push({"mtm.startTime":new Date().getTime(),event:"mtm.Start"});const o=document,l=o.createElement("script"),u=o.getElementsByTagName("script")[0];l.async=!0,l.src="https://pilvipalvelut-matomo.2.rahtiapp.fi/js/container_W1W5ebRp_dev_e55fab0d44134256d0633ac8.js",u&&u.parentNode&&u.parentNode.insertBefore(l,u)},[]),ne.jsxs(ne.Fragment,{children:[ne.jsxs("div",{children:[ne.jsx("a",{href:"https://vite.dev",target:"_blank",children:ne.jsx("img",{src:dk,className:"logo",alt:"Vite logo"})}),ne.jsx("a",{href:"https://react.dev",target:"_blank",children:ne.jsx("img",{src:hk,className:"logo react",alt:"React logo"})})]}),ne.jsx("h1",{children:"Vite + React"}),ne.jsxs("div",{className:"card",children:[ne.jsxs("button",{onClick:i,children:["Laskurin arvo ",n]}),ne.jsxs("p",{children:["Edit ",ne.jsx("code",{children:"src/App.tsx"})," and save to test HMR"]}),ne.jsx("p",{children:ne.jsx(qA,{})})]}),ne.jsx("p",{className:"read-the-docs",children:"Click on the Vite and React logos to learn more"}),ne.jsx(ck,{})]})}U_(document.getElementById("root")).render(ne.jsx(Ot.StrictMode,{children:ne.jsx(fk,{})}));
