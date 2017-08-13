import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import NavStyle from './Nav.scss'

class Nav extends Component {
  // constructor(props) {
  //   super(props)

  // }
  render() {
    return (
      <div className={`${NavStyle.nav} ui fixed secondary pointing menu`}>
        <div className="ui container">
          <Link to="/" className={`header item`}>Noads</Link>
          <NavLink exact to="/" className={`item`} activeClassName={`active`}>首页</NavLink>
          <div className="menu right">
            <NavLink to="/sign_in" className={`item`} activeClassName={`active`}>登录</NavLink>
            <NavLink to="/sign_up" className={`item`} activeClassName={`active`}>注册</NavLink>
            <NavLink to="/write" className={`item`} activeClassName={`active`}>写文章</NavLink>
          </div>
        </div>
      </div >
    )
  }
}


export default Nav