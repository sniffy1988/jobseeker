import{u as Q}from"./states.8ad75a21.js";import{d as Y,E as Z,r as R,u as j,i as b,q as z,C as B,y as M,x as A,t as W,z as e0,I as r0,D as T}from"./entry.7e10a511.js";var D,n0=new Uint8Array(16);function J(){if(!D&&(D=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!D))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return D(n0)}const a0=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function K(r){return typeof r=="string"&&a0.test(r)}var c=[];for(var _=0;_<256;++_)c.push((_+256).toString(16).substr(1));function F(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,e=(c[r[o+0]]+c[r[o+1]]+c[r[o+2]]+c[r[o+3]]+"-"+c[r[o+4]]+c[r[o+5]]+"-"+c[r[o+6]]+c[r[o+7]]+"-"+c[r[o+8]]+c[r[o+9]]+"-"+c[r[o+10]]+c[r[o+11]]+c[r[o+12]]+c[r[o+13]]+c[r[o+14]]+c[r[o+15]]).toLowerCase();if(!K(e))throw TypeError("Stringified UUID is invalid");return e}var G,L,$=0,H=0;function f0(r,o,e){var n=o&&e||0,a=o||new Array(16);r=r||{};var f=r.node||G,t=r.clockseq!==void 0?r.clockseq:L;if(f==null||t==null){var u=r.random||(r.rng||J)();f==null&&(f=G=[u[0]|1,u[1],u[2],u[3],u[4],u[5]]),t==null&&(t=L=(u[6]<<8|u[7])&16383)}var l=r.msecs!==void 0?r.msecs:Date.now(),v=r.nsecs!==void 0?r.nsecs:H+1,d=l-$+(v-H)/1e4;if(d<0&&r.clockseq===void 0&&(t=t+1&16383),(d<0||l>$)&&r.nsecs===void 0&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");$=l,H=v,L=t,l+=122192928e5;var U=((l&268435455)*1e4+v)%4294967296;a[n++]=U>>>24&255,a[n++]=U>>>16&255,a[n++]=U>>>8&255,a[n++]=U&255;var i=l/4294967296*1e4&268435455;a[n++]=i>>>8&255,a[n++]=i&255,a[n++]=i>>>24&15|16,a[n++]=i>>>16&255,a[n++]=t>>>8|128,a[n++]=t&255;for(var x=0;x<6;++x)a[n+x]=f[x];return o||F(a)}function t0(r){if(!K(r))throw TypeError("Invalid UUID");var o,e=new Uint8Array(16);return e[0]=(o=parseInt(r.slice(0,8),16))>>>24,e[1]=o>>>16&255,e[2]=o>>>8&255,e[3]=o&255,e[4]=(o=parseInt(r.slice(9,13),16))>>>8,e[5]=o&255,e[6]=(o=parseInt(r.slice(14,18),16))>>>8,e[7]=o&255,e[8]=(o=parseInt(r.slice(19,23),16))>>>8,e[9]=o&255,e[10]=(o=parseInt(r.slice(24,36),16))/1099511627776&255,e[11]=o/4294967296&255,e[12]=o>>>24&255,e[13]=o>>>16&255,e[14]=o>>>8&255,e[15]=o&255,e}function o0(r){r=unescape(encodeURIComponent(r));for(var o=[],e=0;e<r.length;++e)o.push(r.charCodeAt(e));return o}var l0="6ba7b810-9dad-11d1-80b4-00c04fd430c8",u0="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function X(r,o,e){function n(a,f,t,u){if(typeof a=="string"&&(a=o0(a)),typeof f=="string"&&(f=t0(f)),f.length!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var l=new Uint8Array(16+a.length);if(l.set(f),l.set(a,f.length),l=e(l),l[6]=l[6]&15|o,l[8]=l[8]&63|128,t){u=u||0;for(var v=0;v<16;++v)t[u+v]=l[v];return t}return F(l)}try{n.name=r}catch{}return n.DNS=l0,n.URL=u0,n}function s0(r){if(typeof r=="string"){var o=unescape(encodeURIComponent(r));r=new Uint8Array(o.length);for(var e=0;e<o.length;++e)r[e]=o.charCodeAt(e)}return d0(v0(c0(r),r.length*8))}function d0(r){for(var o=[],e=r.length*32,n="0123456789abcdef",a=0;a<e;a+=8){var f=r[a>>5]>>>a%32&255,t=parseInt(n.charAt(f>>>4&15)+n.charAt(f&15),16);o.push(t)}return o}function P(r){return(r+64>>>9<<4)+14+1}function v0(r,o){r[o>>5]|=128<<o%32,r[P(o)-1]=o;for(var e=1732584193,n=-271733879,a=-1732584194,f=271733878,t=0;t<r.length;t+=16){var u=e,l=n,v=a,d=f;e=m(e,n,a,f,r[t],7,-680876936),f=m(f,e,n,a,r[t+1],12,-389564586),a=m(a,f,e,n,r[t+2],17,606105819),n=m(n,a,f,e,r[t+3],22,-1044525330),e=m(e,n,a,f,r[t+4],7,-176418897),f=m(f,e,n,a,r[t+5],12,1200080426),a=m(a,f,e,n,r[t+6],17,-1473231341),n=m(n,a,f,e,r[t+7],22,-45705983),e=m(e,n,a,f,r[t+8],7,1770035416),f=m(f,e,n,a,r[t+9],12,-1958414417),a=m(a,f,e,n,r[t+10],17,-42063),n=m(n,a,f,e,r[t+11],22,-1990404162),e=m(e,n,a,f,r[t+12],7,1804603682),f=m(f,e,n,a,r[t+13],12,-40341101),a=m(a,f,e,n,r[t+14],17,-1502002290),n=m(n,a,f,e,r[t+15],22,1236535329),e=p(e,n,a,f,r[t+1],5,-165796510),f=p(f,e,n,a,r[t+6],9,-1069501632),a=p(a,f,e,n,r[t+11],14,643717713),n=p(n,a,f,e,r[t],20,-373897302),e=p(e,n,a,f,r[t+5],5,-701558691),f=p(f,e,n,a,r[t+10],9,38016083),a=p(a,f,e,n,r[t+15],14,-660478335),n=p(n,a,f,e,r[t+4],20,-405537848),e=p(e,n,a,f,r[t+9],5,568446438),f=p(f,e,n,a,r[t+14],9,-1019803690),a=p(a,f,e,n,r[t+3],14,-187363961),n=p(n,a,f,e,r[t+8],20,1163531501),e=p(e,n,a,f,r[t+13],5,-1444681467),f=p(f,e,n,a,r[t+2],9,-51403784),a=p(a,f,e,n,r[t+7],14,1735328473),n=p(n,a,f,e,r[t+12],20,-1926607734),e=g(e,n,a,f,r[t+5],4,-378558),f=g(f,e,n,a,r[t+8],11,-2022574463),a=g(a,f,e,n,r[t+11],16,1839030562),n=g(n,a,f,e,r[t+14],23,-35309556),e=g(e,n,a,f,r[t+1],4,-1530992060),f=g(f,e,n,a,r[t+4],11,1272893353),a=g(a,f,e,n,r[t+7],16,-155497632),n=g(n,a,f,e,r[t+10],23,-1094730640),e=g(e,n,a,f,r[t+13],4,681279174),f=g(f,e,n,a,r[t],11,-358537222),a=g(a,f,e,n,r[t+3],16,-722521979),n=g(n,a,f,e,r[t+6],23,76029189),e=g(e,n,a,f,r[t+9],4,-640364487),f=g(f,e,n,a,r[t+12],11,-421815835),a=g(a,f,e,n,r[t+15],16,530742520),n=g(n,a,f,e,r[t+2],23,-995338651),e=h(e,n,a,f,r[t],6,-198630844),f=h(f,e,n,a,r[t+7],10,1126891415),a=h(a,f,e,n,r[t+14],15,-1416354905),n=h(n,a,f,e,r[t+5],21,-57434055),e=h(e,n,a,f,r[t+12],6,1700485571),f=h(f,e,n,a,r[t+3],10,-1894986606),a=h(a,f,e,n,r[t+10],15,-1051523),n=h(n,a,f,e,r[t+1],21,-2054922799),e=h(e,n,a,f,r[t+8],6,1873313359),f=h(f,e,n,a,r[t+15],10,-30611744),a=h(a,f,e,n,r[t+6],15,-1560198380),n=h(n,a,f,e,r[t+13],21,1309151649),e=h(e,n,a,f,r[t+4],6,-145523070),f=h(f,e,n,a,r[t+11],10,-1120210379),a=h(a,f,e,n,r[t+2],15,718787259),n=h(n,a,f,e,r[t+9],21,-343485551),e=C(e,u),n=C(n,l),a=C(a,v),f=C(f,d)}return[e,n,a,f]}function c0(r){if(r.length===0)return[];for(var o=r.length*8,e=new Uint32Array(P(o)),n=0;n<o;n+=8)e[n>>5]|=(r[n/8]&255)<<n%32;return e}function C(r,o){var e=(r&65535)+(o&65535),n=(r>>16)+(o>>16)+(e>>16);return n<<16|e&65535}function m0(r,o){return r<<o|r>>>32-o}function E(r,o,e,n,a,f){return C(m0(C(C(o,r),C(n,f)),a),e)}function m(r,o,e,n,a,f,t){return E(o&e|~o&n,r,o,a,f,t)}function p(r,o,e,n,a,f,t){return E(o&n|e&~n,r,o,a,f,t)}function g(r,o,e,n,a,f,t){return E(o^e^n,r,o,a,f,t)}function h(r,o,e,n,a,f,t){return E(e^(o|~n),r,o,a,f,t)}var p0=X("v3",48,s0);const g0=p0;function h0(r,o,e){r=r||{};var n=r.random||(r.rng||J)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,o){e=e||0;for(var a=0;a<16;++a)o[e+a]=n[a];return o}return F(n)}function i0(r,o,e,n){switch(r){case 0:return o&e^~o&n;case 1:return o^e^n;case 2:return o&e^o&n^e&n;case 3:return o^e^n}}function O(r,o){return r<<o|r>>>32-o}function w0(r){var o=[1518500249,1859775393,2400959708,3395469782],e=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof r=="string"){var n=unescape(encodeURIComponent(r));r=[];for(var a=0;a<n.length;++a)r.push(n.charCodeAt(a))}else Array.isArray(r)||(r=Array.prototype.slice.call(r));r.push(128);for(var f=r.length/4+2,t=Math.ceil(f/16),u=new Array(t),l=0;l<t;++l){for(var v=new Uint32Array(16),d=0;d<16;++d)v[d]=r[l*64+d*4]<<24|r[l*64+d*4+1]<<16|r[l*64+d*4+2]<<8|r[l*64+d*4+3];u[l]=v}u[t-1][14]=(r.length-1)*8/Math.pow(2,32),u[t-1][14]=Math.floor(u[t-1][14]),u[t-1][15]=(r.length-1)*8&4294967295;for(var U=0;U<t;++U){for(var i=new Uint32Array(80),x=0;x<16;++x)i[x]=u[U][x];for(var V=16;V<80;++V)i[V]=O(i[V-3]^i[V-8]^i[V-14]^i[V-16],1);for(var s=e[0],y=e[1],I=e[2],S=e[3],N=e[4],q=0;q<80;++q){var k=Math.floor(q/20),w=O(s,5)+i0(k,y,I,S)+N+o[k]+i[q]>>>0;N=S,S=I,I=O(y,30)>>>0,y=s,s=w}e[0]=e[0]+s>>>0,e[1]=e[1]+y>>>0,e[2]=e[2]+I>>>0,e[3]=e[3]+S>>>0,e[4]=e[4]+N>>>0}return[e[0]>>24&255,e[0]>>16&255,e[0]>>8&255,e[0]&255,e[1]>>24&255,e[1]>>16&255,e[1]>>8&255,e[1]&255,e[2]>>24&255,e[2]>>16&255,e[2]>>8&255,e[2]&255,e[3]>>24&255,e[3]>>16&255,e[3]>>8&255,e[3]&255,e[4]>>24&255,e[4]>>16&255,e[4]>>8&255,e[4]&255]}var V0=X("v5",80,w0);const x0=V0;var U0={v1:f0,v3:g0,v4:h0,v5:x0};const y0={class:"flex"},R0=Y({__name:"new",setup(r){const o=Z(),e=R(""),n=R(""),a=R(0),f=R(""),t=R("applied"),u=R(""),l=Q(),v=j(),d={required:V=>!!V||"Field is required"},U=["applied","screening","tech","rejected","offer"],i=R(null),x=async V=>{const{valid:s}=await V;s&&(l.add({id:U0.v1(),name:T(e),url:T(n),salary:T(a),role:T(f),status:T(t),note:T(u),lastChanged:new Date,dateApplication:new Date}),v.push("/"),o.success("Created job"))};return(V,s)=>{const y=b("v-text-field"),I=b("v-select"),S=b("v-textarea"),N=b("v-btn"),q=b("v-form"),k=b("v-container");return z(),B(k,{"grid-list-lg":""},{default:M(()=>[A(q,{ref_key:"formRef",ref:i,class:"max-w-lg mx-auto",onSubmit:r0(x,["prevent"])},{default:M(()=>[A(y,{id:"name",modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=w=>e.value=w),name:"name",label:"Name of application",rules:[d.required]},null,8,["modelValue","rules"]),A(y,{id:"role",modelValue:f.value,"onUpdate:modelValue":s[1]||(s[1]=w=>f.value=w),name:"role",label:"Role",rules:[d.required]},null,8,["modelValue","rules"]),A(y,{id:"url",modelValue:n.value,"onUpdate:modelValue":s[2]||(s[2]=w=>n.value=w),name:"url",label:"Url of application",rules:[d.required],prefix:"https://"},null,8,["modelValue","rules"]),A(y,{id:"salary",modelValue:a.value,"onUpdate:modelValue":s[3]||(s[3]=w=>a.value=w),name:"salary",label:"Salary",type:"number",prefix:"$",rules:[d.required]},null,8,["modelValue","rules"]),A(I,{modelValue:t.value,"onUpdate:modelValue":s[4]||(s[4]=w=>t.value=w),items:U,label:"Status",rules:[d.required]},null,8,["modelValue","rules"]),A(S,{modelValue:u.value,"onUpdate:modelValue":s[5]||(s[5]=w=>u.value=w),clearable:"",label:"Notes"},null,8,["modelValue"]),W("div",y0,[A(N,{color:"green",class:"mx-auto",type:"submit"},{default:M(()=>[e0(" Submit ")]),_:1})])]),_:1},8,["onSubmit"])]),_:1})}}});export{R0 as default};
