//Declarando variaveis primitivas 
let saldo2: number = 3000;
let nome: string =  "Rian";
let pago: boolean = false;
let qualquerVariavel: any = 22;  // o ANY correspondente significa que aceita qualquer tipo de variavel 

// arrays em TS
const lista: number[] = []; //Essa lista só pode conter números
lista.push(2, 3, 6, 8,) // O "push" Serve para inserir novas informações nesta array


//Tipos personalizados (type Alias)
  //Expicitando o que uma transacao tem que ter
type transacao = {
    tipoTransacao: string;
    data: Date;
    Valor: number;
}

const novaTransacao: transacao = {
    tipoTransacao: "",
    data: new Date(),
    Valor: 0,

}
