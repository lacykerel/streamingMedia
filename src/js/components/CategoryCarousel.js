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

  componentDidMount(props) {
    axios.get(`https://cdn.jwplayer.com/v2/playlists/f49AJ8N4?tags=${this.props.tag}`)
      .then(res => {
        const videos = res.data.playlist;
        this.setState({ videos });
        // const filteredVideos = videos.map(video => video.tags);
        // console.log(filteredVideos, 'filteredVideos');
        // const tags = res.data.playlist.map(video => video.tags)
        // console.log(tags, 'tags');
        // let filteredTag = ''
        // for(let key in tags) {
        //   filteredTag = (tags[key].split(','));
        //   filteredTag.forEach(function(tag) {
        //     if(tag === 'drama') {
        //
        //     }
        //   })
        // }
      });
  }

  render() {
    const { videos } = this.state;
    const settings = {
      responsive: [
        {
          breakpoint: 768,
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
      <div className="category-contain">
        <h2>{this.props.title}</h2>
        <div className="category-carousel">
          <Slider {...settings}>
            {videos.map(video =>
              <div key={video.mediaid}>
                <img src={video.image}/>
                <div className="content-block">
                  <div className="content">
                    <p className="title">{video.title}</p>
                    <p className="description">{video.description}</p>
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
