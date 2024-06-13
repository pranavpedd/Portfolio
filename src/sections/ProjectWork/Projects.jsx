import divyup from '../../assets/divyup.png';
import spotrecs from '../../assets/spotrecs.png';
import stockGraph from '../../assets/stock price graph.png';
import ProjectCard from '../../sharedStyles/ProjectCard';
import styles from './ProjectsStyles.module.css';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={stockGraph}
          link="https://github.com/pranavpedd/StockPricePredictor"
          h3="Stock Price Predictor"
          p="May 2023">
        </ProjectCard>
        <ProjectCard
          src={spotrecs}
          link="https://github.com/pranavpedd/SpotRecs"
          h3="SpotRecs"
          p="Dec 2024"
        />
        <ProjectCard
          src={divyup}
          link="https://github.com/pranavpedd/DivyUp"
          h3="DivyUp"
          p="April 2023"
        />
      </div>
    </section>
  );
}

export default Projects;
