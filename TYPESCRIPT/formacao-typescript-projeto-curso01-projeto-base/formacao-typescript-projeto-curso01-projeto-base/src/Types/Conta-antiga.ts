// Módulo que representará nossa conta (centralizando informações)

import { GrupoTransacao } from "./GrupoTransacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";


let saldo: number = JSON.parse(localStorage.getItem("saldo")) || 0;
const transacoes: Transacao[] = JSON.parse(localStorage.getItem("transacoes"), (key:string, value:string) => {
   if(key === "data"){
    return new Date(value);
   }

   return value;
}) || [];

function debitar(valor: number):void{
  if(valor <= 0 ){
     throw new Error("Valor que deve ser debitado é maior que zero!");
  }

  if(valor > saldo){
    throw new Error("Saldo Insulficiente!");
  }

  saldo -= valor;
  localStorage.setItem("saldo", saldo.toString());
}

function depositar(valor: number): void{
  if(valor <= 0){
    throw new Error("Valor que deve ser depositado é maior que zero!");
  }
  saldo += valor;
  localStorage.setItem("saldo", saldo.toString());

}



const Conta = {
  //Criando método que retorne saldo  
  getSaldo(){
    return saldo;
  },

  getDataAcesso(): Date{
    return new Date();
  },

  getGruposTransacoes(): GrupoTransacao[]{
    const gruposTransacoes: GrupoTransacao[] = [];
    const listaTransacoes: Transacao[] = structuredClone(transacoes);
    const transacoesOrdenadas: Transacao[] = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
    let labelAtualGrupoTransacao: string = "";

    for(let transacao of transacoesOrdenadas){
      let labelGrupoTransacao: string = transacao.data.toLocaleDateString("pt-br", {month: "long", year: "numeric"});
     
  
      if(labelAtualGrupoTransacao != labelGrupoTransacao) {
         labelAtualGrupoTransacao = labelGrupoTransacao;
         gruposTransacoes.push({
          label: labelGrupoTransacao,
          transacoes: []
         });
      }

      gruposTransacoes.at(-1).transacoes.push(transacao); // Pego o último da lista e adiciono a nova transacao 

    }

    return gruposTransacoes;
  },


  registrarTransacao(novaTransacao : Transacao): void {
   
        //Validação de valores 
        if(novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO){
          depositar(novaTransacao.valor);
        }
        else if(novaTransacao.tipoTransacao == TipoTransacao.TRANSFERÊNCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO){
          debitar(novaTransacao.valor);
          novaTransacao.valor *= -1;
        }
        else{
          throw new Error("Transacao inválida");
        }

   transacoes.push(novaTransacao);
   console.log(this.getGruposTransacoes());
   localStorage.setItem("transacoes", JSON.stringify(transacoes));





  }
}

export default Conta;