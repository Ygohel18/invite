window.onload = function (e) {

    console.log("I am coming, Are you?");
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "./assets/img/invite_avpti75.svg", true);

    ajax.send();
    ajax.onload = function (e) {
        if (ajax.status == 200) {
            try {
                var div = document.createElement("div");
                div.classList.add("test");
                div.setAttribute("id", "tem");
                div.innerHTML = ajax.responseText;
                $("#placeholder").append(div);
                $('#avpti_invite_blanck').attr('xlink:href', './assets/img/avpti_invite_blanck.jpeg');

                // Update values on Invitation Card
                $("#input-name").change(function () {
                    setName($(this).val());
                });

                $("#input-deg").change(function () {
                    setDegination($(this).val());
                });

                var tname = getUrlParameter("name");
                var tdeg = getUrlParameter("degination");

                if (tname != null && tdeg != null) {
                    $("#input-name").val(tname);
                    $("#input-deg").val(tdeg);
                    setName(tname);
                    setDegination(tdeg);
                }

                // Export svg as png
                $("#btn-dl").click(function () {
                    var file = Math.floor(Date.now() / 1000) + ".png"
                    saveSvgAsPng(document.getElementById("avpti"), file);
                });

                $("#tem").click(function () {
                    var file = Math.floor(Date.now() / 1000) + ".png"
                    saveSvgAsPng(document.getElementById("avpti"), file);
                });

            }
            catch (err) {
                console.log(err);
            }

        }
    }
}

function setName(name) {
    if (name.length > 10) {
        var pos = 450 - name.length * 5;
    } else {
        pos = 500;
    }
    var mat = "matrix(0.998, -0.07, 0.07, 0.998, " + pos + ", 960.884)";
    document.getElementById("txtName").setAttribute("transform", mat);
    document.getElementById("txtName").textContent = name;
}

function setDegination(degination) {
    if (degination.length >= 11) {
        var pos = 550 - degination.length * 5 + 90;
    } else {
        pos = 550;
    }
    var mat = "matrix(0.998, -0.07, 0.07, 0.998, " + pos + ", 1000)";
    document.getElementById("txtDeg").setAttribute("transform", mat);
    document.getElementById("txtDeg").textContent = degination;
}

function getUrlParameter(k) {
    var p = {};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) { p[k] = v })
    return k ? p[k] : p;
}