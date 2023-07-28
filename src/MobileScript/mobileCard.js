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
const buttonsArray = [
  document.getElementById("button_0"),
  document.getElementById("button_1"),
  document.getElementById("button_2"),
  document.getElementById("button_3"),
  document.getElementById("button_4"),
  document.getElementById("button_5"),
];

buttonsArray.forEach((button) => {
  button.style.display = "none";
});

const cardsArray = [
  document.getElementById("card_0"),
  document.getElementById("card_1"),
  document.getElementById("card_2"),
  document.getElementById("card_3"),
  document.getElementById("card_4"),
  document.getElementById("card_5"),
];

const componentGrid = document.querySelector(".component_two_box");

// Hover

function handleCardHover() {
  buttonsArray[0].style.display = "block";
 
}
function handleCardHover1() {
  buttonsArray[1].style.display = "block";
 
}
function handleCardHover2() {
  buttonsArray[2].style.display = "block";

}
function handleCardHover3() {
  buttonsArray[3].style.display = "block";

}
function handleCardHover4() {
  buttonsArray[4].style.display = "block";

}
function handleCardHover5() {
  buttonsArray[5].style.display = "block";
}

// Hover out

function handleCardHoverOut() {
  buttonsArray[0].style.display = "none";
}
function handleCardHoverOut1() {
  buttonsArray[1].style.display = "none";

}
function handleCardHoverOut2() {
  buttonsArray[2].style.display = "none";

}
function handleCardHoverOut3() {
  buttonsArray[3].style.display = "none";

}
function handleCardHoverOut4() {
  buttonsArray[4].style.display = "none";
  
}
function handleCardHoverOut5() {
  buttonsArray[5].style.display = "none";
  
}

cardsArray[0].addEventListener("mouseover", handleCardHover);
cardsArray[0].addEventListener("mouseout", handleCardHoverOut);
cardsArray[1].addEventListener("mouseover", handleCardHover1);
cardsArray[1].addEventListener("mouseout", handleCardHoverOut1);
cardsArray[2].addEventListener("mouseover", handleCardHover2);
cardsArray[2].addEventListener("mouseout", handleCardHoverOut2);
cardsArray[3].addEventListener("mouseover", handleCardHover3);
cardsArray[3].addEventListener("mouseout", handleCardHoverOut3);
cardsArray[4].addEventListener("mouseover", handleCardHover4);
cardsArray[4].addEventListener("mouseout", handleCardHoverOut4);
cardsArray[5].addEventListener("mouseover", handleCardHover5);
cardsArray[5].addEventListener("mouseout", handleCardHoverOut5);
};