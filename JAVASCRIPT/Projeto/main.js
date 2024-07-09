function tocaSom (seletorAudio){     //Declaracao de função
   const elemento = document.querySelector(seletorAudio); //criando uma constante que Busca algum seletor 

   if (elemento != null && elemento.localName === 'audio'){
      elemento.play();
   }else{
      alert('Elemento não encontrado');
   }

}


const listaDeTeclas = document.querySelectorAll('.tecla');  //Criando uma lista constante


//para - laço de repetição 
for(let contador = 0; contador < listaDeTeclas.length; contador++){

   const tecla = listaDeTeclas[contador]
   const instrumento = tecla.classList[1];
   const idAudio = `#som_${instrumento}`;      // ${} - indica que há uma variável ali dentro 
   
   tecla.onclick = function () {
   tocaSom(idAudio);
   }

   tecla.onkeydown = function (evento) {    //Pintar o botão ao clicar 
      if(evento.code === 'Space' || evento.code === 'Enter'){
      tecla.classList.add('ativa');
      }
   }

   tecla.onkeyup = function (){         // Remover a cor ao parar de apertar 
      tecla.classList.remove('ativa');
   }

}
