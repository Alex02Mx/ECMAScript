const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("Hey");
        }
        else{
            reject("No funciono");
        }
    })
};
anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    // .finally(()=>{
    //     console.log("Finally")
    // })
    .finally(() => console.log("reject o reolve el proceso termino "))