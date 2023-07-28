const cardData = [
  {
    title: "Website Portfolio",
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    technologies: ["HTML", "Bootstrap", "Ruby"],
    img: "./src/imgDesktop/Img Placeholder_3.png",
    button: "See project",
    id: 0,
  },
  {
    title: "Website Portfolio",
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    technologies: ["HTML", "Bootstrap", "Ruby"],
    img: "./src/imgDesktop/Img Placeholder_3.png",
    button: "See project",
    id: 1,
  },
  {
    title: "Profesional Art <br> Printing Data More",
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    technologies: ["HTML", "Bootstrap", "Ruby"],
    img: "./src/imgDesktop/Img Placeholder_4.png",
    button: "See project",
    id: 2,
  },
  {
    title: "Website Portfolio",
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    technologies: ["HTML", "Bootstrap", "Ruby"],
    img: "./src/imgDesktop/Img Placeholder_3.png",
    button: "See project",
    id: 3,
  },
  {
    title: "Profesional Art <br> Printing Data More",
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    technologies: ["HTML", "Bootstrap", "Ruby"],
    img: "./src/imgDesktop/Img Placeholder_4.png",
    button: "See project",
    id: 4,
  },
  {
    title: "Website Portfolio",
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    technologies: ["HTML", "Bootstrap", "Ruby"],
    img: "./src/imgDesktop/Img Placeholder_3.png",
    button: "See project",
    id: 5,
  },
];

function cardComponent(cardData) {
  const { title, info, technologies, img, button, id } = cardData;

  return `
      <div class="component_two" id="card_${id}">
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
          <div class="componet_one_button" id="button_${id}"> 
            <button class="buttonCards">${button}</button>
          </div>
        </div>
      </div>
    `;
}

const layouts = document.querySelectorAll(".layout");

layouts.forEach((layout) => {
  cardData.forEach((card) => {
    const cardHtml = cardComponent(card);
    layout.insertAdjacentHTML("beforeend", cardHtml);
  });
});

cardComponent();

// ------------------------------------------------------------------------

const data = [
  {
    title: "Keeping track of hundreds  of components website",
    closeImg: "./src/icon/close.png",
    technologies: ["HTML", "Bootstrap", "Ruby on rails"],
    img: "./src/Img/Snapshoot Portfolio.png",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    buttonOne: "./src/icon/Icon-see live.png",
    buttonTwo: "./src/icon/Icon -GitHub-white.png",
    buttonId: 0,
    buttons: 0,
  },
  {
    title: "Keeping track of hundreds  of components website",
    closeImg: "./src/icon/close.png",
    technologies: ["HTML", "Bootstrap", "Ruby on rails"],
    img: "./src/Img/Snapshoot Portfolio.png",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    buttonOne: "./src/icon/Icon-see live.png",
    buttonTwo: "./src/icon/Icon -GitHub-white.png",
    buttonId: 0,
    buttons: 0,
  },
  {
    title: "Keeping track of hundreds  of components website",
    closeImg: "./src/icon/close.png",
    technologies: ["HTML", "Bootstrap", "Ruby on rails"],
    img: "./src/Img/Snapshoot Portfolio.png",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    buttonOne: "./src/icon/Icon-see live.png",
    buttonTwo: "./src/icon/Icon -GitHub-white.png",
    buttonId: 0,
    buttons: 0,
  },
  {
    title: "Keeping track of hundreds  of components website",
    closeImg: "./src/icon/close.png",
    technologies: ["HTML", "Bootstrap", "Ruby on rails"],
    img: "./src/Img/Snapshoot Portfolio.png",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    buttonOne: "./src/icon/Icon-see live.png",
    buttonTwo: "./src/icon/Icon -GitHub-white.png",
    buttonId: 0,
    buttons: 0,
  },
  {
    title: "Keeping track of hundreds  of components website",
    closeImg: "./src/icon/close.png",
    technologies: ["HTML", "Bootstrap", "Ruby on rails"],
    img: "./src/Img/Snapshoot Portfolio.png",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    buttonOne: "./src/icon/Icon-see live.png",
    buttonTwo: "./src/icon/Icon -GitHub-white.png",
    buttonId: 0,
    buttons: 0,
  },
  {
    title: "Keeping track of hundreds  of components website",
    closeImg: "./src/icon/close.png",
    technologies: ["HTML", "Bootstrap", "Ruby on rails"],
    img: "./src/Img/Snapshoot Portfolio.png",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    buttonOne: "./src/icon/Icon-see live.png",
    buttonTwo: "./src/icon/Icon -GitHub-white.png",
    buttonId: 0,
    buttons: 0,
  },
];


function componentTwo(data) {
  const { title, closeImg, technologies, img, info, buttonOne, buttonTwo } = data;

  return `
    <div class="popupSubContainer">
      <div class="popupInfo">
        <div class="popupTitle">
          <h2>${title}</h2>
          <img class="closeImgs" id="closePopupBtn" src="${closeImg}" alt="">
        </div>
        <ul>
          ${technologies.map((tech) => `<li>${tech}</li>`).join("")}
        </ul>
      </div>
      <div class="popupDetails">
        <div class="popupImg">
          <img src="${img}" alt="">
        </div>
        <div class="popupMainInfo">
          <div class="popupP">
            <p>${info.replace(/\n/g, "<br>")}</p>
          </div>
          <div class="popupButtons">
            <a class="live" href="">See live<img src="${buttonOne}" alt=""></a>
            <a class="see" href="">See source<img src="${buttonTwo}" alt=""></a>
          </div>
        </div>
      </div>
    </div>
  `;
}

const popupWindows = document.querySelectorAll(".popup");

popupWindows.forEach((popup, index) => {
  const popupWin = componentTwo(data[index]);
  popup.insertAdjacentHTML("beforeend", popupWin);
});

componentTwo()



// =====================================================

// const buttonCards = document.querySelectorAll(".buttonCards");

// function openPopupCard() {
//   popupWindown.style.display = "block";
//   popupWindown.style.display = "flex";
//   popupWindown.style.justifyContent = "center";
//   popupWindown.style.alignItems = "center";
// }

// function closePopupCard() {
//   popupWindown.style.display = "none";
//   bodyMainBox.style.overflow = "auto";
// }

// // Add click event listeners to each button in the NodeList
// buttonCards.forEach((button) => {
//   button.addEventListener("click", openPopupCard);
// });
