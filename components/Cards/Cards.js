import { Card, CardContent, Typography, Grid, CircularProgress } from '@material-ui/core';
import CountUp from 'react-countup';

const Cards = ({ data : { confirmed, recovered, deaths, lastUpdate }}) => {
    if(!confirmed){
        return(<CircularProgress />)
    }
return (
<div id="container-Cards">
    <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} id="infected-cards" className="cards">
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Infected</Typography>
                <Typography variant="h5">
                    <CountUp 
                        start={0}
                        end={confirmed.value}
                        duration={2}
                        seperator=","
                    />
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">number of active cases of COVID-19</Typography>
            </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} id="recovered-cards" className="cards">
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                <Typography variant="h5">
                    <CountUp 
                        start={0}
                        end={recovered.value}
                        duration={2}
                        seperator=","
                    />
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">number of recoveries cases of COVID-19</Typography>
            </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} id="deaths-cards" className="cards">
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                <Typography variant="h5">
                    <CountUp 
                        start={0}
                        end={deaths.value}
                        duration={2}
                        seperator=","
                    />
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">number of deaths caused by COVID-19</Typography>
            </CardContent>
        </Grid>
    </Grid>
</div>
)};

export default Cards;