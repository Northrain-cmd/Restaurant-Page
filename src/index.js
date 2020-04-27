import renderAbout from './about.js';
import renderContact from './contact';
import clear from './clear';
renderAbout();
let contactBtn = document.querySelector("#contactBtn");
let aboutBtn = document.querySelector("#aboutBtn");
console.log(contactBtn);
contactBtn.addEventListener("click",()=>{
    if(!contactBtn.classList.contains("active")){
    clear();
    renderContact();
    }
})
aboutBtn.addEventListener("click",()=>{
    console.log("hi");
    if(!aboutBtn.classList.contains("active")){
        clear();
        renderAbout();
    }
})