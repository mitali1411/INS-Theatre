import React from "react";
import "./Home.css";
import img1 from "../../assets/Images/act.jpg";
import img2 from "../../assets/Images/dance.jpg";
import img3 from "../../assets/Images/concert.jpg";
import img4 from "../../assets/Images/theater.jpg";
import img5 from "../../assets/Images/bellet.jpg";
import img6 from "../../assets/Images/guitar.jpg";
import img7 from "../../assets/Images/illustrator.jpg";
import img8 from "../../assets/Images/popstar.jpg";
// import bgImg from "../../assets/Images/pexels-psad-1749822.jpg";

const Home = () => (
  <div className="homepage-hero" data-aos="fade-up">
    {/* Floating images */}
    <img src={img1} alt="" className="float-img img1" data-aos="fade-right" data-aos-delay="100" />
    <img src={img2} alt="" className="float-img img2" data-aos="fade-right" data-aos-delay="200" />
    <img src={img3} alt="" className="float-img img3" data-aos="fade-left" data-aos-delay="300" />
    <img src={img4} alt="" className="float-img img4" data-aos="fade-left" data-aos-delay="400" />
    <img src={img5} alt="" className="float-img img5" data-aos="fade-up" data-aos-delay="500" />
    <img src={img6} alt="" className="float-img img6" data-aos="fade-up" data-aos-delay="600" />
    <img src={img7} alt="" className="float-img img7" data-aos="fade-down" data-aos-delay="700" />
    <img src={img8} alt="" className="float-img img8" data-aos="fade-down" data-aos-delay="800" />
    {/* Main content */}
    <div className="hero-content" data-aos="zoom-in" data-aos-delay="300">
      <h1>Creativity and emotion</h1>
      <p>
        Discover captivating tales, breathtaking performances, and unforgettable <br />moments in the heart of our theater.
      </p>
      <button className="cta-btn">More About Us</button>
    </div>
  </div>
);

export default Home;