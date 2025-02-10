import PropTypes from "prop-types";
import "../styles/Page.css"
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const SectionTemplate = ({ title, description1, description2, images, contactLink, mainImage1, mainImage2, contactDescription}) => {
  return (
    <>
    <Navbar/>
    <div className="section-template">
      <h1 className="section-title">{title}</h1>
      <div className="section-container">
      <p className="section-description">{description1}</p>
      {mainImage1 && <img src={mainImage1} alt="Hlavní obrázek 1" className="main-image" />}
      </div>
      <div className="section-container">
      {mainImage2 && <img src={mainImage2} alt="Hlavní obrázek 2" className="main-image" />}
      <p className="section-description">{description2}</p>
      </div>
      <p className="contact-description">{contactDescription}</p>
      {contactLink && (
        <div className="section-contact">
          <Link to={contactLink}>
            <button className="contact-button">Kontaktujte nás</button>
          </Link>
        </div>
      )}

      {/* <div className="section-images">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Obrázek ${index + 1}`} className="section-image" />
        ))}
      </div> */}
    </div>
    <Footer/>
    </>
  );
};

SectionTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description1: PropTypes.string.isRequired,
  description2: PropTypes.string.isRequired,
  contactDescription: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string, // URL k ikoně
      text: PropTypes.string.isRequired,
    })
  ),
  mainImage1: PropTypes.string, // Nový prop pro první hlavní obrázek
  mainImage2: PropTypes.string,
  contactLink: PropTypes.string.isRequired, // Odkaz na stránku kontaktu
};

SectionTemplate.defaultProps = {
  benefits: [],
};

export default SectionTemplate;