import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PreviewList from '../../layout/preview/PreviewList';
import AuthorInfo from '../../compontent/myPage/AuthorInfo';
import Aside from '../../compontent/myPage/Aside.js';

class MyPage extends Component {
  static propTypes = {
    userInfo: PropTypes.object,
    previewsName: PropTypes.string,
    initMyPage: PropTypes.func,
    location: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.collectionClick = this.collectionClick.bind(this)
    this.notebookClick = this.notebookClick.bind(this)
  }
  collectionClick(collection_id, collection_name) {
    this.props.changePreviews({ collection_id }, collection_name);
  }

  notebookClick(collection_id, collection_name) {
    this.collectionClick(collection_id, collection_name);
  }
  render() {
    let { previewsName, initMyPage, location, myInfo, myPagePreviews, notebooks, updateUserIntro } = this.props
    let { userInfo } = location.state
    let { collectionClick, notebookClick } = this;
    let isMe = false;
    if (myInfo) {
      isMe = myInfo.user_id === userInfo.user_id
      userInfo = myInfo
    }
    return (
      <div className="ui container grid">
        {/* 作品详情 */}
        <div className="twelve wide column">
          <AuthorInfo
            {...{
              userInfo,
              initMyPage
            }}
          />
          <div className="ui secondary pointing menu">
            <span className="active item">
              {previewsName}
            </span>
          </div>
          <PreviewList
            {...{
              data: myPagePreviews,
              collectionClick,
              initMyPage
            }}
          />
        </div>
        {/* 个人介绍 */}
        <div className="four wide column">
          <Aside
            {...{
              notebooks,
              userInfo,
              notebookClick,
              isMe,
              updateUserIntro
            }}
          />
        </div>
      </div>
    )
  }
}

export default MyPage