"use strict";(self.webpackChunkmmsp_land=self.webpackChunkmmsp_land||[]).push([[5861],{58971:(n,e,t)=>{t.d(e,{G6:()=>w,Ie:()=>I,J9:()=>g,RF:()=>x,U1:()=>T,vY:()=>r,ym:()=>y});var i=t(77981);const a=(n,e,t)=>[e,t],l=(n,e,t)=>[e,t,n[2]],o=(n,e,t)=>[e,t,n[2],n[3]];function r(n){return n?{originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:n.tolerance?[n.tolerance,n.tolerance]:[1,1],translate:null!=n.extent?[n.extent.xmin,n.extent.ymax]:[0,0]}:null}function s(n,e){let{scale:t,translate:i}=n;return Math.round((e-i[0])/t[0])}function u(n,e){let{scale:t,translate:i}=n;return Math.round((i[1]-e)/t[1])}function m(n,e,t){const i=[];let a,l,o,r;for(let m=0;m<t.length;m++){const f=t[m];m>0?(o=s(n,f[0]),r=u(n,f[1]),o===a&&r===l||(i.push(e(f,o-a,r-l)),a=o,l=r)):(a=s(n,f[0]),l=u(n,f[1]),i.push(e(f,a,l)))}return i.length>0?i:null}function f(n,e){let{scale:t,translate:i}=n;return e*t[0]+i[0]}function c(n,e){let{scale:t,translate:i}=n;return i[1]-e*t[1]}function d(n,e,t){const i=new Array(t.length);if(!t.length)return i;const[a,l]=n.scale;let o=f(n,t[0][0]),r=c(n,t[0][1]);i[0]=e(t[0],o,r);for(let s=1;s<t.length;s++){const n=t[s];o+=n[0]*a,r-=n[1]*l,i[s]=e(n,o,r)}return i}function p(n,e,t){const i=new Array(t.length);for(let a=0;a<t.length;a++)i[a]=d(n,e,t[a]);return i}function v(n,e,t,i,r){var s;return e.points=null!==(s=function(n,e,t,i){return m(n,t?i?o:l:i?l:a,e)}(n,t.points,i,r))&&void 0!==s?s:[],e}function x(n,e,t,i,a){return e.x=s(n,t.x),e.y=u(n,t.y),e!==t&&(i&&(e.z=t.z),a&&(e.m=t.m)),e}function z(n,e,t,i,r){const s=function(n,e,t,i){const r=[],s=t?i?o:l:i?l:a;for(let a=0;a<e.length;a++){const t=m(n,s,e[a]);t&&t.length>=3&&r.push(t)}return r.length?r:null}(n,t.rings,i,r);return s?(e.rings=s,e):null}function h(n,e,t,i,r){const s=function(n,e,t,i){const r=[],s=t?i?o:l:i?l:a;for(let a=0;a<e.length;a++){const t=m(n,s,e[a]);t&&t.length>=2&&r.push(t)}return r.length?r:null}(n,t.paths,i,r);return s?(e.paths=s,e):null}function y(n,e){return n&&e?(0,i.wp)(e)?x(n,{},e,!1,!1):(0,i.l9)(e)?h(n,{},e,!1,!1):(0,i.oU)(e)?z(n,{},e,!1,!1):(0,i.aW)(e)?v(n,{},e,!1,!1):(0,i.YX)(e)?(o=!1,r=!1,(a={}).xmin=s(t=n,(l=e).xmin),a.ymin=u(t,l.ymin),a.xmax=s(t,l.xmax),a.ymax=u(t,l.ymax),a!==l&&(o&&(a.zmin=l.zmin,a.zmax=l.zmax),r&&(a.mmin=l.mmin,a.mmax=l.mmax)),a):null:null;var t,a,l,o,r}function g(n,e,t,i,r){return null!=t&&(e.points=function(n,e,t,i){return d(n,t?i?o:l:i?l:a,e)}(n,t.points,i,r)),e}function T(n,e,t,i,a){return null==t||(e.x=f(n,t.x),e.y=c(n,t.y),e!==t&&(i&&(e.z=t.z),a&&(e.m=t.m))),e}function I(n,e,t,i,r){return null!=t&&(e.rings=function(n,e,t,i){return p(n,t?i?o:l:i?l:a,e)}(n,t.rings,i,r)),e}function w(n,e,t,i,r){return null!=t&&(e.paths=function(n,e,t,i){return p(n,t?i?o:l:i?l:a,e)}(n,t.paths,i,r)),e}},87383:(n,e,t)=>{t.r(e),t.d(e,{classBreaks:()=>r,heatmapStatistics:()=>u,histogram:()=>s,summaryStatistics:()=>l,uniqueValues:()=>o});var i=t(95281),a=t(71486);async function l(n){const{attribute:e,features:t}=n,{normalizationType:l,normalizationField:o,minValue:r,maxValue:s,fieldType:u}=e,m=await(0,i.do)({field:e.field,valueExpression:e.valueExpression,normalizationType:l,normalizationField:o,normalizationTotal:e.normalizationTotal,viewInfoParams:e.viewInfoParams,timeZone:e.timeZone,fieldInfos:e.fieldInfos},t),f=(0,a.S5)({normalizationType:l,normalizationField:o,minValue:r,maxValue:s}),c={value:.5,fieldType:u},d="esriFieldTypeString"===u?(0,a.H0)({values:m,supportsNullCount:f,percentileParams:c}):(0,a.i5)({values:m,minValue:r,maxValue:s,useSampleStdDev:!l,supportsNullCount:f,percentileParams:c});return(0,a.F_)(d,"esriFieldTypeDate"===u)}async function o(n){const{attribute:e,features:t}=n,l=await(0,i.do)({field:e.field,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,valueExpression:e.valueExpression,viewInfoParams:e.viewInfoParams,timeZone:e.timeZone,fieldInfos:e.fieldInfos},t,!1),o=(0,a.eT)(l);return(0,a.Qm)(o,e.domains,e.returnAllCodedValues,e.fieldDelimiter)}async function r(n){const{attribute:e,features:t}=n,{field:l,normalizationType:o,normalizationField:r,normalizationTotal:s,classificationMethod:u}=e,m=await(0,i.do)({field:l,valueExpression:e.valueExpression,normalizationType:o,normalizationField:r,normalizationTotal:s,viewInfoParams:e.viewInfoParams,timeZone:e.timeZone,fieldInfos:e.fieldInfos},t),f=(0,a.G2)(m,{field:l,normalizationType:o,normalizationField:r,normalizationTotal:s,classificationMethod:u,standardDeviationInterval:e.standardDeviationInterval,numClasses:e.numClasses,minValue:e.minValue,maxValue:e.maxValue});return(0,a.DL)(f,u)}async function s(n){const{attribute:e,features:t}=n,{field:l,normalizationType:o,normalizationField:r,normalizationTotal:s,classificationMethod:u}=e,m=await(0,i.do)({field:l,valueExpression:e.valueExpression,normalizationType:o,normalizationField:r,normalizationTotal:s,viewInfoParams:e.viewInfoParams,timeZone:e.timeZone,fieldInfos:e.fieldInfos},t);return(0,a.oF)(m,{field:l,normalizationType:o,normalizationField:r,normalizationTotal:s,classificationMethod:u,standardDeviationInterval:e.standardDeviationInterval,numBins:e.numBins,minValue:e.minValue,maxValue:e.maxValue})}async function u(n){var e;const{attribute:t,features:a}=n,{field:l,radius:o,fieldOffset:r,transform:s,spatialReference:u}=t,m=null!==(e=t.size)&&void 0!==e?e:[0,0],f=(0,i.gq)(null!==a&&void 0!==a?a:[],s,u,m),{count:c,min:d,max:p,mean:v,stdDev:x}=(0,i.qQ)(f,null!==o&&void 0!==o?o:void 0,r,l,m[0],m[1]);return{count:c,min:d,max:p,avg:v,stddev:x}}}}]);
//# sourceMappingURL=5861.bf4c90c8.chunk.js.map