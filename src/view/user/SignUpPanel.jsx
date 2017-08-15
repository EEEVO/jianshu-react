import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from '../../compontent/user/Panel.js';
<<<<<<< HEAD
import SignUp from '../../compontent/user/signup/SignUp';
=======
import SignUp from '../../compontent/user/signUp/SignUp';
>>>>>>> e281ddf2bed37f7a22bababfd8f36d57697b0076

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