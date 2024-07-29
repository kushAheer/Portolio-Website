import React from 'react'
import classes from './ContactComponent.module.css'
import Symbol from '../UI/Symbol'

function ContactComponent() {
    return (
        <>
            
                <div className={`container-fluid pt-5 pb-5`}>
                    <div className='row'>

                        <div className='col-md-12 ps-4'>
                            <div className='row'>
                                <h1 className={`${classes.text}`}>Let's Build</h1>
                                <div className='row justify-content-end'>
                                    <div className='col-md-10'>
                                        <h1 className={`${classes.text} `}>Together</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-12 ${classes.email}`}>
                            <a className={`${classes.emailText}`}>kushaheer709@gmail.com</a>
                        </div>
                        <div className={`col-md-12`}>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <h5 className={`${classes.socials}`}>socials</h5>
                                </div>
                                <div className={`col-md-12 d-flex ${classes.socialLinks}`}>
                                    <a className={`${classes.link}`} href='https://github.com/kushAheer'>Github <Symbol/></a>
                                    <a className={`${classes.link}`} href='https://www.linkedin.com/in/kush-aheer-893373291/'>LinkedIn <Symbol/></a>
                                    
                                </div>  
                            </div>
                        </div>

                    </div>
                </div>
            
        </>
    )
}

export default ContactComponent