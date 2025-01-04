let saldo: number = 3000;

//Selecione o saldo-valor e Procure o elemento valor  
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

//Checando se o elemento é nulo
if(elementoSaldo != null){ //elemento não for nulo 
elementoSaldo.textContent = formatarMoeda(saldo) // executa tal ação 
}

//Checando outro elemento
if(elementoDataAcesso != null){
    const dataAcesso: Date = new Date(); // Criando uma constante que tenha a data atualizada
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}