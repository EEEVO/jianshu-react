import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FrameStyle from './Frame.scss';

import Nav from '../nav/Nav'
import Panel from '../../compontent/user/Panel.js'
import Write from '../../compontent/write/Write'
import Home from '../../view/home/Home'

class Frame extends Component {
  render() {
    return (
      <div className={FrameStyle.layout}>
        <Nav></Nav>
        <Route exact path="/" component={Home}></Route>
      </div>
    );
  }
}

// <Panel></Panel>
//   <Write></Write>
export default Frame;
