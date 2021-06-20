import React, {Component, Fragment} from 'react';
import NavMenuMobile from '../components/common/NavMenuMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import CartList from '../components/Cart/CartList';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';

class CartPage extends React.Component{
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
                <CartList/>
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

export default CartPage;
