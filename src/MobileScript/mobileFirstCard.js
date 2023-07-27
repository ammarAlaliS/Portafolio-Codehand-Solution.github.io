function firstComponent() {
  const firstComponentInfo = [
    {
      img: "./src/Img/Img Placeholder.png",
      title: "Multi-Post Stories",
      info: "A daily selection of privately personalized reads; no accounts or sign-ups required. It has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      stack: ["CSS", "HTML", "Bootstrap"],
      button: "See Project",
      buttonId: 0,
    },
  ];

  const modalSection = document.querySelector(".modalComponent");
  const firstCardHtml = firstComponentInfo.map(firstCard).join("");
  modalSection.innerHTML += firstCardHtml;
}

function firstCard({ img, title, info, stack, button, buttonId }) {
  return `
    
        <div class="modalImg">
            <img src="${img}" alt="workPicture">
        </div>
        <div class="informationAboutWorkBox">
            <div class="workTitle">
                <h2>${title}</h2>
            </div>
            <div class="workInfo">
                ${info}
            </div>
            <ul class="Tecnologies">
            ${stack.map((tech) => `<li>${tech}</li>`).join("")}
            </ul>
            <div class="SeeProjectButton">
            <button>${button}</button>
            </div>
        </div>
    `;
}

firstComponent();
