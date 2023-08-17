

let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] //valores é a caixinha com scroll onde os números aparecerão assim que forem digitados e atenderem aos parâmetros.


function isNumero(n) {
if(Number(n) >1 && Number(n) < 100) {
    return true
} else {
    return false
}
}

function inLista(n,l) {
if (l.indexOf(Number(n)) != -1) {
    return true
} else {
    return false
}
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    lista.appendChild(item)
    res.innerHTML = '' //essa parte aqui quer dizer que quando se adicionar novo número a mensagem abaixo: ao todo temos x números cadastrados vai sumir pois não está atualizada
    } else {
        window.alert('valor inválido ou já encontrado na lista')
    }
    
    //essa função abaixo após digitarmos o número no box e clicar em adicionar, ela automaticamente vai fazer com que o número adicionado seja apagado e o cursor voltará a piscar para adicionar outro
    num.value = ''
    num.focus()
}
function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicionar Valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
           if(valores[pos] < menor)
           menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}. </p>`
    }
}