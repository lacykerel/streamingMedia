import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import MainCarousel from './components/MainCarousel';
import CategoryCarousel from './components/CategoryCarousel';

ReactDOM.render(
  <div>
    <Header/>
    <MainCarousel/>
    <CategoryCarousel tag='drama' title='Dramas'/>
    <CategoryCarousel tag='comedy' title='Comedies'/>
    <CategoryCarousel tag='thriller' title='Thrillers'/>
  </div>

, document.querySelector('.app'));
