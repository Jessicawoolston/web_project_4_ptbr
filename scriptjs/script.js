//POPUP EDITAR PERFIL

const openForm = document.querySelector(".profile__edit");
const popup = document.getElementById("overlay");
const closeForm = document.querySelector(".popup__close");

const form = document.querySelector(".popup__form");
const saveinfo = document.querySelector("#save");

const profileName = document.querySelector(".profile__title");
const profileAbout = document.querySelector(".profile__explore");
const name = document.querySelector("#name");
const about = document.querySelector("#about");

function toggleEditPopup() {
  popup.classList.toggle("overlay_visible");
}

openForm.addEventListener("click", toggleEditPopup);
closeForm.addEventListener("click", toggleEditPopup);

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
  toggleEditPopup();
}

//CRIANDO CARDS JS

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

//POPUP CARD
const openAddPopup = document.querySelector(".profile__new-post");
const addPopup = document.getElementById("add");
const closeAddPopup = addPopup.querySelector(".popup__close");

function togglePopup() {
  addPopup.classList.toggle("add_visible");
}

openAddPopup.addEventListener("click", togglePopup);
closeAddPopup.addEventListener("click", togglePopup);

const addPost = document.querySelector(".popup__form.popup__form_add");

addPost.addEventListener("submit", function (event) {
  event.preventDefault();

  const titleInput = document.querySelector("#title");
  const linkInput = document.querySelector("#link");

  const cardData = {
    name: titleInput.value,
    link: linkInput.value,
  };

  createCard(cardData);

  titleInput.value = "";
  linkInput.value = "";

  togglePopup();
});

//CARDS INICIAIS

function createInitialCards() {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardsContainer = document.querySelector(".cards");

  initialCards.forEach((cardData) => {
    createCard(cardData, cardTemplate, cardsContainer);
  });
}

createInitialCards();

//ADICIONAR UM CARD

function createCard(cardData) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardsContainer = document.querySelector(".cards");

  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardPicElement = cardElement.querySelector(".card__picture");
  const cardTitleElement = cardElement.querySelector(".card__text");

  cardPicElement.src = cardData.link;
  cardPicElement.alt = cardData.name;
  cardTitleElement.textContent = cardData.name;
  //LIKE ATIVADO
  cardElement
    .querySelector(".card__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__like_active");
    });

  //POPUP IMAGENS
  cardElement.addEventListener("click", function () {
    const imageOpen = document.querySelector(".image__open");
    imageOpen.src = cardData.link;

    const imageCaption = document.querySelector(".image__caption");
    imageCaption.textContent = cardData.name;
    const imagePopup = document.getElementById("image");
    imagePopup.classList.add("overlay_visible");
  });
  const imageClose = document.querySelector(".image__close");
  imageClose.addEventListener("click", function () {
    const imagePopup = document.getElementById("image");
    imagePopup.classList.remove("overlay_visible");
  });

  cardsContainer.prepend(cardElement);
}

//DELETAR CARD
const cardsContainer = document.querySelector(".cards");

cardsContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("card__trash")) {
    const card = event.target.closest(".card");
    card.remove();
  }
});
