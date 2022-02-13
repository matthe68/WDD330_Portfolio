import { setToDoItem } from "./ls.js";
import { deleteToDoItem } from "./ls.js";
import { getToDoList } from "./ls.js";
import { activateDeactivate } from "./ls.js";

export class ListObject {
  constructor() {
    localStorage.setItem("toDoList", JSON.stringify([]));
    this.list = localStorage.getItem("toDoList");
    this.sort = "all";
  }
  getList() {
    return getToDoList();
  }
  numberOfTasks() {
    let num = getToDoList();
    let numLeft = num.filter((li) => li.completed == false);
    console.log('numLeft.length: ', numLeft.length);
    return numLeft.length;
  }
  renderStatus() {
    return this.sort;
  }
  setRenderStatus(string) {
    this.sort = string;
  }
  newListItem(string) {
    setToDoItem(string);
  }
  removeItem(id) {
    deleteToDoItem(id);
  }
  changeActivationStatus(id) {
    activateDeactivate(id);
  }
}