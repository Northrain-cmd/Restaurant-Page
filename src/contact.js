export default function renderContact(){
    const content = document.querySelector('#content');
    const wrapper = document.createElement('div');
    wrapper.classList.add("wrapper");
        const info = document.createElement("div");
        info.classList.add("info");
            const infoText = document.createElement("h1");
            infoText.textContent = "Contact Us";
        info.appendChild(infoText);
    wrapper.appendChild(info);
        const phones = document.createElement("div");
        phones.classList.add("phones");
            const span1 = document.createElement("span");
            span1.classList.add("telephone");
                const span1Title = document.createElement("h2");
                span1Title.textContent="Telephone"
            span1.appendChild(span1Title);
                const span1Text = document.createElement("p");
                    const span1Link = document.createElement("a")
                    span1Link.setAttribute("href","#");
                    span1Link.textContent = "+1-502-368-47";
                span1Text.appendChild(span1Link);
            span1.appendChild(span1Text);
        phones.appendChild(span1);
        const span2 = document.createElement("span");
            span2.classList.add("telephone");
                const span2Title = document.createElement("h2");
                span2Title.textContent="Email"
            span2.appendChild(span2Title);
                const span2Text = document.createElement("p");
                    const span2Link = document.createElement("a")
                    span2Link.setAttribute("href","#");
                    span2Link.textContent = "apsny_garden@apsny.com";
                span2Text.appendChild(span2Link);
            span2.appendChild(span2Text);
        phones.appendChild(span2);
        const span3 = document.createElement("span");
        span3.classList.add("telephone");
            const span3Title = document.createElement("h2");
            span3Title.textContent="Instagram"
        span3.appendChild(span3Title);
            const span3Text = document.createElement("p");
                const span3Link = document.createElement("a")
                span3Link.setAttribute("href","#");
                span3Link.textContent = "@ApsnyGarden";
            span3Text.appendChild(span3Link);
        span3.appendChild(span3Text);
    phones.appendChild(span3);
wrapper.appendChild(phones);
content.appendChild(wrapper);
}