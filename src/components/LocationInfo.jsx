import React from 'react'
import './styles/locationInfo.css'

const LocationInfo = ({ location }) => {
    console.log(location)

    return (
        <article className='location-container'>
            <h2 className='location-name'>{location?.name}</h2>
            <ul className='list'>
                <li className='list-item'><span className='list-name'>TYPE: </span>{location?.type}</li>
                <li className='list-item'><span className='list-name'>DIMENSION: </span>{location?.dimension}</li>
                <li className='list-item'><span className='list-name'>POPULATION: </span>{location?.residents.length}</li>
            </ul>
        </article>
    )
}

export default LocationInfo