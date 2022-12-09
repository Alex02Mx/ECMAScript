const objeto = new Map([["name", "oscar"],["age",34]])
console.log(objeto)
console.log(Object.fromEntries(objeto))


const array = [["nombre","Oscar"], ["edad", 32]];
console.log(Object.fromEntries(array));