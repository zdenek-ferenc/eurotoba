import "../styles/Kontakt.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState } from "react";

const Kontakt = () => {
    const [formData, setFormData] = useState({ email: "", phone: "", message: "" });
    const [errors, setErrors] = useState({ email: "", phone: "" });
  
    const validateEmail = (email) => {
      return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    };
  
    const validatePhone = (phone) => {
      return /^\+?[0-9]{7,15}$/.test(phone);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  
      if (name === "email") {
        setErrors({ ...errors, email: validateEmail(value) ? "" : "Neplatný e-mail" });
      }
      if (name === "phone") {
        setErrors({ ...errors, phone: validatePhone(value) ? "" : "Neplatné telefonní číslo" });
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (errors.email || errors.phone || !formData.email || !formData.phone) {
        alert("Prosím, opravte chyby ve formuláři.");
        return;
      }
      try {
        const response = await fetch("http://localhost:5000/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          alert("E-mail byl úspěšně odeslán!");
        } else {
          alert("Chyba při odesílání e-mailu.");
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <>
        <Navbar />
        <div className="contact">
          <h1>Neváhejte nás kontaktovat!</h1>
          <div className="form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
              
              <input
                type="tel"
                name="phone"
                placeholder="Telefonní číslo"
                value={formData.phone}
                onChange={handleChange}
                required
                className="input-field"
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
              
              <textarea
                name="message"
                placeholder="Zpráva"
                value={formData.message}
                onChange={handleChange}
                required
                className="textarea-field"
              ></textarea>
              <div className="button-container">
              <button type="submit" className="submit-button">
                Odeslat
              </button>
              </div>
            </form>
          </div>
          <div className="contact-header">
            <h2><span>Email:</span> info@eurotoba.cz</h2>
            <h2><span>Tel.:</span> +420 774 922 221</h2>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <p>EUROTOBA s.r.o.</p>
              <p><span>Adresa sídla:</span> Švabinského 1700/4, Morávská</p>
              <p>Ostrava,</p>
              <p>702 00 Ostrava</p>
              <br />
              <p><span>DIČ:</span> CZ28643933</p>
              <p><span>IČO:</span> 28643933</p>
            </div>
            <div className="map-container">
              <div className="map">mapa</div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  };
  
  export default Kontakt;