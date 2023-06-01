import React, { useRef, useEffect, useState } from 'react';
import './slideshow.css';
import { slider } from './slider';


const SlideShow = () => {
  const slideContainerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToNextSlide = () => {
    if (currentSlide < 4) {
      slideContainerRef.current.scrollBy({
        top: 0,
        left: window.innerWidth,
        behavior: 'smooth'
      });
      setCurrentSlide(currentSlide + 1);
    } else {
        slideContainerRef.current.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        setCurrentSlide(0);
      }
  };


  useEffect(() => {
    const timeout = setTimeout(() => {
      scrollToNextSlide();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currentSlide]);


  return (
    <section id='testimonials'>
        <h2>Testimonials</h2>
        <p>These are unbiased testimonies from some of my clients</p>
        <div className="slide-container" ref={slideContainerRef}>
            {slider.map(data => {
                return(
                <div className="slide">
                    <div className="slide_">
                        <h5>{data.para}</h5>
                        <div className="id">
                            <div className="img"></div>
                            <div className="idname">
                                <h6>{data.title}</h6>
                                <h6>{data.role}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            )
            })}
            <button onClick={scrollToNextSlide}>Next Slide</button>
        </div>
    </section>
  );
};

export default SlideShow;
