const PopupMobiledata = [
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
    title: 'Profesional Art Printing Data ',
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
    title: 'Profesional Art Printing Data ',
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

function MobilecomponentTwo(PopupMobiledata) {
  const {
    title, closeImg, technologies, img, info, buttonOne, buttonTwo,
  } = PopupMobiledata;

  return `
  <div class="popupSubContainer">
  <div class="popupInfo">
    <div class="popupTitle">
      <h2>${title}</h2>
      <img class="closeImgs" id="MobileClosePopup" src="${closeImg}" alt="">
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

const MobilePopupWindow = document.querySelector('.popups');
const bodyMainBoxs = document.querySelector('#bodyMainBox');

PopupMobiledata.forEach((popupData) => {
  const popupHtml = MobilecomponentTwo(popupData);
  MobilePopupWindow.insertAdjacentHTML('beforeend', popupHtml);
});

function MobileOpenPopup(index) {
  const popupData = PopupMobiledata[index];
  const popupHtml = MobilecomponentTwo(popupData);
  MobilePopupWindow.innerHTML = popupHtml;
  MobilePopupWindow.style.display = 'block';
  MobilePopupWindow.style.display = 'flex';
  MobilePopupWindow.style.justifyContent = 'center';
  MobilePopupWindow.style.alignItems = 'center';

  bodyMainBoxs.style.overflow = 'hidden';
}

const MobileCardData = [
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

function cardComponent(MobileCardData) {
  const {
    title, info, technologies, img, id, button,
  } = MobileCardData;

  return `
    <div class="modelminbox" id="card_${id}">
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
              ${technologies.map((tech) => `<li>${tech}</li>`).join('')}
              </ul>
          </div>
          <div class="componet_one_button">
            <button class="modalSeeProjectButton" data-index="${id}">${button}</button>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener('click', (event) => {
  if (event.target.matches('.modalSeeProjectButton')) {
    const { index } = event.target.dataset;
    MobileOpenPopup(index);
  }
});

function MobileclosePopup() {
  MobilePopupWindow.style.display = 'none';
  bodyMainBoxs.style.overflow = 'auto';
}

MobilePopupWindow.addEventListener('click', (event) => {
  if (event.target.id === 'MobileClosePopup') {
    MobileclosePopup();
  }
});

const modalmainbox = document.querySelector('.modalmainbox');
MobileCardData.forEach((card) => {
  const cardHtml = cardComponent(card);
  modalmainbox.insertAdjacentHTML('beforeend', cardHtml);
});