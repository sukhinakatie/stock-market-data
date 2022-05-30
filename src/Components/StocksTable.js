import {useNavigate} from "react-router-dom";
import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import { useStocksData } from '../API/allStocksData';
import {AgGridReact} from "ag-grid-react";

function StocksTable({style, activeFilters, setFilterOptions}) {
    const gridRef = useRef();
    const {loading, stocks, error} = useStocksData()

    const columnDefs = [
        {field: 'symbol', filter: true},
        {field: 'name', filter: true},
        {field: 'sector'},
        {field: 'subSector'},
        {field: 'headQuarter'},
        {field: 'dateFirstAdded'},
        {field: 'cik'},
        {field: 'founded'},
    ]
    const defaultColDef = useMemo( ()=> ({
        sortable: true
    }));

    function onGridReady(params) {
        params.api.sizeColumnsToFit();
    }

    const navigate = useNavigate();
    const rowClickedListener = useCallback( event => {
        navigate(`/history?symbol=${event.data.symbol}`);
    }, []);

    const filterOptions = Array.from(
        new Set(stocks.map(stock => stock.sector))
    )
        .map(sector => ({
            text: sector,
            value: sector,
        }));
    useEffect(() => {
        setFilterOptions(filterOptions);
    }, [loading])

    useEffect(() => {
        gridRef?.current?.api.onFilterChanged();
    }, [activeFilters])

    const filterCallback = useCallback(({data}) => {
        if (!activeFilters.length) return true
        return activeFilters.includes(data.sector)
    }, [activeFilters]);

    if (error) {
        console.error(error)
        return <p>Error while fetching: ${error.toString()}</p>
    }
    if (loading) {
        //simulate the app loading
        return <p>Loading...</p>
    }

    return (
        <div className="ag-theme-alpine" style={{...style, width: '100%'}}>
            <AgGridReact
                ref={gridRef}
                rowData={stocks}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                animateRows={true}
                onGridReady={onGridReady}
                pagination={true}
                paginationAutoPageSize={true}
                onRowClicked={rowClickedListener}
                isExternalFilterPresent={() => true}
                doesExternalFilterPass={filterCallback}
            />
        </div>
    );
}

export default StocksTable;