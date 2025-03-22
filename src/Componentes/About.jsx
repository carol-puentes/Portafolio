import { useTranslation } from 'react-i18next';
import me from '../assets/me.png';
import '../css/main.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="welcome-section">
      <div className="me-pictures">
        <img src={me} alt="logo" id="header-img" />
      </div>

      <div id="personal-inf">
        <h1>{t('about.name')}</h1>
        <h2>{t('about.title')}</h2>
        <p>{t('about.description')}</p>
      </div>
    </div>
  );
};

export default About;
