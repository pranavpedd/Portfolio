/* eslint-disable */

import { Fade, Slide } from 'react-awesome-reveal';
import checkmarkDark from '../../assets/checkmark-dark.svg';
import checkmarkLight from '../../assets/checkmark-light.svg';
import SkillList from '../../groupedComponents/SkillList';
import { useTheme } from '../../groupedComponents/ThemeContext';
import styles from './SkillsStyles.module.css';

function Skills() {
    const { theme, toggleTheme } = useTheme();
    const checkmark = theme === 'light' ? checkmarkLight : checkmarkDark;
    const delay = 150;

    return (
        <section id='skills' className={styles.container}>
            <h1 className='sectionTitle'>Technologies</h1>
            <div className={styles.skillsList}>
                <Fade delay={delay} triggerOnce>
                    <SkillList src={checkmark} skill='Python' />
                    <SkillList src={checkmark} skill='JavaScript' />
                    <SkillList src={checkmark} skill='Java' />
                    <SkillList src={checkmark} skill='C' />
                    <SkillList src={checkmark} skill='Rust' />
                    <SkillList src={checkmark} skill='Ruby' />
                    <SkillList src={checkmark} skill='Racket' />
                    <SkillList src={checkmark} skill='SAS' />
                    <SkillList src={checkmark} skill='OCaml' />
                    <SkillList src={checkmark} skill='TypeScript' />
                    <SkillList src={checkmark} skill='SQL' />
                    <SkillList src={checkmark} skill='x86/a86' />
                </Fade>
            </div>
            <Slide direction='left' delay={delay} triggerOnce>
                <hr />
            </Slide>
            <div className={styles.skillsList}>
                <Fade delay={delay} triggerOnce>
                    <SkillList src={checkmark} skill='TensorFlow' />
                    <SkillList src={checkmark} skill='Keras' />
                    <SkillList src={checkmark} skill='React.js' />
                    <SkillList src={checkmark} skill='Node.js' />
                    <SkillList src={checkmark} skill='Express.js' />
                    <SkillList src={checkmark} skill='Vite' />
                    <SkillList src={checkmark} skill='Numpy' />
                    <SkillList src={checkmark} skill='Pandas' />
                    <SkillList src={checkmark} skill='Matplotlib' />
                    <SkillList src={checkmark} skill='Seaborn' />
                    <SkillList src={checkmark} skill='OpenAI API' />
                    <SkillList src={checkmark} skill='Flask' />
                    <SkillList src={checkmark} skill='OpenCV' />
                    <SkillList src={checkmark} skill='Django' />
                </Fade>
            </div>
            <Slide direction='right' delay={delay} triggerOnce>
                <hr />
            </Slide>
            <div className={styles.skillsList}>
                <Fade delay={delay} triggerOnce>
                    <SkillList src={checkmark} skill='Git/Github' />
                    <SkillList src={checkmark} skill='Azure' />
                    <SkillList src={checkmark} skill='AWS' />
                    <SkillList src={checkmark} skill='MongoDB' />
                    <SkillList src={checkmark} skill='Anaconda' />
                    <SkillList src={checkmark} skill='Databricks' />
                    <SkillList src={checkmark} skill='Jupyter' />
                    <SkillList src={checkmark} skill='Docker' />
                    <SkillList src={checkmark} skill='MySQL' />
                    <SkillList src={checkmark} skill='PySpark' />
                </Fade>
            </div>
        </section>
    );
}

export default Skills;
