function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            if (idade >= 0 && idade < 10) {
                gênero = 'criança'
                img.setAttribute('src', 'menino.jpg')
            }else if (idade < 21) {
                gênero = 'um jovem'
                img.setAttribute('src', 'homem-jovem.jpg')
            }else if (idade < 50) {
                gênero = 'homem'
                img.setAttribute('src', 'homem-adulto.jpg')
            }else {
                gênero = 'senhor'
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                gênero = 'criança'
                img.setAttribute('src', 'menina.jpg')
            }else if (idade < 21) {
                gênero = 'uma jovem'
                img.setAttribute('src', 'mulher-jovem.jpg')
            }else if (idade < 50) {
                gênero = 'mulher'
                img.setAttribute('src', 'mulher-adulta.jpg')
            }else {
                gênero = 'idosa'
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
    }
    
}
