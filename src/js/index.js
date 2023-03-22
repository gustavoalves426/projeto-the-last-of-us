// comentario linear
/* comentario em bloco */
/* sempre pensar no passo a passo do codigo */

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

/*const botao1 =document.getElementById('botao1');
botao1.addEventListener('click', () => {
	console.log('clicouno botao 1');
})
*/
botoesCarrossel.forEach((botao, indice) => {
	botao.addEventListener('click', () => {
		const botaoSelecionado = document.querySelector('.selecionado');
		botaoSelecionado.classList.remove('selecionado');

		botao.classList.add('selecionado');

		const imagemAtiva = document.querySelector('.ativa');
		imagemAtiva.classList.remove('ativa');

		imagens[indice].classList.add('ativa');

	})
})