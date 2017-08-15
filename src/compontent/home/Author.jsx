import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Author extends Component {
  static propTypes = {
    user: PropTypes.object
  }
  static defaultProps = {
    user: {}
  }
  render() {
    let { user_name, avatar } = this.props.user;
<<<<<<< HEAD
    avatar = "http://api.noods.me" + avatar;
=======
    avatar = `http://api.noods.me${avatar}`
>>>>>>> e281ddf2bed37f7a22bababfd8f36d57697b0076
    return (
      <div className="item">
        <Link to="/" className="ui mini avatar image">
          <img src={avatar} alt="" />
        </Link>
        <div className="content">
          <div className="header">
            {user_name}
          </div>
        </div>
      </div>

    )
  }
}

// Author.propTypes = {
//   user: PropTypes.object
// }
// Author.defaultProps = {
//   user: {}
// }

export default Author