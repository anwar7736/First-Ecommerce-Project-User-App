import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Form, Row, Breadcrumb} from "react-bootstrap";
import {Link} from 'react-router-dom';

class UserSignup extends Component {
    render() {
        return (
            <Fragment>
                <Container className="TopSection">
                    <Row>
                        <Breadcrumb className=" shadow-sm w-100 bg-white mt-3">
                          <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                          <Breadcrumb.Item><Link to="/user_signup">Signup</Link></Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row className="p-0">
                        <Col className="offset-md-3 shadow-sm bg-white mt-1" md={6} lg={6} sm={12} xs={12}>
                            <Row className="text-center ">
                                <Col className="" md={12} lg={12} sm={12} xs={12}>
                                    <Form className="onboardForm">
                                        <h3 className="section-title">USER REGISTRATION</h3>
                                        <input className="form-control m-2" type="text" placeholder="Enter your full name..."/>
                                        <input className="form-control m-2" type="text" placeholder="Enter your username..."/>
                                        <input className="form-control m-2" type="text" placeholder="Enter your valid email address..."/>
                                        <h6 className="float-left ml-3">Choose Profile Picture</h6>
                                        <input className="form-control m-2" type="file" />
                                        <input className="form-control m-2" type="text" placeholder="Enter your strong password..."/>
                                        <Button className="btn btn-block m-2 btn-success">SIGN UP</Button>
                                        <span className="text-danger">Already registered? <Link to="/user_login">Login</Link></span>
                                    </Form>
                                </Col>
                         
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default UserSignup;