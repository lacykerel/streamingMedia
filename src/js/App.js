import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import MainCarousel from './components/Maincarousel';
import CategoryCarousel from './components/CategoryCarousel';


ReactDOM.render(
  <div>
    <Header/>
    <MainCarousel/>
    <CategoryCarousel/>
  </div>

, document.querySelector('.app'));
