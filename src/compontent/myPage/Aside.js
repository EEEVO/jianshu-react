import React, { Component } from 'react';
import S from './myPage.scss'
import Axios from 'axios'
import Qs from 'qs'

class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inEdit: false,
      editVal: ''
    }
    this.editDone = this.editDone.bind(this)
    this.editContent = this.editContent.bind(this)
    this.cancelEdit = this.cancelEdit.bind(this)
    this.editMe = this.editMe.bind(this)
  }
  //提交按钮
  editDone(e) {
    e.stopPropagation();
    e.preventDefault();
    let { editVal } = this.state;
    let { userInfo: { user_id }, updateUserIntro } = this.props;

    Axios.post(`http://api.noods.me/editIntro`, Qs.stringify({ user_intro: editVal, user_id }))
      .then((res) => {
        let { code } = res.data
        if (code === 0) {
          updateUserIntro(editVal);
          this.setState({ inEdit: false });
        }
      });
  }
  editContent(e) {
    this.setState({ editVal: e.target.value });
  }
  // 取消编辑年龄
  cancelEdit() {
    this.setState({ inEdit: false });
  }
  editMe(e) {
    e.stopPropagation();
    e.preventDefault();
    let { user_intro } = this.props.userInfo;
    this.setState({ inEdit: true, editVal: user_intro });
  }
  render() {
    let { inEdit, editVal } = this.state
    let { notebooks, userInfo, notebookClick, isMe, history } = this.props;
    let { editMe, editContent, cancelEdit, editDone } = this;
    // 遍历我的文集遍历，拼接dom
    let notebooksDOM = notebooks.map((item, index) => {
      let { id: collection_id, collection_name } = item
      return (
        <div className="item" key={index} onClick={e => { notebookClick(collection_id, collection_name); }}>
          <i className="book icon"></i>
          <div className="content">
            {collection_name}
          </div>
        </div>
      )
    })
    return (
      <div className={S.aside}>
        <div className="introduce">
          <div className="title">
            个人介绍
            {isMe ?
              (<div className="ui button tiny basic right floated" onClick={editMe}>
                <i className="icon write"></i>编辑
              </div>)
              : null
            }
            <div className="ui divider hidden"></div>
            {
              inEdit ? (
                <form action="" className="ui form" onSubmit={editDone}>
                  <div className="field">
                    <textarea value={editVal} onChange={editContent} ></textarea>
                  </div>
                  <button className="ui positive button" type="submit">提交</button>
                  <button className="ui negative button" type="submit" onClick={cancelEdit}>取消</button>
                </form>
              ) : (<p>{userInfo.user_intro}</p>)
            }
          </div>
        </div>
        <div className="ui divider hidden"></div>
        <div className={S.volume}>
          <div className={S.title}>
            我的文集
          </div>
          <div className="ui list">
            {notebooksDOM}
          </div>
        </div>
      </div>
    )
  }
}

// {notebooks}

export default Aside
