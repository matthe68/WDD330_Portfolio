export class ListObject {
  constructor() {
    this.list = [];
    this.sort = "all";
  }
  listObjects() {
    return this.list;
  }
  numberOfTasks() {
    return this.list.length;
  }
  renderStatus() {
    return this.sort;
  }
  setRenderStatus(string) {
    this.sort = string;
  }
  newListItem(string) {
    let newItem = new ListItem(string);
    this.list.push(newItem);
  }
  removeItem(string) {
    this.list = this.list.filter((object) => object.getItem() != string);
  }
}

export class ListItem {
  constructor(string) {
    this.item = {"active": true, "task": string, "deleted": false }
  }
  getItem() {
    return this.item.task;
  }
  toggleActive(trueFalse) {
    this.item.active = trueFalse;
  }
  deleted(trueFalse) {
    this.deleted = trueFalse;
  }
}