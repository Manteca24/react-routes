import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>¡Bienvenid@s!</h1>
      <nav className='menu'>
        <Link to="/projects">Proyectos</Link>  
        <Link to="/resume">Currículum</Link>
      </nav>
    </div>
  );
}

export default Home;