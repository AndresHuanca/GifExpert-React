import React from 'react'

export const GifItem = ( image ) => {
    // console.log(image);
    return (
        <div className="card">
            <img src={image.url} alt={image.title} />
            <p>{image.title}</p>

        </div>
    )
}
