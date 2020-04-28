import navbar from './navbar';
import renderAbout from './about.js';
import renderContact from './contact';
import clear from './clear';
navbar();
renderAbout();

let contactBtn = document.querySelector("#contactBtn");
let aboutBtn = document.querySelector("#aboutBtn");

contactBtn.addEventListener("click",()=>{
    if(!contactBtn.classList.contains("active")){
    clear();
    renderContact();
    contactBtn.classList.add("active");
    aboutBtn.classList.remove("active");
    }
})
aboutBtn.addEventListener("click",()=>{
    console.log("hi");
    if(!aboutBtn.classList.contains("active")){
        clear();
        renderAbout();
        aboutBtn.classList.add("active");
        contactBtn.classList.remove("active");
    }
}) 