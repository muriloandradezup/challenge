function deletar(url) {
    $('#modalDelete').modal('show');
    var botaoConfirma = document.getElementById("confirmaDelete");
    botaoConfirma.value = url;

}


function updateCity(url) {
    $('#modalEdit').modal('show');
    var botaoConfirma = document.getElementById("confirmaEdit");
    botaoConfirma.value = url;
    var campo = document.getElementById("campoNomeEdit");
    carrega(url, function (lista) {
        campo.value = lista.name;
        campo.focus();
        campo.selectionStart = 0;
        campo.selectionEnd = lista.name.length;
    });

}
function updateClient(url) {
    $('#modalEdit').modal('show');
    var opcoes = document.getElementById("selecionaCidade");
    opcoes.innerHTML = "";
    var botaoConfirma = document.getElementById("confirmaEdit");
    var pesquisa = document.getElementById("novaCidade");
    pesquisa.value = "";
    botaoConfirma.value = url;
    var campo = document.getElementById("campoNomeEdit");

    carrega(url, function (lista) {

        carrega(lista._links.city.href, function (retorno) {
            opcoes.innerHTML = "<option value='" + retorno._links.self.href +"'>" + retorno.name + "</option>";
            campo.value = lista.name;
            campo.focus();
            campo.selectionStart = 0;
            campo.selectionEnd = lista.name.length;
        });
        });
    }



                                                                                //------------------------------
function searchCity(){
    var pesquisa = document.getElementById("campoSearch");
    var termoPesquisa = pesquisa.value;
    if(termoPesquisa != undefined) {
        refreshCidade("https://customers-challenge.herokuapp.com/cities/search/findByNameIgnoreCaseContaining?name=" + termoPesquisa);
    }
    else {
        refreshCidade("https://customers-challenge.herokuapp.com/cities");
    }
                                                                            //--------------------pronto

}
                                                                                //------------------------------
function searchClient(){
    var pesquisa = document.getElementById("campoSearch");
    var termoPesquisa = pesquisa.value;
    if (termoPesquisa != undefined) {
        refreshCliente("https://customers-challenge.herokuapp.com/customers/search/findByNameIgnoreCaseContaining?name=" + termoPesquisa);
    }
    else {
        refreshCliente("https://customers-challenge.herokuapp.com/customers");

    }
                                                                        //--------------------pronto

}

function newCity() {
    $('#modalAdd').modal('show');
}


function newClient() {
    $('#modalAdd').modal('show');
    var pesquisa = document.getElementById("pesqCidade");
    pesquisa.value = "";
    var nome = document.getElementById("campoNomeAdd");
    nome.value = "";
    nome.focus();
    var opcoes = document.getElementById("cidadeEscolhida");
    opcoes.innerHTML = "";
}


    function refreshCidade(url) {
        var tabela = document.getElementById("tabela");
        var corpo = document.getElementById("corpoTabela");
        tabela.removeChild(corpo);
        constroiTabelaCidade(url);

    }

    function refreshCliente(url) {
        var tabela = document.getElementById("tabela");
        var corpo = document.getElementById("corpoTabela");
        tabela.removeChild(corpo);
        constroiTabelaCliente(url);

    }

    function sugereCidade() {
        var pesquisa = document.getElementById("novaCidade");
        var termoPesquisa = pesquisa.value;
        var opcoes = document.getElementById("selecionaCidade");

        opcoes.innerHTML = "";
        if (termoPesquisa) {
            carrega("https://customers-challenge.herokuapp.com/cities/search/findByNameIgnoreCaseContaining?name=" + termoPesquisa, function (objeto) {

                for (i = 0; i < objeto._embedded.cities.length; i++) {
                    opcoes.innerHTML += "<option value='" + objeto._embedded.cities[i]._links.self.href + "'>" + objeto._embedded.cities[i].name + "</option>";
                }
            });
        }

    }


    function sugereCidadeAdd() {
        var pesquisa = document.getElementById("pesqCidade");
        var termoPesquisa = pesquisa.value;
        var opcoes = document.getElementById("cidadeEscolhida");

        opcoes.innerHTML = "";
        if (termoPesquisa) {
            carrega("https://customers-challenge.herokuapp.com/cities/search/findByNameIgnoreCaseContaining?name=" + termoPesquisa, function (objeto) {

                for (i = 0; i < objeto._embedded.cities.length; i++) {
                    opcoes.innerHTML += "<option value='" + objeto._embedded.cities[i]._links.self.href + "'>" + objeto._embedded.cities[i].name + "</option>";
                }
            });
        }

    }
