import React, {useState} from "react";
import {useSearchParams} from "react-router-dom";
import StocksHistory from "../Components/StocksHistory";
import StocksChart from "../Components/StocksChart";
import {useStockData} from "../API/singleStocksData";

import './History.css';
import {Input} from "@chakra-ui/react";
import {useCompanyData} from "../API/singleCompanyData";

function History() {
    const [searchParams] = useSearchParams();
    const symbol = searchParams.get('symbol');

    const startDate = new Date()
    startDate.setDate(startDate.getDate() - 30)
    const [dateFrom, setDateFrom] = useState(startDate.toISOString().substring(0, 10));
    function handleDateChange(e) {
        setDateFrom(e.target.value)
    }

    const {loading, history, error} = useStockData(symbol);
    const {loading: companyDataLoading, data, error: companyDataError} = useCompanyData(symbol);

    if (!symbol) {
        return <div>No symbol in query string</div>
    }
    if (error) {
        console.error(error)
        return <p>Error while fetching: ${error.toString()}</p>
    }
    if (companyDataError) {
        console.error(companyDataError)
        return <p>Error while fetching: ${companyDataError.toString()}</p>
    }
    if (loading || companyDataLoading) {
        //simulate the app loading
        return <p>Loading...</p>
    }

    const filteredHistory = history.filter(item => item.date >= dateFrom);

    return (
        <div className="history">
            <div className="date-filter">
                <div style={{minWidth: "8rem"}}><i>Date from</i> filter:</div>
                <div>
                    <Input
                        type={"date"}
                        value={dateFrom}
                        onChange={handleDateChange}
                    />
                </div>
                <div style={{flexGrow: 1}}></div>
                <div>{data.Description}</div>
            </div>
            <StocksHistory
                history={filteredHistory}
                style={{flexGrow: 1}}
            />
            <StocksChart
                history={filteredHistory}
                style={{padding: '1rem', height: '40%'}}
            />
        </div>
    )
}

export default History;