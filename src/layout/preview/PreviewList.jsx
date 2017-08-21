import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PreviewListStyle from './style.scss';
import Preview from './Preview'

class PreviewList extends Component {
  static propTypes = {
    data: PropTypes.array,
  }
  static defaultProps = {
    data: []
  }
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    let {
      data,
      initMyPage,
      history,
      collectionClick //单机文集事件
    } = this.props

    let dom = data.map((item, index) => {
      let {
        id: article_id, article_title, createdAt,
        preview: previewContent,
        collection_name,
        user_id,
        collection_id,
        user
        } = item;

      let { avatar, user_name, user_intro } = user;
      // 增加服务器地址
      avatar = "http://api.noods.me" + avatar;
      return (
        <Preview
          {...{
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
          }}
          key={index}
        >
          {collection_id ? (
            <Link to="" className={PreviewListStyle.tag}
              onClick={
                e => {
                  e.stopPropagation();
                  e.preventDefault();
                  collectionClick && collectionClick(
                    collection_id,
                    collection_name,
                    {
                      user_id,
                      user_name,
                      avatar,
                      user_intro
                    }
                  );
                }
              }>{collection_name}</Link>) : null}

        </Preview>
      );
    })
    return (
      <div>
        {dom}
      </div>
    )
  }
}


export default PreviewList
