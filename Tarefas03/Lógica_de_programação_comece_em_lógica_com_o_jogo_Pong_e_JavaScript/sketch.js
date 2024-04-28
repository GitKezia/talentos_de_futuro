// variáveis da bolinha
let bolinhaX = 300;
let bolinhaY = 200; 
let diametro = 15;
let raio = diametro / 2;

//  velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// variáveis da raquete
let raqueteX = 5;
let raqueteY = 150;

// variáveis raquete do oponente
let raqueteXOponente = 585;
let raqueteYOponente = 150;
let velocidadeYOponente;


let colidiu = false;

// placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

// sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(raqueteX, raqueteY);
  movimentaMinhaRaquete();
  // verificaColisaoRaquete();
  verificandoColisaoRaquete(raqueteX, raqueteY);
  mostraRaquete(raqueteXOponente, raqueteYOponente);
  movimentaRaqueteOponente();
  verificandoColisaoRaquete(raqueteXOponente, raqueteYOponente);
  incluiPlacar();
  marcaPonto();
  

}

function mostraBolinha(){
  circle(bolinhaX, bolinhaY, diametro);
}

function movimentaBolinha(){
   bolinhaX += velocidadeXBolinha;
   bolinhaY += velocidadeYBolinha;
}

function movimentaBolinha(){
  bolinhaX += velocidadeXBolinha;
  bolinhaY += velocidadeYBolinha;
  
}

function verificaColisaoBorda(){
  if(bolinhaX + raio > width || bolinhaX -raio < 0){
    velocidadeXBolinha *=  -1;
  }
  
  if(bolinhaY + raio > height || bolinhaY - raio < 0) {
    velocidadeYBolinha *= -1;
    
  }

  
}

function mostraRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
  
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    raqueteY -= 10;
    
  }
  if (keyIsDown(DOWN_ARROW)){
    raqueteY += 10;
    
  }
}

function verificaColisaoRaquete(){
  if(bolinhaX - raio < raqueteX + raqueteComprimento && bolinhaY - raio < raqueteY + raqueteAltura && bolinhaY + raio > raqueteY) {
    velocidadeXBolinha *= -1;
    raquetada.play();

  }
}

function verificandoColisaoRaquete(x, y){
  colidiu = 
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, bolinhaX, bolinhaY, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
    
  }
}


function movimentaRaqueteOponente(){
    if (keyIsDown(87)){
    raqueteYOponente -= 10;
    
  }
  if (keyIsDown(83)){
    raqueteYOponente += 10;
    
  }
  
}

function incluiPlacar(){
  stroke(255);
  textSize(16);
  textAlign(CENTER);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);

}

function marcaPonto(){
  if(bolinhaX > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (bolinhaX < 10){
    pontosDoOponente += 1;
    ponto.play();

  }
}