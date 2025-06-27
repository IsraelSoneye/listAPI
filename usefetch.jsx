import { useEffect, useState } from 'react';

const useFetch = (url) => {

    const [items, setItems] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw Error('Failed to fetch');
                }
                const data = await response.json();
                setItems(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { items, isLoading, error };
}
 
export default useFetch;