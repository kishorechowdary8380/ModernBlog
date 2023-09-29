import { useState, useEffect } from "react";


const useFetch = (url) =>{

    const [data, setdata]=useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const abortCont = new AbortController(); /* this fetch component is fetching date from json db even it is not on the browser.To stop this we use abort controller, it will help to abort fetch if the secific web page not open on the browser */

        fetch(url, {signal: abortCont.signal})
        .then(res =>{
            if(!res.ok){
                throw Error('could not fetch the data for that resourse ')
            }
            return res.json();
        })
        .then(data => {
            setdata(data);
            setIsPending(false); 
            setError(null);
        })
        .catch(err => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted ');
            }
            else{
                setIsPending(false);
                setError(err.message);
            }
        })
        return () => abortCont.abort();
    },[]);
    return {data, isPending, error}
}

export default useFetch;