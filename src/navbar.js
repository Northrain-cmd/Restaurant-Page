export default function navbar(){
    const content = document.querySelector('#content');
            const navbar = document.createElement("div");
                    navbar.classList.add("navbar");
                        const contact = document.createElement("button");
                        contact.innerHTML="Contact";  
                        contact.id="contactBtn";  
                        const aboutButton = document.createElement("button");
                        aboutButton.innerHTML="About"; 
                        aboutButton.id="aboutBtn";   
                        aboutButton.classList.add("active");
                        const menu = document.createElement("button");
                        menu.innerHTML="Menu";   
                        menu.id="menuBtn";
                    navbar.append(contact,aboutButton,menu);
            content.appendChild(navbar);
}