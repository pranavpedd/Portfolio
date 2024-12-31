import { Fade } from 'react-awesome-reveal';
import githubDark from '../../assets/github-dark.svg';
import githubLight from '../../assets/github-light.svg';
import instagramDark from '../../assets/instagram-dark.png';
import instagramLight from '../../assets/instagram-light.png';
import linkedinDark from '../../assets/linkedin-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import moon from '../../assets/moon.svg';
import pfp from '../../assets/profile pic.png';
import sun from '../../assets/sun.svg';
import { useTheme } from '../../groupedComponents/ThemeContext.jsx';
import styles from './IntroStyles.module.css';

function Intro() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
    const delay = 1000;

    return (
        <section id='intro' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.intro} src={pfp} alt='pranav pfp' />
                <img className={styles.colorMode} src={themeIcon} alt='theme picker' onClick={toggleTheme} />
            </div>
            <div className={styles.info}>
                <h1>
                    Pranav <br /> Peddamalla
                </h1>
                <Fade direction='left' delay={delay} triggerOnce>
                    <h2>Software Engineer || Data Scientist</h2>
                </Fade>
                <span>
                    <a href='https://www.linkedin.com/in/pranavpedd/' target='_blank'>
                        <img src={linkedinIcon} alt='linked in icon'></img>
                    </a>
                    <a href='https://github.com/pranavpedd' target='_blank'>
                        <img src={githubIcon} alt='github icon'></img>
                    </a>
                    <a href='https://www.instagram.com/pranavpedd/' target='_blank'>
                        <img src={instagramIcon} alt='instagram icon' />
                    </a>
                </span>
                <p className={styles.description}>
                    I am a graduate from the University of Maryland, College Park and am currently pursuing my M.S. in Data Science at the University of Pennsylvania.
                </p>
                <p className={styles.description}>
                    Below, you will find my notable projects, prior work experience, technologies, coursework, and a
                    form to contact me!
                </p>
            </div>
        </section>
    );
}

export default Intro;