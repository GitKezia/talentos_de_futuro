// variáveis do carro
let carrosX = [600, 600, 600, 600, 600, 600];
let carrosY = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 3, 4, 5, 2.5, 3.5];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], carrosX[i], carrosY[i], comprimentoCarro, alturaCarro);
  } 
}  

function movimentaCarro(){
  for(let i = 0; i< imagemCarros.length; i++){
    carrosX[i] -= velocidadeCarros[i];
  }
  
  
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    if(passouTodaTela(carrosX[i])){
    carrosX[i] = 600;
  }
 }
}

function passouTodaTela(carrosX){
  return carrosX < -50; 
  
}
