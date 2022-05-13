/* function alturaTriangulo(lado1,lado2,base) {
    if(lado1 === lado2 && lado1 != base) {
        alert(`Isosceles`)
        const alturaTriangulo = Math.sqrt(lado1**2 - base**2 / 4)
        console.log(alturaTriangulo)
        return Math.sqrt(lado1**2 - base**2 / 4)
    } else {
        alert(`No lo sé`)
    }
}


function altura(lado1,lado2,base) {
    return Math.sqrt(lado1**2 - base**2 / 4);
    console.log("La altura de tu triangulo isosceles es" + altura + "cm");
}
 */
//Resolución

function alturaTriangulo(lado1,lado2,base) {
    if (lado1 != lado2) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenolado2 = base / 2;
        const trianguloPequenobase = lado1;

        const trianguloPequenoLadoBCuadrado = lado2 * lado2;
        const trianguloPequenoLadoBaseCuadrado = base * base;

        const trianguloPequenolado1 = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandealtura = trianguloPequenolado1;
        return trianguloGrandealtura;
    }
}





function altura(ladoA, ladoB, base) {
    return Math.sqrt(ladoA * ladoB - (base * base / 4));
}

function alturaTriangulo(ladoA, ladoB, base){
    if(ladoA == ladoB && ladoA != base){
        alert("Es un triángulo isosceles")
        const alturaResutlado = altura();
        alert(`La altura de tu triangulo es ${alturaResutlado} cm`)
    } 
    else {
        alert("No es un triángulo isosceles")
    } 
}