var valores = [8,1,7,4,2,9]
valores.sort()
//console.log(valores[0]) //é um jeito de fazer o mesmo de baixo só que mais enxuto.

for(var pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) // essa função for diz: enquanto os valores da variável estiverem dentro e/ou abaixo da quantidade de elementos do array, a variável posição ou pos será acrescentada em seu valor +1
}

//para cada posição na variável composta, ou seja, para cada posição em "valores", mostre o num pos. o For só funciona para arrays e objetos. Todo array em javascript é um object.

for (let pos in valores) {
console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

