import{A as f,i as u,S as l,a as d}from"./assets/vendor-3ff740d6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();const p=f.create({baseURL:"https://portfolio-js.b.goit.study/api"});async function v(){try{return(await p.get("/reviews")).data}catch(e){console.error("Error fetching reviews:",e)}}async function g(e){try{return(await p.post("/requests",e)).data}catch{u.show({message:"Something went wrong. Please, try again.",position:"topCenter",backgroundColor:"#ed3b44",messageColor:"#fafafa",titleColor:"#fafafa"})}}const s={reviewsList:document.querySelector(".reviews-wrapper"),errorMessage:document.getElementById("error-message"),nextButton:document.querySelector(".swiper-button-next"),prevButton:document.querySelector(".swiper-button-prev"),sectionCovers:document.querySelector(".section-covers"),burgerMenu:document.querySelector(".burger-menu"),closeBurgerMenu:document.querySelector(".close-btn"),modalMenu:document.querySelector(".modal-menu"),modalContainer:document.querySelector(".modal-container"),menu:document.querySelector(".menu"),menuList:document.querySelector(".menu-list"),projectsNextButton:document.querySelector(".swiper-button-next"),projectsPrevButton:document.querySelector(".swiper-button-prev")};async function w(){try{const e=await v();if(e.length===0){s.errorMessage.textContent="Not found";return}e.forEach(r=>{const i=document.createElement("li");i.classList.add("swiper-slide"),i.classList.add("reviews-slide"),i.innerHTML=`
        <img class="review-img" src="${r.avatar_url}" alt="${r.author}'s avatar">
        <h3 class="review-author">${r.author}</h3>
        <p class="review-comment">${r.review}</p>
      `,s.reviewsList.appendChild(i)});const t=new l(".swiper-container",{direction:"horizontal",navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},keyboard:{enabled:!0,onlyInViewport:!1},on:{reachEnd:function(){s.nextButton.classList.add("swiper-button-disabled")},reachBeginning:function(){s.prevButton.classList.add("swiper-button-disabled")},fromEdge:function(){s.nextButton.classList.remove("swiper-button-disabled"),s.prevButton.classList.remove("swiper-button-disabled")}}})}catch{s.errorMessage.textContent="Not found"}}document.addEventListener("DOMContentLoaded",w);const y=document.querySelector(".accordion-container-faq");new d(y,{duration:400,showMultiple:!0,onOpen:function(e){const t=e.querySelector(".an-icon-button-down"),r=e.querySelector(".an-icon-button-up");t.classList.toggle("open"),r.classList.toggle("open")},onClose:function(e){const t=e.querySelector(".an-icon-button-down"),r=e.querySelector(".an-icon-button-up");t.classList.toggle("open"),r.classList.toggle("open")}});new l(".swiper-pr",{direction:"horizontal",navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},slidesPerView:1,autoplay:{delay:3e3},breakpoints:{320:{spaceBetween:16},375:{spaceBetween:34}},keyboard:{enabled:!0,onlyInViewport:!1},on:{reachEnd:function(){s.projectsNextButton.classList.add("swiper-button-disabled")},reachBeginning:function(){s.projectsPrevButton.classList.add("swiper-button-disabled")},fromEdge:function(){s.projectsNextButton.classList.remove("swiper-button-disabled"),s.projectsPrevButton.classList.remove("swiper-button-disabled")}}});const n={input:document.querySelector(".input-form-work-together"),form:document.querySelector(".form-work-together"),inputComments:document.querySelector(".comments-form-work-together"),modal:document.querySelector(".modal-backdrop"),inputWrapper:document.querySelector(".input-wrapper"),commentsWrapper:document.querySelector(".comments-wrapper"),inputSuccess:document.querySelector(".input-success"),inputInvalid:document.querySelector(".input-invalid")};n.form.addEventListener("submit",async e=>{e.preventDefault(),n.inputSuccess.classList.add("visually-hidden"),n.inputWrapper.classList.remove("valid"),n.commentsWrapper.classList.remove("filling");const{email:t,comments:r}=e.target.elements,i={email:t.value.trim(),comment:r.value.trim()};try{if(!await g(i))return;n.modal.classList.remove("visually-hidden"),n.form.reset()}catch{u.show({message:"Something went wrong. Please, try again.",position:"topCenter",backgroundColor:"#ed3b44",messageColor:"#fafafa",titleColor:"#fafafa"})}});n.modal.addEventListener("click",e=>{const{className:t}=e.target;(t==="modal-backdrop"||t==="close-button")&&n.modal.classList.add("visually-hidden")});document.addEventListener("keydown",e=>{(e.key==="Escape"||e.key==="Esc")&&n.modal.classList.add("visually-hidden")});n.input.addEventListener("input",()=>{n.input.validity.valid?(n.inputSuccess.classList.remove("visually-hidden"),n.inputInvalid.classList.add("visually-hidden"),n.inputWrapper.classList.add("valid"),n.inputWrapper.classList.remove("invalid")):(n.inputSuccess.classList.add("visually-hidden"),n.inputInvalid.classList.remove("visually-hidden"),n.inputWrapper.classList.remove("valid"),n.inputWrapper.classList.add("invalid"))});n.inputComments.addEventListener("input",()=>{n.inputComments.value.trim().length>0?n.commentsWrapper.classList.add("filling"):n.commentsWrapper.classList.remove("filling")});new d(".accord-container",{duration:400,openOnInit:[0]});new l(".swiper-am",{direction:"horizontal",speed:400,spaceBetween:0,loop:!0,freeMode:!1,navigation:{nextEl:".button-next"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2,width:260},768:{slidesPerView:3,width:600},1440:{slidesPerView:6,width:1200}}});function b(e,t){document.querySelector(e)&&document.querySelectorAll(".marquee-inner li").forEach(o=>{o.classList.add(t)})}function L(e,t){document.querySelector(e)&&document.querySelectorAll(".marquee-inner li").forEach(o=>{o.classList.remove(t)})}const h={rootMargin:"20px 0px",threshold:0};function S(e){e[0].isIntersecting?b("#covers","js-marquee-line"):L("#covers","js-marquee-line")}const q=new IntersectionObserver(S,h);function E(){s.modalMenu.classList.add("is-open"),s.modalContainer.addEventListener("click",e=>{if(e.preventDefault(),e.target.nodeName!=="A")return;const t=e.target.getAttribute("href").substring(1),r=document.getElementById(t);m(),r.scrollIntoView({block:"start"})})}function m(){s.modalMenu.classList.remove("is-open")}function B(){s.menuList.classList.toggle("is-open"),s.menuList.addEventListener("click",e=>{if(e.preventDefault(),e.target.nodeName!=="A")return;const t=e.target.getAttribute("href").substring(1),r=document.getElementById(t);I(),r.scrollIntoView({block:"start"})})}function I(){s.menuList.classList.remove("is-open")}q.observe(s.sectionCovers);s.burgerMenu.addEventListener("click",E);s.closeBurgerMenu.addEventListener("click",m);s.menu.addEventListener("click",B);
//# sourceMappingURL=commonHelpers.js.map