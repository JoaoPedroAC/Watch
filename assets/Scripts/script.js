// só consegui fazer o interval funcionar corretamente, pois utilizei o a varivel com o metodo construtor Date(), dentro do mesmo, pois ele tem que checar o metodo e executa-lo.

const myTime = document.getElementById('Time');
const timeButtom = document.getElementById('buton');
const cronoButtom = document.getElementById('crono');
let timePassingOne;
let timePassingTwo;

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
