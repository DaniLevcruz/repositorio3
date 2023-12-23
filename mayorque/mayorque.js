let numero = parseInt(window.prompt("¿Cuántos numeros quieres comparar?"));
//let lista = parseInt(window.prompt("Ingrese los números"));
const numlista = []
for (let i = 0; i < numero; i++) {
    const numero = parseInt(window.prompt("Ingrese el/los números" [i+1]));
    numlista.push(numero)
}

let origen = parseInt(window.prompt("Ingrese un numero a comparar"));
let contador = 0



for (let i = 0; i < numlista.length; i++) {
    if (origen>numlista[i]) {
        contador++;
    }
    
}
alert("De tu lista "+contador+" valores son mayores que "+origen)