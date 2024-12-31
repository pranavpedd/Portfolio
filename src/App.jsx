import { Fade } from 'react-awesome-reveal';
import './App.css';
import Contact from './sections/Contact/Contact';
import Courses from './sections/Coursework/Courses';
import Education from './sections/Education/Education';
import Experience from './sections/Experience/Experience';
import Footer from './sections/Footer/Footer';
import Intro from './sections/Intro/Intro';
import Projects from './sections/ProjectWork/Projects';
import Skills from './sections/Skills/Skills';

function App() {

    return (
        <>
            <Fade direction='down' triggerOnce cascade>
                <Intro />
            </Fade>
            <Education />
            <Projects />
            <Experience />
            <Skills />
            <Courses />
            {/* <Certifications /> */}
            <Contact />
            <Footer />
        </>
    );
}

export default App;
