import React from 'react';
import { useTranslation } from 'react-i18next';
import { dataPortfolio } from '../data/data';

const Proyectos = () => {
  const { t } = useTranslation();

  return (
    <div className='card-projects'> 
      <h1 className='text-project'>{t('projects.title')}</h1>
      <div className="cards">
        {dataPortfolio.map(({ id, title, description, image, url, repo }) => (
          <div key={id} className="cards-container">
            <Card 
              title={t(title)} 
              description={t(description)} 
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
  const { t } = useTranslation();
  
  return (
    <div className="card" id="proyectos">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className='card-title'>{title}</h3>
        <p>{description}</p>
        <div className="card-links">
          {url && <a href={url} target="_blank" rel="noopener noreferrer">{t('projects.viewProject')}</a>}
          {repo && <a href={repo} target="_blank" rel="noopener noreferrer">{t('projects.viewCode')}</a>}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
