import React from 'react'
import classes from './ProjectComponent.module.css'
import Card from '../UI/Card'

function ProjectsComponent() {
	return (
		<>
			<section className={`container-fluid`}>
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
						<Card techStack={"ReactJs | Asp.net | Sql"} title={'Blog Website'}/>
						<Card techStack={"ReactJs | Express | MongoDb"} title={'Chat Website'}/>
						{/* <Card techStack={"ReactJs | Express.net | MySql"} title={'Eccomerce Website'}/> */}
					</div>
				</div>
			</section>

		</>
	)
}

export default ProjectsComponent
