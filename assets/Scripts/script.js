// só consegui fazer o interval funcionar corretamente, pois utilizei o a varivel com o metodo construtor Date(), dentro do mesmo, pois ele tem que checar o metodo e executa-lo.

const myTime = document.getElementById('Time');
const timeButtom = document.getElementById('buton');
const cronoButtom = document.getElementById('crono');
let timePassingOne;
let timePassingTwo;

// Essa function é para controlar a execução e dos clicks de cada botão
const onIntervals = (func) => {
	if (func === watch) {
    clearInterval(timePassingTwo);     
    timePassingOne = setInterval(watch, 1000);
    return timePassingOne;
	}
	if (func === cronometer) {
    clearInterval(timePassingOne);
    timePassingTwo = setInterval(cronometer,1000);
    return timePassingTwo;
	}
};
// aqui é a função do meu relógio
function watch() {
	const time = new Date();
	let timer = time.toLocaleString('pt-BR', {
		hour12: false,
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	});
	return myTime.innerHTML = timer;
}
// aqui é a função do meu cronometro
const cronometer = () => {
	return myTime.innerHTML = 'carai to aqui';
};

// let timePassing;
// if (!timeButtom.onclick) {
// setInterval(watch, 1000);
// } else if (cronoButtom) {
// 	clearInterval(timePassing);
// }
