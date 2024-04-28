// imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somTrilha;
let somPontos;
let somColisao;

function preload(){
  imagemDaEstrada = loadImage("images/estrada.png");
  imagemDoAtor = loadImage("images/ator-1.png");
  imagemCarro = loadImage("images/carro-1.png");
  imagemCarro2 = loadImage("images/carro-2.png");
  imagemCarro3 = loadImage("images/carro-3.png");
  imagemCarros = [imagemCarro2,imagemCarro, imagemCarro3, imagemCarro, imagemCarro3, imagemCarro2];
  
  somTrilha = loadSound("sons/trilha.mp3");
  somPontos = loadSound("sons/pontos.wav");
  somColisao = loadSound("sons/colidiu.mp3");
  
}