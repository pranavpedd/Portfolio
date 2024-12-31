import { Fade } from 'react-awesome-reveal';
import umd from '../../assets/umd.png';
import upenn from '../../assets/upenn.png';
import School from '../../groupedComponents/School';
import styles from './EducationStyles.module.css';

function Education() {
    const delay = 150;

    return (
        <section id='education' className={styles.container}>
            <h1 className='sectionTitle'>Education</h1>
            <div className={styles.educationContainer}>
                <Fade delay={delay} triggerOnce>
                    <School 
                        src={umd} 
                        degree='B.S. in Computer Science & Statistics'
                        link='https://www.umd.edu/' 
                        dates='Aug 2021 - Dec 2024' 
                        className={styles.umd} 
                    />
                </Fade>

                <Fade delay={delay} triggerOnce>
                    <School 
                        src={upenn}
                        degree='M.S.E in Data Science'
                        link='https://www.upenn.edu' 
                        dates='Jan 2025 - TBD' 
                        className={styles.upenn}/>
                </Fade>
            </div>
        </section>
    );
}

export default Education;