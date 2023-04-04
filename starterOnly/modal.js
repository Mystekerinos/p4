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
    first.value.trim() === "" ||
    !firstName.value.match(regex)
  ) {
    firstName.parentElement.setAttribute("data-error-visible", "true");
    firstName.style.border = "2px solid #e54858";
    return false;
  }
  first.parentElement.setAttribute("data-error-visible", "false");
  first.style.border = "solid #279e7a 0.19rem";
  return true;
}

// check lastName

function checkLastName() {}

// check email

function checkEmail() {}

// check birthdate

function checkBirthdate() {}
