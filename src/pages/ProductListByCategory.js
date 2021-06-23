import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import NavMenuMobile from '../components/common/NavMenuMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import ListByCategory from '../components/ProductDetails/ListByCategory';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import Axios from 'axios';
import ApiURL from '../api/ApiURL';

class ProductListByCategory extends React.Component{
    constructor({match}){
        super();
        this.state = {
            category : match.params.category,
            ProductData : [],
        }
    }
    componentDidMount() {
         window.scroll(0,0);
         Axios.get(ApiURL.ProductListByCategory(this.state.category))
        .then(response=>{
            this.setState({ProductData : response.data});
        })
        .catch(error=>{

        })
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
                <ListByCategory category={this.state.category} ProductData={this.state.ProductData} />
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

export default ProductListByCategory;
