import data from "../data.json" assert { type: "json" };

const send = document.getElementById("send_btn");
//send button
const text = document.getElementById("txt_input");
//text input
const commenting = document.getElementById("type_comment");
//div where you type comment text and then send it

let comment_number = 0;
const comments_add = [];
const comments_delete = [];

send.addEventListener("click", () => {
  if (text && text.value) {
    comment_number++;
    comments_add.push(`comment-${comment_number}`);
    comments_delete.push(`delete-${comment_number}`);
    localStorage.setItem("text", text.value);
    commenting.insertAdjacentHTML(
      "beforeBegin",
      `<div class="comment added_comment" id="comment-${comment_number}">
        <div class="left">
          <button class="up_btn">
            <img src="./images/icon-plus.svg" alt="upvote icon" class="plus">
          </button>
          <span class="result">0</span>
          <button class="down_btn">
            <img src="./images/icon-minus.svg" alt="downvote icon" class="minus">
          </button>
        </div>
        <div class="right">
          <div class="top">
            <div class="top_left">
              <img src=${
                data.currentUser.image.png
              } alt="image of the main user">
              <span class="first_name">${data.currentUser.username}</span>
              <div class="you" style="
              width: 40px; height: 22px; border-radius: 3px;
              background-color: hsl(238, 40%, 52%); margin: 0 0 0 10px;
              display: flex; align-items: center; 
              justify-content: center">
                <span class="you_txt" style="color: #FFF; font-size: 14px">you</span>
              </div>
              <span class="first_date">seconds ago</span>
            </div>
            <div class="top_right">
              <button class="delete_btn" id="delete-${comment_number}" style="margin: 0 15px 0 0">
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
            <p class="text">${localStorage.getItem("text")}</p>
          </div>
        </div>
      </div>`
    );
    localStorage.removeItem("text");
    text.value = "";
  }

  const delete_container = document.getElementById("delete_container");
  //div which pops up
  const cancel_btn = document.getElementById("cancel_btn"); //button which cancels the deleting proccess
  const do_delete_btn = document.getElementById("do_delete_btn"); //button which finishes the deleting proccess

  comments_delete.forEach((x) => {
    const x_btn = document.getElementById(x);
    x_btn.addEventListener("click", () => {
      background.style.display = "block";
    });
  }); //if delete button is pressed pop up a div.

  cancel_btn.addEventListener("click", () => {
    background.style.display = "none";
  }); //cancel process of deleting
});
