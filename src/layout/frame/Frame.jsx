import React, { Component } from 'react';
<<<<<<< HEAD
import { Route } from 'react-router-dom';
import Axios from 'axios'

import FrameStyle from './Frame.scss';


import Nav from '../nav/Nav'
// import Panel from '../../compontent/user/Panel.js'
=======
import { Route, Redirect } from 'react-router-dom';
import Axios from 'axios'
import Qs from 'qs'
import FrameStyle from './Frame.scss';

import Nav from '../nav/Nav'
>>>>>>> e281ddf2bed37f7a22bababfd8f36d57697b0076
import Write from '../../compontent/write/Write'
import Home from '../../view/home/Home'
import SignInPanel from '../../view/user/SignInPanel';
import SignUpPanel from '../../view/user/SignUpPanel';
<<<<<<< HEAD
=======
import MyPage from '../../view/user/MyPage';
>>>>>>> e281ddf2bed37f7a22bababfd8f36d57697b0076


class Frame extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.SignUpAjax = this.SignUpAjax.bind(this)
  }
  /**
   * 注册方法：使用与SignUp组件
   * 
   * @param {any} reqData 请求参数
   * @memberof Frame
   */
  SignUpAjax(reqData) {
    Axios.post('http://api.noods.me/register', {
      reqData
    }).then((res) => {
      if (res.data.msg === "注册成功") {

      }
    })
  }
  render() {
    let { SignUpAjax } = this
    return (
      <div className={FrameStyle.layout}>
        <Nav></Nav>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/sign_in" component={SignInPanel}></Route>
        <Route exact path="/sign_up" render={
          (props) => (
            <SignUpPanel {...{ SignUpAjax }} />
          )
        }></Route>
=======
    this.state = {
      signUpMsg: null,
      signInMsg: null,
      // 用户个人数据
      myInfo: null,
      // Aside.js 我的文集
      notebooks: [],
      // 个人详情页的文集[文章]
      myPagePreviews: [],
      // 个人详情页的文集名称
      previewsName: '所有文章'
    }

    this.signInAjax = this.signInAjax.bind(this)
    this.SignUpAjax = this.SignUpAjax.bind(this)
    this.initMyInfo = this.initMyInfo.bind(this)
    this.initMyPage = this.initMyPage.bind(this)
    this.getPreview = this.getPreview.bind(this)
    this.logOut = this.logOut.bind(this)
    this.changePreviews = this.changePreviews.bind(this)
    this.updateUserIntro = this.updateUserIntro.bind(this)
  }

  /**
   * =======================================公共方法=====================================
   */
  // 初始化个人信息
  initMyInfo(myInfo) {
    console.log("initMyInfo");
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
  // 获取个人所有文章信息
  getPreview(data, previewsName) {
    Axios.post(`http://api.noods.me/getPreview`, Qs.stringify(data)).then((res) => {
      let { code, data } = res.data
      if (code === 0) {
        this.setState({
          myPagePreviews: data,
          previewsName
        });
      }
    });
  }

  /**
   * ====================================== 菜单Nav组件用============================================
   */
  //  注册方法：使用与SignUp组件
  SignUpAjax(reqData) {
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
  // 登录
  signInAjax(reqData) {
    console.log(reqData.username);
    console.log(reqData.password);
    Axios.post('http://api.noods.me/login', Qs.stringify({
      username: reqData.username,
      passw: reqData.password
    })).then((res) => {
      let { code, data, msg } = res.data
      this.setState({ signInMsg: res })
      if (code === 0) {
        setTimeout(() => {
          this.initMyInfo(data)
        })
      }
    })
  }
  // 注销
  logOut() {
    console.log("logOut");
    Axios.post(`http://api.noods.me/logout`).then((res) => {
      let { code } = res.data
      if (code === 0) {
        console.log(this);
        this.initMyInfo(null);
      }
    });
  }

  /**
   * ===================================Aside.js用==========================================
   */
  /**
   * 改变个人详情页查看
   * 
   * @param {any} data 文集ID
   * @param {any} previewsName 文集名称
   * @memberof Frame
   */
  changePreviews(data, previewsName) {
    this.getPreview(data, previewsName);
  }
  updateUserIntro(intro) {
    let { myInfo } = this.state;
    myInfo.user_intro = intro;
    this.setState({ myInfo });
  }
  // 获取“我的文集”
  initMyPage(user_id, previewsData, previewsName) {
    this.getPreview(previewsData, previewsName);
    Axios.post(`http://api.noods.me/getCollection`, Qs.stringify({
      user_id
    })).then((res) => {
      console.log(res);
      let { code, data } = res.data
      if (code === 0) {
        this.setState({
          notebooks: data
        });
      }
    });
  }
  render() {
    let { SignUpAjax, initMyPage, logOut, signInAjax, changePreviews, updateUserIntro } = this
    let { myInfo, previewsName, myPagePreviews, notebooks } = this.state
    let { history } = this.props;
    return (
      <div className={FrameStyle.layout}>
        <Nav {...{ myInfo, logOut, initMyPage, history }}></Nav>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/sign_in"
          render={
            (props) => (myInfo ? <Redirect to="/" /> : <SignInPanel {...{ signInAjax }} />)
          }
        ></Route>
        <Route exact path="/sign_up" render={
          (props) => (myInfo ? <Redirect to="/" /> : <SignUpPanel {...{ SignUpAjax }} />)
        }></Route>
        <Route exact path="/my_page" render={
          (props) => (this.props.location.state ?
            <MyPage {...{
              myPagePreviews,
              previewsName,
              notebooks,
              changePreviews,
              initMyPage,
              myInfo,
              updateUserIntro
            }} {...this.props} /> : <Redirect to="/" />)
        }
        ></Route>
>>>>>>> e281ddf2bed37f7a22bababfd8f36d57697b0076
        <Route exact path="/write" component={Write}></Route>
      </div >
    );
  }
}

//   <Write></Write>
export default Frame;
