import { ListItem } from "listItem.js";
import { ListObject } from "listItem.js";

// function createListItem()
let listObject = ListObject();
let todoHolder = Document.querySelector("#todo-list");
let listFooter = Document.createElement('div');
let numTasks = Document.createElement('span');
numTasks.innerHTML = `${listObject.numberOfTasks()} tasks left`;
let activeStatus = Document.createElement('div');
let buttonAll = Document.createElement('button');
buttonAll.innerHTML = "All";
let buttonActive = Document.createElement('button');
buttonActive.innerHTML = "Active";
let buttonCompleted = Document.createElement('Completed');
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
