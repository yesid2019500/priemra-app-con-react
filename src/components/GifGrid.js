
// useefect permite ejecutar codigo de manera condicional
import React from 'react'

import { useFetchGifts } from '../hooks/useFetchGifts';

import { GiftGridItem } from '../components/GiftGridItem'



// estamos recibiendo category del componente gitExportApp

export const GifGrid = ({category}) => {

    // aqi vamnos a importar el custom hooks, lo almacenaremos en una variable
    // y lo desestructuramos
    // con los dos puntos estamos renombrando data
  const {data:images, loading} = useFetchGifts(category);

  console.log(images,loading);

  

    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {/* si es true que muestre el loading, de lo contrario no muestre nada */}
        {loading && <p className="animate__animated animate__flash">Loading...</p>  }
        {/* condicional, cargando y de lo contrario */}
        {/* {loading ? 'Cargando...' : 'Data cargada'} */}
        <div className="card-grid">
           
        
           
                {
                    // estamos desestructurando el objecto
                    // para pintar solo el titulo
                    // images.map(({id,title}) =>(

                    //     <li key={id}> { title} </li>

                     images.map(img =>(

                        // esta recibiendo las propiedades del id, url 
                        <GiftGridItem 
                             key={img.id}
                             este es el operardor express
                             {...img } 
                         />
                                  
                    ))
                }
        </div>
        </>
    )
}
