import React from'react'
import './home.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

 function Home() {
    return(
        <section  className = "home section" id ="home">
            <div className="home-container container grid">
                <div className="home-content grid">
                    <div className="home-social">
                        <a className="home-social-icon" href='https://www.linkedin.com/in/tejinder-sarna/' target="_blank" rel="noreferrer" >
                            <LinkedInIcon/>
                        </a>
                        <a className="home-social-icon" href='https://github.com/sarnaTejinder/' target="_blank" rel="noreferrer">
                            <GitHubIcon/>
                        </a>
                    </div>
                    <div className="home-img">
                    <img alt="profile" x="12" y="18" className="home-main-img" src="https://media-exp1.licdn.com/dms/image/C5603AQFrbmh9f35eJw/profile-displayphoto-shrink_800_800/0/1622282696209?e=1628726400&v=beta&t=kn40Px3oDvVZ7_ApIpDjMIal5K0iJsi4zyUTdw8Atm0"/>
                    </div>
                    <div className="home-data">
                        <h1 className="home-title">Hi, I'm Tejinder</h1>
                        <h3 className="home-subtitle">ReactJs Developer</h3>
                        <p className="home-desc">High level experience in web design and development, producing quality work.</p>
                        <a href="#contact" className="button button-flex">Contact Me <SendRoundedIcon className="button-icon" color="inherit"/></a>
                    </div>
                </div>
            </div>
        </section>           
    )
}

export default Home