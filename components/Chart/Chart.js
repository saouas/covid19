import { useState, useEffect } from 'react';
import { fetchDailyData, fetchData } from './../../pages/api/index';
import { Line, Bar } from 'react-chartjs-2';
import { Grid } from '@material-ui/core'

const Chart = () => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        (async () => {
            setDailyData(await fetchDailyData());

        })();

    },[]);

    const lineChart = (
        dailyData.length ?
        (<Line 
            id="linechart"
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    backgroundColor: 'rgba(0, 0, 255, 0.1)',
                    fill: true,
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true
                }]
            }}
        />) : null
    );

return (
<div>
    <Grid id="container-chart">
        {lineChart}
    </Grid>
</div>
)};

export default Chart;