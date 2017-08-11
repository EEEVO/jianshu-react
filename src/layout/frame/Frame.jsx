import React, { Component } from 'react';
import FrameStyle from './Frame.scss';

import Nav from '../nav/Nav'
// import SignIn from '../../compontent/signIn/SignIn'
import Panel from '../../compontent/user/Panel.js'


class Frame extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <div className={FrameStyle.layout}>
          <Panel></Panel>
        </div>
      </div>
    );
  }
}

export default Frame;
