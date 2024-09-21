import { useEffect, useRef, useState } from 'react';
import moon from '../../assets/icon/moon.svg';
import sun from '../../assets/icon/sun.svg';
import system from '../../assets/icon/system.svg';
import './header.css';

export default function Header() {
    const dropdownRef = useRef(null);
    const themeIconRef = useRef(null);
    const [themeIcon, setThemeIcon] = useState(moon);
    const [themeTitle, setThemetitle] = useState('')

    useEffect(() => {
        const burger = document.querySelector('.header-burger');
        const sidebar = document.querySelector('.header-app');
        const closer = document.querySelector('.header-left-arrow');

        burger.addEventListener('click', function() {
            sidebar.classList.add('active');
        });
        
        closer.addEventListener('click', function() {
            sidebar.classList.remove('active');
        });
    });

    const applyDarkMode = (mode) => {
        const bodyClass = document.body.classList;

        if (mode === 'dark') {
            bodyClass.add('dark-mode');
            setThemetitle('dark')
        } else if (mode === 'light') {
            bodyClass.remove('dark-mode');
            setThemetitle('light')
        } else if (mode === 'system') {
            const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDarkScheme) {
                bodyClass.add('dark-mode');
            } else {
                bodyClass.remove('dark-mode');
            }
            setThemetitle('system')
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
        dropdownRef.current.classList.remove('active');
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            handleThemeChange(savedTheme);
        } else {
            handleThemeChange('system');
        }
    }, []);

    const toggleDropdown = () => {
        const themeTitle = document.querySelector('.theme-title');
        if (dropdownRef.current) {
            dropdownRef.current.classList.toggle('active');
            themeTitle.classList.remove('active');
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                !themeIconRef.current.contains(event.target)
            ) {
                dropdownRef.current.classList.remove('active');
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const themeIcon = document.querySelector('.theme-icon');
        const themeTitle = document.querySelector('.theme-title');
        themeIcon.addEventListener('mouseenter', function() {
            setTimeout(() => {
                themeTitle.classList.add('active');
            }, 200);
        });
        
        themeIcon.addEventListener('mouseleave', function() {
            themeTitle.classList.remove('active');
        });
    });

    return (
        <>
            <div className='header-burger text-4xl top-0 left-0 m-[10px] cursor-pointer fixed'>&#9776;</div>
            <div className="header-app shadow-smooth rounded-[10px] bg-slate-50 w-full flex p-[20px] items-center justify-between">
                <div className='header-left-arrow'></div>
                <div className="header-app-logo text-slate-950 text-5xl cursor-pointer" onClick={location.reload}>
                    OneTap
                </div>
                <div className="nav">
                    <ul className='flex gap-20'>
                       <li><a className='text-[20px] text-slate-950 hover:text-sky-400 transition-color duration-100' href="">Home</a></li>
                       <li><a className='text-[20px] text-slate-950 hover:text-sky-400 transition-color duration-100' href="">About</a></li>
                       <li><a className='text-[20px] text-slate-950 hover:text-sky-400 transition-color duration-100' href="">Product</a></li>
                       <li><a className='text-[20px] text-slate-950 hover:text-sky-400 transition-color duration-100' href="">Help</a></li>
                       <li><a className='text-[20px] text-slate-950 hover:text-sky-400 transition-color duration-100' href="">More</a></li>
                    </ul>
                </div>
                <div className="theme relative">
                    <img 
                        className='theme-icon cursor-pointer' 
                        src={themeIcon}
                        ref={themeIconRef}
                        onClick={toggleDropdown}
                        alt="theme-icon"
                    />
                    <div className='theme-title shadow-smooth'>Theme: {themeTitle}</div>
                    <div className='theme-drop-down absolute shadow-smooth rounded-lg' ref={dropdownRef}>
                        <div className='sun-drop-down drop-down flex items-center gap-3 cursor-pointer' onClick={() => handleThemeChange('light')}>
                            <img className='sun' src={sun} alt="sun-icon" />
                            <div className=''>Light</div>
                        </div>
                        <div className='moon-drop-down drop-down flex items-center gap-3 cursor-pointer' onClick={() => handleThemeChange('dark')}>
                            <img className='moon' src={moon} alt="moon-icon" />
                            <div className=''>Dark</div>
                        </div>
                        <div className='system-drop-down drop-down flex items-center gap-3 cursor-pointer' onClick={() => handleThemeChange('system')}>
                            <img className='system' src={system} alt="system-icon" />
                            <div className=''>System</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}