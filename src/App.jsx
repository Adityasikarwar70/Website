import './App.css'
import ContactUs from './Components/ContactUs'
import Home from './Components/Home'
import Marquee from './Components/Marquee'
import Nav from './Components/Nav'
import Ourwork from './Components/Ourwork'
import Service from './Components/Service'
import LocomotiveScroll from 'locomotive-scroll';





function App() {
  const locomotiveScroll = new LocomotiveScroll();
  
  
  return (
    <>
    <Nav/>
     <Home/> 
     <Service/>  
     <Marquee/>  
    <Ourwork/>
    <ContactUs/>
    

    </>
  )
}

export default App
