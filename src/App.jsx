import { useEffect, useState } from 'react';
import './App.css';
import './style/dark-mode.css'
import './style/responsive.css'
import Header from './components/header/Header';
import StickyHeader from './components/stickyheader/StickyHeader';
import Home from './components/home/Home';
import About from './components/about/About';
import moon from './assets/icon/moon.svg';
import sun from './assets/icon/sun.svg';
import system from './assets/icon/system.svg';

function App() {
  const [themeIcon, setThemeIcon] = useState(moon);
  const [themeTitle, setThemeTitle] = useState('');

  // Fungsi untuk mengaplikasikan mode tema (dark, light, system)
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

  // Fungsi untuk menyimpan tema ke localStorage
  const saveThemeToLocalStorage = (theme) => {
      localStorage.setItem('theme', theme);
  };

  // Fungsi yang akan menangani perubahan tema
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

  // Pada saat pertama kali render, baca tema dari localStorage
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
    </>
  )
}

export default App;