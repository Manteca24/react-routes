import React from 'react';
import { studies, experiences } from '../data/resume';

function Resume() {
  return (
    <div>
      <h1>Mi Currículum</h1>

      <section>
        <h2>Experiencia Laboral</h2>
        <ul>
          {experiences.map((exp) => (
            <li key={exp.id}>
              <h3>{exp.title} en {exp.company}</h3>
              <p>{exp.date}</p>
            </li>
          ))}
        </ul>
      </section>
      
      <section>
        <h2>Educación</h2>
        <ul>
          {studies.map((study) => (
            <li key={study.id}>
              <h3>{study.title} - {study.institution}</h3>
              <p>{study.date}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Resume;