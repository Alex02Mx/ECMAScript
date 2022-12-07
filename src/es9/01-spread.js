const user = {
    username:"gndx",
    age:34,
    country:"MX"
}

const { username, ...value} = user
console.log( username, value)