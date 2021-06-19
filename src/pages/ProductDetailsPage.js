import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import NavMenuMobile from '../components/common/NavMenuMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import SuggestedProducts from '../components/ProductDetails/SuggestedProducts';
import Refund from '../components/others/Refund';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';

class RefundPage extends React.Component{
    componentDidMount() {
        window.scroll(0,0)
    }
 render() {
    return (
        <Fragment>
            <div className="Mobile">
                <NavMenuMobile/>
            </div>
            <div className="Desktop">
                <NavMenuDesktop/>
            </div>
           <div>
                <ProductDetails/>
                <SuggestedProducts/>
           </div>
            <div className="Desktop">
                <FooterDesktop/>
            </div>
            <div className="Mobile">
                <FooterMobile/>
            </div>
        </Fragment>
    );
  }
}

export default RefundPage;
