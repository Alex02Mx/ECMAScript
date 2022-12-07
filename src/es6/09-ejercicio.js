function* getId() {
    let id ="Michi ID";
    let num = 1;
    while(true) {
        yield  `${id} ${num++}`;
    }
}

const id = getId()

console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)

