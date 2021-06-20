import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button, Form, Breadcrumb} from 'react-bootstrap'
import {Link} from 'react-router-dom';

class Contact extends React.Component{
    render(){
        return (
            <Fragment>
                <Container className="TopSection">
                   <Row>
                        <Breadcrumb className=" shadow-sm w-100 bg-white mt-3">
                          <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                          <Breadcrumb.Item><Link to="/contact">Contact</Link></Breadcrumb.Item>
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
                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <iframe className="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.7837360184853!2d90.2612632149848!3d23.932710984499774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e8604d6f9d21%3A0xd2156959137437b7!2sPalash%20Bari%20Rd!5e0!3m2!1sen!2sbd!4v1624120568154!5m2!1sen!2sbd"></iframe>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
export default Contact;