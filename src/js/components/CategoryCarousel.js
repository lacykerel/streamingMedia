import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Menu from './Menu';
import NextIcon from '../../img/arrow-right.svg';
import PrevIcon from '../../img/arrow-left.svg';
import EllipsisText  from 'react-ellipsis-text';


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
      videos: [],
    }
  }



  componentDidMount(props) {
    axios.get(`https://cdn.jwplayer.com/v2/playlists/f49AJ8N4?tags=${this.props.tag}`)
      .then(res => {
        const videos = res.data.playlist;
        this.setState({ videos });
      });
  }


  render() {
    const { videos } = this.state;
    const settings = {
      responsive: [
        {
          breakpoint: 840,
          settings: {
            arrows: false,
            centerMode: false,
            slidesToShow: 1,
            dots: true
          }
        },
        {
          breakpoint: 1025,
          settings: {
            arrows: true,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
            slidesToShow: 2
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
      <div className="category-contain">
        <h2>{this.props.title}</h2>
        <div className="category-carousel">
          <Slider {...settings}>
            {videos.map(video =>
              <div key={video.mediaid}>
                <div className="slide-container">
                <Menu/>
                <img src={video.image}/>
                <div className="content-block">
                  <div className="content">
                    <p className="title">{video.title}</p>
                    <EllipsisText className="description" text={video.description} length={250} />
                  </div>
                </div>
              </div>
              </div>
            )}
          </Slider>
        </div>
      </div>
    )
  }
}

export default CategoryCarousel;
