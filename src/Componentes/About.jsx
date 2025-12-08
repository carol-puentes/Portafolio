import { useTranslation } from 'react-i18next';
import '../css/About.css';

const About = () => {
  const { t } = useTranslation();
  return (
    <div id="welcome-section">
      <h1  style={{color:"#FFFFFF"}}>{t('about.title')}</h1>
      <p style={{color:"#4A4A4A"}}>{t('about.description')}</p>
    </div>
  );
};



export default About;
