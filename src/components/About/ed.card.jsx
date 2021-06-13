import React from 'react'
import './card.css'
function EdCard(props) {
    return(
        <div className = "ed-card">
            <h3 className = "ed-title">{props.title}</h3>
            <p className = "ed-desc">{props.desc}</p>
            <span className = "ed-year">{props.year}</span>
        </div>
    )
}

function LCard(props) {
    return(
        <div className = "l-card">
            <h3 className = "l-title">{props.title}</h3>
            <p className = "l-desc">{props.desc} - {props.issued}</p>
            <p className = "l-certi">Credentail ID {props.certi}</p>
            <a target="_blank" rel="noreferrer" href={`https://udemy-certificate.s3.amazonaws.com/image/${props.certi}.jpg`} className="l-link">See credential</a>
        </div>
    )
}
export {EdCard , LCard}