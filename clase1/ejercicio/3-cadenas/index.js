console.log("Cadenas");

let miCadena = "Labore  commodo \" consequat \t culpa ut commodo sit.";

console.log(miCadena);

// En javascript las cadenas son INMUTABLES
// ->  no se puede hacer miCadena[2] = "x";
// se reemplaza o pisa con otro valor

// Ejercicio, imprimir cada carecter de la variable
// miCadena

// A partir de aca, mi codigo (Ariel)
for (var i = 0; i < miCadena.length; i++) {
    console.log(miCadena.charAt(i)); 
}

// stringToArray
// recorrer Array // code san
let cadena = Array.from("Cadena");
for(var i =0; i < cadena.length; i++){
    console.log(cadena[i]);
}

//Fernandez
for (var i = miCadena.length ; i >= 0; i--) { console.log(miCadena.charAt(i)); }


//a partir de aca FedericoPD
for(var h = 0; h < miCadena.length; h++) {console.log(miCadena.charAt(h))};




