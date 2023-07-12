import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { useState } from 'react';
import Slider from 'react-slick';



const LogoSlider = () => {
    const [settings] = useState({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
    });
    const logos = [
        'https://bcassetcdn.com/public/blog/wp-content/uploads/2022/11/09184005/firstup-logo-by-slavisa-dujkovic-dribbble.png',
        'https://img.freepik.com/premium-vector/creative-letter-s-logotype-abstract-hexagon-with-pixel-technology-logo-design-creative-dynamic-round-logotype-connection-symbol-design_144543-1685.jpg',
        'https://bcassetcdn.com/public/blog/wp-content/uploads/2022/11/09183931/comtug-logo-design-combination-mark-logo-unused-by-md-zahid-hasan-dribbble.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouEM_F_Ve7A5yFDTOWivTyGDoiqJyTx8U2w&usqp=CAU',
        'https://i0.wp.com/static.free-logo-design.net/uploads/2012/04/Free_Logo_Design_for_Software_and_Technology.jpg',
        'https://mir-s3-cdn-cf.behance.net/project_modules/1400/bc1b2e102641645.5f3b60b112613.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQup6RBBqWWdxEMhVX9S31Pe2-FMVnJNjL-_g&usqp=CAU'
      ];
    return (
      <div>
        <h1 style={{textAlign:"center"}}>Sponsors</h1>
        <Slider {...settings}>
        
        {logos.map((logo, index) => (
            <div key={index} >
              <img src={logo} style={{width:"350px",height:"200px"}} alt='logo' />
            </div>
        ))}
       
          
        </Slider>
      </div>
    );
  };
  export default LogoSlider;