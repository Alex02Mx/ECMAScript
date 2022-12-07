function* iterate(array) {
    for (let val of array) {
        yield val;
    }
}

const it = iterate(["Oscar", "David", "Ana"]);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
