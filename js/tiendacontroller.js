import { ampliarinformacion } from "./ampliarinfo.js"
import { llenartienda } from "./tienda.js"


let producto= {}

let modalinfo = new bootstrap.Modal(document.getElementById('modalinfor'));
console.log(modalinfo)

llenartienda()

let contenedorTienda = document.getElementById("fila")

contenedorTienda.addEventListener("click", function (event) {
    console.log(event.target.parentElement.classList)
    if (event.target.parentElement.classList.contains("card")) {


        producto = ampliarinformacion(event)
        

        modalinfo.show()

    }
})

console.log(contenedorTienda)