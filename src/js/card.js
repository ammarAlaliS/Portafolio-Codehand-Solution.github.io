document.addEventListener("DOMContentLoaded", function () {

  function cardOne() {
    const cardDataOne = [
      {
        img: "./src/imgDesktop/Img Placeholder.png",
        button: "See project",
      },
    ];
    const componentOneHTML = cardComponentOne(cardDataOne[0]);
    const layout = document.querySelector(".layout");
    layout.innerHTML += componentOneHTML;
  }

  function cardComponentOne(componentInfo) {
    const { img, button } = componentInfo;
    return `
      <div class="box_Conteiner component_one">
        <div class="component_one_img">
          <img src="${img}" alt="">
          <div class="componet_one_button">
            <button>${button}</button>
          </div>
        </div>
      </div>
    `;
  }

  function cards() {
    const cardData = [
      {
        title: "Website Portfolio ",
        info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        technologies: ["HTML", "Bootstrap", "Ruby"],
        img: "./src/imgDesktop/Img Placeholder_3.png",
      },
      {
        title: "Profesional Art <br> Printing Data More",
        info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        technologies: ["HTML", "Bootstrap", "Ruby"],
        img: "./src/imgDesktop/Img Placeholder_4.png",
      },
      {
        title: "Website Portfolio ",
        info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        technologies: ["HTML", "Bootstrap", "Ruby"],
        img: "./src/imgDesktop/Img Placeholder_3.png",
      },
      {
        title: "Profesional Art <br> Printing Data More",
        info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        technologies: ["HTML", "Bootstrap", "Ruby"],
        img: "./src/imgDesktop/Img Placeholder_4.png",
      },
      {
        title: "Website Portfolio ",
        info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        technologies: ["HTML", "Bootstrap", "Ruby"],
        img: "./src/imgDesktop/Img Placeholder_3.png",
      },
      
      
    ];

    const layout = document.querySelector(".layout");
    const cardHTML = cardData.map(cardComponent).join("");
    layout.innerHTML += cardHTML;
  }

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
  cardOne();
  cards();
});

