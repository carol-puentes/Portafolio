import '../css/main.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import cv from '../CV/Carol_Puentes_CV.pdf';

const links = [
  { href: '#welcome-section', key: 'nav.about' },
  { href: '#tecnologis', key: 'nav.technologies' },
  { href: '#proyectos', key: 'nav.projects' },
];

const Nav = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const lang = i18n.language?.startsWith('en') ? 'en' : 'es';
  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="site-header__inner">
        <a href="#" className="brand" onClick={close}>
          <span className="brand__mark" aria-hidden="true">CP</span>
          <span className="brand__text">
            <span className="brand__name">Carol Puentes</span>
            <span className="brand__role">{'<dev/>'}</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Menú"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
        </button>

        <nav className="site-nav">
          <ul>
            {links.map((l, i) => (
              <li key={l.href}>
                <a href={l.href} className="site-nav__link" onClick={close}>
                  <span className="site-nav__num">0{i + 1}</span>
                  {t(l.key)}
                </a>
              </li>
            ))}
          </ul>

          <div className="site-nav__actions">
            <div className="lang-switch" role="group" aria-label="Idioma">
              {['es', 'en'].map((l) => (
                <button
                  key={l}
                  type="button"
                  className={lang === l ? 'active' : ''}
                  onClick={() => i18n.changeLanguage(l)}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <a className="btn-cv" href={cv} download onClick={close}>
              {t('nav.cv')}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
