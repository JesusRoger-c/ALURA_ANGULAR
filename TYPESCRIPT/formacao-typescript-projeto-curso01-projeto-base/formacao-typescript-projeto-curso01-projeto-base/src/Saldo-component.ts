let saldo = 3000.00;

//Selecione o saldo-valor e Procure o elemento valor  
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

//Checando se o elemento é nulo
if(elementoSaldo != null){ //elemento não for nulo 
elementoSaldo.textContent = saldo.toString(); // executa tal ação 
}

