function consecutivos(arr) {
    const n = arr.length ** 2;
    const expectedSum = n * (n + 1) / 2;

    const flattenArr = arr.flat().sort((a, b) => a - b);

    for (let i = 0; i < flattenArr.length; i++) {
        if (flattenArr[i] !== i + 1) {
            return false;
        }
    }

    return true;
}

function es_magico(arr) {
    const n = arr.length;
    const expectedSum = n * (n * n + 1) / 2;

    let sumDiag1 = 0,
        sumDiag2 = 0;

    for (let i = 0; i < n; i++) {
        let sumRow = 0,
            sumCol = 0;

        for (let j = 0; j < n; j++) {
            sumRow += arr[i][j];
            sumCol += arr[j][i];

            if (i === j) {
                sumDiag1 += arr[i][j];
            }

            if (i + j === n - 1) {
                sumDiag2 += arr[i][j];
            }
        }

        if (sumRow !== expectedSum || sumCol !== expectedSum) {
            return false;
        }
    }

    return sumDiag1 === expectedSum && sumDiag2 === expectedSum;
}

// Ejemplo 
const cuadrado4x4 = [
    [1, 14, 4, 15],
    [8, 11, 5, 10],
    [13, 2, 16, 3],
    [12, 7, 9, 6]
];

console.log(consecutivos(cuadrado4x4)); 
console.log(es_magico(cuadrado4x4)); 