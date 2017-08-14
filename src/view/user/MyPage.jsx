import React, { Component } from 'react';
import PreviewList from '../../layout/preview/PreviewList';
import AuthorInfo from '../../compontent/myPage/AuthorInfo';
import PropTypes from 'prop-types';

class MyPage extends Component {
  static propTypes = {
    userInfo: PropTypes.object,
    previewsName: PropTypes.string,
    initMyPage: PropTypes.func,
    location: PropTypes.object
  }
  render() {
    let { previewsName, initMyPage, location, myInfo } = this.props
    let { userInfo } = location.state

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
          {/* <PreviewList
            {...{
              previews: myPagePreviews,
              collectionClick,
              initMyPage
            }}
          /> */}
        </div>
        {/* 个人介绍 */}
        <div className="four wide column">
          {/* <Aside
            {...{
              notebooks,
              userInfo,
              notebookClick,
              isMe,
              updateUserIntro
            }} 
          />*/}
        </div>
      </div>
    )
  }
}

export default MyPage