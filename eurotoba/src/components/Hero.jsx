import "../styles/Hero.css"
import background from "../assets/background.png"

function Hero() {
    return ( 
    <>
    <div className="background">
        <img src={background} alt="" />
        <div className="hero-quote"><h1>Bydlete rychle, úsporně a ekologicky.</h1></div>
    </div>
    </>
    
    );
}

export default Hero;