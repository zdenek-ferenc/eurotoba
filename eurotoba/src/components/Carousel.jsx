import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import '../styles/Carousel.css';

const Carousel = ({ title, description, images, imagesPerCarousel, link}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatické posouvání každé 4 sekundy
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Každé 3 sekundy

    return () => clearInterval(interval); // Vyčištění při odpojení komponenty
  }, [images.length]);

  const slicedImages = images.slice(0, imagesPerCarousel);

  return (
    <div className="carousel-container">
      <div className="carousel-box">
        {title && <h2 className="carousel-title">{title}</h2>}
        {description && <p className="carousel-description">{description}</p>}
        <div className="carousel-more-info-wrapper">
        {link && (
          <a href={link} target={link !== "#" ? "_self" : "_self"} rel="noopener noreferrer">
            <button className="carousel-more-info">VÍCE INFORMACÍ</button>
          </a>
        )}
        </div>
      </div>
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slicedImages.map((img, index) => (
            <div className="carousel-item" key={index}>
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  imagesPerCarousel: PropTypes.number,
  link: PropTypes.string, // Jeden odkaz pro celý popis a carousel
};

Carousel.defaultProps = {
  title: '',
  description: '',
  imagesPerCarousel: 5,
  link: "#",
};

export default Carousel;