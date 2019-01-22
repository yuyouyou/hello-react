import React, { Component } from 'react'

class CommentInput extends Component {
   constructor () {
    super()
    console.log('construct')
    this.state = {
      username: '',
      content: ''
    }
  }

  componentWillMount () {
    console.log('component will mount')
    // 本地持久化
    let lastUserName = localStorage.getItem('lastUserName');
    if (lastUserName) {
      this.setState({
        username: lastUserName
      })
    }
  }

  componentDidMount () {
    console.log('component did mount')
    this.textarea.focus()
  }

  componentWillUnmount() {
    console.log('component will unmount')
  }

  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
    localStorage.setItem('lastUserName', event.target.value)
  }

  handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit () {
    if (this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date()
      })
    }
    this.setState({ content: '' })
  }

  render () {
    console.log('render')
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
             <input
             value={this.state.username}
             onChange={this.handleUsernameChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea
            value={this.state.content}
            onChange={this.handleContentChange.bind(this)} ref={(textarea) => this.textarea = textarea}/>
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput