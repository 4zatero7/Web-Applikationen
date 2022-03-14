`use strict`;
window.onload=function()
{
    document.getElementById("btn").addEventListener("click", function (evt) {
        // get user input from text inputs, '+' converts string value to numeric
        let weight = document.getElementById("gewicht").value;
        let height = document.getElementById("groesse").value;
        let bmi = (height > 0) ? weight / (height * height) : 0;
        document.getElementById("bmi").innerText = bmi.toFixed(2);
    }, false);

    document.forms[0].addEventListener("submit", function(e)
    {
        var rgx = new RegExp(/^[A-ZÄÖÜ][a-zäöüß]+\s+[A-ZÄÖÜ][a-zäöüß]+$/);
        var tester = rgx.test(document.forms[0].uname.value);
        if (!tester) {
            alert("Bitte Vor- und Nachnamen eingeben!");
            //preventDefault bricht das abseden ab
            e.preventDefault();
            return false;
        }

        var rgx2 = new RegExp(/<[^>]+>$/);
        var tester2 = rgx2.test(document.forms[0].anmerk.value);

        if (tester2) {
            alert("Kein HTML erlaubt!");
            e.preventDefault();
            return false;
        }

    },false);

    document.forms[0].btnBmiAjax.addEventListener("click", function (){
        var weight = +document.getElementById("gewicht").value;
        var height = +document.getElementById("groesse").value;

        var queryString = "https://vulcan.informatik.hs-fulda.de/bmiRechnerAjax.php?"
            + "gewicht=" + weight + "&groesse=" + height;
        var xhr = new XMLHttpRequest();

        xhr.open("get", queryString, true);
        xhr.send();

        xhr.onload = function() {
            document.getElementById("bmi").innerHTML = this.responseText;
        };
    },false);
};