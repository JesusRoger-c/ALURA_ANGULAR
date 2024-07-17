const html = document.querySelector('html');  // Criando uma variável html e buscando ela no código
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('app__title')


focoBt.addEventListener('click', () => {
   alterarContexto('foco')   // Chamando função para trocar a imagem ao clicar
})


curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
})


longoBt.addEventListener('click', () => {
   alterarContexto('descanso-longo') 
})

function alterarContexto(contexto) {            //Parametro (contexto) para percorrer o código e encontrar
    html.setAttribute('data-contexto', contexto)          // setAttribute serve para definir ou modificar elementos, neste caso haverá a modificação de imagem (src)
    banner.setAttribute('src', `imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":

           titulo.innerHTML = ` 
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
           
           `
            break;
            case "descanso-curto":
            titulo.innerHTML = `
              Que tal dar uma respirada <br>
            <strong class="app__title-strong"> Faça uma <br> pausa curta!</strong>
            `
            break;
        default:
            break;
    }
}
