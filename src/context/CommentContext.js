import React, { Component } from 'react'

export const nullComment = {
  post: {},
  text:''
}

const CommentContext = React.createContext({
  comment: nullComment,
  error: null,
  setError: () => {},
  clearError: () => { },
  setComment: () => {},
  clearComment: () => {},
  setComments: () => {},
  addComment: () => {},
})
 
export default CommentContext

export class CommentProvider extends Component {
  state = {
    comment: nullComment,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setPost = post => {
    this.setState({ post })
  }

  setComments = comments => {
    this.setState({ comments })
  }

  clearComment = () => {
    this.setComment(nullComment)
    this.setComments([])
  }

  addComment = comment => {
    this.setComments([
      ...this.state.comments,
      comment
    ])
  }

  render() {
    const value = {
      post: this.state.comment.post,
      comment: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPost: this.setPost,
      setComments: this.setComments,
      clearComment: this.clearComment,
      addComment: this.addComment,
    }
    return (
      <CommentContext.Provider value={value}>
        {this.props.children}
      </CommentContext.Provider>
    )
  }
}
