

 
 
export const getGifs = async (category) => {

    // encodeuri es pàra que los eapcios de la url los quite y los reemplaze por +
    // le estamos mandando con caterory una peticion a la api
const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit+=10&api_key=9pX5tYBGpOlebVv5nyGvlxS7U0Q6ikKd`;
const respuesta = await fetch(url)
const {data} = await respuesta.json();

// vamos a hacer un recorrido por todo el json
const gifts = data.map(img =>{
// estamos retornando un nuevo objecto, en este caso solo queremos el id
// y los titulos
return {
    id: img.id,
    title: img.title,
    // le estamos diciendo con el signo de interrogacion que si vieien las 
    // imagenes lo utilize. esto nos devolvera unos objecto con el id y titulo y url
    // el nombre downsized_medium, viene del json
    url: img.images?.downsized_medium.url

    }

})

// console.log(data);
console.log(gifts);

// el nuevo estado seran los gifs que estoy recibiendo
return gifts;

    }

   