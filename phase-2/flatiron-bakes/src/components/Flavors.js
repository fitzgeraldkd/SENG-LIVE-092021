import React from 'react'

function Flavors({ handleFilter, flavorsData }) {
    return (
        <div>
            {flavorsData.map(flavor => <div onClick={() => handleFilter(flavor)} key={flavor}>{flavor}</div>)}
        </div>
    )
}

export default Flavors;