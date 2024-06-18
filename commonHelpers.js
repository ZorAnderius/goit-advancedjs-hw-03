import{a as i,i as d,S as f,b as h}from"./assets/vendor-dce8fffd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const r={select:document.querySelector("select.breed-select"),catContainer:document.querySelector("div.cat-info"),loader:document.querySelector(".loader"),errorField:document.querySelector("p.error")};i.defaults.headers.common["x-api-key"]="live_vrovklV9L79Ajq9ux7mli1DRWWaoX5WqWAzKfKcnwo4TbumJO1IlIsKmUzxBiKlf";i.defaults.baseURL="https://api.thecatapi.com/v1";const p=async()=>{const{data:e}=await i({method:"GET",url:"/breeds"});return e},g=async e=>{const{data:t}=await i({method:"GET",url:`/images/search?breed_id=${e}`});return t},y=async e=>e.map(({id:t,name:a})=>`
        <option value="${t}">${a}</option>
        `).join(""),b=({name:e,description:t,temperament:a,url:c})=>`
        <div class="img-thumb">
            <img class="breed-img" src="${c}" alt="${e??"Here must be some image"}">
        </div>
        <div class='cat-info-text'>
            <div>
                <h2 class="breed-title">${e??"Here must be some text"}</h2>
                <p class="breed-desc">${t??"Here must be some text"}</p>
            </div>
            <div>
                <h3 class="breed-subtitle">Temperaments: </h3>
                <p class="breed-desc">${a??"Here must be some text"}</p>
            </div>
        </div>`,l={icon:"",position:"center",timeout:5e3},u=e=>d.error({...l,title:"Oops!!!",message:e.message?`${e.message}. You can try to reloaded the page.`:e,timeout:5e3}),L=()=>d.info({...l,title:"Cat not found!",message:"Incorrect cat. Please choose another cat."}),m=(e,t)=>{e&&setTimeout(()=>{e.hidden=!1,e.textContent=`Oops!!! ${t.message?`${t.message}`:t}. You can try to reloaded the page.`},5e3)},v=()=>{r.loader.classList.add("loader-hidden")};window.addEventListener("load",v);const w=async([{value:e}])=>{if(e)try{r.catContainer.classList.toggle("cat-info-hidden"),r.loader.classList.toggle("loader-hidden");const t=await g(e);t&&t.length?(r.catContainer.innerHTML="",r.catContainer.insertAdjacentHTML("afterbegin",b({...t[0].breeds[0],url:t[0].url})),r.loader.classList.toggle("loader-hidden"),r.catContainer.classList.toggle("cat-info-hidden")):L()}catch(t){r.loader.classList.toggle("loader-hidden"),u(t),m(r.errorField,t)}},S=async()=>{try{const e=await p();r.select.innerHTML=await y(e),new f({select:"select.breed-select",events:{afterChange:w}})&&new h(document.querySelector(".ss-list"))}catch(e){u(e),m(r.errorField,e)}};S();
//# sourceMappingURL=commonHelpers.js.map
