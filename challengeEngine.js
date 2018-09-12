function deleteCity(url) {
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


                                                                                //------------------------------
function searchCity(){
    var pesquisa = document.getElementById("campoSearch");
    var termoPesquisa = pesquisa.value;
    var tabela = document.getElementById("tabela");
    var corpo = document.getElementById("corpoTabela");
    tabela.removeChild(corpo);
    constroiTabelaCidade(termoPesquisa);
                                                                            //--------------------pronto

}
                                                                                //------------------------------
function searchClient(){
    var pesquisa = document.getElementById("campoSearch");
    var termoPesquisa = pesquisa.value;
    refreshCliente(termoPesquisa);
                                                                            //--------------------pronto

}

function newCity() {
    $('#modalAdd').modal('show');

    console.log("Cidade adicionada ");
}

function refreshCidade (termoPesquisa) {
    var tabela = document.getElementById("tabela");
    var corpo = document.getElementById("corpoTabela");
    tabela.removeChild(corpo);
    constroiTabelaCidade(termoPesquisa);

}

function refreshCliente(termoPesquisa) {
    var tabela = document.getElementById("tabela");
    var corpo = document.getElementById("corpoTabela");
    tabela.removeChild(corpo);
    constroiTabelaCliente(termoPesquisa);

}
