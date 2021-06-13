import React from 'react'

function CustomInput(props){
    return(
        <React.Fragment>
            <label htmlFor={props.name} className="custom-label">{props.label}</label>
        <input  className={`custom-input ${props.className}`}
        {...props}
        />
        </React.Fragment>
    )
}

export default CustomInput