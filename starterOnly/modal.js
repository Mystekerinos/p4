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
  const Vmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(
    "email",
    email.value.trim().length < 2,
    email.value.trim() === " ",
    email.value.match(Vmail)
  );

  if (
    email.value.trim().length < 2 ||
    email.value.match(Vmail) ||
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
  console.log("birthdate", birthdate.value.trim().length !== 10);
  if (birthdate.value.trim().length !== 10) {
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
    quantity.value.trim().length === 0 ||
      isNaN(quantity.value.trim()) === true ||
      quantity.value.trim() < 0
  );
  if (
    quantity.value.trim().length === 0 ||
    isNaN(quantity.value.trim()) === true ||
    quantity.value.trim() < 0
  ) {
    nameInfo[4].style.display = "block";
    return false;
  }

  nameInfo[4].style.display = "none";
  return true;
}

// check Location

function checkLocations(locations) {
  console.log("chcekLocations", locations.length);
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      nameInfo[5].style.display = "block";
      return false;
    }
  }
  nameInfo[5].style.display = "none";
  return true;
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
    form.reset();
  }
  launchValidation();
}
