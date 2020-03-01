const form = document.querySelector("form");

form.addEventListener("submit", formValidation);

function formValidation(event) {

  event.preventDefault();

  const fName = document.querySelector("#fname");
  const fNameValue = fName.value.trim().length;
  const fNameError = document.querySelector("#fNameError");

  const lName = document.querySelector("#lname");
  const lNameValue = lName.value.trim().length;
  const lNameError = document.querySelector("#lNameError");

  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");

  const phone = document.querySelector("#phone");
  const phoneError = document.querySelector("#phoneError");

  if (fNameValue > 0) {
    fNameError.style.display = "none";
  } else {
    fNameError.style.display = "block";
  }

  if (lNameValue > 0) {
    lNameError.style.display = "none";
  } else {
    lNameError.style.display = "block";
  }

  const regExEmail = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  if (regExEmail.test(email.value.trim())) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  const regExPhone = /^[0-9]{8}$/;
  if (regExPhone.test(phone.value.trim())) {
    phoneError.style.display = "none";
  } else {
    phoneError.style.display = "block";
  }
}


