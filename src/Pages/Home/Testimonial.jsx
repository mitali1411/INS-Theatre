import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Testimonial = () => {

    const testimonials = [
        {name: "Abhijeet Dubey", desc: "The talent on stage is astounding, and the way they bring stories to life is truly magical. The last production I saw left me speechless. I can't wait for the next performance!"},
        {name: "Aryan Arjule", desc: "I was transported to another world. The acting, the set design, the music—it all came together seamlessly. I've seen many shows, but theirs are a cut above the rest."},
        {name: "Amisha Singh", desc: "As an avid theater enthusiast, I'm continually impressed. They excel in capturing the essence of each play and engaging the audience. It's become a go-to cultural experience for me"},
        {name: "Shivanshu Tiwari", desc: "I've been a loyal patron of this theater for years, and each visit is a mesmerizing experience. The range of productions is astounding, and the way the cast and crew bring stories to life is phenomenal."},
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,         // Change based on design
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: { slidesToShow: 1 },
          },
          {
            breakpoint: 992,
            settings: { slidesToShow: 2 },
          },
        ],
      };
    

  return (
    <div className='testimonial'>
        <h1 className='discover-title'>What our <em className='creative-hub'>Student Says</em> </h1>
        <Slider {...settings}>
            {
              testimonials.map((item, index)=>
             <div>
                 <div className='testimonial-card' key={index}>
                <em>" {item.desc} "</em>
                <p>- {item.name}</p>
              </div>
             </div>
            )
            }
          </Slider>
    </div>
  )
}

export default Testimonial