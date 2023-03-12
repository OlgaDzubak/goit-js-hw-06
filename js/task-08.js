const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password }
  } = event.currentTarget;
  
  if ((email.value === '') || (password.value === '')) {
    alert('Будь-ласка заповнить всі поля форми!');
  } else {
    console.log(`Login: ${email.value}`);
    console.log(`Password : ${password.value}`);
    event.currentTarget.reset();
  }
});