import "./Hero.css";
import logo from "../../vendor/img/FlyLogo.png";
import kanji from "../../vendor/img/Kanji.png";
import * as RiIcons from "react-icons/ri"

function Hero() {
    return (
        <section data-test="hero-section" className="hero-section">
            <div className="hero-logo">
                <img src={logo} alt="Logo" data-testid="logo" className="logo" />
            </div>
            <p className="hero-paragraph">A TEC COMPANY</p>
            <div className="hero-kanji">
                <img src={kanji} alt="Kanji" data-testid="kanji" className="kanji" />
                <a href="#about-us" className="scroll-down">scroll down <RiIcons.RiArrowDownSFill></RiIcons.RiArrowDownSFill></a>
            </div>
        </section>
    );
}

export default Hero;
