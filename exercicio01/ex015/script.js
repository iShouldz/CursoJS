function verificar(){
    var anoAtual = new Date()
    var ano = window.document.getElementById('txtano')
    
    var res = window.document.getElementById('res')
    if(Number(ano.value.length) == 0 || Number(ano.value) > anoAtual){
        window.alert('Dados incorretos!')
    }else{
        var fsex = document.getElementsByName('radsexo')
        var genero = ''
        var idade = anoAtual.getFullYear() - Number(ano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'homem'
        }else{
            genero = 'mulher'
        }
        res.style.textAlign = 'center'
        if(idade < 60){
            if(genero == 'homem'){
                img.setAttribute('src', 'homem.png')
            }else{
                img.setAttribute('src', 'mulher.png')
            }
            //Jovem
        }else{
            if(genero == 'homem'){
                img.setAttribute('src', 'idoso.png')
            }else{
                img.setAttribute('src', 'idosa.png')
            }
            //Idoso

        }
        
        res.innerHTML = `${genero} com  ${idade}\n`
        res.appendChild(img)
    }
}


