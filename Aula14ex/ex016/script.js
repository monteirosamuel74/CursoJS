function contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('contando')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
       res.innerHTML = '[ERRO!] Dados faltando'
    } else {
        
        res.innerHTML = 'Contando: <br>'
        //res.innerHTML += `${inicio.value} &#8594`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i<f){
            for(let c = i; c<=f;c+=p){
                res.innerHTML += `${c} &#8594`
            }
        } else {
            for(let c = i; c>=f; c-= p) {
                res.innerHTML += `${c} &#8594`
            }
        }
        res.innerHTML += ` \u{1F3C1}`

    }
}

