import React from 'react'
import {EdCard,LCard} from './ed.card'
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import './about.css'
const education =[{
title:'Maharaja Surajmal Institue of Technology',
desc:'B.tech, Computer Science',
year:'2019 - 2023'
},{
    title:'Mordern Vidya Niketan School',
desc:'Science',
year:'2006 - 2019'
}]

const licenses =[{
    title:'The Web Developer Bootcamp 2020',
    desc:'Udemy',
    issued:'December 2020',
    certi:'UC-68c55742-6662-4ae8-a6e6-022e2eac453c'
},{
    title:'Java Programming Masterclass for Software Developers',
    desc:'Udemy',
    issued:'November 2020',
    certi:'UC-29584e74-70e0-408c-81ab-f9853c7b57a9'
}]

function About(){
    return(
        <section className="about section" id="about">
            
            <h2 className="section-title">About Me</h2>
            <span className="section-subtitle">My Introduction</span>
            <div className="about-info container">
            <div className="ed-container   ">
                <h3 className="ed">My Education</h3>
                {education.map((ed,idx)=><EdCard key={idx} {...ed}  />)}
            </div>
            <div className="l-container  ">
                <h3 className="ed">Licenses & certifications</h3>
                {licenses.map((l,idx)=><LCard key={idx} {...l}  />)}
            </div>
            <a href="https://internshala.com/student/resume_download/1E7B4AEA-3855-F316-1D1B-D8FCE231421B/6939972" download  className="button button-flex"> Resume <GetAppRoundedIcon color="inherit"/></a>
            </div>
        </section>
    )
}

export default About