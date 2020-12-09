


import React, { useState } from 'react';
import {AddCategory} from '../components/AddCategory';
import {GifGrid} from '../components/GifGrid';



  export const GitExportApp = () => {

    // const categories = ['One Punch','Samurai X','Dragon Ball'];

    const  [categories, setCategories] = useState(['One Punch']);

    const saludoGit = 'GitExportApp';

    // const addElemento = ()=>{
    //  setCategories([...categories, 'soy el nuevo']);

    //  si queremos que aparezca de primero
    //  setCategories(['soy el nuevo',...categories,]);


    // esta seria otra solucion
    // puede tener un callback donde categorieesT es el valor del estado anterior
    // y luego retorna el nuevo estado
    // setCategories(categoriesT =>  [...categoriesT,'soy el nuevo']);

    // }

    return ( 
        <div>

        <h2>{saludoGit}</h2>
        {/* le estamos pasando el setcategoryes a addCategory */}
        <AddCategory setCategories={ setCategories } />

        {/* aqui estamos llamando setCategories  desde los propTypes
        <AddCategory  /> */}
        <br></br>
        <br></br>
        <br></br>
         <hr></hr>

         {/* <button onClick={addElemento}>agregar</button> */}

         <ol>
            {
                categories.map(category => (

                      // este seria el retun, con las () estamos indicando que esta
                    //   retornando un objecto
                // <li key={category}> {category}</li>)
                <GifGrid key={category} category={category} />
                // los keys deben ser unicos

                ))
                
            }

         </ol>
         
        </div>
     );
}
 
export default GitExportApp;