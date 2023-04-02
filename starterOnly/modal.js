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
var b_civilite = false;
var b_nom = false;
var b_prenom = false;
var b_date = false;
var b_mail = false;
var b_mp = false;

function send() {
  if (
    b_civilite == true &&
    b_nom == true &&
    b_prenom == true &&
    b_date == true &&
    b_mail == true &&
    b_mp == true
  ) {
    document.getElementById("message").innerText = "Envoi serveur";
    //document.getElementById('inscription').submit();
  } else {
    document.getElementById("message").innerText =
      "Le formulaire n'est pas complet";
  }
}
