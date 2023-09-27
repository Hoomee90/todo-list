//Business Logic (BS)

class ToDoList {
  constructor() {
    this.items = {};
    this.currentPosition = 0;
  }
}

class ListItem {
  constructor(desc) {
    this.description = desc;
    this.done = false;
  }
}