import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export default class CommentListItem extends Component {
    
    render(){
        const {comment, deleteComment} = this.props
        console.log('comment list props:', this.props)
        return (
                <li>
                    <p>{comment.text}</p>
                    <p>
                        By:<Link
                          to={`/profile/${comment.user.id}`}
                        >
                        {comment.user.username}
                        </Link> 
                    </p>
                    <p>On: {moment(comment.date_created).format('lll')}</p>
                    <button onClick={()=> deleteComment(comment)}>Delete</button>
                </li>
        )
    }
}