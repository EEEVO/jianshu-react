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

  render() {
    let {
      article_id,
      article_title,
      previewContent,
      user_id,
      user_name,
      createdAt,
      avatar,
      user_intro,
      initMyPage,
      history
    } = this.props;
    let { updataPreview } = this
    createdAt = new Date(createdAt).toLocaleString();
    // createdAt = "今天"
    return (
      <div className={`${PreviewStyle.note}`}>
        <div className="ui divider hidden"></div>
        <div className={`${PreviewStyle.content}`}>
          <div className={`${PreviewStyle.author}`}>
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