import{o as l,c as d,a as r,b as s,d as p,F as u,e as f,f as v}from"./vendor.12688497.js";const _=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};_();var g="/image/hetu-logo-large.png",h=(i,o)=>{const n=i.__vccOpts||i;for(const[c,e]of o)n[c]=e;return n};const m={},y={class:"mt-5 text-center text-lg-start bg-light text-muted"},b=r("section",{class:"text-center pt-4 text-dark text-opacity-25 border-bottom"},[s(" To see the world in a grain of sand, "),r("br"),s(" and to see heaven in a wild flower, "),r("br"),s(" hold infinity in the palm of your hands, "),r("br"),s(" and eternity in an hour. "),r("br"),s(" - William Blake"),r("br")],-1),x=r("div",{class:"text-center p-3 mb-0",style:{"background-color":"rgba(0, 0, 0, 0.05)"}},[s(" Copyright \xA9 2021 "),r("a",{class:"text-reset",href:"https://hetu.dev/"},"hetu.dev")],-1),w=[b,x];function L(i,o){return l(),d("div",y,w)}var N=h(m,[["render",L]]);const k=f('<div class="spacer"><div class="container text-center pt-5"><div class="row"><div class="col top-space"></div></div><div class="row"><div class="col"><img class="logo" src="'+g+'"></div></div><div class="row"><div class="col pt-5 fs-2 title">Hetu Script Language</div></div><div class="row"><div class="col pt-2"> A lightweight script language written in Dart for embedding in Flutter apps. </div></div><div class="row pt-4 pb justify-content-center"><div class="col-2 text-nowrap"><a class="btn doc-btn" href="/docs/en-US/">Learn More...</a></div></div></div></div>',1),F={setup(i){return(o,n)=>(l(),d(u,null,[k,p(N)],64))}},O=v(F);O.mount("#app");
