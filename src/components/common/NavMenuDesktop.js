import React, {Component, Fragment} from 'react';
import  {Container,Nav,Navbar, Row, Col, Button, InputGroup, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Redirect} from "react-router";

class NavMenuDesktop extends React.Component{
    constructor(){
        super();
        this.state = {
            search_query : '',
            status : false,  
        }
       
    }
    componentDidMount(){
        this.setState({search_query : this.props.search_query})
    }

    SearchOnChange=(event)=>{
        this.setState({search_query : event.target.value});
    }

    SearchOnClick=(event)=>{
            if(this.state.search_query.length >= 2)
            {
                this.setState({status : true});
            }
      }

    searchRedirect=()=>{
      if(this.state.status===true){
         return <Redirect to={"/ProductListBySearch/"+this.state.search_query} />
      }
       
    }

 render() {
    return (
        <Fragment>
            <Container fluid={true} className="fixed-top shadow-sm p-2 m-0 bg-white" >
                <Row>
                    <Col className="p-1" xl={4} lg={4} md={4} sm={12} xs={12}>
                       <Link to="/" className="btn"> <img className="nav-logo" src="../../../images/logo.png"/></Link>
                       <Link to="/cart" className="link cart-btn"><i className="fa fa-shopping-cart"></i> 0 items </Link>
                    </Col>
                    <Col className="p-1" xl={4} lg={4} md={4} sm={6} xs={12}>
                         <div className="input-group w-100">

                            <input value={this.state.search_query} onChange={this.SearchOnChange} type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>
                            <button onClick={this.SearchOnClick} type="button" className="btn site-btn"><i className="fa fa-search"></i></button>
                             <NavDropdown title={<img className="profile-photo" src="/images/Hydrangeas.jpg"/>} id="navbarScrollingDropdown">
                                 <NavDropdown.Item>
                                    <span className="text-muted">Md Anwar Hossain</span>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/">Profile</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/">Change Password</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/">Logout</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                          </NavDropdown>  
                         </div>

                    </Col>
                    <Col className="p-1" xl={2} lg={2} md={2} sm={12} xs={12}>

                        <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i>  <sup><span className="badge text-white bg-danger">1</span></sup></Link>
                                <Link to="/notification" className="btn"><i className="fa h4  fa-bell"></i> <sup><span className="badge text-white bg-danger">1</span></sup></Link>
                        <Link to="/user_login" className="h4 btn-sm btn btn-danger">LOGIN</Link>               
                       
                    </Col>      
                </Row>
               {this.searchRedirect()}
            </Container>
        </Fragment>
    );
  }
}

export default NavMenuDesktop;
