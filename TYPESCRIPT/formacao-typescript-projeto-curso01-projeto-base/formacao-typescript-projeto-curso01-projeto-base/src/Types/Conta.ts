// Módulo que representará nossa conta (centralizando informações)

import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";


let saldo: number = 3000;

const Conta = {
  //Criando método que retorne saldo  
  getSaldo(){
    return saldo;
  },

  getDataAcesso(): Date{
    return new Date();
  },
  
  registrarTransacao(novaTransacao : Transacao): void {
   
        //Validação de valores 
        if(novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO){
          saldo += novaTransacao.valor;
        }
        else if(novaTransacao.tipoTransacao == TipoTransacao.TRANSFERÊNCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO){
          saldo -= novaTransacao.valor;
        }
        else{
          alert("Transacao inválida");
          return;
        }
  }
}

export default Conta;