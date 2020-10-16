import React, { Component } from 'react'
import PostServices from '../../services/post-api-service'
import TokenServices from '../../services/token-services'
import PostListContext from '../../context/PostListContext'
import PostListItem from '../Posts/PostListItem'
import './PostList.css';

export default class PostList extends Component {
    static defaultProps = {
        match: { params: {} },
    }

    static contextType = PostListContext

    whichPostlist(userId){
        if(!userId){
            PostServices.getPosts()
                .then(this.context.setPostList)
                .catch(this.context.setError)
        }
        else{
            PostServices.getPostsByUser(userId)
                .then(this.context.setPostList)
                .catch(this.context.setError)
        }
    }
    componentDidMount() {
        const userId = this.props.user
        console.log('userId on mount:',userId)
        this.context.clearError()
        this.whichPostlist(userId)
    }

    deletePost = (post)  =>{
        const userId = parseInt(TokenServices.getUserId())
        this.context.clearError()
        console.log('post author:',post.author.id)
        console.log('props when deleting post:', this.props)
        if(post.author.id === userId){
            console.log('post object to be deleted:',post)
            PostServices.deletePost(post.id)
                .then(this.whichPostlist(userId))
                .catch(this.context.setError)
        }
        else{
            alert('You can only delete your own posts.')
        }
    }

    renderListItems = () => {
        const { postList = [] } = this.context
        return postList.map(post => 
            <PostListItem
                key={post.id}
                post={post}
                deletePost={this.deletePost}
            />
        )
    }

    render() {
        console.log('postlist props on render:', this.props)
        console.log('postlist context on render:', this.context)
        const { error } = this.context
        return (
            <ul>
                {error
                    ? <p className='red'>There was an error, try again</p>
                    : this.renderListItems()}
            </ul>
        )
    }
}