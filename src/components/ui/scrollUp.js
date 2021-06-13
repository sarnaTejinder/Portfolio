import React from 'react'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function ScrollUp(){
    return(
        <span className = "scroll-up" id="scroll-up">
            <a className = "scroll-link" href="#home">
                <KeyboardArrowUpIcon color="inherit"/>
            </a>
        </span>
    )
}

export default ScrollUp

