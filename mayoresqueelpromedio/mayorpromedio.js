const cantidadNumeros = parseInt(prompt("¿Cuántos datos ingresará?"));

if (cantidadNumeros <= 0 || isNaN(cantidadNumeros)) {
    console.log("Por favor, ingrese una cantidad válida de números.");
} else {
    // Capturar los números ingresados
    const numeros = [];
    for (let i = 0; i < cantidadNumeros; i++) {
        const numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
        numeros.push(numero);
    }

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