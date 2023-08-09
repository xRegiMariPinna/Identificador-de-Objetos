var objectDetector= "";

var img = "";
var objects = [];
var verificar = "";


function preload(){
  img = loadImage('imagem1.jpg');
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status: Detectando Objetos";
}

function modelLoaded() {
  console.log("Modelo Carregado!")
  verificar = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  } else{
  console.log(results);
  objects = results;
}
}


function draw() {
  if (verificar != undefined) {
  	  image(img, 0, 0, 640, 420);
    for (var i = 0; i < objects.length; i++) {
      document.getElementById("status").innerHTML = "Status: Objetos Detectados";

      fill(0, 0, 0);
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent + "%", objects[i].x + 5, objects[i].y + 15);
      noFill();
      stroke(255, 0, 255);
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
  }
}
