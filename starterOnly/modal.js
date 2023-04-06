function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelectorAll(".close");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// send modal form
function launchModal() {
  modalbg.style.display = "block";
}

// check input form
//check firstName

function checkFirstName() {
  if (
    firstName.value.trim().length < 2 ||
    firstName.value.trim() === " " ||
    !firstName.value.match(regex)
  ) {
    firstName.style.border = "2px solid #f00020";
    firstName.style.background = "#f00020";
    return false;
  }
  firstName.parentElement.setAttribute("data-error-visible", "false");
  firstName.style.border = "solid #279e7a 0.19rem";
  return true;
}

// document.getElementById('input_id').classList.add('red-input');

// check lastName

function checkLastName() {
  if (
    lastName.value.trim().length < 2 ||
    lastName.value.trim() === " " ||
    !lastName.value.match(regex)
  ) {
    lastName.style.border = "2px solid #f00020";
    lastName.style.background = "#f00020";
    return false;
  }
  lastName.parentElement.setAttribute("data-error-visible", "false");
  lastName.style.border = "solid #279e7a 0.19rem";
  return true;
}
// check email

function checkEmail() {
  if (
    email.value.trim().length < 2 ||
    email.value.find() !== "@" ||
    email.value.trim() === " " ||
    !email.value.match(regex)
  ) {
    email.style.border = "#f00020";
    email.style.background = "#f00020";
    return false;
  }
  {
    return true;
  }
}

// check birthdate

function checkBirthdate() {}
