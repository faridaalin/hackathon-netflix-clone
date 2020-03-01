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
  const emailValue = email.value.trim().length;
  const emailError = document.querySelector("#emailError");

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

  if (emailValue > 0 && !emailValidate(email.value.trim)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
}

function emailValidate(email) {
  const regEx = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  return regEx.test(email);
}
