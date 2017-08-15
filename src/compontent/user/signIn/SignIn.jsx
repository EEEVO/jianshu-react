import React, { Component } from 'react';
import SigninStyle from '../user.scss';

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      usernameErrMsg: '',
      passwordErrMsg: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.nameChange = this.nameChange.bind(this)
    this.pwChange = this.pwChange.bind(this)
  }
  /**
   * 提交事件
   * 
   * @memberof SignIn
   */
  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    let { usernameErrMsg, passwordErrMsg, username, password } = this.state
    // 传入容器组件
    if (usernameErrMsg === '' && passwordErrMsg === '') {
      this.props.signInAjax({
        username,
        password
      })
    }
  }
  /**
   * 更新用户名
   * 
   * @param {any} e 事件对象
   * @memberof SignIn
   */
  nameChange(e) {
    let temUserName = e.target.value
    // 验证长度
    if (temUserName.length > 6) {
      this.setState({
        username: temUserName,
        usernameErrMsg: "用户名长度最长为6"
      })
      return
    }
    // TODO:正则有问题
    let regStr = "/^[\u4e00-\u9fa5]|\w$/gm";
    let re = new RegExp(regStr)
    if (re.test(temUserName)) {
      this.setState({
        username: temUserName,
        usernameErrMsg: "用户名只能由数字，英文，中文组成"
      })
      return
    }
    this.setState({
      username: temUserName,
      usernameErrMsg: ''
    })
  }
  /**
   * 更新密码
   * 
   * @param {any} e 事件对象
   * @memberof SignIn
   */
  pwChange(e) {
    let temPw = e.target.value
    // 验证长度
    if (temPw.length > 6) {
      this.setState({
        password: temPw,
        passwordErrMsg: "密码长度最长为6"
      })
      return
    }
    // TODO:正则有问题
    let regStr = "/^[\u4e00-\u9fa5]|\w$/gm";
    let re = new RegExp(regStr)
    if (re.test(temPw)) {
      this.setState({
        password: temPw,
        passwordErrMsg: "密码只能由数字，英文，中文组成"
      })
      return
    }
    this.setState({
      password: temPw,
      passwordErrMsg: ''
    })
  }
  render() {
    let { usernameErrMsg, passwordErrMsg, username, password } = this.state
    let { onSubmit, nameChange, pwChange } = this
    let nameMsgDOM = usernameErrMsg === "" ? null : <p className={SigninStyle.err}>{usernameErrMsg}</p>
    let pwMsgDOM = passwordErrMsg === "" ? null : <p className={SigninStyle.err}>{passwordErrMsg}</p>
    // 返回的错误信息
    // let resInfo = null
    return (
      <div className={SigninStyle.sign_panel}>
        {/* {resInfo} */}
        <form className="ui form" onSubmit={onSubmit}>
          <div className={`field ${usernameErrMsg === '' ? '' : 'error'}`}>
            <input type="text" placeholder="用户名" value={username} onChange={nameChange} ref="nameDOM" />
            {nameMsgDOM}
          </div>
          <div className={`field ${passwordErrMsg === '' ? '' : 'error'}`}>
            <input type="text" placeholder="密码" value={password} onChange={pwChange} ref="passwordDOM" />
            {pwMsgDOM}
          </div>
          <div className={`field`}>
            <button type="submit" className="ui button fluid primary">登录</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn