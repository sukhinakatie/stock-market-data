import { useState, useEffect } from "react";

const API_KEY = "dad1b20342617fe426ccb6459a818eec";

async function getStocksData () {
    const url = `https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=${API_KEY}`;
    let response = await fetch(url);//storing the api response
    return await response.json();
}

export function useStocksData() {
    const [loading,setLoading] = useState(true);
    const [stocks, setStocks] = useState ([]);
    const [error, setError] = useState(null);
    
    useEffect(()=> {
        (async () => {
            try {
                setStocks(await getStocksData());
                setLoading(false);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return {loading, stocks, error};
}