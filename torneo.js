// Ingrese los nombres de los equipos
const equipos = [];
for (let i = 1; i <= 8; i++) {
    const equipo = prompt(`Ingrese el nombre del equipo ${i}:`);
    equipos.push(equipo);
}


const etapas = ["Cuartos", "Semifinales", "Finales"];

// Mostrar los equipos
for (let i = 0; i < etapas.length; i++) {
    console.log(`${etapas[i]}:`);
    const equiposEtapaSiguiente = [];

    for (let j = 0; j < equipos.length; j += 2) {
        const equipo1 = equipos[j];
        const equipo2 = equipos[j + 1];

        const ganador = prompt(`${equipo1} - ${equipo2}:`);
        equiposEtapaSiguiente.push(ganador);
    }

    equipos.splice(0, equipos.length, ...equiposEtapaSiguiente);
}

// Mostrar al campeón
console.log(`\nEl campeón es: ${equipos[0]}`);