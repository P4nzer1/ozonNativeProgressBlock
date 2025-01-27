(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();class c{constructor(e){this.element=e,this.value=0,this.isAnimated=!1,this.isHidden=!1,this.init()}init(){this.element.innerHTML=`
      <svg class="progress_ring" viewBox="0 0 36 36">
        <circle class="progress_ring-bg" cx="18" cy="18" r="16"></circle>
        <circle class="progress_ring-value" cx="18" cy="18" r="16"></circle>
      </svg>
    `,this.update()}setProgress(e){this.value=Math.max(0,Math.min(100,e)),this.update()}setAnimated(e){this.isAnimated=e,this.update()}setHidden(e){this.isHidden=e,this.update()}update(){const e=this.element.querySelector(".progress_ring-value"),i=this.value/100*(2*Math.PI*16);e.style.strokeDasharray=`${i} ${2*Math.PI*16}`,this.element.classList.toggle("animate",this.isAnimated&&this.value>0&&this.value<100&&!this.isHidden),this.element.classList.toggle("hidden",this.isHidden)}}class u{constructor(e,i,n=0,t=100,s="Value"){this.element=e,this.onChange=i,this.minValue=n,this.maxValue=t,this.labelText=s,this.init()}resetInput(e){e.target.value="",this.onChange(0)}init(){this.element.innerHTML=`
      <label class="input">
        <input type="number" min="${this.minValue}" max="${this.maxValue}" value="${this.labelText}" />
        <span>${this.labelText}</span>
      </label>
    `,this.element.querySelector("input").addEventListener("input",e=>{const i=e.target.value,n=parseInt(i,10);if(i===""||isNaN(n)||n<this.minValue)this.resetInput(e);else{const t=Math.min(n,this.maxValue);e.target.value=t,this.onChange(t)}})}}class o{constructor(e,i="Value",n){this.element=e,this.labelText=i,this.onChange=n,this.checked=!1,this.init()}init(){this.element.innerHTML=`
      <label class="toggle">
        <input type="checkbox" />
        <span class="slider"></span>
        <span class="label">${this.labelText}</span>
      </label>
    `,this.element.querySelector("input").addEventListener("change",e=>{this.checked=e.target.checked,this.onChange(this.checked)})}}function h(l){const e=document.getElementById(l),i=e.querySelector("#progress"),n=e.querySelector("#input"),t=e.querySelector("#animate_toggle"),s=e.querySelector("#hide_toggle"),r=new c(i);new u(n,a=>r.setProgress(a)),new o(t,"Animate",a=>r.setAnimated(a)),new o(s,"Hide",a=>r.setHidden(a))}document.addEventListener("DOMContentLoaded",()=>{h("root")});
