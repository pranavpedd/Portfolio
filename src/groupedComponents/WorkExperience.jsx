/* eslint-disable */

import styles from '../sections/Experience/ExperienceStyles.module.css';

function WorkExperience( {src, link, dates, position, className } ) {
    return (
        <div className={`${styles.experienceCard} ${className}`}>
            <div className={styles.imageContainer}>
                <a href={link} target='_blank'>
                    <img src={src}/>
                </a>
            </div>
            <p>{position}</p>
            <p>{dates}</p> <br />
        </div>
    )
}

export default WorkExperience;