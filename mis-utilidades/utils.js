
/**
 * Obtiene un elemento aleatorio de un array.
 * @param {Array} arr - El array del cual obtener el elemento.
 * @returns {*} Un elemento aleatorio del array.
 */
function getRandomElementFromArray(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('El argumento debe ser un array');
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
function getAvgFromArray(arr1){
    let sum = 0;
for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
}
let result = sum / arr1.length;
return result;
}
//ha creado una propiedad que se llama get getRandomElementFromArray y 
//está propiedad toma por valor una referencia a la funcion getRandomElementFromArray
module.exports.getRandomElementFromArray = getRandomElementFromArray;
module.exports.getAvgFromArray = getAvgFromArray;