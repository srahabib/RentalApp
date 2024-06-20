import { useState, useEffect } from 'react';
import 'flowbite';

const images = [
    "/images/property2.jpg",
    "/images/property3.jpg",
    "/images/property4.jpg",
    "/images/property5.jpg",
    "/images/property7.jpg",
    "/images/property8.jpg",
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prevCurrent) => (prevCurrent + 1) % images.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const nextSlide = () => {
        setCurrent((current + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((current - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-screen max-h-[60vh] overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center bottom' }}
                />
            ))}
            <div className="absolute top-0 left-0 w-full h-full">
                <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
                    }}
                />
            </div>
            <div className="container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-6">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">Find your <span className='border-b-4 border-b-green1'>Next</span> <span className='text-green1'>Stay</span></h2>
                <h3 className="text-lg md:text-xl lg:text-2xl">Search low prices on apartments , villas and much more...</h3>
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 focus:outline-none"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 focus:outline-none"
            >
                &#10095;
            </button>
        </div>
    );
};

export default Hero;