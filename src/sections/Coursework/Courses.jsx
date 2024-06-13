/* eslint-disable */

import notebookDark from '../../assets/notebook-dark.png';
import notebookLight from '../../assets/notebook-light.png';
import Course from '../../groupedComponents/Course';
import { useTheme } from '../../groupedComponents/ThemeContext';
import styles from './CoursesStyles.module.css';

function Courses() {
    const { theme, toggleTheme } = useTheme();

    const notebook = theme === 'light' ?  notebookDark : notebookLight;
    return (
        <section
            id='courses'
            className={styles.container}>
            <h1 className='sectionTitle'>Coursework</h1>
            <div className={styles.courseList}>
                <Course
                    src={notebook}
                    name='Advanced Data Structures'
                    code='CMSC 420'
                />
                <Course
                    src={notebook}
                    name='Algorithms'
                    code='CMSC 351'
                />
                <Course
                    src={notebook}
                    name='Machine Learning'
                    code='CMSC 422'
                />
                <Course
                    src={notebook}
                    name='Network & Security'
                    code='CMSC 414'
                />
                <Course
                    src={notebook}
                    name='Compilers'
                    code='CMSC 430'
                />
                <Course
                    src={notebook}
                    name='Computer Vision'
                    code='CMSC 426'
                />
                <Course
                    src={notebook}
                    name='Computer Systems'
                    code='CMSC 216'
                />
                <Course
                    src={notebook}
                    name='Data Science'
                    code='CMSC 320'
                />
                <Course
                    src={notebook}
                    name='Web Development'
                    code='CMSC 335'
                />
                <Course
                    src={notebook}
                    name='Linear Algebra'
                    code='MATH 240 & MATH 401'
                />
            </div>
        </section>
    );
}

export default Courses;
