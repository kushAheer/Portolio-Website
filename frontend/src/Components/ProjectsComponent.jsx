import React from 'react'
import classes from './ProjectComponent.module.css'
import Card from '../UI/Card'
import blogImage from '../assets/BlogWebsite.png'
// import chatImage from '../assets/ChatWebsite.png'
import chatImage from '../assets/chat.png'

function ProjectsComponent() {
	return (
		<>
			<section  className={`container-fluid`}>
				<div className={`row`}>
					<div className='col-md-12 ps-4'>
						<div className='row'>
							<div className='row justify-content-center'>
								<div className='col-md-8 col-sm-10'>
									<h1 className={`${classes.text}`}>Featured </h1>
								</div>
							</div>
							
							<div className='row justify-content-start'>
								<div className='col-md-8 col-sm-10'>
									<h1 className={`${classes.text} `}>Project </h1>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-12'>
							<Card techStack={"ReactJs | Asp.net | Sql"} title={'Blog Website'} image={blogImage} gitHub={'https://github.com/kushAheer/Blog-Webiste'}/>
							<Card techStack={"ReactJs | Express | MongoDb"} title={'Chat Website'} image={chatImage} gitHub={'https://github.com/kushAheer/Chat-Website'}/>
						
						{/* <Card techStack={"ReactJs | Express.net | MySql"} title={'Eccomerce Website'}/> */}
					</div>

				</div>
			</section>

		</>
	)
}

export default ProjectsComponent
