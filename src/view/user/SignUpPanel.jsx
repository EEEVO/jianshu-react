import React, { Component } from 'react';
import Panel from '../../compontent/user/Panel.js';
import SignUp from '../../compontent/user/signup/SignUp';


class SignUpPanel extends Component {
  render() {

    return (
      <Panel >
        <SignUp />
      </Panel>
    );
  }
}

export default SignUpPanel