const lista1 = [
    1,
    2,
    4,
    2,
    3,
    2,
    5,
    6,
    4,
    2,
    1,
    2,
    1,
    4,
    3,
];

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[ elemento ]) {
            lista1Count[ elemento ] += 1;
        } else {
            lista1Count[ elemento ] = 1;
        }


    }
);


//Object.entries nos permite convertir un objeto a array
const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[ 1 ] - elementoB[ 1 ];
    }
);

const moda = lista1Array[ lista1Array.length - 1 ];

