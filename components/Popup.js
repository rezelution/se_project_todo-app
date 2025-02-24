class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscapeClose);
  }
  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscapeClose);
  }

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target === this._popupElement ||
        evt.target === this._popupCloseBtn
      ) {
        this.close();
      }
    });
  }
}

export default Popup;

//This Popup class is responsible for opening, closing, and handling interactions with a popup window.
// It ensures the popup closes when clicking outside it or pressing the Escape key
//constructor: Takes an object with a popupSelector (CSS selector for the popup), Finds the popup element
// and its close button, Binds _handleEscapeClose so it keeps the correct this context
