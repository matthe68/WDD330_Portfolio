import { ListItem } from "./listItem.js";

class ListObject {
  constructor() {
    this.list = [];
    this.sort = "all";
  }
  get list() {
    return this.list;
  }
  get numberOfTasks() {
    return this.list.length();
  }
  get renderStatus() {
    return this.sort;
  }
  set setRenderStatus(string) {
    this.sort = string;
  }
  set newListItem(string) {
    let newItem = ListItem(string);
    this.list.push(newItem);
  }
  set removeItem(string) {
    this.list = this.list.filter((object) => object.getItem() != string);
  }
}

export default ListObject;