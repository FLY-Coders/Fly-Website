import { Container } from "react-bootstrap/";
import "./AboutUs.css";
import bird from "../../vendor/img/Bird.png";
import * as FaIcons from "react-icons/fa";
import * as ImIcons from "react-icons/im";
import * as BsIcons from "react-icons/bs";
import { IconContext } from "react-icons";

function AboutUs() {
    return (
        <IconContext.Provider value={{ size: "24px" }}>
            <section className="about-us" id="about-us">
                <Container>
                        <div className="dash"></div>
                        <div className="about-us-info">
                            <h1 className="title">Now it’s time to fly coding</h1>
                            <p className="paragraph">
                                We create competitive advantage through accelerated technology innovation. We provide the tools, talent, and
                                processes needed to accelerate your path to market leadership.
                            </p>
                            <button className="buttom">tell me more</button>
                            <img src={bird} alt="bird" className="bird" />
                            <div className="social-media">
                                <a href="#facebook">
                                    <FaIcons.FaFacebookF></FaIcons.FaFacebookF>
                                </a>
                                <a href="#instagram">
                                    <ImIcons.ImInstagram></ImIcons.ImInstagram>
                                </a>
                                <a href="#twitter">
                                    <BsIcons.BsTwitter></BsIcons.BsTwitter>
                                </a>
                            </div>
                        </div>
                </Container>
            </section>
        </IconContext.Provider>
    );
}

export default AboutUs;
