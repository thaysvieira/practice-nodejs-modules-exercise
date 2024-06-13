const elementFromArray = require('./mis-utilidades/utils.js');

const frutas = ["Manzana", "Banana", "Pera", "Naranja", "Uva", "Melón", "Sandía", "Piña", "Kiwi", "Fresa",
    "Cereza", "Ciruela", "Mango", "Limón", "Mandarina", "Granada", "Higo", "Dátil", "Albaricoque", "Melocotón"];

// importa el módulo "utils.js" y usa el método getRandomElementFromArray adecuadamente

const frutaOne=elementFromArray.getRandomElementFromArray(frutas);
const frutaTwo=elementFromArray.getRandomElementFromArray(frutas);
const frutaThree=elementFromArray.getRandomElementFromArray(frutas);
console.log(frutaOne);
console.log(frutaTwo);
console.log(frutaThree);

