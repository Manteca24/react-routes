import React from 'react';
import projects from '../data/projects';

function Projects() {
  return (
    <div>
      <h1>Mis Proyectos</h1>

      <ul>
        {projects.map((project) => (
          <li key={project.id}> 
            <h2>{project.name}</h2>
            <img src={project.image} alt={project.name} />
            <p>{project.description}</p>
            <a href={project.url} target="_blank">
              Ver Proyecto
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;