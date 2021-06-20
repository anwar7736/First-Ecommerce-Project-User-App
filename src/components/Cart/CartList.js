import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button, Form, Breadcrumb} from 'react-bootstrap'
import {Link} from 'react-router-dom';
class CartList extends React.Component{
    render(){
        return (
            <Fragment>
                <Container className="TopSection">
                    <Row>
                        <Breadcrumb className="shadow-sm w-100 bg-white mt-3">
                          <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                          <Breadcrumb.Item><Link to="/cart">CartList</Link></Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                            <Row className="text-center ">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form className=" onboardForm">
                                        <h4 className="section-title">CONTACT WITH US</h4>
                                        <h6 className="section-sub-title">Please Enter Your Mobile No, And Go Next</h6>
                                        <input className="form-control m-2" type="text" placeholder="Your Name"/>
                                        <input className="form-control m-2" type="text" placeholder="Mobile Number"/>
                                        <input className="form-control m-2" type="text" placeholder="Message"/>
                                        <Button className="btn btn-block m-2 site-btn">SEND</Button>
                                    </Form>
                                </Col>
                                
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
export default CartList;