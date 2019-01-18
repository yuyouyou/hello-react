import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

// 分成几个模块
class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
  }

  handleSubmitComment (comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}

// 不分成几个模块
class Review extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      content: '',
      comments: []
    }
  }
  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
  }
  handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }
  handleSubmit () {
      const { username, content } = this.state
      this.state.comments.push({username, content})
      console.log(this.state.comments)
      this.setState({ username: '' })
      this.setState({ content: '' })
  }
  render () {
    return (
    <div class="wrapper">
      <div class="comment-input">
        <div class="comment-field">
          <span class="comment-field-name">用户名：</span>
          <div class="comment-field-input">
            <input name="username" value={this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
          </div>
        </div>
        <div class="comment-field">
          <span class="comment-field-name">评论内容：</span>
          <div class="comment-field-input">
            <textarea name="content" value={this.state.content} onChange={this.handleContentChange.bind(this)}/>
          </div>
        </div>
        <div class="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
      <div>
        {this.state.comments.map((comment, i) =>
          <div class="comment">
            <div class="comment-user" key={i}><span>{comment.username}</span>：</div><p>{comment.content}</p>
          </div>
        )}
      </div>
    </div>
    )
  }
}

export default CommentApp