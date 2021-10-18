import { useState } from 'react';

function CakeCard({handleCakeClick, handleEdit, cakeObj, cakeObj: {flavor, size='6" cake', price}}) {
    const [liked, setLiked] = useState(false);

    const handleLike = () => setLiked(curLiked => !curLiked);

    return (
        <div onClick={() => handleCakeClick(cakeObj)}>
            <h1>Flavor: {flavor}</h1>
            <p>Size: {size}</p>
            <p>Price: ${price}</p>
            <p onClick={handleLike}>{liked?'💖':'🖤'}</p>
            <button onClick={() => handleEdit(cakeObj)}>Edit</button>
        </div>
    );
}

export default CakeCard;