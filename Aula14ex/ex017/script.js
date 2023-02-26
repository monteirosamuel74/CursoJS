function tabuada(){
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')
    let i = 1
    let n = Number(num.value)
    res.innerHTML = ''
    if (num.value.length == 0){
        //window.alert('[ERRO] Informe um número.')
        res.innerHTML = '[ERRO] Informe um número.'
    } else {
        while (i<=10) {
            res.innerHTML += `${n} x ${i} = ${n*i}<br>`
            i++
        }
        res.innerHTML += 'Ok até aqui'
    }
}