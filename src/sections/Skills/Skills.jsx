/* eslint-disable */

import { Fade } from 'react-awesome-reveal';
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
                    <SkillList src={checkmark} skill='C/C#/C++' />
                    <SkillList src={checkmark} skill='Rust' />
                    <SkillList src={checkmark} skill='Ruby' />
                    <SkillList src={checkmark} skill='Racket' />
                    <SkillList src={checkmark} skill='SAS' />
                    <SkillList src={checkmark} skill='OCaml' />
                    <SkillList src={checkmark} skill='Go' />
                    <SkillList src={checkmark} skill='Swift' />
                    <SkillList src={checkmark} skill='TypeScript' />
                    <SkillList src={checkmark} skill='SQL' />
                    <SkillList src={checkmark} skill='R' />
                    <SkillList src={checkmark} skill='MATLAB' />
                    <SkillList src={checkmark} skill='x86/a86' />
                </Fade>
            </div>
            <Fade direction='left' delay={delay} triggerOnce>
                <hr />
            </Fade>
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
                    <SkillList src={checkmark} skill='PyTorch' />
                    <SkillList src={checkmark} skill='Matplotlib' />
                    <SkillList src={checkmark} skill='Seaborn' />
                    <SkillList src={checkmark} skill='OpenAI API' />
                    <SkillList src={checkmark} skill='Flask' />
                    <SkillList src={checkmark} skill='OpenCV' />
                    <SkillList src={checkmark} skill='Django' />
                    <SkillList src={checkmark} skill='Maven' />
                    <SkillList src={checkmark} skill='SpringBoot' />
                    <SkillList src={checkmark} skill='PySpark' />
                </Fade>
            </div>
            <Fade direction='right' delay={delay} triggerOnce>
                <hr />
            </Fade>
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
                    <SkillList src={checkmark} skill='PowerBI' />
                </Fade>
            </div>
        </section>
    );
}

export default Skills;
