import React, { Component } from 'react';
import Recommend from '../../compontent/home/Recommend'
import PreviewList from '../../layout/preview/PreviewList'
// import Ajax from '../../common/ajax.js'
import Axios from 'axios'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PreviewList: [],
      Recommend: []
    }
    this.getPreview = this.getPreview.bind(this);
  }
  componentDidMount() {
    console.log("发起Preview请求");
    this.getPreview()
  }
  getPreview() {
    Axios.post('http://api.noods.me/getPreview')
      .then((res) => {
        console.log(res.data);
        this.setState({
          PreviewList: res.data
        })
      })
  }
  render() {
    return (
      <div className="ui container grid">
        <div className="column twelve wide">
          <PreviewList />
        </div>
        <div className="column four wide">
          <Recommend />
        </div>
      </div>
    )
  }
}

export default Home