function tocaSom (idElementoAudio){     //Declaracao de função
   document.querySelector(idElementoAudio).play();
} 


const listaDeTeclas = document.querySelectorAll('.tecla');  //Criando uma lista constante
let contador = 0;                                          // Criando uma variável que entra informação direto (referência variável)


//enquanto - laço de repetição 
while(contador < listaDeTeclas.length){

   const tecla = listaDeTeclas[contador]
   const instrumento = tecla.classList[1];
   const idAudio = `#som_${instrumento}`;      // ${} - indica que há uma variável ali dentro 

   console.log(idAudio);
   tecla.onclick = function () {
   tocaSom(idAudio);
   };

   contador = contador + 1;                               // Sair do looping, incrementar +1  
   console.log(contador);                                //imprime no console a informação digitada 
}
