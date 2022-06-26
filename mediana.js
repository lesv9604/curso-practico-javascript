
function calcularMediaAricmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista
}


const list = [
    100,
    200,
    500,

    4000000,
];
const mitadLista1 = parseInt(list.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(list.length)) {
    const elemento1 = list[ mitadLista1 - 1 ];
    const elemento2 = list[ mitadLista1 ];

    const promedioElemento1y2 = calcularMediaAricmetica([ elemento1,
        elemento2
    ]);
    mediana = promedioElemento1y2;
} else {
    mediana = list[ mitadLista1 ];
}