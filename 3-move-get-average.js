/** Leer README */



function getAvgFromArray(arr1){
    let sum = 0;
for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
}
let result = sum / arr1.length;
return result;
}
