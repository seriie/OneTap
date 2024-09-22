import { createContext, useState, useEffect } from 'react';
import moon from '../../assets/icon/moon.svg';
import sun from '../../assets/icon/sun.svg';
import system from '../../assets/icon/system.svg';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('system');
    const [themeIcon, setThemeIcon] = useState(system);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            updateThemeIcon(savedTheme);
        } else {
            setTheme('system');
            setThemeIcon(system);
        }
    }, []);

    const updateThemeIcon = (theme) => {
        if (theme === 'light') {
            setThemeIcon(sun);
        } else if (theme === 'dark') {
            setThemeIcon(moon);
        } else {
            setThemeIcon(system);
        }
    };

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        updateThemeIcon(newTheme);
        localStorage.setItem('theme', newTheme);
        applyDarkMode(newTheme);
    };

    const applyDarkMode = (mode) => {
        const bodyClass = document.body.classList;
        if (mode === 'dark') {
            bodyClass.add('dark-mode');
        } else if (mode === 'light') {
            bodyClass.remove('dark-mode');
        } else if (mode === 'system') {
            const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDarkScheme) {
                bodyClass.add('dark-mode');
            } else {
                bodyClass.remove('dark-mode');
            }
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, themeIcon, handleThemeChange }}>
            {children}
        </ThemeContext.Provider>
    );
};