const openForm = document.querySelector(".profile__edit");
const popup = document.getElementById("overlay");
const closeForm = document.querySelector(".popup__close");

const form = document.querySelector(".popup__form");
const saveinfo = document.querySelector("#save");

const profileName = document.querySelector(".profile__title");
const profileAbout = document.querySelector(".profile__explore");
const name = document.querySelector("#name");
const about = document.querySelector("#about");

function togglePopup() {
  popup.classList.toggle("overlay_visible");
}

openForm.addEventListener("click", togglePopup);
closeForm.addEventListener("click", togglePopup);

function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.querySelector("#name");
  const about = document.querySelector("#about");
}

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = name.value;
  profileAbout.textContent = about.value;
  togglePopup();
}

const button = document.querySelector(".card__button");

button.addEventListener("click", function () {
  button.classList.toggle("active");
});
