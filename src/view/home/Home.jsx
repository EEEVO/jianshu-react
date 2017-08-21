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
    this.collectionClick = this.collectionClick.bind(this)
  }
  componentDidMount() {
    console.log("发起Preview请求");
    this.getPreview()
    this.getAuthor()
  }
  collectionClick(collection_id, collection_name, userInfo) {
    let { history, initMyPage } = this.props;
    history.push('/my_page', { userInfo });
    initMyPage(userInfo.user_id, { collection_id }, collection_name);
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
          previewList: res.data.data
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
    let { initMyPage, history } = this.props;
    let { previewList } = this.state;
    let { collectionClick } = this;
    return (
      <div className="ui container grid">
        <div className="column twelve wide">
          <PreviewList {...{
            data: previewList,
            history,
            initMyPage,
            collectionClick
          }} />
        </div>
        <div className="column four wide">
          <Recommend {...this.state.recommend} />
        </div>
      </div>
    )
  }
}

export default Home