document.getElementById("btnBmiAjax").addEventListener("click", function() {
    const w = +document.getElementById("gewicht").value;
    const h = +document.getElementById("groesse").value
    const query = `http://localhost:8080/?gewicht=${w}&groesse=${h}`;
    fetch(query).then(response => response.text())
        .then(data => document.getElementById("bmi").innerHTML = data);
}, false);