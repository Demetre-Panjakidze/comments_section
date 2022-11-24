const like = document.querySelectorAll(".up_btn"); //HTMLCollection(4) [button.up_btn, button.up_btn, button.up_btn, button.up_btn]
const dislike = document.getElementsByClassName("down_btn"); //[button.down_btn, button.down_btn, button.down_btn, button.down_btn]
const result = document.getElementsByClassName("result"); //HTMLCollection(4) [span.result, span.result, span.result, span.result]

for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", () => {
    result[i].textContent++;
    like[i].disabled = true;
    dislike[i].disabled = false;
  });
}

for (let i = 0; i < dislike.length; i++) {
  dislike[i].addEventListener("click", () => {
    result[i].textContent--;
    dislike[i].disabled = true;
    like[i].disabled = false;
  });
}

// Array.from(like).forEach((x) => {
//   x.addEventListener("click", () => {
//     result[i].textContent++;
//     like[i].disabled = true;
//     dislike[i].disabled = false;
//   }))
// })