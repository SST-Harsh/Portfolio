import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar' 
import About from '../Components/About'
import Contact from '../Components/Conatct'
export default function MainPage(){
    return(
        <div className='w-full h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white'> 
        {/* nabar */}
        <Navbar/>
        {/* hero */}
        <Hero/>
        {/* About us */}
        <About/>
        {/* Contact  */}
        <Contact/>

        </div>
    )
}