const boton = document.getElementById("btn");
// boton.addEventListener("click", async function()  {
//     const module = await import("./modulo.js");
//     console.log(module);
//     module.hello();
// })
boton.addEventListener("click", llamado);

async function llamado()  {
    const module = await import("./modulo.js");
    console.log(module);
    module.hello();
}