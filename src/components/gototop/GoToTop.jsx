import { useEffect } from 'react';
import arrow from '../../assets/images/arrow-up.png';
import './gototop.css';

export default function GoToTop() {
    useEffect(() => {
        const goToTop = document.querySelector('.go-to-top');

        const handleClick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        goToTop.addEventListener('click', handleClick);
    
        return () => {
            goToTop.removeEventListener('click', handleClick);
        };
    }, []);

    useEffect(() => {
        const goToTop = document.querySelector('.go-to-top');
        
        document.addEventListener('scroll', function() {
            if (window.scrollY > 200) {
                goToTop.style.display = "block";
            } else {
                goToTop.style.display = "none";
            }
        });
    });

    return (
        <>
            <div className='go-to-top hidden'>
                <img className='arrow p-0 fixed z-[100] right-5 bottom-5 invert-[92%] w-[60px] rounded-full bg-slate-50' src={arrow} alt="Go to top" />
            </div>
        </>
    );
}
