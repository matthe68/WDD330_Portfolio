import { ListObject } from "./ToDos.js";
import { visibilityToggle } from "./utilities.js";

function addNewTask(x, string) {
  console.log("Add Task: ", string);
  document.querySelector('#input').value = "";
  listObject.newListItem(string); 
  refreshList();
}
function visibilityToggleWrapper(x) {
  visibilityToggle(x);
  refreshList();
}
function activateDeactivate(x) {
  console.log("node: ", x.target);
  let parent = x.target.parentNode;
  let text = parent.querySelector('span').innerHTML;
  let list = listObject.getList();
  for (let i = 0; i < list.length; i++) {
    if (list[i].content == text) {
      console.log("calling change now: ");
      listObject.changeActivationStatus(list[i].id);
    }
  }
  if (x.target.innerHTML == "X") {
    x.target.innerHTML = "O";

  } else {
    x.target.innerHTML = "X";
  }
  document.querySelector('#num-tasks').innerHTML = `${listObject.numberOfTasks()} tasks left`;
}
function deleteListItem(x) {
  console.log("node: ", x.target);
  let parent = x.target.parentNode;
  let text = parent.querySelector('span').innerHTML;
  let list = listObject.getList();
  for (let i = 0; i < list.length; i++) {
    if (list[i].content == text) {
      console.log("calling change now: ");
      listObject.removeItem(list[i].id);
    }
  }
  refreshList();
  document.querySelector('#num-tasks').innerHTML = `${listObject.numberOfTasks()} tasks left`;

}
function refreshList() {
  console.log("refresh list here");
  let list = document.querySelector('#to-do-list');
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  let newList = listObject.getList();
  let activationStatus = document.querySelector('.active').innerHTML;
  if (activationStatus == "Active") {
    newList = newList.filter((li) => li.completed == false);
  } else if (activationStatus == "Completed") {
    newList = newList.filter((li) => li.completed == true);
  }
  console.log("activation: ", activationStatus);



  if (newList.length != undefined && newList.length != 0) {
    for (let i = 0; i < newList.length; i++) {
      let listItem = document.createElement('div');
      listItem.classList.add('list-item-container');
      let checkBox = document.createElement('button');
      if (newList[i].completed == true) {
        checkBox.innerHTML = 'X';
      } else {
        checkBox.innerHTML = 'O';
      }
      checkBox.addEventListener('click', activateDeactivate);
      let label = document.createElement('span');
      label.innerHTML = newList[i].content;
      let deleteButton = document.createElement('button');
      deleteButton.innerHTML = 'X';
      deleteButton.addEventListener('click', deleteListItem)
      listItem.appendChild(checkBox);
      listItem.appendChild(label);
      listItem.appendChild(deleteButton);
      list.appendChild(listItem);
    }
    document.querySelector('#num-tasks').innerHTML = `${listObject.numberOfTasks()} tasks left`;

  }
}


// function createListItem()
var listObject = new ListObject();
let todoHolder = document.querySelector("#todo-list");
let toDoList = document.createElement('div');
toDoList.id = 'to-do-list';
todoHolder.appendChild(toDoList);

let listFooter = document.createElement('div');
let numTasks = document.createElement('span');
numTasks.id = 'num-tasks';
numTasks.innerHTML = `${listObject.numberOfTasks()} tasks left`;
let activeStatus = document.createElement('span');

let buttonAll = document.createElement('button');
buttonAll.innerHTML = "All";
buttonAll.classList.add('filter-toggle');
buttonAll.classList.add('active');

let buttonActive = document.createElement('button');
buttonActive.innerHTML = "Active";
buttonActive.classList.add('filter-toggle');

let buttonCompleted = document.createElement('button');
buttonCompleted.innerHTML = "Completed";
buttonCompleted.classList.add('filter-toggle');

buttonAll.addEventListener('click', visibilityToggleWrapper);
buttonActive.addEventListener('click', visibilityToggleWrapper);
buttonCompleted.addEventListener('click', visibilityToggleWrapper);

activeStatus.appendChild(buttonAll);
activeStatus.appendChild(buttonActive);
activeStatus.appendChild(buttonCompleted);
listFooter.appendChild(numTasks);
listFooter.appendChild(activeStatus);
listFooter.id = 'footer';
todoHolder.appendChild(listFooter);

let inputBar = document.querySelector('div');
let input = document.createElement('input');
input.id = 'input';
let addButton = document.createElement('button');
addButton.innerHTML = "+";
addButton.addEventListener('click', (x) => addNewTask(x, document.querySelector('#input').value));
inputBar.appendChild(input);
inputBar.appendChild(addButton);
// for (let i = 0; i < listObject.numberOfTasks; ++i) {
//   let newListItem = listObject.
// }
