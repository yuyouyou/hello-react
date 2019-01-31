import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 引入组件
import Home from './components/Home'
import Plan from './components/Plan'
import Detail from './components/Detail'
import TestRouter from './components/Testrouter'
import CommentApp from './components/comment/CommentApp'

import './index.css'
import './components/comment.css'
import PropTypes from 'prop-types'

// 引入路由
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

// 路由栗子-开始代码
class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
          <div className="App-header">
            <h2 className='App-title' style={{color: 'red'}}>Welcome to React Plan</h2>
          </div>
          <div>
            {/*// 路由配置*/}
            <Router history = {history}>
               <div className="contentBox">
                  {/*// 编写导航*/}
                  <ul className="nav">
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/plan">计划表</Link></li>
                    <li><Link to="/commentApp">评论功能</Link></li>
                    <li><Link to="/test">二级路由</Link></li>
                    <li><Link to="/detail/1">详情页</Link></li>
                  </ul>
                  {/*// 路由匹配*/}
                  <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/plan" component={Plan}/>
                    <Route path="/commentApp" component={CommentApp} />
                    <Route path="/test" component={TestRouter}/>
                    <Route path="/detail/:id" component={Detail}/>
                  </div>
              </div>
            </Router>
          </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)