export default function renderMenu(){
    const content = document.querySelector('#content');
    const wrapper = document.createElement('div');
    wrapper.classList.add("wrapper");
        const menuTitle = document.createElement("div");
        menuTitle.classList.add("menu-title");
            const titleText = document.createElement("h1");
            titleText.textContent = "Our Meals";
        menuTitle.appendChild(titleText);
    wrapper.appendChild(menuTitle);
        const menuCards = document.createElement('div');
        menuCards.classList.add("menu-cards");
            const menuCard = document.createElement('div');
            menuCard.classList.add("menu-card");
                const cardImg = document.createElement('img');
                cardImg.setAttribute("src","meal.jpg");
            menuCard.appendChild(cardImg);
                const cardName = document.createElement('h2');
                cardName.textContent = "Fancy Dinner";
            menuCard.appendChild(cardName);
                const cardPrice = document.createElement ('h3');
                cardPrice.textContent = "25$";
            menuCard.appendChild(cardPrice);
        const menuCard2 = menuCard.cloneNode(true);
        const menuCard3 = menuCard.cloneNode(true);
        const menuCard4 = menuCard.cloneNode(true);
        const menuCard5 = menuCard.cloneNode(true);
        const menuCard6 = menuCard.cloneNode(true);
        menuCards.append(menuCard,menuCard2,menuCard3,menuCard4,menuCard5,menuCard6);
    wrapper.appendChild(menuCards);
content.appendChild(wrapper);

}