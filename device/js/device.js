var m = document.querySelector(".column .map div");
var y = document.querySelector(".column .map div span:first-child");
var g = document.querySelector(".column .map div span:last-child");
var mb = document.querySelector(".map-modal");
var my = document.querySelector(".map-yandex");
var mg = document.querySelector(".map-google");
var form_modal = document.querySelector(".write-us");
var form_button = document.querySelector(".write-js");
var form_close = document.querySelector(".write-close-js");
var nickname = form_modal.querySelector("[name=name]");
var email = form_modal.querySelector("[name=email]");
var letter = form_modal.querySelector("[name=text]");
var storage_name = localStorage.getItem("name");
var storage_email = localStorage.getItem("email");


form_button.addEventListener("click", function (event) {
  event.preventDefault();
  form_modal.classList.add("map-modal-show");
  if (storage_name) {
    nickname.value = storage_name;
    if (storage_email) {
      email.value = storage_email;
      letter.focus();
    } else {
      email.focus();
    }
  } else {
    nickname.focus();
  }
  
});
form_close.addEventListener("click", function (event) {
  event.preventDefault();
  form_modal.classList.remove("map-modal-show");
  form_modal.classList.remove("modal-error");
});
form_modal.addEventListener("submit", function(event) {
  if (!nickname.value || !email.value || !text.value) {
    event.preventDefault();
    form_modal.classList.remove("modal-error");
    form_modal.offsetWidth = form_modal.offsetWidth;
    form_modal.classList.add("modal-error");
  } else {
    localStorage.setItem("name", nickname.value);
    localStorage.setItem("email", email.value);
  }
});

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
mb.addEventListener("click", function (event) {
  event.preventDefault();
  mb.classList.remove("map-modal-show");
});

form_modal.addEventListener("submit", function (event) {
  if (!nickname.value || !email.value) {
    event.preventDefault();
    form_modal.classList.add("modal-error");
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
    } else
    
    if (form_modal.classList.contains("map-modal-show")) {
      form_modal.classList.remove("map-modal-show");
      form_modal.classList.remove("modal-error");
    };

  }
});


