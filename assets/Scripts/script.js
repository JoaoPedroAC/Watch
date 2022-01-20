// só consegui fazer o interval funcionar corretamente, pois utilizei o a varivel com o metodo construtor Date(), dentro do mesmo, pois ele tem que checar o metodo e executa-lo.

const myTime = document.getElementById('Time');
const cronos = document.querySelector('div.cronometro');
let timePassingOne;
let timePassingTwo;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Essa function é para controlar a execução e dos clicks de cada botão
const onIntervals = (func) => {
	if (func === watch) {
    timePassingOne = setInterval(watch, 1000);
     clearInterval(timePassingTwo);
     return timePassingOne;
	}
	if (func === cronometer) {
     clearInterval(timePassingOne);
    return cronometer();
	}
  if (func === startCronometer) {
    timePassingTwo = setInterval(startCronometer, 1000);
     return timePassingTwo;
	}
  stopCronometer();
  countZero();
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

// vai colocar 0 na esquerda
const zeroLeft =(numeric)=> numeric < 10 ? `0${numeric}`: numeric;

// aqui é onde se inicia a função do meu cronometro
const cronometer = () => {
  cronos.style.display='flex';
  myTime.innerHTML = `${zeroLeft(hours)}:${zeroLeft(minutes)}:${zeroLeft(seconds)}`;
};

// function que inicia o funcionamento
const startCronometer=()=>{
  if(seconds>59){
      seconds=0;
      minutes++;
    }
  if(minutes>59){
      minutes=0;
      hours++;
    }
  myTime.innerHTML = `${zeroLeft(hours)}:${zeroLeft(minutes)}:${zeroLeft(seconds++)}`;
  // caso o secods++ estiver acima do innerHTML ele vai contar com 1 a mais
  // seconds++;
}

// function que para o funcionamento
const stopCronometer = (varivel) => {
  if(seconds === 0) return alert('favor clicar em iniciar!');
  myTime.style.color = 'red';
  setTimeout(function(){
  myTime.style.color = 'black';
  },1000);
  clearInterval(varivel);
};

// function que zera o contador
const countZero = (varivel) =>{
  seconds = 0;
  minutes = 0;
  hours = 0;
  myTime.innerHTML = `${zeroLeft(hours)}:${zeroLeft(minutes)}:${zeroLeft(seconds)}`
  clearInterval(varivel);
}

/*
// Resolução do meu professor!
// Os códigos esta dentro da function relogio, para não ficarem no global.
// Integrei alguns códigos meus junto aos códigos do meu professor,
// porem há um delay na mudança de cronometro para relogio.
// Essa função iniciará as funções de um relógio.
function relogio() {
	const myTime = document.getElementById('Time');
	const defaultColor = getComputedStyle(myTime).color;
	let seconds = 0;
	let timer;
	// Aqui criará a hora!
	function hourCreate(second) {
		myTime.style.color = defaultColor;
		let data = new Date(second * 1000);
		if (!second && second !== 0) {
			data = new Date()
		}
		return data.toLocaleTimeString('pt-BR', {
			hour12: false,
			timeZone: 'GMT',
		});
	}
	// A partir daqui tudo são clicks dos botões do HTML!
	document.addEventListener('click', function (e) {
		const element = e.target;
    // Ao clicar no butão 'Relógio' irá iniciar a contagem;
		if (element.classList.contains('relogio')) {
			document.getElementsByClassName('cronometro')[0].style.display = 'none';
			clearInterval(timer);
			timer = setInterval(function () {
				myTime.innerHTML = hourCreate();
			}, 1000);
		}
    // Ao clicar no butão 'Cronometro' irá aparecer os demais botões;
		if (element.classList.contains('cronometer')) {
			clearInterval(timer);
			document.getElementsByClassName('cronometro')[0].style.display = 'flex';
			myTime.innerHTML = hourCreate(seconds);
		}
    // Ao clicar no butão 'Iniciar' irá iniciar a contagem;
		if (element.classList.contains('start')) {
			clearInterval(timer);
			timer = setInterval(function () {
				myTime.innerHTML = hourCreate(seconds++);
			}, 1000);
		}
    // Ao clicar no butão 'Parar' vai parar a contagem;
		if (element.classList.contains('stop')) {
			timer = clearInterval(timer);
			if (seconds === 0) return alert('Por favor espere o tempo começar!');
			myTime.innerHTML = hourCreate(seconds);
			myTime.style.color = 'red';
		}
    // Ao clicar no butão 'Zerar' irá parar a contagem e vai zera-la;
		if (element.classList.contains('zero')) {
			timer = clearInterval(timer);
			seconds = 0;
			myTime.innerHTML = hourCreate(seconds);
		}
	});
}
relogio();
*/