import React, { Component } from 'react';
import SigninStyle from '../user.scss';
// import Validation from './../../../common/util/validation.js';
import PropTypes from 'prop-types';

class SignUp extends Component {
  static propTypes = {
    SignUpAjax: PropTypes.func
  }
  constructor(props) {
    super(props);
    this.state = {
      username: '',// 用户名
      password: '',//密码
      twopassword: '',//密码
      nameErr: false,
      passwordErr: false,
      twopasswordErr: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    // 实例化一个验证对象
    // this.validation = new Validation()

    this.nameChange = this.nameChange.bind(this);
    this.passwChange = this.passwChange.bind(this);
    this.twoPasswChange = this.twoPasswChange.bind(this);
  }

  // 更新username
  nameChange(e) {
    this.setState({
      username: e.target.value,
      nameErr: false
    })
  }
  // 更新password
  passwChange(e) {
    this.setState({
      password: e.target.value,
      passwordErr: false
    })
  }
  // 验证重复密码的对错
  twoPasswChange(e) {
    let str = e.target.value
    if (str !== this.state.password) {
      this.setState({
        twopassword: str,
        twopasswordErr: "两次密码不一致"
      })
    } else {
      this.setState({
        twopassword: str,
        twopasswordErr: false
      })
    }
  }
  /**
   * 注册按钮点击事件
   * 
   * @memberof SignUp
   */
  onSubmit(e) {
    // 阻止默认动作
    e.preventDefault()
    //阻止冒泡
    e.stopPropagation()
    let { username, password, twopassword } = this.state
    // 进行一次过滤
    if (username === "") {
      this.setState({
        nameErr: "用户名不能是空"
      })
    }
    if (password === "") {
      this.setState({
        passwordErr: "密码不能是空"
      })
      return
    }
    if (twopassword === "") {
      this.setState({
        twopasswordErr: "请再次输入密码确认"
      })
      return
    }

    this.props.SignUpAjax({
      username, password, twopassword
    })
  }
  render() {
    let {
      username,
      password,
      twopassword,
      nameErr,
      passwordErr,
      twopasswordErr
    } = this.state;
    let { nameChange, passwChange, twoPasswChange, onSubmit } = this

    let nameErrMsg = nameErr ? (<p className={SigninStyle.err} > {nameErr}</p>) : null;
    let passwordErrMsg = passwordErr ? (<p className={SigninStyle.err} > {passwordErr}</p>) : null;
    let twopasswordErrMsg = twopasswordErr ? (<p className={SigninStyle.err} > {twopasswordErr}</p>) : null;
    return (
      < div className={SigninStyle.sign_panel} >
        <form className="ui form" onSubmit={onSubmit}>
          <div className={`field ${nameErr ? 'error' : ''}`}>
            <input type="text" placeholder="用户名" value={username} onChange={nameChange} ref="nameDom" />
          </div>
          {nameErrMsg}
          <div className={`field ${passwordErr ? 'error' : ''}`}>
            <input type="text" placeholder="密码" value={password} onChange={passwChange} ref="passwDom" />
          </div>
          {passwordErrMsg}
          <div className={`field ${twopasswordErr ? 'error' : ''}`}>
            <input type="text" placeholder="确认密码" value={twopassword} onChange={twoPasswChange} ref="twoPasswDom" />
          </div>
          {twopasswordErrMsg}
          <div className={`field`}>
            <button type="submit" className="ui button fluid primary">注册</button>
          </div>
        </form>
      </div >
    )
  }
}

export default SignUp

