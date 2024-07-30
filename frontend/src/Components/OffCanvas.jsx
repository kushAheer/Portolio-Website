import React from 'react'
import classes from './Navbar.module.css'
import { useEffect , useState } from 'react';

function OffCanvas({ colorChnage ,changeIsActive,Link}) {

    const [activeSection , setActiveSection] = useState(Link);

    

    const handleNavClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        
        
        if (section) {
            
            const navBar = document.getElementById('nav-id'); // Ensure this ID is correct
        
            let navBarHeight = navBar.offsetHeight - 57;
            
            let elementPosition = navBarHeight - section.offsetTop ;
        
            if(sectionId === 'project-id'){
        
                elementPosition = navBarHeight + section.offsetTop;        
                
            }
            
            if(sectionId === 'contact-id'){
                
                elementPosition = section.offsetTop + navBarHeight ;
            
            }
            console.log("Element position After:", elementPosition);
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            }); // Scroll to the top of the section
            
            setActiveSection(sectionId);
            
            changeIsActive();
        } else {
            console.log("Section not found:", sectionId);
        }
    };

    return (
        <>
            <div className={`container-fluid ${colorChnage ? classes.sliderDark : classes.slider}`}>
                

                <div className={`${classes.offCanvas}`}>
                    <ul className={`navbar-nav justify-content-end flex-grow-1 pe-3 ${classes.itemList} `}>
                        <li className="" >
                            <a 
                                className={`${colorChnage ? classes.itemLinkDark : classes.itemLink} ${Link === 'home-id' ? classes.active : ''}`} 
                                onClick={()=>{handleNavClick('home-id')}} >
                                    Home
                            </a>
                        </li>
                        <li className="" >
                            <a 
                                className={`${colorChnage ? classes.itemLinkDark : classes.itemLink} ${Link === 'about-us' ? classes.active : ''}`} 
                                onClick={()=>{handleNavClick('about-us')}} >
                                    About Me
                            </a>
                        </li>
                        <li className="" >
                            <a 
                                className={`${colorChnage ? classes.itemLinkDark : classes.itemLink} ${Link === 'project-id' ? classes.active : ''}`} 
                                onClick={()=>{handleNavClick('project-id')}}>
                                    Project
                            </a>
                        </li>
                        <li className="" >
                            <a 
                                className={`${colorChnage ? classes.itemLinkDark : classes.itemLink} ${Link === 'contact-id' ? classes.active : ''}`} 
                                onClick={()=>{handleNavClick('contact-id')}}>
                                    Contact Me
                            </a>
                        </li>

                    </ul>

                </div>

            </div>
        </>
    )
}

export default OffCanvas