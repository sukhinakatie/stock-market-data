import {useState, useEffect} from "react";

const API_KEY = "5X8USN3SR2A8CK88";

async function getCompanyData(stockSymbol) {
    const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stockSymbol}&apikey=${API_KEY}`;
    const response = await fetch(url);
    return await response.json()
}

export function useCompanyData(stockSymbol) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setData(await getCompanyData(stockSymbol));
                setLoading(false);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return {loading, data, error};
}