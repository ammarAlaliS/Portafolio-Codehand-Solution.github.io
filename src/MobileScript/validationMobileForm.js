const MobileEmailInput = document.getElementById('validationMobileForm');
const MobileErrorMessage = document.querySelector('.MobileValidationBox');

document.querySelector('.formBox').addEventListener('submit', (event) => {
  event.preventDefault();

  const email = MobileEmailInput.value.toLowerCase();

  if (MobileEmailInput.value !== email) {
    MobileErrorMessage.textContent = 'Email must be in lower case';
    MobileErrorMessage.style.display = 'block';
  } else {
    MobileErrorMessage.style.display = 'none';
    event.target.submit();
  }
});

MobileEmailInput.addEventListener('click', () => {
  MobileErrorMessage.style.display = 'none';
});
