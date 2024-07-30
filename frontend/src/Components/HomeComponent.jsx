import React from 'react'
import classes from './HomeComponent.module.css'
import heroBanner from '../assets/retro_computer-TrrSyb.webp'
import 'animate.css';


function HomeComponent() {
    return (
        <>
            <section className={classes.bgColor} id='home-id'>
                <div className={`container-fluid pt-sm-2 pt-md-1 ${classes.wrapper}`}>
                    <div className={`row`}>
                        <div className={`col-md-12`}>
                            <div className='row'>
                                <div className={`col-md-12`}>
                                    <div className='d-flex justify-content-center align-items-center '>
                                        <h1 className={`${classes.text} animate__animated animate__fadeInDown `}>Kush</h1>
                                    </div>
                                </div>
                                <div className={`col-md-12`}>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <h1 className={`${classes.text}  animate__animated animate__fadeInLeft `}>Software</h1>
                                    </div>
                                </div>
                                <div className={`col-md-12`}>
                                    <div className='d-flex justify-content-end align-items-center'>
                                        <h1 className={`${classes.text} animate__animated animate__fadeInRight`}>Engineer</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={``}>

                            <img src={heroBanner} className={`${classes.heroImage} `} />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeComponent