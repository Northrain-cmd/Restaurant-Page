export default  function renderAbout(){
    const content = document.querySelector('#content');
        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
            const nameDiv = document.createElement("div");
            nameDiv.classList.add("name");
                const name = document.createElement("h1");
                name.innerHTML="Apsny Garden";
            nameDiv.appendChild(name);
        wrapper.appendChild(nameDiv);
            const aboutDiv = document.createElement("div");
            aboutDiv.classList.add="about";
                const aboutText = document.createElement("p");
                aboutText.innerHTML="Try our delicious spicy caucasian cusine,<br> cooked for you with love by our extra<br> professional chefs from the heart of the mountains";
                aboutText.classList.add("about");
            aboutDiv.appendChild(aboutText);
        wrapper.appendChild(aboutDiv);
            const titleDiv = document.createElement("div");
            titleDiv.classList.add("title");
                const title = document.createElement("p");
                title.textContent="Fresh and Delicious";
            titleDiv.appendChild(title);
        wrapper.appendChild(titleDiv);
    content.appendChild(wrapper);
} 