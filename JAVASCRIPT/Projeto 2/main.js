const html = document.querySelector('html');  // Criando uma variável html e buscando ela no código
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const tempo = document.getElementById('start-pause')
const musicFocoInput = document.getElementById('alternar-musica')
const iniciarouPausarBt = document.querySelector('#start-pause span')
const iniciarouPausarIcone = document.querySelector('.app__card-primary-butto-icon') 
const tempoNaTela = document.getElementById('timer')





const musica = new Audio('sons/luna-rise-part-one.mp3')
const musicaPlay = new Audio('sons/play.wav')
const musicaPause = new Audio ('sons/pause.mp3')
const musicabeep = new Audio ('sons/beep.mp3')


let tempoDecorridoSegundos = 1500
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
    if(tempoDecorridoSegundos <= 0){
    //musicabeep.play()
    alert('Tempo Finalizado !')
    zerar()
    return
    }
    tempoDecorridoSegundos -= 1  // Tirando valor (Decrementado o valor do temporizador) 
    mostrarTempo()
 }

tempo.addEventListener('click', iniciarouPausar) 




function iniciarouPausar(){
    if(intervaloId){
        musicaPause.play()
        zerar()
        return
    }
    musicaPlay.play()
    iniciarouPausarBt.innerHTML = `Pausar`  //é interessante utilizar o "TEXTCONTENT" para ter a mesma finalidade que o inner
    iniciarouPausarIcone.setAttribute('src', 'imagens/pause.png') //Trocar a Imagem
    intervaloId = setInterval(contagemRegressiva, 1000)     // Método responsável por executar alguma função em um dterminado período de tempo 
}

function zerar() {
    clearInterval(intervaloId)
    iniciarouPausarBt.textContent = "Começar"
    iniciarouPausarIcone.setAttribute('src', 'imagens/play_arrow.png')
    intervaloId = null
}

function mostrarTempo (){
    const tempo = new Date(tempoDecorridoSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: ''} )
    tempoNaTela.innerHTML = `${tempo}` //Aqui estamos exibindo no HTML o tempo que declaramos no tempoDecorridoSegundos
}
mostrarTempo()