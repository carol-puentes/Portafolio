import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/hero.css';

import foto from '../assets/derecha.png';
import acuarela from '../assets/izquierda.png';
import cv from '../CV/Carol_Puentes_CV.pdf';

export default function Hero() {
  const { t } = useTranslation();
  const wrapperRef = useRef(null);
  const leftRef = useRef(null);
  const dividerRef = useRef(null);

  const setPosition = (percentage) => {
    leftRef.current.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    dividerRef.current.style.left = `${percentage}%`;
  };

  const onMove = (e) => {
    const rect = wrapperRef.current.getBoundingClientRect();
    const percentage = ((e.clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, percentage)));
  };

  const onReset = () => setPosition(50);

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
            <a href={cv} download className="btn-ghost">{t('nav.cv')} ↓</a>
          </div>
        </div>

        <figure className="hero__figure">
          <div
            className="image-wrapper"
            ref={wrapperRef}
            onMouseMove={onMove}
            onMouseLeave={onReset}
            onTouchMove={(e) => onMove(e.touches[0])}
            onTouchEnd={onReset}
          >
            <img src={acuarela} className="image image-right" alt="" aria-hidden="true" />
            <img ref={leftRef} src={foto} className="image image-left" alt="Carol Puentes" />
            <div ref={dividerRef} className="divider">
              <span className="handle">⇆</span>
            </div>
          </div>
          <figcaption>
            <span>← {t('hero.photo')}</span>
            <span>{t('hero.watercolor')} →</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
