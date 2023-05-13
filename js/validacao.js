function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = parseInt(chute)

    if (chuteNaoNumerico(numero)){
        elementoChute.innerHTML += '<div class="valor-invalido">Valor inválido: Não é um número<div>'
        return
    }

    if (numeroMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div class="valor-invalido">Valor inválido: O número precisa estar entre ${menorValor} e ${maiorValor}<div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2> Você Acertou!</h2>
            <h3> O número secreto é <span class="numero-secreto">${numeroSecreto}</span></h3>
            <button id="jogar-novamente" class="btn-jogar-novamente"> Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += '<div>O número secreto é menor <span class="seta">↓<span></div>'
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += '<div>O número secreto é maior <span class="seta">↑<span></div>'
    }



}

function chuteNaoNumerico(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}


document.body.addEventListener('click', event => {
    if (event.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})