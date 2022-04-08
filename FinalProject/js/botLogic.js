import { storyJson } from "./storiesJSON.js";
import { getFinishedStories, setUserVariable, getAllUserVariables, setFinishedStory } from "./utilities.js";
import { updateTextHistory } from "./ViewTexts.js";
import { updateStories } from "./stories.js";
import { insertStoredVariables } from "./stories.js";

export class BotLogic {
  constructor() {
    this.completedStories = getFinishedStories() || [];
    this.currentStory = this.completedStories.length;
    this.storyJson = storyJson;
    this.lastResponse = "";
    this.currentStep = ""; //JSON of the step we are on in the story
    this.currentStepDigit = ""; //Digit, will refer to the place of the json in the array "storyStep"
    this.textsModel;
    this.storyEnded = false;
    console.log("storyJson: ", storyJson);
  }
  init(textsModel = null) {
    console.log("init Start: ", storyJson);
    console.log("inside BotLogic: init()");
    this.completedStories = JSON.parse(JSON.stringify(getFinishedStories())) || [];
    console.log("completedStories: ", this.completedStories, "JSON: ", this.storyJson);
    this.currentStory = this.completedStories.length;
    console.log("set length: JSON: ", this.storyJson);
    this.storyJson = JSON.parse(JSON.stringify(storyJson));
    console.log("reset storyJson: JSON: ", this.storyJson);
    this.lastResponse = "";
    this.textsModel = textsModel == null ? this.textsModel : textsModel;
    console.log("WE ARE ON STORY NUMBER: ", this.currentStory);
    console.log("%%%%%%%%%%%%%%% this.storyJson", this.storyJson);
    // bot sets the current step to be: this.storyJson[this.currentStory].storyStep[0]
    if (this.storyJson[this.currentStory] != undefined) {
      this.currentStep = this.storyJson[this.currentStory].storyStep[0];
      this.currentStepDigit = 0;
      this.storyEnded = false;
      console.log("current Step: ", this.currentStep);
      this.sendResponseToUser(this.currentStep.botResponse);
    } else {
      this.sendResponseToUser("I'm sorry, there are no more stories for you to do at this time. Please come back soon, I'm constantly adding new stories and should have more content available soon!");
    }
    console.log("init End: ", storyJson);
  }
  takeInputAndRepsond(string) {
    console.log("takeInputAndRepsond Start: ", storyJson);
    console.log("Inside of takeInputAndRespond in the BotLogic");
    if (this.storyEnded && string != "BEGIN") {
      this.sendResponseToUser("If you would like to start the next story, please type \"BEGIN\" in all caps.");
    } else if (this.storyEnded && string == "BEGIN") {
      this.init();
    } else {
      this.lastResponse = string;
      //check if given answer matches the requirements: returns -1 if false or the path number
      let path = this.checkAnswerAndStoreVariables(this.storyJson[this.currentStory].storyStep[this.currentStepDigit])
      //check for true, if true change step
      if ( path == -1 ) {
        this.sendResponseToUser(this.currentStep.default);
      } else if ( path == -2) {
        this.sendResponseToUser("You have quit the current story. If you'd like to try again type \"BEGIN\" in all caps.")
      } else {
        this.lastResponse = "";
        this.currentStepDigit = path;
        this.currentStep = this.storyJson[this.currentStory].storyStep[path]; //JSON of the step we are on in the story
        
        this.sendResponseToUser(this.currentStep.botResponse);
      }
    }   
    console.log("takeInputAndRepsond End: ", storyJson); 
  }
  checkAnswerAndStoreVariables(step) { //return true if matches/variable stored (if necessary)
    console.log("checkAnswerAndStoreVariables Start: ", storyJson);
    let r = -1;
    if (this.lastResponse == "QUIT") {
      this.quitCurrentStory();
      r = -2;
    } else {
      if (step == null || step == undefined) {
        return -1;
      }
      for (let i = 0; i < step.expected.length; i++) {
        r = (step.expected[i].answer == 'y' && ( this.lastResponse.toLowerCase() == 'y' || this.lastResponse.toLowerCase() == 'yes')) ? step.expected[i].path : 
            (step.expected[i].answer == 'n' && ( this.lastResponse.toLowerCase() == 'n' || this.lastResponse.toLowerCase() == 'no')) ? step.expected[i].path : 
            r;
        if (step.expected[i].answer == "[STRING]" && this.lastResponse.toString().length > 0 && step.storedVariable) {
          setUserVariable(step.storedVariable, this.lastResponse.toString(), this.storyJson.storyName);
          r = step.expected[i].path;
        } else if (step.expected[i].answer == "[DATE]") {
          let isDate = this.validateDate(this.lastResponse.toString());
          if ( isDate ) {
            setUserVariable(step.storedVariable, this.lastResponse.toString(), this.storyJson.storyName);
          }
          r = isDate ? step.expected[i].path : r;
        } else if (step.expected[i].answer == "[Number]") {
          let isNumber = !isNaN(this.lastResponse);
          console.log("last response: ", this.lastResponse, " isNumber: ", isNumber);
          if ( isNumber ) {
            setUserVariable(step.storedVariable, this.lastResponse.toString(), this.storyJson.storyName);
          }
          r = isNumber ? step.expected[i].path : r;
        }
      }
      //check for end of story
      let endOfStory = false;
      if (this.storyJson[this.currentStory] && this.storyJson[this.currentStory].storyStep[r] && this.storyJson[this.currentStory].storyStep[r].expected) {
        endOfStory = this.storyJson[this.currentStory].storyStep[r].expected.length == 0;
      }
      if (endOfStory) {
        this.endCurrentStory();
      }
    }
    console.log("checkAnswerAndStoreVariables End: ", storyJson);
    return r;
  }
  sendResponseToUser(newMessage) {
    console.log("sendResponseToUser Start: ", storyJson);
    let m = insertStoredVariables(newMessage);
    this.textsModel.addText('bot', m);
    let newMessages = this.textsModel.getTexts();
    updateTextHistory(newMessages);
    let chatHistory = document.querySelector("#chat-history");
    chatHistory.scrollTop = chatHistory.scrollHeight;
    console.log("sendResponseToUser End: ", storyJson);
  }
  endCurrentStory() {
    console.log("endCurrentStory Start: ", storyJson);
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let today = `${month}/${day}/${year}`;
    console.log("this.storyJson[this.currentStory].storyName: ", storyJson[this.currentStory].storyName, " story Number: ", this.currentStory);
    console.log("this.storyJson: ", storyJson);
    setFinishedStory(storyJson[this.currentStory].storyName, today);
    this.storyEnded = true;
    updateStories();
    console.log("endCurrentStory End: ", storyJson);
  }
  quitCurrentStory() {
    this.storyEnded = true;
  }
  validateDate(testdate) {
    let date_regex = /^([0]?[1-9]|[1][0-2])[./-]([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0-9]{4}|[0-9]{2})$/ ;
    let isDate = testdate.match(date_regex);
    return isDate;
  }
}
