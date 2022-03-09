'use strict';

        var img = document.getElementById("myImage");
        var bild = new Image();
        bild.src = img.src;

        var lilaBild = new Image();
        lilaBild.src = "todoNM.png";

        img.addEventListener("mouseover", function(evt) {
        img.src = lilaBild.src;
    }, false);

        img.addEventListener("mouseout", function(evt) {
        img.src = bild.src;
    }, false);