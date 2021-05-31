import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import HomeTop from '../components/home/HomeTop';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import Collection from '../components/home/Collection';
import NewArrival from '../components/home/NewArrival';

class Home extends React.Component{
 render() {
    return (
        <Fragment>
            <HomeTop/> 
            <FeaturedProducts/>
            <Categories/>
            <Collection/>
            <NewArrival/>
        </Fragment>
    );
  }
}

export default Home;
