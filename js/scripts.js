//Business Logic (BS)

class ToDoList {
  constructor() {
    this.items = {};
    this.nextPosition = 1;
  }
  add(...allContent) {
    allContent.forEach(itemContent => {
      let item = new ListItem(itemContent);
      item.position = this.nextPosition;

      this.items[this.nextPosition] = item;
      this.nextPosition += 1;
      return item;
    });
  }
  remove(position) {
    if (this.items[position]) {
      delete this.items[position];
      return true;
    }
    return false;
  }
  complete(position) {
    if (this.items[position]) {
      return this.items[position].complete();
    }
    return false;
  }
}

class ListItem {
  constructor(content) {
    this.content = content;
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