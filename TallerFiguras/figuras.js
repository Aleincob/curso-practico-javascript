// Código del cuadrado
console.group("Cuadrados");
/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm"); */

function perimetroCuadrado(lado) {
    return lado * 4;
}
/* console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm"); */

function areaCuadrado(lado) {
    return lado * lado;
}
/* console.log("El área del cuadrado es: " + areaCuadrado + "cm^2"); */
console.groupEnd();

// Código del triángulo
console.group("Triangulos");
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triángulo miden: "
    + ladoTriangulo1
    + "cm, "
    + ladoTriangulo2
    + "cm, "
    + baseTriangulo
    + "cm"
); */
/* const alturaTriangulo = 5.5;
console.log("La altura del triángulo mide" + alturaTriangulo + "cm"); */



function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
/* console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm"); */

function areaTriangulo(base, altura) {
    return (base * altura) / 2
} 
/* console.log("El área del triángulo es: " + areaTriangulo + "cm^2"); */

console.groupEnd();

//Código del Círculo
console.group("Círculo");

//Radio
/* const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm"); */


//Diametro
/* const diametroCirculo = radioCirculo * 2; */
/* console.log("El diámetro del círculo es: " + diametroCirculo + "cm"); */
function diametroCirculo(radio) {
    return radio * 2;
}
//PI
const PI = Math.PI;
console.log("PI es: " + PI);
//Circunferencia
/* const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: " + perimetroCirculo + "cm"); */
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//Área
/* const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es: " + areaCirculo + "cm^2"); */
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
console.groupEnd();


//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo
function calcularPerimetroTriangulo() {
    const inputl1 = document.getElementById("inputTriangulo-l1");
    const value1 = Number(inputl1.value);

    const inputl2 = document.getElementById("inputTriangulo-l2");
    const value2 = Number(inputl2.value);

    const inputbase = document.getElementById("inputTriangulo-base");
    const value3 = Number(inputbase.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert (perimetro);
}

function calcularAreaTriangulo() {
    const inputbase = document.getElementById("inputTriangulo-base");
    const value3 = Number(inputbase.value);

    const inputaltura = document.getElementById("inputTriangulo-altura");
    const value4 = Number(inputaltura.value);

    const area = areaTriangulo(value3, value4);
    alert (area);
}

//Circulo
function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}
