console.log("Programacion funcional");

var global = 100;

function unCalculo(global) {
    var otrav = global;
    otrav++;
    return otrav;
}

console.log(global);
// console.log(unCalculo());

const miLista = [3,45,12,10];

function algunCalculo(miLista) {
    miLista[0] = 30;
}

algunCalculo(miLista);
console.log(miLista);

// Criterio programcion funcional

// funciones puras,

// ser cuidadosos con variables globales

// si cambian una variable global , se llama mutacion

// 

// Object.freeze(unLista);




