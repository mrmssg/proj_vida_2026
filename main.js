const botoes = document.querySelectorAll(".botao");  // 
//seleciona todos os elementos HTML da página que possuem a classe "botao" e armazena na variável botoes
const textos = document.querySelectorAll(".aba-conteudo");
// seleciona todos os elementos HTML da página que possuem a classe "aba-conteudo" e armazena na variável textos
const contadores = document.querySelectorAll(".contador");
// seleciona todos os elementos HTML da página que possuem a classe "contador" e armazena na variável contadores


const tempoObjetivo1 = new Date("2026-05-10");
// cria a variável tempoObjetivo1 e atribui o valor a data 10 de maio de 2026
const tempoObjetivo2 = new Date("2026-08-25");
const tempoObjetivo3 = new Date("2026-08-14");


contadores[0].textContent = tempoObjetivo1;
//pega o valor armazenado na variável tempoObjetivo1 e exibe esse valor dentro do primeiro elemento [índice 0] encontrado em uma lista (ou NodeList) chamada contadores
contadores[1].textContent = tempoObjetivo2;
contadores[2].textContent = tempoObjetivo3;
contadores[3].textContent = tempoObjetivo3;

for (let i = 0; i < botoes.length; i++) { //para todo "i=0"; "i menor do que a largura da lista botoes"; adiciona 1 a "i", 
    botoes[i].onclick = function (){ // verifica onde o mouse foi clicado;
  for (let j = 0; j < botoes.length; j++) {
  botoes[j].classList.remove("ativo"); // remove a classe "ativo" do botão atual;
  textos[j].classList.remove("ativo"); // remove a classe "ativo" da aba atual;
}    
    botoes[i].classList.add("ativo"); // adiciona a classe "ativo" ao botão atual;
    textos[i].classList.add("ativo"); // adiciona a classe "ativo" a aba atual;
};
}




