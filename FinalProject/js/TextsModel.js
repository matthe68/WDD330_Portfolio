import { getMessages, addMessage } from "./utilities.js";
export class TextsModel {
  constructor() {
    this.messages =  getMessages() || []
  }
  getTexts() {
    return this.messages;
  }
  addText(person, message) {
    addMessage(person, message);
    this.messages = getMessages();
  }
}