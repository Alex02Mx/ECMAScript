// arrays destrurcturing
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(b);

// con objetos
let user = {
    username: "Oscar",
    age: 34
};
let {username: u, age: g} = user;
console.log(u, g);

// iterando
const vehiculo_44406 = {
    marca: "Nissan",
    modelo: "D23",
    instalaciones: {
        dispCint: "Instalado",
        dispVelocidad: "Sin instalar"
    }
};
const {marca: m, modelo: md, instalaciones: {dispCint: dc, dispVelocidad: dv}} = vehiculo_44406;
console.log(m,dc,dv);

// for (const {marca: m, modelo: md, instalaciones: {dispCint: dc, dispVelocidad: dv} } of vehiculo_44406) {
//     console.log(`Marca: ${m}, Modelo: ${md}, Dispositivo Cinto: ${dc}, Dispositivo Velocidad: ${dv}`);
// }

// spread operator
let person ={name: "Oscar", age: 28};
let country = "MX";

let data = {...person, country};
console.log(data);
console.log(person);

// rest
function sum (num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(4,3,4,2,3,5,6,7,8,7 )
console.log(sum(3,3,5,6,7,8,7 ))


// ejercicio
function solution(json1, json2) {
    return {
        ...json1 || { name: "Mr. Michi", food: "Pescado"},
        ...json2 || { age: 12, color: "Blanco"}
    };
}