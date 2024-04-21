function linealizarEspiral(matriz) {
  let result = [];
  let puntoInicial = ["i", 0, "j", 0];
  let puntoFinal = ["i", 0, "j", matriz.length - 1];
  let ancho = matriz[0].length - 1;
  let alto = matriz.length - 1;

  console.log("Punto Inicial: " + puntoInicial);
  console.log("Punto Final: " + puntoFinal);
  linea(puntoInicial, puntoFinal);

  function linea(puntoInicial, puntoFinal) {
    for (let k = 0; k < puntoFinal[3] + 1; k++) {
      result.push(matriz[puntoInicial[1]][k]);
    }
    if (puntoInicial[1] === puntoFinal[1] && puntoInicial[3] < puntoFinal[3]) {
      let proxPunto = ["i", alto, "j", puntoFinal[3]];
      console.log("Izquierda");
      console.log(proxPunto);
    }
    return puntoFinal;
  }
}
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Ejercicio 28 (Extra)
// Crear una función en JavaScript llamada linealizarEspiral que reciba como parámetro una matriz NxN conteniendo dígitos entre 1 y 9.
// La función debe retornar un nuevo array de tamaño 1xN2 conteniendo los mismos elementos del array original. Por eso decimos que esta función “linealiza” a la matriz.
// La linealización se debe hacer de tal forma que los elementos de la matriz se recorran en formato espiral. Ver ejemplos:
// Supongamos que la matriz de entrada es de tamaño 3x3:
// var arrayLineal = linealizarEspiral([
//     [1,2,3],
// [4,5,6],
// [7,8,9] ]);
// En este caso, la solución sería:
// [1, 2, 3, 6, 9, 8, 7, 4, 5]
// Nota: Una matriz vacía (de tamaño 0x0) se representa así: [[]]
