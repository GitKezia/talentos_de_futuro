
// variáveis do ator
let atorX = 85;
let atorY = 366;
let colisao = false; 
let meusPontos = 0;

function mostraAtor(){
    image(imagemDoAtor, atorX, atorY, 30, 30);
}


function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    atorY -= 3;
    
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      atorY += 3;
    
    }
    
  }
}

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(carrosX[i], carrosY[i], comprimentoCarro, alturaCarro, atorX, atorY, 15);
    if(colisao){
      voltaAtorParaPosicaoinicial();
        somColisao.play();
      if(pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoinicial(){
  atorY = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,0,255));
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if(atorY < 15){
    meusPontos += 1;
    somPontos.play();
    voltaAtorParaPosicaoinicial();
 }
  
}

function pontosMaiorQueZero(){
  return meusPontos > 0;

}

function podeSeMover(){
  return atorY < 366;
}

