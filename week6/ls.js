export function setToDoItem(todoItem) {
  console.log("set item: ", todoItem);
  console.log("current state of list: ", getToDoList());
  let list = getToDoList();
  list.push({ "id": Date.now(), "content": todoItem, "completed": false })
  localStorage.setItem("toDoList", JSON.stringify(list));
  console.log("currentList: ", getToDoList());
  
}
export function deleteToDoItem(id) {
  console.log("delete item: ", id);
  let list = getToDoList();
  list = list.filter((li) => li.id != id);
  localStorage.setItem("toDoList", JSON.stringify(list));
  console.log("currentList: ", getToDoList());
}
export function activateDeactivate(ID) {
  console.log("ID: ", ID);
  let list = getToDoList();
  for (let i = 0; i < list.length; i++) {
    console.log("list[i].id: ", list[i].id);
    if (list[i].id == ID) {
      if (list[i].completed == false) {
        list[i].completed = true;
        console.log("was false");
      } else {
        list[i].completed = false;
        console.log("was true");
      }
    }
  }
  localStorage.setItem("toDoList", JSON.stringify(list));
}
export function getToDoList() {
  return JSON.parse(localStorage.getItem("toDoList"));
}