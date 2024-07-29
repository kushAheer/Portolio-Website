import React from 'react'
import classes from './Navbar.module.css'
import { useState } from 'react'
import OffCanvas from './OffCanvas'

function NavbarComponent() {

    const [isActive , setIsActive] = React.useState(false)

    return (
        <>
            <nav className={`navbar sticky-top  ${classes.navBg}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">KA</a>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="" type="button" onClick={() => setIsActive(!isActive)}> MENU </div>
                    {/* {isActive && <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                
                            </ul>
                            
                        </div>
                    </div>} */}
                    {isActive && <OffCanvas/>}
                    
                </div>
            </nav>
        </>
    )
}

export default NavbarComponent