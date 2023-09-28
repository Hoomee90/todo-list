//Business Logic (BS)

class ToDoList {
  constructor() {
    this.items = {};
    this.currentPosition = 0;
  }
  addItem(item) {
    item.position = this.assignPosition();
    this.items[item.position] = item;
  }
  assignPosition() {
    this.currentPosition += 1;
    return this.currentPosition;
  }
}

class ListItem {
  constructor(desc) {
    this.description = desc;
    this.done = false;
  }
}