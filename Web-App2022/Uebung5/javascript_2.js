`use strict`;

document.getElementById("btn").addEventListener("click", function(evt) {
    // get user input from text inputs, '+' converts string value to numeric
    let weight = document.getElementById("gewicht").value;
    let height = document.getElementById("groesse").value;
    let bmi = (height > 0) ? weight / (height * height) : 0;
    document.getElementById("bmi").innerText = bmi.toFixed(2);
}, false);
