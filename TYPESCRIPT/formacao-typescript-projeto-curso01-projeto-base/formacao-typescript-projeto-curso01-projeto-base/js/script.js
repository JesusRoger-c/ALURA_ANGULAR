let saldo = 3000.00;


//Selecione o saldo-valor e Procure o elemento valor  
const elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = saldo;


// Procuro o elemento form e adicionarei um evento que trata-se de subir os dados sem que necessariamente precise atualizar a tela  
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario = addEventListener("submit", function(event) {
 event.preventDefault();
 if( !elementoFormulario.checkValidity()){
    alert("Por favor, preencha todos os dados da transação!");
    return;
 }
    // Buscar valor, data e tipo de transacao 
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");


    let tipoTransacao = inputTipoTransacao.value; // Encontrar o valor registrado no formulário (Tipo transacao) 
    let valor = inputValor.value;
    let data = inputData.value;

   
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
   elementoSaldo.textContent = saldo;

    //Criação de um objeto com a finalidade de armazenar as informações obtidas

    const novaTransacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data
    }

    console.log(novaTransacao);
    elementoFormulario.reset(); // Uma vez que eu puxei os dados, deve ser resetado o formulario 
});
