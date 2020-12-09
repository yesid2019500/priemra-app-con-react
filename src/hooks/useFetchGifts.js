

// este es un hooks, que como tal es una funsion

import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

// en este caso la importancion de react no es importante
export const useFetchGifts = (category) => {
   
    // los custom hooks pueden tener un estado y pueden indicarle a otro componente
    // que deben reemderizarse cuando algo cambio

    // este cuando se utilise el useFetchGist, este estado va cargar por defecto

    const [state, setstate] = useState({     //el estado inicial es un objectto

        data: [],
        loading: true,
    });

    

useEffect(()=>{
// contiene una promesa
    getGifs(category)
    .then(imgs =>{
        setTimeout( ()=>{
            // console.log(imgs)
         setstate({
            data: imgs,
            loading: false,
        })
             },100)
       
    })

},[category])

    // setTimeout(() => {
    //     setstate(
    //      {
    //         data: [1,2,3,4,5,6,7],
    //         loading: false,
    //      }
    //     )  
        
    // }, 3000);

    return state; //este es un objecto que contiene el arreglo y el true

}
