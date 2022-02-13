import { ListObject } from "./listObject.js";
import { ListItem } from "./listObject.js";

// function createListItem()
let listObject = new ListObject();
let todoHolder = document.querySelector("#todo-list");
let listFooter = document.createElement('div');
let numTasks = document.createElement('span');
numTasks.innerHTML = `${listObject.numberOfTasks()} tasks left`;
let activeStatus = document.createElement('div');
let buttonAll = document.createElement('button');
buttonAll.innerHTML = "All";
let buttonActive = document.createElement('button');
buttonActive.innerHTML = "Active";
let buttonCompleted = document.createElement('Completed');
buttonCompleted.innerHTML = "Completed";

activeStatus.appendChild(buttonAll);
activeStatus.appendChild(buttonActive);
activeStatus.appendChild(buttonCompleted);
listFooter.appendChild(numTasks);
listFooter.appendChild(activeStatus);
todoHolder.appendChild(listFooter);
// for (let i = 0; i < listObject.numberOfTasks; ++i) {
//   let newListItem = listObject.
// }
