import axios from 'axios';
import { defaultCipherList } from 'constants';

const BACKEND_ENDPOINT = `https://covid19.mathdro.id/api`;

const fetchData = async (country) => {
    let changeableUrl = BACKEND_ENDPOINT;
    
    if(country){
        changeableUrl = `${BACKEND_ENDPOINT}/countries/${country}`;
    }
    try{
        const { data : {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl);

        const editedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        };

        return editedData;
    }
    catch(err){
        console.log(`error fetchData : ${err}`)
    }
}

const fetchDailyData = async () =>{
    try{
        const { data } = await axios.get(`${BACKEND_ENDPOINT}/daily`);

        const editedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))

        return editedData;
    }
    catch(err){
        console.log(`error fetchDailyData : ${err}`)
    }
}

const fetchCountriesData = async () => {
    try{
        const { data:{ countries }} = await axios.get(`${BACKEND_ENDPOINT}/countries`);
        
        return countries.map((country) => country.name);
    }
    catch (err){
        console.log(`error fetchCountriesData : ${err}`) 
    }
}

export { fetchData, fetchDailyData, fetchCountriesData };