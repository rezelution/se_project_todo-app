import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    const values = {};
    this._inputList.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  getForm() {
    return this._popupForm;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
    });
  }
}

export default PopupWithForm;

//This PopupWithForm class extends the Popup class and adds form-handling functionality.
// It allows a popup to contain a form, retrieve input values, and handle form submissions

//constructor takes two parameters: popupSelector and handleFormSubmit
//Calls super({ popupSelector }) to reuse the Popup class functionality, Finds the form inside the popup,
// Stores handleFormSubmit (a function to process the form submission)
//Class fields (the so-called class variables with this) are accessible inside any class method.
// You shouldn’t pass class fields into the call of any method or search them again because you can use class fields inside all methods

// _getInputValues() method retrieves all input values(Creates an object where, The keys are input field names,  The values are the user’s input
//then returns this object with all form data)

// setEventListeners() method adds a submit event listener to the form inside the popup
// Calls the handleFormSubmit function with the object containing the input values when the form is submitted
