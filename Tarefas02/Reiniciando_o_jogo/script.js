// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculoIMC(altura, peso) {
    return peso / (altura * altura);
}

let resultadoIMC = calculoIMC(1.75, 66);
console.log(resultadoIMC);

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calculoFatorial(numero){
    if(numero === 0 || numero === 1){
        return 1;
    }

    let fatorial = 1;
    for(let i = 2; i <= numero; i++){
        fatorial *= i;
    }

    return fatorial.toFixed(2);
}

let numero = 10;
let resultado = calculoFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
}

let valorEmDolar = 50;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calculoPerimetro(altura, largura){

    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
}

let altura = 3;
let largura = 5;
calculoPerimetro(altura, largura);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calculoSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;

    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

let raio = 4;
calculoSalaCircular(raio);

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(numero2){
    for(let i = 0; i <= 10; i++){
        let resultado = numero2 * i;
        console.log(`${numero2} x ${i} = ${resultado}`);
    }
}

let numero2 = 11;
tabuada(numero2);
