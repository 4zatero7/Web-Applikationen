"use strict";

window.addEventListener("load", function() {
    const btnBag = document.getElementById("container");

    for (var i = 0; i < 20; i++) {
        var btn = document.createElement('button');
        var txt = document.createTextNode("Button " + i);
        btn.appendChild(txt);
        btnBag.appendChild(btn);
    }

    function addHandlers(nodes) {
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].onclick = (function(c) {
                return function(evt) { alert(c); };
            })(i);
            nodes[i].onclick = function(evt) {
                alert(i);
            };
        }
    }

    addHandlers(btnBag.children);
}, false);
