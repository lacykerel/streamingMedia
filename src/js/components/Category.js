import React from 'react';

export default (props) => {
  return (
    <div>
      <a className="play" href={props.link}></a>
      <img src={props.image}/>
      <div className="content-block">
        <div className="content">
          <h2 className="main-title">{props.title}</h2>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </div>
  )
}
