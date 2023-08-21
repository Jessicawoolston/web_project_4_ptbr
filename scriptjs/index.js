import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { toggleAddPopup } from "./utils.js";

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

function startCard(initialCards) {
  const cardContainer = document.querySelector(".cards");
  initialCards.forEach(function (initialCard) {
    const newCard = new Card(initialCard, "#card-template", toggleAddPopup);
    const cardElement = newCard.generateCard();
    cardContainer.append(cardElement);
  });
}

function FormValidation() {
  const data = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save",
    inactiveButtonClass: "popup__save_disabled",
    inputErrorClass: "popup__input_error",
    errorClass: "popup__error_visible",
  };

  const editFormValidator = new FormValidator(data, ".popup__form");
  editFormValidator.enableValidation();

  const addFormValidator = new FormValidator(data, ".popup__form_add");
  addFormValidator.enableValidation();
}

startCard(initialCards);
FormValidation();
