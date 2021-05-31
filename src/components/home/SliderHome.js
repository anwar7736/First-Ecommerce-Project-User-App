import React, {Component, Fragment} from 'react';
import Slider from "react-slick";

class SliderHome extends React.Component{
 render() {
     const settings = {
            dots: true,
            infinite: true,
            autoplay:true,
            autoplaySpeed:3000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

    return (
        <Fragment>
             <Slider {...settings}>
                    <div>
                       <img className="slider-img" src="../../../images/slider1.jpg"/>
                    </div>
                    <div>
                        <img className="slider-img" src="../../../images/slider2.jpg"/>
                    </div>
                    <div>
                        <img className="slider-img" src="../../../images/slider3.jpg"/>
                    </div>
            </Slider>
        </Fragment>
    );
  }
}

export default SliderHome;
