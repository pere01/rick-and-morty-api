import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import Fail from './components/Fail'

function App() {
    const [location, setLocation] = useState()
    const [inpLocation, setInpLocation] = useState()
    const [failed, setFailed] = useState(false)

    useEffect(() => {
        let URL

        if (inpLocation) {
            URL = `https://rickandmortyapi.com/api/location/${inpLocation}`
        } else {
            const randomLocation = Math.floor(Math.random() * 126) + 1;
            const URL = `https://rickandmortyapi.com/api/location/${randomLocation}`
        }

        axios.get(URL)
            .then(res => {
                setLocation(res.data)
                setFailed(false)
            })
            .catch(err => {
                setFailed(true)
                console.log(err)
            })
    }, [inpLocation])

    const handelSubmit = event => {
        event.preventDefault()
        setInpLocation(event.target.inputSearch.value)
    }

    return (
        <div className="App">
            <div className='background'></div>
            <form className='btn' onSubmit={handelSubmit}>
                <input className='btn-inp' id='inputSearch' type="text" />
                <button className='btn-search'>Search</button>
            </form>
            {
                failed ?
                    <Fail />
                    :
                    <>
                        <LocationInfo
                            location={location} />
                        <div className='resident-container'>
                            {
                                location?.residents.map(url => (
                                    <ResidentCard
                                        key={url} url={url}
                                    />
                                ))
                            }
                        </div>
                    </>
            }
        </div>
    )
}

export default App
