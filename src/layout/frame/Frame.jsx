import React, { Component } from 'react';
import FrameStyle from './Frame.scss';

import Nav from '../nav/Nav'
import Panel from '../../compontent/user/Panel.js'
import Write from '../../compontent/write/Write'

class Frame extends Component {
  render() {
    return (
      <div className={FrameStyle.layout}>
        <Nav></Nav>
        <Panel></Panel>
        <Write></Write>
      </div>
    );
  }
}

export default Frame;
