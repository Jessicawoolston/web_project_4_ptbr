// export default class Popup {
//   constructor(popupSelector) {
//     this._popup = document.querySelector(popupSelector);
//     this._handleEscClose = this._handleEscClose.bind(this);
//   }

//   open() {
//     this._popup.classList.add("overlay_visible");
//     this._popup.classList.add("add_visible");
//     document.addEventListener("keydown", this._handleEscClose);
//   }
//   close() {
//     document.removeEventListener("keydown", this._handleEscClose);
//     this._popup.classList.remove("overlay_visible");
//     this._popup.classList.remove("add_visible");
//   }
//   _handleEscClose(evt) {
//     if (evt.key === "Escape") {
//       this.close();
//     }
//   }
//   setEventListeners() {
//     const closeButton = this._popup.querySelector(".popup__close");
//     closeButton.addEventListener("click", this.close.bind(this));
//     this._popup.addEventListener("click", this._handleOverlayClick.bind(this));
//     document.addEventListener("keydown", this._handleEscClose);
//   }
// }
