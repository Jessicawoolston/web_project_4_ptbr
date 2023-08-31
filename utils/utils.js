const openForm = document.querySelector(".profile__edit");
const popup = document.getElementById("overlay");
const closeForm = document.querySelector(".popup__close");
const form = document.querySelector(".popup__form");
const profileName = document.querySelector(".profile__title");
const profileAbout = document.querySelector(".profile__explore");
const user = document.querySelector("#name");
const about = document.querySelector("#about");
const title = document.querySelector("#title");

const openAddPopup = document.querySelector(".profile__new-post");
const addPopup = document.getElementById("add");
const closeAddPopup = addPopup.querySelector(".popup__close");
const addPost = document.querySelector(".popup__form_add.popup__form_add");

function resetForm(formElement) {
  formElement.reset();
}

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = user.value;
  profileAbout.textContent = about.value;
  toggleEditPopup();

  if (!user.value || !about.value) return;
}

form.addEventListener("submit", handleFormSubmit);

const formEdit = document.querySelector(".popup__form[name='formEdit']");
formEdit.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !event.target.checkValidity()) {
    event.preventDefault();
  }
});

export function toggleAddPopup() {
  addPopup.classList.toggle("add_visible");
  title.focus();
}

//   function handleCloseAddPopup() {
//     resetForm(addPost);
//     toggleAddPopup();
//   }

// function toggleEditPopup() {
//   popup.classList.toggle("overlay_visible");
//   user.focus();
// }

// function handleCloseEditPopup() {
//   resetForm(form);
//   toggleEditPopup();
// }

// openForm.addEventListener("click", toggleEditPopup);
// closeForm.addEventListener("click", handleCloseEditPopup);

//FECHAR POPUP
// function closePopup(popupElement) {
//   popupElement.classList.remove("overlay_visible");
//   popupElement.classList.remove("add_visible");
// }

// function escKeydownHandler(event) {
//   if (event.key === "Escape") {
//     const openPopup = document.querySelectorAll(
//       ".overlay_visible, .add_visible"
//     );
//     openPopup.forEach((popup) => {
//       closePopup(popup);
//       popup.removeEventListener("keydown", escKeydownHandler);
//     });
//   }
// }

// document.addEventListener("keydown", escKeydownHandler);

// const overlays = document.querySelectorAll(".overlay, .add, .image");
// overlays.forEach((overlay) => {
//   overlay.addEventListener("click", function (event) {
//     if (event.target === overlay) {
//       closePopup(overlay);
//     }
//   });
// });

// openAddPopup.addEventListener("click", toggleAddPopup);
// closeAddPopup.addEventListener("click", handleCloseAddPopup);

// const imageClose = document.querySelector(".image__close");
// imageClose.addEventListener("click", function () {
//   const imagePopup = document.getElementById("image");
//   imagePopup.classList.remove("overlay_visible");
// });
