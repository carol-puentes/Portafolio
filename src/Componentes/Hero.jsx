import { useTranslation } from 'react-i18next';
import '../css/hero.css';

import foto from '../assets/carol.jpg';
import cv from '../CV/Carol_Puentes_CV.pdf';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__copy">
          <span className="section-eyebrow">{t('hero.eyebrow')}</span>
          <h1 className="hero__name">
            Carol Stefania <br />
            <em>Puentes Motta</em>
          </h1>
          <p className="hero__role">&lt;{t('hero.role')} /&gt;</p>
          <p className="hero__lead">{t('hero.lead')}</p>

          <div className="hero__ctas">
            <a href="#proyectos" className="btn-primary">{t('hero.ctaProjects')}</a>
            <a href={cv} download="Carol_Puentes_CV.pdf" className="btn-ghost">{t('nav.cv')} ↓</a>
          </div>

          <ul className="hero__meta">
            <li><span>📍</span> Neiva, Colombia</li>
            <li><span>💼</span> IndiGO Tech</li>
            <li><span>🎓</span> {t('hero.study')}</li>
          </ul>
        </div>

        <figure className="hero__photo">
          <div className="hero__frame">
            <img src={foto} alt="Carol Puentes" />
          </div>
          <span className="chip chip--code">{'<dev/>'}</span>
          <span className="chip chip--fs">Full Stack</span>
          <span className="chip chip--ux">UX / UI</span>
        </figure>
      </div>
    </section>
  );
}
