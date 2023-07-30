//POPUP EDITAR PERFIL

const openForm = document.querySelector(".profile__edit");
const popup = document.getElementById("overlay");
const closeForm = document.querySelector(".popup__close");

const form = document.querySelector(".popup__form");
const saveinfo = document.querySelector("#save");

const profileName = document.querySelector(".profile__title");
const profileAbout = document.querySelector(".profile__explore");
const user = document.querySelector("#name");
const about = document.querySelector("#about");
const title = document.querySelector("#title");

function toggleEditPopup() {
  popup.classList.toggle("overlay_visible");
  user.focus();
}

function resetForm(formElement) {
  formElement.reset();
}

function handleCloseEditPopup() {
  resetForm(form);
  toggleEditPopup();
}

openForm.addEventListener("click", toggleEditPopup);
closeForm.addEventListener("click", handleCloseEditPopup);

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = user.value;
  profileAbout.textContent = about.value;
  toggleEditPopup();

  if (!user.value || !about.value) return;
}

form.addEventListener("submit", handleFormSubmit);

// FECHHAR POPUP - ESC
function closePopup(popupElement) {
  popupElement.classList.remove("overlay_visible");
  popupElement.classList.remove("add_visible");
}

function escKeydownHandler(event) {
  if (event.key === "Escape") {
    const openPopup = document.querySelectorAll(
      ".overlay_visible, .add_visible"
    );
    openPopup.forEach((popup) => {
      closePopup(popup);
      popup.removeEventListener("keydown", escKeydownHandler);
    });
  }
}

document.addEventListener("keydown", escKeydownHandler);

const formEdit = document.querySelector(".popup__form[name='formEdit']");
formEdit.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !event.target.checkValidity()) {
    event.preventDefault();
  }
});

const overlays = document.querySelectorAll(".overlay, .add, .image");
overlays.forEach((overlay) => {
  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      closePopup(overlay);
    }
  });
});
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

const addPost = document.querySelector(".popup__form_add.popup__form_add");
const titleInput = document.querySelector("#title");
const linkInput = document.querySelector("#link");

function toggleAddPopup() {
  addPopup.classList.toggle("add_visible");
  title.focus();
}

function handleCloseAddPopup() {
  resetForm(addPost);
  toggleAddPopup();
}

openAddPopup.addEventListener("click", toggleAddPopup);
closeAddPopup.addEventListener("click", handleCloseAddPopup);

addPost.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!titleInput.value || !linkInput.value) return;

  const cardData = {
    name: titleInput.value,
    link: linkInput.value,
  };

  createCard(cardData);

  titleInput.value = "";
  linkInput.value = "";

  toggleAddPopup();
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
  cardPicElement.addEventListener("click", function () {
    const imageOpen = document.querySelector(".image__open");
    imageOpen.src = cardData.link;

    const imageCaption = document.querySelector(".image__caption");
    imageCaption.textContent = cardData.name;
    imageOpen.alt = cardData.name;
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
  const deleteButton = event.target.closest(".card__trash");
  if (deleteButton) {
    const card = deleteButton.closest(".card");
    card.remove();
  }
});
