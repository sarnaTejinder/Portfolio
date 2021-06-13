import React,{useState} from 'react'
import SkillCard from './skill.card'
const skillset = [{
    title:'Frontend',
    skills:['CSS','SCSS','ReactJs','Tailwind CSS']
},{
    title:'Backend',
    skills:['Javascript','NodeJs','Passport','FireBase']
}]

function Skills(){
    const [front,setFront] = useState(true)
    const [back,setBack] = useState(false)
    

    const handleFront = () =>{
        
        setTimeout(()=>{setFront(front=>!front)
        if(back){
            setBack(false)
        }},200)
    }
    const handleBack = () =>{
        setTimeout(()=>{
            setBack(back=>!back)
            if(front)
            setFront(false)
        },200)
        
    }
    return(
        <section className = "skills section" id="skills">
            <h2 className="section-title">My skills</h2>
            <p className="section-subtitle">my skills</p>
            <div className="about-info container">
            <SkillCard {...skillset[0]} key='front' onClick={handleFront} isExpanded= {front}/>
            <SkillCard {...skillset[1]} key='back' onClick={handleBack} isExpanded= {back}/>
            </div>
        </section>
    )
}
export default Skills