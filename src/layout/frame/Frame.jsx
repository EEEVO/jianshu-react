import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Axios from 'axios'
import Qs from 'qs'
import FrameStyle from './Frame.scss';


import Nav from '../nav/Nav'
// import Panel from '../../compontent/user/Panel.js'
import Write from '../../compontent/write/Write'
import Home from '../../view/home/Home'
import SignInPanel from '../../view/user/SignInPanel';
import SignUpPanel from '../../view/user/SignUpPanel';
import MyPage from '../../view/user/MyPage';


class Frame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpMsg: null,
      // 用户个人数据
      myInfo: null,
      // 个人详情页所用
      notebooks: [],
      myPagePreviews: [],
      previewsName: '所有文章'
    }
    this.SignUpAjax = this.SignUpAjax.bind(this)
    this.initMyInfo = this.initMyInfo.bind(this)
    this.initMyPage = this.initMyPage.bind(this)
    this.getPreview = this.getPreview.bind(this)
  }
  /**
   * 注销
   * 
   * @memberof Frame
   */
  logOut() {
    Axios.post(`http://api.noods.me/logout`).then(({ code }) => {
      if (code === 0) {
        this.initMyInfo(null);
      }
    });
  }
  // previewName 就是用户页头像下显示的那几个字
  initMyPage(user_id, previewsData, previewsName) {
    this.getPreview(previewsData, previewsName);
    Axios.post(`http://api.noods.me/getCollection`, {
      user_id
    }).then(({ code, data }) => {
      if (code === 0) {
        this.setState({
          notebooks: data
        });
      }
    });
  }
  getPreview(data, previewsName) {
    Axios.post(`http://api.noods.me/getPreview`, {
      data
    }).then(({ code, data }) => {
      if (code === 0) {
        this.setState({
          myPagePreviews: data,
          previewsName
        });
      }
    });
  }
  /**
   * 初始化个人信息
   * 
   * @param {any} myInfo 
   * @memberof Frame
   */
  initMyInfo(myInfo) {
    if (myInfo) {
      let { id, avatar, username, user_intro } = myInfo
      avatar = `http://api.noods.me${avatar}`
      myInfo = {
        user_id: id,
        avatar,
        user_name: username,
        user_intro
      };
    }
    this.setState({ myInfo })
  }
  /**
   * 注册方法：使用与SignUp组件
   * 
   * @param {any} reqData 请求参数
   * @memberof Frame
   */
  SignUpAjax(reqData) {
    // Axios({
    //   method: 'post',
    //   url: 'http://api.noods.me/register',
    //   headers: {
    //     "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8'
    //   },
    //   data: {
    //     username: reqData.username,
    //     passw: reqData.password,
    //     cfPassw: reqData.twopassword
    //   }
    // }).then((res) => {
    //   let { code, data, msg } = res.data
    //   this.setState({ signUpMsg: res })
    //   if (code === 0) {
    //     setTimeout(() => {
    //       this.initMyInfo(data)
    //     })
    //   }
    // })
    /**
     * 下部分是以json格式提交，返回的数据有问题
     */
    Axios.post('http://api.noods.me/register', Qs.stringify({
      username: reqData.username,
      passw: reqData.password,
      cfPassw: reqData.twopassword
    })).then((res) => {
      let { code, data, msg } = res.data
      this.setState({ signUpMsg: res })
      if (code === 0) {
        setTimeout(() => {
          this.initMyInfo(data)
        })
      }
    })
  }
  render() {
    let { SignUpAjax, initMyPage, logOut } = this
    let { myInfo, previewsName } = this.state
    let { history } = this.props;
    return (
      <div className={FrameStyle.layout}>
        <Nav {...{ myInfo, logOut, initMyPage, history }}></Nav>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/sign_in"
          render={
            (props) => (myInfo ? <Redirect to="/" /> : <SignInPanel />)
          }
        ></Route>
        <Route exact path="/sign_up" render={
          (props) => (myInfo ? <Redirect to="/" /> : <SignUpPanel {...{ SignUpAjax }} />)
        }></Route>
        <Route exact path="/my_page" render={
          (props) => (this.props.location.state ?
            <MyPage {...{ previewsName, initMyPage, myInfo }} {...this.props} /> : <Redirect to="/" />)
        }
        ></Route>
        <Route exact path="/write" component={Write}></Route>
      </div >
    );
  }
}

//   <Write></Write>
export default Frame;
