import { TextsModel } from "./TextsModel.js";
import { updateTextHistory } from "./ViewTexts.js";
import { removeAllMessages } from "./utilities.js";
import { BotLogic } from "./botLogic.js";
import { updateStories } from "./stories.js";

//TODO: REMOVE THE NEXT LINE WHEN IT IS READY TO BE LIVE!!!
removeAllMessages();

let navButtons = document.querySelectorAll("nav li");
let storiesTabButton = document.querySelector("#stories-nav");
let chatTabButton = document.querySelector("#chat-nav");
let storiesTab = document.querySelector("#stories-tab");
let chatTab = document.querySelector("#chat-history-tab");

[...navButtons].forEach((li) => {
  li.addEventListener('click', function(e) {
    if (storiesTabButton.classList.contains("active-nav") && e.target.id == "chat-nav") {
      //show which tab is active
      storiesTabButton.classList.remove("active-nav");
      chatTabButton.classList.add("active-nav");
      //hide stories and display the chat
      chatTab.classList.remove("hidden");
      storiesTab.classList.add("hidden");
    } else if(chatTabButton.classList.contains("active-nav") && e.target.id == "stories-nav") {
      //show which tab is active
      chatTabButton.classList.remove("active-nav");
      storiesTabButton.classList.add("active-nav");
      //hide stories and display the chat
      storiesTab.classList.remove("hidden");
      chatTab.classList.add("hidden");
    }
  })
});
let chatHistory = document.querySelector("#chat-history");
chatHistory.scrollTop = chatHistory.scrollHeight;

//===============================================================================

let textsModel = new TextsModel();
let bot = new BotLogic();
bot.init(textsModel);
let messages = textsModel.getTexts();
//display messages on screen
//TODO: display messages
updateTextHistory(messages);
updateStories();

//listen for new messages
document.querySelector("#send-button").addEventListener('click', function() {
  let newMessage = document.querySelector("#input-text-box").innerHTML;
  newMessage = newMessage == null ? " " : newMessage == undefined ? " " : newMessage;
  console.log("newMessage: ", newMessage);
  textsModel.addText('user', newMessage);
  let newMessages = textsModel.getTexts();
  updateTextHistory(newMessages);
  chatHistory.scrollTop = chatHistory.scrollHeight;
  document.querySelector("#input-text-box").innerHTML = "";
  bot.takeInputAndRepsond(newMessage);
  //display messages on screen
});
document.querySelector("#input-text-box").addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    let newMessage = document.querySelector("#input-text-box").innerHTML;
    newMessage = newMessage == null ? " " : newMessage == undefined ? " " : newMessage;
    console.log("newMessage: ", newMessage);
    textsModel.addText('user', newMessage);
    let newMessages = textsModel.getTexts();
    updateTextHistory(newMessages);
    chatHistory.scrollTop = chatHistory.scrollHeight;
    document.querySelector("#input-text-box").innerHTML = "";
    bot.takeInputAndRepsond(newMessage);
    return false;
  }
  //display messages on screen
});
//===============================================================================