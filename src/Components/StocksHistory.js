import React, {useMemo, useRef} from "react";
import {AgGridReact} from "ag-grid-react";

function StocksHistory({style, history}) {
    const gridRef = useRef();

    const columnDefs = [
        {field: 'date'},
        {field: 'open'},
        {field: 'high'},
        {field: 'low'},
        {field: 'close'},
        {field: 'volume'},
    ]
    const defaultColDef = useMemo( ()=> ({
        sortable: true
    }));

    function onGridReady(params) {
        params.api.sizeColumnsToFit();
    }

    return (
        <div className="ag-theme-alpine" style={{...style, width: '100%'}}>
            <AgGridReact
                ref={gridRef}
                rowData={history}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                animateRows={true}
                onGridReady={onGridReady}
                pagination={true}
                paginationAutoPageSize={true}
            />
        </div>
    );
}

export default StocksHistory;