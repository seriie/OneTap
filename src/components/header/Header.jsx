import { useEffect, useRef } from 'react';
import moon from '../../assets/icon/moon.svg';
import sun from '../../assets/icon/sun.svg';
import system from '../../assets/icon/system.svg';
import logo from '../../assets/images/onetap.png';
import './header.css';

export default function Header({ themeIcon, themeTitle, handleThemeChange }) {  // Menerima props dari parent
    const dropdownRef = useRef(null);
    const themeIconRef = useRef(null);

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
    }, []);

    const toggleDropdown = () => {
        const themeTitle = document.querySelector('.theme-title');
        if (dropdownRef.current) {
            dropdownRef.current.classList.toggle('active');
            themeTitle.classList.remove('active');
        }
    };

    const removeThemeDropdownClassList = () => {
        const themeDropdown = document.querySelector('.theme-drop-down');
        themeDropdown.classList.remove('active');
    };   
    
    const handleThemeAndRemoveTitle = (theme) => {
        handleThemeChange(theme);
        removeThemeDropdownClassList();
    }

    useEffect(() => {
        document.addEventListener('scroll', function() {
            const themeDropdown = document.querySelector('.theme-drop-down');
            themeDropdown.classList.remove('active');
        });
    });

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
    }, []);

    return (
        <>
            <div className='header-burger text-4xl top-0 left-0 m-[10px] cursor-pointer fixed'>&#9776;</div>
            <div className="header-app z-10 shadow-smooth rounded-[10px] bg-slate-50 w-full flex p-[20px] items-center justify-between">
                <div className='header-left-arrow'></div>
                <div className="header-app-logo flex items-center text-slate-950 text-5xl cursor-pointer" onClick={location.reload}>
                    <img className='onetap-logo w-[50px]' src={logo} alt="onetap-logo"></img><span className='netap'>neTap</span>
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
                    <div className='theme-title shadow-smooth'>Theme: {themeTitle}</div>  {/* Menggunakan themeTitle dari props */}
                    <div className='theme-drop-down absolute shadow-smooth rounded-lg' ref={dropdownRef}>
                        <div className='sun-drop-down drop-down flex items-center gap-3 cursor-pointer' onClick={() => handleThemeAndRemoveTitle('light')}>
                            <img className='sun' src={sun} alt="sun-icon" />
                            <div className=''>Light</div>
                        </div>
                        <div className='moon-drop-down drop-down flex items-center gap-3 cursor-pointer' onClick={() => handleThemeAndRemoveTitle('dark')}>
                            <img className='moon' src={moon} alt="moon-icon" />
                            <div className=''>Dark</div>
                        </div>
                        <div className='system-drop-down drop-down flex items-center gap-3 cursor-pointer' onClick={() => handleThemeAndRemoveTitle('system')}>
                            <img className='system' src={system} alt="system-icon" />
                            <div className=''>System</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}