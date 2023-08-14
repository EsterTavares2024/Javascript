
var num = [5,8,2,9,3]
//função para buscar um valor dentro da array: num.indexOf(7) java, tem o valor 7 no array? sim? que posição ele está? se não tiver, ele retornará -1
var pos = num.indexOf(4)
if (pos==-1) {
    console.log(`O valor não foi encontrado!`)
} else{
    console.log(`O valor 8 está na posição ${pos}`)
}
