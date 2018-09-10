function carregaCidades(url, callback ) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET",url,true);
    httpRequest.send();
    httpRequest.responseType = "json";
   // console.log("Foi obtido um arquivo " + httpRequest.responseType);
    httpRequest.addEventListener("readystatechange",function (event) {
       // console.log("Resposta em readystate " + httpRequest.readyState);
        if(httpRequest.readyState == 4 && httpRequest.status == 200){
                var lista = httpRequest.response;
                //console.log("Carregado com Sucesso!" + lista);
                callback(lista);
            }
        }
    );
}

function constroiTabelaCidade(objeto) {

        var body = document.getElementById("tblContainer");
    var tbl = document.getElementById("tabelaCidades");
    var tblBody = document.createElement("tbody");

    for (var j = 0; j < objeto.length; j++) {
        var row = document.createElement("tr");
         var cell1 = document.createElement("td");
            var cellText = document.createTextNode(objeto[j].name);
        cell1.appendChild(cellText);
            row.appendChild(cell1);
        var cell2 = document.createElement("td");
        cell2.innerHTML = "<button type=\'button\' class=\'btn btn-primary\' data-toggle=\'modal\' datatarget=\'#modalUpdate\' onclick=\'updateCity()\'>Editar</button>\n"
        cell2.innerHTML += "<button type=\'button\' class=\'btn btn-danger\' data-toggle='modal' datatarget='#modalDelete'onclick=\'deleteCity()\'>Apagar</button>"

        row.appendChild(cell2);
        tblBody.appendChild(row);

    }

    tbl.appendChild(tblBody);
    body.appendChild(tbl);
};


function deleteCity(url) {
    $('#modalDelete').modal('show');

    console.log("Cidade deletada " + url);

}


function updateCity(url) {
    $('#modalEdit').modal('show');

    console.log("Cidade editada " + url);

}


function searchCity(){
    var pesquisa = document.getElementById(campoSearch);
    console.log(pesquisa.value);
}

function newCity() {
    $('#modalAdd').modal('show');

    console.log("Cidade adicionada ");
}
