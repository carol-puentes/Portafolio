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
        <h1  style={{color:"#FFFFFF"}}>{t('about.name')}</h1>
        <h2  style={{color:"#34495E"}} >{t('about.title')}</h2>
        <p style={{color:"#4A4A4A"}}>{t('about.description')}</p>
      </div>
    </div>
  );
};



export default About;
