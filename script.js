let dataAtual = document.querySelector('.data-atual')
let dataEvento = document.querySelector('.data-evento')
let dia = document.querySelector('.dia')
let hrs = document.querySelector('.hrs')
let min = document.querySelector('.min')
let seg = document.querySelector('.seg')


let funcao = setInterval(function(){

    let resultadoData = Date.parse('Nov 25. 2020 20:30:00') - Date.now()

    let dia = Math.floor(resultadoData / (1000 * 60 * 60 * 24));
    let horas = Math.floor((resultadoData % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((resultadoData % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((resultadoData % (1000 * 60)) / 1000);

    dia.innerHTML = dia
    hrs.innerHTML = horas
    min.innerHTML = minutos
    seg.innerHTML = segundos


    if (resultadoData > 1000){
        document.getElementById("dia").innerHTML = dia + " dia ";
        document.getElementById("hrs").innerHTML = horas + " h ";
        document.getElementById("min").innerHTML = minutos + " min ";
        document.getElementById("seg").innerHTML = segundos + " seg ";
        document.getElementById("botao").innerHTML = "LINK DO CANAL";
        }
    else {
        clearInterval(funcao);
        document.getElementById("dia").innerHTML = "0 dia";
        document.getElementById("hrs").innerHTML = "0 h";
        document.getElementById("min").innerHTML = "0 min";
        document.getElementById("seg").innerHTML = "0 seg";
        document.getElementById("botao").innerHTML = "ASSISTA AGORA";
    }
}, 1000);
    
    



    







