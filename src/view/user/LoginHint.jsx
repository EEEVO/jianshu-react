import React, { Component } from 'react';

class LoginHint extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { history } = this.props;
    setTimeout(() => history.push('/sign_in'), 1000);
  }

  render() {
    return (
      <div className="ui aligned center header">
        先登录, 即将自动跳转
        </div>
    );
  }
}

export default LoginHint