import React from 'react'
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Goku']);

    const onAddCategory = (newCategory) =>{
        // Validación de datos repetidos
        if( categories.includes(newCategory) ) return;
        // formas de hacer
        // setCategories( categories.concat('valorant') );
        // setCategories( cat => [...cat,'valorant'] );}
        // setCategories( [ ...categories,'valorant' ]); ingresa al final
        setCategories( [ newCategory, ...categories ]);
    }

    return (
    <>
        {/* Title */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
        onNewCategory={ onAddCategory }  
        />
        
        {/* Gifs */}
        { 
            categories.map( (category) => (
                <GifGrid 
                    key={ category } 
                    category={ category }
                />
            )) 
        }

    </>
    )
}
