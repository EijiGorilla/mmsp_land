"use strict";(self.webpackChunkmmsp_land=self.webpackChunkmmsp_land||[]).push([[9948],{9948:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(72791),l=n(28979),i=n(21149),s=(n(37888),n(62369),n(67994),n(65281),n(6814),n(68698),n(63920),n(85580)),r=n(87583),c=n(80184);let o;const d=e=>{let{contractp:t,landtype:n,landsection:d}=e;const[u,p]=(0,a.useState)([]);return(0,a.useEffect)((()=>{p([]);var e=l.Aj.createQuery();const a="StatusNVS3 = 5",i="Package = '"+t+"'",s=i+" AND "+("Type = '"+n+"'"),r=s+" AND "+("Station1 ='"+d+"'");e.where=t?!t||n||d?t&&n&&!d?a+" AND "+s:a+" AND "+r:a+" AND "+i:a,e.outFields=["*"],e.returnGeometry=!0,l.Aj.queryFeatures(e).then((e=>{e.features.map(((e,t)=>{const n=e.attributes,a=n.Id,l=n.Package,i=n.Type,s=n.OWNER,r=n.Station1,c=n.OBJECTID,o=t;p((e=>[...e,{id:o,lotid:a,cp:l,landtype:i,landowner:s,landsection:r,objectid:c}]))}))}))}),[t,n,d]),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.nX,{id:"result-list",label:"exproListLabel",children:u&&u.filter(((e,t)=>t===u.findIndex((t=>t.objectid===e.objectid)))).map(((e,t)=>(0,c.jsx)(s.rB,{label:e.lotid,description:e.landowner,value:e.objectid,selected:void 0,onCalciteListItemSelect:e=>function(e){var t=new i.Z({objectIds:[e.target.value]});l.Aj.queryExtent(t).then((e=>{e.extent&&r.ei.goTo({target:e.extent,speedFactor:2,zoom:17})})),r.ei.whenLayerView(l.Aj).then((t=>{o&&o.remove(),o=t.highlight([e.target.value]),r.ei.on("click",(()=>{t.filter=null,o.remove()}))}))}(e),children:(0,c.jsxs)(s.C7,{value:e.cp,slot:"content-end",scale:"s",id:"exproListChip",children:[(0,c.jsx)(s.mO,{"full-name":e.landsection,scale:"s"}),e.cp]})},e.id)))})})}}}]);
//# sourceMappingURL=9948.b5822965.chunk.js.map