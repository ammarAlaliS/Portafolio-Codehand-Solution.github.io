(function () {
  const MobileFirstComponentInfo = [
    {
      img: './src/Img/Img Placeholder.png',
      title: 'Multi-Post Stories',
      info: 'Una selección diaria de lecturas personalizadas de forma privada; no se requieren cuentas ni registros. Ha sido el texto de relleno estándar de la industria desde la década de 1500, cuando un impresor desconocido tomó una galera de texto estándar.',
      stack: ['CSS', 'HTML', 'Bootstrap'],
      button: 'See project',
      buttonId: 0,
    },
  ];

  function render({
    img, title, info, stack, button,
  }) {
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
          ${stack.map((tech) => `<li>${tech}</li>`).join('')}
        </ul>
        <div class="SeeProjectButton">
          <button id="mobileSeeProject">${button}</button>
        </div>
      </div>
    `;
  }

  const modalSection = document.querySelector('.modalComponent');
  const firstCardHtml = MobileFirstComponentInfo.map(render).join('');
  modalSection.innerHTML += firstCardHtml;

  const mobileDtaFirstCard = [
    {
      title: 'Multi Post Stories',
      closeImg: './src/icon/close.png',
      technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
      img: './src/Img/Snapshoot Portfolio.png',
      info: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde la década de 1500, cuando un impresor desconocido tomó una galera de texto y la mezcló para hacer un libro de muestras tipográficas. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde la década de 1500, cuando un impresor desconocido tomó una galera de texto y la mezcló para hacer un libro de muestras tipográficas con la mapora relax verita.',
      buttonOne: './src/icon/Icon-see live.png',
      buttonTwo: './src/icon/Icon -GitHub-white.png',
    },
  ];

  function MobileRenderProjectPopup(mobileDtaFirstCard) {
    const {
      title, closeImg, technologies, img, info, buttonOne, buttonTwo,
    } = mobileDtaFirstCard[0];

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
              <a class="live" href="">Live<img src="${buttonOne}" alt=""></a>
              <a class="see" href="">See Project<img src="${buttonTwo}" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function MobileOpenPopup() {
    const popupContainer = document.getElementById('MobilePopupWindow');
    const MobileProjectPopupHTML = MobileRenderProjectPopup(mobileDtaFirstCard);
    popupContainer.innerHTML = MobileProjectPopupHTML;
    popupContainer.style.display = 'flex';
    popupContainer.style.justifyContent = 'center';
    popupContainer.style.alignItems = 'center';
    document.body.style.overflow = 'hidden';
  }

  const mobileSeeProject = document.getElementById('mobileSeeProject');
  mobileSeeProject.addEventListener('click', MobileOpenPopup);

  function MobileClosePopup() {
    const popupContainer = document.getElementById('MobilePopupWindow');
    popupContainer.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('closeImgs')) {
      MobileClosePopup();
    }
  });
}());
