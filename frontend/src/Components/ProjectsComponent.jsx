import React from 'react'
import classes from './ProjectComponent.module.css'
import Card from '../UI/Card'
import eWebsite from '../assets/e-website.png'
import defaultImage from '../assets/retro_computer.webp'
import blogImage from '../assets/BlogWebsite.png'
import chatImage from '../assets/chat.png'
import aiImage from '../assets/Ai_Interview.png'
import panelTranslateImage from '../assets/panel_translator.png'
import coinWiseImage from "../assets/coinwise.png"

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
							<Card techStack={"Next.js 15 | React 19 | Tailwind | Firebase | Vapi"} title={'HireSmart: AI Interview Platform'} image={aiImage} gitHub={'https://github.com/kushAheer/AI-Interview'} demoLink={'https://ai-interview-seven-teal.vercel.app'}/>
							<Card techStack={"Node.js | Express | MySQL | React | Redux"} title={'E-Commerce Website'} image={eWebsite} gitHub={'https://github.com/kushAheer/E-Commerce-Website'} />
							<Card techStack={"Python | Streamlit | LangChain | Pinecone | Groq"} title={'CoinWise: AI Financial Assistant'} image={coinWiseImage} gitHub={'https://github.com/kushAheer/CoinWise'}/>
							<Card techStack={"Python | PyTorch | OCR | MarianMT | OpenCV"} title={'PanelTranslate: AI Manga Translation'} image={panelTranslateImage} gitHub={'https://github.com/kushAheer/PanelTranslate'}/>
							<Card techStack={"ReactJs | Asp.net | Sql"} title={'Blog Website'} image={blogImage} gitHub={'https://github.com/kushAheer/Blog-Webiste'}/>
							<Card techStack={"ReactJs | Express | MongoDb"} title={'Chat Website'} image={chatImage} gitHub={'https://github.com/kushAheer/Chat-Website'} demoLink={"https://chat-website-uf7x.onrender.com"}/>
							{/* <Card techStack={"WebSockets | React | Node.js (In Progress)"} title={'1v1 Competitive Coding Platform'} image={defaultImage} gitHub={'https://github.com/kushAheer/1v1-coding-platform'}/> */}
					</div>

				</div>
			</section>

		</>
	)
}

export default ProjectsComponent
