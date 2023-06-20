function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        foto.src = "manha.jpg"
        document.body.style.background = 'blue'
    }else if(hora >= 12 && hora < 18){
        foto.src = "tarde.jpg"
        document.body.style.background = 'yellow'
    }else{
        foto.src = "noite.jpg"
        document.body.style.background = 'rgb(2, 2, 77)'
    }
}

