import { Fade } from 'react-awesome-reveal';
import deeplearning from '../../assets/deeplearning logo.png';
import pcap from '../../assets/pcap logo.png';
import Certification from '../../groupedComponents/Certification';
import styles from './CertificationsStyles.module.css';

function Certifications() {
    const delay = 150;

    return (
        <section id='certifications' className={styles.container}>
            <h1 id='sectionTitle'>Certifications</h1>
            <div className={styles.certificationsContainer}>
                <Fade delay={delay} triggerOnce>
                    <Certification
                        id='python'
                        src={pcap}
                        link='https://www.credly.com/badges/4f22fbd6-3360-4c15-9421-9ded642f4055/public_url'
                        className={styles.pythonImage}
                    />
                </Fade>

                <Fade delay={delay} triggerOnce>
                    <Certification
                        id='deeplearning'
                        src={deeplearning}
                        link='https://www.coursera.org/account/accomplishments/professional-cert/8SDVG7H8EUL6?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=prof'
                        className={styles.deeplearningImage}
                    />
                </Fade>
            </div>
        </section>
    );
}

export default Certifications;
