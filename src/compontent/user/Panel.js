import React, { Component } from 'react';

import PanelStyle from './user.scss';

import SignIn from './signin/SignIn.jsx';
import SignUp from './signup/SignUp.jsx';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currState: 2
    }
    this.updata_currState = this.updata_currState.bind(this)
  }
  updata_currState(e) {
    let index = parseInt(e.target.id)
    console.log(e.target.id);
    this.setState({
      currState: index
    })
  }
  shouldComponentUpdate(nextProps, nextState) {
    // 避免重复点击按钮刷新
    if (nextState.currState === this.state.currState) {
      return false
    }
    return true
  }
  render() {
    console.log("触发");
    let children
    if (this.state.currState === 1) {
      children = <SignIn />
    } else {
      children = <SignUp />
      // children = <div>测试</div>
    }
    return (
      <div className="ui stackable grid container center aligned">
        <div className={`${PanelStyle.main} six wide column`}>
          <h4 className={PanelStyle.title}>
            <div className={PanelStyle['normal-title']} onClick={this.updata_currState}>
              <a className={PanelStyle.active} id="1">登录</a>
              <b>·</b>
              <a id="2">注册</a>
            </div>
          </h4>
          {children}
        </div>
      </div>
    )
  }
}

export default Panel