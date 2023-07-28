const PopupMobiledata = [
  {
    title: "Data Dashboard Healthcare",
    closeImg: "./src/icon/close.png",
    technologies: ["HTML", "Bootstrap", "Ruby on rails"],
    img: "./src/imgDesktop/Img Placeholder_2.png",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    buttonOne: "./src/icon/Icon-see live.png",
    buttonTwo: "./src/icon/Icon -GitHub-white.png",
  },
  // {
  //   title: "Website Portfolio",
  //   closeImg: "./src/icon/close.png",
  //   technologies: ["HTML", "Bootstrap", "Ruby on rails"],
  //   img: "./src/imgDesktop/Img Placeholder_3.png",
  //   info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  //   buttonOne: "./src/icon/Icon-see live.png",
  //   buttonTwo: "./src/icon/Icon -GitHub-white.png",
  //   buttonId: 0,
  //   buttons: 0,
  // },
  // {
  //   title: "Profesional Art Printing Data More",
  //   closeImg: "./src/icon/close.png",
  //   technologies: ["HTML", "Bootstrap", "Ruby on rails"],
  //   img: "./src/imgDesktop/Img Placeholder_4.png",
  //   info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  //   buttonOne: "./src/icon/Icon-see live.png",
  //   buttonTwo: "./src/icon/Icon -GitHub-white.png",
  //   buttonId: 0,
  //   buttons: 0,
  // },
  // {
  //   title: "Website Portfolio",
  //   closeImg: "./src/icon/close.png",
  //   technologies: ["HTML", "Bootstrap", "Ruby on rails"],
  //   img: "./src/imgDesktop/Img Placeholder_3.png",
  //   info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  //   buttonOne: "./src/icon/Icon-see live.png",
  //   buttonTwo: "./src/icon/Icon -GitHub-white.png",
  //   buttonId: 0,
  //   buttons: 0,
  // },
  // {
  //   title: "Data Dashboard Healthcare",
  //   closeImg: "./src/icon/close.png",
  //   technologies: ["HTML", "Bootstrap", "Ruby on rails"],
  //   img: "./src/imgDesktop/Img Placeholder_2.png",
  //   info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  //   buttonOne: "./src/icon/Icon-see live.png",
  //   buttonTwo: "./src/icon/Icon -GitHub-white.png",
  //   buttonId: 0,
  //   buttons: 0,
  // },
  // {
  //   title: "Profesional Art Printing Data More",
  //   closeImg: "./src/icon/close.png",
  //   technologies: ["HTML", "Bootstrap", "Ruby on rails"],
  //   img: "./src/imgDesktop/Img Placeholder_4.png",
  //   info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  //   buttonOne: "./src/icon/Icon-see live.png",
  //   buttonTwo: "./src/icon/Icon -GitHub-white.png",
  //   buttonId: 0,
  //   buttons: 0,
  // },
];

function componentTwo(PopupMobiledata) {
  const { title, closeImg, technologies, img, info, buttonOne, buttonTwo } =
    PopupMobiledata;

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
        </div>
      </div>
      <div class="popupButtons">
         <a class="live" href="">See live<img src="${buttonOne}" alt=""></a>
         <a class="see" href="">See source<img src="${buttonTwo}" alt=""></a>
      </div>
    </div>
  `;
}

const MobilePopupWindow = document.querySelector("#MobilePopupWindow");

PopupMobiledata.forEach((popupData) => {
  const popupHtml = componentTwo(popupData);
  MobilePopupWindow.insertAdjacentHTML("beforeend", popupHtml);
});

MobilePopupWindow.style.display = "block";
MobilePopupWindow.style.display = "flex";
MobilePopupWindow.style.justifyContent = "center";
MobilePopupWindow.style.alignItems = "center";

// =============================================================
// const MobileCardData = [
//   {
//     title: "Data Dashboard Healthcare",
//     info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
//     technologies: ["HTML", "Bootstrap", "Ruby"],
//     img: "./src/imgDesktop/Img Placeholder_2.png",
//     button: "See project",
//     id: 0,
//   },
//   {
//     title: "Website Portfolio",
//     info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
//     technologies: ["HTML", "Bootstrap", "Ruby"],
//     img: "./src/imgDesktop/Img Placeholder_3.png",
//     button: "See project",
//     id: 1,
//   },
//   {
//     title: "Profesional Art <br> Printing Data More",
//     info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
//     technologies: ["HTML", "Bootstrap", "Ruby"],
//     img: "./src/imgDesktop/Img Placeholder_4.png",
//     button: "See project",
//     id: 2,
//   },
//   {
//     title: "Website Portfolio",
//     info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
//     technologies: ["HTML", "Bootstrap", "Ruby"],
//     img: "./src/imgDesktop/Img Placeholder_3.png",
//     button: "See project",
//     id: 3,
//   },
//   {
//     title: "Data Dashboard Healthcare",
//     info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
//     technologies: ["HTML", "Bootstrap", "Ruby"],
//     img: "./src/imgDesktop/Img Placeholder_2.png",
//     button: "See project",
//     id: 4,
//   },
//   {
//     title: "Profesional Art <br> Printing Data More",
//     info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
//     technologies: ["HTML", "Bootstrap", "Ruby"],
//     img: "./src/imgDesktop/Img Placeholder_4.png",
//     button: "See project",
//     id: 5,
//   },
// ];

// function cardComponent(cardData) {
//   const { title, info, technologies, img, id, button } = cardData;

//   return `
//     <div class="modelminbox" id="card_${id}">
//       <div class="modalPicture">
//           <img src="${img}" alt="modelPicture">
//           <div class="boxModalInfomartions">
//               <div class="boxModalInfomartion_title">
//                   <h2>${title}</h2>
//               </div>
//               <div class="boxModalInfomartion_p">
//                   <p>${info}</p>
//               </div>
//               <ul class="modalTecnologies">
//               ${technologies.map((tech) => `<li>${tech}</li>`).join("")}
//               </ul>
//           </div>
//           <div class="componet_one_button">
//             <button class="modalSeeProjectButton" data-index="${id}">${button}</button>
//         </div>
//       </div>
//     </div>
//   `;
// }

// const modalmainbox = document.querySelector(".modalmainbox");
// MobileCardData.forEach((card) => {
//   const cardHtml = cardComponent(card);
//   modalmainbox.insertAdjacentHTML("beforeend", cardHtml);
// });
