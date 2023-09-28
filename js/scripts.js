//Business Logic (BS)

class ToDoList {
  constructor() {
    this.items = {};
    this.currentPosition = 0;
  }
  addItem(item) {
    this.items[item.description] = item;
  }
}

class ListItem {
  constructor(desc) {
    this.description = desc;
    this.done = false;
  }
}