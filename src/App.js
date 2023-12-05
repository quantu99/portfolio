import './App.module.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Parralax from './components/parralax/Parralax';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
import About from './components/about/About';
import Skill from './components/skill/Skill';
function App() {
    return (
        <div className="container">
            <Cursor />
            <section id="Homepage">
                <Navbar />
                <Hero />
            </section>
            <section id="About">
                <About />
            </section>
            <section id="Skill">
                <Parralax type="services" />
            </section>
            <Skill />
            <section id="Portfolio">
                <Parralax type="portfolio" />
            </section>
            <Portfolio />
            <section id="Contact">
                <Contact />
            </section>
        </div>
    );
}

export default App;
