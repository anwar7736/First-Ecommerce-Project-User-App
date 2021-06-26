import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Form, Row, Breadcrumb} from "react-bootstrap";
import {Link} from 'react-router-dom';

class UserLogin extends Component {
    render() {
        return (
            <Fragment>
                <Container className="TopSection">
                    <Row>
                        <Breadcrumb className=" shadow-sm w-100 bg-white mt-3">
                          <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                          <Breadcrumb.Item><Link to="/user_login">Login</Link></Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row className="p-0">
                        <Col className="offset-md-3 shadow-sm bg-white mt-1" md={6} lg={6} sm={12} xs={12}>
                            <Row className="text-center ">
                                <Col className="" md={12} lg={12} sm={12} xs={12}>
                                    <Form className="onboardForm">
                                        <h3 className="section-title mt-3">USER LOGIN</h3>
                                        <input className="form-control m-2" type="text" placeholder="Username or Email..."/>
                                        <input className="form-control m-2" type="text" placeholder="User Password..."/>
                                        <Button className="btn btn-block m-2 site-btn">Login</Button>
                                        <span className="text-danger" >No yet a registered? <Link to="/user_signup">Signup</Link></span><br/>
                                        <span><Link to="/user_login">Forgotten Password</Link></span>
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

export default UserLogin;