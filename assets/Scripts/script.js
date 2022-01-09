const myTime = document.getElementById('Time');
const timeButtom = document.getElementById('buton');
const cronoButtom = document.getElementById('crono');

// aqui é a função do meu relógio
function watch() {
	// só consegui fazer o interval funcionar corretamente, pois utilizei o a varivel com o metodo construtor Date(), dentro do mesmo, pois ele tem que checar o metodo e executa-lo.
	setInterval(function () {
		const time = new Date();
		let timer = time.toLocaleString('pt-BR', {
			hour12: false,
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		});
		myTime.innerHTML = timer;
	}, 1000);
}
const timePassing = setInterval(watch, 1000);

const cronometer = () => {
	clearInterval(timePassing);
	myTime.innerHTML = 'carai to aqui';
};
