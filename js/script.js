function circulo() {
    var elemento1 = document.getElementById("contorno");
    elemento1.style.display = "block";
    var elemento2 = document.getElementById("imagen");
    elemento2.style.display = "none";
    const figura = document.getElementById("figura");
    figura.classList.toggle("circulo");
}

function rectangulo() {
    var elemento1 = document.getElementById("contorno");
    elemento1.style.display = "block";
    var elemento2 = document.getElementById("imagen");
    elemento2.style.display = "none";
    const figura = document.getElementById("figura");
    figura.classList.toggle("rectangulo");
}

function desgradado() {
    var elemento1 = document.getElementById("contorno");
    elemento1.style.display = "block";
    var elemento2 = document.getElementById("imagen");
    elemento2.style.display = "none";
    const figura = document.getElementById("figura");
    figura.classList.toggle("degradado");
}

function ondas() {
    var elemento1 = document.getElementById("contorno");
    elemento1.style.display = "block";
    var elemento2 = document.getElementById("imagen");
    elemento2.style.display = "none";
    const figura = document.getElementById("figura");
    figura.classList.toggle("ondas");
}

function gif() {
    var elemento1 = document.getElementById("contorno");
    elemento1.style.display = "none";
    var elemento2 = document.getElementById("imagen");
    elemento2.style.display = "block";
  }
  

function rombo() {
    var elemento1 = document.getElementById("contorno");
    elemento1.style.display = "block";
    var elemento2 = document.getElementById("imagen");
    elemento2.style.display = "none";
    const figura = document.getElementById("figura");
    figura.classList.toggle("rombo");
}

function triangulo() {
    var elemento1 = document.getElementById("contorno");
    elemento1.style.display = "block";
    var elemento2 = document.getElementById("imagen");
    elemento2.style.display = "none";
    const figura = document.getElementById("figura");
    figura.classList.toggle("triangulo");
}

function panel_lateral(){
    const elemento =document.getElementById("panelLateral");
    elemento.classList.toggle("activo");
}

function panel_superior(){
    const elemento =document.getElementById("panelSuperior");
    elemento.classList.toggle("activo");
}

function fondo_body(){
    const elemento = document.getElementById("body");
    elemento.classList.toggle("img-2")
}
 
var elemento2 = document.getElementById("imagen");
elemento2.style.display = "none";