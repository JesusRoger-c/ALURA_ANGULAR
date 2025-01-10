import SaldoComponent from "./Saldo-component.js";
import Conta from "../Types/Conta.js";
import ExtratoComponent from "./extrato-componets.js";
// Procuro o elemento form e adicionarei um evento que trata-se de subir os dados sem que necessariamente precise atualizar a tela  
const elementoFormulario = document.querySelector(".block-nova-transacao form"); // ele coloca que sabe que vem do html este dado, sendo assim, não causa erros do código
elementoFormulario.addEventListener("submit", function (event) {
    try {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os dados da transação!");
            return;
        }
        // Buscar valor, data e tipo de transacao 
        const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
        const inputValor = elementoFormulario.querySelector("#valor");
        const inputData = elementoFormulario.querySelector("#data");
        ;
        let tipoTransacao = inputTipoTransacao.value; // Encontrar o valor registrado no formulário (Tipo transacao) 
        let valor = inputValor.valueAsNumber; // declarando variavel como número e atualizando a fonte de pesquisa com conversão de dados 
        let data = new Date(inputData.value + " 00:00:00 ");
        //Criação de um objeto com a finalidade de armazenar as informações obtidas
        const novaTransacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data
        };
        //Chamando o método conta para registrar, ou seja, puxando info de outro módulo 
        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratoComponent.atualizar();
        elementoFormulario.reset(); // Uma vez que eu puxei os dados, deve ser resetado o formulario
    }
    catch (erro) {
        alert(erro.message);
    }
});
