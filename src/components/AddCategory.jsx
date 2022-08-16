import React from 'react'
import { useState } from 'react'


export const  AddCategory = ( {onNewCategory}) => {
    // State
    const [inputValue, setInputValue] = useState('');
    // Redibujar onchange
    const onInputChange = ({target}) => {
        // console.log(target.value);
        setInputValue(target.value);
    }

    // Para que haga cambios solo en el form
    const onSubmit = (event) =>{
        event.preventDefault();
        // Validadción de datos mayor a 1
        if( inputValue.trim().length <= 1 ) return;

        // setCategories( categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        //Clean caja de text
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar Gif"
                value={ inputValue }
                // event llegan muchas cosas según la necesidad
                onChange={ onInputChange }
            />
        </form>  
    )
}

