var array = []
var seltab = window.document.getElementById('seltab') 
var entrada = window.document.getElementById('entrada')

function tratamento(){
    if(Number(entrada.value.lenght) == 0 || Number(entrada.value) == 0 || ((Number(entrada.value) > 100) || (Number(entrada.value < 1)))){
        window.alert('NUMERO NÃO PODE SER VAZIO, TER VALOR 0 OU VALOR ABAIXO DE 0/ACIMA DE 100')
    }else{
        if(presenteArray(Number(entrada.value)) == 'denied'){
            window.alert('VALOR JÁ PRESENTE NO ARRAY')
        }else{
            adicionarArray(Number(entrada.value))
        }
    }
}

function presenteArray(n){
    if(array.indexOf(Number(entrada.value)) != -1){
        return 'denied'
    }else{
        return 'allow'
    }
}

function adicionarArray(n){
    let item = document.createElement('option')
    array.push(Number(entrada.value))
    item.text = `Valor ${entrada.value} adicionado!`
    seltab.appendChild(item)
}

function finalizar(){
    if(array.length == 0){
        window.alert("ADICIONE VALORES PARA FINALIZAR!")
    }else{
        var maior = Number(array[0])
    var menor = Number(array[0])
    var saida = window.document.getElementById('saida')
    var soma = 0
    

    for(let pos in array){
        soma += array[pos]
        if(array[pos] > maior){
            maior = array[pos]
        }else if(array[pos] < menor){
            menor = array[pos]
        }
    }

    var media = soma/array.length
    saida.innerHTML = ''
    saida.innerHTML += `<p> Ao todo temos ${array.length} números cadastrados!</p>` 
    saida.innerHTML += `<p> O maior valor informado foi ${maior} </p>`
    saida.innerHTML += `<p> O menor valor informado foi ${menor} </p>`
    saida.innerHTML += `<p> A soma dos valores informados foi ${soma} </p>`
    saida.innerHTML += `<p> A media dos valores informados foi ${media} </p>`
    }
    
}





