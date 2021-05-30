import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component{
 render() {
    return (
        <Fragment>
            <h1>This is our Home page</h1>
               <Link to="/"><i className="fa fa-home"></i> Home</Link><br/>
               <Link to="/"><i className="fa fa-user"></i> Login</Link><br/>
               <Link to="/"><i className="fa fa-envelope"></i> Home</Link><br/>
        </Fragment>
    );
  }
}

export default Home;
