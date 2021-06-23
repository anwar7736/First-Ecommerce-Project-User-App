import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import NavMenuMobile from '../components/common/NavMenuMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import ListBySubcategory from '../components/ProductDetails/ListBySubcategory';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import Axios from 'axios';
import ApiURL from '../api/ApiURL';

class ProductListBySubcategory extends React.Component{
    constructor({match}){
        super();
        this.state = {
            category : match.params.category,
            subcategory : match.params.subcategory,
            ProductData : [],
        }
    }
    componentDidMount() {
         window.scroll(0,0);
         Axios.get(ApiURL.ProductListBySubcategory(this.state.category, this.state.subcategory))
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
                <ListBySubcategory category={this.state.category} subcategory={this.state.subcategory} ProductData={this.state.ProductData} />
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

export default ProductListBySubcategory;
