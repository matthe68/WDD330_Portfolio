import { TextsModel } from "./TextsModel.js";
import { updateTextHistory } from "./ViewTexts.js";

let textsModel = TextsModel();
let messages = textsModel.getTexts();
//display messages on screen
//TODO: display messages
updateTextHistory(textsModel.getTexts());

//listen for new messages
document.querySelector("#send-button").addEventListener('click', function() {
  let newMessage = document.querySelector("#input-text-box").innerHTML;
  textsModel.addText('user', newMessage);
  updateTextHistory(textsModel.getTexts());
  //display messages on screen
});
