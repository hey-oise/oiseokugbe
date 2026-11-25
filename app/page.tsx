import TopBar from "./components/topBar";
import Home from "./components/home";
import About from "./components/about";
import MyJourney from "./components/myJourney";
import Skills from "./components/skill";
import Projects from "./components/projects";
import Footer from "./components/contact";

export default function App() {
    return (
        <div className="scroll-smooth">
        <TopBar/>
        <Home/>
        <About/>
        <MyJourney/>
        <Skills/>
        <Projects/>
        <Footer/>
        </div>
    )
}