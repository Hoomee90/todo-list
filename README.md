# 

#### By **Samantha Callie**

#### 

## Technologies Used

* HTML
* JS

## Description


## Setup/Installation Requirements

* Clone repository
* Navigate to the top level of the directory
* Open index.html in your browser

## Known Bugs

* There are no known bugs at this time

## License

[GNU GPLv3](https://choosealicense.com/licenses/agpl-3.0/)

Copyright (c) 2023 Samantha Callie

## Pseudocode Tests Used During Development

Describe: add()

Test: "It should add the provided ListItem to the To Do List's items object with a key of its description"
Code:
let list = new ToDoList();
list.add("TODO");
list;
Expected Output: ToDoList(items: {"TODO": ListItem})

Test "It should utilize a new assignPosition function to give a new number as the keys"
Code:
let list = new ToDoList();
list.add("TODO");
list;
Expected Output: ToDoList(items: {1: ListItem}, nextPosition: 2)

Test "It accept any number of items as input"
Code:
let list = new ToDoList();
list.add("TODO", "todo");
list;
Expected Output: ToDoList: {items: {...}, nextPosition: 3};

Describe: complete()

Test: "It should return false if the input is not the position of a list item or that item's done value is already true"
Code:
let list = new ToDoList();
list.add("TODO");
list.complete(2);
Expected Output: false

Test: "It should return true and change the ListItem at the position of the input's done value to true"
Code:
let list = new ToDoList();
list.add("TODO");
list.complete(1);
Expected Output: true;

Describe: delete()

Test: "It should return false if the input is not the position of a list item"
Code:
let list = new ToDoList();
list.add("TODO")
list.clearItem(3)
Expected Output: false;

Test: "It should delete the list item and return true"
Code:
let list = new ToDoList();
list.add("TODO")
list.clearItem(1);
list;
Expected Output: true, ToDoList: {items: {1: ListItem}, nextPosition: 2}

Describe: clear()

Test: "It should clear the list items"
Code:
let list = new ToDoList();
list.add("TODO")
list.clear()
list
Expected Output: ToDoList: {items: {}, nextPosition: 1};
