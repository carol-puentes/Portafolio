import { useTranslation } from 'react-i18next';
import { dataPortfolio } from '../data/data';

const Proyectos = () => {
  const { t } = useTranslation();

  return (
    <section className='card-projects' id="proyectos">
      <div className="projects__head">
        <span className="section-eyebrow">03 — {t('nav.projects')}</span>
        <h2 className="section-title">{t('projects.title')}</h2>
      </div>
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
    </section>
  );
};

const Card = ({ title, description, image, url, repo }) => {
  const { t } = useTranslation();
  
  return (
    <div className="card">
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
