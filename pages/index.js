import Head from 'next/head'
import { useState, useEffect } from 'react';
import { Cards, Chart, CountryPicker } from './../components';
import { fetchData } from './api';

export default function Home() {
  const [dataCards, setDataCards] = useState({});

  useEffect(() =>{
    (async () => {
      const data = await fetchData();
      setDataCards(data);
    })();
  },[])


  return (
  <div> 
    <Cards data={dataCards}/>
    <CountryPicker />
    <Chart />
  </div>
  )
}
