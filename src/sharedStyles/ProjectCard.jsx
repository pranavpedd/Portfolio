/* eslint-disable */

import styles from '../sections/ProjectWork/ProjectsStyles.module.css';

function ProjectCard({ src, link, h3, p }) {
  return (
    <div className={styles.projectsContainer}>
      <a href={link} target="_blank">
        <img className="hover" src={src} alt={`${h3} logo`}></img>
      </a>
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
}

export default ProjectCard;
