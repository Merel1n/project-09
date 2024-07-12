import{A as v,i as u,S as l,a as m}from"./assets/vendor-3ff740d6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();const p=v.create({baseURL:"https://portfolio-js.b.goit.study/api"});async function g(){try{return(await p.get("/reviews")).data}catch(e){console.error("Error fetching reviews:",e)}}async function y(e){try{return(await p.post("/requests",e)).data}catch{u.show({message:"Something went wrong. Please, try again.",position:"topCenter",backgroundColor:"#ed3b44",messageColor:"#fafafa",titleColor:"#fafafa"})}}const n={reviewsList:document.querySelector(".reviews-wrapper"),errorMessage:document.getElementById("error-message"),sectionCovers:document.querySelector(".section-covers"),burgerMenu:document.querySelector(".burger-menu"),closeBurgerMenu:document.querySelector(".close-btn"),modalMenu:document.querySelector(".modal-menu"),modalContainer:document.querySelector(".modal-container"),menu:document.querySelector(".menu"),menuList:document.querySelector(".menu-list")};async function w(){try{const e=await g();if(e.length===0){n.errorMessage.textContent="Not found";return}e.forEach(r=>{const i=document.createElement("li");i.classList.add("swiper-slide"),i.classList.add("reviews-slide"),i.innerHTML=`
        <img class="review-img" src="${r.avatar_url}" alt="${r.author}'s avatar">
        <h3 class="review-author">${r.author}</h3>
        <p class="review-comment">${r.review}</p>
      `,n.reviewsList.appendChild(i)});const t=new l(".swiper-container",{direction:"horizontal",navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},keyboard:{enabled:!0,onlyInViewport:!1}})}catch{n.errorMessage.textContent="Not found"}}document.addEventListener("DOMContentLoaded",w);const L=document.querySelector(".accordion-container-faq");new m(L,{duration:400,showMultiple:!0,onOpen:function(e){const t=e.querySelector(".an-icon-button-down"),r=e.querySelector(".an-icon-button-up");t.classList.toggle("open"),r.classList.toggle("open")},onClose:function(e){const t=e.querySelector(".an-icon-button-down"),r=e.querySelector(".an-icon-button-up");t.classList.toggle("open"),r.classList.toggle("open")}});new l(".swiper-pr",{direction:"horizontal",navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},slidesPerView:1,spaceBetween:34,keyboard:{enabled:!0,onlyInViewport:!1}});const s={input:document.querySelector(".input-form-work-together"),form:document.querySelector(".form-work-together"),inputComments:document.querySelector(".comments-form-work-together"),modal:document.querySelector(".modal-backdrop"),inputWrapper:document.querySelector(".input-wrapper"),commentsWrapper:document.querySelector(".comments-wrapper"),inputSuccess:document.querySelector(".input-success"),inputInvalid:document.querySelector(".input-invalid")};s.form.addEventListener("submit",async e=>{e.preventDefault(),s.inputSuccess.classList.add("visually-hidden"),s.inputWrapper.classList.remove("valid"),s.commentsWrapper.classList.remove("filling");const{email:t,comments:r}=e.target.elements,i={email:t.value.trim(),comment:r.value.trim()};try{if(!await y(i))return;s.modal.classList.remove("visually-hidden"),s.form.reset()}catch{u.show({message:"Something went wrong. Please, try again.",position:"topCenter",backgroundColor:"#ed3b44",messageColor:"#fafafa",titleColor:"#fafafa"})}});s.modal.addEventListener("click",e=>{const{className:t}=e.target;(t==="modal-backdrop"||t==="close-button")&&s.modal.classList.add("visually-hidden")});document.addEventListener("keydown",e=>{(e.key==="Escape"||e.key==="Esc")&&s.modal.classList.add("visually-hidden")});s.input.addEventListener("input",()=>{s.input.validity.valid?(s.inputSuccess.classList.remove("visually-hidden"),s.inputInvalid.classList.add("visually-hidden"),s.inputWrapper.classList.add("valid"),s.inputWrapper.classList.remove("invalid")):(s.inputSuccess.classList.add("visually-hidden"),s.inputInvalid.classList.remove("visually-hidden"),s.inputWrapper.classList.remove("valid"),s.inputWrapper.classList.add("invalid"))});s.inputComments.addEventListener("input",()=>{s.inputComments.value.trim().length>0?s.commentsWrapper.classList.add("filling"):s.commentsWrapper.classList.remove("filling")});new m(".accord-container",{duration:400,openOnInit:[0]});new l(".swiper-am",{direction:"horizontal",speed:400,spaceBetween:0,loop:!0,freeMode:!1,navigation:{nextEl:".button-next"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2,width:260},768:{slidesPerView:3,width:600},1440:{slidesPerView:6,width:1200}}});const d=document.querySelector(".scroll-up"),h=()=>{window.scrollY>800?d.classList.add("scroll-up-active"):d.classList.remove("scroll-up-active")};window.addEventListener("scroll",h);function b(e,t){document.querySelector(e)&&document.querySelectorAll(".marquee-inner li").forEach(o=>{o.classList.add(t)})}function S(e,t){document.querySelector(e)&&document.querySelectorAll(".marquee-inner li").forEach(o=>{o.classList.remove(t)})}const q={rootMargin:"20px 0px",threshold:0};function E(e){e[0].isIntersecting?b("#covers","js-marquee-line"):S("#covers","js-marquee-line")}const I=new IntersectionObserver(E,q);function C(){n.modalMenu.classList.add("is-open"),n.modalContainer.addEventListener("click",e=>{if(e.preventDefault(),e.target.nodeName!=="A")return;const t=e.target.getAttribute("href").substring(1),r=document.getElementById(t);f(),r.scrollIntoView({block:"start"})})}function f(){n.modalMenu.classList.remove("is-open")}function M(){n.menuList.classList.toggle("is-open"),n.menuList.addEventListener("click",e=>{if(e.preventDefault(),e.target.nodeName!=="A")return;const t=e.target.getAttribute("href").substring(1),r=document.getElementById(t);k(),r.scrollIntoView({block:"start"})})}function k(){n.menuList.classList.remove("is-open")}I.observe(n.sectionCovers);n.burgerMenu.addEventListener("click",C);n.closeBurgerMenu.addEventListener("click",f);n.menu.addEventListener("click",M);
//# sourceMappingURL=commonHelpers.js.map
