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
const btnSubmit = document.querySelectorAll(".btn-submit");
const modalBtnClose = document.querySelectorAll(".close");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const allLocations = document.getElementById("allLocations");

var regex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// submit modal event
btnSubmit.forEach((btn) => btn.addEventListener("click", submitModal));

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
function submitModal() {
  btnSubmit.style.display = "block";
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

function checkBirthdate() {
  if (!birthdate.value.match(regex)) {
    birthdate.style.border = "#f00020";
    birthdate.style.background = "#f00020";
    return false;
  }
  return true;
}

function checkLocations() {
  allLocations.setAttribute("data-error-visible", "true");
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      allLocations.setAttribute("data-error-visible", "false");
      return true;
    }
  }
  return false;
}

function submit() {
  if (formData.value.match(regex)) {
    return true;
  }
  {
    return false;
  }
}
