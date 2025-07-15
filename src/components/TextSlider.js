"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/textSlider.css";
import image1 from "../../public/images/slider1.jpg";
import image2 from "../../public/images/slider2.jpg";
import image3 from "../../public/images/slider3.jpeg";
import Image from "next/image";

// Dynamically import the Slider component
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function TextSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // nextArrow: <div className="slick-arrow slick-next"></div>,
    // prevArrow: <div className="slick-arrow slick-prev"></div>,
  };

  return (
    <div className="slider-container bg-black">
        <div className="slider-title text-center">
            <h2 className="text-white">Latest Properties</h2>
        </div>
      <Slider {...settings} className="slider mt-10">
        <div className="slide">
          <div className="slide-content">
            <div className="slide-image-container">
              <Image src={image1} alt="Slide Image" className="slide-image" />
            </div>
            <div className="slide-text">
              <h2 className="text-white">635 PERUGIA WAY, BEL AIR CA 90077</h2>
              <h5 className="text-white">5 BR | 7 BA.</h5>
              <p className="text-white text-justify pr-10">
                This traditional designed home is situated on a Cul-de-sac in
                prime lower Bel Air overlooking the Bel Air Country Club Golf
                Course and on a clear day you can see the ocean. There is a
                newer state-of-the-art eat in kitchen, with center island, cozy
                dining room with fireplace, sun filled living room with
                fireplace, large family room with fireplace and paneled
                den/library with fireplace.
              </p>
              {/* <button className="slide-button global-btn">Learn More</button> */}
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="slide-content">
            <div className="slide-image-container">
              <Image src={image2} alt="Slide Image" className="slide-image" />
            </div>
            <div className="slide-text">
              <h2 className="text-white">1518 Bel Air Rd Los Angeles, CA 90077</h2>
              <h5 className="text-white">6 BR | 8 BA | 9,310 SqFt.</h5>
              <p className="text-white text-justify pr-10">
                The absolute ultimate in glamorous contemporary living. A true
                timeless masterpiece featuring the latest in technology and
                materials and infused with Old World class and spectacular
                magic. Completely remodeled and completed in 2014. A
                state-of-the-art open floor plan with grand open kitchen/family
                room and breakfast nook seating for 10,{" "}
              </p>
              {/* <button className="slide-button global-btn">Learn More</button> */}
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="slide-content">
            <div className="slide-image-container">
              <Image src={image3} alt="Slide Image" className="slide-image" />
            </div>
            <div className="slide-text">
              <h2 className="text-white">
                1 W CENTURY DRIVE, 14D – WESTWOOD / CENTURY CITY, CALIFORNIA
              </h2>
              <h5 className="text-white">2 BR | 3 BA.</h5>
              <p className="text-white text-justify pr-10">
                This is a beautiful two bedroom, three bath, unit with an open
                gourmet kitchen and stunning panoramic views. This residence
                features a private elevator lobby, fireplaces, generous
                terraces. One of the most sought after buildings in Los
                Angeles/Century City. Designed by Robert A.M Stern{" "}
              </p>
              {/* <button className="slide-button global-btn">Learn More</button> */}
            </div>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}
