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

try {
  button.addEventListener("click", function () {
    button.classList.toggle("active");
  });
} catch (error) {
  alert(error);
}

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

function createCards() {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardsContainer = document.querySelector(".cards");

  initialCards.forEach((cardData) => {
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    const cardPicElement = cardElement.querySelector(".card__picture");
    const cardTitleElement = cardElement.querySelector(".card__text");

    cardPicElement.src = cardData.link;
    cardPicElement.alt = cardData.name;
    cardTitleElement.textContent = cardData.name;

    cardsContainer.prepend(cardElement);
  });
}

createCards();
