"use strict";(self.webpackChunkmmsp_land=self.webpackChunkmmsp_land||[]).push([[2662],{90110:(e,t,i)=>{i.d(t,{c:()=>o});var s=i(62272),a=i(80613),r=i(64510);class o extends r.Z{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[s.U.bitmap],target:()=>this.children,drawPhase:a.jx.MAP});return[...super.prepareRenderPasses(e),t]}_manageFade(){this.children.reduce(((e,t)=>e+(t.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1)}}},52662:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var s=i(27366),a=i(32718),r=i(66978),o=i(49861),n=(i(25243),i(63780),i(93169),i(69912)),h=i(90110),d=i(95986),p=i(9229),c=i(67581),l=i(13107);let u=class extends((0,l.Z)((0,d.y)(c.Z))){update(e){this._strategy.update(e).catch((e=>{(0,r.D_)(e)||a.Z.getLogger(this).error(e)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new h.c,this.container.addChild(this._bitmapContainer),this._strategy=new p.Z({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,t,i){return this.layer.fetchImageBitmap(e,t,i)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};(0,s._)([(0,o.Cb)()],u.prototype,"_strategy",void 0),(0,s._)([(0,o.Cb)()],u.prototype,"updating",void 0),u=(0,s._)([(0,n.j)("esri.views.2d.layers.BaseDynamicLayerView2D")],u);const m=u},9229:(e,t,i)=>{i.d(t,{Z:()=>P});var s=i(27366),a=i(7138),r=(i(93169),i(66978)),o=i(49861),n=(i(25243),i(63780),i(69912)),h=i(65156),d=i(92975),p=i(22824);const c=Math.PI/180;function l(e){return e*c}function u(e,t){const i=l(t.rotation),s=Math.abs(Math.cos(i)),a=Math.abs(Math.sin(i)),[r,o]=t.size;return e[0]=Math.round(o*a+r*s),e[1]=Math.round(o*s+r*a),e}var m=i(45956),g=i(37995),_=i(73828);const y=(0,h.Ue)(),f=[0,0],b=new _.Z(0,0,0,0),v=2048,x=2048,C=!1,w=!1,R=!1;let M=class extends a.Z{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=R,this.imageMaxWidth=v,this.imageMaxHeight=x,this.imageRotationSupported=C,this.imageNormalizationSupported=w,this.update=(0,r.Ds)((async(e,t)=>{var i,s;if((0,r.k_)(t),!e.stationary||this.destroyed)return;const a=e.state,o=(0,d.C5)(a.spatialReference),n=this.hidpi?e.pixelRatio:1,h=this.imageNormalizationSupported&&a.worldScreenWidth&&a.worldScreenWidth<a.size[0],p=null!==(i=this.imageMaxWidth)&&void 0!==i?i:0,c=null!==(s=this.imageMaxHeight)&&void 0!==s?s:0;h?(f[0]=a.worldScreenWidth,f[1]=a.size[1]):this.imageRotationSupported?(f[0]=a.size[0],f[1]=a.size[1]):u(f,a);const l=Math.floor(f[0]*n)>p||Math.floor(f[1]*n)>c,m=o&&(a.extent.xmin<o.valid[0]||a.extent.xmax>o.valid[1]),g=!this.imageNormalizationSupported&&m,_=!l&&!g,y=this.imageRotationSupported?a.rotation:0,v=this.container.children.slice();if(_){const e=h?a.paddedViewState.center:a.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(a,f,e,a.resolution,y,n,t)}else{let e=Math.min(p,c);g&&(e=Math.min(a.worldScreenWidth,e)),this._imagePromise=this._tiledExport(a,e,n,t)}try{var x;const e=null!==(x=await this._imagePromise)&&void 0!==x?x:[];(0,r.k_)(t);const i=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=e;for(const t of v)e.includes(t)||i.push(t.fadeOut().then((()=>{t.remove(),t.destroy()})));for(const t of e)i.push(t.fadeIn());await Promise.all(i)}catch(b){this._imagePromise=null,(0,r.r9)(b)}}),5e3),this.updateExports=(0,r.Ds)((async e=>{const t=[];for(const i of this.container.children){if(!i.visible||!i.stage)return;t.push(e(i).then((()=>{i.invalidateTexture(),i.requestRender()})))}this._imagePromise=(0,r.as)(t).then((()=>this._imagePromise=null)),await this._imagePromise}))}destroy(){this.bitmaps.forEach((e=>e.destroy())),this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}async _export(e,t,i,s,a,o){const n=await this.fetchSource(e,Math.floor(t*a),Math.floor(i*a),{rotation:s,pixelRatio:a,signal:o});(0,r.k_)(o);const h=new m.eY(null,!0);return h.x=e.xmin,h.y=e.ymax,h.resolution=e.width/t,h.rotation=s,h.pixelRatio=a,h.opacity=0,this.container.addChild(h),await h.setSourceAsync(n,o),(0,r.k_)(o),h}async _singleExport(e,t,i,s,a,r,o){!function(e,t,i,s){const[a,r]=t,[o,n]=s,h=.5*i;e[0]=a-h*o,e[1]=r-h*n,e[2]=a+h*o,e[3]=r+h*n}(y,i,s,t);const n=(0,h.HH)(y,e.spatialReference);return[await this._export(n,t[0],t[1],a,r,o)]}_tiledExport(e,t,i,s){const a=p.Z.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),r=new g.Z(a),o=r.getTileCoverage(e);if(!o)return null;const n=[];return o.forEach(((a,o,d,p)=>{b.set(a,o,d,0),r.getTileBounds(y,b);const c=(0,h.HH)(y,e.spatialReference);n.push(this._export(c,t,t,0,i,s).then((e=>(0!==p&&(b.set(a,o,d,p),r.getTileBounds(y,b),e.x=y[0],e.y=y[3]),e))))})),Promise.all(n)}};(0,s._)([(0,o.Cb)()],M.prototype,"_imagePromise",void 0),(0,s._)([(0,o.Cb)()],M.prototype,"bitmaps",void 0),(0,s._)([(0,o.Cb)()],M.prototype,"container",void 0),(0,s._)([(0,o.Cb)()],M.prototype,"fetchSource",void 0),(0,s._)([(0,o.Cb)()],M.prototype,"hidpi",void 0),(0,s._)([(0,o.Cb)()],M.prototype,"imageMaxWidth",void 0),(0,s._)([(0,o.Cb)()],M.prototype,"imageMaxHeight",void 0),(0,s._)([(0,o.Cb)()],M.prototype,"imageRotationSupported",void 0),(0,s._)([(0,o.Cb)()],M.prototype,"imageNormalizationSupported",void 0),(0,s._)([(0,o.Cb)()],M.prototype,"requestUpdate",void 0),(0,s._)([(0,o.Cb)()],M.prototype,"updating",null),M=(0,s._)([(0,n.j)("esri.views.2d.layers.support.ExportStrategy")],M);const P=M},13107:(e,t,i)=>{i.d(t,{Z:()=>d});var s=i(27366),a=i(32718),r=i(66978),o=i(94172),n=i(49861),h=(i(25243),i(63780),i(93169),i(69912));const d=e=>{let t=class extends e{initialize(){this.addHandles((0,o.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,r.D_)(e)||a.Z.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return(0,s._)([(0,n.Cb)()],t.prototype,"layer",void 0),t=(0,s._)([(0,h.j)("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=2662.8339db46.chunk.js.map