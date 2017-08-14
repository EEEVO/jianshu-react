import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Axios from 'axios'

import FrameStyle from './Frame.scss';


import Nav from '../nav/Nav'
// import Panel from '../../compontent/user/Panel.js'
import Write from '../../compontent/write/Write'
import Home from '../../view/home/Home'
import SignInPanel from '../../view/user/SignInPanel';
import SignUpPanel from '../../view/user/SignUpPanel';


class Frame extends Component {
  constructor(props) {
    super(props);
    this.SignUpAjax = this.SignUpAjax.bind(this)
  }
  /**
   * 注册方法：使用与SignUp组件
   * 
   * @param {any} reqData 请求参数
   * @memberof Frame
   */
  SignUpAjax(reqData) {
    Axios.post('http://api.noods.me/register', {
      reqData
    }).then((res) => {
      if (res.data.msg === "注册成功") {

      }
    })
  }
  render() {
    let { SignUpAjax } = this
    return (
      <div className={FrameStyle.layout}>
        <Nav></Nav>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/sign_in" component={SignInPanel}></Route>
        <Route exact path="/sign_up" render={
          (props) => (
            <SignUpPanel {...{ SignUpAjax }} />
          )
        }></Route>
        <Route exact path="/write" component={Write}></Route>
      </div >
    );
  }
}

//   <Write></Write>
export default Frame;
