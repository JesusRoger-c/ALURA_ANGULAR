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

   
    //Validação de valores 
    if(tipoTransacao == TipoTransacao.DEPOSITO){
      saldo += valor;
    }else if(tipoTransacao == TipoTransacao.TRANSFERÊNCIA || tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO){
      saldo -= valor;
    }else{
      alert("Transacao inválida");
      return;
    }


   //Estou atualizando o painel de valores de acordo com a transacao 
   elementoSaldo.textContent = formatarMoeda(saldo);
    //Criação de um objeto com a finalidade de armazenar as informações obtidas
    const novaTransacao: Transacao =  {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data
    }

    console.log(novaTransacao);
    elementoFormulario.reset(); // Uma vez que eu puxei os dados, deve ser resetado o formulario 
    
});
