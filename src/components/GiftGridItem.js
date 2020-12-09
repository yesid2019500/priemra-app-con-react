
import React from 'react'


export const GiftGridItem = ({title,url}) => {

    // console.log({id,title,url});

    return (
        // ahora vamos a imprimir el titulo y las imaneges
        <div className="card animate__animated animate__fadeIn">
            {/* {img.title} */}
            <img src={ url } alt={ title} />
             <p>{ title }</p>
        </div>
    )
}
