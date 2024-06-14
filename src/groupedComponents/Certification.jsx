/* eslint-disable */

import styles from '../sections/Certifications/CertificationsStyles.module.css';

function Certification({ id, src, link, className }) {
    return (
        <div className={`${styles.certificationCard} ${className}`}>
            <a href={link} target='_blank'>
                <img src={src} alt={id} className={id} />
            </a>
        </div>
    );
}

export default Certification;
