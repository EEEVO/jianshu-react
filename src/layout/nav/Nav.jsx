import React, { Component } from 'react';
import NavStyle from './Nav.scss'

class Nav extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={`${NavStyle.nav} ui secondary pointing menu`}>
        <div className="ui container">
          <div className="header item" >Noads</div>
          <div className="item active" >首页</div>
          <div className="menu right">
            <div className="item active">登录</div>
            <div className="item">注册</div>
            <div className="item">写文章</div>
          </div>
        </div>
      </div >
    )
  }
}


export default Nav