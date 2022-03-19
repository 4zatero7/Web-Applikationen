document.getElementById("sub").addEventListener("click", function() {
    const n = +document.getElementById("name_id").value;
    const t = +document.getElementById("team_id").value;
    let pp = document.createElement("p");
    const query = `http://localhost:8080/?uname=${n}&uteam=${t}`;
    fetch(query).then(response => response.text())
        .then(data => document.getElementById("sub").appendChild("pp").innerHTML = data);
    }, false);