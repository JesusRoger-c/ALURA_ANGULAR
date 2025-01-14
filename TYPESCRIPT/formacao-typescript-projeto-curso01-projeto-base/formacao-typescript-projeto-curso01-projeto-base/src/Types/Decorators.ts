// Construindo uma função 

export function ValidaDebito (target: any, propertyKey: string, descriptor: PropertyDescriptor){
    const originalmethod = descriptor.value;

    descriptor.value = function(valorDoDebito: number){

        if(valorDoDebito <= 0){
            throw new Error("O valor a ser debitado precisa ser maior do que zero");
            
        }

        if(valorDoDebito > this.saldo){
            throw new Error("Seu saldo é insulficiente para realizar a operação")
        }

        return originalmethod.apply(this, [valorDoDebito])
    }
   
    return descriptor;
}

//define um decorator de método tempo
export function ValidaDeposito(target: any, propertyKey: string, descriptor: PropertyDescriptor){

    //Guarda uma ref ao método original
    const originalMethod = descriptor.value;

//Substitui o método original por uma nova função
descriptor.value = function(valorDoDeposito: number){
    if(valorDoDeposito <= 0){
        throw new Error("Valor depositado deve ser maior do que zero")
    }
    
    //Retorna o resultado original
    return originalMethod.apply(this, [valorDoDeposito]);
}
  // Retorna o descritor modificado
  return descriptor;
}