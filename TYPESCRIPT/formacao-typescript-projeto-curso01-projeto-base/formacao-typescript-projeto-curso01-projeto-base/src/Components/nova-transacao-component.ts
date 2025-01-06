// importando
import { Transacao } from "../Types/Transacao.js";
import { TipoTransacao } from "../Types/TipoTransacao.js";
import  SaldoComponent from "./Saldo-component.js";
import Conta from "../Types/Conta.js";


// Procuro o elemento form e adicionarei um evento que trata-se de subir os dados sem que necessariamente precise atualizar a tela  
const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement; // ele coloca que sabe que vem do html este dado, sendo assim, não causa erros do código
elementoFormulario.addEventListener("submit", function(event) {

  event.preventDefault();

 if( !elementoFormulario.checkValidity()){
    alert("Por favor, preencha todos os dados da transação!");
    return;
 }
    // Buscar valor, data e tipo de transacao 
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;;


    let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao; // Encontrar o valor registrado no formulário (Tipo transacao) 
    let valor: number = inputValor.valueAsNumber;         // declarando variavel como número e atualizando a fonte de pesquisa com conversão de dados 
    let data: Date = new Date(inputData.value);
    

    //Criação de um objeto com a finalidade de armazenar as informações obtidas
    const novaTransacao: Transacao =  {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data
    }
    
    //Chamando o método conta para registrar, ou seja, puxando info de outro módulo 
    Conta. registrarTransacao(novaTransacao);
    SaldoComponent. atualizar();
    elementoFormulario.reset(); // Uma vez que eu puxei os dados, deve ser resetado o formulario 
    
});
