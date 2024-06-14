/* eslint-disable */

import styles from '../sections/Experience/ExperienceStyles.module.css';

function WorkExperience( {src, company, dates, position, className } ) {
    return (
        <div className={`${styles.experienceCard} ${className}`}>
            <div className={styles.imageContainer}>
                <img src={src}/>
            </div>
            <h2>{company}</h2>
            <p>{position}</p>
            <p>{dates}</p> <br />
        </div>
    )
}

export default WorkExperience;