import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Tecnologis = () => {
      const { t } = useTranslation();
    return (
        <div id="tecnologis">

            <span className="section-eyebrow">02 — {t('nav.technologies')}</span>
            <h2 className="section-title">{t('tecnologis.title')}</h2>
            <div className="container-icons">
                <div className="icons-stack">

                    <img className='iconos' src="https://skillicons.dev/icons?i=html,css,js,react&theme=light" alt="Frontend" />
                    <img className='iconos' src="https://skillicons.dev/icons?i=nodejs,php,mysql,postgres&theme=light" alt="Backend & BD" />
                    <img className='iconos' src="https://skillicons.dev/icons?i=vscode,github,notion,figma&theme=light" alt="Herramientas" />


                    <div className='iconos-group'>
                        <img src="https://www.svgrepo.com/show/305835/canva.svg" alt="Canva" width="42" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="Slack" width="42" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="Jira" width="42" />
                        <img src="https://www.phpmyadmin.net/static/images/logo-og.png" alt="phpMyAdmin" width="42" />

                    </div>

                    <Element name="proyecto"></Element> {/* Ubico este elemento antes del h3 para que me deje ver el h3  de proyectos */}
                </div>

            </div>
        </div>


    )
}
export default Tecnologis;