"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[789],{2789:(et,Re,u)=>{u.d(Re,{ev:()=>oe,Dz:()=>K,w1:()=>ee,yh:()=>me,mD:()=>he,Q2:()=>ye,Ke:()=>we,ge:()=>te,fO:()=>J,XQ:()=>Ce,as:()=>_e,Gk:()=>ge,nj:()=>pe,BZ:()=>ue,by:()=>Je,p0:()=>Ve});var v=u(9490),_=u(8345),o=u(7716),ke=u(946),ve=u(521),se=u(303),Me=u(8583),L=u(9765),Se=u(4402),b=u(6215),be=u(5639),x=u(5917),T=u(6782),xe=u(5257);const Te=[[["caption"]],[["colgroup"],["col"]]],Fe=["caption","colgroup, col"];function Y(t){return class extends t{constructor(...s){super(...s),this._sticky=!1,this._hasStickyChanged=!1}get sticky(){return this._sticky}set sticky(s){const e=this._sticky;this._sticky=(0,v.Ig)(s),this._hasStickyChanged=e!==this._sticky}hasStickyChanged(){const s=this._hasStickyChanged;return this._hasStickyChanged=!1,s}resetStickyChanged(){this._hasStickyChanged=!1}}}const g=new o.OlP("CDK_TABLE");let D=(()=>{class t{constructor(e){this.template=e}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkCellDef",""]]}),t})(),R=(()=>{class t{constructor(e){this.template=e}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkHeaderCellDef",""]]}),t})(),F=(()=>{class t{constructor(e){this.template=e}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkFooterCellDef",""]]}),t})();class Ne{}const Be=Y(Ne);let p=(()=>{class t extends Be{constructor(e){super(),this._table=e,this._stickyEnd=!1}get name(){return this._name}set name(e){this._setNameInput(e)}get stickyEnd(){return this._stickyEnd}set stickyEnd(e){const n=this._stickyEnd;this._stickyEnd=(0,v.Ig)(e),this._hasStickyChanged=n!==this._stickyEnd}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(g,8))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkColumnDef",""]],contentQueries:function(e,n,r){if(1&e&&(o.Suo(r,D,5),o.Suo(r,R,5),o.Suo(r,F,5)),2&e){let i;o.iGM(i=o.CRH())&&(n.cell=i.first),o.iGM(i=o.CRH())&&(n.headerCell=i.first),o.iGM(i=o.CRH())&&(n.footerCell=i.first)}},inputs:{sticky:"sticky",name:["cdkColumnDef","name"],stickyEnd:"stickyEnd"},features:[o._Bn([{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:t}]),o.qOj]}),t})();class j{constructor(s,e){const n=e.nativeElement.classList;for(const r of s._columnCssClassName)n.add(r)}}let P=(()=>{class t extends j{constructor(e,n){super(e,n)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(p),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[o.qOj]}),t})(),re=(()=>{class t extends j{constructor(e,n){var r;if(super(e,n),1===(null===(r=e._table)||void 0===r?void 0:r._elementRef.nativeElement.nodeType)){const i=e._table._elementRef.nativeElement.getAttribute("role");n.nativeElement.setAttribute("role","grid"===i||"treegrid"===i?"gridcell":"cell")}}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(p),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t,selectors:[["cdk-footer-cell"],["td","cdk-footer-cell",""]],hostAttrs:[1,"cdk-footer-cell"],features:[o.qOj]}),t})(),z=(()=>{class t extends j{constructor(e,n){var r;if(super(e,n),1===(null===(r=e._table)||void 0===r?void 0:r._elementRef.nativeElement.nodeType)){const i=e._table._elementRef.nativeElement.getAttribute("role");n.nativeElement.setAttribute("role","grid"===i||"treegrid"===i?"gridcell":"cell")}}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(p),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[o.qOj]}),t})();class ie{constructor(){this.tasks=[],this.endTasks=[]}}const U=new o.OlP("_COALESCED_STYLE_SCHEDULER");let ae=(()=>{class t{constructor(e){this._ngZone=e,this._currentSchedule=null,this._destroyed=new L.xQ}schedule(e){this._createScheduleIfNeeded(),this._currentSchedule.tasks.push(e)}scheduleEnd(e){this._createScheduleIfNeeded(),this._currentSchedule.endTasks.push(e)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_createScheduleIfNeeded(){this._currentSchedule||(this._currentSchedule=new ie,this._getScheduleObservable().pipe((0,T.R)(this._destroyed)).subscribe(()=>{for(;this._currentSchedule.tasks.length||this._currentSchedule.endTasks.length;){const e=this._currentSchedule;this._currentSchedule=new ie;for(const n of e.tasks)n();for(const n of e.endTasks)n()}this._currentSchedule=null}))}_getScheduleObservable(){return this._ngZone.isStable?(0,Se.D)(Promise.resolve(void 0)):this._ngZone.onStable.pipe((0,xe.q)(1))}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(o.R0b))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac}),t})(),Z=(()=>{class t{constructor(e,n){this.template=e,this._differs=n}ngOnChanges(e){if(!this._columnsDiffer){const n=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(n).create(),this._columnsDiffer.diff(n)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof M?e.headerCell.template:this instanceof S?e.footerCell.template:e.cell.template}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc),o.Y36(o.ZZ4))},t.\u0275dir=o.lG2({type:t,features:[o.TTD]}),t})();class Ae extends Z{}const Ge=Y(Ae);let M=(()=>{class t extends Ge{constructor(e,n,r){super(e,n),this._table=r}ngOnChanges(e){super.ngOnChanges(e)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc),o.Y36(o.ZZ4),o.Y36(g,8))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:["cdkHeaderRowDef","columns"],sticky:["cdkHeaderRowDefSticky","sticky"]},features:[o.qOj,o.TTD]}),t})();class Ie extends Z{}const Le=Y(Ie);let S=(()=>{class t extends Le{constructor(e,n,r){super(e,n),this._table=r}ngOnChanges(e){super.ngOnChanges(e)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc),o.Y36(o.ZZ4),o.Y36(g,8))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:["cdkFooterRowDef","columns"],sticky:["cdkFooterRowDefSticky","sticky"]},features:[o.qOj,o.TTD]}),t})(),O=(()=>{class t extends Z{constructor(e,n,r){super(e,n),this._table=r}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc),o.Y36(o.ZZ4),o.Y36(g,8))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkRowDef",""]],inputs:{columns:["cdkRowDefColumns","columns"],when:["cdkRowDefWhen","when"]},features:[o.qOj]}),t})(),C=(()=>{class t{constructor(e){this._viewContainer=e,t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.s_b))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkCellOutlet",""]]}),t.mostRecentCellOutlet=null,t})(),X=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,n){1&e&&o.GkF(0,0)},directives:[C],encapsulation:2}),t})(),q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["cdk-footer-row"],["tr","cdk-footer-row",""]],hostAttrs:["role","row",1,"cdk-footer-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,n){1&e&&o.GkF(0,0)},directives:[C],encapsulation:2}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,n){1&e&&o.GkF(0,0)},directives:[C],encapsulation:2}),t})(),E=(()=>{class t{constructor(e){this.templateRef=e}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc))},t.\u0275dir=o.lG2({type:t,selectors:[["ng-template","cdkNoDataRow",""]]}),t})();const le=["top","bottom","left","right"];class Ye{constructor(s,e,n,r,i=!0,a=!0,l){this._isNativeHtmlTable=s,this._stickCellCss=e,this.direction=n,this._coalescedStyleScheduler=r,this._isBrowser=i,this._needsPositionStickyOnElement=a,this._positionListener=l,this._cachedCellWidths=[],this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(s,e){const n=[];for(const r of s)if(r.nodeType===r.ELEMENT_NODE){n.push(r);for(let i=0;i<r.children.length;i++)n.push(r.children[i])}this._coalescedStyleScheduler.schedule(()=>{for(const r of n)this._removeStickyStyle(r,e)})}updateStickyColumns(s,e,n,r=!0){if(!s.length||!this._isBrowser||!e.some(d=>d)&&!n.some(d=>d))return void(this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:[]}),this._positionListener.stickyEndColumnsUpdated({sizes:[]})));const i=s[0],a=i.children.length,l=this._getCellWidths(i,r),c=this._getStickyStartColumnPositions(l,e),h=this._getStickyEndColumnPositions(l,n),f=e.lastIndexOf(!0),m=n.indexOf(!0);this._coalescedStyleScheduler.schedule(()=>{const d="rtl"===this.direction,k=d?"right":"left",ne=d?"left":"right";for(const y of s)for(let w=0;w<a;w++){const De=y.children[w];e[w]&&this._addStickyStyle(De,k,c[w],w===f),n[w]&&this._addStickyStyle(De,ne,h[w],w===m)}this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:-1===f?[]:l.slice(0,f+1).map((y,w)=>e[w]?y:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:-1===m?[]:l.slice(m).map((y,w)=>n[w+m]?y:null).reverse()}))})}stickRows(s,e,n){if(!this._isBrowser)return;const r="bottom"===n?s.slice().reverse():s,i="bottom"===n?e.slice().reverse():e,a=[],l=[],c=[];for(let f=0,m=0;f<r.length;f++){if(!i[f])continue;a[f]=m;const d=r[f];c[f]=this._isNativeHtmlTable?Array.from(d.children):[d];const k=d.getBoundingClientRect().height;m+=k,l[f]=k}const h=i.lastIndexOf(!0);this._coalescedStyleScheduler.schedule(()=>{var f,m;for(let d=0;d<r.length;d++){if(!i[d])continue;const k=a[d],ne=d===h;for(const y of c[d])this._addStickyStyle(y,n,k,ne)}"top"===n?null===(f=this._positionListener)||void 0===f||f.stickyHeaderRowsUpdated({sizes:l,offsets:a,elements:c}):null===(m=this._positionListener)||void 0===m||m.stickyFooterRowsUpdated({sizes:l,offsets:a,elements:c})})}updateStickyFooterContainer(s,e){if(!this._isNativeHtmlTable)return;const n=s.querySelector("tfoot");this._coalescedStyleScheduler.schedule(()=>{e.some(r=>!r)?this._removeStickyStyle(n,["bottom"]):this._addStickyStyle(n,"bottom",0,!1)})}_removeStickyStyle(s,e){for(const r of e)s.style[r]="",s.classList.remove(this._borderCellCss[r]);le.some(r=>-1===e.indexOf(r)&&s.style[r])?s.style.zIndex=this._getCalculatedZIndex(s):(s.style.zIndex="",this._needsPositionStickyOnElement&&(s.style.position=""),s.classList.remove(this._stickCellCss))}_addStickyStyle(s,e,n,r){s.classList.add(this._stickCellCss),r&&s.classList.add(this._borderCellCss[e]),s.style[e]=`${n}px`,s.style.zIndex=this._getCalculatedZIndex(s),this._needsPositionStickyOnElement&&(s.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(s){const e={top:100,bottom:10,left:1,right:1};let n=0;for(const r of le)s.style[r]&&(n+=e[r]);return n?`${n}`:""}_getCellWidths(s,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;const n=[],r=s.children;for(let i=0;i<r.length;i++)n.push(r[i].getBoundingClientRect().width);return this._cachedCellWidths=n,n}_getStickyStartColumnPositions(s,e){const n=[];let r=0;for(let i=0;i<s.length;i++)e[i]&&(n[i]=r,r+=s[i]);return n}_getStickyEndColumnPositions(s,e){const n=[];let r=0;for(let i=s.length;i>0;i--)e[i]&&(n[i]=r,r+=s[i]);return n}}const $=new o.OlP("CDK_SPL");let H=(()=>{class t{constructor(e,n){this.viewContainer=e,this.elementRef=n}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.s_b),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t,selectors:[["","rowOutlet",""]]}),t})(),N=(()=>{class t{constructor(e,n){this.viewContainer=e,this.elementRef=n}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.s_b),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t,selectors:[["","headerRowOutlet",""]]}),t})(),B=(()=>{class t{constructor(e,n){this.viewContainer=e,this.elementRef=n}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.s_b),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t,selectors:[["","footerRowOutlet",""]]}),t})(),A=(()=>{class t{constructor(e,n){this.viewContainer=e,this.elementRef=n}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.s_b),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t,selectors:[["","noDataRowOutlet",""]]}),t})(),G=(()=>{class t{constructor(e,n,r,i,a,l,c,h,f,m,d){this._differs=e,this._changeDetectorRef=n,this._elementRef=r,this._dir=a,this._platform=c,this._viewRepeater=h,this._coalescedStyleScheduler=f,this._viewportRuler=m,this._stickyPositioningListener=d,this._onDestroy=new L.xQ,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._stickyColumnStylesNeedReset=!0,this._forceRecalculateCellWidths=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this.needsPositionStickyOnElement=!0,this._isShowingNoDataRow=!1,this._multiTemplateDataRows=!1,this._fixedLayout=!1,this.contentChanged=new o.vpe,this.viewChange=new b.X({start:0,end:Number.MAX_VALUE}),i||this._elementRef.nativeElement.setAttribute("role","table"),this._document=l,this._isNativeHtmlTable="TABLE"===this._elementRef.nativeElement.nodeName}get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=(0,v.Ig)(e),this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}get fixedLayout(){return this._fixedLayout}set fixedLayout(e){this._fixedLayout=(0,v.Ig)(e),this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}ngOnInit(){this._setupStickyStyler(),this._isNativeHtmlTable&&this._applyNativeTableSections(),this._dataDiffer=this._differs.find([]).create((e,n)=>this.trackBy?this.trackBy(n.dataIndex,n.data):n),this._viewportRuler.change().pipe((0,T.R)(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentChecked(){this._cacheRowDefs(),this._cacheColumnDefs();const n=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||n,this._forceRecalculateCellWidths=n,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}ngOnDestroy(){this._rowOutlet.viewContainer.clear(),this._noDataRowOutlet.viewContainer.clear(),this._headerRowOutlet.viewContainer.clear(),this._footerRowOutlet.viewContainer.clear(),this._cachedRenderRowsMap.clear(),this._onDestroy.next(),this._onDestroy.complete(),(0,_.Z9)(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();const e=this._dataDiffer.diff(this._renderRows);if(!e)return this._updateNoDataRow(),void this.contentChanged.next();const n=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,n,(r,i,a)=>this._getEmbeddedViewArgs(r.item,a),r=>r.item.data,r=>{1===r.operation&&r.context&&this._renderCellTemplateForItem(r.record.item.rowDef,r.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(r=>{n.get(r.currentIndex).context.$implicit=r.item.data}),this._updateNoDataRow(),this.updateStickyColumnStyles(),this.contentChanged.next()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){const e=this._getRenderedRows(this._headerRowOutlet),r=this._elementRef.nativeElement.querySelector("thead");r&&(r.style.display=e.length?"":"none");const i=this._headerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,i,"top"),this._headerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyFooterRowStyles(){const e=this._getRenderedRows(this._footerRowOutlet),r=this._elementRef.nativeElement.querySelector("tfoot");r&&(r.style.display=e.length?"":"none");const i=this._footerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,i,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,i),this._footerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyColumnStyles(){const e=this._getRenderedRows(this._headerRowOutlet),n=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this._fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...n,...r],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((i,a)=>{this._addStickyColumnStyles([i],this._headerRowDefs[a])}),this._rowDefs.forEach(i=>{const a=[];for(let l=0;l<n.length;l++)this._renderRows[l].rowDef===i&&a.push(n[l]);this._addStickyColumnStyles(a,i)}),r.forEach((i,a)=>{this._addStickyColumnStyles([i],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(i=>i.resetStickyChanged())}_getAllRenderRows(){const e=[],n=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let r=0;r<this._data.length;r++){let i=this._data[r];const a=this._getRenderRowsForData(i,r,n.get(i));this._cachedRenderRowsMap.has(i)||this._cachedRenderRowsMap.set(i,new WeakMap);for(let l=0;l<a.length;l++){let c=a[l];const h=this._cachedRenderRowsMap.get(c.data);h.has(c.rowDef)?h.get(c.rowDef).push(c):h.set(c.rowDef,[c]),e.push(c)}}return e}_getRenderRowsForData(e,n,r){return this._getRowDefs(e,n).map(a=>{const l=r&&r.has(a)?r.get(a):[];if(l.length){const c=l.shift();return c.dataIndex=n,c}return{data:e,rowDef:a,dataIndex:n}})}_cacheColumnDefs(){this._columnDefsByName.clear(),I(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(n=>{this._columnDefsByName.has(n.name),this._columnDefsByName.set(n.name,n)})}_cacheRowDefs(){this._headerRowDefs=I(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=I(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=I(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);const e=this._rowDefs.filter(n=>!n.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){const e=(a,l)=>a||!!l.getColumnsDiff(),n=this._rowDefs.reduce(e,!1);n&&this._forceRenderDataRows();const r=this._headerRowDefs.reduce(e,!1);r&&this._forceRenderHeaderRows();const i=this._footerRowDefs.reduce(e,!1);return i&&this._forceRenderFooterRows(),n||r||i}_switchDataSource(e){this._data=[],(0,_.Z9)(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;(0,_.Z9)(this.dataSource)?e=this.dataSource.connect(this):(0,be.b)(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=(0,x.of)(this.dataSource)),this._renderChangeSubscription=e.pipe((0,T.R)(this._onDestroy)).subscribe(n=>{this._data=n||[],this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,n)=>this._renderRow(this._headerRowOutlet,e,n)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,n)=>this._renderRow(this._footerRowOutlet,e,n)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,n){const r=Array.from(n.columns||[]).map(l=>this._columnDefsByName.get(l)),i=r.map(l=>l.sticky),a=r.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,i,a,!this._fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){const n=[];for(let r=0;r<e.viewContainer.length;r++){const i=e.viewContainer.get(r);n.push(i.rootNodes[0])}return n}_getRowDefs(e,n){if(1==this._rowDefs.length)return[this._rowDefs[0]];let r=[];if(this.multiTemplateDataRows)r=this._rowDefs.filter(i=>!i.when||i.when(n,e));else{let i=this._rowDefs.find(a=>a.when&&a.when(n,e))||this._defaultRowDef;i&&r.push(i)}return r}_getEmbeddedViewArgs(e,n){return{templateRef:e.rowDef.template,context:{$implicit:e.data},index:n}}_renderRow(e,n,r,i={}){const a=e.viewContainer.createEmbeddedView(n.template,i,r);return this._renderCellTemplateForItem(n,i),a}_renderCellTemplateForItem(e,n){for(let r of this._getCellTemplates(e))C.mostRecentCellOutlet&&C.mostRecentCellOutlet._viewContainer.createEmbeddedView(r,n);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){const e=this._rowOutlet.viewContainer;for(let n=0,r=e.length;n<r;n++){const a=e.get(n).context;a.count=r,a.first=0===n,a.last=n===r-1,a.even=n%2==0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[n].dataIndex,a.renderIndex=n):a.index=this._renderRows[n].dataIndex}}_getCellTemplates(e){return e&&e.columns?Array.from(e.columns,n=>{const r=this._columnDefsByName.get(n);return e.extractCellTemplate(r)}):[]}_applyNativeTableSections(){const e=this._document.createDocumentFragment(),n=[{tag:"thead",outlets:[this._headerRowOutlet]},{tag:"tbody",outlets:[this._rowOutlet,this._noDataRowOutlet]},{tag:"tfoot",outlets:[this._footerRowOutlet]}];for(const r of n){const i=this._document.createElement(r.tag);i.setAttribute("role","rowgroup");for(const a of r.outlets)i.appendChild(a.elementRef.nativeElement);e.appendChild(i)}this._elementRef.nativeElement.appendChild(e)}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){const e=(n,r)=>n||r.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){this._stickyStyler=new Ye(this._isNativeHtmlTable,this.stickyCssClass,this._dir?this._dir.value:"ltr",this._coalescedStyleScheduler,this._platform.isBrowser,this.needsPositionStickyOnElement,this._stickyPositioningListener),(this._dir?this._dir.change:(0,x.of)()).pipe((0,T.R)(this._onDestroy)).subscribe(n=>{this._stickyStyler.direction=n,this.updateStickyColumnStyles()})}_getOwnDefs(e){return e.filter(n=>!n._table||n._table===this)}_updateNoDataRow(){const e=this._customNoDataRow||this._noDataRow;if(e){const n=0===this._rowOutlet.viewContainer.length;if(n!==this._isShowingNoDataRow){const r=this._noDataRowOutlet.viewContainer;n?r.createEmbeddedView(e.templateRef):r.clear(),this._isShowingNoDataRow=n}}}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.ZZ4),o.Y36(o.sBO),o.Y36(o.SBq),o.$8M("role"),o.Y36(ke.Is,8),o.Y36(Me.K0),o.Y36(ve.t4),o.Y36(_.k),o.Y36(U),o.Y36(se.rL),o.Y36($,12))},t.\u0275cmp=o.Xpm({type:t,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(e,n,r){if(1&e&&(o.Suo(r,E,5),o.Suo(r,p,5),o.Suo(r,O,5),o.Suo(r,M,5),o.Suo(r,S,5)),2&e){let i;o.iGM(i=o.CRH())&&(n._noDataRow=i.first),o.iGM(i=o.CRH())&&(n._contentColumnDefs=i),o.iGM(i=o.CRH())&&(n._contentRowDefs=i),o.iGM(i=o.CRH())&&(n._contentHeaderRowDefs=i),o.iGM(i=o.CRH())&&(n._contentFooterRowDefs=i)}},viewQuery:function(e,n){if(1&e&&(o.Gf(H,7),o.Gf(N,7),o.Gf(B,7),o.Gf(A,7)),2&e){let r;o.iGM(r=o.CRH())&&(n._rowOutlet=r.first),o.iGM(r=o.CRH())&&(n._headerRowOutlet=r.first),o.iGM(r=o.CRH())&&(n._footerRowOutlet=r.first),o.iGM(r=o.CRH())&&(n._noDataRowOutlet=r.first)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(e,n){2&e&&o.ekj("cdk-table-fixed-layout",n.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:"multiTemplateDataRows",fixedLayout:"fixedLayout"},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[o._Bn([{provide:g,useExisting:t},{provide:_.k,useClass:_.yy},{provide:U,useClass:ae},{provide:$,useValue:null}])],ngContentSelectors:Fe,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(e,n){1&e&&(o.F$t(Te),o.Hsn(0),o.Hsn(1,1),o.GkF(2,0),o.GkF(3,1),o.GkF(4,2),o.GkF(5,3))},directives:[N,H,A,B],styles:[".cdk-table-fixed-layout{table-layout:fixed}\n"],encapsulation:2}),t})();function I(t,s){return t.concat(Array.from(s))}let Pe=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[se.Cl]]}),t})();var de=u(2458),fe=u(6682),V=u(739),W=u(8002);const ze=[[["caption"]],[["colgroup"],["col"]]],Ue=["caption","colgroup, col"];let ue=(()=>{class t extends G{constructor(){super(...arguments),this.stickyCssClass="mat-table-sticky",this.needsPositionStickyOnElement=!1}}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275cmp=o.Xpm({type:t,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-table"],hostVars:2,hostBindings:function(e,n){2&e&&o.ekj("mat-table-fixed-layout",n.fixedLayout)},exportAs:["matTable"],features:[o._Bn([{provide:_.k,useClass:_.yy},{provide:G,useExisting:t},{provide:g,useExisting:t},{provide:U,useClass:ae},{provide:$,useValue:null}]),o.qOj],ngContentSelectors:Ue,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(e,n){1&e&&(o.F$t(ze),o.Hsn(0),o.Hsn(1,1),o.GkF(2,0),o.GkF(3,1),o.GkF(4,2),o.GkF(5,3))},directives:[N,H,A,B],styles:['mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:""}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky !important;position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}\n'],encapsulation:2}),t})(),K=(()=>{class t extends D{}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["","matCellDef",""]],features:[o._Bn([{provide:D,useExisting:t}]),o.qOj]}),t})(),J=(()=>{class t extends R{}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["","matHeaderCellDef",""]],features:[o._Bn([{provide:R,useExisting:t}]),o.qOj]}),t})(),he=(()=>{class t extends F{}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["","matFooterCellDef",""]],features:[o._Bn([{provide:F,useExisting:t}]),o.qOj]}),t})(),ee=(()=>{class t extends p{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["","matColumnDef",""]],inputs:{sticky:"sticky",name:["matColumnDef","name"]},features:[o._Bn([{provide:p,useExisting:t},{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:t}]),o.qOj]}),t})(),te=(()=>{class t extends P{}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-header-cell"],features:[o.qOj]}),t})(),me=(()=>{class t extends re{}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["mat-footer-cell"],["td","mat-footer-cell",""]],hostAttrs:["role","gridcell",1,"mat-footer-cell"],features:[o.qOj]}),t})(),oe=(()=>{class t extends z{}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:["role","gridcell",1,"mat-cell"],features:[o.qOj]}),t})(),_e=(()=>{class t extends M{}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["","matHeaderRowDef",""]],inputs:{columns:["matHeaderRowDef","columns"],sticky:["matHeaderRowDefSticky","sticky"]},features:[o._Bn([{provide:M,useExisting:t}]),o.qOj]}),t})(),we=(()=>{class t extends S{}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["","matFooterRowDef",""]],inputs:{columns:["matFooterRowDef","columns"],sticky:["matFooterRowDefSticky","sticky"]},features:[o._Bn([{provide:S,useExisting:t}]),o.qOj]}),t})(),pe=(()=>{class t extends O{}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["","matRowDef",""]],inputs:{columns:["matRowDefColumns","columns"],when:["matRowDefWhen","when"]},features:[o._Bn([{provide:O,useExisting:t}]),o.qOj]}),t})(),Ce=(()=>{class t extends X{}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275cmp=o.Xpm({type:t,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-header-row"],exportAs:["matHeaderRow"],features:[o._Bn([{provide:X,useExisting:t}]),o.qOj],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,n){1&e&&o.GkF(0,0)},directives:[C],encapsulation:2}),t})(),ye=(()=>{class t extends q{}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275cmp=o.Xpm({type:t,selectors:[["mat-footer-row"],["tr","mat-footer-row",""]],hostAttrs:["role","row",1,"mat-footer-row"],exportAs:["matFooterRow"],features:[o._Bn([{provide:q,useExisting:t}]),o.qOj],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,n){1&e&&o.GkF(0,0)},directives:[C],encapsulation:2}),t})(),ge=(()=>{class t extends Q{}return t.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(t)))(n||t)}}(),t.\u0275cmp=o.Xpm({type:t,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-row"],exportAs:["matRow"],features:[o._Bn([{provide:Q,useExisting:t}]),o.qOj],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,n){1&e&&o.GkF(0,0)},directives:[C],encapsulation:2}),t})(),Ve=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[Pe,de.BQ],de.BQ]}),t})();class Ke extends _.o2{constructor(s=[]){super(),this._renderData=new b.X([]),this._filter=new b.X(""),this._internalPageChanges=new L.xQ,this._renderChangesSubscription=null,this.sortingDataAccessor=(e,n)=>{const r=e[n];if((0,v.t6)(r)){const i=Number(r);return i<9007199254740991?i:r}return r},this.sortData=(e,n)=>{const r=n.active,i=n.direction;return r&&""!=i?e.sort((a,l)=>{let c=this.sortingDataAccessor(a,r),h=this.sortingDataAccessor(l,r);const f=typeof c,m=typeof h;f!==m&&("number"===f&&(c+=""),"number"===m&&(h+=""));let d=0;return null!=c&&null!=h?c>h?d=1:c<h&&(d=-1):null!=c?d=1:null!=h&&(d=-1),d*("asc"==i?1:-1)}):e},this.filterPredicate=(e,n)=>{const r=Object.keys(e).reduce((a,l)=>a+e[l]+"\u25ec","").toLowerCase(),i=n.trim().toLowerCase();return-1!=r.indexOf(i)},this._data=new b.X(s),this._updateChangeSubscription()}get data(){return this._data.value}set data(s){this._data.next(s),this._renderChangesSubscription||this._filterData(s)}get filter(){return this._filter.value}set filter(s){this._filter.next(s),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(s){this._sort=s,this._updateChangeSubscription()}get paginator(){return this._paginator}set paginator(s){this._paginator=s,this._updateChangeSubscription()}_updateChangeSubscription(){var s;const e=this._sort?(0,fe.T)(this._sort.sortChange,this._sort.initialized):(0,x.of)(null),n=this._paginator?(0,fe.T)(this._paginator.page,this._internalPageChanges,this._paginator.initialized):(0,x.of)(null),i=(0,V.aj)([this._data,this._filter]).pipe((0,W.U)(([c])=>this._filterData(c))),a=(0,V.aj)([i,e]).pipe((0,W.U)(([c])=>this._orderData(c))),l=(0,V.aj)([a,n]).pipe((0,W.U)(([c])=>this._pageData(c)));null===(s=this._renderChangesSubscription)||void 0===s||s.unsubscribe(),this._renderChangesSubscription=l.subscribe(c=>this._renderData.next(c))}_filterData(s){return this.filteredData=null==this.filter||""===this.filter?s:s.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(s){return this.sort?this.sortData(s.slice(),this.sort):s}_pageData(s){if(!this.paginator)return s;const e=this.paginator.pageIndex*this.paginator.pageSize;return s.slice(e,e+this.paginator.pageSize)}_updatePaginator(s){Promise.resolve().then(()=>{const e=this.paginator;if(e&&(e.length=s,e.pageIndex>0)){const n=Math.ceil(e.length/e.pageSize)-1||0,r=Math.min(e.pageIndex,n);r!==e.pageIndex&&(e.pageIndex=r,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){var s;null===(s=this._renderChangesSubscription)||void 0===s||s.unsubscribe(),this._renderChangesSubscription=null}}class Je extends Ke{}}}]);