//Funciones helpers
function esPar(numerito) {
    return (numerito % 2 === 0);
}

function promedioMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;    
}

//Calculadora de medianas

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = promedioMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista [mitad];
        return personitaMitad;
    }
}

//Mediana General
const salariosPeru = peru.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosPeruSorted = salariosPeru.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);


const medianaGeneralPeru = medianaSalarios(salariosPeruSorted)

//Mediana del top 10%
const spliceStart  = (salariosPeruSorted.length * 90) / 100; 
const spliceCount  = salariosPeruSorted.length - spliceStart; 


const salariosPeruTop10 = salariosPeruSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Peru = medianaSalarios(salariosPeruTop10);


console.log ({
    medianaGeneralPeru,
    medianaTop10Peru,
});