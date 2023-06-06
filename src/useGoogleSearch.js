 import react, { useEffect, useState } from 'react';
import API_KEYS from './Keys';
const CONTEXT_KEY = '';

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEYS}&cx=${CONTEXT_KEY}&q=${term}`).then((response) => response.json()).then((result) => {
                setData(result);
            })
        }
        fetchData();
    }, [term])
    return { data };
}
export default useGoogleSearch;
