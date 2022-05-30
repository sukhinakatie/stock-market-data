import {useState, useEffect} from "react";

const API_KEY = "5X8USN3SR2A8CK88";

async function getStockData(stockSymbol) {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=${API_KEY}`;
    const response = await fetch(url);
    const apiData = (await response.json())['Time Series (Daily)']
    return Object.entries(apiData)
        .map(([date, data]) => {
            const processedData = {}
            Object.entries(data)
                .forEach(([key, value]) => {
                    processedData[key.split(' ')[1]] = value
                })
            return {
                ...processedData,
                date,
            }
        })
}

export function useStockData(stockSymbol) {
    const [loading, setLoading] = useState(true);
    const [history, setHistory] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setHistory(await getStockData(stockSymbol));
                setLoading(false);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return {loading, history, error};
}