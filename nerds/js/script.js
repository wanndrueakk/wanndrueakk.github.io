var fb = document.querySelector(".map-btn");
var form = document.querySelector(".feedback");
var cls = form.querySelector(".close");

fb.addEventListener("click", function(event) {
  event.preventDefault();
  form.classList.add("modal-show");
});

