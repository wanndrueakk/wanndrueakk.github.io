var m = document.querySelector(".map");
var mb = document.querySelector(".map-modal");
var t =  document.querySelector("[id=text]");
var e =  document.querySelector("[id=email]");
var n =  document.querySelector("[id=name]");
var f =  document.querySelector("form");

m.addEventListener("click", function(event) {
    event.preventDefault();
    mb.classList.add("map-modal-show");
});
mb.addEventListener("click", function(event) {
    event.preventDefault();
    mb.classList.remove("map-modal-show");
});

f.addEventListener("submit", function(event) {
    if (!n.value || !e.value) {
        event.preventDefault();
        f.classList.add("modal-error");
    } else {
        console.log("sucess");
    }
});
