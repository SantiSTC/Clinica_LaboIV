import{I as h,O as r,R as d,ga as c,w as l,z as p}from"./chunk-BMMUWXGF.js";var a=(()=>{let i=class i{constructor(t,e){this.el=t,this.renderer=e,this.tooltipText="",this.tooltipElement=null}onMouseEnter(){this.showTooltip()}onMouseLeave(){this.hideTooltip()}showTooltip(){if(this.createTooltip(),this.tooltipElement){let t=this.el.nativeElement.getBoundingClientRect(),e=this.tooltipElement.getBoundingClientRect(),o=t.top-e.height-10,s=t.left+(t.width-e.width)/2;this.renderer.setStyle(this.tooltipElement,"top",`${o}px`),this.renderer.setStyle(this.tooltipElement,"left",`${s}px`),this.renderer.setStyle(this.tooltipElement,"opacity","1")}}hideTooltip(){this.tooltipElement&&this.renderer.setStyle(this.tooltipElement,"opacity","0")}createTooltip(){if(!this.tooltipElement){this.tooltipElement=this.renderer.createElement("div");let t=this.renderer.createText(this.tooltipText);this.renderer.appendChild(this.tooltipElement,t),this.renderer.appendChild(document.body,this.tooltipElement),this.renderer.setStyle(this.tooltipElement,"position","fixed"),this.renderer.setStyle(this.tooltipElement,"background","rgba(0,0,0,0.8)"),this.renderer.setStyle(this.tooltipElement,"color","white"),this.renderer.setStyle(this.tooltipElement,"padding","5px 10px"),this.renderer.setStyle(this.tooltipElement,"border-radius","4px"),this.renderer.setStyle(this.tooltipElement,"z-index","10000"),this.renderer.setStyle(this.tooltipElement,"opacity","0"),this.renderer.setStyle(this.tooltipElement,"transition","opacity 0.3s"),this.renderer.setStyle(this.tooltipElement,"font-size","11px"),this.renderer.setStyle(this.tooltipElement,"pointer-events","none")}}};i.\u0275fac=function(e){return new(e||i)(r(h),r(d))},i.\u0275dir=p({type:i,selectors:[["","appToolTip",""]],hostBindings:function(e,o){e&1&&c("mouseenter",function(){return o.onMouseEnter()})("mouseleave",function(){return o.onMouseLeave()})},inputs:{tooltipText:[l.None,"appToolTip","tooltipText"]},standalone:!0});let n=i;return n})();export{a};
