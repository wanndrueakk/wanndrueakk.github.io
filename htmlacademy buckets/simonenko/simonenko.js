! function (e, t) {
  "use strict";
  var s = t.querySelector(".feedback"),
    a = s.querySelector("form"),
    n = a.querySelector("[type=submit]"),
    u = e.localStorage || !1,
    c = function () {
      n.disabled = !0, n.value = "Отправляется..."
    },
    r = function () {
      n.disabled = !0, n.value = "Отправить", a.querySelector("#message").value = ""
    },
    i = function () {};
  if (a.checkValidity && (i = function () {
      n.disabled = !a.checkValidity()
    }), u) {
    var o, l = a.querySelectorAll("[name]"),
      d = l.length,
      f = function (e) {
        var t = e.getAttribute("name");
        e.value = u.getItem(t) || "", e.onkeyup = function () {
          var s = e.value;
          s || (s = ""), u.setItem(t, s), i()
        }
      };
    for (o = 0; d > o; o++) f(l[o])
  }
  i(), a.onsubmit = function (t) {
    if (c(), u && u.removeItem("message"), e.FormData) {
      t.preventDefault();
      var n = new e.FormData(a),
        i = new e.XMLHttpRequest;
      i.open("post", a.getAttribute("action") + "?t=" + (new Date).getTime()), i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.onreadystatechange = function () {
        if (4 == i.readyState) {
          if (200 == i.status) {
            var e = JSON.parse(i.responseText);
            e.result === !0 && s.classList.add("success")
          }
          r()
        }
      }, i.send(n)
    }
  }, "classList" in s && s.querySelector("a.button").addEventListener("click", function (e) {
    e.preventDefault(), s.classList.contains("success") && s.classList.remove("success"), a.querySelector("#message").focus()
  }, !1)
}(window, document);
