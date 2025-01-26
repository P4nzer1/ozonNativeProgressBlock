(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();class c{constructor(e){this.element=e,this.value=0,this.isAnimated=!1,this.isHidden=!1,this.init()}init(){this.element.innerHTML=`
      <svg class="progress_ring" viewBox="0 0 36 36">
        <circle class="progress_ring-bg" cx="18" cy="18" r="16"></circle>
        <circle class="progress_ring-value" cx="18" cy="18" r="16"></circle>
      </svg>
    `,this.update()}setProgress(e){this.value=Math.max(0,Math.min(100,e)),this.update()}setAnimated(e){this.isAnimated=e,this.update()}setHidden(e){this.isHidden=e,this.update()}update(){const e=this.element.querySelector(".progress_ring-value"),n=this.value/100*(2*Math.PI*16);e.style.strokeDasharray=`${n} ${2*Math.PI*16}`,this.value>0&&this.isAnimated?this.element.classList.add("animate"):this.element.classList.remove("animate"),this.element.classList.toggle("animate",this.isAnimated),this.element.classList.toggle("hidden",this.isHidden)}}class h{constructor(e,n,s){this.element=e,this.onChange=n,this.progress=s,this.init()}resetInput(e){e.target.value="",this.progress.setProgress(0),this.onChange(0)}init(){this.element.innerHTML=`
      <label class="input">
        <input  type="number" min="0" max="100" value="0" />
        <span>Value</span>
      </label>
    `,this.element.querySelector("input").addEventListener("input",e=>{const n=/^(100|[0-9]?[0-9])$/,s=e.target.value;if(s===""||!n.test(s)||parseInt(s,10)>100)this.resetInput(e);else{const t=parseInt(s,10);this.onChange(t),this.progress.setProgress(t)}})}}class a{constructor(e,n,s){this.element=e,this.label=n,this.onChange=s,this.checked=!1,this.init()}init(){this.element.innerHTML=`
      <label class="toggle">
        <input type="checkbox" />
        <span class="slider"></span>
        <span class="label">${this.label}</span>
      </label>
    `,this.element.querySelector("input").addEventListener("change",e=>{this.checked=e.target.checked,this.onChange(this.checked)})}}function u(l){const e=document.getElementById(l),n=e.querySelector("#progress"),s=e.querySelector("#input"),t=e.querySelector("#animate_toggle"),i=e.querySelector("#hide_toggle"),r=new c(n);new h(s,o=>r.setProgress(o),r),new a(t,"Animate",o=>r.setAnimated(o)),new a(i,"Hide",o=>r.setHidden(o))}document.addEventListener("DOMContentLoaded",()=>{u("root")});
