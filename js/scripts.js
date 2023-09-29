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
      this.nextPosition--;
      this.reorderPositions()
      return true;
    }
    return false;
  }
  reorderPositions() {
    let newPosition = 1;
    const sortedKeys = Object.keys(this.items).sort((a, b) => parseInt(a) - parseInt(b));
    for (let key of sortedKeys) {
      if (parseInt(key) !== newPosition) {
        this.items[newPosition] = this.items[key];
        this.items[newPosition].position = newPosition
        delete this.items[key];
      }
      newPosition++;
    }
  }
  complete(position) {
    if (this.items[position]) {
      return this.items[position].complete();
    }
    return false;
  }
  clear() {
    this.items = {};
    this.nextPosition = 1;
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