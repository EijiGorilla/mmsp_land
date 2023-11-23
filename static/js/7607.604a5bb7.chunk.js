"use strict";(self.webpackChunkmmsp_land=self.webpackChunkmmsp_land||[]).push([[7607],{78084:(e,t,s)=>{s.d(t,{Z:()=>u});var r,i,a=s(93169),n=s(13005);(i=r||(r={}))[i.varint=0]="varint",i[i.fixed64=1]="fixed64",i[i.delimited=2]="delimited",i[i.fixed32=5]="fixed32",i[i.unknown=99]="unknown";const o=4294967296,c=new TextDecoder("utf-8"),h=(0,a.Z)("safari")||(0,a.Z)("ios")?6:(0,a.Z)("ff")?12:32;class u{constructor(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e?e.byteLength:0;this._tag=0,this._dataType=r.unknown,this._init(e,t,s,i)}_init(e,t,s,r){this._data=e,this._dataView=t,this._pos=s,this._end=r}asUnsafe(){return this}clone(){return new u(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(e){this._pos=e}nextTag(e){for(;;){if(this._pos===this._end)return!1;const t=this._decodeVarint();if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const e=this._decodeVarint();return this._tag=e>>3,this._dataType=7&e,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let e=4294967295;return e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?e:(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?e:void 0))))}getUInt64(){return this._decodeVarint()}getSInt32(){const e=this.getUInt32();if(void 0!==e)return e>>>1^-(1&e)|0}getSInt64(){return this._decodeSVarint()}getBool(){const e=0!==this._data[this._pos];return this._skip(1),e}getEnum(){return this._decodeVarint()}getFixed64(){const e=this._dataView,t=this._pos,s=e.getUint32(t,!0)+e.getUint32(t+4,!0)*o;return this._skip(8),s}getSFixed64(){const e=this._dataView,t=this._pos,s=e.getUint32(t,!0)+e.getInt32(t+4,!0)*o;return this._skip(8),s}getDouble(){const e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e}getFixed32(){const e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e}getSFixed32(){const e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e}getFloat(){const e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e}getString(){const e=this._getLength(),t=this._pos,s=this._toString(this._data,t,t+e);return this._skip(e),s}getBytes(){const e=this._getLength(),t=this._pos,s=this._toBytes(this._data,t,t+e);return this._skip(e),s}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(e,t,s,r){const i=this.getMessage(),a=e(i,t,s,r);return i.release(),a}processMessage(e){const t=this.getMessage(),s=e(t);return t.release(),s}getMessage(){const e=this._getLength(),t=u.pool.acquire();return t._init(this._data,this._dataView,this._pos,this._pos+e),this._skip(e),t}release(){u.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case r.varint:this._decodeVarint();break;case r.fixed64:this._skip(8);break;case r.delimited:this._skip(this._getLength());break;case r.fixed32:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(e){this._skip(e)}_skip(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=e}_decodeVarint(){const e=this._data;let t=this._pos,s=0,r=0;if(this._end-t>=10)do{if(r=e[t++],s|=127&r,0==(128&r))break;if(r=e[t++],s|=(127&r)<<7,0==(128&r))break;if(r=e[t++],s|=(127&r)<<14,0==(128&r))break;if(r=e[t++],s|=(127&r)<<21,0==(128&r))break;if(r=e[t++],s+=268435456*(127&r),0==(128&r))break;if(r=e[t++],s+=34359738368*(127&r),0==(128&r))break;if(r=e[t++],s+=4398046511104*(127&r),0==(128&r))break;if(r=e[t++],s+=562949953421312*(127&r),0==(128&r))break;if(r=e[t++],s+=72057594037927940*(127&r),0==(128&r))break;if(r=e[t++],s+=0x8000000000000000*(127&r),0==(128&r))break;throw new Error("Varint too long!")}while(0);else{let i=1;for(;t!==this._end&&(r=e[t],0!=(128&r));)++t,s+=(127&r)*i,i*=128;if(t===this._end)throw new Error("Varint overrun!");++t,s+=r*i}return this._pos=t,s}_decodeSVarint(){const e=this._data;let t,s=0,r=0;const i=1&e[this._pos];if(r=e[this._pos++],s|=127&r,0==(128&r))return i?-(s+1)/2:s/2;if(r=e[this._pos++],s|=(127&r)<<7,0==(128&r))return i?-(s+1)/2:s/2;if(r=e[this._pos++],s|=(127&r)<<14,0==(128&r))return i?-(s+1)/2:s/2;if(r=e[this._pos++],s|=(127&r)<<21,0==(128&r))return i?-(s+1)/2:s/2;if(r=e[this._pos++],s+=268435456*(127&r),0==(128&r))return i?-(s+1)/2:s/2;if(r=e[this._pos++],s+=34359738368*(127&r),0==(128&r))return i?-(s+1)/2:s/2;if(r=e[this._pos++],s+=4398046511104*(127&r),0==(128&r))return i?-(s+1)/2:s/2;if(t=BigInt(s),r=e[this._pos++],t+=0x2000000000000n*BigInt(127&r),0==(128&r))return Number(i?-(t+1n)/2n:t/2n);if(r=e[this._pos++],t+=0x100000000000000n*BigInt(127&r),0==(128&r))return Number(i?-(t+1n)/2n:t/2n);if(r=e[this._pos++],t+=0x8000000000000000n*BigInt(127&r),0==(128&r))return Number(i?-(t+1n)/2n:t/2n);throw new Error("Varint too long!")}_getLength(){if(this._dataType!==r.delimited)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(e,t,s){if((s=Math.min(this._end,s))-t>h){const r=e.subarray(t,s);return c.decode(r)}let r="",i="";for(let a=t;a<s;++a){const t=e[a];128&t?i+="%"+t.toString(16):(r+=decodeURIComponent(i)+String.fromCharCode(t),i="")}return i.length&&(r+=decodeURIComponent(i)),r}_toBytes(e,t,s){return s=Math.min(this._end,s),new Uint8Array(e.buffer,t,s-t)}}u.pool=new n.Z(u,void 0,(e=>{e._data=null,e._dataView=null}))},91347:(e,t,s)=>{s.d(t,{G$:()=>I,K9:()=>x,wn:()=>k});var r=s(10064),i=s(78084),a=s(80457),n=s(70436);const o=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML","esriFieldTypeBigInteger","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"],c=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],h=["upperLeft","lowerLeft"];function u(e){return e>=o.length?null:o[e]}function l(e){return e>=c.length?null:c[e]}function p(e){return e>=h.length?null:h[e]}function d(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function g(e,t,s){const r=e.asUnsafe(),i=t.createPointGeometry(s);for(;r.next();)switch(r.tag()){case 3:{const e=r.getUInt32(),s=r.pos()+e;let a=0;for(;r.pos()<s;)t.addCoordinatePoint(i,r.getSInt64(),a++);break}default:r.skip()}return i}function f(e,t,s){const r=e.asUnsafe(),i=t.createGeometry(s),a=2+(s.hasZ?1:0)+(s.hasM?1:0);for(;r.next();)switch(r.tag()){case 2:{const e=r.getUInt32(),s=r.pos()+e;let a=0;for(;r.pos()<s;)t.addLength(i,r.getUInt32(),a++);break}case 3:{const e=r.getUInt32(),s=r.pos()+e;let n=0;for(t.allocateCoordinates(i);r.pos()<s;)t.addCoordinate(i,r.getSInt64(),n),n++,n===a&&(n=0);break}default:r.skip()}return i}function _(e){const t=e.asUnsafe(),s=new a.Z;let r="esriGeometryPoint";for(;t.next();)switch(t.tag()){case 2:{const e=t.getUInt32(),r=t.pos()+e;for(;t.pos()<r;)s.lengths.push(t.getUInt32());break}case 3:{const e=t.getUInt32(),r=t.pos()+e;for(;t.pos()<r;)s.coords.push(t.getSInt64());break}case 1:r=n.S[t.getEnum()];break;default:t.skip()}return{queryGeometry:s,queryGeometryType:r}}function y(e){const t=e.asUnsafe();for(;t.next();)switch(t.tag()){case 1:return t.getString();case 2:return t.getFloat();case 3:return t.getDouble();case 4:return t.getSInt32();case 5:return t.getUInt32();case 6:return t.getInt64();case 7:return t.getUInt64();case 8:return t.getSInt64();case 9:return t.getBool();default:return t.skip(),null}return null}function k(e){const t=e.asUnsafe(),s={type:u(0)};for(;t.next();)switch(t.tag()){case 1:s.name=t.getString();break;case 2:s.type=u(t.getEnum());break;case 3:s.alias=t.getString();break;case 4:s.sqlType=l(t.getEnum());break;case 5:default:t.skip();break;case 6:s.defaultValue=t.getString()}return s}function b(e){const t={},s=e.asUnsafe();for(;s.next();)switch(s.tag()){case 1:t.name=s.getString();break;case 2:t.isSystemMaintained=s.getBool();break;default:s.skip()}return t}function m(e,t,s,r){const i=t.createFeature(s);let a=0;for(;e.next();)switch(e.tag()){case 1:{const t=r[a++].name;i.attributes[t]=e.processMessage(y);break}case 2:i.geometry=e.processMessageWithArgs(f,t,s);break;case 4:i.centroid=e.processMessageWithArgs(g,t,s);break;default:e.skip()}return i}function T(e){const t=[1,1,1,1],s=e.asUnsafe();for(;s.next();)switch(s.tag()){case 1:t[0]=s.getDouble();break;case 2:t[1]=s.getDouble();break;case 4:t[2]=s.getDouble();break;case 3:t[3]=s.getDouble();break;default:s.skip()}return t}function w(e){const t=[0,0,0,0],s=e.asUnsafe();for(;s.next();)switch(s.tag()){case 1:t[0]=s.getDouble();break;case 2:t[1]=s.getDouble();break;case 4:t[2]=s.getDouble();break;case 3:t[3]=s.getDouble();break;default:s.skip()}return t}function I(e){const t={originPosition:p(0)},s=e.asUnsafe();for(;s.next();)switch(s.tag()){case 1:t.originPosition=p(s.getEnum());break;case 2:t.scale=s.processMessage(T);break;case 3:t.translate=s.processMessage(w);break;default:s.skip()}return t}function F(e){const t={},s=e.asUnsafe();for(;s.next();)switch(s.tag()){case 1:t.shapeAreaFieldName=s.getString();break;case 2:t.shapeLengthFieldName=s.getString();break;case 3:t.units=s.getString();break;default:s.skip()}return t}function q(e,t){const s=t.createSpatialReference();for(;e.next();)switch(e.tag()){case 1:s.wkid=e.getUInt32();break;case 5:s.wkt=e.getString();break;case 2:s.latestWkid=e.getUInt32();break;case 3:s.vcsWkid=e.getUInt32();break;case 4:s.latestVcsWkid=e.getUInt32();break;default:e.skip()}return s}function S(e,t){const s=t.createFeatureResult(),r=e.asUnsafe();s.geometryType=d(t,0);let i=!1;for(;r.next();)switch(r.tag()){case 1:s.objectIdFieldName=r.getString();break;case 3:s.globalIdFieldName=r.getString();break;case 4:s.geohashFieldName=r.getString();break;case 5:s.geometryProperties=r.processMessage(F);break;case 7:s.geometryType=d(t,r.getEnum());break;case 8:s.spatialReference=r.processMessageWithArgs(q,t);break;case 10:s.hasZ=r.getBool();break;case 11:s.hasM=r.getBool();break;case 12:s.transform=r.processMessage(I);break;case 9:s.exceededTransferLimit=r.getBool();break;case 13:t.addField(s,r.processMessage(k));break;case 15:i||(t.prepareFeatures(s),i=!0),t.addFeature(s,r.processMessageWithArgs(m,t,s,s.fields));break;case 2:s.uniqueIdField=r.processMessage(b);break;default:r.skip()}return t.finishFeatureResult(s),s}function U(e,t){const s={};let r=null;for(;e.next();)switch(e.tag()){case 4:r=e.processMessageWithArgs(_);break;case 1:s.featureResult=e.processMessageWithArgs(S,t);break;default:e.skip()}return null!=r&&s.featureResult&&t.addQueryGeometry(s,r),s}function x(e,t){try{const s=2,r=new i.Z(new Uint8Array(e),new DataView(e)),a={};for(;r.next();)r.tag()===s?a.queryResult=r.processMessageWithArgs(U,t):r.skip();return a}catch(o){throw new r.Z("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:o})}}},70436:(e,t,s)=>{s.d(t,{J:()=>h,S:()=>c});var r=s(68860),i=s(92975),a=s(3182),n=s(6908),o=s(80457);const c=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class h{constructor(e){this._options=e,this.geometryTypes=c,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new n.Z}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(e){if(null===e||void 0===e||!e.features||!e.hasZ||!this._options.sourceSpatialReference||!e.spatialReference||(0,i.fS)(e.spatialReference,this._options.sourceSpatialReference)||e.spatialReference.vcsWkid)return;const t=(0,r._R)(this._options.sourceSpatialReference)/(0,r._R)(e.spatialReference);if(1!==t)for(const s of e.features){if(!(0,a.S6)(s))continue;const e=s.geometry.coords;for(let s=2;s<e.length;s+=3)e[s]*=t}}addFeature(e,t){e.features.push(t)}createFeature(){return new a.u_}createSpatialReference(){return{wkid:0}}createGeometry(){return new o.Z}addField(e,t){e.fields.push(t)}allocateCoordinates(e){e.coords.length=e.lengths.reduce(((e,t)=>e+t),0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new o.Z}}},27607:(e,t,s)=>{s.d(t,{C:()=>i});var r=s(91347);function i(e,t){const s=(0,r.K9)(e,t),i=s.queryResult.featureResult,a=s.queryResult.queryGeometry,n=s.queryResult.queryGeometryType;if(i&&i.features&&i.features.length&&i.objectIdFieldName){const e=i.objectIdFieldName;for(const t of i.features)t.attributes&&(t.objectId=t.attributes[e])}return i&&(i.queryGeometry=a,i.queryGeometryType=n),i}}}]);
//# sourceMappingURL=7607.604a5bb7.chunk.js.map