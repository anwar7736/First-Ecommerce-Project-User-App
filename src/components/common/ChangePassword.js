import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Form, Row, Breadcrumb} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import cogoToast from 'cogo-toast';
import validation from '../../validation/validation';
import Axios from 'axios';
import ApiURL from '../../api/ApiURL';
import SessionHelper from '../../SessionHelper/SessionHelper';

class ChangePassword extends Component {
    constructor(){
        super();
        this.state = {
            old_password : '',
            new_password : '',
            confirm_password : '',
            redirectStatus : false,
        }
    }
    onRecoveryHandler=(event)=>{
        event.preventDefault();
        let email = SessionHelper.getEmailSession();
        let old_password = this.state.old_password;
        let new_password = this.state.new_password;
        let confirm_password = this.state.confirm_password;

        if(old_password.length==0)
        {
            cogoToast.error('Old Password is Required!');
        } 

        else if(old_password.length < 3)
        {
            cogoToast.error('Old Password is Too Short!');
        }  

        else if(new_password.length==0)
        {
            cogoToast.error('New Password is Required!');
        } 

        else if(new_password.length < 3)
        {
            cogoToast.error('New Password is Too Short!');
        } 

        else if(confirm_password.length==0)
        {
            cogoToast.error('Confirm Password is Required!');
        } 

        else if(confirm_password.length < 3)
        {
            cogoToast.error('Confirm Password is Too Short!');
        } 

        else if(new_password!=confirm_password)
        {
            cogoToast.error('Both Password does not match!');
        }

        else
        {
            let MyForm = new FormData();
            MyForm.append('email', email);
            MyForm.append('oldpass', old_password);
            MyForm.append('newpass', new_password);

            Axios.post(ApiURL.ChangePassword, MyForm)
            .then(response=>{
                if(response.status==200 && response.data==1)
                {
                    cogoToast.success('Password Changed Successfully, Now You Can Login Again');
                    setTimeout(()=>{
                        this.setState({redirectStatus : true});
                        sessionStorage.removeItem('id');
                        sessionStorage.removeItem('name');
                        sessionStorage.removeItem('email');
                        sessionStorage.removeItem('phone');
                        sessionStorage.removeItem('photo');

                    },3000);
                    
                }
                else
                {
                    cogoToast.error(response.data);
                }
            })
            .catch(error=>{
                 cogoToast.error('Something Went Wrong! Please Try Again!');
            })
        }
        
    }
    onRedirectLogin=()=>{
        if(this.state.redirectStatus===true){
            return (
                    <Redirect to="/user_login" />
                   );
        }
    }
    render() {
        return (
            <Fragment>
                <Container className="TopSection">
                    <Row>
                        <Breadcrumb className=" shadow-sm w-100 bg-white mt-3">
                          <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                          <Breadcrumb.Item><Link to="/forget_password">Forget Password</Link></Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row className="p-0">
                        <Col className="offset-md-3 shadow-sm bg-white mt-1" md={6} lg={6} sm={12} xs={12}>
                            <Row className="text-center ">
                                <Col className="" md={12} lg={12} sm={12} xs={12}>
                                    <Form id="UserForm" onSubmit={this.onRecoveryHandler} className="onboardForm">
                                        <h3 className="section-title">Change Your Password</h3>
                                        <input onChange={(e)=>this.setState({old_password : e.target.value})} className="form-control m-2" type="password" placeholder="Enter your old password..."/>
                                        <input onChange={(e)=>this.setState({new_password : e.target.value})} className="form-control m-2" type="password" placeholder="Enter your new password..."/>
                                        <input onChange={(e)=>this.setState({confirm_password : e.target.value})} className="form-control m-2" type="password" placeholder="Enter your confirm new password..."/>
                                        <Button type="submit" className="btn btn-block m-2 btn-success">UPDATE NOW</Button>
                                        <span className="text-danger">Already registered? <Link to="/user_login">Login</Link></span>
                                    </Form>
                                </Col>
                         
                            </Row>
                        </Col>
                    </Row>
                </Container>
                {this.onRedirectLogin()}
            </Fragment>
        );
    }
}

export default ChangePassword;