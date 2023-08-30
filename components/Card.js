class Card {
  constructor(data, cardSelector, toggleAddPopup, handleCardClick) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick.bind(this);
    this._toggleAddPopup = toggleAddPopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners(cardElement) {
    const likeButton = cardElement.querySelector(".card__like");
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("card__like_active");
    });

    const deleteButton = cardElement.querySelector(".card__trash");
    deleteButton.addEventListener("click", () => {
      cardElement.remove();
    });

    const cardImage = cardElement.querySelector(".card__picture");
    cardImage.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name);

      const imageOpen = document.querySelector(".image__open");
      imageOpen.src = this._link;
      const imageCaption = document.querySelector(".image__caption");
      imageCaption.textContent = this._name;
      const imagePopup = document.getElementById("image");
      imagePopup.classList.add("overlay_visible");
    });
  }

  _setupAddPostForm(addPost, titleInput, linkInput) {
    const cardContainer = document.querySelector(".cards");
    addPost.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!titleInput.value || !linkInput.value) return;

      const cardData = {
        name: titleInput.value,
        link: linkInput.value,
      };

      const newCard = new Card(
        cardData,
        "#card-template",
        this._toggleAddPopup
      );
      const cardElement = newCard.generateCard();
      cardContainer.insertBefore(cardElement, cardContainer.firstChild);

      titleInput.value = "";
      linkInput.value = "";

      this._toggleAddPopup();
    });
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".card__picture").src = this._link;
    this._element.querySelector(".card__text").textContent = this._name;

    this._setEventListeners(this._element);

    const addPost = document.querySelector(".popup__form_add.popup__form_add");
    const titleInput = addPost.querySelector("#title");
    const linkInput = addPost.querySelector("#link");

    this._setupAddPostForm(addPost, titleInput, linkInput);

    return this._element;
  }
}

export default Card;
