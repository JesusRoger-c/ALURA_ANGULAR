//  Aplicar orientação a objetos em Typescript

import { Armazenador } from "./Armazenador.js";
import { ValidaDebito } from "./Decorators.js";
import { GrupoTransacao } from "./GrupoTransacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js"

//Criação de uma classe 

export class Conta{
    protected nome: string
    protected saldo: number = Armazenador.obter<number>("saldo") || 0;
    private transacoes: Transacao[] = Armazenador.obter<Transacao[]>(("transacoes"), (key: string, value: any)=> {
        if(key === "data"){
            return new Date (value);
        }
        return value;
    }) || [];
    
    // MÉTODO CONSTRUTOR
    constructor(nome: string){
     this.nome = nome;
    }
    

    public getTitular(){
        return this.nome;
    }

    getGruposTransacoes(): GrupoTransacao[]{
        const gruposTransacoes: GrupoTransacao[] = [];
        const listaTransacoes: Transacao[] = structuredClone(this.transacoes);
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
      }

      getSaldo(){
        return this.saldo;
      }

      getDataAcesso(): Date{
        return new Date()
      }

       registrarTransacao(novaTransacao : Transacao): void {
              //Validação de valores 
              if(novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO){
                this.depositar(novaTransacao.valor);
              }
              else if(novaTransacao.tipoTransacao == TipoTransacao.TRANSFERÊNCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO){
                this.debitar(novaTransacao.valor);
                novaTransacao.valor *= -1;
              }
              else{
                throw new Error("Transacao inválida");
              }
      
         this.transacoes.push(novaTransacao);
         console.log(this.getGruposTransacoes());
         //Puxando o Armazenador, pegamos o método de salvar 
         Armazenador.salvar("transacoes", JSON.stringify(this.transacoes));
        }
        
        @ValidaDebito
        debitar(valor: number):void{
            this.saldo -= valor;
            Armazenador.salvar("saldo", this.saldo.toString());
          }

          depositar(valor: number): void{
            if(valor <= 0){
              throw new Error("Valor que deve ser depositado é maior que zero!");
            }
            this.saldo += valor;
           Armazenador.salvar("saldo", this.saldo.toString());
          
          }
}

// EXTENDS - Herança
export class ContaPremium extends Conta{

  registraTransacao(transacao: Transacao): void {
    if(transacao.tipoTransacao === TipoTransacao.DEPOSITO){
      console.log("Parabéns, você ganhou um bônus de 0.50");
      transacao.valor += 0.5
    }
    
    // Quando quero usar algo da minha classe pai, nesse caso classe Conta 
    super.registrarTransacao(transacao)
  }
}


const conta = new Conta("Roger Gabriel de Souza de Jesus Costa");

const contaPremium = new ContaPremium ("Rian Vitor");

export default conta;

