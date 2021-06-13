import React from 'react'
import Tech from '../ui/tech'
import './card.css'

function PCard(props){
    return(
        <div className="project-card grid">
                <img className="project-img" src={props.imgUrl} alt={props.alt || "project"}  />
            <div className="project-data">
                <h3 className="project-title">{props.title}</h3>
                <p className="project-desc">{props.desc}</p>
                {props.tech.map((tech,idx) =><Tech key={idx} text={tech}/>)}
            </div>
            <a target="_blank" rel="noreferrer" href={props.link} className ="button button-flex button-small project-button">Source Code</a>
        </div>
    )
}

export default PCard