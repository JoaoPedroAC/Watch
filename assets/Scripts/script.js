// só consegui fazer o interval funcionar corretamente, pois utilizei o a varivel com o metodo construtor Date(), dentro do mesmo, pois ele tem que checar o metodo e executa-lo.

const myTime = document.getElementById('Time');
const cronos = document.querySelector('.cronometro');
// const timeButtom = document.getElementById('buton');
// const cronoButtom = document.getElementById('crono');
let timePassingOne;
let timePassingTwo;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Essa function é para controlar a execução e dos clicks de cada botão
const onIntervals = (func) => {
	if (func === watch) {
    timePassingOne = setInterval(watch, 1000);
    return clearInterval(timePassingTwo);
	}
	if (func === cronometer) {
    timePassingTwo = setInterval(cronometer,1000);
    return clearInterval(timePassingOne);
	}
};
// aqui é a função do meu relógio
function watch() {
  cronos.style.display='none';
	const time = new Date();
	let timer = time.toLocaleString('pt-BR', {
		hour12: false,
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	});
	myTime.innerHTML = timer;
}
// aqui é a função do meu cronometro
const cronometer = () => {
  cronos.style.display='flex';
  if(seconds>58){
    seconds=0;
    minutes++;
  }
  if(minutes>58){
    minutes=0;
    hours++;
  }
  seconds++;
	myTime.innerHTML = `${zeroLeft(hours)}:${zeroLeft(minutes)}:${zeroLeft(seconds)}`;
};
// vai colocar 0 na esquerda
const zeroLeft =(numeric)=> numeric < 10 ? `0${numeric}`: numeric;

// let timePassing;
// if (!timeButtom.onclick) {
// setInterval(watch, 1000);
// } else if (cronoButtom) {
// 	clearInterval(timePassing);
// }
