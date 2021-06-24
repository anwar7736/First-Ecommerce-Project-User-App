import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import HomePage from '../pages/HomePage';
import UserOnboardPage from '../pages/UserOnboardPage';
import ContactPage from '../pages/ContactPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import RefundPage from '../pages/RefundPage';
import PolicyPage from '../pages/PolicyPage';
import PurchasePage from '../pages/PurchasePage';
import AboutPage from '../pages/AboutPage';
import NotificationPage from '../pages/NotificationPage';
import FavouritePage from '../pages/FavouritePage';
import CartPage from '../pages/CartPage';
import ProductListByCategory from '../pages/ProductListByCategory';
import ProductListBySubcategory from '../pages/ProductListBySubcategory';

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
                <Route exact path="/" render={(props)=> <HomePage {...props} key={ Date.now() } />} />
                <Route exact path="/onboard" render={(props)=> <UserOnboardPage {...props} key={ Date.now() } />} />
                <Route exact path="/product_details/:product_code" render={(props)=> <ProductDetailsPage {...props} key={ Date.now() } />} />
                <Route exact path="/contact" render={(props)=> <ContactPage {...props} key={ Date.now() } />} />
                <Route exact path="/refund" render={(props)=> <RefundPage {...props} key={ Date.now() } />} />
                <Route exact path="/policy" render={(props)=> <PolicyPage {...props} key={ Date.now() } />} />
                <Route exact path="/purchase" render={(props)=> <PurchasePage {...props} key={ Date.now() } />} />
                <Route exact path="/about" render={(props)=> <AboutPage {...props} key={ Date.now() } />} />
                <Route exact path="/notification" render={(props)=> <NotificationPage {...props} key={ Date.now() } />} />
                <Route exact path="/favourite" render={(props)=> <FavouritePage {...props} key={ Date.now() } />} />
                <Route exact path="/cart" render={(props)=> <CartPage {...props} key={ Date.now() } />} />
                <Route exact path="/ProductListByCategory/:category" render={(props)=> <ProductListByCategory {...props} key={ Date.now() } />} />
                <Route exact path="/ProductListBySubcategory/:category/:subcategory" render={(props)=> <ProductListBySubcategory {...props} key={ Date.now() } />} />
            </AnimatedSwitch>
        </Fragment>
    );
  }
}

export default Routes;
