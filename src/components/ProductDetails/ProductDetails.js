import React, {Component,Fragment} from 'react';
import {Container, Row, Col, Card, Breadcrumb} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import ReactHtmlParser from 'react-html-parser';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import ReviewList from './ReviewList'; 
import SuggestedProducts from './SuggestedProducts';
import Axios from 'axios';
import ApiURL from '../../api/ApiURL';
import cogoToast from 'cogo-toast';
import SessionHelper from '../../SessionHelper/SessionHelper';

class ProductDetails extends Component {
    constructor(){
        super();
        this.state = {
            previewImg : null,
            isColor: null,
            isSize : null,
            code : null,
            color: '',
            size : '',
            quantity : '',
            refreshStatus : false,
        }
    }

    AddToCart=()=>{
        let user_id = SessionHelper.getIdSession();
        let product_code = this.state.code;
        let product_color = this.state.color;
        let product_size = this.state.size;
        let product_quantity = this.state.quantity;

        if(this.state.isColor==='YES' && product_color.length===0)
        {
              cogoToast.error('Please Select Color', {position : 'bottom-center'});
        }

        else if(this.state.isSize==='YES' && product_size.length===0)
        {
              cogoToast.error('Please Select Size', {position : 'bottom-center'});
        }

        else if(product_quantity.length===0)
        {
              cogoToast.error('Please Choose Quantity', {position : 'bottom-center'});
        }

        let MyForm = new FormData();
        MyForm.append('user_id', user_id);
        MyForm.append('product_code', product_code);
        MyForm.append('product_color', product_color);
        MyForm.append('product_size', product_size);
        MyForm.append('product_quantity', product_quantity);
        Axios.post(ApiURL.AddToCart, MyForm)
        .then(response=>{
            if(response.status===200 && response.data===1)
            {
                cogoToast.success('Product Added to Cart List', {position : 'bottom-center'});
                this.setState({refreshStatus : true});
            }
            else if(response.status===200 && response.data!==1)
            {
                cogoToast.error('Something Went Wrong!', {position : 'bottom-center'});
            }
        })
        .catch(error=>{
             //cogoToast.error('Something Went Wrong!', {position : 'bottom-center'});
        })
    } 

