import { useState, useEffect } from 'react';

function useQuery(url) {
    const [content, setContent] = useState([]);
    const [isLoaded, setIsLoaded] = useState(null);

    useEffect(() => {
        setIsLoaded(false);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setContent(data);
                setIsLoaded(true);
            })
    }, []);

    function addItem(newItem) {
        setContent([...content, newItem]);
    }

    return [content, isLoaded, addItem];
}

export default useQuery;