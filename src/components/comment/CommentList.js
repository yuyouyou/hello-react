import React, { Component, Fragment } from 'react'
import Comment from './Comment'

class CommentList extends Component {

  static defaultProps = {
    comments: []
  }

  handleDeleteComment (index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }

  render() {
    return (
      <Fragment>
        {this.props.comments.map((comment, i) =>
          <Comment
          comment={comment}
          key={i}
          index={i}
          onDeleteComment={this.handleDeleteComment.bind(this)}/>
        )}
      </Fragment>
    )
  }
}

export default CommentList