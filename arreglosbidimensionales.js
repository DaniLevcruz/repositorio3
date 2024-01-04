

const a = Array.from({ length: 12 }, (_, i) => i);

// Obtener los arreglos
console.log([
  a.slice(0, 4),
  a.slice(4, 8),
  a.slice(8)
]);

console.log([
  a.map(x => x * x).slice(0, 4),
  a.map(x => x * x).slice(4, 8),
  a.map(x => x * x).slice(8)
]);

console.log([
  a.filter((_, i) => i % 4 === 0),
  a.filter((_, i) => i % 4 === 1),
  a.filter((_, i) => i % 4 === 2),
  a.filter((_, i) => i % 4 === 3)
]);

console.log([
  a.slice(0, 3),
  a.slice(4, 7),
  a.slice(8, 11)
]);

console.log([
  a.map(x => 11.5 - x * 1).slice(0, 3),
  a.map(x => 11.5 - x * 1).slice(3, 6),
  a.map(x => 11.5 - x * 1).slice(6, 9),
  a.map(x => 11.5 - x * 1).slice(9)
]);

console.log([
  a.map(x => x * 100).slice(0, 4),
  a.map(x => x * 100).slice(4, 8),
  a.map(x => x * 100).slice(8)
]);

console.log([
  a.map((x, i) => x + 100 * i).slice(0, 4),
  a.map((x, i) => x + 100 * i).slice(4, 8),
  a.map((x, i) => x + 100 * i).slice(8)
]);