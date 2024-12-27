let saldo = 3000.00;
alert("testando ts");

//Selecione o saldo-valor e Procure o elemento valor  
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

//Checando se o elemento é nulo
if(elementoSaldo != null){ //elemento não for nulo 
elementoSaldo.textContent = saldo.toString(); // executa tal ação 
}

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


    let tipoTransacao: string = inputTipoTransacao.value; // Encontrar o valor registrado no formulário (Tipo transacao) 
    let valor: number = inputValor.valueAsNumber;         // declarando variavel como número e atualizando a fonte de pesquisa com conversão de dados 
    let data: Date = new Date(inputData.value);

   
    //Validação de valores 
    if(tipoTransacao == "Depósito"){
      saldo += valor;
    }else if(tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto"){
      saldo -= valor;
    }else{
      alert("Transacao inválida");
      return;
    }

   //Estou atualizando o painel de valores de acordo com a transacao 
   elementoSaldo.textContent = saldo.toString();

    //Criação de um objeto com a finalidade de armazenar as informações obtidas
    const novaTransacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data
    }

    console.log(novaTransacao);
    elementoFormulario.reset(); // Uma vez que eu puxei os dados, deve ser resetado o formulario 
});
