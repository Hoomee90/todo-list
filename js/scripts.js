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
  completeItem(position) {
    if (this.items[position] !== undefined) {
      return this.items[position].complete();
    }
    return false;
  }
  findItem(position) {
    if (this.items[position] !== undefined) {
      return this.items[position];
    }
    return false;
  }
  clearItem(position) {
    if (this.items[position] === undefined) {
      return false;
    }
    delete this.items[position];
    return true;
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