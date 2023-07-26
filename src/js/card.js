document.addEventListener('DOMContentLoaded', function () {
    const componenTwo = document.querySelector('.layout');

    function cards() {
        const cardData = [
            {
                title: "Data Dashboard <br> Healthcare", 
                info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
                technologies: ['HTML', 'Bootstrap', 'Ruby'], 
                img: "./src/imgDesktop/Img Placeholder_2.png"
            },
            {
                title: "Website Portfolio ", 
                info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
                technologies: ['HTML', 'Bootstrap', 'Ruby'], 
                img: "./src/imgDesktop/Img Placeholder_3.png"
            },
            {
                title: "Profesional Art <br> Printing Data More", 
                info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
                technologies: ['HTML', 'Bootstrap', 'Ruby'], 
                img: "./src/imgDesktop/Img Placeholder_4.png"
            },
            {
                title: "Website Portfolio ", 
                info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
                technologies: ['HTML', 'Bootstrap', 'Ruby'], 
                img: "./src/imgDesktop/Img Placeholder_3.png"
            },
            {
                title: "Profesional Art <br> Printing Data More", 
                info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
                technologies: ['HTML', 'Bootstrap', 'Ruby'], 
                img: "./src/imgDesktop/Img Placeholder_4.png"
            },
            {
                title: "Website Portfolio ", 
                info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
                technologies: ['HTML', 'Bootstrap', 'Ruby'], 
                img: "./src/imgDesktop/Img Placeholder_3.png"
            },
         
         
        ];
        
        const cardHTML = cardData.map(cardComponent).join('');
        componenTwo.innerHTML = cardHTML;
    }

    cards();

    function cardComponent(componentData) {
        const { title, info, technologies, img } = componentData;

        return `
            <div class="component_two">
                <div class="component_one_img">
                    <img src="${img}" alt="">
                    <div class="component_two_box">
                        <div class="component_two_grid">
                            <div class="component_two_title">
                                <h2>${title}</h2>
                            </div>
                            <div class="component_two_p">
                                <p>${info}</p>
                            </div>
                            <ul class="component_two_tecnologies">
                                ${technologies.map((tech) => `<li>${tech}</li>`).join("")}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
                `;
    }
});
