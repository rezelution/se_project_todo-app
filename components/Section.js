class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
  addItem(element) {
    this._container.append(element);
  }
}

export default Section;

//This Section class is responsible for rendering and managing a list of items in the DOM.
// It takes an array of items, a rendering function, and a container where items should be added

//Constructor: Setting Up the Section (items → An array of data (e.g., a list of to-dos,
//renderer → A function that creates and returns an element from an item,
//containerSelector → A CSS selector for the container where items will be added
//Selects the container element from the DOM

//renderItems(Loops through all items, Calls the renderer function on each item (to create elements)
//The renderer function is responsible for adding elements to the container

//addItem (Takes a DOM element and appends it to the container, Used when adding new items dynamically (e.g., a new to-do item).
