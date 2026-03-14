import { Link } from 'react-router-dom';
import { ShoppingCart, MonitorPlay, Github, Sun, Moon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { cartCount } = useCart();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  
  return (
    <nav className="navbar glass-panel">
      <div className="container nav-content">
        <Link to="/" className="brand akjol-brand">
          <MonitorPlay size={28} className="brand-icon" />
          <span className="text-gradient">AKJOL</span>
        </Link>
        <div className="nav-links">
          <Link to="/">{t('home')}</Link>
          <Link to="/shop">{t('catalog')}</Link>

          <select 
            className="language-selector" 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="kg">Кыргызча</option>
            <option value="ru">Русский</option>
            <option value="en">English</option>
            <option value="tr">Türkçe</option>
          </select>

          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/cart" className="cart-link">
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
