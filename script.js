function linealizarEspiral(matriz) {
  let result = [];
  let inicioFila = 0;
  let finFila = matriz.length - 1;
  let inicioCol = 0;
  let finCol = matriz.length - 1;

  while (inicioFila <= finFila || inicioCol <= finCol) {
    for (let i = inicioCol; i <= finCol; i++)
      result.push(matriz[inicioFila][i]);
    inicioFila++;

    for (let i = inicioFila; i <= finFila; i++) result.push(matriz[i][finCol]);
    finCol--;

    if (inicioFila <= finFila) {
      for (i = finCol; i >= inicioCol; i--) result.push(matriz[finFila][i]);
      finFila--;
    }

    if (inicioCol <= finCol) {
      for (i = finFila; i >= inicioFila; i--) result.push(matriz[i][inicioCol]);
      inicioCol++;
    }
  }
  return result;
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
