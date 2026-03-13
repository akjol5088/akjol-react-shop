import React from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { Trash2, Plus, Minus, ArrowRight, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const { t } = useLanguage();

  if (cart.length === 0) {
    return (
      <div className="cart-page container empty-cart animate-fade-in">
        <h2>{t('emptyCart')}</h2>
        <p>{t('emptyCartDesc')}</p>
        <Link to="/shop">
          <Button variant="primary" size="lg">{t('startShopping')}</Button>
        </Link>
      </div>
    );
  }

  const handleWhatsAppCheckout = () => {
    const phoneNumber = "996777268153";
    let message = `Саламатсызбы! Мен AKJOL интернет дүкөнүнөн буйрутма бергим келет:\n\n`;
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - ${item.quantity} шт - ${(item.price * item.quantity).toLocaleString()} ${t('price')}\n`;
    });
    
    message += `\n${t('total')} ${cartTotal.toLocaleString()} ${t('price')}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleInstagramCheckout = () => {
    window.open(`https://instagram.com/joroev_akjol06`, '_blank');
  };

  return (
    <div className="cart-page container animate-fade-in">
      <h1 className="text-gradient">{t('cart')}</h1>
      
      <div className="cart-layout">
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item glass-panel">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-category">{t(`cat_${item.category}`)}</p>
                <div className="cart-item-price">{item.price.toLocaleString()} {t('price')}</div>
              </div>
              
              <div className="cart-item-actions">
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Plus size={16} />
                  </button>
                </div>
                
                <div className="cart-item-total">
                  {(item.price * item.quantity).toLocaleString()} {t('price')}
                </div>
                
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                  title="Remove"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cart-summary glass-panel glowing-box">
          <h2>{t('orderSummary')}</h2>
          <div className="summary-row">
            <span>{t('subtotal')}</span>
            <span>{cartTotal.toLocaleString()} {t('price')}</span>
          </div>
          <div className="summary-row">
            <span>{t('shipping')}</span>
            <span>{t('freeShipping')}</span>
          </div>
          <div className="summary-border"></div>
          <div className="summary-row total">
            <span>{t('total')}</span>
            <span className="text-gradient">{cartTotal.toLocaleString()} {t('price')}</span>
          </div>
          <div className="checkout-actions">
            <Button variant="primary" size="lg" className="checkout-btn" onClick={handleWhatsAppCheckout}>
              {t('checkoutWhatsApp')} <ArrowRight size={20} />
            </Button>
            <Button variant="outline" size="lg" className="checkout-btn instagram-btn" onClick={handleInstagramCheckout} style={{ marginTop: '0.5rem', borderColor: '#e1306c', color: '#e1306c' }}>
              <Instagram size={20} /> {t('checkoutInstagram')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
