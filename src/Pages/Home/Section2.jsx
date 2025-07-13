import React from "react";
import bgTexture from "../../assets/Images/bg_texture.jpeg";
import sectionImg from "../../assets/Images/bellet.jpg"; // You can change this to any relevant image
import "./Home.css";
import { Container, Image } from "react-bootstrap";

const Section2 = () => (
  <section
    className="section2"
    style={{
      backgroundImage: `url(${bgTexture})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100%",
    }}
    data-aos="fade-up"
  >
    <Container className="section2-content">
      <div className="section2-text" data-aos="fade-right" data-aos-delay="200">
        <h2 className="discover-title">
          We Work Tirelessly To <br />
          Bring You A <span className="creative-hub">Diverse Range</span> <br />
          Of Productions That Cater <br />
          To All <span className="creative-hub">Tastes</span>
        </h2>
        <p>
          Our dedicated team of talented actors, directors, producers, and support staff work tirelessly to bring you a diverse range of productions that cater to all tastes and interests. From classic plays to contemporary musicals, we curate a lineup that promises to leave you awe-inspired and wanting more.
        </p>
        <button className="section2-btn">Explore Shows</button>
      </div>
      <div className="section2-img-wrapper" data-aos="fade-left" data-aos-delay="400">
        <Image src={sectionImg} alt="Section" className="section2-img"/>
      </div>
    </Container>
  </section>
);

export default Section2; 