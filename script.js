function linealizarEspiral(matriz) {
  let result = [];
  let PI = [0, 0];
  let PF = [0, matriz.length - 1];
  let ancho = matriz[0].length - 1;
  let alto = matriz.length - 1;

  let n = matriz.length;

  console.log("Punto Inicial: " + PI);
  console.log("Punto Final: " + PF);
  const test = linea(PI, PF);
  console.log("Test: " + test);
  linea(test[0], test[1]);
  function linea(PI, PF) {
    if (PI[0] === PF[0] && PI[1] < PF[1]) {
      for (let k = 0; k < n + 1; k++) {
        result.push(matriz[PI[0]][k]);
      }

      let proxPI = [PF[0] + 1, PF[1]];
      let proxPF = [n - 1, PF[1]];
      console.log("Izquierda");
      console.log(proxPI);
      console.log(proxPF);
    } else if (PI[1] === PF[1] && PI[0] < PF[0]) {
      n = n - 1;
      let proxPI = ["i", ancho, "j", n];
      let proxPF = [0];
      console.log("Abajo");
      console.log(proxPI);
      console.log(proxPF);
    }
    return [proxPI, proxPF];
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
