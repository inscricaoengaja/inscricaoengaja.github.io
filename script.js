let dataAtual = document.querySelector('.data-atual')
let dataEvento = document.querySelector('.data-evento')
let dia = document.querySelector('.dia')
let hrs = document.querySelector('.hrs')
let min = document.querySelector('.min')
let seg = document.querySelector('.seg')


let funcao = setInterval(function(){
    let data = new Date()
    let diaEvento = new Date('Nov 25. 2020 20:30:00')
    let resultadoData = diaEvento - data

    let dia = Math.floor(resultadoData / (1000 * 60 * 60 * 24));
    let horas = Math.floor((resultadoData % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((resultadoData % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((resultadoData % (1000 * 60)) / 1000);

    dia.innerHTML = dia
    hrs.innerHTML = horas
    min.innerHTML = minutos
    seg.innerHTML = segundos

    document.getElementById("dia").innerHTML = dia + " dia "
    document.getElementById("hrs").innerHTML = horas + " h "
    document.getElementById("min").innerHTML = minutos + " min "
    document.getElementById("seg").innerHTML = segundos + " seg "

    if (resultadoData < 0) {
        clearInterval(funcao);
        document.detElementbyId("dia").innerHTML = ""
        document.detElementbyId("hrs").innerHTML = ""
        document.detElementbyId("min").innerHTML = ""
        document.detElementbyId("seg").innerHTML = ""
        document.detElementbyId("botao").innerHTML = "ASSISTA AGORA"
    }
}, 1000);
    
    



    







