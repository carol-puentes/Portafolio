import logo from '../assets/logo.svg';
import '../css/main.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import cv from '../CV/Carol_Puentes_CV.pdf'

const Nav = () => {
    const { t, i18n } = useTranslation();
    const [showDropdown, setShowDropdown] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowDropdown(false); // Cierra el menú después de seleccionar un idioma
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="logo">
                <img src={logo} alt="logo" style={{ width: "20%", height: "100px" }} />
                <i className="nombre">CAROL PUENTES</i>
            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#welcome-section">{t('nav.about')}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#tecnologias">{t('nav.technologies')}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#proyectos">{t('nav.projects')}</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href={cv} download>
                            CV
                        </a>
                    </li>

                    {/* Selector de idioma con flecha animada */}
                    <li className="nav-item language-container">
                        <button 
                            className="language-btn" 
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            🌎  <span className={`arrow ${showDropdown ? 'open' : ''}`}>▼</span>
                        </button>

                        {showDropdown && (
                            <div className="language-dropdown">
                                <button onClick={() => changeLanguage('es')}>🇪🇸 Español</button>
                                <button onClick={() => changeLanguage('en')}>🇬🇧 English</button>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
