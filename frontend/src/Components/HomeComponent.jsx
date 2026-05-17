import React from 'react'
import classes from './HomeComponent.module.css'
import heroBanner from '../assets/retro_computer.webp'
import 'animate.css';


function HomeComponent() {
    return (
        <>
            <section className={classes.bgColor} id='home-id'>
                <div className={classes.wrapper}>
                    <div className={classes.headline}>
                        <h1 className={`${classes.text} ${classes.lineRight} animate__animated animate__fadeInDown`}>Kush Aheer</h1>
                        <h1 className={`${classes.text} ${classes.lineLeft} animate__animated animate__fadeInLeft`}>Software</h1>
                        <h1 className={`${classes.text} ${classes.lineRight} animate__animated animate__fadeInRight`}>Engineer</h1>
                    </div>
                </div>
                <img src={heroBanner} className={classes.heroImage} alt='Retro computer' />
            </section>
        </>
    )
}

export default HomeComponent
