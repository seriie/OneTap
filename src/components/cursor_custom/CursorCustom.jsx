import { useEffect } from 'react';
import './cursor_custom.css';

export default function CursorCustom() {
    useEffect(() => {
        const dot = document.querySelector('.cursor .dot');
        const circle = document.querySelector('.cursor .circle');

        document.addEventListener('mousemove', function(event) {
            dot.style.top = `${event.pageY}px`;
            dot.style.left = `${event.pageX}px`;
            circle.style.top = `${event.pageY}px`;
            circle.style.left = `${event.pageX}px`;
        });

        document.addEventListener('mouseleave', function() {
            dot.style.display = 'none';
            circle.style.display = 'none';
        });

        document.addEventListener('mouseenter', function() {
            dot.style.display = 'block';
            circle.style.display = 'block';
        });
    });

    return (
        <>
            <div className='cursor'>
                <div className='dot absolute top-[50%] left-[50%] pointer-events-none translate-x-[-50%] translate-y-[-50%] z-[1000] transition-all duration-0 ease-linear bg-sky-500 p-[5px] rounded-full'></div>
                <div className='circle absolute top-[50%] left-[50%] pointer-events-none translate-x-[-50%] translate-y-[-50%] z-[1000] transition-all duration-[100ms] ease-linear border-solid border-sky-500 border-2 p-[30px] rounded-full'></div>
            </div>
        </>
    )
}