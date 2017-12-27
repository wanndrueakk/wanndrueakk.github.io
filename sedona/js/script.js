var form = document.querySelector(".main-form");
var search = document.querySelector(".search-btn");

search.addEventListener("click", function(event) {
  event.preventDefault();
  form.classList.toggle("modal-show");
})


