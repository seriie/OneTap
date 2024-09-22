import { useEffect } from 'react';
import './about.css';
import shirt from '../../assets/images/about-images/shirt.png';
import shoes from '../../assets/images/about-images/shoes.png';
import watch from '../../assets/images/about-images/watch.png';
import hat from '../../assets/images/about-images/hat.jpg';
import bag from '../../assets/images/about-images/bag.jpg';

export default function About() {
    useEffect(() => {
        const images = [
            shirt,
            shoes,
            watch,
            hat,
            bag
        ];

        const image = document.querySelector('.about-images');
        setInterval(() => {
            const randomImages = Math.floor(Math.random() * images.length);
    
            image.src = images[randomImages];
        }, 1000);
    });

    return (
        <div id='about' className="about-app m-auto flex flex-wrap justify-between items-center p-8">
            <div className='left max-w-[500px]'>
                <h1 className="text-5xl text-center mb-4">About OneTap</h1>
                <p className="text-xl text-center mb-6">
                    Welcome to OneTap, the e-commerce platform designed to make shopping easy and enjoyable.
                </p>
                <p className="text-xl text-center mb-6">
                    We offer a wide range of high-quality products at affordable prices, supported by customer service that's always ready to assist you.
                </p>
                <p className="text-xl text-center">
                    Join us and experience the convenience of shopping with just one tap at OneTap!
                </p>
            </div>
            <div className='right'>
                <img className='about-images border-solid border-slate-900 border p-[20px] rounded-[5px] max-w-[400px]' src=""></img>
            </div>
        </div>
    );
}