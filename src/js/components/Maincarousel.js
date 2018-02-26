import React, { Component } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import NextIcon from '../../img/arrow-right.svg';
import PrevIcon from '../../img/arrow-left.svg';

function NextArrow(props) {
  const {onClick} = props;
  return (
    <button className="slick-arrow slick-next" onClick={onClick}><NextIcon className="iconArrow"/></button>
  );
}
function PrevArrow(props) {
  const {onClick} = props;
  return (
    <button className="slick-arrow slick-prev" onClick={onClick}><PrevIcon className="iconArrow"/></button>
  )
}

class MainCarousel extends Component {
  constructor() {
    super();
    this.state = {
      videos: []
    }
  }

  componentDidMount() {
    axios.get('https://cdn.jwplayer.com/v2/playlists/f49AJ8N4?post_width=1920&page_limit=4')
      .then(res => {
        const videos = res.data.playlist;
        this.setState({ videos });
      });
  }

  render() {
    const settings = {
      responsive: [
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            centerMode: false,
            slidesToShow: 1,
            dots: true
          }
        },
        {
          breakpoint: 1280,
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
            centerPadding: '215px',
            speed: 500,
            arrows: true,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 2561,
          settings: {
            dots: true,
            centerMode: true,
            centerPadding: '360px',
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
      <div className="main-carousel">
        <Slider {...settings}>
          {this.state.videos.map(video =>
            <div key={video.mediaid}>
              <div className="play-image-contain">
                <a className="play" href={video.link}></a>
                <img src={video.image}/>
              </div>
              <div className="content-block">
                <div className="content">
                  <h2 className="main-title">{video.title}</h2>
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
