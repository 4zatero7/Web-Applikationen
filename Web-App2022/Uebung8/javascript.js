'use strict';

window.onload = function() {
    let x = document.getElementById("loadBtn");
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", "mitglieder.json", true);
    xhr.send();
    xhr.onload = function () {
        let obj = this.response;
        if(obj) {
           x.addEventListener("click", function (){
               showMember(obj);
           }, false);
        }
    };
};


function showMember(obj) {
    let root = loadBtn.parentNode;

    // delete load button
    root.removeChild(loadBtn);

    // set list description visible
    document.getElementById("grp").style.display = "block";

    let table = document.createElement("table");
    table.setAttribute("cellpadding", "5");

    let tr = document.createElement("tr");
    table.appendChild(tr);

    let td, txt, btn;
    let key, value;

    // get first entry from json file
    let entry = obj[0];

    // create table header first (using keys of first entry)
    for (key in entry) {
        td = document.createElement("td");
        tr.appendChild(td);
        txt = document.createTextNode(key);
        td.appendChild(txt);
    }

    // add last column: "Gruppe"
    td = document.createElement("td");
    tr.appendChild(td);
    txt = document.createTextNode("Gruppe");
    td.appendChild(txt);

    // iterate over all entries in json file and add data
    for (let i=0; i<obj.length; i++) {
        // first, create new row for each new entry

        tr = document.createElement("tr");
        table.appendChild(tr);
        // get entry/object at current array position

        entry = obj[i];
        // iterate over all members of current entry

        for (key in entry) {
            value = entry[key];

            td = document.createElement("td");
            tr.appendChild(td);
            txt = document.createTextNode(value);
            td.appendChild(txt);
        }
        // finally, add both buttons
        td = document.createElement("td");
        tr.appendChild(td);

        // "add" button
        btn = document.createElement("input");
        btn.setAttribute("type", "button");
        btn.setAttribute("value", "Add");
        td.appendChild(btn);

    }
    root.appendChild(table);
}