    AddToFavourite=()=>{
        let user_id = SessionHelper.getIdSession();
        let product_code = this.state.code;

        let MyForm = new FormData();
        MyForm.append('user_id', user_id);
        MyForm.append('product_code', product_code);

        Axios.post(ApiURL.AddToFavourite, MyForm)
        .then(response=>{
            if(response.status===200 && response.data===1)
            {
                cogoToast.success('Product Added to Favourite List', {position : 'bottom-center'});
            }
            else
            {
                cogoToast.warn('Product Already Added to Favourite List', {position : 'bottom-center'});
            }
        })
        .catch(error=>{
             cogoToast.error('Something Went Wrong!', {position : 'bottom-center'});
        })
    }
    previewImg=(event)=>{
        let selectedImg = event.target.src;
        this.setState({previewImg: selectedImg})
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

    render() {
        let MyList = this.props.details;
        if(MyList.length > 0)
        {
            let product_name = MyList[0]['name'];
            let code = MyList[0]['product_code'];
            let  short_dec= MyList[0]['des'];
            let  desc=  MyList[0]['details'];
            let  img1=  MyList[0]['img1'];
            let  img2=  MyList[0]['img2'];
            let  img3=  MyList[0]['img3'];
            let  img4=  MyList[0]['img4'];
            let  color=   MyList[0]['color'];
            let  size=  MyList[0]['size'];
            let  price= MyList[0]['price'];
            let  subcategory= MyList[0]['subcategory'];
            let  special_price= MyList[0]['special_price'];
            let colorDiv;
            let sizeDiv;

            if(color!=='NA')
            {
                let colour = color.split(',');
                var colorList = colour.map((c,i)=>{
                    return <option>{c}</option>
                        
                            colorDiv = '';
                })
            }

            else {
                colorDiv = 'd-none';
            }

            if(size!=='NA')
            {
                let SizeData= size.split(',');
                var sizeList = SizeData.map((s,i)=>{
                    return <option>{s}</option>
                        
                            sizeDiv = '';
                })
            }
            else {
                sizeDiv = 'd-none';
            }

            let previewImage;

            if(this.state.previewImg==null)
            {
                previewImage =  <InnerImageZoom 
                className="w-100" 
                src={img1}
                zoomSrc={img1} 
                zoomType="hover"
                zoomScale = "1.5"
                />
            }

            else{
                previewImage =  <InnerImageZoom 
                className="w-100" 
                src={this.state.previewImg}
                zoomSrc={this.state.previewImg}
                zoomType="hover"
                zoomScale = "1.5"
                />
            }

            if(this.state.code===null)
            {
                this.setState({code : code});
            } 

            if(this.state.isColor===null)
            {
               if(color!=='NA')
               {
                    this.setState({isColor : 'YES'});
               }
               else
               {
                    this.setState({isColor : 'NO'});
               }
            }  

            if(this.state.isSize===null)
            {
               if(size!=='NA')
               {
                    this.setState({isSize : 'YES'});
               }
               else
               {
                    this.setState({isSize : 'NO'});
               }
            }




            function PriceList(price, special_price)
            {
                if(special_price!=='NA')
                {
                    return  <div className="Product-price-card d-inline">
                                Price : <strike className="text-muted">{price}</strike> <span className="text-success"><b>{special_price} TK</b></span> 
                            </div>
                }

                else
                {
                    return  <div className="Product-price-card d-inline">
                                <span className="text-success"><b>Price :</b></span> <span className="text-danger">{price} TK</span> 
                            </div>
                }
            }
          return (
            <Fragment>
                <Container  className="BetweenTwoSection">
                    <Row className="p-2">
                        <Breadcrumb className="shadow-sm w-100 bg-white mt-5">
                          <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                          <Breadcrumb.Item><Link to="/product_details">Details</Link></Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                            <Row>
                                <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                                   {previewImage}
                                    <Container  className="my-3">
                                        <Row>
                                            <Col className="p-0 m-0"  md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.previewImg} className=" clickImg w-100" src={img1}/>
                                            </Col>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.previewImg} className=" clickImg w-100" src={img2}/>
                                            </Col>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.previewImg} className=" clickImg w-100" src={img1}/>
                                            </Col>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.previewImg} className=" clickImg w-100" src={img2}/>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                    <h5 className="Product-Name">{product_name}</h5>
                                    <h6 className="section-sub-title">{ReactHtmlParser(short_dec)}</h6>
                                    <div className="input-group">
                                        {
                                            PriceList(price, special_price)
                                        }
                                    </div>
                                    <h6 className="mt-2">Choose Color</h6>
                                    <div className="input-group">
                                        <div className={colorDiv}>
                                            <select onChange={(e)=> this.setState({color : e.target.value})}>
                                                <option value="" disabled selected>Select Color</option>
                                                    {colorList}
                                            </select>
                                        </div>
                                    </div>

                                    <h6 className="mt-2">Choose Size</h6>
                                    <div className="input-group">
                                        <div className="">
                                            <div className={sizeDiv}>
                                                <select onChange={(e)=> this.setState({size : e.target.value})} >
                                                    <option value="" disabled selected>Select Size</option>
                                                        {sizeList}
                                                </select>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <h6 className="mt-2">Quantity</h6>
                                    <input onChange={(e)=> this.setState({quantity : e.target.value})} className="form-control text-center w-50" min="1" type="number" />

                                    <div className="input-group mt-3">
                                        <button onClick={this.AddToCart} className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  Add To Cart</button>
                                        <button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button>
                                        <button onClick={this.AddToFavourite} className="btn btn-primary m-1"> <i className="fa fa-heart"></i> Favourite</button>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="text-justify" md={6} lg={6} sm={12} xs={12}>
                                    <h6 className="mt-2">DETAILS</h6>
                                    {ReactHtmlParser(desc)}
                                </Col>
                                  <Col className="" md={6} lg={6} sm={12} xs={12}>
                                    <ReviewList code = {code} />
                                </Col>
                                 <SuggestedProducts subcategory={subcategory}/>
                            </Row>

                        </Col>
                    </Row>
                </Container>
                {this.PageRefresh()}
            </Fragment>
        );
    }
    else{
        return (
                <Fragment>
                    <Container className="BetweenTwoSection mt-5">
                        <Row className="p-2">  
                            <Col className="text-center mt-5 text-danger">
                                <h1>No Data Found</h1>
                                <h5>Please try again!</h5>
                            </Col>
                        </Row>
                    </Container>
               </Fragment>
               );
    }

        
    }
}

export default ProductDetails;