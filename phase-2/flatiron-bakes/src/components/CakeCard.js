import { useState } from 'react';
import { Link } from 'react-router-dom';

function CakeCard({handleEdit, cakeObj, cakeObj: {flavor, size='6" cake', price}}) {
    const [liked, setLiked] = useState(false);

    const handleLike = () => setLiked(curLiked => !curLiked);

    return (
        <div>
            <Link to ={`/cakes/${cakeObj.id}`}><h1>Flavor: {flavor}</h1></Link>
            <p>Size: {size}</p>
            <p>Price: ${price}</p>
            <p onClick={handleLike}>{liked?'💖':'🖤'}</p>
            <button onClick={() => handleEdit(cakeObj)}>Edit</button>
        </div>
    );
}

export default CakeCard;