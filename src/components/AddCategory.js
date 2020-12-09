// rafc este comando completa todo el comoonente

import React, { useState } from 'react';
import PropType from 'prop-types';




export const AddCategory = ({ setCategories}) => {

    const [inputValue, setinputValue] = useState(''); //si no tiene nada dentro unse estate es undefinde
    // pero con los '' es un string vacio, que es el que se esperaba

    // vamos a extraer el valor del input
    const cambiarEventoChange = (e) =>{
        // console.log(e.target.value);
        setinputValue(e.target.value);

    }

    const botonSumit = (e)=>{
        e.preventDefault();

        // estamos borrando los estpacios vacios con trim
        // solo introducira de dos letras o numeros en adelante
        if (inputValue.trim().length > 2) {

             console.log('submit enviado')
            //  aqui le estamos diciendo que inserte primero lo que mandamos
             setCategories(categoriesT => [inputValue, ...categoriesT,]);
                setinputValue('');
            
        }

       

    }

    
    // el inputvalue tiene el valor de useState

    return (

       
     
        // el onsumit es para quitar el comportamiento de envio del navegador
        // en este caso le estamos mandando el (e)
            <form onSubmit={ botonSumit }>
            {/* este muestra en tiempo real lo que se esta escribiendo en el input */}
            {/* <h1>{inputValue}</h1> */}
            <input
            
            type="text"

            value={inputValue}
            // el onchange se va ejecutar cada vez que la caja cambie
            onChange={ cambiarEventoChange }

            placeholder={'ingrese su texto'}
            
            />
            </form>
          
      
    )
}


AddCategory.protoTypes = {
    // le estamos diciendo que  func es una funsion requeridad
    setCategories: PropType.func.isRequired
}