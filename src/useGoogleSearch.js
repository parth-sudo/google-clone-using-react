import { useState, useEffect } from 'react'
import API_KEY from "./keys";

const CONTEXT_KEY = "071066435e62d90ac";

 // custom hook.
const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    
    useEffect(() => {  
        const fetchData = async() => {
            fetch( // get the response.
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result);
            })
            // take the response and convert it to json.
        } 
        
        fetchData();

    }, [term])     

    return {data} // returns an object.

};

export default useGoogleSearch
