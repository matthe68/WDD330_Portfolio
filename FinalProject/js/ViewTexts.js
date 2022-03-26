export function updateTextHistory(textsJson) {
  let messages = document.querySelector("#chat-history");
  messages.innerHTML = "";
  if(textsJson.length > 0) {
    textsJson.forEach(function(m) {
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