var num = [5,8,2,9,3]
num[3] = 6 //o índice 3 vai receber o valor 6
num.push(7) //irá acrescentar mais um elemento de valor 7 ao array
// num.length para saber o comprimento, ou seja quantos elementos tem no array, no nosso caso, tem 5
num.sort() //vai pegar todos os elementos do array e por em ordem crescente
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[1]}`)

//a ordem em que se coloca as funções acima importa porque o sistema vai começar por ela

