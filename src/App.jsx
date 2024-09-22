import { useEffect, useState } from 'react';
import './App.css';
import './style/dark-mode.css'
import './style/responsive.css'
import Header from './components/header/Header';
import StickyHeader from './components/stickyheader/StickyHeader';
import Home from './components/home/Home';
import About from './components/about/About';
import products from './components/product/product_data/ProductData';
import Product from './components/product/Product';
import Help from './components/help/Help';
import Footer from './components/footer/Footer';
import CursorCustom from './components/cursor_custom/CursorCustom';
import GoToTop from './components/gototop/GoToTop';
import moon from './assets/icon/moon.svg';
import sun from './assets/icon/sun.svg';
import system from './assets/icon/system.svg';

function App() {
  const [themeIcon, setThemeIcon] = useState(moon);
  const [themeTitle, setThemeTitle] = useState('');

  const applyDarkMode = (mode) => {
      const bodyClass = document.body.classList;

      if (mode === 'dark') {
          bodyClass.add('dark-mode');
          setThemeTitle('dark');
      } else if (mode === 'light') {
          bodyClass.remove('dark-mode');
          setThemeTitle('light');
      } else if (mode === 'system') {
          const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (prefersDarkScheme) {
              bodyClass.add('dark-mode');
          } else {
              bodyClass.remove('dark-mode');
          }
          setThemeTitle('system');
      }
  };

  const saveThemeToLocalStorage = (theme) => {
      localStorage.setItem('theme', theme);
  };

  const handleThemeChange = (theme) => {
      if (theme === 'light') {
          setThemeIcon(sun);
          applyDarkMode('light');
      } else if (theme === 'dark') {
          setThemeIcon(moon);
          applyDarkMode('dark');
      } else if (theme === 'system') {
          setThemeIcon(system);
          applyDarkMode('system');
      }
      saveThemeToLocalStorage(theme);
  };

  useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
          handleThemeChange(savedTheme);
      } else {
          handleThemeChange('system');
      }
  }, [])
  return (
    <>
        <CursorCustom />
        <Header 
          themeIcon={themeIcon}
          themeTitle={themeTitle}
          handleThemeChange={handleThemeChange}
          />
        <StickyHeader 
          themeIcon={themeIcon}
          themeTitle={themeTitle}
          handleThemeChange={handleThemeChange}
        />
        <Home />
        <About />
        <div className='all-products flex flex-wrap gap-10'>
          {products.map((product, index) => (
                <Product
                    key={index}
                    productName={product.productName}
                    productImage={product.productImage}
                    productDescription={product.productDescription}
                    productPrice={product.productPrice}
                />
          ))}
        </div>
        <Help />
        <Footer />
        <GoToTop />
    </>
  )
}

export default App;