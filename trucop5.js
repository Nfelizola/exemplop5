let imgBaralho;
let mesaWidth = 800;
let mesaHeight = 600;
let jogadorWidth = 200;
let jogadorHeight = 100;
let centerAreaWidth = 200;
let centerAreaHeight = 100;
let inicio=true;

function preload() {
  imgBaralho = loadImage('baralho.png'); // Carrega a imagem do baralho (ou use qualquer outra imagem para representar as cartas)
}

function setup() {
  createCanvas(mesaWidth, mesaHeight);
  noLoop();
  
}

function draw() {
  background(220);

  // Desenha a mesa
  drawTable();


  // apresenta jogadores se for inicio
  if (inicio){
    // Desenha as áreas dos jogadores
  drawPlayerArea(100, 100,  prompt("Qual seu nome "));
  drawPlayerArea(mesaWidth - jogadorWidth - 100, 100, "Jogador 2");
  drawPlayerArea(100, mesaHeight - jogadorHeight - 100, "Jogador 3");
  drawPlayerArea(mesaWidth - jogadorWidth - 100, mesaHeight - jogadorHeight - 100, prompt("Qual nome do seu Bot Amigo"));
  inico=false};
  drawCenterArea();
}

function drawTable() {
  // Desenha a mesa como um retângulo preenchido
  fill(34, 139, 34); // Verde para a mesa
  rect(0, 0, mesaWidth, mesaHeight);
}

function drawPlayerArea(x, y, playerName) {
  // Desenha a área do jogador como um retângulo preenchido com o nome do jogador
  fill(255); // Branco para a área do jogador
  rect(x, y, jogadorWidth, jogadorHeight);
  fill(0); // Preto para o texto
  textSize(16);
  textAlign(CENTER, CENTER);
  text(playerName, x + jogadorWidth / 2, y + jogadorHeight / 2);
}

function drawCenterArea() {
  let centerX = mesaWidth / 2 - centerAreaWidth / 2;
  let centerY = mesaHeight / 2 - centerAreaHeight / 2;

  // Desenha a área central como um retângulo sem preenchimento
  noFill();
  stroke(0); // Cor da borda preta
  image(imgBaralho, centerX + centerAreaWidth / 4, centerY + centerAreaHeight / 4, centerAreaWidth / 2, centerAreaHeight / 2);
  rect(centerX, centerY, centerAreaWidth, centerAreaHeight);
  for (i=0;i<126;i=i+42){
    fill(34, 139, 187);
    rect(335+i,210,40,60);
    }
    
}
