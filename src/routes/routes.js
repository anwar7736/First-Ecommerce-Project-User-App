import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Home from '../pages/Home';

class Routes extends React.Component{
 render() {
    return (
        <Fragment>
           <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"
            >
                <Route path="/" component={Home} />
            </AnimatedSwitch>
        </Fragment>
    );
  }
}

export default Routes;
