/* eslint-disable */

import styles from './SkillsStyles.module.css';
import checkmarkLight from '../../assets/checkmark-light.svg'
import checkmarkDark from '../../assets/checkmark-dark.svg';
import { useTheme } from '../../sharedStyles/ThemeContext';
import SkillList from '../../sharedStyles/SkillList';

function Skills() {
    const { theme, toggleTheme } = useTheme();

    const checkmark = theme === 'light' ? checkmarkLight : checkmarkDark;

    return (
      <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Technologies</h1>
        <div className={styles.skillsList}>
          <SkillList src={checkmark} skill="Python" />
          <SkillList src={checkmark} skill="JavaScript" />
          <SkillList src={checkmark} skill="Java" />
          <SkillList src={checkmark} skill="C" />
          <SkillList src={checkmark} skill="Rust" />
          <SkillList src={checkmark} skill="Ruby" />
          <SkillList src={checkmark} skill="Racket" />
          <SkillList src={checkmark} skill="SAS" />
          <SkillList src={checkmark} skill="Typescript" />
        </div>
        <hr />
        <div className={styles.skillsList}>
          <SkillList src={checkmark} skill="TensorFlow" />
          <SkillList src={checkmark} skill="React.js" />
          <SkillList src={checkmark} skill="Node.js" />
          <SkillList src={checkmark} skill="Express.js" />
          <SkillList src={checkmark} skill="Numpy" />
          <SkillList src={checkmark} skill="Pandas" />
          <SkillList src={checkmark} skill="Matplotlib" />
          <SkillList src={checkmark} skill="Seaborn" />
          <SkillList src={checkmark} skill="Flask" />
        </div>
        <hr />
        <div className={styles.skillsList}>
          <SkillList src={checkmark} skill="Git/Github" />
          <SkillList src={checkmark} skill="Azure" />
          <SkillList src={checkmark} skill="AWS" />
          <SkillList src={checkmark} skill="MongoDB" />
          <SkillList src={checkmark} skill="Power BI" />
          <SkillList src={checkmark} skill="Anaconda" />
          <SkillList src={checkmark} skill="Jupyter" />
          <SkillList src={checkmark} skill="Flask" />
        </div>
      </section>
    );
}

export default Skills;