import{A as f,i as l,S as p,a as u}from"./assets/vendor-3ff740d6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const d=f.create({baseURL:"https://portfolio-js.b.goit.study/api"});async function g(){try{return(await d.get("/reviews")).data}catch(e){console.error("Error fetching reviews:",e)}}async function w(e){try{return(await d.post("/requests",e)).data}catch{l.show({message:"Something went wrong. Please, try again.",position:"topCenter",backgroundColor:"#ed3b44",messageColor:"#fafafa",titleColor:"#fafafa"})}}const r={reviewsList:document.querySelector(".reviews-wrapper"),errorMessage:document.getElementById("error-message"),nextButton:document.querySelector(".swiper-button-next"),prevButton:document.querySelector(".swiper-button-prev"),sectionCovers:document.querySelector(".section-covers"),burgerMenu:document.querySelector(".burger-menu"),closeBurgerMenu:document.querySelector(".close-btn"),modalMenu:document.querySelector(".modal-menu"),modalContainer:document.querySelector(".modal-container"),menu:document.querySelector(".menu"),menuList:document.querySelector(".menu-list")};async function y(){try{const e=await g();if(e.length===0){r.errorMessage.textContent="Not found";return}e.forEach(o=>{const s=document.createElement("li");s.classList.add("swiper-slide"),s.classList.add("reviews-slide"),s.innerHTML=`
        <img class="review-img" src="${o.avatar_url}" alt="${o.author}'s avatar">
        <h3 class="review-author">${o.author}</h3>
        <p class="review-comment">${o.review}</p>
      `,r.reviewsList.appendChild(s)});const t=new p(".swiper-container",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},keyboard:{enabled:!0,onlyInViewport:!1},on:{reachEnd:function(){r.nextButton.classList.add("swiper-button-disabled")},reachBeginning:function(){r.prevButton.classList.add("swiper-button-disabled")},fromEdge:function(){r.nextButton.classList.remove("swiper-button-disabled"),r.prevButton.classList.remove("swiper-button-disabled")}}})}catch{r.errorMessage.textContent="Not found"}}document.addEventListener("DOMContentLoaded",y);document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".accordion-container-faq");new u(e,{showMultiple:!0,activeClass:"open",onOpen:o=>console.log("Open!",o),onClose:o=>console.log("Close!",o)}),document.querySelectorAll(".faq-btn").forEach(o=>{o.addEventListener("click",function(){const s=o.querySelector("svg use");s.getAttribute("href")==="./img/icons-sprite.svg#icon-down-arrow"?s.setAttribute("href","./img/icons-sprite.svg#icon-up-arrow"):s.setAttribute("href","./img/icons-sprite.svg#icon-down-arrow")})})});const c={input:document.querySelector(".input-form-work-together"),form:document.querySelector(".form-work-together"),inputComments:document.querySelector(".textarea-form-work-together"),modal:document.querySelector(".modal-backdrop")};c.form.addEventListener("submit",async e=>{e.preventDefault();const{email:t,comments:o}=e.target.elements,s={email:t.value.trim(),comment:o.value.trim()};try{if(!await w(s))return;c.modal.classList.remove("visually-hidden"),c.form.reset()}catch{l.show({message:"Something went wrong. Please, try again.",position:"topCenter",backgroundColor:"#ed3b44",messageColor:"#fafafa",titleColor:"#fafafa"})}});c.modal.addEventListener("click",e=>{const{className:t}=e.target;(t==="modal-backdrop"||t==="close-button")&&c.modal.classList.add("visually-hidden")});document.addEventListener("keydown",e=>{(e.key==="Escape"||e.key==="Esc")&&c.modal.classList.add("visually-hidden")});new u(".accordion-container",{duration:400,openOnInit:[0],onOpen:function(e){const t=e.querySelector(".am-icon-button-down"),o=e.querySelector(".am-icon-button-up");t.classList.toggle("open"),o.classList.toggle("open")},onClose:function(e){const t=e.querySelector(".am-icon-button-down"),o=e.querySelector(".am-icon-button-up");t.classList.toggle("open"),o.classList.toggle("open")}});function v(e,t){document.querySelector(e)&&document.querySelectorAll(".marquee-inner li").forEach(n=>{n.classList.add(t)})}function b(e,t){document.querySelector(e)&&document.querySelectorAll(".marquee-inner li").forEach(n=>{n.classList.remove(t)})}const L={rootMargin:"20px 0px",threshold:0};function h(e){e[0].isIntersecting?v("#covers","js-marquee-line"):b("#covers","js-marquee-line")}const q=new IntersectionObserver(h,L);function S(){r.modalMenu.classList.add("is-open"),r.modalContainer.addEventListener("click",e=>{if(e.preventDefault(),e.target.nodeName!=="A")return;const t=e.target.getAttribute("href").substring(1),o=document.getElementById(t);m(),o.scrollIntoView({block:"start"})})}function m(){r.modalMenu.classList.remove("is-open")}function C(){r.menuList.classList.toggle("is-open"),r.menuList.addEventListener("click",e=>{if(e.preventDefault(),e.target.nodeName!=="A")return;const t=e.target.getAttribute("href").substring(1),o=document.getElementById(t);E(),o.scrollIntoView({block:"start"})})}function E(){r.menuList.classList.remove("is-open")}q.observe(r.sectionCovers);r.burgerMenu.addEventListener("click",S);r.closeBurgerMenu.addEventListener("click",m);r.menu.addEventListener("click",C);
//# sourceMappingURL=commonHelpers.js.map
