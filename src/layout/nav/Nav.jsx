import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavStyle from './Nav.scss'

class Nav extends Component {
  static propTypes = {
    myInfo: PropTypes.object
  }
  static defaultProps = {
    myInfo: {}
  }
  // constructor(props) {
  //   super(props)

  // }
  render() {
    let { myInfo, history, initMyPage, logOut } = this.props
    let userLink = null
    // 通过对传入信息的判断来更换菜单的内容
    if (myInfo) {
      let { user_id } = myInfo
      userLink = (
        <NavLink to="/my_page" className={`${NavStyle.avatar} item`} activeClassName="active"
          onClick={
            e => {
              e.stopPropagation();
              e.preventDefault();
              history.push('/my_page', { userInfo: myInfo });
              initMyPage(user_id, { user_id }, '所有文章');
            }
          }
        >
          <img src={myInfo.avatar} className="ui image avatar" alt="" />
          <div className={NavStyle.dropDown}>
            <p onClick={
              e => {
                e.stopPropagation();
                e.preventDefault();
                logOut();
              }}
            >注销</p>
          </div>
        </NavLink>
      );
    } else {
      userLink = [
        (<NavLink to="/sign_in" className={`item`} activeClassName={`active`} key="1">登录</NavLink>),
        (<NavLink to="/sign_up" className={`item`} activeClassName={`active`} key="2">注册</NavLink>)
      ];
    }
    return (
      <div className={`${NavStyle.nav} ui fixed secondary pointing menu`}>
        <div className="ui container">
          <Link to="/" className={`header item`}>Noads</Link>
          <NavLink exact to="/" className={`item`} activeClassName={`active`}>首页</NavLink>
          <div className="menu right">
            {userLink}
            <NavLink to="/write" className={`item`} activeClassName={`active`}>写文章</NavLink>
          </div>
        </div>
      </div >
    )
  }
}


export default Nav