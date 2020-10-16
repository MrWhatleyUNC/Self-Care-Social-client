import React, { Component } from 'react'
import TokenServices from '../../services/token-services'
import PostContext from '../../context/PostContext'
import PostServices from '../../services/post-api-service'

export default class NewCommentForm extends Component {
    static defaultProps = {
        match: { params:{} },
    }

    static contextType = PostContext

    state = { error: null }

    handleSubmit = (e) => {
        e.preventDefault()
        if(TokenServices.hasAuthToken()){
            const  postId = this.props.postId
            const {new_comment} = e.target
            PostServices.postComment(postId, new_comment.value)
                .then(this.context.addComment)
                .then(()=> {
                    new_comment.value= ''
                })
                .catch(this.context.setError)
        }
    }

    render(){
        const { error } = this.state
        return(
            <form
                className='new-post-form'
                onSubmit={this.handleSubmit}>
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                <fieldset>
                    <legend>New Comment</legend>
                    <label htmlFor="new_comment"/>
                    <textarea 
                        id='new_comment' 
                        name= 'new_comment'
                        rows='5'
                        columns='50'/>
                </fieldset>
                <div>
                    <input type="submit" value="Add Comment"/>
                </div>
            </form>
        )
    }
}