class ListItem {
  constructor(string) {
    this.item = {"active": true, "task": string, "deleted": false }
  }
  get getItem() {
    return this.item.task;
  }
  set toggleActive() {
    this.item.active ? this.item.active = false : this.item.active = true;
  }
  set deleted() {
    this.deleted = true;
  }
}
export default ListItem


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