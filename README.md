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

Describe: addItem()

Test: "It should add the provided ListItem to the To Do List's items object with a key of its description"
Code:
let item = new ListItem("TODO");
let list = new ToDoList();
list.addItem(item);
Expected Output: ToDoList(items{"TODO": ListItem})

Test "It should utilize a new assignPosition function to give a new number as the keys"
Code:
let item = new ListItem("TODO");
let list = new ToDoList();
list.addItem(item);
Expected Output: ToDoList(items{1: ListItem})