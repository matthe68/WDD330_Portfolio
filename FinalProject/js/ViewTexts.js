export function updateTextHistory(textsJson) {
  console.log("Inside updateTextHistory function");
  let messages = document.querySelector("#chat-history");
  messages.innerHTML = "";
  console.log("ViewTexts: textsJson: ", textsJson);
  if(textsJson.length > 0) {
    console.log("textsJson: ", textsJson);
    textsJson.forEach(function(m) {
      console.log("each object: ", m);
      let messageBlock = document.createElement("div");
      let message = document.createElement("div");
      if (m.person == 'user') {
        message.classList.add('user-chat');
      } else {
        message.classList.add('bot-chat');
      }
      message.innerHTML = m.message;
      messageBlock.classList.add('message-div');
      messageBlock.appendChild(message);
      messages.appendChild(messageBlock);
      messages.scrollTop = messages.scrollHeight;
    })
  }
}


/*
        <div class="message-div">
          <div class="bot-chat">Bot thing to say</div>
        </div>

        <div class="message-div">
          <div class="user-chat">Say something back</div>
        </div>
*/