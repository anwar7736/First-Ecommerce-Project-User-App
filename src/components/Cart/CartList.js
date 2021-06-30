import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button, Form, Breadcrumb} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import Axios from 'axios';
import ApiURL from '../../api/ApiURL';
import cogoToast from 'cogo-toast';
import SessionHelper from '../../SessionHelper/SessionHelper';

class CartList extends React.Component{
    constructor(){
        super();
        this.state = {
            CartList : [],
            refreshStatus : false,
        }
    }
    componentDidMount(){
        let user_id = SessionHelper.getIdSession();

        Axios.get(ApiURL.CartItemList(user_id))
        .then(response=>{
            if(response.status===200)
            {
                this.setState({CartList : response.data});
            }
        })
        .catch(error=>{

        })
    }

    ItemQtyIncrease=(item_id, price, quantity)=>
    {
        let MyForm = new FormData();
        MyForm.append('id', item_id);
        MyForm.append('product_quantity', quantity);
        MyForm.append('unit_price', price);

         Axios.post(ApiURL.ItemQtyIncrease, MyForm)
        .then(response=>{
            if(response.status===200 && response.data===1)
            {
                 cogoToast.success('Product Quantity Increased', {position : 'bottom-center'});
                 this.setState({refreshStatus: true});
            }
            else
            {
                 cogoToast.error('Something Went Wrong!', {position : 'bottom-center'});
            }
        })
        .catch(error=>{

        })
    } 

    ItemQtyDecrease=(item_id, price, quantity)=>
    {
        let MyForm = new FormData();
        MyForm.append('id', item_id);
        MyForm.append('product_quantity', quantity);
        MyForm.append('unit_price', price);

         Axios.post(ApiURL.ItemQtyDecrease, MyForm)
        .then(response=>{
            if(response.status===200 && response.data===1)
            {
                 cogoToast.success('Product Quantity Decreased', {position : 'bottom-center'});
                 this.setState({refreshStatus: true});
            }
            else
            {
                 cogoToast.error('Quantity must not be less than 1!', {position : 'bottom-center'});
            }
        })
        .catch(error=>{

        })
    }

    RemoveCartItem=(item_id)=>
    {

      Axios.get(ApiURL.RemoveCartItem(item_id))
        .then(response=>{
            if(response.status===200 && response.data===1)
            {
                 cogoToast.success('Product Removed', {position : 'bottom-center'});
                 this.setState({refreshStatus: true});
            }
            else
            {
                 cogoToast.error('Something Went Wrong!', {position : 'bottom-center'});
            }
        })
        .catch(error=>{

        })
    }

    PageRefresh=()=>{
        if(this.state.refreshStatus===true)
        {
            let URL = window.location;
            return (
                    <Redirect to={URL} />
                    );
        }
    }
    render(){
        let MyList = this.state.CartList;
        let totalPrice = 0;
        let MyView = MyList.map((List, i)=>{
            totalPrice+=parseInt(List.total_price) ;
                    return (
                            <>
                                 <div className="row">

                                    <div className="col-md-3 text-center col-lg-3 col-sm-4 col-6">
                                        <img className="w-100" src={List.product_image} alt=""/>
                                        <button onClick={()=> this.ItemQtyIncrease(List.id, List.unit_price, List.product_quantity)} className="btn mt-2 mx-1 btn-sm site-btn"><i className="fa fa-plus"/></button>
                                        <button onClick={()=> this.ItemQtyDecrease(List.id, List.unit_price, List.product_quantity)} className="btn mt-2 mx-1 btn-sm site-btn"><i className="fa fa-minus"/></button>
                                        <button onClick={()=> this.RemoveCartItem(List.id)} className="btn mt-2 btn-sm site-btn"><i className="fa fa-trash-alt"/></button>
                                    </div>
                                    <div className="col-md-7 col-lg-7 col-sm-8 col-6">
                                        <h5 className="product-name-on-card">{(List.product_name).substring(0,50) }</h5>
                                        <h5 className="product-price-on-card">Total Price : {List.total_price}TK</h5>
                                        <h5 className="product-price-on-card text-success">Quantity : { List.product_quantity}</h5>
                                    </div>
                                </div>
                                <hr/>
                            </>

                            );
        })
        return (
            <Fragment>
                <Container className="TopSection">
                    <Row>
                        <Breadcrumb className="shadow-sm w-100 bg-white mt-3">
                          <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                          <Breadcrumb.Item><Link to="/cart">CartList</Link></Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row className="mt-3">
                        <Col md={7} lg={7} sm={12} xs={12}>
                            {MyView}
                        </Col>
                         <Col md={5} lg={5} sm={12} xs={12}>
                            <div className="card p-2">
                                        <div className="card-body">
                                            <div className="container-fluid ">
                                                <div className="row">
                                                    <div className="col-md-12 p-1  col-lg-12 col-sm-12 col-12">
                                                        <h5 className="Product-Name text-danger">Total Due: {totalPrice} TK</h5>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                        <label className="form-label">Choose City</label>
                                                        <select className="form-control">
                                                            <option value="">Choose</option>
                                                            <option value="Dhaka">Dhaka</option>
                                                            <option value="Khulna">Khulna</option>
                                                            <option value="Barisal">Barisal</option>
                                                            <option value="Jessore">Jessore</option>
                                                            <option value="Mymensingh">Mymensingh</option>
                                                            <option value="Chittagong">Chittagong</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                        <label className="form-label">Choose Payment Method</label>
                                                        <select className="form-control">
                                                           
                                                            <option value="Cash On Delivery" selected disabled>Cash On Delivery</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                        <label className="form-label">Your Name</label>
                                                        <input className="form-control" type="text" placeholder=""/>
                                                    </div>

                                                    <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                        <label className="form-label">Delivery Address</label>
                                                        <textarea rows={2}  className="form-control" type="text" placeholder=""/>
                                                    </div>
                                                    <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                        <button className="btn btn-block btn-success">Confirm Order</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </Col>

                    </Row>
                </Container>
                {this.PageRefresh()}
            </Fragment>
        )
    }
}
export default CartList;