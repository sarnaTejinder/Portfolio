import React,{useState} from 'react'
import PCard from './project.card'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import './card.css'

const project =[{
  imgUrl:'https://repository-images.githubusercontent.com/370570458/330e8780-c07c-11eb-9f03-6039e89739bb',
  title:'RandomQuote',
  desc:'Responsive API based project.',
  tech:['HTML','JS','CSS'],
  link:'https://github.com/sarnaTejinder/RandomQuote'
},{
  imgUrl:'https://repository-images.githubusercontent.com/344171427/d86d4380-cbc4-11eb-9bf9-a7e8e9d020e8',
  title:'Crown Clothing',
  desc:'Ecommerce Website deployed on heroku with firebase.',
  tech:['ReactJs','Firebase','Heroku','Redux'],
  link:'https://github.com/sarnaTejinder/crwn-clothing'
}]


function Projects(){
  const [current,setCurrent] = useState(0)
  const length = project.length

  const next = ()=>{
    setCurrent(current=>current===length-1?0:current+1)
  }
  const prev = ()=>{
    setCurrent(current=>current===0?length-1:current-1)
  }
  return(
    <section className="projects section" id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">My Recent Work</p>
      <div className="slider">
      <KeyboardArrowLeftIcon className = "slider-arrow left" onClick={prev}/>
      
        {project.map((p,idx)=>{
          return(<div onScroll={e=>console.log(e)} key={idx} className={`portfolio-container container ${idx===current?'active':"none"}`}>
            {idx===current&&<PCard  {...p}/>}

            </div>)
        })}
        <KeyboardArrowRightIcon className = "slider-arrow right" onClick={next}/>
      
      </div>
    </section>
  )
}

export default Projects

