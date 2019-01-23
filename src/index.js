import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CommentApp from './components/comment/CommentApp'
import './index.css'
import PropTypes from 'prop-types'

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]

class LikeButton extends Component {
  constructor () {
    super()
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton () {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render () {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? '取消' : '点赞'} 👍
      </button>
    )
  }
}

class User extends Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <div>姓名：{user.username}</div>
        <div>年龄：{user.age}</div>
        <div>性别：{user.gender}</div>
        <hr />
      </div>
    )
  }
}

class Title extends Component {
  static contextTypes = {
    themeColor: PropTypes.string
  }

  handleClickOnTitle () {
    console.log('Click on title.')
  }

  render () {
    return (
      <div>
        <h1 onClick={this.handleClickOnTitle}>React 小书</h1>
        <h2 style={{ color: this.context.themeColor }}>React.js 小书标题</h2>
      </div>
    )
  }
}

class Header extends Component {
  render () {
    return (
    <div>
      <Title />
      <h2 style={{color: 'red'}}>This is Header</h2>
    </div>
    )
  }
}

class Main extends Component {
  render () {
    return (
    <div>
      <h2>This is main content</h2>
      {/*<LikeButton />
      {users.map((user, i) => <User key={i} user={user} />)}*/}
    </div>
    )
  }
}

class Footer extends Component {
  render () {
    return (
    <div>
      <h2>This is footer</h2>
    </div>
    )
  }
}

class Card extends Component {
  render () {
    console.log(this.props.children)
    return (
      <div className='card'>
        <div className='card-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

class Index extends Component {
  static childContextTypes = {
    themeColor: PropTypes.string
  }

  constructor () {
    super()
    this.state = { themeColor: 'red' }
  }

  getChildContext () {
    return { themeColor: this.state.themeColor }
  }
  render () {
    return (
      <div>
        <Header />
        <Main />
        <Card>
          <h2>React.js 小书</h2>
          <div>开源、免费、专业、简单</div>
          订阅：<input />
        </Card>
        <CommentApp />
        <Footer />
      </div>
    )
  }
}


ReactDOM.render(
  <Index />,
  document.getElementById('root')
)