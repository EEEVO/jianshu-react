import React, { Component } from 'react';
import SigninStyle from '../user.scss';

class SignUp extends Component {
  render() {
    return (
      < div className={SigninStyle.sign_panel} >
        <form className="ui form" action="">
          <div className={`field`}>
            <input type="text" placeholder="用户名" />
          </div>
          <div className={`field`}>
            <input type="text" placeholder="密码" />
          </div>
          <div className={`field`}>
            <input type="text" placeholder="确认密码" />
          </div>
          <div className={`field`}>
            <button type="submit" className="ui button fluid primary">注册</button>
          </div>
        </form>
      </div >
    )
  }
}

export default SignUp

