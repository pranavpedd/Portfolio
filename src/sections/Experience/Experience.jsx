import oshkosh from '../../assets/oshkosh.jpg';
import umd from '../../assets/umd.png';
import WorkExperience from '../../groupedComponents/WorkExperience';
import styles from './ExperienceStyles.module.css';

function Experience() {
    return (
        <section id='experience' className={styles.container}>
            <h1 className='sectionTitle'>Work Experience</h1>
            <div className={styles.experienceContainer}>
                <WorkExperience
                    src={umd}
                    company='UMD'
                    position='Research Assistant'
                    dates='Jan 2022 - May 2022'
                    className={styles.umd}
                />
                <WorkExperience
                    src={umd}
                    company='UMD'
                    position='Research Assistant'
                    dates='Aug 2022 - Dec 2022'
                    className={styles.umd}
                />
                <WorkExperience
                    src={oshkosh}
                    company='Oshkosh Co.'
                    position='Data Science Intern'
                    dates='May 2023 - Aug 2023'
                    className={styles.oshkosh}
                />
                <WorkExperience
                    src={oshkosh}
                    company='Oshkosh Co.'
                    position='Data Engineering Intern'
                    dates='Aug 2023 - May 2024'
                    className={styles.oshkosh}
                />
            </div>
        </section>
    );
}

export default Experience;
