// Solicitar al usuario la cantidad de números a ingresar
const cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números:"));

// Verificar que se ingrese al menos un número
if (cantidadNumeros <= 0 || isNaN(cantidadNumeros)) {
    console.log("Por favor, ingrese una cantidad válida de números.");
} else {
    // Capturar los números ingresados por el usuario y almacenarlos en un array
    const numeros = [];
    for (let i = 0; i < cantidadNumeros; i++) {
        const numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
        numeros.push(numero);
    }

    // Calcular el promedio de los números ingresados
    const suma = numeros.reduce((total, numero) => total + numero, 0);
    const promedio = suma / cantidadNumeros;

    // Contar cuántos números son mayores que el promedio
    let contador = 0;
    for (let i = 0; i < cantidadNumeros; i++) {
        if (numeros[i] > promedio) {
            contador++;
        }
    }

    alert(`${contador} datos son mayores que el promedio.`);
}