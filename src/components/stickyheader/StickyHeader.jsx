import { useEffect, useRef, useState } from 'react';
import moon from '../../assets/icon/moon.svg';
import sun from '../../assets/icon/sun.svg';
import system from '../../assets/icon/system.svg';
import logo from '../../assets/images/onetap.png';
import './stickyheader.css'

export default function StickyHeader({ themeIcon, themeTitle, handleThemeChange }) {
    const dropdownRef = useRef(null);
    const themeIconRef = useRef(null);
    const headerRef = useRef(null);

    const toggleDropdown = () => {
        const themeTitle = document.querySelector('.sticky-header-theme-title');
        if (dropdownRef.current) {
            dropdownRef.current.classList.toggle('active');
            themeTitle.classList.remove('active');
        }
    };

    const removeDropdown = () => {
        const themeDropdown = document.querySelector('.sticky-header-app .theme-drop-down');
        themeDropdown.classList.remove('active');
    }

    const handleThemeAndRemoveDrodDown = (theme) => {
        handleThemeChange(theme);
        removeDropdown();
    }

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
        const themeIcon = document.querySelector('.sticky-header-app .theme-icon');
        const themeTitle = document.querySelector('.sticky-header-theme-title');
        themeIcon.addEventListener('mouseenter', function() {
            setTimeout(() => {
                themeTitle.classList.add('active');
            }, 200);
        });
        
        themeIcon.addEventListener('mouseleave', function() {
            themeTitle.classList.remove('active');
        });
    }, []);

    useEffect(() => {
        const themeDropDown = document.querySelector('.sticky-header-app .theme-drop-down');
        document.addEventListener('scroll', function() {
            themeDropDown.classList.remove('active');
        });
    })

    useEffect(() => {
        const handleHeaderScroll = () => {
            if (window.scrollY > 100) {
                headerRef.current.classList.add('active');
            } else {
                headerRef.current.classList.remove('active');
            }
        };

        window.addEventListener('scroll', handleHeaderScroll);

        return () => {
            window.removeEventListener('scroll', handleHeaderScroll);
        };
    }, []);

    return (
        <>
            <div ref={headerRef} className="sticky-header-app z-10 shadow-smooth bg-slate-50 w-full flex p-[20px] items-center justify-between">
                <div className='header-left-arrow'></div>
                <div className="header-app-logo flex items-center text-slate-950 text-5xl cursor-pointer" onClick={location.reload}>
                    <img className='onetap-logo w-[50px]' src={logo} alt="onetap-logo" />neTap
                </div>
                <div className="nav">
                    <ul className='flex gap-20'>
                       <li><a className='text-[20px] text-slate-950 hover:text-sky-400 transition-color duration-100' href="#home">Home</a></li>
                       <li><a className='text-[20px] text-slate-950 hover:text-sky-400 transition-color duration-100' href="#about">About</a></li>
                       <li><a className='text-[20px] text-slate-950 hover:text-sky-400 transition-color duration-100' href="#product">Product</a></li>
                       <li><a className='text-[20px] text-slate-950 hover:text-sky-400 transition-color duration-100' href="#help">Help</a></li>
                       <li><a className='text-[20px] text-slate-950 hover:text-sky-400 transition-color duration-100' href="#more">More</a></li>
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
                    <div className='sticky-header-theme-title shadow-smooth'>Theme: {themeTitle}</div>
                    <div className='theme-drop-down absolute shadow-smooth rounded-lg' ref={dropdownRef}>
                        <div className='sun-drop-down drop-down flex items-center gap-3 cursor-pointer' onClick={() => handleThemeAndRemoveDrodDown('light')}>
                            <img className='sun' src={sun} alt="sun-icon" />
                            <div className=''>Light</div>
                        </div>
                        <div className='moon-drop-down drop-down flex items-center gap-3 cursor-pointer' onClick={() => handleThemeAndRemoveDrodDown('dark')}>
                            <img className='moon' src={moon} alt="moon-icon" />
                            <div className=''>Dark</div>
                        </div>
                        <div className='system-drop-down drop-down flex items-center gap-3 cursor-pointer' onClick={() => handleThemeAndRemoveDrodDown('system')}>
                            <img className='system' src={system} alt="system-icon" />
                            <div className=''>System</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}