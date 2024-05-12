// Criar uma função que exibe "Olá, mundo!" no console.

/* function cumprimento() {
    console.log('Olá, mundo!');
}

cumprimento(); */

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function cumprimento(nome) {
    console.log(`Olá, ${nome}!`);

}
cumprimento('Kezia');

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

/* function dobro(numero){
    console.log(numero * 2);
}
dobro(2); */

function dobro(numero){
    return numero * 2;

}

let resultadoDobro = dobro(5);
console.log(resultadoDobro);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

function numeros(numero1, numero2, numero3){
    return (numero1 + numero2 + numero3) / 3;

}

let media = numeros(4, 7, 10);
console.log(media);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function numeroMaior(a, b){
    return a > b ? a : b;
}

let encontraMaior = numeroMaior(25, 30);
console.log(encontraMaior);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multipicadoPorEleMesmo(numero) {
    return numero * numero;
}

let multiplicado = multipicadoPorEleMesmo(5);
console.log(multiplicado);