var labl = document.querySelectorAll("label:not(.slide-label)");
var i = document.querySelectorAll("input[name=color-toggle]");
var asi = document.querySelector("aside");
var nava = document.querySelectorAll("header nav ul li a")

nava[0].addEventListener("click", function(event) {
    nava[0].classList.add("active");  
    nava[1].classList.remove("active");  
    nava[2].classList.remove("active");  
});
nava[1].addEventListener("click", function(event) {
    nava[1].classList.add("active");  
    nava[0].classList.remove("active");  
    nava[2].classList.remove("active");  
});
nava[2].addEventListener("click", function(event) {
    nava[2].classList.add("active");  
    nava[1].classList.remove("active");  
    nava[0].classList.remove("active");  
});


labl[0].addEventListener("click", function(event) {
    localStorage.setItem("color-number",0);
});
labl[1].addEventListener("click", function(event) {
    localStorage.setItem("color-number",1);
});
labl[2].addEventListener("click", function(event) {
    localStorage.setItem("color-number",2);
});
labl[3].addEventListener("click", function(event) {
    localStorage.setItem("color-number",3);
});
labl[4].addEventListener("click", function(event) {
    localStorage.setItem("color-number",4);
});
labl[5].addEventListener("click", function(event) {
    localStorage.setItem("color-number",5);
});
labl[6].addEventListener("click", function(event) {
    localStorage.setItem("color-number",6);
});
labl[7].addEventListener("click", function(event) {
    localStorage.setItem("color-number",7);
});
labl[8].addEventListener("click", function(event) {
    localStorage.setItem("color-number",8);
});
labl[9].addEventListener("click", function(event) {
    localStorage.setItem("color-number",9);
});
labl[10].addEventListener("click", function(event) {
    localStorage.setItem("color-number",10);
});

window.addEventListener("load", function(event) {
    var n = localStorage.getItem("color-number"); 
    i[n].setAttribute("checked","checked");
});

window.addEventListener("keydown", function(event) {
    if(event.keyCode === 27 ) {
        console.log ("esc");
        if(asi.classList.contains("hide")) {
            asi.classList.remove("hide");
        } else {
            asi.classList.add("hide");
        }
    }
});