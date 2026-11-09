import { useTranslation } from 'react-i18next';
import { FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiMail, FiArrowUpRight } from 'react-icons/fi';

const canales = [
  { icon: <FiMail />, label: 'Email', value: 'carolspuentes@gmail.com', href: 'mailto:carolspuentes@gmail.com' },
  { icon: <FaWhatsapp />, label: 'WhatsApp', value: '+57 313 428 1642', href: 'https://wa.me/573134281642' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', value: 'carol-puentes', href: 'https://www.linkedin.com/in/carol-puentes-5a1181233/' },
  { icon: <FaGithub />, label: 'GitHub', value: 'carol-puentes', href: 'https://github.com/carol-puentes' },
];

const Contacto = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <>
      <section id="contacto" className="contact">
        <div className="contact__inner">
          <span className="section-eyebrow">04 — {t('nav.contact')}</span>
          <h2 className="contact__title">
            {t('contact.title')} <em>{t('contact.titleEm')}</em>
          </h2>
          <p className="contact__lead">{t('contact.lead')}</p>

          <a className="contact__mail" href="mailto:carolspuentes@gmail.com">
            carolspuentes@gmail.com <FiArrowUpRight />
          </a>

          <ul className="contact__grid">
            {canales.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact__card"
                >
                  <span className="contact__icon">{c.icon}</span>
                  <span className="contact__text">
                    <small>{c.label}</small>
                    {c.value}
                  </span>
                  <FiArrowUpRight className="contact__arrow" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* <footer className="site-footer">
        <span>© {year} Carol Stefania Puentes Motta</span>
        <span className="site-footer__mono">{t('contact.footer')}</span>
      </footer> */}
    </>
  );
};

export default Contacto;
