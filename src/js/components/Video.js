import React from 'react';

const Video = props => {
  const results = props.data;
  console.log(results);
  let videos;

  videos = results.map(video =>
    <Video
      image={video.image}
      title={video.title}
      description={video.description}
      link={video.link}
      tags={video.tags}
      key={video.mediaid} />
  )

  return (
    <div>
      {videos}
    </div>
  )
}

export default Video;
