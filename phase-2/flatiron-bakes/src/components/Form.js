import React, { useEffect } from 'react'

function Form({ formData, handleAddCake, handleChange }) {
    useEffect(() => {
        return () => console.log('form removed');
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddCake(formData);
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
                <label>Flavor</label>
                <input 
                    type="text"
                    name="flavor"
                    aria-label="title"
                    value={formData.flavor}
                    onChange={handleChange}
                ></input>
                <label>Image</label>
                <input
                    type="text"
                    name="image"
                    aria-label="image"
                    value={formData.image}
                    onChange={handleChange}
                ></input>
                <label>Size</label>
                <input
                    type="text"
                    name="size"
                    aria-label="size"
                    value={formData.size}
                    onChange={handleChange}
                    ></input>
                <label>Price</label>
                <input
                    type="number"
                    name="price"
                    aria-label="price"  
                    value={formData.price} 
                    onChange={handleChange}
                ></input>
                <input type="submit"></input>
            </form>
        </>
    )
}


export default Form;