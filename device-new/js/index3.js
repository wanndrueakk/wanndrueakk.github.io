var m = document.querySelector(".column .map div");
var y = document.querySelector(".column .map div span:first-child");
var g = document.querySelector(".column .map div span:last-child");
var mb = document.querySelector(".map-modal");
var my = document.querySelector(".map-yandex");
var mg = document.querySelector(".map-google");
var t = document.querySelector("[id=text]");
var e = document.querySelector("[id=email]");
var n = document.querySelector("[id=name]");
var f = document.querySelector("form");

m.addEventListener("click", function (event) {
  event.preventDefault();
  mb.classList.add("map-modal-show");
});
mb.addEventListener("click", function (event) {
  event.preventDefault();
  mb.classList.remove("map-modal-show");
});
y.addEventListener("click", function (event) {
  event.preventDefault();
  my.classList.add("map-modal-show");
});
my.addEventListener("click", function (event) {
  event.preventDefault();
  my.classList.remove("map-modal-show");
});
g.addEventListener("click", function (event) {
  event.preventDefault();
  mg.classList.add("map-modal-show");
});
mg.addEventListener("click", function (event) {
  event.preventDefault();
  mg.classList.remove("map-modal-show");
});

f.addEventListener("submit", function (event) {
  if (!n.value || !e.value) {
    event.preventDefault();
    f.classList.add("modal-error");
  } else {
    console.log("sucess");
  }
});
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (mb.classList.contains("map-modal-show")) {
      mb.classList.remove("map-modal-show");
    } else if (my.classList.contains("map-modal-show")) {
      my.classList.remove("map-modal-show");
    } else if (mg.classList.contains("map-modal-show")) {
      mg.classList.remove("map-modal-show");
    }
  }
});
