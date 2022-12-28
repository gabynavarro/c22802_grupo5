import Nav from '../components/sharedComponent/nav/Nav'
import Carousel from '../components/carousel/Carousel'
import MainMovie from '../components/main-movie/Main-Movie'
import Footer from '../components/sharedComponent/footer/footer'
import Skills from '../components/skills/skills'

export const HomeScreem=()=>{
    return(
        <div>
        <Nav></Nav>
        <MainMovie/>
        <Carousel/>
        <Skills/>
        <Footer/>
        </div>
    )        
}