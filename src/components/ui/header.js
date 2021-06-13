import React,{useRef} from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import DescriptionIcon from '@material-ui/icons/Description';
import ClearIcon from '@material-ui/icons/Clear';
import Brightness2RoundedIcon from '@material-ui/icons/Brightness2';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunny';
import './header.css'



function Header(props) {
    const navMenu = useRef(null)
    const handleToggle=()=>{
        navMenu.current.classList.toggle('show-menu')           
    }
    const Theme = ()=>(
        props.theme ==='light'?<WbSunnyRoundedIcon onClick={props.handleClick}/>:<Brightness2RoundedIcon className='svg-small' onClick={props.handleClick}/>)
    return(
        <header  id="header" className="header">
            <nav className="nav container">
                <a href="/" className="nav-logo">Tejinder</a>
                <div ref={navMenu} className="nav-menu " id="nav-menu">
                    <ul className="nav-list grid">
                        <li className="nav-item"  onClick={handleToggle}>
                            <HomeIcon className="nav-link"/>
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item"  onClick={handleToggle}>
                        <AccountCircleIcon className="nav-link"/>
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item"  onClick={handleToggle}>
                        <DescriptionIcon className="nav-link" />
                            <a className="nav-link" href="#skills">
                            Skills</a>
                        </li>
                        <li className="nav-item"  onClick={handleToggle}>
                            <WorkIcon className="nav-link"/>
                        <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item"  onClick={handleToggle}>
                            <PermContactCalendarIcon className="nav-link"/>
                        <a className="nav-link" href="#contact">Contactme</a>
                        </li>
                        <li className="nav-item"  onClick={handleToggle}>
                            <PermContactCalendarIcon className="nav-link"/>
                        <a className="nav-link" download href="https://internshala.com/student/resume_download/1E7B4AEA-3855-F316-1D1B-D8FCE231421B/6939972">Resume</a>
                        </li>
                    </ul>
                    <ClearIcon onClick={handleToggle} className="nav-close"/>
                </div>
                <div className="nav-btns ">
                    {Theme()}
                    <div className="nav-toggle" id="nav-toggle">
                    <AppsIcon onClick={handleToggle}/>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header


