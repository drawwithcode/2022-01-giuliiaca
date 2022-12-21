function setup() {
  //creiamo un canvas con delle dimensioni quadrate - che sarà lo sfondo della nostra opera
  createCanvas(750, 750);
  background(220); //definisco il colore dello sfondo
}

function draw() {
  //condizione che vale per tutti i rettangoli a venire
  //diamo uno stroke per la parte di grafica sottostante ai cerchi in modo che si venga a creare una griglia
  stroke("black"); //ne definiamo il colore
  strokeWeight(1); //e lo spessore

  //tramite coordinate disegno ogni quadrato e gli attribuisco un colore
  //definisco quindi dimensione colore e posizione di ogni quadrato
  rect(0, 0, 250, 250);
  fill("green");
  rect(0, 250, 250, 250);
  fill("purple");
  rect(0, 500, 250, 250);
  fill("darkgray");
  rect(250, 0, 250, 250);
  fill("yellow");
  rect(500, 0, 250, 250);
  fill("blue");
  rect(250, 250, 250, 250);
  fill("red");
  rect(500, 250, 250, 250);
  fill("lightblue");
  rect(250, 500, 250, 250);
  fill("pink");
  rect(500, 500, 250, 250);
  fill("lightgreen");

  noStroke(); //decido che da adesso in poi le figure generate non dovranno avere stroke

  //definisco tre variabili associando per ogni variabile un colore in modo tale da non dover sempre riscrivere i codici dei colori ma mi basti scrivere il nome della variabile
  let inside = color("#CC6600");
  let middle = color("#CC9900");
  let outside = color("#993300");

  //applico adesso una trasformazione di traslazione utilizzando push e pop, che significa che isolo la traformazione, costruendo dei blocchetti, che andrò a modificare di volta in volta sapendo di modificare una singola parte di opera
  push();
  translate(70, 50); //traslo definendo le coordinate del mio blocchetto
  fill(outside); //coloro l'ellisse con una delle variabili che ho definito prima, in questo caso "ouside"
  ellipse(50, 80, 200, 200); //definsico le coordinate e la grandezza dell'ellisse
  fill(middle);
  ellipse(70, 100, 120, 120);
  fill(inside);
  ellipse(60, 90, 80, 80);
  pop();

  //ripeto per ogni quadrato immaginario che mi sono prefigurata tramite la griglia di quadrati colorati costrita in precedenza
  push();
  translate(320, 50);
  fill(inside);
  ellipse(60, 90, 200, 200);
  fill(outside);
  ellipse(50, 80, 120, 120);
  fill(middle);
  ellipse(65, 80, 80, 80);
  pop();

  push();
  translate(560, 50);
  fill(middle);
  ellipse(60, 80, 200, 200);
  fill(outside);
  ellipse(40, 90, 120, 120);
  fill(inside);
  ellipse(40, 105, 80, 80);
  pop();

  push();
  translate(70, 300);
  fill(middle);
  ellipse(65, 100, 200, 200);
  fill(inside);
  ellipse(35, 85, 120, 120);
  fill(outside);
  ellipse(40, 85, 80, 80);
  pop();

  push();
  translate(320, 300);
  fill(inside);
  ellipse(65, 80, 200, 200);
  fill(middle);
  ellipse(60, 105, 120, 120);
  fill(outside);
  ellipse(65, 110, 80, 80);
  pop();

  push();
  translate(560, 300);
  fill(outside);
  ellipse(85, 95, 200, 200);
  fill(middle);
  ellipse(100, 80, 120, 120);
  fill(inside);
  ellipse(90, 90, 80, 80);
  pop();

  push();
  translate(70, 510);
  fill(inside);
  ellipse(65, 120, 200, 200);
  fill(outside);
  ellipse(70, 85, 120, 120);
  fill(middle);
  ellipse(80, 100, 80, 80);
  pop();

  push();
  translate(320, 510);
  fill(outside);
  ellipse(75, 110, 200, 200);
  fill(inside);
  ellipse(105, 90, 120, 120);
  fill(middle);
  ellipse(110, 105, 80, 80);
  pop();

  push();
  translate(560, 510);
  fill(middle);
  ellipse(70, 95, 200, 200);
  fill(inside);
  ellipse(55, 125, 120, 120);
  fill(outside);
  ellipse(40, 130, 80, 80);
  pop();
}

//Kandinsky, the third dimension
//Giuliana Concialini
