import { storyJson } from "./storiesJSON.js";
import { getFinishedStories } from "./utilities.js";

let story = storyJson;
let completedStories = getFinishedStories();
numCompletedStories = 0; 
if (completedStories != null) {
  console.log("number of completed stories = ", completedStories.length);
  numCompletedStories = completedStories.length;
} else {
  console.log("this is the first story!");
}
if ((storyJson.length  <= numCompletedStories)) {
  console.log("All stories are complete");
} else {
  console.log("Starting into Story number " + story + 1);

}

//botBrain
export class BotLogic {
  constructor() {
    this.completedStories = getFinishedStories() || [];
    this.currentStory = this.completedStories.length;
    this.storyJson = storyJson;
    this.lastResponse = "";
    this.args = [];
    this.currentStep = 0; //should reflect numbered step we are on
  }
  init() {
    //check to see if there is a story available not filled out
    //get first story 
    //set this.currentStep
    //  give first response or respond default
  }
  takeInputAndRepsond(string) {
    this.lastResponse = string;
    this.args = string.split(" ");
    //check if given answer matches the requirements in the step
    this.checkAnswerAndStoreVariables(this.storyJson[this.currentStory].story[currentStep])
    //check for true, if true change step
    //check for true, if true pass back the next step, if false, pass back the step were just on
    
    //change step if necessary

    //respond to user
  }
  checkAnswerAndStoreVariables(step) { //return true if matches/variable stored (if necessary)
    for (let i = 0; i < step.expected.length; i++) {
      if (step.storedVariables != null && step.storedVariables.length == 1) {
        //Concat all arguments and check type/exact value now        
      } else if (step.storedVariables != null && step.storedVariables.length == this.args.length) {
        //Assign each arg into a variable and check all types/exact values now
      } else if (step.storedVariables != null && step.storedVariables.length != this.args.length) {
        //Return Default
      } else if (step.storedVariables == null) {
        //Check answer against types/exact answers expected
      } else {
        //Warning, this shouldn't ever happen
      }
    }
  }
  checkTypesOrExactMatch(expectedArray, given) {
    //check expectedArray against given
  }
  messageUser() {
    //message user using the ViewTexts.js
  }
}
//Keep track of stories completed
//Keep track of all storiesJSON
//Keep a variable for the last response of the user
//Create LocalHost variables for data given by the user
//advance through storyJSON
//Present to the user the 'bot response'