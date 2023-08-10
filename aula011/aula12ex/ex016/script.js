function contar() {
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    //função para emitir mensagem de alerta caso o início, fim e passo estiverem vazios e apessoa ter clicado em "contar" direto
    if (ini.value.length ==0 || fim.value.length == 0 || passo.value.lenght == 0) {
        window.alert('[ERRO] Faltam Dados!')
        res.innerHTML= 'Impossível Contar!'
    } else {
       res.innerHTML = 'Contando: </br>'

       //a função abaixo converte as variáveis em números e as declara para poder efetuar o for
       var i = Number(ini.value)
       var f = Number(fim.value)
       var p = Number(passo.value)
       if (p<=0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
       }
       if(i < f) {
        //Contagem crescente
        for(var c = i; c <=f; c += p) {
            res.innerHTML += `${c} \u{1F601}`
        }
       } else {
        
        //Contagem decrescente.
       for(var c = i; c >=f; c-=p) {
        res.innerHTML += ` ${c} \u{1F601}`
       }
    }
       res.innerHTML += `\u{1F3C1}`
    }
}