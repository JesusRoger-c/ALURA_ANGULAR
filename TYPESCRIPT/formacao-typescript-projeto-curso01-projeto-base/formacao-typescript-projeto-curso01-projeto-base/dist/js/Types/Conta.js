//  Aplicar orientação a objetos em Typescript
import { TipoTransacao } from "./TipoTransacao.js";
//Criação de uma classe 
export class Conta {
    nome;
    saldo = JSON.parse(localStorage.getItem("saldo")) || 0; //Transformando um valor númerico em JSON
    transacoes = JSON.parse(localStorage.getItem("transacoes"), (key, value) => {
        if (key === "data") {
            return new Date(value);
        }
        return value;
    }) || [];
    // MÉTODO CONSTRUTOR
    constructor(nome) {
        this.nome = nome;
    }
    getTitular() {
        return this.nome;
    }
    getGruposTransacoes() {
        const gruposTransacoes = [];
        const listaTransacoes = structuredClone(this.transacoes);
        const transacoesOrdenadas = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao = "";
        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao = transacao.data.toLocaleDateString("pt-br", { month: "long", year: "numeric" });
            if (labelAtualGrupoTransacao != labelGrupoTransacao) {
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
    getSaldo() {
        return this.saldo;
    }
    getDataAcesso() {
        return new Date();
    }
    registrarTransacao(novaTransacao) {
        //Validação de valores 
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            this.depositar(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERÊNCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            this.debitar(novaTransacao.valor);
            novaTransacao.valor *= -1;
        }
        else {
            throw new Error("Transacao inválida");
        }
        this.transacoes.push(novaTransacao);
        console.log(this.getGruposTransacoes());
        localStorage.setItem("transacoes", JSON.stringify(this.transacoes));
    }
    debitar(valor) {
        if (valor <= 0) {
            throw new Error("Valor que deve ser debitado é maior que zero!");
        }
        if (valor > this.saldo) {
            throw new Error("Saldo Insulficiente!");
        }
        this.saldo -= valor;
        localStorage.setItem("saldo", this.saldo.toString());
    }
    depositar(valor) {
        if (valor <= 0) {
            throw new Error("Valor que deve ser depositado é maior que zero!");
        }
        this.saldo += valor;
        localStorage.setItem("saldo", this.saldo.toString());
    }
}
const conta = new Conta("Roger Gabriel de Souza de Jesus Costa");
export default conta;
