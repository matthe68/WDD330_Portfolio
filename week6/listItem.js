class ListItem {
  constructor(string) {
    this.item = {"active": true, "task": string, "deleted": false }
  }
  get getItem() {
    return this.item.task;
  }
  set toggleActive(trueFalse) {
    this.item.active = trueFalse;
  }
  set deleted(trueFalse) {
    this.deleted = trueFalse;
  }
}
export default ListItem