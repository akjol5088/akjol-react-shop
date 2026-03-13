import React from 'react';
import { MonitorPlay, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import './Footer.css';

const WhatsAppIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer glass-panel">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link to="/" className="brand akjol-brand" style={{ marginBottom: '1rem', textDecoration: 'none' }}>
            <MonitorPlay size={24} className="brand-icon" />
            <span className="text-gradient" style={{ fontSize: '1.25rem' }}>AKJOL</span>
          </Link>
          <p>{t('footerDesc')}</p>
          <div className="location-info" style={{ marginTop: '1rem', color: 'var(--color-primary)' }}>
            <p>📍 {t('footerLocation')}</p>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>{t('footerCat')}</h4>
            <Link to="/shop">{t('cat_comp_laptops')}</Link>
            <Link to="/shop">{t('cat_components')}</Link>
            <Link to="/shop">{t('cat_accessories')}</Link>
          </div>
          <div className="link-group">
            <h4>{t('footerContact')}</h4>
            <div className="social-links profile-links">
              <a href="https://instagram.com/joroev_akjol06" target="_blank" rel="noopener noreferrer" className="profile-link">
                <Instagram size={20} />
                <span>@joroev_akjol06</span>
              </a>
              <a href="https://wa.me/996777268153" target="_blank" rel="noopener noreferrer" className="profile-link">
                <WhatsAppIcon />
                <span>+996 777 26 81 53</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p>&copy; {new Date().getFullYear()} AKJOL. {t('footerRights')}</p>
          <p style={{ fontStyle: 'italic', color: 'var(--color-text-muted)' }}>{t('footerCreator')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
