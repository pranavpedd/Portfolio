/* eslint-disable */

import styles from '../sections/Education/EducationStyles.module.css';

function School( {src, degree, link, dates, className } ) {
    return (
        <div className={`${styles.schoolCard} ${className}`}>
            <div className={styles.imageContainer}>
                <a href={link} target='_blank'>
                    <img src={src}/>
                </a>
            </div>
            <p>{degree}</p>
            <p>{dates}</p> <br />
        </div>
    )
}

export default School;