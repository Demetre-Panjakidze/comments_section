import data from "../data.json" assert { type: "json" };

const edit_btns = document.querySelectorAll(".edit_btn");
edit_btns.forEach((x) => {
  x.addEventListener("click", () => {
    console.log("hi");
  });
});
