// paso para construir un api con js puro

//1.declaro la uri (pa donde voy)
const URI="https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/top-tracks?market=US"

//2. declara losparametros de la peticion (que voy a hacer)

const TOKEN="Bearer BQCSSM1KNDY7xP1ywWfDEalAcqyMgWn5FzK_lIbu4jtjjqVva_0weeUFmrNAO_GKu_Gth34_OE7JTkp8us3RMGwftslPy7JnVxjRqY0G4IEF3H01fhBQ68rBN8dacDUMgY8wII_WsY-w"

const PETICION={
    method: "GET",
    headers:{Authorization:TOKEN}
}

//3. declaro el FETCH (voy al servidor)
fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json())
})

.then(function(respuesta){
    console.log(respuesta) //respuesta es un objeto
    console.log(respuesta.tracks)
    console.log(respuesta.tracks[0])
    console.log(respuesta.tracks[0].preview_url)
})

.catch(function(respuesta){
    console.log(respuesta)
})