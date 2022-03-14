'use strict';
window.onload = function () {
    document.getElementById("pssw2").addEventListener("click", function (e){
        let checkit = document.forms[0].passw2.value;
        let test = document.forms[0].passw.value;
        let x = document.getElementById("pssw2");
        let bb = document.createElement("img");
        if(checkit!==test){
           bb.setAttribute("src", "img/warn.png");
            x.parentNode.insertBefore(bb,x.nextElementSibling);
        } else{
            bb.setAttribute("src", "img/ok.png");
            x.parentNode.replaceChildren(bb,x.nextElementSibling);
            return false;
        }
    },false);
    document.forms[0].addEventListener("submit", function (e){
        var rgx = new RegExp(/^[a-z][a-z0-9]+@[a-z]{2,}.[a-z]{2,3}$/);
        var tester = rgx.test(document.forms[0].email.value);
        if(!tester){
            alert("Falsche Email");
            e.preventDefault();
            return false;
        }
        }, false);

    document.getElementById("bildImg").addEventListener("click", wechselDeutsch,false);

    function wechselDeutsch() {
        document.getElementById("bildImg").setAttribute("src", "img/english.jpg");
        formDeutsch();
    }

    function changeEnglish() {
        document.getElementById("bildImg").setAttribute("src", "img/german.jpg");
        formEnglish();
    }

    function formEnglish() {
        let legaendern = document.getElementsByTagName("legend")[1];
        legaendern.innerText = "User Data";
        let text0 = document.getElementsByTagName("label")[0];
        text0.innerText = "User name*";
        let text1 = document.getElementsByTagName("label")[1];
        text1.innerText = "Password*";
        let text2 = document.getElementsByTagName("label")[2];
        text2.innerText = "Retype password*";
        let text3 = document.getElementsByTagName("label")[3];
        text3.innerText = "First Name*";
        let text4 = document.getElementsByTagName("label")[4];
        text4.innerText = "Middle Name";
        let text5 = document.getElementsByTagName("label")[5];
        text5.innerText = "Last Name*";
        let text6 = document.getElementsByTagName("label")[6];
        text6.innerText = "Email*";
    }

    function formDeutsch() {
        let legaendern = document.getElementsByTagName("legend")[1];
        legaendern.innerText = "Benutzerdaten";
        let text0 = document.getElementsByTagName("label")[0];
        text0.innerText = "Benutzername*";
        let text1 = document.getElementsByTagName("label")[1];
        text1.innerText = "Passwort*";
        let text2 = document.getElementsByTagName("label")[2];
        text2.innerText = "Passwort wiederholen*";
        let text3 = document.getElementsByTagName("label")[3];
        text3.innerText = "Vorname*";
        let text4 = document.getElementsByTagName("label")[4];
        text4.innerText = "Zweitname";
        let text5 = document.getElementsByTagName("label")[5];
        text5.innerText = "Nachname*";
        let text6 = document.getElementsByTagName("label")[6];
        text6.innerText = "Email*";

        let xx = document.getElementById("bildImg").addEventListener("click", changeEnglish,false)
        if(xx) {
            return changeEnglish();
        }
    }
};