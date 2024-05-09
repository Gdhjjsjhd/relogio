const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');

function semTempoItmao(){
    const tempo = new Date();


    const horaRotacao = (360/12) * tempo.getHours();
    const minutoRotacao = (360/60) * tempo.getMinutes();
    const segundoRotacao = (360/60) * tempo.getSeconds();


    hora.style.transform = `rotate(${horaRotacao}deg)`
    minuto.style.transform = `rotate(${minutoRotacao}deg)`
    segundo.style.transform = `rotate(${segundoRotacao}deg)`



}


semTempoItmao()


setInterval(semTempoItmao, 1000)