export class Armazenador {
    constructor() { }
    //MÉTODO SALVAR
    salvar(chave, valor) {
        const valorComoString = JSON.stringify(valor); // transforma javascript em JSON 
        localStorage.setItem(chave, valorComoString);
    }
    //MÉTODO OBTER, RESPOSÁVEL POR RESGATAR AS INFOS NO LOCALSTORAGE 
    // Reviver é uma função opcional para converter um valor recebido (sendo algo opcional)
    obter(chave, reviver) {
        const valor = localStorage.getItem(chave);
        if (valor === null) {
            return null;
        }
        if (reviver) {
            return JSON.parse(valor, reviver);
        }
        return JSON.parse(valor);
    }
}
