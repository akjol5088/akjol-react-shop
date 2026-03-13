import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';
import products from '../data/products';
import './Shop.css';

const CATEGORIES = [
  "all", 
  "comp_laptops", 
  "components", 
  "peripherals", 
  "networking", 
  "monitors", 
  "accessories"
];

const Shop = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="shop-page container animate-fade-in">
      <div className="shop-header">
        <h1>{t('catalog')}</h1>
      </div>

      <div className="shop-filters">
        <div className="category-tabs">
          {CATEGORIES.map(category => (
            <button
              key={category}
              className={`category-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {t(`cat_${category}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="no-products">
          <p>{t('noProducts')}</p>
        </div>
      )}
    </div>
  );
};

export default Shop;
