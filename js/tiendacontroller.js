
import { llenartienda } from "./tienda"


let modalinfo = new bootstrap.Modal(document.getElementById('modalinfor'))

llenartienda()

let contenedorTienda = document.getElementById("filas")

contenedorTienda.addEventListener("click", function (evento) {
    if (evento.target.classList.contains("button")) {


        producto = ampliarinformacion(evento)


        modalinfo.show()

    }
})