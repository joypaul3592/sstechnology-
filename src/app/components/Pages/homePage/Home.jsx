import About from "../aboutPage/About";
import Projects from "../projectsPage/Projects";
import Services from "../servicesPage/ServicesItems";
import Hero from "./Hero";
import HeroSlider from "./HeroSlider";


export default function Home() {
    return (
        <div>
            <Hero />
            <HeroSlider />
            <About />
            <Services />
            <Projects />
        </div>
    )
}