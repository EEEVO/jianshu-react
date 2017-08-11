import React, { Component } from 'react';
import NavStyle from './Nav.scss'

class Nav extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={`${NavStyle.nav} ui fixed secondary pointing menu`}>
        <div className="ui container">
          <a className="header item" >Noads</a>
          <a className="item active" >首页</a>
          <div className="menu right">
            <a className="item active">登录</a>
            <a className="item">注册</a>
            <a className="item">写文章</a>
          </div>
        </div>
      </div >
    )
  }
}


export default Nav