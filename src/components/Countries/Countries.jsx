import React, { use, useState } from 'react'
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flags) => {
        const newVisitedFlags = [...visitedFlags, flags];
        setVisitedFlags(newVisitedFlags);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);
    
    return (
        <div >
            <h1>Countries: {countries.length}</h1>
            <h3>Total Country visited: {visitedCountries.length}</h3>
            <h3>Total visited Flags: {visitedFlags.length} </h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}> {country.name.common} </li>)
                }
            </ol>
            <div>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag} loading='lazy' width="150" className='flag' />)
                }
            </div>
            <div className='countries'>
                {
                countries.map((country) => <Country handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags} key={country.cca3.cca3} country={country} />)
            }
            </div>
            
        </div>
    )
}

export default Countries;