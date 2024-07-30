import React from 'react'
import classes from './AboutMeComponent.module.css'
import SkillsComponent from './SkillsComponent'
import ProjectsComponent from './ProjectsComponent'
import ContactComponent from './ContactComponent'


function AboutMeComponent() {

    return (
        <>
            <section className={`${classes.bgColor}`} id='changeColor'>
                <div className='container-fluid pt-5' >
                    <div className='row'>
                        <div className='col-md-12'  id='about-us'>
                            <div className='row'>
                                <div className='col-md-12 ps-4' >
                                    <div className='row'>
                                        <h1 className={`${classes.text} animate__animated animate__fadeInUp`}>GET TO </h1>
                                        <div className='row justify-content-center'>
                                            <div className='col-md-12 col-sm-10'>
                                                <h1 className={`${classes.text} `}>&nbsp; &nbsp;KNOW ME </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-sm-12 ${classes.spacing} col-md-3 pt-4`}>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-8 h-auto tablet:w-4 phone:mr-4"><path d="M6.6 10.196V5.78C6.6 5.60933 6.6 5.444 6.6 5.284C6.61067 5.124 6.62133 4.96933 6.632 4.82C6.64267 4.66 6.65333 4.50533 6.664 4.356C6.62133 4.39867 6.57867 4.44133 6.536 4.484C6.49333 4.516 6.44533 4.55867 6.392 4.612C6.36 4.644 6.28533 4.70267 6.168 4.788C6.06133 4.87333 5.91733 4.98533 5.736 5.124C5.55467 5.252 5.336 5.412 5.08 5.604L4.536 4.82L6.568 3.348H7.72V10.196H6.6ZM7 13.38C6.09333 13.38 5.24 13.2093 4.44 12.868C3.64 12.5267 2.936 12.0573 2.328 11.46C1.73067 10.852 1.26133 10.148 0.92 9.348C0.578667 8.548 0.408 7.69467 0.408 6.788C0.408 5.87067 0.578667 5.01733 0.92 4.228C1.26133 3.428 1.73067 2.72933 2.328 2.132C2.936 1.524 3.64 1.04933 4.44 0.707999C5.24 0.366666 6.09333 0.195999 7 0.195999C7.91733 0.195999 8.77067 0.366666 9.56 0.707999C10.36 1.04933 11.0587 1.524 11.656 2.132C12.264 2.72933 12.7387 3.428 13.08 4.228C13.4213 5.01733 13.592 5.87067 13.592 6.788C13.592 7.69467 13.4213 8.548 13.08 9.348C12.7387 10.148 12.264 10.852 11.656 11.46C11.0587 12.0573 10.36 12.5267 9.56 12.868C8.77067 13.2093 7.91733 13.38 7 13.38ZM7 12.484C7.78933 12.484 8.52533 12.34 9.208 12.052C9.90133 11.7533 10.5093 11.3427 11.032 10.82C11.5547 10.2973 11.96 9.69467 12.248 9.012C12.5467 8.31867 12.696 7.57733 12.696 6.788C12.696 5.99867 12.5467 5.26267 12.248 4.58C11.96 3.88667 11.5547 3.27867 11.032 2.756C10.5093 2.23333 9.90133 1.828 9.208 1.54C8.52533 1.24133 7.78933 1.092 7 1.092C6.21067 1.092 5.46933 1.24133 4.776 1.54C4.09333 1.828 3.49067 2.23333 2.968 2.756C2.44533 3.27867 2.03467 3.88667 1.736 4.58C1.448 5.26267 1.304 5.99867 1.304 6.788C1.304 7.57733 1.448 8.31867 1.736 9.012C2.03467 9.69467 2.44533 10.2973 2.968 10.82C3.49067 11.3427 4.09333 11.7533 4.776 12.052C5.46933 12.34 6.21067 12.484 7 12.484Z" fill="#DAD6CA"></path></svg>
                                    &nbsp;BIO
                                </div>
                                <div className={`col-md-6 pt-4`}>
                                    <p className={`${classes.bio}`}>My name is Kush Aheer and I am a Second Year Student at Maharaja Agarsain Institute of Technology. I do fullstack development but I love building interactive user experiences on the web. I am a JavaScript and Asp.Net advocate and a lover of ReactJs. I am trying to dive into the world of AI and Robotics. I believe as engineers we can create things that could potentially change the world for the better.</p>
                                </div>
                                <div className='col-md-12 pt-5 pb-5'>
                                    <SkillsComponent />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 pt-5 ' id='project-id'>
                            <ProjectsComponent />
                        </div>
                        <div className='col-md-12 pt-md-5 pt-0' id='contact-id'>
                            <ContactComponent />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutMeComponent
