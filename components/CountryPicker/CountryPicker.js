import { useState, useEffect } from 'react';
import { NativeSelect, FormControl, Grid } from '@material-ui/core';
import { fetchCountriesData } from './../../pages/api/index';

const CountryPicker = ({ handleCountryChange }) => {

    const [countries, setCountries] = useState([]);
    const [actualCountry, setActualCountry] = useState('Global');
    
    useEffect(() => {
        (async () => {
            let tmp_countries = await fetchCountriesData();
            tmp_countries.unshift("Global");
            setCountries(tmp_countries);
        })();
    }, [setCountries]);

    const handleChange = (e) => {
        handleCountryChange(e.target.value);
        setActualCountry(e.target.value);
    }
    
    return (
        <div>
            <Grid container alignItems="center" justify="center" id="container-countrypicker">
                <Grid item >
                <FormControl>
                    <NativeSelect value={actualCountry} onChange={(e) => handleChange(e)}>
                        {countries.map((country, i) => {
                            return <option value={country} key={i}>{country}</option>
                        })}
                    </NativeSelect>
                </FormControl>
                </Grid>
            </Grid>
        </div>
    )
};

export default CountryPicker;