import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Navbar, Row, NavDropdown} from "react-bootstrap";
import MegaMenu from "../home/MegaMenu";
import MegaMenuMobile from "../home/MegaMenuMobile";
import {Link} from "react-router-dom";
import Axios from 'axios';
import ApiURL from '../../api/ApiURL';

class NavMenuMobile extends Component {

    constructor() {
        super();
        this.state={
            SideNavState:"sideNavClose",
            ContentOverState:"ContentOverlayClose",
            menuData : [],
        }
    }

    componentDidMount(){
        Axios.get(ApiURL.GetCategoryDetails)
        .then(response=>{
            this.setState({menuData : response.data});
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




    render() {
        return (
            <Fragment>
            <Navbar fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">

                <a style={{cursor: 'pointer'}} onClick={this.MenuBarClickHandler} className=" mx-2 navbar-brand"><i className="fa fa-bars"></i></a>
                <Link to="/cart" className="link cart-btn"><i className="fa fa-shopping-cart"></i> 0 items </Link>
                <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i>  <sup><span className="badge text-white bg-danger">4</span></sup></Link>
                <Link to="/notification" className="btn"><i className="fa h4  fa-bell"></i> <sup><span className="badge text-white bg-danger">4</span></sup></Link>
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
                <Link to="/user_login" className="h4 btn btn-danger btn-sm">LOGIN</Link>

            </Navbar>
                <div  className={this.state.SideNavState}> 
                    <Link to="/" className="btn"> <img className="nav-logo" src="../../images/logo.png"/></Link>
                    <hr/>
                    <MegaMenuMobile data={this.state.menuData}/>
                </div>

                <div onClick={this.ContentOverlayClickHandler}  className={this.state.ContentOverState}>

                </div>

            </Fragment>

        );
    }
}

export default NavMenuMobile;