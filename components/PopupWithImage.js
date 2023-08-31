import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor() {
    super(".image__open");
  }

  open(link, caption) {
    const imageOpen = document.querySelector(".image__open");
    imageOpen.src = link;
    imageOpen.alt = caption;
    imageOpen.textContent = caption;
    super.open();
  }
}
