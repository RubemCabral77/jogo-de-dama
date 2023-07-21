// Variáveis globais
let larguraTela = window.innerWidth;
let alturaTela = window.innerHeight;
let tamanho = window.innerWidth > window.innerHeight ? '10vh' : '10vw';
let container = document.getElementById("container");
let linhas = ["A", "B", "C", "D", "E", "F", "G", "H"];
const coresTabuleiro = ['#deb887', '#835737'];
// Função para redimensionar as casas do tabuleiro
function redimensionarCasa() {
    let tamanhoRedimensionado = window.innerWidth > window.innerHeight ? '10vh' : '10vw';
    let colunas = document.getElementsByClassName("coluna");
    for (let index = 0; index < colunas.length; index++) {
        const coluna = colunas[index];
        coluna.style.width = tamanhoRedimensionado;
        coluna.style.height = tamanhoRedimensionado;
    }
}

// Evento de redimensionamento da janela
window.addEventListener('resize', redimensionarCasa);

// Chamada inicial para redimensionar as casas do tabuleiro
redimensionarCasa();

// Criação das linhas e colunas do tabuleiro
linhas.forEach(letra => {
    const ordem = linhas.indexOf(letra);
    let ehPar = ordem % 2;

    const classeLinha = "linha";
    const idLinha = letra;
    const linha = document.createElement("div");

    linha.classList.add(classeLinha);
    linha.id = idLinha;
    container.appendChild(linha);

    for (let index = 1; index < 9; index++) {
        ehPar = !ehPar;
        let cor = ehPar ? coresTabuleiro[1] : coresTabuleiro[0];

        const classeColuna = "coluna";
        const idColuna = letra + "-" + index;

        const coluna = document.createElement("div");
        coluna.classList.add(classeColuna);
        coluna.id = idColuna;
        coluna.innerText = "";
        coluna.style.width = tamanho;
        coluna.style.height = tamanho;
        coluna.style.backgroundColor = cor;
        linha.appendChild(coluna);

        if (ordem <= 2 && cor === coresTabuleiro[1]) {
            coluna.classList.add('peca-preta');
        }
        if (ordem >= 5 && cor === coresTabuleiro[1]) {
            coluna.classList.add('peca-branca');
        }
    }
});
