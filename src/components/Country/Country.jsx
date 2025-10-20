import React, { useState } from 'react'
import './Country.css'

    const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
        
        const flagSrc = country?.flags?.flags?.png;
        const altText = country?.flags?.flags?.alt;
        const name = country?.name?.common;
        const region = country?.region?.region;
        const capital = country?.capital?.capital;
        const population = country?.population?.population;
        const area = country?.area?.area;
        const areaSize = country?.area?.area > 300000 ? "Big Country" : "Small Country";

        const [visited, setVisited] = useState(false);

        const handleVisited = () =>{
            // basic system
            // if (visited) {
            //     setVisited(false);
            // } else {
            //     setVisited(true);
            // }

            // second way
            // setVisited(visited ? false : true);

            // third system
            setVisited(!visited);
            handleVisitedCountries(country);
        }
    
        return (
            <article className={`country ${visited ? 'country-visited' : ''}`}>
                <img className='country-flag' loading='lazy' src={flagSrc} alt={altText} />
                <div className="country-body">
                    <h3 className="country-title">{name}</h3>
                    <p className="country-meta">Region: {region}</p>
                    <div className="country-row">
                        <p className="badge">Capital: {capital}</p>
                        <p className="badge">Population: {population}</p>
                        <p className="badge">Area: {area}</p>
                        <p className="badge">{areaSize}</p>
                    </div>
                    <button onClick={handleVisited} className={`visit-btn ${visited ? 'visited' : 'not-visited'}`}>{visited ? "visited" : "not visited"} </button>
                    <button className='visit-btn' onClick={ () => handleVisitedFlags(flagSrc)}>Add visited flag</button>
                </div>
                
            </article>
        )
    }

export default Country