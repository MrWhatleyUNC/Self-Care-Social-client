import React, { Component } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import SideBar from '../../components/Sidebar/Sidebar'
import TokenServices from '../../services/token-services'
import NewCommentForm from '../../components/Comments/NewCommentForm'
import CommentListItem from '../../components/Comments/CommentListItem'
import PostServices from '../../services/post-api-service'
import PostContext from '../../context/PostContext'

export default class PostPage extends Component {
    static defaultProps = {
        match: { params: {} },
    }

    static contextType = PostContext

    handleLogoutClick = () => {
        TokenServices.clearAuthToken()
        TokenServices.clearUserId()
    }

    componentDidMount() {
        console.log('post page context:',this.context)
        const { postId } = this.props.match.params
        this.context.clearError()
        PostServices.getPost(postId)
            .then(this.context.setPost)
            .catch(this.context.setError)
        PostServices.getPostComments(postId)
            .then(this.context.setComments)
            .catch(this.context.setError)
    }

    deleteComment = (comment)=> {
        console.log('props when trying to delete comment:',this.props)
        const postId = this.props.match.params.postId
        const userId = parseInt(TokenServices.getUserId())
        this.context.clearError()
        if(comment.user.id === userId){
            PostServices.deleteComment(comment.id)
                .then(PostServices.getPostComments(postId)
                    .then(this.context.setComments)
                    .catch(this.context.setError)
                )
                .catch(this.context.setError)
        }
        else{
            alert('You can only delete your own comments')
        }
    }

    renderPost() {
        const post  = this.context.post
        return (
            <div className='post'>
                <p>{post.text}</p>
                <p>By:{post.author.username}</p>
                <p>On:{moment(post.date_created).format('lll')} </p>
            </div>
        )
    }

    renderPostComments =() => {
        const { comments = [] } = this.context
        return comments.map(comment =>
            <CommentListItem
                key={comment.id}
                comment={comment}
                deleteComment= {this.deleteComment}
            />
        )
    }

    render() {
        const { error } = this.context
        return (
            <div className='wrapper'>
                <SideBar />
                <div className='container'>
                    <Link
                        to='/homepage'
                    >
                        <button>Home</button>
                    </Link>
                    <Link
                        to={`/profile`}
                    >
                        <button>Profile</button>
                    </Link>
                    <Link
                        to='/'
                        onClick={this.handleLogoutClick}>
                        <button>Logout</button>
                    </Link>
                </div>
                    <h3>Post</h3>
                    {error
                        ? <p className='red'>There was an error, try again</p>
                        : this.renderPost()}
                <div className='comments'>
                    <h3>Comments</h3>
                    <ul>
                        {error
                            ? <p className='red'>There was an error, try again</p>
                            : this.renderPostComments()}
                    </ul>
                </div>
                <NewCommentForm
                    postId={this.props.match.params.postId}
                />
            </div>
        )
    }
}