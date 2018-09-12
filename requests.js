function carrega(url, callback,j) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url, true);
    httpRequest.send();
    httpRequest.responseType = "json";
    httpRequest.addEventListener("readystatechange", function (event) {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var lista = httpRequest.response;
            callback(lista,j);

        }
    });
}

function editaCidade(url) {
    var campo = document.getElementById("campoNomeEdit");
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("PUT", url, true);
    httpRequest.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    var pacote = {"name": campo.value}
    httpRequest.send(JSON.stringify(pacote));
    httpRequest.addEventListener("readystatechange", function (event) {
        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
                refreshCidade();
            }
            else {
                alert("Algo de errado não está certo")
            }
        }
    });
}

function deletaCidade(url) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("DELETE", url, true);
    httpRequest.addEventListener("readystatechange", function (event) {
        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 204) {
                alert("Cidade Deletada!!");
                refreshCidade();
            }
            else {
                alert("Não foi possível apagar esta cidade!");
            }
        }});
    httpRequest.send(null);
}