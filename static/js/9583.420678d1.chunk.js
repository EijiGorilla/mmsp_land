"use strict";(self.webpackChunkmmsp_land=self.webpackChunkmmsp_land||[]).push([[9583],{19583:(e,r,t)=>{t.r(r),t.d(r,{default:()=>V});var i=t(27366),s=t(76200),a=t(62044),o=t(10064),l=t(93002),n=t(97642),y=t(66978),p=t(49861),u=t(25243),c=(t(63780),t(93169),t(38511)),d=t(69912),h=t(31201),m=t(25265),b=t(53866),f=t(82582),v=t(92975),g=t(30651),S=t(27961),_=t(6741),x=t(11936),I=t(6693),C=t(46671),w=t(6061),L=t(29598),O=t(71684),E=t(56811),P=t(18870),T=t(99063),D=t(45948),F=t(44041),N=t(83690),M=t(77990),R=t(58132),Z=t(26704),j=t(6701);let J=class extends((0,I.h)((0,T.n)((0,E.M)((0,P.x)((0,_.O)((0,x.Y)((0,w.q)((0,L.I)((0,n.R)((0,O.Q)((0,S.V)((0,C.N)(g.Z))))))))))))){constructor(){super(...arguments),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(y.r9).then((()=>this._fetchService(r)))),Promise.resolve(this)}readImageFormat(e,r){const t=r.supportedImageFormatTypes;return t&&t.includes("PNG32")?"png32":"png24"}writeSublayers(e,r,t,i){var s;if(!this.loaded||!e)return;const a=e.slice().reverse().flatten((e=>{let{sublayers:r}=e;return r&&r.toArray().reverse()})).toArray();let o=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&null!==(s=this.capabilities.exportMap)&&void 0!==s&&s.supportsDynamicLayers){const e=(0,m.M9)(i.origin);if(e===m.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;o=(0,R.QV)(a,e,m.s3.SERVICE)}else if(e>m.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");o=(0,R.QV)(a,e.sublayers,(0,m.M9)(e.origin))}}const l=[],n={writeSublayerStructure:o,...i};let y=o;a.forEach((e=>{const r=e.write({},n);l.push(r),y=y||"user"===e.originOf("visible")})),l.some((e=>Object.keys(e).length>1))&&(r.layers=l),y&&(r.visibleLayers=a.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,r,t,i){var s;const a=(null===i||void 0===i?void 0:i.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const o=new F.R({layer:this,floors:null===i||void 0===i?void 0:i.floors,scale:(0,f.yZ)({extent:e,width:r})*a}),l=o.toJSON();o.destroy();const n=null===i||void 0===i||!i.rotation||this.version<10.3?{}:{rotation:-i.rotation},y=null===(s=e)||void 0===s?void 0:s.spatialReference,p=(0,v.B9)(y);l.dpi*=a;const u={};if(null!==i&&void 0!==i&&i.timeExtent){const{start:e,end:r}=i.timeExtent.toJSON();u.time=e&&r&&e===r?""+e:"".concat(null!==e&&void 0!==e?e:"null",",").concat(null!==r&&void 0!==r?r:"null")}else this.timeInfo&&!this.timeInfo.hasLiveData&&(u.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:p,imageSR:p,size:r+","+t,...l,...n,...u}}async fetchImage(e,r,t,i){const{data:s}=await this._fetchImage("image",e,r,t,i);return s}async fetchImageBitmap(e,r,t,i){const{data:s,url:a}=await this._fetchImage("blob",e,r,t,i);return(0,N.g)(s,a,null===i||void 0===i?void 0:i.signal)}async fetchRecomputedExtents(){const e={...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:r}=await(0,s.Z)(this.url,e),{extent:t,fullExtent:i,timeExtent:o}=r,l=t||i;return{fullExtent:l&&b.Z.fromJSON(l),timeExtent:o&&a.Z.fromJSON({start:o[0],end:o[1]})}}loadAll(){return(0,l.G)(this,(e=>{e(this.allSublayers)}))}serviceSupportsSpatialReference(e){return(0,Z.D)(this,e)}async _fetchImage(e,r,t,i,a){var l,n,p;const u={responseType:e,signal:null!==(l=null===a||void 0===a?void 0:a.signal)&&void 0!==l?l:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(r,t,i,a),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},c=this.parsedUrl.path+"/export";if(null!=(null===(n=u.query)||void 0===n?void 0:n.dynamicLayers)&&(null===(p=this.capabilities)||void 0===p||null===(p=p.exportMap)||void 0===p||!p.supportsDynamicLayers))throw new o.Z("mapimagelayer:dynamiclayer-not-supported","service ".concat(this.url," doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source."),{query:u.query});try{const{data:e}=await(0,s.Z)(c,u);return{data:e,url:c}}catch(d){if((0,y.D_)(d))throw d;throw new o.Z("mapimagelayer:image-fetch-error","Unable to load image: ".concat(c),{error:d})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:t}=await(0,s.Z)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});t&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}};(0,i._)([(0,p.Cb)((0,j.mi)("dateFieldsTimeReference"))],J.prototype,"dateFieldsTimeZone",void 0),(0,i._)([(0,p.Cb)({type:Boolean})],J.prototype,"datesInUnknownTimezone",void 0),(0,i._)([(0,p.Cb)()],J.prototype,"dpi",void 0),(0,i._)([(0,p.Cb)()],J.prototype,"gdbVersion",void 0),(0,i._)([(0,p.Cb)()],J.prototype,"imageFormat",void 0),(0,i._)([(0,c.r)("imageFormat",["supportedImageFormatTypes"])],J.prototype,"readImageFormat",null),(0,i._)([(0,p.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],J.prototype,"imageMaxHeight",void 0),(0,i._)([(0,p.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],J.prototype,"imageMaxWidth",void 0),(0,i._)([(0,p.Cb)()],J.prototype,"imageTransparency",void 0),(0,i._)([(0,p.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],J.prototype,"isReference",void 0),(0,i._)([(0,p.Cb)({json:{read:!1,write:!1}})],J.prototype,"labelsVisible",void 0),(0,i._)([(0,p.Cb)({type:["ArcGISMapServiceLayer"]})],J.prototype,"operationalLayerType",void 0),(0,i._)([(0,p.Cb)({json:{read:!1,write:!1}})],J.prototype,"popupEnabled",void 0),(0,i._)([(0,p.Cb)((0,j.mi)("preferredTimeReference"))],J.prototype,"preferredTimeZone",void 0),(0,i._)([(0,p.Cb)()],J.prototype,"sourceJSON",void 0),(0,i._)([(0,p.Cb)({json:{write:{ignoreOrigin:!0}}})],J.prototype,"sublayers",void 0),(0,i._)([(0,h.c)("sublayers",{layers:{type:[M.Z]},visibleLayers:{type:[u.z8]}})],J.prototype,"writeSublayers",null),(0,i._)([(0,p.Cb)({type:["show","hide","hide-children"]})],J.prototype,"listMode",void 0),(0,i._)([(0,p.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],J.prototype,"type",void 0),(0,i._)([(0,p.Cb)(D.HQ)],J.prototype,"url",void 0),J=(0,i._)([(0,d.j)("esri.layers.MapImageLayer")],J);const V=J},44041:(e,r,t)=>{t.d(r,{R:()=>d});var i=t(27366),s=t(7138),a=t(76672),o=t(49861),l=(t(25243),t(63780),t(93169),t(69912)),n=t(82582),y=t(45948),p=t(87072),u=t(58132);const c={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let d=class extends s.Z{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const r=(0,p.f)(this.floors,e);return e.toExportImageJSON(r)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,u.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(c[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const r=!(null===(e=this.floors)||void 0===e||!e.length),t=this.visibleSublayers.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return t.length?JSON.stringify(t.reduce(((e,r)=>{const t=(0,p.f)(this.floors,r),i=(0,a._)(t,r.definitionExpression);return null!=i&&(e[r.id]=i),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,t=this.scale,i=r=>{r.visible&&(0===t||(0,n.o2)(t,r.minScale,r.maxScale))&&(r.sublayers?r.sublayers.forEach(i):e.unshift(r))};r&&r.forEach(i);const s=this._get("visibleSublayers");return!s||s.length!==e.length||s.some(((r,t)=>e[t]!==r))?e:s}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};(0,i._)([(0,o.Cb)({readOnly:!0})],d.prototype,"dynamicLayers",null),(0,i._)([(0,o.Cb)()],d.prototype,"floors",void 0),(0,i._)([(0,o.Cb)({readOnly:!0})],d.prototype,"hasDynamicLayers",null),(0,i._)([(0,o.Cb)()],d.prototype,"layer",null),(0,i._)([(0,o.Cb)({readOnly:!0})],d.prototype,"layers",null),(0,i._)([(0,o.Cb)({readOnly:!0})],d.prototype,"layerDefs",null),(0,i._)([(0,o.Cb)({type:Number})],d.prototype,"scale",void 0),(0,i._)([(0,o.Cb)(y.qG)],d.prototype,"timeExtent",void 0),(0,i._)([(0,o.Cb)({readOnly:!0})],d.prototype,"version",null),(0,i._)([(0,o.Cb)({readOnly:!0})],d.prototype,"visibleSublayers",null),d=(0,i._)([(0,l.j)("esri.layers.mixins.ExportImageParameters")],d)},87072:(e,r,t)=>{function i(e){var r;const t=e.layer;return"floorInfo"in t&&null!==(r=t.floorInfo)&&void 0!==r&&r.floorField&&"floors"in e.view?a(e.view.floors,t.floorInfo.floorField):null}function s(e,r){var t;return"floorInfo"in r&&null!==(t=r.floorInfo)&&void 0!==t&&t.floorField?a(e,r.floorInfo.floorField):null}function a(e,r){if(null===e||void 0===e||!e.length)return null;const t=e.filter((e=>""!==e)).map((e=>"'".concat(e,"'")));return t.push("''"),"".concat(r," IN (").concat(t.join(","),") OR ").concat(r," IS NULL")}t.d(r,{c:()=>i,f:()=>s})}}]);
//# sourceMappingURL=9583.420678d1.chunk.js.map