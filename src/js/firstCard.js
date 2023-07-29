const firstComponentInfo = [
  {
    img: "./src/Img/Img PlaceholderDesktop.png",
    title: "Multi-Post Stories",
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. It has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    stack: ["CSS", "HTML", "Bootstrap", "Ruby"],
    button: "See Project",
  },
];


function firstCard({ img, title, info, stack, button }) {
  return `
    <div class="modalComponent__img_one">
      <img src="${img}" alt="workPicture">
    </div>
    <div class="modalComponent__info">
      <div class="modalComponent__info-title">
        <h2>${title}</h2>
      </div>
      <div class="modalComponent__info-description">
        <p>${info}</p>
      </div>
      <ul class="modalComponent__info-technologies">
        ${stack.map((tech) => `<li>${tech}</li>`).join("")}
      </ul>
      <div class="modalComponent__info-button">
        <button id="buttonSee">${button}</button>
      </div>
    </div>
  `;
}
const modalSection = document.querySelector(".modalComponent_one");
const firstCardHtml = firstComponentInfo.map(firstCard).join("");
modalSection.innerHTML += firstCardHtml;

const dataFirstCard = [
  {
    title: "Keeping track of hundreds of components website",
    closeImg: "./src/icon/close.png",
    technologies: ["HTML", "Bootstrap", "Ruby on Rails"],
    img: "./src/Img/Snapshoot Portfolio.png",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    buttonOne: "./src/icon/Icon-see live.png",
    buttonTwo: "./src/icon/Icon -GitHub-white.png",
  },
];

function renderProjectPopup(data) {
  const { title, closeImg, technologies, img, info, buttonOne, buttonTwo } =
    data;

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

function openPopup() {
  const popupContainer = document.querySelector(".popup"); 
  const projectPopupHTML = renderProjectPopup(dataFirstCard[0]);
  popupContainer.innerHTML = projectPopupHTML;
  popupContainer.style.display = "flex"; 
  popupContainer.style.justifyContent = "center"; 
  popupContainer.style.alignItems = "center"; 
  bodyMainBox.style.overflow = "hidden"; 
}

function closePopup() {
  const popupContainer = document.getElementById("popupContainer");
  popupContainer.style.display = "none";
  bodyMainBox.style.overflow = "auto";
}

const buttonSee = document.getElementById("buttonSee");
buttonSee.addEventListener("click", openPopup);

