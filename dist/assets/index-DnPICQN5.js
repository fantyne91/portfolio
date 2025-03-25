(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function at(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const ne={},Ms=[],Oe=()=>{},rn=()=>!1,_s=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),or=e=>e.startsWith("onUpdate:"),ie=Object.assign,rr=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},Of=Object.prototype.hasOwnProperty,le=(e,t)=>Of.call(e,t),z=Array.isArray,Ls=e=>Ys(e)==="[object Map]",Es=e=>Ys(e)==="[object Set]",ia=e=>Ys(e)==="[object Date]",Mf=e=>Ys(e)==="[object RegExp]",Q=e=>typeof e=="function",te=e=>typeof e=="string",Ze=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",ar=e=>(pe(e)||Q(e))&&Q(e.then)&&Q(e.catch),Tl=Object.prototype.toString,Ys=e=>Tl.call(e),Lf=e=>Ys(e).slice(8,-1),Ui=e=>Ys(e)==="[object Object]",lr=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Yt=at(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jf=at("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Vi=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},Df=/-(\w)/g,ye=Vi(e=>e.replace(Df,(t,s)=>s?s.toUpperCase():"")),Ff=/\B([A-Z])/g,Je=Vi(e=>e.replace(Ff,"-$1").toLowerCase()),Cs=Vi(e=>e.charAt(0).toUpperCase()+e.slice(1)),js=Vi(e=>e?`on${Cs(e)}`:""),He=(e,t)=>!Object.is(e,t),Ds=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},Al=(e,t,s,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:s})},mi=e=>{const t=parseFloat(e);return isNaN(t)?e:t},gi=e=>{const t=te(e)?Number(e):NaN;return isNaN(t)?e:t};let oa;const zi=()=>oa||(oa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qf(e,t){return e+JSON.stringify(t,(s,n)=>typeof n=="function"?n.toString():n)}const Uf="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",Vf=at(Uf);function Dn(e){if(z(e)){const t={};for(let s=0;s<e.length;s++){const n=e[s],i=te(n)?Il(n):Dn(n);if(i)for(const o in i)t[o]=i[o]}return t}else if(te(e)||pe(e))return e}const zf=/;(?![^(]*\))/g,Hf=/:([^]+)/,$f=/\/\*[^]*?\*\//g;function Il(e){const t={};return e.replace($f,"").split(zf).forEach(s=>{if(s){const n=s.split(Hf);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Fn(e){let t="";if(te(e))t=e;else if(z(e))for(let s=0;s<e.length;s++){const n=Fn(e[s]);n&&(t+=n+" ")}else if(pe(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}function Bf(e){if(!e)return null;let{class:t,style:s}=e;return t&&!te(t)&&(e.class=Fn(t)),s&&(e.style=Dn(s)),e}const Kf="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Wf="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Gf="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",Xf="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",Yf=at(Kf),Jf=at(Wf),Qf=at(Gf),Zf=at(Xf),ed="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",td=at(ed);function Pl(e){return!!e||e===""}function sd(e,t){if(e.length!==t.length)return!1;let s=!0;for(let n=0;s&&n<e.length;n++)s=ss(e[n],t[n]);return s}function ss(e,t){if(e===t)return!0;let s=ia(e),n=ia(t);if(s||n)return s&&n?e.getTime()===t.getTime():!1;if(s=Ze(e),n=Ze(t),s||n)return e===t;if(s=z(e),n=z(t),s||n)return s&&n?sd(e,t):!1;if(s=pe(e),n=pe(t),s||n){if(!s||!n)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const r in e){const a=e.hasOwnProperty(r),l=t.hasOwnProperty(r);if(a&&!l||!a&&l||!ss(e[r],t[r]))return!1}}return String(e)===String(t)}function Hi(e,t){return e.findIndex(s=>ss(s,t))}const Rl=e=>!!(e&&e.__v_isRef===!0),Nl=e=>te(e)?e:e==null?"":z(e)||pe(e)&&(e.toString===Tl||!Q(e.toString))?Rl(e)?Nl(e.value):JSON.stringify(e,kl,2):String(e),kl=(e,t)=>Rl(t)?kl(e,t.value):Ls(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[n,i],o)=>(s[uo(n,o)+" =>"]=i,s),{})}:Es(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>uo(s))}:Ze(t)?uo(t):pe(t)&&!z(t)&&!Ui(t)?String(t):t,uo=(e,t="")=>{var s;return Ze(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ze;class cr{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ze,!t&&ze&&(this.index=(ze.scopes||(ze.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=ze;try{return ze=this,t()}finally{ze=s}}}on(){ze=this}off(){ze=this.parent}stop(t){if(this._active){this._active=!1;let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(this.effects.length=0,s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function nd(e){return new cr(e)}function Ol(){return ze}function id(e,t=!1){ze&&ze.cleanups.push(e)}let me;const fo=new WeakSet;class bn{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ze&&ze.active&&ze.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fo.has(this)&&(fo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ll(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ra(this),jl(this);const t=me,s=vt;me=this,vt=!0;try{return this.fn()}finally{Dl(this),me=t,vt=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)dr(t);this.deps=this.depsTail=void 0,ra(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Io(this)&&this.run()}get dirty(){return Io(this)}}let Ml=0,cn,un;function Ll(e,t=!1){if(e.flags|=8,t){e.next=un,un=e;return}e.next=cn,cn=e}function ur(){Ml++}function fr(){if(--Ml>0)return;if(un){let t=un;for(un=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;cn;){let t=cn;for(cn=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=s}}if(e)throw e}function jl(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Dl(e){let t,s=e.depsTail,n=s;for(;n;){const i=n.prevDep;n.version===-1?(n===s&&(s=i),dr(n),od(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=i}e.deps=t,e.depsTail=s}function Io(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Fl(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Fl(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Sn))return;e.globalVersion=Sn;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Io(e)){e.flags&=-3;return}const s=me,n=vt;me=e,vt=!0;try{jl(e);const i=e.fn(e._value);(t.version===0||He(i,e._value))&&(e._value=i,t.version++)}catch(i){throw t.version++,i}finally{me=s,vt=n,Dl(e),e.flags&=-3}}function dr(e,t=!1){const{dep:s,prevSub:n,nextSub:i}=e;if(n&&(n.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=n,e.nextSub=void 0),s.subs===e&&(s.subs=n,!n&&s.computed)){s.computed.flags&=-5;for(let o=s.computed.deps;o;o=o.nextDep)dr(o,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function od(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}function rd(e,t){e.effect instanceof bn&&(e=e.effect.fn);const s=new bn(e);t&&ie(s,t);try{s.run()}catch(i){throw s.stop(),i}const n=s.run.bind(s);return n.effect=s,n}function ad(e){e.effect.stop()}let vt=!0;const ql=[];function os(){ql.push(vt),vt=!1}function rs(){const e=ql.pop();vt=e===void 0?!0:e}function ra(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=me;me=void 0;try{t()}finally{me=s}}}let Sn=0;class ld{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $i{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!me||!vt||me===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==me)s=this.activeLink=new ld(me,this),me.deps?(s.prevDep=me.depsTail,me.depsTail.nextDep=s,me.depsTail=s):me.deps=me.depsTail=s,Ul(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const n=s.nextDep;n.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=n),s.prevDep=me.depsTail,s.nextDep=void 0,me.depsTail.nextDep=s,me.depsTail=s,me.deps===s&&(me.deps=n)}return s}trigger(t){this.version++,Sn++,this.notify(t)}notify(t){ur();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{fr()}}}function Ul(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Ul(n)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const yi=new WeakMap,ds=Symbol(""),Po=Symbol(""),_n=Symbol("");function De(e,t,s){if(vt&&me){let n=yi.get(e);n||yi.set(e,n=new Map);let i=n.get(s);i||(n.set(s,i=new $i),i.map=n,i.key=s),i.track()}}function kt(e,t,s,n,i,o){const r=yi.get(e);if(!r){Sn++;return}const a=l=>{l&&l.trigger()};if(ur(),t==="clear")r.forEach(a);else{const l=z(e),c=l&&lr(s);if(l&&s==="length"){const f=Number(n);r.forEach((u,d)=>{(d==="length"||d===_n||!Ze(d)&&d>=f)&&a(u)})}else switch((s!==void 0||r.has(void 0))&&a(r.get(s)),c&&a(r.get(_n)),t){case"add":l?c&&a(r.get("length")):(a(r.get(ds)),Ls(e)&&a(r.get(Po)));break;case"delete":l||(a(r.get(ds)),Ls(e)&&a(r.get(Po)));break;case"set":Ls(e)&&a(r.get(ds));break}}fr()}function cd(e,t){const s=yi.get(e);return s&&s.get(t)}function As(e){const t=ae(e);return t===e?t:(De(t,"iterate",_n),rt(e)?t:t.map(Fe))}function Bi(e){return De(e=ae(e),"iterate",_n),e}const ud={__proto__:null,[Symbol.iterator](){return po(this,Symbol.iterator,Fe)},concat(...e){return As(this).concat(...e.map(t=>z(t)?As(t):t))},entries(){return po(this,"entries",e=>(e[1]=Fe(e[1]),e))},every(e,t){return At(this,"every",e,t,void 0,arguments)},filter(e,t){return At(this,"filter",e,t,s=>s.map(Fe),arguments)},find(e,t){return At(this,"find",e,t,Fe,arguments)},findIndex(e,t){return At(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return At(this,"findLast",e,t,Fe,arguments)},findLastIndex(e,t){return At(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return At(this,"forEach",e,t,void 0,arguments)},includes(...e){return ho(this,"includes",e)},indexOf(...e){return ho(this,"indexOf",e)},join(e){return As(this).join(e)},lastIndexOf(...e){return ho(this,"lastIndexOf",e)},map(e,t){return At(this,"map",e,t,void 0,arguments)},pop(){return tn(this,"pop")},push(...e){return tn(this,"push",e)},reduce(e,...t){return aa(this,"reduce",e,t)},reduceRight(e,...t){return aa(this,"reduceRight",e,t)},shift(){return tn(this,"shift")},some(e,t){return At(this,"some",e,t,void 0,arguments)},splice(...e){return tn(this,"splice",e)},toReversed(){return As(this).toReversed()},toSorted(e){return As(this).toSorted(e)},toSpliced(...e){return As(this).toSpliced(...e)},unshift(...e){return tn(this,"unshift",e)},values(){return po(this,"values",Fe)}};function po(e,t,s){const n=Bi(e),i=n[t]();return n!==e&&!rt(e)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.value&&(o.value=s(o.value)),o}),i}const fd=Array.prototype;function At(e,t,s,n,i,o){const r=Bi(e),a=r!==e&&!rt(e),l=r[t];if(l!==fd[t]){const u=l.apply(e,o);return a?Fe(u):u}let c=s;r!==e&&(a?c=function(u,d){return s.call(this,Fe(u),d,e)}:s.length>2&&(c=function(u,d){return s.call(this,u,d,e)}));const f=l.call(r,c,n);return a&&i?i(f):f}function aa(e,t,s,n){const i=Bi(e);let o=s;return i!==e&&(rt(e)?s.length>3&&(o=function(r,a,l){return s.call(this,r,a,l,e)}):o=function(r,a,l){return s.call(this,r,Fe(a),l,e)}),i[t](o,...n)}function ho(e,t,s){const n=ae(e);De(n,"iterate",_n);const i=n[t](...s);return(i===-1||i===!1)&&Gi(s[0])?(s[0]=ae(s[0]),n[t](...s)):i}function tn(e,t,s=[]){os(),ur();const n=ae(e)[t].apply(e,s);return fr(),rs(),n}const dd=at("__proto__,__v_isRef,__isVue"),Vl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ze));function pd(e){Ze(e)||(e=String(e));const t=ae(this);return De(t,"has",e),t.hasOwnProperty(e)}class zl{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,n){if(s==="__v_skip")return t.__v_skip;const i=this._isReadonly,o=this._isShallow;if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return o;if(s==="__v_raw")return n===(i?o?Gl:Wl:o?Kl:Bl).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const r=z(t);if(!i){let l;if(r&&(l=ud[s]))return l;if(s==="hasOwnProperty")return pd}const a=Reflect.get(t,s,Re(t)?t:n);return(Ze(s)?Vl.has(s):dd(s))||(i||De(t,"get",s),o)?a:Re(a)?r&&lr(s)?a:a.value:pe(a)?i?hr(a):qn(a):a}}class Hl extends zl{constructor(t=!1){super(!1,t)}set(t,s,n,i){let o=t[s];if(!this._isShallow){const l=ns(o);if(!rt(n)&&!ns(n)&&(o=ae(o),n=ae(n)),!z(t)&&Re(o)&&!Re(n))return l?!1:(o.value=n,!0)}const r=z(t)&&lr(s)?Number(s)<t.length:le(t,s),a=Reflect.set(t,s,n,Re(t)?t:i);return t===ae(i)&&(r?He(n,o)&&kt(t,"set",s,n):kt(t,"add",s,n)),a}deleteProperty(t,s){const n=le(t,s);t[s];const i=Reflect.deleteProperty(t,s);return i&&n&&kt(t,"delete",s,void 0),i}has(t,s){const n=Reflect.has(t,s);return(!Ze(s)||!Vl.has(s))&&De(t,"has",s),n}ownKeys(t){return De(t,"iterate",z(t)?"length":ds),Reflect.ownKeys(t)}}class $l extends zl{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const hd=new Hl,md=new $l,gd=new Hl(!0),yd=new $l(!0),Ro=e=>e,Gn=e=>Reflect.getPrototypeOf(e);function vd(e,t,s){return function(...n){const i=this.__v_raw,o=ae(i),r=Ls(o),a=e==="entries"||e===Symbol.iterator&&r,l=e==="keys"&&r,c=i[e](...n),f=s?Ro:t?No:Fe;return!t&&De(o,"iterate",l?Po:ds),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:a?[f(u[0]),f(u[1])]:f(u),done:d}},[Symbol.iterator](){return this}}}}function Xn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function bd(e,t){const s={get(i){const o=this.__v_raw,r=ae(o),a=ae(i);e||(He(i,a)&&De(r,"get",i),De(r,"get",a));const{has:l}=Gn(r),c=t?Ro:e?No:Fe;if(l.call(r,i))return c(o.get(i));if(l.call(r,a))return c(o.get(a));o!==r&&o.get(i)},get size(){const i=this.__v_raw;return!e&&De(ae(i),"iterate",ds),Reflect.get(i,"size",i)},has(i){const o=this.__v_raw,r=ae(o),a=ae(i);return e||(He(i,a)&&De(r,"has",i),De(r,"has",a)),i===a?o.has(i):o.has(i)||o.has(a)},forEach(i,o){const r=this,a=r.__v_raw,l=ae(a),c=t?Ro:e?No:Fe;return!e&&De(l,"iterate",ds),a.forEach((f,u)=>i.call(o,c(f),c(u),r))}};return ie(s,e?{add:Xn("add"),set:Xn("set"),delete:Xn("delete"),clear:Xn("clear")}:{add(i){!t&&!rt(i)&&!ns(i)&&(i=ae(i));const o=ae(this);return Gn(o).has.call(o,i)||(o.add(i),kt(o,"add",i,i)),this},set(i,o){!t&&!rt(o)&&!ns(o)&&(o=ae(o));const r=ae(this),{has:a,get:l}=Gn(r);let c=a.call(r,i);c||(i=ae(i),c=a.call(r,i));const f=l.call(r,i);return r.set(i,o),c?He(o,f)&&kt(r,"set",i,o):kt(r,"add",i,o),this},delete(i){const o=ae(this),{has:r,get:a}=Gn(o);let l=r.call(o,i);l||(i=ae(i),l=r.call(o,i)),a&&a.call(o,i);const c=o.delete(i);return l&&kt(o,"delete",i,void 0),c},clear(){const i=ae(this),o=i.size!==0,r=i.clear();return o&&kt(i,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(i=>{s[i]=vd(i,e,t)}),s}function Ki(e,t){const s=bd(e,t);return(n,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?n:Reflect.get(le(s,i)&&i in n?s:n,i,o)}const Sd={get:Ki(!1,!1)},_d={get:Ki(!1,!0)},Ed={get:Ki(!0,!1)},Cd={get:Ki(!0,!0)},Bl=new WeakMap,Kl=new WeakMap,Wl=new WeakMap,Gl=new WeakMap;function xd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wd(e){return e.__v_skip||!Object.isExtensible(e)?0:xd(Lf(e))}function qn(e){return ns(e)?e:Wi(e,!1,hd,Sd,Bl)}function pr(e){return Wi(e,!1,gd,_d,Kl)}function hr(e){return Wi(e,!0,md,Ed,Wl)}function Td(e){return Wi(e,!0,yd,Cd,Gl)}function Wi(e,t,s,n,i){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=i.get(e);if(o)return o;const r=wd(e);if(r===0)return e;const a=new Proxy(e,r===2?n:s);return i.set(e,a),a}function Jt(e){return ns(e)?Jt(e.__v_raw):!!(e&&e.__v_isReactive)}function ns(e){return!!(e&&e.__v_isReadonly)}function rt(e){return!!(e&&e.__v_isShallow)}function Gi(e){return e?!!e.__v_raw:!1}function ae(e){const t=e&&e.__v_raw;return t?ae(t):e}function Xl(e){return!le(e,"__v_skip")&&Object.isExtensible(e)&&Al(e,"__v_skip",!0),e}const Fe=e=>pe(e)?qn(e):e,No=e=>pe(e)?hr(e):e;function Re(e){return e?e.__v_isRef===!0:!1}function Qt(e){return Yl(e,!1)}function mr(e){return Yl(e,!0)}function Yl(e,t){return Re(e)?e:new Ad(e,t)}class Ad{constructor(t,s){this.dep=new $i,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:ae(t),this._value=s?t:Fe(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,n=this.__v_isShallow||rt(t)||ns(t);t=n?t:ae(t),He(t,s)&&(this._rawValue=t,this._value=n?t:Fe(t),this.dep.trigger())}}function Id(e){e.dep&&e.dep.trigger()}function Lt(e){return Re(e)?e.value:e}function Pd(e){return Q(e)?e():Lt(e)}const Rd={get:(e,t,s)=>t==="__v_raw"?e:Lt(Reflect.get(e,t,s)),set:(e,t,s,n)=>{const i=e[t];return Re(i)&&!Re(s)?(i.value=s,!0):Reflect.set(e,t,s,n)}};function gr(e){return Jt(e)?e:new Proxy(e,Rd)}class Nd{constructor(t){this.__v_isRef=!0,this._value=void 0;const s=this.dep=new $i,{get:n,set:i}=t(s.track.bind(s),s.trigger.bind(s));this._get=n,this._set=i}get value(){return this._value=this._get()}set value(t){this._set(t)}}function Jl(e){return new Nd(e)}function kd(e){const t=z(e)?new Array(e.length):{};for(const s in e)t[s]=Ql(e,s);return t}class Od{constructor(t,s,n){this._object=t,this._key=s,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return cd(ae(this._object),this._key)}}class Md{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Ld(e,t,s){return Re(e)?e:Q(e)?new Md(e):pe(e)&&arguments.length>1?Ql(e,t,s):Qt(e)}function Ql(e,t,s){const n=e[t];return Re(n)?n:new Od(e,t,s)}class jd{constructor(t,s,n){this.fn=t,this.setter=s,this._value=void 0,this.dep=new $i(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Sn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&me!==this)return Ll(this,!0),!0}get value(){const t=this.dep.track();return Fl(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Dd(e,t,s=!1){let n,i;return Q(e)?n=e:(n=e.get,i=e.set),new jd(n,i,s)}const Fd={GET:"get",HAS:"has",ITERATE:"iterate"},qd={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"},Yn={},vi=new WeakMap;let $t;function Ud(){return $t}function Zl(e,t=!1,s=$t){if(s){let n=vi.get(s);n||vi.set(s,n=[]),n.push(e)}}function Vd(e,t,s=ne){const{immediate:n,deep:i,once:o,scheduler:r,augmentJob:a,call:l}=s,c=v=>i?v:rt(v)||i===!1||i===0?Ot(v,1):Ot(v);let f,u,d,p,b=!1,y=!1;if(Re(e)?(u=()=>e.value,b=rt(e)):Jt(e)?(u=()=>c(e),b=!0):z(e)?(y=!0,b=e.some(v=>Jt(v)||rt(v)),u=()=>e.map(v=>{if(Re(v))return v.value;if(Jt(v))return c(v);if(Q(v))return l?l(v,2):v()})):Q(e)?t?u=l?()=>l(e,2):e:u=()=>{if(d){os();try{d()}finally{rs()}}const v=$t;$t=f;try{return l?l(e,3,[p]):e(p)}finally{$t=v}}:u=Oe,t&&i){const v=u,E=i===!0?1/0:i;u=()=>Ot(v(),E)}const R=Ol(),T=()=>{f.stop(),R&&R.active&&rr(R.effects,f)};if(o&&t){const v=t;t=(...E)=>{v(...E),T()}}let S=y?new Array(e.length).fill(Yn):Yn;const g=v=>{if(!(!(f.flags&1)||!f.dirty&&!v))if(t){const E=f.run();if(i||b||(y?E.some((P,L)=>He(P,S[L])):He(E,S))){d&&d();const P=$t;$t=f;try{const L=[E,S===Yn?void 0:y&&S[0]===Yn?[]:S,p];l?l(t,3,L):t(...L),S=E}finally{$t=P}}}else f.run()};return a&&a(g),f=new bn(u),f.scheduler=r?()=>r(g,!1):g,p=v=>Zl(v,!1,f),d=f.onStop=()=>{const v=vi.get(f);if(v){if(l)l(v,4);else for(const E of v)E();vi.delete(f)}},t?n?g(!0):S=f.run():r?r(g.bind(null,!0),!0):f.run(),T.pause=f.pause.bind(f),T.resume=f.resume.bind(f),T.stop=T,T}function Ot(e,t=1/0,s){if(t<=0||!pe(e)||e.__v_skip||(s=s||new Set,s.has(e)))return e;if(s.add(e),t--,Re(e))Ot(e.value,t,s);else if(z(e))for(let n=0;n<e.length;n++)Ot(e[n],t,s);else if(Es(e)||Ls(e))e.forEach(n=>{Ot(n,t,s)});else if(Ui(e)){for(const n in e)Ot(e[n],t,s);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&Ot(e[n],t,s)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ec=[];function zd(e){ec.push(e)}function Hd(){ec.pop()}function $d(e,t){}const Bd={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER",COMPONENT_UPDATE:15,15:"COMPONENT_UPDATE",APP_UNMOUNT_CLEANUP:16,16:"APP_UNMOUNT_CLEANUP"},Kd={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update",16:"app unmount cleanup function"};function Js(e,t,s,n){try{return n?e(...n):e()}catch(i){xs(i,t,s)}}function ht(e,t,s,n){if(Q(e)){const i=Js(e,t,s,n);return i&&ar(i)&&i.catch(o=>{xs(o,t,s)}),i}if(z(e)){const i=[];for(let o=0;o<e.length;o++)i.push(ht(e[o],t,s,n));return i}}function xs(e,t,s,n=!0){const i=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||ne;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${s}`;for(;a;){const f=a.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,l,c)===!1)return}a=a.parent}if(o){os(),Js(o,null,10,[e,l,c]),rs();return}}Wd(e,s,i,n,r)}function Wd(e,t,s,n=!0,i=!1){if(i)throw e;console.error(e)}const $e=[];let Ct=-1;const Fs=[];let Bt=null,Rs=0;const tc=Promise.resolve();let bi=null;function Qs(e){const t=bi||tc;return e?t.then(this?e.bind(this):e):t}function Gd(e){let t=Ct+1,s=$e.length;for(;t<s;){const n=t+s>>>1,i=$e[n],o=Cn(i);o<e||o===e&&i.flags&2?t=n+1:s=n}return t}function yr(e){if(!(e.flags&1)){const t=Cn(e),s=$e[$e.length-1];!s||!(e.flags&2)&&t>=Cn(s)?$e.push(e):$e.splice(Gd(t),0,e),e.flags|=1,sc()}}function sc(){bi||(bi=tc.then(nc))}function En(e){z(e)?Fs.push(...e):Bt&&e.id===-1?Bt.splice(Rs+1,0,e):e.flags&1||(Fs.push(e),e.flags|=1),sc()}function la(e,t,s=Ct+1){for(;s<$e.length;s++){const n=$e[s];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;$e.splice(s,1),s--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Si(e){if(Fs.length){const t=[...new Set(Fs)].sort((s,n)=>Cn(s)-Cn(n));if(Fs.length=0,Bt){Bt.push(...t);return}for(Bt=t,Rs=0;Rs<Bt.length;Rs++){const s=Bt[Rs];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}Bt=null,Rs=0}}const Cn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function nc(e){try{for(Ct=0;Ct<$e.length;Ct++){const t=$e[Ct];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Js(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ct<$e.length;Ct++){const t=$e[Ct];t&&(t.flags&=-2)}Ct=-1,$e.length=0,Si(),bi=null,($e.length||Fs.length)&&nc()}}let Ns,Jn=[];function ic(e,t){var s,n;Ns=e,Ns?(Ns.enabled=!0,Jn.forEach(({event:i,args:o})=>Ns.emit(i,...o)),Jn=[]):typeof window<"u"&&window.HTMLElement&&!((n=(s=window.navigator)==null?void 0:s.userAgent)!=null&&n.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(o=>{ic(o,t)}),setTimeout(()=>{Ns||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Jn=[])},3e3)):Jn=[]}let Pe=null,Xi=null;function xn(e){const t=Pe;return Pe=e,Xi=e&&e.type.__scopeId||null,t}function Xd(e){Xi=e}function Yd(){Xi=null}const Jd=e=>vr;function vr(e,t=Pe,s){if(!t||e._n)return e;const n=(...i)=>{n._d&&qo(-1);const o=xn(t);let r;try{r=e(...i)}finally{xn(o),n._d&&qo(1)}return r};return n._n=!0,n._c=!0,n._d=!0,n}function Qd(e,t){if(Pe===null)return e;const s=Hn(Pe),n=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,r,a,l=ne]=t[i];o&&(Q(o)&&(o={mounted:o,updated:o}),o.deep&&Ot(r),n.push({dir:o,instance:s,value:r,oldValue:void 0,arg:a,modifiers:l}))}return e}function xt(e,t,s,n){const i=e.dirs,o=t&&t.dirs;for(let r=0;r<i.length;r++){const a=i[r];o&&(a.oldValue=o[r].value);let l=a.dir[n];l&&(os(),ht(l,s,8,[e.el,a,e,t]),rs())}}const oc=Symbol("_vte"),rc=e=>e.__isTeleport,fn=e=>e&&(e.disabled||e.disabled===""),ca=e=>e&&(e.defer||e.defer===""),ua=e=>typeof SVGElement<"u"&&e instanceof SVGElement,fa=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,ko=(e,t)=>{const s=e&&e.to;return te(s)?t?t(s):null:s},ac={name:"Teleport",__isTeleport:!0,process(e,t,s,n,i,o,r,a,l,c){const{mc:f,pc:u,pbc:d,o:{insert:p,querySelector:b,createText:y,createComment:R}}=c,T=fn(t.props);let{shapeFlag:S,children:g,dynamicChildren:v}=t;if(e==null){const E=t.el=y(""),P=t.anchor=y("");p(E,s,n),p(P,s,n);const L=(C,w)=>{S&16&&(i&&i.isCE&&(i.ce._teleportTarget=C),f(g,C,w,i,o,r,a,l))},k=()=>{const C=t.target=ko(t.props,b),w=lc(C,t,y,p);C&&(r!=="svg"&&ua(C)?r="svg":r!=="mathml"&&fa(C)&&(r="mathml"),T||(L(C,w),ai(t,!1)))};T&&(L(s,P),ai(t,!0)),ca(t.props)?Te(()=>{k(),t.el.__isMounted=!0},o):k()}else{if(ca(t.props)&&!e.el.__isMounted){Te(()=>{ac.process(e,t,s,n,i,o,r,a,l,c),delete e.el.__isMounted},o);return}t.el=e.el,t.targetStart=e.targetStart;const E=t.anchor=e.anchor,P=t.target=e.target,L=t.targetAnchor=e.targetAnchor,k=fn(e.props),C=k?s:P,w=k?E:L;if(r==="svg"||ua(P)?r="svg":(r==="mathml"||fa(P))&&(r="mathml"),v?(d(e.dynamicChildren,v,C,i,o,r,a),Ir(e,t,!0)):l||u(e,t,C,w,i,o,r,a,!1),T)k?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Qn(t,s,E,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const j=t.target=ko(t.props,b);j&&Qn(t,j,null,c,0)}else k&&Qn(t,P,L,c,1);ai(t,T)}},remove(e,t,s,{um:n,o:{remove:i}},o){const{shapeFlag:r,children:a,anchor:l,targetStart:c,targetAnchor:f,target:u,props:d}=e;if(u&&(i(c),i(f)),o&&i(l),r&16){const p=o||!fn(d);for(let b=0;b<a.length;b++){const y=a[b];n(y,t,s,p,!!y.dynamicChildren)}}},move:Qn,hydrate:Zd};function Qn(e,t,s,{o:{insert:n},m:i},o=2){o===0&&n(e.targetAnchor,t,s);const{el:r,anchor:a,shapeFlag:l,children:c,props:f}=e,u=o===2;if(u&&n(r,t,s),(!u||fn(f))&&l&16)for(let d=0;d<c.length;d++)i(c[d],t,s,2);u&&n(a,t,s)}function Zd(e,t,s,n,i,o,{o:{nextSibling:r,parentNode:a,querySelector:l,insert:c,createText:f}},u){const d=t.target=ko(t.props,l);if(d){const p=fn(t.props),b=d._lpa||d.firstChild;if(t.shapeFlag&16)if(p)t.anchor=u(r(e),t,a(e),s,n,i,o),t.targetStart=b,t.targetAnchor=b&&r(b);else{t.anchor=r(e);let y=b;for(;y;){if(y&&y.nodeType===8){if(y.data==="teleport start anchor")t.targetStart=y;else if(y.data==="teleport anchor"){t.targetAnchor=y,d._lpa=t.targetAnchor&&r(t.targetAnchor);break}}y=r(y)}t.targetAnchor||lc(d,t,f,c),u(b&&r(b),t,d,s,n,i,o)}ai(t,p)}return t.anchor&&r(t.anchor)}const ep=ac;function ai(e,t){const s=e.ctx;if(s&&s.ut){let n,i;for(t?(n=e.el,i=e.anchor):(n=e.targetStart,i=e.targetAnchor);n&&n!==i;)n.nodeType===1&&n.setAttribute("data-v-owner",s.uid),n=n.nextSibling;s.ut()}}function lc(e,t,s,n){const i=t.targetStart=s(""),o=t.targetAnchor=s("");return i[oc]=o,e&&(n(i,e),n(o,e)),o}const Kt=Symbol("_leaveCb"),Zn=Symbol("_enterCb");function br(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Zs(()=>{e.isMounted=!0}),Zi(()=>{e.isUnmounting=!0}),e}const ut=[Function,Array],Sr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ut,onEnter:ut,onAfterEnter:ut,onEnterCancelled:ut,onBeforeLeave:ut,onLeave:ut,onAfterLeave:ut,onLeaveCancelled:ut,onBeforeAppear:ut,onAppear:ut,onAfterAppear:ut,onAppearCancelled:ut},cc=e=>{const t=e.subTree;return t.component?cc(t.component):t},tp={name:"BaseTransition",props:Sr,setup(e,{slots:t}){const s=mt(),n=br();return()=>{const i=t.default&&Yi(t.default(),!0);if(!i||!i.length)return;const o=uc(i),r=ae(e),{mode:a}=r;if(n.isLeaving)return mo(o);const l=da(o);if(!l)return mo(o);let c=Us(l,r,n,s,u=>c=u);l.type!==we&&Dt(l,c);let f=s.subTree&&da(s.subTree);if(f&&f.type!==we&&!yt(l,f)&&cc(s).type!==we){let u=Us(f,r,n,s);if(Dt(f,u),a==="out-in"&&l.type!==we)return n.isLeaving=!0,u.afterLeave=()=>{n.isLeaving=!1,s.job.flags&8||s.update(),delete u.afterLeave,f=void 0},mo(o);a==="in-out"&&l.type!==we?u.delayLeave=(d,p,b)=>{const y=dc(n,f);y[String(f.key)]=f,d[Kt]=()=>{p(),d[Kt]=void 0,delete c.delayedLeave,f=void 0},c.delayedLeave=()=>{b(),delete c.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return o}}};function uc(e){let t=e[0];if(e.length>1){for(const s of e)if(s.type!==we){t=s;break}}return t}const fc=tp;function dc(e,t){const{leavingVNodes:s}=e;let n=s.get(t.type);return n||(n=Object.create(null),s.set(t.type,n)),n}function Us(e,t,s,n,i){const{appear:o,mode:r,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:f,onEnterCancelled:u,onBeforeLeave:d,onLeave:p,onAfterLeave:b,onLeaveCancelled:y,onBeforeAppear:R,onAppear:T,onAfterAppear:S,onAppearCancelled:g}=t,v=String(e.key),E=dc(s,e),P=(C,w)=>{C&&ht(C,n,9,w)},L=(C,w)=>{const j=w[1];P(C,w),z(C)?C.every(x=>x.length<=1)&&j():C.length<=1&&j()},k={mode:r,persisted:a,beforeEnter(C){let w=l;if(!s.isMounted)if(o)w=R||l;else return;C[Kt]&&C[Kt](!0);const j=E[v];j&&yt(e,j)&&j.el[Kt]&&j.el[Kt](),P(w,[C])},enter(C){let w=c,j=f,x=u;if(!s.isMounted)if(o)w=T||c,j=S||f,x=g||u;else return;let D=!1;const G=C[Zn]=Y=>{D||(D=!0,Y?P(x,[C]):P(j,[C]),k.delayedLeave&&k.delayedLeave(),C[Zn]=void 0)};w?L(w,[C,G]):G()},leave(C,w){const j=String(e.key);if(C[Zn]&&C[Zn](!0),s.isUnmounting)return w();P(d,[C]);let x=!1;const D=C[Kt]=G=>{x||(x=!0,w(),G?P(y,[C]):P(b,[C]),C[Kt]=void 0,E[j]===e&&delete E[j])};E[j]=e,p?L(p,[C,D]):D()},clone(C){const w=Us(C,t,s,n,i);return i&&i(w),w}};return k}function mo(e){if(Vn(e))return e=Tt(e),e.children=null,e}function da(e){if(!Vn(e))return rc(e.type)&&e.children?uc(e.children):e;const{shapeFlag:t,children:s}=e;if(s){if(t&16)return s[0];if(t&32&&Q(s.default))return s.default()}}function Dt(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Dt(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Yi(e,t=!1,s){let n=[],i=0;for(let o=0;o<e.length;o++){let r=e[o];const a=s==null?r.key:String(s)+String(r.key!=null?r.key:o);r.type===Ne?(r.patchFlag&128&&i++,n=n.concat(Yi(r.children,t,a))):(t||r.type!==we)&&n.push(a!=null?Tt(r,{key:a}):r)}if(i>1)for(let o=0;o<n.length;o++)n[o].patchFlag=-2;return n}/*! #__NO_SIDE_EFFECTS__ */function Un(e,t){return Q(e)?ie({name:e.name},t,{setup:e}):e}function sp(){const e=mt();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function _r(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function np(e){const t=mt(),s=mr(null);if(t){const i=t.refs===ne?t.refs={}:t.refs;Object.defineProperty(i,e,{enumerable:!0,get:()=>s.value,set:o=>s.value=o})}return s}function wn(e,t,s,n,i=!1){if(z(e)){e.forEach((b,y)=>wn(b,t&&(z(t)?t[y]:t),s,n,i));return}if(Zt(n)&&!i){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&wn(e,t,s,n.component.subTree);return}const o=n.shapeFlag&4?Hn(n.component):n.el,r=i?null:o,{i:a,r:l}=e,c=t&&t.r,f=a.refs===ne?a.refs={}:a.refs,u=a.setupState,d=ae(u),p=u===ne?()=>!1:b=>le(d,b);if(c!=null&&c!==l&&(te(c)?(f[c]=null,p(c)&&(u[c]=null)):Re(c)&&(c.value=null)),Q(l))Js(l,a,12,[r,f]);else{const b=te(l),y=Re(l);if(b||y){const R=()=>{if(e.f){const T=b?p(l)?u[l]:f[l]:l.value;i?z(T)&&rr(T,o):z(T)?T.includes(o)||T.push(o):b?(f[l]=[o],p(l)&&(u[l]=f[l])):(l.value=[o],e.k&&(f[e.k]=l.value))}else b?(f[l]=r,p(l)&&(u[l]=r)):y&&(l.value=r,e.k&&(f[e.k]=r))};r?(R.id=-1,Te(R,s)):R()}}}let pa=!1;const Is=()=>{pa||(console.error("Hydration completed but contains mismatches."),pa=!0)},ip=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",op=e=>e.namespaceURI.includes("MathML"),ei=e=>{if(e.nodeType===1){if(ip(e))return"svg";if(op(e))return"mathml"}},Os=e=>e.nodeType===8;function rp(e){const{mt:t,p:s,o:{patchProp:n,createText:i,nextSibling:o,parentNode:r,remove:a,insert:l,createComment:c}}=e,f=(g,v)=>{if(!v.hasChildNodes()){s(null,g,v),Si(),v._vnode=g;return}u(v.firstChild,g,null,null,null),Si(),v._vnode=g},u=(g,v,E,P,L,k=!1)=>{k=k||!!v.dynamicChildren;const C=Os(g)&&g.data==="[",w=()=>y(g,v,E,P,L,C),{type:j,ref:x,shapeFlag:D,patchFlag:G}=v;let Y=g.nodeType;v.el=g,G===-2&&(k=!1,v.dynamicChildren=null);let H=null;switch(j){case es:Y!==3?v.children===""?(l(v.el=i(""),r(g),g),H=g):H=w():(g.data!==v.children&&(Is(),g.data=v.children),H=o(g));break;case we:S(g)?(H=o(g),T(v.el=g.content.firstChild,g,E)):Y!==8||C?H=w():H=o(g);break;case ms:if(C&&(g=o(g),Y=g.nodeType),Y===1||Y===3){H=g;const J=!v.children.length;for(let K=0;K<v.staticCount;K++)J&&(v.children+=H.nodeType===1?H.outerHTML:H.data),K===v.staticCount-1&&(v.anchor=H),H=o(H);return C?o(H):H}else w();break;case Ne:C?H=b(g,v,E,P,L,k):H=w();break;default:if(D&1)(Y!==1||v.type.toLowerCase()!==g.tagName.toLowerCase())&&!S(g)?H=w():H=d(g,v,E,P,L,k);else if(D&6){v.slotScopeIds=L;const J=r(g);if(C?H=R(g):Os(g)&&g.data==="teleport start"?H=R(g,g.data,"teleport end"):H=o(g),t(v,J,null,E,P,ei(J),k),Zt(v)&&!v.type.__asyncResolved){let K;C?(K=ge(Ne),K.anchor=H?H.previousSibling:J.lastChild):K=g.nodeType===3?Rr(""):ge("div"),K.el=g,v.component.subTree=K}}else D&64?Y!==8?H=w():H=v.type.hydrate(g,v,E,P,L,k,e,p):D&128&&(H=v.type.hydrate(g,v,E,P,ei(r(g)),L,k,e,u))}return x!=null&&wn(x,null,P,v),H},d=(g,v,E,P,L,k)=>{k=k||!!v.dynamicChildren;const{type:C,props:w,patchFlag:j,shapeFlag:x,dirs:D,transition:G}=v,Y=C==="input"||C==="option";if(Y||j!==-1){D&&xt(v,null,E,"created");let H=!1;if(S(g)){H=Dc(null,G)&&E&&E.vnode.props&&E.vnode.props.appear;const K=g.content.firstChild;H&&G.beforeEnter(K),T(K,g,E),v.el=g=K}if(x&16&&!(w&&(w.innerHTML||w.textContent))){let K=p(g.firstChild,v,g,E,P,L,k);for(;K;){ti(g,1)||Is();const _e=K;K=K.nextSibling,a(_e)}}else if(x&8){let K=v.children;K[0]===`
`&&(g.tagName==="PRE"||g.tagName==="TEXTAREA")&&(K=K.slice(1)),g.textContent!==K&&(ti(g,0)||Is(),g.textContent=v.children)}if(w){if(Y||!k||j&48){const K=g.tagName.includes("-");for(const _e in w)(Y&&(_e.endsWith("value")||_e==="indeterminate")||_s(_e)&&!Yt(_e)||_e[0]==="."||K)&&n(g,_e,null,w[_e],void 0,E)}else if(w.onClick)n(g,"onClick",null,w.onClick,void 0,E);else if(j&4&&Jt(w.style))for(const K in w.style)w.style[K]}let J;(J=w&&w.onVnodeBeforeMount)&&Xe(J,E,v),D&&xt(v,null,E,"beforeMount"),((J=w&&w.onVnodeMounted)||D||H)&&Kc(()=>{J&&Xe(J,E,v),H&&G.enter(g),D&&xt(v,null,E,"mounted")},P)}return g.nextSibling},p=(g,v,E,P,L,k,C)=>{C=C||!!v.dynamicChildren;const w=v.children,j=w.length;for(let x=0;x<j;x++){const D=C?w[x]:w[x]=Ye(w[x]),G=D.type===es;g?(G&&!C&&x+1<j&&Ye(w[x+1]).type===es&&(l(i(g.data.slice(D.children.length)),E,o(g)),g.data=D.children),g=u(g,D,P,L,k,C)):G&&!D.children?l(D.el=i(""),E):(ti(E,1)||Is(),s(null,D,E,null,P,L,ei(E),k))}return g},b=(g,v,E,P,L,k)=>{const{slotScopeIds:C}=v;C&&(L=L?L.concat(C):C);const w=r(g),j=p(o(g),v,w,E,P,L,k);return j&&Os(j)&&j.data==="]"?o(v.anchor=j):(Is(),l(v.anchor=c("]"),w,j),j)},y=(g,v,E,P,L,k)=>{if(ti(g.parentElement,1)||Is(),v.el=null,k){const j=R(g);for(;;){const x=o(g);if(x&&x!==j)a(x);else break}}const C=o(g),w=r(g);return a(g),s(null,v,w,C,E,P,ei(w),L),E&&(E.vnode.el=v.el,so(E,v.el)),C},R=(g,v="[",E="]")=>{let P=0;for(;g;)if(g=o(g),g&&Os(g)&&(g.data===v&&P++,g.data===E)){if(P===0)return o(g);P--}return g},T=(g,v,E)=>{const P=v.parentNode;P&&P.replaceChild(g,v);let L=E;for(;L;)L.vnode.el===v&&(L.vnode.el=L.subTree.el=g),L=L.parent},S=g=>g.nodeType===1&&g.tagName==="TEMPLATE";return[f,u]}const ha="data-allow-mismatch",ap={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function ti(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(ha);)e=e.parentElement;const s=e&&e.getAttribute(ha);if(s==null)return!1;if(s==="")return!0;{const n=s.split(",");return t===0&&n.includes("children")?!0:s.split(",").includes(ap[t])}}const lp=zi().requestIdleCallback||(e=>setTimeout(e,1)),cp=zi().cancelIdleCallback||(e=>clearTimeout(e)),up=(e=1e4)=>t=>{const s=lp(t,{timeout:e});return()=>cp(s)};function fp(e){const{top:t,left:s,bottom:n,right:i}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:r}=window;return(t>0&&t<o||n>0&&n<o)&&(s>0&&s<r||i>0&&i<r)}const dp=e=>(t,s)=>{const n=new IntersectionObserver(i=>{for(const o of i)if(o.isIntersecting){n.disconnect(),t();break}},e);return s(i=>{if(i instanceof Element){if(fp(i))return t(),n.disconnect(),!1;n.observe(i)}}),()=>n.disconnect()},pp=e=>t=>{if(e){const s=matchMedia(e);if(s.matches)t();else return s.addEventListener("change",t,{once:!0}),()=>s.removeEventListener("change",t)}},hp=(e=[])=>(t,s)=>{te(e)&&(e=[e]);let n=!1;const i=r=>{n||(n=!0,o(),t(),r.target.dispatchEvent(new r.constructor(r.type,r)))},o=()=>{s(r=>{for(const a of e)r.removeEventListener(a,i)})};return s(r=>{for(const a of e)r.addEventListener(a,i,{once:!0})}),o};function mp(e,t){if(Os(e)&&e.data==="["){let s=1,n=e.nextSibling;for(;n;){if(n.nodeType===1){if(t(n)===!1)break}else if(Os(n))if(n.data==="]"){if(--s===0)break}else n.data==="["&&s++;n=n.nextSibling}}else t(e)}const Zt=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function gp(e){Q(e)&&(e={loader:e});const{loader:t,loadingComponent:s,errorComponent:n,delay:i=200,hydrate:o,timeout:r,suspensible:a=!0,onError:l}=e;let c=null,f,u=0;const d=()=>(u++,c=null,p()),p=()=>{let b;return c||(b=c=t().catch(y=>{if(y=y instanceof Error?y:new Error(String(y)),l)return new Promise((R,T)=>{l(y,()=>R(d()),()=>T(y),u+1)});throw y}).then(y=>b!==c&&c?c:(y&&(y.__esModule||y[Symbol.toStringTag]==="Module")&&(y=y.default),f=y,y)))};return Un({name:"AsyncComponentWrapper",__asyncLoader:p,__asyncHydrate(b,y,R){const T=o?()=>{const S=o(R,g=>mp(b,g));S&&(y.bum||(y.bum=[])).push(S)}:R;f?T():p().then(()=>!y.isUnmounted&&T())},get __asyncResolved(){return f},setup(){const b=Ie;if(_r(b),f)return()=>go(f,b);const y=g=>{c=null,xs(g,b,13,!n)};if(a&&b.suspense||Vs)return p().then(g=>()=>go(g,b)).catch(g=>(y(g),()=>n?ge(n,{error:g}):null));const R=Qt(!1),T=Qt(),S=Qt(!!i);return i&&setTimeout(()=>{S.value=!1},i),r!=null&&setTimeout(()=>{if(!R.value&&!T.value){const g=new Error(`Async component timed out after ${r}ms.`);y(g),T.value=g}},r),p().then(()=>{R.value=!0,b.parent&&Vn(b.parent.vnode)&&b.parent.update()}).catch(g=>{y(g),T.value=g}),()=>{if(R.value&&f)return go(f,b);if(T.value&&n)return ge(n,{error:T.value});if(s&&!S.value)return ge(s)}}})}function go(e,t){const{ref:s,props:n,children:i,ce:o}=t.vnode,r=ge(e,n,i);return r.ref=s,r.ce=o,delete t.vnode.ce,r}const Vn=e=>e.type.__isKeepAlive,yp={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const s=mt(),n=s.ctx;if(!n.renderer)return()=>{const S=t.default&&t.default();return S&&S.length===1?S[0]:S};const i=new Map,o=new Set;let r=null;const a=s.suspense,{renderer:{p:l,m:c,um:f,o:{createElement:u}}}=n,d=u("div");n.activate=(S,g,v,E,P)=>{const L=S.component;c(S,g,v,0,a),l(L.vnode,S,g,v,L,a,E,S.slotScopeIds,P),Te(()=>{L.isDeactivated=!1,L.a&&Ds(L.a);const k=S.props&&S.props.onVnodeMounted;k&&Xe(k,L.parent,S)},a)},n.deactivate=S=>{const g=S.component;Ei(g.m),Ei(g.a),c(S,d,null,1,a),Te(()=>{g.da&&Ds(g.da);const v=S.props&&S.props.onVnodeUnmounted;v&&Xe(v,g.parent,S),g.isDeactivated=!0},a)};function p(S){yo(S),f(S,s,a,!0)}function b(S){i.forEach((g,v)=>{const E=$o(g.type);E&&!S(E)&&y(v)})}function y(S){const g=i.get(S);g&&(!r||!yt(g,r))?p(g):r&&yo(r),i.delete(S),o.delete(S)}hs(()=>[e.include,e.exclude],([S,g])=>{S&&b(v=>an(S,v)),g&&b(v=>!an(g,v))},{flush:"post",deep:!0});let R=null;const T=()=>{R!=null&&(Ci(s.subTree.type)?Te(()=>{i.set(R,si(s.subTree))},s.subTree.suspense):i.set(R,si(s.subTree)))};return Zs(T),Qi(T),Zi(()=>{i.forEach(S=>{const{subTree:g,suspense:v}=s,E=si(g);if(S.type===E.type&&S.key===E.key){yo(E);const P=E.component.da;P&&Te(P,v);return}p(S)})}),()=>{if(R=null,!t.default)return r=null;const S=t.default(),g=S[0];if(S.length>1)return r=null,S;if(!Ft(g)||!(g.shapeFlag&4)&&!(g.shapeFlag&128))return r=null,g;let v=si(g);if(v.type===we)return r=null,v;const E=v.type,P=$o(Zt(v)?v.type.__asyncResolved||{}:E),{include:L,exclude:k,max:C}=e;if(L&&(!P||!an(L,P))||k&&P&&an(k,P))return v.shapeFlag&=-257,r=v,g;const w=v.key==null?E:v.key,j=i.get(w);return v.el&&(v=Tt(v),g.shapeFlag&128&&(g.ssContent=v)),R=w,j?(v.el=j.el,v.component=j.component,v.transition&&Dt(v,v.transition),v.shapeFlag|=512,o.delete(w),o.add(w)):(o.add(w),C&&o.size>parseInt(C,10)&&y(o.values().next().value)),v.shapeFlag|=256,r=v,Ci(g.type)?g:v}}},vp=yp;function an(e,t){return z(e)?e.some(s=>an(s,t)):te(e)?e.split(",").includes(t):Mf(e)?(e.lastIndex=0,e.test(t)):!1}function pc(e,t){mc(e,"a",t)}function hc(e,t){mc(e,"da",t)}function mc(e,t,s=Ie){const n=e.__wdc||(e.__wdc=()=>{let i=s;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Ji(t,n,s),s){let i=s.parent;for(;i&&i.parent;)Vn(i.parent.vnode)&&bp(n,t,s,i),i=i.parent}}function bp(e,t,s,n){const i=Ji(t,e,n,!0);eo(()=>{rr(n[t],i)},s)}function yo(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function si(e){return e.shapeFlag&128?e.ssContent:e}function Ji(e,t,s=Ie,n=!1){if(s){const i=s[e]||(s[e]=[]),o=t.__weh||(t.__weh=(...r)=>{os();const a=bs(s),l=ht(t,s,e,r);return a(),rs(),l});return n?i.unshift(o):i.push(o),o}}const qt=e=>(t,s=Ie)=>{(!Vs||e==="sp")&&Ji(e,(...n)=>t(...n),s)},gc=qt("bm"),Zs=qt("m"),Er=qt("bu"),Qi=qt("u"),Zi=qt("bum"),eo=qt("um"),yc=qt("sp"),vc=qt("rtg"),bc=qt("rtc");function Sc(e,t=Ie){Ji("ec",e,t)}const Cr="components",Sp="directives";function _p(e,t){return xr(Cr,e,!0,t)||e}const _c=Symbol.for("v-ndc");function Ep(e){return te(e)?xr(Cr,e,!1)||e:e||_c}function Cp(e){return xr(Sp,e)}function xr(e,t,s=!0,n=!1){const i=Pe||Ie;if(i){const o=i.type;if(e===Cr){const a=$o(o,!1);if(a&&(a===t||a===ye(t)||a===Cs(ye(t))))return o}const r=ma(i[e]||o[e],t)||ma(i.appContext[e],t);return!r&&n?o:r}}function ma(e,t){return e&&(e[t]||e[ye(t)]||e[Cs(ye(t))])}function xp(e,t,s,n){let i;const o=s&&s[n],r=z(e);if(r||te(e)){const a=r&&Jt(e);let l=!1;a&&(l=!rt(e),e=Bi(e)),i=new Array(e.length);for(let c=0,f=e.length;c<f;c++)i[c]=t(l?Fe(e[c]):e[c],c,void 0,o&&o[c])}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,o&&o[a])}else if(pe(e))if(e[Symbol.iterator])i=Array.from(e,(a,l)=>t(a,l,void 0,o&&o[l]));else{const a=Object.keys(e);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const f=a[l];i[l]=t(e[f],f,l,o&&o[l])}}else i=[];return s&&(s[n]=i),i}function wp(e,t){for(let s=0;s<t.length;s++){const n=t[s];if(z(n))for(let i=0;i<n.length;i++)e[n[i].name]=n[i].fn;else n&&(e[n.name]=n.key?(...i)=>{const o=n.fn(...i);return o&&(o.key=n.key),o}:n.fn)}return e}function Tp(e,t,s={},n,i){if(Pe.ce||Pe.parent&&Zt(Pe.parent)&&Pe.parent.ce)return t!=="default"&&(s.name=t),In(),xi(Ne,null,[ge("slot",s,n&&n())],64);let o=e[t];o&&o._c&&(o._d=!1),In();const r=o&&wr(o(s)),a=s.key||r&&r.key,l=xi(Ne,{key:(a&&!Ze(a)?a:`_${t}`)+(!r&&n?"_fb":"")},r||(n?n():[]),r&&e._===1?64:-2);return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function wr(e){return e.some(t=>Ft(t)?!(t.type===we||t.type===Ne&&!wr(t.children)):!0)?e:null}function Ap(e,t){const s={};for(const n in e)s[t&&/[A-Z]/.test(n)?`on:${n}`:js(n)]=e[n];return s}const Oo=e=>e?Zc(e)?Hn(e):Oo(e.parent):null,dn=ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Oo(e.parent),$root:e=>Oo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Tr(e),$forceUpdate:e=>e.f||(e.f=()=>{yr(e.update)}),$nextTick:e=>e.n||(e.n=Qs.bind(e.proxy)),$watch:e=>oh.bind(e)}),vo=(e,t)=>e!==ne&&!e.__isScriptSetup&&le(e,t),Mo={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:n,data:i,props:o,accessCache:r,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const p=r[t];if(p!==void 0)switch(p){case 1:return n[t];case 2:return i[t];case 4:return s[t];case 3:return o[t]}else{if(vo(n,t))return r[t]=1,n[t];if(i!==ne&&le(i,t))return r[t]=2,i[t];if((c=e.propsOptions[0])&&le(c,t))return r[t]=3,o[t];if(s!==ne&&le(s,t))return r[t]=4,s[t];Lo&&(r[t]=0)}}const f=dn[t];let u,d;if(f)return t==="$attrs"&&De(e.attrs,"get",""),f(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(s!==ne&&le(s,t))return r[t]=4,s[t];if(d=l.config.globalProperties,le(d,t))return d[t]},set({_:e},t,s){const{data:n,setupState:i,ctx:o}=e;return vo(i,t)?(i[t]=s,!0):n!==ne&&le(n,t)?(n[t]=s,!0):le(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:n,appContext:i,propsOptions:o}},r){let a;return!!s[r]||e!==ne&&le(e,r)||vo(t,r)||(a=o[0])&&le(a,r)||le(n,r)||le(dn,r)||le(i.config.globalProperties,r)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:le(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}},Ip=ie({},Mo,{get(e,t){if(t!==Symbol.unscopables)return Mo.get(e,t,e)},has(e,t){return t[0]!=="_"&&!Vf(t)}});function Pp(){return null}function Rp(){return null}function Np(e){}function kp(e){}function Op(){return null}function Mp(){}function Lp(e,t){return null}function jp(){return Ec().slots}function Dp(){return Ec().attrs}function Ec(){const e=mt();return e.setupContext||(e.setupContext=nu(e))}function Tn(e){return z(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}function Fp(e,t){const s=Tn(e);for(const n in t){if(n.startsWith("__skip"))continue;let i=s[n];i?z(i)||Q(i)?i=s[n]={type:i,default:t[n]}:i.default=t[n]:i===null&&(i=s[n]={default:t[n]}),i&&t[`__skip_${n}`]&&(i.skipFactory=!0)}return s}function qp(e,t){return!e||!t?e||t:z(e)&&z(t)?e.concat(t):ie({},Tn(e),Tn(t))}function Up(e,t){const s={};for(const n in e)t.includes(n)||Object.defineProperty(s,n,{enumerable:!0,get:()=>e[n]});return s}function Vp(e){const t=mt();let s=e();return Vo(),ar(s)&&(s=s.catch(n=>{throw bs(t),n})),[s,()=>bs(t)]}let Lo=!0;function zp(e){const t=Tr(e),s=e.proxy,n=e.ctx;Lo=!1,t.beforeCreate&&ga(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:r,watch:a,provide:l,inject:c,created:f,beforeMount:u,mounted:d,beforeUpdate:p,updated:b,activated:y,deactivated:R,beforeDestroy:T,beforeUnmount:S,destroyed:g,unmounted:v,render:E,renderTracked:P,renderTriggered:L,errorCaptured:k,serverPrefetch:C,expose:w,inheritAttrs:j,components:x,directives:D,filters:G}=t;if(c&&Hp(c,n,null),r)for(const J in r){const K=r[J];Q(K)&&(n[J]=K.bind(s))}if(i){const J=i.call(s,s);pe(J)&&(e.data=qn(J))}if(Lo=!0,o)for(const J in o){const K=o[J],_e=Q(K)?K.bind(s,s):Q(K.get)?K.get.bind(s,s):Oe,Be=!Q(K)&&Q(K.set)?K.set.bind(s):Oe,Ke=it({get:_e,set:Be});Object.defineProperty(n,J,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:We=>Ke.value=We})}if(a)for(const J in a)Cc(a[J],n,s,J);if(l){const J=Q(l)?l.call(s):l;Reflect.ownKeys(J).forEach(K=>{pn(K,J[K])})}f&&ga(f,e,"c");function H(J,K){z(K)?K.forEach(_e=>J(_e.bind(s))):K&&J(K.bind(s))}if(H(gc,u),H(Zs,d),H(Er,p),H(Qi,b),H(pc,y),H(hc,R),H(Sc,k),H(bc,P),H(vc,L),H(Zi,S),H(eo,v),H(yc,C),z(w))if(w.length){const J=e.exposed||(e.exposed={});w.forEach(K=>{Object.defineProperty(J,K,{get:()=>s[K],set:_e=>s[K]=_e})})}else e.exposed||(e.exposed={});E&&e.render===Oe&&(e.render=E),j!=null&&(e.inheritAttrs=j),x&&(e.components=x),D&&(e.directives=D),C&&_r(e)}function Hp(e,t,s=Oe){z(e)&&(e=jo(e));for(const n in e){const i=e[n];let o;pe(i)?"default"in i?o=wt(i.from||n,i.default,!0):o=wt(i.from||n):o=wt(i),Re(o)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[n]=o}}function ga(e,t,s){ht(z(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,s)}function Cc(e,t,s,n){let i=n.includes(".")?zc(s,n):()=>s[n];if(te(e)){const o=t[e];Q(o)&&hs(i,o)}else if(Q(e))hs(i,e.bind(s));else if(pe(e))if(z(e))e.forEach(o=>Cc(o,t,s,n));else{const o=Q(e.handler)?e.handler.bind(s):t[e.handler];Q(o)&&hs(i,o,e)}}function Tr(e){const t=e.type,{mixins:s,extends:n}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,a=o.get(t);let l;return a?l=a:!i.length&&!s&&!n?l=t:(l={},i.length&&i.forEach(c=>_i(l,c,r,!0)),_i(l,t,r)),pe(t)&&o.set(t,l),l}function _i(e,t,s,n=!1){const{mixins:i,extends:o}=t;o&&_i(e,o,s,!0),i&&i.forEach(r=>_i(e,r,s,!0));for(const r in t)if(!(n&&r==="expose")){const a=$p[r]||s&&s[r];e[r]=a?a(e[r],t[r]):t[r]}return e}const $p={data:ya,props:va,emits:va,methods:ln,computed:ln,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:ln,directives:ln,watch:Kp,provide:ya,inject:Bp};function ya(e,t){return t?e?function(){return ie(Q(e)?e.call(this,this):e,Q(t)?t.call(this,this):t)}:t:e}function Bp(e,t){return ln(jo(e),jo(t))}function jo(e){if(z(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function Ve(e,t){return e?[...new Set([].concat(e,t))]:t}function ln(e,t){return e?ie(Object.create(null),e,t):t}function va(e,t){return e?z(e)&&z(t)?[...new Set([...e,...t])]:ie(Object.create(null),Tn(e),Tn(t??{})):t}function Kp(e,t){if(!e)return t;if(!t)return e;const s=ie(Object.create(null),e);for(const n in t)s[n]=Ve(e[n],t[n]);return s}function xc(){return{app:null,config:{isNativeTag:rn,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wp=0;function Gp(e,t){return function(n,i=null){Q(n)||(n=ie({},n)),i!=null&&!pe(i)&&(i=null);const o=xc(),r=new WeakSet,a=[];let l=!1;const c=o.app={_uid:Wp++,_component:n,_props:i,_container:null,_context:o,_instance:null,version:ou,get config(){return o.config},set config(f){},use(f,...u){return r.has(f)||(f&&Q(f.install)?(r.add(f),f.install(c,...u)):Q(f)&&(r.add(f),f(c,...u))),c},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),c},component(f,u){return u?(o.components[f]=u,c):o.components[f]},directive(f,u){return u?(o.directives[f]=u,c):o.directives[f]},mount(f,u,d){if(!l){const p=c._ceVNode||ge(n,i);return p.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),u&&t?t(p,f):e(p,f,d),l=!0,c._container=f,f.__vue_app__=c,Hn(p.component)}},onUnmount(f){a.push(f)},unmount(){l&&(ht(a,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(f,u){return o.provides[f]=u,c},runWithContext(f){const u=ps;ps=c;try{return f()}finally{ps=u}}};return c}}let ps=null;function pn(e,t){if(Ie){let s=Ie.provides;const n=Ie.parent&&Ie.parent.provides;n===s&&(s=Ie.provides=Object.create(n)),s[e]=t}}function wt(e,t,s=!1){const n=Ie||Pe;if(n||ps){const i=ps?ps._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return s&&Q(t)?t.call(n&&n.proxy):t}}function Xp(){return!!(Ie||Pe||ps)}const wc={},Tc=()=>Object.create(wc),Ac=e=>Object.getPrototypeOf(e)===wc;function Yp(e,t,s,n=!1){const i={},o=Tc();e.propsDefaults=Object.create(null),Ic(e,t,i,o);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);s?e.props=n?i:pr(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function Jp(e,t,s,n){const{props:i,attrs:o,vnode:{patchFlag:r}}=e,a=ae(i),[l]=e.propsOptions;let c=!1;if((n||r>0)&&!(r&16)){if(r&8){const f=e.vnode.dynamicProps;for(let u=0;u<f.length;u++){let d=f[u];if(to(e.emitsOptions,d))continue;const p=t[d];if(l)if(le(o,d))p!==o[d]&&(o[d]=p,c=!0);else{const b=ye(d);i[b]=Do(l,a,b,p,e,!1)}else p!==o[d]&&(o[d]=p,c=!0)}}}else{Ic(e,t,i,o)&&(c=!0);let f;for(const u in a)(!t||!le(t,u)&&((f=Je(u))===u||!le(t,f)))&&(l?s&&(s[u]!==void 0||s[f]!==void 0)&&(i[u]=Do(l,a,u,void 0,e,!0)):delete i[u]);if(o!==a)for(const u in o)(!t||!le(t,u))&&(delete o[u],c=!0)}c&&kt(e.attrs,"set","")}function Ic(e,t,s,n){const[i,o]=e.propsOptions;let r=!1,a;if(t)for(let l in t){if(Yt(l))continue;const c=t[l];let f;i&&le(i,f=ye(l))?!o||!o.includes(f)?s[f]=c:(a||(a={}))[f]=c:to(e.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,r=!0)}if(o){const l=ae(s),c=a||ne;for(let f=0;f<o.length;f++){const u=o[f];s[u]=Do(i,l,u,c[u],e,!le(c,u))}}return r}function Do(e,t,s,n,i,o){const r=e[s];if(r!=null){const a=le(r,"default");if(a&&n===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&Q(l)){const{propsDefaults:c}=i;if(s in c)n=c[s];else{const f=bs(i);n=c[s]=l.call(null,t),f()}}else n=l;i.ce&&i.ce._setProp(s,n)}r[0]&&(o&&!a?n=!1:r[1]&&(n===""||n===Je(s))&&(n=!0))}return n}const Qp=new WeakMap;function Pc(e,t,s=!1){const n=s?Qp:t.propsCache,i=n.get(e);if(i)return i;const o=e.props,r={},a=[];let l=!1;if(!Q(e)){const f=u=>{l=!0;const[d,p]=Pc(u,t,!0);ie(r,d),p&&a.push(...p)};!s&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!o&&!l)return pe(e)&&n.set(e,Ms),Ms;if(z(o))for(let f=0;f<o.length;f++){const u=ye(o[f]);ba(u)&&(r[u]=ne)}else if(o)for(const f in o){const u=ye(f);if(ba(u)){const d=o[f],p=r[u]=z(d)||Q(d)?{type:d}:ie({},d),b=p.type;let y=!1,R=!0;if(z(b))for(let T=0;T<b.length;++T){const S=b[T],g=Q(S)&&S.name;if(g==="Boolean"){y=!0;break}else g==="String"&&(R=!1)}else y=Q(b)&&b.name==="Boolean";p[0]=y,p[1]=R,(y||le(p,"default"))&&a.push(u)}}const c=[r,a];return pe(e)&&n.set(e,c),c}function ba(e){return e[0]!=="$"&&!Yt(e)}const Rc=e=>e[0]==="_"||e==="$stable",Ar=e=>z(e)?e.map(Ye):[Ye(e)],Zp=(e,t,s)=>{if(t._n)return t;const n=vr((...i)=>Ar(t(...i)),s);return n._c=!1,n},Nc=(e,t,s)=>{const n=e._ctx;for(const i in e){if(Rc(i))continue;const o=e[i];if(Q(o))t[i]=Zp(i,o,n);else if(o!=null){const r=Ar(o);t[i]=()=>r}}},kc=(e,t)=>{const s=Ar(t);e.slots.default=()=>s},Oc=(e,t,s)=>{for(const n in t)(s||n!=="_")&&(e[n]=t[n])},eh=(e,t,s)=>{const n=e.slots=Tc();if(e.vnode.shapeFlag&32){const i=t._;i?(Oc(n,t,s),s&&Al(n,"_",i,!0)):Nc(t,n)}else t&&kc(e,t)},th=(e,t,s)=>{const{vnode:n,slots:i}=e;let o=!0,r=ne;if(n.shapeFlag&32){const a=t._;a?s&&a===1?o=!1:Oc(i,t,s):(o=!t.$stable,Nc(t,i)),r=t}else t&&(kc(e,t),r={default:1});if(o)for(const a in i)!Rc(a)&&r[a]==null&&delete i[a]},Te=Kc;function Mc(e){return jc(e)}function Lc(e){return jc(e,rp)}function jc(e,t){const s=zi();s.__VUE__=!0;const{insert:n,remove:i,patchProp:o,createElement:r,createText:a,createComment:l,setText:c,setElementText:f,parentNode:u,nextSibling:d,setScopeId:p=Oe,insertStaticContent:b}=e,y=(h,m,_,N=null,A=null,O=null,U=void 0,q=null,F=!!m.dynamicChildren)=>{if(h===m)return;h&&!yt(h,m)&&(N=I(h),We(h,A,O,!0),h=null),m.patchFlag===-2&&(F=!1,m.dynamicChildren=null);const{type:M,ref:Z,shapeFlag:$}=m;switch(M){case es:R(h,m,_,N);break;case we:T(h,m,_,N);break;case ms:h==null&&S(m,_,N,U);break;case Ne:x(h,m,_,N,A,O,U,q,F);break;default:$&1?E(h,m,_,N,A,O,U,q,F):$&6?D(h,m,_,N,A,O,U,q,F):($&64||$&128)&&M.process(h,m,_,N,A,O,U,q,F,W)}Z!=null&&A&&wn(Z,h&&h.ref,O,m||h,!m)},R=(h,m,_,N)=>{if(h==null)n(m.el=a(m.children),_,N);else{const A=m.el=h.el;m.children!==h.children&&c(A,m.children)}},T=(h,m,_,N)=>{h==null?n(m.el=l(m.children||""),_,N):m.el=h.el},S=(h,m,_,N)=>{[h.el,h.anchor]=b(h.children,m,_,N,h.el,h.anchor)},g=({el:h,anchor:m},_,N)=>{let A;for(;h&&h!==m;)A=d(h),n(h,_,N),h=A;n(m,_,N)},v=({el:h,anchor:m})=>{let _;for(;h&&h!==m;)_=d(h),i(h),h=_;i(m)},E=(h,m,_,N,A,O,U,q,F)=>{m.type==="svg"?U="svg":m.type==="math"&&(U="mathml"),h==null?P(m,_,N,A,O,U,q,F):C(h,m,A,O,U,q,F)},P=(h,m,_,N,A,O,U,q)=>{let F,M;const{props:Z,shapeFlag:$,transition:X,dirs:ee}=h;if(F=h.el=r(h.type,O,Z&&Z.is,Z),$&8?f(F,h.children):$&16&&k(h.children,F,null,N,A,bo(h,O),U,q),ee&&xt(h,null,N,"created"),L(F,h,h.scopeId,U,N),Z){for(const he in Z)he!=="value"&&!Yt(he)&&o(F,he,null,Z[he],O,N);"value"in Z&&o(F,"value",null,Z.value,O),(M=Z.onVnodeBeforeMount)&&Xe(M,N,h)}ee&&xt(h,null,N,"beforeMount");const oe=Dc(A,X);oe&&X.beforeEnter(F),n(F,m,_),((M=Z&&Z.onVnodeMounted)||oe||ee)&&Te(()=>{M&&Xe(M,N,h),oe&&X.enter(F),ee&&xt(h,null,N,"mounted")},A)},L=(h,m,_,N,A)=>{if(_&&p(h,_),N)for(let O=0;O<N.length;O++)p(h,N[O]);if(A){let O=A.subTree;if(m===O||Ci(O.type)&&(O.ssContent===m||O.ssFallback===m)){const U=A.vnode;L(h,U,U.scopeId,U.slotScopeIds,A.parent)}}},k=(h,m,_,N,A,O,U,q,F=0)=>{for(let M=F;M<h.length;M++){const Z=h[M]=q?Wt(h[M]):Ye(h[M]);y(null,Z,m,_,N,A,O,U,q)}},C=(h,m,_,N,A,O,U)=>{const q=m.el=h.el;let{patchFlag:F,dynamicChildren:M,dirs:Z}=m;F|=h.patchFlag&16;const $=h.props||ne,X=m.props||ne;let ee;if(_&&as(_,!1),(ee=X.onVnodeBeforeUpdate)&&Xe(ee,_,m,h),Z&&xt(m,h,_,"beforeUpdate"),_&&as(_,!0),($.innerHTML&&X.innerHTML==null||$.textContent&&X.textContent==null)&&f(q,""),M?w(h.dynamicChildren,M,q,_,N,bo(m,A),O):U||K(h,m,q,null,_,N,bo(m,A),O,!1),F>0){if(F&16)j(q,$,X,_,A);else if(F&2&&$.class!==X.class&&o(q,"class",null,X.class,A),F&4&&o(q,"style",$.style,X.style,A),F&8){const oe=m.dynamicProps;for(let he=0;he<oe.length;he++){const de=oe[he],et=$[de],Me=X[de];(Me!==et||de==="value")&&o(q,de,et,Me,A,_)}}F&1&&h.children!==m.children&&f(q,m.children)}else!U&&M==null&&j(q,$,X,_,A);((ee=X.onVnodeUpdated)||Z)&&Te(()=>{ee&&Xe(ee,_,m,h),Z&&xt(m,h,_,"updated")},N)},w=(h,m,_,N,A,O,U)=>{for(let q=0;q<m.length;q++){const F=h[q],M=m[q],Z=F.el&&(F.type===Ne||!yt(F,M)||F.shapeFlag&70)?u(F.el):_;y(F,M,Z,null,N,A,O,U,!0)}},j=(h,m,_,N,A)=>{if(m!==_){if(m!==ne)for(const O in m)!Yt(O)&&!(O in _)&&o(h,O,m[O],null,A,N);for(const O in _){if(Yt(O))continue;const U=_[O],q=m[O];U!==q&&O!=="value"&&o(h,O,q,U,A,N)}"value"in _&&o(h,"value",m.value,_.value,A)}},x=(h,m,_,N,A,O,U,q,F)=>{const M=m.el=h?h.el:a(""),Z=m.anchor=h?h.anchor:a("");let{patchFlag:$,dynamicChildren:X,slotScopeIds:ee}=m;ee&&(q=q?q.concat(ee):ee),h==null?(n(M,_,N),n(Z,_,N),k(m.children||[],_,Z,A,O,U,q,F)):$>0&&$&64&&X&&h.dynamicChildren?(w(h.dynamicChildren,X,_,A,O,U,q),(m.key!=null||A&&m===A.subTree)&&Ir(h,m,!0)):K(h,m,_,Z,A,O,U,q,F)},D=(h,m,_,N,A,O,U,q,F)=>{m.slotScopeIds=q,h==null?m.shapeFlag&512?A.ctx.activate(m,_,N,U,F):G(m,_,N,A,O,U,F):Y(h,m,F)},G=(h,m,_,N,A,O,U)=>{const q=h.component=Qc(h,N,A);if(Vn(h)&&(q.ctx.renderer=W),eu(q,!1,U),q.asyncDep){if(A&&A.registerDep(q,H,U),!h.el){const F=q.subTree=ge(we);T(null,F,m,_)}}else H(q,h,m,_,A,O,U)},Y=(h,m,_)=>{const N=m.component=h.component;if(fh(h,m,_))if(N.asyncDep&&!N.asyncResolved){J(N,m,_);return}else N.next=m,N.update();else m.el=h.el,N.vnode=m},H=(h,m,_,N,A,O,U)=>{const q=()=>{if(h.isMounted){let{next:$,bu:X,u:ee,parent:oe,vnode:he}=h;{const tt=Fc(h);if(tt){$&&($.el=he.el,J(h,$,U)),tt.asyncDep.then(()=>{h.isUnmounted||q()});return}}let de=$,et;as(h,!1),$?($.el=he.el,J(h,$,U)):$=he,X&&Ds(X),(et=$.props&&$.props.onVnodeBeforeUpdate)&&Xe(et,oe,$,he),as(h,!0);const Me=li(h),gt=h.subTree;h.subTree=Me,y(gt,Me,u(gt.el),I(gt),h,A,O),$.el=Me.el,de===null&&so(h,Me.el),ee&&Te(ee,A),(et=$.props&&$.props.onVnodeUpdated)&&Te(()=>Xe(et,oe,$,he),A)}else{let $;const{el:X,props:ee}=m,{bm:oe,m:he,parent:de,root:et,type:Me}=h,gt=Zt(m);if(as(h,!1),oe&&Ds(oe),!gt&&($=ee&&ee.onVnodeBeforeMount)&&Xe($,de,m),as(h,!0),X&&ve){const tt=()=>{h.subTree=li(h),ve(X,h.subTree,h,A,null)};gt&&Me.__asyncHydrate?Me.__asyncHydrate(X,h,tt):tt()}else{et.ce&&et.ce._injectChildStyle(Me);const tt=h.subTree=li(h);y(null,tt,_,N,h,A,O),m.el=tt.el}if(he&&Te(he,A),!gt&&($=ee&&ee.onVnodeMounted)){const tt=m;Te(()=>Xe($,de,tt),A)}(m.shapeFlag&256||de&&Zt(de.vnode)&&de.vnode.shapeFlag&256)&&h.a&&Te(h.a,A),h.isMounted=!0,m=_=N=null}};h.scope.on();const F=h.effect=new bn(q);h.scope.off();const M=h.update=F.run.bind(F),Z=h.job=F.runIfDirty.bind(F);Z.i=h,Z.id=h.uid,F.scheduler=()=>yr(Z),as(h,!0),M()},J=(h,m,_)=>{m.component=h;const N=h.vnode.props;h.vnode=m,h.next=null,Jp(h,m.props,N,_),th(h,m.children,_),os(),la(h),rs()},K=(h,m,_,N,A,O,U,q,F=!1)=>{const M=h&&h.children,Z=h?h.shapeFlag:0,$=m.children,{patchFlag:X,shapeFlag:ee}=m;if(X>0){if(X&128){Be(M,$,_,N,A,O,U,q,F);return}else if(X&256){_e(M,$,_,N,A,O,U,q,F);return}}ee&8?(Z&16&&ct(M,A,O),$!==M&&f(_,$)):Z&16?ee&16?Be(M,$,_,N,A,O,U,q,F):ct(M,A,O,!0):(Z&8&&f(_,""),ee&16&&k($,_,N,A,O,U,q,F))},_e=(h,m,_,N,A,O,U,q,F)=>{h=h||Ms,m=m||Ms;const M=h.length,Z=m.length,$=Math.min(M,Z);let X;for(X=0;X<$;X++){const ee=m[X]=F?Wt(m[X]):Ye(m[X]);y(h[X],ee,_,null,A,O,U,q,F)}M>Z?ct(h,A,O,!0,!1,$):k(m,_,N,A,O,U,q,F,$)},Be=(h,m,_,N,A,O,U,q,F)=>{let M=0;const Z=m.length;let $=h.length-1,X=Z-1;for(;M<=$&&M<=X;){const ee=h[M],oe=m[M]=F?Wt(m[M]):Ye(m[M]);if(yt(ee,oe))y(ee,oe,_,null,A,O,U,q,F);else break;M++}for(;M<=$&&M<=X;){const ee=h[$],oe=m[X]=F?Wt(m[X]):Ye(m[X]);if(yt(ee,oe))y(ee,oe,_,null,A,O,U,q,F);else break;$--,X--}if(M>$){if(M<=X){const ee=X+1,oe=ee<Z?m[ee].el:N;for(;M<=X;)y(null,m[M]=F?Wt(m[M]):Ye(m[M]),_,oe,A,O,U,q,F),M++}}else if(M>X)for(;M<=$;)We(h[M],A,O,!0),M++;else{const ee=M,oe=M,he=new Map;for(M=oe;M<=X;M++){const st=m[M]=F?Wt(m[M]):Ye(m[M]);st.key!=null&&he.set(st.key,M)}let de,et=0;const Me=X-oe+1;let gt=!1,tt=0;const en=new Array(Me);for(M=0;M<Me;M++)en[M]=0;for(M=ee;M<=$;M++){const st=h[M];if(et>=Me){We(st,A,O,!0);continue}let _t;if(st.key!=null)_t=he.get(st.key);else for(de=oe;de<=X;de++)if(en[de-oe]===0&&yt(st,m[de])){_t=de;break}_t===void 0?We(st,A,O,!0):(en[_t-oe]=M+1,_t>=tt?tt=_t:gt=!0,y(st,m[_t],_,null,A,O,U,q,F),et++)}const sa=gt?sh(en):Ms;for(de=sa.length-1,M=Me-1;M>=0;M--){const st=oe+M,_t=m[st],na=st+1<Z?m[st+1].el:N;en[M]===0?y(null,_t,_,na,A,O,U,q,F):gt&&(de<0||M!==sa[de]?Ke(_t,_,na,2):de--)}}},Ke=(h,m,_,N,A=null)=>{const{el:O,type:U,transition:q,children:F,shapeFlag:M}=h;if(M&6){Ke(h.component.subTree,m,_,N);return}if(M&128){h.suspense.move(m,_,N);return}if(M&64){U.move(h,m,_,W);return}if(U===Ne){n(O,m,_);for(let $=0;$<F.length;$++)Ke(F[$],m,_,N);n(h.anchor,m,_);return}if(U===ms){g(h,m,_);return}if(N!==2&&M&1&&q)if(N===0)q.beforeEnter(O),n(O,m,_),Te(()=>q.enter(O),A);else{const{leave:$,delayLeave:X,afterLeave:ee}=q,oe=()=>n(O,m,_),he=()=>{$(O,()=>{oe(),ee&&ee()})};X?X(O,oe,he):he()}else n(O,m,_)},We=(h,m,_,N=!1,A=!1)=>{const{type:O,props:U,ref:q,children:F,dynamicChildren:M,shapeFlag:Z,patchFlag:$,dirs:X,cacheIndex:ee}=h;if($===-2&&(A=!1),q!=null&&wn(q,null,_,h,!0),ee!=null&&(m.renderCache[ee]=void 0),Z&256){m.ctx.deactivate(h);return}const oe=Z&1&&X,he=!Zt(h);let de;if(he&&(de=U&&U.onVnodeBeforeUnmount)&&Xe(de,m,h),Z&6)Wn(h.component,_,N);else{if(Z&128){h.suspense.unmount(_,N);return}oe&&xt(h,null,m,"beforeUnmount"),Z&64?h.type.remove(h,m,_,W,N):M&&!M.hasOnce&&(O!==Ne||$>0&&$&64)?ct(M,m,_,!1,!0):(O===Ne&&$&384||!A&&Z&16)&&ct(F,m,_),N&&ws(h)}(he&&(de=U&&U.onVnodeUnmounted)||oe)&&Te(()=>{de&&Xe(de,m,h),oe&&xt(h,null,m,"unmounted")},_)},ws=h=>{const{type:m,el:_,anchor:N,transition:A}=h;if(m===Ne){Ts(_,N);return}if(m===ms){v(h);return}const O=()=>{i(_),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(h.shapeFlag&1&&A&&!A.persisted){const{leave:U,delayLeave:q}=A,F=()=>U(_,O);q?q(h.el,O,F):F()}else O()},Ts=(h,m)=>{let _;for(;h!==m;)_=d(h),i(h),h=_;i(m)},Wn=(h,m,_)=>{const{bum:N,scope:A,job:O,subTree:U,um:q,m:F,a:M}=h;Ei(F),Ei(M),N&&Ds(N),A.stop(),O&&(O.flags|=8,We(U,h,m,_)),q&&Te(q,m),Te(()=>{h.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ct=(h,m,_,N=!1,A=!1,O=0)=>{for(let U=O;U<h.length;U++)We(h[U],m,_,N,A)},I=h=>{if(h.shapeFlag&6)return I(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const m=d(h.anchor||h.el),_=m&&m[oc];return _?d(_):m};let B=!1;const V=(h,m,_)=>{h==null?m._vnode&&We(m._vnode,null,null,!0):y(m._vnode||null,h,m,null,null,null,_),m._vnode=h,B||(B=!0,la(),Si(),B=!1)},W={p:y,um:We,m:Ke,r:ws,mt:G,mc:k,pc:K,pbc:w,n:I,o:e};let ue,ve;return t&&([ue,ve]=t(W)),{render:V,hydrate:ue,createApp:Gp(V,ue)}}function bo({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function as({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Dc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ir(e,t,s=!1){const n=e.children,i=t.children;if(z(n)&&z(i))for(let o=0;o<n.length;o++){const r=n[o];let a=i[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[o]=Wt(i[o]),a.el=r.el),!s&&a.patchFlag!==-2&&Ir(r,a)),a.type===es&&(a.el=r.el)}}function sh(e){const t=e.slice(),s=[0];let n,i,o,r,a;const l=e.length;for(n=0;n<l;n++){const c=e[n];if(c!==0){if(i=s[s.length-1],e[i]<c){t[n]=i,s.push(n);continue}for(o=0,r=s.length-1;o<r;)a=o+r>>1,e[s[a]]<c?o=a+1:r=a;c<e[s[o]]&&(o>0&&(t[n]=s[o-1]),s[o]=n)}}for(o=s.length,r=s[o-1];o-- >0;)s[o]=r,r=t[r];return s}function Fc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Fc(t)}function Ei(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const qc=Symbol.for("v-scx"),Uc=()=>wt(qc);function nh(e,t){return zn(e,null,t)}function ih(e,t){return zn(e,null,{flush:"post"})}function Vc(e,t){return zn(e,null,{flush:"sync"})}function hs(e,t,s){return zn(e,t,s)}function zn(e,t,s=ne){const{immediate:n,deep:i,flush:o,once:r}=s,a=ie({},s),l=t&&n||!t&&o!=="post";let c;if(Vs){if(o==="sync"){const p=Uc();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Oe,p.resume=Oe,p.pause=Oe,p}}const f=Ie;a.call=(p,b,y)=>ht(p,f,b,y);let u=!1;o==="post"?a.scheduler=p=>{Te(p,f&&f.suspense)}:o!=="sync"&&(u=!0,a.scheduler=(p,b)=>{b?p():yr(p)}),a.augmentJob=p=>{t&&(p.flags|=4),u&&(p.flags|=2,f&&(p.id=f.uid,p.i=f))};const d=Vd(e,t,a);return Vs&&(c?c.push(d):l&&d()),d}function oh(e,t,s){const n=this.proxy,i=te(e)?e.includes(".")?zc(n,e):()=>n[e]:e.bind(n,n);let o;Q(t)?o=t:(o=t.handler,s=t);const r=bs(this),a=zn(i,o.bind(n),s);return r(),a}function zc(e,t){const s=t.split(".");return()=>{let n=e;for(let i=0;i<s.length&&n;i++)n=n[s[i]];return n}}function rh(e,t,s=ne){const n=mt(),i=ye(t),o=Je(t),r=Hc(e,i),a=Jl((l,c)=>{let f,u=ne,d;return Vc(()=>{const p=e[i];He(f,p)&&(f=p,c())}),{get(){return l(),s.get?s.get(f):f},set(p){const b=s.set?s.set(p):p;if(!He(b,f)&&!(u!==ne&&He(p,u)))return;const y=n.vnode.props;y&&(t in y||i in y||o in y)&&(`onUpdate:${t}`in y||`onUpdate:${i}`in y||`onUpdate:${o}`in y)||(f=p,c()),n.emit(`update:${t}`,b),He(p,b)&&He(p,u)&&!He(b,d)&&c(),u=p,d=b}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?r||ne:a,done:!1}:{done:!0}}}},a}const Hc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ye(t)}Modifiers`]||e[`${Je(t)}Modifiers`];function ah(e,t,...s){if(e.isUnmounted)return;const n=e.vnode.props||ne;let i=s;const o=t.startsWith("update:"),r=o&&Hc(n,t.slice(7));r&&(r.trim&&(i=s.map(f=>te(f)?f.trim():f)),r.number&&(i=s.map(mi)));let a,l=n[a=js(t)]||n[a=js(ye(t))];!l&&o&&(l=n[a=js(Je(t))]),l&&ht(l,e,6,i);const c=n[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ht(c,e,6,i)}}function $c(e,t,s=!1){const n=t.emitsCache,i=n.get(e);if(i!==void 0)return i;const o=e.emits;let r={},a=!1;if(!Q(e)){const l=c=>{const f=$c(c,t,!0);f&&(a=!0,ie(r,f))};!s&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(pe(e)&&n.set(e,null),null):(z(o)?o.forEach(l=>r[l]=null):ie(r,o),pe(e)&&n.set(e,r),r)}function to(e,t){return!e||!_s(t)?!1:(t=t.slice(2).replace(/Once$/,""),le(e,t[0].toLowerCase()+t.slice(1))||le(e,Je(t))||le(e,t))}function li(e){const{type:t,vnode:s,proxy:n,withProxy:i,propsOptions:[o],slots:r,attrs:a,emit:l,render:c,renderCache:f,props:u,data:d,setupState:p,ctx:b,inheritAttrs:y}=e,R=xn(e);let T,S;try{if(s.shapeFlag&4){const v=i||n,E=v;T=Ye(c.call(E,v,f,u,p,d,b)),S=a}else{const v=t;T=Ye(v.length>1?v(u,{attrs:a,slots:r,emit:l}):v(u,null)),S=t.props?a:ch(a)}}catch(v){hn.length=0,xs(v,e,1),T=ge(we)}let g=T;if(S&&y!==!1){const v=Object.keys(S),{shapeFlag:E}=g;v.length&&E&7&&(o&&v.some(or)&&(S=uh(S,o)),g=Tt(g,S,!1,!0))}return s.dirs&&(g=Tt(g,null,!1,!0),g.dirs=g.dirs?g.dirs.concat(s.dirs):s.dirs),s.transition&&Dt(g,s.transition),T=g,xn(R),T}function lh(e,t=!0){let s;for(let n=0;n<e.length;n++){const i=e[n];if(Ft(i)){if(i.type!==we||i.children==="v-if"){if(s)return;s=i}}else return}return s}const ch=e=>{let t;for(const s in e)(s==="class"||s==="style"||_s(s))&&((t||(t={}))[s]=e[s]);return t},uh=(e,t)=>{const s={};for(const n in e)(!or(n)||!(n.slice(9)in t))&&(s[n]=e[n]);return s};function fh(e,t,s){const{props:n,children:i,component:o}=e,{props:r,children:a,patchFlag:l}=t,c=o.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&l>=0){if(l&1024)return!0;if(l&16)return n?Sa(n,r,c):!!r;if(l&8){const f=t.dynamicProps;for(let u=0;u<f.length;u++){const d=f[u];if(r[d]!==n[d]&&!to(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:n===r?!1:n?r?Sa(n,r,c):!0:!!r;return!1}function Sa(e,t,s){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let i=0;i<n.length;i++){const o=n[i];if(t[o]!==e[o]&&!to(s,o))return!0}return!1}function so({vnode:e,parent:t},s){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=s,t=t.parent;else break}}const Ci=e=>e.__isSuspense;let Fo=0;const dh={name:"Suspense",__isSuspense:!0,process(e,t,s,n,i,o,r,a,l,c){if(e==null)hh(t,s,n,i,o,r,a,l,c);else{if(o&&o.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}mh(e,t,s,n,i,r,a,l,c)}},hydrate:gh,normalize:yh},ph=dh;function An(e,t){const s=e.props&&e.props[t];Q(s)&&s()}function hh(e,t,s,n,i,o,r,a,l){const{p:c,o:{createElement:f}}=l,u=f("div"),d=e.suspense=Bc(e,i,n,t,u,s,o,r,a,l);c(null,d.pendingBranch=e.ssContent,u,null,n,d,o,r),d.deps>0?(An(e,"onPending"),An(e,"onFallback"),c(null,e.ssFallback,t,s,n,null,o,r),qs(d,e.ssFallback)):d.resolve(!1,!0)}function mh(e,t,s,n,i,o,r,a,{p:l,um:c,o:{createElement:f}}){const u=t.suspense=e.suspense;u.vnode=t,t.el=e.el;const d=t.ssContent,p=t.ssFallback,{activeBranch:b,pendingBranch:y,isInFallback:R,isHydrating:T}=u;if(y)u.pendingBranch=d,yt(d,y)?(l(y,d,u.hiddenContainer,null,i,u,o,r,a),u.deps<=0?u.resolve():R&&(T||(l(b,p,s,n,i,null,o,r,a),qs(u,p)))):(u.pendingId=Fo++,T?(u.isHydrating=!1,u.activeBranch=y):c(y,i,u),u.deps=0,u.effects.length=0,u.hiddenContainer=f("div"),R?(l(null,d,u.hiddenContainer,null,i,u,o,r,a),u.deps<=0?u.resolve():(l(b,p,s,n,i,null,o,r,a),qs(u,p))):b&&yt(d,b)?(l(b,d,s,n,i,u,o,r,a),u.resolve(!0)):(l(null,d,u.hiddenContainer,null,i,u,o,r,a),u.deps<=0&&u.resolve()));else if(b&&yt(d,b))l(b,d,s,n,i,u,o,r,a),qs(u,d);else if(An(t,"onPending"),u.pendingBranch=d,d.shapeFlag&512?u.pendingId=d.component.suspenseId:u.pendingId=Fo++,l(null,d,u.hiddenContainer,null,i,u,o,r,a),u.deps<=0)u.resolve();else{const{timeout:S,pendingId:g}=u;S>0?setTimeout(()=>{u.pendingId===g&&u.fallback(p)},S):S===0&&u.fallback(p)}}function Bc(e,t,s,n,i,o,r,a,l,c,f=!1){const{p:u,m:d,um:p,n:b,o:{parentNode:y,remove:R}}=c;let T;const S=vh(e);S&&t&&t.pendingBranch&&(T=t.pendingId,t.deps++);const g=e.props?gi(e.props.timeout):void 0,v=o,E={vnode:e,parent:t,parentComponent:s,namespace:r,container:n,hiddenContainer:i,deps:0,pendingId:Fo++,timeout:typeof g=="number"?g:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(P=!1,L=!1){const{vnode:k,activeBranch:C,pendingBranch:w,pendingId:j,effects:x,parentComponent:D,container:G}=E;let Y=!1;E.isHydrating?E.isHydrating=!1:P||(Y=C&&w.transition&&w.transition.mode==="out-in",Y&&(C.transition.afterLeave=()=>{j===E.pendingId&&(d(w,G,o===v?b(C):o,0),En(x))}),C&&(y(C.el)===G&&(o=b(C)),p(C,D,E,!0)),Y||d(w,G,o,0)),qs(E,w),E.pendingBranch=null,E.isInFallback=!1;let H=E.parent,J=!1;for(;H;){if(H.pendingBranch){H.effects.push(...x),J=!0;break}H=H.parent}!J&&!Y&&En(x),E.effects=[],S&&t&&t.pendingBranch&&T===t.pendingId&&(t.deps--,t.deps===0&&!L&&t.resolve()),An(k,"onResolve")},fallback(P){if(!E.pendingBranch)return;const{vnode:L,activeBranch:k,parentComponent:C,container:w,namespace:j}=E;An(L,"onFallback");const x=b(k),D=()=>{E.isInFallback&&(u(null,P,w,x,C,null,j,a,l),qs(E,P))},G=P.transition&&P.transition.mode==="out-in";G&&(k.transition.afterLeave=D),E.isInFallback=!0,p(k,C,null,!0),G||D()},move(P,L,k){E.activeBranch&&d(E.activeBranch,P,L,k),E.container=P},next(){return E.activeBranch&&b(E.activeBranch)},registerDep(P,L,k){const C=!!E.pendingBranch;C&&E.deps++;const w=P.vnode.el;P.asyncDep.catch(j=>{xs(j,P,0)}).then(j=>{if(P.isUnmounted||E.isUnmounted||E.pendingId!==P.suspenseId)return;P.asyncResolved=!0;const{vnode:x}=P;zo(P,j,!1),w&&(x.el=w);const D=!w&&P.subTree.el;L(P,x,y(w||P.subTree.el),w?null:b(P.subTree),E,r,k),D&&R(D),so(P,x.el),C&&--E.deps===0&&E.resolve()})},unmount(P,L){E.isUnmounted=!0,E.activeBranch&&p(E.activeBranch,s,P,L),E.pendingBranch&&p(E.pendingBranch,s,P,L)}};return E}function gh(e,t,s,n,i,o,r,a,l){const c=t.suspense=Bc(t,n,s,e.parentNode,document.createElement("div"),null,i,o,r,a,!0),f=l(e,c.pendingBranch=t.ssContent,s,c,o,r);return c.deps===0&&c.resolve(!1,!0),f}function yh(e){const{shapeFlag:t,children:s}=e,n=t&32;e.ssContent=_a(n?s.default:s),e.ssFallback=n?_a(s.fallback):ge(we)}function _a(e){let t;if(Q(e)){const s=vs&&e._c;s&&(e._d=!1,In()),e=e(),s&&(e._d=!0,t=qe,Wc())}return z(e)&&(e=lh(e)),e=Ye(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(s=>s!==e)),e}function Kc(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):En(e)}function qs(e,t){e.activeBranch=t;const{vnode:s,parentComponent:n}=e;let i=t.el;for(;!i&&t.component;)t=t.component.subTree,i=t.el;s.el=i,n&&n.subTree===s&&(n.vnode.el=i,so(n,i))}function vh(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}const Ne=Symbol.for("v-fgt"),es=Symbol.for("v-txt"),we=Symbol.for("v-cmt"),ms=Symbol.for("v-stc"),hn=[];let qe=null;function In(e=!1){hn.push(qe=e?null:[])}function Wc(){hn.pop(),qe=hn[hn.length-1]||null}let vs=1;function qo(e,t=!1){vs+=e,e<0&&qe&&t&&(qe.hasOnce=!0)}function Gc(e){return e.dynamicChildren=vs>0?qe||Ms:null,Wc(),vs>0&&qe&&qe.push(e),e}function bh(e,t,s,n,i,o){return Gc(Pr(e,t,s,n,i,o,!0))}function xi(e,t,s,n,i){return Gc(ge(e,t,s,n,i,!0))}function Ft(e){return e?e.__v_isVNode===!0:!1}function yt(e,t){return e.type===t.type&&e.key===t.key}function Sh(e){}const Xc=({key:e})=>e??null,ci=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?te(e)||Re(e)||Q(e)?{i:Pe,r:e,k:t,f:!!s}:e:null);function Pr(e,t=null,s=null,n=0,i=null,o=e===Ne?0:1,r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xc(t),ref:t&&ci(t),scopeId:Xi,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Pe};return a?(Nr(l,s),o&128&&e.normalize(l)):s&&(l.shapeFlag|=te(s)?8:16),vs>0&&!r&&qe&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&qe.push(l),l}const ge=_h;function _h(e,t=null,s=null,n=0,i=null,o=!1){if((!e||e===_c)&&(e=we),Ft(e)){const a=Tt(e,t,!0);return s&&Nr(a,s),vs>0&&!o&&qe&&(a.shapeFlag&6?qe[qe.indexOf(e)]=a:qe.push(a)),a.patchFlag=-2,a}if(Ph(e)&&(e=e.__vccOpts),t){t=Yc(t);let{class:a,style:l}=t;a&&!te(a)&&(t.class=Fn(a)),pe(l)&&(Gi(l)&&!z(l)&&(l=ie({},l)),t.style=Dn(l))}const r=te(e)?1:Ci(e)?128:rc(e)?64:pe(e)?4:Q(e)?2:0;return Pr(e,t,s,n,i,r,o,!0)}function Yc(e){return e?Gi(e)||Ac(e)?ie({},e):e:null}function Tt(e,t,s=!1,n=!1){const{props:i,ref:o,patchFlag:r,children:a,transition:l}=e,c=t?Jc(i||{},t):i,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Xc(c),ref:t&&t.ref?s&&o?z(o)?o.concat(ci(t)):[o,ci(t)]:ci(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ne?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Tt(e.ssContent),ssFallback:e.ssFallback&&Tt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&n&&Dt(f,l.clone(f)),f}function Rr(e=" ",t=0){return ge(es,null,e,t)}function Eh(e,t){const s=ge(ms,null,e);return s.staticCount=t,s}function Ch(e="",t=!1){return t?(In(),xi(we,null,e)):ge(we,null,e)}function Ye(e){return e==null||typeof e=="boolean"?ge(we):z(e)?ge(Ne,null,e.slice()):Ft(e)?Wt(e):ge(es,null,String(e))}function Wt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Tt(e)}function Nr(e,t){let s=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(z(t))s=16;else if(typeof t=="object")if(n&65){const i=t.default;i&&(i._c&&(i._d=!1),Nr(e,i()),i._c&&(i._d=!0));return}else{s=32;const i=t._;!i&&!Ac(t)?t._ctx=Pe:i===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Q(t)?(t={default:t,_ctx:Pe},s=32):(t=String(t),n&64?(s=16,t=[Rr(t)]):s=8);e.children=t,e.shapeFlag|=s}function Jc(...e){const t={};for(let s=0;s<e.length;s++){const n=e[s];for(const i in n)if(i==="class")t.class!==n.class&&(t.class=Fn([t.class,n.class]));else if(i==="style")t.style=Dn([t.style,n.style]);else if(_s(i)){const o=t[i],r=n[i];r&&o!==r&&!(z(o)&&o.includes(r))&&(t[i]=o?[].concat(o,r):r)}else i!==""&&(t[i]=n[i])}return t}function Xe(e,t,s,n=null){ht(e,t,7,[s,n])}const xh=xc();let wh=0;function Qc(e,t,s){const n=e.type,i=(t?t.appContext:e.appContext)||xh,o={uid:wh++,vnode:e,type:n,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pc(n,i),emitsOptions:$c(n,i),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:n.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=ah.bind(null,o),e.ce&&e.ce(o),o}let Ie=null;const mt=()=>Ie||Pe;let wi,Uo;{const e=zi(),t=(s,n)=>{let i;return(i=e[s])||(i=e[s]=[]),i.push(n),o=>{i.length>1?i.forEach(r=>r(o)):i[0](o)}};wi=t("__VUE_INSTANCE_SETTERS__",s=>Ie=s),Uo=t("__VUE_SSR_SETTERS__",s=>Vs=s)}const bs=e=>{const t=Ie;return wi(e),e.scope.on(),()=>{e.scope.off(),wi(t)}},Vo=()=>{Ie&&Ie.scope.off(),wi(null)};function Zc(e){return e.vnode.shapeFlag&4}let Vs=!1;function eu(e,t=!1,s=!1){t&&Uo(t);const{props:n,children:i}=e.vnode,o=Zc(e);Yp(e,n,o,t),eh(e,i,s);const r=o?Th(e,t):void 0;return t&&Uo(!1),r}function Th(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Mo);const{setup:n}=s;if(n){os();const i=e.setupContext=n.length>1?nu(e):null,o=bs(e),r=Js(n,e,0,[e.props,i]),a=ar(r);if(rs(),o(),(a||e.sp)&&!Zt(e)&&_r(e),a){if(r.then(Vo,Vo),t)return r.then(l=>{zo(e,l,t)}).catch(l=>{xs(l,e,0)});e.asyncDep=r}else zo(e,r,t)}else su(e,t)}function zo(e,t,s){Q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=gr(t)),su(e,s)}let Ti,Ho;function tu(e){Ti=e,Ho=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,Ip))}}const Ah=()=>!Ti;function su(e,t,s){const n=e.type;if(!e.render){if(!t&&Ti&&!n.render){const i=n.template||Tr(e).template;if(i){const{isCustomElement:o,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:l}=n,c=ie(ie({isCustomElement:o,delimiters:a},r),l);n.render=Ti(i,c)}}e.render=n.render||Oe,Ho&&Ho(e)}{const i=bs(e);os();try{zp(e)}finally{rs(),i()}}}const Ih={get(e,t){return De(e,"get",""),e[t]}};function nu(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,Ih),slots:e.slots,emit:e.emit,expose:t}}function Hn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(gr(Xl(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in dn)return dn[s](e)},has(t,s){return s in t||s in dn}})):e.proxy}function $o(e,t=!0){return Q(e)?e.displayName||e.name:e.name||t&&e.__name}function Ph(e){return Q(e)&&"__vccOpts"in e}const it=(e,t)=>Dd(e,t,Vs);function no(e,t,s){const n=arguments.length;return n===2?pe(t)&&!z(t)?Ft(t)?ge(e,null,[t]):ge(e,t):ge(e,null,t):(n>3?s=Array.prototype.slice.call(arguments,2):n===3&&Ft(s)&&(s=[s]),ge(e,t,s))}function Rh(){}function Nh(e,t,s,n){const i=s[n];if(i&&iu(i,e))return i;const o=t();return o.memo=e.slice(),o.cacheIndex=n,s[n]=o}function iu(e,t){const s=e.memo;if(s.length!=t.length)return!1;for(let n=0;n<s.length;n++)if(He(s[n],t[n]))return!1;return vs>0&&qe&&qe.push(e),!0}const ou="3.5.13",kh=Oe,Oh=Kd,Mh=Ns,Lh=ic,jh={createComponentInstance:Qc,setupComponent:eu,renderComponentRoot:li,setCurrentRenderingInstance:xn,isVNode:Ft,normalizeVNode:Ye,getComponentPublicInstance:Hn,ensureValidVNode:wr,pushWarningContext:zd,popWarningContext:Hd},Dh=jh,Fh=null,qh=null,Uh=null;/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bo;const Ea=typeof window<"u"&&window.trustedTypes;if(Ea)try{Bo=Ea.createPolicy("vue",{createHTML:e=>e})}catch{}const ru=Bo?e=>Bo.createHTML(e):e=>e,Vh="http://www.w3.org/2000/svg",zh="http://www.w3.org/1998/Math/MathML",Nt=typeof document<"u"?document:null,Ca=Nt&&Nt.createElement("template"),Hh={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,n)=>{const i=t==="svg"?Nt.createElementNS(Vh,e):t==="mathml"?Nt.createElementNS(zh,e):s?Nt.createElement(e,{is:s}):Nt.createElement(e);return e==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:e=>Nt.createTextNode(e),createComment:e=>Nt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Nt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,n,i,o){const r=s?s.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),s),!(i===o||!(i=i.nextSibling)););else{Ca.innerHTML=ru(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const a=Ca.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,s)}return[r?r.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},Ut="transition",sn="animation",zs=Symbol("_vtc"),au={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},lu=ie({},Sr,au),$h=e=>(e.displayName="Transition",e.props=lu,e),Bh=$h((e,{slots:t})=>no(fc,cu(e),t)),ls=(e,t=[])=>{z(e)?e.forEach(s=>s(...t)):e&&e(...t)},xa=e=>e?z(e)?e.some(t=>t.length>1):e.length>1:!1;function cu(e){const t={};for(const x in e)x in au||(t[x]=e[x]);if(e.css===!1)return t;const{name:s="v",type:n,duration:i,enterFromClass:o=`${s}-enter-from`,enterActiveClass:r=`${s}-enter-active`,enterToClass:a=`${s}-enter-to`,appearFromClass:l=o,appearActiveClass:c=r,appearToClass:f=a,leaveFromClass:u=`${s}-leave-from`,leaveActiveClass:d=`${s}-leave-active`,leaveToClass:p=`${s}-leave-to`}=e,b=Kh(i),y=b&&b[0],R=b&&b[1],{onBeforeEnter:T,onEnter:S,onEnterCancelled:g,onLeave:v,onLeaveCancelled:E,onBeforeAppear:P=T,onAppear:L=S,onAppearCancelled:k=g}=t,C=(x,D,G,Y)=>{x._enterCancelled=Y,Ht(x,D?f:a),Ht(x,D?c:r),G&&G()},w=(x,D)=>{x._isLeaving=!1,Ht(x,u),Ht(x,p),Ht(x,d),D&&D()},j=x=>(D,G)=>{const Y=x?L:S,H=()=>C(D,x,G);ls(Y,[D,H]),wa(()=>{Ht(D,x?l:o),Et(D,x?f:a),xa(Y)||Ta(D,n,y,H)})};return ie(t,{onBeforeEnter(x){ls(T,[x]),Et(x,o),Et(x,r)},onBeforeAppear(x){ls(P,[x]),Et(x,l),Et(x,c)},onEnter:j(!1),onAppear:j(!0),onLeave(x,D){x._isLeaving=!0;const G=()=>w(x,D);Et(x,u),x._enterCancelled?(Et(x,d),Ko()):(Ko(),Et(x,d)),wa(()=>{x._isLeaving&&(Ht(x,u),Et(x,p),xa(v)||Ta(x,n,R,G))}),ls(v,[x,G])},onEnterCancelled(x){C(x,!1,void 0,!0),ls(g,[x])},onAppearCancelled(x){C(x,!0,void 0,!0),ls(k,[x])},onLeaveCancelled(x){w(x),ls(E,[x])}})}function Kh(e){if(e==null)return null;if(pe(e))return[So(e.enter),So(e.leave)];{const t=So(e);return[t,t]}}function So(e){return gi(e)}function Et(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e[zs]||(e[zs]=new Set)).add(t)}function Ht(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const s=e[zs];s&&(s.delete(t),s.size||(e[zs]=void 0))}function wa(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Wh=0;function Ta(e,t,s,n){const i=e._endId=++Wh,o=()=>{i===e._endId&&n()};if(s!=null)return setTimeout(o,s);const{type:r,timeout:a,propCount:l}=uu(e,t);if(!r)return n();const c=r+"end";let f=0;const u=()=>{e.removeEventListener(c,d),o()},d=p=>{p.target===e&&++f>=l&&u()};setTimeout(()=>{f<l&&u()},a+1),e.addEventListener(c,d)}function uu(e,t){const s=window.getComputedStyle(e),n=b=>(s[b]||"").split(", "),i=n(`${Ut}Delay`),o=n(`${Ut}Duration`),r=Aa(i,o),a=n(`${sn}Delay`),l=n(`${sn}Duration`),c=Aa(a,l);let f=null,u=0,d=0;t===Ut?r>0&&(f=Ut,u=r,d=o.length):t===sn?c>0&&(f=sn,u=c,d=l.length):(u=Math.max(r,c),f=u>0?r>c?Ut:sn:null,d=f?f===Ut?o.length:l.length:0);const p=f===Ut&&/\b(transform|all)(,|$)/.test(n(`${Ut}Property`).toString());return{type:f,timeout:u,propCount:d,hasTransform:p}}function Aa(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((s,n)=>Ia(s)+Ia(e[n])))}function Ia(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ko(){return document.body.offsetHeight}function Gh(e,t,s){const n=e[zs];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const Ai=Symbol("_vod"),fu=Symbol("_vsh"),du={beforeMount(e,{value:t},{transition:s}){e[Ai]=e.style.display==="none"?"":e.style.display,s&&t?s.beforeEnter(e):nn(e,t)},mounted(e,{value:t},{transition:s}){s&&t&&s.enter(e)},updated(e,{value:t,oldValue:s},{transition:n}){!t!=!s&&(n?t?(n.beforeEnter(e),nn(e,!0),n.enter(e)):n.leave(e,()=>{nn(e,!1)}):nn(e,t))},beforeUnmount(e,{value:t}){nn(e,t)}};function nn(e,t){e.style.display=t?e[Ai]:"none",e[fu]=!t}function Xh(){du.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const pu=Symbol("");function Yh(e){const t=mt();if(!t)return;const s=t.ut=(i=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(o=>Ii(o,i))},n=()=>{const i=e(t.proxy);t.ce?Ii(t.ce,i):Wo(t.subTree,i),s(i)};Er(()=>{En(n)}),Zs(()=>{hs(n,Oe,{flush:"post"});const i=new MutationObserver(n);i.observe(t.subTree.el.parentNode,{childList:!0}),eo(()=>i.disconnect())})}function Wo(e,t){if(e.shapeFlag&128){const s=e.suspense;e=s.activeBranch,s.pendingBranch&&!s.isHydrating&&s.effects.push(()=>{Wo(s.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)Ii(e.el,t);else if(e.type===Ne)e.children.forEach(s=>Wo(s,t));else if(e.type===ms){let{el:s,anchor:n}=e;for(;s&&(Ii(s,t),s!==n);)s=s.nextSibling}}function Ii(e,t){if(e.nodeType===1){const s=e.style;let n="";for(const i in t)s.setProperty(`--${i}`,t[i]),n+=`--${i}: ${t[i]};`;s[pu]=n}}const Jh=/(^|;)\s*display\s*:/;function Qh(e,t,s){const n=e.style,i=te(s);let o=!1;if(s&&!i){if(t)if(te(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();s[a]==null&&ui(n,a,"")}else for(const r in t)s[r]==null&&ui(n,r,"");for(const r in s)r==="display"&&(o=!0),ui(n,r,s[r])}else if(i){if(t!==s){const r=n[pu];r&&(s+=";"+r),n.cssText=s,o=Jh.test(s)}}else t&&e.removeAttribute("style");Ai in e&&(e[Ai]=o?n.display:"",e[fu]&&(n.display="none"))}const Pa=/\s*!important$/;function ui(e,t,s){if(z(s))s.forEach(n=>ui(e,t,n));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const n=Zh(e,t);Pa.test(s)?e.setProperty(Je(n),s.replace(Pa,""),"important"):e[n]=s}}const Ra=["Webkit","Moz","ms"],_o={};function Zh(e,t){const s=_o[t];if(s)return s;let n=ye(t);if(n!=="filter"&&n in e)return _o[t]=n;n=Cs(n);for(let i=0;i<Ra.length;i++){const o=Ra[i]+n;if(o in e)return _o[t]=o}return t}const Na="http://www.w3.org/1999/xlink";function ka(e,t,s,n,i,o=td(t)){n&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(Na,t.slice(6,t.length)):e.setAttributeNS(Na,t,s):s==null||o&&!Pl(s)?e.removeAttribute(t):e.setAttribute(t,o?"":Ze(s)?String(s):s)}function Oa(e,t,s,n,i){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?ru(s):s);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?e.getAttribute("value")||"":e.value,l=s==null?e.type==="checkbox"?"on":"":String(s);(a!==l||!("_value"in e))&&(e.value=l),s==null&&e.removeAttribute(t),e._value=s;return}let r=!1;if(s===""||s==null){const a=typeof e[t];a==="boolean"?s=Pl(s):s==null&&a==="string"?(s="",r=!0):a==="number"&&(s=0,r=!0)}try{e[t]=s}catch{}r&&e.removeAttribute(i||t)}function Mt(e,t,s,n){e.addEventListener(t,s,n)}function em(e,t,s,n){e.removeEventListener(t,s,n)}const Ma=Symbol("_vei");function tm(e,t,s,n,i=null){const o=e[Ma]||(e[Ma]={}),r=o[t];if(n&&r)r.value=n;else{const[a,l]=sm(t);if(n){const c=o[t]=om(n,i);Mt(e,a,c,l)}else r&&(em(e,a,r,l),o[t]=void 0)}}const La=/(?:Once|Passive|Capture)$/;function sm(e){let t;if(La.test(e)){t={};let n;for(;n=e.match(La);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Je(e.slice(2)),t]}let Eo=0;const nm=Promise.resolve(),im=()=>Eo||(nm.then(()=>Eo=0),Eo=Date.now());function om(e,t){const s=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=s.attached)return;ht(rm(n,s.value),t,5,[n])};return s.value=e,s.attached=im(),s}function rm(e,t){if(z(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(n=>i=>!i._stopped&&n&&n(i))}else return t}const ja=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,am=(e,t,s,n,i,o)=>{const r=i==="svg";t==="class"?Gh(e,n,r):t==="style"?Qh(e,s,n):_s(t)?or(t)||tm(e,t,s,n,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):lm(e,t,n,r))?(Oa(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ka(e,t,n,r,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!te(n))?Oa(e,ye(t),n,o,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),ka(e,t,n,r))};function lm(e,t,s,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&ja(t)&&Q(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ja(t)&&te(s)?!1:t in e}const Da={};/*! #__NO_SIDE_EFFECTS__ */function hu(e,t,s){const n=Un(e,t);Ui(n)&&ie(n,t);class i extends io{constructor(r){super(n,r,s)}}return i.def=n,i}/*! #__NO_SIDE_EFFECTS__ */const cm=(e,t)=>hu(e,t,Tu),um=typeof HTMLElement<"u"?HTMLElement:class{};class io extends um{constructor(t,s={},n=Ni){super(),this._def=t,this._props=s,this._createApp=n,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._ob=null,this.shadowRoot&&n!==Ni?this._root=this.shadowRoot:t.shadowRoot!==!1?(this.attachShadow({mode:"open"}),this._root=this.shadowRoot):this._root=this,this._def.__asyncLoader||this._resolveProps(this._def)}connectedCallback(){if(!this.isConnected)return;this.shadowRoot||this._parseSlots(),this._connected=!0;let t=this;for(;t=t&&(t.parentNode||t.host);)if(t instanceof io){this._parent=t;break}this._instance||(this._resolved?(this._setParent(),this._update()):t&&t._pendingResolve?this._pendingResolve=t._pendingResolve.then(()=>{this._pendingResolve=void 0,this._resolveDef()}):this._resolveDef())}_setParent(t=this._parent){t&&(this._instance.parent=t._instance,this._instance.provides=t._instance.provides)}disconnectedCallback(){this._connected=!1,Qs(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null)})}_resolveDef(){if(this._pendingResolve)return;for(let n=0;n<this.attributes.length;n++)this._setAttr(this.attributes[n].name);this._ob=new MutationObserver(n=>{for(const i of n)this._setAttr(i.attributeName)}),this._ob.observe(this,{attributes:!0});const t=(n,i=!1)=>{this._resolved=!0,this._pendingResolve=void 0;const{props:o,styles:r}=n;let a;if(o&&!z(o))for(const l in o){const c=o[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=gi(this._props[l])),(a||(a=Object.create(null)))[ye(l)]=!0)}this._numberProps=a,i&&this._resolveProps(n),this.shadowRoot&&this._applyStyles(r),this._mount(n)},s=this._def.__asyncLoader;s?this._pendingResolve=s().then(n=>t(this._def=n,!0)):t(this._def)}_mount(t){this._app=this._createApp(t),t.configureApp&&t.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);const s=this._instance&&this._instance.exposed;if(s)for(const n in s)le(this,n)||Object.defineProperty(this,n,{get:()=>Lt(s[n])})}_resolveProps(t){const{props:s}=t,n=z(s)?s:Object.keys(s||{});for(const i of Object.keys(this))i[0]!=="_"&&n.includes(i)&&this._setProp(i,this[i]);for(const i of n.map(ye))Object.defineProperty(this,i,{get(){return this._getProp(i)},set(o){this._setProp(i,o,!0,!0)}})}_setAttr(t){if(t.startsWith("data-v-"))return;const s=this.hasAttribute(t);let n=s?this.getAttribute(t):Da;const i=ye(t);s&&this._numberProps&&this._numberProps[i]&&(n=gi(n)),this._setProp(i,n,!1,!0)}_getProp(t){return this._props[t]}_setProp(t,s,n=!0,i=!1){if(s!==this._props[t]&&(s===Da?delete this._props[t]:(this._props[t]=s,t==="key"&&this._app&&(this._app._ceVNode.key=s)),i&&this._instance&&this._update(),n)){const o=this._ob;o&&o.disconnect(),s===!0?this.setAttribute(Je(t),""):typeof s=="string"||typeof s=="number"?this.setAttribute(Je(t),s+""):s||this.removeAttribute(Je(t)),o&&o.observe(this,{attributes:!0})}}_update(){wu(this._createVNode(),this._root)}_createVNode(){const t={};this.shadowRoot||(t.onVnodeMounted=t.onVnodeUpdated=this._renderSlots.bind(this));const s=ge(this._def,ie(t,this._props));return this._instance||(s.ce=n=>{this._instance=n,n.ce=this,n.isCE=!0;const i=(o,r)=>{this.dispatchEvent(new CustomEvent(o,Ui(r[0])?ie({detail:r},r[0]):{detail:r}))};n.emit=(o,...r)=>{i(o,r),Je(o)!==o&&i(Je(o),r)},this._setParent()}),s}_applyStyles(t,s){if(!t)return;if(s){if(s===this._def||this._styleChildren.has(s))return;this._styleChildren.add(s)}const n=this._nonce;for(let i=t.length-1;i>=0;i--){const o=document.createElement("style");n&&o.setAttribute("nonce",n),o.textContent=t[i],this.shadowRoot.prepend(o)}}_parseSlots(){const t=this._slots={};let s;for(;s=this.firstChild;){const n=s.nodeType===1&&s.getAttribute("slot")||"default";(t[n]||(t[n]=[])).push(s),this.removeChild(s)}}_renderSlots(){const t=(this._teleportTarget||this).querySelectorAll("slot"),s=this._instance.type.__scopeId;for(let n=0;n<t.length;n++){const i=t[n],o=i.getAttribute("name")||"default",r=this._slots[o],a=i.parentNode;if(r)for(const l of r){if(s&&l.nodeType===1){const c=s+"-s",f=document.createTreeWalker(l,1);l.setAttribute(c,"");let u;for(;u=f.nextNode();)u.setAttribute(c,"")}a.insertBefore(l,i)}else for(;i.firstChild;)a.insertBefore(i.firstChild,i);a.removeChild(i)}}_injectChildStyle(t){this._applyStyles(t.styles,t)}_removeChildStyle(t){}}function mu(e){const t=mt(),s=t&&t.ce;return s||null}function fm(){const e=mu();return e&&e.shadowRoot}function dm(e="$style"){{const t=mt();if(!t)return ne;const s=t.type.__cssModules;if(!s)return ne;const n=s[e];return n||ne}}const gu=new WeakMap,yu=new WeakMap,Pi=Symbol("_moveCb"),Fa=Symbol("_enterCb"),pm=e=>(delete e.props.mode,e),hm=pm({name:"TransitionGroup",props:ie({},lu,{tag:String,moveClass:String}),setup(e,{slots:t}){const s=mt(),n=br();let i,o;return Qi(()=>{if(!i.length)return;const r=e.moveClass||`${e.name||"v"}-move`;if(!bm(i[0].el,s.vnode.el,r))return;i.forEach(gm),i.forEach(ym);const a=i.filter(vm);Ko(),a.forEach(l=>{const c=l.el,f=c.style;Et(c,r),f.transform=f.webkitTransform=f.transitionDuration="";const u=c[Pi]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",u),c[Pi]=null,Ht(c,r))};c.addEventListener("transitionend",u)})}),()=>{const r=ae(e),a=cu(r);let l=r.tag||Ne;if(i=[],o)for(let c=0;c<o.length;c++){const f=o[c];f.el&&f.el instanceof Element&&(i.push(f),Dt(f,Us(f,a,n,s)),gu.set(f,f.el.getBoundingClientRect()))}o=t.default?Yi(t.default()):[];for(let c=0;c<o.length;c++){const f=o[c];f.key!=null&&Dt(f,Us(f,a,n,s))}return ge(l,null,o)}}}),mm=hm;function gm(e){const t=e.el;t[Pi]&&t[Pi](),t[Fa]&&t[Fa]()}function ym(e){yu.set(e,e.el.getBoundingClientRect())}function vm(e){const t=gu.get(e),s=yu.get(e),n=t.left-s.left,i=t.top-s.top;if(n||i){const o=e.el.style;return o.transform=o.webkitTransform=`translate(${n}px,${i}px)`,o.transitionDuration="0s",e}}function bm(e,t,s){const n=e.cloneNode(),i=e[zs];i&&i.forEach(a=>{a.split(/\s+/).forEach(l=>l&&n.classList.remove(l))}),s.split(/\s+/).forEach(a=>a&&n.classList.add(a)),n.style.display="none";const o=t.nodeType===1?t:t.parentNode;o.appendChild(n);const{hasTransform:r}=uu(n);return o.removeChild(n),r}const is=e=>{const t=e.props["onUpdate:modelValue"]||!1;return z(t)?s=>Ds(t,s):t};function Sm(e){e.target.composing=!0}function qa(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const pt=Symbol("_assign"),Ri={created(e,{modifiers:{lazy:t,trim:s,number:n}},i){e[pt]=is(i);const o=n||i.props&&i.props.type==="number";Mt(e,t?"change":"input",r=>{if(r.target.composing)return;let a=e.value;s&&(a=a.trim()),o&&(a=mi(a)),e[pt](a)}),s&&Mt(e,"change",()=>{e.value=e.value.trim()}),t||(Mt(e,"compositionstart",Sm),Mt(e,"compositionend",qa),Mt(e,"change",qa))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:s,modifiers:{lazy:n,trim:i,number:o}},r){if(e[pt]=is(r),e.composing)return;const a=(o||e.type==="number")&&!/^0\d/.test(e.value)?mi(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(n&&t===s||i&&e.value.trim()===l)||(e.value=l))}},kr={deep:!0,created(e,t,s){e[pt]=is(s),Mt(e,"change",()=>{const n=e._modelValue,i=Hs(e),o=e.checked,r=e[pt];if(z(n)){const a=Hi(n,i),l=a!==-1;if(o&&!l)r(n.concat(i));else if(!o&&l){const c=[...n];c.splice(a,1),r(c)}}else if(Es(n)){const a=new Set(n);o?a.add(i):a.delete(i),r(a)}else r(bu(e,o))})},mounted:Ua,beforeUpdate(e,t,s){e[pt]=is(s),Ua(e,t,s)}};function Ua(e,{value:t,oldValue:s},n){e._modelValue=t;let i;if(z(t))i=Hi(t,n.props.value)>-1;else if(Es(t))i=t.has(n.props.value);else{if(t===s)return;i=ss(t,bu(e,!0))}e.checked!==i&&(e.checked=i)}const Or={created(e,{value:t},s){e.checked=ss(t,s.props.value),e[pt]=is(s),Mt(e,"change",()=>{e[pt](Hs(e))})},beforeUpdate(e,{value:t,oldValue:s},n){e[pt]=is(n),t!==s&&(e.checked=ss(t,n.props.value))}},vu={deep:!0,created(e,{value:t,modifiers:{number:s}},n){const i=Es(t);Mt(e,"change",()=>{const o=Array.prototype.filter.call(e.options,r=>r.selected).map(r=>s?mi(Hs(r)):Hs(r));e[pt](e.multiple?i?new Set(o):o:o[0]),e._assigning=!0,Qs(()=>{e._assigning=!1})}),e[pt]=is(n)},mounted(e,{value:t}){Va(e,t)},beforeUpdate(e,t,s){e[pt]=is(s)},updated(e,{value:t}){e._assigning||Va(e,t)}};function Va(e,t){const s=e.multiple,n=z(t);if(!(s&&!n&&!Es(t))){for(let i=0,o=e.options.length;i<o;i++){const r=e.options[i],a=Hs(r);if(s)if(n){const l=typeof a;l==="string"||l==="number"?r.selected=t.some(c=>String(c)===String(a)):r.selected=Hi(t,a)>-1}else r.selected=t.has(a);else if(ss(Hs(r),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!s&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Hs(e){return"_value"in e?e._value:e.value}function bu(e,t){const s=t?"_trueValue":"_falseValue";return s in e?e[s]:t}const Su={created(e,t,s){ni(e,t,s,null,"created")},mounted(e,t,s){ni(e,t,s,null,"mounted")},beforeUpdate(e,t,s,n){ni(e,t,s,n,"beforeUpdate")},updated(e,t,s,n){ni(e,t,s,n,"updated")}};function _u(e,t){switch(e){case"SELECT":return vu;case"TEXTAREA":return Ri;default:switch(t){case"checkbox":return kr;case"radio":return Or;default:return Ri}}}function ni(e,t,s,n,i){const r=_u(e.tagName,s.props&&s.props.type)[i];r&&r(e,t,s,n)}function _m(){Ri.getSSRProps=({value:e})=>({value:e}),Or.getSSRProps=({value:e},t)=>{if(t.props&&ss(t.props.value,e))return{checked:!0}},kr.getSSRProps=({value:e},t)=>{if(z(e)){if(t.props&&Hi(e,t.props.value)>-1)return{checked:!0}}else if(Es(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},Su.getSSRProps=(e,t)=>{if(typeof t.type!="string")return;const s=_u(t.type.toUpperCase(),t.props&&t.props.type);if(s.getSSRProps)return s.getSSRProps(e,t)}}const Em=["ctrl","shift","alt","meta"],Cm={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Em.some(s=>e[`${s}Key`]&&!t.includes(s))},xm=(e,t)=>{const s=e._withMods||(e._withMods={}),n=t.join(".");return s[n]||(s[n]=(i,...o)=>{for(let r=0;r<t.length;r++){const a=Cm[t[r]];if(a&&a(i,t))return}return e(i,...o)})},wm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Tm=(e,t)=>{const s=e._withKeys||(e._withKeys={}),n=t.join(".");return s[n]||(s[n]=i=>{if(!("key"in i))return;const o=Je(i.key);if(t.some(r=>r===o||wm[r]===o))return e(i)})},Eu=ie({patchProp:am},Hh);let mn,za=!1;function Cu(){return mn||(mn=Mc(Eu))}function xu(){return mn=za?mn:Lc(Eu),za=!0,mn}const wu=(...e)=>{Cu().render(...e)},Am=(...e)=>{xu().hydrate(...e)},Ni=(...e)=>{const t=Cu().createApp(...e),{mount:s}=t;return t.mount=n=>{const i=Iu(n);if(!i)return;const o=t._component;!Q(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const r=s(i,!1,Au(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},t},Tu=(...e)=>{const t=xu().createApp(...e),{mount:s}=t;return t.mount=n=>{const i=Iu(n);if(i)return s(i,!0,Au(i))},t};function Au(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Iu(e){return te(e)?document.querySelector(e):e}let Ha=!1;const Im=()=>{Ha||(Ha=!0,_m(),Xh())},Pm=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:fc,BaseTransitionPropsValidators:Sr,Comment:we,DeprecationTypes:Uh,EffectScope:cr,ErrorCodes:Bd,ErrorTypeStrings:Oh,Fragment:Ne,KeepAlive:vp,ReactiveEffect:bn,Static:ms,Suspense:ph,Teleport:ep,Text:es,TrackOpTypes:Fd,Transition:Bh,TransitionGroup:mm,TriggerOpTypes:qd,VueElement:io,assertNumber:$d,callWithAsyncErrorHandling:ht,callWithErrorHandling:Js,camelize:ye,capitalize:Cs,cloneVNode:Tt,compatUtils:qh,computed:it,createApp:Ni,createBlock:xi,createCommentVNode:Ch,createElementBlock:bh,createElementVNode:Pr,createHydrationRenderer:Lc,createPropsRestProxy:Up,createRenderer:Mc,createSSRApp:Tu,createSlots:wp,createStaticVNode:Eh,createTextVNode:Rr,createVNode:ge,customRef:Jl,defineAsyncComponent:gp,defineComponent:Un,defineCustomElement:hu,defineEmits:Rp,defineExpose:Np,defineModel:Mp,defineOptions:kp,defineProps:Pp,defineSSRCustomElement:cm,defineSlots:Op,devtools:Mh,effect:rd,effectScope:nd,getCurrentInstance:mt,getCurrentScope:Ol,getCurrentWatcher:Ud,getTransitionRawChildren:Yi,guardReactiveProps:Yc,h:no,handleError:xs,hasInjectionContext:Xp,hydrate:Am,hydrateOnIdle:up,hydrateOnInteraction:hp,hydrateOnMediaQuery:pp,hydrateOnVisible:dp,initCustomFormatter:Rh,initDirectivesForSSR:Im,inject:wt,isMemoSame:iu,isProxy:Gi,isReactive:Jt,isReadonly:ns,isRef:Re,isRuntimeOnly:Ah,isShallow:rt,isVNode:Ft,markRaw:Xl,mergeDefaults:Fp,mergeModels:qp,mergeProps:Jc,nextTick:Qs,normalizeClass:Fn,normalizeProps:Bf,normalizeStyle:Dn,onActivated:pc,onBeforeMount:gc,onBeforeUnmount:Zi,onBeforeUpdate:Er,onDeactivated:hc,onErrorCaptured:Sc,onMounted:Zs,onRenderTracked:bc,onRenderTriggered:vc,onScopeDispose:id,onServerPrefetch:yc,onUnmounted:eo,onUpdated:Qi,onWatcherCleanup:Zl,openBlock:In,popScopeId:Yd,provide:pn,proxyRefs:gr,pushScopeId:Xd,queuePostFlushCb:En,reactive:qn,readonly:hr,ref:Qt,registerRuntimeCompiler:tu,render:wu,renderList:xp,renderSlot:Tp,resolveComponent:_p,resolveDirective:Cp,resolveDynamicComponent:Ep,resolveFilter:Fh,resolveTransitionHooks:Us,setBlockTracking:qo,setDevtoolsHook:Lh,setTransitionHooks:Dt,shallowReactive:pr,shallowReadonly:Td,shallowRef:mr,ssrContextKey:qc,ssrUtils:Dh,stop:ad,toDisplayString:Nl,toHandlerKey:js,toHandlers:Ap,toRaw:ae,toRef:Ld,toRefs:kd,toValue:Pd,transformVNodeArgs:Sh,triggerRef:Id,unref:Lt,useAttrs:Dp,useCssModule:dm,useCssVars:Yh,useHost:mu,useId:sp,useModel:rh,useSSRContext:Uc,useShadowRoot:fm,useSlots:jp,useTemplateRef:np,useTransitionState:br,vModelCheckbox:kr,vModelDynamic:Su,vModelRadio:Or,vModelSelect:vu,vModelText:Ri,vShow:du,version:ou,warn:kh,watch:hs,watchEffect:nh,watchPostEffect:ih,watchSyncEffect:Vc,withAsyncContext:Vp,withCtx:vr,withDefaults:Lp,withDirectives:Qd,withKeys:Tm,withMemo:Nh,withModifiers:xm,withScopeId:Jd},Symbol.toStringTag,{value:"Module"}));/**
* @vue/compiler-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Pn=Symbol(""),gn=Symbol(""),Mr=Symbol(""),ki=Symbol(""),Pu=Symbol(""),Ss=Symbol(""),Ru=Symbol(""),Nu=Symbol(""),Lr=Symbol(""),jr=Symbol(""),$n=Symbol(""),Dr=Symbol(""),ku=Symbol(""),Fr=Symbol(""),qr=Symbol(""),Ur=Symbol(""),Vr=Symbol(""),zr=Symbol(""),Hr=Symbol(""),Ou=Symbol(""),Mu=Symbol(""),oo=Symbol(""),Oi=Symbol(""),$r=Symbol(""),Br=Symbol(""),Rn=Symbol(""),Bn=Symbol(""),Kr=Symbol(""),Go=Symbol(""),Rm=Symbol(""),Xo=Symbol(""),Mi=Symbol(""),Nm=Symbol(""),km=Symbol(""),Wr=Symbol(""),Om=Symbol(""),Mm=Symbol(""),Gr=Symbol(""),Lu=Symbol(""),$s={[Pn]:"Fragment",[gn]:"Teleport",[Mr]:"Suspense",[ki]:"KeepAlive",[Pu]:"BaseTransition",[Ss]:"openBlock",[Ru]:"createBlock",[Nu]:"createElementBlock",[Lr]:"createVNode",[jr]:"createElementVNode",[$n]:"createCommentVNode",[Dr]:"createTextVNode",[ku]:"createStaticVNode",[Fr]:"resolveComponent",[qr]:"resolveDynamicComponent",[Ur]:"resolveDirective",[Vr]:"resolveFilter",[zr]:"withDirectives",[Hr]:"renderList",[Ou]:"renderSlot",[Mu]:"createSlots",[oo]:"toDisplayString",[Oi]:"mergeProps",[$r]:"normalizeClass",[Br]:"normalizeStyle",[Rn]:"normalizeProps",[Bn]:"guardReactiveProps",[Kr]:"toHandlers",[Go]:"camelize",[Rm]:"capitalize",[Xo]:"toHandlerKey",[Mi]:"setBlockTracking",[Nm]:"pushScopeId",[km]:"popScopeId",[Wr]:"withCtx",[Om]:"unref",[Mm]:"isRef",[Gr]:"withMemo",[Lu]:"isMemoSame"};function Lm(e){Object.getOwnPropertySymbols(e).forEach(t=>{$s[t]=e[t]})}const lt={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:""};function jm(e,t=""){return{type:0,source:t,children:e,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:[],temps:0,codegenNode:void 0,loc:lt}}function Nn(e,t,s,n,i,o,r,a=!1,l=!1,c=!1,f=lt){return e&&(a?(e.helper(Ss),e.helper(Ws(e.inSSR,c))):e.helper(Ks(e.inSSR,c)),r&&e.helper(zr)),{type:13,tag:t,props:s,children:n,patchFlag:i,dynamicProps:o,directives:r,isBlock:a,disableTracking:l,isComponent:c,loc:f}}function gs(e,t=lt){return{type:17,loc:t,elements:e}}function dt(e,t=lt){return{type:15,loc:t,properties:e}}function xe(e,t){return{type:16,loc:lt,key:te(e)?se(e,!0):e,value:t}}function se(e,t=!1,s=lt,n=0){return{type:4,loc:s,content:e,isStatic:t,constType:t?3:n}}function bt(e,t=lt){return{type:8,loc:t,children:e}}function Ae(e,t=[],s=lt){return{type:14,loc:s,callee:e,arguments:t}}function Bs(e,t=void 0,s=!1,n=!1,i=lt){return{type:18,params:e,returns:t,newline:s,isSlot:n,loc:i}}function Yo(e,t,s,n=!0){return{type:19,test:e,consequent:t,alternate:s,newline:n,loc:lt}}function Dm(e,t,s=!1,n=!1){return{type:20,index:e,value:t,needPauseTracking:s,inVOnce:n,needArraySpread:!1,loc:lt}}function Fm(e){return{type:21,body:e,loc:lt}}function Ks(e,t){return e||t?Lr:jr}function Ws(e,t){return e||t?Ru:Nu}function Xr(e,{helper:t,removeHelper:s,inSSR:n}){e.isBlock||(e.isBlock=!0,s(Ks(n,e.isComponent)),t(Ss),t(Ws(n,e.isComponent)))}const $a=new Uint8Array([123,123]),Ba=new Uint8Array([125,125]);function Ka(e){return e>=97&&e<=122||e>=65&&e<=90}function nt(e){return e===32||e===10||e===9||e===12||e===13}function Vt(e){return e===47||e===62||nt(e)}function Li(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}const Le={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])};class qm{constructor(t,s){this.stack=t,this.cbs=s,this.state=1,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=!1,this.inXML=!1,this.inVPre=!1,this.newlines=[],this.mode=0,this.delimiterOpen=$a,this.delimiterClose=Ba,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0}get inSFCRoot(){return this.mode===2&&this.stack.length===0}reset(){this.state=1,this.mode=0,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=!1,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=$a,this.delimiterClose=Ba}getPos(t){let s=1,n=t+1;for(let i=this.newlines.length-1;i>=0;i--){const o=this.newlines[i];if(t>o){s=i+2,n=t-o;break}}return{column:n,line:s,offset:t}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(t){t===60?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):!this.inVPre&&t===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(t))}stateInterpolationOpen(t){if(t===this.delimiterOpen[this.delimiterIndex])if(this.delimiterIndex===this.delimiterOpen.length-1){const s=this.index+1-this.delimiterOpen.length;s>this.sectionStart&&this.cbs.ontext(this.sectionStart,s),this.state=3,this.sectionStart=s}else this.delimiterIndex++;else this.inRCDATA?(this.state=32,this.stateInRCDATA(t)):(this.state=1,this.stateText(t))}stateInterpolation(t){t===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(t))}stateInterpolationClose(t){t===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(t))}stateSpecialStartSequence(t){const s=this.sequenceIndex===this.currentSequence.length;if(!(s?Vt(t):(t|32)===this.currentSequence[this.sequenceIndex]))this.inRCDATA=!1;else if(!s){this.sequenceIndex++;return}this.sequenceIndex=0,this.state=6,this.stateInTagName(t)}stateInRCDATA(t){if(this.sequenceIndex===this.currentSequence.length){if(t===62||nt(t)){const s=this.index-this.currentSequence.length;if(this.sectionStart<s){const n=this.index;this.index=s,this.cbs.ontext(this.sectionStart,s),this.index=n}this.sectionStart=s+2,this.stateInClosingTagName(t),this.inRCDATA=!1;return}this.sequenceIndex=0}(t|32)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence===Le.TitleEnd||this.currentSequence===Le.TextareaEnd&&!this.inSFCRoot?!this.inVPre&&t===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(t)):this.fastForwardTo(60)&&(this.sequenceIndex=1):this.sequenceIndex=+(t===60)}stateCDATASequence(t){t===Le.Cdata[this.sequenceIndex]?++this.sequenceIndex===Le.Cdata.length&&(this.state=28,this.currentSequence=Le.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(t))}fastForwardTo(t){for(;++this.index<this.buffer.length;){const s=this.buffer.charCodeAt(this.index);if(s===10&&this.newlines.push(this.index),s===t)return!0}return this.index=this.buffer.length-1,!1}stateInCommentLike(t){t===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===Le.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):t!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}startSpecial(t,s){this.enterRCDATA(t,s),this.state=31}enterRCDATA(t,s){this.inRCDATA=!0,this.currentSequence=t,this.sequenceIndex=s}stateBeforeTagName(t){t===33?(this.state=22,this.sectionStart=this.index+1):t===63?(this.state=24,this.sectionStart=this.index+1):Ka(t)?(this.sectionStart=this.index,this.mode===0?this.state=6:this.inSFCRoot?this.state=34:this.inXML?this.state=6:t===116?this.state=30:this.state=t===115?29:6):t===47?this.state=8:(this.state=1,this.stateText(t))}stateInTagName(t){Vt(t)&&this.handleTagName(t)}stateInSFCRootTagName(t){if(Vt(t)){const s=this.buffer.slice(this.sectionStart,this.index);s!=="template"&&this.enterRCDATA(Li("</"+s),0),this.handleTagName(t)}}handleTagName(t){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(t)}stateBeforeClosingTagName(t){nt(t)||(t===62?(this.state=1,this.sectionStart=this.index+1):(this.state=Ka(t)?9:27,this.sectionStart=this.index))}stateInClosingTagName(t){(t===62||nt(t))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(t))}stateAfterClosingTagName(t){t===62&&(this.state=1,this.sectionStart=this.index+1)}stateBeforeAttrName(t){t===62?(this.cbs.onopentagend(this.index),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):t===47?this.state=7:t===60&&this.peek()===47?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):nt(t)||this.handleAttrStart(t)}handleAttrStart(t){t===118&&this.peek()===45?(this.state=13,this.sectionStart=this.index):t===46||t===58||t===64||t===35?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index)}stateInSelfClosingTag(t){t===62?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=!1):nt(t)||(this.state=11,this.stateBeforeAttrName(t))}stateInAttrName(t){(t===61||Vt(t))&&(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(t))}stateInDirName(t){t===61||Vt(t)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(t)):t===58?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):t===46&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDirArg(t){t===61||Vt(t)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(t)):t===91?this.state=15:t===46&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDynamicDirArg(t){t===93?this.state=14:(t===61||Vt(t))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(t))}stateInDirModifier(t){t===61||Vt(t)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(t)):t===46&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1)}handleAttrNameEnd(t){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(t)}stateAfterAttrName(t){t===61?this.state=18:t===47||t===62?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(t)):nt(t)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(t))}stateBeforeAttrValue(t){t===34?(this.state=19,this.sectionStart=this.index+1):t===39?(this.state=20,this.sectionStart=this.index+1):nt(t)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(t))}handleInAttrValue(t,s){(t===s||this.fastForwardTo(s))&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(s===34?3:2,this.index+1),this.state=11)}stateInAttrValueDoubleQuotes(t){this.handleInAttrValue(t,34)}stateInAttrValueSingleQuotes(t){this.handleInAttrValue(t,39)}stateInAttrValueNoQuotes(t){nt(t)||t===62?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(t)):(t===39||t===60||t===61||t===96)&&this.cbs.onerr(18,this.index)}stateBeforeDeclaration(t){t===91?(this.state=26,this.sequenceIndex=0):this.state=t===45?25:23}stateInDeclaration(t){(t===62||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1)}stateInProcessingInstruction(t){(t===62||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeComment(t){t===45?(this.state=28,this.currentSequence=Le.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23}stateInSpecialComment(t){(t===62||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeSpecialS(t){t===Le.ScriptEnd[3]?this.startSpecial(Le.ScriptEnd,4):t===Le.StyleEnd[3]?this.startSpecial(Le.StyleEnd,4):(this.state=6,this.stateInTagName(t))}stateBeforeSpecialT(t){t===Le.TitleEnd[3]?this.startSpecial(Le.TitleEnd,4):t===Le.TextareaEnd[3]?this.startSpecial(Le.TextareaEnd,4):(this.state=6,this.stateInTagName(t))}startEntity(){}stateInEntity(){}parse(t){for(this.buffer=t;this.index<this.buffer.length;){const s=this.buffer.charCodeAt(this.index);switch(s===10&&this.newlines.push(this.index),this.state){case 1:{this.stateText(s);break}case 2:{this.stateInterpolationOpen(s);break}case 3:{this.stateInterpolation(s);break}case 4:{this.stateInterpolationClose(s);break}case 31:{this.stateSpecialStartSequence(s);break}case 32:{this.stateInRCDATA(s);break}case 26:{this.stateCDATASequence(s);break}case 19:{this.stateInAttrValueDoubleQuotes(s);break}case 12:{this.stateInAttrName(s);break}case 13:{this.stateInDirName(s);break}case 14:{this.stateInDirArg(s);break}case 15:{this.stateInDynamicDirArg(s);break}case 16:{this.stateInDirModifier(s);break}case 28:{this.stateInCommentLike(s);break}case 27:{this.stateInSpecialComment(s);break}case 11:{this.stateBeforeAttrName(s);break}case 6:{this.stateInTagName(s);break}case 34:{this.stateInSFCRootTagName(s);break}case 9:{this.stateInClosingTagName(s);break}case 5:{this.stateBeforeTagName(s);break}case 17:{this.stateAfterAttrName(s);break}case 20:{this.stateInAttrValueSingleQuotes(s);break}case 18:{this.stateBeforeAttrValue(s);break}case 8:{this.stateBeforeClosingTagName(s);break}case 10:{this.stateAfterClosingTagName(s);break}case 29:{this.stateBeforeSpecialS(s);break}case 30:{this.stateBeforeSpecialT(s);break}case 21:{this.stateInAttrValueNoQuotes(s);break}case 7:{this.stateInSelfClosingTag(s);break}case 23:{this.stateInDeclaration(s);break}case 22:{this.stateBeforeDeclaration(s);break}case 25:{this.stateBeforeComment(s);break}case 24:{this.stateInProcessingInstruction(s);break}case 33:{this.stateInEntity();break}}this.index++}this.cleanup(),this.finish()}cleanup(){this.sectionStart!==this.index&&(this.state===1||this.state===32&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(this.state===19||this.state===20||this.state===21)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}finish(){this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){const t=this.buffer.length;this.sectionStart>=t||(this.state===28?this.currentSequence===Le.CdataEnd?this.cbs.oncdata(this.sectionStart,t):this.cbs.oncomment(this.sectionStart,t):this.state===6||this.state===11||this.state===18||this.state===17||this.state===12||this.state===13||this.state===14||this.state===15||this.state===16||this.state===20||this.state===19||this.state===21||this.state===9||this.cbs.ontext(this.sectionStart,t))}emitCodePoint(t,s){}}function Wa(e,{compatConfig:t}){const s=t&&t[e];return e==="MODE"?s||3:s}function ys(e,t){const s=Wa("MODE",t),n=Wa(e,t);return s===3?n===!0:n!==!1}function kn(e,t,s,...n){return ys(e,t)}function Yr(e){throw e}function ju(e){}function Se(e,t,s,n){const i=`https://vuejs.org/error-reference/#compiler-${e}`,o=new SyntaxError(String(i));return o.code=e,o.loc=t,o}const Qe=e=>e.type===4&&e.isStatic;function Du(e){switch(e){case"Teleport":case"teleport":return gn;case"Suspense":case"suspense":return Mr;case"KeepAlive":case"keep-alive":return ki;case"BaseTransition":case"base-transition":return Pu}}const Um=/^\d|[^\$\w\xA0-\uFFFF]/,Jr=e=>!Um.test(e),Vm=/[A-Za-z_$\xA0-\uFFFF]/,zm=/[\.\?\w$\xA0-\uFFFF]/,Hm=/\s+[.[]\s*|\s*[.[]\s+/g,Fu=e=>e.type===4?e.content:e.loc.source,$m=e=>{const t=Fu(e).trim().replace(Hm,a=>a.trim());let s=0,n=[],i=0,o=0,r=null;for(let a=0;a<t.length;a++){const l=t.charAt(a);switch(s){case 0:if(l==="[")n.push(s),s=1,i++;else if(l==="(")n.push(s),s=2,o++;else if(!(a===0?Vm:zm).test(l))return!1;break;case 1:l==="'"||l==='"'||l==="`"?(n.push(s),s=3,r=l):l==="["?i++:l==="]"&&(--i||(s=n.pop()));break;case 2:if(l==="'"||l==='"'||l==="`")n.push(s),s=3,r=l;else if(l==="(")o++;else if(l===")"){if(a===t.length-1)return!1;--o||(s=n.pop())}break;case 3:l===r&&(s=n.pop(),r=null);break}}return!i&&!o},qu=$m,Bm=/^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,Km=e=>Bm.test(Fu(e)),Wm=Km;function ft(e,t,s=!1){for(let n=0;n<e.props.length;n++){const i=e.props[n];if(i.type===7&&(s||i.exp)&&(te(t)?i.name===t:t.test(i.name)))return i}}function ro(e,t,s=!1,n=!1){for(let i=0;i<e.props.length;i++){const o=e.props[i];if(o.type===6){if(s)continue;if(o.name===t&&(o.value||n))return o}else if(o.name==="bind"&&(o.exp||n)&&us(o.arg,t))return o}}function us(e,t){return!!(e&&Qe(e)&&e.content===t)}function Gm(e){return e.props.some(t=>t.type===7&&t.name==="bind"&&(!t.arg||t.arg.type!==4||!t.arg.isStatic))}function Co(e){return e.type===5||e.type===2}function Xm(e){return e.type===7&&e.name==="slot"}function ji(e){return e.type===1&&e.tagType===3}function Di(e){return e.type===1&&e.tagType===2}const Ym=new Set([Rn,Bn]);function Uu(e,t=[]){if(e&&!te(e)&&e.type===14){const s=e.callee;if(!te(s)&&Ym.has(s))return Uu(e.arguments[0],t.concat(e))}return[e,t]}function Fi(e,t,s){let n,i=e.type===13?e.props:e.arguments[2],o=[],r;if(i&&!te(i)&&i.type===14){const a=Uu(i);i=a[0],o=a[1],r=o[o.length-1]}if(i==null||te(i))n=dt([t]);else if(i.type===14){const a=i.arguments[0];!te(a)&&a.type===15?Ga(t,a)||a.properties.unshift(t):i.callee===Kr?n=Ae(s.helper(Oi),[dt([t]),i]):i.arguments.unshift(dt([t])),!n&&(n=i)}else i.type===15?(Ga(t,i)||i.properties.unshift(t),n=i):(n=Ae(s.helper(Oi),[dt([t]),i]),r&&r.callee===Bn&&(r=o[o.length-2]));e.type===13?r?r.arguments[0]=n:e.props=n:r?r.arguments[0]=n:e.arguments[2]=n}function Ga(e,t){let s=!1;if(e.key.type===4){const n=e.key.content;s=t.properties.some(i=>i.key.type===4&&i.key.content===n)}return s}function On(e,t){return`_${t}_${e.replace(/[^\w]/g,(s,n)=>s==="-"?"_":e.charCodeAt(n).toString())}`}function Jm(e){return e.type===14&&e.callee===Gr?e.arguments[1].returns:e}const Qm=/([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/,Vu={parseMode:"base",ns:0,delimiters:["{{","}}"],getNamespace:()=>0,isVoidTag:rn,isPreTag:rn,isIgnoreNewlineTag:rn,isCustomElement:rn,onError:Yr,onWarn:ju,comments:!1,prefixIdentifiers:!1};let ce=Vu,Mn=null,jt="",je=null,re=null,Ge="",Rt=-1,cs=-1,Qr=0,Gt=!1,Jo=null;const be=[],Ee=new qm(be,{onerr:It,ontext(e,t){ii(ke(e,t),e,t)},ontextentity(e,t,s){ii(e,t,s)},oninterpolation(e,t){if(Gt)return ii(ke(e,t),e,t);let s=e+Ee.delimiterOpen.length,n=t-Ee.delimiterClose.length;for(;nt(jt.charCodeAt(s));)s++;for(;nt(jt.charCodeAt(n-1));)n--;let i=ke(s,n);i.includes("&")&&(i=ce.decodeEntities(i,!1)),Qo({type:5,content:di(i,!1,Ce(s,n)),loc:Ce(e,t)})},onopentagname(e,t){const s=ke(e,t);je={type:1,tag:s,ns:ce.getNamespace(s,be[0],ce.ns),tagType:0,props:[],children:[],loc:Ce(e-1,t),codegenNode:void 0}},onopentagend(e){Ya(e)},onclosetag(e,t){const s=ke(e,t);if(!ce.isVoidTag(s)){let n=!1;for(let i=0;i<be.length;i++)if(be[i].tag.toLowerCase()===s.toLowerCase()){n=!0,i>0&&It(24,be[0].loc.start.offset);for(let r=0;r<=i;r++){const a=be.shift();fi(a,t,r<i)}break}n||It(23,zu(e,60))}},onselfclosingtag(e){const t=je.tag;je.isSelfClosing=!0,Ya(e),be[0]&&be[0].tag===t&&fi(be.shift(),e)},onattribname(e,t){re={type:6,name:ke(e,t),nameLoc:Ce(e,t),value:void 0,loc:Ce(e)}},ondirname(e,t){const s=ke(e,t),n=s==="."||s===":"?"bind":s==="@"?"on":s==="#"?"slot":s.slice(2);if(!Gt&&n===""&&It(26,e),Gt||n==="")re={type:6,name:s,nameLoc:Ce(e,t),value:void 0,loc:Ce(e)};else if(re={type:7,name:n,rawName:s,exp:void 0,arg:void 0,modifiers:s==="."?[se("prop")]:[],loc:Ce(e)},n==="pre"){Gt=Ee.inVPre=!0,Jo=je;const i=je.props;for(let o=0;o<i.length;o++)i[o].type===7&&(i[o]=cg(i[o]))}},ondirarg(e,t){if(e===t)return;const s=ke(e,t);if(Gt)re.name+=s,fs(re.nameLoc,t);else{const n=s[0]!=="[";re.arg=di(n?s:s.slice(1,-1),n,Ce(e,t),n?3:0)}},ondirmodifier(e,t){const s=ke(e,t);if(Gt)re.name+="."+s,fs(re.nameLoc,t);else if(re.name==="slot"){const n=re.arg;n&&(n.content+="."+s,fs(n.loc,t))}else{const n=se(s,!0,Ce(e,t));re.modifiers.push(n)}},onattribdata(e,t){Ge+=ke(e,t),Rt<0&&(Rt=e),cs=t},onattribentity(e,t,s){Ge+=e,Rt<0&&(Rt=t),cs=s},onattribnameend(e){const t=re.loc.start.offset,s=ke(t,e);re.type===7&&(re.rawName=s),je.props.some(n=>(n.type===7?n.rawName:n.name)===s)&&It(2,t)},onattribend(e,t){if(je&&re){if(fs(re.loc,t),e!==0)if(Ge.includes("&")&&(Ge=ce.decodeEntities(Ge,!0)),re.type===6)re.name==="class"&&(Ge=$u(Ge).trim()),e===1&&!Ge&&It(13,t),re.value={type:2,content:Ge,loc:e===1?Ce(Rt,cs):Ce(Rt-1,cs+1)},Ee.inSFCRoot&&je.tag==="template"&&re.name==="lang"&&Ge&&Ge!=="html"&&Ee.enterRCDATA(Li("</template"),0);else{let s=0;re.exp=di(Ge,!1,Ce(Rt,cs),0,s),re.name==="for"&&(re.forParseResult=eg(re.exp));let n=-1;re.name==="bind"&&(n=re.modifiers.findIndex(i=>i.content==="sync"))>-1&&kn("COMPILER_V_BIND_SYNC",ce,re.loc,re.rawName)&&(re.name="model",re.modifiers.splice(n,1))}(re.type!==7||re.name!=="pre")&&je.props.push(re)}Ge="",Rt=cs=-1},oncomment(e,t){ce.comments&&Qo({type:3,content:ke(e,t),loc:Ce(e-4,t+3)})},onend(){const e=jt.length;for(let t=0;t<be.length;t++)fi(be[t],e-1),It(24,be[t].loc.start.offset)},oncdata(e,t){be[0].ns!==0?ii(ke(e,t),e,t):It(1,e-9)},onprocessinginstruction(e){(be[0]?be[0].ns:ce.ns)===0&&It(21,e-1)}}),Xa=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Zm=/^\(|\)$/g;function eg(e){const t=e.loc,s=e.content,n=s.match(Qm);if(!n)return;const[,i,o]=n,r=(u,d,p=!1)=>{const b=t.start.offset+d,y=b+u.length;return di(u,!1,Ce(b,y),0,p?1:0)},a={source:r(o.trim(),s.indexOf(o,i.length)),value:void 0,key:void 0,index:void 0,finalized:!1};let l=i.trim().replace(Zm,"").trim();const c=i.indexOf(l),f=l.match(Xa);if(f){l=l.replace(Xa,"").trim();const u=f[1].trim();let d;if(u&&(d=s.indexOf(u,c+l.length),a.key=r(u,d,!0)),f[2]){const p=f[2].trim();p&&(a.index=r(p,s.indexOf(p,a.key?d+u.length:c+l.length),!0))}}return l&&(a.value=r(l,c,!0)),a}function ke(e,t){return jt.slice(e,t)}function Ya(e){Ee.inSFCRoot&&(je.innerLoc=Ce(e+1,e+1)),Qo(je);const{tag:t,ns:s}=je;s===0&&ce.isPreTag(t)&&Qr++,ce.isVoidTag(t)?fi(je,e):(be.unshift(je),(s===1||s===2)&&(Ee.inXML=!0)),je=null}function ii(e,t,s){{const o=be[0]&&be[0].tag;o!=="script"&&o!=="style"&&e.includes("&")&&(e=ce.decodeEntities(e,!1))}const n=be[0]||Mn,i=n.children[n.children.length-1];i&&i.type===2?(i.content+=e,fs(i.loc,s)):n.children.push({type:2,content:e,loc:Ce(t,s)})}function fi(e,t,s=!1){s?fs(e.loc,zu(t,60)):fs(e.loc,tg(t,62)+1),Ee.inSFCRoot&&(e.children.length?e.innerLoc.end=ie({},e.children[e.children.length-1].loc.end):e.innerLoc.end=ie({},e.innerLoc.start),e.innerLoc.source=ke(e.innerLoc.start.offset,e.innerLoc.end.offset));const{tag:n,ns:i,children:o}=e;if(Gt||(n==="slot"?e.tagType=2:Ja(e)?e.tagType=3:ng(e)&&(e.tagType=1)),Ee.inRCDATA||(e.children=Hu(o)),i===0&&ce.isIgnoreNewlineTag(n)){const r=o[0];r&&r.type===2&&(r.content=r.content.replace(/^\r?\n/,""))}i===0&&ce.isPreTag(n)&&Qr--,Jo===e&&(Gt=Ee.inVPre=!1,Jo=null),Ee.inXML&&(be[0]?be[0].ns:ce.ns)===0&&(Ee.inXML=!1);{const r=e.props;if(!Ee.inSFCRoot&&ys("COMPILER_NATIVE_TEMPLATE",ce)&&e.tag==="template"&&!Ja(e)){const l=be[0]||Mn,c=l.children.indexOf(e);l.children.splice(c,1,...e.children)}const a=r.find(l=>l.type===6&&l.name==="inline-template");a&&kn("COMPILER_INLINE_TEMPLATE",ce,a.loc)&&e.children.length&&(a.value={type:2,content:ke(e.children[0].loc.start.offset,e.children[e.children.length-1].loc.end.offset),loc:a.loc})}}function tg(e,t){let s=e;for(;jt.charCodeAt(s)!==t&&s<jt.length-1;)s++;return s}function zu(e,t){let s=e;for(;jt.charCodeAt(s)!==t&&s>=0;)s--;return s}const sg=new Set(["if","else","else-if","for","slot"]);function Ja({tag:e,props:t}){if(e==="template"){for(let s=0;s<t.length;s++)if(t[s].type===7&&sg.has(t[s].name))return!0}return!1}function ng({tag:e,props:t}){if(ce.isCustomElement(e))return!1;if(e==="component"||ig(e.charCodeAt(0))||Du(e)||ce.isBuiltInComponent&&ce.isBuiltInComponent(e)||ce.isNativeTag&&!ce.isNativeTag(e))return!0;for(let s=0;s<t.length;s++){const n=t[s];if(n.type===6){if(n.name==="is"&&n.value){if(n.value.content.startsWith("vue:"))return!0;if(kn("COMPILER_IS_ON_ELEMENT",ce,n.loc))return!0}}else if(n.name==="bind"&&us(n.arg,"is")&&kn("COMPILER_IS_ON_ELEMENT",ce,n.loc))return!0}return!1}function ig(e){return e>64&&e<91}const og=/\r\n/g;function Hu(e,t){const s=ce.whitespace!=="preserve";let n=!1;for(let i=0;i<e.length;i++){const o=e[i];if(o.type===2)if(Qr)o.content=o.content.replace(og,`
`);else if(rg(o.content)){const r=e[i-1]&&e[i-1].type,a=e[i+1]&&e[i+1].type;!r||!a||s&&(r===3&&(a===3||a===1)||r===1&&(a===3||a===1&&ag(o.content)))?(n=!0,e[i]=null):o.content=" "}else s&&(o.content=$u(o.content))}return n?e.filter(Boolean):e}function rg(e){for(let t=0;t<e.length;t++)if(!nt(e.charCodeAt(t)))return!1;return!0}function ag(e){for(let t=0;t<e.length;t++){const s=e.charCodeAt(t);if(s===10||s===13)return!0}return!1}function $u(e){let t="",s=!1;for(let n=0;n<e.length;n++)nt(e.charCodeAt(n))?s||(t+=" ",s=!0):(t+=e[n],s=!1);return t}function Qo(e){(be[0]||Mn).children.push(e)}function Ce(e,t){return{start:Ee.getPos(e),end:t==null?t:Ee.getPos(t),source:t==null?t:ke(e,t)}}function lg(e){return Ce(e.start.offset,e.end.offset)}function fs(e,t){e.end=Ee.getPos(t),e.source=ke(e.start.offset,t)}function cg(e){const t={type:6,name:e.rawName,nameLoc:Ce(e.loc.start.offset,e.loc.start.offset+e.rawName.length),value:void 0,loc:e.loc};if(e.exp){const s=e.exp.loc;s.end.offset<e.loc.end.offset&&(s.start.offset--,s.start.column--,s.end.offset++,s.end.column++),t.value={type:2,content:e.exp.content,loc:s}}return t}function di(e,t=!1,s,n=0,i=0){return se(e,t,s,n)}function It(e,t,s){ce.onError(Se(e,Ce(t,t)))}function ug(){Ee.reset(),je=null,re=null,Ge="",Rt=-1,cs=-1,be.length=0}function fg(e,t){if(ug(),jt=e,ce=ie({},Vu),t){let i;for(i in t)t[i]!=null&&(ce[i]=t[i])}Ee.mode=ce.parseMode==="html"?1:ce.parseMode==="sfc"?2:0,Ee.inXML=ce.ns===1||ce.ns===2;const s=t&&t.delimiters;s&&(Ee.delimiterOpen=Li(s[0]),Ee.delimiterClose=Li(s[1]));const n=Mn=jm([],e);return Ee.parse(jt),n.loc=Ce(0,e.length),n.children=Hu(n.children),Mn=null,n}function dg(e,t){pi(e,void 0,t,Bu(e,e.children[0]))}function Bu(e,t){const{children:s}=e;return s.length===1&&t.type===1&&!Di(t)}function pi(e,t,s,n=!1,i=!1){const{children:o}=e,r=[];for(let f=0;f<o.length;f++){const u=o[f];if(u.type===1&&u.tagType===0){const d=n?0:ot(u,s);if(d>0){if(d>=2){u.codegenNode.patchFlag=-1,r.push(u);continue}}else{const p=u.codegenNode;if(p.type===13){const b=p.patchFlag;if((b===void 0||b===512||b===1)&&Wu(u,s)>=2){const y=Gu(u);y&&(p.props=s.hoist(y))}p.dynamicProps&&(p.dynamicProps=s.hoist(p.dynamicProps))}}}else if(u.type===12&&(n?0:ot(u,s))>=2){r.push(u);continue}if(u.type===1){const d=u.tagType===1;d&&s.scopes.vSlot++,pi(u,e,s,!1,i),d&&s.scopes.vSlot--}else if(u.type===11)pi(u,e,s,u.children.length===1,!0);else if(u.type===9)for(let d=0;d<u.branches.length;d++)pi(u.branches[d],e,s,u.branches[d].children.length===1,i)}let a=!1;if(r.length===o.length&&e.type===1){if(e.tagType===0&&e.codegenNode&&e.codegenNode.type===13&&z(e.codegenNode.children))e.codegenNode.children=l(gs(e.codegenNode.children)),a=!0;else if(e.tagType===1&&e.codegenNode&&e.codegenNode.type===13&&e.codegenNode.children&&!z(e.codegenNode.children)&&e.codegenNode.children.type===15){const f=c(e.codegenNode,"default");f&&(f.returns=l(gs(f.returns)),a=!0)}else if(e.tagType===3&&t&&t.type===1&&t.tagType===1&&t.codegenNode&&t.codegenNode.type===13&&t.codegenNode.children&&!z(t.codegenNode.children)&&t.codegenNode.children.type===15){const f=ft(e,"slot",!0),u=f&&f.arg&&c(t.codegenNode,f.arg);u&&(u.returns=l(gs(u.returns)),a=!0)}}if(!a)for(const f of r)f.codegenNode=s.cache(f.codegenNode);function l(f){const u=s.cache(f);return i&&s.hmr&&(u.needArraySpread=!0),u}function c(f,u){if(f.children&&!z(f.children)&&f.children.type===15){const d=f.children.properties.find(p=>p.key===u||p.key.content===u);return d&&d.value}}r.length&&s.transformHoist&&s.transformHoist(o,s,e)}function ot(e,t){const{constantCache:s}=t;switch(e.type){case 1:if(e.tagType!==0)return 0;const n=s.get(e);if(n!==void 0)return n;const i=e.codegenNode;if(i.type!==13||i.isBlock&&e.tag!=="svg"&&e.tag!=="foreignObject"&&e.tag!=="math")return 0;if(i.patchFlag===void 0){let r=3;const a=Wu(e,t);if(a===0)return s.set(e,0),0;a<r&&(r=a);for(let l=0;l<e.children.length;l++){const c=ot(e.children[l],t);if(c===0)return s.set(e,0),0;c<r&&(r=c)}if(r>1)for(let l=0;l<e.props.length;l++){const c=e.props[l];if(c.type===7&&c.name==="bind"&&c.exp){const f=ot(c.exp,t);if(f===0)return s.set(e,0),0;f<r&&(r=f)}}if(i.isBlock){for(let l=0;l<e.props.length;l++)if(e.props[l].type===7)return s.set(e,0),0;t.removeHelper(Ss),t.removeHelper(Ws(t.inSSR,i.isComponent)),i.isBlock=!1,t.helper(Ks(t.inSSR,i.isComponent))}return s.set(e,r),r}else return s.set(e,0),0;case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return ot(e.content,t);case 4:return e.constType;case 8:let o=3;for(let r=0;r<e.children.length;r++){const a=e.children[r];if(te(a)||Ze(a))continue;const l=ot(a,t);if(l===0)return 0;l<o&&(o=l)}return o;case 20:return 2;default:return 0}}const pg=new Set([$r,Br,Rn,Bn]);function Ku(e,t){if(e.type===14&&!te(e.callee)&&pg.has(e.callee)){const s=e.arguments[0];if(s.type===4)return ot(s,t);if(s.type===14)return Ku(s,t)}return 0}function Wu(e,t){let s=3;const n=Gu(e);if(n&&n.type===15){const{properties:i}=n;for(let o=0;o<i.length;o++){const{key:r,value:a}=i[o],l=ot(r,t);if(l===0)return l;l<s&&(s=l);let c;if(a.type===4?c=ot(a,t):a.type===14?c=Ku(a,t):c=0,c===0)return c;c<s&&(s=c)}}return s}function Gu(e){const t=e.codegenNode;if(t.type===13)return t.props}function hg(e,{filename:t="",prefixIdentifiers:s=!1,hoistStatic:n=!1,hmr:i=!1,cacheHandlers:o=!1,nodeTransforms:r=[],directiveTransforms:a={},transformHoist:l=null,isBuiltInComponent:c=Oe,isCustomElement:f=Oe,expressionPlugins:u=[],scopeId:d=null,slotted:p=!0,ssr:b=!1,inSSR:y=!1,ssrCssVars:R="",bindingMetadata:T=ne,inline:S=!1,isTS:g=!1,onError:v=Yr,onWarn:E=ju,compatConfig:P}){const L=t.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),k={filename:t,selfName:L&&Cs(ye(L[1])),prefixIdentifiers:s,hoistStatic:n,hmr:i,cacheHandlers:o,nodeTransforms:r,directiveTransforms:a,transformHoist:l,isBuiltInComponent:c,isCustomElement:f,expressionPlugins:u,scopeId:d,slotted:p,ssr:b,inSSR:y,ssrCssVars:R,bindingMetadata:T,inline:S,isTS:g,onError:v,onWarn:E,compatConfig:P,root:e,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],cached:[],constantCache:new WeakMap,temps:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,grandParent:null,currentNode:e,childIndex:0,inVOnce:!1,helper(C){const w=k.helpers.get(C)||0;return k.helpers.set(C,w+1),C},removeHelper(C){const w=k.helpers.get(C);if(w){const j=w-1;j?k.helpers.set(C,j):k.helpers.delete(C)}},helperString(C){return`_${$s[k.helper(C)]}`},replaceNode(C){k.parent.children[k.childIndex]=k.currentNode=C},removeNode(C){const w=k.parent.children,j=C?w.indexOf(C):k.currentNode?k.childIndex:-1;!C||C===k.currentNode?(k.currentNode=null,k.onNodeRemoved()):k.childIndex>j&&(k.childIndex--,k.onNodeRemoved()),k.parent.children.splice(j,1)},onNodeRemoved:Oe,addIdentifiers(C){},removeIdentifiers(C){},hoist(C){te(C)&&(C=se(C)),k.hoists.push(C);const w=se(`_hoisted_${k.hoists.length}`,!1,C.loc,2);return w.hoisted=C,w},cache(C,w=!1,j=!1){const x=Dm(k.cached.length,C,w,j);return k.cached.push(x),x}};return k.filters=new Set,k}function mg(e,t){const s=hg(e,t);ao(e,s),t.hoistStatic&&dg(e,s),t.ssr||gg(e,s),e.helpers=new Set([...s.helpers.keys()]),e.components=[...s.components],e.directives=[...s.directives],e.imports=s.imports,e.hoists=s.hoists,e.temps=s.temps,e.cached=s.cached,e.transformed=!0,e.filters=[...s.filters]}function gg(e,t){const{helper:s}=t,{children:n}=e;if(n.length===1){const i=n[0];if(Bu(e,i)&&i.codegenNode){const o=i.codegenNode;o.type===13&&Xr(o,t),e.codegenNode=o}else e.codegenNode=i}else if(n.length>1){let i=64;e.codegenNode=Nn(t,s(Pn),void 0,e.children,i,void 0,void 0,!0,void 0,!1)}}function yg(e,t){let s=0;const n=()=>{s--};for(;s<e.children.length;s++){const i=e.children[s];te(i)||(t.grandParent=t.parent,t.parent=e,t.childIndex=s,t.onNodeRemoved=n,ao(i,t))}}function ao(e,t){t.currentNode=e;const{nodeTransforms:s}=t,n=[];for(let o=0;o<s.length;o++){const r=s[o](e,t);if(r&&(z(r)?n.push(...r):n.push(r)),t.currentNode)e=t.currentNode;else return}switch(e.type){case 3:t.ssr||t.helper($n);break;case 5:t.ssr||t.helper(oo);break;case 9:for(let o=0;o<e.branches.length;o++)ao(e.branches[o],t);break;case 10:case 11:case 1:case 0:yg(e,t);break}t.currentNode=e;let i=n.length;for(;i--;)n[i]()}function Xu(e,t){const s=te(e)?n=>n===e:n=>e.test(n);return(n,i)=>{if(n.type===1){const{props:o}=n;if(n.tagType===3&&o.some(Xm))return;const r=[];for(let a=0;a<o.length;a++){const l=o[a];if(l.type===7&&s(l.name)){o.splice(a,1),a--;const c=t(n,l,i);c&&r.push(c)}}return r}}}const lo="/*@__PURE__*/",Yu=e=>`${$s[e]}: _${$s[e]}`;function vg(e,{mode:t="function",prefixIdentifiers:s=t==="module",sourceMap:n=!1,filename:i="template.vue.html",scopeId:o=null,optimizeImports:r=!1,runtimeGlobalName:a="Vue",runtimeModuleName:l="vue",ssrRuntimeModuleName:c="vue/server-renderer",ssr:f=!1,isTS:u=!1,inSSR:d=!1}){const p={mode:t,prefixIdentifiers:s,sourceMap:n,filename:i,scopeId:o,optimizeImports:r,runtimeGlobalName:a,runtimeModuleName:l,ssrRuntimeModuleName:c,ssr:f,isTS:u,inSSR:d,source:e.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(y){return`_${$s[y]}`},push(y,R=-2,T){p.code+=y},indent(){b(++p.indentLevel)},deindent(y=!1){y?--p.indentLevel:b(--p.indentLevel)},newline(){b(p.indentLevel)}};function b(y){p.push(`
`+"  ".repeat(y),0)}return p}function bg(e,t={}){const s=vg(e,t);t.onContextCreated&&t.onContextCreated(s);const{mode:n,push:i,prefixIdentifiers:o,indent:r,deindent:a,newline:l,scopeId:c,ssr:f}=s,u=Array.from(e.helpers),d=u.length>0,p=!o&&n!=="module";Sg(e,s);const y=f?"ssrRender":"render",T=(f?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(i(`function ${y}(${T}) {`),r(),p&&(i("with (_ctx) {"),r(),d&&(i(`const { ${u.map(Yu).join(", ")} } = _Vue
`,-1),l())),e.components.length&&(xo(e.components,"component",s),(e.directives.length||e.temps>0)&&l()),e.directives.length&&(xo(e.directives,"directive",s),e.temps>0&&l()),e.filters&&e.filters.length&&(l(),xo(e.filters,"filter",s),l()),e.temps>0){i("let ");for(let S=0;S<e.temps;S++)i(`${S>0?", ":""}_temp${S}`)}return(e.components.length||e.directives.length||e.temps)&&(i(`
`,0),l()),f||i("return "),e.codegenNode?Ue(e.codegenNode,s):i("null"),p&&(a(),i("}")),a(),i("}"),{ast:e,code:s.code,preamble:"",map:s.map?s.map.toJSON():void 0}}function Sg(e,t){const{ssr:s,prefixIdentifiers:n,push:i,newline:o,runtimeModuleName:r,runtimeGlobalName:a,ssrRuntimeModuleName:l}=t,c=a,f=Array.from(e.helpers);if(f.length>0&&(i(`const _Vue = ${c}
`,-1),e.hoists.length)){const u=[Lr,jr,$n,Dr,ku].filter(d=>f.includes(d)).map(Yu).join(", ");i(`const { ${u} } = _Vue
`,-1)}_g(e.hoists,t),o(),i("return ")}function xo(e,t,{helper:s,push:n,newline:i,isTS:o}){const r=s(t==="filter"?Vr:t==="component"?Fr:Ur);for(let a=0;a<e.length;a++){let l=e[a];const c=l.endsWith("__self");c&&(l=l.slice(0,-6)),n(`const ${On(l,t)} = ${r}(${JSON.stringify(l)}${c?", true":""})${o?"!":""}`),a<e.length-1&&i()}}function _g(e,t){if(!e.length)return;t.pure=!0;const{push:s,newline:n}=t;n();for(let i=0;i<e.length;i++){const o=e[i];o&&(s(`const _hoisted_${i+1} = `),Ue(o,t),n())}t.pure=!1}function Zr(e,t){const s=e.length>3||!1;t.push("["),s&&t.indent(),Kn(e,t,s),s&&t.deindent(),t.push("]")}function Kn(e,t,s=!1,n=!0){const{push:i,newline:o}=t;for(let r=0;r<e.length;r++){const a=e[r];te(a)?i(a,-3):z(a)?Zr(a,t):Ue(a,t),r<e.length-1&&(s?(n&&i(","),o()):n&&i(", "))}}function Ue(e,t){if(te(e)){t.push(e,-3);return}if(Ze(e)){t.push(t.helper(e));return}switch(e.type){case 1:case 9:case 11:Ue(e.codegenNode,t);break;case 2:Eg(e,t);break;case 4:Ju(e,t);break;case 5:Cg(e,t);break;case 12:Ue(e.codegenNode,t);break;case 8:Qu(e,t);break;case 3:wg(e,t);break;case 13:Tg(e,t);break;case 14:Ig(e,t);break;case 15:Pg(e,t);break;case 17:Rg(e,t);break;case 18:Ng(e,t);break;case 19:kg(e,t);break;case 20:Og(e,t);break;case 21:Kn(e.body,t,!0,!1);break}}function Eg(e,t){t.push(JSON.stringify(e.content),-3,e)}function Ju(e,t){const{content:s,isStatic:n}=e;t.push(n?JSON.stringify(s):s,-3,e)}function Cg(e,t){const{push:s,helper:n,pure:i}=t;i&&s(lo),s(`${n(oo)}(`),Ue(e.content,t),s(")")}function Qu(e,t){for(let s=0;s<e.children.length;s++){const n=e.children[s];te(n)?t.push(n,-3):Ue(n,t)}}function xg(e,t){const{push:s}=t;if(e.type===8)s("["),Qu(e,t),s("]");else if(e.isStatic){const n=Jr(e.content)?e.content:JSON.stringify(e.content);s(n,-2,e)}else s(`[${e.content}]`,-3,e)}function wg(e,t){const{push:s,helper:n,pure:i}=t;i&&s(lo),s(`${n($n)}(${JSON.stringify(e.content)})`,-3,e)}function Tg(e,t){const{push:s,helper:n,pure:i}=t,{tag:o,props:r,children:a,patchFlag:l,dynamicProps:c,directives:f,isBlock:u,disableTracking:d,isComponent:p}=e;let b;l&&(b=String(l)),f&&s(n(zr)+"("),u&&s(`(${n(Ss)}(${d?"true":""}), `),i&&s(lo);const y=u?Ws(t.inSSR,p):Ks(t.inSSR,p);s(n(y)+"(",-2,e),Kn(Ag([o,r,a,b,c]),t),s(")"),u&&s(")"),f&&(s(", "),Ue(f,t),s(")"))}function Ag(e){let t=e.length;for(;t--&&e[t]==null;);return e.slice(0,t+1).map(s=>s||"null")}function Ig(e,t){const{push:s,helper:n,pure:i}=t,o=te(e.callee)?e.callee:n(e.callee);i&&s(lo),s(o+"(",-2,e),Kn(e.arguments,t),s(")")}function Pg(e,t){const{push:s,indent:n,deindent:i,newline:o}=t,{properties:r}=e;if(!r.length){s("{}",-2,e);return}const a=r.length>1||!1;s(a?"{":"{ "),a&&n();for(let l=0;l<r.length;l++){const{key:c,value:f}=r[l];xg(c,t),s(": "),Ue(f,t),l<r.length-1&&(s(","),o())}a&&i(),s(a?"}":" }")}function Rg(e,t){Zr(e.elements,t)}function Ng(e,t){const{push:s,indent:n,deindent:i}=t,{params:o,returns:r,body:a,newline:l,isSlot:c}=e;c&&s(`_${$s[Wr]}(`),s("(",-2,e),z(o)?Kn(o,t):o&&Ue(o,t),s(") => "),(l||a)&&(s("{"),n()),r?(l&&s("return "),z(r)?Zr(r,t):Ue(r,t)):a&&Ue(a,t),(l||a)&&(i(),s("}")),c&&(e.isNonScopedSlot&&s(", undefined, true"),s(")"))}function kg(e,t){const{test:s,consequent:n,alternate:i,newline:o}=e,{push:r,indent:a,deindent:l,newline:c}=t;if(s.type===4){const u=!Jr(s.content);u&&r("("),Ju(s,t),u&&r(")")}else r("("),Ue(s,t),r(")");o&&a(),t.indentLevel++,o||r(" "),r("? "),Ue(n,t),t.indentLevel--,o&&c(),o||r(" "),r(": ");const f=i.type===19;f||t.indentLevel++,Ue(i,t),f||t.indentLevel--,o&&l(!0)}function Og(e,t){const{push:s,helper:n,indent:i,deindent:o,newline:r}=t,{needPauseTracking:a,needArraySpread:l}=e;l&&s("[...("),s(`_cache[${e.index}] || (`),a&&(i(),s(`${n(Mi)}(-1`),e.inVOnce&&s(", true"),s("),"),r(),s("(")),s(`_cache[${e.index}] = `),Ue(e.value,t),a&&(s(`).cacheIndex = ${e.index},`),r(),s(`${n(Mi)}(1),`),r(),s(`_cache[${e.index}]`),o()),s(")"),l&&s(")]")}new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");const Mg=Xu(/^(if|else|else-if)$/,(e,t,s)=>Lg(e,t,s,(n,i,o)=>{const r=s.parent.children;let a=r.indexOf(n),l=0;for(;a-->=0;){const c=r[a];c&&c.type===9&&(l+=c.branches.length)}return()=>{if(o)n.codegenNode=Za(i,l,s);else{const c=jg(n.codegenNode);c.alternate=Za(i,l+n.branches.length-1,s)}}}));function Lg(e,t,s,n){if(t.name!=="else"&&(!t.exp||!t.exp.content.trim())){const i=t.exp?t.exp.loc:e.loc;s.onError(Se(28,t.loc)),t.exp=se("true",!1,i)}if(t.name==="if"){const i=Qa(e,t),o={type:9,loc:lg(e.loc),branches:[i]};if(s.replaceNode(o),n)return n(o,i,!0)}else{const i=s.parent.children;let o=i.indexOf(e);for(;o-->=-1;){const r=i[o];if(r&&r.type===3){s.removeNode(r);continue}if(r&&r.type===2&&!r.content.trim().length){s.removeNode(r);continue}if(r&&r.type===9){t.name==="else-if"&&r.branches[r.branches.length-1].condition===void 0&&s.onError(Se(30,e.loc)),s.removeNode();const a=Qa(e,t);r.branches.push(a);const l=n&&n(r,a,!1);ao(a,s),l&&l(),s.currentNode=null}else s.onError(Se(30,e.loc));break}}}function Qa(e,t){const s=e.tagType===3;return{type:10,loc:e.loc,condition:t.name==="else"?void 0:t.exp,children:s&&!ft(e,"for")?e.children:[e],userKey:ro(e,"key"),isTemplateIf:s}}function Za(e,t,s){return e.condition?Yo(e.condition,el(e,t,s),Ae(s.helper($n),['""',"true"])):el(e,t,s)}function el(e,t,s){const{helper:n}=s,i=xe("key",se(`${t}`,!1,lt,2)),{children:o}=e,r=o[0];if(o.length!==1||r.type!==1)if(o.length===1&&r.type===11){const l=r.codegenNode;return Fi(l,i,s),l}else return Nn(s,n(Pn),dt([i]),o,64,void 0,void 0,!0,!1,!1,e.loc);else{const l=r.codegenNode,c=Jm(l);return c.type===13&&Xr(c,s),Fi(c,i,s),l}}function jg(e){for(;;)if(e.type===19)if(e.alternate.type===19)e=e.alternate;else return e;else e.type===20&&(e=e.value)}const Dg=(e,t,s)=>{const{modifiers:n,loc:i}=e,o=e.arg;let{exp:r}=e;if(r&&r.type===4&&!r.content.trim()&&(r=void 0),!r){if(o.type!==4||!o.isStatic)return s.onError(Se(52,o.loc)),{props:[xe(o,se("",!0,i))]};Zu(e),r=e.exp}return o.type!==4?(o.children.unshift("("),o.children.push(') || ""')):o.isStatic||(o.content=`${o.content} || ""`),n.some(a=>a.content==="camel")&&(o.type===4?o.isStatic?o.content=ye(o.content):o.content=`${s.helperString(Go)}(${o.content})`:(o.children.unshift(`${s.helperString(Go)}(`),o.children.push(")"))),s.inSSR||(n.some(a=>a.content==="prop")&&tl(o,"."),n.some(a=>a.content==="attr")&&tl(o,"^")),{props:[xe(o,r)]}},Zu=(e,t)=>{const s=e.arg,n=ye(s.content);e.exp=se(n,!1,s.loc)},tl=(e,t)=>{e.type===4?e.isStatic?e.content=t+e.content:e.content=`\`${t}\${${e.content}}\``:(e.children.unshift(`'${t}' + (`),e.children.push(")"))},Fg=Xu("for",(e,t,s)=>{const{helper:n,removeHelper:i}=s;return qg(e,t,s,o=>{const r=Ae(n(Hr),[o.source]),a=ji(e),l=ft(e,"memo"),c=ro(e,"key",!1,!0);c&&c.type===7&&!c.exp&&Zu(c);let u=c&&(c.type===6?c.value?se(c.value.content,!0):void 0:c.exp);const d=c&&u?xe("key",u):null,p=o.source.type===4&&o.source.constType>0,b=p?64:c?128:256;return o.codegenNode=Nn(s,n(Pn),void 0,r,b,void 0,void 0,!0,!p,!1,e.loc),()=>{let y;const{children:R}=o,T=R.length!==1||R[0].type!==1,S=Di(e)?e:a&&e.children.length===1&&Di(e.children[0])?e.children[0]:null;if(S?(y=S.codegenNode,a&&d&&Fi(y,d,s)):T?y=Nn(s,n(Pn),d?dt([d]):void 0,e.children,64,void 0,void 0,!0,void 0,!1):(y=R[0].codegenNode,a&&d&&Fi(y,d,s),y.isBlock!==!p&&(y.isBlock?(i(Ss),i(Ws(s.inSSR,y.isComponent))):i(Ks(s.inSSR,y.isComponent))),y.isBlock=!p,y.isBlock?(n(Ss),n(Ws(s.inSSR,y.isComponent))):n(Ks(s.inSSR,y.isComponent))),l){const g=Bs(Zo(o.parseResult,[se("_cached")]));g.body=Fm([bt(["const _memo = (",l.exp,")"]),bt(["if (_cached",...u?[" && _cached.key === ",u]:[],` && ${s.helperString(Lu)}(_cached, _memo)) return _cached`]),bt(["const _item = ",y]),se("_item.memo = _memo"),se("return _item")]),r.arguments.push(g,se("_cache"),se(String(s.cached.length))),s.cached.push(null)}else r.arguments.push(Bs(Zo(o.parseResult),y,!0))}})});function qg(e,t,s,n){if(!t.exp){s.onError(Se(31,t.loc));return}const i=t.forParseResult;if(!i){s.onError(Se(32,t.loc));return}ef(i);const{addIdentifiers:o,removeIdentifiers:r,scopes:a}=s,{source:l,value:c,key:f,index:u}=i,d={type:11,loc:t.loc,source:l,valueAlias:c,keyAlias:f,objectIndexAlias:u,parseResult:i,children:ji(e)?e.children:[e]};s.replaceNode(d),a.vFor++;const p=n&&n(d);return()=>{a.vFor--,p&&p()}}function ef(e,t){e.finalized||(e.finalized=!0)}function Zo({value:e,key:t,index:s},n=[]){return Ug([e,t,s,...n])}function Ug(e){let t=e.length;for(;t--&&!e[t];);return e.slice(0,t+1).map((s,n)=>s||se("_".repeat(n+1),!1))}const sl=se("undefined",!1),Vg=(e,t)=>{if(e.type===1&&(e.tagType===1||e.tagType===3)){const s=ft(e,"slot");if(s)return s.exp,t.scopes.vSlot++,()=>{t.scopes.vSlot--}}},zg=(e,t,s,n)=>Bs(e,s,!1,!0,s.length?s[0].loc:n);function Hg(e,t,s=zg){t.helper(Wr);const{children:n,loc:i}=e,o=[],r=[];let a=t.scopes.vSlot>0||t.scopes.vFor>0;const l=ft(e,"slot",!0);if(l){const{arg:R,exp:T}=l;R&&!Qe(R)&&(a=!0),o.push(xe(R||se("default",!0),s(T,void 0,n,i)))}let c=!1,f=!1;const u=[],d=new Set;let p=0;for(let R=0;R<n.length;R++){const T=n[R];let S;if(!ji(T)||!(S=ft(T,"slot",!0))){T.type!==3&&u.push(T);continue}if(l){t.onError(Se(37,S.loc));break}c=!0;const{children:g,loc:v}=T,{arg:E=se("default",!0),exp:P,loc:L}=S;let k;Qe(E)?k=E?E.content:"default":a=!0;const C=ft(T,"for"),w=s(P,C,g,v);let j,x;if(j=ft(T,"if"))a=!0,r.push(Yo(j.exp,oi(E,w,p++),sl));else if(x=ft(T,/^else(-if)?$/,!0)){let D=R,G;for(;D--&&(G=n[D],G.type===3););if(G&&ji(G)&&ft(G,/^(else-)?if$/)){let Y=r[r.length-1];for(;Y.alternate.type===19;)Y=Y.alternate;Y.alternate=x.exp?Yo(x.exp,oi(E,w,p++),sl):oi(E,w,p++)}else t.onError(Se(30,x.loc))}else if(C){a=!0;const D=C.forParseResult;D?(ef(D),r.push(Ae(t.helper(Hr),[D.source,Bs(Zo(D),oi(E,w),!0)]))):t.onError(Se(32,C.loc))}else{if(k){if(d.has(k)){t.onError(Se(38,L));continue}d.add(k),k==="default"&&(f=!0)}o.push(xe(E,w))}}if(!l){const R=(T,S)=>{const g=s(T,void 0,S,i);return t.compatConfig&&(g.isNonScopedSlot=!0),xe("default",g)};c?u.length&&u.some(T=>tf(T))&&(f?t.onError(Se(39,u[0].loc)):o.push(R(void 0,u))):o.push(R(void 0,n))}const b=a?2:hi(e.children)?3:1;let y=dt(o.concat(xe("_",se(b+"",!1))),i);return r.length&&(y=Ae(t.helper(Mu),[y,gs(r)])),{slots:y,hasDynamicSlots:a}}function oi(e,t,s){const n=[xe("name",e),xe("fn",t)];return s!=null&&n.push(xe("key",se(String(s),!0))),dt(n)}function hi(e){for(let t=0;t<e.length;t++){const s=e[t];switch(s.type){case 1:if(s.tagType===2||hi(s.children))return!0;break;case 9:if(hi(s.branches))return!0;break;case 10:case 11:if(hi(s.children))return!0;break}}return!1}function tf(e){return e.type!==2&&e.type!==12?!0:e.type===2?!!e.content.trim():tf(e.content)}const sf=new WeakMap,$g=(e,t)=>function(){if(e=t.currentNode,!(e.type===1&&(e.tagType===0||e.tagType===1)))return;const{tag:n,props:i}=e,o=e.tagType===1;let r=o?Bg(e,t):`"${n}"`;const a=pe(r)&&r.callee===qr;let l,c,f=0,u,d,p,b=a||r===gn||r===Mr||!o&&(n==="svg"||n==="foreignObject"||n==="math");if(i.length>0){const y=nf(e,t,void 0,o,a);l=y.props,f=y.patchFlag,d=y.dynamicPropNames;const R=y.directives;p=R&&R.length?gs(R.map(T=>Wg(T,t))):void 0,y.shouldUseBlock&&(b=!0)}if(e.children.length>0)if(r===ki&&(b=!0,f|=1024),o&&r!==gn&&r!==ki){const{slots:R,hasDynamicSlots:T}=Hg(e,t);c=R,T&&(f|=1024)}else if(e.children.length===1&&r!==gn){const R=e.children[0],T=R.type,S=T===5||T===8;S&&ot(R,t)===0&&(f|=1),S||T===2?c=R:c=e.children}else c=e.children;d&&d.length&&(u=Gg(d)),e.codegenNode=Nn(t,r,l,c,f===0?void 0:f,u,p,!!b,!1,o,e.loc)};function Bg(e,t,s=!1){let{tag:n}=e;const i=er(n),o=ro(e,"is",!1,!0);if(o)if(i||ys("COMPILER_IS_ON_ELEMENT",t)){let a;if(o.type===6?a=o.value&&se(o.value.content,!0):(a=o.exp,a||(a=se("is",!1,o.arg.loc))),a)return Ae(t.helper(qr),[a])}else o.type===6&&o.value.content.startsWith("vue:")&&(n=o.value.content.slice(4));const r=Du(n)||t.isBuiltInComponent(n);return r?(s||t.helper(r),r):(t.helper(Fr),t.components.add(n),On(n,"component"))}function nf(e,t,s=e.props,n,i,o=!1){const{tag:r,loc:a,children:l}=e;let c=[];const f=[],u=[],d=l.length>0;let p=!1,b=0,y=!1,R=!1,T=!1,S=!1,g=!1,v=!1;const E=[],P=w=>{c.length&&(f.push(dt(nl(c),a)),c=[]),w&&f.push(w)},L=()=>{t.scopes.vFor>0&&c.push(xe(se("ref_for",!0),se("true")))},k=({key:w,value:j})=>{if(Qe(w)){const x=w.content,D=_s(x);if(D&&(!n||i)&&x.toLowerCase()!=="onclick"&&x!=="onUpdate:modelValue"&&!Yt(x)&&(S=!0),D&&Yt(x)&&(v=!0),D&&j.type===14&&(j=j.arguments[0]),j.type===20||(j.type===4||j.type===8)&&ot(j,t)>0)return;x==="ref"?y=!0:x==="class"?R=!0:x==="style"?T=!0:x!=="key"&&!E.includes(x)&&E.push(x),n&&(x==="class"||x==="style")&&!E.includes(x)&&E.push(x)}else g=!0};for(let w=0;w<s.length;w++){const j=s[w];if(j.type===6){const{loc:x,name:D,nameLoc:G,value:Y}=j;let H=!0;if(D==="ref"&&(y=!0,L()),D==="is"&&(er(r)||Y&&Y.content.startsWith("vue:")||ys("COMPILER_IS_ON_ELEMENT",t)))continue;c.push(xe(se(D,!0,G),se(Y?Y.content:"",H,Y?Y.loc:x)))}else{const{name:x,arg:D,exp:G,loc:Y,modifiers:H}=j,J=x==="bind",K=x==="on";if(x==="slot"){n||t.onError(Se(40,Y));continue}if(x==="once"||x==="memo"||x==="is"||J&&us(D,"is")&&(er(r)||ys("COMPILER_IS_ON_ELEMENT",t))||K&&o)continue;if((J&&us(D,"key")||K&&d&&us(D,"vue:before-update"))&&(p=!0),J&&us(D,"ref")&&L(),!D&&(J||K)){if(g=!0,G)if(J){if(L(),P(),ys("COMPILER_V_BIND_OBJECT_ORDER",t)){f.unshift(G);continue}f.push(G)}else P({type:14,loc:Y,callee:t.helper(Kr),arguments:n?[G]:[G,"true"]});else t.onError(Se(J?34:35,Y));continue}J&&H.some(Be=>Be.content==="prop")&&(b|=32);const _e=t.directiveTransforms[x];if(_e){const{props:Be,needRuntime:Ke}=_e(j,e,t);!o&&Be.forEach(k),K&&D&&!Qe(D)?P(dt(Be,a)):c.push(...Be),Ke&&(u.push(j),Ze(Ke)&&sf.set(j,Ke))}else jf(x)||(u.push(j),d&&(p=!0))}}let C;if(f.length?(P(),f.length>1?C=Ae(t.helper(Oi),f,a):C=f[0]):c.length&&(C=dt(nl(c),a)),g?b|=16:(R&&!n&&(b|=2),T&&!n&&(b|=4),E.length&&(b|=8),S&&(b|=32)),!p&&(b===0||b===32)&&(y||v||u.length>0)&&(b|=512),!t.inSSR&&C)switch(C.type){case 15:let w=-1,j=-1,x=!1;for(let Y=0;Y<C.properties.length;Y++){const H=C.properties[Y].key;Qe(H)?H.content==="class"?w=Y:H.content==="style"&&(j=Y):H.isHandlerKey||(x=!0)}const D=C.properties[w],G=C.properties[j];x?C=Ae(t.helper(Rn),[C]):(D&&!Qe(D.value)&&(D.value=Ae(t.helper($r),[D.value])),G&&(T||G.value.type===4&&G.value.content.trim()[0]==="["||G.value.type===17)&&(G.value=Ae(t.helper(Br),[G.value])));break;case 14:break;default:C=Ae(t.helper(Rn),[Ae(t.helper(Bn),[C])]);break}return{props:C,directives:u,patchFlag:b,dynamicPropNames:E,shouldUseBlock:p}}function nl(e){const t=new Map,s=[];for(let n=0;n<e.length;n++){const i=e[n];if(i.key.type===8||!i.key.isStatic){s.push(i);continue}const o=i.key.content,r=t.get(o);r?(o==="style"||o==="class"||_s(o))&&Kg(r,i):(t.set(o,i),s.push(i))}return s}function Kg(e,t){e.value.type===17?e.value.elements.push(t.value):e.value=gs([e.value,t.value],e.loc)}function Wg(e,t){const s=[],n=sf.get(e);n?s.push(t.helperString(n)):(t.helper(Ur),t.directives.add(e.name),s.push(On(e.name,"directive")));const{loc:i}=e;if(e.exp&&s.push(e.exp),e.arg&&(e.exp||s.push("void 0"),s.push(e.arg)),Object.keys(e.modifiers).length){e.arg||(e.exp||s.push("void 0"),s.push("void 0"));const o=se("true",!1,i);s.push(dt(e.modifiers.map(r=>xe(r,o)),i))}return gs(s,e.loc)}function Gg(e){let t="[";for(let s=0,n=e.length;s<n;s++)t+=JSON.stringify(e[s]),s<n-1&&(t+=", ");return t+"]"}function er(e){return e==="component"||e==="Component"}const Xg=(e,t)=>{if(Di(e)){const{children:s,loc:n}=e,{slotName:i,slotProps:o}=Yg(e,t),r=[t.prefixIdentifiers?"_ctx.$slots":"$slots",i,"{}","undefined","true"];let a=2;o&&(r[2]=o,a=3),s.length&&(r[3]=Bs([],s,!1,!1,n),a=4),t.scopeId&&!t.slotted&&(a=5),r.splice(a),e.codegenNode=Ae(t.helper(Ou),r,n)}};function Yg(e,t){let s='"default"',n;const i=[];for(let o=0;o<e.props.length;o++){const r=e.props[o];if(r.type===6)r.value&&(r.name==="name"?s=JSON.stringify(r.value.content):(r.name=ye(r.name),i.push(r)));else if(r.name==="bind"&&us(r.arg,"name")){if(r.exp)s=r.exp;else if(r.arg&&r.arg.type===4){const a=ye(r.arg.content);s=r.exp=se(a,!1,r.arg.loc)}}else r.name==="bind"&&r.arg&&Qe(r.arg)&&(r.arg.content=ye(r.arg.content)),i.push(r)}if(i.length>0){const{props:o,directives:r}=nf(e,t,i,!1,!1);n=o,r.length&&t.onError(Se(36,r[0].loc))}return{slotName:s,slotProps:n}}const of=(e,t,s,n)=>{const{loc:i,modifiers:o,arg:r}=e;!e.exp&&!o.length&&s.onError(Se(35,i));let a;if(r.type===4)if(r.isStatic){let u=r.content;u.startsWith("vue:")&&(u=`vnode-${u.slice(4)}`);const d=t.tagType!==0||u.startsWith("vnode")||!/[A-Z]/.test(u)?js(ye(u)):`on:${u}`;a=se(d,!0,r.loc)}else a=bt([`${s.helperString(Xo)}(`,r,")"]);else a=r,a.children.unshift(`${s.helperString(Xo)}(`),a.children.push(")");let l=e.exp;l&&!l.content.trim()&&(l=void 0);let c=s.cacheHandlers&&!l&&!s.inVOnce;if(l){const u=qu(l),d=!(u||Wm(l)),p=l.content.includes(";");(d||c&&u)&&(l=bt([`${d?"$event":"(...args)"} => ${p?"{":"("}`,l,p?"}":")"]))}let f={props:[xe(a,l||se("() => {}",!1,i))]};return n&&(f=n(f)),c&&(f.props[0].value=s.cache(f.props[0].value)),f.props.forEach(u=>u.key.isHandlerKey=!0),f},Jg=(e,t)=>{if(e.type===0||e.type===1||e.type===11||e.type===10)return()=>{const s=e.children;let n,i=!1;for(let o=0;o<s.length;o++){const r=s[o];if(Co(r)){i=!0;for(let a=o+1;a<s.length;a++){const l=s[a];if(Co(l))n||(n=s[o]=bt([r],r.loc)),n.children.push(" + ",l),s.splice(a,1),a--;else{n=void 0;break}}}}if(!(!i||s.length===1&&(e.type===0||e.type===1&&e.tagType===0&&!e.props.find(o=>o.type===7&&!t.directiveTransforms[o.name])&&e.tag!=="template")))for(let o=0;o<s.length;o++){const r=s[o];if(Co(r)||r.type===8){const a=[];(r.type!==2||r.content!==" ")&&a.push(r),!t.ssr&&ot(r,t)===0&&a.push("1"),s[o]={type:12,content:r,loc:r.loc,codegenNode:Ae(t.helper(Dr),a)}}}}},il=new WeakSet,Qg=(e,t)=>{if(e.type===1&&ft(e,"once",!0))return il.has(e)||t.inVOnce||t.inSSR?void 0:(il.add(e),t.inVOnce=!0,t.helper(Mi),()=>{t.inVOnce=!1;const s=t.currentNode;s.codegenNode&&(s.codegenNode=t.cache(s.codegenNode,!0,!0))})},rf=(e,t,s)=>{const{exp:n,arg:i}=e;if(!n)return s.onError(Se(41,e.loc)),ri();const o=n.loc.source.trim(),r=n.type===4?n.content:o,a=s.bindingMetadata[o];if(a==="props"||a==="props-aliased")return s.onError(Se(44,n.loc)),ri();if(!r.trim()||!qu(n))return s.onError(Se(42,n.loc)),ri();const l=i||se("modelValue",!0),c=i?Qe(i)?`onUpdate:${ye(i.content)}`:bt(['"onUpdate:" + ',i]):"onUpdate:modelValue";let f;const u=s.isTS?"($event: any)":"$event";f=bt([`${u} => ((`,n,") = $event)"]);const d=[xe(l,e.exp),xe(c,f)];if(e.modifiers.length&&t.tagType===1){const p=e.modifiers.map(y=>y.content).map(y=>(Jr(y)?y:JSON.stringify(y))+": true").join(", "),b=i?Qe(i)?`${i.content}Modifiers`:bt([i,' + "Modifiers"']):"modelModifiers";d.push(xe(b,se(`{ ${p} }`,!1,e.loc,2)))}return ri(d)};function ri(e=[]){return{props:e}}const Zg=/[\w).+\-_$\]]/,ey=(e,t)=>{ys("COMPILER_FILTERS",t)&&(e.type===5?qi(e.content,t):e.type===1&&e.props.forEach(s=>{s.type===7&&s.name!=="for"&&s.exp&&qi(s.exp,t)}))};function qi(e,t){if(e.type===4)ol(e,t);else for(let s=0;s<e.children.length;s++){const n=e.children[s];typeof n=="object"&&(n.type===4?ol(n,t):n.type===8?qi(e,t):n.type===5&&qi(n.content,t))}}function ol(e,t){const s=e.content;let n=!1,i=!1,o=!1,r=!1,a=0,l=0,c=0,f=0,u,d,p,b,y=[];for(p=0;p<s.length;p++)if(d=u,u=s.charCodeAt(p),n)u===39&&d!==92&&(n=!1);else if(i)u===34&&d!==92&&(i=!1);else if(o)u===96&&d!==92&&(o=!1);else if(r)u===47&&d!==92&&(r=!1);else if(u===124&&s.charCodeAt(p+1)!==124&&s.charCodeAt(p-1)!==124&&!a&&!l&&!c)b===void 0?(f=p+1,b=s.slice(0,p).trim()):R();else{switch(u){case 34:i=!0;break;case 39:n=!0;break;case 96:o=!0;break;case 40:c++;break;case 41:c--;break;case 91:l++;break;case 93:l--;break;case 123:a++;break;case 125:a--;break}if(u===47){let T=p-1,S;for(;T>=0&&(S=s.charAt(T),S===" ");T--);(!S||!Zg.test(S))&&(r=!0)}}b===void 0?b=s.slice(0,p).trim():f!==0&&R();function R(){y.push(s.slice(f,p).trim()),f=p+1}if(y.length){for(p=0;p<y.length;p++)b=ty(b,y[p],t);e.content=b,e.ast=void 0}}function ty(e,t,s){s.helper(Vr);const n=t.indexOf("(");if(n<0)return s.filters.add(t),`${On(t,"filter")}(${e})`;{const i=t.slice(0,n),o=t.slice(n+1);return s.filters.add(i),`${On(i,"filter")}(${e}${o!==")"?","+o:o}`}}const rl=new WeakSet,sy=(e,t)=>{if(e.type===1){const s=ft(e,"memo");return!s||rl.has(e)?void 0:(rl.add(e),()=>{const n=e.codegenNode||t.currentNode.codegenNode;n&&n.type===13&&(e.tagType!==1&&Xr(n,t),e.codegenNode=Ae(t.helper(Gr),[s.exp,Bs(void 0,n),"_cache",String(t.cached.length)]),t.cached.push(null))})}};function ny(e){return[[Qg,Mg,sy,Fg,ey,Xg,$g,Vg,Jg],{on:of,bind:Dg,model:rf}]}function iy(e,t={}){const s=t.onError||Yr,n=t.mode==="module";t.prefixIdentifiers===!0?s(Se(47)):n&&s(Se(48));const i=!1;t.cacheHandlers&&s(Se(49)),t.scopeId&&!n&&s(Se(50));const o=ie({},t,{prefixIdentifiers:i}),r=te(e)?fg(e,o):e,[a,l]=ny();return mg(r,ie({},o,{nodeTransforms:[...a,...t.nodeTransforms||[]],directiveTransforms:ie({},l,t.directiveTransforms||{})})),bg(r,o)}const oy=()=>({props:[]});/**
* @vue/compiler-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const af=Symbol(""),lf=Symbol(""),cf=Symbol(""),uf=Symbol(""),tr=Symbol(""),ff=Symbol(""),df=Symbol(""),pf=Symbol(""),hf=Symbol(""),mf=Symbol("");Lm({[af]:"vModelRadio",[lf]:"vModelCheckbox",[cf]:"vModelText",[uf]:"vModelSelect",[tr]:"vModelDynamic",[ff]:"withModifiers",[df]:"withKeys",[pf]:"vShow",[hf]:"Transition",[mf]:"TransitionGroup"});let Ps;function ry(e,t=!1){return Ps||(Ps=document.createElement("div")),t?(Ps.innerHTML=`<div foo="${e.replace(/"/g,"&quot;")}">`,Ps.children[0].getAttribute("foo")):(Ps.innerHTML=e,Ps.textContent)}const ay={parseMode:"html",isVoidTag:Zf,isNativeTag:e=>Yf(e)||Jf(e)||Qf(e),isPreTag:e=>e==="pre",isIgnoreNewlineTag:e=>e==="pre"||e==="textarea",decodeEntities:ry,isBuiltInComponent:e=>{if(e==="Transition"||e==="transition")return hf;if(e==="TransitionGroup"||e==="transition-group")return mf},getNamespace(e,t,s){let n=t?t.ns:s;if(t&&n===2)if(t.tag==="annotation-xml"){if(e==="svg")return 1;t.props.some(i=>i.type===6&&i.name==="encoding"&&i.value!=null&&(i.value.content==="text/html"||i.value.content==="application/xhtml+xml"))&&(n=0)}else/^m(?:[ions]|text)$/.test(t.tag)&&e!=="mglyph"&&e!=="malignmark"&&(n=0);else t&&n===1&&(t.tag==="foreignObject"||t.tag==="desc"||t.tag==="title")&&(n=0);if(n===0){if(e==="svg")return 1;if(e==="math")return 2}return n}},ly=e=>{e.type===1&&e.props.forEach((t,s)=>{t.type===6&&t.name==="style"&&t.value&&(e.props[s]={type:7,name:"bind",arg:se("style",!0,t.loc),exp:cy(t.value.content,t.loc),modifiers:[],loc:t.loc})})},cy=(e,t)=>{const s=Il(e);return se(JSON.stringify(s),!1,t,3)};function ts(e,t){return Se(e,t)}const uy=(e,t,s)=>{const{exp:n,loc:i}=e;return n||s.onError(ts(53,i)),t.children.length&&(s.onError(ts(54,i)),t.children.length=0),{props:[xe(se("innerHTML",!0,i),n||se("",!0))]}},fy=(e,t,s)=>{const{exp:n,loc:i}=e;return n||s.onError(ts(55,i)),t.children.length&&(s.onError(ts(56,i)),t.children.length=0),{props:[xe(se("textContent",!0),n?ot(n,s)>0?n:Ae(s.helperString(oo),[n],i):se("",!0))]}},dy=(e,t,s)=>{const n=rf(e,t,s);if(!n.props.length||t.tagType===1)return n;e.arg&&s.onError(ts(58,e.arg.loc));const{tag:i}=t,o=s.isCustomElement(i);if(i==="input"||i==="textarea"||i==="select"||o){let r=cf,a=!1;if(i==="input"||o){const l=ro(t,"type");if(l){if(l.type===7)r=tr;else if(l.value)switch(l.value.content){case"radio":r=af;break;case"checkbox":r=lf;break;case"file":a=!0,s.onError(ts(59,e.loc));break}}else Gm(t)&&(r=tr)}else i==="select"&&(r=uf);a||(n.needRuntime=s.helper(r))}else s.onError(ts(57,e.loc));return n.props=n.props.filter(r=>!(r.key.type===4&&r.key.content==="modelValue")),n},py=at("passive,once,capture"),hy=at("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),my=at("left,right"),gf=at("onkeyup,onkeydown,onkeypress"),gy=(e,t,s,n)=>{const i=[],o=[],r=[];for(let a=0;a<t.length;a++){const l=t[a].content;l==="native"&&kn("COMPILER_V_ON_NATIVE",s)||py(l)?r.push(l):my(l)?Qe(e)?gf(e.content.toLowerCase())?i.push(l):o.push(l):(i.push(l),o.push(l)):hy(l)?o.push(l):i.push(l)}return{keyModifiers:i,nonKeyModifiers:o,eventOptionModifiers:r}},al=(e,t)=>Qe(e)&&e.content.toLowerCase()==="onclick"?se(t,!0):e.type!==4?bt(["(",e,`) === "onClick" ? "${t}" : (`,e,")"]):e,yy=(e,t,s)=>of(e,t,s,n=>{const{modifiers:i}=e;if(!i.length)return n;let{key:o,value:r}=n.props[0];const{keyModifiers:a,nonKeyModifiers:l,eventOptionModifiers:c}=gy(o,i,s,e.loc);if(l.includes("right")&&(o=al(o,"onContextmenu")),l.includes("middle")&&(o=al(o,"onMouseup")),l.length&&(r=Ae(s.helper(ff),[r,JSON.stringify(l)])),a.length&&(!Qe(o)||gf(o.content.toLowerCase()))&&(r=Ae(s.helper(df),[r,JSON.stringify(a)])),c.length){const f=c.map(Cs).join("");o=Qe(o)?se(`${o.content}${f}`,!0):bt(["(",o,`) + "${f}"`])}return{props:[xe(o,r)]}}),vy=(e,t,s)=>{const{exp:n,loc:i}=e;return n||s.onError(ts(61,i)),{props:[],needRuntime:s.helper(pf)}},by=(e,t)=>{e.type===1&&e.tagType===0&&(e.tag==="script"||e.tag==="style")&&t.removeNode()},Sy=[ly],_y={cloak:oy,html:uy,text:fy,model:dy,on:yy,show:vy};function Ey(e,t={}){return iy(e,ie({},ay,t,{nodeTransforms:[by,...Sy,...t.nodeTransforms||[]],directiveTransforms:ie({},_y,t.directiveTransforms||{}),transformHoist:null}))}/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ll=Object.create(null);function Cy(e,t){if(!te(e))if(e.nodeType)e=e.innerHTML;else return Oe;const s=qf(e,t),n=ll[s];if(n)return n;if(e[0]==="#"){const a=document.querySelector(e);e=a?a.innerHTML:""}const i=ie({hoistStatic:!0,onError:void 0,onWarn:Oe},t);!i.isCustomElement&&typeof customElements<"u"&&(i.isCustomElement=a=>!!customElements.get(a));const{code:o}=Ey(e,i),r=new Function("Vue",o)(Pm);return r._rc=!0,ll[s]=r}tu(Cy);function yf(){const e=document.getElementById("loading-screen");e&&(e.style.opacity="0",setTimeout(()=>e.remove(),500))}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ks=typeof document<"u";function vf(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function xy(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&vf(e.default)}const fe=Object.assign;function wo(e,t){const s={};for(const n in t){const i=t[n];s[n]=St(i)?i.map(e):e(i)}return s}const yn=()=>{},St=Array.isArray,bf=/#/g,wy=/&/g,Ty=/\//g,Ay=/=/g,Iy=/\?/g,Sf=/\+/g,Py=/%5B/g,Ry=/%5D/g,_f=/%5E/g,Ny=/%60/g,Ef=/%7B/g,ky=/%7C/g,Cf=/%7D/g,Oy=/%20/g;function ea(e){return encodeURI(""+e).replace(ky,"|").replace(Py,"[").replace(Ry,"]")}function My(e){return ea(e).replace(Ef,"{").replace(Cf,"}").replace(_f,"^")}function sr(e){return ea(e).replace(Sf,"%2B").replace(Oy,"+").replace(bf,"%23").replace(wy,"%26").replace(Ny,"`").replace(Ef,"{").replace(Cf,"}").replace(_f,"^")}function Ly(e){return sr(e).replace(Ay,"%3D")}function jy(e){return ea(e).replace(bf,"%23").replace(Iy,"%3F")}function Dy(e){return e==null?"":jy(e).replace(Ty,"%2F")}function Ln(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Fy=/\/$/,qy=e=>e.replace(Fy,"");function To(e,t,s="/"){let n,i={},o="",r="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=t.slice(0,l),o=t.slice(l+1,a>-1?a:t.length),i=e(o)),a>-1&&(n=n||t.slice(0,a),r=t.slice(a,t.length)),n=Hy(n??t,s),{fullPath:n+(o&&"?")+o+r,path:n,query:i,hash:Ln(r)}}function Uy(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function cl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Vy(e,t,s){const n=t.matched.length-1,i=s.matched.length-1;return n>-1&&n===i&&Gs(t.matched[n],s.matched[i])&&xf(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function Gs(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function xf(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(!zy(e[s],t[s]))return!1;return!0}function zy(e,t){return St(e)?ul(e,t):St(t)?ul(t,e):e===t}function ul(e,t){return St(t)?e.length===t.length&&e.every((s,n)=>s===t[n]):e.length===1&&e[0]===t}function Hy(e,t){if(e.startsWith("/"))return e;if(!e)return t;const s=t.split("/"),n=e.split("/"),i=n[n.length-1];(i===".."||i===".")&&n.push("");let o=s.length-1,r,a;for(r=0;r<n.length;r++)if(a=n[r],a!==".")if(a==="..")o>1&&o--;else break;return s.slice(0,o).join("/")+"/"+n.slice(r).join("/")}const zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var jn;(function(e){e.pop="pop",e.push="push"})(jn||(jn={}));var vn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(vn||(vn={}));function $y(e){if(!e)if(ks){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),qy(e)}const By=/^[^#]+#/;function Ky(e,t){return e.replace(By,"#")+t}function Wy(e,t){const s=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-s.left-(t.left||0),top:n.top-s.top-(t.top||0)}}const co=()=>({left:window.scrollX,top:window.scrollY});function Gy(e){let t;if("el"in e){const s=e.el,n=typeof s=="string"&&s.startsWith("#"),i=typeof s=="string"?n?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!i)return;t=Wy(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function fl(e,t){return(history.state?history.state.position-t:-1)+e}const nr=new Map;function Xy(e,t){nr.set(e,t)}function Yy(e){const t=nr.get(e);return nr.delete(e),t}let Jy=()=>location.protocol+"//"+location.host;function wf(e,t){const{pathname:s,search:n,hash:i}=t,o=e.indexOf("#");if(o>-1){let a=i.includes(e.slice(o))?e.slice(o).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),cl(l,"")}return cl(s,e)+n+i}function Qy(e,t,s,n){let i=[],o=[],r=null;const a=({state:d})=>{const p=wf(e,location),b=s.value,y=t.value;let R=0;if(d){if(s.value=p,t.value=d,r&&r===b){r=null;return}R=y?d.position-y.position:0}else n(p);i.forEach(T=>{T(s.value,b,{delta:R,type:jn.pop,direction:R?R>0?vn.forward:vn.back:vn.unknown})})};function l(){r=s.value}function c(d){i.push(d);const p=()=>{const b=i.indexOf(d);b>-1&&i.splice(b,1)};return o.push(p),p}function f(){const{history:d}=window;d.state&&d.replaceState(fe({},d.state,{scroll:co()}),"")}function u(){for(const d of o)d();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function dl(e,t,s,n=!1,i=!1){return{back:e,current:t,forward:s,replaced:n,position:window.history.length,scroll:i?co():null}}function Zy(e){const{history:t,location:s}=window,n={value:wf(e,s)},i={value:t.state};i.value||o(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,c,f){const u=e.indexOf("#"),d=u>-1?(s.host&&document.querySelector("base")?e:e.slice(u))+l:Jy()+e+l;try{t[f?"replaceState":"pushState"](c,"",d),i.value=c}catch(p){console.error(p),s[f?"replace":"assign"](d)}}function r(l,c){const f=fe({},t.state,dl(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});o(l,f,!0),n.value=l}function a(l,c){const f=fe({},i.value,t.state,{forward:l,scroll:co()});o(f.current,f,!0);const u=fe({},dl(n.value,l,null),{position:f.position+1},c);o(l,u,!1),n.value=l}return{location:n,state:i,push:a,replace:r}}function ev(e){e=$y(e);const t=Zy(e),s=Qy(e,t.state,t.location,t.replace);function n(o,r=!0){r||s.pauseListeners(),history.go(o)}const i=fe({location:"",base:e,go:n,createHref:Ky.bind(null,e)},t,s);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function tv(e){return typeof e=="string"||e&&typeof e=="object"}function Tf(e){return typeof e=="string"||typeof e=="symbol"}const Af=Symbol("");var pl;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(pl||(pl={}));function Xs(e,t){return fe(new Error,{type:e,[Af]:!0},t)}function Pt(e,t){return e instanceof Error&&Af in e&&(t==null||!!(e.type&t))}const hl="[^/]+?",sv={sensitive:!1,strict:!1,start:!0,end:!0},nv=/[.+*?^${}()[\]/\\]/g;function iv(e,t){const s=fe({},sv,t),n=[];let i=s.start?"^":"";const o=[];for(const c of e){const f=c.length?[]:[90];s.strict&&!c.length&&(i+="/");for(let u=0;u<c.length;u++){const d=c[u];let p=40+(s.sensitive?.25:0);if(d.type===0)u||(i+="/"),i+=d.value.replace(nv,"\\$&"),p+=40;else if(d.type===1){const{value:b,repeatable:y,optional:R,regexp:T}=d;o.push({name:b,repeatable:y,optional:R});const S=T||hl;if(S!==hl){p+=10;try{new RegExp(`(${S})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${b}" (${S}): `+v.message)}}let g=y?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;u||(g=R&&c.length<2?`(?:/${g})`:"/"+g),R&&(g+="?"),i+=g,p+=20,R&&(p+=-8),y&&(p+=-20),S===".*"&&(p+=-50)}f.push(p)}n.push(f)}if(s.strict&&s.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}s.strict||(i+="/?"),s.end?i+="$":s.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const r=new RegExp(i,s.sensitive?"":"i");function a(c){const f=c.match(r),u={};if(!f)return null;for(let d=1;d<f.length;d++){const p=f[d]||"",b=o[d-1];u[b.name]=p&&b.repeatable?p.split("/"):p}return u}function l(c){let f="",u=!1;for(const d of e){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const p of d)if(p.type===0)f+=p.value;else if(p.type===1){const{value:b,repeatable:y,optional:R}=p,T=b in c?c[b]:"";if(St(T)&&!y)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const S=St(T)?T.join("/"):T;if(!S)if(R)d.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${b}"`);f+=S}}return f||"/"}return{re:r,score:n,keys:o,parse:a,stringify:l}}function ov(e,t){let s=0;for(;s<e.length&&s<t.length;){const n=t[s]-e[s];if(n)return n;s++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function If(e,t){let s=0;const n=e.score,i=t.score;for(;s<n.length&&s<i.length;){const o=ov(n[s],i[s]);if(o)return o;s++}if(Math.abs(i.length-n.length)===1){if(ml(n))return 1;if(ml(i))return-1}return i.length-n.length}function ml(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const rv={type:0,value:""},av=/[a-zA-Z0-9_]/;function lv(e){if(!e)return[[]];if(e==="/")return[[rv]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${s})/"${c}": ${p}`)}let s=0,n=s;const i=[];let o;function r(){o&&i.push(o),o=[]}let a=0,l,c="",f="";function u(){c&&(s===0?o.push({type:0,value:c}):s===1||s===2||s===3?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&s!==2){n=s,s=4;continue}switch(s){case 0:l==="/"?(c&&u(),r()):l===":"?(u(),s=1):d();break;case 4:d(),s=n;break;case 1:l==="("?s=2:av.test(l)?d():(u(),s=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:s=3:f+=l;break;case 3:u(),s=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:t("Unknown state");break}}return s===2&&t(`Unfinished custom RegExp for param "${c}"`),u(),r(),i}function cv(e,t,s){const n=iv(lv(e.path),s),i=fe(n,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function uv(e,t){const s=[],n=new Map;t=bl({strict:!1,end:!0,sensitive:!1},t);function i(u){return n.get(u)}function o(u,d,p){const b=!p,y=yl(u);y.aliasOf=p&&p.record;const R=bl(t,u),T=[y];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of v)T.push(yl(fe({},y,{components:p?p.record.components:y.components,path:E,aliasOf:p?p.record:y})))}let S,g;for(const v of T){const{path:E}=v;if(d&&E[0]!=="/"){const P=d.record.path,L=P[P.length-1]==="/"?"":"/";v.path=d.record.path+(E&&L+E)}if(S=cv(v,d,R),p?p.alias.push(S):(g=g||S,g!==S&&g.alias.push(S),b&&u.name&&!vl(S)&&r(u.name)),Pf(S)&&l(S),y.children){const P=y.children;for(let L=0;L<P.length;L++)o(P[L],S,p&&p.children[L])}p=p||S}return g?()=>{r(g)}:yn}function r(u){if(Tf(u)){const d=n.get(u);d&&(n.delete(u),s.splice(s.indexOf(d),1),d.children.forEach(r),d.alias.forEach(r))}else{const d=s.indexOf(u);d>-1&&(s.splice(d,1),u.record.name&&n.delete(u.record.name),u.children.forEach(r),u.alias.forEach(r))}}function a(){return s}function l(u){const d=pv(u,s);s.splice(d,0,u),u.record.name&&!vl(u)&&n.set(u.record.name,u)}function c(u,d){let p,b={},y,R;if("name"in u&&u.name){if(p=n.get(u.name),!p)throw Xs(1,{location:u});R=p.record.name,b=fe(gl(d.params,p.keys.filter(g=>!g.optional).concat(p.parent?p.parent.keys.filter(g=>g.optional):[]).map(g=>g.name)),u.params&&gl(u.params,p.keys.map(g=>g.name))),y=p.stringify(b)}else if(u.path!=null)y=u.path,p=s.find(g=>g.re.test(y)),p&&(b=p.parse(y),R=p.record.name);else{if(p=d.name?n.get(d.name):s.find(g=>g.re.test(d.path)),!p)throw Xs(1,{location:u,currentLocation:d});R=p.record.name,b=fe({},d.params,u.params),y=p.stringify(b)}const T=[];let S=p;for(;S;)T.unshift(S.record),S=S.parent;return{name:R,path:y,params:b,matched:T,meta:dv(T)}}e.forEach(u=>o(u));function f(){s.length=0,n.clear()}return{addRoute:o,resolve:c,removeRoute:r,clearRoutes:f,getRoutes:a,getRecordMatcher:i}}function gl(e,t){const s={};for(const n of t)n in e&&(s[n]=e[n]);return s}function yl(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:fv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function fv(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const n in e.components)t[n]=typeof s=="object"?s[n]:s;return t}function vl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function dv(e){return e.reduce((t,s)=>fe(t,s.meta),{})}function bl(e,t){const s={};for(const n in e)s[n]=n in t?t[n]:e[n];return s}function pv(e,t){let s=0,n=t.length;for(;s!==n;){const o=s+n>>1;If(e,t[o])<0?n=o:s=o+1}const i=hv(e);return i&&(n=t.lastIndexOf(i,n-1)),n}function hv(e){let t=e;for(;t=t.parent;)if(Pf(t)&&If(e,t)===0)return t}function Pf({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function mv(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<n.length;++i){const o=n[i].replace(Sf," "),r=o.indexOf("="),a=Ln(r<0?o:o.slice(0,r)),l=r<0?null:Ln(o.slice(r+1));if(a in t){let c=t[a];St(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function Sl(e){let t="";for(let s in e){const n=e[s];if(s=Ly(s),n==null){n!==void 0&&(t+=(t.length?"&":"")+s);continue}(St(n)?n.map(o=>o&&sr(o)):[n&&sr(n)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+s,o!=null&&(t+="="+o))})}return t}function gv(e){const t={};for(const s in e){const n=e[s];n!==void 0&&(t[s]=St(n)?n.map(i=>i==null?null:""+i):n==null?n:""+n)}return t}const yv=Symbol(""),_l=Symbol(""),ta=Symbol(""),Rf=Symbol(""),ir=Symbol("");function on(){let e=[];function t(n){return e.push(n),()=>{const i=e.indexOf(n);i>-1&&e.splice(i,1)}}function s(){e=[]}return{add:t,list:()=>e.slice(),reset:s}}function Xt(e,t,s,n,i,o=r=>r()){const r=n&&(n.enterCallbacks[i]=n.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Xs(4,{from:s,to:t})):d instanceof Error?l(d):tv(d)?l(Xs(2,{from:t,to:d})):(r&&n.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),a())},f=o(()=>e.call(n&&n.instances[i],t,s,c));let u=Promise.resolve(f);e.length<3&&(u=u.then(c)),u.catch(d=>l(d))})}function Ao(e,t,s,n,i=o=>o()){const o=[];for(const r of e)for(const a in r.components){let l=r.components[a];if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(vf(l)){const f=(l.__vccOpts||l)[t];f&&o.push(Xt(f,s,n,r,a,i))}else{let c=l();o.push(()=>c.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${r.path}"`);const u=xy(f)?f.default:f;r.mods[a]=f,r.components[a]=u;const p=(u.__vccOpts||u)[t];return p&&Xt(p,s,n,r,a,i)()}))}}return o}function El(e){const t=wt(ta),s=wt(Rf),n=it(()=>{const l=Lt(e.to);return t.resolve(l)}),i=it(()=>{const{matched:l}=n.value,{length:c}=l,f=l[c-1],u=s.matched;if(!f||!u.length)return-1;const d=u.findIndex(Gs.bind(null,f));if(d>-1)return d;const p=Cl(l[c-2]);return c>1&&Cl(f)===p&&u[u.length-1].path!==p?u.findIndex(Gs.bind(null,l[c-2])):d}),o=it(()=>i.value>-1&&Ev(s.params,n.value.params)),r=it(()=>i.value>-1&&i.value===s.matched.length-1&&xf(s.params,n.value.params));function a(l={}){if(_v(l)){const c=t[Lt(e.replace)?"replace":"push"](Lt(e.to)).catch(yn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:n,href:it(()=>n.value.href),isActive:o,isExactActive:r,navigate:a}}function vv(e){return e.length===1?e[0]:e}const bv=Un({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:El,setup(e,{slots:t}){const s=qn(El(e)),{options:n}=wt(ta),i=it(()=>({[xl(e.activeClass,n.linkActiveClass,"router-link-active")]:s.isActive,[xl(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const o=t.default&&vv(t.default(s));return e.custom?o:no("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:i.value},o)}}}),Sv=bv;function _v(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ev(e,t){for(const s in t){const n=t[s],i=e[s];if(typeof n=="string"){if(n!==i)return!1}else if(!St(i)||i.length!==n.length||n.some((o,r)=>o!==i[r]))return!1}return!0}function Cl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const xl=(e,t,s)=>e??t??s,Cv=Un({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){const n=wt(ir),i=it(()=>e.route||n.value),o=wt(_l,0),r=it(()=>{let c=Lt(o);const{matched:f}=i.value;let u;for(;(u=f[c])&&!u.components;)c++;return c}),a=it(()=>i.value.matched[r.value]);pn(_l,it(()=>r.value+1)),pn(yv,a),pn(ir,i);const l=Qt();return hs(()=>[l.value,a.value,e.name],([c,f,u],[d,p,b])=>{f&&(f.instances[u]=c,p&&p!==f&&c&&c===d&&(f.leaveGuards.size||(f.leaveGuards=p.leaveGuards),f.updateGuards.size||(f.updateGuards=p.updateGuards))),c&&f&&(!p||!Gs(f,p)||!d)&&(f.enterCallbacks[u]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=i.value,f=e.name,u=a.value,d=u&&u.components[f];if(!d)return wl(s.default,{Component:d,route:c});const p=u.props[f],b=p?p===!0?c.params:typeof p=="function"?p(c):p:null,R=no(d,fe({},b,t,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(u.instances[f]=null)},ref:l}));return wl(s.default,{Component:R,route:c})||R}}});function wl(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const xv=Cv;function wv(e){const t=uv(e.routes,e),s=e.parseQuery||mv,n=e.stringifyQuery||Sl,i=e.history,o=on(),r=on(),a=on(),l=mr(zt);let c=zt;ks&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=wo.bind(null,I=>""+I),u=wo.bind(null,Dy),d=wo.bind(null,Ln);function p(I,B){let V,W;return Tf(I)?(V=t.getRecordMatcher(I),W=B):W=I,t.addRoute(W,V)}function b(I){const B=t.getRecordMatcher(I);B&&t.removeRoute(B)}function y(){return t.getRoutes().map(I=>I.record)}function R(I){return!!t.getRecordMatcher(I)}function T(I,B){if(B=fe({},B||l.value),typeof I=="string"){const m=To(s,I,B.path),_=t.resolve({path:m.path},B),N=i.createHref(m.fullPath);return fe(m,_,{params:d(_.params),hash:Ln(m.hash),redirectedFrom:void 0,href:N})}let V;if(I.path!=null)V=fe({},I,{path:To(s,I.path,B.path).path});else{const m=fe({},I.params);for(const _ in m)m[_]==null&&delete m[_];V=fe({},I,{params:u(m)}),B.params=u(B.params)}const W=t.resolve(V,B),ue=I.hash||"";W.params=f(d(W.params));const ve=Uy(n,fe({},I,{hash:My(ue),path:W.path})),h=i.createHref(ve);return fe({fullPath:ve,hash:ue,query:n===Sl?gv(I.query):I.query||{}},W,{redirectedFrom:void 0,href:h})}function S(I){return typeof I=="string"?To(s,I,l.value.path):fe({},I)}function g(I,B){if(c!==I)return Xs(8,{from:B,to:I})}function v(I){return L(I)}function E(I){return v(fe(S(I),{replace:!0}))}function P(I){const B=I.matched[I.matched.length-1];if(B&&B.redirect){const{redirect:V}=B;let W=typeof V=="function"?V(I):V;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=S(W):{path:W},W.params={}),fe({query:I.query,hash:I.hash,params:W.path!=null?{}:I.params},W)}}function L(I,B){const V=c=T(I),W=l.value,ue=I.state,ve=I.force,h=I.replace===!0,m=P(V);if(m)return L(fe(S(m),{state:typeof m=="object"?fe({},ue,m.state):ue,force:ve,replace:h}),B||V);const _=V;_.redirectedFrom=B;let N;return!ve&&Vy(n,W,V)&&(N=Xs(16,{to:_,from:W}),Ke(W,W,!0,!1)),(N?Promise.resolve(N):w(_,W)).catch(A=>Pt(A)?Pt(A,2)?A:Be(A):K(A,_,W)).then(A=>{if(A){if(Pt(A,2))return L(fe({replace:h},S(A.to),{state:typeof A.to=="object"?fe({},ue,A.to.state):ue,force:ve}),B||_)}else A=x(_,W,!0,h,ue);return j(_,W,A),A})}function k(I,B){const V=g(I,B);return V?Promise.reject(V):Promise.resolve()}function C(I){const B=Ts.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(I):I()}function w(I,B){let V;const[W,ue,ve]=Tv(I,B);V=Ao(W.reverse(),"beforeRouteLeave",I,B);for(const m of W)m.leaveGuards.forEach(_=>{V.push(Xt(_,I,B))});const h=k.bind(null,I,B);return V.push(h),ct(V).then(()=>{V=[];for(const m of o.list())V.push(Xt(m,I,B));return V.push(h),ct(V)}).then(()=>{V=Ao(ue,"beforeRouteUpdate",I,B);for(const m of ue)m.updateGuards.forEach(_=>{V.push(Xt(_,I,B))});return V.push(h),ct(V)}).then(()=>{V=[];for(const m of ve)if(m.beforeEnter)if(St(m.beforeEnter))for(const _ of m.beforeEnter)V.push(Xt(_,I,B));else V.push(Xt(m.beforeEnter,I,B));return V.push(h),ct(V)}).then(()=>(I.matched.forEach(m=>m.enterCallbacks={}),V=Ao(ve,"beforeRouteEnter",I,B,C),V.push(h),ct(V))).then(()=>{V=[];for(const m of r.list())V.push(Xt(m,I,B));return V.push(h),ct(V)}).catch(m=>Pt(m,8)?m:Promise.reject(m))}function j(I,B,V){a.list().forEach(W=>C(()=>W(I,B,V)))}function x(I,B,V,W,ue){const ve=g(I,B);if(ve)return ve;const h=B===zt,m=ks?history.state:{};V&&(W||h?i.replace(I.fullPath,fe({scroll:h&&m&&m.scroll},ue)):i.push(I.fullPath,ue)),l.value=I,Ke(I,B,V,h),Be()}let D;function G(){D||(D=i.listen((I,B,V)=>{if(!Wn.listening)return;const W=T(I),ue=P(W);if(ue){L(fe(ue,{replace:!0,force:!0}),W).catch(yn);return}c=W;const ve=l.value;ks&&Xy(fl(ve.fullPath,V.delta),co()),w(W,ve).catch(h=>Pt(h,12)?h:Pt(h,2)?(L(fe(S(h.to),{force:!0}),W).then(m=>{Pt(m,20)&&!V.delta&&V.type===jn.pop&&i.go(-1,!1)}).catch(yn),Promise.reject()):(V.delta&&i.go(-V.delta,!1),K(h,W,ve))).then(h=>{h=h||x(W,ve,!1),h&&(V.delta&&!Pt(h,8)?i.go(-V.delta,!1):V.type===jn.pop&&Pt(h,20)&&i.go(-1,!1)),j(W,ve,h)}).catch(yn)}))}let Y=on(),H=on(),J;function K(I,B,V){Be(I);const W=H.list();return W.length?W.forEach(ue=>ue(I,B,V)):console.error(I),Promise.reject(I)}function _e(){return J&&l.value!==zt?Promise.resolve():new Promise((I,B)=>{Y.add([I,B])})}function Be(I){return J||(J=!I,G(),Y.list().forEach(([B,V])=>I?V(I):B()),Y.reset()),I}function Ke(I,B,V,W){const{scrollBehavior:ue}=e;if(!ks||!ue)return Promise.resolve();const ve=!V&&Yy(fl(I.fullPath,0))||(W||!V)&&history.state&&history.state.scroll||null;return Qs().then(()=>ue(I,B,ve)).then(h=>h&&Gy(h)).catch(h=>K(h,I,B))}const We=I=>i.go(I);let ws;const Ts=new Set,Wn={currentRoute:l,listening:!0,addRoute:p,removeRoute:b,clearRoutes:t.clearRoutes,hasRoute:R,getRoutes:y,resolve:T,options:e,push:v,replace:E,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:o.add,beforeResolve:r.add,afterEach:a.add,onError:H.add,isReady:_e,install(I){const B=this;I.component("RouterLink",Sv),I.component("RouterView",xv),I.config.globalProperties.$router=B,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>Lt(l)}),ks&&!ws&&l.value===zt&&(ws=!0,v(i.location).catch(ue=>{}));const V={};for(const ue in zt)Object.defineProperty(V,ue,{get:()=>l.value[ue],enumerable:!0});I.provide(ta,B),I.provide(Rf,pr(V)),I.provide(ir,l);const W=I.unmount;Ts.add(I),I.unmount=function(){Ts.delete(I),Ts.size<1&&(c=zt,D&&D(),D=null,l.value=zt,ws=!1,J=!1),W()}}};function ct(I){return I.reduce((B,V)=>B.then(()=>C(V)),Promise.resolve())}return Wn}function Tv(e,t){const s=[],n=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let r=0;r<o;r++){const a=t.matched[r];a&&(e.matched.find(c=>Gs(c,a))?n.push(a):s.push(a));const l=e.matched[r];l&&(t.matched.find(c=>Gs(c,l))||i.push(l))}return[s,n,i]}const Av={name:"Landing",template:`
    <div class="intro-container">
        <div v-if="!imageLoaded" id="loading-screen">
            <div class="gif-container flex">
                <img class="gif" src="/images/gif-carga.webp" alt="Animación en movimiento carga" width="140" height="140">
                <p>Cargando...</p>
            </div>
        </div>
        <div v-if="!imageLoaded" class="image-placeholder"> </div>
        <!--Img cargada-->
        <img v-show="imageLoaded" :src="cachedImage" class="portfolio-img" alt="imagen nubes presentación Maria"
            @load="onImageLoad" width="1920" height="700">
        <!--<img  class="portfolio-img2" src="/images/portfolio-img2.webp" alt="imagen nubes presentación Maria"  width="1920"
            height="700" >
            <p class= "texto-entrada">Diseño y programación<br> para empresas y videojuegos</p>-->
    </div>

    <section lang="es" class="list-container" itemscope itemtype="https://schema.org/ItemList"
        aria-labelledby="encabezado-servicios">
        <h1 id="encabezado-servicios" itemprop="name">UX/UI, desarrollo web <br> y Unreal Engine</h1>
        <img ref="imgHover" id="imgHover" src="" alt="Imagen flotante">
        
        <ul class="group-list" itemprop="mainEntity">
            <!-- Diseño Web UX/UI -->
            <li class="list flex" itemprop="itemListElement" itemscope itemtype="https://schema.org/Service"
            aria-labelledby="titulo-ux">

                <h2 id="titulo-ux" itemprop="name">Diseño Web UX/UI</h2>
                <p class="p-align" id="descripcion-ux" itemprop="description">El diseño UX/UI optimiza la experiencia del
                    usuario aumentando conversiones y ventas.</p>
                <ul class="features-list flex p-column-xs" aria-label="Características de diseño web">
                    <li data-img="images/img-hover-ux.webp" @mousemove="moverImagen" @mouseenter="mostrarImagen" @mouseleave="ocultarImagen"
                        itemscope itemprop="hasOfferCatalog" itemtype="https://schema.org/OfferCatalog">
                        <h3 itemprop="name">Diseño aplicaciones Web o CMS</h3>
                        <p itemprop="description">
                          como WordPress, Shopify, Ionos... con un enfoque en el éxito de tu empresa
                          y <span itemprop="keywords">posicionamiento SEO</span>. Obtendrás un diseño interactivo
                          para mostrar a desarrolladores o inversores, así como soluciones adaptadas para
                          la venta de <span itemprop="keywords">productos digitales</span> y servicios en línea.
                        </p>
                    </li>
                    <li>
                        <h3 itemprop="name">Auditorías y análisis heurístico</h3>
                        <p itemprop="description">para mejorar la experiencia del usuario de tu web y aumentar tus
                            resultados.</p>
                    </li>
                </ul>
            </li>

            <!-- Desarrollo Web -->
            <li class="list flex" itemprop="itemListElement" itemscope itemtype="https://schema.org/Service"
                aria-labelledby="titulo-web">
                <h2 id="titulo-web" itemprop="name">Desarrollo Web</h2>
                <p id="descripcion-web" itemprop="description">Creación de soluciones personalizadas con JavaScript, Vue,
                    PHP y CSS:</p>
                <ul class="features-list flex p-column-xs" aria-label="Detalles de desarrollo">
                    <li>
                        <h3 itemprop="name">Trabajo en el Front-end</h3>
                        <p itemprop="description">el diseño visual interactivo y atractivo que los usuarios ven e
                            interactúan, como botones y menús.</p>
                    </li>
                    <li data-img="images/cod2.webp" @mousemove="moverImagen" @mouseenter="mostrarImagen"
                        @mouseleave="ocultarImagen" itemscope itemprop="hasOfferCatalog" itemtype="https://schema.org/OfferCatalog">
                        <h3 itemprop="name">Back-end</h3>
                        <p itemprop="description">gestión y programación interna de la aplicación web, <span
                                itemprop="keywords">bases de datos y servidores</span> para optimizar la funcionalidad de
                            tiendas online.</p>
                    </li>
                </ul>
            </li>

            <!-- Diseño de Videojuegos -->
            <li class="list flex" itemprop="itemListElement" itemscope itemtype="https://schema.org/Service"
                aria-labelledby="titulo-videojuegos">
                <h2 id="titulo-videojuegos" itemprop="name">Diseño de Videojuegos</h2>
                <p id="descripcion-videojuegos" itemprop="description">Mejoro la experiencia de los jugadores evaluando la
                    jugabilidad, navegación y diseño visual:</p>
                <ul class="features-list flex p-column-xs" aria-label="Elementos de videojuegos">
                    <li>
                        <h3 itemprop="name">Auditorías UX y pruebas de jugabilidad</h3>
                        <p itemprop="description">para optimizar la interacción intuitiva, eliminando frustraciones del
                            jugador.</p>
                    </li>
                    <li itemscope itemprop="hasOfferCatalog" itemtype="https://schema.org/OfferCatalog">
                        <h3 itemprop="name">Diseño de interfaces y HUD</h3>
                        <p itemprop="description">que prioricen la jugabilidad y inmersión del jugador. Colaboración en la
                            creación de documentación como <span itemprop="keywords">Pitchs y GDD.</span></p>
                    </li>
                </ul>
            </li>

            <!-- Unreal Engine -->
            <li class="list flex" itemprop="itemListElement" itemscope itemtype="https://schema.org/Service"
                aria-labelledby="titulo-unreal">
                <h2 id="titulo-unreal" itemprop="name">Unreal Engine</h2>
                <p id="descripcion-unreal" itemprop="description">Uso de Unreal Engine para crear experiencias visuales y
                    narrativas inmersivas:</p>
                <ul class="features-list flex p-column-xs" aria-label="Características Unreal Engine">
                    <li itemscope itemprop="hasOfferCatalog" itemtype="https://schema.org/OfferCatalog">
                        <h3 itemprop="name">Desarrollo de videojuegos</h3>
                        <p itemprop="description">desde creación de escenarios, Metahumans, y programación de Blueprints, a
                            diseño, creación y programación de HUDs o interfaces.</p>
                    </li>
                    <li>
                        <h3>Desarrollo de presentaciones visuales dinámicas o cinemáticas</h3>
                        <p itemprop="description">para clientes corporativos.</p>
                    </li>
                </ul>
            </li>
        </ul>

        <div class="contacta container-column-sm flex align-center" role="region" aria-label="Sección de contacto" itemscope
            itemtype="https://schema.org/ContactPoint">
            <p role="alert">¡Cada proyecto es único!</p>
            <button class="big-btn contact-btn" aria-label="Contactar para servicios de desarrollo web y diseño"
                itemprop="url" >
                Contactar Ahora
            </button>
            <span hidden itemprop="email">contacto@tudominio.com</span>
            <meta itemprop="contactType" content="technical support">
        </div>
        
    </section>


    <section class="exito-container">

       <!-- <div class= "container-proyecto-unico">
                    <div class="container-list-footer">
                                    <p > CADA </p>
                                    <p >PROYECTO  </p>
                                    <p > ES ÚNICO!</p>
                    </div>
                    <div class="btn-footer">
                                    <div>
                                        
                                        <h3> Ajustándome a tu presupuesto trabajaremos juntos para hacer realidad tu visión.</h3>
                                    </div>
                                    <div>
                                           <router-link to="/contacta" class="btn0" rel="noopener noreferrer">CONTACTAR</router-link>
                                    </div>
                    </div>
                </div>-->

       <div class="flex-row">
           <div class=" p-column-sm flex">
               <p class="texto-exito"> El éxito de cualquier empresa nace de la satisfacción de sus usuarios </p>
               <div>
                   <p> Ya sea un servicio, un sitio web o videojuego, el éxito dependerá de una comprensión de las
                       necesidades
                       del usuario.</p>
                   <p> Tener una plataforma visualmente atractiva es solo parte del desafío, lo vital es asegurar que
                       los
                       usuarios puedan interactuar con facilidad, sin obstáculos que generen frustración o abandono.</p>
                   <p> Identificar y corregir esos puntos de fricción es clave para aumentar la satisfacción del usuario
                       y el
                       éxito del negocio a largo plazo. </p>
               </div>
               <div>
                   <router-link to="/uxui"> Casos de estudio UX/UI </router-link>
                   <router-link to="/games"> Casos de estudio Videojuegos </router-link>
               </div>
           </div>
           <img class="img-pc" src="/images/psico-ux.png" loading="lazy"
               alt="imagen usabilidad,empativa y psicologia en ux/ui" width="300px" />
       </div>
   </section>

           <div class="wave-container">
              <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path fill="#ffffff" d="M0,40 C180,60 360,70 540,50 C720,30 900,10 1080,20 C1260,30 1440,60 1440,60 L1440,100 L0,100 Z"></path>
              </svg>
           </div>

           <section class="portfolio" itemscope itemtype="https://schema.org/ItemList"> 
                             
                <h2 itemprop="name">PORTFOLIO</h2>
                <div class="imgs padding-Y-xs" itemprop="itemListElement" itemscope itemtype="https://schema.org/ImageGallery">
                    
                    <!-- Video Cupcake -->
                   <video class="video" preload="none" loading="lazy"autoplay loop muted playsinline itemprop="video" itemscope itemtype="https://schema.org/VideoObject">
                        <source src="/images/cupcakes.mp4" type="video/mp4">
                        <meta itemprop="name" content="Diseño UX/UI tienda joyeria" />
                        <meta itemprop="description" content="Video interactivo de un diseño UX/UI para Photofolio." />
                    </video>
                   
                    <!-- Imagen Tienda -->
                    <div class="img-portfolio">
                        <img src="/images/bag.webp" loading="lazy" alt="Diseño UX/UI" itemprop="image" />
                    </div>

                    <!-- Imagen Casas -->
                    <div >
                        <img class="casa" src="/images/casa.webp" loading="lazy" alt="Diseño UX/UI casas" itemprop="image" />
                    </div>

                     <!-- Imagen Juegos -->
                    <div class="img-portfolio">
                        <img src="/images/games.webp" loading="lazy" alt="Diseño UX/UI tienda gamer" itemprop="image" />
                    </div>

                    <!-- Imagen Plantas -->
                    <div class="img-portfolio">
                        <img src="/images/plant.webp" loading="lazy" alt="Diseño UX/UI tienda plantas" itemprop="image" />
                    </div>
                   
                    <!-- Video Photofolio -->                    
                    <div class="img-portfolio">
                        <img src="/images/photofolio.webp" loading="lazy" alt="Diseño UX/UI app bancaria" itemprop="image" />
                    </div>
                    <!-- Imagen Bancaria -->
                    <div class="img-portfolio">
                        <img src="/images/bank.webp" loading="lazy" alt="Diseño UX/UI app bancaria" itemprop="image" />
                    </div>

                    <!-- Imagen Zen -->
                    <div class="img-portfolio">
                        <img src="/images/zen.webp" loading="lazy" alt="Diseño UX/UI app Zen" itemprop="image" />
                    </div>

                    <!-- Imagen Lolli -->
                    <div class="img-portfolio">
                        <img src="/images/lolli.webp" loading="lazy" alt="Diseño UX/UI landing Lolli" itemprop="image" />
                    </div>

                    <!-- Imagen Mind -->
                    <div class="img-portfolio">
                        <img src="/images/mind.webp" loading="lazy" alt="Diseño UX/UI app Mind" itemprop="image" />
                    </div>

                    <!-- Video Omega -->
                    <video class="video" preload="none" loading="lazy"autoplay loop muted playsinline itemprop="video" itemscope itemtype="https://schema.org/VideoObject">
                        <source src="/images/intro-omega.mp4" type="video/mp4">
                        <meta itemprop="name" content="Diseño UX/UI tienda joyeria" />
                        <meta itemprop="description" content="Video interactivo de un diseño UX/UI para Photofolio." />
                    </video>
                 
                    <!-- Imagen Hotel -->
                    <div class="img-portfolio">
                        <img src="/images/hotel.webp" loading="lazy" alt="Diseño UX/UI hotel" itemprop="image" />
                    </div>

                    
                    
                </div>
           

            <!--
            <div class="contact-form-2" >
                <h2> Obtén tu diseño personalizado desde 300€! </h2>
                <h4>Solicitar información:</h4>
                        <form class="container-input" action="https://formsubmit.co/mjortiz93@gmail.com" method="POST" >
                                                
                            <div class="form-input" >
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        placeholder=" " 
                                        required 
                                        aria-labelledby="email-label"
                                        autocomplete="on">
                                    <label class="accesible" for="email" id="email-label">Correo electrónico</label>                                   
                            </div>
                            <button  type="submit">Enviar</button>
                                               
                        </form>  
                                                                              
                </div>-->
                                       
            
        </section>
    `,data(){return{imageLoaded:!1,cachedImage:"/images/portfolio-img.webp?v=1"}},methods:{onImageLoad(){console.log("Imagen cargada"),this.imageLoaded=!0,yf()},moverImagen(e){this.$refs.imgHover&&(this.$refs.imgHover.style.left=`${e.pageX+10}px`,this.$refs.imgHover.style.top=`${e.pageY+10}px`)},mostrarImagen(e){if(this.$refs.imgHover){const t=e.target.getAttribute("data-img");this.$refs.imgHover.src=t,this.$refs.imgHover.style.display="block",setTimeout(()=>{this.$refs.imgHover.style.opacity="1"},10)}},ocultarImagen(){this.$refs.imgHover&&(this.$refs.imgHover.style.opacity="0",this.$refs.imgHover.style.display="none")}},mounted(){const e=new Image;e.src=this.cachedImage,e.onload=()=>{this.imageLoaded=!0};const t=80,s=500,n=s-t,i=document.querySelector(".list-container"),o=document.querySelector(".portfolio-img"),r=document.querySelector("h1");window.addEventListener("scroll",function(){const a=window.scrollY;if(a<t)o.style.opacity="1";else if(a>t&&a<s){let l=1-(a-t)/n;o.style.opacity=l.toFixed(2);let c=(a-t)/n;r.style.opacity=c.toFixed(2)}else a>=s&&a<s+i.offsetHeight-350?o.style.opacity="0.08":o.style.opacity="0"}),document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelectorAll(".lazy-video"),l=new IntersectionObserver((c,f)=>{c.forEach(u=>{if(u.isIntersecting){const d=u.target;d.load(),d.play(),f.unobserve(d)}})});a.forEach(c=>{l.observe(c)})})},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)}},Iv={name:"Uxui",template:`
  
        <section class="header-ux">
                <h1> Diseño web UX/UI </h1>
                <div class="flex-row padding-xs">
                        <div class="p-column-sm flex p-align p-med ">
                            <h2>La importancia del UX</h2>
                            <p>La experiencia del usuario es un factor decisivo que puede determinar el éxito o el fracaso de una tienda online o producto, cuando no se cumple con las expectativas del usuario, el impacto se traduce directamente en la pérdida de ventas y en la deterioración de la reputación de la marca.</p>
                            <p> Un buen diseño tiene un impacto directo en el crecimiento de las ventas y la eficiencia operativa, incrementando sus ingresos al mismo tiempo que reduce costes y necesidad de personal.</p>
                            <h3>El equilibrio perfecto entre eficiencia y escalabilidad</h3>
                        </div>
                        <img class="img-pc" src="/images/Designers.webp" alt="ux-slogan" >
                </div>
        </section>
          <section class="definicion-ux">
                <h2 class="p-align"> Pero qué es el UX/UI?</h2>
                <div class="flex-row padding-Y-xs">
                        <div class="p-column-sm flex p-med">
                            <p>El UX/UI está presente en todos los aspectos de nuestra vida, va más allá de lo visual y se enfoca en cómo interactuamos con productos y servicios, asegurando que sean intuitivos, accesibles y satisfactorios.</p>
                            <p>Un ejemplo UX sería Netflix, con funciones como "Saltar intro", las recomendaciones basadas en preferencias o la posibilidad de retomar una serie donde la dejaste. Todo está diseñado para minimizar la fricción y ahorrar tiempo o pasos innecesarios. En la imagen se aprecia la evolución -2002 y 2010- de videoclub, a la plataforma streaming que conocemos hoy. </p>
                            
                        </div>
                       <div class="container-img-focus">
                            <img class="netflix img-focus" src="/images/netflix.webp" width="300" alt="imagen Netflix 2002">
                        </div>
                </div>
                <div class="flex-row ">
                        <img class="container-img" src="/images/grafico-ux.webp"  alt="meme magic mouse" >
                        <div class="p-column-sm flex p-med">
                            <p> Pero también lo podemos encontrar en una lata de refresco, haciendo que ganemos espacio en la nevera con su formato fit, en un mando de videojuegos, haciendo que el agarre sea cómodo y natural, o en una maleta de viaje con ruedas 360° y mango retráctil que mejora la comodidad al moverse sin esfuerzo.</p>
                            <p> Por otro lado, el UI se encarga de los elementos con los que interactuamos directamente. En un sitio web o una app, el UI se ve en los botones, menús y pantallas que usamos para navegar, asegurándose de que todo esté donde lo esperamos. Pero tambíen lo encontramos en electrodomésticos o dispositivos electrónicos.</p>
                        </div>
                </div>
                <h3 class="p-align">Un buen UX/UI puede diferenciar a una marca de sus competidores, impulsando su crecimiento y éxito en un mercado cada vez más competitivo.</h3>
        </section>
        <section class="benefits">
                <div class="container-motivos-ux flex-row padding-xs">
                
                    <div class="container-column-md flex align-center">
                        <h2>¿Cómo ayuda el UX a crecer las ventas? </h2>
                        <ul>
                            <li>
                                <h3>Mejora la conversión 🢖</h3> <p>Simplifica procesos, reduciendo fricciones que pueden llevar a la pérdida de clientes. Con una navegación intuitiva, los usuarios tienen menos probabilidades de abandonar sus carritos y más probabilidades de completar la compra. </p>
                            </li>
                            <li>
                                <h3>Aumenta la retención de clientes 🢖</h3> <p>Una experiencia positiva hace que los usuarios regresen. La retención de clientes es clave para el crecimiento sostenible de las ventas, y es mucho más económico mantener a un cliente que adquirir uno nuevo.</p>
                            </li>
                            <li>
                                <h3>Optimiza la personalización 🢖</h3> <p>Aprovechar el análisis de datos y ofrecer una experiencia de compra personalizada para cada cliente, aumenta el ticket promedio por cliente sin necesidad de ampliar tu catálogo de productos. </p>
                            </li>
                        </ul>
                    </div>

                    <div class="container-column-md flex align-center">
                        <h2>Reducción de costes a través de UX/UI </h2>
                        <ul>
                            <li>
                                <h3>Optimización del flujo de trabajo interno 🢖</h3><p> Tener interfaces administrativas claras y procesos automatizados de gestión permiten que el personal trabaje de manera más eficiente, evitando duplicación de tareas y posibles errores humanos.</p>
                            </li>
                            <li>
                                <h3>Automatización de procesos 🢖</h3><p> Un diseño UX eficiente puede reducir la dependencia de personal de atención al cliente al ofrecer herramientas donde los clientes resuelven sus problemas o consultas fácilmente.</p>
                            </li>
                            <li>
                                <h3>Diseño eficiente 🢖</h3><p>Un diseño eficiente agiliza procesos y reduce errores del usuario. Esto se traduce en menos consultas de soporte, mayor conversión y fidelización, maximizando el retorno de inversión.</p>
                            </li>
                        </ul>
                    </div>
                    
                </div>
        </section>
             <section class="services-ux-background">
            <div class="services-ux-container flex container-column-sm align-center">
                <h2> Servicios de Diseño UX/UI </h2>
                <ul role="list">
                    <li>
                        <h3>Auditorías UX/UI y Optimización de la Conversión (CRO) </h3>
                        <p>Auditorías completas de sitios web o plataformas CMS para detectar áreas de mejora en la experiencia
                            de usuario y la interfaz visual como flujos, jerarquias y menús. Optimizo la navegación, diseño y
                            funcionalidad para aumentar la conversión y reducir la tasa de abandono.</p>
                    </li>
                    <li>
                        <h3> Diseño de Interfaces Personalizadas </h3>
                        <p>Diseño interfaces visuales atractivas y funcionales para mejorar la interacción del usuario. Obtén
                            tus prototipos interactivos con flujos de navegación que se adaptan a las necesidades de cada
                            empresa, optimizando tanto la estética como la usabilidad. Estos prototipos pueden llevarse a
                            desarrollo o compartirlo con potenciales inversores.</p>
                    </li>
                    <li>
                        <h3> Integración y Personalización en CMS:</h3>
                        <p> Implemento diseños optimizados en plataformas como WordPress o Shopify, Workflow, Ionos...
                            personalizando plantillas y funcionalidades para adaptarlas a las necesidades específicas del
                            negocio.</p>
                    </li>
                    <li>
                        <h3> Diseño Responsive:</h3>
                        <p>Aseguro que cada diseño funcione perfectamente en dispositivos móviles y de escritorio,
                            proporcionando una experiencia fluida independientemente del dispositivo que el usuario elija.</p>
                    </li>
                    <li>
                        <h3> Pruebas de Usuario y Validación:</h3>
                        <p>Conduzco pruebas de usuario y validación continua para asegurar que las soluciones implementadas
                            respondan a las necesidades reales de los clientes y usuarios finales. </p>
                    </li>
                </ul>
                <h4> Optimiza tu presencia online con soluciones personalizadas. </h4>

                <button class="big-btn2 contact-btn" aria-label="Solicitar servicios y contactar"
                    >CONTACTAR</button>
            </div>
        </section>
          <section class="ejemplo-ux">
                <h2 class="p-align"> Si no eres Apple, será mejor que apliques UX/UI...</h2>
                <div class="flex-row">
                        <div class="p-column-sm flex p-med">
                            <p>Desde 2009, una de las decisiones de diseño más criticadas de Apple ha sido el Magic Mouse. Su sistema de carga impide su uso mientras está conectado, un claro problema de UX que pocas marcas podrían permitirse sin afectarle, pero es parte del espíritu de Apple.</p>
                            <p>Apple ha demostrado en varias ocasiones que prioriza la estética sobre la usabilidad, respaldada por la solidez de su marca y la fidelidad de su ecosistema, esto le permite generar conversación convirtiendo estos casos prácticamente en un meme y manteniendo su presencia en el mercado.</p>
                        </div>
                       <figure>
            <img class="container-img" src="/images/magicmouse.webp" alt="Magic Mouse de Apple con el puerto de carga en la parte inferior" loading="lazy">
            <figcaption>El diseño del Magic Mouse impide su uso mientras se carga.</figcaption>
        </figure>
                </div>
                <div class="flex-row">
                        <img class="container-img" src="/images/meme.webp"  alt="Meme sobre la carga del Magic Mouse" loading="lazy">
                        <div class="p-column-sm flex p-med">
                            <p> Sin embargo, esta estrategia puede traer inconvenientes, por ello en 2024 surgieron informes que indican que Apple está trabajando en una versión rediseñada. Aunque el diseño minimalista y la carga rápida del Magic Mouse parecen ventajas, la falta de ergonomía y la interrupción del flujo de trabajo afectan a largo plazo la experiencia del usuario.</p>
                            <p> Además, desde una perspectiva de accesibilidad, ciertas decisiones de diseño pueden dificultar el uso para personas con necesidades específicas creando la necesidad de complementos de terceros.</p>
                        </div>
                </div>
                <h3 class="p-align">La cuestión es hasta qué punto estos diseños responden a una estrategia meticulosamente planificada por Apple?</h3>
        </section>
   

            <section class="black-background">
                <h2>Casos de estudio de UX/UI </h2>
                <div class="container-casos-ux  flex ">

                    <h3>Análisis y propuesta de rediseño Tiendanimal  </h3>

                    <div class="dark-background flex container-column-sm">
                                    
                                    <div class="flex-row">
                                        <div class="p-column-sm flex">
                                            
                                            <div>
                                            <h4>Contexto</h4>
                                                <p>Realizo compras de productos para animales todos los meses, y esta plataforma que tiene múltiples tiendas físicas, choca con una <span>problemática recurrente relacionada con la intención y el resultado final</span> del diseño y la usabilidad en su tienda online.</p>
                                                <p>Esta falta de optimización en el uso de sus recursos digitales genera una interfaz que se aleja de la de sus competidores directos, quienes logran ofrecer un entorno más eficiente. En mi enfoque, trato de corregir y <span>alinear la experiencia online con la fortaleza de su presencia física.</span></p>
                                            </div>
                                            <div>
                                                <h4>Conflictos UX/UI actuales</h4>
                                                <p>Al analizar la web original de Tiendanimal, uno de los principales conflictos es el exceso de banners e imágenes de gran tamaño, que sobrecargan visualmente. A esto se suma la complejidad de la barra de navegación superior (topbar), la cual presenta un menú desplegable muy extenso que ocupa demasiado espacio en pantalla, interrumpiendo la experiencia y sobrecargando la carga cognitiva y la toma de decisiones. </p>
                                                <p>Los iconos principales, tienen diferentes tamaños y formatos, y el banner más relevante para el usuario, que contiene la información clave (como detalles de envíos y precios), es parte del cuerpo de la web perdiéndose en el scroll y pasando totalmente desapercibido. </p>
                                            </div>
                                        </div>
                                        <figure class="p-column-sm flex align-center">
                                                <div class="container-img-focus">
                                                    <img class="img-focus" src="/images/menu-tiendanimal.webp"  alt="imagen original Tiendanimal">
                                                </div>
                                                <figcaption> Imágenes originales Tiendanimal</figcaption>
                                                <div class="container-img-focus">
                                                    <img class="img-focus" src="/images/tianimal-foto.png"  alt="imagen original Tiendanimal">
                                                </div>
                                        </figure>
                                    </div>

                                    <p class="p-align padding-xs"><span>Estos conflictos radican en que, aunque los elementos gráficos están bien diseñados, su implementación y organización desde una perspectiva UX/UI no es óptima. En términos de navegación, hay que encontrar un equilibrio entre la cantidad de información que se desea mostrar y la fluidez con la que el usuario puede interactuar con la interfaz.<br> Los flujos de navegación en ocasiones chocan entre las ofertas, como mostrar 50% en un producto que en la ventana rápida de selección no aparece, y que no se aplican al carrito, requiriendo ingresar cupones para productos individuales.</span></p>
                                    
                                </div>
                                <div class="dark-background flex container-column-sm">
                                    <div class="flex-row">
                                        <div class=" flex p-column-xs p-short align-left">
                                            <h4>Rediseño Tiendanimal</h4>
                                            <p>Para abordar estos conflictos, se propone un rediseño enfocado en mejorar la usabilidad y la claridad visual,
                                                sin comprometer la estética de la marca, <span>reduciendo la carga cognitiva y el ruido visual con espacios
                                                    negativos</span>, que cumplen una función esencial en la percepción, comprensión y experiencia del
                                                usuario.</p>
                                            <ul>
                                                <li>
                                                    <p> Accesibilidad: El diseño sigue principios de accesibilidad, asegurando que los contrastes entre el
                                                        texto y el fondo cumplen con los estándares AA y AAA de accesibilidad, lo que lo hace más usable
                                                        para personas con baja visión o sensibilidad a la luz. </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <figure class="container-img-focus">
                                            <img class="img-focus" src="/images/tien-foto.webp" loading="lazy" alt="imagen rediseño proyecto tienda">
                                        </figure>
                                    </div>
                                    <div class="container-column-xxs">
                                        <ul>
                                            <li>
                                                <p> Reorganización de la navegación: Implementación una barra lateral fija que agrupa las categorías
                                                    principales. Esta barra fija <span> se alinea con el principio de memoria espacial, en cómo el cerebro
                                                        humano procesa, organiza y recuerda información,</span> facilitando la asociación de categorías con
                                                    su posición constante y ayudando a que el usuario pueda recordar con más facilidad donde encontrar sus
                                                    productos favoritos, además permite un acceso más controlado y organizado a las categorías.</p>
                                            </li>
                                            <li>
                                                <p> Uso de <span>descuentos aplicados al carrito de forma asíncrona</span> sin necesidad de ingresar cupones
                                                    en productos individules.</p>
                                            </li>
                                            <li>
                                                <p> Optimización del banner de información clave: El banner que contenía los detalles de envíos y precios es
                                                    reposicionado en la parte superior de la interfaz como una barra fija y dinámica. De esta forma, la
                                                    información más relevante para los usuarios está siempre visible sin necesidad de desplazarse por la
                                                    página. Esta barra puede actualizarse de forma dinámica para mostrar ofertas o información adicional.
                                                </p>
                                            </li>
                                            <li>
                                                <p> Jerarquía visual clara: Organización de banners en la landing page, las promociones se organizaron en
                                                    bloques más pequeños y cohesionados, permitiendo una navegación más fluida sin saturar visualmente al
                                                    usuario.</p>
                                            </li>
                                        </ul>
                                    </div>
                    </div>
                </div>

                 <div class="container-casos-ux  flex ">
                    <h3>Diseño de App Bancaria  </h3>
                    <div class="dark-background flex container-column-sm ">
                        <div class="flex-row">
                            <div class="p-column-sm flex ">
                                
                                <p>El proyecto App bancaria se centra en optimizar la accesibilidad a información financiera en un entorno de <span>dark mode.</span> El objetivo principal fue reducir la carga cognitiva de los usuarios, permitiendo que accedan a sus productos financieros, saldos y gastos de forma rápida y clara.</p>
                                <div>
                                    <h4>Estética visual</h4>
                                    <p>La interfaz tiene un <span>enfoque minimalista</span> con un diseño oscuro para reducir la fatiga visual especialmente en sesiones prolongadas, mientras que los colores de acento en naranja resaltan la información más relevante. Este contraste destaca gráficos o botones clave sinturar la vista del usuario.</p>
                                </div>
                            </div>
                            <img class="container-img" src="/images/bank.webp" loading="lazy" alt="imagen inicio sesión proyecto tienda" >
                        </div>

                        <div class=" p-column-xs flex p-align padding-Y-xs">
                            <h4>Componentes del diseño </h4>
                            <p>Se emplea una tipografía sans-serif con una jerarquía clara de tamaños para asegurar la legibilidad de los datos financieros y los elementos interactivos en cualquier dispositivo. La estructura está optimizada mediante Auto Layout en Figma y Flexbox en CSS, permitiendo una <span>adaptación fluida a diferentes pantallas</span>. Además, las imágenes y los elementos interactivos cuentan con transiciones suaves, mejorando la experiencia de navegación.</p>
                        </div>
                                                                   
                        <div class="flex-row">
                            <div>
                                <h4>Organización Visual y Jerarquía</h4>
                                <ul>
                                    <li> <p> Tus productos: La parte superior de la pantalla agrupa las cuentas y tarjetas del usuario, presentando la información más importante de manera inmediata: saldo, estado y detalles rápidos de cada producto financiero. <span>Incluye modo privacidad para esconder datos sensibles</span>.</p> </li>
                                    <li> <p> Tu saldo total: El saldo total del usuario se muestra de forma prominente con un gráfico para <span>resaltar la evolución mensual de los fondos.</span> Este enfoque visual ayuda al usuario a interpretar rápidamente los cambios sin necesidad de leer datos numéricos extensos.</p> </li>
                                    <li> <p> Controla tus gastos: Los gastos se dividen en categorías simples como <span>suscripciones y recibos,</span> con colores asignados a cada categoría. Esto permite una fácil comprensión de los gastos mensuales y su seguimiento a lo largo del tiempo.</p> </li>
                                    <li> <p> Navegación simple e intuitiva: El menú inferior fijo proporciona un acceso rápido a las secciones más importantes: home, transacciones, productos y resumen financiero. Este diseño facilita la navegación rápida entre las funciones sin saturar la pantalla principal.</p> </li>
                                    <li> <p> Accesibilidad: El diseño sigue principios de accesibilidad, asegurando que los contrastes entre el texto y el fondo cumplen con los <span>estándares AA y AAA de accesibilidad,</span> lo que lo hace más usable para personas con baja visión o sensibilidad a la luz. </p> </li>
                                </ul>
                            </div>
                           
                            <img class="video-bank" src="/images/bank-video.webp" loading="lazy" alt="imagen inicio sesión Banca online" >
                        </div>
                    </div>
                    </div>
                    <div class="container-casos-ux  flex ">
                        <h3>Diseño de tienda online </h3>
                        <div class="dark-background flex container-column-sm ">                        
                                <p class="p-align">En el desarrollo de la experiencia digital, mi enfoque fue crear una plataforma que transmita exclusividad. Este proyecto busca combinar elementos visuales elegantes con una navegación intuitiva. </p>
                                <div class="flex-row">
                        
                                    <div class="flex p-column-sm"> 
                                    <div>
                                        <h4>Estética visual y Componentes del Diseño</h4>
                                        <p>La paleta de colores es predominantemente oscura, lo cual proporciona un fondo ideal para que las joyas resalten con intensidad. Los colores de acento en tonos metálicos como el dorado refuerzan esta imagen de lujo.</p>
                                    </div>
                                    <div>
                                        <h4>Usabilidad y Navegación </h4>
                                        <p>La organización de los elementos está pensada para proporcionar una experiencia de navegación fluida y jerárquica, donde cada sección guía al usuario hacia la siguiente sin distracciones. Los elementos visuales están diseñados para reducir la carga cognitiva, asegurando que el usuario pueda encontrar rápidamente lo que busca.</p>
                                    </div>
                            </div>
                            <img src="/images/video-omega.webp" loading="lazy" width="600" alt="video tienda omega">
                        </div>                                
                        <div>
                                    <h4> Página de Inicio</h4>
                                    <ul>
                                        <li>
                                            <p> La disposición en el encabezado busca simplificar el acceso a las categorías sin sobrecargar visualmente,
                                                favoreciendo una experiencia de navegación clara y directa, organizada en dos secciones principales y
                                                facilitando que los usuarios accedan directamente a la sección que les interesan.</p>
                                        </li>
                                        <li>
                                            <p> Se muestra una <span>selección de productos icónicos</span> de Omega Jewelry en tarjetas individuales,
                                                cada una de ellas destacando el nombre de la joya. La disposición de estos elementos ayuda al usuario a
                                                explorar las opciones de forma visual y rápida. </p>
                                        </li>
                                        <li>
                                            <p> Especial Regalos: Esta sección está pensada para captar el interés de usuarios que buscan ideas de regalo,
                                                destacando productos más accesibles y económicos. </p>
                                        </li>
                                        <li>
                                            <p> Las <span>fotografías de producto con modelos en uso,</span> ayuda a los usuarios a visualizar el look
                                                final de las joyas, transmitiendo aspiración. </p>
                                        </li>
                                        <li>
                                            <p> Se dedica un espacio destacado a "Gold Collection", una de las líneas premium de la marca. La sección
                                                cuenta con un diseño que resalta el color dorado y la exclusividad de esta colección, acompañada por un
                                                botón de llamada a la acción. </p>
                                        </li>
                                        <li>
                                            <p> <span>Productos Destacados dinámicos:</span> Imagenes en alta resolución y el diseño centrado permitiendo
                                                que el usuario lo observe en detalle. </p>
                                        </li>
                                    </ul>                        
                        </div>
                        <div class="flex-row">
                                <div class="container-img-focus">
                                    <img class="img-focus" src="/images/omega.webp" loading="lazy" alt="imagen inicio sesión proyecto tienda" style="border:2px solid #373737"> 
                                </div>
                                <div>   
                                    <h4>Formulario de Inicio de Sesión </h4>                               
                                    <ul>
                                        <li>
                                            <p>Diseño Minimalista: El formulario es visualmente claro y funcional.</p>
                                        </li>
                                        <li>
                                            <p>Accesibilidad y Funcionalidad: Se incorpora un botón de "He olvidado mi contraseña" que despliega
                                                <span>información útil sobre los requisitos de contraseña</span> al hacer hover (por ejemplo, al menos una
                                                mayúscula). Este detalle mejora la transparencia ayudando además al usuario a recordar su contraseña y
                                                evitar pasos extra.</p>
                                        </li>
                                        <li>
                                            <p>Integración de Redes Sociales: Los botones de acceso con Google y Facebook integrados facilita a los
                                                usuarios una opción sencilla para iniciar sesión sin complicaciones adicionales.</p>
                                        </li>
                                    </ul>                   
                                </div>
                        </div>             
                    </div>
                
                </div>
        </section>
    `},Pv={name:"Programming",template:`
   
        <section class="header-programming p-align">
                <h1> Desarrollo web y Personalización de Plataformas CMS.</h1>
                <div class="flex-row">
                    <img  src="/images/seo1.webp" alt="foto seo" >
                    <h2 class="p-med padding-sm"> Contar con una web optimizada no solo mejora la experiencia del usuario, sino que también impacta en el SEO, lo que ayuda a posicionar tu marca y fidelizar clientes.</h2>
                </div>
        </section>

        <section class="beneficios p-align">
                
                        <h2>Beneficios de contratar un desarrollador para tu web o CMS</h2>
                        <p>Si bien los CMS como WordPress o Shopify ofrecen soluciones rápidas, sus limitaciones pueden afectar la escalabilidad y personalización de tu proyecto.</p>
                        
                        <ul role="list" class=" full-width">
                                <li><h3>Personalización avanzada:</h3> <p>Puedes realizar modificaciones avanzadas y ajustar funcionalidades que no están disponibles de manera predeterminada en el CMS.</p></li>
                                <li><h3> Mejor rendimiento:</h3><p>Un desarrollador puede optimizar la velocidad y eficiencia de tu web, mejorando la experiencia del usuario y el SEO, vitales para cualquier negocio.</p></li>
                                <li><h3>  Integraciones personalizadas:</h3> <p> Conectar tu CMS a sistemas externos como CRMs, pasarelas de pago o servicios específicos de tu empresa.</p></li>
                                <li><h3> Mayor seguridad:</h3> <p>Implementar medidas de seguridad específicas para proteger tu sitio y los datos de tus usuarios.</p></li>
                                <li><h3> Escalabilidad: </h3> <p>Adaptar el sitio a medida que tu empresa crece o cambia sus necesidades. </p></li>
                        </ul>
        </section>
            <section class="services-programming" aria-labelledby="servicios-programacion">
                            <h2 id="servicios-programacion">Servicios de desarrollo web y CMS</h2>
                        
                            <ul role="list" >
                                <li><h3>Desarrollo web personalizado:</h3> <p>Construyo sitios web desde cero utilizando tecnologías como PHP, JavaScript y Vue.js, garantizando soluciones a medida que se ajustan completamente a tus necesidades. Ya sea una web empresarial, un e-commerce o una plataforma interactiva, desarrollo tanto el Front-end (interfaz y experiencia del usuario) como el Back-end (funcionalidad y base de datos).</p></li>
                                <li><h3>Personalización de CMS:</h3><p> Si usas WordPress, Shopify u otro CMS, puedo realizar modificaciones avanzadas para que tu sitio no se limite a las funciones estándar. Desde agregar integraciones personalizadas y modificar la apariencia hasta optimizar la gestión de contenido, adapto la plataforma para que cumpla exactamente con lo que necesitas.</p></li>
                                <!--<li><h4>Integración de sistemas externos:</h4> <p> Conexión de tu web o tienda online con CRMs, pasarelas de pago, y otros servicios.</p></li>-->
                                <li><h3>Optimización de rendimiento:</h3> <p>Un sitio web rápido y optimizado es clave para mejorar la experiencia del usuario y el posicionamiento en buscadores (SEO). Me encargo de:</p>
                                    
                                        <p>✔️ Reducir tiempos de carga mediante optimización de código, imágenes y recursos.</p>
                                        <p>✔️ Mejorar la usabilidad, asegurando que la navegación sea intuitiva y accesible.</p>
                                        <p>✔️ Optimización SEO, para que tu web aparezca mejor posicionada en Google.</p> </li>
                                <li><h3>Mantenimiento y soporte:</h3> <p> Actualizaciones, correcciones y mejoras continuas para garantizar que tu web funcione sin problemas.</p></li>
                            </ul>
                            
                                <button class="big-btn1 contact-btn"  aria-label="Solicitar servicios y contactar">CONTACTAR</button>
                            
            </section>

            <section class="section-proyect">
                <div class="flex-row">
                            
                    <div class="container-proyect container-column-xs flex align-center">
                        <div class="p-column-xs flex">
                            <h2>Mi primer proyecto personal</h2>
                            <p >Mi primer proyecto web surgió de una experiencia personal:<span> las acogidas temporales de animales en situación de vulnerabilidad.</span> A lo largo de los años, he dado hogar a perros con historias complejas, lo que me enseñó la importancia de un sistema eficiente para gestionar acogidas y adopciones</p>
                            <p >Este proyecto en desarrollo tiene como objetivo optimizar y agilizar el proceso de acogida y adopción de animales. La plataforma facilita la conexión entre rescatistas, familias de acogida y adoptantes, ayudando a evitar estafas en propias de redes sociales, mediante verificación de perfiles y una experiencia de usuario intuitiva y accesible.</p>
                            <h3> Contexto y Necesidad </h3>
                            <p>En el mundo del rescate animal, muchas organizaciones y particulares enfrentan dificultades para gestionar acogidas temporales, especialmente en casos de animales con necesidades especiales. He vivido de primera mano múltiples situaciones con final feliz como la de:</p>
                            <ul>
                                <li><p>Peko, un perro con severos problemas de socialización.</p></li>
                                <li><p>Boni, una podenca con miedos arraigados tras ser utilizada para cría.</p></li>
                                <li><p>Toby, que sufrió malos tratos con una fuerte desconfianza hacia los humanos.</p></li>
                                <li><p>Duke, que fue utilizado como "sparring".</p></li>
                                <li><p>Gorda, una mastín que encontré vagando en Andalucía.</p></li>
                                <li><p>Bali, mi perra,  encontrada muy enferma durante un viaje a la isla de Bali.</p></li>
                            </ul>
                        </div>
                        <div class="container-img-focus">
                            <img class="img-focus" src="/images/foto-dogfinder.webp" loading="lazy" alt="img app animal" width="500px">
                        </div>
                    </div>
                    <div class="container-bubble align-center">
                        <p> Algunos de mis pequeños acogidos </p>
                        <img class="bubble" src="/images/duke.webp" loading="lazy" alt=" acogido duke">
                        <img class="bubble" src="/images/luna.webp" loading="lazy" alt=" acogida luna">
                        <img class="bubble" src="/images/baby.webp" loading="lazy" alt=" acogido baby">
                        <img class="bubble" src="/images/boni.webp" loading="lazy" alt=" acogida boni">
                        <img class="bubble" src="/images/bebes.webp" loading="lazy" alt="acogido duke y boni">

                        <img class="bubble" src="/images/bebeses.webp" loading="lazy" alt="  acogidos bebes">
                        <img class="bubble" src="/images/toby.webp" loading="lazy" alt=" acogido toby">
                        <img class="bubble" src="/images/bali.webp" loading="lazy" alt=" acogida bali">
                        <img class="bubble" src="/images/bruce.webp" loading="lazy" alt=" acogido bruce">
                        <img class="bubble" src="/images/gorda.webp" loading="lazy" alt=" acogida gorda">
                    </div>
                </div>
                   <div class="flex-row padding-sm">
                        <div class="p-column-sm flex">
                            <h3>Arquitectura y Tecnologías Utilizadas</h3>
                            <ul>
                                <li><h4>Base de Datos (SQL - MySQL)</h4>
                                    <p>Estructuración de datos para gestionar perfiles de usuarios, asociaciones, animales y solicitudes de adopción.</p>
                                    <p>Relaciones y consultas bien definidas y optimizadas entre entidades como usuarios, animales y estados de adopción</p>
                                </li>
                                <li><h4>Lenguaje de Programación (PHP y JavaScript)</h4>
                                    <p>PHP (Back-end): Manejo de lógica de negocio, validación de formularios, gestión de usuarios y procesamiento de datos en el servidor.</p>
                                    <p>JavaScript (Front-end): Mejora de la experiencia del usuario con interactividad en tiempo real, validaciones dinámicas y actualizaciones de contenido sin recargar la página.</p>
                                    
                                </li>
                                <li><h4>Gestión de Perfiles</h4>
                                    <p>Perfiles y funcionalidades específicas para Asociaciones y Usuarios, publicación y gestión de fichas de animales disponibles para adopción y sistema de contacto con asociaciones</p>
                                </li>
                                <li><h4>Funcionalidades Clave</h4>
                                    <p>Panel de administración para asociaciones y gestores, con herramientas para actualizar información sobre animales y adopciones.</p>
                                    <p>Sistema de búsqueda y filtros para que los usuarios encuentren fácilmente animales según ubicación, tamaño, edad y necesidades especiales.</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <figure  >
                                    <img class="pg-proyect-img " src="/images/diagrama.webp" loading="lazy" alt="img happypath" >
                                    <figcaption>Diagrama de flujo</figcaption>
                            </figure>
                            <figure  >
                                    <img class="pg-proyect-img" src="/images/cod-error.webp" loading="lazy" alt="img casos de prueba" width="500px">
                                    <figcaption>Casos de prueba</figcaption>
                            </figure>
                        </div>
                    </div>
                  
                    
                             <!--   
                                
                                <div class="container-img-focus">
                                <img class="img-focus" src="/images/cod3.webp" loading="lazy" alt="img codigo php" width="500px">
                            </div>
                            <div class="container-img-focus">
                                <img class="img-focus" src="/images/cod2.webp" loading="lazy" alt="img codigo php" width="100">-->
                   
            </section>
    `},Rv={name:"SobreMi",template:`
  <section class="about-me">
      <h1 >Un poco de mi</h1>
      <img src="/images/maria.webp" alt="Imagen 2" class="scroll-item">
      <div class="text scroll-item">
        <p>Hola!</p>
        <p>Soy María.</p>
      </div>
          <img src="/images/nubes-medano.webp" alt="Imagen 1"  loading="lazy" class="scroll-item">

      <div class="text scroll-item">
        <p>Me gusta fotografíar el cielo y la luna, dibujar a lápiz y pintar en acrílico.</p>
      </div>
      <img src="/images/clouds.webp" alt="Imagen 3" loading="lazy" class="scroll-item">
      <div class="text scroll-item">
        <p>Disfruto estudiando el porqué de las cosas.</p>
      </div>
      <div class="text scroll-item">
      <p>Desde pequeña he amado los videojuegos, la estrategia y los retos lógicos.</p>
    </div>
      
    <img src="/images/chian-temple.webp" alt="Imagen 3" loading="lazy" class="scroll-item">
    
    
    <div class="text scroll-item">
      <p>Con los años, he desarrollado una gran apreciación por las interfaces bien diseñadas y la usabilidad efectiva.</p>
    </div>
     <div class="text scroll-item">
      <p>Esta pasión también me ha convertido en una crítica atenta a los detalles.</p>
    </div>
    
    <img src="/images/srilanka.webp" alt="Imagen 3" loading="lazy" class="scroll-item">
     <div class="text scroll-item">
      <p>Final Fantasy, World of Warcraft, Skyrim, Half-Life y Frostpunk1  han inspirado mi enfoque, mostrándome la importancia de las comunidades y la conexión significativa entre usuarios y experiencias.</p>
    </div>
     <!--<img src="/images/tene.webp" alt="Imagen 3" loading="lazy" class="scroll-item">-->
     <div class="text scroll-item">
      <p>Hoy, diseño y desarrollo aplicaciones web y videojuegos, combinando arte y tecnología.</p>
    </div>
          <img src="/images/chian.webp" alt="Imagen 2" class="scroll-item">
            <!-- <img src="/images/breda.webp" alt="Imagen 3" loading="lazy" class="scroll-item">-->

     <div></div>
       
  </section>
  `,mounted(){const e=document.querySelectorAll(".scroll-item"),t=()=>{const s=window.innerHeight,n=s/2;e.forEach(i=>{const o=i.getBoundingClientRect(),a=o.top+o.height/2-n,l=Math.min(1,Math.abs(a/(s/3))),c=.9+l*.8,f=l*(a>0?1:-1),u=1.15-l;i.style.transform=`scale(${c}) translateX(${f}px)`,i.style.opacity=u})};t(),window.addEventListener("scroll",t)}},Nv={name:"Games",template:`

    <section class="header-games">
      <h1 class="p-align">Unreal engine y UX/UI <br>para videojuegos</h1>
      <div class="container-header container-column-md flex align-center">

        <h2>El UX/UI en videojuegos es el vestíbulo del jugador.</h2>
        <div class="p-column-sm flex p-align padding-sm">
          <p class="p-games">
            Los videojuegos no solo divierten, también estimulan la memoria, la creatividad y la toma de decisiones.
          </p>
          <p>
            La neurociencia confirma su impacto positivo en todas las edades: desde mejorar el aprendizaje en niños hasta
            retrasar el deterioro cognitivo en mayores. Además, son clave en accesibilidad, con experiencias adaptadas para personas con necesidades especiales. Más que ocio,
            los videojuegos son una herramienta para el desarrollo y la inclusión.
          </p>
        </div>
          <iframe  height="315"
          src="https://www.youtube.com/embed/ZCwlZc-WG48"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        
          <div class=" flex p-column-xs p-align">
              <p class=" p-games">
                La neurociencia es fundamental en este contexto, ya que proporciona
                una comprensión más profunda de cómo los jugadores procesan la
                información, toman decisiones y experimentan emociones durante el
                juego.
              </p>
              <p>
                Mostrar la información correcta en el momento adecuado en
                videojuegos es vital, impacta directamente en la experiencia
                del jugador y su capacidad para tomar decisiones de manera efectiva.
              </p>
          </div>
           
        
      
      </div>
    </section>
    <section class="unreal-games">
        <div class="p-column-sm flex padding-sm">
          <h2>Que puedes hacer con Unreal Engine?</h2>
          <ul role="list">
            <li>
              <h3>Creación de Escenarios y Mapas:</h3>
              <p>
                Diseño y construcción de entornos inmersivos y detallados para
                videojuegos o aplicaciones interactivas.
              </p>
            </li>
            <li>
              <h3>Producción de Cinemáticas y Secuencias Animadas:</h3>
              <p>
                Creación de escenas cinemáticas y narrativas visuales para
                contar historias de forma impactante dentro del juego o la
                aplicación.
              </p>
            </li>
          </ul>
        </div>
     
      <!--<video class="cinematica" loading="lazy" controls muted playsinline
        title="Cinemática creada con Unreal Engine"
        aria-label="Cinemática creada con Unreal Engine"
        itemprop="video" itemscope itemtype="https://schema.org/VideoObject">
        <source src="/images/short-cinematik.mp4" type="video/mp4">
        <meta itemprop="name" content="Diseño UX/UI tienda joyería" />
        <meta itemprop="description" content="Video interactivo de un diseño UX/UI para Photofolio." />
    </video>-->
    </section>
    <section class="services-games">
      <h2>Servicios para videojuegos</h2>
      <ul>
        <li>
          <h3>Soporte en creación de pitch's y GDD</h3>
          <p>
            Estos documentos son esenciales para comunicar de manera clara y
            persuasiva las ideas detrás de un videojuego, ya sea a inversores,
            desarrolladores o equipos de trabajo.
          </p>
        </li>
        <li>
          <h3>Asesoría y Análisis de HUD, Diseño Visual y UI</h3>
          <p>
            Asesoría especializada en HUD, diseño
            visual y UI, adaptados tanto para videojuegos en desarrollo como
            para la optimización de proyectos existentes.
          </p>
        </li>
        <li>
          <h3>UR y prototipado</h3>
          <p>
            Desarrollo wireframes y prototipos interactivos que permiten
            visualizar y probar la interfaz antes de la implementación,
            asegurando que cada elemento tenga un propósito claro. Los
            prototipos son herramientas fundamentales para la validación de la
            experiencia de usuario, y son ideales para convencer a
            desarrolladores o inversores al mostrar una visión del producto.
          </p>
        </li>
        <li>
          <h3>Diseño Visual</h3>
          <p>
            Diseños centrados en la armonía entre la estética general del
            videojuego y la Interfaz, HUD, menús y interacciones para ofrecer
            una experiencia fluida y envolvente que conecta al jugador con la
            narrativa y el ambiente del juego.
          </p>
        </li>
        <li>
          <h3>Pruebas de Usabilidad</h3>
          <p>
            Pruebas de usabilidad con jugadores para identificar áreas de mejora
            y optimizar la experiencia, asegurando que cada elemento de la
            interfaz contribuya al disfrute del juego.
          </p>
        </li>
        <li>
          <h3>Desarrollo en Unreal Engine</h3>
          <p>
            Utilizando la potencia de Unreal Engine diseño y construyo
            escenarios inmersivos implementando assets para lograr una alta
            calidad visual, aplicando tecnologías avanzadas como Lumen para
            iluminación realista.
          </p>
          <p>
            También trabajo con Metahumans para desarrollar personajes
            detallados y realistas. Estas opciones se pueden adaptar tanto a
            empresas que buscan incorporar elementos de gamificación como a
            desarrolladores de videojuegos, ofreciendo soluciones flexibles
            según las necesidades del proyecto.
          </p>
        </li>
      </ul>
      <button
        class="big-btn1 contact-btn"
        aria-label="Solicitar servicios y contactar"
        >CONTACTAR</button
      >
    </section>

    <section class="black-background">
      <h2>Análisis y diseño de videojuegos</h2>
      <div class="container-casos-games flex">
          <h3>
           El esperado lanzamiento de Frostpunk 2
          </h3>

        <div class="dark-background container-column-md flex ">

          

          <div class="flex-row ">
          <div>
              <h4>Contexto</h4>
              <p>
                Para mí, Frostpunk 1 no es solo un juego, es una obra de arte de la estrategia.
              </p>
              <p>Conté los minutos hasta el
                lanzamiento de Frostpunk 2. Tras algunos retrasos llegó el gran día, y como en el primero
                el impresionante diseño visual me fascinó, pero a medida que pasaban los minutos mi entusiasmo se iba
                desvaneciendo...y como a mí, a muchos de sus fans.
              </p>
              <p >Frostpunk 1 es un juego en un ambiente apocalíptico donde la estrategia gira entorno a los minutos, una estrategia milimétrica que da una sensación adictiva de acción constante controlada, esa acción-reacción necesaria en el cual habia consecuencias inmediatas visibles en tu comunidad aportando realidad, y resultando en un juego emocional.</p>
          </div>
              
              <div class="container-img-focus">
                <img
                  class="img-focus"
                  src="/images/frostpunk1.webp"
                  loading="lazy"
                  alt=" HUD Frostpunk1"
                />
              </div>
          </div>

          <p>En contraste, Frostpunk 2 se siente más como un simulador político. Las facciones se convierten en el eje principal de la estrategia, diluyendo la urgencia y la conexión emocional del original. El enfoque se centra en equilibrar intereses y esperar largos periodos para que algo significativo ocurra, lo que rompe la dinámica de "acción-reacción" que tanto disfruté en el primer juego.</p>
          
          <div class="flex-row padding-Y-xs">
            <p  >El resultado es un juego con un ritmo completamente distinto, que obliga al jugador a adelantar el tiempo, dejando atrás la intensidad estratégica que definió a su predecesor.<span> Si bien la dirección visual sigue siendo magnífica, el cambio de enfoque transforma radicalmente la experiencia, alejándola de lo que hizo al original tan memorable.</span></p>
             <div class="container-img-focus">
                <img
                  class="img-focus"
                  src="/images/frostpunk2.webp"
                  loading="lazy"
                  alt=" HUD Frostpunk2"
                />
              </div>
          </div>
          <div class="flex-row">
            <div class="p-column-xs flex" >
                  <h4>Datos 4 meses después del lanzamiento</h4>
                  <p> En Gamepass Frostpunk2 tiene una puntuación de 3.2* vs FrostPunk1 con un 4.3*.</p>
                  <p>En Steam Frostpunk2 tiene 15mil comentarios positivos y 5mil comentarios negativos(25%), frente a 120mil comentarios positivos y
                    9mil negativos(6.98%) de FrostPunk1.</p>
                  <p> En Steam Spy, Frostpunk1 sigue teniendo más jugadores diarios que FrostPunk2.</p>
                  <p> Comentar que 11bit Studios valora enormemente a sus usuarios, y algunos de los problemas detectados han sido
                    rectificados posteriormente en sus actualizaciones.</p>
            </div>
             <img
                  class="img-pc"
                  src="/images/opinion-frost2.webp"
                  loading="lazy"
                  alt=" opinion Frostpunk2"
                  width="300"
             />
          </div>
        
        
          <div>
                <h4>Analisis jugabilidad y usabilidad de Frostpunk 2</h4>
                <p>
                  Para un jugador que conoce el juego anterior, la curva de aprendizaje es mucho más lenta de lo esperado. Aunque es
                  comprensible dada la complejidad del juego, el diseño podría haber sido más amigable en la transición. Conceptos
                  básicos que eran intuitivos en Frostpunk 1 como los recursos, los ciclos de día y noche con las operativas y
                  estrategias específicas de cada turno o el uso estratégico de autómatas, han cambiado completamente o desaparecido.
                </p>
                <p>Quiero desarrollar el concepto de los autómatas porque esa sensación se refleja en el resto del juego a pesar de ser
                  un detalle insignificante en la grandiosidad del juego: Un autómata en Frostpunk1 -y en la mayoría de videojuegos- es
                  un robot que puede hacer trabajos de humano con ciertas características, es decir una herramienta que juega con unas
                  normas propias y según la estrategia te puede interesar, o no. Qué es un autómata en Frostpunk2? Un autómata = 800
                  habitantes.</p>
                <h5>Tiempos de Construcción y Recursos Desproporcionados:</h5>
                <p>Una partida que comienza con 8000 habitantes, de los cuales pueden trabajar 4800 (adultos), temperatura exterior a
                  menos -20º en un ambiente apocalíptico.</p>
                <ul>
                    <li>
                        <p> Un distrito de viviendas básico requiere 200 trabajadores fijos y produce 20 viviendas.</p>
                    </li>
                    <li>
                        <p>Distrito de comidas requiere 600 trabajadores fijos y produce 50 alimentos.</p>
                    </li>
                    <li>
                        <p>Impacto: Con un tiempo de construcción medio de 7.2 meses -quitar hielo: 3,2 meses + construir distrito 4 meses-, aparece la necesidad constante de adelantar el tiempo, combinados con la falta de consecuencias inmediatas, rompen la inmersión. En un apocalipsis donde el tiempo es vital, pasar meses sin comida, calor o techo debería tener un impacto significativo en la población, pero en Frostpunk 2, estas decisiones parecen carecer de peso real, además de la sensación de desproporción en el % de empleados y recursos obtenidos.</p>
                    </li>
                </ul>
                <p>Una vez conoces el juego o desarrollas el arbol de ideas puedes tomar otras estrategias, expandir distritos o construir edificios, y aqui es donde entra el conflicto de diseño y experiencia de usuario.</p>
          </div>
      
          <div class=" analisis-frost flex p-column-xs">
              <h4>Análisis UX/UI Frostpunk 2:</h4>
              <p>Como ya he comentado el diseño artístico y visual del juego es impresionante, las animaciones realmente aportan vida a los personajes, y la historia sigue siendo increíble, pero enfocándome en la experiencia de usuario y tras analizar tanto el juego, los datos y las opiniones puedo decir que hay mejoras o enfoques que se podrían implementar:</p>
              <ul class="padding-Y-xs">
                <li class="flex p-column-xxs">
                  <p><span>Visibilidad y confusión visual en distritos 🢖</span></p>
                  <p class="text-red ">Problema: Confusión visual en el sistema de distritos. La falta de tamaños fijos o organización clara en los distritos dificulta la planificación y expansión, obligando al jugador a seleccionar edificio por edificio para verificar su nivel de expansión, o buscar edificios vitales como hospitales, lo que ralentiza la toma de decisiones.</p>
                  <p class="text-bg-purple">Solución: Mejorar la visibilidad de los distritos, estableciendo tamaños fijos o formas claras que permitan al jugador identificar rápidamente los niveles de expansión y disposición de los edificios sin necesidad de inspeccionarlos individualmente.</p>
                </li>
                <li class="flex p-column-xxs">
                  <p><span>Interrupción en el flujo de interacciones 🢖</span></p>
                  <p class="text-red ">Problema: Al hacer clic en un edificio, la cámara se desplaza y acerca a cámara lenta hacia él, provocando tiempos de espera y rompiendo la fluidez de la interacción al gestionar múltiples edificios.                  </p>
                  <p class="text-bg-purple">Solución: Resaltar el edificio seleccionado sin moverse de la vista actual, mostrando una miniatura del edificio seleccionado en la interfaz junto a la información. </p>
                </li>
                <li class="flex p-column-xxs">
                  <p><span>Deshumanización del gameplay 🢖</span></p>
                  <p class="text-red ">Problema: Los íconos relacionados con los enfermos y otros estados críticos (hambre, criminalidad) solo muestra información imprecisa como "leve" o "moderada", lo que genera una sensación de falta de detalle y realismo.</p>
                  <p class="text-bg-purple">Solución: Evitar términos genéricos como "leve" o "moderada", ofreciendo información más concreta (por ejemplo, porcentaje de personas afectadas o número exacto de casos) para difuminar la sensación  para mejorar la interacción y la toma de decisiones del jugador.</p>
                </li>
                <li class="flex p-column-xxs">
                    <p><span>Árbol de desarrollo confuso 🢖</span></p>
                    <p class="text-red ">Problema: El árbol de desarrollo es difícil de comprender, algunos conceptos no se encuentran donde se esperan, no muestran un camino claro llevándote a cometer errores, y no se muestra claramente qué elemento está en desarrollo.</p>
                    <p class="text-bg-purple">Solución: Usar un color predominante para destacar claramente los elementos que están en desarrollo. Agrupaciones que permitan al jugador ver las tecnologías o mejoras relevantes según categorías y recursos, y ajustar con mejoras más proporcionales según el tipo de recurso.                </p>
                </li>
                <li class=" p-column-xs flex  align-left"><p> Problemas adicionales 🢖</p>
                    <p class="text-red ">- Actualmente al expandir un edificio industrial, el producto que se está produciendo cambia automáticamente al valor por defecto, perdiendo tiempo de juego vital hasta que te das cuenta de ello.</p>
                    <p class="text-red ">- En modo expedición no se puede hacer Zoom lo que dificulta la identificación y búsqueda de zonas específicas. *Solucionado</p>
                    <p class="text-red ">- En los mapas de calor, aparecen datos de consumo de edificios apagados. *Solucionado </p>
                </li>
              </ul>
          </div>
          
            

            <div class="flex-row padding-Y-xs">
                  <div class="p-short p-column-xs flex">
                    <h4>Rediseño sugerido "Árbol de ideas"</h4>
                      <p>Sugiero cambiar a nombres más intuitivos y jerárquicos para las ideas generales en la pantalla principal (ej. Invernaderos avanzados II), y posteriormente incluir los nombres específicos según facción, además mostrar el tipo de contrucción (edificio o distrito) incluyendo el área de constucción correspondiente, en conjunto estos cambios facilitan la organización y el espacio visual de las opciones.</p>
                      <p > Se incluye un icono que marca la idea que se encuentra en desarrollo.  Se agrupan visualmente las ideas compartidas entre facciones.</p>
                  </div>
                  <img class="container-img"src="/images/diseño-frost.webp" loading="lazy" alt="Rediseño arbol ideas Frostpunk2">
            </div>
          
          <p>
              En resumen, ambos son juegos increíbles, y valoro enormemente la intención del estudio que proporciona entornos de juego muy completos, pero como fan de Frostpunk1 entiendo las reacciones frente su secuela, y espero que lancen más DLC de lo que para mi siempre será una obra maestra.
          </p>
          

        </div>

      </div>
      <div class="container-casos-games flex ">
           <h3>
            Cities Skylines: Secuela muy esperada que decepcionó a sus fans.
          </h3>
        <div class="dark-background container-column-md flex">
         
          <div>
            <p>
              City Skylines 1, lanzado en 2015 es un juego de simulación de
              construcción de ciudades con más de 12 millones uds
              comercializadas y más de 70 DlC, además de premios como Juego de
              estrategia y simulación.
            </p>
            <p>
              Al anunciar que lanzarían la secuela en 2023 sus fans se frotaban
              las manos, ya que cuando tienes una buena base de juego esperas
              que la próxima sea muy superior, pero finalmente llovieron las
              críticas....Qué pasó?
            </p>
          </div>
          <div class="container-img-focus">
            <img
              class="img-focus"
              src="/images/bad-comments.webp"
              loading="lazy"
              alt="comparacion opiniones citiesSkylines"
            />
          </div>
          <div>
            <h4>Análisis Cities: Skylines 1 - Simulación Urbana Compleja</h4>
            <p>
              Analizando el juego base (sin LCd) que tanto triunfó, tengo
              opiniones encontradas sobre Cities: Skylines 1:
            </p>

            <h5>Puntos positivos:</h5>
            <ul>
              <li>
                <p>Me gusta su simulación de agentes y sistemas de gestión, la
                calidad visual y las texturas del juego. Estos elementos tienen
                un realismo atractivo para quienes disfrutan de la microgestión
                y el diseño urbano.</p>
              </li>
              <li>
                <p>El concepto del tiempo, un sistema donde 24 horas equivalen a 1
                mes, permitiendo un ritmo más controlado, favoreciendo la
                planificación estratégica y proporcionando un cambio natural
                entre el día y la noche que enriquece la ambientación.</p>
              </li>
              <li>
                <p>Control de tráfico, me resulta muy interesante como la gestión
                del tráfico se convierte en algo entretenido y vital en el
                juego.</p>
              </li>
            </ul>
          </div>
          <div class="flex-row padding-Y-xs ">
            <div>
              <h5>Puntos de mejora:</h5>
              <ul class="p-short">
                <li>
                  <p>
                    Encuentro limitaciones que impactan la experiencia. La curva
                    de aprendizaje es muy lenta y requiere horas para dominar
                    las mecánicas; además, las pocas explicaciones no ayudan a
                    la comprensión inicial creando frustraciones.
                  </p>
                </li>
                <li>
                  <p>
                    Tras horas invertidas, las mayores estrategias se reducen en
                    su mayoría, a la gestión del tráfico, lo cual limita el
                    potencial de una simulación tan rica.
                  </p>
                </li>
              </ul>
            </div>
            <img
              class="img-pc"
              src="/images/flow1.webp"
              loading="lazy"
              alt="flow juegos"
            />
          </div>

          <div class="p-column-xs flex">
            <h5>Interfaz y diseño de experiencia de usuario:</h5>
            <p>
              Para un juego de estrategia o simulación hay claras herramientas,
              como controles avanzados y objetivos que son necesarios, pero el
              juego no las facilita.
            </p>
            <p>
              Desde la primera interfaz te muestran la multitud de "escenarios
              disponibles" pero todos de pago (unos 14€ cada uno), creando la
              sensación de juego "vacío" al ver que el juego base
              realmente solo ofrece unos pocos mapas sin objetivos ni retos
              claros y limitados encuanto a estrategia, donde la mayor
              estrategia es entender el funcionamiento juego.
            </p>
            <p>
              En comparación y desde mi perspectiva, la saga Tropico —lanzada
              antes y con una base de fans similar— ofrece una experiencia más
              jugable y emocionante, con opciones estratégicas variadas que
              mantienen el interés y sí permiten que los jugadores apliquen
              distintas tácticas sin necesidad de comprar expansiones.
            </p>
          </div>
          <div>
            <h4>
                Análisis Cities Skylines 2 - Mejoras Visuales y Retos en
                Usabilidad
              </h4>
              <p>
                Analizando la secuela un año después de su lanzamiento, he
                encontrado inconsistencias en el diseño, bugs y errores en capas
                o construcción y sin ambargo ya hay DLC de pago.
              
              </p>
          </div>
          <div class="flex-row padding-Y-xs">
            <div class="p-column-sm flex align-left">
            
              <div>
                <h5>HUD y UI:</h5>
                <ul class="p-med">
                  <li><p>
                    Aunque el HUD y la interfaz general han mejorado
                    visualmente, la usabilidad sigue siendo una barrera
                    importante. El nuevo diseño resulta en una interfaz elegante
                    pero poco funcional, sobrecargada de ventanas, capas y
                    colores que dificultan la visibilidad y generan confusión en
                    lugar de claridad.</p>
                  </li>
                  <li><p>
                    La incorporación de múltiples ventanas emergentes por
                    edificio -cuatro de promedio- intenta suplir la falta de
                    información del primer juego, pero estas son poco prácticas
                    y no del todo útiles para el usuario. Esto refleja la
                    importancia de diseñar experiencias que simplifiquen la
                    navegación, en lugar de saturar con ayudas o ventanas
                    innecesarias.</p>
                  </li>
                </ul>
              </div>
            </div>
            <img
              class="img-pc"
              src="/images/skylines2.webp"
              loading="lazy"
              alt="UI skylines2"
            />
          </div>

          <div class="flex-row ">
            <div class="p-med flex p-column-xs">
              <h5>La importancia del propósito y del modelo Kano:</h5>
              <p>
                Otra decisión cuestionable es la eliminación de algunas métricas
                claves para la estrategia de tráfico, lo cual era uno de los
                puntos fuertes del primer juego. Este cambio disminuye las
                opciones estratégicas y la profundidad del gameplay, algo
                esencial en este tipo de simulación.
              </p>
              <p>
                Un buen diseño debe proporcionar una experiencia fluida y
                motivadora para el jugador, facilitando la interacción y
                ofreciendo una curva de aprendizaje acorde. Este lanzamiento es
                un claro ejemplo de la importancia del Modelo Kano, donde se
                debe identificar qué funciones mantendrán la satisfacción del
                usuario priorizando la estabilidad y optimización.
              </p>
              <p>
                Las expectativas eran altas, y en este caso, la compañía ignoró
                ciertos aspectos funcionales esperados y lanzó el juego con
                fallos de rendimiento significativos, lo cual impactó gravemente
                la confianza de la base de jugadores hasta el día de hoy, donde
                los comentarios siguen siendo "curiosos", os dejo algunos :)
              </p>
            </div>
            <img
              class="img-pc"
              src="/images/opinion-skylines2.webp"
              loading="lazy"
              alt=" opiniones citiesSkyline2"
            />
          </div>
          <div class="container-img-focus">
            <img
              class="img-focus"
              src="/images/opiniones-sky.webp"
              loading="lazy"
              alt="opiniones citiesSkylines2"
            />
          </div>
          <!--<video class= "video-bank"  autoplay loop muted playsinline>
                                        <source src="/images/bank.mp4" type="video/mp4" >
                                </video>-->
          <div class="p-column-xs flex padding-Y-xs align-center">
            <h4>Rediseñando la Experiencia: Propuesta UX/UI y jugabilidad para Cities: Skylines 2</h4>
            <p>Tras analizar los puntos débiles y aciertos propongo una versión que corrige los errores y que implementa nuevas funcionalidades para crear una experiencia de usuario más fluida. El objetivo de este rediseño es ofrecer al jugador un mayor control estratégico, mejorar la claridad de la información y reducir la sobrecarga cognitiva para garantizar una interacción más eficiente y agradable.</p>
            
            <div class="flex-row">
              <div class="p-short flex p-column-xs padding-Y-xs">
              <h5>Propuesta de rediseño Head-up Display general:</h5>
                <ul>
                  <li>
                    <p>Interfaz modular y paneles dinámicos:</p>
                    <p>Introducción de un sistema modular en la interfaz, con paneles dinámicos que el jugador puede minimizar según sus necesidades. Los paneles clave estarán siempre accesibles, esto eliminará los problemas de menús mal distribuidos. Encontramos en la barra superior la zona de control, en la barra inferior la zona de construcción y en el lateral las ventanas de información o misiones.               </p>
                    <p>Las ventanas de información serán dinámicas y aparecerán al seleccionar un edificio o botón de construcción para apoyar al desarrollo.</p>
                    <p>Los botones más relevantes como tráfico y demoledora se encuentran en el lateral derecho de la pantalla donde los usuarios al jugar usan más el ratón y no al revés.</p>
                  </li>
                </ul>
              </div>
              <img
                class="container-img"
                src="/images/skylines.webp"
                loading="lazy"
                alt="rediseño citiesSkylines2"
              />
            </div>
            <ul>
                  <li>
                    <p>Información crítica siempre visible:</p>
                    <p>Para mejorar la accesibilidad de la información crítica, como los recursos de ”agua” y “luz” , estos estarán permanentemente visibles en una barra superior junto con el objetivo o propósito de la partida que según la estrategia será el estado de la “felicidad de la población”.</p>
                    <p>Las misiones tendrían un indicador visual atractivo que incentive al jugador a cumplir objetivos a corto y largo plazo, evitando que se pierdan en el micromanagement.
                        Las “misiones activas” estarán en una barra de progreso lateral que se actualiza en tiempo real y se puede minimizar. Esto evitará la necesidad de abrir menús adicionales solo para ver el estado de la ciudad. También tendremos acceso a datos vitales de la población como motivos de fallecimiento.</p>
                    
                  </li>
                  <li>
                    <p>Control total sobre los sistemas de tráfico y construcción:</p>
                    <p>Mediante un nuevo *modo de tráfico* que se activa desde un botón fijo, el jugador ahora tendrá mayor control sobre el tráfico y la gestión de infraestructuras. Se implementará un sistema que permita al jugador definir dónde colocar “señales de tráfico”, “cedas” y “stops”, personalizando el flujo vial de la ciudad. Además, se agregarán “flechas direccionales” que indicarán claramente la conexión entre edificios y carreteras. </p>
                    
                    
                  </li>
                </ul>
            <div class="flex-row">
              <img
                class="container-img"
                src="/images/skylines1.webp"
                loading="lazy"
                alt="rediseño citiesSkylines2"
              />
              <div class="p-short flex p-column-xxs padding-Y-xs">
                <ul>
                  <li>
                    <p>Gestión avanzada de presupuestos y estadísticas asincrónicas:</p>
                    <p>El sistema de presupuesto será más visual y menos intrusivo. En lugar de una ventana en pantalla completa, se abrirá un panel lateral con gráficos interactivos que muestren cómo afectan los cambios a recursos clave como la energía y el agua. Las estadísticas se actualizarán en tiempo real, sin interrumpir la jugabilidad.</p>
                  </li>
                   <li>
                    <p> Mayor interacción del jugador:</p>
                    <p>Se dará al jugador más herramientas para intervenir y ajustar sus decisiones estratégicas de la ciudad, como  leyes, establecer zonas de emergencia o controlar detalles de las infraestructuras.</p>
                  </li>
                  <li>
                    <p>Mapas temáticos con mejor contraste:</p>
                    <p>El mapa de recursos será rediseñado para mostrar los diferentes elementos con colores lógicos y bien diferenciados, el contraste se mejorará para que los edificios ya ubicados sean fáciles de distinguir del entorno.</p>
                  </li>
                </ul>
              </div>
            </div>
                  
        </div>
        </div>
      </div>
    </section>
  `},kv={name:"Contacta",setup(){const e=Qt({nombre:"",email:"",telefono:"",interes:"",tipoProyecto:"",tamanoProyecto:"",mensaje:"",help:!1,fromPage:""});Zs(()=>{e.value.fromPage=localStorage.getItem("fromPage")||"Desconocido"});const t=Qt(1),s=()=>{t.value===1&&(t.value=2)},n=it(()=>{switch(e.value.interes){case"uxui":return{tipoProyecto:["E-commerce","Blog","Otros"],tamanoProyecto:["10 pantallas o menos","20 pantallas o menos","+20 pantallas"]};case"programming":return{tipoProyecto:["Interfaz o Front-end","Lado servidor o Back-end","Front y Back-end"],tamanoProyecto:["10 pantallas o menos","20 pantallas o menos","+20 pantallas"]};case"games":return{tipoProyecto:["Documentación, spitch, GDD","Diseño HUD (prototipado Figma)","Creación HUD Unreal","Análisis y test jugabilidad + UX"]};case"unreal":return{tipoProyecto:["Cinemáticas corporativas","Videojuegos"]};default:return{}}});return{form:e,currentStep:t,nextStep:s,opcionesDinamicas:n,submitForm:async()=>{const o={...e.value};try{const a=await(await fetch("https://admin.mariadevdesign.com/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();a.success?(alert("Formulario enviado correctamente"),e.value={},a.redirect&&(window.location.href=a.redirect)):alert("Error al enviar el formulario")}catch(r){console.error("Error:",r),alert("Hubo un problema al enviar el formulario")}}}},template:`
    <section class="background-form">
      <div class="contact-form-1 container-column-md flex ">
        <h1 class="visually-hidden ">Contacta</h1>
        
        <!-- Formulario paso 1 (Nombre, Email, Teléfono) -->
        <form class="p-column-xs flex align-center" @submit.prevent="nextStep" v-if="currentStep === 1">
          <h2 class="padding-xs p-align">Datos personales</h2>
          <div class="form-input">
            <input
              type="text"
              id="name"
              name="name"
              placeholder=" "
              required
              v-model="form.nombre"
              autocomplete="on">
            <label class="accesible" for="name" id="name-label">Nombre completo*</label>
          </div>

          <div class="form-input">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              maxlength="30"
              required
              v-model="form.email"
              autocomplete="on">
            <label class="accesible" for="email" id="email-label">Correo electrónico*</label>
          </div>

          <div class="form-input">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder=" "
              pattern="^\\+?[0-9]{7,}$"
              autocomplete="on"
              v-model="form.telefono">
            <label class="accesible" for="phone" id="phone-label">Teléfono</label>
          </div>
          
          <button type="submit">Siguiente paso</button>
        </form>

        <!-- Formulario paso 2 (Me interesa, dinámico, mensaje) -->
        <form class="second-part p-column-sm flex align-center" v-if="currentStep === 2" @submit.prevent="submitForm">
          <!-- Campos ocultos del primer paso -->
          <input type="hidden" name="nombre" :value="form.nombre">
          <input type="hidden" name="email" :value="form.email">
          <input type="hidden" name="telefono" :value="form.telefono">
          <input type="hidden" v-model="form.fromPage" />

          <div class="full-width align-center flex">
            <button type="button" class="back-btn" @click="currentStep--">
              ⤺ Atrás
            </button>
            <h2 class="p-align">Sobre tu proyecto</h2>
          </div>
          
          <div class="form-input">
            <label for="option-interes" required>Busco: </label>
            <select v-model="form.interes" id="option-interes" name="option-interes">
              <option value="">Seleccionar</option>
              <option value="uxui">Diseñar una Web</option>
              <option value="programming">Programar una Web</option>
              <option value="games">Diseñar Videojuegos</option>
              <option value="unreal">Unreal Engine</option>
            </select>
          </div>

          <div v-if="form.interes" class="specific-interest p-column-xs flex padding-xs">
            <div v-if="form.interes && opcionesDinamicas.tipoProyecto" class="form-input">
              <label for="tipoProyecto">Tipo de Proyecto:</label>
              <select id="tipoProyecto" v-model="form.tipoProyecto">
                <option v-for="tipo in opcionesDinamicas.tipoProyecto" :key="tipo" :value="tipo">{{ tipo }}</option>
              </select>
            </div>

            <div v-if="form.interes && opcionesDinamicas.tamanoProyecto" class="form-input">
              <label for="tamanoProyecto">Tamaño del Proyecto:</label>
              <select id="tamanoProyecto" v-model="form.tamanoProyecto">
                <option v-for="tamano in opcionesDinamicas.tamanoProyecto" :key="tamano" :value="tamano">{{ tamano }}</option>
              </select>
            </div>
          </div>

          <div>
            <label for="message">Para saber como ayudarte necesito toda la información posible: </label>
            <textarea id="message" v-model="form.mensaje" name="message" placeholder="Escribe al menos 2 líneas." rows="5" minlength="40" required></textarea>
          </div>

          <div class="call">
            <input type="checkbox" v-model="form.help" id="help" name="help">
            <label for="help">Tengo una idea, pero no sé por dónde empezar...</label>
          </div>

          <button type="submit" class="submit-btn">Enviar</button>
        </form>

        <div class="whatsapp-link">
          <p>Si lo prefieres contacta por <a href="https://wa.me/34671303377?text=Hola! Quiero información sobre: " target="_blank">WhatsApp</a></p>
        </div>
      </div>
    </section>
  `},Ov={name:"Thanks",template:`
    

  <section :style="{ height: '100vh',fontWeight:'500' , backgroundColor:'white' , color:'black'}">
    <h1>¡Gracias por contactar!</h1>
    <p class="p-align">He recibido tu mensaje. <br> Analizaré tus necesidades y te enviaré un presupuesto lo antes posible <svg id="Favorite--Streamline-Carbon" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" height="16" width="16"><desc>Favorite Streamline Icon: https://streamlinehq.com</desc><defs></defs><title>favorite</title><path d="M10.5234375 2.8125a2.5640625 2.5640625 0 0 1 1.8328125000000002 0.7687499999999999 2.671875 2.671875 0 0 1 0 3.75L7.5 12.2484375 2.64375 7.331250000000001a2.671875 2.671875 0 0 1 0 -3.75 2.56875 2.56875 0 0 1 3.6656250000000004 0l1.190625 1.21875 1.1859374999999999 -1.209375A2.5500000000000003 2.5500000000000003 0 0 1 10.5234375 2.8125m0 -0.9375a3.5015625 3.5015625 0 0 0 -2.503125 1.05L7.5 3.45l-0.5203125000000001 -0.525a3.5109375000000003 3.5109375000000003 0 0 0 -5.00625 0 3.61875 3.61875 0 0 0 0 5.071875L7.5 13.59375l5.5265625 -5.596875a3.61875 3.61875 0 0 0 0 -5.071875A3.5109375000000003 3.5109375000000003 0 0 0 10.5234375 1.875Z" fill="#000000" stroke-width="1"></path><path id="_Transparent_Rectangle_" d="M0 0h15v15H0Z" fill="none" stroke-width="1"></path></svg> </p>
    <p>  Recuerda que también tienes disponible <a :style="{ color:'#14bc51', fontWeight:'bold', padding:'0' }" href="https://wa.me/34671303377?text=Hola! Quiero información sobre: " target="_blank">WhatsApp</a> </p>
     <router-link  to="/" :style="{ color:'white', backgroundColor:'#0169d8', borderRadius: '5px'}">Volver a Inicio</router-link>
  </section>


    `},Mv=[{path:"/",name:"Landing",component:Av},{path:"/uxui",name:"Uxui",component:Iv},{path:"/programming",name:"Programming",component:Pv},{path:"/games",name:"Games",component:Nv},{path:"/sobreMi",name:"SobreMi",component:Rv},{path:"/contacta",name:"Contacta",component:kv},{path:"/thanks",name:"Thanks",component:Ov}],Nf=wv({history:ev(),routes:Mv,scrollBehavior(e,t,s){return{top:0,behavior:"smooth"}}});function Lv(e){localStorage.setItem("fromPage",e),Nf.push({path:"/contacta"})}const kf=Ni({data(){return{currentPage:"Landing",menuOpen:!1,isMobileOrTablet:!1,isLoading:!0}},computed:{currentPageClassComputed(){return`page-${this.currentPage.toLowerCase()}`}},methods:{toggleMenu(){this.menuOpen=!this.menuOpen},updateScreenSize(){this.isMobileOrTablet=window.innerWidth<=950,this.isMobileOrTablet||(this.menuOpen=!1)}},watch:{$route(e,t){this.currentPage=e.name||"Landing",this.currentPage!=="Landing"&&setTimeout(yf,500),Qs(()=>{const s=document.querySelector(".btn");if(s&&s.remove(),["Uxui","Programming","Games"].includes(this.currentPage)){const o=document.createElement("button");o.classList.add("btn","contact-btn");const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("xmlns","http://www.w3.org/2000/svg"),r.setAttribute("height","24px"),r.setAttribute("viewBox","0 -960 960 960"),r.setAttribute("width","32px"),r.setAttribute("fill","#62626F");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"),r.appendChild(a),o.appendChild(r),document.body.appendChild(o)}document.querySelectorAll(".contact-btn").forEach(o=>{o.addEventListener("click",r=>{console.log(`desde ${this.currentPage}`),r.preventDefault(),Lv(this.currentPage)})}),document.querySelector("main").addEventListener("click",()=>{this.menuOpen&&(this.menuOpen=!1)})})}},mounted(){console.log("vue montado"),this.updateScreenSize(),window.addEventListener("resize",this.updateScreenSize)},beforeUnmount(){window.removeEventListener("resize",this.updateScreenSize)}});kf.use(Nf);kf.mount("#app");
