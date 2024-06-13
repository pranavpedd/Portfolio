import './App.css';
import Contact from './sections/Contact/Contact';
import Courses from './sections/Coursework/Courses';
import Footer from './sections/Footer/Footer';
import Intro from './sections/Intro/Intro';
import Projects from './sections/ProjectWork/Projects';
import Skills from './sections/Skills/Skills';

function App() {
    return (
        <>
            <Intro />
            <Projects />
            <Skills />
            <Courses />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
