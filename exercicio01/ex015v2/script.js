function submeter(){
    var anoAtual = new Date()
    var anoUsuario = window.document.getElementById('anoNascimento')
    var res = window.document.getElementById('res')

    if(Number(anoUsuario.value) > anoAtual.getFullYear){
        window.alert('Dados incorretos!')
    }else{
        var sexo = window.document.getElementsByName('radsexo')
        var genero = ''
        var idade = anoAtual.getFullYear() - Number(anoUsuario.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked){
            genero = 'Homem'
        }else{
            genero = 'Mulher'
        }
        if(idade < 65){
            //Jovem
            if(genero == 'Mulher'){
                img.setAttribute('src', 'mulher.png')
            }else{
                img.setAttribute('src', 'homem.png')
            }
        }else{
            //Idoso
            if(genero == 'Mulher'){
                img.setAttribute('src', 'idosa.png')
            }else{
                img.setAttribute('src', 'idoso.png')
            }
        }
      
    }
    res.innerHTML= `ano: ${anoUsuario.value}, idade: ${idade}, genero: ${genero}`
    res.appendChild(img)

}