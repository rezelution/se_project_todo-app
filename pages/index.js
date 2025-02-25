import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

//Selects buttons, forms, and sections of the page that will be used in the app.
const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

//Creates a new instance of the TodoCounter class, passing the initialTodos array and the selector of the element that will display the total number of tasks.
const todoCounter = new TodoCounter(initialTodos, ".counter__text");

//this is a function that will generate a todo and add to the DOM using section
const renderTodo = (item) => {
  const todoElement = generateTodo(item);
  section.addItem(todoElement);
};

//Creates a popup for adding a new to-do item.
//gets the task name, date. adjusts the date to match the time,
// generates a unique ID using uuidv4(), creates a Todo item and adds, updates counter, closes, resets validation.
const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    console.log("Form submitted!", inputValues);
    const name = inputValues.name;
    const dateInput = inputValues.date;

    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    const id = uuidv4();
    const values = { name, date, id };
    renderTodo(values);
    todoCounter.updateTotal(true);
    addTodoPopup.close();
    newTodoValidator.resetValidation();
  },
});

//this handles user interaction with the popup
addTodoPopup.setEventListeners();

//these are functios to handle when a task is checked or deleted and updating counter
function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  todoCounter.updateTotal(false);
  if (completed) {
    todoCounter.updateCompleted(false);
  }
}

//this generates a visual new todo item based of the template
const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  return todoElement;
};

//this class is used to render the initial todos which are existing in the constants.js file array
const section = new Section({
  items: initialTodos,
  renderer: renderTodo,
  containerSelector: ".todos__list",
});
section.renderItems();

//this handles the opening of the popup
addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

//this enables the form validation
const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
