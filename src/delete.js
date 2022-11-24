//-----------------------------------------------
const background = document.getElementById("background");//background of the div which pops up
const delete_container = document.getElementById("delete_container");//div which pops up

const delete_btn = document.getElementById("delete_btn");//button which deletes comment

const cancel_btn = document.getElementById("cancel_btn");//button which cancels the deleting proccess
 
const do_delete_btn = document.getElementById("do_delete_btn");//button which finishes the deleting proccess
//-----------------------------------------------

//-----------------------------------------------
delete_btn.addEventListener("click", () => {
  background.style.display = "block";
});//when user clicks 'delete comment' a div pops up.

//cancel_btn:
cancel_btn.addEventListener("click", () => {
  background.style.display = "none";
});//if cancel is clicked remove this div.

//do_delete_btn:
do_delete_btn.addEventListener("click", () => {
});
//-----------------------------------------------

cancel_btn.style.cursor = "pointer";
do_delete_btn.style.cursor = "pointer";