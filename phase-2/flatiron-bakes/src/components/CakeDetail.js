import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CakeDetail({ handleDelete }) {
    const [cake, setCake] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const id = useParams().id;

    useEffect(() => {
        fetch(`http://localhost:4000/cakes/${id}`)
            .then(resp => resp.json())
            .then(data => {
                setCake(data);
                setIsLoaded(true);
            })
    }, [id]);

    if (!isLoaded) return <h1>Loading</h1>;

    const {image, flavor, size, price, description} = cake;
    return (
        <>
            <img src={image} alt={flavor} />
            <h1>Flavor: {flavor}</h1>
            <p>Size: {size}</p>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button onClick={() => handleDelete(cake)}>Delete</button>
        </>
    )
}

export default CakeDetail;