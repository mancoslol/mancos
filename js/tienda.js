export function llenartienda(event){

    let productos = [
        {foto: 'assets/img/tienda/ahrikda.jpg', nombre: "Figura Ahri K/DA Pop Stars", precio:600000, descripcion:"La líder de K/DA te hechizará con sus talentos. Con detalles impecables, sus nueve colas se han creado con partes translúcidas para lograr un aspecto impresionante. Además, su sonrisa seductora cautivará con total seguridad a sus fans."},
        {foto: 'assets/img/tienda/amumu.jpg', nombre: "Figurita Amumu fiesta sorpresa", precio:30000, descripcion:"Este Amumu fiesta sorpresa de edición limitada solo quiere que lo invitéis a vuestra fiesta de cumpleaños."},
        {foto: 'assets/img/tienda/anilloskda.jpg', nombre: "Anillos banda Pop stars K/DA", precio:20000, descripcion: "El anillo de los cañones de cristal de Kai'Sa está hecho a mano en duradero latón de artesanía chapado en otro amarillo brillante de 14k y rodio blanco pulido. El anillo de estilo partido se inspira en los cañones de hombro de Kai'Sa y cuenta con dos cristales tallados en forma de diamante de color turquesa intenso. Es ajustable: aprieta suavemente con la mano las dos mitades para ajustarlo al tamaño de tu dedo."},
        {foto: 'assets/img/tienda/camisatft.jpg', nombre: "Camiseta TFT", precio:30000, descripcion: "Enfrentaos a todos los rivales, independientemente de cuáles sean sus composiciones, con la camiseta negra de Teamfight Tactics: Caballero. Dejad que esta icónica minileyenda os guíe hacia la victoria en vuestras partidas. Hecha de 100 % algodón, apta para lavadoras y con la aprobación de Pingu, esta cómoda camiseta resistirá el paso del tiempo de versión en versión, de un set a otro."},
        {foto: 'assets/img/tienda/figurajinx.jpg', nombre: "Figura Jinx", precio:500000, descripcion: "Siembra el caos en Piltover con Jinx, la Bala Perdida. No hay días aburridos cuando tienes a tus mejores amigos, Pium Pium y Espinas."},
        {foto: 'assets/img/tienda/figurakata.jpg', nombre: "Figura Katarina", precio:300000, descripcion: "¿Listos para los problemas? A Kat no le importa si estáis listos o no. Katarina ya es Unlocked."},
        {foto: 'assets/img/tienda/figurakayn.jpg', nombre: "Figurita Kayn", precio:80000, descripcion: "Yo te elegí. Ahora me servirás"},
        {foto: 'assets/img/tienda/figuraornn.png', nombre: "Figurita Ornn", precio:80000, descripcion: "¿Te gustan los martillos y mantenerte al margen de los asuntos de los mortales? ¿Ansías pasar tiempo en la forja golpeando roca fundida para convertirla en increíbles armas? Entonces esta figura de Ornn, la número #10 de la serie 4, es la incorporación perfecta para tu habitación."},
        {foto: 'assets/img/tienda/figurarakan.jpg', nombre: "Figura Rakan", precio:600000, descripcion: "a figura de Rakan, con gran detalle, hace que el Encantador cobre vida. La base puede unirse con la figura de Xayah HobbyMax a escala 1/7 para mostrar a los amantes en una pose basada en la de la ilustración original."},
        {foto: 'assets/img/tienda/figuraww.jpg', nombre: "Figurita Warwick", precio:80000, descripcion: "¡Nada puede detener a Warwick cuando desata su ira sangrienta! Lleva la matanza* hasta tu habitación con la nueva figura de Warwick, la número #09 en la colección de la serie 4."},
        {foto: 'assets/img/tienda/figuraxayah.jpg', nombre: "Figura Xayah", precio:600000, descripcion: "Juntos, Xayah y Rakan lucharán para reclamar las Tierras Primigenias, así las tribus podrán volver a prosperar una vez más. Xayah lucha junto a su compañero y amante, Rakan, para salvar a su tribu de la extinción y recobrar su gloria de antaño."},
        {foto: 'assets/img/tienda/gorroabeja.jpg', nombre: "Gorro de Teemo Abeja", precio:50000, descripcion: "¡Vuela como una mariposa y pica como una abeja con este gorro de peluche de la abeja Teemo!"},
        {foto: 'assets/img/tienda/gorroporo.jpg', nombre: "Gorro de Poro", precio:50000, descripcion: "¡Protege tus orejas (y tu corazón) de los gélidos vientos de Freljord con este adorable gorro de peluche de poro!"},
        {foto: 'assets/img/tienda/minileyendas.jpg', nombre: "set minileyendas", precio:20000, descripcion: "Los bichos más adorables de todo Teamfight Tactics y las minileyendas llegan para hacerte compañía dondequiera que estés. Eso sí, que no se diga que no te avisamos: una vez que te hagas con uno, te costará resistirte al encanto de los demás."},
        {foto: 'assets/img/tienda/peluchealistar.jpg', nombre: "Peluche Alistar", precio:70000, descripcion: "Alistar, el Minotauro, está listo para la embestida más suave."},
        {foto: 'assets/img/tienda/pelucheescurridizo.jpg', nombre: "Peluche Escurridizo", precio:70000, descripcion: "¡Abraza a nuestro crustáceo favorito y sé más feliz que nunca! Llévate ya a casa el peluche del cangrejo escurridizo, ¡pero no dejes que se acerque al Vacío!"},
        {foto: 'assets/img/tienda/pelucherenekton.jpg', nombre: "Peluche Renekton", precio:70000, descripcion: "Este peluche de Renekton tiene una rabia desmedida, pero igual lo único que necesita es un abrazo."},
        {foto: 'assets/img/tienda/peluchetft.jpg', nombre: "Peluche Minilyenda TFT", precio:50000, descripcion: "Aunque se lo conoce por su dulce naturaleza, puede despertar un poder feroz si se lo provoca... o se lo puede engatusar con unos snacks para que entre en acción."},
        {foto: 'assets/img/tienda/pines.jpg', nombre: "Pines", precio:10000, descripcion: "Mostradle al mundo vuestro verdadero yo de la mano del pack 1 de pines esmaltados de emoticonos."},
        {foto: 'assets/img/tienda/riven.jpg', nombre: "Figurita Riven", precio:80000, descripcion: "A"},
    ]

    let fila = document.getElementById("fila")

    productos.forEach(function(producto){
        let columna = document.createElement("div")
        columna.classList.add("col")

        let tarjeta = document.createElement("button")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")


        let foto=document.createElement("img")
          foto.classList.add("card-img-top")
          foto.classList.add("img-fluid")
          foto.src=producto.foto
          
          let nombre=document.createElement("h4")
          nombre.textContent=producto.nombre
     
          let descripcion = document.createElement("p")
          descripcion.classList.add("text-left")
          descripcion.classList.add("display-none")
          descripcion.textContent=producto.descripcion
          
          let precio = document.createElement("h5")
          
          precio.classList.add("gray")
          precio.classList.add("number")
          precio.textContent=producto.precio
     
    

          tarjeta.appendChild(nombre)
          tarjeta.appendChild(foto)
          tarjeta.appendChild(nombre)
          tarjeta.appendChild(descripcion)
          tarjeta.appendChild(precio)
          columna.appendChild(tarjeta)
          fila.appendChild(columna)

    })

}




