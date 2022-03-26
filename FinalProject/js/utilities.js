export function getMessages() {
  return JSON.parse(window.localStorage.getItem("messages-chat-bot"));
}
export function addMessage(person, message) {
  let messagesJson = getMessages();
  if (messagesJson == null || !Array.isArray(messagesJson)) {
    messagesJson = [];
  }
  let newMessage = { "person": person, "message": message, dateTime: new Date().toLocaleString() };
  messagesJson.push(newMessage);
  messagesJson = JSON.stringify(messagesJson);
  window.localStorage.setItem("messages-chat-bot", messagesJson);
}
export function removeAllMessages() {
  window.localStorage.setItem("messages-chat-bot", "[]");
  window.localStorage.setItem("completed-stories", "[]");
}

export function getFinishedStories() {
  return JSON.parse(window.localStorage.getItem("completed-stories"));
}
export function setFinishedStory(storyName) {
  let finishedStories = getFinishedStories();
  if (typeof finishedStories == "string") {
    finishedStories = JSON.parse(finishedStories);
  }
  finishedStories = finishedStories == null ? [] : finishedStories == undefined ? [] : finishedStories == [] ? [] : finishedStories;
  finishedStories.push(storyName);
  window.localStorage.setItem("completed-stories", JSON.stringify(finishedStories));
}
export function getAllUserVariables() {
  let storyVariables = JSON.parse(window.localStorage.getItem("story-variables"));
  storyVariables = (storyVariables == undefined || storyVariables == null) ? [] : storyVariables;
  return storyVariables;
}
export function setUserVariable(name, value) {
  let vArray = getAllUserVariables();
  let obj = {};
  obj[name] = value;
  vArray = vArray.filter((x) => x[name] == null);
  vArray.push( obj );
  vArray = JSON.stringify(vArray);
  window.localStorage.setItem("story-variables", vArray);
  let v = getAllUserVariables();
  console.log("story-variables stored: ", v);
}