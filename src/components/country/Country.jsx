import { useState } from 'react';
import './country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlag}) => {
    // console.log(country);
    const {name, flags, area, population, cca2, cca3} = country;
    // const [timezones, continents] = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    // console.log(handleVisitedFlag);
    return (
        <div className= {`box ${visited? 'visited' : ''}`}>
            <img src= {flags.png} alt="" />
            <h3>Name: {name?.common}</h3>
            <p>Population: {population}</p>
            {/* <p>Gini: {gini}</p> */}
            <p>Area: {area}</p>
            {/* <p>Time Zones: timezones</p>
            <p>Continent: {continents}</p> */}
            <p><small>Code1: {cca2}</small></p>
            <p><small>Code2: {cca3}</small></p>
            <button onClick={() => handleVisitedFlag(country.flags.png)}>Visited Flag</button>
            <br />
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <hr />
            <button onClick={handleVisited}>{visited? 'Visited' : 'Visit'}</button>
            {
                visited?'already visited this country' : 'want to visit'
            }
        </div>
    );
};

export default Country;