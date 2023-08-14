function soma(n1,n2) {
    return n1+n2 
}
console.log(soma(2,5)) //se eu não inserir um dos números, vai vir a msg NaN número não definido. Agora, se eu quiser, posso definir que se não passar o valor de n1 e inserir em "function soma (n1=0, n2" ele irá considerar n1=0