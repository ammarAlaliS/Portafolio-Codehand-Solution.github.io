const buttonSeeMobile = document.getElementById("buttonSeeMobile");
const popupWindow = document.getElementById("popupWindow");
const bodyMainBo = document.querySelector('bodyM')

function openPopup(buttonId) {
  const data = [
    {
      title: "Keeping track of hundreds  of components website",
      closeImg: "./src/icon/close.png",
      technologies: ["HTML", "Bootstrap", "Ruby on rails"],
      img: "./src/Img/Snapshoot Portfolio.png",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      buttonOne: "./src/icon/Icon-see live.png",
      buttonTwo: "./src/icon/Icon -GitHub-white.png",
      buttonId: 0 
    },
  ];

  const componentInfo = data[buttonId]; 
  const popupHTML = componentToHTML(componentInfo);
  popupWindow.innerHTML = popupHTML;
  popupWindow.style.display = "block";
  popupWindow.style.display = "flex";
  popupWindow.style.justifyContent = "center";
  popupWindow.style.alignItems = "center";  
  bodyMainBo.style.overflow = "hidden"
}

function closePopup() {
  popupWindow.style.display = "none";
  bodyMainBo.style.overflow = "auto"
}

function componentToHTML(componentInfo) {
  const { title, closeImg, technologies, img, info, buttonOne, buttonTwo } = componentInfo;

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

buttonSeeMobile.addEventListener("click", function(event) {
  const buttonId = event.target.getAttribute("data-buttonid"); 
  openPopup(buttonId); 
});

popupWindown.addEventListener('click', function(event) {
  if (event.target.id === "closePopupBtn") {
    closePopup();
  }
});
