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
const nameInfo = document.querySelectorAll(".nameInfo");
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

const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// submit modal event
btnSubmit.forEach((btn) => btn.addEventListener("click", launchValidation));

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
  console.log(
    "prénom",
    firstName.value.trim().length < 2,
    firstName.value.trim() === " ",
    !firstName.value.match(regex)
  );
  if (
    firstName.value.trim().length < 2 ||
    first.value.trim() === "" ||
    !firstName.value.match(regex)
  ) {
    nameInfo[0].style.display = "block";
    return false;

    return false;
  }
  nameInfo[0].style.display = "none";
  return true;
}

// check lastName

function checkLastName() {
  console.log(
    "nom",
    lastName.value.trim().length < 2,
    lastName.value.trim() === " ",
    !lastName.value.match(regex)
  );
  if (
    lastName.value.trim().length < 2 ||
    lastName.value.trim() === " " ||
    !lastName.value.match(regex)
  ) {
    nameInfo[1].style.display = "block";
    return false;
  }
  nameInfo[1].style.display = "none";
  return false;
}
// check email

function checkEmail() {
  console.log(
    "email",
    email.value.trim().length < 2,
    email.value.trim() === " ",
    email.value.trim() !== "@"
  );
  if (
    email.value.trim().length < 2 ||
    email.value.find() !== "@" ||
    email.value.trim() === " "
  ) {
    nameInfo[2].style.display = "block";
    return false;
  }
  {
    nameInfo[2].style.display = "none";
    return true;
  }
}

// check birthdate

function checkBirthdate() {
  console.log("birthdate", birthdate.value !== [0 - 9]);
  if (birthdate.value != [0 - 9]) {
    nameInfo[3].style.display = "block";
    return false;
  }
  nameInfo[3].style.display = "none";
  return true;
}

// check Number of tournament

function checkNumberOfTournament() {
  console.log(
    "numberOfTournament",

    numberOfTournament.value.trim() === " "
  );
  if (numberOfTournament.value.trim() === " ") {
    nameInfo[4].style.display = "block";
    return true;
  }
  nameInfo[4].style.display = "none";
  return false;
}

// check Location

function checkLocations(locations) {
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      nameInfo[5].style.display = "none";
      return true;
    }
  }
  nameInfo[5].style.display = "block";
  return false;
}

function launchValidation() {
  checkFirstName();
  checkLastName();
  checkEmail();
  checkBirthdate();
  checkLocations();
}

function formValidation() {
  console.log(
    checkBirthdate,
    checkEmail,
    checkLocations,
    checkNumberOfTournament,
    checkFirstName,
    checkLastName
  );
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
  }
  form.reset();
}
