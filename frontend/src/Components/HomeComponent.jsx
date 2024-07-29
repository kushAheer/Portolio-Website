import React from 'react'
import classes from './HomeComponent.module.css'
import heroBanner from '../assets/retro_computer-TrrSyb.webp'

function HomeComponent() {
  return (
    <>
    <section className={classes.bgColor}>
        <div className={`container-fluid pt-sm-2 pt-md-1 ${classes.wrapper}`}>
            <div className={`row`}>
                <div className={`col-md-12`}>
                    <div className='row'>
                        <div className={`col-md-12`}>
                            <div className='d-flex justify-content-center align-items-center'>
                                <h1 className={`${classes.text}`}>Ochuko</h1>
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
                <div className={``}>
                    
                        <img src={heroBanner} className={`${classes.img} `}/>
                    
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default HomeComponent