export function getMessages() {
  console.log("messagesJson from ls: ", window.localStorage.getItem("messages-chat-bot"));
  return JSON.parse(window.localStorage.getItem("messages-chat-bot"));
}
export function addMessage(person, message) {
  console.log("person: ", person, " message: ", message);
  let messagesJson = getMessages();
  console.log(messagesJson);
  if (messagesJson == null || !Array.isArray(messagesJson)) {
    messagesJson = [];
  }
  console.log("addMessage(): messagesJson: ", messagesJson);
  // let currentDate = new Date();
  let newMessage = { "person": person, "message": message, dateTime: new Date().toLocaleString() };
  console.log("newMessage: ", newMessage);
  messagesJson.push(newMessage);
  console.log("messagesJson: ", messagesJson);
  messagesJson = JSON.stringify(messagesJson);
  console.log("messagesJson stringified", messagesJson);
  window.localStorage.setItem("messages-chat-bot", messagesJson);
}
export function removeAllMessages() {
  window.localStorage.setItem("messages-chat-bot", "[]");
}

export function getFinishedStories() {
  return JSON.parse(window.localStorage.getItem("completed-stories"));
}