// só consegui fazer o interval funcionar corretamente, pois utilizei o a varivel com o metodo construtor Date(), dentro do mesmo, pois ele tem que checar o metodo e executa-lo.

const myTime = document.getElementById('Time');
const timeButtom = document.getElementById('buton');
const cronoButtom = document.getElementById('crono');

const onIntervals = (func) => {
	let timePassingOne = setInterval(watch, 1000);
	let timePassingTwo = setInterval(cronometer, 1000);
	if (func === watch && func !== cronometer) {
		clearInterval(timePassingTwo);
		return (myTime.innerHTML = watch());
	}
	if (func === cronometer && func !== watch) {
		clearInterval(timePassingOne);
		return (myTime.innerHTML = cronometer());
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
	return timer;
}

const cronometer = () => {
	return 'carai to aqui';
};

// let timePassing;
// if (!timeButtom.onclick) {
// setInterval(watch, 1000);
// } else if (cronoButtom) {
// 	clearInterval(timePassing);
// }
