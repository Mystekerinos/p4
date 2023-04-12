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
const formData = document.querySelectorAll(".formData");
const btnSubmit = document.querySelectorAll(".btn-submit");
const modalBtnClose = document.querySelectorAll(".close");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const numberOfTournament = document.getElementById("quantity");
const allLocations = document.getElementById("allLocations");
const form = document.getElementById("form");
const nameInfo = document.getElementById("nameInfo");

const regex =
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
  console.log(
    "prénom",
    firstName.value.trim().length < 2,
    firstName.value.trim() === " "
  );
  if (firstName.value.trim().length < 2 || firstName.value.trim() === " ") {
    nameInfo.style.display = "block";
    return true;
  }
  nameInfo.style.display = "none";
  return false;
}

// check lastName

function checkLastName() {
  console.log(
    "nom",
    lastName.value.trim().length < 2,
    lastName.value.trim() === " "
  );
  if (lastName.value.trim().length < 2 || lastName.value.trim() === " ") {
    nameInfo.style.display = "block";
    return true;
  }
  nameInfo.style.display = "none";
  return false;
}
// check email

function checkEmail() {
  console.log(
    "email",
    email.value.trim().length < 2,
    email.value.trim() === " "
  );
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
    nameInfo.style.display = "none";
    return true;
  }
}

// check birthdate

function checkBirthdate() {
  console.log(
    "birthdate",
    birthdate.value.trim().length < 2,
    birthdate.value.trim() === " "
  );
  if (birthdate.value != [0 - 9]) {
    nameInfo.style.display = "block";
    return false;
  }
  nameInfo.style.display = "none";
  return true;
}

// check Number of tournament

function checkNumberOfTournament() {
  console.log(
    "numberOfTournament",
    numberOfTournament.value.trim().length < 2,
    numberOfTournament.value.trim() === " "
  );
  if (!numberOfTournament.value.match(regex)) {
    nameInfo.style.display = "block";
    return false;
  }
  nameInfo.style.display = "none";
  return true;
}

// check Location

function checkLocations() {
  allLocations.setAttribute("data-error-visible", "true");
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      allLocations.setAttribute("data-error-visible", "false");
      nameInfo.style.display = "none";
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
    alert("Merci ! Votre réservation a été reçue.");
    return true;
  }
  form.reset();
  return false;
}
