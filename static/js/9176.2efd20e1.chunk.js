"use strict";(self.webpackChunkmmsp_land=self.webpackChunkmmsp_land||[]).push([[9176],{4760:(e,t,n)=>{var i;n.d(t,{T:()=>i}),function(e){e.POSITION="position",e.NORMAL="normal",e.NORMALCOMPRESSED="normalCompressed",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.PERSPECTIVEDIVIDE="perspectiveDivide",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.INSTANCEMODELORIGINHI="instanceModelOriginHi",e.INSTANCEMODELORIGINLO="instanceModelOriginLo",e.INSTANCEMODEL="instanceModel",e.INSTANCEMODELNORMAL="instanceModelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude",e.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",e.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(i||(i={}))},10011:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var i=n(55158);function r(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:new i.Gw(e.layout)}}var a=n(67009),s=n(10662),o=n(83715);class l{async extract(e){const t=c(e),n=(0,o.Kl)(t),i=[t.data.buffer];return{result:u(n,i),transferList:i}}async extractComponentsEdgeLocations(e){const t=c(e),n=(0,o.kY)(t.data,t.skipDeduplicate,t.indices,t.indicesLength),i=[];return{result:r((0,s.n)(n,A,O).regular.instancesData,i),transferList:i}}async extractEdgeLocations(e){const t=c(e),n=(0,o.kY)(t.data,t.skipDeduplicate,t.indices,t.indicesLength),i=[];return{result:r((0,s.n)(n,E,O).regular.instancesData,i),transferList:i}}}function c(e){return{data:a.tf.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indices):"Uint16Array"===e.indicesType?new Uint16Array(e.indices):e.indices,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function u(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:r(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:r(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}const E=new class{allocate(e){return o.Yr.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1)}},A=new class{allocate(e){return o.n_.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex)}},O={allocate:()=>null,write:()=>{},trim:()=>null}}}]);
//# sourceMappingURL=9176.2efd20e1.chunk.js.map