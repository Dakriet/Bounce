


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
var x = 0;
var y = 0;

function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  
}

  if(y >= 0) {
  y++; 
  }
  if (x >= 0){
    x++;
  }
  if (x <= 1280){
    x--
  }
  if (y <= 720){
    y--
  }


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // stel vulkleur in
  fill(100, 100, 255);

  // teken een cirkel
  ellipse(x,y,80,80);

  x = x + speedX
  y = y + speedY
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}