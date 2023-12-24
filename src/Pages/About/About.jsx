import AboutNav from '../../Components/AboutNav/AboutNav'
import AboutPage from '../../Components/AboutPages/AboutPage'
import ContactUs from '../../Components/ContactUs/ContactUs'
import Footer from '../../Components/Footer/Footer'
import Versions from '../../Components/Versions/Versions'


 const About = () => {
  return (
    
    <div className='About_Header'>

    <AboutNav /> 
    <AboutPage />
    <Versions />
    <ContactUs />
    < Footer />
  
    </div>
  )
}

export default About