function contar(){
    var inicio = window.document.getElementById("inicio")
    var fim = window.document.getElementById("fim")
    var passo = window.document.getElementById("passo")

    var resultado = window.document.getElementById("div2")
    var saida = ''
    if(inicio == null){
        window.alert("IMPOSSIVEL CONTAR!")
    }else{
        if(passo.value > 0 && fim.value > 0){
            for(i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)){
                saida += i + '->'
            }
            resultado.innerText = saida
        }else if(passo.value <= 0 || fim.value <= 0 || inicio.value <= 0){
            window.alert("Não é possivel => 0 ou negativo")
        }
        
    }
    

}