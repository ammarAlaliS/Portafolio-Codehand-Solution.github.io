document.addEventListener("DOMContentLoaded", function () {
  function cards() {
    const cardData = [
      {
        title: "Website Portfolio",
        info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        technologies: ["HTML", "Bootstrap", "Ruby"],
        img: "./src/imgDesktop/Img Placeholder_3.png",
        id: 0,
      },
      {
        title: "Website Portfolio",
        info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        technologies: ["HTML", "Bootstrap", "Ruby"],
        img: "./src/imgDesktop/Img Placeholder_3.png",
        id: 1,
      },
      {
        title: "Profesional Art <br> Printing Data More",
        info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        technologies: ["HTML", "Bootstrap", "Ruby"],
        img: "./src/imgDesktop/Img Placeholder_4.png",
        id: 2,
      },
      {
        title: "Website Portfolio",
        info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        technologies: ["HTML", "Bootstrap", "Ruby"],
        img: "./src/imgDesktop/Img Placeholder_3.png",
        id: 3,
      },
      {
        title: "Profesional Art <br> Printing Data More",
        info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        technologies: ["HTML", "Bootstrap", "Ruby"],
        img: "./src/imgDesktop/Img Placeholder_4.png",
        id: 4,
      },
      {
        title: "Website Portfolio",
        info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        technologies: ["HTML", "Bootstrap", "Ruby"],
        img: "./src/imgDesktop/Img Placeholder_3.png",
        id: 5,
      },
    ];

    const cardDataOne = [
      {
        imgs: "./src/imgDesktop/Img Placeholder.png",
        button: "See project",
        id: 0,
      },
      {
        imgs: "./src/imgDesktop/Img Placeholder_2.png",
        button: "View project",
        id: 1,
      },
      {
        imgs: "./src/imgDesktop/Img Placeholder_3.png",
        button: "Check it out",
        id: 2,
      },
      {
        imgs: "./src/imgDesktop/Img Placeholder_4.png",
        button: "Explore",
        id: 3,
      },
      {
        imgs: "./src/imgDesktop/Img Placeholder_3.png",
        button: "Check it out",
        id: 4,
      },
      {
        imgs: "./src/imgDesktop/Img Placeholder_4.png",
        button: "Explore",
        id: 5,
      },
    ];

    const layout = document.querySelector(".modalmainbox");
    const combinedData = cardData.map((data, index) => ({
      ...data,
      ...cardDataOne[index],
    }));
    const cardHTML = combinedData.map(cardComponent).join("");
    layout.innerHTML = cardHTML;
  }

  function cardComponent(componentData) {
    const { title, info, technologies, img, button, id } = componentData;

    return `
      <div class="modelminbox">
            <div class="modalPicture">
                <img src="${img}" alt="modelPicture">
                <div class="boxModalInfomartions">
                    <div class="boxModalInfomartion_title">
                        <h2>${title}</h2>
                    </div>
                    <div class="boxModalInfomartion_p">
                        <p>${info}</p>
                    </div>
                    <ul class="modalTecnologies">
                    ${technologies.map((tech) => `<li>${tech}</li>`).join("")}
                    </ul>
                </div>
                <div class="modalSeeProjectButton">
                    <button>${button}</button>
                </div>
            </div>
        </div>
      `;
  }

  cards();

  const buttonsArray = [
    document.getElementById("button_0"),
    document.getElementById("button_1"),
    document.getElementById("button_2"),
    document.getElementById("button_3"),
    document.getElementById("button_4"),
    document.getElementById("button_5"),
  ];

  buttonsArray.forEach((button) => {
  });

  const cardsArray = [
    document.getElementById("card_0"),
    document.getElementById("card_1"),
    document.getElementById("card_2"),
    document.getElementById("card_3"),
    document.getElementById("card_4"),
    document.getElementById("card_5"),
  ];

  
});
