const enableValidation = ({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) => {
  const forms = Array.from(document.querySelectorAll(formSelector));

  forms.forEach((formElement) => {
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    setEventListeners(
      formElement,
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass
    );
  });
};

const hideInputError = (formElement, inputElement) => {
  const ErrorElement = formElement.querySelector(
    `.input-${inputElement.id}-error`
  );

  ErrorElement.classList.remove("popup__error_visible");
  inputElement.classList.remove("popup__input_error");

  ErrorElement.textContent = "";
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const ErrorElement = formElement.querySelector(
    `.input-${inputElement.id}-error`
  );

  inputElement.classList.add("popup__input_error");
  ErrorElement.textContent = errorMessage;
  ErrorElement.classList.add("popup__error_visible");
};

const validInput = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (
  formElement,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass
) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const submitButton = formElement.querySelector(submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      validInput(formElement, inputElement);

      toggleButtonState(inputList, submitButton);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__save_disabled");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("popup__save_disabled");
    buttonElement.disabled = false;
  }
};
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__error",
  errorClass: "popup__error_visible",
});
