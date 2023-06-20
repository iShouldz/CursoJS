function imparoupar(n){
    if(n % 2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}
array = [3,2,1]
copia = array
copia.sort()
console.log(array.values)
console.log(copia)
console.log(array.length)
console.log(imparoupar(6))