console.log("Hola, soy el archivo js");

// Se aseguran que que no cambie a tora cosa
// con const
const listaNumeros = [3,4,9,"hola",true];
console.log(listaNumeros);
console.log(listaNumeros[2]);
listaNumeros[2] = "cambio por otra cosa";
console.log(listaNumeros);
listaNumeros.push(5);
console.log(listaNumeros);

//FF
let listaF = [4,3,-2,5,8,20,-30];
const resultadosF = [0,0,0,0];
for(i = 0;i<listaF.length;i++)
{
 if(listaF[i]<0)
 {
    resultadosF[0] += listaF[i];
    resultadosF[1]++;


 } 
 if  (listaF[i]>0)
 {
    resultadosF[2] += listaF[i];
    resultadosF[3]++;
 }

}
// E


// ADSADSA 
let arrayPositivos = [];
let arrayNegativos = [];

lista.forEach((element) => {
    if(element >= 0) {
        arrayPositivos.push(element)
    } else {
        arrayNegativos.push(element)
    }
});

console.log(arrayNegativos)
console.log(arrayPositivos)

// codigo (Ariel)
var resultadoss = [0,0];
var cont = [0,0];

for (i < 0; i < lista.length;i++) {
    if (lista[i] >= 0) {
        resultadoss[0] += lista[i];
        cont[0]++;
    } else {
        resultadoss[1] += lista[i];
        cont[1]++;
    }   
}

//DE ACA EN ADELANTE DAMIAN

let listaDamian = [4,3,-2,5,8,20,-30];
let listaResultados=[0,0,0,0];

for (let index = 0; index < listaDamian.length; index++) {
    
    if (listaDamian[index] > 0) {
     
        listaDamian[1]+=listaDamian[index];
        listaDamian[2]+1;
                
    }else
    {
        listaDamian[3]+=listaDamian[index];
        listaDamian[4]+1;
    }
   
}

console.log("Resultados Damian");
for (let index = 0; index < listaDamian.length; index++) {
    
    console.log("SumaPos, CantPos, SumaNeg, CantNeg");
    console.log(listaResultados[index]);
   
}


//dedde aca mi codigo FedericoPradoDiessler ()


let listaFpd = [4,3,-2,5,8,20,-30];
let cantPos =0;
let cantNeg =0;
let sumPos;
let sumNeg;
// sumar positivos
// sumar negativos
// contar positivos
// contar negativos

for (var i=0; i < listaFpd.length; i++){
    
    if (listaFpd[i]>0){
        sumPos+= listaFpd[i];
        cantpos++;
    }else{
        sumNeg+= listaFpd[i];
        cantNeg++;
    }
    
    
}
// SEGUNDA VERSION FEDERICOPD
let listaFpd2 = [4,3,-2,5,8,20,-30];
const arrayResultados = [ null, null, null, null]


//Aca Nadia

let listaNadia = [4,3,-2,5,8,20,-30];
let listaResulNadia = [0,0,0,0];


for (let n = 0; n < listaNadia.length; n++) {
    if(listaNadia[n] >= 0){
        listaResulNadia[0] += listaNadia[n];
        listaResulNadia[1]++;
    }else{
        listaResulNadia[2] += listaNadia[n];
        listaResulNadia[3]++;
    }
    
}







// -----------+
for (v < 0; v < lista.length; v++) {
    
    
}let sumaPos

    
}







// -----------+
for (v < 0; v < lista.length; v++) {
    
    
}

let listaMag = [4,3,-2,5,8,20,-30];
// sumar positivos
// sumar negativos
// contar positivos
// contar negativos 

let resultado = {
    positivo = 0,
    negativo = 0,
    sumaN
    
}




//




// -----------+
for (v < 0; v < lista.length; v++) {
    
    
}

let listaMarcelo = [4,3,-2,5,8,20,-30];
// sumar positivos
// sumar negativos
// contar positivos
// contar negativos 

let resultadoMar = {
    positivo = 0,
    negativo = 0,
    sumaPositivos = 0,
    sumaNegativos = 0    
}

listaMarcelo.forEach(element => {
     if(element > 0){
        resultadoMar.positivo += element;
        resultadoMar.sumaPositivos ++;
     }else{
        resultadoMar.negativo += element;
        resultadoMar.sumaNegativos ++;
     }
});

console.log("Suma positivos: " + resultado.positivo);
console.log("Suma negativos: " + resultado.negativo);
console.log("Cantidad positivos: " + resultado.sumaPositivos);
console.log("Cantidad Negativos: " + resultado.sumaNegativos);






