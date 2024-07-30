import React from 'react'
import classes from './Navbar.module.css'
import { useState, useEffect } from 'react'
import OffCanvas from './OffCanvas'

function NavbarComponent() {

	const [isActive, setIsActive] = React.useState(false)
	const [colorChange, setColorChange] = React.useState(false);
	const [avtiveLink, setActiveLink] = React.useState('home-id');

	useEffect(() => {
		const handleScroll = () => {
			const aboutSection = document.getElementById('changeColor');
			const projectSection = document.getElementById('project-id');
			const homeSection = document.getElementById('home-id');
			const contactSection = document.getElementById('contact-id');
			const aboutMe = document.getElementById('about-us');
			if (aboutSection) {
				const home = homeSection.getBoundingClientRect();
				const color = aboutSection.getBoundingClientRect();
				const project = projectSection.getBoundingClientRect();
				const contact = contactSection.getBoundingClientRect();
				const about = aboutMe.getBoundingClientRect();
				// if(home.top <= 0 && home.bottom >= 0){
				// 	setActiveLink('home-id');
				// 	console.log('home');
				// 	setColorChange(false);
				// }
				if (color.top <= 0 && color.bottom >= 0) {
					if(home.top <= 0 && home.bottom >= 0){

						setActiveLink('home-id');
					}
					setColorChange(true);
				}else{
					setActiveLink('home-id');
					setColorChange(false);
				}
				
				if(about.top <= 0 && about.bottom >= 0){
					console.log('about');
					setActiveLink('about-us');
				}
				
				if(project.top <= 0 && project.bottom >= 0){
					console.log('project');
					setActiveLink('project-id');
				}
				if(contact.top <= 0 && contact.bottom >= 0){
					console.log('contact');
					setActiveLink('contact-id');
				}
			}

		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	const changeIsActive = () => {
		setIsActive(!isActive);
	}


	return (
		<>
			<nav className={`navbar sticky-top  ${colorChange ? classes.navBgDark : classes.navBg}`} id='nav-id'>
				<div className="container-fluid">
					<a className={`navbar-brand ${colorChange ? classes.logoDark : classes.logo}`} href="#" >KA</a>

					<div className="" type="button" onClick={() => setIsActive(!isActive)}> MENU </div>

					{isActive && <OffCanvas colorChnage={colorChange} Link = {avtiveLink}  changeIsActive={changeIsActive}  />}

				</div>
			</nav>
		</>
	)
}

export default NavbarComponent