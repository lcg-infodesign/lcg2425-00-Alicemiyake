

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  // put setup code here
  
}


function draw() {
  background(220);
  noStroke();
 let a = windowWidth/50;
  //creazione di 3 griglie di quadrati (grandi, medi, piccoli)


  //quadrati grandi
  let columns = windowHeight;
  let rows = windowWidth; 
  let rectSize = a;
  let colors= ["#ffb746","#bb2f76", "#c3ff43"] //creazione di un array "colors" di 3 colori 

  //determinazione posizione rettangoli grandi tramite il loop "for"
  for (let i=0; i<columns; i++){ //impostazione variabile "i" per le colonne

    for (let j=0; j<rows; j++){ //impostazione variabilie "j" per le righe 
      let x = i * rectSize;
      let y = j * rectSize;
      let randomColor = random(colors); //impostazione della variabile "randomColor" che corrisponde a un
      //colore random tra i 3 contenuti nell'array "colors"
      fill(randomColor);
      rect(x, y, rectSize, rectSize);  // Disegna il rettangolo nella posizione (x, y)
    }
  }


  //quadrati medi   
  let columns1 = windowHeight;  
  let rows1 = windowWidth; 
  let rectSize1 = 2*a/3; 
  let gapX=a/3; //spazio tra i due quadrati lungo le x
  let gapY=a/3; //spazio tra i due quadrati lungo le y
  let offsetTop=a/6; //margine in alto 
  let offsetLeft=a/6; //margine a sinistra (e di conseguenza a destra)

  //determinazione posizione rettangoli medi tramite il loop "for"
  for (let r=0; r<columns1; r++){ //impostazione variabile "r" per le colonne
  
    for (let c=0; c<rows1; c++){ //impostazione variabilie "c" per le righe
      let x=r*(rectSize1+gapX) + offsetLeft;
      let y=c*(rectSize1+gapY) + offsetTop;
      let randomColor = random(colors);
      fill(randomColor);
      rect(x,y,rectSize1,rectSize1);
    }
  }
  
  //quadrati piccoli 
  let columns2 = windowHeight; 
  let rows2 = windowWidth; 
  let rectSize2 = a/3; 
  let gapX2=2*a/3; 
  let gapY2=2*a/3; 
  let offsetTop2=a/3; 
  let offsetLeft2=a/3; 

  //determinazione posizione quadrati piccoli tramite il loop "for"
  for (let m=0; m<columns2; m++){ //impostazione variabile "m" per le colonne
  
    for (let n=0; n<rows2; n++){ //impostazione variabilie "n" per le righe
      let x=m*(rectSize2+gapX2) + offsetLeft2; 
      let y=n*(rectSize2+gapY2) + offsetTop2;
      let randomColor = random(colors);
      fill(randomColor);
      rect(x,y,rectSize2,rectSize2);
    }
  }
 
}


