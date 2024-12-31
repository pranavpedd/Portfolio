/* eslint-disable */

import { Fade } from 'react-awesome-reveal';
import notebookDark from '../../assets/notebook-dark.png';
import notebookLight from '../../assets/notebook-light.png';
import Course from '../../groupedComponents/Course';
import { useTheme } from '../../groupedComponents/ThemeContext';
import styles from './CoursesStyles.module.css';

function Courses() {
    const { theme, toggleTheme } = useTheme();
    const notebook = theme === 'light' ? notebookDark : notebookLight;
    const delay = 150;

    return (
        <section id='courses' className={styles.container}>
            <h1 className='sectionTitle'>Coursework</h1>
            <div className={styles.courseList}>
                <Fade delay={delay} triggerOnce>
                    <Course src={notebook} name='Data Structures' code='CMSC420' />
                    <Course src={notebook} name='Algorithms' code='CMSC351' />
                    <Course src={notebook} name='Machine Learning' code='CMSC422' />
                    <Course src={notebook} name='Networks & Security' code='CMSC414' />
                    <Course src={notebook} name='Compilers' code='CMSC430' />
                    <Course src={notebook} name='Computer Vision' code='CMSC426' />
                    <Course src={notebook} name='Computer Systems' code='CMSC216' />
                    <Course src={notebook} name='Programming Languages' code='CMSC330' />
                    <Course src={notebook} name='Data Science' code='CMSC320' />
                    <Course src={notebook} name='Web Development' code='CMSC335' />
                    <Course src={notebook} name='Object-Oriented Programming' code='CMSC131 & CMSC132' />
                    <Course src={notebook} name='Discrete Structures' code='CMSC250' />
                    <Course src={notebook} name='Linear Algebra' code='MATH240 & MATH401' />
                    <Course src={notebook} name='Calculus III' code='MATH141 & MATH241' />
                    <Course src={notebook} name='Applied Statistics' code='STAT400 & STAT401' />
                </Fade>
            </div>
        </section>
    );
}

export default Courses;
