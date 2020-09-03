
setInterval('getValueFromCsv()',5000);
function getValueFromCsv() {
    $.ajax({
        type: "GET",
        url: "Export_latest",
        dataType: "script",
        success: function(data) {
            data = data.replaceAll('","','";"');
            data = data.replaceAll('"','');
            document.querySelector("#value").innerText = "-";
            let parsedData = data.split(";");
            let value = parsedData[11].replaceAll('"','');
            let name =parsedData[7].replaceAll('"','');
            let date = parsedData[28].replaceAll('"','');
            document.querySelector("#value").innerText = value;
            document.querySelector("#date").innerText = date;
        },
        error: function (request, status, error) {
            if (error.equals("Not Found")){
                alert("No se ha encontrado el fichero Export_latest, asegurate de colocar el documento en la misma carpeta que el fichero Export_latest.")
                document.querySelector("#value").innerText = "Error";
                document.querySelector("#date").innerText = "Error";
            }

        }
    });
}