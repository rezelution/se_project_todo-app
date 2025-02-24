class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._formSelector = settings.formSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formElement = formElement;
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElementId = `#${inputElement.id}-error`;
    const errorElement = formElement.querySelector(errorElementId);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(formElement, inputElement) {
    const errorElementId = `#${inputElement.id}-error`;
    const errorElement = formElement.querySelector(errorElementId);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        this._formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(this._formElement, inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  resetValidation() {
    this._inputList.forEach((inputElement) => {
      inputElement.value = "";
      this._hideInputError(this._formElement, inputElement);
    });

    this._toggleButtonState();
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;

//this is responsible for validating the form inputs, displaying error msgs, and disabling/enabling the submit button.
//the constructor takes two arguments: the settings( an object that contains CSS class names for validation) and the form element(the form that needs validation).\
//_showInputError: Finds the error message area for the input field, Adds an error message and styles the input field with an error class
//_hideInputError: Removes the error message and resets the input field to normal
//_checkInputValidity: Uses built-in form validation (inputElement.validity.valid), If the input is invalid, it shows an error message, If the input is valid, it removes any error message
//_hasInvalidInput: loops through all inputs in the form, returns true if at least one input is invalid
//_toggleButtonState: Disables the submit button if there is an invalid input, Enables the submit button if all inputs are valid
//_setEventListeners: Adds event listeners to all input fields, Calls _toggleButtonState() to disable the submit button if there is an invalid input
//resetValidation: Resets the form to its initial state, Removes all error messages and enables the submit button
//enableValidation: Adds event listeners to the form, Prevents the default form submission, Calls _setEventListeners() to add event listeners to all input fields
