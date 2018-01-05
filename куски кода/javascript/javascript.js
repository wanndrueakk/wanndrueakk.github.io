    var link = document.querySelector(".login");
    var q = document.querySelector(".abs");
    var cl = document.querySelector(".close");
    var sh = document.querySelector(".shake");
    
    link.addEventListener("click", function(event) {

        event.preventDefault();
        q.classList.add("abs-show");

    });
    
    cl.addEventListener("click", function(event) {
        event.preventDefault();
        q.classList.remove("abs-show");
        q.classList.remove("modal-error");

    })
    
    sh.addEventListener("click", function(event) {
        event.preventDefault();
        q.classList.add("modal-error");
    })

    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (q.classList.contains("modal-error")) {
                q.classList.remove("modal-error");
            }
        }
    });