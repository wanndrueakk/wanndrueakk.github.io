//var link = document.querySelector(".login");
//var q = document.querySelector(".abs");
//var cl = document.querySelector(".close");
//var sh = document.querySelector(".shake");
var labl = document.querySelectorAll("label");
var i = document.querySelectorAll("input[name=color-toggle]");


//link.addEventListener("click", function(event) {
//
//    event.preventDefault();
//    q.classList.add("abs-show");
//
//});
//
//cl.addEventListener("click", function(event) {
//    event.preventDefault();
//    q.classList.remove("abs-show");
//    q.classList.remove("modal-error");
//
//})
//
//sh.addEventListener("click", function(event) {
//    event.preventDefault();
//    q.classList.add("modal-error");
//})
//

labl[0].addEventListener("click", function(event) {
    console.log("privet");
    localStorage.setItem("color-number",0);
});
labl[1].addEventListener("click", function(event) {
    console.log("privet");
    localStorage.setItem("color-number",1);
});
labl[2].addEventListener("click", function(event) {
    console.log("privet");
    localStorage.setItem("color-number",2);
});
labl[3].addEventListener("click", function(event) {
    console.log("privet");
    localStorage.setItem("color-number",3);
});
labl[4].addEventListener("click", function(event) {
    console.log("privet");
    localStorage.setItem("color-number",4);
});
labl[5].addEventListener("click", function(event) {
    console.log("privet");
    localStorage.setItem("color-number",5);
});
labl[6].addEventListener("click", function(event) {
    console.log("privet");
    localStorage.setItem("color-number",6);
});
labl[7].addEventListener("click", function(event) {
    console.log("privet");
    localStorage.setItem("color-number",7);
});
labl[8].addEventListener("click", function(event) {
    console.log("privet");
    localStorage.setItem("color-number",8);
});
labl[9].addEventListener("click", function(event) {
    console.log("privet");
    localStorage.setItem("color-number",9);
});
labl[10].addEventListener("click", function(event) {
    console.log("privet");
    localStorage.setItem("color-number",10);
});

window.addEventListener("load", function(event) {
    i[localStorage.getItem("color-number")].setAttribute("checked","checked");
});


//
//localStorage.setItem
//
//
