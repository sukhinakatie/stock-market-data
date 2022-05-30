import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {},
};

function getChartData(history) {
    const sortedHistory = history.sort(item => item.date)
        .reverse()
    const chartLabels = sortedHistory.map(item => item.date)

    return {
        labels: chartLabels,
        datasets: [
            {
                label: 'Open Price',
                data: sortedHistory.map(item => item.open),
                borderColor: 'rgb(88,227,96)',
                backgroundColor: 'rgba(115,255,99,0.5)',
            },
            {
                label: 'Close Price',
                data: sortedHistory.map(item => item.close),
                borderColor: 'rgb(255,99,99)',
                backgroundColor: 'rgba(255,99,99,0.5)',
            },
        ],
    };
}

function StocksChart({style, history}) {
    return (
        <div
            style={{...style}}
        >
            <Line
                options={options}
                data={getChartData(history)}
            />
        </div>
    );
}

export default StocksChart;