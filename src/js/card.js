const data = [
  {
    title: 'Data Dashboard Healthcare',
    closeImg: './src/icon/close.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    img: './src/imgDesktop/Img Placeholder_2.png',
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    buttonOne: './src/icon/Icon-see live.png',
    buttonTwo: './src/icon/Icon -GitHub-white.png',
    buttonId: 0,
    buttons: 0,
  },
  {
    title: 'Website Portfolio',
    closeImg: './src/icon/close.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    img: './src/imgDesktop/Img Placeholder_3.png',
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    buttonOne: './src/icon/Icon-see live.png',
    buttonTwo: './src/icon/Icon -GitHub-white.png',
    buttonId: 0,
    buttons: 0,
  },
  {
    title: 'Profesional Art Printing Data More',
    closeImg: './src/icon/close.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    img: './src/imgDesktop/Img Placeholder_4.png',
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    buttonOne: './src/icon/Icon-see live.png',
    buttonTwo: './src/icon/Icon -GitHub-white.png',
    buttonId: 0,
    buttons: 0,
  },
  {
    title: 'Website Portfolio',
    closeImg: './src/icon/close.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    img: './src/imgDesktop/Img Placeholder_3.png',
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    buttonOne: './src/icon/Icon-see live.png',
    buttonTwo: './src/icon/Icon -GitHub-white.png',
    buttonId: 0,
    buttons: 0,
  },
  {
    title: 'Data Dashboard Healthcare',
    closeImg: './src/icon/close.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    img: './src/imgDesktop/Img Placeholder_2.png',
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    buttonOne: './src/icon/Icon-see live.png',
    buttonTwo: './src/icon/Icon -GitHub-white.png',
    buttonId: 0,
    buttons: 0,
  },
  {
    title: 'Profesional Art Printing Data More',
    closeImg: './src/icon/close.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    img: './src/imgDesktop/Img Placeholder_4.png',
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    buttonOne: './src/icon/Icon-see live.png',
    buttonTwo: './src/icon/Icon -GitHub-white.png',
    buttonId: 0,
    buttons: 0,
  },
];

function componentTwo(data) {
  const {
    title, closeImg, technologies, img, info, buttonOne, buttonTwo,
  } = data;

  return `
    <div class="popupSubContainer">
      <div class="popupInfo">
        <div class="popupTitle">
          <h2>${title}</h2>
          <img class="closeImgs" id="closePopupBtn" src="${closeImg}" alt="">
        </div>
        <ul>
          ${technologies.map((tech) => `<li>${tech}</li>`).join('')}
        </ul>
      </div>
      <div class="popupDetails">
        <div class="popupImg">
          <img src="${img}" alt="">
        </div>
        <div class="popupMainInfo">
          <div class="popupP">
            <p>${info.replace(/\n/g, '<br>')}</p>
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

const popupWindows = document.querySelector('#popupWindown');
const bodyMainBox = document.getElementById('bodyMainBox');

function openPopup(index) {
  const popupWin = componentTwo(data[index]);
  popupWindows.innerHTML = popupWin;
  popupWindows.style.display = 'block';
  popupWindows.style.display = 'flex';
  popupWindows.style.justifyContent = 'center';
  popupWindows.style.alignItems = 'center';
  bodyMainBox.style.overflow = 'hidden';
}

// =========================================================

const cardData = [
  {
    title: 'Data Dashboard Healthcare',
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    img: './src/imgDesktop/Img Placeholder_2.png',
    button: 'See project',
    id: 0,
  },
  {
    title: 'Website Portfolio',
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    img: './src/imgDesktop/Img Placeholder_3.png',
    button: 'See project',
    id: 1,
  },
  {
    title: 'Profesional Art <br> Printing Data More',
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    img: './src/imgDesktop/Img Placeholder_4.png',
    button: 'See project',
    id: 2,
  },
  {
    title: 'Website Portfolio',
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    img: './src/imgDesktop/Img Placeholder_3.png',
    button: 'See project',
    id: 3,
  },
  {
    title: 'Data Dashboard Healthcare',
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    img: './src/imgDesktop/Img Placeholder_2.png',
    button: 'See project',
    id: 4,
  },
  {
    title: 'Profesional Art <br> Printing Data More',
    info: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    img: './src/imgDesktop/Img Placeholder_4.png',
    button: 'See project',
    id: 5,
  },
];

function cardComponent(cardData) {
  const {
    title, info, technologies, img, button, id,
  } = cardData;

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
              ${technologies.map((tech) => `<li>${tech}</li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="componet_one_button"> 
          <button class="buttonCards" data-index="${id}">${button}</button>
        </div>
      </div>
    </div>
  `;
}

const layouts = document.querySelectorAll('.layout');

layouts.forEach((layout) => {
  cardData.forEach((card) => {
    const cardHtml = cardComponent(card);
    layout.insertAdjacentHTML('beforeend', cardHtml);
  });
});

document.addEventListener('click', (event) => {
  if (event.target.matches('.buttonCards')) {
    const { index } = event.target.dataset;
    openPopup(index);
  }
});

function closeDesktopPopup() {
  popupWindows.style.display = 'none';
  bodyMainBox.style.overflow = 'auto';
}

popupWindows.addEventListener('click', (event) => {
  if (event.target.classList.contains('closeImgs')) {
    closeDesktopPopup();
  }
});
