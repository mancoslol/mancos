// paso para construir un api con js puro

//1.declaro la uri (pa donde voy)
const URI="https://api.spotify.com/v1/artists/47mIJdHORyRerp4os813jD/top-tracks?market=us"

//2. declara losparametros de la peticion (que voy a hacer)

const TOKEN="Bearer BQCSc-96qbZy4JW0B2gLbNVPXZ2T7pizeyCixlS4Y-foH4ZVsYbMJvUOq4aDE8dLn5ksI00MwPAZvrVdPXdnmmI8qalAj5cG3jYWUlsLyGOO1qtJf6il9y_mm5LJ52D8HWcUBnaEBkBpDZBumhEmYkTqR2gAPd9qKxs"

const PETICION={
    method: "GET",
    headers:{Authorization:TOKEN}
}

//RUTINA PARA CONSUMIR API CON METODO POST}
//1. URI PARA DONDE VOY
const URIPOST='https://accounts.spotify.com/api/token'

//2. alamceno los datos que voy a enviar
let dato1='client_id=e06c875957f24988b9158ce507e98f65'
let dato2='client_secret=f30b9eac20f94623b5a17535d782cd0b'
let dato3='grant_type=client_credentials'

//3 configuro la peticion
const PETICIONPOST={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}

//3. Intento consumir el API (PROMESA)
fetch(URI,PETICION)
.then(function(respuesta){
    return (respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta) //RESPUESTA DE SPOTIFY SERVER
    //recorreindo el arreglo
    
    let fila=document.getElementById("fila")
    respuesta.tracks.forEach(function(cancion){
        console.log(cancion)
        console.log(cancion.preview_url)

        //TRAVERSING
        let columna=document.createElement("div")
        columna.classList.add("col")
        

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let nombre=document.createElement("p")
        nombre.classList.add("text-center")
        nombre.textContent=cancion.name

        let foto=document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src="assets/img/musiclol.jpg"

        //PADRES E HIJOS (reactDOM)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(foto)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)



        
    })
})
.catch(function(respuesta){
    console.log(respuesta)
})