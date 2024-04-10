"use strict";(self.webpackChunkmmsp_land=self.webpackChunkmmsp_land||[]).push([[1818],{31818:(e,t,s)=>{s.r(t),s.d(t,{default:()=>k});var i=s(72791),a=s(28979),r=s(8889),l=s(18661),n=s(21149),o=s(36801),c=s(59181),u=s(85113),h=s(86471),d=s(66683);class f extends h.c{_beforeChanged(){super._beforeChanged(),this.isDirty("gap")&&(this._clear=!0)}_draw(){super._draw();const e=this.get("width",100),t=this.get("height",100),s=this.get("gap",0),i=this.get("strokeWidth",1);if(s){let a=s+i,r=t/a;for(let t=-r;t<2*r;t++){const s=Math.round(t*a-a/2)+.5;this._display.moveTo(-e,s),this._display.lineTo(2*e,s)}}else this._display.moveTo(0,0),this._display.lineTo(e,0);this._display.lineStyle(i,this.get("color"),this.get("colorOpacity"));let a=this.get("strokeDasharray");d.hj(a)&&(a=a<.5?[0]:[a]),this._display.setLineDash(a);const r=this.get("strokeDashoffset");r&&this._display.setLineDashOffset(r),this._display.endStroke()}}Object.defineProperty(f,"className",{enumerable:!0,configurable:!0,writable:!0,value:"LinePattern"}),Object.defineProperty(f,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:h.c.classNames.concat([f.className])});var m=s(66817),p=s(36061),g=s(70565),v=s(54797),y=s(27663),b=s(82308),w=s(80659),x=s(91934),_=s(44520),S=s(85580),j=s(26877),T=s(80184);const k=(0,i.memo)((e=>{let{contractp:t,landtype:s,landsection:h,typelist:d}=e;const k=(0,i.useRef)({}),L=(0,i.useRef)({}),D=(0,i.useRef)({}),[R,A]=(0,i.useState)([{category:String,value:Number}]),N="structure-chart",[C,E]=(0,i.useState)([]),P=((0,i.useRef)({}),(0,i.useRef)({}),(0,i.useRef)({}),"Package = '"+t+"'"),O=P+" AND "+("Type = '"+s+"'"),Z=O+" AND "+("Station1 ='"+h+"'");return a.UC.definitionExpression=t?!t||s||h?t&&s&&!h?O:Z:P:"1=1",(0,i.useEffect)((()=>{(0,_.KD)(t,s,h).then((e=>{A(e)})),(0,_.fT)().then((e=>{E(e)}))}),[t,s,h]),(0,i.useEffect)((()=>{var e,t;class s extends u.Q{constructor(){super(...arguments),this.patterns=void 0,this.currentPattern=void 0}setupDefaultRules(){var e=this;const t=j.vx.map(((e,t)=>Object.assign(f.new(this._root,{color:m.$_(e),gap:4,rotation:135,strokeWidth:1.1,fillOpacity:0,width:10,height:10}))));this.patterns=t,this.currentPattern=0,this.rule("Slice").setAll({fillOpacity:0}),this.rule("Slice").setup=function(t){var s;t.set("fillPattern",e.patterns[e.currentPattern]),e.currentPattern++,e.currentPattern===(null===(s=e.patterns)||void 0===s?void 0:s.length)&&(e.currentPattern=0)}}}t=N,o.S6(c.i_.rootElements,(function(e){e.dom.id===t&&e.dispose()}));var i=p.f.new(N);i.container.children.clear(),null===(e=i._logo)||void 0===e||e.dispose(),i.setThemes([w.Z.new(i),x.Z.new(i),s.new(i)]);var h=i.container.children.push(y.u.new(i,{layout:i.verticalLayout}));D.current=h;var d=h.series.push(b.f.new(i,{name:"Series",categoryField:"category",valueField:"value",legendValueText:"{valuePercentTotal.formatNumber('#.')}% ({value})",radius:g.aQ(45),innerRadius:g.aQ(20),scale:1.8}));k.current=d,h.series.push(d),d.slices.template.setAll({fillOpacity:0,stroke:m.$_("#ffffff"),strokeWidth:.7,strokeOpacity:1,templateField:"sliceSettings"}),d.labels.template.set("visible",!1),d.ticks.template.set("visible",!1),d.slices.template.events.on("click",(e=>{var t;const s=(null===(t=e.target.dataItem)||void 0===t?void 0:t.dataContext).category,i=j.D7.find((e=>e.category===s)),o=null===i||void 0===i?void 0:i.value;var c,u=a.UC.createQuery();r.ei.when((function(){r.ei.whenLayerView(a.UC).then((e=>{a.UC.queryFeatures(u).then((t=>{const s=t.features.length;let i=[];for(var o=0;o<s;o++){var u=t.features[o].attributes.OBJECTID;i.push(u)}var h=new n.Z({objectIds:i});a.UC.queryExtent(h).then((function(e){e.extent&&r.ei.goTo(e.extent)})),c&&c.remove(),c=e.highlight(i),r.ei.on("click",(function(){e.filter=new l.Z({where:void 0}),c.remove()}))})),e.filter=new l.Z({where:"Status = "+o})}))}))})),d.data.setAll(R);var _=h.children.push(v.D.new(i,{centerX:g.aQ(50),x:g.aQ(50)}));L.current=_,_.data.setAll(d.dataItems),_.markers.template.setAll({width:18,height:18}),_.markerRectangles.template.setAll({cornerRadiusTL:10,cornerRadiusTR:10,cornerRadiusBL:10,cornerRadiusBR:10}),h.onPrivate("width",(function(e){var t=Math.max(e-h.height()-190,190);_.labels.template.setAll({width:t,maxWidth:t})}));return _.labels.template.setAll({oversizedBehavior:"truncate",fill:m.$_("#ffffff")}),_.valueLabels.template.setAll({textAlign:"right",width:50,fill:m.$_("#ffffff")}),_.itemContainers.template.setAll({paddingTop:1.1,paddingBottom:2}),d.appear(1e3,100),()=>{i.dispose()}}),[N,R]),(0,i.useEffect)((()=>{var e,t;null===(e=k.current)||void 0===e||e.data.setAll(R),null===(t=L.current)||void 0===t||t.data.setAll(k.current.dataItems)})),(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(S.ZK,{children:"TOTAL STRUCTURES"}),(0,T.jsx)(S.ZK,{layout:"inline",children:(0,T.jsxs)("b",{className:"totalLotsNumber",children:[(0,_.oc)(C[3]),(0,T.jsx)("img",{src:"https://EijiGorilla.github.io/Symbols/House_Logo.svg",alt:"Structure Logo",height:"35%",width:"35%",style:{marginLeft:"155%",display:"flex",marginTop:"-25%"}}),(0,T.jsxs)("div",{className:"totalLotsNumber2",children:["(",(0,_.oc)(C[2]),")"]})," "]})}),(0,T.jsx)("div",{id:N,style:{height:"45vh",backgroundColor:"rgb(0,0,0,0)",color:"white",marginBottom:"10%"}}),(0,T.jsx)(S.ZK,{children:"DEMOLISHED"}),(0,T.jsx)(S.ZK,{layout:"inline",children:0===C[1]?(0,T.jsxs)("b",{className:"DemolishedNumber",children:[C[0],"% (0)",(0,T.jsx)("img",{src:"https://EijiGorilla.github.io/Symbols/Structure_Demolished.svg",alt:"Structure Logo",height:"15%",width:"15%",style:{marginLeft:"70%",display:"flex",marginTop:"-10%"}})]}):(0,T.jsxs)("b",{className:"DemolishedNumber",children:[C[0],"% (",(0,_.oc)(C[1]),")",(0,T.jsx)("img",{src:"https://EijiGorilla.github.io/Symbols/Structure_Demolished.svg",alt:"Structure Logo",height:"18%",width:"18%",style:{marginLeft:"70%",display:"flex",marginTop:"-10%"}})]})})]})}))}}]);
//# sourceMappingURL=1818.ce21102b.chunk.js.map