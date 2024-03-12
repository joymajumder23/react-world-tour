import { useState } from 'react'
import { useEffect } from 'react';
import Country from './country/Country';
import './countries.css';
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([ ]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    const handleVisitedCountry = (country) =>{
      // console.log(country);
      // setVisitedCountry(country);
      const newListedCountries = [...visitedCountry, country];
      setVisitedCountry(newListedCountries);
    }
    const handleVisitedFlag = (flag) => {
      console.log(flag);
      const newVisitedFlag = [...visitedFlag, flag];
      setVisitedFlag(newVisitedFlag);
      console.log(visitedFlag);
    }
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all/')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, []);
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
              <h5>Visited Countries: {visitedCountry.length}</h5>
              <ul>
                  {
                    visitedCountry.map(p => <li key={p.cca3}>{p.name.common}</li>)
                  }
              </ul>
            </div>
            <div className='flag-container'>
              {
                visitedFlag.map(flag => <img src = {flag}></img>)
              }
            </div>
            <div className='country-container'>
            {
                countries.map(p => <Country key = {p.cca3} country = {p} handleVisitedCountry = {handleVisitedCountry}
                  handleVisitedFlag = {handleVisitedFlag}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;