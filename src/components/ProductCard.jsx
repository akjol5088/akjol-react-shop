import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import Button from './Button';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { t } = useLanguage();
  
  return (
    <div className="product-card glass-panel glowing-box">
      {product.isNew && <div className="badge-new">NEW</div>}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-category">{t(`cat_${product.category}`)}</p>
        <div className="product-specs">
          {product.specs && product.specs.map((spec, index) => (
            <span key={index} className="spec-tag">{spec}</span>
          ))}
        </div>
        <div className="product-footer">
          <span className="product-price">{product.price.toLocaleString()} {t('price')}</span>
          <Button 
            variant="primary" 
            size="sm" 
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart size={16} /> {t('addToCart')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
