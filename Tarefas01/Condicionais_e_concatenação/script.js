// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaDaSemana = prompt('Qual é o dia da semana?');

if (diaDaSemana == 'Sábado') {
    alert ('Bom fim de semana');

}else if (diaDaSemana == 'Domingo') {
    alert ('Bom fim de semana');

}else {
    alert('Boa semana!')
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt('Digite um número positivo ou negativo');

if(numero >=0) {
    alert("Número positivo!");
} else {
    alert("Número negativo!");
}

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuaçao = 3;

if (pontuaçao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoDaConta = 1000;
alert(`Seu saldo da conta é ${saldoDaConta}`);

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nomeUsuario = prompt("Insira seu nome");

alert(`Boas vindas, ${nomeUsuario}`);