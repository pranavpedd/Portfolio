import styles from './FooterStyles.module.css';

function Footer() {
    return (
        <section id='footer' className={styles.container}>
            <p>&copy; 2024 Pranav Peddamalla</p>
            <p>
                icons are from <a href='https://icons8.com' target='blank'>icons8</a>
            </p>
        </section>
    );
}

export default Footer;
