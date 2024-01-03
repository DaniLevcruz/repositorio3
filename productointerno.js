
const a = [7, 1, 4, 9, 8];
const b = [0, 1, 2, 3, 4];

// Cálculo
let productoInterno = 0;
for (let i = 0; i < a.length; i++) {
    productoInterno += a[i] * b[i];
}

console.log(productoInterno);

// Ortogonales
let esOrtogonal = productoInterno === 0;
console.log("La lista es "+esOrtogonal);