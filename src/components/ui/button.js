import React from 'react'
import './button.css'
function Button(props) {
    return(
        <button
        className = {`custom-button ${props.className}`}
        {...props}
        >
           {props.children}
        </button>
    )
}
export default Button