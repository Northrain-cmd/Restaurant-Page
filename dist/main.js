!function(e){var t={};function n(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function c(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("wrapper");const n=document.createElement("div");n.classList.add("name");const c=document.createElement("h1");c.innerHTML="Apsny Garden",n.appendChild(c),t.appendChild(n);const o=document.createElement("div");o.classList.add="about";const a=document.createElement("p");a.innerHTML="Try our delicious spicy caucasian cusine,<br> cooked for you with love by our extra<br> professional chefs from the heart of the mountains",a.classList.add("about"),o.appendChild(a),t.appendChild(o);const d=document.createElement("div");d.classList.add("title");const r=document.createElement("p");r.textContent="Fresh and Delicious",d.appendChild(r),t.appendChild(d),e.appendChild(t)}function o(){const e=document.querySelector("#content");console.log(e.lastChild),e.removeChild(e.lastChild)}n.r(t),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("navbar");const n=document.createElement("button");n.innerHTML="Contact",n.id="contactBtn";const c=document.createElement("button");c.innerHTML="About",c.id="aboutBtn",c.classList.add("active");const o=document.createElement("button");o.innerHTML="Menu",o.id="menuBtn",t.append(n,c,o),e.appendChild(t)}(),c();let a=document.querySelector("#contactBtn"),d=document.querySelector("#aboutBtn");a.addEventListener("click",()=>{a.classList.contains("active")||(o(),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("wrapper");const n=document.createElement("div");n.classList.add("info");const c=document.createElement("h1");c.textContent="Contact Us",n.appendChild(c),t.appendChild(n);const o=document.createElement("div");o.classList.add("phones");const a=document.createElement("span");a.classList.add("telephone");const d=document.createElement("h2");d.textContent="Telephone",a.appendChild(d);const r=document.createElement("p"),s=document.createElement("a");s.setAttribute("href","#"),s.textContent="+1-502-368-47",r.appendChild(s),a.appendChild(r),o.appendChild(a);const i=document.createElement("span");i.classList.add("telephone");const l=document.createElement("h2");l.textContent="Email",i.appendChild(l);const u=document.createElement("p"),p=document.createElement("a");p.setAttribute("href","#"),p.textContent="apsny_garden@apsny.com",u.appendChild(p),i.appendChild(u),o.appendChild(i);const m=document.createElement("span");m.classList.add("telephone");const h=document.createElement("h2");h.textContent="Instagram",m.appendChild(h);const f=document.createElement("p"),C=document.createElement("a");C.setAttribute("href","#"),C.textContent="@ApsnyGarden",f.appendChild(C),m.appendChild(f),o.appendChild(m),t.appendChild(o),e.appendChild(t)}(),a.classList.add("active"),d.classList.remove("active"))}),d.addEventListener("click",()=>{console.log("hi"),d.classList.contains("active")||(o(),c(),d.classList.add("active"),a.classList.remove("active"))})}]);