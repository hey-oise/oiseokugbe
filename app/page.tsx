import TopBar from "./components/topBar";
import Home from "./components/home";
import About from "./components/about";
import MyJourney from "./components/myJourney"

export default function App() {
    return (
        <div className="scroll-smooth">
        <TopBar/>
        <Home/>
        <About/>
        <MyJourney/>
        </div>
    )
}