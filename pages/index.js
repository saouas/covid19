import Head from 'next/head'
import { useState, useEffect } from 'react';
import { Cards, Chart, CountryPicker } from './../components';
import { fetchData } from './api';

export default function Home() {
  const [dataCards, setDataCards] = useState({});
  const [country, setCountry] = useState('Global');

  const handleCountryChange = async (newCountry) => {
    const data = await fetchData(newCountry);
    setDataCards(data)
    setCountry(newCountry)
  }

  useEffect(() =>{
    (async () => {
      const data = await fetchData(country);
      setDataCards(data);
    })();
  },[])


  return (
  <div id="container-global"> 
    <img src="/images/logo.png" id="logo"></img>
    <Cards data={dataCards}/>
    <CountryPicker handleCountryChange={handleCountryChange} />
    <Chart data={dataCards} country={country}/>
    <p id="footer">Made with ❤️ by <a href="https://salimaouas.dev">Salim Aouas</a></p>
  </div>
  )
}
