let amigo = {nome: 'jose', 
sexo:'m', 
peso: 85.5,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
console.log(`${amigo.nome}, ${amigo.peso}KG`)
amigo.engordar(2)
console.log(`${amigo.nome}, ${amigo.peso}KG`)