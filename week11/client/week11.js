import { makeRequest } from "./authHelpers.js";
import Auth from "./auth.js";


// let response = await makeRequest('login', 'POST', {
//   password: 'user1',
//   email: 'user1@email.com'
//   }
// );
// let token = response.accessToken;
// console.log("its working just fine?: ", response);


const auth = new Auth();
let loginBtn = document.querySelector("#login-btn");
loginBtn.addEventListener('click', () => auth.login(getPosts));
console.log("finished setup");

async function getPosts() {
  try {
    console.log("auth.token: ", auth.token);
    const data = await makeRequest('posts', 'GET', null, auth.token);
    // make sure the element is shown
    document.getElementById('content').classList.remove('hidden');
    console.log(data);
    var ul = document.getElementById('list');
    ul.innerHTML = '';
    for (var i = 0; i < data.length; i++) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(data[i].title));
      ul.appendChild(li);
    }
  } catch (error) {
    // if there were any errors display them
    console.log(error);
  }
}
async function makeNewPost() {
  try {
    console.log("attempting to make a post now");
    let info = 
    {
      "title": document.querySelector("#title").value,
      "content": document.querySelector("#post-content").value,
      "userId": auth.user
    };
    const response = await makeRequest('posts', 'POST', info, auth.token);
  } catch (error) {
    console.log("new post error: ", error);
  }
}
document.querySelector("#add-post").addEventListener('click', makeNewPost);
