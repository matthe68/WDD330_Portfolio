const commentUI = `<div class="addComment">
<h2>Add a comment</h2>
<input type="text" id="commentEntry" />
<button id="commentSubmit">Comment</button>
</div>
<h2>Comments</h2>
<ul class="comments"></ul>`;
// I only had one function for the view...so I chose not to use an object or class.
function renderCommentList(element, comments) {
  // clear out any comments that might be listed
  element.innerHTML = '';
  // add the new list of comments
  comments.forEach(el => {
    let item = document.createElement('li');
    item.innerHTML = `
            ${el.name}: ${el.comment}
      `;

    element.appendChild(item);
  });
}

export class Model {
  constructor(type) {
      this.type = type;
      this.listOfComments = JSON.parse(window.localStorage.getItem(this.type)) || [];
  }
  addNewComment(hikeName, comment) {
    let newComment = {
        "name": hikeName,
        "date": new Date(),
        "content": comment
    };
    this.listOfComments.push(newComment);
    window.localStorage.setItem(this.type, JSON.stringify(this.listOfComments));
  }
  getComments(type = null) {
    if (type === null) {
      return this.listOfComments;
    }
    else {
        return this.listOfComments.filter(el => el.name === type)
    }
  }
}
export class Comments {
    constructor(type, commentElementId) {
      this.type = type;
      this.commentElementId = commentElementId;
      this.model = new Model(this.type);
    }
  
    addSubmitListener(postName) {
      document.getElementById('commentSubmit').ontouchend = () => {
        this.model.addComment(
          postName,
          document.getElementById('commentEntry').value
        );
        document.getElementById('commentEntry').value = '';
        this.showCommentList(postName);
      };
    }
    showCommentList(q = null) {
      try {
        const parent = document.getElementById(this.commentElementId);
        if (!parent) throw new Error('comment parent not found');
        if (parent.innerHTML === '') {
          parent.innerHTML = commentUI;
        }
        if (q !== null) {
          document.querySelector('.addComment').style.display = 'block';
          this.addSubmitListener(q);
        } else {
          document.querySelector('.addComment').style.display = 'none';
        }
        let comments = this.model.getComments(q);
        if (comments === null) {
          comments = [];
        }
        renderCommentList(parent.lastChild, comments);
      } catch (error) {
        console.log(error);
      }
    }
  }

