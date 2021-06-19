import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Home from '../pages/Home';
import UserOnboardPage from '../pages/UserOnboardPage';
import ContactPage from '../pages/ContactPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import RefundPage from '../pages/RefundPage';
import PolicyPage from '../pages/PolicyPage';
import PurchasePage from '../pages/PurchasePage';
import AboutPage from '../pages/AboutPage';
import NotificationPage from '../pages/NotificationPage';
import FavouritePage from '../pages/FavouritePage';

class Routes extends React.Component{
 render() {
    return (
        <Fragment>
           <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"
            >
                <Route exact path="/" component={Home} />
                <Route exact path="/onboard" component={UserOnboardPage} />
                <Route exact path="/product_details" component={ProductDetailsPage} />
                <Route exact path="/contact" component={ContactPage} />
                <Route exact path="/refund" component={RefundPage} />
                <Route exact path="/policy" component={PolicyPage} />
                <Route exact path="/purchase" component={PurchasePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/notification" component={NotificationPage} />
                <Route exact path="/favourite" component={FavouritePage} />
            </AnimatedSwitch>
        </Fragment>
    );
  }
}

export default Routes;
