// Leer README
const os = require('os');
const nombreEquipo = os.hostname;
const versionDelSis = os.version;
const totalMemoryGB = os.totalmem() / (1024 ** 3);

console.log("Nombre del equipo: " + nombreEquipo);
console.log("Version del sistema: " + versionDelSis);
console.log(`Memoria RAM total: ${Math.ceil(totalMemoryGB)} GB`);
