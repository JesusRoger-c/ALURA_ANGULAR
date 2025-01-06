// Módulo que representará nossa conta (centralizando informações)
import { TipoTransacao } from "./TipoTransacao.js";
let saldo = 3000;
const Conta = {
    //Criando método que retorne saldo  
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    registrarTransacao(novaTransacao) {
        //Validação de valores 
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            saldo += novaTransacao.valor;
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERÊNCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            saldo -= novaTransacao.valor;
        }
        else {
            alert("Transacao inválida");
            return;
        }
    }
};
export default Conta;
