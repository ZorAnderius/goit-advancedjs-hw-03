import{a as c,i as d,S as f,b as h}from"./assets/vendor-dce8fffd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const o={select:document.querySelector("select.breed-select"),breadContainer:document.querySelector("div.cat-info"),loader:document.querySelector(".loader"),errorField:document.querySelector("p.error")};c.defaults.headers.common["x-api-key"]="live_vrovklV9L79Ajq9ux7mli1DRWWaoX5WqWAzKfKcnwo4TbumJO1IlIsKmUzxBiKlf";c.defaults.baseURL="https://api.thecatapi.com/v1";const p=async()=>{const{data:e}=await c({method:"GET",url:"/breeds"});return e},g=async e=>{const{data:t}=await c({method:"GET",url:`/images/search?breed_id=${e}`});return t},y=async e=>e.map(({id:t,name:a})=>`
        <option value="${t}">${a}</option>
        `).join(""),b=({name:e,description:t,temperament:a,url:i})=>`
        <div class="img-thumb">
            <img class="breed-img" src="${i}" alt="${e??"Here must be some image"}">
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
        </div>`,l={icon:"",position:"center",timeout:5e3},u=e=>d.error({...l,title:"Oops!!!",message:e.message?`${e.message}. You can try to reloaded the page.`:e,timeout:5e3}),v=()=>d.info({...l,title:"Cat not found!",message:"Incorrect cat. Please choose another cat."}),m=(e,t)=>{e&&setTimeout(()=>{e.hidden=!1,e.textContent=`Oops!!! ${t.message?`${t.message}`:t}. You can try to reloaded the page.`},5e3)},L=()=>{o.loader.classList.add("loader-hidden")};window.addEventListener("load",L);const w=async([{value:e}])=>{if(e)try{o.loader.classList.toggle("loader-hidden");const t=await g(e);t&&t.length?(o.breadContainer.innerHTML="",o.breadContainer.insertAdjacentHTML("afterbegin",b({...t[0].breeds[0],url:t[0].url})),o.loader.classList.toggle("loader-hidden")):v()}catch(t){o.loader.classList.toggle("loader-hidden"),u(t),m(o.errorField,t)}},S=async()=>{try{const e=await p();o.select.innerHTML=await y(e),new f({select:"select.breed-select",events:{afterChange:w}})&&new h(document.querySelector(".ss-list"))}catch(e){u(e),m(o.errorField,e)}};S();
//# sourceMappingURL=commonHelpers.js.map
