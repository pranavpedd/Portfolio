import './App.css';
import Certifications from './sections/Certifications/Certifications';
import Contact from './sections/Contact/Contact';
import Courses from './sections/Coursework/Courses';
import Experience from './sections/Experience/Experience';
import Footer from './sections/Footer/Footer';
import Intro from './sections/Intro/Intro';
import Projects from './sections/ProjectWork/Projects';
import Skills from './sections/Skills/Skills';

function App() {
    return (
        <>
            <Intro />
            <Projects />
            <Experience />
            <Skills />
            <Courses />
            <Certifications />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
