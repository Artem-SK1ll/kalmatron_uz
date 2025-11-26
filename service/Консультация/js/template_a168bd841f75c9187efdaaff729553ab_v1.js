
; /* Start:"a:4:{s:4:"full";s:72:"/local/templates/kalmatron/js/libs/swiper-bundle.min.js?1733145030150121";s:6:"source";s:55:"/local/templates/kalmatron/js/libs/swiper-bundle.min.js";s:3:"min";s:55:"/local/templates/kalmatron/js/libs/swiper-bundle.min.js";s:3:"map";s:59:"/local/templates/kalmatron/js/libs/swiper-bundle.min.js.map";}"*/
/**
 * Swiper 11.1.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 13, 2024
 */

var Swiper=function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(s,a){void 0===s&&(s={}),void 0===a&&(a={}),Object.keys(a).forEach((i=>{void 0===s[i]?s[i]=a[i]:e(a[i])&&e(s[i])&&Object.keys(a[i]).length>0&&t(s[i],a[i])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return t(e,s),e}const i={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}function n(e){return void 0===e&&(e=""),e.trim().split(" ").filter((e=>!!e.trim()))}function l(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function o(){return Date.now()}function d(e,t){void 0===t&&(t="x");const s=r();let a,i,n;const l=function(e){const t=r();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e);return s.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),n=new s.WebKitCSSMatrix("none"===i?"":i)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),"x"===t&&(i=s.WebKitCSSMatrix?n.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?n.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function c(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function p(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let a=1;a<arguments.length;a+=1){const i=a<0||arguments.length<=a?void 0:arguments[a];if(null!=i&&(s=i,!("undefined"!=typeof window&&void 0!==window.HTMLElement?s instanceof HTMLElement:s&&(1===s.nodeType||11===s.nodeType)))){const s=Object.keys(Object(i)).filter((e=>t.indexOf(e)<0));for(let t=0,a=s.length;t<a;t+=1){const a=s[t],r=Object.getOwnPropertyDescriptor(i,a);void 0!==r&&r.enumerable&&(c(e[a])&&c(i[a])?i[a].__swiper__?e[a]=i[a]:p(e[a],i[a]):!c(e[a])&&c(i[a])?(e[a]={},i[a].__swiper__?e[a]=i[a]:p(e[a],i[a])):e[a]=i[a])}}}var s;return e}function u(e,t,s){e.style.setProperty(t,s)}function m(e){let{swiper:t,targetPosition:s,side:a}=e;const i=r(),n=-t.translate;let l,o=null;const d=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=s>n?"next":"prev",p=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,u=()=>{l=(new Date).getTime(),null===o&&(o=l);const e=Math.max(Math.min((l-o)/d,1),0),r=.5-Math.cos(e*Math.PI)/2;let c=n+r*(s-n);if(p(c,s)&&(c=s),t.wrapperEl.scrollTo({[a]:c}),p(c,s))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:c})})),void i.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=i.requestAnimationFrame(u)};u()}function h(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function f(e,t){return void 0===t&&(t=""),[...e.children].filter((e=>e.matches(t)))}function g(e){try{return void console.warn(e)}catch(e){}}function v(e,t){void 0===t&&(t=[]);const s=document.createElement(e);return s.classList.add(...Array.isArray(t)?t:n(t)),s}function w(e){const t=r(),s=a(),i=e.getBoundingClientRect(),n=s.body,l=e.clientTop||n.clientTop||0,o=e.clientLeft||n.clientLeft||0,d=e===t?t.scrollY:e.scrollTop,c=e===t?t.scrollX:e.scrollLeft;return{top:i.top+d-l,left:i.left+c-o}}function b(e,t){return r().getComputedStyle(e,null).getPropertyValue(t)}function y(e){let t,s=e;if(s){for(t=0;null!==(s=s.previousSibling);)1===s.nodeType&&(t+=1);return t}}function E(e,t){const s=[];let a=e.parentElement;for(;a;)t?a.matches(t)&&s.push(a):s.push(a),a=a.parentElement;return s}function x(e,t){t&&e.addEventListener("transitionend",(function s(a){a.target===e&&(t.call(e,a),e.removeEventListener("transitionend",s))}))}function S(e,t,s){const a=r();return s?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}function T(e){return(Array.isArray(e)?e:[e]).filter((e=>!!e))}let M,C,P;function L(){return M||(M=function(){const e=r(),t=a();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),M}function I(e){return void 0===e&&(e={}),C||(C=function(e){let{userAgent:t}=void 0===e?{}:e;const s=L(),a=r(),i=a.navigator.platform,n=t||a.navigator.userAgent,l={ios:!1,android:!1},o=a.screen.width,d=a.screen.height,c=n.match(/(Android);?[\s\/]+([\d.]+)?/);let p=n.match(/(iPad).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),m=!p&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h="Win32"===i;let f="MacIntel"===i;return!p&&f&&s.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${d}`)>=0&&(p=n.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),f=!1),c&&!h&&(l.os="android",l.android=!0),(p||m||u)&&(l.os="ios",l.ios=!0),l}(e)),C}function A(){return P||(P=function(){const e=r(),t=I();let s=!1;function a(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(a()){const t=String(e.navigator.userAgent);if(t.includes("Version/")){const[e,a]=t.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));s=e<16||16===e&&a<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),n=a();return{isSafari:s||n,needPerspectiveFix:s,need3dFix:n||i&&t.ios,isWebView:i}}()),P}var z={on(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;const i=s?"unshift":"push";return e.split(" ").forEach((e=>{a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e][i](t)})),a},once(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;function i(){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];t.apply(a,r)}return i.__emitterProxy=t,a.on(e,i,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed)return s;if("function"!=typeof e)return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed?s:s.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach(((a,i)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[e].splice(i,1)}))})),s):s},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let t,s,a;for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),a=e):(t=r[0].events,s=r[0].data,a=r[0].context||e),s.unshift(a);return(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(a,[t,...s])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(a,s)}))})),e}};const $=(e,t,s)=>{t&&!e.classList.contains(s)?e.classList.add(s):!t&&e.classList.contains(s)&&e.classList.remove(s)};const k=(e,t,s)=>{t&&!e.classList.contains(s)?e.classList.add(s):!t&&e.classList.contains(s)&&e.classList.remove(s)};const O=(e,t)=>{if(!e||e.destroyed||!e.params)return;const s=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(s){let t=s.querySelector(`.${e.params.lazyPreloaderClass}`);!t&&e.isElement&&(s.shadowRoot?t=s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame((()=>{s.shadowRoot&&(t=s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),t&&t.remove())}))),t&&t.remove()}},D=(e,t)=>{if(!e.slides[t])return;const s=e.slides[t].querySelector('[loading="lazy"]');s&&s.removeAttribute("loading")},G=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const s=e.slides.length;if(!s||!t||t<0)return;t=Math.min(t,s);const a="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const s=i,r=[s-t];return r.push(...Array.from({length:t}).map(((e,t)=>s+a+t))),void e.slides.forEach(((t,s)=>{r.includes(t.column)&&D(e,s)}))}const r=i+a-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=r+t;a+=1){const t=(a%s+s)%s;(t<i||t>r)&&D(e,t)}else for(let a=Math.max(i-t,0);a<=Math.min(r+t,s-1);a+=1)a!==i&&(a>r||a<i)&&D(e,a)};var H={updateSize:function(){const e=this;let t,s;const a=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:a.clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:a.clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(b(a,"padding-left")||0,10)-parseInt(b(a,"padding-right")||0,10),s=s-parseInt(b(a,"padding-top")||0,10)-parseInt(b(a,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))},updateSlides:function(){const e=this;function t(t,s){return parseFloat(t.getPropertyValue(e.getDirectionLabel(s))||0)}const s=e.params,{wrapperEl:a,slidesEl:i,size:r,rtlTranslate:n,wrongRTL:l}=e,o=e.virtual&&s.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,c=f(i,`.${e.params.slideClass}, swiper-slide`),p=o?e.virtual.slides.length:c.length;let m=[];const h=[],g=[];let v=s.slidesOffsetBefore;"function"==typeof v&&(v=s.slidesOffsetBefore.call(e));let w=s.slidesOffsetAfter;"function"==typeof w&&(w=s.slidesOffsetAfter.call(e));const y=e.snapGrid.length,E=e.slidesGrid.length;let x=s.spaceBetween,T=-v,M=0,C=0;if(void 0===r)return;"string"==typeof x&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*r:"string"==typeof x&&(x=parseFloat(x)),e.virtualSize=-x,c.forEach((e=>{n?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),s.centeredSlides&&s.cssMode&&(u(a,"--swiper-centered-offset-before",""),u(a,"--swiper-centered-offset-after",""));const P=s.grid&&s.grid.rows>1&&e.grid;let L;P?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();const I="auto"===s.slidesPerView&&s.breakpoints&&Object.keys(s.breakpoints).filter((e=>void 0!==s.breakpoints[e].slidesPerView)).length>0;for(let a=0;a<p;a+=1){let i;if(L=0,c[a]&&(i=c[a]),P&&e.grid.updateSlide(a,i,c),!c[a]||"none"!==b(i,"display")){if("auto"===s.slidesPerView){I&&(c[a].style[e.getDirectionLabel("width")]="");const r=getComputedStyle(i),n=i.style.transform,l=i.style.webkitTransform;if(n&&(i.style.transform="none"),l&&(i.style.webkitTransform="none"),s.roundLengths)L=e.isHorizontal()?S(i,"width",!0):S(i,"height",!0);else{const e=t(r,"width"),s=t(r,"padding-left"),a=t(r,"padding-right"),n=t(r,"margin-left"),l=t(r,"margin-right"),o=r.getPropertyValue("box-sizing");if(o&&"border-box"===o)L=e+n+l;else{const{clientWidth:t,offsetWidth:r}=i;L=e+s+a+n+l+(r-t)}}n&&(i.style.transform=n),l&&(i.style.webkitTransform=l),s.roundLengths&&(L=Math.floor(L))}else L=(r-(s.slidesPerView-1)*x)/s.slidesPerView,s.roundLengths&&(L=Math.floor(L)),c[a]&&(c[a].style[e.getDirectionLabel("width")]=`${L}px`);c[a]&&(c[a].swiperSlideSize=L),g.push(L),s.centeredSlides?(T=T+L/2+M/2+x,0===M&&0!==a&&(T=T-r/2-x),0===a&&(T=T-r/2-x),Math.abs(T)<.001&&(T=0),s.roundLengths&&(T=Math.floor(T)),C%s.slidesPerGroup==0&&m.push(T),h.push(T)):(s.roundLengths&&(T=Math.floor(T)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup==0&&m.push(T),h.push(T),T=T+L+x),e.virtualSize+=L+x,M=L,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+w,n&&l&&("slide"===s.effect||"coverflow"===s.effect)&&(a.style.width=`${e.virtualSize+x}px`),s.setWrapperSize&&(a.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),P&&e.grid.updateWrapperSize(L,m),!s.centeredSlides){const t=[];for(let a=0;a<m.length;a+=1){let i=m[a];s.roundLengths&&(i=Math.floor(i)),m[a]<=e.virtualSize-r&&t.push(i)}m=t,Math.floor(e.virtualSize-r)-Math.floor(m[m.length-1])>1&&m.push(e.virtualSize-r)}if(o&&s.loop){const t=g[0]+x;if(s.slidesPerGroup>1){const a=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/s.slidesPerGroup),i=t*s.slidesPerGroup;for(let e=0;e<a;e+=1)m.push(m[m.length-1]+i)}for(let a=0;a<e.virtual.slidesBefore+e.virtual.slidesAfter;a+=1)1===s.slidesPerGroup&&m.push(m[m.length-1]+t),h.push(h[h.length-1]+t),e.virtualSize+=t}if(0===m.length&&(m=[0]),0!==x){const t=e.isHorizontal()&&n?"marginLeft":e.getDirectionLabel("marginRight");c.filter(((e,t)=>!(s.cssMode&&!s.loop)||t!==c.length-1)).forEach((e=>{e.style[t]=`${x}px`}))}if(s.centeredSlides&&s.centeredSlidesBounds){let e=0;g.forEach((t=>{e+=t+(x||0)})),e-=x;const t=e-r;m=m.map((e=>e<=0?-v:e>t?t+w:e))}if(s.centerInsufficientSlides){let e=0;g.forEach((t=>{e+=t+(x||0)})),e-=x;const t=(s.slidesOffsetBefore||0)+(s.slidesOffsetAfter||0);if(e+t<r){const s=(r-e-t)/2;m.forEach(((e,t)=>{m[t]=e-s})),h.forEach(((e,t)=>{h[t]=e+s}))}}if(Object.assign(e,{slides:c,snapGrid:m,slidesGrid:h,slidesSizesGrid:g}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){u(a,"--swiper-centered-offset-before",-m[0]+"px"),u(a,"--swiper-centered-offset-after",e.size/2-g[g.length-1]/2+"px");const t=-e.snapGrid[0],s=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+s))}if(p!==d&&e.emit("slidesLengthChange"),m.length!==y&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==E&&e.emit("slidesGridLengthChange"),s.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!(o||s.cssMode||"slide"!==s.effect&&"fade"!==s.effect)){const t=`${s.containerModifierClass}backface-hidden`,a=e.el.classList.contains(t);p<=s.maxBackfaceHiddenSlides?a||e.el.classList.add(t):a&&e.el.classList.remove(t)}},updateAutoHeight:function(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>a?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{s.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!a)break;s.push(n(e))}else s.push(n(t.activeIndex));for(i=0;i<s.length;i+=1)if(void 0!==s[i]){const e=s[i].offsetHeight;r=e>r?e:r}(r||0===r)&&(t.wrapperEl.style.height=`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides,s=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let a=0;a<t.length;a+=1)t[a].swiperSlideOffset=(e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop)-s-e.cssOverflowAdjustment()},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);const t=this,s=t.params,{slides:a,rtlTranslate:i,snapGrid:r}=t;if(0===a.length)return;void 0===a[0].swiperSlideOffset&&t.updateSlidesOffset();let n=-e;i&&(n=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=s.spaceBetween;"string"==typeof l&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:"string"==typeof l&&(l=parseFloat(l));for(let e=0;e<a.length;e+=1){const o=a[e];let d=o.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(d-=a[0].swiperSlideOffset);const c=(n+(s.centeredSlides?t.minTranslate():0)-d)/(o.swiperSlideSize+l),p=(n-r[0]+(s.centeredSlides?t.minTranslate():0)-d)/(o.swiperSlideSize+l),u=-(n-d),m=u+t.slidesSizesGrid[e],h=u>=0&&u<=t.size-t.slidesSizesGrid[e],f=u>=0&&u<t.size-1||m>1&&m<=t.size||u<=0&&m>=t.size;f&&(t.visibleSlides.push(o),t.visibleSlidesIndexes.push(e)),$(o,f,s.slideVisibleClass),$(o,h,s.slideFullyVisibleClass),o.progress=i?-c:c,o.originalProgress=i?-p:p}},updateProgress:function(e){const t=this;if(void 0===e){const s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:n,progressLoop:l}=t;const o=r,d=n;if(0===a)i=0,r=!0,n=!0;else{i=(e-t.minTranslate())/a;const s=Math.abs(e-t.minTranslate())<1,l=Math.abs(e-t.maxTranslate())<1;r=s||i<=0,n=l||i>=1,s&&(i=0),l&&(i=1)}if(s.loop){const s=t.getSlideIndexByData(0),a=t.getSlideIndexByData(t.slides.length-1),i=t.slidesGrid[s],r=t.slidesGrid[a],n=t.slidesGrid[t.slidesGrid.length-1],o=Math.abs(e);l=o>=i?(o-i)/n:(o+n-r)/n,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:r,isEnd:n}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),n&&!d&&t.emit("reachEnd toEdge"),(o&&!r||d&&!n)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:s,slidesEl:a,activeIndex:i}=e,r=e.virtual&&s.virtual.enabled,n=e.grid&&s.grid&&s.grid.rows>1,l=e=>f(a,`.${s.slideClass}${e}, swiper-slide${e}`)[0];let o,d,c;if(r)if(s.loop){let t=i-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),o=l(`[data-swiper-slide-index="${t}"]`)}else o=l(`[data-swiper-slide-index="${i}"]`);else n?(o=t.filter((e=>e.column===i))[0],c=t.filter((e=>e.column===i+1))[0],d=t.filter((e=>e.column===i-1))[0]):o=t[i];o&&(n||(c=function(e,t){const s=[];for(;e.nextElementSibling;){const a=e.nextElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}(o,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!c&&(c=t[0]),d=function(e,t){const s=[];for(;e.previousElementSibling;){const a=e.previousElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}(o,`.${s.slideClass}, swiper-slide`)[0],s.loop&&0===!d&&(d=t[t.length-1]))),t.forEach((e=>{k(e,e===o,s.slideActiveClass),k(e,e===c,s.slideNextClass),k(e,e===d,s.slidePrevClass)})),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{snapGrid:a,params:i,activeIndex:r,realIndex:n,snapIndex:l}=t;let o,d=e;const c=e=>{let s=e-t.virtual.slidesBefore;return s<0&&(s=t.virtual.slides.length+s),s>=t.virtual.slides.length&&(s-=t.virtual.slides.length),s};if(void 0===d&&(d=function(e){const{slidesGrid:t,params:s}=e,a=e.rtlTranslate?e.translate:-e.translate;let i;for(let e=0;e<t.length;e+=1)void 0!==t[e+1]?a>=t[e]&&a<t[e+1]-(t[e+1]-t[e])/2?i=e:a>=t[e]&&a<t[e+1]&&(i=e+1):a>=t[e]&&(i=e);return s.normalizeSlideIndex&&(i<0||void 0===i)&&(i=0),i}(t)),a.indexOf(s)>=0)o=a.indexOf(s);else{const e=Math.min(i.slidesPerGroupSkip,d);o=e+Math.floor((d-e)/i.slidesPerGroup)}if(o>=a.length&&(o=a.length-1),d===r&&!t.params.loop)return void(o!==l&&(t.snapIndex=o,t.emit("snapIndexChange")));if(d===r&&t.params.loop&&t.virtual&&t.params.virtual.enabled)return void(t.realIndex=c(d));const p=t.grid&&i.grid&&i.grid.rows>1;let u;if(t.virtual&&i.virtual.enabled&&i.loop)u=c(d);else if(p){const e=t.slides.filter((e=>e.column===d))[0];let s=parseInt(e.getAttribute("data-swiper-slide-index"),10);Number.isNaN(s)&&(s=Math.max(t.slides.indexOf(e),0)),u=Math.floor(s/i.grid.rows)}else if(t.slides[d]){const e=t.slides[d].getAttribute("data-swiper-slide-index");u=e?parseInt(e,10):d}else u=d;Object.assign(t,{previousSnapIndex:l,snapIndex:o,previousRealIndex:n,realIndex:u,previousIndex:r,activeIndex:d}),t.initialized&&G(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(n!==u&&t.emit("realIndexChange"),t.emit("slideChange"))},updateClickedSlide:function(e,t){const s=this,a=s.params;let i=e.closest(`.${a.slideClass}, swiper-slide`);!i&&s.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach((e=>{!i&&e.matches&&e.matches(`.${a.slideClass}, swiper-slide`)&&(i=e)}));let r,n=!1;if(i)for(let e=0;e<s.slides.length;e+=1)if(s.slides[e]===i){n=!0,r=e;break}if(!i||!n)return s.clickedSlide=void 0,void(s.clickedIndex=void 0);s.clickedSlide=i,s.virtual&&s.params.virtual.enabled?s.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):s.clickedIndex=r,a.slideToClickedSlide&&void 0!==s.clickedIndex&&s.clickedIndex!==s.activeIndex&&s.slideToClickedSlide()}};var N={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const{params:t,rtlTranslate:s,translate:a,wrapperEl:i}=this;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=d(i,e);return r+=this.cssOverflowAdjustment(),s&&(r=-r),r||0},setTranslate:function(e,t){const s=this,{rtlTranslate:a,params:i,wrapperEl:r,progress:n}=s;let l,o=0,d=0;s.isHorizontal()?o=a?-e:e:d=e,i.roundLengths&&(o=Math.floor(o),d=Math.floor(d)),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?o:d,i.cssMode?r[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-o:-d:i.virtualTranslate||(s.isHorizontal()?o-=s.cssOverflowAdjustment():d-=s.cssOverflowAdjustment(),r.style.transform=`translate3d(${o}px, ${d}px, 0px)`);const c=s.maxTranslate()-s.minTranslate();l=0===c?0:(e-s.minTranslate())/c,l!==n&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),void 0===a&&(a=!0);const r=this,{params:n,wrapperEl:l}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const o=r.minTranslate(),d=r.maxTranslate();let c;if(c=a&&e>o?o:a&&e<d?d:e,r.updateProgress(c),n.cssMode){const e=r.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-c;else{if(!r.support.smoothScroll)return m({swiper:r,targetPosition:-c,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-c,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,s&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}};function X(e){let{swiper:t,runCallbacks:s,direction:a,step:i}=e;const{activeIndex:r,previousIndex:n}=t;let l=a;if(l||(l=r>n?"next":r<n?"prev":"reset"),t.emit(`transition${i}`),s&&r!==n){if("reset"===l)return void t.emit(`slideResetTransition${i}`);t.emit(`slideChangeTransition${i}`),"next"===l?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}var B={slideTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===s&&(s=!0),"string"==typeof e&&(e=parseInt(e,10));const r=this;let n=e;n<0&&(n=0);const{params:l,snapGrid:o,slidesGrid:d,previousIndex:c,activeIndex:p,rtlTranslate:u,wrapperEl:h,enabled:f}=r;if(!f&&!a&&!i||r.destroyed||r.animating&&l.preventInteractionOnTransition)return!1;void 0===t&&(t=r.params.speed);const g=Math.min(r.params.slidesPerGroupSkip,n);let v=g+Math.floor((n-g)/r.params.slidesPerGroup);v>=o.length&&(v=o.length-1);const w=-o[v];if(l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*w),s=Math.floor(100*d[e]),a=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=s&&t<a-(a-s)/2?n=e:t>=s&&t<a&&(n=e+1):t>=s&&(n=e)}if(r.initialized&&n!==p){if(!r.allowSlideNext&&(u?w>r.translate&&w>r.minTranslate():w<r.translate&&w<r.minTranslate()))return!1;if(!r.allowSlidePrev&&w>r.translate&&w>r.maxTranslate()&&(p||0)!==n)return!1}let b;if(n!==(c||0)&&s&&r.emit("beforeSlideChangeStart"),r.updateProgress(w),b=n>p?"next":n<p?"prev":"reset",u&&-w===r.translate||!u&&w===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(w),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){const e=r.isHorizontal(),s=u?w:-w;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),t&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{h[e?"scrollLeft":"scrollTop"]=s}))):h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1}))}else{if(!r.support.smoothScroll)return m({swiper:r,targetPosition:s,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(w),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),0===t?r.transitionEnd(s,b):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,s,a){if(void 0===e&&(e=0),void 0===s&&(s=!0),"string"==typeof e){e=parseInt(e,10)}const i=this;if(i.destroyed)return;void 0===t&&(t=i.params.speed);const r=i.grid&&i.params.grid&&i.params.grid.rows>1;let n=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)n+=i.virtual.slidesBefore;else{let e;if(r){const t=n*i.params.grid.rows;e=i.slides.filter((e=>1*e.getAttribute("data-swiper-slide-index")===t))[0].column}else e=i.getSlideIndexByData(n);const t=r?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:s}=i.params;let l=i.params.slidesPerView;"auto"===l?l=i.slidesPerViewDynamic():(l=Math.ceil(parseFloat(i.params.slidesPerView,10)),s&&l%2==0&&(l+=1));let o=t-e<l;if(s&&(o=o||e<Math.ceil(l/2)),a&&s&&"auto"!==i.params.slidesPerView&&!r&&(o=!1),o){const a=s?e<i.activeIndex?"prev":"next":e-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:a,slideTo:!0,activeSlideIndex:"next"===a?e+1:e-t+1,slideRealIndex:"next"===a?i.realIndex:void 0})}if(r){const e=n*i.params.grid.rows;n=i.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0].column}else n=i.getSlideIndexByData(n)}return requestAnimationFrame((()=>{i.slideTo(n,t,s,a)})),i},slideNext:function(e,t,s){void 0===t&&(t=!0);const a=this,{enabled:i,params:r,animating:n}=a;if(!i||a.destroyed)return a;void 0===e&&(e=a.params.speed);let l=r.slidesPerGroup;"auto"===r.slidesPerView&&1===r.slidesPerGroup&&r.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<r.slidesPerGroupSkip?1:l,d=a.virtual&&r.virtual.enabled;if(r.loop){if(n&&!d&&r.loopPreventsSliding)return!1;if(a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft,a.activeIndex===a.slides.length-1&&r.cssMode)return requestAnimationFrame((()=>{a.slideTo(a.activeIndex+o,e,t,s)})),!0}return r.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+o,e,t,s)},slidePrev:function(e,t,s){void 0===t&&(t=!0);const a=this,{params:i,snapGrid:r,slidesGrid:n,rtlTranslate:l,enabled:o,animating:d}=a;if(!o||a.destroyed)return a;void 0===e&&(e=a.params.speed);const c=a.virtual&&i.virtual.enabled;if(i.loop){if(d&&!c&&i.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}function p(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const u=p(l?a.translate:-a.translate),m=r.map((e=>p(e)));let h=r[m.indexOf(u)-1];if(void 0===h&&i.cssMode){let e;r.forEach(((t,s)=>{u>=t&&(e=s)})),void 0!==e&&(h=r[e>0?e-1:e])}let f=0;if(void 0!==h&&(f=n.indexOf(h),f<0&&(f=a.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(f=f-a.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),i.rewind&&a.isBeginning){const i=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(i,e,t,s)}return i.loop&&0===a.activeIndex&&i.cssMode?(requestAnimationFrame((()=>{a.slideTo(f,e,t,s)})),!0):a.slideTo(f,e,t,s)},slideReset:function(e,t,s){void 0===t&&(t=!0);const a=this;if(!a.destroyed)return void 0===e&&(e=a.params.speed),a.slideTo(a.activeIndex,e,t,s)},slideToClosest:function(e,t,s,a){void 0===t&&(t=!0),void 0===a&&(a=.5);const i=this;if(i.destroyed)return;void 0===e&&(e=i.params.speed);let r=i.activeIndex;const n=Math.min(i.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[l]){const e=i.snapGrid[l];o-e>(i.snapGrid[l+1]-e)*a&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[l-1];o-e<=(i.snapGrid[l]-e)*a&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,s)},slideToClickedSlide:function(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:s}=e,a="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;const n=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;i=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-a/2||r>e.slides.length-e.loopedSlides+a/2?(e.loopFix(),r=e.getSlideIndex(f(s,`${n}[data-swiper-slide-index="${i}"]`)[0]),l((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-a?(e.loopFix(),r=e.getSlideIndex(f(s,`${n}[data-swiper-slide-index="${i}"]`)[0]),l((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}};var Y={loopCreate:function(e){const t=this,{params:s,slidesEl:a}=t;if(!s.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{f(a,`.${s.slideClass}, swiper-slide`).forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)}))},r=t.grid&&s.grid&&s.grid.rows>1,n=s.slidesPerGroup*(r?s.grid.rows:1),l=t.slides.length%n!=0,o=r&&t.slides.length%s.grid.rows!=0,d=e=>{for(let a=0;a<e;a+=1){const e=t.isElement?v("swiper-slide",[s.slideBlankClass]):v("div",[s.slideClass,s.slideBlankClass]);t.slidesEl.append(e)}};if(l){if(s.loopAddBlankSlides){d(n-t.slides.length%n),t.recalcSlides(),t.updateSlides()}else g("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(o){if(s.loopAddBlankSlides){d(s.grid.rows-t.slides.length%s.grid.rows),t.recalcSlides(),t.updateSlides()}else g("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:s.centeredSlides?void 0:"next"})},loopFix:function(e){let{slideRealIndex:t,slideTo:s=!0,direction:a,setTranslate:i,activeSlideIndex:r,byController:n,byMousewheel:l}=void 0===e?{}:e;const o=this;if(!o.params.loop)return;o.emit("beforeLoopFix");const{slides:d,allowSlidePrev:c,allowSlideNext:p,slidesEl:u,params:m}=o,{centeredSlides:h}=m;if(o.allowSlidePrev=!0,o.allowSlideNext=!0,o.virtual&&m.virtual.enabled)return s&&(m.centeredSlides||0!==o.snapIndex?m.centeredSlides&&o.snapIndex<m.slidesPerView?o.slideTo(o.virtual.slides.length+o.snapIndex,0,!1,!0):o.snapIndex===o.snapGrid.length-1&&o.slideTo(o.virtual.slidesBefore,0,!1,!0):o.slideTo(o.virtual.slides.length,0,!1,!0)),o.allowSlidePrev=c,o.allowSlideNext=p,void o.emit("loopFix");let f=m.slidesPerView;"auto"===f?f=o.slidesPerViewDynamic():(f=Math.ceil(parseFloat(m.slidesPerView,10)),h&&f%2==0&&(f+=1));const v=m.slidesPerGroupAuto?f:m.slidesPerGroup;let w=v;w%v!=0&&(w+=v-w%v),w+=m.loopAdditionalSlides,o.loopedSlides=w;const b=o.grid&&m.grid&&m.grid.rows>1;d.length<f+w?g("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):b&&"row"===m.grid.fill&&g("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const y=[],E=[];let x=o.activeIndex;void 0===r?r=o.getSlideIndex(d.filter((e=>e.classList.contains(m.slideActiveClass)))[0]):x=r;const S="next"===a||!a,T="prev"===a||!a;let M=0,C=0;const P=b?Math.ceil(d.length/m.grid.rows):d.length,L=(b?d[r].column:r)+(h&&void 0===i?-f/2+.5:0);if(L<w){M=Math.max(w-L,v);for(let e=0;e<w-L;e+=1){const t=e-Math.floor(e/P)*P;if(b){const e=P-t-1;for(let t=d.length-1;t>=0;t-=1)d[t].column===e&&y.push(t)}else y.push(P-t-1)}}else if(L+f>P-w){C=Math.max(L-(P-2*w),v);for(let e=0;e<C;e+=1){const t=e-Math.floor(e/P)*P;b?d.forEach(((e,s)=>{e.column===t&&E.push(s)})):E.push(t)}}if(o.__preventObserver__=!0,requestAnimationFrame((()=>{o.__preventObserver__=!1})),T&&y.forEach((e=>{d[e].swiperLoopMoveDOM=!0,u.prepend(d[e]),d[e].swiperLoopMoveDOM=!1})),S&&E.forEach((e=>{d[e].swiperLoopMoveDOM=!0,u.append(d[e]),d[e].swiperLoopMoveDOM=!1})),o.recalcSlides(),"auto"===m.slidesPerView?o.updateSlides():b&&(y.length>0&&T||E.length>0&&S)&&o.slides.forEach(((e,t)=>{o.grid.updateSlide(t,e,o.slides)})),m.watchSlidesProgress&&o.updateSlidesOffset(),s)if(y.length>0&&T){if(void 0===t){const e=o.slidesGrid[x],t=o.slidesGrid[x+M]-e;l?o.setTranslate(o.translate-t):(o.slideTo(x+Math.ceil(M),0,!1,!0),i&&(o.touchEventsData.startTranslate=o.touchEventsData.startTranslate-t,o.touchEventsData.currentTranslate=o.touchEventsData.currentTranslate-t))}else if(i){const e=b?y.length/m.grid.rows:y.length;o.slideTo(o.activeIndex+e,0,!1,!0),o.touchEventsData.currentTranslate=o.translate}}else if(E.length>0&&S)if(void 0===t){const e=o.slidesGrid[x],t=o.slidesGrid[x-C]-e;l?o.setTranslate(o.translate-t):(o.slideTo(x-C,0,!1,!0),i&&(o.touchEventsData.startTranslate=o.touchEventsData.startTranslate-t,o.touchEventsData.currentTranslate=o.touchEventsData.currentTranslate-t))}else{const e=b?E.length/m.grid.rows:E.length;o.slideTo(o.activeIndex-e,0,!1,!0)}if(o.allowSlidePrev=c,o.allowSlideNext=p,o.controller&&o.controller.control&&!n){const e={slideRealIndex:t,direction:a,setTranslate:i,activeSlideIndex:r,byController:!0};Array.isArray(o.controller.control)?o.controller.control.forEach((t=>{!t.destroyed&&t.params.loop&&t.loopFix({...e,slideTo:t.params.slidesPerView===m.slidesPerView&&s})})):o.controller.control instanceof o.constructor&&o.controller.control.params.loop&&o.controller.control.loopFix({...e,slideTo:o.controller.control.params.slidesPerView===m.slidesPerView&&s})}o.emit("loopFix")},loopDestroy:function(){const e=this,{params:t,slidesEl:s}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const a=[];e.slides.forEach((e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;a[t]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),a.forEach((e=>{s.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}};function R(e,t,s){const a=r(),{params:i}=e,n=i.edgeSwipeDetection,l=i.edgeSwipeThreshold;return!n||!(s<=l||s>=a.innerWidth-l)||"prevent"===n&&(t.preventDefault(),!0)}function F(e){const t=this,s=a();let i=e;i.originalEvent&&(i=i.originalEvent);const n=t.touchEventsData;if("pointerdown"===i.type){if(null!==n.pointerId&&n.pointerId!==i.pointerId)return;n.pointerId=i.pointerId}else"touchstart"===i.type&&1===i.targetTouches.length&&(n.touchId=i.targetTouches[0].identifier);if("touchstart"===i.type)return void R(t,i,i.targetTouches[0].pageX);const{params:l,touches:d,enabled:c}=t;if(!c)return;if(!l.simulateTouch&&"mouse"===i.pointerType)return;if(t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=i.target;if("wrapper"===l.touchEventsTarget&&!t.wrapperEl.contains(p))return;if("which"in i&&3===i.which)return;if("button"in i&&i.button>0)return;if(n.isTouched&&n.isMoved)return;const u=!!l.noSwipingClass&&""!==l.noSwipingClass,m=i.composedPath?i.composedPath():i.path;u&&i.target&&i.target.shadowRoot&&m&&(p=m[0]);const h=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,f=!(!i.target||!i.target.shadowRoot);if(l.noSwiping&&(f?function(e,t){return void 0===t&&(t=this),function t(s){if(!s||s===a()||s===r())return null;s.assignedSlot&&(s=s.assignedSlot);const i=s.closest(e);return i||s.getRootNode?i||t(s.getRootNode().host):null}(t)}(h,p):p.closest(h)))return void(t.allowClick=!0);if(l.swipeHandler&&!p.closest(l.swipeHandler))return;d.currentX=i.pageX,d.currentY=i.pageY;const g=d.currentX,v=d.currentY;if(!R(t,i,g))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),d.startX=g,d.startY=v,n.touchStartTime=o(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(n.allowThresholdMove=!1);let w=!0;p.matches(n.focusableElements)&&(w=!1,"SELECT"===p.nodeName&&(n.isTouched=!1)),s.activeElement&&s.activeElement.matches(n.focusableElements)&&s.activeElement!==p&&s.activeElement.blur();const b=w&&t.allowTouchMove&&l.touchStartPreventDefault;!l.touchStartForcePreventDefault&&!b||p.isContentEditable||i.preventDefault(),l.freeMode&&l.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",i)}function q(e){const t=a(),s=this,i=s.touchEventsData,{params:r,touches:n,rtlTranslate:l,enabled:d}=s;if(!d)return;if(!r.simulateTouch&&"mouse"===e.pointerType)return;let c,p=e;if(p.originalEvent&&(p=p.originalEvent),"pointermove"===p.type){if(null!==i.touchId)return;if(p.pointerId!==i.pointerId)return}if("touchmove"===p.type){if(c=[...p.changedTouches].filter((e=>e.identifier===i.touchId))[0],!c||c.identifier!==i.touchId)return}else c=p;if(!i.isTouched)return void(i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",p));const u=c.pageX,m=c.pageY;if(p.preventedByNestedSwiper)return n.startX=u,void(n.startY=m);if(!s.allowTouchMove)return p.target.matches(i.focusableElements)||(s.allowClick=!1),void(i.isTouched&&(Object.assign(n,{startX:u,startY:m,currentX:u,currentY:m}),i.touchStartTime=o()));if(r.touchReleaseOnEdges&&!r.loop)if(s.isVertical()){if(m<n.startY&&s.translate<=s.maxTranslate()||m>n.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(u<n.startX&&s.translate<=s.maxTranslate()||u>n.startX&&s.translate>=s.minTranslate())return;if(t.activeElement&&p.target===t.activeElement&&p.target.matches(i.focusableElements))return i.isMoved=!0,void(s.allowClick=!1);i.allowTouchCallbacks&&s.emit("touchMove",p),n.previousX=n.currentX,n.previousY=n.currentY,n.currentX=u,n.currentY=m;const h=n.currentX-n.startX,f=n.currentY-n.startY;if(s.params.threshold&&Math.sqrt(h**2+f**2)<s.params.threshold)return;if(void 0===i.isScrolling){let e;s.isHorizontal()&&n.currentY===n.startY||s.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:h*h+f*f>=25&&(e=180*Math.atan2(Math.abs(f),Math.abs(h))/Math.PI,i.isScrolling=s.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&s.emit("touchMoveOpposite",p),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling||"touchmove"===p.type&&i.preventTouchMoveFromPointerMove)return void(i.isTouched=!1);if(!i.startMoving)return;s.allowClick=!1,!r.cssMode&&p.cancelable&&p.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&p.stopPropagation();let g=s.isHorizontal()?h:f,v=s.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;r.oneWayMovement&&(g=Math.abs(g)*(l?1:-1),v=Math.abs(v)*(l?1:-1)),n.diff=g,g*=r.touchRatio,l&&(g=-g,v=-v);const w=s.touchesDirection;s.swipeDirection=g>0?"prev":"next",s.touchesDirection=v>0?"prev":"next";const b=s.params.loop&&!r.cssMode,y="next"===s.touchesDirection&&s.allowSlideNext||"prev"===s.touchesDirection&&s.allowSlidePrev;if(!i.isMoved){if(b&&y&&s.loopFix({direction:s.swipeDirection}),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});s.wrapperEl.dispatchEvent(e)}i.allowMomentumBounce=!1,!r.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",p)}if((new Date).getTime(),i.isMoved&&i.allowThresholdMove&&w!==s.touchesDirection&&b&&y&&Math.abs(g)>=1)return Object.assign(n,{startX:u,startY:m,currentX:u,currentY:m,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,void(i.startTranslate=i.currentTranslate);s.emit("sliderMove",p),i.isMoved=!0,i.currentTranslate=g+i.startTranslate;let E=!0,x=r.resistanceRatio;if(r.touchReleaseOnEdges&&(x=0),g>0?(b&&y&&i.allowThresholdMove&&i.currentTranslate>(r.centeredSlides?s.minTranslate()-s.slidesSizesGrid[s.activeIndex+1]:s.minTranslate())&&s.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>s.minTranslate()&&(E=!1,r.resistance&&(i.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+i.startTranslate+g)**x))):g<0&&(b&&y&&i.allowThresholdMove&&i.currentTranslate<(r.centeredSlides?s.maxTranslate()+s.slidesSizesGrid[s.slidesSizesGrid.length-1]:s.maxTranslate())&&s.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:s.slides.length-("auto"===r.slidesPerView?s.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<s.maxTranslate()&&(E=!1,r.resistance&&(i.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-i.startTranslate-g)**x))),E&&(p.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(g)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=s.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&s.freeMode||r.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}function V(e){const t=this,s=t.touchEventsData;let a,i=e;i.originalEvent&&(i=i.originalEvent);if("touchend"===i.type||"touchcancel"===i.type){if(a=[...i.changedTouches].filter((e=>e.identifier===s.touchId))[0],!a||a.identifier!==s.touchId)return}else{if(null!==s.touchId)return;if(i.pointerId!==s.pointerId)return;a=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)){if(!(["pointercancel","contextmenu"].includes(i.type)&&(t.browser.isSafari||t.browser.isWebView)))return}s.pointerId=null,s.touchId=null;const{params:r,touches:n,rtlTranslate:d,slidesGrid:c,enabled:p}=t;if(!p)return;if(!r.simulateTouch&&"mouse"===i.pointerType)return;if(s.allowTouchCallbacks&&t.emit("touchEnd",i),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&r.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);r.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const u=o(),m=u-s.touchStartTime;if(t.allowClick){const e=i.path||i.composedPath&&i.composedPath();t.updateClickedSlide(e&&e[0]||i.target,e),t.emit("tap click",i),m<300&&u-s.lastClickTime<300&&t.emit("doubleTap doubleClick",i)}if(s.lastClickTime=o(),l((()=>{t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===n.diff&&!s.loopSwapReset||s.currentTranslate===s.startTranslate&&!s.loopSwapReset)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);let h;if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,h=r.followFinger?d?t.translate:-t.translate:-s.currentTranslate,r.cssMode)return;if(r.freeMode&&r.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});const f=h>=-t.maxTranslate()&&!t.params.loop;let g=0,v=t.slidesSizesGrid[0];for(let e=0;e<c.length;e+=e<r.slidesPerGroupSkip?1:r.slidesPerGroup){const t=e<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;void 0!==c[e+t]?(f||h>=c[e]&&h<c[e+t])&&(g=e,v=c[e+t]-c[e]):(f||h>=c[e])&&(g=e,v=c[c.length-1]-c[c.length-2])}let w=null,b=null;r.rewind&&(t.isBeginning?b=r.virtual&&r.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(w=0));const y=(h-c[g])/v,E=g<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(m>r.longSwipesMs){if(!r.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(y>=r.longSwipesRatio?t.slideTo(r.rewind&&t.isEnd?w:g+E):t.slideTo(g)),"prev"===t.swipeDirection&&(y>1-r.longSwipesRatio?t.slideTo(g+E):null!==b&&y<0&&Math.abs(y)>r.longSwipesRatio?t.slideTo(b):t.slideTo(g))}else{if(!r.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(i.target===t.navigation.nextEl||i.target===t.navigation.prevEl)?i.target===t.navigation.nextEl?t.slideTo(g+E):t.slideTo(g):("next"===t.swipeDirection&&t.slideTo(null!==w?w:g+E),"prev"===t.swipeDirection&&t.slideTo(null!==b?b:g))}}function _(){const e=this,{params:t,el:s}=e;if(s&&0===s.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:r}=e,n=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=n&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||l?e.params.loop&&!n?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function W(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function j(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function U(e){const t=this;O(t,e.target),t.params.cssMode||"auto"!==t.params.slidesPerView&&!t.params.autoHeight||t.update()}function K(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Z=(e,t)=>{const s=a(),{params:i,el:r,wrapperEl:n,device:l}=e,o=!!i.nested,d="on"===t?"addEventListener":"removeEventListener",c=t;s[d]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:o}),r[d]("touchstart",e.onTouchStart,{passive:!1}),r[d]("pointerdown",e.onTouchStart,{passive:!1}),s[d]("touchmove",e.onTouchMove,{passive:!1,capture:o}),s[d]("pointermove",e.onTouchMove,{passive:!1,capture:o}),s[d]("touchend",e.onTouchEnd,{passive:!0}),s[d]("pointerup",e.onTouchEnd,{passive:!0}),s[d]("pointercancel",e.onTouchEnd,{passive:!0}),s[d]("touchcancel",e.onTouchEnd,{passive:!0}),s[d]("pointerout",e.onTouchEnd,{passive:!0}),s[d]("pointerleave",e.onTouchEnd,{passive:!0}),s[d]("contextmenu",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[d]("click",e.onClick,!0),i.cssMode&&n[d]("scroll",e.onScroll),i.updateOnWindowResize?e[c](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",_,!0):e[c]("observerUpdate",_,!0),r[d]("load",e.onLoad,{capture:!0})};const Q=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var J={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function ee(e,t){return function(s){void 0===s&&(s={});const a=Object.keys(s)[0],i=s[a];"object"==typeof i&&null!==i?(!0===e[a]&&(e[a]={enabled:!0}),"navigation"===a&&e[a]&&e[a].enabled&&!e[a].prevEl&&!e[a].nextEl&&(e[a].auto=!0),["pagination","scrollbar"].indexOf(a)>=0&&e[a]&&e[a].enabled&&!e[a].el&&(e[a].auto=!0),a in e&&"enabled"in i?("object"!=typeof e[a]||"enabled"in e[a]||(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),p(t,s)):p(t,s)):p(t,s)}}const te={eventsEmitter:z,update:H,translate:N,transition:{setTransition:function(e,t){const s=this;s.params.cssMode||(s.wrapperEl.style.transitionDuration=`${e}ms`,s.wrapperEl.style.transitionDelay=0===e?"0ms":""),s.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),X({swiper:s,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;s.animating=!1,a.cssMode||(s.setTransition(0),X({swiper:s,runCallbacks:e,direction:t,step:"End"}))}},slide:B,loop:Y,grabCursor:{setGrabCursor:function(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),s.style.cursor="move",s.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))},unsetGrabCursor:function(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}},events:{attachEvents:function(){const e=this,{params:t}=e;e.onTouchStart=F.bind(e),e.onTouchMove=q.bind(e),e.onTouchEnd=V.bind(e),e.onDocumentTouchStart=K.bind(e),t.cssMode&&(e.onScroll=j.bind(e)),e.onClick=W.bind(e),e.onLoad=U.bind(e),Z(e,"on")},detachEvents:function(){Z(this,"off")}},breakpoints:{setBreakpoint:function(){const e=this,{realIndex:t,initialized:s,params:a,el:i}=e,r=a.breakpoints;if(!r||r&&0===Object.keys(r).length)return;const n=e.getBreakpoint(r,e.params.breakpointsBase,e.el);if(!n||e.currentBreakpoint===n)return;const l=(n in r?r[n]:void 0)||e.originalParams,o=Q(e,a),d=Q(e,l),c=e.params.grabCursor,u=l.grabCursor,m=a.enabled;o&&!d?(i.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),e.emitContainerClasses()):!o&&d&&(i.classList.add(`${a.containerModifierClass}grid`),(l.grid.fill&&"column"===l.grid.fill||!l.grid.fill&&"column"===a.grid.fill)&&i.classList.add(`${a.containerModifierClass}grid-column`),e.emitContainerClasses()),c&&!u?e.unsetGrabCursor():!c&&u&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach((t=>{if(void 0===l[t])return;const s=a[t]&&a[t].enabled,i=l[t]&&l[t].enabled;s&&!i&&e[t].disable(),!s&&i&&e[t].enable()}));const h=l.direction&&l.direction!==a.direction,f=a.loop&&(l.slidesPerView!==a.slidesPerView||h),g=a.loop;h&&s&&e.changeDirection(),p(e.params,l);const v=e.params.enabled,w=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),m&&!v?e.disable():!m&&v&&e.enable(),e.currentBreakpoint=n,e.emit("_beforeBreakpoint",l),s&&(f?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!g&&w?(e.loopCreate(t),e.updateSlides()):g&&!w&&e.loopDestroy()),e.emit("breakpoint",l)},getBreakpoint:function(e,t,s){if(void 0===t&&(t="window"),!e||"container"===t&&!s)return;let a=!1;const i=r(),n="window"===t?i.innerHeight:s.clientHeight,l=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));l.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<l.length;e+=1){const{point:r,value:n}=l[e];"window"===t?i.matchMedia(`(min-width: ${n}px)`).matches&&(a=r):n<=s.clientWidth&&(a=r)}return a||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*a;e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length;!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:s,rtl:a,el:i,device:r}=e,n=function(e,t){const s=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((a=>{e[a]&&s.push(t+a)})):"string"==typeof e&&s.push(t+e)})),s}(["initialized",s.direction,{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&"column"===s.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...n),i.classList.add(...t),e.emitContainerClasses()},removeClasses:function(){const{el:e,classNames:t}=this;e.classList.remove(...t),this.emitContainerClasses()}}},se={};class ae{constructor(){let e,t;for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];1===i.length&&i[0].constructor&&"Object"===Object.prototype.toString.call(i[0]).slice(8,-1)?t=i[0]:[e,t]=i,t||(t={}),t=p({},t),e&&!t.el&&(t.el=e);const n=a();if(t.el&&"string"==typeof t.el&&n.querySelectorAll(t.el).length>1){const e=[];return n.querySelectorAll(t.el).forEach((s=>{const a=p({},t,{el:s});e.push(new ae(a))})),e}const l=this;l.__swiper__=!0,l.support=L(),l.device=I({userAgent:t.userAgent}),l.browser=A(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],t.modules&&Array.isArray(t.modules)&&l.modules.push(...t.modules);const o={};l.modules.forEach((e=>{e({params:t,swiper:l,extendParams:ee(t,o),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})}));const d=p({},J,o);return l.params=p({},d,se,t),l.originalParams=p({},l.params),l.passedParams=p({},t),l.params&&l.params.on&&Object.keys(l.params.on).forEach((e=>{l.on(e,l.params.on[e])})),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===l.params.direction,isVertical:()=>"vertical"===l.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:s}=this,a=y(f(t,`.${s.slideClass}, swiper-slide`)[0]);return y(e)-a}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=f(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:r,size:n,activeIndex:l}=this;let o=1;if("number"==typeof s.slidesPerView)return s.slidesPerView;if(s.centeredSlides){let e,t=a[l]?Math.ceil(a[l].swiperSlideSize):0;for(let s=l+1;s<a.length;s+=1)a[s]&&!e&&(t+=Math.ceil(a[s].swiperSlideSize),o+=1,t>n&&(e=!0));for(let s=l-1;s>=0;s-=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0))}else if("current"===e)for(let e=l+1;e<a.length;e+=1){(t?i[e]+r[e]-i[l]<n:i[e]-i[l]<n)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){i[l]-i[e]<n&&(o+=1)}return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(s.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&O(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),s.freeMode&&s.freeMode.enabled&&!s.cssMode)a(),s.autoHeight&&e.updateAutoHeight();else{if(("auto"===s.slidesPerView||s.slidesPerView>1)&&e.isEnd&&!s.centeredSlides){const t=e.virtual&&s.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(t.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||a()}s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const s=this,a=s.params.direction;return e||(e="horizontal"===a?"vertical":"horizontal"),e===a||"horizontal"!==e&&"vertical"!==e||(s.el.classList.remove(`${s.params.containerModifierClass}${a}`),s.el.classList.add(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let s=e||t.params.el;if("string"==typeof s&&(s=document.querySelector(s)),!s)return!1;s.swiper=t,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const a=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let i=(()=>{if(s&&s.shadowRoot&&s.shadowRoot.querySelector){return s.shadowRoot.querySelector(a())}return f(s,a())[0]})();return!i&&t.params.createElements&&(i=v("div",t.params.wrapperClass),s.append(i),f(s,`.${t.params.slideClass}`).forEach((e=>{i.append(e)}))),Object.assign(t,{el:s,wrapperEl:i,slidesEl:t.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:i,hostEl:t.isElement?s.parentNode.host:s,mounted:!0,rtl:"rtl"===s.dir.toLowerCase()||"rtl"===b(s,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===s.dir.toLowerCase()||"rtl"===b(s,"direction")),wrongRTL:"-webkit-box"===b(i,"display")}),!0}init(e){const t=this;if(t.initialized)return t;if(!1===t.mount(e))return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const s=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),s.forEach((e=>{e.complete?O(t,e):e.addEventListener("load",(e=>{O(t,e.target)}))})),G(t),t.initialized=!0,G(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const s=this,{params:a,el:i,wrapperEl:r,slides:n}=s;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i.removeAttribute("style"),r.removeAttribute("style"),n&&n.length&&n.forEach((e=>{e.classList.remove(a.slideVisibleClass,a.slideFullyVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((e=>{s.off(e)})),!1!==e&&(s.el.swiper=null,function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}(s)),s.destroyed=!0),null}static extendDefaults(e){p(se,e)}static get extendedDefaults(){return se}static get defaults(){return J}static installModule(e){ae.prototype.__modules__||(ae.prototype.__modules__=[]);const t=ae.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>ae.installModule(e))),ae):(ae.installModule(e),ae)}}function ie(e,t,s,a){return e.params.createElements&&Object.keys(a).forEach((i=>{if(!s[i]&&!0===s.auto){let r=f(e.el,`.${a[i]}`)[0];r||(r=v("div",a[i]),r.className=a[i],e.el.append(r)),s[i]=r,t[i]=r}})),s}function re(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function ne(e){const t=this,{params:s,slidesEl:a}=t;s.loop&&t.loopDestroy();const i=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,a.append(t.children[0]),t.innerHTML=""}else a.append(e)};if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&i(e[t]);else i(e);t.recalcSlides(),s.loop&&t.loopCreate(),s.observer&&!t.isElement||t.update()}function le(e){const t=this,{params:s,activeIndex:a,slidesEl:i}=t;s.loop&&t.loopDestroy();let r=a+1;const n=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,i.prepend(t.children[0]),t.innerHTML=""}else i.prepend(e)};if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&n(e[t]);r=a+e.length}else n(e);t.recalcSlides(),s.loop&&t.loopCreate(),s.observer&&!t.isElement||t.update(),t.slideTo(r,0,!1)}function oe(e,t){const s=this,{params:a,activeIndex:i,slidesEl:r}=s;let n=i;a.loop&&(n-=s.loopedSlides,s.loopDestroy(),s.recalcSlides());const l=s.slides.length;if(e<=0)return void s.prependSlide(t);if(e>=l)return void s.appendSlide(t);let o=n>e?n+1:n;const d=[];for(let t=l-1;t>=e;t-=1){const e=s.slides[t];e.remove(),d.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&r.append(t[e]);o=n>e?n+t.length:n}else r.append(t);for(let e=0;e<d.length;e+=1)r.append(d[e]);s.recalcSlides(),a.loop&&s.loopCreate(),a.observer&&!s.isElement||s.update(),a.loop?s.slideTo(o+s.loopedSlides,0,!1):s.slideTo(o,0,!1)}function de(e){const t=this,{params:s,activeIndex:a}=t;let i=a;s.loop&&(i-=t.loopedSlides,t.loopDestroy());let r,n=i;if("object"==typeof e&&"length"in e){for(let s=0;s<e.length;s+=1)r=e[s],t.slides[r]&&t.slides[r].remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides[r].remove(),r<n&&(n-=1),n=Math.max(n,0);t.recalcSlides(),s.loop&&t.loopCreate(),s.observer&&!t.isElement||t.update(),s.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)}function ce(){const e=this,t=[];for(let s=0;s<e.slides.length;s+=1)t.push(s);e.removeSlide(t)}function pe(e){const{effect:t,swiper:s,on:a,setTranslate:i,setTransition:r,overwriteParams:n,perspective:l,recreateShadows:o,getEffectParams:d}=e;let c;a("beforeInit",(()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const e=n?n():{};Object.assign(s.params,e),Object.assign(s.originalParams,e)})),a("setTranslate",(()=>{s.params.effect===t&&i()})),a("setTransition",((e,a)=>{s.params.effect===t&&r(a)})),a("transitionEnd",(()=>{if(s.params.effect===t&&o){if(!d||!d().slideShadows)return;s.slides.forEach((e=>{e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e=>e.remove()))})),o()}})),a("virtualUpdate",(()=>{s.params.effect===t&&(s.slides.length||(c=!0),requestAnimationFrame((()=>{c&&s.slides&&s.slides.length&&(i(),c=!1)})))}))}function ue(e,t){const s=h(t);return s!==t&&(s.style.backfaceVisibility="hidden",s.style["-webkit-backface-visibility"]="hidden"),s}function me(e){let{swiper:t,duration:s,transformElements:a,allSlides:i}=e;const{activeIndex:r}=t;if(t.params.virtualTranslate&&0!==s){let e,s=!1;e=i?a:a.filter((e=>{const s=e.classList.contains("swiper-slide-transform")?(e=>{if(!e.parentElement)return t.slides.filter((t=>t.shadowRoot&&t.shadowRoot===e.parentNode))[0];return e.parentElement})(e):e;return t.getSlideIndex(s)===r})),e.forEach((e=>{x(e,(()=>{if(s)return;if(!t||t.destroyed)return;s=!0,t.animating=!1;const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(e)}))}))}}function he(e,t,s){const a=`swiper-slide-shadow${s?`-${s}`:""}${e?` swiper-slide-shadow-${e}`:""}`,i=h(t);let r=i.querySelector(`.${a.split(" ").join(".")}`);return r||(r=v("div",a.split(" ")),i.append(r)),r}Object.keys(te).forEach((e=>{Object.keys(te[e]).forEach((t=>{ae.prototype[t]=te[e][t]}))})),ae.use([function(e){let{swiper:t,on:s,emit:a}=e;const i=r();let n=null,l=null;const o=()=>{t&&!t.destroyed&&t.initialized&&(a("beforeResize"),a("resize"))},d=()=>{t&&!t.destroyed&&t.initialized&&a("orientationchange")};s("init",(()=>{t.params.resizeObserver&&void 0!==i.ResizeObserver?t&&!t.destroyed&&t.initialized&&(n=new ResizeObserver((e=>{l=i.requestAnimationFrame((()=>{const{width:s,height:a}=t;let i=s,r=a;e.forEach((e=>{let{contentBoxSize:s,contentRect:a,target:n}=e;n&&n!==t.el||(i=a?a.width:(s[0]||s).inlineSize,r=a?a.height:(s[0]||s).blockSize)})),i===s&&r===a||o()}))})),n.observe(t.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",d))})),s("destroy",(()=>{l&&i.cancelAnimationFrame(l),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",d)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=[],l=r(),o=function(e,s){void 0===s&&(s={});const a=new(l.MutationObserver||l.WebkitMutationObserver)((e=>{if(t.__preventObserver__)return;if(1===e.length)return void i("observerUpdate",e[0]);const s=function(){i("observerUpdate",e[0])};l.requestAnimationFrame?l.requestAnimationFrame(s):l.setTimeout(s,0)}));a.observe(e,{attributes:void 0===s.attributes||s.attributes,childList:void 0===s.childList||s.childList,characterData:void 0===s.characterData||s.characterData}),n.push(a)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",(()=>{if(t.params.observer){if(t.params.observeParents){const e=E(t.hostEl);for(let t=0;t<e.length;t+=1)o(e[t])}o(t.hostEl,{childList:t.params.observeSlideChildren}),o(t.wrapperEl,{attributes:!1})}})),a("destroy",(()=>{n.forEach((e=>{e.disconnect()})),n.splice(0,n.length)}))}]);const fe=[function(e){let t,{swiper:s,extendParams:i,on:r,emit:n}=e;i({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});const l=a();s.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const o=l.createElement("div");function d(e,t){const a=s.params.virtual;if(a.cache&&s.virtual.cache[t])return s.virtual.cache[t];let i;return a.renderSlide?(i=a.renderSlide.call(s,e,t),"string"==typeof i&&(o.innerHTML=i,i=o.children[0])):i=s.isElement?v("swiper-slide"):v("div",s.params.slideClass),i.setAttribute("data-swiper-slide-index",t),a.renderSlide||(i.innerHTML=e),a.cache&&(s.virtual.cache[t]=i),i}function c(e,t){const{slidesPerView:a,slidesPerGroup:i,centeredSlides:r,loop:l,initialSlide:o}=s.params;if(t&&!l&&o>0)return;const{addSlidesBefore:c,addSlidesAfter:p}=s.params.virtual,{from:u,to:m,slides:h,slidesGrid:g,offset:v}=s.virtual;s.params.cssMode||s.updateActiveIndex();const w=s.activeIndex||0;let b,y,E;b=s.rtlTranslate?"right":s.isHorizontal()?"left":"top",r?(y=Math.floor(a/2)+i+p,E=Math.floor(a/2)+i+c):(y=a+(i-1)+p,E=(l?a:i)+c);let x=w-E,S=w+y;l||(x=Math.max(x,0),S=Math.min(S,h.length-1));let T=(s.slidesGrid[x]||0)-(s.slidesGrid[0]||0);function M(){s.updateSlides(),s.updateProgress(),s.updateSlidesClasses(),n("virtualUpdate")}if(l&&w>=E?(x-=E,r||(T+=s.slidesGrid[0])):l&&w<E&&(x=-E,r&&(T+=s.slidesGrid[0])),Object.assign(s.virtual,{from:x,to:S,offset:T,slidesGrid:s.slidesGrid,slidesBefore:E,slidesAfter:y}),u===x&&m===S&&!e)return s.slidesGrid!==g&&T!==v&&s.slides.forEach((e=>{e.style[b]=T-Math.abs(s.cssOverflowAdjustment())+"px"})),s.updateProgress(),void n("virtualUpdate");if(s.params.virtual.renderExternal)return s.params.virtual.renderExternal.call(s,{offset:T,from:x,to:S,slides:function(){const e=[];for(let t=x;t<=S;t+=1)e.push(h[t]);return e}()}),void(s.params.virtual.renderExternalUpdate?M():n("virtualUpdate"));const C=[],P=[],L=e=>{let t=e;return e<0?t=h.length+e:t>=h.length&&(t-=h.length),t};if(e)s.slides.filter((e=>e.matches(`.${s.params.slideClass}, swiper-slide`))).forEach((e=>{e.remove()}));else for(let e=u;e<=m;e+=1)if(e<x||e>S){const t=L(e);s.slides.filter((e=>e.matches(`.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`))).forEach((e=>{e.remove()}))}const I=l?-h.length:0,A=l?2*h.length:h.length;for(let t=I;t<A;t+=1)if(t>=x&&t<=S){const s=L(t);void 0===m||e?P.push(s):(t>m&&P.push(s),t<u&&C.push(s))}if(P.forEach((e=>{s.slidesEl.append(d(h[e],e))})),l)for(let e=C.length-1;e>=0;e-=1){const t=C[e];s.slidesEl.prepend(d(h[t],t))}else C.sort(((e,t)=>t-e)),C.forEach((e=>{s.slidesEl.prepend(d(h[e],e))}));f(s.slidesEl,".swiper-slide, swiper-slide").forEach((e=>{e.style[b]=T-Math.abs(s.cssOverflowAdjustment())+"px"})),M()}r("beforeInit",(()=>{if(!s.params.virtual.enabled)return;let e;if(void 0===s.passedParams.virtual.slides){const t=[...s.slidesEl.children].filter((e=>e.matches(`.${s.params.slideClass}, swiper-slide`)));t&&t.length&&(s.virtual.slides=[...t],e=!0,t.forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t),s.virtual.cache[t]=e,e.remove()})))}e||(s.virtual.slides=s.params.virtual.slides),s.classNames.push(`${s.params.containerModifierClass}virtual`),s.params.watchSlidesProgress=!0,s.originalParams.watchSlidesProgress=!0,c(!1,!0)})),r("setTranslate",(()=>{s.params.virtual.enabled&&(s.params.cssMode&&!s._immediateVirtual?(clearTimeout(t),t=setTimeout((()=>{c()}),100)):c())})),r("init update resize",(()=>{s.params.virtual.enabled&&s.params.cssMode&&u(s.wrapperEl,"--swiper-virtual-size",`${s.virtualSize}px`)})),Object.assign(s.virtual,{appendSlide:function(e){if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.push(e[t]);else s.virtual.slides.push(e);c(!0)},prependSlide:function(e){const t=s.activeIndex;let a=t+1,i=1;if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.unshift(e[t]);a=t+e.length,i=e.length}else s.virtual.slides.unshift(e);if(s.params.virtual.cache){const e=s.virtual.cache,t={};Object.keys(e).forEach((s=>{const a=e[s],r=a.getAttribute("data-swiper-slide-index");r&&a.setAttribute("data-swiper-slide-index",parseInt(r,10)+i),t[parseInt(s,10)+i]=a})),s.virtual.cache=t}c(!0),s.slideTo(a,0)},removeSlide:function(e){if(null==e)return;let t=s.activeIndex;if(Array.isArray(e))for(let a=e.length-1;a>=0;a-=1)s.params.virtual.cache&&(delete s.virtual.cache[e[a]],Object.keys(s.virtual.cache).forEach((t=>{t>e&&(s.virtual.cache[t-1]=s.virtual.cache[t],s.virtual.cache[t-1].setAttribute("data-swiper-slide-index",t-1),delete s.virtual.cache[t])}))),s.virtual.slides.splice(e[a],1),e[a]<t&&(t-=1),t=Math.max(t,0);else s.params.virtual.cache&&(delete s.virtual.cache[e],Object.keys(s.virtual.cache).forEach((t=>{t>e&&(s.virtual.cache[t-1]=s.virtual.cache[t],s.virtual.cache[t-1].setAttribute("data-swiper-slide-index",t-1),delete s.virtual.cache[t])}))),s.virtual.slides.splice(e,1),e<t&&(t-=1),t=Math.max(t,0);c(!0),s.slideTo(t,0)},removeAllSlides:function(){s.virtual.slides=[],s.params.virtual.cache&&(s.virtual.cache={}),c(!0),s.slideTo(0,0)},update:c})},function(e){let{swiper:t,extendParams:s,on:i,emit:n}=e;const l=a(),o=r();function d(e){if(!t.enabled)return;const{rtlTranslate:s}=t;let a=e;a.originalEvent&&(a=a.originalEvent);const i=a.keyCode||a.charCode,r=t.params.keyboard.pageUpDown,d=r&&33===i,c=r&&34===i,p=37===i,u=39===i,m=38===i,h=40===i;if(!t.allowSlideNext&&(t.isHorizontal()&&u||t.isVertical()&&h||c))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&p||t.isVertical()&&m||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||l.activeElement&&l.activeElement.nodeName&&("input"===l.activeElement.nodeName.toLowerCase()||"textarea"===l.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(d||c||p||u||m||h)){let e=!1;if(E(t.el,`.${t.params.slideClass}, swiper-slide`).length>0&&0===E(t.el,`.${t.params.slideActiveClass}`).length)return;const a=t.el,i=a.clientWidth,r=a.clientHeight,n=o.innerWidth,l=o.innerHeight,d=w(a);s&&(d.left-=a.scrollLeft);const c=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+r],[d.left+i,d.top+r]];for(let t=0;t<c.length;t+=1){const s=c[t];if(s[0]>=0&&s[0]<=n&&s[1]>=0&&s[1]<=l){if(0===s[0]&&0===s[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((d||c||p||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((c||u)&&!s||(d||p)&&s)&&t.slideNext(),((d||p)&&!s||(c||u)&&s)&&t.slidePrev()):((d||c||m||h)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(c||h)&&t.slideNext(),(d||m)&&t.slidePrev()),n("keyPress",i)}}function c(){t.keyboard.enabled||(l.addEventListener("keydown",d),t.keyboard.enabled=!0)}function p(){t.keyboard.enabled&&(l.removeEventListener("keydown",d),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},s({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),i("init",(()=>{t.params.keyboard.enabled&&c()})),i("destroy",(()=>{t.keyboard.enabled&&p()})),Object.assign(t.keyboard,{enable:c,disable:p})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();let d;s({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),t.mousewheel={enabled:!1};let c,p=o();const u=[];function m(){t.enabled&&(t.mouseEntered=!0)}function h(){t.enabled&&(t.mouseEntered=!1)}function f(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta)&&(!(t.params.mousewheel.thresholdTime&&o()-p<t.params.mousewheel.thresholdTime)&&(e.delta>=6&&o()-p<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),i("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),i("scroll",e.raw)),p=(new n.Date).getTime(),!1)))}function g(e){let s=e,a=!0;if(!t.enabled)return;if(e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))return;const r=t.params.mousewheel;t.params.cssMode&&s.preventDefault();let n=t.el;"container"!==t.params.mousewheel.eventsTarget&&(n=document.querySelector(t.params.mousewheel.eventsTarget));const p=n&&n.contains(s.target);if(!t.mouseEntered&&!p&&!r.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let m=0;const h=t.rtlTranslate?-1:1,g=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(r.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(g.pixelX)>Math.abs(g.pixelY)))return!0;m=-g.pixelX*h}else{if(!(Math.abs(g.pixelY)>Math.abs(g.pixelX)))return!0;m=-g.pixelY}else m=Math.abs(g.pixelX)>Math.abs(g.pixelY)?-g.pixelX*h:-g.pixelY;if(0===m)return!0;r.invert&&(m=-m);let v=t.getTranslate()+m*r.sensitivity;if(v>=t.minTranslate()&&(v=t.minTranslate()),v<=t.maxTranslate()&&(v=t.maxTranslate()),a=!!t.params.loop||!(v===t.minTranslate()||v===t.maxTranslate()),a&&t.params.nested&&s.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:o(),delta:Math.abs(m),direction:Math.sign(m)},a=c&&e.time<c.time+500&&e.delta<=c.delta&&e.direction===c.direction;if(!a){c=void 0;let n=t.getTranslate()+m*r.sensitivity;const o=t.isBeginning,p=t.isEnd;if(n>=t.minTranslate()&&(n=t.minTranslate()),n<=t.maxTranslate()&&(n=t.maxTranslate()),t.setTransition(0),t.setTranslate(n),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!o&&t.isBeginning||!p&&t.isEnd)&&t.updateSlidesClasses(),t.params.loop&&t.loopFix({direction:e.direction<0?"next":"prev",byMousewheel:!0}),t.params.freeMode.sticky){clearTimeout(d),d=void 0,u.length>=15&&u.shift();const s=u.length?u[u.length-1]:void 0,a=u[0];if(u.push(e),s&&(e.delta>s.delta||e.direction!==s.direction))u.splice(0);else if(u.length>=15&&e.time-a.time<500&&a.delta-e.delta>=1&&e.delta<=6){const s=m>0?.8:.2;c=e,u.splice(0),d=l((()=>{t.slideToClosest(t.params.speed,!0,void 0,s)}),0)}d||(d=l((()=>{c=e,u.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)}),500))}if(a||i("scroll",s),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),r.releaseOnEdges&&(n===t.minTranslate()||n===t.maxTranslate()))return!0}}else{const s={time:o(),delta:Math.abs(m),direction:Math.sign(m),raw:e};u.length>=2&&u.shift();const a=u.length?u[u.length-1]:void 0;if(u.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&f(s):f(s),function(e){const s=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&s.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function v(e){let s=t.el;"container"!==t.params.mousewheel.eventsTarget&&(s=document.querySelector(t.params.mousewheel.eventsTarget)),s[e]("mouseenter",m),s[e]("mouseleave",h),s[e]("wheel",g)}function w(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",g),!0):!t.mousewheel.enabled&&(v("addEventListener"),t.mousewheel.enabled=!0,!0)}function b(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,g),!0):!!t.mousewheel.enabled&&(v("removeEventListener"),t.mousewheel.enabled=!1,!0)}a("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&b(),t.params.mousewheel.enabled&&w()})),a("destroy",(()=>{t.params.cssMode&&w(),t.mousewheel.enabled&&b()})),Object.assign(t.mousewheel,{enable:w,disable:b})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;function r(e){let s;return e&&"string"==typeof e&&t.isElement&&(s=t.el.querySelector(e),s)?s:(e&&("string"==typeof e&&(s=[...document.querySelectorAll(e)]),t.params.uniqueNavElements&&"string"==typeof e&&s&&s.length>1&&1===t.el.querySelectorAll(e).length?s=t.el.querySelector(e):s&&1===s.length&&(s=s[0])),e&&!s?e:s)}function n(e,s){const a=t.params.navigation;(e=T(e)).forEach((e=>{e&&(e.classList[s?"add":"remove"](...a.disabledClass.split(" ")),"BUTTON"===e.tagName&&(e.disabled=s),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](a.lockClass))}))}function l(){const{nextEl:e,prevEl:s}=t.navigation;if(t.params.loop)return n(s,!1),void n(e,!1);n(s,t.isBeginning&&!t.params.rewind),n(e,t.isEnd&&!t.params.rewind)}function o(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function d(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function c(){const e=t.params.navigation;if(t.params.navigation=ie(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;let s=r(e.nextEl),a=r(e.prevEl);Object.assign(t.navigation,{nextEl:s,prevEl:a}),s=T(s),a=T(a);const i=(s,a)=>{s&&s.addEventListener("click","next"===a?d:o),!t.enabled&&s&&s.classList.add(...e.lockClass.split(" "))};s.forEach((e=>i(e,"next"))),a.forEach((e=>i(e,"prev")))}function p(){let{nextEl:e,prevEl:s}=t.navigation;e=T(e),s=T(s);const a=(e,s)=>{e.removeEventListener("click","next"===s?d:o),e.classList.remove(...t.params.navigation.disabledClass.split(" "))};e.forEach((e=>a(e,"next"))),s.forEach((e=>a(e,"prev")))}s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null},a("init",(()=>{!1===t.params.navigation.enabled?u():(c(),l())})),a("toEdge fromEdge lock unlock",(()=>{l()})),a("destroy",(()=>{p()})),a("enable disable",(()=>{let{nextEl:e,prevEl:s}=t.navigation;e=T(e),s=T(s),t.enabled?l():[...e,...s].filter((e=>!!e)).forEach((e=>e.classList.add(t.params.navigation.lockClass)))})),a("click",((e,s)=>{let{nextEl:a,prevEl:r}=t.navigation;a=T(a),r=T(r);const n=s.target;if(t.params.navigation.hideOnClick&&!r.includes(n)&&!a.includes(n)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===n||t.pagination.el.contains(n)))return;let e;a.length?e=a[0].classList.contains(t.params.navigation.hiddenClass):r.length&&(e=r[0].classList.contains(t.params.navigation.hiddenClass)),i(!0===e?"navigationShow":"navigationHide"),[...a,...r].filter((e=>!!e)).forEach((e=>e.classList.toggle(t.params.navigation.hiddenClass)))}}));const u=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(t.navigation,{enable:()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),c(),l()},disable:u,update:l,init:c,destroy:p})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const r="swiper-pagination";let n;s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),t.pagination={el:null,bullets:[]};let l=0;function o(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&0===t.pagination.el.length}function d(e,s){const{bulletActiveClass:a}=t.params.pagination;e&&(e=e[("prev"===s?"previous":"next")+"ElementSibling"])&&(e.classList.add(`${a}-${s}`),(e=e[("prev"===s?"previous":"next")+"ElementSibling"])&&e.classList.add(`${a}-${s}-${s}`))}function c(e){const s=e.target.closest(re(t.params.pagination.bulletClass));if(!s)return;e.preventDefault();const a=y(s)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===a)return;t.slideToLoop(a)}else t.slideTo(a)}function p(){const e=t.rtl,s=t.params.pagination;if(o())return;let a,r,c=t.pagination.el;c=T(c);const p=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,u=t.params.loop?Math.ceil(p/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(r=t.previousRealIndex||0,a=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):void 0!==t.snapIndex?(a=t.snapIndex,r=t.previousSnapIndex):(r=t.previousIndex||0,a=t.activeIndex||0),"bullets"===s.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const i=t.pagination.bullets;let o,p,u;if(s.dynamicBullets&&(n=S(i[0],t.isHorizontal()?"width":"height",!0),c.forEach((e=>{e.style[t.isHorizontal()?"width":"height"]=n*(s.dynamicMainBullets+4)+"px"})),s.dynamicMainBullets>1&&void 0!==r&&(l+=a-(r||0),l>s.dynamicMainBullets-1?l=s.dynamicMainBullets-1:l<0&&(l=0)),o=Math.max(a-l,0),p=o+(Math.min(i.length,s.dynamicMainBullets)-1),u=(p+o)/2),i.forEach((e=>{const t=[...["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`))].map((e=>"string"==typeof e&&e.includes(" ")?e.split(" "):e)).flat();e.classList.remove(...t)})),c.length>1)i.forEach((e=>{const i=y(e);i===a?e.classList.add(...s.bulletActiveClass.split(" ")):t.isElement&&e.setAttribute("part","bullet"),s.dynamicBullets&&(i>=o&&i<=p&&e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")),i===o&&d(e,"prev"),i===p&&d(e,"next"))}));else{const e=i[a];if(e&&e.classList.add(...s.bulletActiveClass.split(" ")),t.isElement&&i.forEach(((e,t)=>{e.setAttribute("part",t===a?"bullet-active":"bullet")})),s.dynamicBullets){const e=i[o],t=i[p];for(let e=o;e<=p;e+=1)i[e]&&i[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));d(e,"prev"),d(t,"next")}}if(s.dynamicBullets){const a=Math.min(i.length,s.dynamicMainBullets+4),r=(n*a-n)/2-u*n,l=e?"right":"left";i.forEach((e=>{e.style[t.isHorizontal()?l:"top"]=`${r}px`}))}}c.forEach(((e,r)=>{if("fraction"===s.type&&(e.querySelectorAll(re(s.currentClass)).forEach((e=>{e.textContent=s.formatFractionCurrent(a+1)})),e.querySelectorAll(re(s.totalClass)).forEach((e=>{e.textContent=s.formatFractionTotal(u)}))),"progressbar"===s.type){let i;i=s.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const r=(a+1)/u;let n=1,l=1;"horizontal"===i?n=r:l=r,e.querySelectorAll(re(s.progressbarFillClass)).forEach((e=>{e.style.transform=`translate3d(0,0,0) scaleX(${n}) scaleY(${l})`,e.style.transitionDuration=`${t.params.speed}ms`}))}"custom"===s.type&&s.renderCustom?(e.innerHTML=s.renderCustom(t,a+1,u),0===r&&i("paginationRender",e)):(0===r&&i("paginationRender",e),i("paginationUpdate",e)),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](s.lockClass)}))}function u(){const e=t.params.pagination;if(o())return;const s=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let a=t.pagination.el;a=T(a);let r="";if("bullets"===e.type){let a=t.params.loop?Math.ceil(s/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&a>s&&(a=s);for(let s=0;s<a;s+=1)e.renderBullet?r+=e.renderBullet.call(t,s,e.bulletClass):r+=`<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`),t.pagination.bullets=[],a.forEach((s=>{"custom"!==e.type&&(s.innerHTML=r||""),"bullets"===e.type&&t.pagination.bullets.push(...s.querySelectorAll(re(e.bulletClass)))})),"custom"!==e.type&&i("paginationRender",a[0])}function m(){t.params.pagination=ie(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let s;"string"==typeof e.el&&t.isElement&&(s=t.el.querySelector(e.el)),s||"string"!=typeof e.el||(s=[...document.querySelectorAll(e.el)]),s||(s=e.el),s&&0!==s.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&Array.isArray(s)&&s.length>1&&(s=[...t.el.querySelectorAll(e.el)],s.length>1&&(s=s.filter((e=>E(e,".swiper")[0]===t.el))[0])),Array.isArray(s)&&1===s.length&&(s=s[0]),Object.assign(t.pagination,{el:s}),s=T(s),s.forEach((s=>{"bullets"===e.type&&e.clickable&&s.classList.add(...(e.clickableClass||"").split(" ")),s.classList.add(e.modifierClass+e.type),s.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(s.classList.add(`${e.modifierClass}${e.type}-dynamic`),l=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&s.classList.add(e.progressbarOppositeClass),e.clickable&&s.addEventListener("click",c),t.enabled||s.classList.add(e.lockClass)})))}function h(){const e=t.params.pagination;if(o())return;let s=t.pagination.el;s&&(s=T(s),s.forEach((s=>{s.classList.remove(e.hiddenClass),s.classList.remove(e.modifierClass+e.type),s.classList.remove(t.isHorizontal()?e.horizontalClass:e.verticalClass),e.clickable&&(s.classList.remove(...(e.clickableClass||"").split(" ")),s.removeEventListener("click",c))}))),t.pagination.bullets&&t.pagination.bullets.forEach((t=>t.classList.remove(...e.bulletActiveClass.split(" "))))}a("changeDirection",(()=>{if(!t.pagination||!t.pagination.el)return;const e=t.params.pagination;let{el:s}=t.pagination;s=T(s),s.forEach((s=>{s.classList.remove(e.horizontalClass,e.verticalClass),s.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass)}))})),a("init",(()=>{!1===t.params.pagination.enabled?f():(m(),u(),p())})),a("activeIndexChange",(()=>{void 0===t.snapIndex&&p()})),a("snapIndexChange",(()=>{p()})),a("snapGridLengthChange",(()=>{u(),p()})),a("destroy",(()=>{h()})),a("enable disable",(()=>{let{el:e}=t.pagination;e&&(e=T(e),e.forEach((e=>e.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass))))})),a("lock unlock",(()=>{p()})),a("click",((e,s)=>{const a=s.target,r=T(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&r&&r.length>0&&!a.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&a===t.navigation.nextEl||t.navigation.prevEl&&a===t.navigation.prevEl))return;const e=r[0].classList.contains(t.params.pagination.hiddenClass);i(!0===e?"paginationShow":"paginationHide"),r.forEach((e=>e.classList.toggle(t.params.pagination.hiddenClass)))}}));const f=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=T(e),e.forEach((e=>e.classList.add(t.params.pagination.paginationDisabledClass)))),h()};Object.assign(t.pagination,{enable:()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=T(e),e.forEach((e=>e.classList.remove(t.params.pagination.paginationDisabledClass)))),m(),u(),p()},disable:f,render:u,update:p,init:m,destroy:h})},function(e){let{swiper:t,extendParams:s,on:i,emit:r}=e;const o=a();let d,c,p,u,m=!1,h=null,f=null;function g(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:s}=t,{dragEl:a,el:i}=e,r=t.params.scrollbar,n=t.params.loop?t.progressLoop:t.progress;let l=c,o=(p-c)*n;s?(o=-o,o>0?(l=c-o,o=0):-o+c>p&&(l=p+o)):o<0?(l=c+o,o=0):o+c>p&&(l=p-o),t.isHorizontal()?(a.style.transform=`translate3d(${o}px, 0, 0)`,a.style.width=`${l}px`):(a.style.transform=`translate3d(0px, ${o}px, 0)`,a.style.height=`${l}px`),r.hide&&(clearTimeout(h),i.style.opacity=1,h=setTimeout((()=>{i.style.opacity=0,i.style.transitionDuration="400ms"}),1e3))}function b(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{dragEl:s,el:a}=e;s.style.width="",s.style.height="",p=t.isHorizontal()?a.offsetWidth:a.offsetHeight,u=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),c="auto"===t.params.scrollbar.dragSize?p*u:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?s.style.width=`${c}px`:s.style.height=`${c}px`,a.style.display=u>=1?"none":"",t.params.scrollbar.hide&&(a.style.opacity=0),t.params.watchOverflow&&t.enabled&&e.el.classList[t.isLocked?"add":"remove"](t.params.scrollbar.lockClass)}function y(e){return t.isHorizontal()?e.clientX:e.clientY}function E(e){const{scrollbar:s,rtlTranslate:a}=t,{el:i}=s;let r;r=(y(e)-w(i)[t.isHorizontal()?"left":"top"]-(null!==d?d:c/2))/(p-c),r=Math.max(Math.min(r,1),0),a&&(r=1-r);const n=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*r;t.updateProgress(n),t.setTranslate(n),t.updateActiveIndex(),t.updateSlidesClasses()}function x(e){const s=t.params.scrollbar,{scrollbar:a,wrapperEl:i}=t,{el:n,dragEl:l}=a;m=!0,d=e.target===l?y(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),i.style.transitionDuration="100ms",l.style.transitionDuration="100ms",E(e),clearTimeout(f),n.style.transitionDuration="0ms",s.hide&&(n.style.opacity=1),t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="none"),r("scrollbarDragStart",e)}function S(e){const{scrollbar:s,wrapperEl:a}=t,{el:i,dragEl:n}=s;m&&(e.preventDefault&&e.cancelable?e.preventDefault():e.returnValue=!1,E(e),a.style.transitionDuration="0ms",i.style.transitionDuration="0ms",n.style.transitionDuration="0ms",r("scrollbarDragMove",e))}function M(e){const s=t.params.scrollbar,{scrollbar:a,wrapperEl:i}=t,{el:n}=a;m&&(m=!1,t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="",i.style.transitionDuration=""),s.hide&&(clearTimeout(f),f=l((()=>{n.style.opacity=0,n.style.transitionDuration="400ms"}),1e3)),r("scrollbarDragEnd",e),s.snapOnRelease&&t.slideToClosest())}function C(e){const{scrollbar:s,params:a}=t,i=s.el;if(!i)return;const r=i,n=!!a.passiveListeners&&{passive:!1,capture:!1},l=!!a.passiveListeners&&{passive:!0,capture:!1};if(!r)return;const d="on"===e?"addEventListener":"removeEventListener";r[d]("pointerdown",x,n),o[d]("pointermove",S,n),o[d]("pointerup",M,l)}function P(){const{scrollbar:e,el:s}=t;t.params.scrollbar=ie(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const a=t.params.scrollbar;if(!a.el)return;let i,r;if("string"==typeof a.el&&t.isElement&&(i=t.el.querySelector(a.el)),i||"string"!=typeof a.el)i||(i=a.el);else if(i=o.querySelectorAll(a.el),!i.length)return;t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.querySelectorAll(a.el).length&&(i=s.querySelector(a.el)),i.length>0&&(i=i[0]),i.classList.add(t.isHorizontal()?a.horizontalClass:a.verticalClass),i&&(r=i.querySelector(re(t.params.scrollbar.dragClass)),r||(r=v("div",t.params.scrollbar.dragClass),i.append(r))),Object.assign(e,{el:i,dragEl:r}),a.draggable&&t.params.scrollbar.el&&t.scrollbar.el&&C("on"),i&&i.classList[t.enabled?"remove":"add"](...n(t.params.scrollbar.lockClass))}function L(){const e=t.params.scrollbar,s=t.scrollbar.el;s&&s.classList.remove(...n(t.isHorizontal()?e.horizontalClass:e.verticalClass)),t.params.scrollbar.el&&t.scrollbar.el&&C("off")}s({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null},i("changeDirection",(()=>{if(!t.scrollbar||!t.scrollbar.el)return;const e=t.params.scrollbar;let{el:s}=t.scrollbar;s=T(s),s.forEach((s=>{s.classList.remove(e.horizontalClass,e.verticalClass),s.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass)}))})),i("init",(()=>{!1===t.params.scrollbar.enabled?I():(P(),b(),g())})),i("update resize observerUpdate lock unlock changeDirection",(()=>{b()})),i("setTranslate",(()=>{g()})),i("setTransition",((e,s)=>{!function(e){t.params.scrollbar.el&&t.scrollbar.el&&(t.scrollbar.dragEl.style.transitionDuration=`${e}ms`)}(s)})),i("enable disable",(()=>{const{el:e}=t.scrollbar;e&&e.classList[t.enabled?"remove":"add"](...n(t.params.scrollbar.lockClass))})),i("destroy",(()=>{L()}));const I=()=>{t.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)),t.scrollbar.el&&t.scrollbar.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)),L()};Object.assign(t.scrollbar,{enable:()=>{t.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)),t.scrollbar.el&&t.scrollbar.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)),P(),b(),g()},disable:I,updateSize:b,setTranslate:g,init:P,destroy:L})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({parallax:{enabled:!1}});const i="[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",r=(e,s)=>{const{rtl:a}=t,i=a?-1:1,r=e.getAttribute("data-swiper-parallax")||"0";let n=e.getAttribute("data-swiper-parallax-x"),l=e.getAttribute("data-swiper-parallax-y");const o=e.getAttribute("data-swiper-parallax-scale"),d=e.getAttribute("data-swiper-parallax-opacity"),c=e.getAttribute("data-swiper-parallax-rotate");if(n||l?(n=n||"0",l=l||"0"):t.isHorizontal()?(n=r,l="0"):(l=r,n="0"),n=n.indexOf("%")>=0?parseInt(n,10)*s*i+"%":n*s*i+"px",l=l.indexOf("%")>=0?parseInt(l,10)*s+"%":l*s+"px",null!=d){const t=d-(d-1)*(1-Math.abs(s));e.style.opacity=t}let p=`translate3d(${n}, ${l}, 0px)`;if(null!=o){p+=` scale(${o-(o-1)*(1-Math.abs(s))})`}if(c&&null!=c){p+=` rotate(${c*s*-1}deg)`}e.style.transform=p},n=()=>{const{el:e,slides:s,progress:a,snapGrid:n,isElement:l}=t,o=f(e,i);t.isElement&&o.push(...f(t.hostEl,i)),o.forEach((e=>{r(e,a)})),s.forEach(((e,s)=>{let l=e.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(l+=Math.ceil(s/2)-a*(n.length-1)),l=Math.min(Math.max(l,-1),1),e.querySelectorAll(`${i}, [data-swiper-parallax-rotate]`).forEach((e=>{r(e,l)}))}))};a("beforeInit",(()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)})),a("init",(()=>{t.params.parallax.enabled&&n()})),a("setTranslate",(()=>{t.params.parallax.enabled&&n()})),a("setTransition",((e,s)=>{t.params.parallax.enabled&&function(e){void 0===e&&(e=t.params.speed);const{el:s,hostEl:a}=t,r=[...s.querySelectorAll(i)];t.isElement&&r.push(...a.querySelectorAll(i)),r.forEach((t=>{let s=parseInt(t.getAttribute("data-swiper-parallax-duration"),10)||e;0===e&&(s=0),t.style.transitionDuration=`${s}ms`}))}(s)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();s({zoom:{enabled:!1,limitToOriginalSize:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let l,o,c=1,p=!1;const u=[],m={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},h={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},g={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let v,b=1;function y(){if(u.length<2)return 1;const e=u[0].pageX,t=u[0].pageY,s=u[1].pageX,a=u[1].pageY;return Math.sqrt((s-e)**2+(a-t)**2)}function x(){const e=t.params.zoom,s=m.imageWrapEl.getAttribute("data-swiper-zoom")||e.maxRatio;if(e.limitToOriginalSize&&m.imageEl&&m.imageEl.naturalWidth){const e=m.imageEl.naturalWidth/m.imageEl.offsetWidth;return Math.min(e,s)}return s}function S(e){const s=t.isElement?"swiper-slide":`.${t.params.slideClass}`;return!!e.target.matches(s)||t.slides.filter((t=>t.contains(e.target))).length>0}function T(e){if("mouse"===e.pointerType&&u.splice(0,u.length),!S(e))return;const s=t.params.zoom;if(l=!1,o=!1,u.push(e),!(u.length<2)){if(l=!0,m.scaleStart=y(),!m.slideEl){m.slideEl=e.target.closest(`.${t.params.slideClass}, swiper-slide`),m.slideEl||(m.slideEl=t.slides[t.activeIndex]);let a=m.slideEl.querySelector(`.${s.containerClass}`);if(a&&(a=a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),m.imageEl=a,m.imageWrapEl=a?E(m.imageEl,`.${s.containerClass}`)[0]:void 0,!m.imageWrapEl)return void(m.imageEl=void 0);m.maxRatio=x()}if(m.imageEl){const[e,t]=function(){if(u.length<2)return{x:null,y:null};const e=m.imageEl.getBoundingClientRect();return[(u[0].pageX+(u[1].pageX-u[0].pageX)/2-e.x-n.scrollX)/c,(u[0].pageY+(u[1].pageY-u[0].pageY)/2-e.y-n.scrollY)/c]}();m.originX=e,m.originY=t,m.imageEl.style.transitionDuration="0ms"}p=!0}}function M(e){if(!S(e))return;const s=t.params.zoom,a=t.zoom,i=u.findIndex((t=>t.pointerId===e.pointerId));i>=0&&(u[i]=e),u.length<2||(o=!0,m.scaleMove=y(),m.imageEl&&(a.scale=m.scaleMove/m.scaleStart*c,a.scale>m.maxRatio&&(a.scale=m.maxRatio-1+(a.scale-m.maxRatio+1)**.5),a.scale<s.minRatio&&(a.scale=s.minRatio+1-(s.minRatio-a.scale+1)**.5),m.imageEl.style.transform=`translate3d(0,0,0) scale(${a.scale})`))}function C(e){if(!S(e))return;if("mouse"===e.pointerType&&"pointerout"===e.type)return;const s=t.params.zoom,a=t.zoom,i=u.findIndex((t=>t.pointerId===e.pointerId));i>=0&&u.splice(i,1),l&&o&&(l=!1,o=!1,m.imageEl&&(a.scale=Math.max(Math.min(a.scale,m.maxRatio),s.minRatio),m.imageEl.style.transitionDuration=`${t.params.speed}ms`,m.imageEl.style.transform=`translate3d(0,0,0) scale(${a.scale})`,c=a.scale,p=!1,a.scale>1&&m.slideEl?m.slideEl.classList.add(`${s.zoomedSlideClass}`):a.scale<=1&&m.slideEl&&m.slideEl.classList.remove(`${s.zoomedSlideClass}`),1===a.scale&&(m.originX=0,m.originY=0,m.slideEl=void 0)))}function P(){t.touchEventsData.preventTouchMoveFromPointerMove=!1}function L(e){if(!S(e)||!function(e){const s=`.${t.params.zoom.containerClass}`;return!!e.target.matches(s)||[...t.hostEl.querySelectorAll(s)].filter((t=>t.contains(e.target))).length>0}(e))return;const s=t.zoom;if(!m.imageEl)return;if(!h.isTouched||!m.slideEl)return;h.isMoved||(h.width=m.imageEl.offsetWidth||m.imageEl.clientWidth,h.height=m.imageEl.offsetHeight||m.imageEl.clientHeight,h.startX=d(m.imageWrapEl,"x")||0,h.startY=d(m.imageWrapEl,"y")||0,m.slideWidth=m.slideEl.offsetWidth,m.slideHeight=m.slideEl.offsetHeight,m.imageWrapEl.style.transitionDuration="0ms");const a=h.width*s.scale,i=h.height*s.scale;if(a<m.slideWidth&&i<m.slideHeight)return void P();h.minX=Math.min(m.slideWidth/2-a/2,0),h.maxX=-h.minX,h.minY=Math.min(m.slideHeight/2-i/2,0),h.maxY=-h.minY,h.touchesCurrent.x=u.length>0?u[0].pageX:e.pageX,h.touchesCurrent.y=u.length>0?u[0].pageY:e.pageY;if(Math.max(Math.abs(h.touchesCurrent.x-h.touchesStart.x),Math.abs(h.touchesCurrent.y-h.touchesStart.y))>5&&(t.allowClick=!1),!h.isMoved&&!p){if(t.isHorizontal()&&(Math.floor(h.minX)===Math.floor(h.startX)&&h.touchesCurrent.x<h.touchesStart.x||Math.floor(h.maxX)===Math.floor(h.startX)&&h.touchesCurrent.x>h.touchesStart.x))return h.isTouched=!1,void P();if(!t.isHorizontal()&&(Math.floor(h.minY)===Math.floor(h.startY)&&h.touchesCurrent.y<h.touchesStart.y||Math.floor(h.maxY)===Math.floor(h.startY)&&h.touchesCurrent.y>h.touchesStart.y))return h.isTouched=!1,void P()}e.cancelable&&e.preventDefault(),e.stopPropagation(),clearTimeout(v),t.touchEventsData.preventTouchMoveFromPointerMove=!0,v=setTimeout((()=>{P()})),h.isMoved=!0;const r=(s.scale-c)/(m.maxRatio-t.params.zoom.minRatio),{originX:n,originY:l}=m;h.currentX=h.touchesCurrent.x-h.touchesStart.x+h.startX+r*(h.width-2*n),h.currentY=h.touchesCurrent.y-h.touchesStart.y+h.startY+r*(h.height-2*l),h.currentX<h.minX&&(h.currentX=h.minX+1-(h.minX-h.currentX+1)**.8),h.currentX>h.maxX&&(h.currentX=h.maxX-1+(h.currentX-h.maxX+1)**.8),h.currentY<h.minY&&(h.currentY=h.minY+1-(h.minY-h.currentY+1)**.8),h.currentY>h.maxY&&(h.currentY=h.maxY-1+(h.currentY-h.maxY+1)**.8),g.prevPositionX||(g.prevPositionX=h.touchesCurrent.x),g.prevPositionY||(g.prevPositionY=h.touchesCurrent.y),g.prevTime||(g.prevTime=Date.now()),g.x=(h.touchesCurrent.x-g.prevPositionX)/(Date.now()-g.prevTime)/2,g.y=(h.touchesCurrent.y-g.prevPositionY)/(Date.now()-g.prevTime)/2,Math.abs(h.touchesCurrent.x-g.prevPositionX)<2&&(g.x=0),Math.abs(h.touchesCurrent.y-g.prevPositionY)<2&&(g.y=0),g.prevPositionX=h.touchesCurrent.x,g.prevPositionY=h.touchesCurrent.y,g.prevTime=Date.now(),m.imageWrapEl.style.transform=`translate3d(${h.currentX}px, ${h.currentY}px,0)`}function I(){const e=t.zoom;m.slideEl&&t.activeIndex!==t.slides.indexOf(m.slideEl)&&(m.imageEl&&(m.imageEl.style.transform="translate3d(0,0,0) scale(1)"),m.imageWrapEl&&(m.imageWrapEl.style.transform="translate3d(0,0,0)"),m.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),e.scale=1,c=1,m.slideEl=void 0,m.imageEl=void 0,m.imageWrapEl=void 0,m.originX=0,m.originY=0)}function A(e){const s=t.zoom,a=t.params.zoom;if(!m.slideEl){e&&e.target&&(m.slideEl=e.target.closest(`.${t.params.slideClass}, swiper-slide`)),m.slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.slideEl=f(t.slidesEl,`.${t.params.slideActiveClass}`)[0]:m.slideEl=t.slides[t.activeIndex]);let s=m.slideEl.querySelector(`.${a.containerClass}`);s&&(s=s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),m.imageEl=s,m.imageWrapEl=s?E(m.imageEl,`.${a.containerClass}`)[0]:void 0}if(!m.imageEl||!m.imageWrapEl)return;let i,r,l,o,d,p,u,g,v,b,y,S,T,M,C,P,L,I;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),m.slideEl.classList.add(`${a.zoomedSlideClass}`),void 0===h.touchesStart.x&&e?(i=e.pageX,r=e.pageY):(i=h.touchesStart.x,r=h.touchesStart.y);const A="number"==typeof e?e:null;1===c&&A&&(i=void 0,r=void 0);const z=x();s.scale=A||z,c=A||z,!e||1===c&&A?(u=0,g=0):(L=m.slideEl.offsetWidth,I=m.slideEl.offsetHeight,l=w(m.slideEl).left+n.scrollX,o=w(m.slideEl).top+n.scrollY,d=l+L/2-i,p=o+I/2-r,v=m.imageEl.offsetWidth||m.imageEl.clientWidth,b=m.imageEl.offsetHeight||m.imageEl.clientHeight,y=v*s.scale,S=b*s.scale,T=Math.min(L/2-y/2,0),M=Math.min(I/2-S/2,0),C=-T,P=-M,u=d*s.scale,g=p*s.scale,u<T&&(u=T),u>C&&(u=C),g<M&&(g=M),g>P&&(g=P)),A&&1===s.scale&&(m.originX=0,m.originY=0),m.imageWrapEl.style.transitionDuration="300ms",m.imageWrapEl.style.transform=`translate3d(${u}px, ${g}px,0)`,m.imageEl.style.transitionDuration="300ms",m.imageEl.style.transform=`translate3d(0,0,0) scale(${s.scale})`}function z(){const e=t.zoom,s=t.params.zoom;if(!m.slideEl){t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.slideEl=f(t.slidesEl,`.${t.params.slideActiveClass}`)[0]:m.slideEl=t.slides[t.activeIndex];let e=m.slideEl.querySelector(`.${s.containerClass}`);e&&(e=e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),m.imageEl=e,m.imageWrapEl=e?E(m.imageEl,`.${s.containerClass}`)[0]:void 0}m.imageEl&&m.imageWrapEl&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),e.scale=1,c=1,m.imageWrapEl.style.transitionDuration="300ms",m.imageWrapEl.style.transform="translate3d(0,0,0)",m.imageEl.style.transitionDuration="300ms",m.imageEl.style.transform="translate3d(0,0,0) scale(1)",m.slideEl.classList.remove(`${s.zoomedSlideClass}`),m.slideEl=void 0,m.originX=0,m.originY=0)}function $(e){const s=t.zoom;s.scale&&1!==s.scale?z():A(e)}function k(){return{passiveListener:!!t.params.passiveListeners&&{passive:!0,capture:!1},activeListenerWithCapture:!t.params.passiveListeners||{passive:!1,capture:!0}}}function O(){const e=t.zoom;if(e.enabled)return;e.enabled=!0;const{passiveListener:s,activeListenerWithCapture:a}=k();t.wrapperEl.addEventListener("pointerdown",T,s),t.wrapperEl.addEventListener("pointermove",M,a),["pointerup","pointercancel","pointerout"].forEach((e=>{t.wrapperEl.addEventListener(e,C,s)})),t.wrapperEl.addEventListener("pointermove",L,a)}function D(){const e=t.zoom;if(!e.enabled)return;e.enabled=!1;const{passiveListener:s,activeListenerWithCapture:a}=k();t.wrapperEl.removeEventListener("pointerdown",T,s),t.wrapperEl.removeEventListener("pointermove",M,a),["pointerup","pointercancel","pointerout"].forEach((e=>{t.wrapperEl.removeEventListener(e,C,s)})),t.wrapperEl.removeEventListener("pointermove",L,a)}Object.defineProperty(t.zoom,"scale",{get:()=>b,set(e){if(b!==e){const t=m.imageEl,s=m.slideEl;i("zoomChange",e,t,s)}b=e}}),a("init",(()=>{t.params.zoom.enabled&&O()})),a("destroy",(()=>{D()})),a("touchStart",((e,s)=>{t.zoom.enabled&&function(e){const s=t.device;if(!m.imageEl)return;if(h.isTouched)return;s.android&&e.cancelable&&e.preventDefault(),h.isTouched=!0;const a=u.length>0?u[0]:e;h.touchesStart.x=a.pageX,h.touchesStart.y=a.pageY}(s)})),a("touchEnd",((e,s)=>{t.zoom.enabled&&function(){const e=t.zoom;if(!m.imageEl)return;if(!h.isTouched||!h.isMoved)return h.isTouched=!1,void(h.isMoved=!1);h.isTouched=!1,h.isMoved=!1;let s=300,a=300;const i=g.x*s,r=h.currentX+i,n=g.y*a,l=h.currentY+n;0!==g.x&&(s=Math.abs((r-h.currentX)/g.x)),0!==g.y&&(a=Math.abs((l-h.currentY)/g.y));const o=Math.max(s,a);h.currentX=r,h.currentY=l;const d=h.width*e.scale,c=h.height*e.scale;h.minX=Math.min(m.slideWidth/2-d/2,0),h.maxX=-h.minX,h.minY=Math.min(m.slideHeight/2-c/2,0),h.maxY=-h.minY,h.currentX=Math.max(Math.min(h.currentX,h.maxX),h.minX),h.currentY=Math.max(Math.min(h.currentY,h.maxY),h.minY),m.imageWrapEl.style.transitionDuration=`${o}ms`,m.imageWrapEl.style.transform=`translate3d(${h.currentX}px, ${h.currentY}px,0)`}()})),a("doubleTap",((e,s)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&$(s)})),a("transitionEnd",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&I()})),a("slideChange",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&I()})),Object.assign(t.zoom,{enable:O,disable:D,in:A,out:z,toggle:$})},function(e){let{swiper:t,extendParams:s,on:a}=e;function i(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function r(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}s({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0},a("beforeInit",(()=>{if("undefined"!=typeof window&&("string"==typeof t.params.controller.control||t.params.controller.control instanceof HTMLElement)){const e=document.querySelector(t.params.controller.control);if(e&&e.swiper)t.controller.control=e.swiper;else if(e){const s=a=>{t.controller.control=a.detail[0],t.update(),e.removeEventListener("init",s)};e.addEventListener("init",s)}}else t.controller.control=t.params.controller.control})),a("update",(()=>{r()})),a("resize",(()=>{r()})),a("observerUpdate",(()=>{r()})),a("setTranslate",((e,s,a)=>{t.controller.control&&!t.controller.control.destroyed&&t.controller.setTranslate(s,a)})),a("setTransition",((e,s,a)=>{t.controller.control&&!t.controller.control.destroyed&&t.controller.setTransition(s,a)})),Object.assign(t.controller,{setTranslate:function(e,s){const a=t.controller.control;let r,n;const l=t.constructor;function o(e){if(e.destroyed)return;const s=t.rtlTranslate?-t.translate:t.translate;"slide"===t.params.controller.by&&(!function(e){t.controller.spline=t.params.loop?new i(t.slidesGrid,e.slidesGrid):new i(t.snapGrid,e.snapGrid)}(e),n=-t.controller.spline.interpolate(-s)),n&&"container"!==t.params.controller.by||(r=(e.maxTranslate()-e.minTranslate())/(t.maxTranslate()-t.minTranslate()),!Number.isNaN(r)&&Number.isFinite(r)||(r=1),n=(s-t.minTranslate())*r+e.minTranslate()),t.params.controller.inverse&&(n=e.maxTranslate()-n),e.updateProgress(n),e.setTranslate(n,t),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(a))for(let e=0;e<a.length;e+=1)a[e]!==s&&a[e]instanceof l&&o(a[e]);else a instanceof l&&s!==a&&o(a)},setTransition:function(e,s){const a=t.constructor,i=t.controller.control;let r;function n(s){s.destroyed||(s.setTransition(e,t),0!==e&&(s.transitionStart(),s.params.autoHeight&&l((()=>{s.updateAutoHeight()})),x(s.wrapperEl,(()=>{i&&s.transitionEnd()}))))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&n(i[r]);else i instanceof a&&s!==i&&n(i)}})},function(e){let{swiper:t,extendParams:s,on:i}=e;s({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),t.a11y={clicked:!1};let r,n,l=null,o=(new Date).getTime();function d(e){const t=l;0!==t.length&&(t.innerHTML="",t.innerHTML=e)}function c(e){(e=T(e)).forEach((e=>{e.setAttribute("tabIndex","0")}))}function p(e){(e=T(e)).forEach((e=>{e.setAttribute("tabIndex","-1")}))}function u(e,t){(e=T(e)).forEach((e=>{e.setAttribute("role",t)}))}function m(e,t){(e=T(e)).forEach((e=>{e.setAttribute("aria-roledescription",t)}))}function h(e,t){(e=T(e)).forEach((e=>{e.setAttribute("aria-label",t)}))}function f(e){(e=T(e)).forEach((e=>{e.setAttribute("aria-disabled",!0)}))}function g(e){(e=T(e)).forEach((e=>{e.setAttribute("aria-disabled",!1)}))}function w(e){if(13!==e.keyCode&&32!==e.keyCode)return;const s=t.params.a11y,a=e.target;if(!t.pagination||!t.pagination.el||a!==t.pagination.el&&!t.pagination.el.contains(e.target)||e.target.matches(re(t.params.pagination.bulletClass))){if(t.navigation&&t.navigation.prevEl&&t.navigation.nextEl){const e=T(t.navigation.prevEl);T(t.navigation.nextEl).includes(a)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?d(s.lastSlideMessage):d(s.nextSlideMessage)),e.includes(a)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?d(s.firstSlideMessage):d(s.prevSlideMessage))}t.pagination&&a.matches(re(t.params.pagination.bulletClass))&&a.click()}}function b(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function E(){return b()&&t.params.pagination.clickable}const x=(e,t,s)=>{c(e),"BUTTON"!==e.tagName&&(u(e,"button"),e.addEventListener("keydown",w)),h(e,s),function(e,t){(e=T(e)).forEach((e=>{e.setAttribute("aria-controls",t)}))}(e,t)},S=e=>{n&&n!==e.target&&!n.contains(e.target)&&(r=!0),t.a11y.clicked=!0},M=()=>{r=!1,requestAnimationFrame((()=>{requestAnimationFrame((()=>{t.destroyed||(t.a11y.clicked=!1)}))}))},C=e=>{o=(new Date).getTime()},P=e=>{if(t.a11y.clicked)return;if((new Date).getTime()-o<100)return;const s=e.target.closest(`.${t.params.slideClass}, swiper-slide`);if(!s||!t.slides.includes(s))return;n=s;const a=t.slides.indexOf(s)===t.activeIndex,i=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(s);a||i||e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,requestAnimationFrame((()=>{r||(t.slideTo(t.slides.indexOf(s),0),r=!1)})))},L=()=>{const e=t.params.a11y;e.itemRoleDescriptionMessage&&m(t.slides,e.itemRoleDescriptionMessage),e.slideRole&&u(t.slides,e.slideRole);const s=t.slides.length;e.slideLabelMessage&&t.slides.forEach(((a,i)=>{const r=t.params.loop?parseInt(a.getAttribute("data-swiper-slide-index"),10):i;h(a,e.slideLabelMessage.replace(/\{\{index\}\}/,r+1).replace(/\{\{slidesLength\}\}/,s))}))},I=()=>{const e=t.params.a11y;t.el.append(l);const s=t.el;e.containerRoleDescriptionMessage&&m(s,e.containerRoleDescriptionMessage),e.containerMessage&&h(s,e.containerMessage);const i=t.wrapperEl,r=e.id||i.getAttribute("id")||`swiper-wrapper-${n=16,void 0===n&&(n=16),"x".repeat(n).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;var n;const o=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";var d;d=r,T(i).forEach((e=>{e.setAttribute("id",d)})),function(e,t){(e=T(e)).forEach((e=>{e.setAttribute("aria-live",t)}))}(i,o),L();let{nextEl:c,prevEl:p}=t.navigation?t.navigation:{};if(c=T(c),p=T(p),c&&c.forEach((t=>x(t,r,e.nextSlideMessage))),p&&p.forEach((t=>x(t,r,e.prevSlideMessage))),E()){T(t.pagination.el).forEach((e=>{e.addEventListener("keydown",w)}))}a().addEventListener("visibilitychange",C),t.el.addEventListener("focus",P,!0),t.el.addEventListener("focus",P,!0),t.el.addEventListener("pointerdown",S,!0),t.el.addEventListener("pointerup",M,!0)};i("beforeInit",(()=>{l=v("span",t.params.a11y.notificationClass),l.setAttribute("aria-live","assertive"),l.setAttribute("aria-atomic","true")})),i("afterInit",(()=>{t.params.a11y.enabled&&I()})),i("slidesLengthChange snapGridLengthChange slidesGridLengthChange",(()=>{t.params.a11y.enabled&&L()})),i("fromEdge toEdge afterInit lock unlock",(()=>{t.params.a11y.enabled&&function(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{nextEl:e,prevEl:s}=t.navigation;s&&(t.isBeginning?(f(s),p(s)):(g(s),c(s))),e&&(t.isEnd?(f(e),p(e)):(g(e),c(e)))}()})),i("paginationUpdate",(()=>{t.params.a11y.enabled&&function(){const e=t.params.a11y;b()&&t.pagination.bullets.forEach((s=>{t.params.pagination.clickable&&(c(s),t.params.pagination.renderBullet||(u(s,"button"),h(s,e.paginationBulletMessage.replace(/\{\{index\}\}/,y(s)+1)))),s.matches(re(t.params.pagination.bulletActiveClass))?s.setAttribute("aria-current","true"):s.removeAttribute("aria-current")}))}()})),i("destroy",(()=>{t.params.a11y.enabled&&function(){l&&l.remove();let{nextEl:e,prevEl:s}=t.navigation?t.navigation:{};e=T(e),s=T(s),e&&e.forEach((e=>e.removeEventListener("keydown",w))),s&&s.forEach((e=>e.removeEventListener("keydown",w))),E()&&T(t.pagination.el).forEach((e=>{e.removeEventListener("keydown",w)}));a().removeEventListener("visibilitychange",C),t.el.removeEventListener("focus",P,!0),t.el.removeEventListener("pointerdown",S,!0),t.el.removeEventListener("pointerup",M,!0)}()}))},function(e){let{swiper:t,extendParams:s,on:a}=e;s({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let i=!1,n={};const l=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),o=e=>{const t=r();let s;s=e?new URL(e):t.location;const a=s.pathname.slice(1).split("/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},d=(e,s)=>{const a=r();if(!i||!t.params.history.enabled)return;let n;n=t.params.url?new URL(t.params.url):a.location;const o=t.virtual&&t.params.virtual.enabled?t.slidesEl.querySelector(`[data-swiper-slide-index="${s}"]`):t.slides[s];let d=l(o.getAttribute("data-history"));if(t.params.history.root.length>0){let s=t.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),d=`${s}/${e?`${e}/`:""}${d}`}else n.pathname.includes(e)||(d=`${e?`${e}/`:""}${d}`);t.params.history.keepQuery&&(d+=n.search);const c=a.history.state;c&&c.value===d||(t.params.history.replaceState?a.history.replaceState({value:d},null,d):a.history.pushState({value:d},null,d))},c=(e,s,a)=>{if(s)for(let i=0,r=t.slides.length;i<r;i+=1){const r=t.slides[i];if(l(r.getAttribute("data-history"))===s){const s=t.getSlideIndex(r);t.slideTo(s,e,a)}}else t.slideTo(0,e,a)},p=()=>{n=o(t.params.url),c(t.params.speed,n.value,!1)};a("init",(()=>{t.params.history.enabled&&(()=>{const e=r();if(t.params.history){if(!e.history||!e.history.pushState)return t.params.history.enabled=!1,void(t.params.hashNavigation.enabled=!0);i=!0,n=o(t.params.url),n.key||n.value?(c(0,n.value,t.params.runCallbacksOnInit),t.params.history.replaceState||e.addEventListener("popstate",p)):t.params.history.replaceState||e.addEventListener("popstate",p)}})()})),a("destroy",(()=>{t.params.history.enabled&&(()=>{const e=r();t.params.history.replaceState||e.removeEventListener("popstate",p)})()})),a("transitionEnd _freeModeNoMomentumRelease",(()=>{i&&d(t.params.history.key,t.activeIndex)})),a("slideChange",(()=>{i&&t.params.cssMode&&d(t.params.history.key,t.activeIndex)}))},function(e){let{swiper:t,extendParams:s,emit:i,on:n}=e,l=!1;const o=a(),d=r();s({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(e,s){if(t.virtual&&t.params.virtual.enabled){const e=t.slides.filter((e=>e.getAttribute("data-hash")===s))[0];if(!e)return 0;return parseInt(e.getAttribute("data-swiper-slide-index"),10)}return t.getSlideIndex(f(t.slidesEl,`.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`)[0])}}});const c=()=>{i("hashChange");const e=o.location.hash.replace("#",""),s=t.virtual&&t.params.virtual.enabled?t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`):t.slides[t.activeIndex];if(e!==(s?s.getAttribute("data-hash"):"")){const s=t.params.hashNavigation.getSlideIndex(t,e);if(void 0===s||Number.isNaN(s))return;t.slideTo(s)}},p=()=>{if(!l||!t.params.hashNavigation.enabled)return;const e=t.virtual&&t.params.virtual.enabled?t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`):t.slides[t.activeIndex],s=e?e.getAttribute("data-hash")||e.getAttribute("data-history"):"";t.params.hashNavigation.replaceState&&d.history&&d.history.replaceState?(d.history.replaceState(null,null,`#${s}`||""),i("hashSet")):(o.location.hash=s||"",i("hashSet"))};n("init",(()=>{t.params.hashNavigation.enabled&&(()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;l=!0;const e=o.location.hash.replace("#","");if(e){const s=0,a=t.params.hashNavigation.getSlideIndex(t,e);t.slideTo(a||0,s,t.params.runCallbacksOnInit,!0)}t.params.hashNavigation.watchState&&d.addEventListener("hashchange",c)})()})),n("destroy",(()=>{t.params.hashNavigation.enabled&&t.params.hashNavigation.watchState&&d.removeEventListener("hashchange",c)})),n("transitionEnd _freeModeNoMomentumRelease",(()=>{l&&p()})),n("slideChange",(()=>{l&&t.params.cssMode&&p()}))},function(e){let t,s,{swiper:i,extendParams:r,on:n,emit:l,params:o}=e;i.autoplay={running:!1,paused:!1,timeLeft:0},r({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let d,c,p,u,m,h,f,g,v=o&&o.autoplay?o.autoplay.delay:3e3,w=o&&o.autoplay?o.autoplay.delay:3e3,b=(new Date).getTime();function y(e){i&&!i.destroyed&&i.wrapperEl&&e.target===i.wrapperEl&&(i.wrapperEl.removeEventListener("transitionend",y),g||e.detail&&e.detail.bySwiperTouchMove||C())}const E=()=>{if(i.destroyed||!i.autoplay.running)return;i.autoplay.paused?c=!0:c&&(w=d,c=!1);const e=i.autoplay.paused?d:b+w-(new Date).getTime();i.autoplay.timeLeft=e,l("autoplayTimeLeft",e,e/v),s=requestAnimationFrame((()=>{E()}))},x=e=>{if(i.destroyed||!i.autoplay.running)return;cancelAnimationFrame(s),E();let a=void 0===e?i.params.autoplay.delay:e;v=i.params.autoplay.delay,w=i.params.autoplay.delay;const r=(()=>{let e;if(e=i.virtual&&i.params.virtual.enabled?i.slides.filter((e=>e.classList.contains("swiper-slide-active")))[0]:i.slides[i.activeIndex],!e)return;return parseInt(e.getAttribute("data-swiper-autoplay"),10)})();!Number.isNaN(r)&&r>0&&void 0===e&&(a=r,v=r,w=r),d=a;const n=i.params.speed,o=()=>{i&&!i.destroyed&&(i.params.autoplay.reverseDirection?!i.isBeginning||i.params.loop||i.params.rewind?(i.slidePrev(n,!0,!0),l("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(i.slides.length-1,n,!0,!0),l("autoplay")):!i.isEnd||i.params.loop||i.params.rewind?(i.slideNext(n,!0,!0),l("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(0,n,!0,!0),l("autoplay")),i.params.cssMode&&(b=(new Date).getTime(),requestAnimationFrame((()=>{x()}))))};return a>0?(clearTimeout(t),t=setTimeout((()=>{o()}),a)):requestAnimationFrame((()=>{o()})),a},S=()=>{b=(new Date).getTime(),i.autoplay.running=!0,x(),l("autoplayStart")},T=()=>{i.autoplay.running=!1,clearTimeout(t),cancelAnimationFrame(s),l("autoplayStop")},M=(e,s)=>{if(i.destroyed||!i.autoplay.running)return;clearTimeout(t),e||(f=!0);const a=()=>{l("autoplayPause"),i.params.autoplay.waitForTransition?i.wrapperEl.addEventListener("transitionend",y):C()};if(i.autoplay.paused=!0,s)return h&&(d=i.params.autoplay.delay),h=!1,void a();const r=d||i.params.autoplay.delay;d=r-((new Date).getTime()-b),i.isEnd&&d<0&&!i.params.loop||(d<0&&(d=0),a())},C=()=>{i.isEnd&&d<0&&!i.params.loop||i.destroyed||!i.autoplay.running||(b=(new Date).getTime(),f?(f=!1,x(d)):x(),i.autoplay.paused=!1,l("autoplayResume"))},P=()=>{if(i.destroyed||!i.autoplay.running)return;const e=a();"hidden"===e.visibilityState&&(f=!0,M(!0)),"visible"===e.visibilityState&&C()},L=e=>{"mouse"===e.pointerType&&(f=!0,g=!0,i.animating||i.autoplay.paused||M(!0))},I=e=>{"mouse"===e.pointerType&&(g=!1,i.autoplay.paused&&C())};n("init",(()=>{i.params.autoplay.enabled&&(i.params.autoplay.pauseOnMouseEnter&&(i.el.addEventListener("pointerenter",L),i.el.addEventListener("pointerleave",I)),a().addEventListener("visibilitychange",P),S())})),n("destroy",(()=>{i.el.removeEventListener("pointerenter",L),i.el.removeEventListener("pointerleave",I),a().removeEventListener("visibilitychange",P),i.autoplay.running&&T()})),n("_freeModeStaticRelease",(()=>{(u||f)&&C()})),n("_freeModeNoMomentumRelease",(()=>{i.params.autoplay.disableOnInteraction?T():M(!0,!0)})),n("beforeTransitionStart",((e,t,s)=>{!i.destroyed&&i.autoplay.running&&(s||!i.params.autoplay.disableOnInteraction?M(!0,!0):T())})),n("sliderFirstMove",(()=>{!i.destroyed&&i.autoplay.running&&(i.params.autoplay.disableOnInteraction?T():(p=!0,u=!1,f=!1,m=setTimeout((()=>{f=!0,u=!0,M(!0)}),200)))})),n("touchEnd",(()=>{if(!i.destroyed&&i.autoplay.running&&p){if(clearTimeout(m),clearTimeout(t),i.params.autoplay.disableOnInteraction)return u=!1,void(p=!1);u&&i.params.cssMode&&C(),u=!1,p=!1}})),n("slideChange",(()=>{!i.destroyed&&i.autoplay.running&&(h=!0)})),Object.assign(i.autoplay,{start:S,stop:T,pause:M,resume:C})},function(e){let{swiper:t,extendParams:s,on:i}=e;s({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let r=!1,n=!1;function l(){const e=t.thumbs.swiper;if(!e||e.destroyed)return;const s=e.clickedIndex,a=e.clickedSlide;if(a&&a.classList.contains(t.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;i=e.params.loop?parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10):s,t.params.loop?t.slideToLoop(i):t.slideTo(i)}function o(){const{thumbs:e}=t.params;if(r)return!1;r=!0;const s=t.constructor;if(e.swiper instanceof s)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper.update();else if(c(e.swiper)){const a=Object.assign({},e.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new s(a),n=!0}return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",l),!0}function d(e){const s=t.thumbs.swiper;if(!s||s.destroyed)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView;let i=1;const r=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(i=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(i=1),i=Math.floor(i),s.slides.forEach((e=>e.classList.remove(r))),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let e=0;e<i;e+=1)f(s.slidesEl,`[data-swiper-slide-index="${t.realIndex+e}"]`).forEach((e=>{e.classList.add(r)}));else for(let e=0;e<i;e+=1)s.slides[t.realIndex+e]&&s.slides[t.realIndex+e].classList.add(r);const n=t.params.thumbs.autoScrollOffset,l=n&&!s.params.loop;if(t.realIndex!==s.realIndex||l){const i=s.activeIndex;let r,o;if(s.params.loop){const e=s.slides.filter((e=>e.getAttribute("data-swiper-slide-index")===`${t.realIndex}`))[0];r=s.slides.indexOf(e),o=t.activeIndex>t.previousIndex?"next":"prev"}else r=t.realIndex,o=r>t.previousIndex?"next":"prev";l&&(r+="next"===o?n:-1*n),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(r)<0&&(s.params.centeredSlides?r=r>i?r-Math.floor(a/2)+1:r+Math.floor(a/2)-1:r>i&&s.params.slidesPerGroup,s.slideTo(r,e?0:void 0))}}t.thumbs={swiper:null},i("beforeInit",(()=>{const{thumbs:e}=t.params;if(e&&e.swiper)if("string"==typeof e.swiper||e.swiper instanceof HTMLElement){const s=a(),i=()=>{const a="string"==typeof e.swiper?s.querySelector(e.swiper):e.swiper;if(a&&a.swiper)e.swiper=a.swiper,o(),d(!0);else if(a){const s=i=>{e.swiper=i.detail[0],a.removeEventListener("init",s),o(),d(!0),e.swiper.update(),t.update()};a.addEventListener("init",s)}return a},r=()=>{if(t.destroyed)return;i()||requestAnimationFrame(r)};requestAnimationFrame(r)}else o(),d(!0)})),i("slideChange update resize observerUpdate",(()=>{d()})),i("setTransition",((e,s)=>{const a=t.thumbs.swiper;a&&!a.destroyed&&a.setTransition(s)})),i("beforeDestroy",(()=>{const e=t.thumbs.swiper;e&&!e.destroyed&&n&&e.destroy()})),Object.assign(t.thumbs,{init:o,update:d})},function(e){let{swiper:t,extendParams:s,emit:a,once:i}=e;s({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:function(){if(t.params.cssMode)return;const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})},onTouchMove:function(){if(t.params.cssMode)return;const{touchEventsData:e,touches:s}=t;0===e.velocities.length&&e.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:o()})},onTouchEnd:function(e){let{currentPos:s}=e;if(t.params.cssMode)return;const{params:r,wrapperEl:n,rtlTranslate:l,snapGrid:d,touchEventsData:c}=t,p=o()-c.touchStartTime;if(s<-t.minTranslate())t.slideTo(t.activeIndex);else if(s>-t.maxTranslate())t.slides.length<d.length?t.slideTo(d.length-1):t.slideTo(t.slides.length-1);else{if(r.freeMode.momentum){if(c.velocities.length>1){const e=c.velocities.pop(),s=c.velocities.pop(),a=e.position-s.position,i=e.time-s.time;t.velocity=a/i,t.velocity/=2,Math.abs(t.velocity)<r.freeMode.minimumVelocity&&(t.velocity=0),(i>150||o()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeMode.momentumVelocityRatio,c.velocities.length=0;let e=1e3*r.freeMode.momentumRatio;const s=t.velocity*e;let p=t.translate+s;l&&(p=-p);let u,m=!1;const h=20*Math.abs(t.velocity)*r.freeMode.momentumBounceRatio;let f;if(p<t.maxTranslate())r.freeMode.momentumBounce?(p+t.maxTranslate()<-h&&(p=t.maxTranslate()-h),u=t.maxTranslate(),m=!0,c.allowMomentumBounce=!0):p=t.maxTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(p>t.minTranslate())r.freeMode.momentumBounce?(p-t.minTranslate()>h&&(p=t.minTranslate()+h),u=t.minTranslate(),m=!0,c.allowMomentumBounce=!0):p=t.minTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(r.freeMode.sticky){let e;for(let t=0;t<d.length;t+=1)if(d[t]>-p){e=t;break}p=Math.abs(d[e]-p)<Math.abs(d[e-1]-p)||"next"===t.swipeDirection?d[e]:d[e-1],p=-p}if(f&&i("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=l?Math.abs((-p-t.translate)/t.velocity):Math.abs((p-t.translate)/t.velocity),r.freeMode.sticky){const s=Math.abs((l?-p:p)-t.translate),a=t.slidesSizesGrid[t.activeIndex];e=s<a?r.speed:s<2*a?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode.momentumBounce&&m?(t.updateProgress(u),t.setTransition(e),t.setTranslate(p),t.transitionStart(!0,t.swipeDirection),t.animating=!0,x(n,(()=>{t&&!t.destroyed&&c.allowMomentumBounce&&(a("momentumBounce"),t.setTransition(r.speed),setTimeout((()=>{t.setTranslate(u),x(n,(()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(a("_freeModeNoMomentumRelease"),t.updateProgress(p),t.setTransition(e),t.setTranslate(p),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,x(n,(()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(p),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode&&a("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||p>=r.longSwipesMs)&&(a("_freeModeStaticRelease"),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}}})},function(e){let t,s,a,i,{swiper:r,extendParams:n,on:l}=e;n({grid:{rows:1,fill:"column"}});const o=()=>{let e=r.params.spaceBetween;return"string"==typeof e&&e.indexOf("%")>=0?e=parseFloat(e.replace("%",""))/100*r.size:"string"==typeof e&&(e=parseFloat(e)),e};l("init",(()=>{i=r.params.grid&&r.params.grid.rows>1})),l("update",(()=>{const{params:e,el:t}=r,s=e.grid&&e.grid.rows>1;i&&!s?(t.classList.remove(`${e.containerModifierClass}grid`,`${e.containerModifierClass}grid-column`),a=1,r.emitContainerClasses()):!i&&s&&(t.classList.add(`${e.containerModifierClass}grid`),"column"===e.grid.fill&&t.classList.add(`${e.containerModifierClass}grid-column`),r.emitContainerClasses()),i=s})),r.grid={initSlides:e=>{const{slidesPerView:i}=r.params,{rows:n,fill:l}=r.params.grid,o=r.virtual&&r.params.virtual.enabled?r.virtual.slides.length:e.length;a=Math.floor(o/n),t=Math.floor(o/n)===o/n?o:Math.ceil(o/n)*n,"auto"!==i&&"row"===l&&(t=Math.max(t,i*n)),s=t/n},unsetSlides:()=>{r.slides&&r.slides.forEach((e=>{e.swiperSlideGridSet&&(e.style.height="",e.style[r.getDirectionLabel("margin-top")]="")}))},updateSlide:(e,i,n)=>{const{slidesPerGroup:l}=r.params,d=o(),{rows:c,fill:p}=r.params.grid,u=r.virtual&&r.params.virtual.enabled?r.virtual.slides.length:n.length;let m,h,f;if("row"===p&&l>1){const s=Math.floor(e/(l*c)),a=e-c*l*s,r=0===s?l:Math.min(Math.ceil((u-s*c*l)/c),l);f=Math.floor(a/r),h=a-f*r+s*l,m=h+f*t/c,i.style.order=m}else"column"===p?(h=Math.floor(e/c),f=e-h*c,(h>a||h===a&&f===c-1)&&(f+=1,f>=c&&(f=0,h+=1))):(f=Math.floor(e/s),h=e-f*s);i.row=f,i.column=h,i.style.height=`calc((100% - ${(c-1)*d}px) / ${c})`,i.style[r.getDirectionLabel("margin-top")]=0!==f?d&&`${d}px`:"",i.swiperSlideGridSet=!0},updateWrapperSize:(e,s)=>{const{centeredSlides:a,roundLengths:i}=r.params,n=o(),{rows:l}=r.params.grid;if(r.virtualSize=(e+n)*t,r.virtualSize=Math.ceil(r.virtualSize/l)-n,r.params.cssMode||(r.wrapperEl.style[r.getDirectionLabel("width")]=`${r.virtualSize+n}px`),a){const e=[];for(let t=0;t<s.length;t+=1){let a=s[t];i&&(a=Math.floor(a)),s[t]<r.virtualSize+s[0]&&e.push(a)}s.splice(0,s.length),s.push(...e)}}}},function(e){let{swiper:t}=e;Object.assign(t,{appendSlide:ne.bind(t),prependSlide:le.bind(t),addSlide:oe.bind(t),removeSlide:de.bind(t),removeAllSlides:ce.bind(t)})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({fadeEffect:{crossFade:!1}}),pe({effect:"fade",swiper:t,on:a,setTranslate:()=>{const{slides:e}=t;t.params.fadeEffect;for(let s=0;s<e.length;s+=1){const e=t.slides[s];let a=-e.swiperSlideOffset;t.params.virtualTranslate||(a-=t.translate);let i=0;t.isHorizontal()||(i=a,a=0);const r=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e.progress),0):1+Math.min(Math.max(e.progress,-1),0),n=ue(0,e);n.style.opacity=r,n.style.transform=`translate3d(${a}px, ${i}px, 0px)`}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`})),me({swiper:t,duration:e,transformElements:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const i=(e,t,s)=>{let a=s?e.querySelector(".swiper-slide-shadow-left"):e.querySelector(".swiper-slide-shadow-top"),i=s?e.querySelector(".swiper-slide-shadow-right"):e.querySelector(".swiper-slide-shadow-bottom");a||(a=v("div",("swiper-slide-shadow-cube swiper-slide-shadow-"+(s?"left":"top")).split(" ")),e.append(a)),i||(i=v("div",("swiper-slide-shadow-cube swiper-slide-shadow-"+(s?"right":"bottom")).split(" ")),e.append(i)),a&&(a.style.opacity=Math.max(-t,0)),i&&(i.style.opacity=Math.max(t,0))};pe({effect:"cube",swiper:t,on:a,setTranslate:()=>{const{el:e,wrapperEl:s,slides:a,width:r,height:n,rtlTranslate:l,size:o,browser:d}=t,c=t.params.cubeEffect,p=t.isHorizontal(),u=t.virtual&&t.params.virtual.enabled;let m,h=0;c.shadow&&(p?(m=t.wrapperEl.querySelector(".swiper-cube-shadow"),m||(m=v("div","swiper-cube-shadow"),t.wrapperEl.append(m)),m.style.height=`${r}px`):(m=e.querySelector(".swiper-cube-shadow"),m||(m=v("div","swiper-cube-shadow"),e.append(m))));for(let e=0;e<a.length;e+=1){const s=a[e];let r=e;u&&(r=parseInt(s.getAttribute("data-swiper-slide-index"),10));let n=90*r,d=Math.floor(n/360);l&&(n=-n,d=Math.floor(-n/360));const m=Math.max(Math.min(s.progress,1),-1);let f=0,g=0,v=0;r%4==0?(f=4*-d*o,v=0):(r-1)%4==0?(f=0,v=4*-d*o):(r-2)%4==0?(f=o+4*d*o,v=o):(r-3)%4==0&&(f=-o,v=3*o+4*o*d),l&&(f=-f),p||(g=f,f=0);const w=`rotateX(${p?0:-n}deg) rotateY(${p?n:0}deg) translate3d(${f}px, ${g}px, ${v}px)`;m<=1&&m>-1&&(h=90*r+90*m,l&&(h=90*-r-90*m),t.browser&&t.browser.need3dFix&&Math.abs(h)/90%2==1&&(h+=.001)),s.style.transform=w,c.slideShadows&&i(s,m,p)}if(s.style.transformOrigin=`50% 50% -${o/2}px`,s.style["-webkit-transform-origin"]=`50% 50% -${o/2}px`,c.shadow)if(p)m.style.transform=`translate3d(0px, ${r/2+c.shadowOffset}px, ${-r/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${c.shadowScale})`;else{const e=Math.abs(h)-90*Math.floor(Math.abs(h)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=c.shadowScale,a=c.shadowScale/t,i=c.shadowOffset;m.style.transform=`scale3d(${s}, 1, ${a}) translate3d(0px, ${n/2+i}px, ${-n/2/a}px) rotateX(-89.99deg)`}const f=(d.isSafari||d.isWebView)&&d.needPerspectiveFix?-o/2:0;s.style.transform=`translate3d(0px,0,${f}px) rotateX(${t.isHorizontal()?0:h}deg) rotateY(${t.isHorizontal()?-h:0}deg)`,s.style.setProperty("--swiper-cube-translate-z",`${f}px`)},setTransition:e=>{const{el:s,slides:a}=t;if(a.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),t.params.cubeEffect.shadow&&!t.isHorizontal()){const t=s.querySelector(".swiper-cube-shadow");t&&(t.style.transitionDuration=`${e}ms`)}},recreateShadows:()=>{const e=t.isHorizontal();t.slides.forEach((t=>{const s=Math.max(Math.min(t.progress,1),-1);i(t,s,e)}))},getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({flipEffect:{slideShadows:!0,limitRotation:!0}});const i=(e,s)=>{let a=t.isHorizontal()?e.querySelector(".swiper-slide-shadow-left"):e.querySelector(".swiper-slide-shadow-top"),i=t.isHorizontal()?e.querySelector(".swiper-slide-shadow-right"):e.querySelector(".swiper-slide-shadow-bottom");a||(a=he("flip",e,t.isHorizontal()?"left":"top")),i||(i=he("flip",e,t.isHorizontal()?"right":"bottom")),a&&(a.style.opacity=Math.max(-s,0)),i&&(i.style.opacity=Math.max(s,0))};pe({effect:"flip",swiper:t,on:a,setTranslate:()=>{const{slides:e,rtlTranslate:s}=t,a=t.params.flipEffect;for(let r=0;r<e.length;r+=1){const n=e[r];let l=n.progress;t.params.flipEffect.limitRotation&&(l=Math.max(Math.min(n.progress,1),-1));const o=n.swiperSlideOffset;let d=-180*l,c=0,p=t.params.cssMode?-o-t.translate:-o,u=0;t.isHorizontal()?s&&(d=-d):(u=p,p=0,c=-d,d=0),t.browser&&t.browser.need3dFix&&(Math.abs(d)/90%2==1&&(d+=.001),Math.abs(c)/90%2==1&&(c+=.001)),n.style.zIndex=-Math.abs(Math.round(l))+e.length,a.slideShadows&&i(n,l);const m=`translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;ue(0,n).style.transform=m}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),me({swiper:t,duration:e,transformElements:s})},recreateShadows:()=>{t.params.flipEffect,t.slides.forEach((e=>{let s=e.progress;t.params.flipEffect.limitRotation&&(s=Math.max(Math.min(e.progress,1),-1)),i(e,s)}))},getEffectParams:()=>t.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),pe({effect:"coverflow",swiper:t,on:a,setTranslate:()=>{const{width:e,height:s,slides:a,slidesSizesGrid:i}=t,r=t.params.coverflowEffect,n=t.isHorizontal(),l=t.translate,o=n?e/2-l:s/2-l,d=n?r.rotate:-r.rotate,c=r.depth;for(let e=0,s=a.length;e<s;e+=1){const s=a[e],l=i[e],p=(o-s.swiperSlideOffset-l/2)/l,u="function"==typeof r.modifier?r.modifier(p):p*r.modifier;let m=n?d*u:0,h=n?0:d*u,f=-c*Math.abs(u),g=r.stretch;"string"==typeof g&&-1!==g.indexOf("%")&&(g=parseFloat(r.stretch)/100*l);let v=n?0:g*u,w=n?g*u:0,b=1-(1-r.scale)*Math.abs(u);Math.abs(w)<.001&&(w=0),Math.abs(v)<.001&&(v=0),Math.abs(f)<.001&&(f=0),Math.abs(m)<.001&&(m=0),Math.abs(h)<.001&&(h=0),Math.abs(b)<.001&&(b=0),t.browser&&t.browser.need3dFix&&(Math.abs(m)/90%2==1&&(m+=.001),Math.abs(h)/90%2==1&&(h+=.001));const y=`translate3d(${w}px,${v}px,${f}px)  rotateX(${h}deg) rotateY(${m}deg) scale(${b})`;if(ue(0,s).style.transform=y,s.style.zIndex=1-Math.abs(Math.round(u)),r.slideShadows){let e=n?s.querySelector(".swiper-slide-shadow-left"):s.querySelector(".swiper-slide-shadow-top"),t=n?s.querySelector(".swiper-slide-shadow-right"):s.querySelector(".swiper-slide-shadow-bottom");e||(e=he("coverflow",s,n?"left":"top")),t||(t=he("coverflow",s,n?"right":"bottom")),e&&(e.style.opacity=u>0?u:0),t&&(t.style.opacity=-u>0?-u:0)}}},setTransition:e=>{t.slides.map((e=>h(e))).forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))}))},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=e=>"string"==typeof e?e:`${e}px`;pe({effect:"creative",swiper:t,on:a,setTranslate:()=>{const{slides:e,wrapperEl:s,slidesSizesGrid:a}=t,r=t.params.creativeEffect,{progressMultiplier:n}=r,l=t.params.centeredSlides;if(l){const e=a[0]/2-t.params.slidesOffsetBefore||0;s.style.transform=`translateX(calc(50% - ${e}px))`}for(let s=0;s<e.length;s+=1){const a=e[s],o=a.progress,d=Math.min(Math.max(a.progress,-r.limitProgress),r.limitProgress);let c=d;l||(c=Math.min(Math.max(a.originalProgress,-r.limitProgress),r.limitProgress));const p=a.swiperSlideOffset,u=[t.params.cssMode?-p-t.translate:-p,0,0],m=[0,0,0];let h=!1;t.isHorizontal()||(u[1]=u[0],u[0]=0);let f={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};d<0?(f=r.next,h=!0):d>0&&(f=r.prev,h=!0),u.forEach(((e,t)=>{u[t]=`calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`})),m.forEach(((e,s)=>{let a=f.rotate[s]*Math.abs(d*n);t.browser&&t.browser.need3dFix&&Math.abs(a)/90%2==1&&(a+=.001),m[s]=a})),a.style.zIndex=-Math.abs(Math.round(o))+e.length;const g=u.join(", "),v=`rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,w=c<0?`scale(${1+(1-f.scale)*c*n})`:`scale(${1-(1-f.scale)*c*n})`,b=c<0?1+(1-f.opacity)*c*n:1-(1-f.opacity)*c*n,y=`translate3d(${g}) ${v} ${w}`;if(h&&f.shadow||!h){let e=a.querySelector(".swiper-slide-shadow");if(!e&&f.shadow&&(e=he("creative",a)),e){const t=r.shadowPerProgress?d*(1/r.limitProgress):d;e.style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const E=ue(0,a);E.style.transform=y,E.style.opacity=b,f.origin&&(E.style.transformOrigin=f.origin)}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),me({swiper:t,duration:e,transformElements:s,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),pe({effect:"cards",swiper:t,on:a,setTranslate:()=>{const{slides:e,activeIndex:s,rtlTranslate:a}=t,i=t.params.cardsEffect,{startTranslate:r,isTouched:n}=t.touchEventsData,l=a?-t.translate:t.translate;for(let o=0;o<e.length;o+=1){const d=e[o],c=d.progress,p=Math.min(Math.max(c,-4),4);let u=d.swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&(t.wrapperEl.style.transform=`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(u-=e[0].swiperSlideOffset);let m=t.params.cssMode?-u-t.translate:-u,h=0;const f=-100*Math.abs(p);let g=1,v=-i.perSlideRotate*p,w=i.perSlideOffset-.75*Math.abs(p);const b=t.virtual&&t.params.virtual.enabled?t.virtual.from+o:o,y=(b===s||b===s-1)&&p>0&&p<1&&(n||t.params.cssMode)&&l<r,E=(b===s||b===s+1)&&p<0&&p>-1&&(n||t.params.cssMode)&&l>r;if(y||E){const e=(1-Math.abs((Math.abs(p)-.5)/.5))**.5;v+=-28*p*e,g+=-.5*e,w+=96*e,h=-25*e*Math.abs(p)+"%"}if(m=p<0?`calc(${m}px ${a?"-":"+"} (${w*Math.abs(p)}%))`:p>0?`calc(${m}px ${a?"-":"+"} (-${w*Math.abs(p)}%))`:`${m}px`,!t.isHorizontal()){const e=h;h=m,m=e}const x=p<0?""+(1+(1-g)*p):""+(1-(1-g)*p),S=`\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${i.rotate?a?-v:v:0}deg)\n        scale(${x})\n      `;if(i.slideShadows){let e=d.querySelector(".swiper-slide-shadow");e||(e=he("cards",d)),e&&(e.style.opacity=Math.min(Math.max((Math.abs(p)-.5)/.5,0),1))}d.style.zIndex=-Math.abs(Math.round(c))+e.length;ue(0,d).style.transform=S}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),me({swiper:t,duration:e,transformElements:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}];return ae.use(fe),ae}();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:61:"/local/templates/kalmatron/js/libs/vlitejs.js?173314503028489";s:6:"source";s:45:"/local/templates/kalmatron/js/libs/vlitejs.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/vlitejs@5.0.2/dist/vlite.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*!
 * @license MIT
 * @name vlitejs
 * @version 5.0.2
 * @copyright 2023 Joris DANIEL
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Vlitejs=t():e.Vlitejs=t()}(globalThis,(()=>(()=>{var e={782:function(e,t,s){var i,n,r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};i=[s,t,s(566),s(296)],n=function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s=r(s),t.default=function(){return`<button class="v-bigPlay">${s.default}</button>`}}.apply(t,i),void 0===n||(e.exports=n)},794:function(e,t,s){var i,n,r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};i=[s,t,s(158),s(341),s(159),s(244)],n=function(e,t,s,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i=r(i),n=r(n);t.default=class{constructor({player:e,type:t}){this.player=e,this.type=t,this.touchEvents=["touchstart","touchmove","touchend"],this.onInputProgressBar=this.onInputProgressBar.bind(this),this.onTouchEventProgressBar=this.onTouchEventProgressBar.bind(this),this.onClickOnControlBar=this.onClickOnControlBar.bind(this),this.togglePlayPause=this.togglePlayPause.bind(this),this.toggleVolume=this.toggleVolume.bind(this),this.toggleFullscreen=this.toggleFullscreen.bind(this)}init(){this.render(),this.cacheElements(),this.addEvents()}cacheElements(){const e=this.player.elements.container.querySelector(".v-controlBar");this.player.elements.controlBar=e,this.player.elements.controlBar&&(this.player.elements.playPause=e.querySelector(".v-playPauseButton"),this.player.elements.progressBar=e.querySelector(".v-progressBar"),this.player.elements.currentTime=e.querySelector(".v-currentTime"),this.player.elements.duration=e.querySelector(".v-duration"),this.player.elements.volume=e.querySelector(".v-volumeButton"),this.player.elements.fullscreen=e.querySelector(".v-fullscreenButton"),this.player.elements.volume&&this.player.elements.volume.setAttribute("aria-label",this.player.isMuted?"Unmute":"Mute"))}render(){this.player.elements.container.insertAdjacentHTML("beforeend",this.getTemplate())}onReady(){this.player.getDuration().then((e=>{this.player.elements.progressBar&&this.player.elements.progressBar.setAttribute("aria-valuemax",`${Math.round(e)}`),this.player.elements.duration&&(this.player.elements.duration.innerHTML=(0,s.formatVideoTime)(e))}))}addEvents(){this.player.elements.progressBar&&(this.player.elements.progressBar.addEventListener("input",this.onInputProgressBar),this.player.isTouch&&this.touchEvents.forEach((e=>{this.player.elements.progressBar.addEventListener(e,this.onTouchEventProgressBar)}))),this.player.elements.controlBar&&this.player.elements.controlBar.addEventListener("click",this.onClickOnControlBar)}onTouchEventProgressBar(e){e.preventDefault();const t=e.target,s=parseFloat(t.getAttribute("max")||"100"),i=t.getBoundingClientRect(),n=(e.changedTouches[0].clientX-i.left)/i.width*100;t.value=""+100*n/s,t.dispatchEvent(new Event("input"))}onInputProgressBar(e){const t=e.target;t.style.setProperty("--vlite-progressValue",`${t.value}%`),this.player.elements.outerContainer.classList.contains("v-firstStart")&&this.player.play(),this.player.getDuration().then((e=>{this.player.seekTo(parseFloat(t.value)*e/100)}))}onClickOnControlBar(e){const t=e.target,s=(0,i.default)({target:t,selectorString:".v-playPauseButton",nodeName:["button"]}),n=(0,i.default)({target:t,selectorString:".v-volumeButton",nodeName:["button"]}),r=(0,i.default)({target:t,selectorString:".v-fullscreenButton",nodeName:["button"]});s?this.togglePlayPause(e):n?this.toggleVolume(e):r&&this.toggleFullscreen(e)}togglePlayPause(e){e.preventDefault(),this.player.elements.outerContainer.classList.contains("v-paused")?this.player.play():this.player.pause()}toggleVolume(e){e.preventDefault(),this.player.elements.volume.classList.contains("v-controlPressed")?this.player.unMute():this.player.mute()}toggleFullscreen(e){e.preventDefault(),this.player.isFullScreen?this.player.exitFullscreen():this.player.requestFullscreen()}getTemplate(){return`${(0,n.default)({options:this.player.options,isMuted:this.player.isMuted,isVideo:"video"===this.type})}`}removeEvents(){this.player.elements.progressBar&&(this.player.elements.progressBar.removeEventListener("input",this.onInputProgressBar),this.player.isTouch&&this.touchEvents.forEach((e=>{this.player.elements.progressBar.removeEventListener(e,this.onTouchEventProgressBar)}))),this.player.elements.controlBar&&this.player.elements.controlBar.removeEventListener("click",this.onClickOnControlBar)}destroy(){this.removeEvents(),this.player.elements.controlBar&&this.player.elements.controlBar.remove()}}}.apply(t,i),void 0===n||(e.exports=n)},159:function(e,t,s){var i,n,r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};i=[s,t,s(323),s(36),s(489),s(903),s(80),s(549)],n=function(e,t,s,i,n,o,l,a){"use strict";function u(){return`<button class="v-playPauseButton v-controlButton" aria-label="Play">${s.default}${i.default}</button>`}function c(){return'<div class="v-time"><span class="v-currentTime">00:00</span>&nbsp;/&nbsp;<span class="v-duration"></span></div>'}function h(){return'<input type="range" class="v-progressBar v-progressBarStyle" min="0" max="100" step="0.01" value="0" aria-label="Seek" aria-valuemin="0" />'}function d({isMuted:e}){return`<button class="v-volumeButton v-controlButton${e?" v-controlPressed":""}">${n.default}${o.default}</button>`}Object.defineProperty(t,"__esModule",{value:!0}),s=r(s),i=r(i),n=r(n),o=r(o),l=r(l),a=r(a),t.default=function({options:e,isMuted:t,isVideo:s}){return s?`<div class="v-controlBar">${e.playPause?u():""}${e.time?c():""}${e.progressBar?h():""}${e.volume?d({isMuted:t}):""}${e.fullscreen?`<button class="v-fullscreenButton v-controlButton" aria-label="Enter fullscreen">${l.default}${a.default}</span></button>`:""}</div>`:`<div class="v-controlBar">${e.playPause?u():""}${e.time?c():""}${e.progressBar?h():""}${e.volume?d({isMuted:t}):""}</div>`}}.apply(t,i),void 0===n||(e.exports=n)},851:(e,t,s)=>{var i,n;i=[s,t,s(798)],n=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return'\n\t\t<div class="v-loader">\n\t\t\t<div class="v-loaderContent">\n\t\t\t\t<div class="v-loaderBounce1"></div>\n\t\t\t\t<div class="v-loaderBounce2"></div>\n\t\t\t\t<div class="v-loaderBounce3"></div>\n\t\t\t</div>\n\t\t</div>\n\t'}}.apply(t,i),void 0===n||(e.exports=n)},522:(e,t,s)=>{var i,n;i=[s,t,s(395)],n=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return'<div class="v-overlay"></div>'}}.apply(t,i),void 0===n||(e.exports=n)},392:(e,t,s)=>{var i,n;i=[s,t,s(100)],n=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({posterUrl:e=""}){return`<div class="v-poster v-active"${e&&` style="background-image: url(${e})"`}></div>`}}.apply(t,i),void 0===n||(e.exports=n)},330:function(e,t,s){var i,n,r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};i=[s,t,s(158),s(794)],n=function(e,t,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i=r(i);t.default=class{constructor({Vlitejs:e,type:t}){this.Vlitejs=e,this.type=t,this.plugins={},this.media=e.media,this.options=e.options,this.isCast=!1,this.isLinearAd=!1,this.elements={container:e.container,outerContainer:e.outerContainer,bigPlay:e.container.querySelector(".v-bigPlay"),poster:e.container.querySelector(".v-poster"),controlBar:null,playPause:null,progressBar:null,currentTime:null,duration:null,volume:null,fullscreen:null},this.isFullScreen=!1,this.isMuted=this.options.muted,this.isPaused=null,this.playerEvents=[],this.isTouch=(0,s.isTouch)(),this.controlBar=new i.default({player:this,type:t})}build(){this.options.controls&&this.controlBar.init(),this.init()}init(){throw new Error('You have to implement the function "init".')}waitUntilVideoIsReady(){throw new Error('You have to implement the function "waitUntilVideoIsReady".')}getInstance(){throw new Error('You have to implement the function "getInstance".')}getCurrentTime(){throw new Error('You have to implement the function "getCurrentTime".')}methodSeekTo(e){throw new Error('You have to implement the function "methodSeekTo".')}getDuration(){throw new Error('You have to implement the function "getDuration".')}methodPlay(){throw new Error('You have to implement the function "methodPlay".')}methodPause(){throw new Error('You have to implement the function "methodPause".')}methodSetVolume(e){throw new Error('You have to implement the function "methodSetVolume".')}methodGetVolume(){throw new Error('You have to implement the function "methodGetVolume".')}methodMute(){throw new Error('You have to implement the function "methodMute".')}methodUnMute(){throw new Error('You have to implement the function "methodUnMute".')}onReady(){this.options.muted&&this.mute(),this.media.classList.add("v-media"),this.media.setAttribute("tabindex","-1"),this.options.autoplay&&(!this.media.muted&&this.mute(),this.play()),this.Vlitejs.onReady instanceof Function&&this.Vlitejs.onReady.call(this,this),this.options.controls&&this.controlBar.onReady(),Object.keys(this.plugins).forEach((e=>{this.plugins[e].onReady instanceof Function&&this.plugins[e].onReady()})),this.loading(!1)}on(e,t){t instanceof Function&&(this.playerEvents.push({type:e,listener:t}),this.elements.container.addEventListener(e,t))}off(e,t){t instanceof Function&&this.elements.container.removeEventListener(e,t)}dispatchEvent(e,t){this.elements.container.dispatchEvent(new window.CustomEvent(e,{detail:t}))}loading(e){this.elements.outerContainer.classList[e?"add":"remove"]("v-loading"),this.dispatchEvent("progress")}onTimeUpdate(){this.options.time&&Promise.all([this.getCurrentTime(),this.getDuration()]).then((([e,t])=>this.updateProgressBar({seconds:e,duration:t})))}updateProgressBar({seconds:e,duration:t,isRemote:i=!1}){const n=Math.round(e);if(this.elements.progressBar){const s=100*n/t;this.elements.progressBar.value=`${s}`,this.elements.progressBar.style.setProperty("--vlite-progressValue",`${s}%`),this.elements.progressBar.setAttribute("aria-valuenow",`${Math.round(e)}`)}this.elements.currentTime&&(this.elements.currentTime.innerHTML=(0,s.formatVideoTime)(n)),!i&&this.dispatchEvent("timeupdate")}onMediaEnded(){this.options.loop?this.play():(this.elements.outerContainer.classList.replace("v-playing","v-paused"),this.elements.outerContainer.classList.add("v-firstStart")),this.elements.poster&&this.elements.poster.classList.add("v-active"),this.elements.progressBar&&(this.elements.progressBar.value="0",this.elements.progressBar.style.setProperty("--vlite-progressValue","0%"),this.elements.progressBar.removeAttribute("aria-valuenow")),this.elements.currentTime&&(this.elements.currentTime.innerHTML="00:00"),this.dispatchEvent("ended")}play(){this.isLinearAd||(null===this.isPaused&&(this.elements.outerContainer.classList.remove("v-firstStart"),"video"===this.type&&this.elements.poster&&this.elements.poster.classList.remove("v-active")),!this.isCast&&this.methodPlay(),this.isPaused=!1,this.elements.outerContainer.classList.replace("v-paused","v-playing"),this.elements.playPause&&(this.elements.playPause.setAttribute("aria-label","Pause"),this.elements.playPause.classList.add("v-controlPressed")),"video"===this.type&&this.elements.bigPlay&&this.elements.bigPlay.setAttribute("aria-label","Pause"),this.afterPlayPause(),this.dispatchEvent("play"))}pause(){!this.isCast&&this.methodPause(),this.isPaused=!0,this.elements.outerContainer.classList.replace("v-playing","v-paused"),this.elements.playPause&&(this.elements.playPause.setAttribute("aria-label","Play"),this.elements.playPause.classList.remove("v-controlPressed")),"video"===this.type&&this.elements.bigPlay&&this.elements.bigPlay.setAttribute("aria-label","Play"),this.afterPlayPause(),this.dispatchEvent("pause")}afterPlayPause(){this.Vlitejs.autoHideGranted&&(this.Vlitejs.stopAutoHideTimer(),!this.isPaused&&this.Vlitejs.startAutoHideTimer())}setVolume(e){e>1?e=1:e<=0?(e=0,this.isMuted=!0,this.elements.volume&&this.elements.volume.classList.add("v-controlPressed")):(this.isMuted=!1,this.elements.volume&&this.elements.volume.classList.remove("v-controlPressed")),this.methodSetVolume(e),this.dispatchEvent("volumechange",{volume:e})}getVolume(){return new window.Promise((e=>{this.methodGetVolume().then((t=>{e(t)}))}))}mute(){this.methodMute(),this.isMuted=!0,this.elements.volume&&(this.elements.volume.classList.add("v-controlPressed"),this.elements.volume.setAttribute("aria-label","Unmute")),this.dispatchEvent("volumechange")}unMute(){this.methodUnMute(),this.isMuted=!1,this.elements.volume&&(this.elements.volume.classList.remove("v-controlPressed"),this.elements.volume.setAttribute("aria-label","Mute")),this.dispatchEvent("volumechange")}seekTo(e){this.methodSeekTo(e)}requestFullscreen(){const{requestFn:e}=this.Vlitejs.supportFullScreen;this.media[e]&&(this.elements.container[e](),this.isFullScreen=!0,this.elements.outerContainer.classList.add("v-fullscreenButtonDisplay"),this.elements.fullscreen&&(this.elements.fullscreen.classList.add("v-controlPressed"),this.elements.fullscreen.setAttribute("aria-label","Exit fullscreen")),this.dispatchEvent("enterfullscreen"))}exitFullscreen({escKey:e=!1}={}){const{cancelFn:t}=this.Vlitejs.supportFullScreen;document[t]&&(!e&&document[t](),this.isFullScreen=!1,this.elements.outerContainer.classList.remove("v-fullscreenButtonDisplay"),this.elements.fullscreen&&(this.elements.fullscreen.classList.remove("v-controlPressed"),this.elements.fullscreen.setAttribute("aria-label","Enter fullscreen")),this.dispatchEvent("exitfullscreen"))}destroy(){this.controlBar&&this.controlBar.destroy(),Object.keys(this.plugins).forEach((e=>{this.plugins[e].destroy instanceof Function&&this.plugins[e].destroy()})),this.playerEvents.forEach((e=>{this.elements.container.removeEventListener(e.type,e.listener)})),this.elements.container.remove()}}}.apply(t,i),void 0===n||(e.exports=n)},668:function(e,t,s){var i,n,r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};i=[s,t,s(330),s(341),s(158),s(851),s(782),s(522),s(392),s(390),s(555),s(7)],n=function(e,t,s,i,n,o,l,a,u,c,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s=r(s),i=r(i),o=r(o),l=r(l),a=r(a),u=r(u);const d={audio:{controls:!0,autoplay:!1,playPause:!0,progressBar:!0,time:!0,volume:!0,loop:!1},video:{controls:!0,autoplay:!1,playPause:!0,progressBar:!0,time:!0,volume:!0,fullscreen:!0,poster:null,bigPlay:!0,playsinline:!0,loop:!1,muted:!1,autoHide:!1,autoHideDelay:3e3,providerParams:{}}};class p{constructor(e,{options:t={},provider:i="html5",plugins:r=[],onReady:o=(()=>{})}={}){if("string"==typeof e)this.media=document.querySelector(e);else{if(!(e instanceof HTMLVideoElement||e instanceof HTMLAudioElement||e instanceof HTMLDivElement))throw new TypeError("vlitejs :: The element or selector supplied is not valid.");this.media=e}this.provider=i,this.onReady=o,this.type=this.media instanceof HTMLAudioElement?"audio":"video",this.supportFullScreen=(0,n.checkSupportFullScreen)();["autoplay","playsinline","muted","loop"].forEach((e=>{this.media.hasAttribute(e)?t[e]=!0:t[e]&&this.media.setAttribute(e,"")})),this.options=Object.assign(Object.assign({},d[this.type]),t),this.autoHideGranted="video"===this.type&&!!this.options.autoHide&&!!this.options.controls,/(iPhone)/gi.test(window.navigator.userAgent)&&(this.options.fullscreen=!1),this.onClickOnPlayer=this.onClickOnPlayer.bind(this),this.onDoubleClickOnPlayer=this.onDoubleClickOnPlayer.bind(this),this.onKeydown=this.onKeydown.bind(this),this.onMousemove=this.onMousemove.bind(this),this.onChangeFullScreen=this.onChangeFullScreen.bind(this);const l=(0,c.getProviderInstance)(i,s.default);this.wrapElement(),this.container=this.media.closest(".v-container"),this.outerContainer=this.container.closest(".v-vlite"),"video"===this.type&&this.renderLayout(),this.player=new l({type:this.type,Vlitejs:this}),this.player.build(),this.addEvents(),(0,h.initializePlugins)({plugins:r,provider:i,type:this.type,player:this.player})}wrapElement(){const e=document.createElement("div");e.classList.add("v-vlite","v-firstStart","v-paused","v-loading",`v-${this.type}`);const t=document.createElement("div");t.setAttribute("tabindex","0"),t.classList.add("v-container"),e.appendChild(t);this.media.parentNode.insertBefore(e,this.media),t.appendChild(this.media)}renderLayout(){const e=`\n\t\t\t${(0,a.default)()}\n\t\t\t${(0,o.default)()}\n\t\t\t${this.options.poster?(0,u.default)({posterUrl:this.options.poster}):""}\n\t\t\t${this.options.bigPlay?(0,l.default)():""}\n\t\t`;this.container.insertAdjacentHTML("beforeend",e)}addEvents(){"video"===this.type&&(this.container.addEventListener("click",this.onClickOnPlayer),this.container.addEventListener("dblclick",this.onDoubleClickOnPlayer),this.autoHideGranted&&this.container.addEventListener("mousemove",this.onMousemove),document.addEventListener(this.supportFullScreen.changeEvent,this.onChangeFullScreen)),this.container.addEventListener("keydown",this.onKeydown)}onClickOnPlayer(e){const t=e.target;(0,i.default)({target:t,selectorString:".v-poster, .v-overlay, .v-bigPlay",nodeName:["div","button"]})&&(this.player.controlBar.togglePlayPause(e),t.matches(".v-bigPlay")&&this.container.focus())}onDoubleClickOnPlayer(e){const t=e.target;(0,i.default)({target:t,selectorString:".v-overlay",nodeName:["div"]})&&this.player.controlBar.toggleFullscreen(e)}onKeydown(e){const t=document.activeElement,{keyCode:s}=e;[9,32,37,39].includes(s)&&this.autoHideGranted&&(t===this.container||(null==t?void 0:t.closest(".v-vlite")))&&(this.stopAutoHideTimer(),this.startAutoHideTimer()),![37,39].includes(s)||t!==this.container&&t!==this.player.elements.progressBar||(e.preventDefault(),37===s?this.fastForward("backward"):39===s&&this.fastForward("forward")),![38,40].includes(s)||t!==this.container&&t!==this.player.elements.volume||(38===s?this.increaseVolume():40===s&&this.decreaseVolume()),32===s&&t===this.container&&this.player.controlBar.togglePlayPause(e)}onMousemove(){!this.player.isPaused&&this.autoHideGranted&&(this.stopAutoHideTimer(),this.startAutoHideTimer())}onChangeFullScreen(){!document[this.supportFullScreen.isFullScreen]&&this.player.isFullScreen&&this.player.exitFullscreen({escKey:!0})}fastForward(e){this.player.getCurrentTime().then((t=>{this.player.seekTo("backward"===e?t-5:t+5)}))}increaseVolume(){this.player.isMuted&&this.player.unMute(),this.player.getVolume().then((e=>{this.player.setVolume(Math.round(10*(e+.1))/10)}))}decreaseVolume(){this.player.getVolume().then((e=>{this.player.setVolume(Math.round(10*(e-.1))/10)}))}stopAutoHideTimer(){"video"===this.type&&this.player.elements.controlBar&&(this.player.elements.controlBar.classList.remove("v-hidden"),clearTimeout(this.timerAutoHide))}startAutoHideTimer(){"video"===this.type&&!this.player.isPaused&&this.player.elements.controlBar&&(this.timerAutoHide=window.setTimeout((()=>{this.player.elements.controlBar.classList.add("v-hidden")}),this.options.autoHideDelay))}removeEvents(){this.container.removeEventListener("keydown",this.onKeydown),"video"===this.type&&(this.container.removeEventListener("click",this.onClickOnPlayer),this.container.removeEventListener("dblclick",this.onDoubleClickOnPlayer),this.autoHideGranted&&this.container.removeEventListener("mousemove",this.onMousemove),window.removeEventListener(this.supportFullScreen.changeEvent,this.onChangeFullScreen))}destroy(){this.removeEvents(),this.player.destroy(),this.player.controlBar.destroy()}}p.registerProvider=c.registerProvider,p.registerPlugin=h.registerPlugin,t.default=p}.apply(t,i),void 0===n||(e.exports=n)},555:(e,t,s)=>{var i;i=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initializePlugins=t.registerPlugin=t.getPluginInstance=void 0;const s={},i={};function n(e){const t=[],n=Object.keys(s);return e.forEach((e=>{if(!n.includes(e))throw new Error(`vlitejs :: Unknown plugin "${e}".`);t.push({id:e,Plugin:s[e],options:i[e]})})),t}t.getPluginInstance=n,t.registerPlugin=function(e,t,n){if(void 0!==t){if(!Object.keys(s).includes(e))return s[e]=t,void(n&&(i[e]=n));throw new Error(`vlitejs :: The plugin id "${e}" is already registered.`)}throw new Error(`vlitejs :: The plugin id "${e}" is undefined.`)},t.initializePlugins=function({plugins:e,provider:t,type:s,player:i}){n(e).forEach((({id:e,Plugin:n,options:r})=>{const o=new n({player:i,options:r});if(i.plugins[e]=o,!o.providers.includes(t)||!o.types.includes(s))throw new Error(`vlitejs :: The "${e}" plugin is only compatible with providers:"${o.providers}" and types:"${o.types}"`);o.init()}))}}.apply(t,[s,t]),void 0===i||(e.exports=i)},571:(e,t,s)=>{var i;i=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return class extends e{constructor(e){super(e),this.events=[{type:"timeupdate",listener:super.onTimeUpdate},{type:"ended",listener:super.onMediaEnded},{type:"playing",listener:this.onPlaying},{type:"waiting",listener:this.onWaiting},{type:"seeking",listener:this.onSeeking},{type:"seeked",listener:this.onSeeked}]}init(){this.waitUntilVideoIsReady().then((()=>{this.addSpecificEvents(),super.onReady()}))}waitUntilVideoIsReady(){return new window.Promise((e=>{this.media.readyState>=2&&this.media.duration?e():(this.media.addEventListener("loadedmetadata",e,{once:!0}),this.media.addEventListener("canplay",e,{once:!0}))}))}addSpecificEvents(){this.events.forEach((e=>{this.media.addEventListener(e.type,e.listener.bind(this))}))}getInstance(){return this.media}getCurrentTime(){return new window.Promise((e=>e(this.media.currentTime)))}getDuration(){return new window.Promise((e=>e(this.media.duration)))}methodPlay(){this.media.play()}methodPause(){this.media.pause()}methodSetVolume(e){this.media.volume=e}methodGetVolume(){return new window.Promise((e=>e(this.media.volume)))}methodMute(){this.media.muted=!0,this.media.setAttribute("muted","")}methodUnMute(){this.media.muted=!1,this.media.removeAttribute("muted")}methodSeekTo(e){this.media.currentTime=e}onWaiting(){this.loading(!0)}onPlaying(){this.loading(!1)}onSeeking(){this.loading(!0)}onSeeked(){this.loading(!1)}removeSpecificEvents(){this.events.forEach((e=>{this.media.removeEventListener(e.type,e.listener)}))}destroy(){this.removeSpecificEvents(),super.destroy()}}}}.apply(t,[s,t]),void 0===i||(e.exports=i)},390:function(e,t,s){var i,n,r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};i=[s,t,s(571)],n=function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.registerProvider=t.getProviderInstance=void 0;const i={html5:(s=r(s)).default},n={};t.getProviderInstance=function(e,t){const s=i[e];if(s)return s(t,n[e]);throw new Error(`vlitejs :: Unknown provider "${e}"`)},t.registerProvider=function(e,t,s){if(void 0!==t){if(!Object.keys(i).includes(e))return i[e]=t,void(s&&(n[e]=s));throw new Error(`vlitejs :: The provider id "${e}" is already registered.`)}throw new Error(`vlitejs :: The provider id "${e}" is undefined.`)}}.apply(t,i),void 0===n||(e.exports=n)},158:(e,t,s)=>{var i;i=function(e,t){"use strict";function s(){if(document.exitFullscreen instanceof Function)return"";return["webkit","moz","ms"].find((e=>document[e+"ExitFullscreen"]instanceof Function||document[`${e}CancelFullScreen`]instanceof Function))||""}Object.defineProperty(t,"__esModule",{value:!0}),t.isTouch=t.getBrowserPrefix=t.checkSupportFullScreen=t.formatVideoTime=void 0,t.formatVideoTime=function(e){const t=1e3*e,s=t/1e3/60<<0,i=t/1e3%60<<0;let n="";return n+=s<10?"0":"",n+=s+":",n+=i<10?"0":"",n+=i,n},t.checkSupportFullScreen=function(){const e=s();return{requestFn:e?`${e}RequestFullScreen`:"requestFullscreen",cancelFn:e?`${e}ExitFullscreen`:"exitFullscreen",changeEvent:e?`${e}fullscreenchange`:"fullscreenchange",isFullScreen:e?`${e}FullscreenElement`:"fullscreenElement"}},t.getBrowserPrefix=s,t.isTouch=function(){return!!("ontouchstart"in document.documentElement)}}.apply(t,[s,t]),void 0===i||(e.exports=i)},296:(e,t,s)=>{"use strict";s.r(t)},244:(e,t,s)=>{"use strict";s.r(t)},798:(e,t,s)=>{"use strict";s.r(t)},395:(e,t,s)=>{"use strict";s.r(t)},100:(e,t,s)=>{"use strict";s.r(t)},7:(e,t,s)=>{"use strict";s.r(t)},341:e=>{
/**
 * @license MIT
 * @name validateTarget
 * @version 2.0.0
 * @author: Yoriiis aka Joris DANIEL <joris.daniel@gmail.com>
 * @description: Easily validate target of an HTML element especially during event delegation
 * {@link https://github.com/yoriiis/validate-target}
 * @copyright 2020 Joris DANIEL
 **/
e.exports=function({target:e,selectorString:t,nodeName:s}){if("string"==typeof s&&(s=[s]),Array.isArray(s)&&s.length)return s.map((s=>e.nodeName.toLowerCase()===s&&e.matches(t))).includes(!0)}},566:e=>{"use strict";e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0ZM7.5 12.67V7.33c0-.79.88-1.27 1.54-.84l4.15 2.67a1 1 0 0 1 0 1.68l-4.15 2.67c-.66.43-1.54-.05-1.54-.84Z"/></svg>'},549:e=>{"use strict";e.exports='<svg class="v-iconPressed" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path d="M1 11h2v2c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1Zm2-8H1c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1S3 .45 3 1v2Zm7 11c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1Zm1-11V1c0-.55-.45-1-1-1S9 .45 9 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1h-2Z"/></svg>'},80:e=>{"use strict";e.exports='<svg class="v-iconUnpressed" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path d="M1 9c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H2v-2c0-.55-.45-1-1-1Zm0-4c.55 0 1-.45 1-1V2h2c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v3c0 .55.45 1 1 1Zm11 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v2ZM9 1c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1Z"/></svg>'},36:e=>{"use strict";e.exports='<svg class="v-iconPressed" viewBox="0 0 12 14" xmlns="http://www.w3.org/2000/svg"><path d="M2 14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2S0 .9 0 2v10c0 1.1.9 2 2 2ZM8 2v10c0 1.1.9 2 2 2s2-.9 2-2V2c0-1.1-.9-2-2-2S8 .9 8 2Z"/></svg>'},323:e=>{"use strict";e.exports='<svg class="v-iconUnpressed" viewBox="0 0 11 13" xmlns="http://www.w3.org/2000/svg"><path d="M0 1v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L1.54.16A.998.998 0 0 0 0 1Z"/></svg>'},489:e=>{"use strict";e.exports='<svg class="v-iconUnpressed" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg"><path d="M0 6.461v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V2.871c0-.89-1.08-1.34-1.71-.71L4 5.461H1c-.55 0-1 .45-1 1Zm13.5 2a4.5 4.5 0 0 0-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02ZM11 .911v.2c0 .38.25.71.6.85a7.004 7.004 0 0 1 4.4 6.5c0 2.94-1.82 5.47-4.4 6.5-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85a8.98 8.98 0 0 0 5.79-8.4c0-3.84-2.4-7.11-5.79-8.4-.58-.23-1.21.22-1.21.85Z"/></svg>'},903:e=>{"use strict";e.exports='<svg class="v-iconPressed" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M.63.292a.996.996 0 0 0 0 1.41l3.66 3.66-.29.3H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.997.997 0 1 0 1.41-1.41L2.05.293c-.39-.39-1.02-.39-1.42 0ZM16 8.662c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85 2.57 1.04 4.39 3.56 4.39 6.5Zm-8.71-6.29-.17.17L9 4.422v-1.35c0-.89-1.08-1.33-1.71-.7Zm6.21 6.29a4.5 4.5 0 0 0-2.5-4.03v1.79l2.48 2.48c.01-.08.02-.16.02-.24Z"/></svg>'}},t={};function s(i){var n=t[i];if(void 0!==n)return n.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,s),r.exports}s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i=s(668);return i=i.default})()));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:68:"/local/templates/kalmatron/js/jquery.validate.min.js?173314503022254";s:6:"source";s:52:"/local/templates/kalmatron/js/jquery.validate.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery Validation Plugin - v1.13.1 - 10/14/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(b.target).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d,e;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c;return a(this[0]).is("form")?b=this.validate().form():(b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b})),b},removeAttrs:function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){return!!a.trim(""+a(b).val())},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(a,b){(9!==b.which||""!==this.elementValue(a))&&(a.name in this.submitted||a===this.lastElement)&&this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!this.is(e.ignore)&&e[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']","focusin focusout keyup",b).validateDelegate("select, option, [type='radio'], [type='checkbox']","click",b),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d=a(b),e=b.type;return"radio"===e||"checkbox"===e?a("input[name='"+b.name+"']:checked").val():"number"===e&&"undefined"!=typeof b.validity?b.validity.badInput?!1:d.val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g=this.errorsFor(b),h=this.idOrName(b),i=a(b).attr("aria-describedby");g.length?(g.removeClass(this.settings.validClass).addClass(this.settings.errorClass),g.html(c)):(g=a("<"+this.settings.errorElement+">").attr("id",h+"-error").addClass(this.settings.errorClass).html(c||""),d=g,this.settings.wrapper&&(d=g.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),g.is("label")?g.attr("for",h):0===g.parents("label[for='"+h+"']").length&&(f=g.attr("id").replace(/(:|\.|\[|\])/g,"\\$1"),i?i.match(new RegExp("\\b"+f+"\\b"))||(i+=" "+f):i=f,a(b).attr("aria-describedby",i),e=this.groups[b.name],e&&a.each(this.groups,function(b,c){c===e&&a("[name='"+b+"']",this.currentForm).attr("aria-describedby",g.attr("id"))}))),!c&&this.settings.success&&(g.text(""),"string"==typeof this.settings.success?g.addClass(this.settings.success):this.settings.success(g,b)),this.toShow=this.toShow.add(g)},errorsFor:function(b){var c=this.idOrName(b),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+d.replace(/\s+/g,", #")),this.errors().filter(e)},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),/min|max/.test(c)&&(null===g||/number|range|text/.test(g))&&(d=Number(d)),d||0===d?e[c]=d:g===c&&"range"!==g&&(e[c]=!0);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b);for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),void 0!==d&&(e[c]=d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:a.trim(b).length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},date:function(a,b){/*return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())*/ /*customized!!!*/ var check = false,re=new RegExp((typeof(VALIDATE_DATE_MASK)!=='undefined'?VALIDATE_DATE_MASK:'^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}$')),adata,gg,mm,aaaa,xdata;if(re.test(a)){adata=a.split('.');if(adata.length===1){adata=a.split('-');if(adata.length===1){adata=a.split(' ');if(adata.length===1){adata=a.split('/');if(adata.length===1){adata=a.split(':');}}}}gg=parseInt(adata[0],10);mm=parseInt(adata[1],10);aaaa=parseInt(adata[2],10);xdata=new Date(aaaa,mm-1,gg,12,0,0,0);if((xdata.getUTCFullYear()===aaaa)&&(xdata.getUTCMonth()===mm-1)&&(xdata.getUTCDate()===gg)){check = true;}else{check = false;}}else{check = false;}return this.optional(b)||check;},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{url:d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{url:d,mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}}),a.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."};var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a.extend(a.fn,{validateDelegate:function(b,c,d){return this.bind(c,function(c){var e=a(c.target);return e.is(b)?d.apply(e,arguments):void 0})}})});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:69:"/local/templates/kalmatron/js/jquery.fancybox.min.js?1733145030168978";s:6:"source";s:52:"/local/templates/kalmatron/js/jquery.fancybox.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!(function (t, e, n, o) {
    'use strict';
    function i(t, e) {
        var o,
            i,
            a,
            s = [],
            r = 0;
        (t && t.isDefaultPrevented()) ||
            (t.preventDefault(),
            (e = e || {}),
            t && t.data && (e = h(t.data.options, e)),
            (o = e.$target || n(t.currentTarget).trigger('blur')),
            ((a = n.fancybox.getInstance()) &&
                a.$trigger &&
                a.$trigger.is(o)) ||
                (e.selector
                    ? (s = n(e.selector))
                    : ((i = o.attr('data-fancybox') || ''),
                      i
                          ? ((s = t.data ? t.data.items : []),
                            (s = s.length
                                ? s.filter('[data-fancybox="' + i + '"]')
                                : n('[data-fancybox="' + i + '"]')))
                          : (s = [o])),
                (r = n(s).index(o)),
                r < 0 && (r = 0),
                (a = n.fancybox.open(s, e, r)),
                (a.$trigger = o)));
    }
    if (((t.console = t.console || { info: function (t) {} }), n)) {
        if (n.fn.fancybox)
            return void console.info('fancyBox already initialized');
        var a = {
                closeExisting: !1,
                loop: !1,
                gutter: 50,
                keyboard: !0,
                preventCaptionOverlap: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: 'auto',
                toolbar: 'auto',
                buttons: ['zoom', 'slideShow', 'thumbs', 'close'],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: { preload: !1 },
                ajax: { settings: { data: { fancybox: !0 } } },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: { scrolling: 'auto' },
                },
                video: {
                    tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                    format: '',
                    autoStart: !0,
                },
                defaultType: 'image',
                animationEffect: 'zoom',
                animationDuration: 366,
                zoomOpacity: 'auto',
                transitionEffect: 'fade',
                transitionDuration: 366,
                slideClass: '',
                baseClass: '',
                baseTpl:
                    '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                btnTpl: {
                    download:
                        '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                    arrowLeft:
                        '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                    arrowRight:
                        '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                    smallBtn:
                        '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
                },
                parentEl: 'body',
                hideScrollbar: !0,
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: { autoStart: !1 },
                touch: { vertical: !0, momentum: !0 },
                hash: null,
                media: {},
                slideShow: { autoStart: !1, speed: 3e3 },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: '.fancybox-container',
                    axis: 'y',
                },
                wheel: 'auto',
                onInit: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop,
                onActivate: n.noop,
                onDeactivate: n.noop,
                clickContent: function (t, e) {
                    return 'image' === t.type && 'zoom';
                },
                clickSlide: 'close',
                clickOutside: 'close',
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1,
                    idleTime: !1,
                    clickContent: function (t, e) {
                        return 'image' === t.type && 'toggleControls';
                    },
                    clickSlide: function (t, e) {
                        return 'image' === t.type ? 'toggleControls' : 'close';
                    },
                    dblclickContent: function (t, e) {
                        return 'image' === t.type && 'zoom';
                    },
                    dblclickSlide: function (t, e) {
                        return 'image' === t.type && 'zoom';
                    },
                },
                lang: 'en',
                i18n: {
                    en: {
                        CLOSE: 'Close',
                        NEXT: 'Next',
                        PREV: 'Previous',
                        ERROR: 'The requested content cannot be loaded. <br/> Please try again later.',
                        PLAY_START: 'Start slideshow',
                        PLAY_STOP: 'Pause slideshow',
                        FULL_SCREEN: 'Full screen',
                        THUMBS: 'Thumbnails',
                        DOWNLOAD: 'Download',
                        SHARE: 'Share',
                        ZOOM: 'Zoom',
                    },
                    de: {
                        CLOSE: 'Schlie&szlig;en',
                        NEXT: 'Weiter',
                        PREV: 'Zur&uuml;ck',
                        ERROR: 'Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.',
                        PLAY_START: 'Diaschau starten',
                        PLAY_STOP: 'Diaschau beenden',
                        FULL_SCREEN: 'Vollbild',
                        THUMBS: 'Vorschaubilder',
                        DOWNLOAD: 'Herunterladen',
                        SHARE: 'Teilen',
                        ZOOM: 'Vergr&ouml;&szlig;ern',
                    },
                },
            },
            s = n(t),
            r = n(e),
            c = 0,
            l = function (t) {
                return t && t.hasOwnProperty && t instanceof n;
            },
            d = (function () {
                return (
                    t.requestAnimationFrame ||
                    t.webkitRequestAnimationFrame ||
                    t.mozRequestAnimationFrame ||
                    t.oRequestAnimationFrame ||
                    function (e) {
                        return t.setTimeout(e, 1e3 / 60);
                    }
                );
            })(),
            u = (function () {
                return (
                    t.cancelAnimationFrame ||
                    t.webkitCancelAnimationFrame ||
                    t.mozCancelAnimationFrame ||
                    t.oCancelAnimationFrame ||
                    function (e) {
                        t.clearTimeout(e);
                    }
                );
            })(),
            f = (function () {
                var t,
                    n = e.createElement('fakeelement'),
                    o = {
                        transition: 'transitionend',
                        OTransition: 'oTransitionEnd',
                        MozTransition: 'transitionend',
                        WebkitTransition: 'webkitTransitionEnd',
                    };
                for (t in o) if (void 0 !== n.style[t]) return o[t];
                return 'transitionend';
            })(),
            p = function (t) {
                return t && t.length && t[0].offsetHeight;
            },
            h = function (t, e) {
                var o = n.extend(!0, {}, t, e);
                return (
                    n.each(e, function (t, e) {
                        n.isArray(e) && (o[t] = e);
                    }),
                    o
                );
            },
            g = function (t) {
                var o, i;
                return (
                    !(!t || t.ownerDocument !== e) &&
                    (n('.fancybox-container').css('pointer-events', 'none'),
                    (o = {
                        x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                        y: t.getBoundingClientRect().top + t.offsetHeight / 2,
                    }),
                    (i = e.elementFromPoint(o.x, o.y) === t),
                    n('.fancybox-container').css('pointer-events', ''),
                    i)
                );
            },
            b = function (t, e, o) {
                var i = this;
                (i.opts = h({ index: o }, n.fancybox.defaults)),
                    n.isPlainObject(e) && (i.opts = h(i.opts, e)),
                    n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)),
                    (i.id = i.opts.id || ++c),
                    (i.currIndex = parseInt(i.opts.index, 10) || 0),
                    (i.prevIndex = null),
                    (i.prevPos = null),
                    (i.currPos = 0),
                    (i.firstRun = !0),
                    (i.group = []),
                    (i.slides = {}),
                    i.addContent(t),
                    i.group.length && i.init();
            };
        n.extend(b.prototype, {
            init: function () {
                var o,
                    i,
                    a = this,
                    s = a.group[a.currIndex],
                    r = s.opts;
                r.closeExisting && n.fancybox.close(!0),
                    n('body').addClass('fancybox-active'),
                    !n.fancybox.getInstance() &&
                        !1 !== r.hideScrollbar &&
                        !n.fancybox.isMobile &&
                        e.body.scrollHeight > t.innerHeight &&
                        (n('head').append(
                            '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
                                (t.innerWidth - e.documentElement.clientWidth) +
                                'px;}</style>'
                        ),
                        n('body').addClass('compensate-for-scrollbar')),
                    (i = ''),
                    n.each(r.buttons, function (t, e) {
                        i += r.btnTpl[e] || '';
                    }),
                    (o = n(
                        a.translate(
                            a,
                            r.baseTpl
                                .replace('{{buttons}}', i)
                                .replace(
                                    '{{arrows}}',
                                    r.btnTpl.arrowLeft + r.btnTpl.arrowRight
                                )
                        )
                    )
                        .attr('id', 'fancybox-container-' + a.id)
                        .addClass(r.baseClass)
                        .data('FancyBox', a)
                        .appendTo(r.parentEl)),
                    (a.$refs = { container: o }),
                    [
                        'bg',
                        'inner',
                        'infobar',
                        'toolbar',
                        'stage',
                        'caption',
                        'navigation',
                    ].forEach(function (t) {
                        a.$refs[t] = o.find('.fancybox-' + t);
                    }),
                    a.trigger('onInit'),
                    a.activate(),
                    a.jumpTo(a.currIndex);
            },
            translate: function (t, e) {
                var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                    return void 0 === n[e] ? t : n[e];
                });
            },
            addContent: function (t) {
                var e,
                    o = this,
                    i = n.makeArray(t);
                n.each(i, function (t, e) {
                    var i,
                        a,
                        s,
                        r,
                        c,
                        l = {},
                        d = {};
                    n.isPlainObject(e)
                        ? ((l = e), (d = e.opts || e))
                        : 'object' === n.type(e) && n(e).length
                        ? ((i = n(e)),
                          (d = i.data() || {}),
                          (d = n.extend(!0, {}, d, d.options)),
                          (d.$orig = i),
                          (l.src = o.opts.src || d.src || i.attr('href')),
                          l.type || l.src || ((l.type = 'inline'), (l.src = e)))
                        : (l = { type: 'html', src: e + '' }),
                        (l.opts = n.extend(!0, {}, o.opts, d)),
                        n.isArray(d.buttons) && (l.opts.buttons = d.buttons),
                        n.fancybox.isMobile &&
                            l.opts.mobile &&
                            (l.opts = h(l.opts, l.opts.mobile)),
                        (a = l.type || l.opts.type),
                        (r = l.src || ''),
                        !a &&
                            r &&
                            ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                                ? ((a = 'video'),
                                  l.opts.video.format ||
                                      (l.opts.video.format =
                                          'video/' +
                                          ('ogv' === s[1] ? 'ogg' : s[1])))
                                : r.match(
                                      /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                                  )
                                ? (a = 'image')
                                : r.match(/\.(pdf)((\?|#).*)?$/i)
                                ? ((a = 'iframe'),
                                  (l = n.extend(!0, l, {
                                      contentType: 'pdf',
                                      opts: { iframe: { preload: !1 } },
                                  })))
                                : '#' === r.charAt(0) && (a = 'inline')),
                        a ? (l.type = a) : o.trigger('objectNeedsType', l),
                        l.contentType ||
                            (l.contentType =
                                n.inArray(l.type, ['html', 'inline', 'ajax']) >
                                -1
                                    ? 'html'
                                    : l.type),
                        (l.index = o.group.length),
                        'auto' == l.opts.smallBtn &&
                            (l.opts.smallBtn =
                                n.inArray(l.type, ['html', 'inline', 'ajax']) >
                                -1),
                        'auto' === l.opts.toolbar &&
                            (l.opts.toolbar = !l.opts.smallBtn),
                        (l.$thumb = l.opts.$thumb || null),
                        l.opts.$trigger &&
                            l.index === o.opts.index &&
                            ((l.$thumb = l.opts.$trigger.find('img:first')),
                            l.$thumb.length &&
                                (l.opts.$orig = l.opts.$trigger)),
                        (l.$thumb && l.$thumb.length) ||
                            !l.opts.$orig ||
                            (l.$thumb = l.opts.$orig.find('img:first')),
                        l.$thumb && !l.$thumb.length && (l.$thumb = null),
                        (l.thumb =
                            l.opts.thumb ||
                            (l.$thumb ? l.$thumb[0].src : null)),
                        'function' === n.type(l.opts.caption) &&
                            (l.opts.caption = l.opts.caption.apply(e, [o, l])),
                        'function' === n.type(o.opts.caption) &&
                            (l.opts.caption = o.opts.caption.apply(e, [o, l])),
                        l.opts.caption instanceof n ||
                            (l.opts.caption =
                                void 0 === l.opts.caption
                                    ? ''
                                    : l.opts.caption + ''),
                        'ajax' === l.type &&
                            ((c = r.split(/\s+/, 2)),
                            c.length > 1 &&
                                ((l.src = c.shift()),
                                (l.opts.filter = c.shift()))),
                        l.opts.modal &&
                            (l.opts = n.extend(!0, l.opts, {
                                trapFocus: !0,
                                infobar: 0,
                                toolbar: 0,
                                smallBtn: 0,
                                keyboard: 0,
                                slideShow: 0,
                                fullScreen: 0,
                                thumbs: 0,
                                touch: 0,
                                clickContent: !1,
                                clickSlide: !1,
                                clickOutside: !1,
                                dblclickContent: !1,
                                dblclickSlide: !1,
                                dblclickOutside: !1,
                            })),
                        o.group.push(l);
                }),
                    Object.keys(o.slides).length &&
                        (o.updateControls(),
                        (e = o.Thumbs) &&
                            e.isActive &&
                            (e.create(), e.focus()));
            },
            addEvents: function () {
                var e = this;
                e.removeEvents(),
                    e.$refs.container
                        .on(
                            'click.fb-close',
                            '[data-fancybox-close]',
                            function (t) {
                                t.stopPropagation(),
                                    t.preventDefault(),
                                    e.close(t);
                            }
                        )
                        .on(
                            'touchstart.fb-prev click.fb-prev',
                            '[data-fancybox-prev]',
                            function (t) {
                                t.stopPropagation(),
                                    t.preventDefault(),
                                    e.previous();
                            }
                        )
                        .on(
                            'touchstart.fb-next click.fb-next',
                            '[data-fancybox-next]',
                            function (t) {
                                t.stopPropagation(),
                                    t.preventDefault(),
                                    e.next();
                            }
                        )
                        .on('click.fb', '[data-fancybox-zoom]', function (t) {
                            e[
                                e.isScaledDown()
                                    ? 'scaleToActual'
                                    : 'scaleToFit'
                            ]();
                        }),
                    s.on('orientationchange.fb resize.fb', function (t) {
                        t &&
                        t.originalEvent &&
                        'resize' === t.originalEvent.type
                            ? (e.requestId && u(e.requestId),
                              (e.requestId = d(function () {
                                  e.update(t);
                              })))
                            : (e.current &&
                                  'iframe' === e.current.type &&
                                  e.$refs.stage.hide(),
                              setTimeout(
                                  function () {
                                      e.$refs.stage.show(), e.update(t);
                                  },
                                  n.fancybox.isMobile ? 600 : 250
                              ));
                    }),
                    r.on('keydown.fb', function (t) {
                        var o = n.fancybox ? n.fancybox.getInstance() : null,
                            i = o.current,
                            a = t.keyCode || t.which;
                        if (9 == a)
                            return void (i.opts.trapFocus && e.focus(t));
                        if (
                            !(
                                !i.opts.keyboard ||
                                t.ctrlKey ||
                                t.altKey ||
                                t.shiftKey ||
                                n(t.target).is(
                                    'input,textarea,video,audio,select'
                                )
                            )
                        )
                            return 8 === a || 27 === a
                                ? (t.preventDefault(), void e.close(t))
                                : 37 === a || 38 === a
                                ? (t.preventDefault(), void e.previous())
                                : 39 === a || 40 === a
                                ? (t.preventDefault(), void e.next())
                                : void e.trigger('afterKeydown', t, a);
                    }),
                    e.group[e.currIndex].opts.idleTime &&
                        ((e.idleSecondsCounter = 0),
                        r.on(
                            'mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle',
                            function (t) {
                                (e.idleSecondsCounter = 0),
                                    e.isIdle && e.showControls(),
                                    (e.isIdle = !1);
                            }
                        ),
                        (e.idleInterval = t.setInterval(function () {
                            ++e.idleSecondsCounter >=
                                e.group[e.currIndex].opts.idleTime &&
                                !e.isDragging &&
                                ((e.isIdle = !0),
                                (e.idleSecondsCounter = 0),
                                e.hideControls());
                        }, 1e3)));
            },
            removeEvents: function () {
                var e = this;
                s.off('orientationchange.fb resize.fb'),
                    r.off('keydown.fb .fb-idle'),
                    this.$refs.container.off('.fb-close .fb-prev .fb-next'),
                    e.idleInterval &&
                        (t.clearInterval(e.idleInterval),
                        (e.idleInterval = null));
            },
            previous: function (t) {
                return this.jumpTo(this.currPos - 1, t);
            },
            next: function (t) {
                return this.jumpTo(this.currPos + 1, t);
            },
            jumpTo: function (t, e) {
                var o,
                    i,
                    a,
                    s,
                    r,
                    c,
                    l,
                    d,
                    u,
                    f = this,
                    h = f.group.length;
                if (
                    !(
                        f.isDragging ||
                        f.isClosing ||
                        (f.isAnimating && f.firstRun)
                    )
                ) {
                    if (
                        ((t = parseInt(t, 10)),
                        !(a = f.current ? f.current.opts.loop : f.opts.loop) &&
                            (t < 0 || t >= h))
                    )
                        return !1;
                    if (
                        ((o = f.firstRun = !Object.keys(f.slides).length),
                        (r = f.current),
                        (f.prevIndex = f.currIndex),
                        (f.prevPos = f.currPos),
                        (s = f.createSlide(t)),
                        h > 1 &&
                            ((a || s.index < h - 1) && f.createSlide(t + 1),
                            (a || s.index > 0) && f.createSlide(t - 1)),
                        (f.current = s),
                        (f.currIndex = s.index),
                        (f.currPos = s.pos),
                        f.trigger('beforeShow', o),
                        f.updateControls(),
                        (s.forcedDuration = void 0),
                        n.isNumeric(e)
                            ? (s.forcedDuration = e)
                            : (e =
                                  s.opts[
                                      o
                                          ? 'animationDuration'
                                          : 'transitionDuration'
                                  ]),
                        (e = parseInt(e, 10)),
                        (i = f.isMoved(s)),
                        s.$slide.addClass('fancybox-slide--current'),
                        o)
                    )
                        return (
                            s.opts.animationEffect &&
                                e &&
                                f.$refs.container.css(
                                    'transition-duration',
                                    e + 'ms'
                                ),
                            f.$refs.container
                                .addClass('fancybox-is-open')
                                .trigger('focus'),
                            f.loadSlide(s),
                            void f.preload('image')
                        );
                    (c = n.fancybox.getTranslate(r.$slide)),
                        (l = n.fancybox.getTranslate(f.$refs.stage)),
                        n.each(f.slides, function (t, e) {
                            n.fancybox.stop(e.$slide, !0);
                        }),
                        r.pos !== s.pos && (r.isComplete = !1),
                        r.$slide.removeClass(
                            'fancybox-slide--complete fancybox-slide--current'
                        ),
                        i
                            ? ((u =
                                  c.left -
                                  (r.pos * c.width + r.pos * r.opts.gutter)),
                              n.each(f.slides, function (t, o) {
                                  o.$slide
                                      .removeClass('fancybox-animated')
                                      .removeClass(function (t, e) {
                                          return (
                                              e.match(
                                                  /(^|\s)fancybox-fx-\S+/g
                                              ) || []
                                          ).join(' ');
                                      });
                                  var i =
                                      o.pos * c.width + o.pos * o.opts.gutter;
                                  n.fancybox.setTranslate(o.$slide, {
                                      top: 0,
                                      left: i - l.left + u,
                                  }),
                                      o.pos !== s.pos &&
                                          o.$slide.addClass(
                                              'fancybox-slide--' +
                                                  (o.pos > s.pos
                                                      ? 'next'
                                                      : 'previous')
                                          ),
                                      p(o.$slide),
                                      n.fancybox.animate(
                                          o.$slide,
                                          {
                                              top: 0,
                                              left:
                                                  (o.pos - s.pos) * c.width +
                                                  (o.pos - s.pos) *
                                                      o.opts.gutter,
                                          },
                                          e,
                                          function () {
                                              o.$slide
                                                  .css({
                                                      transform: '',
                                                      opacity: '',
                                                  })
                                                  .removeClass(
                                                      'fancybox-slide--next fancybox-slide--previous'
                                                  ),
                                                  o.pos === f.currPos &&
                                                      f.complete();
                                          }
                                      );
                              }))
                            : e &&
                              s.opts.transitionEffect &&
                              ((d =
                                  'fancybox-animated fancybox-fx-' +
                                  s.opts.transitionEffect),
                              r.$slide.addClass(
                                  'fancybox-slide--' +
                                      (r.pos > s.pos ? 'next' : 'previous')
                              ),
                              n.fancybox.animate(
                                  r.$slide,
                                  d,
                                  e,
                                  function () {
                                      r.$slide
                                          .removeClass(d)
                                          .removeClass(
                                              'fancybox-slide--next fancybox-slide--previous'
                                          );
                                  },
                                  !1
                              )),
                        s.isLoaded ? f.revealContent(s) : f.loadSlide(s),
                        f.preload('image');
                }
            },
            createSlide: function (t) {
                var e,
                    o,
                    i = this;
                return (
                    (o = t % i.group.length),
                    (o = o < 0 ? i.group.length + o : o),
                    !i.slides[t] &&
                        i.group[o] &&
                        ((e = n('<div class="fancybox-slide"></div>').appendTo(
                            i.$refs.stage
                        )),
                        (i.slides[t] = n.extend(!0, {}, i.group[o], {
                            pos: t,
                            $slide: e,
                            isLoaded: !1,
                        })),
                        i.updateSlide(i.slides[t])),
                    i.slides[t]
                );
            },
            scaleToActual: function (t, e, o) {
                var i,
                    a,
                    s,
                    r,
                    c,
                    l = this,
                    d = l.current,
                    u = d.$content,
                    f = n.fancybox.getTranslate(d.$slide).width,
                    p = n.fancybox.getTranslate(d.$slide).height,
                    h = d.width,
                    g = d.height;
                l.isAnimating ||
                    l.isMoved() ||
                    !u ||
                    'image' != d.type ||
                    !d.isLoaded ||
                    d.hasError ||
                    ((l.isAnimating = !0),
                    n.fancybox.stop(u),
                    (t = void 0 === t ? 0.5 * f : t),
                    (e = void 0 === e ? 0.5 * p : e),
                    (i = n.fancybox.getTranslate(u)),
                    (i.top -= n.fancybox.getTranslate(d.$slide).top),
                    (i.left -= n.fancybox.getTranslate(d.$slide).left),
                    (r = h / i.width),
                    (c = g / i.height),
                    (a = 0.5 * f - 0.5 * h),
                    (s = 0.5 * p - 0.5 * g),
                    h > f &&
                        ((a = i.left * r - (t * r - t)),
                        a > 0 && (a = 0),
                        a < f - h && (a = f - h)),
                    g > p &&
                        ((s = i.top * c - (e * c - e)),
                        s > 0 && (s = 0),
                        s < p - g && (s = p - g)),
                    l.updateCursor(h, g),
                    n.fancybox.animate(
                        u,
                        { top: s, left: a, scaleX: r, scaleY: c },
                        o || 366,
                        function () {
                            l.isAnimating = !1;
                        }
                    ),
                    l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop());
            },
            scaleToFit: function (t) {
                var e,
                    o = this,
                    i = o.current,
                    a = i.$content;
                o.isAnimating ||
                    o.isMoved() ||
                    !a ||
                    'image' != i.type ||
                    !i.isLoaded ||
                    i.hasError ||
                    ((o.isAnimating = !0),
                    n.fancybox.stop(a),
                    (e = o.getFitPos(i)),
                    o.updateCursor(e.width, e.height),
                    n.fancybox.animate(
                        a,
                        {
                            top: e.top,
                            left: e.left,
                            scaleX: e.width / a.width(),
                            scaleY: e.height / a.height(),
                        },
                        t || 366,
                        function () {
                            o.isAnimating = !1;
                        }
                    ));
            },
            getFitPos: function (t) {
                var e,
                    o,
                    i,
                    a,
                    s = this,
                    r = t.$content,
                    c = t.$slide,
                    l = t.width || t.opts.width,
                    d = t.height || t.opts.height,
                    u = {};
                return (
                    !!(t.isLoaded && r && r.length) &&
                    ((e = n.fancybox.getTranslate(s.$refs.stage).width),
                    (o = n.fancybox.getTranslate(s.$refs.stage).height),
                    (e -=
                        parseFloat(c.css('paddingLeft')) +
                        parseFloat(c.css('paddingRight')) +
                        parseFloat(r.css('marginLeft')) +
                        parseFloat(r.css('marginRight'))),
                    (o -=
                        parseFloat(c.css('paddingTop')) +
                        parseFloat(c.css('paddingBottom')) +
                        parseFloat(r.css('marginTop')) +
                        parseFloat(r.css('marginBottom'))),
                    (l && d) || ((l = e), (d = o)),
                    (i = Math.min(1, e / l, o / d)),
                    (l *= i),
                    (d *= i),
                    l > e - 0.5 && (l = e),
                    d > o - 0.5 && (d = o),
                    'image' === t.type
                        ? ((u.top =
                              Math.floor(0.5 * (o - d)) +
                              parseFloat(c.css('paddingTop'))),
                          (u.left =
                              Math.floor(0.5 * (e - l)) +
                              parseFloat(c.css('paddingLeft'))))
                        : 'video' === t.contentType &&
                          ((a =
                              t.opts.width && t.opts.height
                                  ? l / d
                                  : t.opts.ratio || 16 / 9),
                          d > l / a ? (d = l / a) : l > d * a && (l = d * a)),
                    (u.width = l),
                    (u.height = d),
                    u)
                );
            },
            update: function (t) {
                var e = this;
                n.each(e.slides, function (n, o) {
                    e.updateSlide(o, t);
                });
            },
            updateSlide: function (t, e) {
                var o = this,
                    i = t && t.$content,
                    a = t.width || t.opts.width,
                    s = t.height || t.opts.height,
                    r = t.$slide;
                o.adjustCaption(t),
                    i &&
                        (a || s || 'video' === t.contentType) &&
                        !t.hasError &&
                        (n.fancybox.stop(i),
                        n.fancybox.setTranslate(i, o.getFitPos(t)),
                        t.pos === o.currPos &&
                            ((o.isAnimating = !1), o.updateCursor())),
                    o.adjustLayout(t),
                    r.length &&
                        (r.trigger('refresh'),
                        t.pos === o.currPos &&
                            o.$refs.toolbar
                                .add(
                                    o.$refs.navigation.find(
                                        '.fancybox-button--arrow_right'
                                    )
                                )
                                .toggleClass(
                                    'compensate-for-scrollbar',
                                    r.get(0).scrollHeight >
                                        r.get(0).clientHeight
                                )),
                    o.trigger('onUpdate', t, e);
            },
            centerSlide: function (t) {
                var e = this,
                    o = e.current,
                    i = o.$slide;
                !e.isClosing &&
                    o &&
                    (i.siblings().css({ transform: '', opacity: '' }),
                    i
                        .parent()
                        .children()
                        .removeClass(
                            'fancybox-slide--previous fancybox-slide--next'
                        ),
                    n.fancybox.animate(
                        i,
                        { top: 0, left: 0, opacity: 1 },
                        void 0 === t ? 0 : t,
                        function () {
                            i.css({ transform: '', opacity: '' }),
                                o.isComplete || e.complete();
                        },
                        !1
                    ));
            },
            isMoved: function (t) {
                var e,
                    o,
                    i = t || this.current;
                return (
                    !!i &&
                    ((o = n.fancybox.getTranslate(this.$refs.stage)),
                    (e = n.fancybox.getTranslate(i.$slide)),
                    !i.$slide.hasClass('fancybox-animated') &&
                        (Math.abs(e.top - o.top) > 0.5 ||
                            Math.abs(e.left - o.left) > 0.5))
                );
            },
            updateCursor: function (t, e) {
                var o,
                    i,
                    a = this,
                    s = a.current,
                    r = a.$refs.container;
                s &&
                    !a.isClosing &&
                    a.Guestures &&
                    (r.removeClass(
                        'fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan'
                    ),
                    (o = a.canPan(t, e)),
                    (i = !!o || a.isZoomable()),
                    r.toggleClass('fancybox-is-zoomable', i),
                    n('[data-fancybox-zoom]').prop('disabled', !i),
                    o
                        ? r.addClass('fancybox-can-pan')
                        : i &&
                          ('zoom' === s.opts.clickContent ||
                              (n.isFunction(s.opts.clickContent) &&
                                  'zoom' == s.opts.clickContent(s)))
                        ? r.addClass('fancybox-can-zoomIn')
                        : s.opts.touch &&
                          (s.opts.touch.vertical || a.group.length > 1) &&
                          'video' !== s.contentType &&
                          r.addClass('fancybox-can-swipe'));
            },
            isZoomable: function () {
                var t,
                    e = this,
                    n = e.current;
                if (n && !e.isClosing && 'image' === n.type && !n.hasError) {
                    if (!n.isLoaded) return !0;
                    if (
                        (t = e.getFitPos(n)) &&
                        (n.width > t.width || n.height > t.height)
                    )
                        return !0;
                }
                return !1;
            },
            isScaledDown: function (t, e) {
                var o = this,
                    i = !1,
                    a = o.current,
                    s = a.$content;
                return (
                    void 0 !== t && void 0 !== e
                        ? (i = t < a.width && e < a.height)
                        : s &&
                          ((i = n.fancybox.getTranslate(s)),
                          (i = i.width < a.width && i.height < a.height)),
                    i
                );
            },
            canPan: function (t, e) {
                var o = this,
                    i = o.current,
                    a = null,
                    s = !1;
                return (
                    'image' === i.type &&
                        (i.isComplete || (t && e)) &&
                        !i.hasError &&
                        ((s = o.getFitPos(i)),
                        void 0 !== t && void 0 !== e
                            ? (a = { width: t, height: e })
                            : i.isComplete &&
                              (a = n.fancybox.getTranslate(i.$content)),
                        a &&
                            s &&
                            (s =
                                Math.abs(a.width - s.width) > 1.5 ||
                                Math.abs(a.height - s.height) > 1.5)),
                    s
                );
            },
            loadSlide: function (t) {
                var e,
                    o,
                    i,
                    a = this;
                if (!t.isLoading && !t.isLoaded) {
                    if (((t.isLoading = !0), !1 === a.trigger('beforeLoad', t)))
                        return (t.isLoading = !1), !1;
                    switch (
                        ((e = t.type),
                        (o = t.$slide),
                        o
                            .off('refresh')
                            .trigger('onReset')
                            .addClass(t.opts.slideClass),
                        e)
                    ) {
                        case 'image':
                            a.setImage(t);
                            break;
                        case 'iframe':
                            a.setIframe(t);
                            break;
                        case 'html':
                            a.setContent(t, t.src || t.content);
                            break;
                        case 'video':
                            a.setContent(
                                t,
                                t.opts.video.tpl
                                    .replace(/\{\{src\}\}/gi, t.src)
                                    .replace(
                                        '{{format}}',
                                        t.opts.videoFormat ||
                                            t.opts.video.format ||
                                            ''
                                    )
                                    .replace('{{poster}}', t.thumb || '')
                            );
                            break;
                        case 'inline':
                            n(t.src).length
                                ? a.setContent(t, n(t.src))
                                : a.setError(t);
                            break;
                        case 'ajax':
                            a.showLoading(t),
                                (i = n.ajax(
                                    n.extend({}, t.opts.ajax.settings, {
                                        url: t.src,
                                        success: function (e, n) {
                                            'success' === n &&
                                                a.setContent(t, e);
                                        },
                                        error: function (e, n) {
                                            e && 'abort' !== n && a.setError(t);
                                        },
                                    })
                                )),
                                o.one('onReset', function () {
                                    i.abort();
                                });
                            break;
                        default:
                            a.setError(t);
                    }
                    return !0;
                }
            },
            setImage: function (t) {
                var o,
                    i = this;
                setTimeout(function () {
                    var e = t.$image;
                    i.isClosing ||
                        !t.isLoading ||
                        (e && e.length && e[0].complete) ||
                        t.hasError ||
                        i.showLoading(t);
                }, 50),
                    i.checkSrcset(t),
                    (t.$content = n('<div class="fancybox-content"></div>')
                        .addClass('fancybox-is-hidden')
                        .appendTo(t.$slide.addClass('fancybox-slide--image'))),
                    !1 !== t.opts.preload &&
                        t.opts.width &&
                        t.opts.height &&
                        t.thumb &&
                        ((t.width = t.opts.width),
                        (t.height = t.opts.height),
                        (o = e.createElement('img')),
                        (o.onerror = function () {
                            n(this).remove(), (t.$ghost = null);
                        }),
                        (o.onload = function () {
                            i.afterLoad(t);
                        }),
                        (t.$ghost = n(o)
                            .addClass('fancybox-image')
                            .appendTo(t.$content)
                            .attr('src', t.thumb))),
                    i.setBigImage(t);
            },
            checkSrcset: function (e) {
                var n,
                    o,
                    i,
                    a,
                    s = e.opts.srcset || e.opts.image.srcset;
                if (s) {
                    (i = t.devicePixelRatio || 1),
                        (a = t.innerWidth * i),
                        (o = s.split(',').map(function (t) {
                            var e = {};
                            return (
                                t
                                    .trim()
                                    .split(/\s+/)
                                    .forEach(function (t, n) {
                                        var o = parseInt(
                                            t.substring(0, t.length - 1),
                                            10
                                        );
                                        if (0 === n) return (e.url = t);
                                        o &&
                                            ((e.value = o),
                                            (e.postfix = t[t.length - 1]));
                                    }),
                                e
                            );
                        })),
                        o.sort(function (t, e) {
                            return t.value - e.value;
                        });
                    for (var r = 0; r < o.length; r++) {
                        var c = o[r];
                        if (
                            ('w' === c.postfix && c.value >= a) ||
                            ('x' === c.postfix && c.value >= i)
                        ) {
                            n = c;
                            break;
                        }
                    }
                    !n && o.length && (n = o[o.length - 1]),
                        n &&
                            ((e.src = n.url),
                            e.width &&
                                e.height &&
                                'w' == n.postfix &&
                                ((e.height = (e.width / e.height) * n.value),
                                (e.width = n.value)),
                            (e.opts.srcset = s));
                }
            },
            setBigImage: function (t) {
                var o = this,
                    i = e.createElement('img'),
                    a = n(i);
                (t.$image = a
                    .one('error', function () {
                        o.setError(t);
                    })
                    .one('load', function () {
                        var e;
                        t.$ghost ||
                            (o.resolveImageSlideSize(
                                t,
                                this.naturalWidth,
                                this.naturalHeight
                            ),
                            o.afterLoad(t)),
                            o.isClosing ||
                                (t.opts.srcset &&
                                    ((e = t.opts.sizes),
                                    (e && 'auto' !== e) ||
                                        (e =
                                            (t.width / t.height > 1 &&
                                            s.width() / s.height() > 1
                                                ? '100'
                                                : Math.round(
                                                      (t.width / t.height) * 100
                                                  )) + 'vw'),
                                    a
                                        .attr('sizes', e)
                                        .attr('srcset', t.opts.srcset)),
                                t.$ghost &&
                                    setTimeout(function () {
                                        t.$ghost &&
                                            !o.isClosing &&
                                            t.$ghost.hide();
                                    }, Math.min(
                                        300,
                                        Math.max(1e3, t.height / 1600)
                                    )),
                                o.hideLoading(t));
                    })
                    .addClass('fancybox-image')
                    .attr('src', t.src)
                    .appendTo(t.$content)),
                    (i.complete || 'complete' == i.readyState) &&
                    a.naturalWidth &&
                    a.naturalHeight
                        ? a.trigger('load')
                        : i.error && a.trigger('error');
            },
            resolveImageSlideSize: function (t, e, n) {
                var o = parseInt(t.opts.width, 10),
                    i = parseInt(t.opts.height, 10);
                (t.width = e),
                    (t.height = n),
                    o > 0 &&
                        ((t.width = o), (t.height = Math.floor((o * n) / e))),
                    i > 0 &&
                        ((t.width = Math.floor((i * e) / n)), (t.height = i));
            },
            setIframe: function (t) {
                var e,
                    o = this,
                    i = t.opts.iframe,
                    a = t.$slide;
                (t.$content = n(
                    '<div class="fancybox-content' +
                        (i.preload ? ' fancybox-is-hidden' : '') +
                        '"></div>'
                )
                    .css(i.css)
                    .appendTo(a)),
                    a.addClass('fancybox-slide--' + t.contentType),
                    (t.$iframe = e =
                        n(i.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                            .attr(i.attr)
                            .appendTo(t.$content)),
                    i.preload
                        ? (o.showLoading(t),
                          e.on('load.fb error.fb', function (e) {
                              (this.isReady = 1),
                                  t.$slide.trigger('refresh'),
                                  o.afterLoad(t);
                          }),
                          a.on('refresh.fb', function () {
                              var n,
                                  o,
                                  s = t.$content,
                                  r = i.css.width,
                                  c = i.css.height;
                              if (1 === e[0].isReady) {
                                  try {
                                      (n = e.contents()), (o = n.find('body'));
                                  } catch (t) {}
                                  o &&
                                      o.length &&
                                      o.children().length &&
                                      (a.css('overflow', 'visible'),
                                      s.css({
                                          width: '100%',
                                          'max-width': '100%',
                                          height: '9999px',
                                      }),
                                      void 0 === r &&
                                          (r = Math.ceil(
                                              Math.max(
                                                  o[0].clientWidth,
                                                  o.outerWidth(!0)
                                              )
                                          )),
                                      s
                                          .css('width', r || '')
                                          .css('max-width', ''),
                                      void 0 === c &&
                                          (c = Math.ceil(
                                              Math.max(
                                                  o[0].clientHeight,
                                                  o.outerHeight(!0)
                                              )
                                          )),
                                      s.css('height', c || ''),
                                      a.css('overflow', 'auto')),
                                      s.removeClass('fancybox-is-hidden');
                              }
                          }))
                        : o.afterLoad(t),
                    e.attr('src', t.src),
                    a.one('onReset', function () {
                        try {
                            n(this)
                                .find('iframe')
                                .hide()
                                .unbind()
                                .attr('src', '//about:blank');
                        } catch (t) {}
                        n(this).off('refresh.fb').empty(),
                            (t.isLoaded = !1),
                            (t.isRevealed = !1);
                    });
            },
            setContent: function (t, e) {
                var o = this;
                o.isClosing ||
                    (o.hideLoading(t),
                    t.$content && n.fancybox.stop(t.$content),
                    t.$slide.empty(),
                    l(e) && e.parent().length
                        ? ((e.hasClass('fancybox-content') ||
                              e.parent().hasClass('fancybox-content')) &&
                              e.parents('.fancybox-slide').trigger('onReset'),
                          (t.$placeholder = n('<div>').hide().insertAfter(e)),
                          e.css('display', 'inline-block'))
                        : t.hasError ||
                          ('string' === n.type(e) &&
                              (e = n('<div>').append(n.trim(e)).contents()),
                          t.opts.filter &&
                              (e = n('<div>').html(e).find(t.opts.filter))),
                    t.$slide.one('onReset', function () {
                        n(this).find('video,audio').trigger('pause'),
                            t.$placeholder &&
                                (t.$placeholder
                                    .after(
                                        e.removeClass('fancybox-content').hide()
                                    )
                                    .remove(),
                                (t.$placeholder = null)),
                            t.$smallBtn &&
                                (t.$smallBtn.remove(), (t.$smallBtn = null)),
                            t.hasError ||
                                (n(this).empty(),
                                (t.isLoaded = !1),
                                (t.isRevealed = !1));
                    }),
                    n(e).appendTo(t.$slide),
                    n(e).is('video,audio') &&
                        (n(e).addClass('fancybox-video'),
                        n(e).wrap('<div></div>'),
                        (t.contentType = 'video'),
                        (t.opts.width = t.opts.width || n(e).attr('width')),
                        (t.opts.height = t.opts.height || n(e).attr('height'))),
                    (t.$content = t.$slide
                        .children()
                        .filter(
                            'div,form,main,video,audio,article,.fancybox-content'
                        )
                        .first()),
                    t.$content.siblings().hide(),
                    t.$content.length ||
                        (t.$content = t.$slide
                            .wrapInner('<div></div>')
                            .children()
                            .first()),
                    t.$content.addClass('fancybox-content'),
                    t.$slide.addClass('fancybox-slide--' + t.contentType),
                    o.afterLoad(t));
            },
            setError: function (t) {
                (t.hasError = !0),
                    t.$slide
                        .trigger('onReset')
                        .removeClass('fancybox-slide--' + t.contentType)
                        .addClass('fancybox-slide--error'),
                    (t.contentType = 'html'),
                    this.setContent(t, this.translate(t, t.opts.errorTpl)),
                    t.pos === this.currPos && (this.isAnimating = !1);
            },
            showLoading: function (t) {
                var e = this;
                (t = t || e.current) &&
                    !t.$spinner &&
                    (t.$spinner = n(e.translate(e, e.opts.spinnerTpl))
                        .appendTo(t.$slide)
                        .hide()
                        .fadeIn('fast'));
            },
            hideLoading: function (t) {
                var e = this;
                (t = t || e.current) &&
                    t.$spinner &&
                    (t.$spinner.stop().remove(), delete t.$spinner);
            },
            afterLoad: function (t) {
                var e = this;
                e.isClosing ||
                    ((t.isLoading = !1),
                    (t.isLoaded = !0),
                    e.trigger('afterLoad', t),
                    e.hideLoading(t),
                    !t.opts.smallBtn ||
                        (t.$smallBtn && t.$smallBtn.length) ||
                        (t.$smallBtn = n(
                            e.translate(t, t.opts.btnTpl.smallBtn)
                        ).appendTo(t.$content)),
                    t.opts.protect &&
                        t.$content &&
                        !t.hasError &&
                        (t.$content.on('contextmenu.fb', function (t) {
                            return 2 == t.button && t.preventDefault(), !0;
                        }),
                        'image' === t.type &&
                            n(
                                '<div class="fancybox-spaceball"></div>'
                            ).appendTo(t.$content)),
                    e.adjustCaption(t),
                    e.adjustLayout(t),
                    t.pos === e.currPos && e.updateCursor(),
                    e.revealContent(t));
            },
            adjustCaption: function (t) {
                var e,
                    n = this,
                    o = t || n.current,
                    i = o.opts.caption,
                    a = o.opts.preventCaptionOverlap,
                    s = n.$refs.caption,
                    r = !1;
                s.toggleClass('fancybox-caption--separate', a),
                    a &&
                        i &&
                        i.length &&
                        (o.pos !== n.currPos
                            ? ((e = s.clone().appendTo(s.parent())),
                              e.children().eq(0).empty().html(i),
                              (r = e.outerHeight(!0)),
                              e.empty().remove())
                            : n.$caption && (r = n.$caption.outerHeight(!0)),
                        o.$slide.css('padding-bottom', r || ''));
            },
            adjustLayout: function (t) {
                var e,
                    n,
                    o,
                    i,
                    a = this,
                    s = t || a.current;
                s.isLoaded &&
                    !0 !== s.opts.disableLayoutFix &&
                    (s.$content.css('margin-bottom', ''),
                    s.$content.outerHeight() > s.$slide.height() + 0.5 &&
                        ((o = s.$slide[0].style['padding-bottom']),
                        (i = s.$slide.css('padding-bottom')),
                        parseFloat(i) > 0 &&
                            ((e = s.$slide[0].scrollHeight),
                            s.$slide.css('padding-bottom', 0),
                            Math.abs(e - s.$slide[0].scrollHeight) < 1 &&
                                (n = i),
                            s.$slide.css('padding-bottom', o))),
                    s.$content.css('margin-bottom', n));
            },
            revealContent: function (t) {
                var e,
                    o,
                    i,
                    a,
                    s = this,
                    r = t.$slide,
                    c = !1,
                    l = !1,
                    d = s.isMoved(t),
                    u = t.isRevealed;
                return (
                    (t.isRevealed = !0),
                    (e =
                        t.opts[
                            s.firstRun ? 'animationEffect' : 'transitionEffect'
                        ]),
                    (i =
                        t.opts[
                            s.firstRun
                                ? 'animationDuration'
                                : 'transitionDuration'
                        ]),
                    (i = parseInt(
                        void 0 === t.forcedDuration ? i : t.forcedDuration,
                        10
                    )),
                    (!d && t.pos === s.currPos && i) || (e = !1),
                    'zoom' === e &&
                        (t.pos === s.currPos &&
                        i &&
                        'image' === t.type &&
                        !t.hasError &&
                        (l = s.getThumbPos(t))
                            ? (c = s.getFitPos(t))
                            : (e = 'fade')),
                    'zoom' === e
                        ? ((s.isAnimating = !0),
                          (c.scaleX = c.width / l.width),
                          (c.scaleY = c.height / l.height),
                          (a = t.opts.zoomOpacity),
                          'auto' == a &&
                              (a =
                                  Math.abs(
                                      t.width / t.height - l.width / l.height
                                  ) > 0.1),
                          a && ((l.opacity = 0.1), (c.opacity = 1)),
                          n.fancybox.setTranslate(
                              t.$content.removeClass('fancybox-is-hidden'),
                              l
                          ),
                          p(t.$content),
                          void n.fancybox.animate(
                              t.$content,
                              c,
                              i,
                              function () {
                                  (s.isAnimating = !1), s.complete();
                              }
                          ))
                        : (s.updateSlide(t),
                          e
                              ? (n.fancybox.stop(r),
                                (o =
                                    'fancybox-slide--' +
                                    (t.pos >= s.prevPos ? 'next' : 'previous') +
                                    ' fancybox-animated fancybox-fx-' +
                                    e),
                                r
                                    .addClass(o)
                                    .removeClass('fancybox-slide--current'),
                                t.$content.removeClass('fancybox-is-hidden'),
                                p(r),
                                'image' !== t.type && t.$content.hide().show(0),
                                void n.fancybox.animate(
                                    r,
                                    'fancybox-slide--current',
                                    i,
                                    function () {
                                        r.removeClass(o).css({
                                            transform: '',
                                            opacity: '',
                                        }),
                                            t.pos === s.currPos && s.complete();
                                    },
                                    !0
                                ))
                              : (t.$content.removeClass('fancybox-is-hidden'),
                                u ||
                                    !d ||
                                    'image' !== t.type ||
                                    t.hasError ||
                                    t.$content.hide().fadeIn('fast'),
                                void (t.pos === s.currPos && s.complete())))
                );
            },
            getThumbPos: function (t) {
                var e,
                    o,
                    i,
                    a,
                    s,
                    r = !1,
                    c = t.$thumb;
                return (
                    !(!c || !g(c[0])) &&
                    ((e = n.fancybox.getTranslate(c)),
                    (o = parseFloat(c.css('border-top-width') || 0)),
                    (i = parseFloat(c.css('border-right-width') || 0)),
                    (a = parseFloat(c.css('border-bottom-width') || 0)),
                    (s = parseFloat(c.css('border-left-width') || 0)),
                    (r = {
                        top: e.top + o,
                        left: e.left + s,
                        width: e.width - i - s,
                        height: e.height - o - a,
                        scaleX: 1,
                        scaleY: 1,
                    }),
                    e.width > 0 && e.height > 0 && r)
                );
            },
            complete: function () {
                var t,
                    e = this,
                    o = e.current,
                    i = {};
                !e.isMoved() &&
                    o.isLoaded &&
                    (o.isComplete ||
                        ((o.isComplete = !0),
                        o.$slide.siblings().trigger('onReset'),
                        e.preload('inline'),
                        p(o.$slide),
                        o.$slide.addClass('fancybox-slide--complete'),
                        n.each(e.slides, function (t, o) {
                            o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1
                                ? (i[o.pos] = o)
                                : o &&
                                  (n.fancybox.stop(o.$slide),
                                  o.$slide.off().remove());
                        }),
                        (e.slides = i)),
                    (e.isAnimating = !1),
                    e.updateCursor(),
                    e.trigger('afterShow'),
                    o.opts.video.autoStart &&
                        o.$slide
                            .find('video,audio')
                            .filter(':visible:first')
                            .trigger('play')
                            .one('ended', function () {
                                Document.exitFullscreen
                                    ? Document.exitFullscreen()
                                    : this.webkitExitFullscreen &&
                                      this.webkitExitFullscreen(),
                                    e.next();
                            }),
                    o.opts.autoFocus &&
                        'html' === o.contentType &&
                        ((t = o.$content.find(
                            'input[autofocus]:enabled:visible:first'
                        )),
                        t.length ? t.trigger('focus') : e.focus(null, !0)),
                    o.$slide.scrollTop(0).scrollLeft(0));
            },
            preload: function (t) {
                var e,
                    n,
                    o = this;
                o.group.length < 2 ||
                    ((n = o.slides[o.currPos + 1]),
                    (e = o.slides[o.currPos - 1]),
                    e && e.type === t && o.loadSlide(e),
                    n && n.type === t && o.loadSlide(n));
            },
            focus: function (t, o) {
                var i,
                    a,
                    s = this,
                    r = [
                        'a[href]',
                        'area[href]',
                        'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
                        'select:not([disabled]):not([aria-hidden])',
                        'textarea:not([disabled]):not([aria-hidden])',
                        'button:not([disabled]):not([aria-hidden])',
                        'iframe',
                        'object',
                        'embed',
                        'video',
                        'audio',
                        '[contenteditable]',
                        '[tabindex]:not([tabindex^="-"])',
                    ].join(',');
                s.isClosing ||
                    ((i =
                        !t && s.current && s.current.isComplete
                            ? s.current.$slide.find(
                                  '*:visible' +
                                      (o ? ':not(.fancybox-close-small)' : '')
                              )
                            : s.$refs.container.find('*:visible')),
                    (i = i.filter(r).filter(function () {
                        return (
                            'hidden' !== n(this).css('visibility') &&
                            !n(this).hasClass('disabled')
                        );
                    })),
                    i.length
                        ? ((a = i.index(e.activeElement)),
                          t && t.shiftKey
                              ? (a < 0 || 0 == a) &&
                                (t.preventDefault(),
                                i.eq(i.length - 1).trigger('focus'))
                              : (a < 0 || a == i.length - 1) &&
                                (t && t.preventDefault(),
                                i.eq(0).trigger('focus')))
                        : s.$refs.container.trigger('focus'));
            },
            activate: function () {
                var t = this;
                n('.fancybox-container').each(function () {
                    var e = n(this).data('FancyBox');
                    e &&
                        e.id !== t.id &&
                        !e.isClosing &&
                        (e.trigger('onDeactivate'),
                        e.removeEvents(),
                        (e.isVisible = !1));
                }),
                    (t.isVisible = !0),
                    (t.current || t.isIdle) && (t.update(), t.updateControls()),
                    t.trigger('onActivate'),
                    t.addEvents();
            },
            close: function (t, e) {
                var o,
                    i,
                    a,
                    s,
                    r,
                    c,
                    l,
                    u = this,
                    f = u.current,
                    h = function () {
                        u.cleanUp(t);
                    };
                return (
                    !u.isClosing &&
                    ((u.isClosing = !0),
                    !1 === u.trigger('beforeClose', t)
                        ? ((u.isClosing = !1),
                          d(function () {
                              u.update();
                          }),
                          !1)
                        : (u.removeEvents(),
                          (a = f.$content),
                          (o = f.opts.animationEffect),
                          (i = n.isNumeric(e)
                              ? e
                              : o
                              ? f.opts.animationDuration
                              : 0),
                          f.$slide.removeClass(
                              'fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated'
                          ),
                          !0 !== t ? n.fancybox.stop(f.$slide) : (o = !1),
                          f.$slide.siblings().trigger('onReset').remove(),
                          i &&
                              u.$refs.container
                                  .removeClass('fancybox-is-open')
                                  .addClass('fancybox-is-closing')
                                  .css('transition-duration', i + 'ms'),
                          u.hideLoading(f),
                          u.hideControls(!0),
                          u.updateCursor(),
                          'zoom' !== o ||
                              (a &&
                                  i &&
                                  'image' === f.type &&
                                  !u.isMoved() &&
                                  !f.hasError &&
                                  (l = u.getThumbPos(f))) ||
                              (o = 'fade'),
                          'zoom' === o
                              ? (n.fancybox.stop(a),
                                (s = n.fancybox.getTranslate(a)),
                                (c = {
                                    top: s.top,
                                    left: s.left,
                                    scaleX: s.width / l.width,
                                    scaleY: s.height / l.height,
                                    width: l.width,
                                    height: l.height,
                                }),
                                (r = f.opts.zoomOpacity),
                                'auto' == r &&
                                    (r =
                                        Math.abs(
                                            f.width / f.height -
                                                l.width / l.height
                                        ) > 0.1),
                                r && (l.opacity = 0),
                                n.fancybox.setTranslate(a, c),
                                p(a),
                                n.fancybox.animate(a, l, i, h),
                                !0)
                              : (o && i
                                    ? n.fancybox.animate(
                                          f.$slide
                                              .addClass(
                                                  'fancybox-slide--previous'
                                              )
                                              .removeClass(
                                                  'fancybox-slide--current'
                                              ),
                                          'fancybox-animated fancybox-fx-' + o,
                                          i,
                                          h
                                      )
                                    : !0 === t
                                    ? setTimeout(h, i)
                                    : h(),
                                !0)))
                );
            },
            cleanUp: function (e) {
                var o,
                    i,
                    a,
                    s = this,
                    r = s.current.opts.$orig;
                s.current.$slide.trigger('onReset'),
                    s.$refs.container.empty().remove(),
                    s.trigger('afterClose', e),
                    s.current.opts.backFocus &&
                        ((r && r.length && r.is(':visible')) ||
                            (r = s.$trigger),
                        r &&
                            r.length &&
                            ((i = t.scrollX),
                            (a = t.scrollY),
                            r.trigger('focus'),
                            n('html, body').scrollTop(a).scrollLeft(i))),
                    (s.current = null),
                    (o = n.fancybox.getInstance()),
                    o
                        ? o.activate()
                        : (n('body').removeClass(
                              'fancybox-active compensate-for-scrollbar'
                          ),
                          n('#fancybox-style-noscroll').remove());
            },
            trigger: function (t, e) {
                var o,
                    i = Array.prototype.slice.call(arguments, 1),
                    a = this,
                    s = e && e.opts ? e : a.current;
                if (
                    (s ? i.unshift(s) : (s = a),
                    i.unshift(a),
                    n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)),
                    !1 === o)
                )
                    return o;
                'afterClose' !== t && a.$refs
                    ? a.$refs.container.trigger(t + '.fb', i)
                    : r.trigger(t + '.fb', i);
            },
            updateControls: function () {
                var t = this,
                    o = t.current,
                    i = o.index,
                    a = t.$refs.container,
                    s = t.$refs.caption,
                    r = o.opts.caption;
                o.$slide.trigger('refresh'),
                    r && r.length
                        ? ((t.$caption = s), s.children().eq(0).html(r))
                        : (t.$caption = null),
                    t.hasHiddenControls || t.isIdle || t.showControls(),
                    a.find('[data-fancybox-count]').html(t.group.length),
                    a.find('[data-fancybox-index]').html(i + 1),
                    a
                        .find('[data-fancybox-prev]')
                        .prop('disabled', !o.opts.loop && i <= 0),
                    a
                        .find('[data-fancybox-next]')
                        .prop(
                            'disabled',
                            !o.opts.loop && i >= t.group.length - 1
                        ),
                    'image' === o.type
                        ? a
                              .find('[data-fancybox-zoom]')
                              .show()
                              .end()
                              .find('[data-fancybox-download]')
                              .attr('href', o.opts.image.src || o.src)
                              .show()
                        : o.opts.toolbar &&
                          a
                              .find(
                                  '[data-fancybox-download],[data-fancybox-zoom]'
                              )
                              .hide(),
                    n(e.activeElement).is(':hidden,[disabled]') &&
                        t.$refs.container.trigger('focus');
            },
            hideControls: function (t) {
                var e = this,
                    n = ['infobar', 'toolbar', 'nav'];
                (!t && e.current.opts.preventCaptionOverlap) ||
                    n.push('caption'),
                    this.$refs.container.removeClass(
                        n
                            .map(function (t) {
                                return 'fancybox-show-' + t;
                            })
                            .join(' ')
                    ),
                    (this.hasHiddenControls = !0);
            },
            showControls: function () {
                var t = this,
                    e = t.current ? t.current.opts : t.opts,
                    n = t.$refs.container;
                (t.hasHiddenControls = !1),
                    (t.idleSecondsCounter = 0),
                    n
                        .toggleClass(
                            'fancybox-show-toolbar',
                            !(!e.toolbar || !e.buttons)
                        )
                        .toggleClass(
                            'fancybox-show-infobar',
                            !!(e.infobar && t.group.length > 1)
                        )
                        .toggleClass('fancybox-show-caption', !!t.$caption)
                        .toggleClass(
                            'fancybox-show-nav',
                            !!(e.arrows && t.group.length > 1)
                        )
                        .toggleClass('fancybox-is-modal', !!e.modal);
            },
            toggleControls: function () {
                this.hasHiddenControls
                    ? this.showControls()
                    : this.hideControls();
            },
        }),
            (n.fancybox = {
                version: '3.5.7',
                defaults: a,
                getInstance: function (t) {
                    var e = n(
                            '.fancybox-container:not(".fancybox-is-closing"):last'
                        ).data('FancyBox'),
                        o = Array.prototype.slice.call(arguments, 1);
                    return (
                        e instanceof b &&
                        ('string' === n.type(t)
                            ? e[t].apply(e, o)
                            : 'function' === n.type(t) && t.apply(e, o),
                        e)
                    );
                },
                open: function (t, e, n) {
                    return new b(t, e, n);
                },
                close: function (t) {
                    var e = this.getInstance();
                    e && (e.close(), !0 === t && this.close(t));
                },
                destroy: function () {
                    this.close(!0), r.add('body').off('click.fb-start', '**');
                },
                isMobile:
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent
                    ),
                use3d: (function () {
                    var n = e.createElement('div');
                    return (
                        t.getComputedStyle &&
                        t.getComputedStyle(n) &&
                        t.getComputedStyle(n).getPropertyValue('transform') &&
                        !(e.documentMode && e.documentMode < 11)
                    );
                })(),
                getTranslate: function (t) {
                    var e;
                    return (
                        !(!t || !t.length) &&
                        ((e = t[0].getBoundingClientRect()),
                        {
                            top: e.top || 0,
                            left: e.left || 0,
                            width: e.width,
                            height: e.height,
                            opacity: parseFloat(t.css('opacity')),
                        })
                    );
                },
                setTranslate: function (t, e) {
                    var n = '',
                        o = {};
                    if (t && e)
                        return (
                            (void 0 === e.left && void 0 === e.top) ||
                                ((n =
                                    (void 0 === e.left
                                        ? t.position().left
                                        : e.left) +
                                    'px, ' +
                                    (void 0 === e.top
                                        ? t.position().top
                                        : e.top) +
                                    'px'),
                                (n = this.use3d
                                    ? 'translate3d(' + n + ', 0px)'
                                    : 'translate(' + n + ')')),
                            void 0 !== e.scaleX && void 0 !== e.scaleY
                                ? (n +=
                                      ' scale(' +
                                      e.scaleX +
                                      ', ' +
                                      e.scaleY +
                                      ')')
                                : void 0 !== e.scaleX &&
                                  (n += ' scaleX(' + e.scaleX + ')'),
                            n.length && (o.transform = n),
                            void 0 !== e.opacity && (o.opacity = e.opacity),
                            void 0 !== e.width && (o.width = e.width),
                            void 0 !== e.height && (o.height = e.height),
                            t.css(o)
                        );
                },
                animate: function (t, e, o, i, a) {
                    var s,
                        r = this;
                    n.isFunction(o) && ((i = o), (o = null)),
                        r.stop(t),
                        (s = r.getTranslate(t)),
                        t.on(f, function (c) {
                            (!c ||
                                !c.originalEvent ||
                                (t.is(c.originalEvent.target) &&
                                    'z-index' !=
                                        c.originalEvent.propertyName)) &&
                                (r.stop(t),
                                n.isNumeric(o) &&
                                    t.css('transition-duration', ''),
                                n.isPlainObject(e)
                                    ? void 0 !== e.scaleX &&
                                      void 0 !== e.scaleY &&
                                      r.setTranslate(t, {
                                          top: e.top,
                                          left: e.left,
                                          width: s.width * e.scaleX,
                                          height: s.height * e.scaleY,
                                          scaleX: 1,
                                          scaleY: 1,
                                      })
                                    : !0 !== a && t.removeClass(e),
                                n.isFunction(i) && i(c));
                        }),
                        n.isNumeric(o) &&
                            t.css('transition-duration', o + 'ms'),
                        n.isPlainObject(e)
                            ? (void 0 !== e.scaleX &&
                                  void 0 !== e.scaleY &&
                                  (delete e.width,
                                  delete e.height,
                                  t
                                      .parent()
                                      .hasClass('fancybox-slide--image') &&
                                      t
                                          .parent()
                                          .addClass('fancybox-is-scaling')),
                              n.fancybox.setTranslate(t, e))
                            : t.addClass(e),
                        t.data(
                            'timer',
                            setTimeout(function () {
                                t.trigger(f);
                            }, o + 33)
                        );
                },
                stop: function (t, e) {
                    t &&
                        t.length &&
                        (clearTimeout(t.data('timer')),
                        e && t.trigger(f),
                        t.off(f).css('transition-duration', ''),
                        t.parent().removeClass('fancybox-is-scaling'));
                },
            }),
            (n.fn.fancybox = function (t) {
                var e;
                return (
                    (t = t || {}),
                    (e = t.selector || !1),
                    e
                        ? n('body')
                              .off('click.fb-start', e)
                              .on('click.fb-start', e, { options: t }, i)
                        : this.off('click.fb-start').on(
                              'click.fb-start',
                              { items: this, options: t },
                              i
                          ),
                    this
                );
            }),
            r.on('click.fb-start', '[data-fancybox]', i),
            r.on('click.fb-start', '[data-fancybox-trigger]', function (t) {
                n(
                    '[data-fancybox="' +
                        n(this).attr('data-fancybox-trigger') +
                        '"]'
                )
                    .eq(n(this).attr('data-fancybox-index') || 0)
                    .trigger('click.fb-start', { $trigger: n(this) });
            }),
            (function () {
                var t = null;
                r.on(
                    'mousedown mouseup focus blur',
                    '.fancybox-button',
                    function (e) {
                        switch (e.type) {
                            case 'mousedown':
                                t = n(this);
                                break;
                            case 'mouseup':
                                t = null;
                                break;
                            case 'focusin':
                                n('.fancybox-button').removeClass(
                                    'fancybox-focus'
                                ),
                                    n(this).is(t) ||
                                        n(this).is('[disabled]') ||
                                        n(this).addClass('fancybox-focus');
                                break;
                            case 'focusout':
                                n('.fancybox-button').removeClass(
                                    'fancybox-focus'
                                );
                        }
                    }
                );
            })();
    }
})(window, document, jQuery),
    (function (t) {
        'use strict';
        var e = {
                youtube: {
                    matcher:
                        /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                    params: {
                        autoplay: 1,
                        autohide: 1,
                        fs: 1,
                        rel: 0,
                        hd: 1,
                        wmode: 'transparent',
                        enablejsapi: 1,
                        html5: 1,
                    },
                    paramPlace: 8,
                    type: 'iframe',
                    url: 'https://www.youtube-nocookie.com/embed/$4',
                    thumb: 'https://img.youtube.com/vi/$4/hqdefault.jpg',
                },
                vimeo: {
                    matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                    params: {
                        autoplay: 1,
                        hd: 1,
                        show_title: 1,
                        show_byline: 1,
                        show_portrait: 0,
                        fullscreen: 1,
                    },
                    paramPlace: 3,
                    type: 'iframe',
                    url: '//player.vimeo.com/video/$2',
                },
                instagram: {
                    matcher:
                        /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                    type: 'image',
                    url: '//$1/p/$2/media/?size=l',
                },
                gmap_place: {
                    matcher:
                        /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                    type: 'iframe',
                    url: function (t) {
                        return (
                            '//maps.google.' +
                            t[2] +
                            '/?ll=' +
                            (t[9]
                                ? t[9] +
                                  '&z=' +
                                  Math.floor(t[10]) +
                                  (t[12] ? t[12].replace(/^\//, '&') : '')
                                : t[12] + ''
                            ).replace(/\?/, '&') +
                            '&output=' +
                            (t[12] && t[12].indexOf('layer=c') > 0
                                ? 'svembed'
                                : 'embed')
                        );
                    },
                },
                gmap_search: {
                    matcher:
                        /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                    type: 'iframe',
                    url: function (t) {
                        return (
                            '//maps.google.' +
                            t[2] +
                            '/maps?q=' +
                            t[5].replace('query=', 'q=').replace('api=1', '') +
                            '&output=embed'
                        );
                    },
                },
            },
            n = function (e, n, o) {
                if (e)
                    return (
                        (o = o || ''),
                        'object' === t.type(o) && (o = t.param(o, !0)),
                        t.each(n, function (t, n) {
                            e = e.replace('$' + t, n || '');
                        }),
                        o.length && (e += (e.indexOf('?') > 0 ? '&' : '?') + o),
                        e
                    );
            };
        t(document).on('objectNeedsType.fb', function (o, i, a) {
            var s,
                r,
                c,
                l,
                d,
                u,
                f,
                p = a.src || '',
                h = !1;
            (s = t.extend(!0, {}, e, a.opts.media)),
                t.each(s, function (e, o) {
                    if ((c = p.match(o.matcher))) {
                        if (
                            ((h = o.type),
                            (f = e),
                            (u = {}),
                            o.paramPlace && c[o.paramPlace])
                        ) {
                            (d = c[o.paramPlace]),
                                '?' == d[0] && (d = d.substring(1)),
                                (d = d.split('&'));
                            for (var i = 0; i < d.length; ++i) {
                                var s = d[i].split('=', 2);
                                2 == s.length &&
                                    (u[s[0]] = decodeURIComponent(
                                        s[1].replace(/\+/g, ' ')
                                    ));
                            }
                        }
                        return (
                            (l = t.extend(!0, {}, o.params, a.opts[e], u)),
                            (p =
                                'function' === t.type(o.url)
                                    ? o.url.call(this, c, l, a)
                                    : n(o.url, c, l)),
                            (r =
                                'function' === t.type(o.thumb)
                                    ? o.thumb.call(this, c, l, a)
                                    : n(o.thumb, c)),
                            'youtube' === e
                                ? (p = p.replace(
                                      /&t=((\d+)m)?(\d+)s/,
                                      function (t, e, n, o) {
                                          return (
                                              '&start=' +
                                              ((n ? 60 * parseInt(n, 10) : 0) +
                                                  parseInt(o, 10))
                                          );
                                      }
                                  ))
                                : 'vimeo' === e && (p = p.replace('&%23', '#')),
                            !1
                        );
                    }
                }),
                h
                    ? (a.opts.thumb ||
                          (a.opts.$thumb && a.opts.$thumb.length) ||
                          (a.opts.thumb = r),
                      'iframe' === h &&
                          (a.opts = t.extend(!0, a.opts, {
                              iframe: {
                                  preload: !1,
                                  attr: { scrolling: 'no' },
                              },
                          })),
                      t.extend(a, {
                          type: h,
                          src: p,
                          origSrc: a.src,
                          contentSource: f,
                          contentType:
                              'image' === h
                                  ? 'image'
                                  : 'gmap_place' == f || 'gmap_search' == f
                                  ? 'map'
                                  : 'video',
                      }))
                    : p && (a.type = a.opts.defaultType);
        });
        var o = {
            youtube: {
                src: 'https://www.youtube.com/iframe_api',
                class: 'YT',
                loading: !1,
                loaded: !1,
            },
            vimeo: {
                src: 'https://player.vimeo.com/api/player.js',
                class: 'Vimeo',
                loading: !1,
                loaded: !1,
            },
            load: function (t) {
                var e,
                    n = this;
                if (this[t].loaded)
                    return void setTimeout(function () {
                        n.done(t);
                    });
                this[t].loading ||
                    ((this[t].loading = !0),
                    (e = document.createElement('script')),
                    (e.type = 'text/javascript'),
                    (e.src = this[t].src),
                    'youtube' === t
                        ? (window.onYouTubeIframeAPIReady = function () {
                              (n[t].loaded = !0), n.done(t);
                          })
                        : (e.onload = function () {
                              (n[t].loaded = !0), n.done(t);
                          }),
                    document.body.appendChild(e));
            },
            done: function (e) {
                var n, o, i;
                'youtube' === e && delete window.onYouTubeIframeAPIReady,
                    (n = t.fancybox.getInstance()) &&
                        ((o = n.current.$content.find('iframe')),
                        'youtube' === e && void 0 !== YT && YT
                            ? (i = new YT.Player(o.attr('id'), {
                                  events: {
                                      onStateChange: function (t) {
                                          0 == t.data && n.next();
                                      },
                                  },
                              }))
                            : 'vimeo' === e &&
                              void 0 !== Vimeo &&
                              Vimeo &&
                              ((i = new Vimeo.Player(o)),
                              i.on('ended', function () {
                                  n.next();
                              })));
            },
        };
        t(document).on({
            'afterShow.fb': function (t, e, n) {
                e.group.length > 1 &&
                    ('youtube' === n.contentSource ||
                        'vimeo' === n.contentSource) &&
                    o.load(n.contentSource);
            },
        });
    })(jQuery),
    (function (t, e, n) {
        'use strict';
        var o = (function () {
                return (
                    t.requestAnimationFrame ||
                    t.webkitRequestAnimationFrame ||
                    t.mozRequestAnimationFrame ||
                    t.oRequestAnimationFrame ||
                    function (e) {
                        return t.setTimeout(e, 1e3 / 60);
                    }
                );
            })(),
            i = (function () {
                return (
                    t.cancelAnimationFrame ||
                    t.webkitCancelAnimationFrame ||
                    t.mozCancelAnimationFrame ||
                    t.oCancelAnimationFrame ||
                    function (e) {
                        t.clearTimeout(e);
                    }
                );
            })(),
            a = function (e) {
                var n = [];
                (e = e.originalEvent || e || t.e),
                    (e =
                        e.touches && e.touches.length
                            ? e.touches
                            : e.changedTouches && e.changedTouches.length
                            ? e.changedTouches
                            : [e]);
                for (var o in e)
                    e[o].pageX
                        ? n.push({ x: e[o].pageX, y: e[o].pageY })
                        : e[o].clientX &&
                          n.push({ x: e[o].clientX, y: e[o].clientY });
                return n;
            },
            s = function (t, e, n) {
                return e && t
                    ? 'x' === n
                        ? t.x - e.x
                        : 'y' === n
                        ? t.y - e.y
                        : Math.sqrt(
                              Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)
                          )
                    : 0;
            },
            r = function (t) {
                if (
                    t.is(
                        'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe'
                    ) ||
                    n.isFunction(t.get(0).onclick) ||
                    t.data('selectable')
                )
                    return !0;
                for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
                    if ('data-fancybox-' === o[e].nodeName.substr(0, 14))
                        return !0;
                return !1;
            },
            c = function (e) {
                var n = t.getComputedStyle(e)['overflow-y'],
                    o = t.getComputedStyle(e)['overflow-x'],
                    i =
                        ('scroll' === n || 'auto' === n) &&
                        e.scrollHeight > e.clientHeight,
                    a =
                        ('scroll' === o || 'auto' === o) &&
                        e.scrollWidth > e.clientWidth;
                return i || a;
            },
            l = function (t) {
                for (var e = !1; ; ) {
                    if ((e = c(t.get(0)))) break;
                    if (
                        ((t = t.parent()),
                        !t.length ||
                            t.hasClass('fancybox-stage') ||
                            t.is('body'))
                    )
                        break;
                }
                return e;
            },
            d = function (t) {
                var e = this;
                (e.instance = t),
                    (e.$bg = t.$refs.bg),
                    (e.$stage = t.$refs.stage),
                    (e.$container = t.$refs.container),
                    e.destroy(),
                    e.$container.on(
                        'touchstart.fb.touch mousedown.fb.touch',
                        n.proxy(e, 'ontouchstart')
                    );
            };
        (d.prototype.destroy = function () {
            var t = this;
            t.$container.off('.fb.touch'),
                n(e).off('.fb.touch'),
                t.requestId && (i(t.requestId), (t.requestId = null)),
                t.tapped && (clearTimeout(t.tapped), (t.tapped = null));
        }),
            (d.prototype.ontouchstart = function (o) {
                var i = this,
                    c = n(o.target),
                    d = i.instance,
                    u = d.current,
                    f = u.$slide,
                    p = u.$content,
                    h = 'touchstart' == o.type;
                if (
                    (h && i.$container.off('mousedown.fb.touch'),
                    (!o.originalEvent || 2 != o.originalEvent.button) &&
                        f.length &&
                        c.length &&
                        !r(c) &&
                        !r(c.parent()) &&
                        (c.is('img') ||
                            !(
                                o.originalEvent.clientX >
                                c[0].clientWidth + c.offset().left
                            )))
                ) {
                    if (
                        !u ||
                        d.isAnimating ||
                        u.$slide.hasClass('fancybox-animated')
                    )
                        return o.stopPropagation(), void o.preventDefault();
                    (i.realPoints = i.startPoints = a(o)),
                        i.startPoints.length &&
                            (u.touch && o.stopPropagation(),
                            (i.startEvent = o),
                            (i.canTap = !0),
                            (i.$target = c),
                            (i.$content = p),
                            (i.opts = u.opts.touch),
                            (i.isPanning = !1),
                            (i.isSwiping = !1),
                            (i.isZooming = !1),
                            (i.isScrolling = !1),
                            (i.canPan = d.canPan()),
                            (i.startTime = new Date().getTime()),
                            (i.distanceX = i.distanceY = i.distance = 0),
                            (i.canvasWidth = Math.round(f[0].clientWidth)),
                            (i.canvasHeight = Math.round(f[0].clientHeight)),
                            (i.contentLastPos = null),
                            (i.contentStartPos = n.fancybox.getTranslate(
                                i.$content
                            ) || { top: 0, left: 0 }),
                            (i.sliderStartPos = n.fancybox.getTranslate(f)),
                            (i.stagePos = n.fancybox.getTranslate(
                                d.$refs.stage
                            )),
                            (i.sliderStartPos.top -= i.stagePos.top),
                            (i.sliderStartPos.left -= i.stagePos.left),
                            (i.contentStartPos.top -= i.stagePos.top),
                            (i.contentStartPos.left -= i.stagePos.left),
                            n(e)
                                .off('.fb.touch')
                                .on(
                                    h
                                        ? 'touchend.fb.touch touchcancel.fb.touch'
                                        : 'mouseup.fb.touch mouseleave.fb.touch',
                                    n.proxy(i, 'ontouchend')
                                )
                                .on(
                                    h
                                        ? 'touchmove.fb.touch'
                                        : 'mousemove.fb.touch',
                                    n.proxy(i, 'ontouchmove')
                                ),
                            n.fancybox.isMobile &&
                                e.addEventListener('scroll', i.onscroll, !0),
                            (((i.opts || i.canPan) &&
                                (c.is(i.$stage) || i.$stage.find(c).length)) ||
                                (c.is('.fancybox-image') && o.preventDefault(),
                                n.fancybox.isMobile &&
                                    c.parents('.fancybox-caption').length)) &&
                                ((i.isScrollable = l(c) || l(c.parent())),
                                (n.fancybox.isMobile && i.isScrollable) ||
                                    o.preventDefault(),
                                (1 === i.startPoints.length || u.hasError) &&
                                    (i.canPan
                                        ? (n.fancybox.stop(i.$content),
                                          (i.isPanning = !0))
                                        : (i.isSwiping = !0),
                                    i.$container.addClass(
                                        'fancybox-is-grabbing'
                                    )),
                                2 === i.startPoints.length &&
                                    'image' === u.type &&
                                    (u.isLoaded || u.$ghost) &&
                                    ((i.canTap = !1),
                                    (i.isSwiping = !1),
                                    (i.isPanning = !1),
                                    (i.isZooming = !0),
                                    n.fancybox.stop(i.$content),
                                    (i.centerPointStartX =
                                        0.5 *
                                            (i.startPoints[0].x +
                                                i.startPoints[1].x) -
                                        n(t).scrollLeft()),
                                    (i.centerPointStartY =
                                        0.5 *
                                            (i.startPoints[0].y +
                                                i.startPoints[1].y) -
                                        n(t).scrollTop()),
                                    (i.percentageOfImageAtPinchPointX =
                                        (i.centerPointStartX -
                                            i.contentStartPos.left) /
                                        i.contentStartPos.width),
                                    (i.percentageOfImageAtPinchPointY =
                                        (i.centerPointStartY -
                                            i.contentStartPos.top) /
                                        i.contentStartPos.height),
                                    (i.startDistanceBetweenFingers = s(
                                        i.startPoints[0],
                                        i.startPoints[1]
                                    )))));
                }
            }),
            (d.prototype.onscroll = function (t) {
                var n = this;
                (n.isScrolling = !0),
                    e.removeEventListener('scroll', n.onscroll, !0);
            }),
            (d.prototype.ontouchmove = function (t) {
                var e = this;
                return void 0 !== t.originalEvent.buttons &&
                    0 === t.originalEvent.buttons
                    ? void e.ontouchend(t)
                    : e.isScrolling
                    ? void (e.canTap = !1)
                    : ((e.newPoints = a(t)),
                      void (
                          (e.opts || e.canPan) &&
                          e.newPoints.length &&
                          e.newPoints.length &&
                          ((e.isSwiping && !0 === e.isSwiping) ||
                              t.preventDefault(),
                          (e.distanceX = s(
                              e.newPoints[0],
                              e.startPoints[0],
                              'x'
                          )),
                          (e.distanceY = s(
                              e.newPoints[0],
                              e.startPoints[0],
                              'y'
                          )),
                          (e.distance = s(e.newPoints[0], e.startPoints[0])),
                          e.distance > 0 &&
                              (e.isSwiping
                                  ? e.onSwipe(t)
                                  : e.isPanning
                                  ? e.onPan()
                                  : e.isZooming && e.onZoom()))
                      ));
            }),
            (d.prototype.onSwipe = function (e) {
                var a,
                    s = this,
                    r = s.instance,
                    c = s.isSwiping,
                    l = s.sliderStartPos.left || 0;
                if (!0 !== c)
                    'x' == c &&
                        (s.distanceX > 0 &&
                        (s.instance.group.length < 2 ||
                            (0 === s.instance.current.index &&
                                !s.instance.current.opts.loop))
                            ? (l += Math.pow(s.distanceX, 0.8))
                            : s.distanceX < 0 &&
                              (s.instance.group.length < 2 ||
                                  (s.instance.current.index ===
                                      s.instance.group.length - 1 &&
                                      !s.instance.current.opts.loop))
                            ? (l -= Math.pow(-s.distanceX, 0.8))
                            : (l += s.distanceX)),
                        (s.sliderLastPos = {
                            top:
                                'x' == c
                                    ? 0
                                    : s.sliderStartPos.top + s.distanceY,
                            left: l,
                        }),
                        s.requestId && (i(s.requestId), (s.requestId = null)),
                        (s.requestId = o(function () {
                            s.sliderLastPos &&
                                (n.each(s.instance.slides, function (t, e) {
                                    var o = e.pos - s.instance.currPos;
                                    n.fancybox.setTranslate(e.$slide, {
                                        top: s.sliderLastPos.top,
                                        left:
                                            s.sliderLastPos.left +
                                            o * s.canvasWidth +
                                            o * e.opts.gutter,
                                    });
                                }),
                                s.$container.addClass('fancybox-is-sliding'));
                        }));
                else if (Math.abs(s.distance) > 10) {
                    if (
                        ((s.canTap = !1),
                        r.group.length < 2 && s.opts.vertical
                            ? (s.isSwiping = 'y')
                            : r.isDragging ||
                              !1 === s.opts.vertical ||
                              ('auto' === s.opts.vertical && n(t).width() > 800)
                            ? (s.isSwiping = 'x')
                            : ((a = Math.abs(
                                  (180 * Math.atan2(s.distanceY, s.distanceX)) /
                                      Math.PI
                              )),
                              (s.isSwiping = a > 45 && a < 135 ? 'y' : 'x')),
                        'y' === s.isSwiping &&
                            n.fancybox.isMobile &&
                            s.isScrollable)
                    )
                        return void (s.isScrolling = !0);
                    (r.isDragging = s.isSwiping),
                        (s.startPoints = s.newPoints),
                        n.each(r.slides, function (t, e) {
                            var o, i;
                            n.fancybox.stop(e.$slide),
                                (o = n.fancybox.getTranslate(e.$slide)),
                                (i = n.fancybox.getTranslate(r.$refs.stage)),
                                e.$slide
                                    .css({
                                        transform: '',
                                        opacity: '',
                                        'transition-duration': '',
                                    })
                                    .removeClass('fancybox-animated')
                                    .removeClass(function (t, e) {
                                        return (
                                            e.match(/(^|\s)fancybox-fx-\S+/g) ||
                                            []
                                        ).join(' ');
                                    }),
                                e.pos === r.current.pos &&
                                    ((s.sliderStartPos.top = o.top - i.top),
                                    (s.sliderStartPos.left = o.left - i.left)),
                                n.fancybox.setTranslate(e.$slide, {
                                    top: o.top - i.top,
                                    left: o.left - i.left,
                                });
                        }),
                        r.SlideShow &&
                            r.SlideShow.isActive &&
                            r.SlideShow.stop();
                }
            }),
            (d.prototype.onPan = function () {
                var t = this;
                if (
                    s(t.newPoints[0], t.realPoints[0]) <
                    (n.fancybox.isMobile ? 10 : 5)
                )
                    return void (t.startPoints = t.newPoints);
                (t.canTap = !1),
                    (t.contentLastPos = t.limitMovement()),
                    t.requestId && i(t.requestId),
                    (t.requestId = o(function () {
                        n.fancybox.setTranslate(t.$content, t.contentLastPos);
                    }));
            }),
            (d.prototype.limitMovement = function () {
                var t,
                    e,
                    n,
                    o,
                    i,
                    a,
                    s = this,
                    r = s.canvasWidth,
                    c = s.canvasHeight,
                    l = s.distanceX,
                    d = s.distanceY,
                    u = s.contentStartPos,
                    f = u.left,
                    p = u.top,
                    h = u.width,
                    g = u.height;
                return (
                    (i = h > r ? f + l : f),
                    (a = p + d),
                    (t = Math.max(0, 0.5 * r - 0.5 * h)),
                    (e = Math.max(0, 0.5 * c - 0.5 * g)),
                    (n = Math.min(r - h, 0.5 * r - 0.5 * h)),
                    (o = Math.min(c - g, 0.5 * c - 0.5 * g)),
                    l > 0 &&
                        i > t &&
                        (i = t - 1 + Math.pow(-t + f + l, 0.8) || 0),
                    l < 0 &&
                        i < n &&
                        (i = n + 1 - Math.pow(n - f - l, 0.8) || 0),
                    d > 0 &&
                        a > e &&
                        (a = e - 1 + Math.pow(-e + p + d, 0.8) || 0),
                    d < 0 &&
                        a < o &&
                        (a = o + 1 - Math.pow(o - p - d, 0.8) || 0),
                    { top: a, left: i }
                );
            }),
            (d.prototype.limitPosition = function (t, e, n, o) {
                var i = this,
                    a = i.canvasWidth,
                    s = i.canvasHeight;
                return (
                    n > a
                        ? ((t = t > 0 ? 0 : t), (t = t < a - n ? a - n : t))
                        : (t = Math.max(0, a / 2 - n / 2)),
                    o > s
                        ? ((e = e > 0 ? 0 : e), (e = e < s - o ? s - o : e))
                        : (e = Math.max(0, s / 2 - o / 2)),
                    { top: e, left: t }
                );
            }),
            (d.prototype.onZoom = function () {
                var e = this,
                    a = e.contentStartPos,
                    r = a.width,
                    c = a.height,
                    l = a.left,
                    d = a.top,
                    u = s(e.newPoints[0], e.newPoints[1]),
                    f = u / e.startDistanceBetweenFingers,
                    p = Math.floor(r * f),
                    h = Math.floor(c * f),
                    g = (r - p) * e.percentageOfImageAtPinchPointX,
                    b = (c - h) * e.percentageOfImageAtPinchPointY,
                    m =
                        (e.newPoints[0].x + e.newPoints[1].x) / 2 -
                        n(t).scrollLeft(),
                    v =
                        (e.newPoints[0].y + e.newPoints[1].y) / 2 -
                        n(t).scrollTop(),
                    y = m - e.centerPointStartX,
                    x = v - e.centerPointStartY,
                    w = l + (g + y),
                    $ = d + (b + x),
                    S = { top: $, left: w, scaleX: f, scaleY: f };
                (e.canTap = !1),
                    (e.newWidth = p),
                    (e.newHeight = h),
                    (e.contentLastPos = S),
                    e.requestId && i(e.requestId),
                    (e.requestId = o(function () {
                        n.fancybox.setTranslate(e.$content, e.contentLastPos);
                    }));
            }),
            (d.prototype.ontouchend = function (t) {
                var o = this,
                    s = o.isSwiping,
                    r = o.isPanning,
                    c = o.isZooming,
                    l = o.isScrolling;
                if (
                    ((o.endPoints = a(t)),
                    (o.dMs = Math.max(new Date().getTime() - o.startTime, 1)),
                    o.$container.removeClass('fancybox-is-grabbing'),
                    n(e).off('.fb.touch'),
                    e.removeEventListener('scroll', o.onscroll, !0),
                    o.requestId && (i(o.requestId), (o.requestId = null)),
                    (o.isSwiping = !1),
                    (o.isPanning = !1),
                    (o.isZooming = !1),
                    (o.isScrolling = !1),
                    (o.instance.isDragging = !1),
                    o.canTap)
                )
                    return o.onTap(t);
                (o.speed = 100),
                    (o.velocityX = (o.distanceX / o.dMs) * 0.5),
                    (o.velocityY = (o.distanceY / o.dMs) * 0.5),
                    r
                        ? o.endPanning()
                        : c
                        ? o.endZooming()
                        : o.endSwiping(s, l);
            }),
            (d.prototype.endSwiping = function (t, e) {
                var o = this,
                    i = !1,
                    a = o.instance.group.length,
                    s = Math.abs(o.distanceX),
                    r =
                        'x' == t &&
                        a > 1 &&
                        ((o.dMs > 130 && s > 10) || s > 50);
                (o.sliderLastPos = null),
                    'y' == t && !e && Math.abs(o.distanceY) > 50
                        ? (n.fancybox.animate(
                              o.instance.current.$slide,
                              {
                                  top:
                                      o.sliderStartPos.top +
                                      o.distanceY +
                                      150 * o.velocityY,
                                  opacity: 0,
                              },
                              200
                          ),
                          (i = o.instance.close(!0, 250)))
                        : r && o.distanceX > 0
                        ? (i = o.instance.previous(300))
                        : r && o.distanceX < 0 && (i = o.instance.next(300)),
                    !1 !== i ||
                        ('x' != t && 'y' != t) ||
                        o.instance.centerSlide(200),
                    o.$container.removeClass('fancybox-is-sliding');
            }),
            (d.prototype.endPanning = function () {
                var t,
                    e,
                    o,
                    i = this;
                i.contentLastPos &&
                    (!1 === i.opts.momentum || i.dMs > 350
                        ? ((t = i.contentLastPos.left),
                          (e = i.contentLastPos.top))
                        : ((t = i.contentLastPos.left + 500 * i.velocityX),
                          (e = i.contentLastPos.top + 500 * i.velocityY)),
                    (o = i.limitPosition(
                        t,
                        e,
                        i.contentStartPos.width,
                        i.contentStartPos.height
                    )),
                    (o.width = i.contentStartPos.width),
                    (o.height = i.contentStartPos.height),
                    n.fancybox.animate(i.$content, o, 366));
            }),
            (d.prototype.endZooming = function () {
                var t,
                    e,
                    o,
                    i,
                    a = this,
                    s = a.instance.current,
                    r = a.newWidth,
                    c = a.newHeight;
                a.contentLastPos &&
                    ((t = a.contentLastPos.left),
                    (e = a.contentLastPos.top),
                    (i = {
                        top: e,
                        left: t,
                        width: r,
                        height: c,
                        scaleX: 1,
                        scaleY: 1,
                    }),
                    n.fancybox.setTranslate(a.$content, i),
                    r < a.canvasWidth && c < a.canvasHeight
                        ? a.instance.scaleToFit(150)
                        : r > s.width || c > s.height
                        ? a.instance.scaleToActual(
                              a.centerPointStartX,
                              a.centerPointStartY,
                              150
                          )
                        : ((o = a.limitPosition(t, e, r, c)),
                          n.fancybox.animate(a.$content, o, 150)));
            }),
            (d.prototype.onTap = function (e) {
                var o,
                    i = this,
                    s = n(e.target),
                    r = i.instance,
                    c = r.current,
                    l = (e && a(e)) || i.startPoints,
                    d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
                    u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
                    f = function (t) {
                        var o = c.opts[t];
                        if ((n.isFunction(o) && (o = o.apply(r, [c, e])), o))
                            switch (o) {
                                case 'close':
                                    r.close(i.startEvent);
                                    break;
                                case 'toggleControls':
                                    r.toggleControls();
                                    break;
                                case 'next':
                                    r.next();
                                    break;
                                case 'nextOrClose':
                                    r.group.length > 1
                                        ? r.next()
                                        : r.close(i.startEvent);
                                    break;
                                case 'zoom':
                                    'image' == c.type &&
                                        (c.isLoaded || c.$ghost) &&
                                        (r.canPan()
                                            ? r.scaleToFit()
                                            : r.isScaledDown()
                                            ? r.scaleToActual(d, u)
                                            : r.group.length < 2 &&
                                              r.close(i.startEvent));
                            }
                    };
                if (
                    (!e.originalEvent || 2 != e.originalEvent.button) &&
                    (s.is('img') || !(d > s[0].clientWidth + s.offset().left))
                ) {
                    if (
                        s.is(
                            '.fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container'
                        )
                    )
                        o = 'Outside';
                    else if (s.is('.fancybox-slide')) o = 'Slide';
                    else {
                        if (
                            !r.current.$content ||
                            !r.current.$content.find(s).addBack().filter(s)
                                .length
                        )
                            return;
                        o = 'Content';
                    }
                    if (i.tapped) {
                        if (
                            (clearTimeout(i.tapped),
                            (i.tapped = null),
                            Math.abs(d - i.tapX) > 50 ||
                                Math.abs(u - i.tapY) > 50)
                        )
                            return this;
                        f('dblclick' + o);
                    } else
                        (i.tapX = d),
                            (i.tapY = u),
                            c.opts['dblclick' + o] &&
                            c.opts['dblclick' + o] !== c.opts['click' + o]
                                ? (i.tapped = setTimeout(function () {
                                      (i.tapped = null),
                                          r.isAnimating || f('click' + o);
                                  }, 500))
                                : f('click' + o);
                    return this;
                }
            }),
            n(e)
                .on('onActivate.fb', function (t, e) {
                    e && !e.Guestures && (e.Guestures = new d(e));
                })
                .on('beforeClose.fb', function (t, e) {
                    e && e.Guestures && e.Guestures.destroy();
                });
    })(window, document, jQuery),
    (function (t, e) {
        'use strict';
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                slideShow:
                    '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
            },
            slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
        });
        var n = function (t) {
            (this.instance = t), this.init();
        };
        e.extend(n.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            init: function () {
                var t = this,
                    n = t.instance,
                    o = n.group[n.currIndex].opts.slideShow;
                (t.$button = n.$refs.toolbar
                    .find('[data-fancybox-play]')
                    .on('click', function () {
                        t.toggle();
                    })),
                    n.group.length < 2 || !o
                        ? t.$button.hide()
                        : o.progress &&
                          (t.$progress = e(
                              '<div class="fancybox-progress"></div>'
                          ).appendTo(n.$refs.inner));
            },
            set: function (t) {
                var n = this,
                    o = n.instance,
                    i = o.current;
                i &&
                (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1)
                    ? n.isActive &&
                      'video' !== i.contentType &&
                      (n.$progress &&
                          e.fancybox.animate(
                              n.$progress.show(),
                              { scaleX: 1 },
                              i.opts.slideShow.speed
                          ),
                      (n.timer = setTimeout(function () {
                          o.current.opts.loop ||
                          o.current.index != o.group.length - 1
                              ? o.next()
                              : o.jumpTo(0);
                      }, i.opts.slideShow.speed)))
                    : (n.stop(), (o.idleSecondsCounter = 0), o.showControls());
            },
            clear: function () {
                var t = this;
                clearTimeout(t.timer),
                    (t.timer = null),
                    t.$progress && t.$progress.removeAttr('style').hide();
            },
            start: function () {
                var t = this,
                    e = t.instance.current;
                e &&
                    (t.$button
                        .attr(
                            'title',
                            (e.opts.i18n[e.opts.lang] || e.opts.i18n.en)
                                .PLAY_STOP
                        )
                        .removeClass('fancybox-button--play')
                        .addClass('fancybox-button--pause'),
                    (t.isActive = !0),
                    e.isComplete && t.set(!0),
                    t.instance.trigger('onSlideShowChange', !0));
            },
            stop: function () {
                var t = this,
                    e = t.instance.current;
                t.clear(),
                    t.$button
                        .attr(
                            'title',
                            (e.opts.i18n[e.opts.lang] || e.opts.i18n.en)
                                .PLAY_START
                        )
                        .removeClass('fancybox-button--pause')
                        .addClass('fancybox-button--play'),
                    (t.isActive = !1),
                    t.instance.trigger('onSlideShowChange', !1),
                    t.$progress && t.$progress.removeAttr('style').hide();
            },
            toggle: function () {
                var t = this;
                t.isActive ? t.stop() : t.start();
            },
        }),
            e(t).on({
                'onInit.fb': function (t, e) {
                    e && !e.SlideShow && (e.SlideShow = new n(e));
                },
                'beforeShow.fb': function (t, e, n, o) {
                    var i = e && e.SlideShow;
                    o
                        ? i && n.opts.slideShow.autoStart && i.start()
                        : i && i.isActive && i.clear();
                },
                'afterShow.fb': function (t, e, n) {
                    var o = e && e.SlideShow;
                    o && o.isActive && o.set();
                },
                'afterKeydown.fb': function (n, o, i, a, s) {
                    var r = o && o.SlideShow;
                    !r ||
                        !i.opts.slideShow ||
                        (80 !== s && 32 !== s) ||
                        e(t.activeElement).is('button,a,input') ||
                        (a.preventDefault(), r.toggle());
                },
                'beforeClose.fb onDeactivate.fb': function (t, e) {
                    var n = e && e.SlideShow;
                    n && n.stop();
                },
            }),
            e(t).on('visibilitychange', function () {
                var n = e.fancybox.getInstance(),
                    o = n && n.SlideShow;
                o && o.isActive && (t.hidden ? o.clear() : o.set());
            });
    })(document, jQuery),
    (function (t, e) {
        'use strict';
        var n = (function () {
            for (
                var e = [
                        [
                            'requestFullscreen',
                            'exitFullscreen',
                            'fullscreenElement',
                            'fullscreenEnabled',
                            'fullscreenchange',
                            'fullscreenerror',
                        ],
                        [
                            'webkitRequestFullscreen',
                            'webkitExitFullscreen',
                            'webkitFullscreenElement',
                            'webkitFullscreenEnabled',
                            'webkitfullscreenchange',
                            'webkitfullscreenerror',
                        ],
                        [
                            'webkitRequestFullScreen',
                            'webkitCancelFullScreen',
                            'webkitCurrentFullScreenElement',
                            'webkitCancelFullScreen',
                            'webkitfullscreenchange',
                            'webkitfullscreenerror',
                        ],
                        [
                            'mozRequestFullScreen',
                            'mozCancelFullScreen',
                            'mozFullScreenElement',
                            'mozFullScreenEnabled',
                            'mozfullscreenchange',
                            'mozfullscreenerror',
                        ],
                        [
                            'msRequestFullscreen',
                            'msExitFullscreen',
                            'msFullscreenElement',
                            'msFullscreenEnabled',
                            'MSFullscreenChange',
                            'MSFullscreenError',
                        ],
                    ],
                    n = {},
                    o = 0;
                o < e.length;
                o++
            ) {
                var i = e[o];
                if (i && i[1] in t) {
                    for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a];
                    return n;
                }
            }
            return !1;
        })();
        if (n) {
            var o = {
                request: function (e) {
                    (e = e || t.documentElement),
                        e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
                },
                exit: function () {
                    t[n.exitFullscreen]();
                },
                toggle: function (e) {
                    (e = e || t.documentElement),
                        this.isFullscreen() ? this.exit() : this.request(e);
                },
                isFullscreen: function () {
                    return Boolean(t[n.fullscreenElement]);
                },
                enabled: function () {
                    return Boolean(t[n.fullscreenEnabled]);
                },
            };
            e.extend(!0, e.fancybox.defaults, {
                btnTpl: {
                    fullScreen:
                        '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
                },
                fullScreen: { autoStart: !1 },
            }),
                e(t).on(n.fullscreenchange, function () {
                    var t = o.isFullscreen(),
                        n = e.fancybox.getInstance();
                    n &&
                        (n.current &&
                            'image' === n.current.type &&
                            n.isAnimating &&
                            ((n.isAnimating = !1),
                            n.update(!0, !0, 0),
                            n.isComplete || n.complete()),
                        n.trigger('onFullscreenChange', t),
                        n.$refs.container.toggleClass(
                            'fancybox-is-fullscreen',
                            t
                        ),
                        n.$refs.toolbar
                            .find('[data-fancybox-fullscreen]')
                            .toggleClass('fancybox-button--fsenter', !t)
                            .toggleClass('fancybox-button--fsexit', t));
                });
        }
        e(t).on({
            'onInit.fb': function (t, e) {
                var i;
                if (!n)
                    return void e.$refs.toolbar
                        .find('[data-fancybox-fullscreen]')
                        .remove();
                e && e.group[e.currIndex].opts.fullScreen
                    ? ((i = e.$refs.container),
                      i.on(
                          'click.fb-fullscreen',
                          '[data-fancybox-fullscreen]',
                          function (t) {
                              t.stopPropagation(),
                                  t.preventDefault(),
                                  o.toggle();
                          }
                      ),
                      e.opts.fullScreen &&
                          !0 === e.opts.fullScreen.autoStart &&
                          o.request(),
                      (e.FullScreen = o))
                    : e &&
                      e.$refs.toolbar.find('[data-fancybox-fullscreen]').hide();
            },
            'afterKeydown.fb': function (t, e, n, o, i) {
                e &&
                    e.FullScreen &&
                    70 === i &&
                    (o.preventDefault(), e.FullScreen.toggle());
            },
            'beforeClose.fb': function (t, e) {
                e &&
                    e.FullScreen &&
                    e.$refs.container.hasClass('fancybox-is-fullscreen') &&
                    o.exit();
            },
        });
    })(document, jQuery),
    (function (t, e) {
        'use strict';
        var n = 'fancybox-thumbs';
        e.fancybox.defaults = e.extend(
            !0,
            {
                btnTpl: {
                    thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: '.fancybox-container',
                    axis: 'y',
                },
            },
            e.fancybox.defaults
        );
        var o = function (t) {
            this.init(t);
        };
        e.extend(o.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            isActive: !1,
            init: function (t) {
                var e = this,
                    n = t.group,
                    o = 0;
                (e.instance = t),
                    (e.opts = n[t.currIndex].opts.thumbs),
                    (t.Thumbs = e),
                    (e.$button = t.$refs.toolbar.find(
                        '[data-fancybox-thumbs]'
                    ));
                for (
                    var i = 0, a = n.length;
                    i < a && (n[i].thumb && o++, !(o > 1));
                    i++
                );
                o > 1 && e.opts
                    ? (e.$button.removeAttr('style').on('click', function () {
                          e.toggle();
                      }),
                      (e.isActive = !0))
                    : e.$button.hide();
            },
            create: function () {
                var t,
                    o = this,
                    i = o.instance,
                    a = o.opts.parentEl,
                    s = [];
                o.$grid ||
                    ((o.$grid = e(
                        '<div class="' +
                            n +
                            ' ' +
                            n +
                            '-' +
                            o.opts.axis +
                            '"></div>'
                    ).appendTo(i.$refs.container.find(a).addBack().filter(a))),
                    o.$grid.on('click', 'a', function () {
                        i.jumpTo(e(this).attr('data-index'));
                    })),
                    o.$list ||
                        (o.$list = e('<div class="' + n + '__list">').appendTo(
                            o.$grid
                        )),
                    e.each(i.group, function (e, n) {
                        (t = n.thumb),
                            t || 'image' !== n.type || (t = n.src),
                            s.push(
                                '<a href="javascript:;" tabindex="0" data-index="' +
                                    e +
                                    '"' +
                                    (t && t.length
                                        ? ' style="background-image:url(' +
                                          t +
                                          ')"'
                                        : 'class="fancybox-thumbs-missing"') +
                                    '></a>'
                            );
                    }),
                    (o.$list[0].innerHTML = s.join('')),
                    'x' === o.opts.axis &&
                        o.$list.width(
                            parseInt(o.$grid.css('padding-right'), 10) +
                                i.group.length *
                                    o.$list.children().eq(0).outerWidth(!0)
                        );
            },
            focus: function (t) {
                var e,
                    n,
                    o = this,
                    i = o.$list,
                    a = o.$grid;
                o.instance.current &&
                    ((e = i
                        .children()
                        .removeClass('fancybox-thumbs-active')
                        .filter(
                            '[data-index="' + o.instance.current.index + '"]'
                        )
                        .addClass('fancybox-thumbs-active')),
                    (n = e.position()),
                    'y' === o.opts.axis &&
                    (n.top < 0 || n.top > i.height() - e.outerHeight())
                        ? i
                              .stop()
                              .animate({ scrollTop: i.scrollTop() + n.top }, t)
                        : 'x' === o.opts.axis &&
                          (n.left < a.scrollLeft() ||
                              n.left >
                                  a.scrollLeft() +
                                      (a.width() - e.outerWidth())) &&
                          i.parent().stop().animate({ scrollLeft: n.left }, t));
            },
            update: function () {
                var t = this;
                t.instance.$refs.container.toggleClass(
                    'fancybox-show-thumbs',
                    this.isVisible
                ),
                    t.isVisible
                        ? (t.$grid || t.create(),
                          t.instance.trigger('onThumbsShow'),
                          t.focus(0))
                        : t.$grid && t.instance.trigger('onThumbsHide'),
                    t.instance.update();
            },
            hide: function () {
                (this.isVisible = !1), this.update();
            },
            show: function () {
                (this.isVisible = !0), this.update();
            },
            toggle: function () {
                (this.isVisible = !this.isVisible), this.update();
            },
        }),
            e(t).on({
                'onInit.fb': function (t, e) {
                    var n;
                    e &&
                        !e.Thumbs &&
                        ((n = new o(e)),
                        n.isActive && !0 === n.opts.autoStart && n.show());
                },
                'beforeShow.fb': function (t, e, n, o) {
                    var i = e && e.Thumbs;
                    i && i.isVisible && i.focus(o ? 0 : 250);
                },
                'afterKeydown.fb': function (t, e, n, o, i) {
                    var a = e && e.Thumbs;
                    a &&
                        a.isActive &&
                        71 === i &&
                        (o.preventDefault(), a.toggle());
                },
                'beforeClose.fb': function (t, e) {
                    var n = e && e.Thumbs;
                    n &&
                        n.isVisible &&
                        !1 !== n.opts.hideOnClose &&
                        n.$grid.hide();
                },
            });
    })(document, jQuery),
    (function (t, e) {
        'use strict';
        function n(t) {
            var e = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;',
                '/': '&#x2F;',
                '`': '&#x60;',
                '=': '&#x3D;',
            };
            return String(t).replace(/[&<>"'`=\/]/g, function (t) {
                return e[t];
            });
        }
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
            },
            share: {
                url: function (t, e) {
                    return (
                        (!t.currentHash &&
                            'inline' !== e.type &&
                            'html' !== e.type &&
                            (e.origSrc || e.src)) ||
                        window.location
                    );
                },
                tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
            },
        }),
            e(t).on('click', '[data-fancybox-share]', function () {
                var t,
                    o,
                    i = e.fancybox.getInstance(),
                    a = i.current || null;
                a &&
                    ('function' === e.type(a.opts.share.url) &&
                        (t = a.opts.share.url.apply(a, [i, a])),
                    (o = a.opts.share.tpl
                        .replace(
                            /\{\{media\}\}/g,
                            'image' === a.type ? encodeURIComponent(a.src) : ''
                        )
                        .replace(/\{\{url\}\}/g, encodeURIComponent(t))
                        .replace(/\{\{url_raw\}\}/g, n(t))
                        .replace(
                            /\{\{descr\}\}/g,
                            i.$caption
                                ? encodeURIComponent(i.$caption.text())
                                : ''
                        )),
                    e.fancybox.open({
                        src: i.translate(i, o),
                        type: 'html',
                        opts: {
                            touch: !1,
                            animationEffect: !1,
                            afterLoad: function (t, e) {
                                i.$refs.container.one(
                                    'beforeClose.fb',
                                    function () {
                                        t.close(null, 0);
                                    }
                                ),
                                    e.$content
                                        .find('.fancybox-share__button')
                                        .click(function () {
                                            return (
                                                window.open(
                                                    this.href,
                                                    'Share',
                                                    'width=550, height=450'
                                                ),
                                                !1
                                            );
                                        });
                            },
                            mobile: { autoFocus: !1 },
                        },
                    }));
            });
    })(document, jQuery),
    (function (t, e, n) {
        'use strict';
        function o() {
            var e = t.location.hash.substr(1),
                n = e.split('-'),
                o =
                    n.length > 1 && /^\+?\d+$/.test(n[n.length - 1])
                        ? parseInt(n.pop(-1), 10) || 1
                        : 1,
                i = n.join('-');
            return { hash: e, index: o < 1 ? 1 : o, gallery: i };
        }
        function i(t) {
            '' !== t.gallery &&
                n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']")
                    .eq(t.index - 1)
                    .focus()
                    .trigger('click.fb-start');
        }
        function a(t) {
            var e, n;
            return (
                !!t &&
                ((e = t.current ? t.current.opts : t.opts),
                '' !==
                    (n =
                        e.hash ||
                        (e.$orig
                            ? e.$orig.data('fancybox') ||
                              e.$orig.data('fancybox-trigger')
                            : '')) && n)
            );
        }
        n.escapeSelector ||
            (n.escapeSelector = function (t) {
                return (t + '').replace(
                    /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
                    function (t, e) {
                        return e
                            ? '\0' === t
                                ? '�'
                                : t.slice(0, -1) +
                                  '\\' +
                                  t.charCodeAt(t.length - 1).toString(16) +
                                  ' '
                            : '\\' + t;
                    }
                );
            }),
            n(function () {
                !1 !== n.fancybox.defaults.hash &&
                    (n(e).on({
                        'onInit.fb': function (t, e) {
                            var n, i;
                            !1 !== e.group[e.currIndex].opts.hash &&
                                ((n = o()),
                                (i = a(e)) &&
                                    n.gallery &&
                                    i == n.gallery &&
                                    (e.currIndex = n.index - 1));
                        },
                        'beforeShow.fb': function (n, o, i, s) {
                            var r;
                            i &&
                                !1 !== i.opts.hash &&
                                (r = a(o)) &&
                                ((o.currentHash =
                                    r +
                                    (o.group.length > 1
                                        ? '-' + (i.index + 1)
                                        : '')),
                                t.location.hash !== '#' + o.currentHash &&
                                    (s &&
                                        !o.origHash &&
                                        (o.origHash = t.location.hash),
                                    o.hashTimer && clearTimeout(o.hashTimer),
                                    (o.hashTimer = setTimeout(function () {
                                        'replaceState' in t.history
                                            ? (t.history[
                                                  s
                                                      ? 'pushState'
                                                      : 'replaceState'
                                              ](
                                                  {},
                                                  e.title,
                                                  t.location.pathname +
                                                      t.location.search +
                                                      '#' +
                                                      o.currentHash
                                              ),
                                              s && (o.hasCreatedHistory = !0))
                                            : (t.location.hash = o.currentHash),
                                            (o.hashTimer = null);
                                    }, 300))));
                        },
                        'beforeClose.fb': function (n, o, i) {
                            i &&
                                !1 !== i.opts.hash &&
                                (clearTimeout(o.hashTimer),
                                o.currentHash && o.hasCreatedHistory
                                    ? t.history.back()
                                    : o.currentHash &&
                                      ('replaceState' in t.history
                                          ? t.history.replaceState(
                                                {},
                                                e.title,
                                                t.location.pathname +
                                                    t.location.search +
                                                    (o.origHash || '')
                                            )
                                          : (t.location.hash = o.origHash)),
                                (o.currentHash = null));
                        },
                    }),
                    n(t).on('hashchange.fb', function () {
                        var t = o(),
                            e = null;
                        n.each(
                            n('.fancybox-container').get().reverse(),
                            function (t, o) {
                                var i = n(o).data('FancyBox');
                                if (i && i.currentHash) return (e = i), !1;
                            }
                        ),
                            e
                                ? e.currentHash === t.gallery + '-' + t.index ||
                                  (1 === t.index &&
                                      e.currentHash == t.gallery) ||
                                  ((e.currentHash = null), e.close())
                                : '' !== t.gallery && i(t);
                    }),
                    setTimeout(function () {
                        n.fancybox.getInstance() || i(o());
                    }, 50));
            });
    })(window, document, jQuery),
    (function (t, e) {
        'use strict';
        var n = new Date().getTime();
        e(t).on({
            'onInit.fb': function (t, e, o) {
                e.$refs.stage.on(
                    'mousewheel DOMMouseScroll wheel MozMousePixelScroll',
                    function (t) {
                        var o = e.current,
                            i = new Date().getTime();
                        e.group.length < 2 ||
                            !1 === o.opts.wheel ||
                            ('auto' === o.opts.wheel && 'image' !== o.type) ||
                            (t.preventDefault(),
                            t.stopPropagation(),
                            o.$slide.hasClass('fancybox-animated') ||
                                ((t = t.originalEvent || t),
                                i - n < 250 ||
                                    ((n = i),
                                    e[
                                        (-t.deltaY ||
                                            -t.deltaX ||
                                            t.wheelDelta ||
                                            -t.detail) < 0
                                            ? 'next'
                                            : 'previous'
                                    ]())));
                    }
                );
            },
        });
    })(document, jQuery);

/* End */
;
; /* Start:"a:4:{s:4:"full";s:76:"/local/templates/kalmatron/js/jquery.inputmask.bundle.min.js?173314503070953";s:6:"source";s:60:"/local/templates/kalmatron/js/jquery.inputmask.bundle.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e){function t(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(2)],void 0!==(r="function"==typeof(n=function(e){return e})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n,a,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};a=[i(0),i(5),i(6)],void 0!==(r="function"==typeof(n=function(e,t,i,n){function a(t,i,o){if(!(this instanceof a))return new a(t,i,o);this.el=n,this.events={},this.maskset=n,this.refreshValue=!1,!0!==o&&(e.isPlainObject(t)?i=t:(i=i||{},t&&(i.alias=t)),this.opts=e.extend(!0,{},this.defaults,i),this.noMasksCache=i&&i.definitions!==n,this.userOptions=i||{},this.isRTL=this.opts.numericInput,r(this.opts.alias,i,this.opts))}function r(t,i,o){var s=a.prototype.aliases[t];return s?(s.alias&&r(s.alias,n,o),e.extend(!0,o,s),e.extend(!0,o,i),!0):(null===o.mask&&(o.mask=t),!1)}function s(t,i){function r(t,r,o){var s=!1;if(null!==t&&""!==t||((s=null!==o.regex)?t=(t=o.regex).replace(/^(\^)(.*)(\$)$/,"$2"):(s=!0,t=".*")),1===t.length&&!1===o.greedy&&0!==o.repeat&&(o.placeholder=""),o.repeat>0||"*"===o.repeat||"+"===o.repeat){var l="*"===o.repeat?0:"+"===o.repeat?1:o.repeat;t=o.groupmarker[0]+t+o.groupmarker[1]+o.quantifiermarker[0]+l+","+o.repeat+o.quantifiermarker[1]}var u,c=s?"regex_"+o.regex:o.numericInput?t.split("").reverse().join(""):t;return a.prototype.masksCache[c]===n||!0===i?(u={mask:t,maskToken:a.prototype.analyseMask(t,s,o),validPositions:{},_buffer:n,buffer:n,tests:{},excludes:{},metadata:r,maskLength:n},!0!==i&&(a.prototype.masksCache[c]=u,u=e.extend(!0,{},a.prototype.masksCache[c]))):u=e.extend(!0,{},a.prototype.masksCache[c]),u}if(e.isFunction(t.mask)&&(t.mask=t.mask(t)),e.isArray(t.mask)){if(t.mask.length>1){if(null===t.keepStatic){t.keepStatic="auto";for(var o=0;o<t.mask.length;o++)if(t.mask[o].charAt(0)!==t.mask[0].charAt(0)){t.keepStatic=!0;break}}var s=t.groupmarker[0];return e.each(t.isRTL?t.mask.reverse():t.mask,function(i,a){s.length>1&&(s+=t.groupmarker[1]+t.alternatormarker+t.groupmarker[0]),a.mask===n||e.isFunction(a.mask)?s+=a:s+=a.mask}),r(s+=t.groupmarker[1],t.mask,t)}t.mask=t.mask.pop()}return t.mask&&t.mask.mask!==n&&!e.isFunction(t.mask.mask)?r(t.mask.mask,t.mask,t):r(t.mask,t.mask,t)}function l(e){var t=i.createElement("input"),n="on"+e,a=n in t;return a||(t.setAttribute(n,"return;"),a="function"==typeof t[n]),t=null,a}function u(r,s,c){function d(e,t,i){t=t||0;var a,r,o,s=[],l=0,u=v();do{!0===e&&h().validPositions[l]?(r=(o=h().validPositions[l]).match,a=o.locator.slice(),s.push(!0===i?o.input:!1===i?r.nativeDef:N(l,r))):(r=(o=P(l,a,l-1)).match,a=o.locator.slice(),(!1===c.jitMasking||l<u||"number"==typeof c.jitMasking&&isFinite(c.jitMasking)&&c.jitMasking>l)&&s.push(!1===i?r.nativeDef:N(l,r))),"auto"===c.keepStatic&&r.newBlockMarker&&null!==r.fn&&(c.keepStatic=l-1),l++}while(($===n||l<$)&&(null!==r.fn||""!==r.def)||t>l);return""===s[s.length-1]&&s.pop(),!1===i&&h().maskLength!==n||(h().maskLength=l-1),s}function h(){return s}function g(e){var t=h();t.buffer=n,!0!==e&&(t.validPositions={},t.p=0)}function v(e,t,i){var a=-1,r=-1,o=i||h().validPositions;e===n&&(e=-1);for(var s in o){var l=parseInt(s);o[l]&&(t||!0!==o[l].generatedInput)&&(l<=e&&(a=l),l>=e&&(r=l))}return-1!==a&&e-a>1||r<e?a:r}function k(t,i,a,r){var o,s=t,l=e.extend(!0,{},h().validPositions),u=!1;for(h().p=t,o=i-1;o>=s;o--)h().validPositions[o]!==n&&(!0!==a&&(!h().validPositions[o].match.optionality&&function(e){var t=h().validPositions[e];if(t!==n&&null===t.match.fn){var i=h().validPositions[e-1],a=h().validPositions[e+1];return i!==n&&a!==n}return!1}(o)||!1===c.canClearPosition(h(),o,v(n,!0),r,c))||delete h().validPositions[o]);for(g(!0),o=s+1;o<=v();){for(;h().validPositions[s]!==n;)s++;if(o<s&&(o=s+1),h().validPositions[o]===n&&j(o))o++;else{var p=P(o);!1===u&&l[s]&&l[s].match.def===p.match.def?(h().validPositions[s]=e.extend(!0,{},l[s]),h().validPositions[s].input=p.input,delete h().validPositions[o],o++):A(s,p.match.def)?!1!==_(s,p.input||N(o),!0)&&(delete h().validPositions[o],o++,u=!0):j(o)||(o++,s--),s++}}if(!0!==r)for(o=v(-1,!0);h().validPositions[o]&&!0===h().validPositions[o].generatedInput;)delete h().validPositions[o--];g(!0)}function y(e,t,i){for(var a,r=S(e=e>0?e-1:0),o=r.alternation!==n?r.locator[r.alternation].toString().split(","):[],s=0;s<t.length&&(!((a=t[s]).match&&(c.greedy&&!0!==a.match.optionalQuantifier||(!1===a.match.optionality||!1===a.match.newBlockMarker)&&!0!==a.match.optionalQuantifier)&&(r.alternation===n||r.alternation!==a.alternation||a.locator[r.alternation]!==n&&D(a.locator[r.alternation].toString().split(","),o)))||!0===i&&(null!==a.match.fn||/[0-9a-bA-Z]/.test(a.match.def)));s++);return a}function b(e){var t=e.locator[e.alternation];return"string"==typeof t&&t.length>0&&(t=t.split(",")[0]),t!==n?t.toString():""}function x(e,t){for(var i=(e.alternation!=n?e.mloc[b(e)]:e.locator).join("");i.length<t;)i+="0";return i}function P(e,t,i){return h().validPositions[e]||y(e,C(e,t?t.slice():t,i))}function S(e){return h().validPositions[e]?h().validPositions[e]:C(e)[0]}function A(e,t){for(var i=!1,n=C(e),a=0;a<n.length;a++)if(n[a].match&&n[a].match.def===t){i=!0;break}return i}function C(t,i,a){function r(i,a,s,l){function u(s,l,p){function m(t,i){var n=0===e.inArray(t,i.matches);return n||e.each(i.matches,function(e,a){if(!0===a.isQuantifier&&(n=m(t,i.matches[e-1])))return!1}),n}function k(t,i,a){var r,o;if((h().tests[t]||h().validPositions[t])&&e.each(h().tests[t]||[h().validPositions[t]],function(e,t){if(t.mloc[i])return r=t,!1;var s=a!==n?a:t.alternation,l=t.locator[s]!==n?t.locator[s].toString().indexOf(i):-1;(o===n||l<o)&&-1!==l&&(r=t,o=l)}),r){var s=r.locator[r.alternation];return(r.mloc[i]||r.mloc[s]||r.locator).slice((a!==n?a:r.alternation)+1)}return a!==n?k(t,i):n}function y(e,t){function i(e){for(var t,i,n=[],a=0,r=e.length;a<r;a++)if("-"===e.charAt(a))for(i=e.charCodeAt(a+1);++t<i;)n.push(String.fromCharCode(t));else t=e.charCodeAt(a),n.push(e.charAt(a));return n.join("")}return c.regex&&null!==e.match.fn&&null!==t.match.fn?-1!==i(t.match.def.replace(/[\[\]]/g,"")).indexOf(i(e.match.def.replace(/[\[\]]/g,""))):e.match.def===t.match.nativeDef}function b(e,t){if(t===n||e.alternation===t.alternation&&-1===e.locator[e.alternation].toString().indexOf(t.locator[t.alternation])){e.mloc=e.mloc||{};var i=e.locator[e.alternation];if(i!==n){if("string"==typeof i&&(i=i.split(",")[0]),e.mloc[i]===n&&(e.mloc[i]=e.locator.slice()),t!==n){for(var a in t.mloc)"string"==typeof a&&(a=a.split(",")[0]),e.mloc[a]===n&&(e.mloc[a]=t.mloc[a]);e.locator[e.alternation]=Object.keys(e.mloc).join(",")}return!0}e.alternation=n}return!1}if(f>1e4)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+h().mask;if(f===t&&s.matches===n)return d.push({match:s,locator:l.reverse(),cd:v,mloc:{}}),!0;if(s.matches!==n){if(s.isGroup&&p!==s){if(s=u(i.matches[e.inArray(s,i.matches)+1],l))return!0}else if(s.isOptional){var x=s;if(s=r(s,a,l,p)){if(!m(o=d[d.length-1].match,x))return!0;g=!0,f=t}}else if(s.isAlternator){var P,S=s,A=[],C=d.slice(),M=l.length,E=a.length>0?a.shift():-1;if(-1===E||"string"==typeof E){var w,D=f,O=a.slice(),_=[];if("string"==typeof E)_=E.split(",");else for(w=0;w<S.matches.length;w++)_.push(w.toString());if(h().excludes[t]){for(var j=_.slice(),F=0,T=h().excludes[t].length;F<T;F++)_.splice(_.indexOf(h().excludes[t][F].toString()),1);0===_.length&&(h().excludes[t]=n,_=j)}(!0===c.keepStatic||isFinite(parseInt(c.keepStatic))&&D>=c.keepStatic)&&(_=_.slice(0,1));for(var R=0;R<_.length;R++){w=parseInt(_[R]),d=[],a=k(f,w,M)||O.slice(),S.matches[w]&&u(S.matches[w],[w].concat(l),p)&&(s=!0),P=d.slice(),f=D,d=[];for(var N=0;N<P.length;N++){var G=P[N],B=!1;G.alternation=G.alternation||M,b(G);for(var I=0;I<A.length;I++){var L=A[I];if("string"!=typeof E||G.alternation!==n&&-1!==e.inArray(G.locator[G.alternation].toString(),_)){if(G.match.nativeDef===L.match.nativeDef){B=!0,b(L,G);break}if(y(G,L)){b(G,L)&&(B=!0,A.splice(A.indexOf(L),0,G));break}if(y(L,G)){b(L,G);break}if(z=L,null===(U=G).match.fn&&null!==z.match.fn&&z.match.fn.test(U.match.def,h(),t,!1,c,!1)){b(G,L)&&(B=!0,A.splice(A.indexOf(L),0,G));break}}}B||A.push(G)}}d=C.concat(A),f=t,g=d.length>0,s=A.length>0,a=O.slice()}else s=u(S.matches[E]||i.matches[E],[E].concat(l),p);if(s)return!0}else if(s.isQuantifier&&p!==i.matches[e.inArray(s,i.matches)-1])for(var H=s,V=a.length>0?a.shift():0;V<(isNaN(H.quantifier.max)?V+1:H.quantifier.max)&&f<=t;V++){var K=i.matches[e.inArray(H,i.matches)-1];if(s=u(K,[V].concat(l),K)){if((o=d[d.length-1].match).optionalQuantifier=V>H.quantifier.min-1,m(o,K)){if(V>H.quantifier.min-1){g=!0,f=t;break}return!0}return!0}}else if(s=r(s,a,l,p))return!0}else f++;var U,z}for(var p=a.length>0?a.shift():0;p<i.matches.length;p++)if(!0!==i.matches[p].isQuantifier){var m=u(i.matches[p],[p].concat(s),l);if(m&&f===t)return m;if(f>t)break}}var o,s,l,u,p=h().maskToken,f=i?a:0,m=i?i.slice():[0],d=[],g=!1,v=i?i.join(""):"";if(t>-1){if(i===n){for(var k,b=t-1;(k=h().validPositions[b]||h().tests[b])===n&&b>-1;)b--;k!==n&&b>-1&&(s=b,l=k,u=[],e.isArray(l)||(l=[l]),l.length>0&&(l[0].alternation===n?0===(u=y(s,l.slice()).locator.slice()).length&&(u=l[0].locator.slice()):e.each(l,function(e,t){if(""!==t.def)if(0===u.length)u=t.locator.slice();else for(var i=0;i<u.length;i++)t.locator[i]&&-1===u[i].toString().indexOf(t.locator[i])&&(u[i]+=","+t.locator[i])})),v=(m=u).join(""),f=b)}if(h().tests[t]&&h().tests[t][0].cd===v)return h().tests[t];for(var x=m.shift();x<p.length&&!(r(p[x],m,[x])&&f===t||f>t);x++);}return(0===d.length||g)&&d.push({match:{fn:null,optionality:!0,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:v}),i!==n&&h().tests[t]?e.extend(!0,[],d):(h().tests[t]=e.extend(!0,[],d),h().tests[t])}function M(){return h()._buffer===n&&(h()._buffer=d(!1,1),h().buffer===n&&(h().buffer=h()._buffer.slice())),h()._buffer}function E(e){return h().buffer!==n&&!0!==e||(h().buffer=d(!0,v(),!0)),h().buffer}function w(e,t,i){var a,r;if(!0===e)g(),e=0,t=i.length;else for(a=e;a<t;a++)delete h().validPositions[a];for(r=e,a=e;a<t;a++)if(g(!0),i[a]!==c.skipOptionalPartCharacter){var o=_(r,i[a],!0,!0);!1!==o&&(g(!0),r=o.caret!==n?o.caret:o.pos+1)}}function D(t,i,a){for(var r,o=c.greedy?i:i.slice(0,1),s=!1,l=a!==n?a.split(","):[],u=0;u<l.length;u++)-1!==(r=t.indexOf(l[u]))&&t.splice(r,1);for(var p=0;p<t.length;p++)if(-1!==e.inArray(t[p],o)){s=!0;break}return s}function O(t,i,a,r,o){var s,l,u,p,f,m,d,k=e.extend(!0,{},h().validPositions),y=!1,x=o!==n?o:v();if(-1===x&&o===n)l=(p=S(s=0)).alternation;else for(;x>=0;x--)if((u=h().validPositions[x])&&u.alternation!==n){if(p&&p.locator[u.alternation]!==u.locator[u.alternation])break;s=x,l=h().validPositions[s].alternation,p=u}if(l!==n){d=parseInt(s),h().excludes[d]=h().excludes[d]||[],!0!==t&&h().excludes[d].push(b(p));var P=[],A=0;for(f=d;f<v(n,!0)+1;f++)(m=h().validPositions[f])&&!0!==m.generatedInput&&/[0-9a-bA-Z]/.test(m.input)?P.push(m.input):f<t&&A++,delete h().validPositions[f];for(;h().excludes[d]&&h().excludes[d].length<10;){var C=-1*A,M=P.slice();for(h().tests[d]=n,g(!0),y=!0;M.length>0;){var E=M.shift();if(E!==c.skipOptionalPartCharacter&&!(y=_(v(n,!0)+1,E,!1,r,!0)))break}if(y&&i!==n){var w=v(t)+1;for(f=d;f<v()+1;f++)((m=h().validPositions[f])===n||null==m.match.fn)&&f<t+C&&C++;y=_((t+=C)>w?w:t,i,a,r,!0)}if(y)break;if(g(),p=S(d),h().validPositions=e.extend(!0,{},k),!h().excludes[d]){y=O(t,i,a,r,d-1);break}var D=b(p);if(-1!==h().excludes[d].indexOf(D)){y=O(t,i,a,r,d-1);break}for(h().excludes[d].push(D),f=d;f<v(n,!0)+1;f++)delete h().validPositions[f]}}return h().excludes[d]=n,y}function _(t,i,r,o,s,l){function u(e){return X?e.begin-e.end>1||e.begin-e.end==1:e.end-e.begin>1||e.end-e.begin==1}function p(i,r,s){var l=!1;return e.each(C(i),function(p,f){var d=f.match;if(E(!0),!1!==(l=null!=d.fn?d.fn.test(r,h(),i,s,c,u(t)):(r===d.def||r===c.skipOptionalPartCharacter)&&""!==d.def&&{c:N(i,d,!0)||d.def,pos:i})){var y=l.c!==n?l.c:r;y=y===c.skipOptionalPartCharacter&&null===d.fn?N(i,d,!0)||d.def:y;var b=i,x=E();if(l.remove!==n&&(e.isArray(l.remove)||(l.remove=[l.remove]),e.each(l.remove.sort(function(e,t){return t-e}),function(e,t){k(t,t+1,!0)})),l.insert!==n&&(e.isArray(l.insert)||(l.insert=[l.insert]),e.each(l.insert.sort(function(e,t){return e-t}),function(e,t){_(t.pos,t.c,!0,o)})),l.refreshFromBuffer){var P=l.refreshFromBuffer;if(w(!0===P?P:P.start,P.end,x),l.pos===n&&l.c===n)return l.pos=v(),!1;if((b=l.pos!==n?l.pos:i)!==i)return l=e.extend(l,_(b,y,!0,o)),!1}else if(!0!==l&&l.pos!==n&&l.pos!==i&&(b=l.pos,w(i,b,E().slice()),b!==i))return l=e.extend(l,_(b,y,!0)),!1;return(!0===l||l.pos!==n||l.c!==n)&&(p>0&&g(!0),m(b,e.extend({},f,{input:function(t,i,n){switch(c.casing||i.casing){case"upper":t=t.toUpperCase();break;case"lower":t=t.toLowerCase();break;case"title":var r=h().validPositions[n-1];t=0===n||r&&r.input===String.fromCharCode(a.keyCode.SPACE)?t.toUpperCase():t.toLowerCase();break;default:if(e.isFunction(c.casing)){var o=Array.prototype.slice.call(arguments);o.push(h().validPositions),t=c.casing.apply(this,o)}}return t}(y,d,b)}),o,u(t))||(l=!1),!1)}}),l}function f(t,i,a){var r;if(t===n)for(t=i-1;t>0&&!h().validPositions[t];t--);for(var o=t;o<i;o++)if(h().validPositions[o]===n&&!j(o,!0)){var s=0==o?S(o):h().validPositions[o-1];if(s){var l,u=x(s),c=C(o).slice(),p=n,f=S(o);if(""===c[c.length-1].match.def&&c.pop(),e.each(c,function(e,t){l=x(t,u.length);var i=Math.abs(l-u);(p===n||i<p)&&null===t.match.fn&&!0!==t.match.optionality&&!0!==t.match.optionalQuantifier&&(p=i,f=t)}),(f=e.extend({},f,{input:N(o,f.match,!0)||f.match.def})).generatedInput=!0,m(o,f,!0),!0!==a){var d=h().validPositions[i].input;h().validPositions[i]=n,r=_(i,d,!0,!0)}}}return r}function m(t,i,a,r){if(r||c.insertMode&&h().validPositions[t]!==n&&a===n){var o,s=e.extend(!0,{},h().validPositions),l=v(n,!0);for(o=t;o<=l;o++)delete h().validPositions[o];h().validPositions[t]=e.extend(!0,{},i);var u,p=!0,m=h().validPositions,d=!1;for(o=u=t;o<=l;o++){var k=s[o];if(k!==n)for(var y=u;""!==S(y).match.def&&(null===k.match.fn&&m[o]&&(!0===m[o].match.optionalQuantifier||!0===m[o].match.optionality)||null!=k.match.fn);){if(y++,!1===d&&s[y]&&s[y].match.def===k.match.def)h().validPositions[y]=e.extend(!0,{},s[y]),h().validPositions[y].input=k.input,f(n,y,!0),u=y,p=!0;else if(A(y,k.match.def)){var b=_(y,k.input,!0,!0);p=!1!==b,u=b.caret||b.insert?v():y,d=!0}else if(!(p=!0===k.generatedInput)&&""===S(y).match.def)break;if(p)break}if(!p)break}if(!p)return h().validPositions=e.extend(!0,{},s),g(!0),!1}else h().validPositions[t]=e.extend(!0,{},i);return g(!0),!0}r=!0===r;var d=t;t.begin!==n&&(d=X&&!u(t)?t.end:t.begin);var y=!0,b=e.extend(!0,{},h().validPositions);if(e.isFunction(c.preValidation)&&!r&&!0!==o&&!0!==l&&(y=c.preValidation(E(),d,i,u(t),c)),!0===y){if(f(n,d,!0),u(t)&&(K(0,a.keyCode.DELETE,t,!0,!0),d=h().p),($===n||d<$)&&(y=p(d,i,r),(!r||!0===o)&&!1===y&&!0!==l)){var P=h().validPositions[d];if(!P||null!==P.match.fn||P.match.def!==i&&i!==c.skipOptionalPartCharacter){if((c.insertMode||h().validPositions[F(d)]===n)&&!j(d,!0))for(var M=d+1,D=F(d);M<=D;M++)if(!1!==(y=p(M,i,r))){y=f(d,y.pos!==n?y.pos:M)||y,d=M;break}}else y={caret:F(d)}}!1!==y||null===c.keepStatic||!1===c.keepStatic||r||!0===s||(y=O(d,i,r,o)),!0===y&&(y={pos:d})}if(e.isFunction(c.postValidation)&&!1!==y&&!r&&!0!==o&&!0!==l){var T=c.postValidation(E(!0),y,c);if(T!==n){if(T.refreshFromBuffer&&T.buffer){var R=T.refreshFromBuffer;w(!0===R?R:R.start,R.end,T.buffer)}y=!0===T?y:T}}return y&&y.pos===n&&(y.pos=d),!1!==y&&!0!==l||(g(!0),h().validPositions=e.extend(!0,{},b)),y}function j(e,t){var i=P(e).match;if(""===i.def&&(i=S(e).match),null!=i.fn)return i.fn;if(!0!==t&&e>-1){var n=C(e);return n.length>1+(""===n[n.length-1].match.def?1:0)}return!1}function F(e,t){for(var i=e+1;""!==S(i).match.def&&(!0===t&&(!0!==S(i).match.newBlockMarker||!j(i))||!0!==t&&!j(i));)i++;return i}function T(e,t){var i,n=e;if(n<=0)return 0;for(;--n>0&&(!0===t&&!0!==S(n).match.newBlockMarker||!0!==t&&!j(n)&&((i=C(n)).length<2||2===i.length&&""===i[1].match.def)););return n}function R(t,i,a,r,o){if(r&&e.isFunction(c.onBeforeWrite)){var s=c.onBeforeWrite.call(J,r,i,a,c);if(s){if(s.refreshFromBuffer){var l=s.refreshFromBuffer;w(!0===l?l:l.start,l.end,s.buffer||i),i=E(!0)}a!==n&&(a=s.caret!==n?s.caret:a)}}t!==n&&(t.inputmask._valueSet(i.join("")),a===n||r!==n&&"blur"===r.type?z(t,a,0===i.length):I(t,a),!0===o&&(te=!0,e(t).trigger("input")))}function N(t,i,a){if((i=i||S(t).match).placeholder!==n||!0===a)return e.isFunction(i.placeholder)?i.placeholder(c):i.placeholder;if(null===i.fn){if(t>-1&&h().validPositions[t]===n){var r,o=C(t),s=[];if(o.length>1+(""===o[o.length-1].match.def?1:0))for(var l=0;l<o.length;l++)if(!0!==o[l].match.optionality&&!0!==o[l].match.optionalQuantifier&&(null===o[l].match.fn||r===n||!1!==o[l].match.fn.test(r.match.def,h(),t,!0,c))&&(s.push(o[l]),null===o[l].match.fn&&(r=o[l]),s.length>1&&/[0-9a-bA-Z]/.test(s[0].match.def)))return c.placeholder.charAt(t%c.placeholder.length)}return i.def}return c.placeholder.charAt(t%c.placeholder.length)}function G(t,i,r,o,s){var l=o.slice(),u="",p=-1,f=n;if(g(),r||!0===c.autoUnmask)p=F(p);else{var m=M().slice(0,F(-1)).join(""),k=l.join("").match(new RegExp("^"+a.escapeRegex(m),"g"));k&&k.length>0&&(l.splice(0,k.length*m.length),p=F(p))}-1===p?(h().p=F(p),p=0):h().p=p,e.each(l,function(i,a){if(a!==n)if(h().validPositions[i]===n&&l[i]===N(i)&&j(i,!0)&&!1===_(i,l[i],!0,n,n,!0))h().p++;else{var o=new e.Event("_checkval");o.which=a.charCodeAt(0),u+=a;var s=v(n,!0),m=S(s),g=P(s+1,m?m.locator.slice():n,s);if(y=p,b=u,-1===d(!0,0,!1).slice(y,F(y)).join("").indexOf(b)||j(y)||S(y).match.nativeDef!==b.charAt(0)&&(" "!==S(y).match.nativeDef||S(y+1).match.nativeDef!==b.charAt(0))||r||c.autoUnmask){var k=r?i:null==g.match.fn&&g.match.optionality&&s+1<h().p?s+1:h().p;(f=oe.keypressEvent.call(t,o,!0,!1,r,k))&&(p=k+1,u="")}else f=oe.keypressEvent.call(t,o,!0,!1,!0,s+1);R(n,E(),f.forwardPosition,o,!1)}var y,b}),i&&R(t,E(),f?f.forwardPosition:n,s||new e.Event("checkval"),s&&"input"===s.type)}function B(t){if(t){if(t.inputmask===n)return t.value;t.inputmask&&t.inputmask.refreshValue&&oe.setValueEvent.call(t)}var i=[],a=h().validPositions;for(var r in a)a[r].match&&null!=a[r].match.fn&&i.push(a[r].input);var o=0===i.length?"":(X?i.reverse():i).join("");if(e.isFunction(c.onUnMask)){var s=(X?E().slice().reverse():E()).join("");o=c.onUnMask.call(J,s,o,c)}return o}function I(a,r,o,s){function l(e){return!0===s||!X||"number"!=typeof e||c.greedy&&""===c.placeholder||(e=a.inputmask.__valueGet.call(a).length-e),e}var u;if(r===n)return a.setSelectionRange?(r=a.selectionStart,o=a.selectionEnd):t.getSelection?(u=t.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode!==a&&u.commonAncestorContainer!==a||(r=u.startOffset,o=u.endOffset):i.selection&&i.selection.createRange&&(o=(r=0-(u=i.selection.createRange()).duplicate().moveStart("character",-a.inputmask._valueGet().length))+u.text.length),{begin:l(r),end:l(o)};if(e.isArray(r)&&(o=X?r[0]:r[1],r=X?r[1]:r[0]),r.begin!==n&&(o=X?r.begin:r.end,r=X?r.end:r.begin),"number"==typeof r){r=l(r),o="number"==typeof(o=l(o))?o:r;var p=parseInt(((a.ownerDocument.defaultView||t).getComputedStyle?(a.ownerDocument.defaultView||t).getComputedStyle(a,null):a.currentStyle).fontSize)*o;if(a.scrollLeft=p>a.scrollWidth?p:0,!1===c.insertMode&&r===o&&o++,a.inputmask.caretPos={begin:r,end:o},a.setSelectionRange)a.selectionStart=r,a.selectionEnd=o;else if(t.getSelection){if(u=i.createRange(),a.firstChild===n||null===a.firstChild){var f=i.createTextNode("");a.appendChild(f)}u.setStart(a.firstChild,r<a.inputmask._valueGet().length?r:a.inputmask._valueGet().length),u.setEnd(a.firstChild,o<a.inputmask._valueGet().length?o:a.inputmask._valueGet().length),u.collapse(!0);var m=t.getSelection();m.removeAllRanges(),m.addRange(u)}else a.createTextRange&&((u=a.createTextRange()).collapse(!0),u.moveEnd("character",o),u.moveStart("character",r),u.select());z(a,{begin:r,end:o})}}function L(t){var i,a,r=E(),o=r.length,s=v(),l={},u=h().validPositions[s],c=u!==n?u.locator.slice():n;for(i=s+1;i<r.length;i++)c=(a=P(i,c,i-1)).locator.slice(),l[i]=e.extend(!0,{},a);var p=u&&u.alternation!==n?u.locator[u.alternation]:n;for(i=o-1;i>s&&((a=l[i]).match.optionality||a.match.optionalQuantifier&&a.match.newBlockMarker||p&&(p!==l[i].locator[u.alternation]&&null!=a.match.fn||null===a.match.fn&&a.locator[u.alternation]&&D(a.locator[u.alternation].toString().split(","),p.toString().split(","))&&""!==C(i)[0].def))&&r[i]===N(i,a.match);i--)o--;return t?{l:o,def:l[o]?l[o].match:n}:o}function H(e){for(var t,i=L(),a=e.length,r=h().validPositions[v()];i<a&&!j(i,!0)&&(t=r!==n?P(i,r.locator.slice(""),r):S(i))&&!0!==t.match.optionality&&(!0!==t.match.optionalQuantifier&&!0!==t.match.newBlockMarker||i+1===a&&""===(r!==n?P(i+1,r.locator.slice(""),r):S(i+1)).match.def);)i++;for(;(t=h().validPositions[i-1])&&t&&t.match.optionality&&t.input===c.skipOptionalPartCharacter;)i--;return e.splice(i),e}function V(t){if(e.isFunction(c.isComplete))return c.isComplete(t,c);if("*"===c.repeat)return n;var i=!1,a=L(!0),r=T(a.l);if(a.def===n||a.def.newBlockMarker||a.def.optionality||a.def.optionalQuantifier){i=!0;for(var o=0;o<=r;o++){var s=P(o).match;if(null!==s.fn&&h().validPositions[o]===n&&!0!==s.optionality&&!0!==s.optionalQuantifier||null===s.fn&&t[o]!==N(o,s)){i=!1;break}}}return i}function K(e,t,i,r,o){if((c.numericInput||X)&&(t===a.keyCode.BACKSPACE?t=a.keyCode.DELETE:t===a.keyCode.DELETE&&(t=a.keyCode.BACKSPACE),X)){var s=i.end;i.end=i.begin,i.begin=s}if(t===a.keyCode.BACKSPACE&&(i.end-i.begin<1||!1===c.insertMode)?(i.begin=T(i.begin),h().validPositions[i.begin]!==n&&h().validPositions[i.begin].input===c.groupSeparator&&i.begin--):t===a.keyCode.DELETE&&i.begin===i.end&&(i.end=j(i.end,!0)&&h().validPositions[i.end]&&h().validPositions[i.end].input!==c.radixPoint?i.end+1:F(i.end)+1,h().validPositions[i.begin]!==n&&h().validPositions[i.begin].input===c.groupSeparator&&i.end++),k(i.begin,i.end,!1,r),!0!==r&&null!==c.keepStatic&&!1!==c.keepStatic){var l=O(!0);l&&(i.begin=l.caret!==n?l.caret:l.pos?F(l.pos.begin?l.pos.begin:l.pos):v(-1,!0))}var u=v(i.begin,!0);if(u<i.begin||-1===i.begin)h().p=F(u);else if(!0!==r&&(h().p=i.begin,!0!==o))for(;h().p<u&&h().validPositions[h().p]===n;)h().p++}function U(n){var a=(n.ownerDocument.defaultView||t).getComputedStyle(n,null),r=i.createElement("div");r.style.width=a.width,r.style.textAlign=a.textAlign,q=i.createElement("div"),n.inputmask.colorMask=q,q.className="im-colormask",n.parentNode.insertBefore(q,n),n.parentNode.removeChild(n),q.appendChild(r),q.appendChild(n),n.style.left=r.offsetLeft+"px",e(n).on("click",function(e){return I(n,function(e){var t,r=i.createElement("span");for(var o in a)isNaN(o)&&-1!==o.indexOf("font")&&(r.style[o]=a[o]);r.style.textTransform=a.textTransform,r.style.letterSpacing=a.letterSpacing,r.style.position="absolute",r.style.height="auto",r.style.width="auto",r.style.visibility="hidden",r.style.whiteSpace="nowrap",i.body.appendChild(r);var s,l=n.inputmask._valueGet(),u=0;for(t=0,s=l.length;t<=s;t++){if(r.innerHTML+=l.charAt(t)||"_",r.offsetWidth>=e){var c=e-u,p=r.offsetWidth-e;r.innerHTML=l.charAt(t),t=(c-=r.offsetWidth/3)<p?t-1:t;break}u=r.offsetWidth}return i.body.removeChild(r),t}(e.clientX)),oe.clickEvent.call(n,[e])}),e(n).on("keydown",function(e){e.shiftKey||!1===c.insertMode||setTimeout(function(){z(n)},0)})}function z(e,t,a){function r(e){if(e===n&&(e=""),p||null!==o.fn&&s.input!==n)if(p&&(null!==o.fn&&s.input!==n||""===o.def)){p=!1;var t=u.length;u[t-1]=u[t-1]+"</span>",u.push(e)}else u.push(e);else p=!0,u.push("<span class='im-static'>"+e)}var o,s,l,u=[],p=!1,f=0;if(q!==n){var m=E();if(t===n?t=I(e):t.begin===n&&(t={begin:t,end:t}),!0!==a){var d=v();do{h().validPositions[f]?(s=h().validPositions[f],o=s.match,l=s.locator.slice(),r(m[f])):(s=P(f,l,f-1),o=s.match,l=s.locator.slice(),(!1===c.jitMasking||f<d||"number"==typeof c.jitMasking&&isFinite(c.jitMasking)&&c.jitMasking>f)&&r(N(f,o))),f++}while(($===n||f<$)&&(null!==o.fn||""!==o.def)||d>f||p);p&&r(),i.activeElement===e&&(u.splice(t.begin,0,t.begin===t.end?'<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">':'<mark class="im-caret-select">'),u.splice(t.end+1,0,"</mark>"))}var g=q.getElementsByTagName("div")[0];g.innerHTML=u.join(""),e.inputmask.positionColorMask(e,g)}}s=s||this.maskset,c=c||this.opts;var Q,W,$,q,Z,J=this,Y=this.el,X=this.isRTL,ee=!1,te=!1,ie=!1,ne=!1,ae=!1,re={on:function(t,i,r){var o=function(t){var i=this;if(i.inputmask===n&&"FORM"!==this.nodeName){var o=e.data(i,"_inputmask_opts");o?new a(o).mask(i):re.off(i)}else{if("setvalue"===t.type||"FORM"===this.nodeName||!(i.disabled||i.readOnly&&!("keydown"===t.type&&t.ctrlKey&&67===t.keyCode||!1===c.tabThrough&&t.keyCode===a.keyCode.TAB))){switch(t.type){case"input":if(!0===te)return te=!1,t.preventDefault();p&&(ae=!0);break;case"keydown":ee=!1,te=!1;break;case"keypress":if(!0===ee)return t.preventDefault();ee=!0;break;case"click":if(f||m){var s=arguments;return setTimeout(function(){r.apply(i,s)},0),!1}}var l=r.apply(i,arguments);return ae&&(ae=!1,setTimeout(function(){I(i,i.inputmask.caretPos,n,!0)})),!1===l&&(t.preventDefault(),t.stopPropagation()),l}t.preventDefault()}};t.inputmask.events[i]=t.inputmask.events[i]||[],t.inputmask.events[i].push(o),-1!==e.inArray(i,["submit","reset"])?null!==t.form&&e(t.form).on(i,o):e(t).on(i,o)},off:function(t,i){var n;t.inputmask&&t.inputmask.events&&(i?(n=[])[i]=t.inputmask.events[i]:n=t.inputmask.events,e.each(n,function(i,n){for(;n.length>0;){var a=n.pop();-1!==e.inArray(i,["submit","reset"])?null!==t.form&&e(t.form).off(i,a):e(t).off(i,a)}delete t.inputmask.events[i]}))}},oe={keydownEvent:function(t){var i=this,n=e(i),r=t.keyCode,o=I(i);if(r===a.keyCode.BACKSPACE||r===a.keyCode.DELETE||m&&r===a.keyCode.BACKSPACE_SAFARI||t.ctrlKey&&r===a.keyCode.X&&!l("cut"))t.preventDefault(),K(0,r,o),R(i,E(!0),h().p,t,i.inputmask._valueGet()!==E().join("")),i.inputmask._valueGet()===M().join("")?n.trigger("cleared"):!0===V(E())&&n.trigger("complete");else if(r===a.keyCode.END||r===a.keyCode.PAGE_DOWN){t.preventDefault();var s=F(v());c.insertMode||s!==h().maskLength||t.shiftKey||s--,I(i,t.shiftKey?o.begin:s,s,!0)}else r===a.keyCode.HOME&&!t.shiftKey||r===a.keyCode.PAGE_UP?(t.preventDefault(),I(i,0,t.shiftKey?o.begin:0,!0)):(c.undoOnEscape&&r===a.keyCode.ESCAPE||90===r&&t.ctrlKey)&&!0!==t.altKey?(G(i,!0,!1,Q.split("")),n.trigger("click")):r!==a.keyCode.INSERT||t.shiftKey||t.ctrlKey?!0===c.tabThrough&&r===a.keyCode.TAB?(!0===t.shiftKey?(null===S(o.begin).match.fn&&(o.begin=F(o.begin)),o.end=T(o.begin,!0),o.begin=T(o.end,!0)):(o.begin=F(o.begin,!0),o.end=F(o.begin,!0),o.end<h().maskLength&&o.end--),o.begin<h().maskLength&&(t.preventDefault(),I(i,o.begin,o.end))):t.shiftKey||!1===c.insertMode&&(r===a.keyCode.RIGHT?setTimeout(function(){var e=I(i);I(i,e.begin)},0):r===a.keyCode.LEFT&&setTimeout(function(){var e=I(i);I(i,X?e.begin+1:e.begin-1)},0)):(c.insertMode=!c.insertMode,I(i,c.insertMode||o.begin!==h().maskLength?o.begin:o.begin-1));c.onKeyDown.call(this,t,E(),I(i).begin,c),ie=-1!==e.inArray(r,c.ignorables)},keypressEvent:function(t,i,r,o,s){var l=this,u=e(l),p=t.which||t.charCode||t.keyCode;if(!(!0===i||t.ctrlKey&&t.altKey)&&(t.ctrlKey||t.metaKey||ie))return p===a.keyCode.ENTER&&Q!==E().join("")&&(Q=E().join(""),setTimeout(function(){u.trigger("change")},0)),!0;if(p){46===p&&!1===t.shiftKey&&""!==c.radixPoint&&(p=c.radixPoint.charCodeAt(0));var f,m=i?{begin:s,end:s}:I(l),d=String.fromCharCode(p);h().writeOutBuffer=!0;var v=_(m,d,o);if(!1!==v&&(g(!0),f=v.caret!==n?v.caret:F(v.pos.begin?v.pos.begin:v.pos),h().p=f),f=c.numericInput&&v.caret===n?T(f):f,!1!==r&&(setTimeout(function(){c.onKeyValidation.call(l,p,v,c)},0),h().writeOutBuffer&&!1!==v)){var k=E();R(l,k,f,t,!0!==i),!0!==i&&setTimeout(function(){!0===V(k)&&u.trigger("complete")},0)}if(t.preventDefault(),i)return!1!==v&&(v.forwardPosition=f),v}},pasteEvent:function(i){var n,a=this,r=i.originalEvent||i,o=e(a),s=a.inputmask._valueGet(!0),l=I(a);X&&(n=l.end,l.end=l.begin,l.begin=n);var u=s.substr(0,l.begin),p=s.substr(l.end,s.length);if(u===(X?M().reverse():M()).slice(0,l.begin).join("")&&(u=""),p===(X?M().reverse():M()).slice(l.end).join("")&&(p=""),X&&(n=u,u=p,p=n),t.clipboardData&&t.clipboardData.getData)s=u+t.clipboardData.getData("Text")+p;else{if(!r.clipboardData||!r.clipboardData.getData)return!0;s=u+r.clipboardData.getData("text/plain")+p}var f=s;if(e.isFunction(c.onBeforePaste)){if(!1===(f=c.onBeforePaste.call(J,s,c)))return i.preventDefault();f||(f=s)}return G(a,!1,!1,X?f.split("").reverse():f.toString().split("")),R(a,E(),F(v()),i,Q!==E().join("")),!0===V(E())&&o.trigger("complete"),i.preventDefault()},inputFallBackEvent:function(t){var i,n,r=this,o=r.inputmask._valueGet();if(E().join("")!==o){var s=I(r);if(n=s,"."===(i=o).charAt(n.begin-1)&&""!==c.radixPoint&&((i=i.split(""))[n.begin-1]=c.radixPoint.charAt(0),i=i.join("")),o=function(e,t,i){if(f){var n=t.replace(E().join(""),"");if(1===n.length){var a=t.split("");a.splice(i.begin,0,n),t=a.join("")}}return t}(0,o=i,s),E().join("")!==o){var l=E().join(""),u=o.length>l.length?-1:0,p=o.substr(0,s.begin),m=o.substr(s.begin),d=l.substr(0,s.begin+u),h=l.substr(s.begin+u),g=s,v="",k=!1;if(p!==d){for(var y=(k=p.length>=d.length)?p.length:d.length,b=0;p.charAt(b)===d.charAt(b)&&b<y;b++);k&&(0===u&&(g.begin=b),v+=p.slice(b,g.end))}if(m!==h&&(m.length>h.length?v+=m.slice(0,1):m.length<h.length&&(g.end+=h.length-m.length,k||""===c.radixPoint||""!==m||p.charAt(g.begin+u-1)!==c.radixPoint||(g.begin--,v=c.radixPoint))),R(r,E(),{begin:g.begin+u,end:g.end+u}),v.length>0)e.each(v.split(""),function(t,i){var n=new e.Event("keypress");n.which=i.charCodeAt(0),ie=!1,oe.keypressEvent.call(r,n)});else{g.begin===g.end-1&&(g.begin=T(g.begin+1),g.begin===g.end-1?I(r,g.begin):I(r,g.begin,g.end));var x=new e.Event("keydown");x.keyCode=a.keyCode.DELETE,oe.keydownEvent.call(r,x),!1===c.insertMode&&I(r,I(r).begin-1)}t.preventDefault()}}},setValueEvent:function(t){this.inputmask.refreshValue=!1;var i=this.inputmask._valueGet(!0);e.isFunction(c.onBeforeMask)&&(i=c.onBeforeMask.call(J,i,c)||i),i=i.split(""),G(this,!0,!1,X?i.reverse():i),Q=E().join(""),(c.clearMaskOnLostFocus||c.clearIncomplete)&&this.inputmask._valueGet()===M().join("")&&this.inputmask._valueSet("")},focusEvent:function(e){var t=this,i=t.inputmask._valueGet();c.showMaskOnFocus&&(!c.showMaskOnHover||c.showMaskOnHover&&""===i)&&(t.inputmask._valueGet()!==E().join("")?R(t,E(),F(v())):!1===ne&&I(t,F(v()))),!0===c.positionCaretOnTab&&!1===ne&&oe.clickEvent.apply(t,[e,!0]),Q=E().join("")},mouseleaveEvent:function(e){if(ne=!1,c.clearMaskOnLostFocus&&i.activeElement!==this){var t=E().slice(),n=this.inputmask._valueGet();n!==this.getAttribute("placeholder")&&""!==n&&(-1===v()&&n===M().join("")?t=[]:H(t),R(this,t))}},clickEvent:function(t,a){var r=this;setTimeout(function(){if(i.activeElement===r){var t=I(r);if(a&&(X?t.end=t.begin:t.begin=t.end),t.begin===t.end)switch(c.positionCaretOnClick){case"none":break;case"select":I(r,0,E().length);break;case"radixFocus":if(function(t){if(""!==c.radixPoint){var i=h().validPositions;if(i[t]===n||i[t].input===N(t)){if(t<F(-1))return!0;var a=e.inArray(c.radixPoint,E());if(-1!==a){for(var r in i)if(a<r&&i[r].input!==N(r))return!1;return!0}}}return!1}(t.begin)){var o=E().join("").indexOf(c.radixPoint);I(r,c.numericInput?F(o):o);break}default:var s=t.begin,l=v(s,!0),u=F(l);if(s<u)I(r,j(s,!0)||j(s-1,!0)?s:F(s));else{var p=h().validPositions[l],f=P(u,p?p.match.locator:n,p),m=N(u,f.match);if(""!==m&&E()[u]!==m&&!0!==f.match.optionalQuantifier&&!0!==f.match.newBlockMarker||!j(u,!0)&&f.match.def===m){var d=F(u);(s>=d||s===u)&&(u=d)}I(r,u)}}}},0)},dblclickEvent:function(e){var t=this;setTimeout(function(){I(t,0,F(v()))},0)},cutEvent:function(n){var r=e(this),o=I(this),s=n.originalEvent||n,l=t.clipboardData||s.clipboardData,u=X?E().slice(o.end,o.begin):E().slice(o.begin,o.end);l.setData("text",X?u.reverse().join(""):u.join("")),i.execCommand&&i.execCommand("copy"),K(0,a.keyCode.DELETE,o),R(this,E(),h().p,n,Q!==E().join("")),this.inputmask._valueGet()===M().join("")&&r.trigger("cleared")},blurEvent:function(t){var i=e(this);if(this.inputmask){var a=this.inputmask._valueGet(),r=E().slice();""===a&&q===n||(c.clearMaskOnLostFocus&&(-1===v()&&a===M().join("")?r=[]:H(r)),!1===V(r)&&(setTimeout(function(){i.trigger("incomplete")},0),c.clearIncomplete&&(g(),r=c.clearMaskOnLostFocus?[]:M().slice())),R(this,r,n,t)),Q!==E().join("")&&(Q=r.join(""),i.trigger("change"))}},mouseenterEvent:function(e){ne=!0,i.activeElement!==this&&c.showMaskOnHover&&this.inputmask._valueGet()!==E().join("")&&R(this,E())},submitEvent:function(e){Q!==E().join("")&&W.trigger("change"),c.clearMaskOnLostFocus&&-1===v()&&Y.inputmask._valueGet&&Y.inputmask._valueGet()===M().join("")&&Y.inputmask._valueSet(""),c.removeMaskOnSubmit&&(Y.inputmask._valueSet(Y.inputmask.unmaskedvalue(),!0),setTimeout(function(){R(Y,E())},0))},resetEvent:function(e){Y.inputmask.refreshValue=!0,setTimeout(function(){W.trigger("setvalue")},0)}};if(a.prototype.positionColorMask=function(e,t){e.style.left=t.offsetLeft+"px"},r!==n)switch(r.action){case"isComplete":return Y=r.el,V(E());case"unmaskedvalue":return Y!==n&&r.value===n||(Z=r.value,Z=(e.isFunction(c.onBeforeMask)&&c.onBeforeMask.call(J,Z,c)||Z).split(""),G(n,!1,!1,X?Z.reverse():Z),e.isFunction(c.onBeforeWrite)&&c.onBeforeWrite.call(J,n,E(),0,c)),B(Y);case"mask":!function(t){re.off(t);var a=function(t,a){var r=t.getAttribute("type"),s="INPUT"===t.tagName&&-1!==e.inArray(r,a.supportsInputType)||t.isContentEditable||"TEXTAREA"===t.tagName;if(!s)if("INPUT"===t.tagName){var l=i.createElement("input");l.setAttribute("type",r),s="text"===l.type,l=null}else s="partial";return!1!==s?function(t){function r(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==v()||!0!==a.nullable?i.activeElement===this&&a.clearMaskOnLostFocus?(X?H(E().slice()).reverse():H(E().slice())).join(""):l.call(this):"":l.call(this)}function s(t){u.call(this,t),this.inputmask&&e(this).trigger("setvalue")}var l,u,c;if(!t.inputmask.__valueGet){if(!0!==a.noValuePatching){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===o("test".__proto__)?function(e){return e.__proto__}:function(e){return e.constructor.prototype});var p=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"):n;p&&p.get&&p.set?(l=p.get,u=p.set,Object.defineProperty(t,"value",{get:r,set:s,configurable:!0})):"INPUT"!==t.tagName&&(l=function(){return this.textContent},u=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:r,set:s,configurable:!0}))}else i.__lookupGetter__&&t.__lookupGetter__("value")&&(l=t.__lookupGetter__("value"),u=t.__lookupSetter__("value"),t.__defineGetter__("value",r),t.__defineSetter__("value",s));t.inputmask.__valueGet=l,t.inputmask.__valueSet=u}t.inputmask._valueGet=function(e){return X&&!0!==e?l.call(this.el).split("").reverse().join(""):l.call(this.el)},t.inputmask._valueSet=function(e,t){u.call(this.el,null===e||e===n?"":!0!==t&&X?e.split("").reverse().join(""):e)},l===n&&(l=function(){return this.value},u=function(e){this.value=e},function(t){if(e.valHooks&&(e.valHooks[t]===n||!0!==e.valHooks[t].inputmaskpatch)){var i=e.valHooks[t]&&e.valHooks[t].get?e.valHooks[t].get:function(e){return e.value},r=e.valHooks[t]&&e.valHooks[t].set?e.valHooks[t].set:function(e,t){return e.value=t,e};e.valHooks[t]={get:function(e){if(e.inputmask){if(e.inputmask.opts.autoUnmask)return e.inputmask.unmaskedvalue();var t=i(e);return-1!==v(n,n,e.inputmask.maskset.validPositions)||!0!==a.nullable?t:""}return i(e)},set:function(t,i){var n,a=e(t);return n=r(t,i),t.inputmask&&a.trigger("setvalue"),n},inputmaskpatch:!0}}}(t.type),c=t,re.on(c,"mouseenter",function(t){var i=e(this);this.inputmask._valueGet()!==E().join("")&&i.trigger("setvalue")}))}}(t):t.inputmask=n,s}(t,c);if(!1!==a&&(W=e(Y=t),-1===($=Y!==n?Y.maxLength:n)&&($=n),!0===c.colorMask&&U(Y),p&&("inputmode"in Y&&(Y.inputmode=c.inputmode,Y.setAttribute("inputmode",c.inputmode)),!0===c.disablePredictiveText&&("autocorrect"in Y?Y.autocorrect=!1:(!0!==c.colorMask&&U(Y),Y.type="password"))),!0===a&&(re.on(Y,"submit",oe.submitEvent),re.on(Y,"reset",oe.resetEvent),re.on(Y,"mouseenter",oe.mouseenterEvent),re.on(Y,"blur",oe.blurEvent),re.on(Y,"focus",oe.focusEvent),re.on(Y,"mouseleave",oe.mouseleaveEvent),!0!==c.colorMask&&re.on(Y,"click",oe.clickEvent),re.on(Y,"dblclick",oe.dblclickEvent),re.on(Y,"paste",oe.pasteEvent),re.on(Y,"dragdrop",oe.pasteEvent),re.on(Y,"drop",oe.pasteEvent),re.on(Y,"cut",oe.cutEvent),re.on(Y,"complete",c.oncomplete),re.on(Y,"incomplete",c.onincomplete),re.on(Y,"cleared",c.oncleared),p||!0===c.inputEventOnly?Y.removeAttribute("maxLength"):(re.on(Y,"keydown",oe.keydownEvent),re.on(Y,"keypress",oe.keypressEvent)),re.on(Y,"compositionstart",e.noop),re.on(Y,"compositionupdate",e.noop),re.on(Y,"compositionend",e.noop),re.on(Y,"keyup",e.noop),re.on(Y,"input",oe.inputFallBackEvent),re.on(Y,"beforeinput",e.noop)),re.on(Y,"setvalue",oe.setValueEvent),Q=M().join(""),""!==Y.inputmask._valueGet(!0)||!1===c.clearMaskOnLostFocus||i.activeElement===Y)){var r=e.isFunction(c.onBeforeMask)&&c.onBeforeMask.call(J,Y.inputmask._valueGet(!0),c)||Y.inputmask._valueGet(!0);""!==r&&G(Y,!0,!1,X?r.split("").reverse():r.split(""));var s=E().slice();Q=s.join(""),!1===V(s)&&c.clearIncomplete&&g(),c.clearMaskOnLostFocus&&i.activeElement!==Y&&(-1===v()?s=[]:H(s)),R(Y,s),i.activeElement===Y&&I(Y,F(v()))}}(Y);break;case"format":return Z=(e.isFunction(c.onBeforeMask)&&c.onBeforeMask.call(J,r.value,c)||r.value).split(""),G(n,!0,!1,X?Z.reverse():Z),r.metadata?{value:X?E().slice().reverse().join(""):E().join(""),metadata:u.call(this,{action:"getmetadata"},s,c)}:X?E().slice().reverse().join(""):E().join("");case"isValid":r.value?(Z=r.value.split(""),G(n,!0,!0,X?Z.reverse():Z)):r.value=E().join("");for(var se=E(),le=L(),ue=se.length-1;ue>le&&!j(ue);ue--);return se.splice(le,ue+1-le),V(se)&&r.value===E().join("");case"getemptymask":return M().join("");case"remove":return Y&&Y.inputmask&&(W=e(Y),Y.inputmask._valueSet(c.autoUnmask?B(Y):Y.inputmask._valueGet(!0)),re.off(Y),Y.inputmask.colorMask&&((q=Y.inputmask.colorMask).removeChild(Y),q.parentNode.insertBefore(Y,q),q.parentNode.removeChild(q)),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Y),"value")&&Y.inputmask.__valueGet&&Object.defineProperty(Y,"value",{get:Y.inputmask.__valueGet,set:Y.inputmask.__valueSet,configurable:!0}):i.__lookupGetter__&&Y.__lookupGetter__("value")&&Y.inputmask.__valueGet&&(Y.__defineGetter__("value",Y.inputmask.__valueGet),Y.__defineSetter__("value",Y.inputmask.__valueSet)),Y.inputmask=n),Y;case"getmetadata":if(e.isArray(s.metadata)){var ce=d(!0,0,!1).join("");return e.each(s.metadata,function(e,t){if(t.mask===ce)return ce=t,!1}),ce}return s.metadata}}var c=navigator.userAgent,p=l("touchstart"),f=/iemobile/i.test(c),m=/iphone/i.test(c)&&!f;return a.prototype={dataAttribute:"data-inputmask",defaults:{placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,alias:null,onKeyDown:e.noop,onBeforeMask:null,onBeforePaste:function(t,i){return e.isFunction(i.onBeforeMask)?i.onBeforeMask.call(this,t,i):t},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixPointDefinitionSymbol:n,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","password","search"],ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,canClearPosition:e.noop,preValidation:null,postValidation:null,staticDefinitionSymbol:n,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:!1,disablePredictiveText:!1,importDataAttributes:!0},definitions:{9:{validator:"[0-91-9]",definitionSymbol:"*"},a:{validator:"[A-Za-zА-яЁёA-yµ]",definitionSymbol:"*"},"*":{validator:"[0-91-9A-Za-zА-яЁёA-yµ]"}},aliases:{},masksCache:{},mask:function(o){var l=this;return"string"==typeof o&&(o=i.getElementById(o)||i.querySelectorAll(o)),o=o.nodeName?[o]:o,e.each(o,function(i,o){var c=e.extend(!0,{},l.opts);if(function(i,a,o,s){if(!0===a.importDataAttributes){var l,u,c,p,f=function(e,a){null!==(a=a!==n?a:i.getAttribute(s+"-"+e))&&("string"==typeof a&&(0===e.indexOf("on")?a=t[a]:"false"===a?a=!1:"true"===a&&(a=!0)),o[e]=a)},m=i.getAttribute(s);if(m&&""!==m&&(m=m.replace(/'/g,'"'),u=JSON.parse("{"+m+"}")),u){c=n;for(p in u)if("alias"===p.toLowerCase()){c=u[p];break}}f("alias",c),o.alias&&r(o.alias,o,a);for(l in a){if(u){c=n;for(p in u)if(p.toLowerCase()===l.toLowerCase()){c=u[p];break}}f(l,c)}}return e.extend(!0,a,o),("rtl"===i.dir||a.rightAlign)&&(i.style.textAlign="right"),("rtl"===i.dir||a.numericInput)&&(i.dir="ltr",i.removeAttribute("dir"),a.isRTL=!0),Object.keys(o).length}(o,c,e.extend(!0,{},l.userOptions),l.dataAttribute)){var p=s(c,l.noMasksCache);p!==n&&(o.inputmask!==n&&(o.inputmask.opts.autoUnmask=!0,o.inputmask.remove()),o.inputmask=new a(n,n,!0),o.inputmask.opts=c,o.inputmask.noMasksCache=l.noMasksCache,o.inputmask.userOptions=e.extend(!0,{},l.userOptions),o.inputmask.isRTL=c.isRTL||c.numericInput,o.inputmask.el=o,o.inputmask.maskset=p,e.data(o,"_inputmask_opts",c),u.call(o.inputmask,{action:"mask"}))}}),o&&o[0]&&o[0].inputmask||this},option:function(t,i){return"string"==typeof t?this.opts[t]:"object"===(void 0===t?"undefined":o(t))?(e.extend(this.userOptions,t),this.el&&!0!==i&&this.mask(this.el),this):void 0},unmaskedvalue:function(e){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"unmaskedvalue",value:e})},remove:function(){return u.call(this,{action:"remove"})},getemptymask:function(){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"getemptymask"})},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"isComplete"})},getmetadata:function(){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"getmetadata"})},isValid:function(e){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"isValid",value:e})},format:function(e,t){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"format",value:e,metadata:t})},analyseMask:function(t,i,r){function o(e,t,i,n){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=i||!1,this.isAlternator=n||!1,this.quantifier={min:1,max:1}}function s(t,o,s){s=s!==n?s:t.matches.length;var l=t.matches[s-1];if(i)0===o.indexOf("[")||k&&/\\d|\\s|\\w]/i.test(o)||"."===o?t.matches.splice(s++,0,{fn:new RegExp(o,r.casing?"i":""),optionality:t.isOptional,newBlockMarker:l===n||l.def!==o,casing:null,def:o,placeholder:n,nativeDef:o}):(k&&(o=o[o.length-1]),e.each(o.split(""),function(e,i){l=t.matches[s-1],t.matches.splice(s++,0,{fn:null,optionality:t.isOptional,newBlockMarker:l===n||l.def!==i&&null!==l.fn,casing:null,def:r.staticDefinitionSymbol||i,placeholder:r.staticDefinitionSymbol!==n?i:n,nativeDef:i})})),k=!1;else{var u=(r.definitions?r.definitions[o]:n)||a.prototype.definitions[o];u&&!k?t.matches.splice(s++,0,{fn:u.validator?"string"==typeof u.validator?new RegExp(u.validator,r.casing?"i":""):new function(){this.test=u.validator}:new RegExp("."),optionality:t.isOptional,newBlockMarker:l===n||l.def!==(u.definitionSymbol||o),casing:u.casing,def:u.definitionSymbol||o,placeholder:u.placeholder,nativeDef:o}):(t.matches.splice(s++,0,{fn:null,optionality:t.isOptional,newBlockMarker:l===n||l.def!==o&&null!==l.fn,casing:null,def:r.staticDefinitionSymbol||o,placeholder:r.staticDefinitionSymbol!==n?o:n,nativeDef:o}),k=!1)}}function l(){if(b.length>0){if(s(f=b[b.length-1],c),f.isAlternator){m=b.pop();for(var e=0;e<m.matches.length;e++)m.matches[e].isGroup=!1;b.length>0?(f=b[b.length-1]).matches.push(m):y.matches.push(m)}}else s(y,c)}var u,c,p,f,m,d,h,g=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,v=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,k=!1,y=new o,b=[],x=[];for(i&&(r.optionalmarker[0]=n,r.optionalmarker[1]=n);u=i?v.exec(t):g.exec(t);){if(c=u[0],i)switch(c.charAt(0)){case"?":c="{0,1}";break;case"+":case"*":c="{"+c+"}"}if(k)l();else switch(c.charAt(0)){case r.escapeChar:k=!0,i&&l();break;case r.optionalmarker[1]:case r.groupmarker[1]:if((p=b.pop()).openGroup=!1,p!==n)if(b.length>0){if((f=b[b.length-1]).matches.push(p),f.isAlternator){m=b.pop();for(var P=0;P<m.matches.length;P++)m.matches[P].isGroup=!1,m.matches[P].alternatorGroup=!1;b.length>0?(f=b[b.length-1]).matches.push(m):y.matches.push(m)}}else y.matches.push(p);else l();break;case r.optionalmarker[0]:b.push(new o(!1,!0));break;case r.groupmarker[0]:b.push(new o(!0));break;case r.quantifiermarker[0]:var S=new o(!1,!1,!0),A=(c=c.replace(/[{}]/g,"")).split(","),C=isNaN(A[0])?A[0]:parseInt(A[0]),M=1===A.length?C:isNaN(A[1])?A[1]:parseInt(A[1]);if("*"!==M&&"+"!==M||(C="*"===M?0:1),S.quantifier={min:C,max:M},b.length>0){var E=b[b.length-1].matches;(u=E.pop()).isGroup||((h=new o(!0)).matches.push(u),u=h),E.push(u),E.push(S)}else(u=y.matches.pop()).isGroup||(i&&null===u.fn&&"."===u.def&&(u.fn=new RegExp(u.def,r.casing?"i":"")),(h=new o(!0)).matches.push(u),u=h),y.matches.push(u),y.matches.push(S);break;case r.alternatormarker:if(b.length>0){var w=(f=b[b.length-1]).matches[f.matches.length-1];d=f.openGroup&&(w.matches===n||!1===w.isGroup&&!1===w.isAlternator)?b.pop():f.matches.pop()}else d=y.matches.pop();if(d.isAlternator)b.push(d);else if(d.alternatorGroup?(m=b.pop(),d.alternatorGroup=!1):m=new o(!1,!1,!1,!0),m.matches.push(d),b.push(m),d.openGroup){d.openGroup=!1;var D=new o(!0);D.alternatorGroup=!0,b.push(D)}break;default:l()}}for(;b.length>0;)p=b.pop(),y.matches.push(p);return y.matches.length>0&&(function t(a){a&&a.matches&&e.each(a.matches,function(e,o){var l=a.matches[e+1];(l===n||l.matches===n||!1===l.isQuantifier)&&o&&o.isGroup&&(o.isGroup=!1,i||(s(o,r.groupmarker[0],0),!0!==o.openGroup&&s(o,r.groupmarker[1]))),t(o)})}(y),x.push(y)),(r.numericInput||r.isRTL)&&function e(t){t.matches=t.matches.reverse();for(var i in t.matches)if(t.matches.hasOwnProperty(i)){var a=parseInt(i);if(t.matches[i].isQuantifier&&t.matches[a+1]&&t.matches[a+1].isGroup){var o=t.matches[i];t.matches.splice(i,1),t.matches.splice(a+1,0,o)}t.matches[i].matches!==n?t.matches[i]=e(t.matches[i]):t.matches[i]=function(e){return e===r.optionalmarker[0]?e=r.optionalmarker[1]:e===r.optionalmarker[1]?e=r.optionalmarker[0]:e===r.groupmarker[0]?e=r.groupmarker[1]:e===r.groupmarker[1]&&(e=r.groupmarker[0]),e}(t.matches[i])}return t}(x[0]),x}},a.extendDefaults=function(t){e.extend(!0,a.prototype.defaults,t)},a.extendDefinitions=function(t){e.extend(!0,a.prototype.definitions,t)},a.extendAliases=function(t){e.extend(!0,a.prototype.aliases,t)},a.format=function(e,t,i){return a(t).format(e,i)},a.unmask=function(e,t){return a(t).unmaskedvalue(e)},a.isValid=function(e,t){return a(t).isValid(e)},a.remove=function(t){e.each(t,function(e,t){t.inputmask&&t.inputmask.remove()})},a.escapeRegex=function(e){return e.replace(new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim"),"\\$1")},a.keyCode={BACKSPACE:8,BACKSPACE_SAFARI:127,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,RIGHT:39,SPACE:32,TAB:9,UP:38,X:88,CONTROL:17},a})?n.apply(t,a):n)&&(e.exports=r)},function(e,t){e.exports=jQuery},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}i(4),i(7),i(8),i(9);var a=n(i(1)),r=n(i(0)),o=n(i(2));r.default===o.default&&i(10),window.Inputmask=a.default},function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(0),i(1)],void 0!==(r="function"==typeof(n=function(e,t){function i(e){if(!e.tokenizer){var t=[];for(var i in o)-1===t.indexOf(i[0])&&t.push(i[0]);e.tokenizer="("+t.join("+|")+")+?|.",e.tokenizer=new RegExp(e.tokenizer,"g")}return e.tokenizer}function n(e,n,a){for(var r,s="";r=i(a).exec(e);)void 0===n?s+=o[r[0]]?"("+o[r[0]][0]+")":t.escapeRegex(r[0]):o[r[0]]?s+=o[r[0]][3].call(n.date):s+=r[0];return s}function a(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function r(e,t,n){var a,r,s,l,u,c,p,f,m={date:new Date(1,0,1)},d=e;if("string"==typeof d){for(;r=i(n).exec(t);){var h=d.slice(0,r[0].length);o.hasOwnProperty(r[0])&&(a=o[r[0]][2],s=o[r[0]][1],l=m,u=h,c=n,p=void 0,f=void 0,"year"===a?(l[a]=(f=4===(p=u).length?p:(new Date).getFullYear().toString().substr(0,4-p.length)+p,n.min&&n.min.year&&n.max&&n.max.year?(f=f.replace(/[^0-9]/g,""),f=p.charAt(0)===n.max.year.charAt(0)?p.replace(/[^0-9]/g,"0"):f+n.min.year.substr(f.length)):f=f.replace(/[^0-9]/g,"0"),f),l["raw"+a]=u):l[a]=c.min&&u.match(/[^0-9]/)?c.min[a]:u,void 0!==s&&s.call(l.date,"month"==a?parseInt(l[a])-1:l[a])),d=d.slice(h.length)}return m}}var o={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return a(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return a(Date.prototype.getMonth.call(this)+1,2)}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return a(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return a(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return a(Date.prototype.getHours.call(this),2)}],hhh:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["[01][0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return a(Date.prototype.getHours.call(this),2)}],HHH:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["[0-5][0-9]",Date.prototype.setMinutes,"minutes",function(){return a(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["[0-5][0-9]",Date.prototype.setSeconds,"seconds",function(){return a(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return a(Date.prototype.getMilliseconds.call(this),3)}],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return a(Date.prototype.getMilliseconds.call(this),2)}],t:[""],tt:[""],T:[""],TT:[""],Z:[""],o:[""],S:[""]},s={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};return t.extendAliases({datetime:{mask:function(e){return e.inputFormat=s[e.inputFormat]||e.inputFormat,e.displayFormat=s[e.displayFormat]||e.displayFormat||e.inputFormat,e.outputFormat=s[e.outputFormat]||e.outputFormat||e.inputFormat,e.placeholder=e.placeholder!==t.prototype.defaults.placeholder?e.placeholder:e.inputFormat,e.min=r(e.min,e.inputFormat,e),e.max=r(e.max,e.inputFormat,e),e.regex=n(e.inputFormat,void 0,e),null},inputFormat:"isoDateTime",displayFormat:void 0,outputFormat:void 0,min:null,max:null,i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]},postValidation:function(e,t,i){var n,a,o,s,l,u=t,c=r(e.join(""),i.inputFormat,i);return u&&c.date.getTime()==c.date.getTime()&&(s=c,l=u,u=(u=(!isFinite(s.day)||"29"==s.day&&!isFinite(s.rawyear)||new Date(s.date.getFullYear(),isFinite(s.month)?s.month:s.date.getMonth()+1,0).getDate()>=s.day)&&l)&&(n=c.date,o=!0,(a=i).min&&a.min.date.getTime()==a.min.date.getTime()&&(o=o&&a.min.date.getTime()<=n.getTime()),a.max&&a.max.date.getTime()==a.max.date.getTime()&&(o=o&&a.max.date.getTime()>=n.getTime()),o)),u},onKeyDown:function(n,r,o,s){if(n.ctrlKey&&n.keyCode===t.keyCode.RIGHT){for(var l,u=new Date,c="";l=i(s).exec(s.inputFormat);)"d"===l[0].charAt(0)?c+=a(u.getDate(),l[0].length):"m"===l[0].charAt(0)?c+=a(u.getMonth()+1,l[0].length):"yyyy"===l[0]?c+=u.getFullYear().toString():"y"===l[0].charAt(0)&&(c+=a(u.getYear(),l[0].length));this.inputmask._valueSet(c),e(this).trigger("setvalue")}},onUnMask:function(e,t,i){return n(i.outputFormat,r(e,i.inputFormat,i),i)},insertMode:!1}}),t})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n;"function"==typeof Symbol&&Symbol.iterator,void 0!==(n=function(){return window}.call(t,i,t,e))&&(e.exports=n)},function(e,t,i){"use strict";var n;"function"==typeof Symbol&&Symbol.iterator,void 0!==(n=function(){return document}.call(t,i,t,e))&&(e.exports=n)},function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(0),i(1)],void 0!==(r="function"==typeof(n=function(e,t){return t.extendDefinitions({A:{validator:"[A-Za-zА-яЁёA-yµ]",casing:"upper"},"&":{validator:"[0-9A-Za-zА-яЁёA-yµ]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}}),t.extendAliases({url:{definitions:{i:{validator:"."}},mask:"(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",insertMode:!1,autoUnmask:!1,inputmode:"url"},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(e,t,i,n,a){return i-1>-1&&"."!==t.buffer[i-1]?(e=t.buffer[i-1]+e,e=i-2>-1&&"."!==t.buffer[i-2]?t.buffer[i-2]+e:"0"+e):e="00"+e,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)}}},onUnMask:function(e,t,i){return e},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,onBeforePaste:function(e,t){return(e=e.toLowerCase()).replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",casing:"lower"},"-":{validator:"[0-9A-Za-z-]",casing:"lower"}},onUnMask:function(e,t,i){return e},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}}),t})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(0),i(1)],void 0!==(r="function"==typeof(n=function(e,t,i){function n(e,i){for(var n="",a=0;a<e.length;a++)t.prototype.definitions[e.charAt(a)]||i.definitions[e.charAt(a)]||i.optionalmarker.start===e.charAt(a)||i.optionalmarker.end===e.charAt(a)||i.quantifiermarker.start===e.charAt(a)||i.quantifiermarker.end===e.charAt(a)||i.groupmarker.start===e.charAt(a)||i.groupmarker.end===e.charAt(a)||i.alternatormarker===e.charAt(a)?n+="\\"+e.charAt(a):n+=e.charAt(a);return n}return t.extendAliases({numeric:{mask:function(e){if(0!==e.repeat&&isNaN(e.integerDigits)&&(e.integerDigits=e.repeat),e.repeat=0,e.groupSeparator===e.radixPoint&&e.digits&&"0"!==e.digits&&("."===e.radixPoint?e.groupSeparator=",":","===e.radixPoint?e.groupSeparator=".":e.groupSeparator="")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=i),e.autoGroup=e.autoGroup&&""!==e.groupSeparator,e.autoGroup&&("string"==typeof e.groupSize&&isFinite(e.groupSize)&&(e.groupSize=parseInt(e.groupSize)),isFinite(e.integerDigits))){var t=Math.floor(e.integerDigits/e.groupSize),a=e.integerDigits%e.groupSize;e.integerDigits=parseInt(e.integerDigits)+(0===a?t-1:t),e.integerDigits<1&&(e.integerDigits="*")}e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),"radixFocus"===e.positionCaretOnClick&&""===e.placeholder&&!1===e.integerOptional&&(e.positionCaretOnClick="lvp"),e.definitions[";"]=e.definitions["~"],e.definitions[";"].definitionSymbol="~",!0===e.numericInput&&(e.positionCaretOnClick="radixFocus"===e.positionCaretOnClick?"lvp":e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=2),e.decimalProtect=!1);var r="[+]";if(r+=n(e.prefix,e),!0===e.integerOptional?r+="~{1,"+e.integerDigits+"}":r+="~{"+e.integerDigits+"}",e.digits!==i){e.radixPointDefinitionSymbol=e.decimalProtect?":":e.radixPoint;var o=e.digits.toString().split(",");isFinite(o[0]&&o[1]&&isFinite(o[1]))?r+=e.radixPointDefinitionSymbol+";{"+e.digits+"}":(isNaN(e.digits)||parseInt(e.digits)>0)&&(e.digitsOptional?r+="["+e.radixPointDefinitionSymbol+";{1,"+e.digits+"}]":r+=e.radixPointDefinitionSymbol+";{"+e.digits+"}")}return r+=n(e.suffix,e),r+="[-]",e.greedy=!1,r},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:!1,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,inputmode:"numeric",preValidation:function(t,n,a,r,o){if("-"===a||a===o.negationSymbol.front)return!0===o.allowMinus&&(o.isNegative=o.isNegative===i||!o.isNegative,""===t.join("")||{caret:n,dopost:!0});if(!1===r&&a===o.radixPoint&&o.digits!==i&&(isNaN(o.digits)||parseInt(o.digits)>0)){var s=e.inArray(o.radixPoint,t);if(-1!==s)return!0===o.numericInput?n===s:{caret:s+1}}return!0},postValidation:function(n,a,r){var o=r.suffix.split(""),s=r.prefix.split("");if(a.pos===i&&a.caret!==i&&!0!==a.dopost)return a;var l=a.caret!==i?a.caret:a.pos,u=n.slice();r.numericInput&&(l=u.length-l-1,u=u.reverse());var c=u[l];if(c===r.groupSeparator&&(c=u[l+=1]),l===u.length-r.suffix.length-1&&c===r.radixPoint)return a;c!==i&&c!==r.radixPoint&&c!==r.negationSymbol.front&&c!==r.negationSymbol.back&&(u[l]="?",r.prefix.length>0&&l>=(!1===r.isNegative?1:0)&&l<r.prefix.length-1+(!1===r.isNegative?1:0)?s[l-(!1===r.isNegative?1:0)]="?":r.suffix.length>0&&l>=u.length-r.suffix.length-(!1===r.isNegative?1:0)&&(o[l-(u.length-r.suffix.length-(!1===r.isNegative?1:0))]="?")),s=s.join(""),o=o.join("");var p=u.join("").replace(s,"");if(p=(p=(p=(p=p.replace(o,"")).replace(new RegExp(t.escapeRegex(r.groupSeparator),"g"),"")).replace(new RegExp("[-"+t.escapeRegex(r.negationSymbol.front)+"]","g"),"")).replace(new RegExp(t.escapeRegex(r.negationSymbol.back)+"$"),""),isNaN(r.placeholder)&&(p=p.replace(new RegExp(t.escapeRegex(r.placeholder),"g"),"")),p.length>1&&1!==p.indexOf(r.radixPoint)&&("0"===c&&(p=p.replace(/^\?/g,"")),p=p.replace(/^0/g,"")),p.charAt(0)===r.radixPoint&&""!==r.radixPoint&&!0!==r.numericInput&&(p="0"+p),""!==p){if(p=p.split(""),(!r.digitsOptional||r.enforceDigitsOnBlur&&"blur"===a.event)&&isFinite(r.digits)){var f=e.inArray(r.radixPoint,p),m=e.inArray(r.radixPoint,u);-1===f&&(p.push(r.radixPoint),f=p.length-1);for(var d=1;d<=r.digits;d++)r.digitsOptional&&(!r.enforceDigitsOnBlur||"blur"!==a.event)||p[f+d]!==i&&p[f+d]!==r.placeholder.charAt(0)?-1!==m&&u[m+d]!==i&&(p[f+d]=p[f+d]||u[m+d]):p[f+d]=a.placeholder||r.placeholder.charAt(0)}if(!0!==r.autoGroup||""===r.groupSeparator||c===r.radixPoint&&a.pos===i&&!a.dopost)p=p.join("");else{var h=p[p.length-1]===r.radixPoint&&a.c===r.radixPoint;p=t(function(e,t){var i="";if(i+="("+t.groupSeparator+"*{"+t.groupSize+"}){*}",""!==t.radixPoint){var n=e.join("").split(t.radixPoint);n[1]&&(i+=t.radixPoint+"*{"+n[1].match(/^\d*\??\d*/)[0].length+"}")}return i}(p,r),{numericInput:!0,jitMasking:!0,definitions:{"*":{validator:"[0-9?]",cardinality:1}}}).format(p.join("")),h&&(p+=r.radixPoint),p.charAt(0)===r.groupSeparator&&p.substr(1)}}if(r.isNegative&&"blur"===a.event&&(r.isNegative="0"!==p),p=s+p,p+=o,r.isNegative&&(p=r.negationSymbol.front+p,p+=r.negationSymbol.back),p=p.split(""),c!==i)if(c!==r.radixPoint&&c!==r.negationSymbol.front&&c!==r.negationSymbol.back)(l=e.inArray("?",p))>-1?p[l]=c:l=a.caret||0;else if(c===r.radixPoint||c===r.negationSymbol.front||c===r.negationSymbol.back){var g=e.inArray(c,p);-1!==g&&(l=g)}r.numericInput&&(l=p.length-l-1,p=p.reverse());var v={caret:c===i||a.pos!==i?l+(r.numericInput?-1:1):l,buffer:p,refreshFromBuffer:a.dopost||n.join("")!==p.join("")};return v.refreshFromBuffer?v:a},onBeforeWrite:function(n,a,r,o){if(n)switch(n.type){case"keydown":return o.postValidation(a,{caret:r,dopost:!0},o);case"blur":case"checkval":var s;if((l=o).parseMinMaxOptions===i&&(null!==l.min&&(l.min=l.min.toString().replace(new RegExp(t.escapeRegex(l.groupSeparator),"g"),""),","===l.radixPoint&&(l.min=l.min.replace(l.radixPoint,".")),l.min=isFinite(l.min)?parseFloat(l.min):NaN,isNaN(l.min)&&(l.min=Number.MIN_VALUE)),null!==l.max&&(l.max=l.max.toString().replace(new RegExp(t.escapeRegex(l.groupSeparator),"g"),""),","===l.radixPoint&&(l.max=l.max.replace(l.radixPoint,".")),l.max=isFinite(l.max)?parseFloat(l.max):NaN,isNaN(l.max)&&(l.max=Number.MAX_VALUE)),l.parseMinMaxOptions="done"),null!==o.min||null!==o.max){if(s=o.onUnMask(a.join(""),i,e.extend({},o,{unmaskAsNumber:!0})),null!==o.min&&s<o.min)return o.isNegative=o.min<0,o.postValidation(o.min.toString().replace(".",o.radixPoint).split(""),{caret:r,dopost:!0,placeholder:"0"},o);if(null!==o.max&&s>o.max)return o.isNegative=o.max<0,o.postValidation(o.max.toString().replace(".",o.radixPoint).split(""),{caret:r,dopost:!0,placeholder:"0"},o)}return o.postValidation(a,{caret:r,placeholder:"0",event:"blur"},o);case"_checkval":return{caret:r}}var l},regex:{integerPart:function(e,i){return i?new RegExp("["+t.escapeRegex(e.negationSymbol.front)+"+]?"):new RegExp("["+t.escapeRegex(e.negationSymbol.front)+"+]?\\d+")},integerNPart:function(e){return new RegExp("[\\d"+t.escapeRegex(e.groupSeparator)+t.escapeRegex(e.placeholder.charAt(0))+"]+")}},definitions:{"~":{validator:function(e,n,a,r,o,s){var l=r?new RegExp("[0-9"+t.escapeRegex(o.groupSeparator)+"]").test(e):new RegExp("[0-9]").test(e);if(!0===l){if(!0!==o.numericInput&&n.validPositions[a]!==i&&"~"===n.validPositions[a].match.def&&!s){var u=n.buffer.join(""),c=(u=(u=u.replace(new RegExp("[-"+t.escapeRegex(o.negationSymbol.front)+"]","g"),"")).replace(new RegExp(t.escapeRegex(o.negationSymbol.back)+"$"),"")).split(o.radixPoint);c.length>1&&(c[1]=c[1].replace(/0/g,o.placeholder.charAt(0))),"0"===c[0]&&(c[0]=c[0].replace(/0/g,o.placeholder.charAt(0))),u=c[0]+o.radixPoint+c[1]||"";var p=n._buffer.join("");for(u===o.radixPoint&&(u=p);null===u.match(t.escapeRegex(p)+"$");)p=p.slice(1);l=(u=(u=u.replace(p,"")).split(""))[a]===i?{pos:a,remove:a}:{pos:a}}}else r||e!==o.radixPoint||n.validPositions[a-1]!==i||(n.buffer[a]="0",l={pos:a+1});return l},cardinality:1},"+":{validator:function(e,t,i,n,a){return a.allowMinus&&("-"===e||e===a.negationSymbol.front)},cardinality:1,placeholder:""},"-":{validator:function(e,t,i,n,a){return a.allowMinus&&e===a.negationSymbol.back},cardinality:1,placeholder:""},":":{validator:function(e,i,n,a,r){var o="["+t.escapeRegex(r.radixPoint)+"]",s=new RegExp(o).test(e);return s&&i.validPositions[n]&&i.validPositions[n].match.placeholder===r.radixPoint&&(s={caret:n+1}),s},cardinality:1,placeholder:function(e){return e.radixPoint}}},onUnMask:function(e,i,n){if(""===i&&!0===n.nullable)return i;var a=e.replace(n.prefix,"");return a=(a=a.replace(n.suffix,"")).replace(new RegExp(t.escapeRegex(n.groupSeparator),"g"),""),""!==n.placeholder.charAt(0)&&(a=a.replace(new RegExp(n.placeholder.charAt(0),"g"),"0")),n.unmaskAsNumber?(""!==n.radixPoint&&-1!==a.indexOf(n.radixPoint)&&(a=a.replace(t.escapeRegex.call(this,n.radixPoint),".")),a=(a=a.replace(new RegExp("^"+t.escapeRegex(n.negationSymbol.front)),"-")).replace(new RegExp(t.escapeRegex(n.negationSymbol.back)+"$"),""),Number(a)):a},isComplete:function(e,i){var n=e.join("");if(e.slice().join("")!==n)return!1;var a=n.replace(i.prefix,"");return a=(a=a.replace(i.suffix,"")).replace(new RegExp(t.escapeRegex(i.groupSeparator)+"([0-9]{3})","g"),"$1"),","===i.radixPoint&&(a=a.replace(t.escapeRegex(i.radixPoint),".")),isFinite(a)},onBeforeMask:function(e,n){if(n.isNegative=i,e=e.toString().charAt(e.length-1)===n.radixPoint?e.toString().substr(0,e.length-1):e.toString(),""!==n.radixPoint&&isFinite(e)){var a=e.split("."),r=""!==n.groupSeparator?parseInt(n.groupSize):0;2===a.length&&(a[0].length>r||a[1].length>r||a[0].length<=r&&a[1].length<r)&&(e=e.replace(".",n.radixPoint))}var o=e.match(/,/g),s=e.match(/\./g);if(e=s&&o?s.length>o.length?(e=e.replace(/\./g,"")).replace(",",n.radixPoint):o.length>s.length?(e=e.replace(/,/g,"")).replace(".",n.radixPoint):e.indexOf(".")<e.indexOf(",")?e.replace(/\./g,""):e.replace(/,/g,""):e.replace(new RegExp(t.escapeRegex(n.groupSeparator),"g"),""),0===n.digits&&(-1!==e.indexOf(".")?e=e.substring(0,e.indexOf(".")):-1!==e.indexOf(",")&&(e=e.substring(0,e.indexOf(",")))),""!==n.radixPoint&&isFinite(n.digits)&&-1!==e.indexOf(n.radixPoint)){var l=e.split(n.radixPoint)[1].match(new RegExp("\\d*"))[0];if(parseInt(n.digits)<l.toString().length){var u=Math.pow(10,parseInt(n.digits));e=e.replace(t.escapeRegex(n.radixPoint),"."),e=(e=Math.round(parseFloat(e)*u)/u).toString().replace(".",n.radixPoint)}}return e},canClearPosition:function(e,t,i,n,a){var r=e.validPositions[t],o=r.input!==a.radixPoint||null!==e.validPositions[t].match.fn&&!1===a.decimalProtect||r.input===a.radixPoint&&e.validPositions[t+1]&&null===e.validPositions[t+1].match.fn||isFinite(r.input)||t===i||r.input===a.groupSeparator||r.input===a.negationSymbol.front||r.input===a.negationSymbol.back;return!o||"+"!==r.match.nativeDef&&"-"!==r.match.nativeDef||(a.isNegative=!1),o},onKeyDown:function(i,n,a,r){var o=e(this);if(i.ctrlKey)switch(i.keyCode){case t.keyCode.UP:o.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(r.step)),o.trigger("setvalue");break;case t.keyCode.DOWN:o.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(r.step)),o.trigger("setvalue")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,digitsOptional:!0,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowMinus:!1}}),t})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(0),i(1)],void 0!==(r="function"==typeof(n=function(e,t){function i(e,t){var i=(e.mask||e).replace(/#/g,"0").replace(/\)/,"0").replace(/[+()#-]/g,""),n=(t.mask||t).replace(/#/g,"0").replace(/\)/,"0").replace(/[+()#-]/g,"");return i.localeCompare(n)}var n=t.prototype.analyseMask;return t.prototype.analyseMask=function(t,i,a){var r={};return a.phoneCodes&&(a.phoneCodes&&a.phoneCodes.length>1e3&&(function e(i,n,a){n=n||"",a=a||r,""!==n&&(a[n]={});for(var o="",s=a[n]||a,l=i.length-1;l>=0;l--)s[o=(t=i[l].mask||i[l]).substr(0,1)]=s[o]||[],s[o].unshift(t.substr(1)),i.splice(l,1);for(var u in s)s[u].length>500&&e(s[u].slice(),u,s)}((t=t.substr(1,t.length-2)).split(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])),t=function t(i){var n="",r=[];for(var o in i)e.isArray(i[o])?1===i[o].length?r.push(o+i[o]):r.push(o+a.groupmarker[0]+i[o].join(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])+a.groupmarker[1]):r.push(o+t(i[o]));return 1===r.length?n+=r[0]:n+=a.groupmarker[0]+r.join(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])+a.groupmarker[1],n}(r)),t=t.replace(/9/g,"\\9")),n.call(this,t,i,a)},t.extendAliases({abstractphone:{groupmarker:["<",">"],countrycode:"",phoneCodes:[],keepStatic:"auto",mask:function(e){return e.definitions={"#":t.prototype.definitions[9]},e.phoneCodes.sort(i)},onBeforeMask:function(e,t){var i=e.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(i.indexOf(t.countrycode)>1||-1===i.indexOf(t.countrycode))&&(i="+"+t.countrycode+i),i},onUnMask:function(e,t,i){return e.replace(/[()#-]/g,"")},inputmode:"tel"}}),t})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n,a,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};a=[i(2),i(1)],void 0!==(r="function"==typeof(n=function(e,t){return void 0===e.fn.inputmask&&(e.fn.inputmask=function(i,n){var a,r=this[0];if(void 0===n&&(n={}),"string"==typeof i)switch(i){case"unmaskedvalue":return r&&r.inputmask?r.inputmask.unmaskedvalue():e(r).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return r&&r.inputmask?r.inputmask.getemptymask():"";case"hasMaskedValue":return!(!r||!r.inputmask)&&r.inputmask.hasMaskedValue();case"isComplete":return!r||!r.inputmask||r.inputmask.isComplete();case"getmetadata":return r&&r.inputmask?r.inputmask.getmetadata():void 0;case"setvalue":e(r).val(n),r&&void 0===r.inputmask&&e(r).triggerHandler("setvalue");break;case"option":if("string"!=typeof n)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(n)});if(r&&void 0!==r.inputmask)return r.inputmask.option(n);break;default:return n.alias=i,a=new t(n),this.each(function(){a.mask(this)})}else{if("object"==(void 0===i?"undefined":o(i)))return a=new t(i),void 0===i.mask&&void 0===i.alias?this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(i);a.mask(this)}):this.each(function(){a.mask(this)});if(void 0===i)return this.each(function(){(a=new t(n)).mask(this)})}}),e.fn.inputmask})?n.apply(t,a):n)&&(e.exports=r)}]);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:66:"/local/templates/kalmatron/js/jquery.uniform.min.js?17331450308308";s:6:"source";s:51:"/local/templates/kalmatron/js/jquery.uniform.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(e,t){"use strict";function n(e){var t=Array.prototype.slice.call(arguments,1);return e.prop?e.prop.apply(e,t):e.attr.apply(e,t)}function s(e,t,n){var s,a;for(s in n)n.hasOwnProperty(s)&&(a=s.replace(/ |$/g,t.eventNamespace),e.bind(a,n[s]))}function a(e,t,n){s(e,n,{focus:function(){t.addClass(n.focusClass)},blur:function(){t.removeClass(n.focusClass),t.removeClass(n.activeClass)},mouseenter:function(){t.addClass(n.hoverClass)},mouseleave:function(){t.removeClass(n.hoverClass),t.removeClass(n.activeClass)},"mousedown touchbegin":function(){e.is(":disabled")||t.addClass(n.activeClass)},"mouseup touchend":function(){t.removeClass(n.activeClass)}})}function i(e,t){e.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass)}function r(e,t,n){n?e.addClass(t):e.removeClass(t)}function l(e,t,n){var s="checked",a=t.is(":"+s);t.prop?t.prop(s,a):a?t.attr(s,s):t.removeAttr(s),r(e,n.checkedClass,a)}function u(e,t,n){r(e,n.disabledClass,t.is(":disabled"))}function o(e,t,n){switch(n){case"after":return e.after(t),e.next();case"before":return e.before(t),e.prev();case"wrap":return e.wrap(t),e.parent()}return null}function c(t,s,a){var i,r,l;return a||(a={}),a=e.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},a),i=e("<div />"),r=e("<span />"),s.autoHide&&t.is(":hidden")&&"none"===t.css("display")&&i.hide(),a.divClass&&i.addClass(a.divClass),s.wrapperClass&&i.addClass(s.wrapperClass),a.spanClass&&r.addClass(a.spanClass),l=n(t,"id"),s.useID&&l&&n(i,"id",s.idPrefix+"-"+l),a.spanHtml&&r.html(a.spanHtml),i=o(t,i,a.divWrap),r=o(t,r,a.spanWrap),u(i,t,s),{div:i,span:r}}function d(t,n){var s;return n.wrapperClass?(s=e("<span />").addClass(n.wrapperClass),s=o(t,s,"wrap")):null}function f(){var t,n,s,a;return a="rgb(120,2,153)",n=e('<div style="width:0;height:0;color:'+a+'">'),e("body").append(n),s=n.get(0),t=window.getComputedStyle?window.getComputedStyle(s,"").color:(s.currentStyle||s.style||{}).color,n.remove(),t.replace(/ /g,"")!==a}function p(t){return t?e("<span />").text(t).html():""}function m(){return navigator.cpuClass&&!navigator.product}function v(){return window.XMLHttpRequest!==void 0?!0:!1}function h(e){var t;return e[0].multiple?!0:(t=n(e,"size"),!t||1>=t?!1:!0)}function C(){return!1}function w(e,t){var n="none";s(e,t,{"selectstart dragstart mousedown":C}),e.css({MozUserSelect:n,msUserSelect:n,webkitUserSelect:n,userSelect:n})}function b(e,t,n){var s=e.val();""===s?s=n.fileDefaultHtml:(s=s.split(/[\/\\]+/),s=s[s.length-1]),t.text(s)}function y(e,t,n){var s,a;for(s=[],e.each(function(){var e;for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s.push({el:this,name:e,old:this.style[e]}),this.style[e]=t[e])}),n();s.length;)a=s.pop(),a.el.style[a.name]=a.old}function g(e,t){var n;n=e.parents(),n.push(e[0]),n=n.not(":visible"),y(n,{visibility:"hidden",display:"block",position:"absolute"},t)}function k(e,t){return function(){e.unwrap().unwrap().unbind(t.eventNamespace)}}var H=!0,x=!1,A=[{match:function(e){return e.is("a, button, :submit, :reset, input[type='button']")},apply:function(e,t){var r,l,o,d,f;return l=t.submitDefaultHtml,e.is(":reset")&&(l=t.resetDefaultHtml),d=e.is("a, button")?function(){return e.html()||l}:function(){return p(n(e,"value"))||l},o=c(e,t,{divClass:t.buttonClass,spanHtml:d()}),r=o.div,a(e,r,t),f=!1,s(r,t,{"click touchend":function(){var t,s,a,i;f||e.is(":disabled")||(f=!0,e[0].dispatchEvent?(t=document.createEvent("MouseEvents"),t.initEvent("click",!0,!0),s=e[0].dispatchEvent(t),e.is("a")&&s&&(a=n(e,"target"),i=n(e,"href"),a&&"_self"!==a?window.open(i,a):document.location.href=i)):e.click(),f=!1)}}),w(r,t),{remove:function(){return r.after(e),r.remove(),e.unbind(t.eventNamespace),e},update:function(){i(r,t),u(r,e,t),e.detach(),o.span.html(d()).append(e)}}}},{match:function(e){return e.is(":checkbox")},apply:function(e,t){var n,r,o;return n=c(e,t,{divClass:t.checkboxClass}),r=n.div,o=n.span,a(e,r,t),s(e,t,{"click touchend":function(){l(o,e,t)}}),l(o,e,t),{remove:k(e,t),update:function(){i(r,t),o.removeClass(t.checkedClass),l(o,e,t),u(r,e,t)}}}},{match:function(e){return e.is(":file")},apply:function(t,r){function l(){b(t,p,r)}var d,f,p,v;return d=c(t,r,{divClass:r.fileClass,spanClass:r.fileButtonClass,spanHtml:r.fileButtonHtml,spanWrap:"after"}),f=d.div,v=d.span,p=e("<span />").html(r.fileDefaultHtml),p.addClass(r.filenameClass),p=o(t,p,"after"),n(t,"size")||n(t,"size",f.width()/10),a(t,f,r),l(),m()?s(t,r,{click:function(){t.trigger("change"),setTimeout(l,0)}}):s(t,r,{change:l}),w(p,r),w(v,r),{remove:function(){return p.remove(),v.remove(),t.unwrap().unbind(r.eventNamespace)},update:function(){i(f,r),b(t,p,r),u(f,t,r)}}}},{match:function(e){if(e.is("input")){var t=(" "+n(e,"type")+" ").toLowerCase(),s=" color date datetime datetime-local email month number password search tel text time url week ";return s.indexOf(t)>=0}return!1},apply:function(e,t){var s,i;return s=n(e,"type"),e.addClass(t.inputClass),i=d(e,t),a(e,e,t),t.inputAddTypeAsClass&&e.addClass(s),{remove:function(){e.removeClass(t.inputClass),t.inputAddTypeAsClass&&e.removeClass(s),i&&e.unwrap()},update:C}}},{match:function(e){return e.is(":radio")},apply:function(t,r){var o,d,f;return o=c(t,r,{divClass:r.radioClass}),d=o.div,f=o.span,a(t,d,r),s(t,r,{"click touchend":function(){e.uniform.update(e(':radio[name="'+n(t,"name")+'"]'))}}),l(f,t,r),{remove:k(t,r),update:function(){i(d,r),l(f,t,r),u(d,t,r)}}}},{match:function(e){return e.is("select")&&!h(e)?!0:!1},apply:function(t,n){var r,l,o,d;return n.selectAutoWidth&&g(t,function(){d=t.width()}),r=c(t,n,{divClass:n.selectClass,spanHtml:(t.find(":selected:first")||t.find("option:first")).html(),spanWrap:"before"}),l=r.div,o=r.span,n.selectAutoWidth?g(t,function(){y(e([o[0],l[0]]),{display:"block"},function(){var e;e=o.outerWidth()-o.width(),l.width(d+e),o.width(d)})}):l.addClass("fixedWidth"),a(t,l,n),s(t,n,{change:function(){o.html(t.find(":selected").html()),l.removeClass(n.activeClass)},"click touchend":function(){var e=t.find(":selected").html();o.html()!==e&&t.trigger("change")},keyup:function(){o.html(t.find(":selected").html())}}),w(o,n),{remove:function(){return o.remove(),t.unwrap().unbind(n.eventNamespace),t},update:function(){n.selectAutoWidth?(e.uniform.restore(t),t.uniform(n)):(i(l,n),o.html(t.find(":selected").html()),u(l,t,n))}}}},{match:function(e){return e.is("select")&&h(e)?!0:!1},apply:function(e,t){var n;return e.addClass(t.selectMultiClass),n=d(e,t),a(e,e,t),{remove:function(){e.removeClass(t.selectMultiClass),n&&e.unwrap()},update:C}}},{match:function(e){return e.is("textarea")},apply:function(e,t){var n;return e.addClass(t.textareaClass),n=d(e,t),a(e,e,t),{remove:function(){e.removeClass(t.textareaClass),n&&e.unwrap()},update:C}}}];m()&&!v()&&(H=!1),e.uniform={defaults:{activeClass:"active",autoHide:!0,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:!0,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:!1,selectAutoWidth:!0,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:!0,wrapperClass:null},elements:[]},e.fn.uniform=function(t){var n=this;return t=e.extend({},e.uniform.defaults,t),x||(x=!0,f()&&(H=!1)),H?(t.resetSelector&&e(t.resetSelector).mouseup(function(){window.setTimeout(function(){e.uniform.update(n)},10)}),this.each(function(){var n,s,a,i=e(this);if(i.data("uniformed"))return e.uniform.update(i),void 0;for(n=0;A.length>n;n+=1)if(s=A[n],s.match(i,t))return a=s.apply(i,t),i.data("uniformed",a),e.uniform.elements.push(i.get(0)),void 0})):this},e.uniform.restore=e.fn.uniform.restore=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n,s=e(this);n=s.data("uniformed"),n&&(n.remove(),t=e.inArray(this,e.uniform.elements),t>=0&&e.uniform.elements.splice(t,1),s.removeData("uniformed"))})},e.uniform.update=e.fn.uniform.update=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n=e(this);t=n.data("uniformed"),t&&t.update(n,t.options)})}})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:63:"/local/templates/kalmatron/js/searchtitle.min.js?17331450301414";s:6:"source";s:44:"/local/templates/kalmatron/js/searchtitle.js";s:3:"min";s:48:"/local/templates/kalmatron/js/searchtitle.min.js";s:3:"map";s:52:"/local/templates/kalmatron/js/searchtitle.min.js.map";}"*/
$(document).on("click",".dropdown-select.searchtype .dropdown-menu-item:not(.dropdown-menu-item--current)",(function(){let $this=$(this),$title=$this.closest(".dropdown-select").find(".dropdown-select__title"),$menu=$this.closest(".dropdown-select").find(".dropdown-select__list"),bVisibleMeu,animate=$menu.is(":visible")?"fadeOut":"transition.slideUpIn",type=$this.data("type"),name="all"===type?BX.message("SEARCH_IN_SITE"):BX.message("SEARCH_IN_CATALOG");$title.hasClass("clicked")||($title.addClass("clicked"),$title.toggleClass("opened"),$menu.stop().slideUp(300,(function(){$title.removeClass("clicked")}))),$.cookie("searchtitle_type",type),$this.closest(".dropdown-select").find("input[name=type]").val(type),$(".title-search-result").hide().empty(),BX.fireEvent($this.closest(".dropdown-select").find("input[name=type]")[0],"change"),$(".dropdown-select.searchtype").each((function(){$(this).closest("form").attr("action","all"===type?arAsproOptions.PAGES.SEARCH_PAGE_URL:arAsproOptions.PAGES.CATALOG_PAGE_URL),$(this).find(".dropdown-select__title>span").text(name),$(this).find("input[name=type]").val(type),$(this).find(".dropdown-menu-item").removeClass("dropdown-menu-item--current"),$(this).find(".dropdown-menu-item[data-type="+type+"]").addClass("dropdown-menu-item--current")}));try{$this.closest("form").find("input[name=q]")[0].focus()}catch(e){}}));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:55:"/local/templates/kalmatron/js/script.js?175217420211689";s:6:"source";s:39:"/local/templates/kalmatron/js/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function() {
    if ($(window).width() > 991) {
        if ($(window).scrollTop() > 100) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    }

    if ($(window).width() > 991) {
        $(window).scroll(() => {
            if ($(window).scrollTop() > 100) {
                $('.header').addClass('scrolled');
            } else {
                $('.header').removeClass('scrolled');
            }
        });
    }

    const mainSlider = new Swiper('.main-block__slider', {
        slidesPerView: 1,
        centered: true,
        breakpoints: {
            991: {
                slidesPerView: 'auto',
                spaceBetween: 125,
                centered: false,
                pagination: {
                    el: ".main-pagination",
                    clickable: true,
                },
            }
        }
    });

    const reputationSlider = new Swiper('.reputation-slider', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        breakpoints: {
            991: {
                pagination: {
                    el: ".reputation-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".reputation-arrow-next",
                    prevEl: ".reputation-arrow-prev",
                },
            }
        }
    });

    const certificatesSlider = new Swiper('.certificates-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        breakpoints: {
            600: {
                slidesPerView: 2,
                spaceBetween: 20,
                navigation: {
                    nextEl: ".certificates-arrow-next",
                    prevEl: ".certificates-arrow-prev",
                },
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
                navigation: {
                    nextEl: ".certificates-arrow-next",
                    prevEl: ".certificates-arrow-prev",
                },
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 20,
                navigation: {
                    nextEl: ".certificates-arrow-next",
                    prevEl: ".certificates-arrow-prev",
                },
            }
        }
    });

    const articlesSlider = new Swiper('.article-page__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            991: {
                slidesPerView: 2,
                spaceBetween: 20,
                navigation: {
                    nextEl: ".article-arrow-next",
                    prevEl: ".article-arrow-prev",
                },
            },
        }
    });

    const technologiesSlider = new Swiper('.technologies__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            600: {
                slidesPerView: 2,
                spaceBetween: 20,
                navigation: {
                    nextEl: ".technologies-arrow-next",
                    prevEl: ".technologies-arrow-prev",
                },
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
                navigation: {
                    nextEl: ".technologies-arrow-next",
                    prevEl: ".technologies-arrow-prev",
                },
            },
        }
    });


    // $('.show-more').click(function() {
        // const $this = $(this);
        // const $parent = $this.parent();
        // const isParentHasActiveClass = $parent.hasClass('active');

        // $parent.toggleClass('active');

        // $this.text(
            // isParentHasActiveClass
                // ? 'Смотреть полностью'
                // : 'Скрыть'
        // );
    // });

    $('.qa__main').click(function() {
        const $parent = $(this).parent();

        $parent.toggleClass('active');
        $parent.find('.qa__text').slideToggle('fast');
    });

    $('.objects__selects-item').click(function() {
       const $this = $(this);

       if ($this.hasClass('active')) return;

        $('.objects__selects-item').removeClass('active');
        $(this).addClass('active');

        $('.objects__list-all').removeClass('active');

       const selectedObjectItem = $this.data('object-item');
       $(`.objects__list-all[data-object-item=${selectedObjectItem}]`).addClass('active');
    });

    $('.docs__selects-item').click(function() {
       const $this = $(this);

       if ($this.hasClass('active')) return;

        $('.docs__selects-item').removeClass('active');
        $(this).addClass('active');

        $('.docs__content').removeClass('active');

       const selectedDocsItem = $this.data('docs-item');
       $(`.docs__content[data-docs-item=${selectedDocsItem}]`).addClass('active');
    });

    $('header .search-form__input').on('input', function() {
       const value = $(this).val();
       const $searchForm = $('.search-form');

       if (!value) {
           $searchForm.removeClass('active');

           return;
       }

       if (!$searchForm.hasClass('active')) $searchForm.addClass('active');
    });

    $('.header-search-mobile .search-form__input').on('input', function() {
        const value = $(this).val();
        const $searchResults = $('.header-search-mobile__results');
        const displayValue = value
            ? 'block'
            : 'none';

        $searchResults.css('display', displayValue);
    });

    $('.open-modal').click(function() {
        const openModalName = $(this).data('open-modal');
        const $modal = $(`.modal[data-modal=${openModalName}]`);

        $modal.fadeIn('fast');
        $modal.css('display', 'flex');
    });

    $('.modal__close').click(function() {
        $(this).parent().parent().fadeOut('fast');
    });

    $('.header__sandwich').click(function() {
        $(this).fadeOut(0);
        $('.header__menu-close').fadeIn(0);
        $('.mobile-menu').slideDown('fast');
    });

    $('.header__menu-close').click(function() {
        $(this).fadeOut(0);
        $('.header__sandwich').fadeIn(0);
        $('.mobile-menu').slideUp('fast');
    });

    $('.open-menu-inner').click(function(e) {
        e.preventDefault();

        const $this = $(this);

        $this.find('img').toggleClass('active');
        $this.next().slideToggle('fast');
    });

    $('.contacts-page__tab').click(function() {
        $('.contacts-page__tab').removeClass('active');
        $(this).addClass('active');

        const dataContact = $(this).data('contact');

        $('.contacts-page__content').removeClass('active');
        $(`.contacts-page__content[data-contact=${dataContact}]`).addClass('active');
    });

    $('.contacts-page__country').click(function () {
        const country = $(this).data('country');

        $('.contacts-page__country').removeClass('active');
        $(`.contacts-page__country[data-country=${country}]`).addClass('active');

        $('.contacts-page__cities-list').removeClass('active');
        $(`.contacts-page__cities-list[data-country=${country}]`).addClass('active');
    });

    if (window.Vlitejs) {
        if (document.querySelector('#video')) {
            new window.Vlitejs("#video", {
                options: {
                    controls: true,
                    autoplay: false,
                    playPause: true,
                    progressBar: false,
                    time: false,
                    volume: true,
                    fullscreen: false,
                    bigPlay: true,
                    playsinline: true,
                    loop: false,
                    muted: false,
                    autoHide: true,
                    poster: '/assets/static/images/video-poster.jpg',
                },
                onReady: function (player) {
                    player.on("play", () => console.log("play"));
                    player.on("pause", () => console.log("pause"));
                    player.on("progress", () => console.log("progress"));
                    player.on("timeupdate", () => console.log("timeupdate"));
                    player.on("volumechange", () => console.log("volumechange"));
                    player.on("enterfullscreen", () => console.log("enterfullscreen"));
                    player.on("exitfullscreen", () => console.log("exitfullscreen"));
                    player.on("enterpip", () => console.log("enterpip"));
                    player.on("leavepip", () => console.log("leavepip"));
                    player.on("trackenabled", () => console.log("trackenabled"));
                    player.on("trackdisabled", () => console.log("trackdisabled"));
                    player.on("ended", () => console.log("ended"));
                },
                provider: 'html5',
            });
        }
    }

    if ($(window).width() > 991) {
        $('.product-page__info-menu-link').click(function(e) {
            e.preventDefault();

            let content = $(this).attr('href');
            let contentOffsetTop = $(content).offset().top;

            $('html, body').animate({
                scrollTop: contentOffsetTop - 180,
            });
        });

        var menu_selector = ".product-page__info-menu-link"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
        function onScroll() {
            var scroll_top = $(document).scrollTop();
            $(menu_selector).each(function () {
                var hash = $(this).attr("href");
                var target = $(hash);
                if (
                  target.position().top <= scroll_top + 190
                  && target.position().top + target.outerHeight() > scroll_top
                ) {
                    $(menu_selector + ".active").removeClass("active");
                    $(this).addClass("active");
                } else {
                    $(this).removeClass("active");
                }
            });
        }

        $(document).on("scroll", onScroll);
    }

    $('.select__selected').click(function() {
        const $this = $(this);

        $this.parent().toggleClass('open');
    });

    $('.select__item').click(function() {
       const $this = $(this);
       const textValue = $this.text();
       const $selectBlock = $this.parent().parent();

       const contentName = $this.data('content-name');
       const contentClass = $this.data('content-class');
       const selectValue = $this.data('select');

       $selectBlock.find('.select__selected-text').text(textValue);

       $('.select__item').removeClass('select__item_selected');
       $this.addClass('select__item_selected');

       $(`.${contentClass}`).removeClass('active');
       $(`.${contentClass}[data-${contentName}=${selectValue}]`).addClass('active');

        $selectBlock.removeClass('open');
    });

    if (localStorage.getItem('cookie-visible') !== 'no') {
        $('.cookie-block').css('display', 'block');
    }

    $('.cookie__button').click(function() {
        $('.cookie-block').css('display', 'none');

        localStorage.setItem('cookie-visible', 'no');
    });

    $('.header__mobile-search').on("click", function(e) {
        
        $('.header-search-mobile').slideToggle(100);

        return false;
    });
    
    $('.modal-contact__close').on('click', function () {
        $('.modal-contact').removeClass('active');
    });
});

$(document).ready(function() {
    $("[data-fancybox]").fancybox();
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:55:"/local/templates/kalmatron/js/custom.js?174713478514173";s:6:"source";s:39:"/local/templates/kalmatron/js/custom.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
class HeaderPhones {
  constructor() {
    this.init();
  }

  init() {
    this.initEventListeners();
  }

  initEventListeners() {
    $(document).on('click', '.js-header-phones-city', this.handleCityClick.bind(this));
    $(document).on('click', '.js-header-phones-menu-item', this.handleMenuClick.bind(this));
    $(document).on('click', (event) => {
      if (!$(event.target).closest('.js-header-phones').length) {
        $('.js-header-phones').removeClass('is-active');
      }
    });
  }

  handleCityClick(event) {
    $('.js-header-phones').toggleClass('is-active');
  }

  handleMenuClick(event) {
    const cityId = $(event.target).data('id');
    $('.js-header-phones-city').removeClass('is-active');
    $(`.js-header-phones-city[data-id="${cityId}"]`).addClass('is-active');
    
    $('.js-header-phones').removeClass('is-active');
    
    $('.js-header-phones-phone').removeClass('is-active');
    $(`.js-header-phones-phone:eq(${cityId})`).addClass('is-active');
  }
}

$(function() {
  new HeaderPhones();

  $('.open-menu-inner-arrow').click(function(e) {
    e.preventDefault();

    const $this = $(this);

    $this.find('img').toggleClass('active');
    $this.parent().next().slideToggle('fast');
});
});

function debounce(f, t) {
  return function (args) {
    var previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && this.lastCall - previousCall <= t) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(function () {
      f(args);
    }, t);
  };
}

$(function(){
	
	$.extend($.validator.messages, {
        required:  BX.message("JS_REQUIRED"),
        email:     BX.message("JS_FORMAT"),
        equalTo:   BX.message("JS_PASSWORD_COPY"),
        minlength: BX.message("JS_PASSWORD_LENGTH"),
        remote:    BX.message("JS_ERROR"),
    });
	
	$.validator.addMethod(
        "multi_required",
        function (value, element) {
            const name = element.getAttribute('data-name');

            if (name) {
                return document.querySelectorAll(`[name="${name}[]"]:checked`).length > 0;
            }

            return !!value;
        },
        BX.message("JS_REQUIRED")
    );

    $.validator.addMethod(
        "regexp",
        function (value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        BX.message("JS_FORMAT")
    );

    $.validator.addMethod(
        "filesize",
        function (value, element, param) {
            return this.optional(element) || element.files[0].size <= param;
        },
        BX.message("JS_FILE_SIZE")
    );

    $.validator.addMethod(
        "date",
        function (value, element, param) {
            var status = false;
            if (!value || value.length <= 0) {
                status = true;
            } else {
                var re = new RegExp("^([0-9]{2})(.)([0-9]{2})(.)([0-9]{4})$");
                var matches = re.exec(value);
                if (matches) {
                    var composedDate = new Date(matches[5], matches[3] - 1, matches[1]);
                    status =
                        composedDate.getMonth() == matches[3] - 1 &&
                        composedDate.getDate() == matches[1] &&
                        composedDate.getFullYear() == matches[5];
                }
            }
            return status;
        },
        BX.message("JS_DATE")
    );

    $.validator.addMethod(
        "datetime",
        function (value, element, param) {
            var status = false;
            if (!value || value.length <= 0) {
                status = true;
            } else {
                var re = new RegExp("^([0-9]{2})(.)([0-9]{2})(.)([0-9]{4}) ([0-9]{1,2}):([0-9]{1,2})$");
                var matches = re.exec(value);
                if (matches) {
                    var composedDate = new Date(matches[5], matches[3] - 1, matches[1], matches[6], matches[7]);
                    status =
                        composedDate.getMonth() == matches[3] - 1 &&
                        composedDate.getDate() == matches[1] &&
                        composedDate.getFullYear() == matches[5] &&
                        composedDate.getHours() == matches[6] &&
                        composedDate.getMinutes() == matches[7];
                }
            }
            return status;
        },
        BX.message("JS_DATETIME")
    );

    $.validator.addMethod(
        "extension",
        function (value, element, param) {
            param = typeof param === "string" ? param.replace(/,/g, "|") : "png|jpe?g|gif";
            return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
        },
        BX.message("JS_FILE_EXT")
    );

    $.validator.addMethod(
        "captcha",
        function (value, element, params) {
            let sid = $(element).closest("form").find('input[name="captcha_sid"]').val();
            return $.validator.methods.remote.call(this, value, element, {
                url:  "/ajax/check-captcha.php",
                type: "post",
                data: {
                    captcha_word: value,
                    captcha_sid:  sid,
                },
            });
        },
        BX.message("JS_ERROR")
    );

    $.validator.addMethod(
        "recaptcha",
        function (value, element, param) {
            var id = $(element).closest("form").find(".g-recaptcha").attr("data-widgetid");
            if (typeof id !== "undefined") {
                return grecaptcha.getResponse(id) != "";
            } else {
                return true;
            }
        },
        BX.message("JS_RECAPTCHA_ERROR")
    );
	
	$.validator.addClassRules({
        phone:            {
            regexp: arSiteOptions["VALIDATE_PHONE_MASK"],
        },
        confirm_password: {
            equalTo:   "input.password",
            minlength: 6,
        },
        password:         {
            minlength: 6,
        },
        inputfile:        {
            extension: arSiteOptions["VALIDATE_FILE_EXT"],
            filesize:  5000000,
        },
        datetime:         {
            datetime: "",
        },
        captcha:          {
            captcha: "",
        },
        recaptcha:        {
            recaptcha: "",
        },
    });

    $.validator.setDefaults({
        highlight:      function (element) {
            $(element).parent().addClass("error");
        },
        unhighlight:    function (element) {
            $(element).parent().removeClass("error");
        },
        errorPlacement: function (error, element) {
            // error.insertAfter(element);
        },
        errorElement:   'span'
    });
	
	$('[data-action=acceptCookie]').on('click', function(){
		
		Cookies.set('ACCEPT_COOKIE', 'Y', { expires: 365, path: '/' });
		
		$(this).parents('.cookie').fadeOut(200);
		
		return false;
		
	})
	
	$(document).on('click', '[data-action=closeModal]', function(){
		$(this).parents('.modal').fadeOut('fast');
		
		return false;
	});
    
    // ajax more items
  $(document).on("click", ".ajax_load_btn", function () {
    var url = $(this).closest(".bottom_nav").find(".arrows-pagination__next").attr("href"),
      th = $(this).find(".more_text_ajax"),
      _this = $(this),
      bottom_nav = $(this).closest(".bottom_nav");

    if (!th.hasClass("loadings")) {
      th.addClass("loadings");

      var objUrl = parseUrlQuery(),
        obData = { AJAX_REQUEST: "Y", ajax_get: "Y", bitrix_include_areas: "N" };

      if ("clear_cache" in objUrl && objUrl.clear_cache == "Y") {
        obData.clear_cache = "Y";
      }

      if (_this.closest(".ajax-pagination-wrapper").length) {
        obData.BLOCK = _this.closest(".ajax-pagination-wrapper").data("class");
      }

      $.ajax({
        url: url,
        data: BX.ajax.prepareData(obData),
        success: function (html) {
          var html = html.trim();
          var bottomNav = $(html).find(".bottom_nav");
          var bottomNavHtml = bottomNav.html();
          var bottomNavScrollClass = bottomNav.data("scroll-class");
          var hasBottomNav = $(html).find(".ajax_load_btn").length;

          var eventdata = { action: "ajaxContentLoaded", content: html };

          if (bottom_nav.data("append") !== undefined && bottom_nav.data("parent") !== undefined) {
              var target = html;
              if (bottom_nav.data("target") !== undefined) {
                target = $(html).find(bottom_nav.data("target"));
              }
            th.closest(bottom_nav.data("parent")).find(bottom_nav.data("append")).append(target);
              th.closest(bottom_nav.data("parent"))
                .find(bottom_nav.data("append"))
                .find(".bottom_nav_wrapper")
                .remove();

              if (hasBottomNav) {
                if (bottomNavScrollClass !== undefined) {
                  th.closest(bottom_nav.data("parent")).find(bottomNavScrollClass).addClass("has-bottom-nav");
                }
                th.closest(bottom_nav.data("parent")).find(bottom_nav.data("append")).addClass("has-bottom-nav");
              } else {
                if (bottomNavScrollClass !== undefined) {
                  th.closest(bottom_nav.data("parent")).find(bottomNavScrollClass).removeClass("has-bottom-nav");
                }
                th.closest(bottom_nav.data("parent")).find(bottom_nav.data("append")).removeClass("has-bottom-nav");
              }

            bottom_nav = th.closest(bottom_nav.data("parent")).find(".bottom_nav");
            bottom_nav.html(bottomNavHtml);

            eventdata.container = th.closest(bottom_nav.data("parent"));
          } else {
            $(html).insertBefore($(".blog .bottom_nav"));
            $(".bottom_nav").html($(".blog .bottom_nav:hidden").html());
            $(".blog .bottom_nav:hidden").remove();
          }

          setTimeout(function () {
            BX.onCustomEvent("onCompleteAction", [eventdata, th[0]]);
            th.removeClass("loading");
          }, 100);
        },
      });
    }
  });
  
  // bug fix in ff
  $("img").removeAttr("draggable");
});

BX.addCustomEvent("onSubmitForm", function (eventdata) {
  try {
    if (!window.renderRecaptchaById || !window.kdeloRecaptcha || !window.kdeloRecaptcha.key) {
      eventdata.form.submit();
      $(eventdata.form).closest(".form").addClass("sending");
      return true;
    }
    if (window.kdeloRecaptcha.params.recaptchaSize == "invisible" && typeof grecaptcha != "undefined") {
      if ($(eventdata.form).find(".g-recaptcha-response").val()) {
        eventdata.form.submit();
        $(eventdata.form).closest(".form").addClass("sending");
      } else {
        grecaptcha.execute($(eventdata.form).find(".g-recaptcha").data("widgetid"));
        return false;
      }
    } else {
      eventdata.form.submit();
      $(eventdata.form).closest(".form").addClass("sending");
    }

    return true;
  } catch (e) {
    console.error(e);
    return true;
  }
});

function parseUrlQuery() {
  var data = {};
  if (location.search) {
    var pair = location.search.substr(1).split("&");
    for (var i = 0; i < pair.length; i++) {
      var param = pair[i].split("=");
      data[param[0]] = param[1];
    }
  }
  return data;
}

if (typeof window.BquadroFormPopupEx === 'undefined') {
    class BquadroFormPopupEx extends BquadroFormPopup {
        performAction(formData, callback, openButton) {
            BX.ajax.runAction('bquadro:fos.foscontroller.popup', {
                data: formData
            }).then(response => {
                callback(response, formData);
                this.stopLoader(openButton);
            }).catch(() => {
                this.stopLoader(openButton);
            });
        }

        showPopup(response, formData) {

            const ProductDataGet = formData.get("productdata");
            if (ProductDataGet) {
                const objProductData = JSON.parse(ProductDataGet);
                const html = `<a title="${objProductData["name"]}" href="${objProductData["url"]}" class="category__product-image-block">
                <img src="${objProductData["picture"]}" alt="${objProductData["name"]}" class="category__product-image">
            </a>
            <div class="category__product-info-block">
                <div class="category__product-left">
                    <p class="category__product-category color-text-gray">${objProductData["section"]}</p>
                    <a href="#" class="category__product-title">${objProductData["name"]}</a>
                    <p class="category__product-description">${objProductData["chars"]}</p>
                </div>
            </div>`;
                const parser = new DOMParser();
                const responseDataHtml = parser.parseFromString(response.data.html, "text/html");
                responseDataHtml.documentElement.querySelector("[data-product-info]").innerHTML = html;
                responseDataHtml.documentElement.querySelector("[data-product-info]").style.display = "flex";
                responseDataHtml.documentElement.querySelector("[data-modal=price] [name=PRODUCT]").value = objProductData["id"];
                response.data.html = responseDataHtml.documentElement.innerHTML.toString();
            }

            const popup = this.createPopupElement(response.data.html);
            document.body.appendChild(popup);
            document.documentElement.classList.add('is-bq-form-popup-opened');
            this.executeScript(popup);
            setTimeout(() => {
                popup.classList.add('is-active');
            }, 100);
        }
    }
}

if (window.BquadroFormPopupEx) {
    new window.BquadroFormPopupEx();
}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:67:"/bitrix/components/bitrix/search.title/script.min.js?17429894206543";s:6:"source";s:48:"/bitrix/components/bitrix/search.title/script.js";s:3:"min";s:52:"/bitrix/components/bitrix/search.title/script.min.js";s:3:"map";s:52:"/bitrix/components/bitrix/search.title/script.map.js";}"*/
function JCTitleSearch(t){var e=this;this.arParams={AJAX_PAGE:t.AJAX_PAGE,CONTAINER_ID:t.CONTAINER_ID,INPUT_ID:t.INPUT_ID,MIN_QUERY_LEN:parseInt(t.MIN_QUERY_LEN,10)};if(t.WAIT_IMAGE){this.arParams.WAIT_IMAGE=t.WAIT_IMAGE}if(this.arParams.MIN_QUERY_LEN<=0){this.arParams.MIN_QUERY_LEN=1}this.cache=[];this.cache_key=null;this.startText="";this.running=false;this.runningCall=false;this.currentRow=-1;this.RESULT=null;this.CONTAINER=null;this.INPUT=null;this.WAIT=null;this.ShowResult=function(t){if(BX.type.isString(t)){e.RESULT.innerHTML=t}e.RESULT.style.display=e.RESULT.innerHTML===""?"none":"block";var s=e.adjustResultNode();var i=null;var n=null;var l=BX.findChild(e.RESULT,{tag:"table",class:"title-search-result"},true);if(l){n=BX.findChild(l,{tag:"th"},true)}if(n){var r=BX.pos(l);r.width=r.right-r.left;var a=BX.pos(n);a.width=a.right-a.left;n.style.width=a.width+"px";e.RESULT.style.width=s.width+a.width+"px";e.RESULT.style.left=s.left-a.width-1+"px";if(r.width-a.width>s.width){e.RESULT.style.width=s.width+a.width-1+"px"}r=BX.pos(l);i=BX.pos(e.RESULT);if(i.right>r.right){e.RESULT.style.width=r.right-r.left+"px"}}var o=false;if(l){o=BX.findChild(e.RESULT,{class:"title-search-fader"},true)}if(o&&n){i=BX.pos(e.RESULT);o.style.left=i.right-i.left-18+"px";o.style.width=18+"px";o.style.top=0+"px";o.style.height=i.bottom-i.top+"px";o.style.display="block"}};this.onKeyPress=function(t){var s=BX.findChild(e.RESULT,{tag:"table",class:"title-search-result"},true);if(!s){return false}var i=0;var n=s.rows.length;switch(t){case 27:e.RESULT.style.display="none";e.currentRow=-1;e.UnSelectAll();return true;case 40:if(e.RESULT.style.display=="none"){e.RESULT.style.display="block"}var l=-1;for(i=0;i<n;i++){if(!BX.findChild(s.rows[i],{class:"title-search-separator"},true)){if(l==-1){l=i}if(e.currentRow<i){e.currentRow=i;break}else if(s.rows[i].className=="title-search-selected"){s.rows[i].className=""}}}if(i==n&&e.currentRow!=i){e.currentRow=l}s.rows[e.currentRow].className="title-search-selected";return true;case 38:if(e.RESULT.style.display=="none"){e.RESULT.style.display="block"}var r=-1;for(i=n-1;i>=0;i--){if(!BX.findChild(s.rows[i],{class:"title-search-separator"},true)){if(r==-1){r=i}if(e.currentRow>i){e.currentRow=i;break}else if(s.rows[i].className=="title-search-selected"){s.rows[i].className=""}}}if(i<0&&e.currentRow!=i){e.currentRow=r}s.rows[e.currentRow].className="title-search-selected";return true;case 13:if(e.RESULT.style.display=="block"){for(i=0;i<n;i++){if(e.currentRow==i&&!BX.findChild(s.rows[i],{class:"title-search-separator"},true)){var a=BX.findChild(s.rows[i],{tag:"a"},true);if(a){window.location=a.href;return true}}}}return false;default:break}return false};this.onTimeout=function(){e.onChange((function(){setTimeout(e.onTimeout,500)}))};this.onChange=function(t){if(e.running){e.runningCall=true;return}e.running=true;if(e.INPUT.value!=e.oldValue&&e.INPUT.value!=e.startText){e.oldValue=e.INPUT.value;if(e.INPUT.value.length>=e.arParams.MIN_QUERY_LEN){e.cache_key=e.arParams.INPUT_ID+"|"+e.INPUT.value;if(e.cache[e.cache_key]==null){if(e.WAIT){var s=BX.pos(e.INPUT);var i=s.bottom-s.top-2;e.WAIT.style.top=s.top+1+"px";e.WAIT.style.height=i+"px";e.WAIT.style.width=i+"px";e.WAIT.style.left=s.right-i+2+"px";e.WAIT.style.display="block"}BX.ajax.post(e.arParams.AJAX_PAGE,{ajax_call:"y",INPUT_ID:e.arParams.INPUT_ID,q:e.INPUT.value,l:e.arParams.MIN_QUERY_LEN},(function(s){e.cache[e.cache_key]=s;e.ShowResult(s);e.currentRow=-1;e.EnableMouseEvents();if(e.WAIT){e.WAIT.style.display="none"}if(!!t){t()}e.running=false;if(e.runningCall){e.runningCall=false;e.onChange()}}));return}e.ShowResult(e.cache[e.cache_key]);e.currentRow=-1;e.EnableMouseEvents()}else{e.RESULT.style.display="none";e.currentRow=-1;e.UnSelectAll()}}if(!!t){t()}e.running=false};this.onScroll=function(){if(BX.type.isElementNode(e.RESULT)&&e.RESULT.style.display!=="none"&&e.RESULT.innerHTML!==""){e.adjustResultNode()}};this.UnSelectAll=function(){var t=BX.findChild(e.RESULT,{tag:"table",class:"title-search-result"},true);if(t){var s=t.rows.length;for(var i=0;i<s;i++){t.rows[i].className=""}}};this.EnableMouseEvents=function(){var t=BX.findChild(e.RESULT,{tag:"table",class:"title-search-result"},true);if(t){var s=t.rows.length;for(var i=0;i<s;i++){if(!BX.findChild(t.rows[i],{class:"title-search-separator"},true)){t.rows[i].id="row_"+i;t.rows[i].onmouseover=function(t){if(e.currentRow!=this.id.substr(4)){e.UnSelectAll();this.className="title-search-selected";e.currentRow=this.id.substr(4)}};t.rows[i].onmouseout=function(t){this.className="";e.currentRow=-1}}}}};this.onFocusLost=function(t){setTimeout((function(){e.RESULT.style.display="none"}),250)};this.onFocusGain=function(){if(e.RESULT.innerHTML.length>0){e.ShowResult()}};this.onKeyDown=function(t){if(!t){t=window.event}if(e.RESULT.style.display=="block"&&e.onKeyPress(t.keyCode)){return BX.PreventDefault(t)}};this.adjustResultNode=function(){if(!(BX.type.isElementNode(e.RESULT)&&BX.type.isElementNode(e.CONTAINER))){return{top:0,right:0,bottom:0,left:0,width:0,height:0}}var t=BX.pos(e.CONTAINER);e.RESULT.style.position="absolute";e.RESULT.style.top=t.bottom+2+"px";e.RESULT.style.left=t.left+"px";e.RESULT.style.width=t.width+"px";return t};this.onContainerLayoutChange=function(){if(BX.type.isElementNode(e.RESULT)&&e.RESULT.style.display!=="none"&&e.RESULT.innerHTML!==""){e.adjustResultNode()}};this.Init=function(){this.CONTAINER=document.getElementById(this.arParams.CONTAINER_ID);BX.addCustomEvent(this.CONTAINER,"OnNodeLayoutChange",this.onContainerLayoutChange);this.RESULT=document.body.appendChild(document.createElement("DIV"));this.RESULT.className="title-search-result";this.INPUT=document.getElementById(this.arParams.INPUT_ID);this.startText=this.INPUT.value;this.oldValue=this.INPUT.value;BX.bind(this.INPUT,"focus",(function(){e.onFocusGain()}));BX.bind(this.INPUT,"blur",(function(){e.onFocusLost()}));this.INPUT.onkeydown=this.onKeyDown;if(this.arParams.WAIT_IMAGE){this.WAIT=document.body.appendChild(document.createElement("DIV"));this.WAIT.style.backgroundImage="url('"+this.arParams.WAIT_IMAGE+"')";if(!BX.browser.IsIE()){this.WAIT.style.backgroundRepeat="none"}this.WAIT.style.display="none";this.WAIT.style.position="absolute";this.WAIT.style.zIndex="1100"}BX.bind(this.INPUT,"bxchange",(function(){e.onChange()}));var t=BX.findParent(this.CONTAINER,BX.is_fixed);if(BX.type.isElementNode(t)){BX.bind(window,"scroll",BX.throttle(this.onScroll,100,this))}};BX.ready((function(){e.Init(t)}))}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:88:"/local/templates/kalmatron/components/bitrix/search.title/main/script.js?173314503011933";s:6:"source";s:72:"/local/templates/kalmatron/components/bitrix/search.title/main/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){
	var containerHTML = $('.title-search-input_fixed').detach();
	$('#title-search_fixed').append(containerHTML);
});

$(document).ready(function(){
	var containerHTML = $('.title-search-input').detach();
	$('#title-search').append(containerHTML);
});

function JCTitleSearch2(arParams)
{
	var _this = this;

	this.arParams = {
		'AJAX_PAGE': arParams.AJAX_PAGE,
		'CONTAINER_ID': arParams.CONTAINER_ID,
		'INPUT_ID': arParams.INPUT_ID,
		'INPUT_ID_TMP': arParams.INPUT_ID_TMP,
		'MIN_QUERY_LEN': parseInt(arParams.MIN_QUERY_LEN)
	};

	if(arParams.WAIT_IMAGE)
		this.arParams.WAIT_IMAGE = arParams.WAIT_IMAGE;
	if(arParams.MIN_QUERY_LEN <= 0)
		arParams.MIN_QUERY_LEN = 1;

	this.cache = [];
	this.cache_key = null;

	this.startText = '';
	this.running = false;
	this.needRunAgain = false;
	this.currentRow = -1;
	this.RESULT = null;
	this.CONTAINER = null;
	this.INPUT = null;
	this.TYPE = null;
	this.WAIT = null;

	this.ShowResult = function(result)
	{
		if(BX.type.isString(result))
		{
			_this.RESULT.innerHTML = result;
		}

		_this.RESULT.style.display = _this.RESULT.innerHTML !== '' ? 'block' : 'none';
		var pos = _this.adjustResultNode();

		//adjust left column to be an outline
		var res_pos;
		var th;
		var tbl = BX.findChild(_this.RESULT, {'tag':'table','class':'title-search-result'}, true);
		if(tbl)
		{
			th = BX.findChild(tbl, {'tag':'th'}, true);
		}
		if(th)
		{
			var tbl_pos = BX.pos(tbl);
			tbl_pos.width = tbl_pos.right - tbl_pos.left;

			var th_pos = BX.pos(th);
			th_pos.width = th_pos.right - th_pos.left;
			th.style.width = th_pos.width + 'px';

			_this.RESULT.style.width = (pos.width + th_pos.width) + 'px';

			//Move table to left by width of the first column
			_this.RESULT.style.left = (pos.left - th_pos.width - 1)+ 'px';

			//Shrink table when it's too wide
			if((tbl_pos.width - th_pos.width) > pos.width)
				_this.RESULT.style.width = (pos.width + th_pos.width -1) + 'px';

			//Check if table is too wide and shrink result div to it's width
			tbl_pos = BX.pos(tbl);
			res_pos = BX.pos(_this.RESULT);
			if(res_pos.right > tbl_pos.right)
			{
				_this.RESULT.style.width = (tbl_pos.right - tbl_pos.left) + 'px';
			}
		}

		var fade;
		if(tbl) fade = BX.findChild(_this.RESULT, {'class':'title-search-fader'}, true);
		if(fade && th)
		{
			res_pos = BX.pos(_this.RESULT);
			fade.style.left = (res_pos.right - res_pos.left - 18) + 'px';
			fade.style.width = 18 + 'px';
			fade.style.top = 0 + 'px';
			fade.style.height = (res_pos.bottom - res_pos.top) + 'px';
			fade.style.display = 'block';
		}

		if (typeof InitScrollBar === 'function') {
			InitScrollBar();
		}
	};

	this.onKeyPress = function(keyCode)
	{
		var tbl = BX.findChild(_this.RESULT, {'tag':'table','class':'title-search-result'}, true);
		if(!tbl)
			return false;

		var i;
		var cnt = tbl.rows.length;

		switch (keyCode)
		{
		case 27: // escape key - close search div
			_this.RESULT.style.display = 'none';
			_this.currentRow = -1;
			_this.UnSelectAll();
		return true;

		case 40: // down key - navigate down on search results
			if(_this.RESULT.style.display == 'none')
				_this.RESULT.style.display = 'block';

			var first = -1;
			for(i = 0; i < cnt; i++)
			{
				if(!BX.findChild(tbl.rows[i], {'class':'title-search-separator'}, true))
				{
					if(first == -1)
						first = i;

					if(_this.currentRow < i)
					{
						_this.currentRow = i;
						break;
					}
					else if(tbl.rows[i].className == 'title-search-selected')
					{
						tbl.rows[i].className = '';
					}
				}
			}

			if(i == cnt && _this.currentRow != i)
				_this.currentRow = first;

			tbl.rows[_this.currentRow].className = 'title-search-selected';
		return true;

		case 38: // up key - navigate up on search results
			if(_this.RESULT.style.display == 'none')
				_this.RESULT.style.display = 'block';

			var last = -1;
			for(i = cnt-1; i >= 0; i--)
			{
				if(!BX.findChild(tbl.rows[i], {'class':'title-search-separator'}, true))
				{
					if(last == -1)
						last = i;

					if(_this.currentRow > i)
					{
						_this.currentRow = i;
						break;
					}
					else if(tbl.rows[i].className == 'title-search-selected')
					{
						tbl.rows[i].className = '';
					}
				}
			}

			if(i < 0 && _this.currentRow != i)
				_this.currentRow = last;

			tbl.rows[_this.currentRow].className = 'title-search-selected';
		return true;

		case 13: // enter key - choose current search result
			if(_this.RESULT.style.display == 'block')
			{
				for(i = 0; i < cnt; i++)
				{
					if(_this.currentRow == i)
					{
						if(!BX.findChild(tbl.rows[i], {'class':'title-search-separator'}, true))
						{
							var a = BX.findChild(tbl.rows[i], {'tag':'a'}, true);
							if(a)
							{
								window.location = a.href;
								return true;
							}
						}
					}
				}
			}
		return false;
		}

		return false;
	};

	this.onTimeout = function()
	{
		_this.onChange(function(){
			setTimeout(_this.onTimeout, 500);
		});
	};

	this.onChange = function(callback)
	{
		let searchForm = $(_this.INPUT).closest('.search');
		if (_this.INPUT.value !== '') { 
			searchForm.find('.btn-clear-search').show();
		} else {
			searchForm.find('.btn-clear-search').hide();
		}

		if (_this.running){
			_this.needRunAgain = true;
			return;
		}
		_this.running = true;

		let type = 'catalog';
		if (this.TYPE) {
			type = this.TYPE.value;
		}

		if(
			(
				_this.INPUT.value != _this.oldValue
				&& _this.INPUT.value != _this.startText
			)
			|| type != _this.oldType
		){
			_this.oldValue = _this.INPUT.value;
			_this.oldType = type;

			if(_this.INPUT.value.length >= _this.arParams.MIN_QUERY_LEN)
			{
				_this.cache_key = _this.arParams.INPUT_ID + '|' + _this.INPUT.value + '|' + type;
				if(_this.cache[_this.cache_key] == null)
				{
					if(_this.WAIT)
					{
						var pos = BX.pos(_this.INPUT);
						var height = (pos.bottom - pos.top)-2;
						_this.WAIT.style.top = (pos.top+1) + 'px';
						_this.WAIT.style.height = height + 'px';
						_this.WAIT.style.width = height + 'px';
						_this.WAIT.style.left = (pos.right - height + 2) + 'px';
						_this.WAIT.style.display = 'block';
					}

					BX.ajax.post(
						_this.arParams.AJAX_PAGE,
						{
							'ajax_call':'y',
							'INPUT_ID':_this.arParams.INPUT_ID_TMP,
							'q':_this.INPUT.value,
							'l':_this.arParams.MIN_QUERY_LEN,
							'type': type,
						},
						function(result)
						{
							_this.cache[_this.cache_key] = result;
							_this.ShowResult(result);
							_this.currentRow = -1;
							_this.EnableMouseEvents();
							if(_this.WAIT)
								_this.WAIT.style.display = 'none';
							if (!!callback)
								callback();
							_this.running = false;

							if(_this.needRunAgain){
								_this.needRunAgain = false;
								_this.onChange(callback);
							}
						}
					);
					return;
				}
				else
				{
					_this.ShowResult(_this.cache[_this.cache_key]);
					_this.currentRow = -1;
					_this.EnableMouseEvents();
				}
			}
			else
			{
				_this.RESULT.style.display = 'none';
				_this.currentRow = -1;
				_this.UnSelectAll();
			}
		}
		if (!!callback)
			callback();
		_this.running = false;
	};

	this.UnSelectAll = function()
	{
		var tbl = BX.findChild(_this.RESULT, {'tag':'table','class':'title-search-result'}, true);
		if(tbl)
		{
			var cnt = tbl.rows.length;
			for(var i = 0; i < cnt; i++)
				tbl.rows[i].className = '';
		}
	};

	this.EnableMouseEvents = function()
	{
		var tbl = BX.findChild(_this.RESULT, {'tag':'table','class':'title-search-result'}, true);
		if(tbl)
		{
			var cnt = tbl.rows.length;
			for(var i = 0; i < cnt; i++)
				if(!BX.findChild(tbl.rows[i], {'class':'title-search-separator'}, true))
				{
					tbl.rows[i].id = 'row_' + i;
					tbl.rows[i].onmouseover = function (e) {
						if(_this.currentRow != this.id.substr(4))
						{
							_this.UnSelectAll();
							this.className = 'title-search-selected';
							_this.currentRow = this.id.substr(4);
						}
					};
					tbl.rows[i].onmouseout = function (e) {
						this.className = '';
						_this.currentRow = -1;
					};
				}
		}
	};

	this.onFocusLost = function(hide)
	{
		setTimeout(function(){_this.RESULT.style.display = 'none';}, 300);
		// _this.RESULT.style.display = 'none';
	};

	this.onFocusGain = function()
	{
		if(_this.RESULT.innerHTML.length)
			_this.ShowResult();
		_this.onChange();
	};

	this.onKeyDown = function(e)
	{
		if(!e)
			e = window.event;
		if (_this.RESULT.style.display == 'block')
		{
			if(_this.onKeyPress(e.keyCode))
				return BX.PreventDefault(e);
		}
	};

	this.adjustResultNode = function()
	{
		var pos, pos_input;
		var fixedParent = BX.findParent(_this.CONTAINER, BX.is_fixed);
		// if(!!fixedParent)
		// {
		// 	_this.RESULT.style.position = 'fixed';
		// 	_this.RESULT.style.zIndex = BX.style(fixedParent, 'z-index') + 2;
		// 	pos = BX.pos(_this.CONTAINER, true);
		// }
		// else
		// {
			_this.RESULT.style.position = 'absolute';
			pos = BX.pos(_this.CONTAINER);
		// }
		pos_input = BX.pos(_this.INPUT);

		pos.width = pos.right - pos.left;
		_this.RESULT.style.top = '100%';
		_this.RESULT.style.left = '0px';//pos_input.left + 'px';

		if($(_this.INPUT).closest('.inline-search-block.with-close').length)
			_this.RESULT.style.width = pos_input.width + 'px';
		else
			_this.RESULT.style.width = pos.width + 'px';
		return pos;
	};

	this._onContainerLayoutChange = function()
	{
		if(_this.RESULT.style.display !== "none" && _this.RESULT.innerHTML !== '')
		{
			_this.adjustResultNode();
		}
	};
	this.Init = function()
	{
		this.CONTAINER = document.getElementById(this.arParams.CONTAINER_ID);
		BX.addCustomEvent(this.CONTAINER, "OnNodeLayoutChange", this._onContainerLayoutChange);

		this.RESULT = document.body.appendChild(document.createElement("DIV"));

		this.RESULT.className = 'title-search-result '+this.arParams.INPUT_ID;
		this.INPUT = document.getElementById(this.arParams.INPUT_ID);
		this.startText = this.oldValue = this.INPUT.value;
		BX.bind(this.INPUT, 'focus', function(e) {
			_this.onFocusGain()
		});
		BX.bind(this.INPUT, 'blur', function(e) {
			if(!$(e.relatedTarget).hasClass('bx_item_block')){
				setTimeout(function(){
					if(!$(_this.INPUT).closest('form').find('.dropdown-select.searchtype .dropdown-select__title.opened').length){
						_this.onFocusLost();
					}
				}, 100);
			}
		});

		this.TYPE = this.CONTAINER ? this.CONTAINER.querySelector('.dropdown-select.searchtype input[name="type"]') : null;

		if(BX.browser.IsSafari() || BX.browser.IsIE())
			this.INPUT.onkeydown = this.onKeyDown;
		else
			this.INPUT.onkeypress = this.onKeyDown;

		if(this.arParams.WAIT_IMAGE)
		{
			this.WAIT = document.body.appendChild(document.createElement("DIV"));
			this.WAIT.style.backgroundImage = "url('" + this.arParams.WAIT_IMAGE + "')";
			if(!BX.browser.IsIE())
				this.WAIT.style.backgroundRepeat = 'none';
			this.WAIT.style.display = 'none';
			this.WAIT.style.position = 'absolute';
			this.WAIT.style.zIndex = '1100';
		}

		BX.bind(this.INPUT, 'bxchange', function(e) {_this.onChange()});

		if (this.TYPE) {
			BX.bind(this.TYPE, 'change', function() {_this.onChange()});
		}

		let searchForm = $(_this.INPUT).closest('.search');
		let clearSearch = searchForm.find('.btn-clear-search');
		BX.bind(clearSearch[0], 'click', function (e) {
			setTimeout(function () {
				_this.onChange();
				_this.INPUT.focus();
				_this.RESULT.innerHTML = '';
			}, 0);
		});
	};
	BX.ready(function (){_this.Init(arParams)});
}

/* End */
;
; /* Start:"a:4:{s:4:"full";s:90:"/local/templates/kalmatron/components/bitrix/search.title/mobile/script.js?173320609611952";s:6:"source";s:74:"/local/templates/kalmatron/components/bitrix/search.title/mobile/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){
	var containerHTML = $('.title-search-input_fixed').detach();
	$('#title-search_fixed').append(containerHTML);
});

$(document).ready(function(){
	var containerHTML = $('.title-search-input').detach();
	$('#title-search').append(containerHTML);
});

function JCTitleSearch3(arParams)
{
	var _this = this;

	this.arParams = {
		'AJAX_PAGE': arParams.AJAX_PAGE,
		'CONTAINER_ID': arParams.CONTAINER_ID,
		'INPUT_ID': arParams.INPUT_ID,
		'INPUT_ID_TMP': arParams.INPUT_ID_TMP,
		'MIN_QUERY_LEN': parseInt(arParams.MIN_QUERY_LEN)
	};

	if(arParams.WAIT_IMAGE)
		this.arParams.WAIT_IMAGE = arParams.WAIT_IMAGE;
	if(arParams.MIN_QUERY_LEN <= 0)
		arParams.MIN_QUERY_LEN = 1;

	this.cache = [];
	this.cache_key = null;

	this.startText = '';
	this.running = false;
	this.needRunAgain = false;
	this.currentRow = -1;
	this.RESULT = null;
	this.CONTAINER = null;
	this.INPUT = null;
	this.TYPE = null;
	this.WAIT = null;

	this.ShowResult = function(result)
	{
		if(BX.type.isString(result))
		{
			_this.RESULT.innerHTML = result;
		}

		_this.RESULT.style.display = _this.RESULT.innerHTML !== '' ? 'block' : 'none';
		var pos = _this.adjustResultNode();

		//adjust left column to be an outline
		var res_pos;
		var th;
		var tbl = BX.findChild(_this.RESULT, {'tag':'table','class':'title-search-result'}, true);
		if(tbl)
		{
			th = BX.findChild(tbl, {'tag':'th'}, true);
		}
		if(th)
		{
			var tbl_pos = BX.pos(tbl);
			tbl_pos.width = tbl_pos.right - tbl_pos.left;

			var th_pos = BX.pos(th);
			th_pos.width = th_pos.right - th_pos.left;
			th.style.width = th_pos.width + 'px';

			_this.RESULT.style.width = (pos.width + th_pos.width) + 'px';

			//Move table to left by width of the first column
			_this.RESULT.style.left = (pos.left - th_pos.width - 1)+ 'px';

			//Shrink table when it's too wide
			if((tbl_pos.width - th_pos.width) > pos.width)
				_this.RESULT.style.width = (pos.width + th_pos.width -1) + 'px';

			//Check if table is too wide and shrink result div to it's width
			tbl_pos = BX.pos(tbl);
			res_pos = BX.pos(_this.RESULT);
			if(res_pos.right > tbl_pos.right)
			{
				_this.RESULT.style.width = (tbl_pos.right - tbl_pos.left) + 'px';
			}
		}

		var fade;
		if(tbl) fade = BX.findChild(_this.RESULT, {'class':'title-search-fader'}, true);
		if(fade && th)
		{
			res_pos = BX.pos(_this.RESULT);
			fade.style.left = (res_pos.right - res_pos.left - 18) + 'px';
			fade.style.width = 18 + 'px';
			fade.style.top = 0 + 'px';
			fade.style.height = (res_pos.bottom - res_pos.top) + 'px';
			fade.style.display = 'block';
		}

		if (typeof InitScrollBar === 'function') {
			InitScrollBar();
		}
	};

	this.onKeyPress = function(keyCode)
	{
		var tbl = BX.findChild(_this.RESULT, {'tag':'table','class':'title-search-result'}, true);
		if(!tbl)
			return false;

		var i;
		var cnt = tbl.rows.length;

		switch (keyCode)
		{
		case 27: // escape key - close search div
			_this.RESULT.style.display = 'none';
			_this.currentRow = -1;
			_this.UnSelectAll();
		return true;

		case 40: // down key - navigate down on search results
			if(_this.RESULT.style.display == 'none')
				_this.RESULT.style.display = 'block';

			var first = -1;
			for(i = 0; i < cnt; i++)
			{
				if(!BX.findChild(tbl.rows[i], {'class':'title-search-separator'}, true))
				{
					if(first == -1)
						first = i;

					if(_this.currentRow < i)
					{
						_this.currentRow = i;
						break;
					}
					else if(tbl.rows[i].className == 'title-search-selected')
					{
						tbl.rows[i].className = '';
					}
				}
			}

			if(i == cnt && _this.currentRow != i)
				_this.currentRow = first;

			tbl.rows[_this.currentRow].className = 'title-search-selected';
		return true;

		case 38: // up key - navigate up on search results
			if(_this.RESULT.style.display == 'none')
				_this.RESULT.style.display = 'block';

			var last = -1;
			for(i = cnt-1; i >= 0; i--)
			{
				if(!BX.findChild(tbl.rows[i], {'class':'title-search-separator'}, true))
				{
					if(last == -1)
						last = i;

					if(_this.currentRow > i)
					{
						_this.currentRow = i;
						break;
					}
					else if(tbl.rows[i].className == 'title-search-selected')
					{
						tbl.rows[i].className = '';
					}
				}
			}

			if(i < 0 && _this.currentRow != i)
				_this.currentRow = last;

			tbl.rows[_this.currentRow].className = 'title-search-selected';
		return true;

		case 13: // enter key - choose current search result
			if(_this.RESULT.style.display == 'block')
			{
				for(i = 0; i < cnt; i++)
				{
					if(_this.currentRow == i)
					{
						if(!BX.findChild(tbl.rows[i], {'class':'title-search-separator'}, true))
						{
							var a = BX.findChild(tbl.rows[i], {'tag':'a'}, true);
							if(a)
							{
								window.location = a.href;
								return true;
							}
						}
					}
				}
			}
		return false;
		}

		return false;
	};

	this.onTimeout = function()
	{
		_this.onChange(function(){
			setTimeout(_this.onTimeout, 500);
		});
	};

	this.onChange = function(callback)
	{
		let searchForm = $(_this.INPUT).closest('.search');
		if (_this.INPUT.value !== '') { 
			searchForm.find('.btn-clear-search').show();
		} else {
			searchForm.find('.btn-clear-search').hide();
		}

		if (_this.running){
			_this.needRunAgain = true;
			return;
		}
		_this.running = true;

		let type = 'catalog';
		if (this.TYPE) {
			type = this.TYPE.value;
		}

		if(
			(
				_this.INPUT.value != _this.oldValue
				&& _this.INPUT.value != _this.startText
			)
			|| type != _this.oldType
		){
			_this.oldValue = _this.INPUT.value;
			_this.oldType = type;

			if(_this.INPUT.value.length >= _this.arParams.MIN_QUERY_LEN)
			{
				_this.cache_key = _this.arParams.INPUT_ID + '|' + _this.INPUT.value + '|' + type;
				if(_this.cache[_this.cache_key] == null)
				{
					if(_this.WAIT)
					{
						var pos = BX.pos(_this.INPUT);
						var height = (pos.bottom - pos.top)-2;
						_this.WAIT.style.top = (pos.top+1) + 'px';
						_this.WAIT.style.height = height + 'px';
						_this.WAIT.style.width = height + 'px';
						_this.WAIT.style.left = (pos.right - height + 2) + 'px';
						_this.WAIT.style.display = 'block';
					}

					BX.ajax.post(
						_this.arParams.AJAX_PAGE,
						{
							'ajax_call':'y',
							'INPUT_ID':_this.arParams.INPUT_ID_TMP,
							'q':_this.INPUT.value,
							'l':_this.arParams.MIN_QUERY_LEN,
							'type': type,
						},
						function(result)
						{
							_this.cache[_this.cache_key] = result;
							_this.ShowResult(result);
							_this.currentRow = -1;
							_this.EnableMouseEvents();
							if(_this.WAIT)
								_this.WAIT.style.display = 'none';
							if (!!callback)
								callback();
							_this.running = false;

							if(_this.needRunAgain){
								_this.needRunAgain = false;
								_this.onChange(callback);
							}
						}
					);
					return;
				}
				else
				{
					_this.ShowResult(_this.cache[_this.cache_key]);
					_this.currentRow = -1;
					_this.EnableMouseEvents();
				}
			}
			else
			{
				_this.RESULT.style.display = 'none';
				_this.currentRow = -1;
				_this.UnSelectAll();
			}
		}
		if (!!callback)
			callback();
		_this.running = false;
	};

	this.UnSelectAll = function()
	{
		var tbl = BX.findChild(_this.RESULT, {'tag':'table','class':'title-search-result'}, true);
		if(tbl)
		{
			var cnt = tbl.rows.length;
			for(var i = 0; i < cnt; i++)
				tbl.rows[i].className = '';
		}
	};

	this.EnableMouseEvents = function()
	{
		var tbl = BX.findChild(_this.RESULT, {'tag':'table','class':'title-search-result'}, true);
		if(tbl)
		{
			var cnt = tbl.rows.length;
			for(var i = 0; i < cnt; i++)
				if(!BX.findChild(tbl.rows[i], {'class':'title-search-separator'}, true))
				{
					tbl.rows[i].id = 'row_' + i;
					tbl.rows[i].onmouseover = function (e) {
						if(_this.currentRow != this.id.substr(4))
						{
							_this.UnSelectAll();
							this.className = 'title-search-selected';
							_this.currentRow = this.id.substr(4);
						}
					};
					tbl.rows[i].onmouseout = function (e) {
						this.className = '';
						_this.currentRow = -1;
					};
				}
		}
	};

	this.onFocusLost = function(hide)
	{
		setTimeout(function(){_this.RESULT.style.display = 'none';}, 300);
		// _this.RESULT.style.display = 'none';
	};

	this.onFocusGain = function()
	{
		if(_this.RESULT.innerHTML.length)
			_this.ShowResult();
		_this.onChange();
	};

	this.onKeyDown = function(e)
	{
		if(!e)
			e = window.event;
		if (_this.RESULT.style.display == 'block')
		{
			if(_this.onKeyPress(e.keyCode))
				return BX.PreventDefault(e);
		}
	};

	this.adjustResultNode = function()
	{
		var pos, pos_input;
		var fixedParent = BX.findParent(_this.CONTAINER, BX.is_fixed);
		// if(!!fixedParent)
		// {
		// 	_this.RESULT.style.position = 'fixed';
		// 	_this.RESULT.style.zIndex = BX.style(fixedParent, 'z-index') + 2;
		// 	pos = BX.pos(_this.CONTAINER, true);
		// }
		// else
		// {
			_this.RESULT.style.position = 'absolute';
			pos = BX.pos(_this.CONTAINER);
		// }
		pos_input = BX.pos(_this.INPUT);

		pos.width = pos.right - pos.left;
		_this.RESULT.style.top = pos_input.top + 45 + 'px';
		_this.RESULT.style.left = '0px';//pos_input.left + 'px';

		if($(_this.INPUT).closest('.inline-search-block.with-close').length)
			_this.RESULT.style.width = pos_input.width + 'px';
		else
			_this.RESULT.style.width = pos.width + 'px';
		return pos;
	};

	this._onContainerLayoutChange = function()
	{
		if(_this.RESULT.style.display !== "none" && _this.RESULT.innerHTML !== '')
		{
			_this.adjustResultNode();
		}
	};
	this.Init = function()
	{
		this.CONTAINER = document.getElementById(this.arParams.CONTAINER_ID);
		BX.addCustomEvent(this.CONTAINER, "OnNodeLayoutChange", this._onContainerLayoutChange);

		this.RESULT = document.body.appendChild(document.createElement("DIV"));

		this.RESULT.className = 'title-search-result '+this.arParams.INPUT_ID;
		this.INPUT = document.getElementById(this.arParams.INPUT_ID);
		this.startText = this.oldValue = this.INPUT.value;
		BX.bind(this.INPUT, 'focus', function(e) {
			_this.onFocusGain()
		});
		BX.bind(this.INPUT, 'blur', function(e) {
			if(!$(e.relatedTarget).hasClass('bx_item_block')){
				setTimeout(function(){
					if(!$(_this.INPUT).closest('form').find('.dropdown-select.searchtype .dropdown-select__title.opened').length){
						_this.onFocusLost();
					}
				}, 100);
			}
		});

		this.TYPE = this.CONTAINER ? this.CONTAINER.querySelector('.dropdown-select.searchtype input[name="type"]') : null;

		if(BX.browser.IsSafari() || BX.browser.IsIE())
			this.INPUT.onkeydown = this.onKeyDown;
		else
			this.INPUT.onkeypress = this.onKeyDown;

		if(this.arParams.WAIT_IMAGE)
		{
			this.WAIT = document.body.appendChild(document.createElement("DIV"));
			this.WAIT.style.backgroundImage = "url('" + this.arParams.WAIT_IMAGE + "')";
			if(!BX.browser.IsIE())
				this.WAIT.style.backgroundRepeat = 'none';
			this.WAIT.style.display = 'none';
			this.WAIT.style.position = 'absolute';
			this.WAIT.style.zIndex = '1100';
		}

		BX.bind(this.INPUT, 'bxchange', function(e) {_this.onChange()});

		if (this.TYPE) {
			BX.bind(this.TYPE, 'change', function() {_this.onChange()});
		}

		let searchForm = $(_this.INPUT).closest('.search');
		let clearSearch = searchForm.find('.btn-clear-search');
		BX.bind(clearSearch[0], 'click', function (e) {
			setTimeout(function () {
				_this.onChange();
				_this.INPUT.focus();
				_this.RESULT.innerHTML = '';
			}, 0);
		});
	};
	BX.ready(function (){_this.Init(arParams)});
}

/* End */
;; /* /local/templates/kalmatron/js/libs/swiper-bundle.min.js?1733145030150121*/
; /* /local/templates/kalmatron/js/libs/vlitejs.js?173314503028489*/
; /* /local/templates/kalmatron/js/jquery.validate.min.js?173314503022254*/
; /* /local/templates/kalmatron/js/jquery.fancybox.min.js?1733145030168978*/
; /* /local/templates/kalmatron/js/jquery.inputmask.bundle.min.js?173314503070953*/
; /* /local/templates/kalmatron/js/jquery.uniform.min.js?17331450308308*/
; /* /local/templates/kalmatron/js/searchtitle.min.js?17331450301414*/
; /* /local/templates/kalmatron/js/script.js?175217420211689*/
; /* /local/templates/kalmatron/js/custom.js?174713478514173*/
; /* /bitrix/components/bitrix/search.title/script.min.js?17429894206543*/
; /* /local/templates/kalmatron/components/bitrix/search.title/main/script.js?173314503011933*/
; /* /local/templates/kalmatron/components/bitrix/search.title/mobile/script.js?173320609611952*/

//# sourceMappingURL=template_a168bd841f75c9187efdaaff729553ab.map.js