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