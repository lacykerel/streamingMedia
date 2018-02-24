import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import MainCarousel from './components/Maincarousel';


ReactDOM.render(
  <div>
    <Header/>
    <MainCarousel/>
  </div>

, document.querySelector('.app'));
