/* const precioInicial = 120;
const descuento = 18; */

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPrecioDescuento() {
    const inputPrecio = document.getElementById("inputPrecio");
    const valorPrecio = inputPrecio.value;

    const inputDescuento = document.getElementById("inputDescuento");
    const valorDescuento = inputDescuento.value;

    const precioConDescuento = calcularPrecioConDescuento(valorPrecio, valorDescuento);

    const ResultadoP = document.getElementById("ResultadoP")
    ResultadoP.innerText = `El precio con el ${inputDescuento.value}% de descuento es: $ ${precioConDescuento}`;
}



/* console.log({
    precioInicial,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}) */

/* ResultadoP.innerText = "El precio con descuento son: $" + precioConDescuento; */