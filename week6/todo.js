import { ListObject } from "./listObject.js";
import { ListItem } from "./listObject.js";

function visibilityToggle(x) {
  if (x.target.classList.contains('filter-toggle')) {
    let visibilityButtons = document.querySelector('.filter-toggle');
    visibilityButtons.foreach((i) => i.classList.removeClass('active'));
    x.target.classList.add('active');
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
buttonAll.classList.add('filter-toggle');

let buttonActive = document.createElement('button');
buttonActive.innerHTML = "Active";
buttonActive.classList.add('filter-toggle');

let buttonCompleted = document.createElement('button');
buttonCompleted.innerHTML = "Completed";
buttonCompleted.classList.add('filter-toggle');

buttonAll.addEventListener('click', visibilityToggle);
buttonActive.addEventListener('click', visibilityToggle);
buttonCompleted.addEventListener('click', visibilityToggle);

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
