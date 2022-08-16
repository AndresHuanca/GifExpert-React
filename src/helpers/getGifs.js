export const getGifs = async(category) => { 
    const url = `https://api.giphy.com/v1/gifs/search?api_key=kcAHkqk6n69pl3tTBKeER7vA0P4tbdFe&q=${ category }&limit=10`;
    const resp = await fetch(url); //respuesta 
    const { data } = await resp.json(); //arreglo de la petición

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));

    // console.log(gifs);
    return gifs;
}