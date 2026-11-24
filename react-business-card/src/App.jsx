import { About } from './components/About.jsx'
import { Info } from './components/Info.jsx'
import { Interests } from './components/Interests.jsx'
import { Footer } from './components/Footer.jsx'

export function App() {
    return (
        <div className="card-container">
            <About />
            <Info />
            <Interests />
            <Footer />
        </div>
    )
}