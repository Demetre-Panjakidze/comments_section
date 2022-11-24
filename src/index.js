import data from '../data.json' assert { type: 'json' };

let main = document.querySelector(".main-part");
data.comments.forEach((x) => {
  main.innerHTML += `
  <div class="comment" id=${x.id}>
    <div class="left">
      <button class="up_btn">
        <img src="./images/icon-plus.svg" alt="upvote icon" class="plus">
      </button>
      <span class="result">${x.score}</span>
      <button class="down_btn">
        <img src="./images/icon-minus.svg" alt="downvote icon" class="minus">
      </button>
    </div>
    <div class="right">
      <div class="top">
        <div class="top_left">
          <img src=${x.user.image.png} alt="image of one of the users">
          <span class="first_name">${x.user.username}</span>
          <span class="first_date">${x.createdAt}</span>
        </div>
        <div class="top_right">
          <button class="reply_btn" id="reply_btn">
            <img src="./images/icon-reply.svg" alt="reply icon">
            <span class="reply_txt">Reply</span>
          </button>
        </div>
      </div>
      <div class="bottom">
        <p class="text">${x.content}</p>
      </div>
    </div>
  </div>
  `;
  localStorage.setItem(x.id, x.score);

  if (x.replies.length != 0) {
    x.replies.forEach((y) => {
      if (y.user.username == "ramsesmiron") {
        main.innerHTML +=
        `<div class="comment reply-comment" id=${y.id}>
          <div class="left">
            <button class="up_btn">
              <img src="./images/icon-plus.svg" alt="upvote icon" class="plus">
            </button>
            <span class="result">${y.score}</span>
            <button class="down_btn">
              <img src="./images/icon-minus.svg" alt="downvote icon" class="minus">
            </button>
          </div>
          <div class="right">
            <div class="top">
              <div class="top_left">
                <img src=${y.user.image.png} alt="image of one of the users">
                <span class="first_name">${y.user.username}</span>
                <span class="first_date">${y.createdAt}</span>
              </div>
              <div class="top_right">
                <button class="reply_btn">
                  <img src="./images/icon-reply.svg" alt="reply icon">
                  <span class="reply_txt">Reply</span>
                </button>
              </div>
            </div>
            <div class="bottom">
              <p class="text"><span style="color: hsl(238, 40%, 52%); font-weight: 900">@${y.replyingTo}</span> ${y.content}</p>
            </div>
          </div>
        </div>`
        localStorage.setItem(y.id, y.score);
      } else {
        main.innerHTML +=
        `<div class="comment reply-comment" id="my_comment">
          <div class="left">
            <button class="up_btn" id="up_btn">
              <img src="./images/icon-plus.svg" alt="upvote icon" class="plus">
            </button>
            <span class="result">${y.score}</span>
            <button class="down_btn" id="down_btn">
              <img src="./images/icon-minus.svg" alt="downvote icon" class="minus">
            </button>
          </div>
          <div class="right">
            <div class="top">
              <div class="top_left">
                <img src=${y.user.image.png} alt="image of one of the users">
                <span class="first_name">${y.user.username}</span>
                <div class="you" style="
                width: 40px; height: 22px; border-radius: 3px;
                background-color: hsl(238, 40%, 52%); margin: 0 0 0 10px;
                display: flex; align-items: center; 
                justify-content: center">
                  <span class="you_txt" style="color: #FFF; font-size: 14px">you</span>
                </div>
                <span class="first_date">${y.createdAt}</span>
              </div>
              <div class="top_right">
                <button class="delete_btn" id="delete_btn" style="margin: 0 15px 0 0">
                  <img src="./images/icon-delete.svg" alt="reply icon">
                  <span id="delete_txt" style="color: hsl(358, 79%, 66%)">Delete</span>
                </button>
                <button class="edit_btn">
                  <img src="./images/icon-edit.svg" alt="reply icon">
                  <span id="edit_txt">Edit</span>
                </button>
              </div>
            </div>
            <div class="bottom">
              <p class="text"><span style="color: hsl(238, 40%, 52%); font-weight: 900">@${y.replyingTo}</span> ${y.content}</p>
            </div>
          </div>
        </div>`
        localStorage.setItem(y.id, y.score);
        const like_comment = document.getElementById("up_btn");
        const dislike_comment = document.getElementById("down_btn");
        like_comment.disabled = true;
        dislike_comment.disabled = true;
      }
    });
  };
});

main.innerHTML += 
  `<div class="type_comment" id="type_comment">
    <img src=${data.currentUser.image.png} alt="an image of the main user">
    <textarea placeholder="Add a comment..." id="txt_input"></textarea>
    <button id="send_btn">SEND</button>
  </div>`
;

