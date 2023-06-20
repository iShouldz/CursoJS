function gerartabuada(){
    let num = document.getElementById('entrada')
    let tab = document.getElementById('seltab')

    if(num.value.lenght == 0){num.value.length == 0
        window.alert("Digite um numero!")
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }

}