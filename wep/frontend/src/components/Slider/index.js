import React, { Component } from "react";
import Slider from "react-slick";

import './styles.css';

function Arrow({className, style, onClick}) {
    
    return (
      <div
        // style={{ ...style, display: "block", background: "green" }}
        className={className}
        onClick={onClick}
      />
    );
  }

export default class SliderGallery extends Component {
    
  render() {
    const NumToShow = this.props.numToShow;
    const NumToScroll = this.props.numToScroll;
    const settings = {
      accessibility:true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: NumToShow,
      slidesToScroll: NumToScroll,
      nextArrow: <Arrow className="arrow" />,
      prevArrow: <Arrow className="arrow" />,
      swipeToSlide: true
    };
    return (
      <div className="Slider-page-container">
        <h2 className="Slider-page-header"> {this.props.head}</h2>
        <Slider {...settings} className="Slider-page-slide">
          <div className="gallery-item">
              <div className="gallery-img">
                <img src="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_960_720.jpg" alt="qq"/>
              </div>
            <div className="gallery-title">
               </div>
          </div>
          <div className="gallery-item">
            <img src="https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297_640.jpg" alt=""/>
          </div>
          <div className="gallery-item">
            <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821_960_720.jpg" alt="qq"/>
          </div>
          <div className="gallery-item">
            <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg" alt=""/>
          </div>
          <div className="gallery-item">
            <img src="https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_640.jpg" alt=""/>
          </div>
          <div className="gallery-item">
            <img src="https://cdn.pixabay.com/photo/2016/08/11/23/48/italy-1587287_640.jpg" alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}