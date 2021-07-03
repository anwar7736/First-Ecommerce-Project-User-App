import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Navbar, Row, NavDropdown} from "react-bootstrap";
import MegaMenu from "../home/MegaMenu";
import MegaMenuMobile from "../home/MegaMenuMobile";
import {Link} from "react-router-dom";
import {Redirect} from "react-router";
import Axios from 'axios';
import ApiURL from '../../api/ApiURL';
import SessionHelper from '../../SessionHelper/SessionHelper';

class NavMenuMobile extends Component {

    constructor() {
        super();
        this.state={
            SideNavState:"sideNavClose",
            ContentOverState:"ContentOverlayClose",
            menuData : [],
            cartCount : '0',
            homeRedirectStatus : false,
        }
    }

    componentDidMount(){
        Axios.get(ApiURL.GetCategoryDetails)
        .then(response=>{
            this.setState({menuData : response.data});
        })
        .catch(error=>{

        })

        Axios.get(ApiURL.CartCount(SessionHelper.getIdSession()))
        .then(response=>{
            this.setState({cartCount : response.data});
        })
        .catch(error=>{

        })
    }

    MenuBarClickHandler=()=>{
        this.SideNavOpenClose();
    }

    ContentOverlayClickHandler=()=>{
        this.SideNavOpenClose();
    }



    SideNavOpenClose=()=>{
       let SideNavState= this.state.SideNavState;
       let ContentOverState= this.state.ContentOverState;
       if(SideNavState==="sideNavOpen"){
           this.setState({SideNavState:"sideNavClose",ContentOverState:"ContentOverlayClose"})
       }
       else{
           this.setState({SideNavState:"sideNavOpen",ContentOverState:"ContentOverlayOpen"})
       }
    }

   onLogout=()=>{
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('phone');
        sessionStorage.removeItem('photo');
        this.setState({homeRedirectStatus : true});
      
    }
    onRedirectHome=()=>{
        if(this.state.homeRedirectStatus===true)  
            return (
                <Redirect to="/user_login" />
               )
    }


    render() {
       let name = SessionHelper.getNameSession();
       let photo = SessionHelper.getPhotoSession();
       if(name==null)
        {
        return (
            <Fragment>
            <Navbar fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">

                <a style={{cursor: 'pointer'}} onClick={this.MenuBarClickHandler} className=" mx-2 navbar-brand"><i className="fa fa-bars"></i></a>
                <Link to="/cart" className="link cart-btn"><i className="fa fa-shopping-cart"></i> {this.state.cartCount} items </Link>
                <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i>  <sup><span className="badge text-white bg-danger">4</span></sup></Link>
                <Link to="/notification" className="btn"><i className="fa h4  fa-bell"></i> <sup><span className="badge text-white bg-danger">4</span></sup></Link>
                <Link to="/user_login" className="h4 btn btn-danger btn-sm">LOGIN</Link>

            </Navbar>
                <div  className={this.state.SideNavState}> 
                    <Link to="/" className="btn"> <img className="nav-logo" src="../../images/logo.png"/></Link>
                    <hr/>
                    <MegaMenuMobile data={this.state.menuData}/>
                </div>

                <div onClick={this.ContentOverlayClickHandler}  className={this.state.ContentOverState}>

                </div>
                {this.onRedirectHome()}
            </Fragment>

        );
    }
        else{
             return (
            <Fragment>
            <Navbar fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">

                <a style={{cursor: 'pointer'}} onClick={this.MenuBarClickHandler} className=" mx-2 navbar-brand"><i className="fa fa-bars"></i></a>
                <Link to="/cart" className="link cart-btn"><i className="fa fa-shopping-cart"></i> {this.state.cartCount} items </Link>
                <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i>  <sup><span className="badge text-white bg-danger">4</span></sup></Link>
                <Link to="/notification" className="btn"><i className="fa h4  fa-bell"></i> <sup><span className="badge text-white bg-danger">4</span></sup></Link>
                                 <NavDropdown title={<img className="profile-photo" src={photo} />} id="navbarScrollingDropdown">
                                 <NavDropdown.Item>
                                   <span className="text-muted">{name}</span>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                <Link to="/order_details">Order List</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/user_profile">Profile</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/change_password">Change Password</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                   <a onClick={this.onLogout} className="link">Logout</a>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                          </NavDropdown>   
            </Navbar>
                <div  className={this.state.SideNavState}> 
                    <Link to="/" className="btn"> <img className="nav-logo" src="../../images/logo.png"/></Link>
                    <hr/>
                    <MegaMenuMobile data={this.state.menuData}/>
                </div>

                <div onClick={this.ContentOverlayClickHandler}  className={this.state.ContentOverState}>

                </div>
                {this.onRedirectHome()}
            </Fragment>

        );
        }

    }
}

export default NavMenuMobile;