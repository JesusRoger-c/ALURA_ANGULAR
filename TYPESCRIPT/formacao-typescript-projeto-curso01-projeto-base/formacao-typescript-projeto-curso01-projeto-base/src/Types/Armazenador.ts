export class Armazenador {
    private constructor(){}

    //MÉTODO SALVAR
    salvar(chave: string, valor: any): void{
        const valorComoString = JSON.stringify(valor); // transforma javascript em JSON 
        localStorage.setItem(chave,valorComoString);
    }

    //MÉTODO OBTER, RESPOSÁVEL POR RESGATAR AS INFOS NO LOCALSTORAGE 
    // Reviver é uma função opcional para converter um valor recebido (sendo algo opcional)
    obter(chave: string, reviver?: (this:any, key: string, value: any) => any){

        const valor = localStorage.getItem(chave);

        if(valor === null){
            return null
        }

        if (reviver){
            return JSON.parse(valor, reviver)
        }

        return JSON.parse(valor);

    }

}