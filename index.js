import{i as n,a as c,S as f}from"./assets/vendor-DzBlEn4a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();function m(o){n.error({...u,message:o,color:"#ef4040",icon:"icon-error"})}const u={position:"topRight",titleColor:"#fff",titleSize:"16px",titleWeight:"700",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageWeight:"400",messageLineHeight:"1.5",iconColor:"#fff",theme:"dark",maxWidth:"432px"},g="52494269-f940d25beafa0bafe61525357",d="https://pixabay.com/api/",h=9;function p(o){return c.get(d,y(o)).then(r=>{const e=r.data.hits;if(!e||!e.length)throw new Error("Sorry, there are no images matching your search query. Please try again!");return e}).catch(r=>{throw m(r.message),r})}function y(o){return{params:{key:g,q:o,image_type:"image/png",orientation:"horizontal",safesearch:!0,per_page:h}}}const a={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},L=new f(".gallery a",{captionsData:"alt",captionDelay:250});function w(o){const r=o.map(e=>`<li class="gallery-item">
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
       </li>`).join("");a.gallery.innerHTML=r,L.refresh()}function b(){a.gallery.innerHTML="",console.log(`CALL CLEAR GALLERY ${new Date}`)}function S(){a.loader.classList.add("is-visible")}function v(){a.loader.classList.remove("is-visible")}a.form.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();r&&(b(),S(),p(r).then(e=>w(e)).finally(v))});
//# sourceMappingURL=index.js.map
