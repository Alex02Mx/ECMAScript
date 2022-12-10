const promise1 = new Promise((resolve, reject) => {
    reject("Promesa1 Reject");
})
const promise2 = new Promise((resolve, reject) => {
        resolve("Promesa2 Resolve");
})
const promise3 = new Promise((resolve, reject) => {
    resolve("Promesa3 Resolve");
})

Promise.any([promise1,promise2,promise3])
    .then((res) => console.log(res))