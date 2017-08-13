import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import S from './Recommend.scss'
import Author from './Author'

class Recommend extends Component {
  static propTypes = {
    data: PropTypes.array,
  }
  static defaultProps = {
    data: []
  }
  render() {
    // 获取作者列表数据 
    let {
      data
     } = this.props
    return (
      <div className={S.recommend}>
        <div className={S.title}>
          <span>作者列表</span>
        </div>
        <div className="ui items">
          {
            data.map((item, index) => {
              return (
                <Author {...{ user: item }} key={index} />);
            })
          }
        </div>
      </div>
    )
  }
}

export default Recommend
