let saldo = 3000;


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
});
