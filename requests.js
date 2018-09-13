function carrega(url, callback,j) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url, true);
    httpRequest.send();
    httpRequest.responseType = "json";
    httpRequest.onload
    {
        httpRequest.addEventListener("readystatechange", function (event) {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                var lista = httpRequest.response;
                callback(lista, j);

            }
        });
    }
}

function editaCidade(url) {
    var campo = document.getElementById("campoNomeEdit");
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("PUT", url, true);
    httpRequest.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    var pacote = {"name": campo.value};
    httpRequest.send(JSON.stringify(pacote));
    httpRequest.addEventListener("readystatechange", function (event) {
        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
                refreshCidade("https://customers-challenge.herokuapp.com/cities");
            }
            else {
                alert("Algo de errado não está certo.")
            }
        }
    });
}

function editaCliente(url) {
    var campo = document.getElementById("campoNomeEdit");
    var cidade = document.getElementById("selecionaCidade");
     var httpRequest = new XMLHttpRequest();
     httpRequest.open("PATCH", url, true);
     httpRequest.setRequestHeader('Content-type', 'application/json; charset=utf-8');
     var pacote = {"name": campo.value, "city":cidade.value};
     httpRequest.send(JSON.stringify(pacote));

     httpRequest.addEventListener("readystatechange", function (event) {
         console.log(httpRequest.readyState);
         if (httpRequest.readyState == 4) {
             if (httpRequest.status == 200) {
                 refreshCliente("https://customers-challenge.herokuapp.com/customers");
             }
             else {
                 alert("Algo de errado não está certo.")
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
                refreshCidade("https://customers-challenge.herokuapp.com/cities");
            }
            else {
                alert("Não foi possível apagar esta cidade!");
            }
        }});
    httpRequest.send(null);
}

function deletaCliente(url) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("DELETE", url, true);
    httpRequest.addEventListener("readystatechange", function (event) {
        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 204) {
                alert("Cliente Deletado!!");
                refreshCliente("https://customers-challenge.herokuapp.com/customers");
            }
            else {
                alert("Não foi possível apagar este cliente!");
            }
        }});
    httpRequest.send(null);
}



function addCidade() {
    var campo = document.getElementById("campoNomeAdd");
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("POST", "https://customers-challenge.herokuapp.com/cities", true);
    httpRequest.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    var pacote = {"name": campo.value};
    httpRequest.send(JSON.stringify(pacote));
    httpRequest.addEventListener("readystatechange", function (event) {
        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 201) {
                refreshCidade("https://customers-challenge.herokuapp.com/cities");
            }
            else {
                alert("Algo de errado não está certo.")
            }
        }
    });
}


function addCliente() {
    var campo = document.getElementById("campoNomeAdd");
    var cidade = document.getElementById("cidadeEscolhida");
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("POST", "https://customers-challenge.herokuapp.com/customers", true);
    httpRequest.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    var pacote = {"name": campo.value, "city":cidade.value};
    httpRequest.send(JSON.stringify(pacote));

    httpRequest.addEventListener("readystatechange", function (event) {
        console.log(httpRequest.readyState);
        if (httpRequest.readyState == 4) {
            console.log(httpRequest.status);
            if (httpRequest.status == 201) {
                refreshCliente("https://customers-challenge.herokuapp.com/customers");
            }
            else {
                alert("Algo de errado não está certo.")
            }
        }

    });

}