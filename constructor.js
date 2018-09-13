function constroiTabelaCliente(url) {


    carrega(url, function (objeto) {
        var lista = objeto._embedded.customers;
        var cell1;
        var cell2 = [];
        var cell3;
        var row;

        var body = document.getElementById("tblContainer");
        var tbl = document.getElementById("tabela");
        var tblBody = document.createElement("tbody");
        var navButtons = document.getElementById("navButtons");
        tblBody.id = "corpoTabela";


        for (var j = 0; j < lista.length; j++) {

                row = document.createElement("tr");
                cell1 = document.createElement("td");
                cell2[j] = document.createElement("td");
                cell3 = document.createElement("td");

                cell1.textContent = lista[j].name;

                carrega(lista[j]._links.city.href, function (cidadeCliente, i) {
                    cell2[i].textContent = cidadeCliente.name;
                },j);


                cell3.innerHTML = "<button type=\'button\' class=\'btn btn-primary\' data-toggle=\'modal\' datatarget=\'#modalUpdate\' value='" + lista[j]._links.self.href +"' onclick=\'updateClient(this.value)\'>Editar</button>";
                cell3.innerHTML += "<button type=\'button\' class=\'btn btn-danger\' data-toggle='modal' datatarget='#modalDelete' value='" + lista[j]._links.self.href +"' onclick=\'deletar(this.value)\'>Apagar</button>";
                row.appendChild(cell1);
                row.appendChild(cell2[j]);
                row.appendChild(cell3);
                tblBody.appendChild(row);


        }
        tbl.appendChild(tblBody);
        body.appendChild(tbl);
        navButtons.innerHTML = "";
        if(objeto._links.first){
            navButtons.innerHTML += "<button class='btn btn-primary' value='"+ objeto._links.first.href +"' onclick='refreshCliente(this.value)'>First</button>";
        }
        if(objeto._links.prev){
            navButtons.innerHTML += "<button class='btn btn-primary' value='"+ objeto._links.prev.href +"' onclick='refreshCliente(this.value)'>Previous</button>";
        }
        if(objeto._links.next){
            navButtons.innerHTML += "<button class='btn btn-primary' value='"+ objeto._links.next.href +"' onclick='refreshCliente(this.value)'>Next</button>";
        }
        if(objeto._links.last){
            navButtons.innerHTML += "<button class='btn btn-primary' value='"+ objeto._links.last.href +"' onclick='refreshCliente(this.value)'>Last</button>";
        }
    });

}

function constroiTabelaCidade(url) {

    carrega(url, function (objeto) {
        var lista = objeto._embedded.cities;

        var navButtons = document.getElementById("navButtons");



        var cell1;
        var cell2;
        var row;

        var body = document.getElementById("tblContainer");
        var tbl = document.getElementById("tabela");
        var tblBody = document.createElement("tbody");
        tblBody.id = "corpoTabela";

        for (var j = 0; j < lista.length; j++) {
            row = document.createElement("tr");
            cell1 = "<td>" + lista[j].name + "</td>";
            cell2 = "<td>";
            cell2 += "<button type=\'button\' class=\'btn btn-primary\' data-toggle=\'modal\' datatarget=\'#modalUpdate\' value='" + lista[j]._links.self.href +"' onclick=\'updateCity(this.value)\'>Editar</button>";
            cell2 += "<button type=\'button\' class=\'btn btn-danger\' data-toggle='modal' datatarget='#modalDelete' value='" + lista[j]._links.self.href +"' onclick=\'deletar(this.value)\'>Apagar</button>"
            cell2 += "</td>";
            row.innerHTML = cell1 + cell2;
            tblBody.appendChild(row);

        }

        tbl.appendChild(tblBody);
        body.appendChild(tbl);

        navButtons.innerHTML = "";
        if(objeto._links.first){
            navButtons.innerHTML += "<button class='btn btn-primary' value='"+ objeto._links.first.href +"' onclick='refreshCidade(this.value)'>First</button>";
        }
        if(objeto._links.prev){
            navButtons.innerHTML += "<button class='btn btn-primary' value='"+ objeto._links.prev.href +"' onclick='refreshCidade(this.value)'>Previous</button>";
        }
        if(objeto._links.next){
            navButtons.innerHTML += "<button class='btn btn-primary' value='"+ objeto._links.next.href +"' onclick='refreshCidade(this.value)'>Next</button>";
        }
        if(objeto._links.last){
            navButtons.innerHTML += "<button class='btn btn-primary' value='"+ objeto._links.last.href +"' onclick='refreshCidade(this.value)'>Last</button>";
        }
    });
};


