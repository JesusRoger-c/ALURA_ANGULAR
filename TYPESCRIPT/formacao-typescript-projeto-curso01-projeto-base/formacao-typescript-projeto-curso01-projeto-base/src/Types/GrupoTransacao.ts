// Estrutura do grupo de extratos por data na tela de transacoes 
import { Transacao } from "./Transacao.js";


export type GrupoTransacao =  {
  label: string;
  transacoes: Transacao[]; 
}