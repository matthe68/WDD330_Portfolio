import { getFinishedStories } from "./utilities.js";
import { storyJson } from "./storiesJSON.js";
import { getAllUserVariables } from "./utilities.js";

export function updateStories() {
  let stories = getFinishedStories();
  let storiesTab = document.querySelector("#stories-tab");
  while ( storiesTab.firstChild ) {
    storiesTab.removeChild(storiesTab.firstChild);
  }
  for (let i = 0; i < stories.length; i++) {
    console.log("1 finished story: ", stories[i]);
    let thisStory = storyJson.filter(json => json.storyName == stories[i].storyName)[0];

    let story = document.createElement('div');
    story.classList.add("story");

    let header = document.createElement('div');
    header.classList.add("story-header");
    let storyName = document.createElement('span');
    storyName.innerHTML = stories[i].storyName;
    let storyDate = stories[i].date;
    let storyDateSpan = document.createElement('span');
    storyDateSpan.innerHTML = storyDate;
    header.appendChild(storyName);
    header.appendChild(storyDateSpan);
    story.appendChild(header);

    let expandedStory = document.createElement('div');
    expandedStory.classList.add('expanded-story');
    expandedStory.classList.add('hidden');

    for (let j = 0; j < thisStory.storyFormat.length; j++) {
      console.log("inside ADD STORY EXPANSION");
      let br = document.createElement('hr');
      if ( j == 0 ) {
        expandedStory.appendChild(br);
      }
      let container = document.createElement('div');
      let span1 = document.createElement('span');
      let span2 = document.createElement('span');
      let b = document.createElement('b');
      b.innerHTML = thisStory.storyFormat[j].attribute + ": ";
      span1.appendChild(b);
      span2.innerHTML = insertStoredVariables("[" + thisStory.storyFormat[j].storedVariable + "]");
      container.appendChild(span1);
      container.appendChild(span2);
      expandedStory.appendChild(container);
    }
    story.appendChild(expandedStory);

    storiesTab.appendChild(story);
  }
  if ( stories.length == 0 ) {
    let emptyMessage = document.createElement('div');
    emptyMessage.classList.add("empty-message");
    emptyMessage.innerHTML = 'You don\'t have any stories yet, go to the chat tab to start your first!';
    storiesTab.appendChild(emptyMessage);
  } else {
    let s = document.querySelectorAll(".story");
    [...s].forEach((i) => 
      {
        i.addEventListener('click', 
        function(e) {
          let target = e.target;
          while (!target.classList.contains("story")) {
            target = target.parentNode;
          }
          let alreadyHidden = target.querySelector(".expanded-story").classList.contains("hidden");
          [...s].forEach((i) => {
            i.querySelector(".expanded-story").classList.add("hidden");
          });
          if (alreadyHidden) {
            console.log("inside already hidden");
            target.querySelector(".expanded-story").classList.remove("hidden");
          } else {
            console.log("not hidden");
          }
        });
      }
    );
  }
}
// export function insertStoredVariables(message) {
//   if (message.match("\\[.*]")) {
//     let vToReplace = message.match("\\[.*]");
//     let vName = vToReplace[0].replace("[", "").replace("]", "");
//     let vValue;
//     let vArray = getAllUserVariables();
//     for (let i = 0; i < vArray.length; i++) {
//       if (Object.keys(vArray[i])[0] == vName) {
//         vValue = Object.values(vArray[i])[0]
//       }
//     }
//     return message.replace(vToReplace[0], vValue);
//   }
export function insertStoredVariables(message) {
  if (message.match("\\[.*?]")) {
    let vList = getListOfVariablesToReplace(message);
    for (let i = 0; i < vList.length; i++) {
      let vName = vList[i].replace("[", "").replace("]", "");
      let vValue;
      let vArray = getAllUserVariables();
      for (let j = 0; j < vArray.length; j++) {
        if (Object.keys(vArray[j])[0] == vName) {
          vValue = Object.values(vArray[j])[0]
          message = message.replace(vList[i], vValue);
        }
      }
    }
  }
  return message;
}
function getListOfVariablesToReplace(message) {
  let regExp = "\\[.*?]";
  let list = [...message.matchAll(regExp)].flat();
  return list;
}