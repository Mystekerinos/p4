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
const modalbgConf = document.querySelector(".bgroundConf");
const modalBtn = document.querySelectorAll(".modal-btn");

const errorMsg = document.querySelectorAll(".errorMsg");
const formData = document.querySelectorAll(".formData");
const btnSubmit = document.querySelector(".btn-submit");
const modalBtnClose = document.querySelectorAll(".close");
const modalBtnCloseConf = document.querySelectorAll(".closeConf");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");

const birthdate = document.getElementById("birthdate");
const numberOfTournament = document.getElementById("quantity");
const allLocations = document.getElementById("allLocations");
const form = document.getElementById("form");

const Identityregex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

const mailFormatRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// submit modal event
btnSubmit.addEventListener("click", checkValidation);

// close modal event
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));
// close modal form
modalBtnCloseConf.forEach((btn) =>
  btn.addEventListener("click", closeModalConf)
);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// launch modal conf
function launchModalConf() {
  modalbgConf.style.display = "block";
  modalbg.style.display = "none";
}
// close modal conf
function closeModalConf() {
  modalbgConf.style.display = "none";
}

// check input form
//check identityName

function checkIdentityName(identityName, index) {
  if (
    identityName.value.trim().length < 2 ||
    identityName.value.trim() === "" ||
    !identityName.value.match(Identityregex)
  ) {
    errorMsg[index].style.display = "block";
    return false;
  }
  errorMsg[index].style.display = "none";
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

// check Term of use
function checkTermOfUse() {
  const CheckBoxInput = document.querySelector(".radio-input-formData");

  if (CheckBoxInput.checked === false) {
    errorMsg[6].style.display = "block";
    return false;
  }
  errorMsg[6].style.display = "none";
  return true;
}

function checkValidation(event) {
  event.preventDefault();

  const isCheckFirstName = checkIdentityName(firstName, 0);

  const iscCheckLastName = checkIdentityName(lastName, 1);

  const isCheckEmail = checkEmail();

  const isCheckBirthdate = checkBirthdate();

  const isCheckNumberOfTournament = checkNumberOfTournament();

  const isCheckLocations = checkLocations();

  const ischeckTermOfUse = checkTermOfUse();

  if (
    isCheckFirstName === true &&
    iscCheckLastName === true &&
    isCheckEmail === true &&
    isCheckBirthdate === true &&
    isCheckNumberOfTournament === true &&
    isCheckLocations === true &&
    ischeckTermOfUse === true
  )
    // We display the modal of the successful message.

    return launchModalConf();
}
