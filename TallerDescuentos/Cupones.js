function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

const cupones = [
  {
    nombre: "Cupon-1",
    descuento: 15,
  },
  {
    nombre: "Cupon-2",
    descuento: 25,
  },
  {
    nombre: "Cupon-3",
    descuento: 30,
  },
]; 

const cuponDeValorValido = function(cupon) {
  return cupon.nombre === cuponValue;
};

const userCoupon = cupones.find(cuponDeValorValido);

if(!userCoupon) {
  alert(`El cupón ${cuponValue} no es válido`);
} else {
  const descuento = userCoupon.discount;
  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}


  function onClickButtonPrecioDescuento() {
    const inputPrecio = document.getElementById("inputPrecio");
    const valorPrecio = inputPrecio.value;

    const inputCupon = document.getElementById("inputCupon");
    const valorCupon = inputCupon.value;

  
    const precioConDescuento = calcularPrecioConDescuento(valorPrecio, descuento);

    const ResultadoP = document.getElementById("ResultadoP")
    ResultadoP.innerText = `El precio con descuento son: $ ${precioConDescuento}`;
  }
