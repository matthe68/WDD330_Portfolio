import { ListObject } from "./listObject.js";
import { ListItem } from "./listObject.js";

function visibilityToggle() {
  if (this.classList.contains('filter-toggle')) {
    let visibilityButtons = document.querySelector('.filter-toggle');
    visibilityButtons.removeClass('active');
    this.classList.add('active');
  }
  
}

// function createListItem()
let listObject = new ListObject();
let todoHolder = document.querySelector("#todo-list");
let listFooter = document.createElement('div');
let numTasks = document.createElement('span');
numTasks.innerHTML = `${listObject.numberOfTasks()} tasks left`;
let activeStatus = document.createElement('span');

let buttonAll = document.createElement('button');
buttonAll.innerHTML = "All";
buttonAll.classList.add('filterToggle');

let buttonActive = document.createElement('button');
buttonActive.innerHTML = "Active";
buttonActive.classList.add('filter-toggle');

let buttonCompleted = document.createElement('button');
buttonCompleted.innerHTML = "Completed";
buttonCompleted.classList.add('filter-toggle');

buttonAll.addEventListener('click', visibilityToggle());
buttonActive.addEventListener('click', visibilityToggle());
buttonActive.classList.add('filter-toggle');

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
