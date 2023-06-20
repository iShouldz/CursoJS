var agora = new Date()

function alterar(){
    var nome = window.document.getElementById('nome')
    var div1 = window.document.getElementById('div1')
    
    div1.innerText += nome.value
    if(nome.value == "Pedro"){
        div1.innerText = "Ola, ADM!\n"
        div1.innerHTML += `Agora são ${agora.getHours()} horas, espero que seja um bom dia!`
    }else{
        div1.innerHTML = `Olá, visitante! ${nome.value}`
    }
}