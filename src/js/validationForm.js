const emailInput = document.getElementById('EmailInput');
const errorMessage = document.querySelector('.validationBox');

document
  .querySelector('.contactSection__formBox')
  .addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value.toLowerCase();

    if (emailInput.value !== email) {
      errorMessage.textContent = 'Email must be in lower case';
      errorMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'none';
      event.target.submit();
    }
  });

emailInput.addEventListener('click', () => {
  errorMessage.style.display = 'none';
});
