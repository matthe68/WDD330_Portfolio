import { TextsModel } from "./TextsModel.js";
import { updateTextHistory } from "./ViewTexts.js";
import { removeAllMessages } from "./utilities.js";

//TODO: REMOVE THE NEXT LINE WHEN IT IS READY TO BE LIVE!!!
removeAllMessages();

let navButtons = document.querySelectorAll("nav li");
let storiesTabButton = document.querySelector("#stories-nav");
let chatTabButton = document.querySelector("#chat-nav");
let storiesTab = document.querySelector("#stories-tab");
let chatTab = document.querySelector("#chat-history-tab");

[...navButtons].forEach((li) => {
  li.addEventListener('click', function(e) {
    console.log("inside nav click function");
    if (storiesTabButton.classList.contains("active-nav") && e.target.id == "chat-nav") {
      console.log("inside if");
      //show which tab is active
      storiesTabButton.classList.remove("active-nav");
      chatTabButton.classList.add("active-nav");
      //hide stories and display the chat
      chatTab.classList.remove("hidden");
      storiesTab.classList.add("hidden");
    } else if(chatTabButton.classList.contains("active-nav") && e.target.id == "stories-nav") {
      console.log("inside if else");
      //show which tab is active
      chatTabButton.classList.remove("active-nav");
      storiesTabButton.classList.add("active-nav");
      //hide stories and display the chat
      storiesTab.classList.remove("hidden");
      chatTab.classList.add("hidden");
    } else {
      console.log("Do Nothing");
    }
  })
});
var chatHistory = document.querySelector("#chat-history");
chatHistory.scrollTop = chatHistory.scrollHeight;

//===============================================================================

let textsModel = new TextsModel();
let messages = textsModel.getTexts();
console.log("messagesJson: ", messages);
//display messages on screen
//TODO: display messages
updateTextHistory(messages);

//listen for new messages
document.querySelector("#send-button").addEventListener('click', function() {
  let newMessage = document.querySelector("#input-text-box").innerHTML;
  textsModel.addText('user', newMessage);
  let newMessages = textsModel.getTexts();
  updateTextHistory(newMessages);
  chatHistory.scrollTop = chatHistory.scrollHeight;
  document.querySelector("#input-text-box").innerHTML = "";
  //display messages on screen
});
//===============================================================================