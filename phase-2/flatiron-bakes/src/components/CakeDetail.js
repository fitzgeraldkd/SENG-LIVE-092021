import React from 'react'

function CakeDetail({ selectedCake: {flavor, size, price, image, description}}) {
    return (
        <>
            <img src={image} alt={flavor} />
            <h1>Flavor: {flavor}</h1>
            <p>Size: {size}</p>
            <p>Price: {price}</p>
            <p>{description}</p>
        </>
    )
}

export default CakeDetail;