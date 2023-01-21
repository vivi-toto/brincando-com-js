// o que são vetores ou arrays??

// como declarar um array
// let array = ['string', 1, true];
// console.log(array);

// um array pode guardar vários tipos de dados

let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array);

// forEach
array.forEach(function(item, index){console.log(item, index)})