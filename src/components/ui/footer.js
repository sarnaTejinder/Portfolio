import React from 'react'
import './footer.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer(props) {
    return(
        <footer className="footer" id="footer">
            <div className="footer-bg">
                <div className="footer-container container">
                    <div className="footer-info">
                        <h2 className="footer-title">Tejinder</h2>
                        <p className="footer-subtitle">ReactJs Developer</p>
                    </div>
                    <ul className="footer-links">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <div className="footer-social">
                        <a className="footer-social-icon" href='https://www.linkedin.com/in/tejinder-sarna/' target="_blank" rel="noreferrer" >
                            <LinkedInIcon/>
                        </a>
                        <a className="footer-social-icon" href='https://github.com/sarnaTejinder/' target="_blank" rel="noreferrer">
                            <GitHubIcon/>
                        </a>
                    </div>
                </div>
                <p className="footer-copy">&#169; Tejinder Sarna</p>
            </div>
        </footer>
    )
}
export default Footer