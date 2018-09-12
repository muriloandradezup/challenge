function constroiTabelaCliente(termo) {


    carrega("https://customers-challenge.herokuapp.com/customers", function (objeto) {
        var lista = objeto._embedded.customers;
        var cell1;
        var cell2;
        var cell3;
        var row;

        var body = document.getElementById("tblContainer");
        var tbl = document.getElementById("tabela");
        var tblBody = document.createElement("tbody");
        tblBody.id = "corpoTabela";


        for (var j = 0; j < lista.length; j++) {
            if ((termo == undefined) || (lista[j].name.toUpperCase().indexOf(termo.toUpperCase()) != -1)) {
                row = document.createElement("tr");
                cell1 = document.createElement("td");
                cell2 = document.createElement("td");
                cell3 = document.createElement("td");

                cell1.textContent = lista[j].name;

                carrega(lista[j]._links.city.href, function (cidadeCliente) {
                    cell2.textContent = cidadeCliente.name;
                },j);


                cell3.innerHTML = "<button type=\'button\' class=\'btn btn-primary\' data-toggle=\'modal\' datatarget=\'#modalUpdate\' onclick=\'updateClient()\'>Editar</button>";
                cell3.innerHTML += "<button type=\'button\' class=\'btn btn-danger\' data-toggle='modal' datatarget='#modalDelete'onclick=\'deleteClient()\'>Apagar</button>";
                row.appendChild(cell1);
                row.appendChild(cell2);
                row.appendChild(cell3);
                tblBody.appendChild(row);
            }

        }

        tbl.appendChild(tblBody);
        body.appendChild(tbl);
    });
};

function constroiTabelaCidade(termo) {

    carrega("https://customers-challenge.herokuapp.com/cities", function (objeto) {
        var lista = objeto._embedded.cities;


        var cell1;
        var cell2;
        var row;

        var body = document.getElementById("tblContainer");
        var tbl = document.getElementById("tabela");
        var tblBody = document.createElement("tbody");
        tblBody.id = "corpoTabela";

        for (var j = 0; j < lista.length; j++) {
            if ((termo == undefined) || (lista[j].name.toUpperCase().indexOf(termo.toUpperCase()) != -1)){
            row = document.createElement("tr");
            cell1 = "<td>" + lista[j].name + "</td>";
            cell2 = "<td>";
            cell2 += "<button type=\'button\' class=\'btn btn-primary\' data-toggle=\'modal\' datatarget=\'#modalUpdate\' value='" + lista[j]._links.self.href +"' onclick=\'updateCity(this.value)\'>Editar</button>";
            cell2 += "<button type=\'button\' class=\'btn btn-danger\' data-toggle='modal' datatarget='#modalDelete' value='" + lista[j]._links.self.href +"' onclick=\'deleteCity(this.value)\'>Apagar</button>"
            cell2 += "</td>";
            row.innerHTML = cell1 + cell2;
            tblBody.appendChild(row);

        }}

        tbl.appendChild(tblBody);
        body.appendChild(tbl);
    });
};


