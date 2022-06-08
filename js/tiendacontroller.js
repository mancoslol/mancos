import { ampliarinformacion } from "./ampliarinfo.js"
import { llenartienda } from "./tienda.js"


let producto= {}

let modalinfo = new bootstrap.Modal(document.getElementById('modalinfor'));
let modalcompra = new bootstrap.Modal(document.getElementById('resumencompra'))
console.log(modalinfo)
console.log(modalcompra)

llenartienda()

let contenedorTienda = document.getElementById("fila")

contenedorTienda.addEventListener("click", function (event) {
    console.log(event.target.parentElement.classList)
    if (event.target.parentElement.classList.contains("card")) {


        producto = ampliarinformacion(event)
        

        modalinfo.show()

    }
})


//rutina para el anadir un producto a la cesta a la cesta 
let carrito=[]
let botonAgregarCarrito=document.getElementById("anadirc")
botonAgregarCarrito.addEventListener("click",function(){

    //Debo capturar la cantidad y agregarla al producto 
    let cantidad=document.getElementById("cantproducto").value

    producto.cantidad = cantidad

    let precio = (producto.precio)
    producto.subtotal = cantidad * Number(precio)
    //agrego el producto al carrito
    carrito.push(producto)
    console.log(carrito)

    let suma = 0

    //pintar la capsula en el  carrito
   
    carrito.forEach(function(producto){
        suma = suma + Number(producto.cantidad)
    })

    document.getElementById("cantproducto").value = 1

    let capsula=document.getElementById("capsula")

    capsula.textContent=suma;

    capsula.classList.remove("invisible")

    //console.log(carrito)
    
    modalinfo.hide()
})

//rutina para limpiar
let limpiar=document.getElementById("limpiar")
limpiar.addEventListener("click",function(){

    carrito=[]

    let capsula=document.getElementById("capsula") 
    capsula.classList.add("invisible")
    modalcompra.hide()

})


//rutina para ver el carrito
let botonVerCarrito=document.getElementById("vercarrito")
botonVerCarrito.addEventListener("click",function(){

    //recorrer el carrito y pintar los productos
    let base=document.getElementById("basecarro")

    base.innerHTML=""

    carrito.forEach(function(producto){

        let fila=document.createElement("div")
        fila.classList.add("row")
        fila.classList.add("hr")

        let fila2 = document.createElement("div")
        fila2.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-8")

        let foto=document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src=producto.foto

        let nombre1=document.createElement("h4")
        nombre1.classList.add("text-light")
        nombre1.textContent=producto.nombre

        let precio = document.createElement("p")
        precio.classList.add("text-light")
        precio.textContent = "Precio UN: $" + producto.precio + "COP"

        let subtotal = document.createElement("p")
        
        subtotal.classList.add("text-light")

        subtotal.textContent = "Subtotal : $" + producto.subtotal + " COP"

        let cantidad = document.createElement("p")
        cantidad.classList.add("text-light")
        cantidad.textContent = "Cantidad : " + producto.cantidad

        let total = document.getElementById("total")
        total.classList.add("text-warning")
        let resultado = Number(producto.cantidad) * Number(producto.precio)
        total.textContent = resultado;

        producto.subtotal = resultado

        let totalneto = 0;

        carrito.forEach(function (producto) {
            totalneto = totalneto + Number(producto.subtotal)
            total.textContent = "Total : $" + totalneto + " COP"
        })

        let cop = document.getElementById("cop")
        cop.addEventListener("click", function () {
            let cop = totalneto

            total.textContent = "Total : $" + cop + " COP"

            precio.textContent = "Precio Unid: $" + producto.precio + " COP"
            let subtcop = producto.subtotal
            subt.textContent = "Subtotal : $" + subtcop + " COP"


        })

       let dolares = document.getElementById("usd")
        dolares.addEventListener("click", function () {
            let usd = 1 * totalneto / Number(4000)

            total.textContent = "Total : $" + usd + " USD"
            let preciousd = producto.precio / Number(4000)
            precio.textContent = "Precio Unid: $" + preciousd + " USD"
            let subtusd = producto.subtotal
            subt.textContent = "Subtotal : $" + subtusd / 4000 + " USD"

        })

        //PADRES E HIJOS
        columna1.appendChild(foto)
        columna2.appendChild(nombre1)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)
        columna2.appendChild(subtotal)

        fila.appendChild(columna1)
        fila.appendChild(columna2)

        base.appendChild(fila)
    })

    modalcompra.show()

})

/*console.log(contenedorTienda)*/