import React, { Component } from 'react';
import Panel from '../../compontent/user/Panel.js';
<<<<<<< HEAD
import SignIn from '../../compontent/user/signin/SignIn';
=======
import SignIn from '../../compontent/user/signIn/SignIn';
>>>>>>> e281ddf2bed37f7a22bababfd8f36d57697b0076


class SignInPanel extends Component {
  render() {
<<<<<<< HEAD
    return (
      <Panel >
        <SignIn />
=======
    let { signInAjax } = this.props
    return (
      <Panel >
        <SignIn {...{ signInAjax }} />
>>>>>>> e281ddf2bed37f7a22bababfd8f36d57697b0076
      </Panel>
    );
  }
}

export default SignInPanel