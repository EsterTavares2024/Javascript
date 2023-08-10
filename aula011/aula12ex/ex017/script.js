function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por Favor, Digite um número!')
    } else {
    let n = Number(num.value) // essa variável vai ser o número que a pessoa digitou
    let c = 1
    tab.innerHTML = ''
    while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }
 }
}