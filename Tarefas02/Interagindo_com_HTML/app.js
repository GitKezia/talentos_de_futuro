let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado');
}

function exibirAlerta() {
    alert('Eu amo JS');
}

function exibirPrompt() {
    let cidade = prompt('Nomeie uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você. `);

}

function somandoDoisNumeros(){
    let numero1 = parseInt(prompt('Digite um número'));
    let numero2 = parseInt(prompt('Digite mais um número'));

    let resultado = numero1 + numero2;
    alert(`${numero1} mais ${numero2} é igual a ${resultado}`);
}
