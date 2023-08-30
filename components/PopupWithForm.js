// import Popup from "./Popup";

// export default class PopupWithForm extends Popup {
//   constructor({ popupSelector, callBackForm }) {
//     super(popupSelector);
//     this._callBackForm = callBackForm;
//     this._formElement = this._popup.querySelectorAll(".popup__form");
//   }

//   _getInputValues() {
//     this._inputList = this._container.querySelectorAll(".popup__input");
//     this._inputValue = {};
//     this._inputList.forEach((input) => {
//       this._inputValue[input.name] = input.value;
//     });
//     return this._inputValue;
//   }

//   setEventListeners() {
//     super.setEventListeners();
//     this._formElement.addEventListener("submit", (evt) => {
//       evt.preventDefault();
//       this._callBackForm(this._getInputValues());
//     });
//   }

//   close() {
//     super.close();
//     this._formElement.reset();
//   }
// }
