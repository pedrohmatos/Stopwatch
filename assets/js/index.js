const relogio = document.querySelector('#relogio');

const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');

let tempo; // referencia a function setInterval no escopo global
let tempoRolando = 0;
iniciar.addEventListener('click', () => {
    clearInterval(tempo);
    tempo = setInterval(() => {
        relogio.innerHTML = `${tempoRolando}`;
        tempoRolando++;
        console.log('Rolando')
    }, 1000);
    relogio.style.cssText = `color: green`;
});

pausar.addEventListener('click', () => {
    clearInterval(tempo);
    relogio.style.cssText = `color: red`;
    console.log('Pausado');
});

zerar.addEventListener('click', () => {
    tempoRolando = 0;
    relogio.innerHTML = `${tempoRolando}`;
    relogio.style.cssText = `color: auto`;
    console.log('Zerado');
});
