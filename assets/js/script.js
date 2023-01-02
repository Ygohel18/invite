window.onload = function (e) {

    console.log("I am coming, Are you?");
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "./assets/img/invite_avpti75_2.svg?v2", true);

    ajax.send();
    ajax.onload = function (e) {
        if (ajax.status == 200) {
            try {
                var div = document.createElement("div");
                div.classList.add("test");
                div.setAttribute("id", "tem");
                div.innerHTML = ajax.responseText;
                $("#placeholder").append(div);
                $('#avpti_invite_blanck').attr('xlink:href', './assets/img/avpti_invite_blanck.png?v2');

                changePlaceholder();

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
                    setName($("#input-name").val());
                    setDegination($("#input-deg").val());
                    var file = Math.floor(Date.now() / 1000) + ".png"
                    saveSvgAsPng(document.getElementById("avpti"), file);
                });

                $("#tem").click(function () {
                    setName($("#input-name").val());
                    setDegination($("#input-deg").val());
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
    var ele = document.getElementById("txtName");
    var box = document.getElementById("whitebox");
    ele.textContent = name;
    if (ele.getComputedTextLength() > box.getBBox().width) {
        ele.setAttribute("x", "0");
    } else {
        ele.setAttribute("x", (box.getBBox().width - ele.getComputedTextLength()) / 2);
    }
}

function setDegination(degination) {
    var ele = document.getElementById("txtDeg");
    var box = document.getElementById("whitebox");
    ele.textContent = degination;
    if (ele.getComputedTextLength() > box.getBBox().width) {
        ele.setAttribute("x", "0");
    } else {
        ele.setAttribute("x", (box.getBBox().width - ele.getComputedTextLength()) / 2);
    }
}

function getUrlParameter(k) {
    var p = {};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) { p[k] = v })
    return k ? p[k] : p;
}

function changePlaceholder() {
    $('#imgProfile').trigger('click');
    $("#file-profile").change(function (ie) {
        var file = $("input[type=file]").get(0).files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function () {
                // console.log($("#placeholder").attr("xlink:href"));
                $("#imgProfile").attr("xlink:href", reader.result);

            }
            reader.readAsDataURL(file);
        }
    });
}