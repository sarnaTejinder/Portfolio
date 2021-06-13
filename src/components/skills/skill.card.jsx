import React from 'react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import './skill.card.css'

function SkillCard(props){
  const content = <ul className="skill-list">
  {props.skills.map((skill,idx)=><li className="skill" key={idx} >{skill}</li>)}
  </ul>
  return(
  <div onClick={props.onClick} className="skill-card">
    <h3 className={`skill-title ${props.isExpanded?"open":""}`} onClick={props.handleClick}>
      {props.title}
      <KeyboardArrowDownIcon className={`drop-icon ${props.isExpanded?"open":"close"}`} color='inherit'/> 
    </h3>
    
    {props.isExpanded && content}
    
  </div>
  )
}

export default SkillCard