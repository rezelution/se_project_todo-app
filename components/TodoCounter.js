class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    this._completed = 0;
    this._total = todos.length;
    this._completed = todos.filter((todo) => todo.completed).length;
    this._updateText();

    console.log(this._element);
    console.log(this._completed);
    console.log(this._total);
  }

  updateCompleted = (increment) => {
    this._completed += increment ? 1 : -1;
    this._updateText();
  };

  updateTotal = (increment) => {
    if (increment) {
      this._total += 1;
    } else {
      this._total -= 1;
    }
    this._updateText();
  };

  _updateText() {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;

//The TodoCounter class is responsible for tracking and displaying the count of total and completed to-do items.
// It updates dynamically as tasks are added, completed, or removed.

//constructor todos → Array of initial to-do items., selector → The CSS selector for the counter's display element,
// Finds the counter element in the DOM, Counts the total number of to-dos, Counts the completed to-dos (filtering those with completed: true),
//Calls _updateText() to set the initial text.


