import React from 'react'
import classes from './SkillsComponent.module.css'
import { useState } from 'react'


function SkillsComponent() {

    const [onHoverFrontend, setOnHoverFrontend] = useState(false)
    const [onHoverBackend, setOnHoverBackend] = useState(false)
    const [onHoverDatabase, setOnHoverDatabase] = useState(false)


    const handleMouseOver = (e) => {
        console.log(e)
        console.log('Mouse Over')
    }
    return (
    <>
        <div className='row'>
            <div className='col-sm-12 col-md-3'>

                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-8 h-auto tablet:w-4 phone:mr-4"><path d="M4.904 10.212V9.348L6.712 7.556C7.10667 7.16133 7.41067 6.836 7.624 6.58C7.848 6.324 8.00267 6.08933 8.088 5.876C8.184 5.66267 8.232 5.428 8.232 5.172C8.232 4.83067 8.13067 4.57467 7.928 4.404C7.736 4.23333 7.48533 4.148 7.176 4.148C6.92 4.148 6.65333 4.20667 6.376 4.324C6.09867 4.43067 5.816 4.60133 5.528 4.836L4.984 4.1C5.21867 3.89733 5.45333 3.732 5.688 3.604C5.93333 3.476 6.17867 3.38 6.424 3.316C6.68 3.252 6.936 3.22 7.192 3.22C7.864 3.22 8.38667 3.38533 8.76 3.716C9.144 4.04667 9.336 4.51067 9.336 5.108C9.336 5.47067 9.26133 5.80667 9.112 6.116C8.96267 6.41467 8.74933 6.71333 8.472 7.012C8.20533 7.31067 7.89067 7.636 7.528 7.988L5.976 9.492L5.864 9.252H9.32V10.212H4.904ZM7 13.38C6.09333 13.38 5.24 13.2093 4.44 12.868C3.64 12.5267 2.936 12.0573 2.328 11.46C1.73067 10.852 1.26133 10.148 0.92 9.348C0.578667 8.548 0.408 7.69467 0.408 6.788C0.408 5.87067 0.578667 5.01733 0.92 4.228C1.26133 3.428 1.73067 2.72933 2.328 2.132C2.936 1.524 3.64 1.04933 4.44 0.707999C5.24 0.366666 6.09333 0.195999 7 0.195999C7.91733 0.195999 8.77067 0.366666 9.56 0.707999C10.36 1.04933 11.0587 1.524 11.656 2.132C12.264 2.72933 12.7387 3.428 13.08 4.228C13.4213 5.01733 13.592 5.87067 13.592 6.788C13.592 7.69467 13.4213 8.548 13.08 9.348C12.7387 10.148 12.264 10.852 11.656 11.46C11.0587 12.0573 10.36 12.5267 9.56 12.868C8.77067 13.2093 7.91733 13.38 7 13.38ZM7 12.484C7.78933 12.484 8.52533 12.34 9.208 12.052C9.90133 11.7533 10.5093 11.3427 11.032 10.82C11.5547 10.2973 11.96 9.69467 12.248 9.012C12.5467 8.31867 12.696 7.57733 12.696 6.788C12.696 5.99867 12.5467 5.26267 12.248 4.58C11.96 3.88667 11.5547 3.27867 11.032 2.756C10.5093 2.23333 9.90133 1.828 9.208 1.54C8.52533 1.24133 7.78933 1.092 7 1.092C6.21067 1.092 5.46933 1.24133 4.776 1.54C4.09333 1.828 3.49067 2.23333 2.968 2.756C2.44533 3.27867 2.03467 3.88667 1.736 4.58C1.448 5.26267 1.304 5.99867 1.304 6.788C1.304 7.57733 1.448 8.31867 1.736 9.012C2.03467 9.69467 2.44533 10.2973 2.968 10.82C3.49067 11.3427 4.09333 11.7533 4.776 12.052C5.46933 12.34 6.21067 12.484 7 12.484Z" fill="#DAD6CA"></path></svg>
                &nbsp;SKILLS
            </div>
            <div className='col-md-6 '>

                {/* <div className={`${classes.itemList}`}> */}
                    <div className={`${classes.item}`} onMouseOver={(e)=> setOnHoverFrontend(true)} onMouseLeave={(e)=>setOnHoverFrontend(false)} >
                        {onHoverFrontend ? "ReactJs" : "Frontend"}
                    </div>
                    <div className={`${classes.item}`} onMouseOver={(e)=> setOnHoverBackend(true)} onMouseLeave={(e)=>setOnHoverBackend(false)}>
                        {onHoverBackend ? "ASP.NET |  EXPRESS |  NODEJS" : "Backend"}
                        
                    </div>
                    <div className={`${classes.item}`} onMouseOver={(e)=> setOnHoverDatabase(true)} onMouseLeave={(e)=>setOnHoverDatabase(false)}>
                        

                        {onHoverDatabase ? "Mysql | MongoDB" : "Database"}
                        
                    </div>
                {/* </div> */}
            </div>
        </div>
    </>
  )
}

export default SkillsComponent