console.log("caja")


const comprobantes = [[1,"Luz","E",1000],[2,"Recibo","I",2000],[3,"Recibo","I",2720]];
valores = [[1000,3],[500,3],[100,10],[50,4],[10,2]];






















let totComprobantes = 0
for(let i= 0; i < comprobantes.length; i++) {
	totComprobantes += comprobantes[i][3];
}
console.log(totComprobantes);


let totValores = 0;
for(let i=0; i < valores.length; i++) {
	totValores += (valores[i][0]*valores[i][1]);
}

console.log(totValores);

console.log(((totComprobantes-totValores) != 0 )? 'No cierra la caja': 'Cierra la caja')
