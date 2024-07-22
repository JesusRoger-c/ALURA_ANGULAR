const html = document.querySelector('html');  // Criando uma variável html e buscando ela no código
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const tempo = document.getElementById('start-pause')


const musicFocoInput = document.getElementById('alternar-musica')
const musica = new Audio('sons/luna-rise-part-one.mp3')


let tempoDecorridoSegundos = 5
let intervaloId = null



musica.loop = true //Quero que a musica fique tocando repedidas vezes 

musicFocoInput.addEventListener('change', () => {
    if(musica.paused){
        musica.play()
    }else{
        musica.pause()
    }

})




focoBt.addEventListener('click', () => {
    alterarContexto('foco')   // Chamando função para trocar a imagem ao clicar
    focoBt.classList.add('active') // Adicionando uma classe do css/hml neste botão
})


curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})


longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})

function alterarContexto(contexto) {            //Parametro (contexto) para percorrer o código e encontrar
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    });
    html.setAttribute('data-contexto', contexto)          // setAttribute serve para definir ou modificar elementos, neste caso haverá a modificação de imagem (src)
    banner.setAttribute('src', `imagens/${contexto}.png`)

    switch (contexto) {
        case "foco":

            titulo.innerHTML = ` 
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;

        case "descanso-curto":
            titulo.innerHTML = `
              Que tal dar uma respirada <br>
            <strong class="app__title-strong"> Faça uma  pausa curta!</strong>`
            break;


        case "descanso-longo":
            titulo.innerHTML = `
           Hora de voltar à superfície.
           <strong class = "app__title-strong">Faça uma pausa longa</strong>`
            break;

        default:
            break;
    }

}


//Temporizador
const contagemRegressiva = () => {
    iniciar()   //Referenciando o novo método
    tempoDecorridoSegundos -= 1  // Tirando valor (Decrementado o valor do temporizador) 
 }

tempo.addEventListener('click', contagemRegressiva)


function iniciar(){
    intervaloId = setInterval(contagemRegressiva, 1000)     // Método responsável por executar alguma função em um dterminado período de tempo 
}
