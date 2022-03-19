document.getElementById("btnBmiAjax").addEventListener("click", function() {
    const w = +document.getElementById("gewicht_id").value;
    const h = +document.getElementById("groesse_id").value
    const query = `http://localhost:8080/?namegewicht=${w}&namegroesse=${h}`;
    fetch(query).then(response => response.text())
        .then(data => document.getElementById("bmi").innerHTML = data);
}, false);