// o o bjetivo é definir o tipo transacao

// Importando um módulo
import { TipoTransacao } from "./TipoTransacao.js";

export type Transacao = {

    tipoTransacao: TipoTransacao;
    data: Date;
    valor: number;



}

