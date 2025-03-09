import React from 'react';
import { dataPortfolio } from '../data/data';


const Proyectos = () => {
  return (
    <div className='card-projects'> 
        <h1 className='text-project' style={{}}>MIS PROYECTOS</h1>
        <div className="cards">
        
        {dataPortfolio.map(({ id, title, description, image, url, repo }) => (
          <div key={id} className="cards-container">
            <Card 
              title={title} 
              description={description}
              image={image}
              url={url}
              repo={repo}
            />
          </div>
        ))}
      </div>
    </div>
   
  );
};

const Card = ({ title, description, image, url, repo }) => {
  return (
    <div className="card" id="proyectos">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className='card-title'>{title}</h3>
        <p>{description}</p>
        <div className="card-links">
          <a href={url} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
          {repo && <a href={repo} target="_blank" rel="noopener noreferrer">Ver Código</a>}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;


