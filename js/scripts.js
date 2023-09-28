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
  completeItem(number) {
    let itemToComplete = this.items[number];
    if (itemToComplete !== undefined) {
      return itemToComplete.complete();
    }
    return false;
  }
}

class ListItem {
  constructor(desc) {
    this.description = desc;
    this.done = false;
  }
  complete() {
    if (this.done === false) {
      this.done = true;
      return true;
    }
    return false;
  }
}