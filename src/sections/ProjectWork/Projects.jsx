import divyup from '../../assets/divyup.png';
import mealgpt from '../../assets/meal gpt app logo.jpeg';
import spotrecs from '../../assets/spotrecs.png';
import stockPrice from '../../assets/stock price.png';
import ProjectCard from '../../groupedComponents/ProjectCard';
import styles from './ProjectsStyles.module.css';

function Projects() {
    return (
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard
                    src={stockPrice}
                    link='https://github.com/pranavpedd/StockPricePredictor'
                    h3='StockPricePredictor'
                    p='May 2023'
                />
                <ProjectCard
                    src={spotrecs}
                    link='https://github.com/pranavpedd/SpotRecs'
                    h3='SpotRecs'
                    p='Dec 2024'
                />
                <ProjectCard
                    src={divyup}
                    link='https://github.com/pranavpedd/DivyUp'
                    h3='DivyUp'
                    p='April 2023'
                />
                <ProjectCard
                    src={mealgpt}
                    link='https://github.com/pranavpedd/MealGPT'
                    h3='MealGPT'
                    p='May 2024'
                />
            </div>
        </section>
    );
}

export default Projects;
