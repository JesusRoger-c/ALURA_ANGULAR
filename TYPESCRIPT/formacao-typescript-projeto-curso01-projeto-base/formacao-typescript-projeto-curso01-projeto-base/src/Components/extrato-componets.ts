// Trata-se de uma parte que exibirá o extrato 

import Conta from "../Types/Conta.js";
import { FormatoData } from "../Types/FormatoData.js";
import { GrupoTransacao } from "../Types/GrupoTransacao.js";
import { formatarMoeda, formatarData } from "../Utils/formatadores.js";


const ElementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(".extrato .registro-transacoes");

// Chamo a função para mostrar isso na tela 
renderizarExtrato();
function renderizarExtrato(): void{
    const gruposTransacoes: GrupoTransacao[] = Conta.getGruposTransacoes(); // transforma no mais atual 
    ElementoRegistroTransacoesExtrato.innerHTML = ""; //Limpando toda a informação que tem lá 
    let htmlRegistroTransacoes: string = "";

    for(let grupoTransacao of gruposTransacoes){

        let htmlTransacaoItem: string = "";
        for(let transacao of grupoTransacao.transacoes)
        {
            //modificando a estrutura do extrato do ts ao html
            htmlTransacaoItem += `

            <div class="transacao-item">
                        <div class="transacao-info">
                            <span class="tipo">${transacao.tipoTransacao}</span>
                            <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                        </div>
                        <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
            </div>
            `;
        }

        //Criando grupo 
        htmlRegistroTransacoes += `
        
        <div class="transacoes-group">
           
            <strong class="mes-group">${grupoTransacao.label}</strong>
            ${htmlTransacaoItem}


        </div>
        
        `;
    }
    
    if(htmlRegistroTransacoes === ""){
        htmlRegistroTransacoes = "<div>Não há transações registradas.</div>"
    }
    ElementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;

}

//Atualizando o que entrou de extrato 
const ExtratoComponent = {
    atualizar(): void{
        renderizarExtrato();
    }
}

export default ExtratoComponent;