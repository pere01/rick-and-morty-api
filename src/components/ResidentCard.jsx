import React from 'react'
import { useEffect, useState } from 'react'
import './styles/residentCard.css'
import axios from 'axios'

const ResidentCard = ({ url }) => {
    const [resident, setresident] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setresident(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <article className='card'>
            <header className='card__header'>
                <img className='card__img' src={resident?.image} alt="" />

                <div className='card__circle-container'>
                    <div className={`card__circle ${resident?.status}`} ></div>
                    <span className='card__circle-label'>{resident?.status}</span>
                </div></header>
            <section className='card__body'>
                <h3 className='card__name'>{resident?.name}</h3>
                <ul className='card__list'>
                    <li className='card__item'>
                        <span className='card__item-label'>Species: </span></li>
                    <span className='card__item-value'>{resident?.species}</span>
                    <li className='card__item'>
                        <span className='card__item-label'>Origin: </span></li>
                    <span className='card__item-value'>{resident?.origin.name}</span>
                    <li className='card__item'>
                        <span className='card__item-label'>Episodes where appear: </span>
                        <span className='card__item-value'>{resident?.episode.length}</span>
                    </li>
                </ul>
            </section>
        </article>
    )
}

export default ResidentCard