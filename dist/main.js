!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(){document.querySelector(".wrapper").innerHTML=""}n.r(t),(void 0)();let c=document.querySelector("#contactBtn"),a=document.querySelector("#aboutBtn");console.log(c),c.addEventListener("click",()=>{c.classList.contains("active")||(o(),function(){const e=document.querySelector(".wrapper"),t=document.createElement("div");t.classList.add("navbar");const n=document.createElement("button");n.innerHTML="Contact",n.id="contactBtn",n.classList.add("active");const o=document.createElement("button");o.innerHTML="About",o.id="aboutBtn";const c=document.createElement("button");c.innerHTML="Menu",c.id="menuBtn",t.append(n,o,c),e.appendChild(t);const a=document.createElement("div");a.classList.add("info");const d=document.createElement("h1");d.textContent="Contact Us",a.appendChild(d),e.appendChild(a);const r=document.createElement("div");r.classList.add("phones");const l=document.createElement("span");l.classList.add("telephone");const i=document.createElement("h2");i.textContent="Telephone",l.appendChild(i);const u=document.createElement("p"),s=document.createElement("a");s.setAttribute("href","#"),s.textContent="+1-502-368-47",u.appendChild(s),l.appendChild(u),r.appendChild(l);const p=document.createElement("span");p.classList.add("telephone");const m=document.createElement("h2");m.textContent="Email",p.appendChild(m);const f=document.createElement("p"),h=document.createElement("a");h.setAttribute("href","#"),h.textContent="apsny_garden@apsny.com",f.appendChild(h),p.appendChild(f),r.appendChild(p);const C=document.createElement("span");C.classList.add("telephone");const b=document.createElement("h2");b.textContent="Instagram",C.appendChild(b);const E=document.createElement("p"),v=document.createElement("a");v.setAttribute("href","#"),v.textContent="@ApsnyGarden",E.appendChild(v),C.appendChild(E),r.appendChild(C),e.appendChild(r)}())}),a.addEventListener("click",()=>{console.log("hi"),a.classList.contains("active")||(o(),(void 0)())})}]);