import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Shield, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import products from '../data/products';
import './Home.css';

const Home = () => {
  const { t } = useLanguage();
  const [bannerIndex, setBannerIndex] = useState(0);
  
  const banners = [t('promoBanner1'), t('promoBanner2')];

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [banners.length]);

  // Get 3 random popular featured products for the home page
  const featuredProducts = products.filter(p => ["comp_laptops", "components"].includes(p.category)).slice(0, 3);

  return (
    <div className="home-page animate-fade-in">

      {/* Hero Section with Slider */}
      <section 
        className="hero-section" 
        style={{ backgroundImage: `url(/images/hero${bannerIndex + 1}.jpg)` }}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="promo-badge glowing-box animate-fade-in" key={bannerIndex}>
            {banners[bannerIndex]}
          </div>
          <h1 className="hero-title animate-slide-up">
            {t('heroTitle')} <span className="text-gradient">{t('heroGradient')}</span> {t('heroTitleEnd')}
          </h1>
          <p className="hero-subtitle animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t('heroSub')}
          </p>
          <div className="hero-actions">
            <Link to="/shop">
              <Button variant="primary" size="lg" className="shop-now-btn">
                {t('heroBtn')} <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section container">
        <div className="feature-card glass-panel glowing-box">
          <Zap size={40} className="feature-icon" />
          <h3>{t('feat1Title')}</h3>
          <p>{t('feat1Desc')}</p>
        </div>
        <div className="feature-card glass-panel glowing-box">
          <Shield size={40} className="feature-icon" />
          <h3>{t('feat2Title')}</h3>
          <p>{t('feat2Desc')}</p>
        </div>
        <div className="feature-card glass-panel glowing-box">
          <Trophy size={40} className="feature-icon" />
          <h3>{t('feat3Title')}</h3>
          <p>{t('feat3Desc')}</p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section container">
        <div className="section-header">
          <h2>{t('featured')}</h2>
          <Link to="/shop" className="view-all-link text-gradient">{t('viewAll')}</Link>
        </div>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
