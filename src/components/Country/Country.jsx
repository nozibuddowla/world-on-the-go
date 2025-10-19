import React from 'react'
import './Country.css'

    const Country = ({country}) => {
    const flagSrc = country?.flags?.flags?.png;
    const altText = country?.flags?.flags?.alt;
    const name = country?.name?.common;
    const region = country?.region?.region;
    const capital = country?.capital?.capital;
    const population = country?.population?.population;
    const area = country?.area?.area;
    const areaSize = country?.area?.area > 300000 ? "Big Country" : "Small Country";

    const handleVisited = () =>{
        console.log(`${name} visited`);
        
    }
    
    return (
        <article className='country'>
            <img className='country__flag' loading='lazy' src={flagSrc} alt={altText} />
            <div className="country__body">
                <h3 className="country__title">{name}</h3>
                <p className="country__meta">Region: {region}</p>
                <div className="country__row">
                    <p className="badge">Capital: {capital}</p>
                    <p className="badge">Population: {population}</p>
                    <p className="badge">Area: {area}</p>
                    <p className="badge">{areaSize}</p>
                </div>
                <button onClick={handleVisited}>not visited</button>
            </div>
            
        </article>
    )
}

export default Country