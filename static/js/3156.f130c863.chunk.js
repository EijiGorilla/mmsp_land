/*! For license information please see 3156.f130c863.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmmsp_land=self.webpackChunkmmsp_land||[]).push([[3156],{23156:(e,t,i)=>{i.r(t),i.d(t,{CalciteTableHeader:()=>l,defineCustomElement:()=>c});var o=i(34592);const l=o.T,c=o.d},34592:(e,t,i)=>{i.d(t,{T:()=>w,d:()=>f});var o=i(51554),l=i(47242),c=i(52655),a=i(46895),n=i(64044),s=i(57601);const r="number-cell",d="selection-cell",h="body-row",u="footer-row",p="heading",v="description",b="cell--multiple-selection",g="assistive-text",m="active",w=(0,o.GH)(class extends o.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.alignment="start",this.colSpan=void 0,this.description=void 0,this.heading=void 0,this.rowSpan=void 0,this.numberCell=!1,this.parentRowPosition=void 0,this.parentRowType=void 0,this.positionInRow=void 0,this.scale=void 0,this.selectedRowCount=void 0,this.selectedRowCountLocalized=void 0,this.selectionCell=!1,this.selectionMode=void 0,this.bodyRowCount=void 0,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.screenReaderText="",this.effectiveLocale=""}onSelectedChange(){this.updateScreenReaderText()}onMessagesChange(){}async componentWillLoad(){(0,l.a)(this),await(0,c.s)(this),this.updateScreenReaderText()}componentDidLoad(){(0,l.s)(this)}connectedCallback(){(0,a.c)(this),(0,c.c)(this)}disconnectedCallback(){(0,a.d)(this),(0,c.d)(this)}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale)}async setFocus(){await(0,l.c)(this),this.containerEl.focus()}updateScreenReaderText(){var e;let t="";const i="".concat(this.selectedRowCountLocalized," ").concat(null===(e=this.messages)||void 0===e?void 0:e.selected);var o;if(this.numberCell)t=null===(o=this.messages)||void 0===o?void 0:o.rowNumber;else if("single"===this.selectionMode){var l;t="".concat(null===(l=this.messages)||void 0===l?void 0:l.selectionColumn,". ").concat(i)}else if(this.bodyRowCount===this.selectedRowCount){var c,a,n;t="".concat(null===(c=this.messages)||void 0===c?void 0:c.selectionColumn,". ").concat(null===(a=this.messages)||void 0===a?void 0:a.all," ").concat(i," ").concat(null===(n=this.messages)||void 0===n?void 0:n.keyboardDeselectAll)}else{var s,r;t="".concat(null===(s=this.messages)||void 0===s?void 0:s.selectionColumn,". ").concat(i," ").concat(null===(r=this.messages)||void 0===r?void 0:r.keyboardSelectAll)}this.screenReaderText=t}render(){const e=this.rowSpan?"rowgroup":this.colSpan?"colgroup":"body"===this.parentRowType?"row":"col",t=this.selectedRowCount===this.bodyRowCount,i=t?"check-square-f":"check-square";return(0,o.h)(o.AA,null,(0,o.h)("th",{"aria-colindex":"body"!==this.parentRowType?this.positionInRow:"",class:{[h]:"body"===this.parentRowType,[u]:"foot"===this.parentRowType,[r]:this.numberCell,[d]:this.selectionCell,[b]:"multiple"===this.selectionMode},colSpan:this.colSpan,role:"columnheader",rowSpan:this.rowSpan,scope:e,tabIndex:0,ref:e=>this.containerEl=e},this.heading&&(0,o.h)("div",{class:p},this.heading),this.description&&(0,o.h)("div",{class:v},this.description),this.selectionCell&&"multiple"===this.selectionMode&&(0,o.h)("calcite-icon",{class:{[m]:t},icon:i,scale:(0,n.g)(this.scale)}),(this.selectionCell||this.numberCell)&&(0,o.h)("span",{"aria-hidden":!0,"aria-live":"polite",class:g},this.screenReaderText)))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{selectedRowCount:["onSelectedChange"],selectedRowCountLocalized:["onSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{--calcite-internal-table-header-background:var(--calcite-table-header-background, var(--calcite-ui-foreground-2));--calcite-internal-table-header-border-color:var(--calcite-table-border-color, var(--calcite-ui-border-3));display:contents}:host([alignment=center]) th{text-align:center}:host([alignment=end]) th{text-align:end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}th{white-space:normal;text-align:start;vertical-align:top;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);outline-color:transparent;font-size:var(--calcite-internal-table-cell-font-size);border-inline-end:1px solid var(--calcite-internal-table-header-border-color);border-block-end:1px solid var(--calcite-internal-table-header-border-color);padding-block:calc(var(--calcite-internal-table-cell-padding) * 1.5);padding-inline:var(--calcite-internal-table-cell-padding);background-color:var(--calcite-internal-table-header-background)}th:focus-within{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}th.body-row,th.footer-row{vertical-align:middle;border-block-end:0}th.footer-row{border-block-start:1px solid var(--calcite-internal-table-header-border-color)}.cell--multiple-selection{cursor:pointer;vertical-align:middle;color:var(--calcite-ui-text-3)}.number-cell,.selection-cell{color:var(--calcite-ui-text-2);inline-size:2rem;min-inline-size:2rem}.selection-cell calcite-icon.active{color:var(--calcite-ui-brand)}.number-cell calcite-icon,.selection-cell calcite-icon{margin-inline-start:auto;margin-inline-end:auto;vertical-align:middle}.heading{color:var(--calcite-ui-text-1)}.description{color:var(--calcite-ui-text-3);font-size:var(--calcite-internal-table-cell-font-size-secondary)}"}},[1,"calcite-table-header",{alignment:[513],colSpan:[514,"col-span"],description:[513],heading:[513],rowSpan:[514,"row-span"],numberCell:[4,"number-cell"],parentRowPosition:[2,"parent-row-position"],parentRowType:[1,"parent-row-type"],positionInRow:[2,"position-in-row"],scale:[1],selectedRowCount:[2,"selected-row-count"],selectedRowCountLocalized:[1,"selected-row-count-localized"],selectionCell:[4,"selection-cell"],selectionMode:[1,"selection-mode"],bodyRowCount:[2,"body-row-count"],messages:[1040],messageOverrides:[1040],defaultMessages:[32],screenReaderText:[32],effectiveLocale:[32],setFocus:[64]}]);function f(){if("undefined"===typeof customElements)return;["calcite-table-header","calcite-icon"].forEach((e=>{switch(e){case"calcite-table-header":customElements.get(e)||customElements.define(e,w);break;case"calcite-icon":customElements.get(e)||(0,s.d)()}}))}f()}}]);
//# sourceMappingURL=3156.f130c863.chunk.js.map