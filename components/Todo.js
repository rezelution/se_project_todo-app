class Todo {
  constructor(data, selector, handleCheck, handleDelete) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;
  }

  _setEventListeners() {
    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
      this._handleCheck(this._data.completed);
    });
    this._todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove();
      this._handleDelete(this._data.completed);
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");

    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    const todoNameEl = this._todoElement.querySelector(".todo__name");

    this._todoDate = this._todoElement.querySelector(".todo__date");
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    todoNameEl.textContent = this._data.name;

    const dueDate = new Date(this._data.date);
    if (!isNaN(dueDate)) {
      this._todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }

    this._generateCheckboxEl();
    this._setEventListeners();

    return this._todoElement;
  }
}

export default Todo;

//class is designed to create, display, and manage a single to-do item on a webpage

//constructor takes four parameters: data, selector, handleCheck, and handleDelete
//(data  Contains the to-do's information (name, date, id, completed status)
//selector  The CSS selector for the to-do's template.
//handleCheck  A function to update the completed tasks count.
//handleDelete  A function to update the total tasks count when deleted.

//_setEventListeners()  Adds event listeners to the checkbox(Toggles completed status
// and updates the counter) and delete button( Removes the to-do item and updates the counter.

//_generateCheckboxEl()  finds the checkbox element and sets the checkbox's state based on the to-do's completed status.
//and gives unique Ids

//getView Clones the to-do template.(Finds and sets name, due date, and delete button, Calls _generateCheckboxEl() to set up the checkbox,
//Calls _setEventListeners() to enable interactions, Returns the final to-do element to be added to the DOM.
