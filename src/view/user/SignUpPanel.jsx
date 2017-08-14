import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from '../../compontent/user/Panel.js';
import SignUp from '../../compontent/user/signup/SignUp';

class SignUpPanel extends Component {
  static propTypes = {
    SignUpAjax: PropTypes.func
  }
  render() {
    let { SignUpAjax } = this.props
    return (
      <Panel >
        <SignUp {...{ SignUpAjax }} />
      </Panel>
    );
  }
}

export default SignUpPanel