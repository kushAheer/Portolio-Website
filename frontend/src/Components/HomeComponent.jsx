import React from 'react'
import classes from './HomeComponent.module.css'
import heroBanner from '../assets/retro_computer-TrrSyb.webp'

function HomeComponent() {
  return (
    <>
    <section className={classes.bgColor}>
        <div className={`container-fluid pt-2`}>
            <div className={`row`}>
                <div className={`col-md-12`}>
                    <div className='row'>
                        <div className={`col-md-12`}>
                            <div className='d-flex justify-content-center align-items-center'>
                                <h1 className={`${classes.text}`}>Kush</h1>
                            </div>
                        </div>
                        <div className={`col-md-12`}>
                            <div className='d-flex justify-content-start align-items-center'>
                                <h1 className={`${classes.text}`}>Software</h1>
                            </div>
                        </div>
                        <div className={`col-md-12`}>
                            <div className='d-flex justify-content-end align-items-center'>
                                <h1 className={`${classes.text}`}>Engineer</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-md-12`}>
                    <div className={``}>
                        <img src={heroBanner} className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default HomeComponent