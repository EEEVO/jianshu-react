import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FrameStyle from './Frame.scss';

import Nav from '../nav/Nav'
// import Panel from '../../compontent/user/Panel.js'
// import Write from '../../compontent/write/Write'
import Home from '../../view/home/Home'
import SignInPanel from '../../view/user/SignInPanel';
import SignUpPanel from '../../view/user/SignUpPanel';


class Frame extends Component {
  render() {
    return (
      <div className={FrameStyle.layout}>
        <Nav></Nav>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/sign_in" component={SignInPanel}></Route>
        <Route exact path="/sign_up" component={SignUpPanel}></Route>
      </div>
    );
  }
}

// <Panel></Panel>
//   <Write></Write>
export default Frame;
