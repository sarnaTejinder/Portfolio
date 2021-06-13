import {useState,useEffect} from 'react'
import './App.css'
import Header from './components/ui/header';
import Home from './components/home'
import About from './components/About/ed.component'
import Skills from './components/skills/skills.component'
import Projects from './components/projects/projects.component'
import Contact from './components/contact/contact'
import Footer from './components/ui/footer'
import ScrollUp from './components/ui/scrollUp'

function changeTheme(theme){
  const body = document.querySelector('body')
  const footer = document.querySelector('footer')
  // console.log(footer)
  if(theme==='dark'){
      body.classList.add('dark-theme')
      footer.classList.add('dark-theme')
  }else{
      body.classList.remove('dark-theme')
      footer.classList.remove('dark-theme')
  }
} 

function App() {
  const [theme,setTheme] = useState('dark')
  useEffect(()=>{
    changeTheme('light')
  },[])
  const handleClick = ()=>{
    setTheme(theme=>theme==='light'?'dark':'light')
    changeTheme(theme)
}
  return (
    <div className="App">
      <ScrollUp/>
      <Header theme = {theme} handleClick={handleClick} />
      <Home />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
