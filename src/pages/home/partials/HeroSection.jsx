import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from '../../../constant/images';

const slides = [
  {
    image: images.Hero,
    title: "LEATHER BAGS",
    subtitle: "New Collection 2018",
    description: "Découvrez notre nouvelle collection de sacs en cuir authentique, alliant élégance et durabilité.",
    button: "SHOP NOW",
  },
  {
    image: images.Hero,
    title: "WOMEN COLLECTION",
    subtitle: "Summer Sale 2018",
    description: "Profitez de nos dernières tendances mode avec jusqu'à 50% de réduction sur toute la collection.",
    button: "SHOP NOW",
  },
  {
    image: images.Hero,
    title: "FASHION TRENDS",
    subtitle: "New Arrivals",
    description: "Explorez les dernières tendances de la mode et trouvez votre style unique parmi nos nouveautés.",
    button: "SHOP NOW",
  },

    {
    image: images.Hero,
    title: "BEST TRENDS",
    subtitle: "New Arrivals",
    description: "Explorez les dernières tendances de la mode et trouvez votre style unique parmi nos nouveautés.",
    button: "SHOP NOW",
  },

    {
    image: images.Hero,
    title: "FASHION TRENDS",
    subtitle: "New Arrivals",
    description: "Explorez les dernières tendances de la mode et trouvez votre style unique parmi nos nouveautés.",
    button: "SHOP NOW",
  },
];

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors duration-300"
    onClick={onClick}
    aria-label="Previous slide"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors duration-300"
    onClick={onClick}
    aria-label="Next slide"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    dotsClass: "slick-dots !bottom-4",
    appendDots: dots => (
      <div className="absolute bottom-4 w-full">
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-2 h-2 rounded-full bg-white/10 hover:bg-white transition-colors duration-300" />
    ),
  };

  return (
    <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden">


      <Slider {...settings} className="w-full h-full">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="relative w-full h-full md:h-[500px] lg:h-[600px]"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-contain transition-transform duration-700 ease-in-out"
              style={{ transformOrigin: 'center' }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/1920x600/333/fff?text=Fashion+Collection';
              }}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30 p-4">
              <h3 className="text-xl font-light mb-2 opacity-90 transition-opacity duration-700 ease-in-out">{slide.subtitle}</h3>
              <h2 className="text-4xl font-bold mb-4 opacity-90 transition-opacity duration-700 ease-in-out">{slide.title}</h2>
              <p className="text-lg max-w-2xl mb-6 opacity-90 transition-opacity duration-700 ease-in-out">{slide.description}</p>
              <button className="px-8 py-3 bg-white text-black hover:bg-black hover:text-white transition-colors duration-300">
                {slide.button}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
