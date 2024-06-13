/* eslint-disable */

import checkmarkDark from '../../assets/checkmark-dark.svg';
import checkmarkLight from '../../assets/checkmark-light.svg';
import SkillList from '../../groupedComponents/SkillList';
import { useTheme } from '../../groupedComponents/ThemeContext';
import styles from './SkillsStyles.module.css';

function Skills() {
    const { theme, toggleTheme } = useTheme();

    const checkmark = theme === 'light' ? checkmarkLight : checkmarkDark;

    return (
        <section
            id='skills'
            className={styles.container}>
            <h1 className='sectionTitle'>Technologies</h1>
            <div className={styles.skillsList}>
                <SkillList
                    src={checkmark}
                    skill='Python'
                />
                <SkillList
                    src={checkmark}
                    skill='JavaScript'
                />
                <SkillList
                    src={checkmark}
                    skill='Java'
                />
                <SkillList
                    src={checkmark}
                    skill='C'
                />
                <SkillList
                    src={checkmark}
                    skill='Rust'
                />
                <SkillList
                    src={checkmark}
                    skill='Ruby'
                />
                <SkillList
                    src={checkmark}
                    skill='Racket'
                />
                <SkillList
                    src={checkmark}
                    skill='SAS'
                />
                <SkillList
                    src={checkmark}
                    skill='Typescript'
                />
                <SkillList
                    src={checkmark}
                    skill='SQL'
                />
                <SkillList
                    src={checkmark}
                    skill='x86/a86'
                />
            </div>
            <hr />
            <div className={styles.skillsList}>
                <SkillList
                    src={checkmark}
                    skill='TensorFlow'
                />
                <SkillList
                    src={checkmark}
                    skill='React.js'
                />
                <SkillList
                    src={checkmark}
                    skill='Node.js'
                />
                <SkillList
                    src={checkmark}
                    skill='Express.js'
                />
                <SkillList
                    src={checkmark}
                    skill='Numpy'
                />
                <SkillList
                    src={checkmark}
                    skill='Pandas'
                />
                <SkillList
                    src={checkmark}
                    skill='Matplotlib'
                />
                <SkillList
                    src={checkmark}
                    skill='Seaborn'
                />
                <SkillList
                    src={checkmark}
                    skill='Flask'
                />
                <SkillList
                    src={checkmark}
                    skill='OpenCV'
                />
            </div>
            <hr />
            <div className={styles.skillsList}>
                <SkillList
                    src={checkmark}
                    skill='Git/Github'
                />
                <SkillList
                    src={checkmark}
                    skill='Azure'
                />
                <SkillList
                    src={checkmark}
                    skill='AWS'
                />
                <SkillList
                    src={checkmark}
                    skill='MongoDB'
                />
                <SkillList
                    src={checkmark}
                    skill='Power BI'
                />
                <SkillList
                    src={checkmark}
                    skill='Anaconda'
                />
                <SkillList
                    src={checkmark}
                    skill='Jupyter'
                />
                <SkillList
                    src={checkmark}
                    skill='Flask'
                />
                <SkillList
                    src={checkmark}
                    skill='MySQL'
                />
            </div>
        </section>
    );
}

export default Skills;
