import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  kg: {
    home: 'Башкы бет',
    catalog: 'Каталог',
    shop: 'Товарлар',
    cart: 'Себет',
    searchPlaceholder: 'Товарларды издөө',
    contacts: 'Байланыштар',
    faq: 'Суроо-Жооп',
    shipping: 'Жеткирүү',
    about: 'Биз жөнүндө',
    promoBanner: 'Белектери менен 4999 сомдон жогору буйрутмаларга акысыз жеткирүү!',
    featured: 'Мыкты Товарлар',
    viewAll: 'Баарын көрүү',
    addToCart: 'Себетке',
    price: 'сом',
    emptyCart: 'Сиздин себет бош',
    emptyCartDesc: 'Сиз азырынча эч кандай товар кошо элексиз.',
    startShopping: 'Товарларды көрүү',
    orderSummary: 'Буйрутма',
    subtotal: 'Баасы',
    total: 'Жалпы сумма:',
    freeShipping: 'Акысыз жеткирүү',
    checkoutWhatsApp: 'WhatsApp аркылуу буйрутма берүү',
    checkoutInstagram: 'Instagram аркылуу заказ кылуу',
    noProducts: 'Бул категорияда товар табылган жок.',
    // Categories
    cat_all: 'Баары',
    cat_comp_laptops: 'Компьютерлер жана Ноутбуктар',
    cat_components: 'Комплектующие для ПК',
    cat_peripherals: 'Периферия',
    cat_networking: 'Сетевое оборудование',
    cat_monitors: 'Мониторлор',
    cat_accessories: 'Аксессуарлар',
    
    // Footer
    footerDesc: 'Сиздин эң мыкты компьютердик жабдуулар жана аксессуарлар дүкөнүңүз.',
    footerLocation: 'Ош шаары, Исанов 86',
    footerCat: 'Категориялар',
    footerInfo: 'Маалымат',
    footerContact: 'Биз менен байланыш',
    footerRights: 'Бардык укуктар корголгон.',
    footerCreator: 'Сайтты түзгөн Асан уулу Акжол ОшТУнун 2-курсунун студенти',
    
    // Home Hero
    promoBanner1: 'Белектери менен 4999 сомдон жогору буйрутмаларга акысыз жеткирүү!',
    promoBanner2: '🔥 АКЦИЯ! Жаңы компьютерлер келди! Азыр сатып ал!',
    heroTitle: 'Кыялыңыздагы',
    heroGradient: 'Компьютерди',
    heroTitleEnd: 'Тандаңыз',
    heroSub: 'Биздин жогорку сапаттагы компьютерлер жана тетиктер менен укмуштуудай ылдамдыкты сезиңиз.',
    heroBtn: 'Сатып алуу',
    
    // Features
    feat1Title: 'Эң Күчтүү',
    feat1Desc: 'Максималдуу ылдамдык үчүн тандалган тетиктер.',
    feat2Title: 'Кепилдик',
    feat2Desc: 'Бардык компьютерлерге 3 жылдык толук кепилдик берилет.',
    feat3Title: 'Сапаттуу Жумуш',
    feat3Desc: 'Биздин адистер тарабынан жогорку деңгээлде чогултулат.'
  },
  ru: {
    home: 'Главная',
    catalog: 'Каталог',
    shop: 'Товары',
    cart: 'Корзина',
    searchPlaceholder: 'Найти товары',
    contacts: 'Контакты',
    faq: 'Вопрос-Ответ',
    shipping: 'Доставка',
    about: 'О нас',
    promoBanner: 'Бесплатная доставка при заказе от 4999 сом!',
    featured: 'Популярные товары',
    viewAll: 'Смотреть все',
    addToCart: 'В корзину',
    price: 'сом',
    emptyCart: 'Корзина пуста',
    emptyCartDesc: 'Вы еще не добавили ни одного товара.',
    startShopping: 'Перейти к покупкам',
    orderSummary: 'Ваш заказ',
    subtotal: 'Стоимость',
    total: 'Итого:',
    freeShipping: 'Бесплатная доставка',
    checkoutWhatsApp: 'Оформить заказ в WhatsApp',
    checkoutInstagram: 'Заказать через Instagram',
    noProducts: 'В этой категории нет товаров.',
    // Categories
    cat_all: 'Все',
    cat_comp_laptops: 'Компьютеры и Ноутбуки',
    cat_components: 'Комплектующие для ПК',
    cat_peripherals: 'Периферия',
    cat_networking: 'Сетевое оборудование',
    cat_monitors: 'Мониторы',
    cat_accessories: 'Аксессуары',

    // Footer
    footerDesc: 'Ваш лучший магазин компьютерного оборудования и аксессуаров.',
    footerLocation: 'г. Ош, ул. Исанова 86',
    footerCat: 'Категории',
    footerInfo: 'Информация',
    footerContact: 'Свяжитесь с нами',
    footerRights: 'Все права защищены.',
    footerCreator: 'Сайт создал студент 2-курса ОшТУ Асан уулу Акжол',
    
    // Home Hero
    promoBanner1: 'Бесплатная доставка при заказе от 4999 сом!',
    promoBanner2: '🔥 АКЦИЯ! Новые компьютеры в наличии! Покупай сейчас!',
    heroTitle: 'Выберите',
    heroGradient: 'Компьютер',
    heroTitleEnd: 'Вашей Мечты',
    heroSub: 'Ощутите невероятную скорость с нашими высококачественными компьютерами и компонентами.',
    heroBtn: 'Купить сейчас',

    // Features
    feat1Title: 'Самые Мощные',
    feat1Desc: 'Отборные компоненты для максимальной скорости.',
    feat2Title: 'Гарантия',
    feat2Desc: 'На все компьютеры предоставляется 3 года гарантии.',
    feat3Title: 'Качественная Сборка',
    feat3Desc: 'Собирается нашими специалистами на высшем уровне.'
  },
  en: {
    home: 'Home',
    catalog: 'Catalog',
    shop: 'Shop',
    cart: 'Cart',
    searchPlaceholder: 'Search products',
    contacts: 'Contacts',
    faq: 'FAQ',
    shipping: 'Shipping',
    about: 'About Us',
    promoBanner: 'Free shipping on orders over 4999 som!',
    featured: 'Featured Products',
    viewAll: 'View All',
    addToCart: 'Add',
    price: 'som',
    emptyCart: 'Cart is empty',
    emptyCartDesc: 'You haven\'t added any products yet.',
    startShopping: 'Start Shopping',
    orderSummary: 'Order Summary',
    subtotal: 'Subtotal',
    total: 'Total:',
    freeShipping: 'Free shipping',
    checkoutWhatsApp: 'Checkout via WhatsApp',
    checkoutInstagram: 'Order via Instagram',
    noProducts: 'No products found in this category.',
    // Categories
    cat_all: 'All',
    cat_comp_laptops: 'Computers & Laptops',
    cat_components: 'PC Components',
    cat_peripherals: 'Peripherals',
    cat_networking: 'Networking',
    cat_monitors: 'Monitors',
    cat_accessories: 'Accessories',

    // Footer
    footerDesc: 'Your best store for computer hardware and accessories.',
    footerLocation: 'Osh, Isanov 86',
    footerCat: 'Categories',
    footerInfo: 'Information',
    footerContact: 'Contact Us',
    footerRights: 'All rights reserved.',
    footerCreator: 'Website created by 2nd-year OshTU student Asan uulu Akjol',

    // Home Hero
    promoBanner1: 'Free shipping on orders over 4999 som!',
    promoBanner2: '🔥 PROMO! New computers available! Shop now!',
    heroTitle: 'Choose Your',
    heroGradient: 'Dream',
    heroTitleEnd: 'Computer',
    heroSub: 'Experience incredible speed with our high-quality computers and components.',
    heroBtn: 'Shop Now',

    // Features
    feat1Title: 'The Most Powerful',
    feat1Desc: 'Selected components for maximum speed.',
    feat2Title: 'Warranty',
    feat2Desc: 'All computers come with a full 3-year warranty.',
    feat3Title: 'Quality Build',
    feat3Desc: 'Assembled by our experts at the highest level.'
  },
  tr: {
    home: 'Ana Sayfa',
    catalog: 'Katalog',
    shop: 'Ürünler',
    cart: 'Sepet',
    searchPlaceholder: 'Ürün ara',
    contacts: 'İletişim',
    faq: 'SSS',
    shipping: 'Teslimat',
    about: 'Hakkımızda',
    promoBanner: '4999 som üzeri siparişlerde ücretsiz kargo!',
    featured: 'Öne Çıkanlar',
    viewAll: 'Tümünü Gör',
    addToCart: 'Ekle',
    price: 'som',
    emptyCart: 'Sepet boş',
    emptyCartDesc: 'Henüz ürün eklemediniz.',
    startShopping: 'Alışverişe Başla',
    orderSummary: 'Sipariş Özeti',
    subtotal: 'Ara Toplam',
    total: 'Toplam:',
    freeShipping: 'Ücretsiz kargo',
    checkoutWhatsApp: 'WhatsApp ile Sipariş Ver',
    checkoutInstagram: 'Instagram Üzerinden Sipariş',
    noProducts: 'Bu kategoride ürün bulunamadı.',
    // Categories
    cat_all: 'Tümü',
    cat_comp_laptops: 'Bilgisayarlar ve Dizüstü',
    cat_components: 'PC Parçaları',
    cat_peripherals: 'Çevre Birimleri',
    cat_networking: 'Ağ Ürünleri',
    cat_monitors: 'Monitörler',
    cat_accessories: 'Aksesuarlar',

    // Footer
    footerDesc: 'Bilgisayar donanımı ve aksesuarları için en iyi mağazanız.',
    footerLocation: 'Oş, Isanov 86',
    footerCat: 'Kategoriler',
    footerInfo: 'Bilgi',
    footerContact: 'İletişim',
    footerRights: 'Tüm hakları saklıdır.',
    footerCreator: 'Siteyi oluşturan OshTU 2. sınıf öğrencisi Asan uulu Akjol',
    
    // Home Hero
    promoBanner1: '4999 som üzeri siparişlerde ücretsiz kargo!',
    promoBanner2: '🔥 FIRSAT! Yeni bilgisayarlar stokta! Şimdi al!',
    heroTitle: 'Hayalinizdeki',
    heroGradient: 'Bilgisayarı',
    heroTitleEnd: 'Seçin',
    heroSub: 'Yüksek kaliteli bilgisayarlarımız ve bileşenlerimizle inanılmaz hızı deneyimleyin.',
    heroBtn: 'Şimdi Alışveriş Yap',

    // Features
    feat1Title: 'En Güçlü',
    feat1Desc: 'Maksimum hız için seçilmiş bileşenler.',
    feat2Title: 'Garanti',
    feat2Desc: 'Tüm bilgisayarlar 3 yıl tam garanti ile gelir.',
    feat3Title: 'Kaliteli Montaj',
    feat3Desc: 'Uzmanlarımız tarafından en yüksek seviyede monte edilmiştir.'
  }
};

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('propc_lang') || 'kg';
  });

  useEffect(() => {
    localStorage.setItem('propc_lang', language);
  }, [language]);

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
