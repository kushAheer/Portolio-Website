import React from 'react'
import classes from './Card.module.css'
import cardImage from '../assets/padlock_on_a_chain-6mA36M.webp'
import { useState } from 'react'


function Card(props) {
    return (
        <>
            <div className={`card mb-3 ${classes.cardStyle}`}>
                <div className="row ">
                    <div className="col-md-4">
                        <img src={cardImage} className={`img-fluid `} alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className={`card-text ${classes.details}`}>{props.techStack}</p>
                            <h1 className={`card-title ${classes.title}`}>{props.title}</h1>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
