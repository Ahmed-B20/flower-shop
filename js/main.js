// start navbar
let btn = document.getElementById("toggle");
let nav = document.querySelector(".navbar");
let a = document.querySelectorAll(".one");

a.forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".one.active").classList.remove("active");
    e.classList.add("active");
  });
});

btn.addEventListener("click", () => {
  btn.classList.toggle("fa-times");
  nav.classList.toggle("active");
});

window.onscroll = function () {
  btn.classList.remove("fa-times");
  nav.classList.remove("active");
};
// end navbar
