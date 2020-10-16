import React, { Component } from 'react'

const CommentListContext = React.createContext({
    commentList: [],
    error: null,
    setError: () => { },
    clearError: () => { },
    setCommentList: () => { },
})
export default CommentListContext

export class CommentListProvider extends Component {
    state = {
        commentList: [],
        error: null,
    };

    setCommentList = commentList => {
        this.setState({ commentList })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render() {
        const value = {
            commentList: this.state.commentList,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setCommentList: this.setCommentList,
        }
        return (
            <CommentListContext.Provider value={value}>
                {this.props.children}
            </CommentListContext.Provider>
        )
    }
}