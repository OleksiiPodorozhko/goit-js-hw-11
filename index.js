import{i as c,a as f,S as m}from"./assets/vendor-DzBlEn4a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();function n(s){c.error({...u,message:s,color:"#ef4040",icon:"icon-error"})}const u={position:"topRight",titleColor:"#fff",titleSize:"16px",titleWeight:"700",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageWeight:"400",messageLineHeight:"1.5",iconColor:"#fff",theme:"dark",maxWidth:"432px"},g="52494269-f940d25beafa0bafe61525357",d="https://pixabay.com/api/",h=9;function p(s){return f.get(d,y(s)).then(r=>{const e=r.data.hits;return!e||!e.length?(n("Sorry, there are no images matching your search query. Please try again!"),[]):e}).catch(r=>(n(r.message),[]))}function y(s){return{params:{key:g,q:s,image_type:"image/png",orientation:"horizontal",safesearch:!0,per_page:h}}}const i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const r=s.map(e=>`<li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-img">
          </a>
          <ul class="img-footer">
            <li class="img-footer-item">
              <h3 class="meta-header">Likes</h3>
              <p class="meta-info">${e.likes}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Views</h3>
              <p class="meta-info">${e.views}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Comments</h3>
              <p class="meta-info">${e.comments}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Downloads</h3>
              <p class="meta-info">${e.downloads}</p>
            </li>
           </ul>
       </li>`).join("");i.gallery.innerHTML=r,L.refresh()}function S(){i.gallery.innerHTML=""}function v(){i.loader.classList.add("is-visible")}function w(){i.loader.classList.remove("is-visible")}i.form.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();r&&(S(),v(),p(r).then(e=>b(e)).finally(w))});
//# sourceMappingURL=index.js.map
