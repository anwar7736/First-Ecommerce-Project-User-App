import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import ApiURL from '../../api/ApiURL';

class Collection extends React.Component{
     constructor(){
        super();
        this.state = {
            ProductData : [],
        }
    }

    componentDidMount(){
        Axios.get(ApiURL.ProductListByRemark("COLLECTION"))
        .then(response=>{
            this.setState({ProductData : response.data});
        })
        .catch(error=>{

        })
    }
 render() {
    let MyList = this.state.ProductData;
    let MyView = MyList.map((ProductList, i)=>{
        if(ProductList.special_price=="NA")
        {
            return <Fragment>
                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                   <Link className="link" to="/product_details">
                         <Card className="card w-100 image-box">
                        <img src={ProductList.image} />
                        <Card.Body>
                            <h5 className="product-name-on-card">{ProductList.name}</h5>
                            <p className="product-price-on-card">Price: {ProductList.price}TK</p>
                        </Card.Body>
                    </Card>
                   </Link>
                </Col>
              </Fragment>
        }
        else{
            return <Fragment>
                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                   <Link className="link" to="/product_details">
                         <Card className="card w-100 image-box">
                        <img src={ProductList.image} />
                        <Card.Body>
                            <h5 className="product-name-on-card">{ProductList.name}</h5>
                            <p className="product-price-on-card">Price: <strike className="text-muted">{ProductList.price}</strike> {ProductList.special_price}TK</p>
                        </Card.Body>
                    </Card>
                   </Link>
                </Col>
              </Fragment>
        }
    })
    return (
        <Fragment>
            <Container className="text-center bg-white card-body shadow-sm py-5 BetweenTwoSection" fluid={true}>
                <h4 className="section-title ">SPECIAL COLLECTION</h4>
                <h6 className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</h6>
                <Row>
                    {MyView}
                </Row>
            </Container>
        </Fragment>
    );
  }
}

export default Collection;
