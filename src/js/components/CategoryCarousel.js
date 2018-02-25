import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
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

class CategoryCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    }
  }

  componentDidMount() {
    axios.get('https://content.jwplatform.com/feeds/f49AJ8N4.json')
      .then(res => {
        const videos = res.data.playlist;
        console.log(videos, 'videos')
        const tags = res.data.playlist.map(video => video.tags)
        let filteredTag = ''
        for(let key in tags) {
          filteredTag = (tags[key].split(','));
          filteredTag.forEach(function(tag) {
            if(tag === 'drama') {
              console.log(videos.filter(video => tags[key]));
            }
          })
        }
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
            speed: 500,
            arrows: true,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      ],

    };
    return (
      <div className="category-carousel">
        <Slider {...settings}>
          {this.state.videos.filter(video => video.tags === 'drama').map(video =>
            <div key={video.mediaid}>
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

export default CategoryCarousel;
