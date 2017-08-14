import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import myPage from './myPage.scss';

class AuthorInfo extends Component {
  static propTypes = {

  }
  render() {
    // let { avatar, user_name, user_id } = userInfo;
    let { history, initMyPage, userInfo } = this.props
    let { user_id, user_name, avatar } = userInfo
    return (
      <div className={myPage.author_info}>
        <Link to="/my_page" className={myPage.avatar}
          onClick={
            ev => {
              ev.stopPropagation();
              ev.preventDefault();
              history.push('/my_page', { userInfo });
              initMyPage(user_id, { user_id }, '所有文章');
            }
          }
        >
          <img src={avatar} alt="" />
        </Link>
        <div className={myPage.title}>
          <span className={myPage.name}>
            {user_name}
          </span>
        </div>

      </div>
    )
  }
}

export default AuthorInfo