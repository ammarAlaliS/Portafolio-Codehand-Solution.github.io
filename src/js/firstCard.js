function firstComponent() {
  const firstComponentInfo = [
    {
      img: "./src/Img/Img PlaceholderDesktop.png", 
      title: "Multi-Post Stories",
      info: "A daily selection of privately personalized reads; no accounts or sign-ups required. It has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      stack: ["CSS", "HTML", "Bootstrap", "Ruby"],
      button: "See Project",
      buttonId: 0 
    }
  ];

  const modalSection = document.querySelector('.modalComponent_one');
  const firstCardHtml = firstComponentInfo.map(firstCard).join("");
  modalSection.innerHTML += firstCardHtml;
}

function firstCard({ img, title, info, stack, button, buttonId }) {
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
        <button id="buttonSee" data-buttonid="${buttonId}">${button}</button>
      </div>
    </div>
  `;
}

firstComponent();
