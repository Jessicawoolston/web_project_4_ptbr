export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeButton = this._popup.querySelector(".image__close");
    this._overlay = this._popup.querySelector(".overlay");
  }

  open() {
    this._popup.classList.add("overlay_visible");
    this._popup.classList.add("add_visible");
    document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    document.removeEventListener("keydown", this._handleEscClose);
    this._popup.classList.remove("overlay_visible");
    this._popup.classList.remove("add_visible");
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleOverlayClick(evt) {
    if (evt.target === this._overlay) {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this.close();
    });

    this._overlay.addEventListener("click", (evt) => {
      this._handleOverlayClick(evt);
    });

    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }
}
