import './about.css';

export default function About() {
    return (
        <div className="about-app flex flex-col items-center p-8">
            <h1 className="text-5xl mb-4">About OneTap</h1>
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
    );
}