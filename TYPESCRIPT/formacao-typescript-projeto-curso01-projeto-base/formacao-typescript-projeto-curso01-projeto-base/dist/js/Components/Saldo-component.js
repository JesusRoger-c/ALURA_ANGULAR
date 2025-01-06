import { FormatoData } from "../Types/FormatoData.js";
import { formatarData, formatarMoeda } from "../Utils/formatadores.js";
import Conta from "../Types/Conta.js";
//Selecione o saldo-valor e Procure o elemento valor  
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
//Checando outro elemento
if (elementoDataAcesso != null) {
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
//Chamando a função atualizar saldo
renderizarSaldo();
//exportar novo saldo
function renderizarSaldo() {
    //Checando se o elemento é nulo
    if (elementoSaldo != null) { //elemento não for nulo 
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo()); // executa tal ação 
    }
}
const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
};
export default SaldoComponent;
