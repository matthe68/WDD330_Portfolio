import { ListObject } from "./listObject.js";
import { ListItem } from "./listObject.js";

// function createListItem()
let listObject = new ListObject();
let todoHolder = document.querySelector("#todo-list");
let listFooter = document.createElement('div');
let numTasks = document.createElement('span');
numTasks.innerHTML = `${listObject.numberOfTasks()} tasks left`;
let activeStatus = document.createElement('span');
let buttonAll = document.createElement('button');
buttonAll.innerHTML = "All";
let buttonActive = document.createElement('button');
buttonActive.innerHTML = "Active";
let buttonCompleted = document.createElement('button');
buttonCompleted.innerHTML = "Completed";

activeStatus.appendChild(buttonAll);
activeStatus.appendChild(buttonActive);
activeStatus.appendChild(buttonCompleted);
listFooter.appendChild(numTasks);
listFooter.appendChild(activeStatus);
todoHolder.appendChild(listFooter);

let inputBar = document.querySelector('div');
let input = document.createElement('input');
let addButton = document.createElement('button');
addButton.innerHTML = "+";
inputBar.appendChild(input);
inputBar.appendChild(addButton);
// for (let i = 0; i < listObject.numberOfTasks; ++i) {
//   let newListItem = listObject.
// }
