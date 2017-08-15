import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PanelStyle from './user.scss';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

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
    return (
      <div className="ui stackable grid container center aligned">
        <div className={`${PanelStyle.main} six wide column`}>
          <h4 className={PanelStyle.title}>
            <div className={PanelStyle['normal-title']}>
              <NavLink to='/sign_in' activeClassName={PanelStyle.active} id="1">登录</NavLink>
              <b>·</b>
              <NavLink to='/sign_up' activeClassName={PanelStyle.active} id="2">注册</NavLink>
              {/* <a id="2">注册</a> */}
            </div>
          </h4>
          {/* 作为容器组件接受其他组件，此句很重要 */}
          {this.props.children}
        </div>
      </div>
    )
  }
}

<<<<<<< HEAD
export default Panel
=======
export default Panel


>>>>>>> e281ddf2bed37f7a22bababfd8f36d57697b0076
