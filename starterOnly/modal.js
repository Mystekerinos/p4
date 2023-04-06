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
const nameInfo = document.getElementById("nameInfo");

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
    nameInfo.style.display = "block";

    return false;
  }

  return true;
}

// check lastName

function checkLastName() {
  if (
    lastName.value.trim().length < 2 ||
    lastName.value.trim() === " " ||
    !lastName.value.match(regex)
  ) {
    nameInfo.style.display = "block";

    return false;
  }

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
    nameInfo.style.display = "block";

    return false;
  }
  {
    return true;
  }
}

// check birthdate

function checkBirthdate() {
  if (birthdate.value != [0 - 9]) {
    nameInfo.style.display = "block";

    return false;
  }
  return true;
}

// check Number of tournament

function checkNumberOfTournament() {
  if (!birthdate.value.match(regex)) {
    nameInfo.style.display = "block";

    return false;
  }
  return true;
}

// check Location

function checkLocations() {
  allLocations.setAttribute("data-error-visible", "true");
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      allLocations.setAttribute("data-error-visible", "false");
      return true;
    }
  }
  nameInfo.style.display = "block";
  return false;
}

function formValidation() {
  if (
    checkFirstName() === true &&
    checkBirthdate() === true &&
    checkLocations() === true &&
    checkBirthdate() === true &&
    checkEmail() === true &&
    checkLastName() === true
  ) {
    return true;
  }

  return false;
}

function submitModal(e) {
  e.preventDefault();
  if (formValidation() === true) {
    return true;
  }
  formData.reset();
}
