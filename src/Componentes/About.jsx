import { useTranslation } from 'react-i18next';
import '../css/About.css';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="welcome-section">
      <div className="about__inner">
        <span className="section-eyebrow">01 — {t('nav.about')}</span>
        <h2 className="section-title">{t('about.title')}</h2>
        <p className="about__text">{t('about.description')}</p>
      </div>
    </section>
  );
};

export default About;
