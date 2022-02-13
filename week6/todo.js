import { ListObject } from "./listObject.js";
import { ListItem } from "./listObject.js";

// function createListItem()
let listObject = new ListObject();
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
