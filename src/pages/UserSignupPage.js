import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import NavMenuMobile from '../components/common/NavMenuMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import UserSignup from '../components/common/UserSignup';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import DescriptionPlaceholder from '../components/placeholder/DescriptionPlaceholder'

class UserSignupPage extends React.Component{
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
                <UserSignup/>
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

export default UserSignupPage;