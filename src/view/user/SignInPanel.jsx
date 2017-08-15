import React, { Component } from 'react';
import Panel from '../../compontent/user/Panel.js';
import SignIn from '../../compontent/user/signIn/SignIn';


class SignInPanel extends Component {
  render() {
    let { signInAjax } = this.props
    return (
      <Panel >
        <SignIn {...{ signInAjax }} />
      </Panel>
    );
  }
}

export default SignInPanel