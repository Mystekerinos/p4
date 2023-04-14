function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const errorMsg = document.querySelectorAll(".errorMsg");
const formData = document.querySelectorAll(".formData");
const btnSubmit = document.querySelector(".btn-submit");
const modalBtnClose = document.querySelectorAll(".close");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const numberOfTournament = document.getElementById("quantity");
const allLocations = document.getElementById("allLocations");
const form = document.getElementById("form");

const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

const mailFormatRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// submit modal event
btnSubmit.addEventListener("click", checkValidation);

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

// check input form
//check firstName

function checkFirstName() {
  if (
    firstName.value.trim().length < 2 ||
    first.value.trim() === "" ||
    !firstName.value.match(regex)
  ) {
    errorMsg[0].style.display = "block";
    return false;
  }
  errorMsg[0].style.display = "none";
  return true;
}

// check lastName

function checkLastName() {
  if (
    lastName.value.trim().length < 2 ||
    lastName.value.trim() === " " ||
    !lastName.value.match(regex)
  ) {
    errorMsg[1].style.display = "block";
    return false;
  }
  errorMsg[1].style.display = "none";
  return true;
}
// check email

function checkEmail() {
  if (mailFormatRegex.test(email.value) === false) {
    errorMsg[2].style.display = "block";
    return false;
  }
  errorMsg[2].style.display = "none";
  return true;
}

// check birthdate

function checkBirthdate() {
  if (birthdate.value.trim().length === 0) {
    errorMsg[3].style.display = "block";
    return false;
  }
  errorMsg[3].style.display = "none";
  return true;
}

// check Number of tournament

function checkNumberOfTournament() {
  if (
    quantity.value.trim().length === 0 ||
    isNaN(quantity.value.trim()) === true ||
    quantity.value.trim() < 0
  ) {
    errorMsg[4].style.display = "block";
    return false;
  }

  errorMsg[4].style.display = "none";
  return true;
}

// check Location

function checkLocations() {
  const radiosInput = document.querySelectorAll(".radio-input");
  let isChecked = false;
  for (let i = 0; i < radiosInput.length; i++) {
    if (radiosInput[i].checked === true) {
      isChecked = true;
      break;
    }
  }

  if (isChecked === false) {
    errorMsg[5].style.display = "block";
    return isChecked;
  }

  errorMsg[5].style.display = "none";
  return isChecked;
}

function checkValidation(event) {
  event.preventDefault();

  const isCheckFirstName = checkFirstName();

  const iscCheckLastName = checkLastName();

  const isCheckEmail = checkEmail();

  const isCheckBirthdate = checkBirthdate();

  const isCheckNumberOfTournament = checkNumberOfTournament();

  const isCheckLocations = checkLocations();

  if (
    isCheckFirstName === true &&
    iscCheckLastName === true &&
    isCheckEmail === true &&
    isCheckBirthdate === true &&
    isCheckNumberOfTournament === true &&
    isCheckLocations === true
  ) {
    // On affiche la modale du message reussi.

    alert("Youpii");
  }
}
