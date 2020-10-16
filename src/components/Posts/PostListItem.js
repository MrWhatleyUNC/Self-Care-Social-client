import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export default class PostListItem extends Component {

    render() {
        const { post, deletePost } = this.props
        console.log('postlist item props:', this.props)
        return (
            <li>
                <p>{post.text}</p>
                <p>
                    By:<Link
                        to={`/profile/${post.author.id}`}>
                    {post.author.username}
                    </Link>
                </p>
                <p>On:{moment(post.date_created).format('lll')} </p>
                <Link to={`/post/${post.id}`} className='PostListItem'>
                    View Comments
                </Link>
                <button onClick={()=> deletePost(post)}>Delete</button>
            </li>
        )
    }
}