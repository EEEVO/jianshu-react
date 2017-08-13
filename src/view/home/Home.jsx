import React, { Component } from 'react';
import Recommend from '../../compontent/home/Recommend'
import PreviewList from '../../layout/preview/PreviewList'
// import Ajax from '../../common/ajax.js'
import Axios from 'axios'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewList: [],
      recommend: []
    }
    this.getPreview = this.getPreview.bind(this);
    this.getAuthor = this.getAuthor.bind(this);
  }
  componentDidMount() {
    console.log("发起Preview请求");
    this.getPreview()
    this.getAuthor()
  }
  /**
   * 请求文章数据
   * 
   * @memberof Home
   */
  getPreview() {
    Axios.post('http://api.noods.me/getPreview')
      .then((res) => {
        this.setState({
          previewList: res.data
        })
      })
  }
  /**
   * 获取作者数据
   * 
   * @memberof Home
   */
  getAuthor() {
    Axios.post('http://api.noods.me/getAuthor')
      .then((res) => {
        this.setState({
          recommend: res.data
        })
      })
  }
  render() {
    return (
      <div className="ui container grid">
        <div className="column twelve wide">
          <PreviewList {
            ...this.state.previewList
          } />
        </div>
        <div className="column four wide">
          <Recommend {
            ...this.state.recommend
          } />
        </div>
      </div>
    )
  }
}

export default Home