let amigo = {nome:'josé', 
sexo: 'M', 
peso: 85.4, 
engordar(p=0) {
console.log('Engordou')
this.peso += p
}}
amigo.engordar(2) //com isso aumenta 2kg no peso 85.4kg
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`) 

//se consegue por funções dentro de variáveis no objeto