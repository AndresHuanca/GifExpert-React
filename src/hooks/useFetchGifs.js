import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    // save images in array
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );
    
    const getImages = async() => {
    const newImages = await getGifs( category );
    setImages( newImages );
    setIsLoading( false );
    }
    // [] cantidad de repeticiones del helper
    useEffect(() =>{
        getImages();
    },[])
    // console.log(images);
    return {
        images,
        isLoading
    }
    
}



