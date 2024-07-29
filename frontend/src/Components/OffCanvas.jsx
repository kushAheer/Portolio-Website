import React from 'react'
import classes from './Navbar.module.css'
function OffCanvas() {
  return (
    <>
        <div className={`container-fluid ${classes.slider}`}>
            {/* <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"> */}
                        
                        <div className={`${classes.offCanvas}`}>
                            <ul className={`navbar-nav justify-content-end flex-grow-1 pe-3 ${classes.itemList} `}>
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

        </div>
    </>
  )
}

export default OffCanvas