
var altura = 0
var largura = 0
var vida = 1 ;
var tempo = 60;










function ajustaTamanhoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

var crono = setInterval(function(){

	tempo -= 1;
	if (tempo <0) {
 	clearInterval(crono);
 	clearInterval(mosquito);
 	window.location.href = "vitoria.html";
	}
	else
	{
	document.getElementById('tempo').innerHTML = tempo;
	}
},1000)

function posicaoRandomica() {
	if (document.getElementById("mosquito")) {

		document.getElementById("mosquito").remove();
		if (vida>3) {
				window.location.href = "gameOver.html";
			}

		document.getElementById("vida"+ vida).src = "imagens/coracao_vazio.png";
			

			vida++;
		
	}
	



	var eixoX = Math.floor(Math.random() * largura) - 90
	var eixoY = Math.floor(Math.random() * altura) - 90

	eixoX = eixoX < 0 ? 0 : eixoX
	eixoY = eixoY < 0 ? 0 : eixoY

	

	//criar o elemento html
	var mosquito = document.createElement('img')
	var tamanho = tamanhoAleatorio()
	if (tamanho <=1) {

		mosquito.style.width  = 50 + 'px';
		mosquito.style.Height = 45 + 'px';
		console.log(tamanho)

	}
	else{
		if (tamanho<=2) {

			mosquito.style.width  = 50 + 'px';
			mosquito.style.Height = 50 + 'px';
		}
		else{
			if (tamanho<=3) {

				mosquito.style.width  = 55 + 'px';

				mosquito.style.Height = 55 + 'px';
			}

		}

	}
	var retornoLado = lado();
	if (retornoLado==1) {
		console.log(213123)
		mosquito.style.transform = "rotateY(180deg)";

	}
	if (retornoLado==2){
		console.log('shurek')
		mosquito.style.transform = "rotateY(360deg)";

	}
	
	mosquito.src = 'imagens/mosquito.png'
	mosquito.style.left = eixoX + 'px'
	mosquito.style.top = eixoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = "mosquito"
	mosquito.onclick = function(){

		document.getElementById("mosquito").remove();

	}

	document.body.appendChild(mosquito)
	
}

function tamanhoAleatorio(){

	var tamanhoAleatorio = Math.random() * 3;

	return tamanhoAleatorio;


}

function lado(){

	var lado1 = Math.random() * 2;

	if(lado1 <=1) {
		return 1;
	}
	else{

		return 2;

	}
}