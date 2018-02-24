import React, { Component } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import PlayIcon from '../../img/play.svg';
import NextIcon from '../../img/arrow-right.svg';
import PrevIcon from '../../img/arrow-left.svg';

function NextArrow(props) {
  const {onClick, className} = props;
  return (
    <button className="slick-arrow slick-next" onClick={onClick}><NextIcon className="iconArrow"/></button>
  );
}
function PrevArrow(props) {
  const {onClick, className} = props;
  return (
    <button className="slick-arrow slick-prev" onClick={onClick}><PrevIcon className="iconArrow"/></button>
  )
}

class MainCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    }
  }

  componentDidMount() {
    axios.get('https://content.jwplatform.com/feeds/f49AJ8N4.json?page_limit=4')
      .then(res => {
        const videos = res.data.playlist;
        this.setState({ videos });
        console.log(this.state.videos, 'HI');
      });
  }

  render() {
    const settings = {
      responsive: [
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: false,
            slidesToShow: 1,
            dots: true
          }
        },
        {
          breakpoint: 1921,
          settings: {
            dots: true,
            centerMode: true,
            centerPadding: '260px',
            speed: 500,
            arrows: true,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],

    };

    return (
      <div className="mainCarousel">
        <Slider {...settings}>
          {this.state.videos.map(video =>
            <div key={video.mediaid}>
              <a className="play" href={video.link}></a>
              <img src={video.image}/>
              <div className="content-block">
                <div className="content">
                  <h2 className="mainTitle">{video.title}</h2>
                  <p className="description">{video.description}</p>
                </div>
              </div>
            </div>
          )}
        </Slider>
      </div>
    )
  }
}



export default MainCarousel;
