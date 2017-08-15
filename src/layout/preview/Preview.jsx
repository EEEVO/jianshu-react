import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PreviewStyle from './style.scss';

class Preview extends Component {
  static propTypes = {
    article_id: PropTypes.number,
    article_title: PropTypes.string,
    previewContent: PropTypes.string,
    user_id: PropTypes.number,
    user_name: PropTypes.string,
    createdAt: PropTypes.string,
    avatar: PropTypes.string,
    user_intro: PropTypes.string
  }
<<<<<<< HEAD
=======
  constructor(props) {
    super(props);
    // this.updataPreview = this.updataPreview.bind(this)
  }
  // // 头像点击事件
  // updataPreview(e) {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   history.push('/my_page', {
  //     userInfo: {
  //       user_id,
  //       user_name,
  //       avatar,
  //       user_intro
  //     }
  //   });
  //   initMyPage(user_id, { user_id }, '所有文章');
  // }

>>>>>>> e281ddf2bed37f7a22bababfd8f36d57697b0076
  render() {
    let {
      article_id,
      article_title,
      previewContent,
      user_id,
      user_name,
      createdAt,
      avatar,
<<<<<<< HEAD
      user_intro
  } = this.props;

    createdAt = new Date(createdAt).toLocaleString();
=======
      user_intro,
      initMyPage,
      history
    } = this.props;
    let { updataPreview } = this
    createdAt = new Date(createdAt).toLocaleString();
    // createdAt = "今天"
>>>>>>> e281ddf2bed37f7a22bababfd8f36d57697b0076
    return (
      <div className={`${PreviewStyle.note}`}>
        <div className="ui divider hidden"></div>
        <div className={`${PreviewStyle.content}`}>
          <div className={`${PreviewStyle.author}`}>
<<<<<<< HEAD
            <Link to="/" className="avatar">
=======
            <Link to="/my_page" className="avatar"
              onClick={e => {
                e.stopPropagation();
                e.preventDefault();
                {/* TODO: */ }
                history.push('/my_page', {
                  userInfo: {
                    user_id,
                    user_name,
                    avatar,
                    user_intro
                  }
                });
                initMyPage(user_id, { user_id }, '所有文章');
              }}>
>>>>>>> e281ddf2bed37f7a22bababfd8f36d57697b0076
              <img src={avatar} alt="" className="ui avatar image" />
            </Link>
            <div className={`${PreviewStyle.name}`}>
              <Link to="/">{user_name}</Link>
              <span className="time">{createdAt}</span>
            </div>
          </div>
          <Link to="/" className={PreviewStyle.title}>{article_title}</Link>
          <p className={PreviewStyle.abstract}>
            {previewContent}
          </p>
          <div className={PreviewStyle.meta}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}


export default Preview