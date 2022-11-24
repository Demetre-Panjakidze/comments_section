import data from "../data.json" assert { type: "json" };

const reply_btns = document.querySelectorAll(".reply_btn");

reply_btns.forEach((x) => {
  x.addEventListener("click", () => {
    const desired_element =
      x.parentElement.parentElement.firstElementChild.firstElementChild
        .nextElementSibling;
    const name_of_user = desired_element.textContent;
    const post = x.closest(".comment");
    const comment_content = `
    <div class="type_comment reply_comment" id="type_comment" style="margin: 0 0 10px">
      <img src=${data.currentUser.image.png} alt="an image of the main user">
      <textarea id="reply_input">@${name_of_user}, </textarea>
      <button class="inner_reply_btn">REPLY</button>
    </div>`;
    post.insertAdjacentHTML("afterend", comment_content);

    const reply = document.querySelectorAll(".inner_reply_btn");
    const txt = document.getElementById("reply_input");

    reply.forEach((x) /*reply btns which sends the reply*/ => {
      x.addEventListener("click", () => {
        if (txt && txt.value) {
          const desired_username = txt.value.slice(
            3 + name_of_user.length,
            txt.value.length
          );
          localStorage.setItem("reply", txt.value);
          const comments_added = document.querySelectorAll(".reply_comment");
          comments_added.forEach((y) => {
            y.remove();
            const comment_box = `
            <div class="comment reply-comment" id="my_comment">
              <div class="left">
                <button class="up_btn" id="up_btn">
                  <img src="./images/icon-plus.svg" alt="upvote icon" class="plus">
                </button>
                <span class="result">0</span>
                <button class="down_btn" id="down_btn">
                  <img src="./images/icon-minus.svg" alt="downvote icon" class="minus">
                </button>
              </div>
              <div class="right">
                <div class="top">
                  <div class="top_left">
                    <img src=${data.currentUser.image.png} alt="image of one of the users">
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
                  <p class="text"><span style="color: hsl(238, 40%, 52%); font-weight: 900">@${name_of_user}</span> ${desired_username}</p>
                </div>
              </div>
            </div>
            `;
            localStorage.removeItem("reply");
            post.nextElementSibling.insertAdjacentHTML(
              "beforebegin",
              comment_box
            );
          });
        }
      });

      const edit_btns = document.querySelectorAll(".edit_btn");
      edit_btns.forEach((a) => {
        a.addEventListener("click", () => {
          console.log("hi");
        });
      });
    });
  });
});
